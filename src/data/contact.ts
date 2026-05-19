/** Site-wide contact details — keep in sync across header, footer, quote, FAB and legal pages */
export const contact = {
  postcode: 'LE19 4DG',
  location: 'Leicester',
  phone: {
    display: '0116 291 4746',
    tel: '+441162914746',
  },
  freephone: {
    display: '0800 009 6694',
    tel: '+448000096694',
  },
  email: 'info@aspainting.co.uk',
  whatsapp: {
    display: '07548 971 520',
    href: 'https://wa.me/07548971520',
  },
} as const;

/** All “get a quote” CTAs point here */
export const quotePageHref = '/contact';

/** Trust stats — keep in sync with TrustStrip counters */
export const siteStats = {
  experience: '25+ years experience',
  jobs: '2,000+ jobs completed',
} as const;
