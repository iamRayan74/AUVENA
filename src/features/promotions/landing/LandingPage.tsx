"use client";

import { useLanding } from "../hooks/useLanding";
import { LandingBlockRenderer } from "./LandingBlockRenderer";

export function LandingPage({ slug }: { slug: string }) {
  const landing = useLanding(slug);
  if (!landing) return null;

  return (
    <main className="mx-auto w-full max-w-7xl px-4" dir="rtl">
      {landing.blocks.map((block) => (
        <LandingBlockRenderer key={block.id} block={block} />
      ))}
    </main>
  );
}
