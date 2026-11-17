
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  BuildingStorefrontIcon,
  SwatchIcon,
  FaceSmileIcon,
  SparklesIcon,
  TrophyIcon,
  BookOpenIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const mobileCategories: {
  title: string;
  href: string;
  icon: IconType;
}[] = [
  {
    title: "کالای دیجیتال",
    href: "/products?category=digital",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "خانه و آشپزخانه",
    href: "/products?category=home",
    icon: HomeIcon,
  },
  {
    title: "مد و پوشاک",
    href: "/products?category=fashion",
    icon: SwatchIcon,
  },
  {
    title: "زیبایی و سلامت",
    href: "/products?category=beauty",
    icon: FaceSmileIcon,
  },
  {
    title: "اسباب‌بازی و کودک",
    href: "/products?category=toys",
    icon: SparklesIcon,
  },
  {
    title: "ورزش و سفر",
    href: "/products?category=sports",
    icon: TrophyIcon,
  },
  {
    title: "کتاب و لوازم تحریر",
    href: "/products?category=books",
    icon: BookOpenIcon,
  },
  {
    title: "خودرو و موتورسیکلت",
    href: "/products?category=auto",
    icon: TruckIcon,
  },
  {
    title: "صنعتی و ابزار",
    href: "/products?category=tools",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "کشاورزی و باغبانی",
    href: "/products?category=garden",
    icon: GlobeAltIcon,
  },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCategoriesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile header */}
      <div className="border-b border-border bg-background">
        <div className="flex h-[72px] items-center justify-between gap-3 px-4">
          {/* Menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition hover:bg-surface-muted"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2"
            aria-label="AUVENA TECH"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-evergreen text-xl font-black text-white">
              A
            </span>

            <span className="flex flex-col">
              <span className="text-base font-black tracking-wide text-brand-evergreen">
                AUVENA
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-brand-gold">
                TECH
              </span>
            </span>
          </Link>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              aria-label="جستجو"
              aria-expanded={searchOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                searchOpen
                  ? "border-brand-gold bg-surface-gold text-brand-gold"
                  : "border-border bg-surface text-foreground hover:bg-surface-muted"
              }`}
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>

            <Link
              href="/cart"
              aria-label="سبد خرید"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-button-primary text-white transition hover:bg-button-primary-hover"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-md border-2 border-background bg-brand-olive px-1 text-[9px] font-black text-brand-evergreen">
                ۲
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="border-t border-border bg-surface px-4 py-3">
            <form
              action="/search"
              method="GET"
              className="flex h-12 items-center gap-2 rounded-xl border border-border bg-surface-muted px-3 transition focus-within:border-brand-olive"
            >
              <MagnifyingGlassIcon className="h-5 w-5 shrink-0 text-text-muted" />

              <input
                type="search"
                name="q"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="جستجوی محصولات..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-text-muted"
              />

              <button
                type="submit"
                aria-label="شروع جستجو"
                className="rounded-lg bg-button-primary px-3 py-2 text-xs font-bold text-white transition hover:bg-button-primary-hover"
              >
                جستجو
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Drawer backdrop */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[80] bg-brand-evergreen/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside
        aria-label="منوی اصلی"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[90] flex h-dvh w-[min(88%,380px)] flex-col border-l border-border bg-background shadow-dropdown transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-border px-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-evergreen text-xl font-black text-white">
              A
            </span>
            <span>
              <span className="block text-base font-black tracking-wide text-brand-evergreen">
                AUVENA
              </span>
              <span className="block text-[9px] font-bold tracking-[0.25em] text-brand-gold">
                TECH
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="بستن منو"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition hover:bg-surface-muted"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          {/* Account */}
          <Link
            href="/login"
            onClick={closeMenu}
            className="mb-6 flex items-center gap-3 rounded-2xl bg-brand-evergreen p-4 text-white transition hover:bg-brand-evergreen/90"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <UserIcon className="h-6 w-6" />
            </span>

            <span className="flex-1">
              <span className="block text-sm font-black">
                ورود یا ثبت‌نام
              </span>
              <span className="mt-1 block text-[10px] text-white/70">
                ورود به حساب کاربری AUVENA TECH
              </span>
            </span>

            <ChevronLeftIcon className="h-5 w-5" />
          </Link>

          {/* Main links */}
          <div className="mb-6 space-y-1">
            <p className="mb-3 px-3 text-xs font-black text-text-muted">
              دسترسی سریع
            </p>

            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              <HomeIcon className="h-5 w-5" />
              خانه
            </Link>

            <Link
              href="/products?filter=offers"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              <SparklesIcon className="h-5 w-5" />
              شگفت‌انگیزها
            </Link>

            <Link
              href="/products?sort=bestselling"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              پرفروش‌ترین‌ها
            </Link>

            <Link
              href="/blog"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              <BookOpenIcon className="h-5 w-5" />
              وبلاگ
            </Link>
          </div>

          {/* Categories */}
          <div className="border-t border-border pt-5">
            <button
              type="button"
              onClick={() =>
                setCategoriesOpen((value) => !value)
              }
              aria-expanded={categoriesOpen}
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-black text-foreground transition hover:bg-surface-muted"
            >
              <span className="flex items-center gap-3">
                <BuildingStorefrontIcon className="h-5 w-5 text-brand-gold" />
                دسته‌بندی محصولات
              </span>

              <ChevronDownIcon
                className={`h-5 w-5 text-text-muted transition-transform ${
                  categoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {categoriesOpen && (
              <div className="mt-2 space-y-1 pr-2">
                {mobileCategories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <Link
                      key={category.title}
                      href={category.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-medium text-text-secondary transition hover:bg-surface-gold hover:text-brand-gold"
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span className="flex-1">{category.title}</span>
                      <ChevronLeftIcon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other links */}
          <div className="mt-5 border-t border-border pt-5">
            <p className="mb-3 px-3 text-xs font-black text-text-muted">
              خدمات مشتریان
            </p>

            <Link
              href="/support"
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-xs font-medium text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              پشتیبانی
            </Link>

            <Link
              href="/faq"
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-xs font-medium text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              سوالات متداول
            </Link>

            <Link
              href="/brands"
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-xs font-medium text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
            >
              برندها
            </Link>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="shrink-0 border-t border-border bg-surface px-5 py-4">
          <p className="text-center text-[10px] font-medium text-text-muted">
            تجربه خرید متفاوت با{" "}
            <span className="font-black text-brand-gold">
              AUVENA TECH
            </span>
          </p>
        </div>
      </aside>
    </div>
  );
}
