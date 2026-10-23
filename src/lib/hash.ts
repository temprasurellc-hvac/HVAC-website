/** Deterministic string hash (FNV-1a) so each page picks stable, distinct content variants. */
export function hash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export function pick<T>(arr: readonly T[], seed: string, salt = 0): T {
  return arr[(hash(seed + "#" + salt) % arr.length)];
}

/** Pick n distinct items in a seed-determined order. */
export function pickMany<T>(arr: readonly T[], seed: string, n: number, salt = 0): T[] {
  const idx = arr.map((_, i) => i);
  let s = hash(seed + "@" + salt);
  for (let i = idx.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, Math.min(n, arr.length)).map((i) => arr[i]);
}
