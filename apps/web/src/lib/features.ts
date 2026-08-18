export function isFeatureEnabled(value: string | undefined): boolean {
  const normalized = value?.trim().toLowerCase();
  return normalized === 'true' || normalized === '1' || normalized === 'yes';
}

export function getShowCard(): boolean {
  return isFeatureEnabled(process.env.NEXT_PUBLIC_SHOW_CARD);
}

export function getShowCv(): boolean {
  return isFeatureEnabled(process.env.NEXT_PUBLIC_SHOW_CV);
}

export function getCvGoogleDriveUrl(): string | null {
  const url = process.env.CV_GOOGLE_DRIVE_URL?.trim();
  return url || null;
}

/** Convert a Google Drive share link to a direct download URL. */
export function getGoogleDriveDownloadUrl(url: string): string | null {
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
  }

  return null;
}

export function getCvDownloadPath(): string {
  return '/api/cv';
}
