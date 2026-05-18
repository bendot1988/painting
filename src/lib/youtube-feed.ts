export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

const FEED_URL =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCOYgdg7P_QOp1Yx5Y-rjO1w';

export const YOUTUBE_CHANNEL_URL =
  'https://www.youtube.com/channel/UCOYgdg7P_QOp1Yx5Y-rjO1w';

function decodeXml(text: string) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function fetchChannelVideos(limit = 15): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];

    const xml = await res.text();
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
      .filter((v): v is YouTubeVideo => Boolean(v));

    return videos.slice(0, limit);
  } catch {
    return [];
  }
}

export function formatVideoDate(iso: string) {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(iso));
  } catch {
    return '';
  }
}
