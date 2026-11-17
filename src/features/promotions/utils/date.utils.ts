export function isPromotionInDateRange(
  startAt?: string,
  endAt?: string,
  now = new Date(),
): boolean {
  const start = startAt ? new Date(startAt).getTime() : Number.NEGATIVE_INFINITY;
  const end = endAt ? new Date(endAt).getTime() : Number.POSITIVE_INFINITY;
  const current = now.getTime();

  if (Number.isNaN(start) || Number.isNaN(end)) return false;
  return current >= start && current <= end;
}
