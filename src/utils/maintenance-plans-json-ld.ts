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
          name: 'A.S Painting Contractors Group Limited',
          url: SITE_ORIGIN,
          telephone: '01162914746',
          email: 'info@aspainting.co.uk',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '24 Naver Road',
            addressLocality: 'Leicester',
            postalCode: 'LE19 4DG',
            addressCountry: 'GB',
          },
        },
        areaServed: { '@type': 'Place', name: 'Leicestershire' },
        offers: [
          {
            '@type': 'Offer',
            name: 'Bronze Preventative Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '495',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Silver Enhanced Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '695',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Gold Premium Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '895',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
          },
          {
            '@type': 'Offer',
            name: 'Platinum Premier Maintenance Plan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1295',
              priceCurrency: 'GBP',
              unitText: 'MONTH',
            },
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
