import type { Promotion } from "../types/promotion.types";
import { TopBanner } from "./TopBanner/TopBanner";
import { SmallBanner } from "./SmallBanner/SmallBanner";

export function PromotionRenderer({ promotion }: { promotion: Promotion }) {
  switch (promotion.type) {
    case "topBanner":
      return <TopBanner promotion={promotion} />;
    case "smallBanner":
      return <SmallBanner promotion={promotion} />;
    case "bannerSlide":
      return null;
    case "story":
      return null;
    case "popup":
      return null;
    default: {
      const exhaustive: never = promotion;
      return exhaustive;
    }
  }
}
