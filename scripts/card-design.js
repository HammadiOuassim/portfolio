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
  title: 'Full Stack & AI Integration Engineer',
  tagline:
    'Building scalable distributed systems, AI-powered platforms & high-performance microservices.',
  skills: ['NestJS', 'Django', 'React', 'Docker', 'Kubernetes'],
  contact: {
    email: process.env.CONTACT_EMAIL?.trim() || 'ouassimhammadi@gmail.com',
    phone: process.env.CONTACT_PHONE?.trim() || '+213 7 82 24 78 13',
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
        `<rect x="${48 + i * 104}" y="548" width="92" height="36" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
         <text x="${48 + i * 104 + 46}" y="572" text-anchor="middle" font-family="Courier New, monospace" font-size="16" fill="#cbd5e1">${escapeXml(skill)}</text>`,
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

function contactIconSvg(type, x, y) {
  const color = '#94a3b8';
  const size = 20;
  const icons = {
    mail: `<g transform="translate(${x}, ${y})" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="16" height="12" rx="1.5"/>
      <path d="M2 6l8 5 8-5"/>
    </g>`,
    phone: `<g transform="translate(${x}, ${y})" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5L17.5 11.5 21.5 13v3a2 2 0 0 1-2.2 2 16 16 0 0 1-12.3-12.3A2 2 0 0 1 6.5 3z"/>
    </g>`,
    linkedin: `<g transform="translate(${x}, ${y})" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="16" height="16" rx="2"/>
      <path d="M6 9v5M6 6v.01M10 14v-3a2 2 0 1 1 4 0v3"/>
    </g>`,
    github: `<g transform="translate(${x}, ${y})" fill="none" stroke="${color}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2a8 8 0 0 0-2.5 15.6c.4.1.55-.2.55-.44v-1.6c-2.2.5-2.7-1-2.7-1-.36-.92-1.5-1.16-1.5-1.16-1.22-.84.09-.82.09-.82 1.35.1 2.06 1.4 2.06 1.4 1.2 2.06 3.15 1.46 3.92 1.12.12-.87.47-1.46.85-1.8-1.76-.2-3.62-.88-3.62-3.9 0-.86.31-1.56.82-2.1-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.8a7.6 7.6 0 0 1 4 0c1.53-1.02 2.2-.8 2.2-.8.44 1.1.16 1.92.08 2.12.51.54.82 1.24.82 2.1 0 3.03-1.86 3.7-3.63 3.9.47.4.89 1.19.89 2.4v3.55c0 .24.15.55.56.44A8 8 0 0 0 10 2z"/>
    </g>`,
  };
  return icons[type] || '';
}

function buildBackSvg(qrDataUrl, portfolioUrl) {
  const { width, height, colors } = CARD;
  const { contact } = CARD_DATA;
  const footerText = 'Full Stack Engineer · Microservices · AI · DevOps';

  const lines = [
    { type: 'mail', value: contact.email },
    { type: 'phone', value: contact.phone },
    { type: 'linkedin', value: contact.linkedin },
    { type: 'github', value: contact.github },
  ];

  const contactSvg = lines
    .map((line, i) => {
      const y = 130 + i * 58;
      return `
        ${contactIconSvg(line.type, 48, y - 16)}
        <text x="80" y="${y + 4}" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="${colors.text}">${escapeXml(line.value)}</text>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  ${sharedDefs()}
  ${backgroundLayer()}
  <text x="48" y="72" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700" fill="${colors.text}">OH<tspan fill="${colors.accent}">.</tspan></text>
  ${contactSvg}
  <rect x="720" y="120" width="240" height="240" rx="16" fill="#ffffff" />
  <image href="${qrDataUrl}" x="732" y="132" width="216" height="216" />
  <text x="840" y="390" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="${colors.muted}" letter-spacing="1">SCAN PORTFOLIO</text>
  <rect x="48" y="${height - 72}" width="${width - 96}" height="1" fill="rgba(255,255,255,0.08)" />
  <text x="48" y="${height - 48}" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="${colors.muted}">${escapeXml(footerText)}</text>
  <rect x="48" y="${height - 28}" width="180" height="3" rx="1.5" fill="url(#accentLine)" />
</svg>`;
}

module.exports = {
  CARD,
  CARD_DATA,
  buildFrontSvg,
  buildBackSvg,
};
