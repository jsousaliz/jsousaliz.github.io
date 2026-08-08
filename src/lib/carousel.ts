export function clampCarouselIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(index, total - 1));
}

export function findClosestOffsetIndex(
  offsets: number[],
  scrollLeft: number,
): number {
  if (offsets.length === 0) return 0;

  return offsets.reduce((closest, offset, index) => {
    const currentDistance = Math.abs(offset - scrollLeft);
    const closestDistance = Math.abs(offsets[closest]! - scrollLeft);
    return currentDistance < closestDistance ? index : closest;
  }, 0);
}
