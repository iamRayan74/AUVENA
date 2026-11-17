import type { Promotion } from "../types/promotion.types";

const now = new Date();
const future = new Date(now);
future.setDate(future.getDate() + 30);

export const mockPromotions: Promotion[] = [
  {
    id: "topbar-shipping",
    type: "topBanner",
    title: "ارسال رایگان",
    message: "برای سفارش‌های بالای ۵ میلیون تومان ارسال رایگان است",
    isActive: true,
    priority: 100,
    destination: { type: "internal", href: "/shipping" },
    dismissible: true,
    backgroundColor: "#062726",
    textColor: "#FFFBCC",
  },
  {
    id: "story-new",
    type: "story",
    title: "تازه رسیده‌ها",
    isActive: true,
    priority: 30,
    destination: { type: "category", slug: "new-arrivals" },
    image: {
      thumbnail: "/images/promotions/stories/new-thumb.webp",
      desktop: "/images/promotions/stories/new.webp",
      alt: "تازه رسیده‌ها",
    },
    slides: [
      { image: "/images/promotions/stories/new.webp", duration: 5000, alt: "تازه رسیده‌ها" },
      { image: "/images/promotions/stories/new.webp", duration: 5000, alt: "محصولات جدید" },
    ],
  },
  {
    id: "story-offer",
    type: "story",
    title: "پیشنهاد ویژه",
    isActive: true,
    priority: 20,
    destination: { type: "internal", href: "/offers" },
    image: {
      thumbnail: "/images/promotions/stories/offer-thumb.webp",
      desktop: "/images/promotions/stories/offer.webp",
      alt: "پیشنهاد ویژه",
    },
    slides: [
      { image: "/images/promotions/stories/offer.webp", duration: 5000, alt: "پیشنهاد ویژه" },
    ],
  },
  {
    id: "story-style",
    type: "story",
    title: "راهنمای انتخاب",
    isActive: true,
    priority: 10,
    destination: { type: "internal", href: "/guides" },
    image: {
      thumbnail: "/images/promotions/stories/guide-thumb.webp",
      desktop: "/images/promotions/stories/guide.webp",
      alt: "راهنمای انتخاب",
    },
    slides: [
      { image: "/images/promotions/stories/guide.webp", duration: 5000, alt: "راهنمای انتخاب" },
    ],
  },
  {
    id: "hero-new-season",
    type: "bannerSlide",
    title: "مجموعه جدید",
    isActive: true,
    priority: 20,
    destination: { type: "category", slug: "new-arrivals" },
    image: {
      desktop: "/images/promotions/banners/hero-new.webp",
      mobile: "/images/promotions/banners/hero-new-mobile.webp",
      alt: "مجموعه جدید AUVENA TECH",
    },
  },
  {
    id: "hero-offers",
    type: "bannerSlide",
    title: "پیشنهادهای ویژه",
    isActive: true,
    priority: 10,
    destination: { type: "internal", href: "/offers" },
    image: {
      desktop: "/images/promotions/banners/hero-offers.webp",
      mobile: "/images/promotions/banners/hero-offers-mobile.webp",
      alt: "پیشنهادهای ویژه",
    },
  },
  {
    id: "middle-audio",
    type: "smallBanner",
    title: "تجهیزات صوتی",
    description: "تجربه شنیداری متفاوت",
    isActive: true,
    priority: 20,
    destination: { type: "category", slug: "audio" },
    image: {
      desktop: "/images/promotions/banners/audio.webp",
      mobile: "/images/promotions/banners/audio.webp",
      alt: "تجهیزات صوتی",
    },
    aspectRatio: "wide",
  },
  {
    id: "middle-accessories",
    type: "smallBanner",
    title: "لوازم جانبی",
    description: "جزئیات کاربردی برای هر روز",
    isActive: true,
    priority: 10,
    destination: { type: "category", slug: "accessories" },
    image: {
      desktop: "/images/promotions/banners/accessories.webp",
      mobile: "/images/promotions/banners/accessories.webp",
      alt: "لوازم جانبی",
    },
    aspectRatio: "wide",
  },
  {
    id: "popup-welcome",
    type: "popup",
    title: "به AUVENA TECH خوش آمدید",
    description: "جدیدترین پیشنهادهای فروشگاه را ببینید.",
    isActive: true,
    priority: 1,
    destination: { type: "internal", href: "/offers" },
    image: {
      desktop: "/images/promotions/popup/welcome.webp",
      mobile: "/images/promotions/popup/welcome.webp",
      alt: "به AUVENA TECH خوش آمدید",
    },
    frequency: "session",
  },
];

export function getMockPromotions() {
  return mockPromotions;
}
