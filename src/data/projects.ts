export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  tag: 'commercial' | 'domestic';
  title: string;
  shortTitle: string;
  meta: string;
  location: string;
  eyebrow: string;
  lead: string;
  narrative: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
  seoDescription: string;
};

/**
 * Projects with a full write-up and photo set.
 * Work gallery cards with a matching slug link through to /work/[slug]/.
 * Single-photo jobs stay on /work/ without a detail page.
 */
export const projects: Project[] = [
  {
    slug: '200-year-old-farmhouse-full-repaint',
    tag: 'domestic',
    title: '200-Year-Old Farmhouse Full Re-Paint',
    shortTitle: 'Farmhouse · full re-paint',
    meta: 'Full exterior & woodwork · Leicestershire',
    location: 'Leicestershire',
    eyebrow: 'Domestic · Period property',
    lead:
      'A complete exterior re-paint for a 200-year-old farmhouse — brick elevations, sash windows, doors, gates and garden joinery brought back to a crisp, weather-ready finish.',
    narrative: [
      'Period farmhouses need more than a quick coat. Brickwork, timber and ironwork all move differently with the weather, and older properties often have layers of paint that need careful stripping back before anything new goes on. On this Leicestershire farmhouse we repainted the full exterior: white window frames and door surrounds, red entrance doors, courtyard elevations and the garden gate — all prepped properly and finished with systems suited to each surface.',
      'We worked around the layout of the property, from the formal front elevation with its fanlight and canopy to the rear courtyard, side passages and perimeter walls. Ladders and careful masking kept brickwork clean while sash frames, architraves and iron gate furniture were stripped, primed and coated for a sharp, lasting finish. The A.S Painting team on site meant one crew, one schedule and consistent quality from the front door to the garden gate.',
      'If you own a period home, farmhouse or character property in Leicestershire and need exterior painting — or a full re-decoration inside and out — we visit free of charge, agree a fixed price and plan the work around how you use the property.',
    ],
    hero: {
      src: '/images/domestic-exterior-farmhouse-full-repaint-front.jpeg',
      alt: 'Front elevation of a 200-year-old red brick farmhouse with freshly painted white window frames, wooden front door and entrance canopy',
    },
    gallery: [
      {
        src: '/images/domestic-exterior-farmhouse-full-repaint-courtyard.jpeg',
        alt: 'Farmhouse courtyard with freshly painted red entrance doors, white sash windows and arched window on red brick',
      },
      {
        src: '/images/domestic-exterior-farmhouse-full-repaint-gate.jpeg',
        alt: 'Newly painted red timber gate set in a weathered red brick garden wall at the farmhouse',
      },
      {
        src: '/images/domestic-exterior-farmhouse-full-repaint-rear.jpeg',
        alt: 'Rear courtyard of the farmhouse with white-painted windows and doors against historic red brick',
      },
      {
        src: '/images/domestic-exterior-farmhouse-full-repaint-van.jpeg',
        alt: 'A.S Painting Contractors van parked at the ivy-clad farmhouse during the exterior re-paint project',
      },
    ],
    seoDescription:
      'Full exterior re-paint of a 200-year-old farmhouse in Leicestershire. Windows, doors, gates and woodwork refreshed by A.S Painting Contractors.',
  },
  {
    slug: 'hazel-community-primary-school',
    tag: 'commercial',
    title: 'Hazel Community Primary School',
    shortTitle: 'Hazel Community Primary · interiors',
    meta: 'School painting · Leicester',
    location: 'Hazel Street, Leicester',
    eyebrow: 'Commercial · Schools',
    lead:
      'A full interior refresh for a busy Leicester primary school: corridors, classrooms and the assembly hall, finished bright, clean and ready for term.',
    narrative: [
      'School painting needs a careful hand. Circulation spaces take heavy daily traffic, classrooms need a finish that stays bright under natural light, and halls have to feel welcoming for assemblies and events. At Hazel Community Primary School we refreshed key interior areas so the building looks sharp and well cared for.',
      'We painted white brick corridors and arched openings, classroom walls and window surrounds, and the large assembly hall with its high vaulted timber roof. Careful cutting-in around stained glass, door frames and wall graphics kept existing school branding intact while the new paint lifted the whole space.',
      'If you manage a school, academy or education site in Leicestershire and need commercial painting around term time, we plan the work to keep disruption low and standards high.',
    ],
    hero: {
      src: '/images/commercial-interior-hazel-community-primary-school-corridor-01.jpeg',
      alt: 'Freshly painted white brick archway looking into a Hazel Community Primary School corridor with blue carpet and Hazel Pride mural',
    },
    gallery: [
      {
        src: '/images/commercial-interior-hazel-community-primary-school-corridor-02.jpeg',
        alt: 'School corridor at Hazel Community Primary with white painted brick walls, coloured glass panels and blue carpet',
      },
      {
        src: '/images/commercial-interior-hazel-community-primary-school-classroom.jpeg',
        alt: 'Bright classroom at Hazel Community Primary School with freshly painted white brick walls and large windows',
      },
      {
        src: '/images/commercial-interior-hazel-community-primary-school-assembly-hall.jpeg',
        alt: 'School assembly hall with white painted brick walls, vaulted timber roof and polished wooden floor',
      },
      {
        src: '/images/commercial-exterior-hazel-community-primary-school-van.jpeg',
        alt: 'A.S Painting Contractors commercial painting van parked outside Hazel Community Primary School in Leicester',
      },
    ],
    seoDescription:
      'Commercial school painting at Hazel Community Primary School in Leicester. Corridors, classrooms and assembly hall refreshed by A.S Painting Contractors.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectHref(slug: string): string {
  return `/work/${slug}/`;
}
