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

export type HomepageFeature = {
  title: string;
  desc: string;
  accent: 'pink' | 'yellow' | 'lime' | 'blue';
};

/** Hero gallery on /domestic (4 equal tiles) */
export const domesticHeroGallery: GalleryImage[] = [
  {
    src: '/images/domestic-interior-sage-green-kitchen-02.jpeg',
    alt: 'Sage green shaker kitchen with hand-painted cabinetry and crisp finishes',
  },
  {
    src: '/images/domestic-interior-classic-kitchen-rangecooker.jpeg',
    alt: 'Classic kitchen with range cooker, detailed cornices and fresh paintwork',
  },
  {
    src: '/images/domestic-interior-cinema-snug-fireplace.jpeg',
    alt: 'Cosy cinema snug with fireplace and freshly decorated walls',
  },
  {
    src: '/images/domestic-exterior-period-white-house-rear.jpeg',
    alt: 'Period home rear elevation with crisp white render and painted woodwork',
  },
];

export const domesticHighlights = [
  {
    title: 'Tidy, respectful crews',
    desc: 'Dust sheets, masking and a clean finish. We treat your home like our own.',
  },
  {
    title: 'Free home visits and colour advice',
    desc: 'We help you choose finishes that suit the light and the room. No hard sell.',
  },
  {
    title: 'Flexible around family life',
    desc: 'Phased room-by-room work, school holidays and move-in dates planned with you.',
  },
  {
    title: 'Clear timelines and fixed pricing',
    desc: 'You know who is coming, when we start, and what the job costs before we begin.',
  },
];

export const interiorRooms: Sector[] = [
  {
    name: 'Kitchens',
    desc: 'Hand-painted cabinetry, islands and pantry spaces. Eggshell, satin and durable finishes for busy family kitchens.',
    src: '/images/domestic-interior-classic-kitchen-island-detail-01.jpeg',
    alt: 'Hand-painted classic kitchen island with detailed cornice and mouldings',
  },
  {
    name: 'Living rooms',
    desc: 'Walls, ceilings and feature areas refreshed. Neutral schemes, accent walls and finishes that suit how you use the room.',
    src: '/images/domestic-interior-grey-lounge-fireplace-cornice.jpeg',
    alt: 'Living room with fireplace, cornice and freshly painted walls',
  },
  {
    name: 'Bedrooms',
    desc: 'Calm, clean finishes for main and guest bedrooms. Woodwork, wardrobes and alcoves painted with care.',
    src: '/images/domestic-interior-blush-pink-bedroom-01.jpeg',
    alt: 'Bedroom with soft blush walls and crisp white woodwork',
  },
  {
    name: 'Halls, stairs and landings',
    desc: 'High-traffic routes that need tough paint and sharp lines. Banisters, spindles and panelling finished properly.',
    src: '/images/domestic-interior-oak-staircase-hallway.jpeg',
    alt: 'Oak staircase and hallway with fresh paint and crisp woodwork',
  },
  {
    name: 'Bathrooms and wet rooms',
    desc: 'Moisture-resistant systems on walls and woodwork. Clean prep and finishes that stand up to steam and daily use.',
    src: '/images/domestic-interior-teal-stair-landing.jpeg',
    alt: 'Landing and adjacent spaces with fresh teal and white paintwork',
  },
  {
    name: 'New builds and refurbishments',
    desc: 'Snagging coats, full decoration packages and move-in ready finishes for extensions and renovations.',
    src: '/images/domestic-interior-new-build-living-room.jpeg',
    alt: 'New-build living room with fresh neutral walls and trim',
  },
];

export const exteriorProjects: ExteriorProject[] = [
  {
    title: 'Render and masonry',
    desc: 'Exterior walls prepared, repaired where needed and finished in breathable masonry paint for a lasting finish.',
    src: '/images/domestic-exterior-grey-blue-rendered-house.jpeg',
    alt: 'Rendered house exterior in grey-blue with fresh window frames',
  },
  {
    title: 'Period and character homes',
    desc: 'Sash windows, bay fronts and detailed woodwork on older Leicestershire properties painted with the right prep.',
    src: '/images/domestic-exterior-period-white-house-front.jpeg',
    alt: 'Period detached home with freshly painted white render',
  },
  {
    title: 'Windows, doors and woodwork',
    desc: 'Front doors, garage doors, fascias and soffits stripped back, primed and coated for weather and kerb appeal.',
    src: '/images/domestic-exterior-black-gloss-door.jpeg',
    alt: 'Front door in high-gloss black with crisp surrounding woodwork',
  },
  {
    title: 'Fences and garden joinery',
    desc: 'Timber fencing, gates and garden structures prepared and finished to cope with rain, sun and Leicestershire winters.',
    src: '/images/domestic-exterior-stained-timber-fence.jpeg',
    alt: 'Stained timber fence with fresh protective finish',
  },
  {
    title: 'Pebbledash and textured finishes',
    desc: 'Textured elevations cleaned, stabilized and coated so the finish looks even and stays sound.',
    src: '/images/domestic-exterior-white-pebbledash-frontage.jpeg',
    alt: 'White pebbledash frontage with freshly painted finish',
  },
  {
    title: 'Cottages and terraces',
    desc: 'Smaller homes and terraces refreshed inside and out. Tight access, neat sites and finishes you notice every day.',
    src: '/images/domestic-exterior-white-terrace-cottage.jpeg',
    alt: 'White-painted terrace cottage with crisp exterior finish',
  },
];

export const domesticFaqs: Faq[] = [
  {
    q: 'Do you offer dustless sanding at home?',
    a: 'Yes. On domestic jobs we can sand and prep using professional extractors so dust is captured at the tool — far less mess in rooms you are still using. We will confirm on your home visit whether dustless prep suits your project and include it in your quote.',
  },
  {
    q: 'Do you hang wallpaper or do specialist decorating?',
    a: 'No. We focus on painting. Walls, ceilings, woodwork and masonry. Wallpaper would need removing before we start if you want surfaces painted.',
  },
  {
    q: 'Do you carry out plastering or major patching?',
    a: 'Plastering is not a service we offer. We prep and paint sound surfaces and can deal with light filling and sanding as part of preparation.',
  },
  {
    q: 'Do you paint house exteriors?',
    a: 'Yes. Render, masonry, woodwork, doors, fascias and fences across Leicestershire. We specify the right system for each surface.',
  },
  {
    q: 'Can you paint hard-to-reach areas (cherry pickers)?',
    a: 'Yes. Gable ends, chimneys, dormers and tall render often need powered access. Our operatives hold IPAF qualifications (via ipaf.org) to work from cherry pickers and other MEWPs. We agree positioning and protection with you before hire is booked, and include access in your fixed quote where needed.',
  },
  {
    q: 'How do you work around us living at home?',
    a: 'Room by room where it helps. Furniture moved and covered, floors protected, and each space left usable at the end of the day where possible.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are Leicester based and work across Leicestershire for homeowners, landlords and developers.',
  },
  {
    q: 'How do quotes work?',
    a: 'Free home visits, clear fixed pricing and itemised scopes. You know what we are doing, what products we use and when we will be finished.',
  },
];

/** Homepage feature cards (first four) */
export const homepageFeatures: HomepageFeature[] = [
  {
    title: 'Whole-house refresh',
    desc: 'Top-to-toe interior repaint with proper prep, dust sheets and a tidy crew you actually want in the house.',
    accent: 'pink',
  },
  {
    title: 'Exterior & render',
    desc: 'Masonry, render, soffits, fascias and woodwork sealed, primed and finished to last a British winter.',
    accent: 'yellow',
  },
  {
    title: 'Joinery & trim',
    desc: 'Doors, skirting, architrave and built-ins hand-painted in eggshell or oil for a crisp, factory-look finish.',
    accent: 'lime',
  },
  {
    title: 'Kitchens & cabinetry',
    desc: 'Hand-painted kitchens, islands and pantry spaces in durable finishes built for daily family use.',
    accent: 'blue',
  },
];
