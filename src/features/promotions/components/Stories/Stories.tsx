"use client";

import { useState } from "react";
import type { StoryPromotion } from "../../types/promotion.types";
import { StoryItem } from "./StoryItem";
import { StoryModal } from "./StoryModal";
import "./stories.css";

export function Stories({ stories }: { stories: StoryPromotion[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  if (!stories.length) return null;

  return (
    <>
      <div className="flex gap-3 overflow-x-auto px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" dir="rtl">
        {stories.map((story, index) => (
          <StoryItem key={story.id} promotion={story} onOpen={() => setActiveIndex(index)} />
        ))}
      </div>
      {activeIndex !== null && (
        <StoryModal
          stories={stories}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </>
  );
}
