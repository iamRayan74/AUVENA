import type { StoryPromotion } from "../../types/promotion.types";

export function StoryItem({
  promotion,
  onOpen,
}: {
  promotion: StoryPromotion;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`نمایش استوری ${promotion.title}`}
      className="group flex w-[76px] shrink-0 flex-col items-center gap-2 text-center outline-none sm:w-[88px]"
    >
      <span className="rounded-full bg-gradient-to-tr from-[#BFA33E] to-[#ADC178] p-[3px] transition-transform duration-200 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-brand-gold group-focus-visible:ring-offset-2">
        <span className="block rounded-full bg-white p-[3px]">
          <img
            src={promotion.image.thumbnail}
            alt={promotion.image.alt || promotion.title}
            loading="lazy"
            className="h-16 w-16 rounded-full object-cover sm:h-[72px] sm:w-[72px]"
          />
        </span>
      </span>
      <span className="line-clamp-2 text-xs leading-5 text-foreground">{promotion.title}</span>
    </button>
  );
}
