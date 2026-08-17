const path = require('path');
const fs = require('fs');
const QRCode = require('qrcode');

const url = process.env.PORTFOLIO_URL;

if (!url) {
  console.error('Error: PORTFOLIO_URL environment variable is required.');
  console.error('Example: PORTFOLIO_URL=https://your-app.vercel.app npm run generate:qr');
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'apps', 'web', 'public');
const outputPath = path.join(publicDir, 'qr-code.png');

fs.mkdirSync(publicDir, { recursive: true });

QRCode.toFile(
  outputPath,
  url,
  { width: 512, margin: 2, color: { dark: '#000000', light: '#ffffff' } },
  (err) => {
    if (err) {
      console.error('Failed to generate QR code:', err);
      process.exit(1);
    }
    console.log(`QR code saved to ${outputPath}`);
    console.log(`URL encoded: ${url}`);
  },
);
