import { describe, expect, it } from 'vitest';

import { recommendations } from './recommendations';

describe('recommendation excerpts', () => {
  it('uses only literal excerpts from the original recommendations', () => {
    for (const recommendation of recommendations) {
      const originalText = recommendation.paragraphs.join(' ');
      const literalExcerpt = recommendation.excerpt
        .replace(/^\.\.\.|^…/, '')
        .replace(/\.\.\.$|…$/, '')
        .trim();

      expect(originalText, recommendation.name).toContain(literalExcerpt);
    }
  });
});
