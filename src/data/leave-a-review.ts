export const leaveAReviewHref = '/leave-a-review/';

export const leaveAReviewPageTitle = 'Leave a Review | A.S Painting Contractors';

export const leaveAReviewPageDescription =
  'Leave a review for A.S Painting Contractors on Google, Trustpilot or Yell. One review on any platform is enough — thank you.';

export const reviewPlatforms = [
  {
    id: 'google',
    label: 'Leave a Google Review',
    href: 'https://g.page/r/Cc41qQxSaWWdEBE/review',
    logoSrc: '/images/reviews/google.svg',
    logoAlt: 'Google',
  },
  {
    id: 'trustpilot',
    label: 'Leave a Trustpilot Review',
    href: 'https://uk.trustpilot.com/review/as-painting.co.uk',
    logoSrc: '/images/reviews/trustpilot.svg',
    logoAlt: 'Trustpilot',
  },
  {
    id: 'yell',
    label: 'Leave a Yell Review',
    href: 'https://www.yell.com/reviews/places/addreview/id/a-s-painting-contractors-leicester-9755148',
    logoSrc: '/images/reviews/yell.png',
    logoAlt: 'Yell',
  },
] as const;
