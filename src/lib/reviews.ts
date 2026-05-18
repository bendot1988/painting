export type GoogleReview = {
  name: string;
  review: string;
  date: string;
};

export function reviewSnippet(text: string, maxLength = 140): string {
  const firstSentence = text.match(/^[\s\S]*?[.!?](?=\s|$)/)?.[0]?.trim();
  const base = firstSentence && firstSentence.length <= maxLength ? firstSentence : text;
  if (base.length <= maxLength) return base.trim();
  const cut = base.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
