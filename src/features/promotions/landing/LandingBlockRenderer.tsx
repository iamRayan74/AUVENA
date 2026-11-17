"use client";

import type { LandingBlock } from "../types/landing.types";
import { usePromotions } from "../hooks/usePromotions";
import { PromotionRenderer } from "../components/PromotionRenderer";
import { PromotionSlot } from "../components/PromotionSlot";
import type { PlacementKey } from "../types/placement.types";
import { DestinationResolver } from "../components/DestinationResolver";

export function LandingBlockRenderer({ block }: { block: LandingBlock }) {
  const { getPromotion } = usePromotions();

  switch (block.type) {
    case "heading":
      return (
        <header className="py-6 text-right" dir="rtl">
          <h1 className="text-2xl font-black text-foreground">{block.title}</h1>
          {block.subtitle && <p className="mt-2 text-sm text-text-secondary">{block.subtitle}</p>}
        </header>
      );
    case "promotion": {
      const promotion = getPromotion(block.promotionId);
      return promotion ? <PromotionRenderer promotion={promotion} /> : null;
    }
    case "promotionSlot":
      return <PromotionSlot name={block.placement as PlacementKey} />;
    case "image":
      return (
        <DestinationResolver destination={block.href ? { type: "internal", href: block.href } : { type: "none" }} className="block overflow-hidden rounded-2xl">
          <img src={block.src} alt={block.alt} className="h-auto w-full object-cover" loading="lazy" />
        </DestinationResolver>
      );
    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
}
