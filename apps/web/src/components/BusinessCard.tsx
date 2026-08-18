import { cn } from '@/lib/utils';

const SKILLS = ['Node.js', 'React', 'Kubernetes'];

interface BusinessCardFaceProps {
  side: 'front' | 'back';
  portfolioUrl: string;
  className?: string;
}

export function BusinessCardFace({ side, portfolioUrl, className }: BusinessCardFaceProps) {
  const displayUrl = portfolioUrl.replace(/^https?:\/\//, '');

  return (
    <div
      className={cn(
        'relative aspect-[85/55] w-full overflow-hidden rounded-xl border border-[var(--color-border)] shadow-2xl',
        className,
      )}
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-0.5 w-24 bg-gradient-to-r from-blue-500 to-violet-500" />

      {side === 'front' ? (
        <div className="relative flex h-full flex-col p-6 sm:p-8">
          <p className="text-lg font-bold text-[#f1f5f9] sm:text-xl">
            OH<span className="text-accent">.</span>
          </p>
          <div className="mt-auto space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-[#f1f5f9] sm:text-2xl">
              Ouassim Hammadi
            </h2>
            <p className="gradient-text text-sm font-semibold sm:text-base">Full Stack Engineer</p>
            <p className="max-w-[90%] text-xs leading-relaxed text-[#94a3b8] sm:text-sm">
              Building scalable systems, AI-powered platforms, and microservices at scale.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#1e293b] px-2.5 py-0.5 text-[10px] text-[#94a3b8] sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative grid h-full grid-cols-[1fr_auto] gap-4 p-6 sm:p-8">
          <div className="space-y-3">
            <p className="text-lg font-bold text-[#f1f5f9] sm:text-xl">
              OH<span className="text-accent">.</span>
            </p>
            <div className="space-y-2.5 text-[10px] sm:text-xs">
              <ContactLine label="Email" value="ouassimhammadi@gmail.com" />
              <ContactLine label="Phone" value="+213 7 82 24 78 13" />
              <ContactLine label="LinkedIn" value="linkedin.com/in/ouassim-hammadi" />
              <ContactLine label="GitHub" value="github.com/HammadiOuassim" />
            </div>
            <p className="hidden pt-2 text-[10px] text-[#94a3b8] sm:block">
              Full Stack Engineer · Microservices · AI · DevOps
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/qr-code.png"
              alt="Portfolio QR code"
              className="h-20 w-20 rounded-lg border border-[#1e293b] bg-white p-1 sm:h-24 sm:w-24"
            />
            <p className="mt-2 text-center text-[10px] font-medium text-[#f1f5f9]">Scan my portfolio</p>
            <p className="max-w-[88px] truncate text-center text-[9px] text-[#94a3b8]">{displayUrl}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-wider text-accent sm:text-[10px]">
        {label}
      </p>
      <p className="text-[#f1f5f9]">{value}</p>
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
