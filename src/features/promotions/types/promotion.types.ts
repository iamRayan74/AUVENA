import type { PromotionDestination } from "./destination.types";

export interface PromotionBase {
  id: string;
  title: string;
  type: "topBanner" | "story" | "bannerSlide" | "smallBanner" | "popup";
  isActive: boolean;
  priority: number;
  startAt?: string;
  endAt?: string;
  destination: PromotionDestination;
}

export interface ResponsiveImage {
  desktop?: string;
  mobile?: string;
  thumbnail?: string;
  alt?: string;
}

export interface TopBannerPromotion extends PromotionBase {
  type: "topBanner";
  message: string;
  backgroundColor?: string;
  textColor?: string;
  dismissible?: boolean;
}

export interface StoryPromotion extends PromotionBase {
  type: "story";
  image: {
    thumbnail: string;
    desktop: string;
    alt: string;
  };
  slides?: Array<{
    image: string;
    duration?: number;
    alt?: string;
    destination?: PromotionDestination;
  }>;
}

export interface BannerSlidePromotion extends PromotionBase {
  type: "bannerSlide";
  image: ResponsiveImage & { desktop: string };
}

export interface SmallBannerPromotion extends PromotionBase {
  type: "smallBanner";
  image: ResponsiveImage & { desktop: string };
  description?: string;
  aspectRatio?: "square" | "wide" | "portrait";
}

export interface PopupPromotion extends PromotionBase {
  type: "popup";
  image: ResponsiveImage & { desktop: string };
  description?: string;
  frequency?: "once" | "session" | "always";
}

export type Promotion =
  | TopBannerPromotion
  | StoryPromotion
  | BannerSlidePromotion
  | SmallBannerPromotion
  | PopupPromotion;
