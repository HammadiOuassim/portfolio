import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import type { Contact } from '@/lib/types';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  contact: Contact;
}

export function Hero({ name, title, tagline, contact }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="section-container relative text-center">
        <p className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1
          className="animate-fade-in-up mb-4 text-5xl font-bold tracking-tight md:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          {name}
        </h1>
        <p
          className="animate-fade-in-up gradient-text mb-6 text-xl font-semibold md:text-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          {title}
        </p>
        <p
          className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-[var(--color-text-muted)]"
          style={{ animationDelay: '0.3s' }}
        >
          {tagline}
        </p>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-10 flex items-center justify-center gap-5"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-[var(--color-text-muted)] transition-colors hover:text-accent"
          >
            <Mail size={22} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-text-muted)] transition-colors hover:text-accent"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text-muted)] transition-colors hover:text-accent"
          >
            <Github size={22} />
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="animate-fade-in-up mt-16 inline-block text-[var(--color-text-muted)] transition-colors hover:text-accent"
          style={{ animationDelay: '0.6s' }}
        >
          <ArrowDown size={24} className="mx-auto animate-bounce" />
        </a>
      </div>
    </section>
  );
}
