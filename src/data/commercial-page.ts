export type Sector = {
  name: string;
  desc: string;
  src: string;
  alt: string;
};

export type ExteriorProject = {
  title: string;
  desc: string;
  src: string;
  alt: string;
};

export type Faq = { q: string; a: string };

export type GalleryImage = {
  src: string;
  alt: string;
};

/** Hero gallery on /commercial (4 equal tiles) */
export const commercialHeroGallery: GalleryImage[] = [
  {
    src: '/images/commercial-interior-qualvis-reception.jpeg',
    alt: 'Repainted Qualvis reception with feature wall and branded signage',
  },
  {
    src: '/images/commercial-exterior-gsf-red-shutters.jpeg',
    alt: 'GSF Car Parts warehouse with freshly coated red roller shutters',
  },
  {
    src: '/images/commercial-interior-warehouse-epoxy-floor-01.jpeg',
    alt: 'Warehouse with new epoxy resin floor and white-painted walls',
  },
  {
    src: '/images/commercial-exterior-wellness-studio-shopfront.jpeg',
    alt: 'Wellness studio shopfront with crisp exterior paint finish',
  },
];

export const commercialHighlights = [
  {
    title: 'Out-of-hours, weekends and nights',
    desc: 'We work around your operations, not the other way around.',
  },
  {
    title: 'RAMS, COSHH and PPE in place',
    desc: 'Risk assessments and method statements supplied before work starts.',
  },
  {
    title: 'Specialist coatings',
    desc: 'Two-pack, intumescent, anti-graffiti, line marking and epoxy floors.',
  },
  {
    title: 'Single point of contact',
    desc: 'One project lead from quote to sign-off. No chasing.',
  },
];

export const interiorSectors: Sector[] = [
  {
    name: 'Manufacturing and factories',
    desc: 'Production floors, mezzanines and plant rooms with coatings that stand up to shift work, forklifts and heavy use.',
    src: '/images/commercial-interior-factory-cmm-floor.jpeg',
    alt: 'Factory floor with fresh epoxy coating and clean painted walls',
  },
  {
    name: 'Offices and corporate HQ',
    desc: 'Open-plan offices, corridors and breakout spaces finished to a standard your team and clients notice.',
    src: '/images/commercial-interior-open-plan-office.jpeg',
    alt: 'Open-plan office with freshly painted walls and crisp trim',
  },
  {
    name: 'Retail and hospitality',
    desc: 'Shop interiors, food courts and customer areas finished to stay presentable through busy trading hours.',
    src: '/images/commercial-interior-costco-food-court-01.jpeg',
    alt: 'Retail food court with repainted walls and ceiling',
  },
  {
    name: 'Schools and education',
    desc: 'Classrooms, halls and circulation spaces decorated safely around term time with minimal disruption.',
    src: '/images/commercial-interior-school-assembly-hall.jpeg',
    alt: 'School assembly hall with bright freshly painted walls',
  },
  {
    name: 'Logistics and warehousing',
    desc: 'Warehouses, distribution units and internal steelwork painted at scale, often in phased sections.',
    src: '/images/commercial-interior-warehouse-epoxy-floor-01.jpeg',
    alt: 'Warehouse interior with epoxy resin floor and white-painted walls',
  },
  {
    name: 'Healthcare and clinics',
    desc: 'Clinics, studios and care settings where a clean, calm finish matters as much as durability.',
    src: '/images/commercial-interior-sculpt-and-form-reception.jpeg',
    alt: 'Clinic reception with feature wall and crisp paint finish',
  },
];

export const exteriorProjects: ExteriorProject[] = [
  {
    title: 'Roller shutters and warehouse fronts',
    desc: 'High-build coatings on shutters, cladding and door gear for logistics and industrial units. Colour matched and sealed for weather.',
    src: '/images/commercial-exterior-gsf-red-shutters.jpeg',
    alt: 'Warehouse with freshly coated red roller shutters',
  },
  {
    title: 'Shopfronts and fascias',
    desc: 'Exterior frontages, signage zones and entrance areas refreshed for retail, wellness and professional services.',
    src: '/images/commercial-exterior-wellness-studio-shopfront.jpeg',
    alt: 'Wellness studio shopfront with fresh exterior paint finish',
  },
  {
    title: 'Steel canopies and stair towers',
    desc: 'External staircases, canopies and access steel prepared and coated for long life in all weathers.',
    src: '/images/commercial-exterior-black-external-staircase-01.jpeg',
    alt: 'Black external staircase with fresh protective coating',
  },
  {
    title: 'Railings, gates and metalwork',
    desc: 'Handrails, perimeter railings and gates stripped back, primed and finished in durable exterior systems.',
    src: '/images/commercial-exterior-blue-railings-park.jpeg',
    alt: 'Blue railings and exterior metalwork on a commercial site',
  },
  {
    title: 'Cladding and unit exteriors',
    desc: 'Industrial units, clad buildings and service yards painted in phased programmes to keep sites operational.',
    src: '/images/commercial-exterior-green-roller-shutter-01.jpeg',
    alt: 'Industrial unit with green roller shutter and clad exterior',
  },
  {
    title: 'Schools and public access',
    desc: 'External ramps, handrails and circulation routes finished with hard-wearing coatings and clear safety markings.',
    src: '/images/commercial-exterior-school-blue-ramp-01.jpeg',
    alt: 'School exterior ramp and handrails with fresh blue coating',
  },
];

export const commercialFaqs: Faq[] = [
  {
    q: 'Do you hang wallpaper or do specialist decorating?',
    a: 'No. We focus on painting. Walls, ceilings, woodwork, metal and masonry. Wallpaper removal can be discussed if surfaces are ready for paint.',
  },
  {
    q: 'Do you carry out plastering or major patching?',
    a: 'Plastering is not a service we offer. We prep and paint sound surfaces and can deal with light filling and sanding as part of preparation.',
  },
  {
    q: 'Do you paint building exteriors?',
    a: 'Yes. Exterior work is a core part of our commercial offer. Shutters, cladding, stair towers, railings, shopfronts and unit exteriors across Leicestershire.',
  },
  {
    q: 'Can you work outside normal business hours?',
    a: 'Yes. Evenings, weekends and night shifts are routine for factories, retail and offices that cannot close during the day.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are Leicester based and work across Leicestershire and the wider East Midlands for commercial clients.',
  },
  {
    q: 'How do quotes work?',
    a: 'Free site visits, clear fixed pricing and itemised scopes. You know what we are doing, what products we use and when we will be finished.',
  },
];

/** Homepage teaser: first four sectors only */
export const homepageSectors = interiorSectors.slice(0, 4);
