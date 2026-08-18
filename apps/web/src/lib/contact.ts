import type { Contact } from '@/lib/types';

export function formatContactDisplay(contact: Contact) {
  const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

  return {
    email: contact.email,
    phone: contact.phone,
    linkedin: stripProtocol(contact.linkedin),
    github: stripProtocol(contact.github),
  };
}

export function getContactFromEnv(): Pick<Contact, 'email' | 'phone'> {
  return {
    email: process.env.CONTACT_EMAIL?.trim() || 'ouassimhammadi@gmail.com',
    phone: process.env.CONTACT_PHONE?.trim() || '+213 7 82 24 78 13',
  };
}
