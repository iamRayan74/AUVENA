import type { PlacementKey } from "../types/placement.types";

export const placementRegistry: Record<PlacementKey, { multiple: boolean; description: string }> = {
  "header.topBanner": { multiple: false, description: "نوار اطلاع‌رسانی بالای هدر" },
  "home.stories": { multiple: true, description: "استوری‌های صفحه اصلی" },
  "home.heroSlider": { multiple: true, description: "اسلایدر اصلی صفحه خانه" },
  "home.middleBanners": { multiple: true, description: "بنرهای میانی صفحه خانه" },
  "home.footerBanners": { multiple: true, description: "بنرهای پایین صفحه خانه" },
  "search.modal": { multiple: true, description: "بنرهای پنجره جستجو" },
  "navigation.megaMenu": { multiple: true, description: "بنرهای مگامنو" },
  "navigation.mobileMenu": { multiple: true, description: "بنرهای منوی موبایل" },
  "product.detail": { multiple: true, description: "بنرهای صفحه محصول" },
  "category.header": { multiple: true, description: "بنر بالای دسته‌بندی" },
  "category.middle": { multiple: true, description: "بنر میانی دسته‌بندی" },
  "brand.header": { multiple: true, description: "بنر صفحه برند" },
  "cart.sidebar": { multiple: true, description: "بنرهای سبد خرید" },
  "global.popup": { multiple: false, description: "پاپ‌آپ عمومی" },
};
