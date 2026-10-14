import type { Area } from '~/data/areas';
import type { AreaFaq } from '~/data/area-content';
import { cotswoldsHref, cotswoldsTownNames } from '~/data/cotswolds';
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

/** Cotswolds hub page: service + FAQs + breadcrumb */
export function buildCotswoldsPageJsonLd(faqs: AreaFaq[]) {
  const pageUrl = absoluteUrl(cotswoldsHref);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...paintingServiceBase,
        '@id': `${pageUrl}#service`,
        url: pageUrl,
        description:
          'Domestic and commercial painting and decorating across the Cotswolds, including period and listed properties, large homes, exterior decorating and maintenance.',
        areaServed: [
          { '@type': 'Place', name: 'Cotswolds' },
          ...cotswoldsTownNames.map((name) => ({ '@type': 'Place', name })),
        ],
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
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Areas covered', item: absoluteUrl('/areas/') },
          { '@type': 'ListItem', position: 3, name: 'Cotswolds', item: pageUrl },
        ],
      },
    ],
  };
}
