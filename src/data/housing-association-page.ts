export type HaService = {
  title: string;
  desc: string;
  src?: string;
  alt?: string;
};

export type HaTrustPoint = {
  title: string;
  desc: string;
};

export type HaProcessStep = {
  n: string;
  title: string;
  desc: string;
};

export type HaFaq = { q: string; a: string };

export const housingAssociationPageMeta = {
  title: 'Housing Association Painting Leicestershire | A.S Painting',
  description:
    'Void property, communal and cyclical decorating for housing associations, councils and maintenance contractors across Leicestershire. RAMS, KPIs, tenant liaison.',
  canonical: '/housing-association-painting/',
  slug: 'housing-association-painting',
} as const;

export const heroGallery = [
  {
    src: '/images/housing-association/ha-kitchen-marble-worktop.png',
    alt: 'Refurbished kitchen with marble-effect worktops and sage cabinetry in a social housing property',
  },
  {
    src: '/images/housing-association/ha-hallway-burgundy-door.png',
    alt: 'Repainted hallway with grey walls, white woodwork and burgundy front door ready for handover',
  },
  {
    src: '/images/housing-association/ha-bedroom-blinds.png',
    alt: 'Freshly decorated bedroom with cream walls, white trim and blinds in a void property',
  },
  {
    src: '/images/housing-association/ha-bathroom-white.png',
    alt: 'Repainted bathroom with white walls, tiles and dark vinyl floor in social housing stock',
  },
] as const;

/** Gallery between “Why choose us” and “How we work” */
export const midPageGallery = [
  {
    src: '/images/housing-association/ha-hallway-staircase.png',
    alt: 'White hallway and staircase with gloss woodwork repainted during a void turnaround',
  },
  {
    src: '/images/housing-association/ha-landing-grey.png',
    alt: 'Grey landing and hallway with white radiator and repainted bathroom beyond',
  },
  {
    src: '/images/housing-association/ha-kitchen-sage-galley.png',
    alt: 'Sage green kitchen walls and wood worktops repainted in a housing association void',
  },
  {
    src: '/images/housing-association/ha-kitchen-wood-units.png',
    alt: 'Kitchen with refreshed white walls, tiled splashback and wood-effect units',
  },
  {
    src: '/images/housing-association/ha-void-tools.png',
    alt: 'Void property with Johnstone\'s Trade paint and professional decorating tools on site',
  },
  {
    src: '/images/housing-association/ha-kitchen-prep.png',
    alt: 'Kitchen prepared for painting with protected worktops, ladder and trade materials',
  },
] as const;

/** Shown under the hero — hover for plain-English tooltips */
export const heroTrustPoints = [
  {
    label: 'RAMS on every job',
    tip: 'Risk assessments and method statements — how we plan each job safely before work starts, including access, PPE, COSHH, fire routes and resident safety.',
  },
  {
    label: 'Business insurance in place',
    tip: 'Appropriate business insurance for painting and decorating, including public liability cover. Certificates available on request for your procurement file.',
  },
] as const;

export const housingAssociationServices: HaService[] = [
  {
    title: 'Void property redecoration',
    desc: 'Fast-turnaround repainting of empty homes between tenancies — walls, ceilings, woodwork and kitchens — programmed to your void KPI and SLA targets.',
    src: '/images/housing-association/ha-void-tools.png',
    alt: 'Empty void property with trade paint and decorating equipment ready for redecoration',
  },
  {
    title: 'Planned & cyclical programmes',
    desc: 'Scheduled multi-year external and communal decoration cycles, scoped in phases so blocks stay partly occupied and programmes stay on programme.',
    src: '/images/housing-association/ha-hallway-staircase.png',
    alt: 'Hallway and staircase with fresh white paint during a planned redecoration programme',
  },
  {
    title: 'Communal areas',
    desc: 'Entrances, hallways, stairwells, landings and lift lobbies in blocks and sheltered schemes — durable, wipeable finishes for high footfall.',
    src: '/images/housing-association/ha-landing-grey.png',
    alt: 'Repainted grey landing and hallway in communal social housing areas',
  },
  {
    title: 'External decoration',
    desc: 'Fascias, soffits, render, masonry, windows, doors and garages — specified systems for social housing stock across Leicestershire.',
    src: '/images/housing-association/ha-hallway-burgundy-door.png',
    alt: 'Repainted internal hallway leading to a refreshed front door on housing stock',
  },
  {
    title: 'Responsive repairs decoration',
    desc: 'Making good after plumbing, electrical or building repairs — matched finishes and snagging so voids and occupied lets return to standard quickly.',
    src: '/images/housing-association/ha-bedroom-white-in-progress.png',
    alt: 'Bedroom walls and woodwork repainted with trade materials during responsive decoration',
  },
  {
    title: 'Sheltered & supported living',
    desc: 'Sensitive working around elderly and vulnerable residents — quiet methods, clear communication and minimal disturbance to daily routines.',
    src: '/images/housing-association/ha-bedroom-blinds.png',
    alt: 'Finished bedroom with cream walls and blinds ready for sheltered housing residents',
  },
  {
    title: 'Damp & mould redecoration',
    desc: 'Preparation and redecoration following mould treatment, including anti-mould coatings where your specification requires — an increasing priority for social landlords.',
    src: '/images/housing-association/ha-bedroom-aubergine.png',
    alt: 'Freshly painted bedroom walls following damp and mould treatment in a void property',
  },
];

export const whyChoosePoints: HaTrustPoint[] = [
  {
    title: 'RAMS on every job',
    desc: 'Risk assessments and method statements for every project — voids, communal blocks and externals. Written before work starts so your team knows how we will access, protect and complete the job safely.',
  },
  {
    title: 'Business insurance',
    desc: 'Appropriate business insurance in place for commercial and social housing work, including public liability. Certificates available on request for your procurement file.',
  },
  {
    title: 'Safeguarding-aware teams',
    desc: 'We work respectfully in occupied homes and communal areas, following your safeguarding and access protocols. Tell us if your contract requires additional checks.',
  },
  {
    title: 'Tenant liaison',
    desc: 'Clear notice, protected routes and tidy daily handover. We coordinate with housing officers and managing agents so residents know what to expect.',
  },
  {
    title: 'Minimal disruption',
    desc: 'Phased programmes, out-of-hours options where agreed, and protection of floors, lifts and shared routes — so blocks stay live while work continues.',
  },
  {
    title: 'KPI & SLA delivery',
    desc: 'Reliable scheduling and progress updates so voids and cyclical programmes hit your contractual targets.',
  },
];

export const processSteps: HaProcessStep[] = [
  {
    n: '01',
    title: 'Enquiry & scope',
    desc: 'You share stock lists, specifications, void numbers or programme dates. We clarify access, products, KPIs and who we report to on site.',
  },
  {
    n: '02',
    title: 'Survey & RAMS',
    desc: 'Site visits, measurements and photos. We produce risk assessments, method statements and a fixed-price quote aligned to your scope.',
  },
  {
    n: '03',
    title: 'Scheduling',
    desc: 'Dates agreed with your team or prime contractor — including void windows, cyclical phases and any out-of-hours requirements.',
  },
  {
    n: '04',
    title: 'Tenant communication',
    desc: 'Notices and access arrangements through your housing team. We work to agreed routes, times and safeguarding rules.',
  },
  {
    n: '05',
    title: 'Preparation & painting',
    desc: 'Protection, prep and coating to your specification. Supervised crews, daily tidy-up and one point of contact throughout.',
  },
  {
    n: '06',
    title: 'Sign-off',
    desc: 'Walk-round with your surveyor or contract manager. Snagging completed and handover documented for void or programme close-out.',
  },
];

export const areasCovered = [
  'Leicester',
  'Loughborough',
  'Hinckley',
  'Coalville',
  'Melton Mowbray',
  'Market Harborough',
  'and wider Leicestershire',
] as const;

export const areasNote =
  '[Confirm exact towns and radius covered — e.g. within X miles of Leicester, including Blaby, Oadby, Wigston, Coalville, etc.]';

export const housingAssociationFaqs: HaFaq[] = [
  {
    q: 'Who do you work with in the social housing sector?',
    a: 'We work with housing associations (registered providers), local authority housing teams and property-maintenance contractors who hold framework or responsive contracts on their behalf. Tell us whether you are procuring direct or via a prime contractor and we will align quotes and RAMS accordingly.',
  },
  {
    q: 'What void turnaround can you achieve?',
    a: 'Turnaround depends on property size, specification and access. [Confirm typical void turnaround — e.g. X days for a two-bed void.] We programme voids against your KPI/SLA and flag any prep issues at survey so dates stay realistic.',
  },
  {
    q: 'Can you work in occupied blocks and sheltered schemes?',
    a: 'Yes. Communal and external phases are planned to keep routes open where possible. In sheltered and supported living we work sensitively around residents, with notice periods and quiet working methods agreed in advance.',
  },
  {
    q: 'What insurance do you hold?',
    a: 'We carry appropriate business insurance for painting and decorating work, including public liability cover. We are not on schemes such as CHAS or Constructionline, but insurance certificates can be supplied for your records. Ask if you need a specific level of cover for your contract.',
  },
  {
    q: 'Do you supply RAMS and method statements?',
    a: 'Yes — on every job. RAMS means risk assessments and method statements: how we will work safely on site, including access, PPE, COSHH, waste, fire routes and resident safety. We issue them before work starts and can follow your client\'s template where required.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We are Leicester-based and work across Leicestershire for social landlords and their contractors — including Leicester, Loughborough, Hinckley, Coalville and Melton Mowbray. [Owner to confirm full coverage radius.]',
  },
];

/** Excerpt from Reena Purewal’s Google review (VAL communal corridors project) */
export const housingAssociationFeaturedReview = {
  reviewer: 'Reena Purewal',
  org: 'Voluntary Action LeicesterShire',
  quote:
    'Ash worked evenings and weekends to ensure the deadline was met on a large project painting our dated corridors and front staircase. The quality of his work truly stands out. Moreover, the quotes are very reasonable, offering great value for the excellent service he delivers.',
  href: '/reviews/',
} as const;
