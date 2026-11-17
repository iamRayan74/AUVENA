"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type { Promotion } from "../types/promotion.types";
import type {
  PlacementKey,
  PromotionPlacements,
  ResolvedPromotionPlacements,
} from "../types/placement.types";
import { mockPromotions } from "../data/promotions";
import { mockPlacements } from "../data/placements";
import { filterActivePromotions } from "../utils/promotion.utils";

interface PromotionContextValue {
  promotions: Promotion[];
  placements: ResolvedPromotionPlacements;
  getPromotion: (id: string) => Promotion | undefined;
}

const PromotionContext = createContext<PromotionContextValue | null>(null);

function resolvePlacements(
  promotions: Promotion[],
  source: PromotionPlacements,
): ResolvedPromotionPlacements {
  const byId = new Map(promotions.map((promotion) => [promotion.id, promotion]));
  const result = {} as ResolvedPromotionPlacements;

  (Object.keys(source) as PlacementKey[]).forEach((key) => {
    const value = source[key];
    if (Array.isArray(value)) {
      result[key] = value
        .map((id) => byId.get(id))
        .filter((item): item is Promotion => Boolean(item));
    } else {
      result[key] = value ? byId.get(value) ?? null : null;
    }
  });

  return result;
}

export function PromotionProvider({
  children,
  initialPromotions = mockPromotions,
  initialPlacements = mockPlacements,
}: {
  children: ReactNode;
  initialPromotions?: Promotion[];
  initialPlacements?: PromotionPlacements;
}) {
  const value = useMemo(() => {
    const activePromotions = filterActivePromotions(initialPromotions);
    const placements = resolvePlacements(activePromotions, initialPlacements);

    return {
      promotions: activePromotions,
      placements,
      getPromotion: (id: string) => activePromotions.find((item) => item.id === id),
    };
  }, [initialPromotions, initialPlacements]);

  return (
    <PromotionContext.Provider value={value}>
      {children}
    </PromotionContext.Provider>
  );
}

export function usePromotionContext() {
  const context = useContext(PromotionContext);
  if (!context) {
    throw new Error(
      "Promotion hooks must be used inside <PromotionProvider>. Wrap the relevant layout or page with PromotionProvider.",
    );
  }
  return context;
}
