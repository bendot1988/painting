export type ProjectImage = {
  src: string;
  alt: string;
  /** Optional label e.g. Before / During / After */
  caption?: string;
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
    slug: 'cast-iron-water-pump-lamppost-planter',
    tag: 'domestic',
    title: 'Cast iron water pump, lamppost & planter',
    shortTitle: 'Cast iron · pump, lamppost & planter',
    meta: 'Garden metalwork · Leicestershire',
    location: 'Leicestershire',
    eyebrow: 'Domestic · Garden metalwork',
    lead:
      'Ornamental outdoor ironwork refreshed — a vintage water pump and lamppost in gloss black, plus an ornate urn planter finished crisp white.',
    narrative: [
      'Garden cast iron needs careful prep: flaking paint, rust in the detail, and weather that sits in every moulding. On this Leicestershire garden we restored a decorative water pump and a tall lamppost in solid black, cutting in around brick, trellis and planting so the finish looks sharp without marking the surrounds.',
      'The ornate urn planter and pedestal were finished in bright white — scrollwork, handles and fluting picked out cleanly so the piece reads as a garden feature again rather than a tired ornament. Exterior metal systems were chosen for durability outside.',
      'If your garden has pumps, lampposts, planters, railings or other cast iron that needs jet cleaning and a fresh coat, we survey free of charge and agree a fixed price before we start.',
    ],
    hero: {
      src: '/images/domestic-exterior-cast-iron-water-pump-black.jpeg',
      alt: 'Freshly painted black cast iron water pump against a brick wall with garden pots at the base',
    },
    gallery: [
      {
        src: '/images/domestic-exterior-cast-iron-lamppost-black.jpeg',
        alt: 'Tall cast iron lamppost freshly painted gloss black in a garden corner with stepladder nearby',
      },
      {
        src: '/images/domestic-exterior-ornate-planter-white.jpeg',
        alt: 'Ornate white-painted cast iron urn planter on a pedestal in a sunny Leicestershire garden',
      },
    ],
    seoDescription:
      'Domestic painting of cast iron garden metalwork in Leicestershire — water pump, lamppost and ornate planter by A.S Painting Contractors.',
  },
  {
    slug: 'canopy-front-door-fascia-soffits',
    tag: 'domestic',
    title: 'Canopy, front door, fascia & soffits',
    shortTitle: 'Canopy · door · fascia & soffits',
    meta: 'Exterior woodwork · Leicestershire',
    location: 'Leicestershire',
    eyebrow: 'Domestic · Exterior woodwork',
    lead:
      'A crisp white refresh for a porch canopy, front door surround, fascias and soffits — tidy prep and a weather-ready finish that lifts the whole entrance.',
    narrative: [
      'Entrance woodwork takes the weather first: rain on the canopy, sun on the fascias, and constant use at the front door. On this Leicestershire home we painted the gabled porch canopy — brackets, soffit and finial — along with the fascia and soffit lines at the roofline, so the white timber reads clean against the brick.',
      'Careful masking kept brickwork and roof tiles free of paint, and the finish was chosen for exterior timber so it stays bright and durable. The result is a sharper kerb appeal without a full house re-paint — just the details that catch the eye every time you come home.',
      'If your canopy, fascias, soffits or front door need refreshing, we visit free of charge, agree a fixed price and leave the site tidy at the end of each day.',
    ],
    hero: {
      src: '/images/domestic-exterior-canopy-front-door-fascia-soffits-entrance.jpeg',
      alt: 'Freshly painted white porch canopy and front door on a brick house in Leicestershire',
    },
    gallery: [
      {
        src: '/images/domestic-exterior-canopy-fascia-soffits-roofline.jpeg',
        alt: 'White-painted porch canopy, fascia boards and soffits against brick and blue sky',
      },
    ],
    seoDescription:
      'Domestic exterior painting of porch canopy, front door, fascias and soffits in Leicestershire by A.S Painting Contractors.',
  },
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
  {
    slug: 'church-doors-painting-leicester',
    tag: 'commercial',
    title: 'Church doors & woodwork, Leicester',
    shortTitle: 'Church · doors & woodwork',
    meta: 'Church painting · Leicester',
    location: 'Leicester',
    eyebrow: 'Commercial · Places of worship',
    lead:
      'Exterior and interior door sets at a Leicester church — studded arched entrances, folding glass doors and foyer partitions finished in a rich gloss green.',
    narrative: [
      'Church buildings ask for careful painting. Historic timber, ironmongery and public spaces all need a finish that looks sharp and stands up to daily use. On this Leicester church project we painted exterior arched entrance doors with studded timber and iron hinges, folding glass doors onto the patio, and interior green partition doors looking through into the main hall.',
      'Prep and cutting-in around brick arches, stone surrounds and glass panes kept the architecture clean while the new gloss lifted every entrance. Work was planned around the building’s schedule so services and visitors were disrupted as little as possible.',
      'If you manage a church, chapel or community place of worship in Leicestershire and need commercial painting — doors, woodwork, interiors or exteriors — we survey free of charge and agree a fixed price before we start.',
    ],
    hero: {
      src: '/images/commercial-exterior-church-leicester-gothic-entrance-doors.jpeg',
      alt: 'Freshly painted gloss green Gothic arched church doors set in a stone and brick entrance archway in Leicester',
    },
    gallery: [
      {
        src: '/images/commercial-exterior-church-leicester-studded-arched-doors.jpeg',
        alt: 'Studded arched timber church doors freshly painted gloss green against red brick',
      },
      {
        src: '/images/commercial-exterior-church-leicester-folding-glass-doors.jpeg',
        alt: 'Exterior folding glass doors painted forest green on a red brick church building in Leicester',
      },
      {
        src: '/images/commercial-interior-church-leicester-green-partition-foyer.jpeg',
        alt: 'Interior church foyer with high-gloss green glass partition doors and brick arch',
      },
      {
        src: '/images/commercial-interior-church-leicester-green-doors-hall.jpeg',
        alt: 'Green-painted interior glass doors looking through into a Leicester church hall with parquet flooring',
      },
    ],
    seoDescription:
      'Commercial church painting in Leicester. Exterior arched doors, folding glass doors and interior partitions finished by A.S Painting Contractors.',
  },
  {
    slug: 'celloglas-commercial-cladding-painting',
    tag: 'commercial',
    title: 'Celloglas · commercial cladding painting',
    shortTitle: 'Celloglas · cladding',
    meta: 'Cladding + MEWP access · Leicestershire',
    location: 'Leicestershire',
    eyebrow: 'Commercial · Working at height',
    lead:
      'Full industrial cladding re-paint at Celloglas — prepared, coated and finished at height with cherry-picker (MEWP) access so the whole elevation stays consistent.',
    narrative: [
      'Warehouse and factory cladding sits well above safe ladder height. On this Celloglas project we programmed a cherry picker (articulated boom / MEWP) so every bay of the vertical metal cladding could be reached safely — from the brick line to the eaves — with IPAF-qualified operatives and site controls in place.',
      'The photos show the job in stages: weathered cladding before and during prep, panels progressing through the programme, and the site with our van once the fresh coating was on. Phasing kept the unit operational while we worked through the elevation section by section.',
      'If your cladding, fascias or high elevations need painting, we survey free of charge, include powered access in the method where it is needed, and agree a fixed price before work starts.',
    ],
    hero: {
      src: '/images/commercial-exterior-celloglas-cladding-painting-during-elevation.jpeg',
      alt: 'During: Celloglas warehouse cladding mid re-paint, showing old yellow-green panels next to freshly coated grey cladding',
      caption: 'During',
    },
    gallery: [
      {
        src: '/images/commercial-exterior-celloglas-cladding-painting-during-prep.jpeg',
        alt: 'During: Vertical metal cladding at Celloglas with surface prep and primer patches before full coating',
        caption: 'During · prep',
      },
      {
        src: '/images/commercial-exterior-celloglas-cladding-painting-cherry-picker-01.jpeg',
        alt: 'Before: Cherry picker (MEWP) set up in front of Celloglas for commercial cladding painting at height',
        caption: 'Before · MEWP access',
      },
      {
        src: '/images/commercial-exterior-celloglas-cladding-painting-van-site.jpeg',
        alt: 'After: A.S Painting Contractors van on site at Celloglas with freshly coated grey commercial cladding behind',
        caption: 'After · on site',
      },
    ],
    seoDescription:
      'Commercial cladding painting at Celloglas in Leicestershire. Full elevation re-coat with cherry picker / MEWP working at height by A.S Painting Contractors.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectHref(slug: string): string {
  return `/work/${slug}/`;
}
