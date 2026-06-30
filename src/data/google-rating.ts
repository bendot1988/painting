/** Google Business rating — single source of truth across the site */
export const googleRating = {
  score: 4.9,
  reviewCount: 63,
} as const;

/** Display score with two decimal places (e.g. 4.90) */
export const googleRatingScoreDisplay = googleRating.score.toFixed(2);

export const googleRatingLabel = `Rated ${googleRatingScoreDisplay} out of 5 from ${googleRating.reviewCount} Google reviews`;

export const googleRatingSummaryLine = `${googleRating.reviewCount} Google reviews at ${googleRatingScoreDisplay}`;
