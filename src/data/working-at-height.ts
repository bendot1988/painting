export const workingAtHeightImage = {
  src: '/images/working-at-height-cherry-picker.png',
  alt: 'A.S Painting operatives in a cherry picker painting high-level industrial cladding on a commercial building in Leicestershire',
} as const;

export type WorkingAtHeightVariant = 'commercial' | 'domestic';

export const workingAtHeightContent: Record<
  WorkingAtHeightVariant,
  { title: string; lead: string; paragraphs: string[] }
> = {
  commercial: {
    title: 'Working at height',
    lead:
      'Cladding, fascia lines, high bay walls and steelwork that ladders cannot safely reach — we can still paint them.',
    paragraphs: [
      'We programme powered access where the job needs it: cherry pickers, scissor lifts and other MEWPs. Our operatives hold IPAF qualifications (via ipaf.org) and elevated work is covered in our RAMS — harnesses, exclusion zones and ground supervision as your site requires.',
      'Tell us about access constraints, ground conditions and working hours when you request a quote and we will build the right method into the programme.',
    ],
  },
  domestic: {
    title: 'Hard-to-reach exteriors',
    lead:
      'Gable ends, chimney stacks, dormers and tall render often sit above safe ladder height — we can still refresh them.',
    paragraphs: [
      'Where domestic exteriors need powered access, we use cherry pickers and other MEWPs operated by IPAF-qualified staff (via ipaf.org). We protect driveways, borders and neighbours, and we agree how the platform will be positioned before work starts.',
      'Mention height and access when you book a home visit — we will confirm whether MEWP hire is needed and include it in your fixed quote.',
    ],
  },
};
