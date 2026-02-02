export function normalizeGpInput(value: string): string {
  return value.replace(/[km]/gi, c => c.toUpperCase());
}

export function parseGpInput(value: string): number {
  const s = value.trim().toUpperCase();
  if (s.endsWith('M')) return parseFloat(s) * 1_000_000;
  if (s.endsWith('K')) return parseFloat(s) * 1_000;
  return Number(s);
}
