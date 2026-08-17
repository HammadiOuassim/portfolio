const webUrl = process.env.WEB_URL;
const apiUrl = process.env.API_URL;

if (!webUrl || !apiUrl) {
  console.error('Usage: WEB_URL=https://your-app.vercel.app API_URL=https://your-api.onrender.com node scripts/verify-production.js');
  process.exit(1);
}

async function check(label, url, expectJson) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${label} returned ${res.status} for ${url}`);
  }
  if (expectJson) {
    const data = await res.json();
    if (!data.name && !data.profile) {
      throw new Error(`${label} returned unexpected JSON from ${url}`);
    }
  }
  console.log(`OK  ${label} (${res.status}) — ${url}`);
}

async function main() {
  await check('Frontend', webUrl.replace(/\/$/, ''), false);
  await check('API profile', `${apiUrl.replace(/\/$/, '')}/api/portfolio/profile`, true);
  console.log('\nProduction verification passed.');
}

main().catch((err) => {
  console.error('\nProduction verification failed:', err.message);
  process.exit(1);
});
