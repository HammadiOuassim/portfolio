const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const sharp = require('sharp');
const { PDFDocument } = require('pdf-lib');
const { CARD, buildFrontSvg, buildBackSvg } = require('./card-design');

const portfolioUrl = process.env.PORTFOLIO_URL;

if (!portfolioUrl) {
  console.error('Error: PORTFOLIO_URL environment variable is required.');
  console.error('Example: PORTFOLIO_URL=https://portfolio-web-zeem2.vercel.app npm run generate:card');
  process.exit(1);
}

const outputDir = path.join(__dirname, '..', 'apps', 'web', 'public', 'card');

async function svgToPng(svg, filename, width) {
  const outputPath = path.join(outputDir, filename);
  await sharp(Buffer.from(svg)).resize(width, Math.round(width * (CARD.height / CARD.width))).png().toFile(outputPath);
  return outputPath;
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const qrDataUrl = await QRCode.toDataURL(portfolioUrl, {
    width: 512,
    margin: 1,
    color: { dark: '#0a0a0f', light: '#ffffff' },
  });

  const frontSvg = buildFrontSvg();
  const backSvg = buildBackSvg(qrDataUrl, portfolioUrl);

  fs.writeFileSync(path.join(outputDir, 'front.svg'), frontSvg);
  fs.writeFileSync(path.join(outputDir, 'back.svg'), backSvg);

  await svgToPng(frontSvg, 'front-300dpi.png', CARD.width);
  await svgToPng(backSvg, 'back-300dpi.png', CARD.width);
  await svgToPng(frontSvg, 'front-figma.png', 2048);
  await svgToPng(backSvg, 'back-figma.png', 2048);

  const frontBuffer = fs.readFileSync(path.join(outputDir, 'front-300dpi.png'));
  const backBuffer = fs.readFileSync(path.join(outputDir, 'back-300dpi.png'));

  const mmToPt = (mm) => mm * 2.83465;
  const trimWidth = mmToPt(85);
  const trimHeight = mmToPt(55);
  const bleed = mmToPt(3);
  const pageWidth = trimWidth + bleed * 2;
  const pageHeight = trimHeight + bleed * 2;

  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('Ouassim Hammadi — Business Card');
  pdfDoc.setAuthor('Ouassim Hammadi');

  const frontImage = await pdfDoc.embedPng(frontBuffer);
  const backImage = await pdfDoc.embedPng(backBuffer);

  const frontPage = pdfDoc.addPage([pageWidth, pageHeight]);
  frontPage.drawImage(frontImage, {
    x: bleed,
    y: bleed,
    width: trimWidth,
    height: trimHeight,
  });

  const backPage = pdfDoc.addPage([pageWidth, pageHeight]);
  backPage.drawImage(backImage, {
    x: bleed,
    y: bleed,
    width: trimWidth,
    height: trimHeight,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(outputDir, 'business-card-print.pdf'), pdfBytes);

  const singlePdf = await PDFDocument.create();
  singlePdf.setTitle('Ouassim Hammadi — Business Card (Trim)');
  const fImg = await singlePdf.embedPng(frontBuffer);
  const bImg = await singlePdf.embedPng(backBuffer);
  const p1 = singlePdf.addPage([trimWidth, trimHeight]);
  p1.drawImage(fImg, { x: 0, y: 0, width: trimWidth, height: trimHeight });
  const p2 = singlePdf.addPage([trimWidth, trimHeight]);
  p2.drawImage(bImg, { x: 0, y: 0, width: trimWidth, height: trimHeight });
  fs.writeFileSync(path.join(outputDir, 'business-card.pdf'), await singlePdf.save());

  console.log('Business card assets generated:');
  console.log(`  ${outputDir}`);
  console.log('  - front.svg / back.svg (Figma/Canva import)');
  console.log('  - front-300dpi.png / back-300dpi.png (print)');
  console.log('  - front-figma.png / back-figma.png (high-res)');
  console.log('  - business-card.pdf (trim, 2 pages)');
  console.log('  - business-card-print.pdf (3mm bleed)');
  console.log(`  Portfolio URL: ${portfolioUrl}`);
}

main().catch((err) => {
  console.error('Failed to generate business card:', err);
  process.exit(1);
});
