export type SitemapAccent = 'red' | 'yellow' | 'lime' | 'pink' | 'blue';

export type SitemapLink = {
  label: string;
  href: string;
  description?: string;
};

export type SitemapGroup = {
  title: string;
  accent: SitemapAccent;
  links: SitemapLink[];
};

/** Human-readable sitemap groups for /sitemap */
export const sitemapGroups: SitemapGroup[] = [
  {
    title: 'Main pages',
    accent: 'red',
    links: [
      { label: 'Home', href: '/', description: 'Commercial & domestic painters in Leicester' },
      { label: 'Commercial painting', href: '/commercial', description: 'Factories, offices, retail & warehouses' },
      { label: 'Domestic painting', href: '/domestic', description: 'Homes, kitchens, interiors & exteriors' },
      { label: 'Our work', href: '/work', description: 'Recent projects across Leicestershire' },
      { label: 'Our reviews', href: '/reviews', description: 'Google reviews from clients' },
      { label: 'Contact & quote', href: '/contact', description: 'Phone, email, WhatsApp and quote form' },
      { label: 'Areas covered', href: '/areas', description: 'Towns and villages across Leicestershire' },
    ],
  },
  {
    title: 'Homepage sections',
    accent: 'yellow',
    links: [
      { label: 'Commercial', href: '/#commercial', description: 'Commercial painting overview' },
      { label: 'Domestic', href: '/#domestic', description: 'Domestic painting overview' },
      { label: 'Recent work', href: '/#work', description: 'Project gallery on the homepage' },
      { label: 'How we work', href: '/#process', description: 'Our process from survey to sign-off' },
      { label: 'Free quote', href: '/#quote', description: 'Quote form on the homepage' },
    ],
  },
  {
    title: 'Legal',
    accent: 'blue',
    links: [
      { label: 'Privacy policy', href: '/privacy', description: 'How we handle your data' },
      { label: 'Terms of service', href: '/terms', description: 'Terms for quotes and work' },
    ],
  },
];

/** Canonical URLs for sitemap.xml (no hash fragments) */
export const sitemapXmlUrls: { loc: string; priority: string; changefreq: string }[] = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/commercial', priority: '0.9', changefreq: 'monthly' },
  { loc: '/domestic', priority: '0.9', changefreq: 'monthly' },
  { loc: '/work', priority: '0.8', changefreq: 'monthly' },
  { loc: '/reviews', priority: '0.7', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
  { loc: '/areas', priority: '0.8', changefreq: 'monthly' },
  { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  { loc: '/sitemap', priority: '0.2', changefreq: 'yearly' },
];
