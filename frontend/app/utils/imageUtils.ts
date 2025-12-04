import { API_HOST } from './config'

/**
 * Normalizes image URLs from the backend
 * If the image is a relative path (starts with /uploads), prepends the backend URL
 * If it's already a full URL, returns it as is
 */
export function getImageUrl(image: string | null | undefined): string {
  if (!image || image.trim() === '') {
    // Return a placeholder or default image
    return '/bg12.png';
  }

  // If it's already a full URL (starts with http:// or https://), return as is
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }

  // If it's a relative path starting with /uploads, prepend backend URL
  if (image.startsWith('/uploads/')) {
    return `${API_HOST}${image}`;
  }

  // If it's a relative path starting with /, assume it's a local asset
  if (image.startsWith('/')) {
    return image;
  }

  // Otherwise, treat as relative path from backend
  return `${API_HOST}/${image}`;
}

