import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, allergies, shuttle, notes, timestamp } = body;

    // Validate required fields
    if (!name || !shuttle) {
      return NextResponse.json(
        { error: 'Nome e servizio navetta sono obbligatori' },
        { status: 400 }
      );
    }

    // Initialize auth with service account
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID as string,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Use the first sheet

    // Add a row with the form data
    await sheet.addRow({
      Timestamp: timestamp,
      Nome: name,
      Intolleranze: allergies || 'Nessuna',
      Navetta: shuttle === 'yes' ? 'Sì' : 'No',
      Note: notes || '',
    });

    return NextResponse.json(
      { message: 'RSVP ricevuto con successo!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Errore durante il salvataggio della risposta' },
      { status: 500 }
    );
  }
}
