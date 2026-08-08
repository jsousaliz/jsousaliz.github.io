export function pickRandomResponse(
  responses: readonly string[],
  recentResponses: readonly string[] = [],
  random = Math.random,
): string {
  if (responses.length === 0) {
    throw new Error('At least one Mystic Coffee response is required.');
  }

  const lastResponse = recentResponses.at(-1);
  const repeatedTwice =
    lastResponse !== undefined &&
    recentResponses.length >= 2 &&
    recentResponses.at(-2) === lastResponse;
  const responsesWithoutThirdRepeat = repeatedTwice
    ? responses.filter((response) => response !== lastResponse)
    : responses;
  const availableResponses =
    responsesWithoutThirdRepeat.length > 0
      ? responsesWithoutThirdRepeat
      : responses;
  const randomIndex = Math.min(
    Math.floor(random() * availableResponses.length),
    availableResponses.length - 1,
  );

  return availableResponses[randomIndex]!;
}

export function createShuffledDurationCycle(
  durations: readonly number[],
  previousDuration?: number,
  random = Math.random,
): number[] {
  if (durations.length === 0 || durations.some((duration) => duration <= 0)) {
    throw new Error('Invalid Mystic Coffee shake durations.');
  }

  const shuffledDurations = [...durations];
  for (let index = shuffledDurations.length - 1; index > 0; index -= 1) {
    const targetIndex = Math.min(Math.floor(random() * (index + 1)), index);
    [shuffledDurations[index], shuffledDurations[targetIndex]] = [
      shuffledDurations[targetIndex]!,
      shuffledDurations[index]!,
    ];
  }

  if (
    shuffledDurations.length > 1 &&
    shuffledDurations[0] === previousDuration
  ) {
    [shuffledDurations[0], shuffledDurations[1]] = [
      shuffledDurations[1]!,
      shuffledDurations[0]!,
    ];
  }

  return shuffledDurations;
}
