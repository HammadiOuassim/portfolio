import type { ProjectEntry } from '@/lib/types';

interface ProjectsProps {
  projects: ProjectEntry[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="card flex flex-col">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
              <div className="flex shrink-0 flex-wrap justify-end gap-2">
                {project.region && (
                  <span className="badge whitespace-nowrap text-xs text-accent">{project.region}</span>
                )}
                {project.period && (
                  <span className="badge whitespace-nowrap text-xs">{project.period}</span>
                )}
              </div>
            </div>
            <p className="mb-4 flex-1 text-sm text-[var(--color-text-muted)]">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge text-xs">
                  {tech}
                </span>
              ))}
            </div>
            {project.highlights.length > 0 && (
              <ul className="space-y-1.5 border-t border-[var(--color-border)] pt-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
