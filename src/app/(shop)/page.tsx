
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { PromotionSlot } from "@/features/promotions/components/PromotionSlot";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description:
    "به AUVENA TECH خوش آمدید؛ فروشگاه آنلاین محصولات دیجیتال و تجهیزات هوشمند.",
  alternates: {
    canonical: "/",
  },
};

export default function ShopHomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Stories */}
      <section className="container mx-auto px-4">
        <PromotionSlot name="home.stories" />
      </section>

      {/* Hero Banner Slider */}
      <section className="w-full pt-6">
        
          <PromotionSlot name="home.heroSlider" />
        
      </section>

      {/* Hero Section */}
      <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
        <span className="mb-5 text-sm font-medium tracking-widest text-brand-gold">
          AUVENA TECH
        </span>

        <h1 className="mb-5 text-3xl font-black leading-relaxed sm:text-5xl">
          به دنیای تکنولوژی خوش آمدید
        </h1>

        <p className="mb-8 max-w-2xl text-sm leading-8 text-text-secondary sm:text-base">
          تجربه‌ای متفاوت از خرید محصولات دیجیتال، تجهیزات هوشمند و
          لوازم جانبی با AUVENA TECH.
        </p>

        <Link
          href="/products"
          className="rounded-xl bg-button-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-button-primary-hover"
        >
          مشاهده محصولات
        </Link>
      </section>
    </main>
  );
}
