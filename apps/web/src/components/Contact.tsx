import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import type { Contact } from '@/lib/types';

interface ContactSectionProps {
  contact: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ouassim-hammadi',
      href: contact.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/HammadiOuassim',
      href: contact.github,
    },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact</h2>
      <div className="card mx-auto max-w-2xl text-center">
        <p className="mb-8 text-lg text-[var(--color-text-muted)]">
          Interested in working together? Feel free to reach out — I&apos;d love to hear from you.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
              rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-4 text-left transition-colors hover:border-accent hover:text-accent"
            >
              <link.icon size={20} className="shrink-0 text-accent" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {link.label}
                </p>
                <p className="text-sm font-medium">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-[var(--color-border)] pt-8">
          <Image
            src="/qr-code.png"
            alt="Scan to visit portfolio"
            width={160}
            height={160}
            className="rounded-lg border border-[var(--color-border)] bg-white p-2"
          />
          <p className="text-sm text-[var(--color-text-muted)]">Scan to open on mobile</p>
        </div>
      </div>
    </section>
  );
}

export function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
      <p>
        © {new Date().getFullYear()} {name}. Built with Next.js & NestJS.
      </p>
    </footer>
  );
}
