import Link from 'next/link';
import { Download } from 'lucide-react';
import { getCvDownloadPath } from '@/lib/features';
import { cn } from '@/lib/utils';

interface CvDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

export function CvDownloadButton({ className, variant = 'secondary' }: CvDownloadButtonProps) {
  const href = getCvDownloadPath();

  if (variant === 'link') {
    return (
      <a
        href={href}
        className={cn(
          'inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover',
          className,
        )}
      >
        <Download size={16} />
        Download CV
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
        variant === 'primary'
          ? 'bg-accent text-white hover:bg-accent-hover'
          : 'border border-[var(--color-border)] hover:border-accent hover:text-accent',
        className,
      )}
    >
      <Download size={16} />
      Download CV
    </a>
  );
}

export function CardNavLink({ className }: { className?: string }) {
  return (
    <Link
      href="/card"
      className={cn(
        'text-sm text-[var(--color-text-muted)] transition-colors hover:text-accent',
        className,
      )}
    >
      Card
    </Link>
  );
}
