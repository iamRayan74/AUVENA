import type { Promotion } from "./promotion.types";

export const PLACEMENT_KEYS = [
  "header.topBanner",
  "home.stories",
  "home.heroSlider",
  "home.middleBanners",
  "home.footerBanners",
  "search.modal",
  "navigation.megaMenu",
  "navigation.mobileMenu",
  "product.detail",
  "category.header",
  "category.middle",
  "brand.header",
  "cart.sidebar",
  "global.popup",
] as const;

export type PlacementKey = (typeof PLACEMENT_KEYS)[number];

export type PromotionPlacements = Record<
  PlacementKey,
  Promotion["id"][] | Promotion["id"] | null
>;

export type ResolvedPromotionPlacements = Record<
  PlacementKey,
  Promotion[] | Promotion | null
>;
