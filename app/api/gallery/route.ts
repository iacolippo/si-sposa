import { NextResponse } from 'next/server';
import { GALLERY_TAG } from '@/app/lib/cloudinary';

// Always fetch a fresh list — the gallery is meant to update live during the event.
export const dynamic = 'force-dynamic';

export async function GET() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Cloudinary non configurato' },
      { status: 500 }
    );
  }

  try {
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expression: `tags=${GALLERY_TAG}`,
          sort_by: [{ created_at: 'desc' }],
          max_results: 200,
        }),
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('Cloudinary search failed:', res.status, text);
      return NextResponse.json(
        { error: 'Errore nel recupero delle foto' },
        { status: 502 }
      );
    }

    const data = await res.json();
    const images = (data.resources || []).map((r: { public_id: string; created_at: string; width: number; height: number }) => ({
      publicId: r.public_id,
      createdAt: r.created_at,
      width: r.width,
      height: r.height,
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Errore nel recupero delle foto' },
      { status: 500 }
    );
  }
}
