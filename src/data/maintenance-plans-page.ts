export type MaintenanceFaq = { q: string; a: string };

export type GalleryImage = { src: string; alt: string };

export type ValueProp = {
  icon: 'shield' | 'clock' | 'paintbrush' | 'pound' | 'grid' | 'pin';
  title: string;
  body: string;
};

export type MaintenancePackage = {
  tier: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  badge: string | null;
  coverage: string;
  features: string[];
  bestFor: string;
  subscribeUrl: string;
};

export const maintenancePlansPageMeta = {
  title: 'Commercial Decorating Maintenance Plans | A.S Painting Contractors',
  description:
    'Monthly painting and decorating maintenance plans for landlords, apartment blocks, offices, schools and commercial properties across Leicestershire. Bronze, Silver, Gold and Platinum packages from £495/month + VAT.',
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

export const agreementPreview: GalleryImage = {
  src: '/images/maintenance-agreement.png',
  alt: 'A.S Painting Commercial Decorating Maintenance Agreement showing Bronze, Silver, Gold and Platinum packages',
};

export const valuePropsHeading = '4 Simple Packages. Complete Peace of Mind.';

export const valueProps: ValueProp[] = [
  {
    icon: 'shield',
    title: 'Protect Your Investment',
    body: 'Regular maintenance prevents small issues becoming costly problems.',
  },
  {
    icon: 'clock',
    title: 'Planned & Reliable',
    body: 'Scheduled visits keep your property looking its best all year.',
  },
  {
    icon: 'paintbrush',
    title: 'Expert Professionals',
    body: 'Qualified decorators using premium materials for a high-quality finish.',
  },
  {
    icon: 'pound',
    title: 'Cost Effective',
    body: 'Spread the cost with affordable monthly payments and save money in the long run.',
  },
  {
    icon: 'grid',
    title: 'Tailored Packages',
    body: 'Choose the level of service that suits your property and budget.',
  },
  {
    icon: 'pin',
    title: 'Local Leicestershire Team',
    body: 'Based in Leicester — fast response and a familiar face on every visit.',
  },
];

export const packages: MaintenancePackage[] = [
  {
    tier: 'Bronze',
    subtitle: 'Preventative Maintenance',
    price: '£495.00',
    priceSuffix: '+ VAT per month',
    badge: null,
    coverage: 'Up to 1 property',
    features: [
      'Quarterly scheduled visit (Every 3 Months)',
      'Preventative maintenance inspection',
      'Minor touch-ups during scheduled visit only',
      'Written condition report after each visit',
      'No reactive / call-out visits included',
      'Additional visits are chargeable',
    ],
    bestFor: 'Best for clients looking for planned preventative upkeep.',
    subscribeUrl: 'https://buy.stripe.com/eVq14pbpG2Glg3qfVW33W00',
  },
  {
    tier: 'Silver',
    subtitle: 'Enhanced Maintenance',
    price: '£695.00',
    priceSuffix: '+ VAT per month',
    badge: null,
    coverage: 'Up to 3 properties',
    features: [
      'Bi-Monthly scheduled visit (Every 2 Months)',
      'Preventative maintenance inspection',
      'Up to 1 reactive visit included per quarter',
      'Minor repairs & touch-ups during visits',
      'Written condition report after each visit',
      'Additional visits are chargeable',
    ],
    bestFor: 'Ideal for clients who want extra support and flexibility.',
    subscribeUrl: 'https://buy.stripe.com/aFa9AV3Xe5Sx2cA39a33W01',
  },
  {
    tier: 'Gold',
    subtitle: 'Premium Maintenance',
    price: '£895.00',
    priceSuffix: '+ VAT per month',
    badge: 'Most Popular',
    coverage: 'Up to 5 properties',
    features: [
      'Monthly scheduled visit',
      'Up to 1 reactive visit included per month',
      'Minor repairs & touch-ups included',
      'Stain blocking & small surface repairs',
      'Priority response (3 Working Days)',
      'Quarterly condition report & maintenance plan',
    ],
    bestFor: 'Great for clients needing regular upkeep and fast response.',
    subscribeUrl: 'https://buy.stripe.com/aFa3cxalCa8N5oM25633W02',
  },
  {
    tier: 'Platinum',
    subtitle: 'Premier Maintenance',
    price: '£1,295.00',
    priceSuffix: '+ VAT per month',
    badge: null,
    coverage: 'Portfolio / Custom',
    features: [
      '1 scheduled maintenance visit per month (or agreed tailored schedule)',
      'Reactive support within fair usage policy',
      'Priority response times (typically 1–2 working days)',
      'Minor touch-ups, stain blocking & small maintenance repairs within agreed labour allowance',
      'Quarterly condition reporting & annual maintenance planning',
      'Preferred scheduling & discounted rates on larger planned works',
      'Ongoing property condition monitoring & maintenance recommendations',
    ],
    bestFor:
      'Designed for housing providers, supported accommodation, communal areas, offices, and multi-site portfolios needing ongoing planned and reactive support.',
    subscribeUrl: 'https://buy.stripe.com/fZu14palC6WB8AYdNO33W03',
  },
];

export const packagesSmallPrint =
  'All prices are exclusive of VAT. This Agreement is for a minimum term of 12 months. Pricing may vary by building size, condition, foot traffic, and number of units — contact us for a tailored quote following a free site survey.';

export const platinumAllowanceHeading =
  'Platinum Property Allowance Structure';

export const platinumAllowanceLead =
  'For housing providers, supported accommodation, and multi-site portfolios, Platinum scales with your estate. Pricing is tailored to your portfolio size and usage following a free site survey.';

export const platinumAllowanceRows: { range: string; pricing: string }[] = [
  { range: 'Up to 5 properties / sites', pricing: '£1,295 + VAT per month' },
  {
    range: '6–15 properties / sites',
    pricing: 'Custom pricing following survey and usage assessment',
  },
  { range: '15–50 properties / sites', pricing: 'Contract pricing available' },
  { range: '50+ properties / sites', pricing: 'Tender / framework agreement pricing' },
];

export const platinumImportantInfo: string[] = [
  'Pricing is based on property size, building condition, occupancy levels, foot traffic, service frequency, and overall maintenance requirements.',
  'Additional properties, increased usage, out-of-hours works, specialist coatings, access equipment, and larger repair works may be charged separately following assessment.',
  'All reactive visits and included repairs are subject to fair usage terms and agreed service limits.',
  'Minimum contract term applies. Tailored commercial maintenance agreements available following free site survey.',
];

export const includedFeatures = [
  'All works carried out by qualified, experienced decorators',
  'Use of premium quality materials',
  'Site left clean and tidy after each visit',
  'Health & Safety and Risk Assessments adhered to',
  'Proactive maintenance to prolong decoration lifespan and reduce future costs',
];

export const excludedFeatures = [
  'Major redecoration works or full repaints',
  'Structural repairs, plastering, or building works',
  'Works caused by water ingress, flooding or major damage',
  'Damage not reported in a timely manner',
  'Additional visits or works outside the scope of the selected package (chargeable at standard rates)',
];

export const contractTerms = [
  {
    title: 'Minimum 12-month term',
    body: 'This Agreement is for a minimum term of 12 months.',
  },
  {
    title: 'Payment terms',
    body: 'The agreed monthly fee will be invoiced in advance on the 1st of each month. Payment is due within 7 days of invoice date.',
  },
  {
    title: 'Fair usage',
    body: 'Reactive visits are included within fair usage on Platinum. Additional visits outside the scope of your plan are chargeable at standard rates.',
  },
  {
    title: 'Clear exclusions',
    body: 'Major structural works, plastering, building works, and damage caused by water ingress are outside the scope of all plans.',
  },
  {
    title: 'Defined response times',
    body: 'Bronze & Silver: additional visits chargeable. Gold: Priority response within 3 working days. Platinum: Priority response within 1–2 working days.',
  },
  {
    title: 'Termination',
    body: "Either party may terminate with 30 days' written notice after the initial 12-month term.",
  },
  {
    title: 'Non-exclusive agreement',
    body: 'This Agreement is non-exclusive — you are free to use other contractors for works outside the plan scope.',
  },
  {
    title: 'Prices exclude VAT',
    body: 'All prices shown are exclusive of VAT at the prevailing rate.',
  },
];

export const trustBarItems = [
  'Quality Workmanship',
  'Reliable Service',
  'Affordable Pricing',
  'Long Term Value',
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
    a: "All plans start with a minimum 12-month term, which gives us enough time to properly assess and maintain the building through a full seasonal cycle. Either party may terminate with 30 days' written notice after the initial term.",
  },
  {
    q: "What's the difference between Bronze, Silver, Gold and Platinum?",
    a: 'Bronze covers a quarterly visit with minor touch-ups only — no reactive call-outs. Silver adds bi-monthly visits and one reactive visit per quarter. Gold provides monthly visits, one reactive visit per month, stain blocking, and priority response within 3 working days. Platinum is our most comprehensive tier: tailored visit schedules, reactive visits within fair usage, priority response within 1–2 working days, all minor repairs included, and discounted rates on larger works.',
  },
  {
    q: 'What counts as a minor repair vs a larger quoted work?',
    a: "Minor works — scuff touch-ups, small holes, localised staining, hairline cracks, stain blocking, small surface repairs — are covered within the plan. Major redecoration, full repaints, structural repairs, plastering, building works, and damage caused by water ingress or flooding are outside scope and quoted separately. We'll always flag this clearly during a scheduled inspection.",
  },
  {
    q: 'Are there reactive call-outs on every plan?',
    a: 'Bronze plans do not include reactive / call-out visits — these are chargeable if required. Silver includes up to 1 reactive visit per quarter. Gold includes up to 1 reactive visit per month. Platinum includes reactive visits within fair usage.',
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

export const planOptions = [
  'Bronze — £495/month',
  'Silver — £695/month',
  'Gold — £895/month',
  'Platinum — £1,295/month',
  'Not sure yet',
];

export const maintenancePhone = '01162914746';
export const maintenancePhoneDisplay = '0116 291 4746';
