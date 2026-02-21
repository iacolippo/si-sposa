# Setup Guide - Sito Matrimonio Ines & Iacopo

## 🎉 Benvenuti!

Questo è il sito web per il vostro matrimonio, con tutte le funzionalità richieste:
- ✅ Informazioni sul matrimonio
- ✅ Formulario RSVP con Google Sheets
- ✅ Dettagli viaggio di nozze
- ✅ IBAN per contributi
- ✅ Consigli per la domenica a Trieste
- ✅ Contatti

## 🚀 Setup Iniziale

### 1. Installazione Dipendenze

Le dipendenze sono già installate, ma se necessario:

```bash
npm install
```

### 2. Configurazione Google Sheets

Per ricevere le risposte RSVP in un Google Sheet, segui questi passi:

#### A. Crea un Google Sheet

1. Vai su [Google Sheets](https://sheets.google.com)
2. Crea un nuovo foglio di calcolo
3. Rinominalo "RSVP Matrimonio Ines & Iacopo"
4. Aggiungi questi header nella prima riga:
   - `Timestamp`
   - `Nome`
   - `Intolleranze`
   - `Navetta`
   - `Note`
5. Copia l'ID del foglio dall'URL (la parte tra `/d/` e `/edit`):
   - URL: `https://docs.google.com/spreadsheets/d/ABC123XYZ/edit`
   - ID: `ABC123XYZ`

#### B. Crea un Service Account Google

1. Vai su [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuovo progetto (es: "wedding-website")
3. Abilita la Google Sheets API:
   - Vai su "APIs & Services" > "Library"
   - Cerca "Google Sheets API"
   - Clicca "Enable"
4. Crea un Service Account:
   - Vai su "APIs & Services" > "Credentials"
   - Clicca "Create Credentials" > "Service Account"
   - Nome: "wedding-rsvp"
   - Clicca "Create and Continue"
   - Ruolo: "Editor"
   - Clicca "Done"
5. Crea una chiave privata:
   - Clicca sul service account appena creato
   - Vai su "Keys" > "Add Key" > "Create New Key"
   - Scegli "JSON"
   - Scarica il file JSON

#### C. Configura il progetto

1. Apri il file JSON scaricato
2. Copia i valori nel file `.env.local`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: copia il valore di `client_email`
   - `GOOGLE_PRIVATE_KEY`: copia il valore di `private_key` (mantieni i `\n`)
   - `GOOGLE_SHEET_ID`: l'ID del foglio copiato prima

3. Condividi il Google Sheet con il service account:
   - Apri il tuo Google Sheet
   - Clicca "Share"
   - Incolla l'email del service account (`GOOGLE_SERVICE_ACCOUNT_EMAIL`)
   - Dai permessi "Editor"
   - Clicca "Send"

### 3. Personalizzazione Contenuti

Modifica questi file per personalizzare il sito:

#### `app/page.tsx`
- **Sezione "Chi Siamo"**: Scrivi la vostra storia (righe 38-47)
- **Email contatti**: Sostituisci `ines@example.com`, `iacopo@example.com` e `stefano.pilotto@example.com` con le email reali (righe 182-199)

#### IBAN Bonifico
- Sostituisci il placeholder `IT00X0000000000000000000000` con il vostro IBAN Revolut (riga 132 in `app/page.tsx`)

## 🎨 Palette Colori

I colori sono già configurati in `app/globals.css`:
- **Bordeaux**: `#712231`
- **Crema**: `#EBE3D8`
- **Bianco**: `#F8F8F8`
- **Argento**: `#C0C0C0`

## 🧪 Test in Locale

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

Testa il formulario RSVP e verifica che i dati arrivino nel Google Sheet.

## 📦 Deploy su Vercel

### 1. Push su GitHub

```bash
git add .
git commit -m "Wedding website setup"
git remote add origin https://github.com/USERNAME/wedding-website.git
git push -u origin main
```

### 2. Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Importa il repository GitHub
4. Aggiungi le variabili d'ambiente:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
5. Clicca "Deploy"

### 3. Dominio Personalizzato

1. Nel dashboard Vercel, vai su "Settings" > "Domains"
2. Aggiungi il tuo dominio (es: `ineseiacopo.it`)
3. Segui le istruzioni per configurare il DNS

Vercel supporta domini da vari provider (Google Domains, Namecheap, GoDaddy, etc.)

## 📱 Funzionalità del Sito

### Home
- Hero section con nomi e data
- Navigazione sticky con smooth scroll

### Chi Siamo
- Sezione "about us" personalizzabile

### Il Matrimonio
- Dettagli cerimonia (Chiesa di San Bartolomeo, Barcola)
- Dettagli ricevimento (Castello di Spessa, Capriva del Friuli)
- Orari e indirizzi

### RSVP
- Form con validazione
- Campi: nome, intolleranze, navetta, note
- Deadline: 30 giugno 2026
- Salvataggio automatico su Google Sheets

### Viaggio di Nozze
- Destinazione: Messico - Yucatán
- IBAN per contributi

### Domenica a Trieste
- Citazione dialettale triestina
- Consigli su cosa fare a Trieste

### Contatti
- Email sposi
- Email wedding planner (Stefano Pilotto)

## 🔧 Troubleshooting

### Il form RSVP non funziona
- Verifica che tutte le variabili d'ambiente siano configurate
- Controlla che il service account abbia accesso al Google Sheet
- Verifica i log di Vercel o della console

### Errori di build
- Assicurati che Node.js sia aggiornato (v18+)
- Esegui `npm install` per reinstallare le dipendenze

## 📞 Supporto

Per domande o problemi, contattami!

---

**Fatto con ❤️ per Ines & Iacopo**
