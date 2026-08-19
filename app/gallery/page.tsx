'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
  GALLERY_TAG,
  fullUrl,
  thumbUrl,
} from '../lib/cloudinary';

type Lang = 'it' | 'fr';

const translations = {
  it: {
    back: '← Torna al sito',
    title: 'La Nostra Galleria',
    subtitle: 'Avete scattato delle foto al matrimonio? Caricatele qui, appariranno subito nella galleria per tutti!',
    upload: '📷 Carica le tue foto',
    uploading: 'Caricamento in corso…',
    refresh: 'Aggiorna',
    empty: 'Ancora nessuna foto. Siate i primi a caricarne una! 💛',
    loading: 'Caricamento della galleria…',
    tooBig: (name: string) => `"${name}" supera 15MB e non è stato caricato.`,
    notImage: (name: string) => `"${name}" non è un'immagine e non è stato caricato.`,
    genericError: (name: string) => `Errore caricando "${name}".`,
    notConfigured: 'La galleria non è ancora configurata.',
  },
  fr: {
    back: '← Retour au site',
    title: 'Notre Galerie',
    subtitle: "Vous avez pris des photos du mariage ? Ajoutez-les ici, elles apparaîtront aussitôt pour tout le monde !",
    upload: '📷 Ajouter vos photos',
    uploading: 'Téléversement en cours…',
    refresh: 'Actualiser',
    empty: "Pas encore de photo. Soyez les premiers à en ajouter une ! 💛",
    loading: 'Chargement de la galerie…',
    tooBig: (name: string) => `"${name}" dépasse 15 Mo et n'a pas été envoyée.`,
    notImage: (name: string) => `"${name}" n'est pas une image et n'a pas été envoyée.`,
    genericError: (name: string) => `Erreur lors de l'envoi de "${name}".`,
    notConfigured: "La galerie n'est pas encore configurée.",
  },
};

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB — mirrors the Cloudinary upload preset limit

type GalleryImage = {
  publicId: string;
  createdAt: string;
  width: number;
  height: number;
};

export default function GalleryPage() {
  const [lang, setLang] = useState<Lang>('it');
  const tx = translations[lang];

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const configured = Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET);

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch('/api/gallery', { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      setImages(data.images || []);
    } catch {
      // silent — keep showing whatever we already have
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGallery();
    // Light polling so the gallery feels live during the event without a manual refresh.
    const interval = setInterval(fetchGallery, 15000);
    return () => clearInterval(interval);
  }, [fetchGallery]);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const files = Array.from(fileList);
    setErrors([]);
    setUploading(true);

    const failures: string[] = [];

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        failures.push(tx.notImage(file.name));
        continue;
      }
      if (file.size > MAX_FILE_SIZE) {
        failures.push(tx.tooBig(file.name));
        continue;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      formData.append('tags', GALLERY_TAG);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: 'POST', body: formData }
        );
        if (!res.ok) failures.push(tx.genericError(file.name));
      } catch {
        failures.push(tx.genericError(file.name));
      }
    }

    setErrors(failures);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    fetchGallery();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-crema/50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="/" className="text-bordeaux/70 hover:text-bordeaux transition-colors text-xs md:text-sm font-medium tracking-wide uppercase">
            {tx.back}
          </Link>
        </div>
      </nav>

      <button
        onClick={() => setLang(lang === 'it' ? 'fr' : 'it')}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 bg-white/95 backdrop-blur-md hover:bg-white border border-bordeaux/20 rounded-full px-3 py-2 shadow-lg transition-all"
        aria-label="Cambia lingua"
      >
        <span className={`text-base leading-none transition-all duration-200 ${lang === 'it' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}>🇮🇹</span>
        <span className="relative w-7 h-3.5 rounded-full bg-bordeaux/20 shrink-0">
          <span className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-bordeaux transition-all duration-200 ${lang === 'it' ? 'left-0.5' : 'left-4'}`} />
        </span>
        <span className={`text-base leading-none transition-all duration-200 ${lang === 'fr' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}>🇫🇷</span>
      </button>

      <section className="pt-24 pb-12 bg-gradient-to-br from-crema via-white to-crema">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-script text-bordeaux mb-4">{tx.title}</h1>
          <div className="w-12 h-px bg-bordeaux/30 mx-auto mb-5"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">{tx.subtitle}</p>

          {configured ? (
            <div className="mt-8">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                capture="environment"
                className="hidden"
                id="gallery-upload-input"
                onChange={(e) => handleFiles(e.target.files)}
                disabled={uploading}
              />
              <label
                htmlFor="gallery-upload-input"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bordeaux text-white text-sm font-medium tracking-wide uppercase shadow-md hover:bg-bordeaux/90 transition-colors cursor-pointer ${uploading ? 'opacity-60 pointer-events-none' : ''}`}
              >
                {uploading ? tx.uploading : tx.upload}
              </label>

              {errors.length > 0 && (
                <div className="mt-4 max-w-md mx-auto text-left space-y-1">
                  {errors.map((err, i) => (
                    <p key={i} className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-sm px-3 py-2">{err}</p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="mt-8 text-sm text-gray-500 italic">{tx.notConfigured}</p>
          )}
        </div>
      </section>

      <section className="py-10 bg-white flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto px-4 w-full flex-1 flex flex-col justify-center">
          {loading ? (
            <p className="text-center text-sm text-gray-500">{tx.loading}</p>
          ) : images.length === 0 ? (
            <p className="text-center text-sm text-gray-500">{tx.empty}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {images.map((img) => (
                <a
                  key={img.publicId}
                  href={fullUrl(img.publicId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-square overflow-hidden rounded-sm border border-crema/60 bg-crema/20 group"
                >
                  <img
                    src={thumbUrl(img.publicId, 500)}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          <p className="text-xs text-gray-400">© 2026 Ines & Iacopo</p>
        </div>
      </footer>
    </div>
  );
}
