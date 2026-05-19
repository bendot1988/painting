export type AreaGalleryImage = {
  src: string;
  /** Use {area} for the town name, e.g. "Freshly painted office interior in {area}" */
  altTemplate: string;
};

/** Project shots shown on every /areas/[slug] page — alt text is localised per town */
export const areaGalleryPool: AreaGalleryImage[] = [
  {
    src: '/images/commercial-exterior-gsf-red-shutters.jpeg',
    altTemplate: 'A.S Painting Contractors van outside a {area} factory warehouse with freshly coated red roller shutters',
  },
  {
    src: '/images/commercial-interior-warehouse-epoxy-floor-01.jpeg',
    altTemplate: 'Warehouse interior with new epoxy floor and white-painted walls in {area}',
  },
  {
    src: '/images/commercial-interior-open-plan-office.jpeg',
    altTemplate: 'Freshly painted open-plan office interior in {area}',
  },
  {
    src: '/images/commercial-interior-navy-breakout-area-01.jpeg',
    altTemplate: 'Office breakout area with navy feature walls repainted in {area}',
  },
  {
    src: '/images/commercial-interior-qualvis-reception.jpeg',
    altTemplate: 'Commercial reception with feature wall and crisp paint finish in {area}',
  },
  {
    src: '/images/commercial-interior-factory-cmm-floor.jpeg',
    altTemplate: 'Factory production floor with fresh industrial coating in {area}',
  },
  {
    src: '/images/commercial-interior-school-assembly-hall.jpeg',
    altTemplate: 'School assembly hall repainted with bright clean walls in {area}',
  },
  {
    src: '/images/commercial-interior-costco-food-court-01.jpeg',
    altTemplate: 'Retail food court walls and ceilings repainted out of hours in {area}',
  },
  {
    src: '/images/commercial-exterior-wellness-studio-shopfront.jpeg',
    altTemplate: 'Wellness studio shopfront with fresh exterior paintwork in {area}',
  },
  {
    src: '/images/commercial-exterior-blue-railings-park.jpeg',
    altTemplate: 'Blue exterior railings and metalwork freshly coated on a {area} commercial site',
  },
  {
    src: '/images/commercial-exterior-green-roller-shutter-01.jpeg',
    altTemplate: 'Industrial unit with green roller shutter and clad exterior painted in {area}',
  },
  {
    src: '/images/commercial-interior-sculpt-and-form-reception.jpeg',
    altTemplate: 'Modern commercial reception fit-out with feature wall in {area}',
  },
  {
    src: '/images/domestic-exterior-period-white-house-front.jpeg',
    altTemplate: 'Period home exterior with freshly painted white render in {area}',
  },
  {
    src: '/images/domestic-interior-sage-green-kitchen-01.jpeg',
    altTemplate: 'Hand-painted sage green shaker kitchen in a {area} home',
  },
  {
    src: '/images/domestic-interior-hallway-and-staircase.jpeg',
    altTemplate: 'Hallway and staircase with fresh paint and crisp woodwork in {area}',
  },
  {
    src: '/images/domestic-interior-grey-shaker-kitchen.jpeg',
    altTemplate: 'Grey shaker kitchen with hand-finished cabinetry in {area}',
  },
  {
    src: '/images/domestic-exterior-grey-blue-rendered-house.jpeg',
    altTemplate: 'Rendered house exterior in grey-blue with fresh window frames in {area}',
  },
  {
    src: '/images/domestic-interior-marble-living-room-tv-wall.jpeg',
    altTemplate: 'Living room feature wall with marble-effect finish in {area}',
  },
  {
    src: '/images/commercial-interior-yellow-accent-office.jpeg',
    altTemplate: 'Office with bold yellow accent wall and white trim painted in {area}',
  },
  {
    src: '/images/commercial-exterior-senior-cars-showroom-01.jpeg',
    altTemplate: 'Car showroom exterior with fresh commercial paint finish in {area}',
  },
  {
    src: '/images/domestic-interior-oak-staircase-hallway.jpeg',
    altTemplate: 'Oak staircase and hallway with freshly painted walls in {area}',
  },
  {
    src: '/images/commercial-interior-arched-corridor.jpeg',
    altTemplate: 'Repainted arched commercial corridor in {area}',
  },
  {
    src: '/images/domestic-interior-classic-kitchen-island-detail-01.jpeg',
    altTemplate: 'Hand-painted period kitchen island with detailed mouldings in {area}',
  },
  {
    src: '/images/commercial-exterior-school-blue-ramp-02.jpeg',
    altTemplate: 'School exterior ramp and handrails with fresh blue protective coating in {area}',
  },
];

export function localizeAreaAlt(template: string, areaName: string): string {
  return template.replace(/\{area\}/g, areaName);
}

export function getAreaGalleryImages(areaName: string) {
  return areaGalleryPool.map((item) => ({
    src: item.src,
    alt: localizeAreaAlt(item.altTemplate, areaName),
  }));
}

/** YouTube thumbnail alt on area pages */
export function areaVideoThumbnailAlt(videoTitle: string, areaName: string): string {
  const cleaned = videoTitle.replace(/\s*#\S+/g, '').replace(/\s+/g, ' ').trim();
  return `${cleaned} — painting and decorating in ${areaName}`;
}
