
import type { Metadata } from "next";

import Header from "@/components/common/Header/Header";

import {
  PromotionProvider,
  PromotionSlot,
  PromotionPopup,
} from "@/features/promotions";

export const metadata: Metadata = {
  title: {
    default: "AUVENA TECH | فروشگاه محصولات دیجیتال",
    template: "%s | AUVENA TECH",
  },
  description:
    "فروشگاه AUVENA TECH؛ مرجع خرید محصولات دیجیتال، لوازم جانبی و تجهیزات هوشمند با تجربه خریدی آسان و مطمئن.",
  applicationName: "AUVENA TECH",
  keywords: [
    "AUVENA TECH",
    "فروشگاه دیجیتال",
    "خرید محصولات دیجیتال",
    "لوازم جانبی دیجیتال",
    "تجهیزات هوشمند",
  ],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "AUVENA TECH",
    title: "AUVENA TECH | فروشگاه محصولات دیجیتال",
    description:
      "تجربه خرید محصولات دیجیتال و تجهیزات هوشمند از AUVENA TECH.",
    url: "https://auvenatech.ir/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUVENA TECH | فروشگاه محصولات دیجیتال",
    description: "فروشگاه آنلاین محصولات دیجیتال و تجهیزات هوشمند.",
  },
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="fa" dir="rtl" className="min-h-screen">
      <PromotionProvider>
        <PromotionSlot name="header.topBanner" />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <PromotionPopup />
      </PromotionProvider>
    </div>
  );
}
