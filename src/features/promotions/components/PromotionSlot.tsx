"use client";

import type { PlacementKey } from "../types/placement.types";
import type { Promotion, StoryPromotion, BannerSlidePromotion, SmallBannerPromotion } from "../types/promotion.types";
import { usePromotionSlot } from "../hooks/usePromotionSlot";
import { Stories } from "./Stories/Stories";
import { BannerSlider } from "./BannerSlider/BannerSlider";
import { PromotionRenderer } from "./PromotionRenderer";

export function PromotionSlot({
  name,
  className,
}: {
  name: PlacementKey;
  className?: string;
}) {
  const value = usePromotionSlot(name);
  if (!value) return null;

  const items = (Array.isArray(value) ? value : [value]) as Promotion[];
  if (!items.length) return null;

  if (name === "home.stories") {
    const stories = items.filter((item): item is StoryPromotion => item.type === "story");
    return stories.length ? <div className={className}><Stories stories={stories} /></div> : null;
  }

  if (name === "home.heroSlider") {
    const banners = items.filter((item): item is BannerSlidePromotion => item.type === "bannerSlide");
    return banners.length ? <div className={className}><BannerSlider banners={banners} /></div> : null;
  }

  if (name === "global.popup") return null;

  if (name === "home.middleBanners" || name === "home.footerBanners") {
    const banners = items.filter((item): item is SmallBannerPromotion => item.type === "smallBanner");
    return banners.length ? (
      <div className={className}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {banners.map((promotion) => <PromotionRenderer key={promotion.id} promotion={promotion} />)}
        </div>
      </div>
    ) : null;
  }

  return (
    <div className={className}>
      {items.map((promotion) => <PromotionRenderer key={promotion.id} promotion={promotion} />)}
    </div>
  );
}
