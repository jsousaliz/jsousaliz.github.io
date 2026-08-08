import { describe, expect, it } from 'vitest';

import { clampCarouselIndex, findClosestOffsetIndex } from './carousel';

describe('clampCarouselIndex', () => {
  it('mantém o índice dentro dos limites', () => {
    expect(clampCarouselIndex(-1, 5)).toBe(0);
    expect(clampCarouselIndex(2, 5)).toBe(2);
    expect(clampCarouselIndex(5, 5)).toBe(4);
  });

  it('retorna zero para uma coleção vazia', () => {
    expect(clampCarouselIndex(3, 0)).toBe(0);
  });
});

describe('findClosestOffsetIndex', () => {
  it('encontra o cartão mais próximo da posição atual', () => {
    const offsets = [0, 620, 1240, 1860, 2480];

    expect(findClosestOffsetIndex(offsets, 700)).toBe(1);
    expect(findClosestOffsetIndex(offsets, 1800)).toBe(3);
  });

  it('retorna zero quando não existem cartões', () => {
    expect(findClosestOffsetIndex([], 100)).toBe(0);
  });
});
