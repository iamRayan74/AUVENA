
"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  MagnifyingGlassIcon,
  EyeIcon,
  ClockIcon,
  ChevronLeftIcon,
  XMarkIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import Backdrop from "@/components/ui/Backdrop";

interface GlobalSearchProps {
  trendingSearches?: string[];
  recentSearches?: string[];
  className?: string;
}

const defaultTrendingSearches = [
  "گوشی iphone 17",
  "گوشی iphone 16",
  "گوشی S25",
  "لپ‌تاپ گیمینگ",
  "ساعت هوشمند",
];

const defaultRecentSearches = [
  "مک بوک",
  "گوشی شیائومی",
  "گوشی سامسونگ",
];

const searchHref = (value: string) => `/products?search=${encodeURIComponent(value)}`;

export default function GlobalSearch({
  trendingSearches = defaultTrendingSearches,
  recentSearches = defaultRecentSearches,
  className = "",
}: GlobalSearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchId = useId();
  const panelId = `${searchId}-panel`;

  const closeSearch = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={closeSearch} opacity="medium" blur zIndex={60} />

      <div className={`relative z-[61] mx-auto w-full max-w-2xl ${className}`}>
        {/* Search Form */}
        <form action="/search" method="GET" onSubmit={closeSearch} className={`relative z-[62] flex h-14 items-center rounded-2xl border bg-surface transition-all duration-300 ${isOpen ? "border-brand-olive/40 shadow-[0_0_0_3px_rgba(173,193,120,0.24),0_12px_35px_rgba(6,39,38,0.10)]" : "border-border/70 shadow-sm hover:border-brand-olive/50 hover:shadow-md"}`}>
          <MagnifyingGlassIcon className={`mr-4 h-5 w-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-brand-olive" : "text-text-muted"}`} />

          <input
            id={searchId}
            type="search"
            name="q"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="جستجوی محصولات، برندها و دسته‌بندی‌ها..."
            aria-label="جستجوی محصولات"
            aria-expanded={isOpen}
            aria-controls={panelId}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-foreground !outline-none !ring-0 shadow-none placeholder:text-text-muted focus:border-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-ms-clear]:hidden"
          />

          {searchValue.length > 0 && (
            <button type="button" onClick={() => setSearchValue("")} aria-label="پاک کردن جستجو" className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-muted outline-none transition hover:bg-surface-muted hover:text-danger focus-visible:ring-2 focus-visible:ring-brand-olive/50">
              <XMarkIcon className="h-4 w-4" />
            </button>
          )}

          <Link href="/products" onClick={closeSearch} className="ml-2 mr-2 flex h-10 shrink-0 items-center gap-2 rounded-xl bg-button-primary px-4 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-button-primary-hover hover:shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive/60 focus-visible:ring-offset-2">
            <span>آرشیو محصولات</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        </form>

        {/* Search Panel */}
        <div id={panelId} aria-hidden={!isOpen} className={`absolute right-0 top-full z-[63] mt-3 w-full overflow-hidden rounded-[2rem] border border-border/70 bg-surface/95 shadow-[0_35px_90px_-20px_rgba(6,39,38,0.22)] backdrop-blur-2xl transition-all duration-300 ${isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-3 scale-[0.98] opacity-0 pointer-events-none"}`}>
          <div className="p-6">

            {/* Panel Heading */}
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-evergreen text-brand-olive shadow-sm">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-foreground">جستجوی هوشمند</h3>
                  <p className="mt-1 text-[11px] text-text-muted">محصول مورد نظرت رو سریع‌تر پیدا کن</p>
                </div>
              </div>
              <button type="button" onClick={closeSearch} aria-label="بستن جستجو" className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-muted text-text-muted transition hover:bg-danger-bg hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive">
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Trending Searches */}
            {trendingSearches.length > 0 && (
              <section>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface-gold">
                    <EyeIcon className="h-4 w-4 text-brand-gold" />
                  </div>
                  <h4 className="text-xs font-black text-foreground">جستجوهای پرطرفدار</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((item) => (
                    <Link key={item} href={searchHref(item)} onClick={closeSearch} tabIndex={isOpen ? 0 : -1} className="rounded-full border border-border/80 bg-surface-muted px-4 py-2.5 text-[11px] font-bold text-text-secondary transition-all duration-200 hover:border-brand-olive hover:bg-brand-olive/15 hover:text-brand-evergreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive/50">
                      {item}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <section className="mt-7 border-t border-dashed border-border pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface-muted">
                    <ClockIcon className="h-4 w-4 text-text-secondary" />
                  </div>
                  <h4 className="text-xs font-black text-foreground">جستجوهای اخیر شما</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((item) => (
                    <Link key={item} href={searchHref(item)} onClick={closeSearch} tabIndex={isOpen ? 0 : -1} className="rounded-full bg-surface-muted/70 px-3.5 py-2 text-[11px] font-medium text-text-secondary transition-all hover:bg-surface-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive/50">
                      {item}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Promotional Banner */}
            <section className="mt-7 border-t border-dashed border-border pt-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                <span className="text-[11px] font-black text-text-muted">پیشنهاد ویژه AUVENA</span>
              </div>
              <Link href="/products" onClick={closeSearch} tabIndex={isOpen ? 0 : -1} aria-label="مشاهده پیشنهادهای ویژه" className="group block overflow-hidden rounded-2xl outline-none transition-all duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2">
                <Image src="/images/banners/search-banner.webp" alt="پیشنهادهای ویژه و تخفیف محصولات" width={1200} height={350} priority className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </Link>
            </section>

            {/* Panel Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
              <span className="text-[10px] text-text-muted">AUVENA TECH</span>
              <Link href="/products" onClick={closeSearch} tabIndex={isOpen ? 0 : -1} className="flex items-center gap-1 text-[11px] font-bold text-brand-evergreen transition hover:text-brand-gold">
                مشاهده همه محصولات
                <ChevronLeftIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
