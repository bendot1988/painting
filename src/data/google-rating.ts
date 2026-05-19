/** Google Business rating — keep in sync across Hero, quote form, reviews page */
export const googleRating = {
  score: 4.9,
  reviewCount: 58,
} as const;

export const googleRatingLabel = `Rated ${googleRating.score} out of 5 from ${googleRating.reviewCount} Google reviews`;
