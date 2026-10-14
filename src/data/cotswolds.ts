import type { AreaFaq } from './area-content';

export type CotswoldsTown = {
  name: string;
  /** Town centre, for map pin */
  lat: number;
  lng: number;
  note: string;
};

export const cotswoldsHref = '/areas/cotswolds/';

export const cotswoldsPageTitle = 'Painters & Decorators Cotswolds | A.S Painting Contractors';

export const cotswoldsPageDescription =
  'Cotswolds painters & decorators for luxury homes, period properties and commercial contracts in Moreton-in-Marsh, Broadway, Chipping Campden, Stow and Burford.';

export const cotswoldsTowns: CotswoldsTown[] = [
  {
    name: 'Moreton-in-Marsh',
    lat: 51.9897,
    lng: -1.7036,
    note: 'Market town on the Fosse Way with a busy Tuesday market. Stone shopfronts, inns and town houses that need regular exterior upkeep.',
  },
  {
    name: 'Chipping Campden',
    lat: 52.0518,
    lng: -1.7801,
    note: 'Historic wool town with a honey-stone High Street and the 17th-century Market Hall. Period details that need careful prep and the right paint.',
  },
  {
    name: 'Broadway',
    lat: 52.0372,
    lng: -1.859,
    note: 'Village with a wide High Street of galleries, hotels and holiday lets, where kerb appeal matters all year round.',
  },
  {
    name: 'Chipping Norton',
    lat: 51.9413,
    lng: -1.5461,
    note: 'Oxfordshire market town with Georgian frontages, family homes and local businesses on and around the market place.',
  },
  {
    name: 'Burford',
    lat: 51.8076,
    lng: -1.6366,
    note: 'Steep High Street running down to the River Windrush, lined with listed buildings, pubs and independent shops.',
  },
  {
    name: 'Northleach',
    lat: 51.8301,
    lng: -1.8379,
    note: 'Small wool town around a medieval market square, with stone cottages and larger houses in the surrounding villages.',
  },
  {
    name: 'Stow-on-the-Wold',
    lat: 51.9299,
    lng: -1.7236,
    note: 'Hilltop market town where weather-facing joinery and exteriors take a battering. Antiques shops, inns and period homes around the square.',
  },
  {
    name: 'Bourton-on-the-Water',
    lat: 51.8859,
    lng: -1.759,
    note: 'Riverside village on the Windrush with a high number of guest houses, cafés and holiday cottages that need refreshing between seasons.',
  },
];

export const cotswoldsTownNames = cotswoldsTowns.map((town) => town.name);

export const cotswoldsFaqs: AreaFaq[] = [
  {
    q: 'Do you really cover the Cotswolds from Leicester?',
    a: 'Yes. We have extended our service area from our Leicester base to Moreton-in-Marsh, Chipping Campden, Broadway, Chipping Norton, Burford, Northleach, Stow-on-the-Wold, Bourton-on-the-Water and the villages around them. You get a fixed quote before any work starts, so you know the full cost upfront.',
  },
  {
    q: 'Can you paint listed and period properties?',
    a: 'Yes. We regularly work on older properties, including a 200-year-old farmhouse we fully repainted. On stone, lime render and old timber we specify breathable paint systems so moisture can escape, and we prepare sash windows, doors and joinery by hand. If your home is listed, we can work to the specification agreed with your conservation officer.',
  },
  {
    q: 'Do you paint exteriors on large houses and stone cottages?',
    a: 'Yes. Exterior painting is a big part of our work: windows, doors, fascias, soffits, gates, railings and render. Our operatives hold IPAF qualifications for cherry pickers and other powered access, so gables, chimneys and tall elevations on larger properties are no problem.',
  },
  {
    q: 'Do you work for hotels, pubs and holiday lets?',
    a: 'Yes. We paint commercial properties of all kinds, including hospitality, retail and offices. We plan work around bookings and trading hours, and out-of-hours working is available, so guests and customers are disturbed as little as possible.',
  },
  {
    q: 'Can you look after a property on an ongoing basis?',
    a: 'Yes. Our maintenance plans suit landlords, holiday let owners and commercial properties that want regular touch-ups and planned repainting without having to chase decorators each time.',
  },
  {
    q: 'How do I get a quote for a Cotswolds property?',
    a: 'Call, WhatsApp or use our quote form. Phone and photo quotes are free, and we reply the same day during working hours. If we need to visit before quoting, our standard site visit policy applies.',
  },
];
