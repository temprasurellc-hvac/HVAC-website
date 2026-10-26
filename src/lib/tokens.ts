import type { City } from "@/data/types";
import { pick } from "./hash";

export type TokenCtx = Record<string, string>;

export function cityTokens(city: City, seed: string): TokenCtx {
  return {
    city: city.name,
    cityFull: city.full,
    county: city.county,
    zip: city.zips[0],
    neighborhood: pick(city.neighborhoods, seed, 1),
    landmark: pick(city.landmarks, seed, 2),
    drive: String(city.driveMinutes),
    utility: city.electricUtility,
    era: city.eraLabel,
  };
}

export function fill(text: string, ctx: TokenCtx): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in ctx ? ctx[k] : m));
}
