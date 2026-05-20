export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  excerpt: string;
  image: { src: string; alt: string };
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'new-website-launched',
    title: 'Our new website is live',
    date: '2026-05-20',
    excerpt:
      'A.S Painting Contractors has a new website, built by dotwall — we are proud of how it represents our work across Leicestershire.',
    image: {
      /** Swap for a dedicated blog image when ready: /images/blog/new-website-launched.jpg */
      src: '/images/brand/og-card.jpg',
      alt: 'A.S Painting Contractors new website — commercial and domestic painting in Leicestershire',
    },
    paragraphs: [
      'We are pleased to share that our new website is now live. It was designed and built by dotwall, and we think it is an incredible representation of who we are and what we do — commercial, domestic and social housing painting across Leicestershire.',
      'From factory and office projects to home refreshes and void turnarounds, the site shows the range of work our crews deliver every week. We are genuinely proud of it, and we hope you like it too.',
      'Have a good look around — browse recent work, our service pages, areas we cover and how to request a quote. If anything prompts a question about your own project, call us, send a message or use the contact form. We aim to reply the same day during working hours.',
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const blogIndexMeta = {
  title: 'News & Updates | A.S Painting Contractors',
  description:
    'News from A.S Painting Contractors — project updates, company news and painting advice across Leicester and Leicestershire.',
} as const;
