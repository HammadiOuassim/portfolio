import { formatDateRange } from '@/lib/utils';
import type { ExperienceEntry } from '@/lib/types';

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      <div className="relative space-y-8">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[var(--color-border)] md:left-[11px]" />
        {experience.map((entry) => (
          <div key={entry.id} className="relative pl-8 md:pl-10">
            <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-[var(--color-surface)] md:h-[23px] md:w-[23px]" />
            <div className="card">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{entry.role}</h3>
                  <p className="text-accent">
                    {entry.company}
                    <span className="ml-2 text-sm text-[var(--color-text-muted)]">
                      · {entry.type}
                    </span>
                  </p>
                </div>
                <span className="badge whitespace-nowrap">
                  {formatDateRange(entry.startDate, entry.endDate)}
                </span>
              </div>
              {entry.summary && (
                <p className="mb-4 text-[var(--color-text-muted)]">{entry.summary}</p>
              )}
              <ul className="space-y-2">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
