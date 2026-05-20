import { contact } from '~/data/contact';

/** Registered company details — privacy policy, terms, and formal correspondence */
export const company = {
  legalName: 'A.S PAINTING CONTRACTORS GROUP LTD',
  tradingName: 'A.S Painting Contractors',
  companyNumber: '16791017',
  registeredAddress: '24 Naver Road, Lubbesthorpe, Leicester, England, LE19 4DG',
  email: contact.email,
  phone: contact.phone,
  freephone: contact.freephone,
} as const;

export const privacyPageMeta = {
  title: 'Privacy policy — A.S Painting Contractors',
  description:
    'How A.S Painting Contractors collects, uses and protects your personal data, including cookies and quote enquiries.',
} as const;

export const termsPageMeta = {
  title: 'Terms and conditions — A.S Painting Contractors',
  description:
    'Terms and conditions for quotes, painting work and use of the A.S Painting Contractors website.',
} as const;
