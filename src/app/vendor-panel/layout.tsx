
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "پنل فروشنده",
    template: "%s | فروشندگان AUVENA TECH",
  },
  description: "پنل اختصاصی فروشندگان AUVENA TECH",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function VendorPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="min-h-screen bg-background text-foreground"
    >
      {children}
    </div>
  );
}
