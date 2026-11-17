
import type { Metadata, Viewport } from "next";
import { mainFont, faNumFont } from "@/assets/fonts/fonts";
import "./globals.css";

const siteUrl = "https://auvenatech.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AUVENA TECH | فروشگاه تخصصی کالای دیجیتال",
    template: "%s | AUVENA TECH",
  },

  description:
    "AUVENA TECH؛ مرجع خرید آنلاین محصولات دیجیتال، موبایل، لپ‌تاپ، کامپیوتر و لوازم جانبی با تجربه خریدی مطمئن و حرفه‌ای.",

  applicationName: "AUVENA TECH",

  keywords: [
    "AUVENA TECH",
    "آوِنا تک",
    "فروشگاه کالای دیجیتال",
    "خرید آنلاین موبایل",
    "خرید لپ تاپ",
    "خرید کامپیوتر",
    "لوازم جانبی دیجیتال",
  ],

  authors: [{ name: "AUVENA TECH" }],
  creator: "AUVENA TECH",
  publisher: "AUVENA TECH",

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "AUVENA TECH",
    title: "AUVENA TECH | فروشگاه تخصصی کالای دیجیتال",
    description:
      "تجربه‌ای متفاوت از خرید آنلاین موبایل، لپ‌تاپ، کامپیوتر و محصولات دیجیتال.",
  },

  twitter: {
    card: "summary_large_image",
    title: "AUVENA TECH | فروشگاه تخصصی کالای دیجیتال",
    description:
      "مرجع خرید آنلاین محصولات دیجیتال و لوازم جانبی.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "shopping",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFAF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${mainFont.variable} ${faNumFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
