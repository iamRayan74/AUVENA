import type { LandingPageData } from "../types/landing.types";

export const mockLandings: LandingPageData[] = [
  {
    slug: "summer-sale",
    title: "پیشنهادهای ویژه",
    isActive: true,
    blocks: [
      { id: "summer-title", type: "heading", title: "پیشنهادهای ویژه", subtitle: "انتخاب‌هایی با قیمت‌های جذاب" },
      { id: "summer-hero", type: "promotion", promotionId: "hero-offers" },
      { id: "summer-banners", type: "promotionSlot", placement: "home.middleBanners" },
    ],
  },
];
