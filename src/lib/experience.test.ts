import { describe, expect, it } from 'vitest';

import {
  PROFESSIONAL_EXPERIENCE_START,
  calculateCompletedYears,
} from './experience';

describe('calculateCompletedYears', () => {
  it('calcula anos completos desde janeiro de 2010', () => {
    const currentDate = new Date(2026, 7, 6);

    expect(
      calculateCompletedYears(PROFESSIONAL_EXPERIENCE_START, currentDate),
    ).toBe(16);
  });

  it('é atualizado quando um novo janeiro começa', () => {
    const lastDayOf2026 = new Date(2026, 11, 31);
    const firstDayOf2027 = new Date(2027, 0, 1);

    expect(
      calculateCompletedYears(PROFESSIONAL_EXPERIENCE_START, lastDayOf2026),
    ).toBe(16);
    expect(
      calculateCompletedYears(PROFESSIONAL_EXPERIENCE_START, firstDayOf2027),
    ).toBe(17);
  });

  it('não retorna um número negativo', () => {
    const dateBeforeCareer = new Date(2009, 11, 31);

    expect(
      calculateCompletedYears(PROFESSIONAL_EXPERIENCE_START, dateBeforeCareer),
    ).toBe(0);
  });
});
