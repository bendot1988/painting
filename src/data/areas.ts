import { areaContentBySlug, type AreaFaq } from './area-content';
import { areaMetaDescriptionBySlug } from './area-meta';

export type AreaAccent = 'red' | 'yellow' | 'lime' | 'pink' | 'blue';

export type Area = {
  slug: string;
  name: string;
  /** Town centre, for map pin */
  lat: number;
  lng: number;
  areaIntro: string;
  localLandmark: string;
  industrialEstates: string;
  housingStock: string;
  commercialContext: string;
  domesticContext: string;
  faqs: AreaFaq[];
  nearby: string[];
};

/** Nuneaton and Rugby were on the original plan list but sit outside core Leicestershire coverage — confirm with client before adding pages. */

const areaCoords: Omit<
  Area,
  | 'areaIntro'
  | 'localLandmark'
  | 'industrialEstates'
  | 'housingStock'
  | 'commercialContext'
  | 'domesticContext'
  | 'faqs'
  | 'nearby'
>[] = [
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

/** Split long area intro into two columns at a sentence boundary */
export function splitAreaIntro(text: string): [string, string] {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (sentences && sentences.length >= 2) {
    const mid = Math.ceil(sentences.length / 2);
    return [
      sentences.slice(0, mid).join('').trim(),
      sentences.slice(mid).join('').trim(),
    ];
  }
  const mid = Math.floor(text.length / 2);
  const breakAt = text.lastIndexOf(' ', mid);
  const point = breakAt > mid * 0.55 ? breakAt : mid;
  return [text.slice(0, point).trim(), text.slice(point).trim()];
}

export function getCommercialContext(area: Area): string {
  return area.commercialContext;
}

export function getDomesticContext(area: Area): string {
  return area.domesticContext;
}

export function areaPageTitle(name: string): string {
  return `Painting & Decorating in ${name} | A.S Painting Contractors`;
}

export function areaPageDescription(area: Area): string {
  return (
    areaMetaDescriptionBySlug[area.slug] ??
    `Painting and decorating in ${area.name}, Leicestershire. Commercial and domestic work, free fixed quotes. A.S Painting Contractors.`
  );
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
