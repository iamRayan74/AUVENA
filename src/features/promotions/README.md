# AUVENA TECH — Promotions Feature

A self-contained, mock-data-first promotions feature for a Next.js App Router + React + TypeScript + Tailwind CSS v4 storefront.

## Requirements
- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- `swiper` (the project already uses Swiper)

Install Swiper if it is not already installed:

```bash
npm install swiper
```

## Install
Copy this `promotions` folder to:

`src/features/promotions`

## First integration
In the page where you want to render the homepage promotions:

```tsx
import {
  PromotionProvider,
  PromotionSlot,
  PromotionPopup,
} from "@/features/promotions";

export default function HomePage() {
  return (
    <PromotionProvider>
      <main>
        <PromotionSlot name="home.stories" className="container mx-auto mt-4" />
        <PromotionSlot name="home.heroSlider" className="mt-4" />
        <PromotionSlot name="home.middleBanners" className="container mx-auto mt-8" />
        <PromotionPopup />
      </main>
    </PromotionProvider>
  );
}
```

If the provider is already mounted once in a parent layout, do not mount it again on the page. The provider is intentionally lightweight and uses local mock data by default.

## Add a promotion
Edit `data/promotions.ts`, then assign its ID to the matching placement in `data/placements.ts`.

Every promotion has:
- `id`
- `type`
- `title`
- `isActive`
- `priority`
- optional `startAt` / `endAt`
- `destination`

Supported destinations:
- `{ type: "none" }`
- `{ type: "internal", href: "/products" }`
- `{ type: "external", href: "https://example.com" }`
- `{ type: "product", slug: "product-slug" }`
- `{ type: "category", slug: "category-slug" }`
- `{ type: "brand", slug: "brand-slug" }`
- `{ type: "search", query: "headphones" }`
- `{ type: "landing", slug: "summer-sale" }`

Internal product/category/brand/landing routes are configurable in `utils/destination.utils.ts`.

## Available placements
See `types/placement.types.ts` and `data/placements.ts`.

## Notes
- The banner slider hides arrows and pagination below 1024px.
- Mobile and tablet show a centered, partially-peeking slide layout.
- Desktop shows a full-width banner.
- Stories open a modal viewer with keyboard navigation and progress bars.
- Mount `<PromotionPopup />` once inside `PromotionProvider` to enable the configured popup. It opens after a short delay and respects its configured frequency.
- This package does not make network requests and does not assume a backend API contract.

## تصاویر محلی

تصاویر نمونه این قابلیت در مسیر `public/images/promotions/` قرار دارند. آدرس تصاویر در `data/promotions.ts` به مسیرهای محلی تغییر داده شده‌اند؛ بنابراین پس از استخراج بسته در ریشه پروژه، نیازی به سرویس تصویر خارجی نیست.

مسیر Provider در این نسخه:
`@/features/promotions/providers/PromotionProvider`
