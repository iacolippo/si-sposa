// Shared Cloudinary config for the guest photo gallery.
// Uploads go straight from the browser to Cloudinary (unsigned preset);
// this module is only for building URLs and for the server-side listing route.

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
export const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';

// Tag applied to every guest upload (set as a default tag on the preset too),
// used to filter the gallery listing so we only ever show wedding photos.
export const GALLERY_TAG = 'guest-upload';

// Cloudinary delivery URL with on-the-fly resizing, so the gallery grid never
// downloads full-resolution originals just to show a thumbnail.
export function thumbUrl(publicId: string, width = 500) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_${width},q_auto,f_auto/${publicId}`;
}

export function fullUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${publicId}`;
}
