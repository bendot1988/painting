export type MaintenanceFaq = { q: string; a: string };

export type GalleryImage = { src: string; alt: string };

export const maintenancePlansPageMeta = {
  title: 'Commercial Decorating Maintenance Plans | A.S Painting Contractors',
  description:
    'Monthly painting and decorating maintenance plans for landlords, apartment blocks, offices, schools and commercial properties across Leicestershire. Bronze, Silver, Gold and Platinum packages available.',
  canonical: '/maintenance-plans/',
};

export const heroImage: GalleryImage = {
  src: '/images/commercial-interior-white-corridor-blue-carpet.jpeg',
  alt: 'Freshly painted commercial corridor with blue carpet and white walls',
};

export const finalCtaImage: GalleryImage = {
  src: '/images/commercial-interior-qualvis-yellow-stair-hall.jpeg',
  alt: 'Commercial stair hall with fresh paint finish by A.S Painting Contractors',
};

export const traditionalApproach = [
  'Building deteriorates over 5–10 years',
  'Reactive decisions when it gets bad',
  'Large one-off redecoration bill (often £10k–£50k+)',
  'Disruption to tenants and staff',
  'Repeat',
];

export const asPaintingWay = [
  'Regular scheduled maintenance',
  'Issues caught early',
  'Fixed monthly cost',
  'Pristine appearance year-round',
  'Predictable budgeting — no surprises',
];

export const sectors = [
  'Apartment Blocks & Communal Areas',
  'HMOs & Shared Houses',
  'Letting Agents & Managing Agents',
  'Offices & Business Premises',
  'Schools & Educational Buildings',
  'Gyms & Leisure Facilities',
  'Care Homes & Supported Living',
  'Industrial Units & Warehouses',
  'Hospitality & Hotels',
  'Multi-site Landlords',
];

export const includedFeatures = [
  'Scheduled site inspections',
  'Touch-up painting to scuffed and damaged areas',
  'Stain blocking treatment',
  'Minor crack and hole filling',
  'Communal area upkeep',
  'Monthly condition reports with photos',
  'Priority response for maintenance issues',
  'Exterior condition checks',
  'Planned preventative maintenance scheduling',
  'Larger works quoted separately at preferential rates',
];

export type PlatinumFeature = {
  label: string;
  value: string;
};

export type MaintenancePackage = {
  tier: string;
  price: string;
  badge: string | null;
  includes: string[];
  excludes?: string[];
  cta?: { label: string; href: string };
};

export const packages: MaintenancePackage[] = [
  {
    tier: 'Bronze',
    price: 'From £150/month',
    badge: null,
    includes: [
      'Quarterly inspection',
      'Written condition report',
      'Minor touch-ups during scheduled visit only',
    ],
    excludes: ['No emergency/reactive visits included'],
  },
  {
    tier: 'Silver',
    price: 'From £400/month',
    badge: 'Most Popular',
    includes: [
      'Inspection every 2 months',
      'Small reactive visit allowance',
      'Limited labour hours included yearly',
    ],
  },
  {
    tier: 'Gold',
    price: 'From £1,200/month',
    badge: null,
    includes: [
      'Monthly inspections',
      'Reactive maintenance included within fair usage',
      'Priority scheduling',
    ],
  },
];

export const platinumPackage = {
  tier: 'Platinum',
  price: 'POA',
  subtitle: 'Full tailored facilities-style agreement',
  features: [
    { label: 'Scheduled Visits', value: 'Monthly or tailored' },
    { label: 'Reactive Call-Outs', value: 'Included within fair usage' },
    { label: 'Response Priority', value: 'Priority scheduling' },
    { label: 'Multi-Site Coverage', value: 'Included' },
    { label: 'Condition Reports', value: 'Quarterly' },
    { label: 'Minor Repairs', value: 'Included' },
    { label: 'Touch-Ups', value: 'Included' },
    { label: 'Stain Blocking', value: 'Included' },
    { label: 'Annual Maintenance Planning', value: 'Included' },
    { label: 'Dedicated Contact', value: 'Included' },
    { label: 'Discounted Larger Works', value: 'Included' },
    { label: 'Emergency Attendance', value: 'Optional add-on' },
  ] satisfies PlatinumFeature[],
  footnote: 'Reactive maintenance works included within reasonable/fair usage limits.',
  cta: { label: 'Get a Custom Quote', href: '#enquiry' },
};

export const packagesSmallPrint =
  'All plans are subject to a minimum 12-month term. Pricing varies by building size, condition, foot traffic, and number of units. All prices shown are guide prices — contact us for a tailored quote following a free site survey. Reactive maintenance on Silver, Gold and Platinum plans is included within fair usage limits.';

export const pricingGuideRows = [
  { property_type: 'Small office or retail unit', range: '£150 – £300/month' },
  { property_type: 'Mid-size apartment block', range: '£400 – £800/month' },
  { property_type: 'Large communal block', range: '£800 – £1,200/month' },
  { property_type: 'Multi-site landlord portfolio', range: '£2,000+/month' },
];

export const pricingGuideFootnote =
  'Pricing is scaled by building size, number of units, foot traffic, condition on first inspection, response time requirements, and included labour hours.';

export const contractTerms = [
  {
    title: 'Minimum 12-month term',
    body: 'All plans run on an initial 12-month agreement, renewable annually.',
  },
  {
    title: 'Fair usage',
    body: 'Each plan includes defined labour hours; additional time is quoted transparently.',
  },
  {
    title: 'Clear exclusions',
    body: 'Major structural works, specialist treatments, and new build finishing are quoted separately.',
  },
  {
    title: 'Defined response times',
    body: 'Bronze: scheduled visits only. Silver & Gold: reactive works within fair usage. Platinum: full facilities-style agreement with optional emergency add-on.',
  },
  {
    title: 'Labour & materials cap',
    body: 'Included hours cover labour; consumables are included for minor works up to a monthly cap.',
  },
  {
    title: 'Automatic renewal',
    body: "Plans renew automatically unless cancelled with 30 days' notice before the renewal date.",
  },
  {
    title: 'Scheduled inspections',
    body: 'Visit frequency is confirmed at contract start and built into your maintenance calendar.',
  },
  {
    title: 'Access requirements',
    body: 'Client is responsible for providing safe access; delays are not counted against response time SLAs.',
  },
];

/** TODO: replace with real before/after maintenance photos when available */
export const galleryImages: GalleryImage[] = [
  {
    src: '/images/commercial-interior-navy-office-corridor-01.jpeg',
    alt: 'Repainted navy and white office corridor',
  },
  {
    src: '/images/commercial-interior-white-stairwell-02.jpeg',
    alt: 'Freshly decorated commercial stairwell with white walls',
  },
  {
    src: '/images/commercial-interior-yellow-staircase.jpeg',
    alt: 'Commercial staircase with crisp paint finish',
  },
  {
    src: '/images/commercial-interior-office-breakout-area.jpeg',
    alt: 'Office breakout area with freshly painted walls',
  },
  {
    src: '/images/commercial-interior-grey-fire-doors.jpeg',
    alt: 'Commercial corridor with maintained fire doors and walls',
  },
  {
    src: '/images/commercial-interior-carpeted-stairwell.jpeg',
    alt: 'Communal stairwell kept in good decorative order',
  },
];

export const maintenanceFaqs: MaintenanceFaq[] = [
  {
    q: "What's the difference between a maintenance plan and a standard decorating contract?",
    a: 'A maintenance plan is an ongoing agreement with scheduled visits throughout the year. Rather than booking us for a one-off job when things get bad, we visit regularly, catch issues early, and keep your property looking its best continuously — at a predictable monthly cost.',
  },
  {
    q: 'Do I need to commit to a long contract?',
    a: 'All plans start with a minimum 12-month term, which gives us enough time to properly assess and maintain the building through a full seasonal cycle. Plans renew automatically but can be cancelled with 30 days\' notice before renewal.',
  },
  {
    q: 'What if I have multiple properties?',
    a: "Our Platinum plan and Gold tier are designed for multi-site landlords and managing agents. We'll create a bespoke maintenance schedule covering all your properties, with a single point of contact and consolidated reporting.",
  },
  {
    q: 'What counts as a minor repair vs a larger quoted work?',
    a: "Minor works — scuff touch-ups, small holes, localised staining, hairline cracks — are covered within the plan. Anything requiring full wall or room repaints, specialist coatings, or significant preparation work will be quoted separately. We'll always flag this clearly during our scheduled inspection, never without notice.",
  },
  {
    q: 'Can I use my own paint supplier or colours?',
    a: 'Yes — if you have existing brand colours or specified products, let us know at the outset and we\'ll factor them into your plan. We typically use Dulux Trade, Crown Trade, and Zinsser products but can work with any approved commercial specification.',
  },
  {
    q: 'How quickly can you start?',
    a: "Following a free site survey and agreement sign-off, most plans can begin within 2–4 weeks. We'll confirm your first inspection date as part of the onboarding process.",
  },
];

export const surveyPropertyTypes = [
  'Apartment Block',
  'Office',
  'School',
  'HMO',
  'Care Home',
  'Gym',
  'Industrial',
  'Other',
];

export const planOptions = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Not sure yet'];
