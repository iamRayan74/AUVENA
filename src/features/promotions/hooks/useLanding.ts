"use client";

import { useMemo } from "react";
import { mockLandings } from "../data/landings";

export function useLanding(slug: string) {
  return useMemo(
    () => mockLandings.find((landing) => landing.slug === slug && landing.isActive) ?? null,
    [slug],
  );
}
