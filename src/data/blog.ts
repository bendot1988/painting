export type BlogGalleryImage = { src: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  excerpt: string;
  image: { src: string; alt: string };
  paragraphs: string[];
  /** Optional inline gallery below the article body */
  gallery?: BlogGalleryImage[];
  externalLink?: { href: string; label: string };
  /** Show “Website by dotwall” credit (website launch post only) */
  dotwallCredit?: boolean;
};

import {
  dustlessSandingBlogContent,
  dustlessSandingFeaturedImage,
  dustlessSandingGallery,
} from '~/data/dustless-sanding';

export const blogPosts: BlogPost[] = [
  {
    ...dustlessSandingBlogContent,
    image: dustlessSandingFeaturedImage,
    gallery: [...dustlessSandingGallery],
  },
  {
    slug: 'new-website-launched',
    title: 'Our new website is live',
    date: '2026-05-20',
    excerpt:
      'A.S Painting Contractors has a new website, built by dotwall — we are proud of how it represents our work across Leicestershire.',
    image: {
      src: '/images/blog/new-website-launched.png',
      alt: 'Screenshot of the new A.S Painting Contractors website homepage showing commercial and domestic painting services in Leicestershire',
    },
    paragraphs: [
      'We are pleased to share that our new website is now live. It was designed and built by dotwall, and we think it is an incredible representation of who we are and what we do — <a href="/commercial/">commercial</a>, <a href="/domestic/">domestic</a> and <a href="/housing-association-painting/">social housing</a> painting across <a href="/areas/">Leicestershire</a>.',
      'From factory and office projects to home refreshes and void turnarounds, the site shows the range of work our crews deliver every week. We are genuinely proud of it, and we hope you like it too.',
      'Have a good look around — browse recent work, our service pages, <a href="/areas/">areas we cover</a> and how to request a quote. If anything prompts a question about your own project, call us, send a message or use the contact form. We aim to reply the same day during working hours.',
    ],
    dotwallCredit: true,
  },
  {
    slug: 'three-best-rated-leicester',
    title: 'Best rated painters in Leicestershire',
    date: '2025-11-14',
    excerpt:
      'A.S Painting Contractors recognised by Three Best Rated as a top painter and decorator in Leicester — thank you to our team and every customer who left a review.',
    image: {
      src: '/images/blog/three-best-rated-award.png',
      alt: 'Three Best Rated 2025 award — A.S Painting Contractors named among the best painters and decorators in Leicestershire',
    },
    paragraphs: [
      'We are extremely proud to share that A.S Painting Contractors has been rated among the best painters and decorators in Leicester by Three Best Rated — an independent service that inspects local businesses on reviews, standards, satisfaction, trust and trading excellence.',
      'This recognition is down to the commitment of our team on every job — from careful prep and tidy working on domestic projects to reliable programmes on commercial and void work. Just as importantly, it reflects the brilliant customers who take the time to leave honest, detailed reviews about their experience with us.',
      'Thank you to everyone who has supported us, recommended us and trusted us in your home or workplace. If you are comparing painters in Leicester, you can read our listing and the latest feedback on Three Best Rated.',
    ],
    externalLink: {
      href: 'https://threebestrated.co.uk/painters-in-leicester',
      label: 'View our profile on Three Best Rated',
    },
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
