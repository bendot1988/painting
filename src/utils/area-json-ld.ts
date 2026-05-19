import type { Area } from '~/data/areas';
import type { AreaFaq } from '~/data/area-content';
import { absoluteUrl } from '~/utils/site-url';

const paintingServiceBase = {
  '@type': 'PaintingService' as const,
  name: 'A.S Painting Contractors',
  image:
    'https://www.as-painting.co.uk/wp-content/uploads/2021/07/A.S-Painting-Contractors-2.png',
  telephone: ['+441162914746', '+448000096694'],
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'Leicester',
    postalCode: 'LE19 4DG',
    addressCountry: 'GB',
  },
  priceRange: '££',
  openingHours: 'Mo-Su 06:00-17:00',
};

/** PaintingService + FAQPage in one @graph (single FAQPage per page) */
export function buildAreaPageJsonLd(area: Area, faqs: AreaFaq[]) {
  const pageUrl = absoluteUrl(`/areas/${area.slug}/`);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...paintingServiceBase,
        areaServed: [area.name, 'Leicestershire', 'East Midlands'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };
}
