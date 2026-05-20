import type { HaFaq } from '~/data/housing-association-page';
import { housingAssociationPageMeta } from '~/data/housing-association-page';
import { absoluteUrl, SITE_ORIGIN } from '~/utils/site-url';

export function buildHousingAssociationJsonLd(faqs: HaFaq[]) {
  const pageUrl = absoluteUrl(housingAssociationPageMeta.canonical);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: housingAssociationPageMeta.title,
        description: housingAssociationPageMeta.description,
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
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Commercial', item: absoluteUrl('/commercial/') },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Housing association painting',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Housing association painting and decorating',
        serviceType: 'Social housing painting and decorating',
        provider: {
          '@type': 'PaintingService',
          name: 'A.S Painting Contractors',
          telephone: ['+441162914746', '+448000096694'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Leicester',
            postalCode: 'LE19 4DG',
            addressCountry: 'GB',
          },
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Leicestershire' },
          { '@type': 'City', name: 'Leicester' },
        ],
        description: housingAssociationPageMeta.description,
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };
}
