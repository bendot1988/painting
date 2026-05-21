import { YOUTUBE_FEED_URL, parseChannelFeedXml, YOUTUBE_CHANNEL_URL } from './youtube-feed-parse.mjs';

export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

export { YOUTUBE_CHANNEL_URL };

export async function fetchChannelVideos(limit = 15): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(YOUTUBE_FEED_URL, { cache: 'no-store' });
    if (!res.ok) return [];

    const xml = await res.text();
    return parseChannelFeedXml(xml, limit) as YouTubeVideo[];
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
