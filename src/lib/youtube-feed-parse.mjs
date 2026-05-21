/** Shared YouTube channel RSS URL and XML parser (used at build time and by Netlify Functions). */

export const YOUTUBE_FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCOYgdg7P_QOp1Yx5Y-rjO1w';

export const YOUTUBE_CHANNEL_URL =
  'https://www.youtube.com/channel/UCOYgdg7P_QOp1Yx5Y-rjO1w';

export function decodeXml(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * @param {string} xml
 * @param {number} [limit=15]
 */
export function parseChannelFeedXml(xml, limit = 15) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);

  const videos = entries
    .map((entry) => {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      if (!id) return null;

      const title =
        entry.match(/<media:title>([^<]+)<\/media:title>/)?.[1] ??
        entry.match(/<title>([^<]+)<\/title>/)?.[1] ??
        'Watch on YouTube';

      const thumbnail =
        entry.match(/<media:thumbnail url="([^"]+)"/)?.[1] ??
        `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

      const url =
        entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1] ??
        `https://www.youtube.com/watch?v=${id}`;

      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';

      return {
        id,
        title: decodeXml(title),
        url,
        thumbnail,
        published,
      };
    })
    .filter(Boolean);

  return videos.slice(0, limit);
}
