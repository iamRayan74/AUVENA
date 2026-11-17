
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "پنل مدیریت",
    template: "%s | مدیریت AUVENA TECH",
  },
  description: "پنل مدیریت فروشگاه AUVENA TECH",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminPanelLayout({
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
