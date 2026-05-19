import { contact } from '~/data/contact';
import { YOUTUBE_CHANNEL_URL } from '~/lib/youtube-feed';

export type SocialIcon = 'whatsapp' | 'youtube';

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

/** Footer social profiles — WhatsApp and YouTube only */
export const socialLinks: SocialLink[] = [
  {
    label: 'WhatsApp',
    href: contact.whatsapp.href,
    icon: 'whatsapp',
  },
  {
    label: 'YouTube',
    href: YOUTUBE_CHANNEL_URL,
    icon: 'youtube',
  },
];
