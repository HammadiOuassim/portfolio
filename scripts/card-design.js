/** Business card design constants — 85×55mm at 300 DPI */
const CARD = {
  width: 1004,
  height: 650,
  bleed: 35,
  colors: {
    bg: '#0a0a0f',
    accent: '#3b82f6',
    accentHover: '#2563eb',
    violet: '#8b5cf6',
    text: '#f1f5f9',
    muted: '#94a3b8',
    border: '#1e293b',
  },
};

const CARD_DATA = {
  name: 'Ouassim Hammadi',
  title: 'Full Stack Engineer',
  tagline: 'Building scalable systems, AI-powered platforms, and microservices at scale.',
  skills: ['Node.js', 'React', 'Kubernetes'],
  contact: {
    email: 'ouassimhammadi@gmail.com',
    phone: '+213 7 82 24 78 13',
    linkedin: 'linkedin.com/in/ouassim-hammadi',
    github: 'github.com/HammadiOuassim',
  },
};

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sharedDefs() {
  const { colors } = CARD;
  return `
    <defs>
      <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${colors.accent}" />
        <stop offset="100%" stop-color="${colors.violet}" />
      </linearGradient>
      <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${colors.accent}" />
        <stop offset="100%" stop-color="${colors.violet}" />
      </linearGradient>
      <radialGradient id="orbBlue" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${colors.accent}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${colors.accent}" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="orbViolet" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${colors.violet}" stop-opacity="0.3" />
        <stop offset="100%" stop-color="${colors.violet}" stop-opacity="0" />
      </radialGradient>
      <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="40" />
      </filter>
    </defs>
  `;
}

function backgroundLayer() {
  const { width, height, colors } = CARD;
  return `
    <rect width="${width}" height="${height}" fill="${colors.bg}" />
    <circle cx="120" cy="80" r="200" fill="url(#orbBlue)" filter="url(#softBlur)" />
    <circle cx="${width - 100}" cy="${height - 60}" r="220" fill="url(#orbViolet)" filter="url(#softBlur)" />
    <rect x="48" y="${height - 4}" width="180" height="3" rx="1.5" fill="url(#accentLine)" opacity="0.9" />
  `;
}

function buildFrontSvg() {
  const { width, height, colors } = CARD;
  const { name, title, tagline, skills } = CARD_DATA;
  const badges = skills
    .map(
      (skill, i) =>
        `<rect x="${48 + i * 168}" y="548" width="152" height="36" rx="18" fill="${colors.bg}" stroke="${colors.border}" stroke-width="1.5" />
         <text x="${48 + i * 168 + 76}" y="572" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="${colors.muted}">${escapeXml(skill)}</text>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${sharedDefs()}
  ${backgroundLayer()}
  <text x="48" y="72" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" fill="${colors.text}">OH<tspan fill="${colors.accent}">.</tspan></text>
  <text x="48" y="200" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" fill="${colors.text}">${escapeXml(name)}</text>
  <text x="48" y="262" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="600" fill="url(#titleGradient)">${escapeXml(title)}</text>
  <text x="48" y="330" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="${colors.muted}">${escapeXml(tagline.slice(0, 52))}</text>
  <text x="48" y="362" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="${colors.muted}">${escapeXml(tagline.slice(52))}</text>
  ${badges}
</svg>`;
}

function buildBackSvg(qrDataUrl, portfolioUrl) {
  const { width, height, colors } = CARD;
  const { contact } = CARD_DATA;
  const displayUrl = portfolioUrl.replace(/^https?:\/\//, '');

  const lines = [
    { label: 'Email', value: contact.email },
    { label: 'Phone', value: contact.phone },
    { label: 'LinkedIn', value: contact.linkedin },
    { label: 'GitHub', value: contact.github },
  ];

  const contactSvg = lines
    .map((line, i) => {
      const y = 120 + i * 72;
      return `
        <text x="48" y="${y}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="${colors.accent}" letter-spacing="1">${escapeXml(line.label.toUpperCase())}</text>
        <text x="48" y="${y + 32}" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="${colors.text}">${escapeXml(line.value)}</text>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${sharedDefs()}
  ${backgroundLayer()}
  <text x="48" y="72" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" fill="${colors.text}">OH<tspan fill="${colors.accent}">.</tspan></text>
  ${contactSvg}
  <rect x="720" y="140" width="240" height="240" rx="16" fill="#ffffff" />
  <image href="${qrDataUrl}" x="732" y="152" width="216" height="216" />
  <text x="840" y="410" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="${colors.text}">Scan my portfolio</text>
  <text x="840" y="440" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="${colors.muted}">${escapeXml(displayUrl)}</text>
  <rect x="48" y="${height - 56}" width="${width - 96}" height="1" fill="${colors.border}" />
  <text x="48" y="${height - 24}" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="${colors.muted}">Full Stack Engineer · Microservices · AI · DevOps</text>
</svg>`;
}

module.exports = {
  CARD,
  CARD_DATA,
  buildFrontSvg,
  buildBackSvg,
};
