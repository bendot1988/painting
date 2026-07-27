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
