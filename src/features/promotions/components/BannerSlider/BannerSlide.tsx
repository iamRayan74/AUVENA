import type { BannerSlidePromotion } from "../../types/promotion.types";
import { DestinationResolver } from "../DestinationResolver";

export function BannerSlide({ promotion }: { promotion: BannerSlidePromotion }) {
  return (
    <DestinationResolver
      destination={promotion.destination}
      className="group block h-full w-full overflow-hidden rounded-xl bg-surface-muted lg:rounded-none"
      ariaLabel={promotion.title}
    >
      <picture className="block h-full w-full">
        {promotion.image.mobile && (
          <source media="(max-width: 1023px)" srcSet={promotion.image.mobile} />
        )}
        <img
          src={promotion.image.desktop}
          alt={promotion.image.alt ?? promotion.title}
          loading="eager"
          fetchPriority="high"
          className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </picture>
    </DestinationResolver>
  );
}
