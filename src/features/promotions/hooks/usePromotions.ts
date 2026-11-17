"use client";

import { usePromotionContext } from "../providers/PromotionProvider";

export function usePromotions() {
  return usePromotionContext();
}
