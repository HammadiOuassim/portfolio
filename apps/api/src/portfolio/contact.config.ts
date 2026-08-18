import type { Contact } from './portfolio.data';

const DEFAULT_EMAIL = 'ouassimhammadi@gmail.com';
const DEFAULT_PHONE = '+213 7 82 24 78 13';

export function resolveContact(contact: Contact): Contact {
  return {
    ...contact,
    email: process.env.CONTACT_EMAIL?.trim() || contact.email || DEFAULT_EMAIL,
    phone: process.env.CONTACT_PHONE?.trim() || contact.phone || DEFAULT_PHONE,
  };
}
