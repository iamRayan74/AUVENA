
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد فروشنده",
};

export default function VendorPanelPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-10">
      <header className="mb-8">
        <span className="text-sm font-medium text-brand-gold">
          AUVENA TECH
        </span>

        <h1 className="mt-3 text-2xl font-black">
          پنل فروشنده
        </h1>

        <p className="mt-3 text-sm leading-7 text-text-secondary">
          به پنل اختصاصی فروشندگان خوش آمدید.
        </p>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-6 shadow-card">
        <h2 className="text-lg font-bold">
          داشبورد فروشنده
        </h2>

        <p className="mt-3 text-sm leading-7 text-text-secondary">
          مدیریت محصولات، سفارش‌ها، موجودی و اطلاعات فروشنده در این
          قسمت توسعه داده خواهد شد.
        </p>
      </section>
    </main>
  );
}
