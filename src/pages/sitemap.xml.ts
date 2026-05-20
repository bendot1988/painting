import type { APIRoute } from 'astro';
import { areas } from '~/data/areas';
import { blogPosts } from '~/data/blog';
import { sitemapXmlUrls } from '~/data/sitemap';
import { absoluteUrl } from '~/utils/site-url';

const lastmod = new Date().toISOString().slice(0, 10);

const areaXmlUrls = areas.map((area) => ({
  loc: `/areas/${area.slug}/`,
  priority: '0.6',
  changefreq: 'monthly',
}));

const blogXmlUrls = blogPosts.map((post) => ({
  loc: `/blog/${post.slug}/`,
  priority: '0.5',
  changefreq: 'yearly',
}));

export const GET: APIRoute = () => {
  const urls = [...sitemapXmlUrls, ...areaXmlUrls, ...blogXmlUrls]
    .map(
      ({ loc, priority, changefreq }) => `
  <url>
    <loc>${absoluteUrl(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
