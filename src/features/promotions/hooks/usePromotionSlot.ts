"use client";

import type { PlacementKey } from "../types/placement.types";
import { usePromotionContext } from "../providers/PromotionProvider";

export function usePromotionSlot(name: PlacementKey) {
  return usePromotionContext().placements[name];
}
