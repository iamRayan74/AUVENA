import type { SmallBannerPromotion } from "../../types/promotion.types";
import { DestinationResolver } from "../DestinationResolver";

const ratioClasses = {
  square: "aspect-square",
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
};

export function SmallBanner({ promotion }: { promotion: SmallBannerPromotion }) {
  return (
    <DestinationResolver
      destination={promotion.destination}
      className="group relative block w-full overflow-hidden rounded-2xl bg-surface-muted"
      ariaLabel={promotion.title}
    >
      <div className={`${ratioClasses[promotion.aspectRatio ?? "wide"]} relative w-full`}>
        {promotion.image.mobile && (
          <picture>
            <source media="(max-width: 640px)" srcSet={promotion.image.mobile} />
            <img
              src={promotion.image.desktop}
              alt={promotion.image.alt ?? promotion.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
            />
          </picture>
        )}
        {!promotion.image.mobile && (
          <img
            src={promotion.image.desktop}
            alt={promotion.image.alt ?? promotion.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        )}
      </div>
      {(promotion.title || promotion.description) && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-10 text-white">
          <h3 className="text-base font-bold">{promotion.title}</h3>
          {promotion.description && <p className="mt-1 text-xs text-white/85">{promotion.description}</p>}
        </div>
      )}
    </DestinationResolver>
  );
}
