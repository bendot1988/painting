export type WorkItem = {
  src: string;
  alt: string;
  tag: 'commercial' | 'domestic';
  title: string;
  meta: string;
  size?: 'lg' | 'md' | 'sm';
};

export const workItems: WorkItem[] = [
  { src: '/images/commercial-interior-qualvis-reception.jpeg', alt: 'Repainted Qualvis reception with feature wall and branded signage', tag: 'commercial', title: 'Qualvis · Reception refresh', meta: 'Loughborough · 2 days', size: 'lg' },
  { src: '/images/commercial-exterior-gsf-red-shutters.jpeg', alt: 'GSF Car Parts warehouse with freshly coated red roller shutters', tag: 'commercial', title: 'GSF · Roller shutters', meta: 'High-build coating · Leicester' },
  { src: '/images/commercial-interior-yellow-accent-office.jpeg', alt: 'Office space with a bold yellow accent wall and crisp white trim', tag: 'commercial', title: 'Office · accent wall', meta: 'Office fit-out · Hinckley', size: 'md' },
  { src: '/images/domestic-exterior-period-white-house-front.jpeg', alt: 'Period detached home with freshly painted white render and dark window frames', tag: 'domestic', title: 'Period home · full exterior', meta: 'Render & woodwork · Oadby', size: 'lg' },
  { src: '/images/commercial-exterior-green-roller-shutter-01.jpeg', alt: 'Industrial unit with bright green roller shutter and matching steel frame', tag: 'commercial', title: 'Industrial unit · shutter', meta: 'Anti-rust coating · Coalville' },
  { src: '/images/commercial-interior-warehouse-epoxy-floor-01.jpeg', alt: 'Warehouse with new epoxy resin floor and white-painted walls', tag: 'commercial', title: 'Warehouse · epoxy floor', meta: 'Resin floor & walls · Leicester' },
  { src: '/images/domestic-interior-classic-kitchen-island-detail-01.jpeg', alt: 'Hand-painted period kitchen island with detailed mouldings', tag: 'domestic', title: 'Kitchen island re-paint', meta: 'Hand-painted · Stoneygate' },
  { src: '/images/commercial-interior-navy-breakout-area-01.jpeg', alt: 'Office breakout area painted in deep navy with crisp white ceiling', tag: 'commercial', title: 'Breakout · navy accent', meta: 'Office fit-out · Leicester', size: 'md' },
  { src: '/images/commercial-interior-school-assembly-hall.jpeg', alt: 'School assembly hall repainted with bright clean walls', tag: 'commercial', title: 'School · assembly hall', meta: 'Education sector · Leicester' },
  { src: '/images/domestic-interior-marble-living-room-tv-wall.jpeg', alt: 'Contemporary living room with marble-effect feature wall', tag: 'domestic', title: 'Living room · feature wall', meta: 'Marble effect · Knighton' },
  { src: '/images/domestic-interior-sage-green-kitchen-01.jpeg', alt: 'Sage green shaker kitchen with hand-painted cabinetry', tag: 'domestic', title: 'Sage shaker kitchen', meta: 'Hand-painted · Clarendon Park' },
  { src: '/images/commercial-interior-factory-cmm-floor.jpeg', alt: 'Factory floor and production area with fresh industrial coating', tag: 'commercial', title: 'Factory · production floor', meta: 'Manufacturing · Leicestershire' },
  { src: '/images/commercial-interior-costco-food-court-01.jpeg', alt: 'Large retail food court with repainted walls and ceilings', tag: 'commercial', title: 'Retail · food court', meta: 'Out-of-hours · Leicester' },
  { src: '/images/commercial-exterior-wellness-studio-shopfront.jpeg', alt: 'Wellness studio shopfront with crisp exterior paint finish', tag: 'commercial', title: 'Shopfront · wellness studio', meta: 'Exterior · Leicestershire' },
  { src: '/images/domestic-interior-grey-shaker-kitchen.jpeg', alt: 'Grey shaker kitchen with hand-finished cabinetry', tag: 'domestic', title: 'Shaker kitchen refresh', meta: 'Domestic · Leicester' },
  { src: '/images/domestic-interior-hallway-and-staircase.jpeg', alt: 'Hallway and staircase with fresh paint and crisp woodwork', tag: 'domestic', title: 'Hall, stairs & landing', meta: 'Interior · Leicestershire' },
  { src: '/images/commercial-interior-open-plan-office.jpeg', alt: 'Open-plan office with neutral walls and sharp trim lines', tag: 'commercial', title: 'Open-plan office', meta: 'Corporate · Leicester' },
  { src: '/images/commercial-exterior-blue-railings-park.jpeg', alt: 'Blue railings and exterior metalwork on a commercial site', tag: 'commercial', title: 'Exterior railings', meta: 'Metalwork coating · Leicester' },
  { src: '/images/domestic-exterior-grey-blue-rendered-house.jpeg', alt: 'Rendered house exterior in grey-blue with fresh window frames', tag: 'domestic', title: 'Rendered exterior', meta: 'Full exterior · Leicestershire' },
  { src: '/images/commercial-interior-sculpt-and-form-reception.jpeg', alt: 'Modern reception area with feature wall and clean finish', tag: 'commercial', title: 'Reception fit-out', meta: 'Commercial interior · Leicester' },
];

/** Homepage bento — curated highlight reel */
export const showcaseItems: WorkItem[] = workItems.slice(0, 11);
