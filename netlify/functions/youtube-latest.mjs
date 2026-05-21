import { YOUTUBE_FEED_URL, parseChannelFeedXml } from '../../src/lib/youtube-feed-parse.mjs';

/** @param {import('@netlify/functions').HandlerEvent} event */
export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const res = await fetch(YOUTUBE_FEED_URL, { cache: 'no-store' });
    if (!res.ok) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ ok: false, videos: [] }),
      };
    }

    const xml = await res.text();
    const videos = parseChannelFeedXml(xml, 15);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
      },
      body: JSON.stringify({ ok: true, videos }),
    };
  } catch {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ ok: false, videos: [] }),
    };
  }
};
