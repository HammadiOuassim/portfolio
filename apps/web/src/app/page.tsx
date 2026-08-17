import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { ContactSection, Footer } from '@/components/Contact';
import { getPortfolio } from '@/lib/api';
import type { ProjectEntry } from '@/lib/types';

function getAllProjects(
  fromExperience: ProjectEntry[],
  standalone: ProjectEntry[],
): ProjectEntry[] {
  const ids = new Set(fromExperience.map((p) => p.id));
  const unique = standalone.filter((p) => !ids.has(p.id));
  return [...fromExperience, ...unique];
}

export default async function HomePage() {
  const portfolio = await getPortfolio();

  const experienceProjects = portfolio.experience.flatMap((exp) => exp.projects ?? []);
  const allProjects = getAllProjects(experienceProjects, portfolio.projects);

  return (
    <>
      <Header />
      <main>
        <Hero
          name={portfolio.name}
          title={portfolio.title}
          tagline={portfolio.tagline}
          contact={portfolio.contact}
        />
        <About
          summary={portfolio.summary}
          interests={portfolio.interests}
          languages={portfolio.languages}
        />
        <Skills skills={portfolio.skills} />
        <Experience experience={portfolio.experience} />
        <Projects projects={allProjects} />
        <Education education={portfolio.education} training={portfolio.training} />
        <ContactSection contact={portfolio.contact} />
      </main>
      <Footer name={portfolio.name} />
    </>
  );
}
