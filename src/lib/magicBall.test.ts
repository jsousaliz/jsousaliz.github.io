import { describe, expect, it } from 'vitest';

import { createShuffledDurationCycle, pickRandomResponse } from './magicBall';

describe('pickRandomResponse', () => {
  it('selects a response using the provided random value', () => {
    expect(pickRandomResponse(['a', 'b', 'c'], [], () => 0.5)).toBe('b');
  });

  it('allows the same response to appear twice in a row', () => {
    expect(pickRandomResponse(['a', 'b'], ['a'], () => 0)).toBe('a');
  });

  it('prevents the same response from appearing three times in a row', () => {
    expect(pickRandomResponse(['a', 'b'], ['a', 'a'], () => 0)).toBe('b');
  });

  it('supports a list with a single response', () => {
    expect(pickRandomResponse(['only'], ['only', 'only'], () => 0.8)).toBe(
      'only',
    );
  });

  it('rejects an empty response list', () => {
    expect(() => pickRandomResponse([])).toThrow(
      'At least one Mystic Coffee response is required.',
    );
  });
});

describe('createShuffledDurationCycle', () => {
  it('keeps every configured duration exactly once', () => {
    const cycle = createShuffledDurationCycle(
      [550, 900, 1300, 1800, 2400],
      undefined,
      () => 0.42,
    );

    expect([...cycle].sort((a, b) => a - b)).toEqual([
      550, 900, 1300, 1800, 2400,
    ]);
  });

  it('does not start a new cycle with the previous duration', () => {
    const cycle = createShuffledDurationCycle([550, 900, 1300], 1300, () => 1);

    expect(cycle[0]).not.toBe(1300);
  });

  it('rejects an empty duration list', () => {
    expect(() => createShuffledDurationCycle([])).toThrow(
      'Invalid Mystic Coffee shake durations.',
    );
  });
});
