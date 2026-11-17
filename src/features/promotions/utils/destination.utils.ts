import type { PromotionDestination } from "../types/destination.types";

export function resolveDestination(destination: PromotionDestination): string | null {
  switch (destination.type) {
    case "none":
      return null;
    case "internal":
    case "external":
      return destination.href;
    case "product":
      return `/product/${encodeURIComponent(destination.slug)}`;
    case "category":
      return `/category/${encodeURIComponent(destination.slug)}`;
    case "brand":
      return `/brand/${encodeURIComponent(destination.slug)}`;
    case "search":
      return `/search?q=${encodeURIComponent(destination.query)}`;
    case "landing":
      return `/campaign/${encodeURIComponent(destination.slug)}`;
    default: {
      const exhaustive: never = destination;
      return exhaustive;
    }
  }
}

export function isExternalDestination(destination: PromotionDestination): boolean {
  return destination.type === "external";
}
