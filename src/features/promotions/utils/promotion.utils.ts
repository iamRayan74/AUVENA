import type { Promotion } from "../types/promotion.types";
import { isPromotionInDateRange } from "./date.utils";

export function isPromotionCurrentlyActive(promotion: Promotion): boolean {
  return promotion.isActive && isPromotionInDateRange(promotion.startAt, promotion.endAt);
}

export function sortPromotions<T extends Promotion>(promotions: T[]): T[] {
  return [...promotions].sort(
    (a, b) => b.priority - a.priority || a.title.localeCompare(b.title, "fa"),
  );
}

export function filterActivePromotions(promotions: Promotion[]): Promotion[] {
  return sortPromotions(promotions.filter(isPromotionCurrentlyActive));
}
