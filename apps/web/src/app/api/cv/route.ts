import { getCvGoogleDriveUrl, getGoogleDriveDownloadUrl, getShowCv } from '@/lib/features';

export async function GET() {
  if (!getShowCv()) {
    return new Response('Not found', { status: 404 });
  }

  const driveUrl = getCvGoogleDriveUrl();
  if (!driveUrl) {
    return new Response('CV not configured', { status: 503 });
  }

  const downloadUrl = getGoogleDriveDownloadUrl(driveUrl);
  if (!downloadUrl) {
    return new Response('Invalid Google Drive URL', { status: 500 });
  }

  return Response.redirect(downloadUrl, 302);
}
