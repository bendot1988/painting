import type { FaqItem } from '~/data/faqs';
import { faqsPageMeta } from '~/data/faqs';
import { absoluteUrl, SITE_ORIGIN } from '~/utils/site-url';

const paintingService = {
  '@type': 'PaintingService' as const,
  name: 'A.S Painting Contractors',
  image:
    'https://www.as-painting.co.uk/wp-content/uploads/2021/07/A.S-Painting-Contractors-2.png',
  telephone: ['+441162914746', '+448000096694'],
  areaServed: ['Leicester', 'Leicestershire', 'East Midlands'],
  address: {
    '@type': 'PostalAddress' as const,
    addressLocality: 'Leicester',
    postalCode: 'LE19 4DG',
    addressCountry: 'GB',
  },
  priceRange: '££',
  openingHours: 'Mo-Su 06:00-17:00',
};

/** One FAQ per question text (keeps schema aligned with visible content without duplicates) */
export function uniqueFaqsForSchema(faqs: FaqItem[]): FaqItem[] {
  const seen = new Map<string, FaqItem>();
  for (const faq of faqs) {
    const key = faq.q.trim().toLowerCase();
    if (!seen.has(key)) seen.set(key, faq);
  }
  return [...seen.values()];
}

export function buildFaqPageJsonLd(faqs: FaqItem[]) {
  const pageUrl = absoluteUrl(faqsPageMeta.canonical);
  const schemaFaqs = uniqueFaqsForSchema(faqs);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: faqsPageMeta.title,
        description: faqsPageMeta.description,
        inLanguage: 'en-GB',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          name: 'A.S Painting Contractors',
          url: SITE_ORIGIN,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQs',
            item: pageUrl,
          },
        ],
      },
      paintingService,
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: schemaFaqs.map((faq) => ({
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
