import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import { BusinessCardFace, getCardDownloads } from '@/components/BusinessCard';
import { getPortfolio } from '@/lib/api';
import { getShowCard } from '@/lib/features';
import { getSiteUrl } from '@/lib/utils';

export const metadata = {
  title: 'Business Card — Ouassim Hammadi',
  description: 'Download print-ready business card designs matching the portfolio brand.',
};

export default async function CardPage() {
  if (!getShowCard()) {
    notFound();
  }

  const portfolio = await getPortfolio();
  const portfolioUrl = getSiteUrl();
  const downloads = getCardDownloads();

  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <Link href="/" className="text-lg font-bold tracking-tight">
            OH<span className="text-accent">.</span>
          </Link>
        </div>
      </header>

      <main className="section-container">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Digital Card</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Business Card</h1>
          <p className="mx-auto max-w-2xl text-[var(--color-text-muted)]">
            Print-ready designs matching the portfolio — dark theme, gradient accents, and QR code to{' '}
            <span className="text-[var(--color-text)]">{portfolioUrl.replace(/^https?:\/\//, '')}</span>
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Front
            </p>
            <BusinessCardFace side="front" portfolioUrl={portfolioUrl} contact={portfolio.contact} />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Back
            </p>
            <BusinessCardFace side="back" portfolioUrl={portfolioUrl} contact={portfolio.contact} />
          </div>
        </div>

        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold">Download Assets</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {downloads.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download
                className="card group flex items-start gap-3 hover:border-accent/60"
              >
                <Download
                  size={18}
                  className="mt-0.5 shrink-0 text-accent transition-transform group-hover:scale-110"
                />
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-2xl rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
          <h3 className="mb-3 font-semibold">Print tips</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>Use <strong className="text-[var(--color-text)]">business-card-print.pdf</strong> for professional printing (includes 3mm bleed).</li>
            <li>Standard size: <strong className="text-[var(--color-text)]">85 × 55 mm</strong> (EU) with matte or soft-touch finish.</li>
            <li>Import <strong className="text-[var(--color-text)]">SVG files</strong> into Figma or Canva for custom edits.</li>
            <li>Regenerate assets after URL change:{' '}
              <code className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-xs">
                PORTFOLIO_URL=... npm run generate:card
              </code>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
