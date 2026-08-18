import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import type { Contact } from '@/lib/types';
import { formatContactDisplay } from '@/lib/contact';
import { cn } from '@/lib/utils';

const SKILLS = ['NestJS', 'Django', 'React', 'Docker', 'Kubernetes'];

const CARD_FOOTER = 'Full Stack Engineer · Microservices · AI · DevOps';

const CARD_CONTENT = {
  name: 'Ouassim Hammadi',
  title: 'Full Stack & AI Integration Engineer',
  tagline:
    'Building scalable distributed systems, AI-powered platforms & high-performance microservices.',
};

interface BusinessCardFaceProps {
  side: 'front' | 'back';
  portfolioUrl: string;
  contact: Contact;
  className?: string;
}

function buildContactRows(contact: Contact) {
  const display = formatContactDisplay(contact);
  return [
    { Icon: Mail, value: display.email },
    { Icon: Phone, value: display.phone },
    { Icon: Linkedin, value: display.linkedin },
    { Icon: Github, value: display.github },
  ];
}

export function BusinessCardFace({ side, portfolioUrl, contact, className }: BusinessCardFaceProps) {
  void portfolioUrl;
  const contactRows = buildContactRows(contact);

  return (
    <div
      className={cn(
        'relative aspect-[85/55] w-full overflow-hidden rounded-2xl border border-white/[0.08] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]',
        className,
      )}
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 h-[240px] w-[240px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {side === 'front' ? (
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="text-[26px] font-extrabold tracking-tight text-white">
            OH<span className="gradient-text">.</span>
          </p>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-white">{CARD_CONTENT.name}</h2>
            <p className="gradient-text text-sm font-semibold uppercase tracking-wide">
              {CARD_CONTENT.title}
            </p>
            <p className="max-w-[95%] text-[12.5px] leading-relaxed text-[#94a3b8]">
              {CARD_CONTENT.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-[#cbd5e1]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col">
          <div className="flex flex-1 items-center justify-between gap-4">
            <div className="flex flex-col justify-center gap-3.5">
              {contactRows.map((item) => (
                <div key={item.value} className="flex items-center gap-3 text-[13px] text-[#e2e8f0]">
                  <item.Icon size={20} strokeWidth={1.75} className="shrink-0 text-[#94a3b8]" />
                  <span className="leading-tight">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 flex-col items-center justify-center gap-2.5">
              <div className="flex h-[110px] w-[110px] items-center justify-center rounded-xl bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/qr-code.png" alt="Portfolio QR code" className="h-full w-full" />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-[#94a3b8]">
                Scan Portfolio
              </p>
            </div>
          </div>

          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <p className="mb-2 text-[11px] text-[#94a3b8]">{CARD_FOOTER}</p>
            <div className="h-0.5 w-44 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" />
          </div>
        </div>
      )}
    </div>
  );
}

interface DownloadItem {
  href: string;
  label: string;
  description: string;
}

export function getCardDownloads(): DownloadItem[] {
  return [
    {
      href: '/card/business-card-print.pdf',
      label: 'Print PDF (with bleed)',
      description: 'Best for professional print shops · 85×55mm + 3mm bleed',
    },
    {
      href: '/card/business-card.pdf',
      label: 'PDF (trim size)',
      description: 'Standard 85×55mm · front & back pages',
    },
    {
      href: '/card/front-300dpi.png',
      label: 'Front PNG (300 DPI)',
      description: 'Print-ready raster · Canva compatible',
    },
    {
      href: '/card/back-300dpi.png',
      label: 'Back PNG (300 DPI)',
      description: 'Print-ready raster · Canva compatible',
    },
    {
      href: '/card/front.svg',
      label: 'Front SVG',
      description: 'Vector · import into Figma or Canva',
    },
    {
      href: '/card/back.svg',
      label: 'Back SVG',
      description: 'Vector · import into Figma or Canva',
    },
    {
      href: '/card/front-figma.png',
      label: 'Front PNG (high-res)',
      description: '2048px wide · design reference',
    },
    {
      href: '/card/back-figma.png',
      label: 'Back PNG (high-res)',
      description: '2048px wide · design reference',
    },
  ];
}

export { CARD_CONTENT, CARD_FOOTER, SKILLS };
