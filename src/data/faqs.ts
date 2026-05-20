import { commercialFaqs } from '~/data/commercial-page';
import { domesticFaqs } from '~/data/domestic-page';

export type FaqItem = { q: string; a: string };

export type FaqSection = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

/** Quote form / homepage quick answers */
export const quoteFaqs: FaqItem[] = [
  {
    q: 'Do you do plastering?',
    a: 'No — we focus on painting. We prep and paint sound surfaces and can lightly fill small blemishes as part of prep, but plastering is not a service we offer.',
  },
  {
    q: 'Do you hang wallpaper?',
    a: 'No. We paint only — walls, ceilings, woodwork, metal and masonry. Wallpaper would need removing before we start.',
  },
  {
    q: 'What kind of work do you take on?',
    a: 'Commercial and domestic painting — mainly offices, factories, shops, warehouses and homes across Leicestershire. Interiors and exteriors.',
  },
  {
    q: 'How quickly will I hear back?',
    a: 'Same day during working hours — Mon–Sun, 6am–5pm.',
  },
  {
    q: 'Are quotes free?',
    a: 'Yes. Free quotes with clear, fixed pricing — no hard sell.',
  },
];

export const faqSections: FaqSection[] = [
  {
    id: 'general',
    title: 'General questions',
    description:
      'Quick answers about quotes, what we do, and how to get in touch — the same questions we answer on our homepage and contact page.',
    items: quoteFaqs,
  },
  {
    id: 'commercial',
    title: 'Commercial painting',
    description:
      'Factories, offices, retail, warehouses and industrial units across Leicestershire and the East Midlands.',
    items: commercialFaqs,
  },
  {
    id: 'domestic',
    title: 'Domestic painting',
    description:
      'Homes, landlords, kitchens, exteriors and room-by-room decorating for families across Leicestershire.',
    items: domesticFaqs,
  },
];

/** Every FAQ on the /faqs/ page (all sections, in order) */
export const allFaqs: FaqItem[] = faqSections.flatMap((section) => section.items);

export const faqsPageMeta = {
  title: 'FAQs — Painting & Decorating Questions | A.S Painting Contractors',
  description:
    'Answers to common questions about commercial and domestic painting in Leicester and Leicestershire — quotes, plastering, wallpaper, areas covered, out-of-hours work and more.',
  canonical: '/faqs/',
} as const;
