import type { City } from "../types";
import { WASHTENAW_CITIES } from "./index-washtenaw";
import { WAYNE_CITIES } from "./index-wayne";

export const CITIES: City[] = [...WASHTENAW_CITIES, ...WAYNE_CITIES];
