import type { EducationEntry, TrainingEntry } from '@/lib/types';
import { formatDateRange } from '@/lib/utils';

interface EducationProps {
  education: EducationEntry[];
  training: TrainingEntry[];
}

export function Education({ education, training }: EducationProps) {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education & Training</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="card">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-sm text-[var(--color-text-muted)]">{edu.institution}</p>
                <p className="mt-1 text-xs text-accent">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Training
          </h3>
          <div className="space-y-4">
            {training.map((t) => (
              <div key={t.id} className="card">
                <h4 className="font-semibold">{t.title}</h4>
                <p className="text-sm text-[var(--color-text-muted)]">{t.institution}</p>
                <p className="mt-1 text-xs text-accent">{t.period}</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
