import type { Promotion } from "./promotion.types";

export type LandingBlock =
  | { id: string; type: "heading"; title: string; subtitle?: string }
  | { id: string; type: "promotion"; promotionId: string }
  | { id: string; type: "promotionSlot"; placement: string }
  | { id: string; type: "image"; src: string; alt: string; href?: string };

export interface LandingPageData {
  slug: string;
  title: string;
  isActive: boolean;
  blocks: LandingBlock[];
}
