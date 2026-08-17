import type { LanguageEntry } from '@/lib/types';

interface AboutProps {
  summary: string;
  interests: string[];
  languages: LanguageEntry[];
}

export function About({ summary, interests, languages }: AboutProps) {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="card md:col-span-2">
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">{summary}</p>
        </div>
        <div className="space-y-6">
          <div className="card">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Languages
            </h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.language} className="flex justify-between text-sm">
                  <span>{lang.language}</span>
                  <span className="text-[var(--color-text-muted)]">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="badge">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
