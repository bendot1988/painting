export type GoogleReview = {
  name: string;
  review: string;
  date: string;
};

/** Reviews longer than this get paragraph breaks and a read-more toggle. */
export const LONG_REVIEW_LENGTH = 280;

export function isLongReview(text: string): boolean {
  return text.trim().length > LONG_REVIEW_LENGTH;
}

export function reviewParagraphs(text: string): string[] {
  const normalized = text.trim();
  if (!normalized) return [];

  if (normalized.includes('\n\n')) {
    return normalized.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  }

  if (normalized.length <= LONG_REVIEW_LENGTH) {
    return [normalized];
  }

  const sentences =
    normalized.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g)?.map((s) => s.trim()).filter(Boolean) ??
    [normalized];

  const paragraphs: string[] = [];
  let current = '';

  for (const sentence of sentences) {
    const candidate = current ? `${current} ${sentence}` : sentence;
    if (current && candidate.length >= 200) {
      paragraphs.push(current);
      current = sentence;
    } else {
      current = candidate;
    }
  }

  if (current) paragraphs.push(current);
  return paragraphs.length > 0 ? paragraphs : [normalized];
}

export function reviewSnippet(text: string, maxLength = 140): string {
  const firstSentence = text.match(/^[\s\S]*?[.!?](?=\s|$)/)?.[0]?.trim();
  const base = firstSentence && firstSentence.length <= maxLength ? firstSentence : text;
  if (base.length <= maxLength) return base.trim();
  const cut = base.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
