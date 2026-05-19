export type SocialIcon = 'whatsapp' | 'youtube' | 'instagram' | 'linkedin' | 'x' | 'google' | 'tiktok';

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

/** Footer & site-wide social profiles */
export const socialLinks: SocialLink[] = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447548971520',
    icon: 'whatsapp',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCOYgdg7P_QOp1Yx5Y-rjO1w',
    icon: 'youtube',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aspaintingcontractors/',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://uk.linkedin.com/in/ashley-smith-95484a1a6',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/paintingas',
    icon: 'x',
  },
  {
    label: 'Google Business Profile',
    href: 'https://www.google.com/maps/place/A.S+Painting+Contractors/@52.6092337,-1.2249947,17z/data=!3m1!4b1!4m5!3m4!1s0x48775d120f4b87d5:0x9d6569520ca935ce!8m2!3d52.6092337!4d-1.222806',
    icon: 'google',
  },
  {
    label: 'TikTok',
    href: 'https://vm.tiktok.com/ZMdbB8T4e/',
    icon: 'tiktok',
  },
];
