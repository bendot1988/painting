export type JetSurface = {
  title: string;
  desc: string;
  src: string;
  alt: string;
};

export type JetFaq = { q: string; a: string };

export const jetCleaningPageMeta = {
  title: 'Jet Cleaning & Pressure Washing Leicestershire | A.S Painting',
  description:
    'Professional jet cleaning and pressure washing across Leicestershire — included with exterior painting, or booked as a standalone service for patios, metalwork, garden furniture and more.',
  canonical: '/jet-cleaning/',
} as const;

export const jetCleaningHeroGallery = [
  {
    src: '/images/jet-cleaning-pressure-washer-ava-master-p60-van.jpeg',
    alt: 'AVA Master P60 professional pressure washer beside the A.S Painting Contractors van',
  },
  {
    src: '/images/jet-cleaning-metal-post-in-progress.jpeg',
    alt: 'Jet cleaning a metal garden post — high-pressure spray removing moss and old paint',
  },
  {
    src: '/images/jet-cleaning-garden-bench-in-progress.jpeg',
    alt: 'Pressure washing an ornate metal garden bench on a stone patio',
  },
  {
    src: '/images/jet-cleaning-patio-pressure-washer-setup.jpeg',
    alt: 'Professional jet washer set up on a patio ready to clean weathered garden furniture',
  },
] as const;

export const jetCleaningHighlights = [
  {
    title: 'With every exterior paint job',
    desc: 'Jet cleaning is built into our exterior painting prep where the surface needs it — so paint bonds properly and lasts.',
  },
  {
    title: 'Or book it on its own',
    desc: 'Patios, paths, metalwork, garden furniture and outdoor joinery cleaned without a full re-paint if that is all you need.',
  },
  {
    title: 'Pro kit on site',
    desc: 'We use professional pressure-washing equipment (including AVA Master P60) — controlled, thorough and tidy.',
  },
  {
    title: 'Leicestershire-wide',
    desc: 'Homes and commercial sites across Leicester and Leicestershire. Clear fixed pricing after phone, photo or site survey.',
  },
];

export const jetCleaningSurfaces: JetSurface[] = [
  {
    title: 'Patios, paths and paving',
    desc: 'Moss, algae and grime lifted from stone, concrete and paved areas so surfaces look sharper and stay safer underfoot.',
    src: '/images/jet-cleaning-patio-pressure-washer-setup.jpeg',
    alt: 'Pressure washer on a mossy stone patio before jet cleaning',
  },
  {
    title: 'Garden furniture and metalwork',
    desc: 'Benches, posts, railings and ironwork cleaned of dirt, lichen and failing paint before a fresh coat — or left clean as a standalone tidy-up.',
    src: '/images/jet-cleaning-garden-bench-before.jpeg',
    alt: 'Weathered white garden bench with peeling paint on a mossy patio before jet cleaning',
  },
  {
    title: 'Exterior paint prep',
    desc: 'Render, masonry, fascias, cladding and timber washed down so new coatings go onto a sound, clean surface.',
    src: '/images/jet-cleaning-metal-post-in-progress.jpeg',
    alt: 'Jet cleaning in progress on outdoor metalwork revealing layers under old paint',
  },
  {
    title: 'After a deep clean',
    desc: 'Wet, rinsed surfaces ready for drying and the next stage — whether that is painting or simply enjoying a cleaner outside space.',
    src: '/images/jet-cleaning-metal-post-wet-after.jpeg',
    alt: 'Metal post base and wet paving after jet cleaning',
  },
];

export const jetCleaningFaqs: JetFaq[] = [
  {
    q: 'Is jet cleaning included with exterior painting?',
    a: 'Yes where the job needs it. Exterior painting depends on a clean surface — we jet clean as part of prep on exterior programmes so coatings bond properly. We will confirm what is included when we quote.',
  },
  {
    q: 'Can I book jet cleaning without painting?',
    a: 'Yes. Jet cleaning is available as a service in its own right for patios, paths, garden furniture, metalwork and similar outdoor surfaces across Leicestershire.',
  },
  {
    q: 'What is the difference between jet cleaning and pressure washing?',
    a: 'Same family of work — high-pressure water cleaning. We use professional equipment to remove moss, algae, dirt and loose coatings safely for the surface we are treating.',
  },
  {
    q: 'Will it damage soft stone or paint?',
    a: 'We match pressure and technique to the material. Soft masonry, weathered timber and delicate ironwork need a careful approach — that is part of the survey before we start.',
  },
  {
    q: 'Do you cover commercial sites as well as homes?',
    a: 'Yes. Homes, gardens, shopfronts, yards and commercial exteriors. Ask when you request a quote and we will scope access, water supply and working hours with you.',
  },
];
