import { areaContentBySlug } from './area-content';

export type AreaAccent = 'red' | 'yellow' | 'lime' | 'pink' | 'blue';

export type Area = {
  slug: string;
  name: string;
  /** Town centre, for map pin */
  lat: number;
  lng: number;
  areaIntro: string;
  commercialContext: string;
  nearby: string[];
};

const areaCoords: Omit<Area, 'areaIntro' | 'commercialContext' | 'nearby'>[] = [
  { slug: 'leicester', name: 'Leicester', lat: 52.6369, lng: -1.1398 },
  { slug: 'loughborough', name: 'Loughborough', lat: 52.7721, lng: -1.2042 },
  { slug: 'hinckley', name: 'Hinckley', lat: 52.5409, lng: -1.3745 },
  { slug: 'coalville', name: 'Coalville', lat: 52.7225, lng: -1.3704 },
  { slug: 'melton-mowbray', name: 'Melton Mowbray', lat: 52.7647, lng: -0.8869 },
  { slug: 'market-harborough', name: 'Market Harborough', lat: 52.4775, lng: -0.9208 },
  { slug: 'oadby-wigston', name: 'Oadby & Wigston', lat: 52.5982, lng: -1.0964 },
  { slug: 'ashby-de-la-zouch', name: 'Ashby-de-la-Zouch', lat: 52.7463, lng: -1.4731 },
  { slug: 'lutterworth', name: 'Lutterworth', lat: 52.4563, lng: -1.2005 },
  { slug: 'syston', name: 'Syston', lat: 52.6487, lng: -1.0815 },
  { slug: 'anstey', name: 'Anstey', lat: 52.6719, lng: -1.188 },
  { slug: 'birstall', name: 'Birstall', lat: 52.6739, lng: -1.12 },
  { slug: 'blaby', name: 'Blaby', lat: 52.5738, lng: -1.1653 },
  { slug: 'glenfield', name: 'Glenfield', lat: 52.6489, lng: -1.175 },
  { slug: 'kibworth', name: 'Kibworth', lat: 52.5397, lng: -0.9967 },
  { slug: 'shepshed', name: 'Shepshed', lat: 52.776, lng: -1.2958 },
  { slug: 'earl-shilton', name: 'Earl Shilton', lat: 52.5289, lng: -1.314 },
  { slug: 'narborough', name: 'Narborough', lat: 52.5713, lng: -1.2033 },
];

export const areas: Area[] = areaCoords.map((base) => {
  const content = areaContentBySlug[base.slug];
  if (!content) {
    throw new Error(`Missing area content for slug: ${base.slug}`);
  }
  return { ...base, ...content };
});

/** Names only — used by homepage marquee */
export const areaNames = areas.map((a) => a.name);

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAreaIntro(area: Area): string {
  return area.areaIntro;
}

export function getCommercialContext(area: Area): string {
  return area.commercialContext;
}

export function areaPageTitle(name: string): string {
  return `Painting & Decorating in ${name} | A.S Painting Contractors`;
}

export function areaPageDescription(area: Area): string {
  const snippet = area.areaIntro.length > 155
    ? `${area.areaIntro.slice(0, 152).trim()}…`
    : area.areaIntro;
  return `${snippet} Commercial and domestic painters in ${area.name}, Leicestershire. Free quotes from A.S Painting Contractors.`;
}

export function areaListTitle(name: string): string {
  return `Painting & decorating in ${name}`;
}

const accents: AreaAccent[] = ['red', 'yellow', 'lime', 'pink', 'blue'];

export function areaAccent(index: number): AreaAccent {
  return accents[index % accents.length];
}

/** Resolve nearby slugs to valid areas (drops unknown slugs) */
export function getNearbyAreas(area: Area): Area[] {
  return area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is Area => Boolean(a))
    .filter((a) => a.slug !== area.slug)
    .slice(0, 6);
}
