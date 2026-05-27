import { maintenanceFaqs, maintenancePlansPageMeta } from '~/data/maintenance-plans-page';
import { absoluteUrl, SITE_ORIGIN } from '~/utils/site-url';

export function buildMaintenancePlansJsonLd() {
  const pageUrl = absoluteUrl(maintenancePlansPageMeta.canonical);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: maintenancePlansPageMeta.title,
        description: maintenancePlansPageMeta.description,
        inLanguage: 'en-GB',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${SITE_ORIGIN}/#website`,
          name: 'A.S Painting Contractors',
          url: SITE_ORIGIN,
        },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'Commercial Decorating Maintenance Plans',
        serviceType: 'Planned Preventative Maintenance — Painting and Decorating',
        description:
          'Monthly painting and decorating maintenance contracts for landlords, apartment blocks, offices, schools, and commercial properties across Leicestershire and surrounding areas.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'A.S Painting Contractors',
          url: SITE_ORIGIN,
        },
        areaServed: { '@type': 'Place', name: 'Leicestershire' },
        offers: [
          {
            '@type': 'Offer',
            name: 'Bronze Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '150',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Silver Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '400',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Gold Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1200',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Platinum Maintenance Plan',
            description: 'Full tailored facilities-style agreement — POA',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        mainEntity: maintenanceFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  };
}
