export type PromotionDestination =
  | { type: "none" }
  | { type: "internal"; href: string }
  | { type: "external"; href: string }
  | { type: "product"; slug: string }
  | { type: "category"; slug: string }
  | { type: "brand"; slug: string }
  | { type: "search"; query: string }
  | { type: "landing"; slug: string };
