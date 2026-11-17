"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import GlobalSearch from "@/components/common/search/GlobalSearch";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  EyeIcon,
  ClockIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  DevicePhoneMobileIcon,
  HomeIcon,
  SparklesIcon,
  TrophyIcon,
  BookOpenIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
  FaceSmileIcon,
  GlobeAltIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type MenuGroup = {
  title: string;
  items: string[];
};

type MenuCategory = {
  id: string;
  title: string;
  icon: IconType;
  groups: MenuGroup[];
};

const categories: MenuCategory[] = [
  {
    id: "digital",
    title: "کالای دیجیتال",
    icon: DevicePhoneMobileIcon,
    groups: [
      {
        title: "موبایل",
        items: [
          "گوشی‌های هوشمند",
          "برند اپل (iPhone)",
          "برند سامسونگ",
          "برند شیائومی",
          "گوشی‌های میان‌رده",
          "گوشی‌های اقتصادی",
          "گوشی‌های گیمینگ",
        ],
      },
      {
        title: "لپ‌تاپ",
        items: [
          "لپ‌تاپ‌های گیمینگ",
          "مک‌بوک‌های اپل",
          "لپ‌تاپ‌های تجاری",
          "لپ‌تاپ‌های دانشجویی",
          "لپ‌تاپ‌های فوق سبک",
        ],
      },
      {
        title: "هدفون و ساعت",
        items: [
          "هندزفری بی‌سیم",
          "ساعت‌های هوشمند",
          "هدفون‌های گیمینگ",
          "اسپیکر و سیستم صوتی",
          "مچ‌بند سلامت",
          "هدفون‌های نویزکنسلینگ",
        ],
      },
      {
        title: "لوازم جانبی",
        items: [
          "کابل و شارژر",
          "پاوربانک (شارژر همراه)",
          "کیف و کاور",
          "پایه موبایل و لپ‌تاپ",
          "محافظ صفحه نمایش",
        ],
      },
      {
        title: "ذخیره‌سازی",
        items: [
          "هارد اکسترنال",
          "فلش مموری",
          "کارت حافظه",
          "هارد SSD",
          "درایوهای NAS",
        ],
      },
      {
        title: "دوربین",
        items: [
          "دوربین عکاسی",
          "لنز و لوازم حرفه‌ای",
          "دوربین فیلمبرداری",
          "دوربین‌های اکشن",
          "دوربین‌های مداربسته",
        ],
      },
      {
        title: "کامپیوتر و قطعات",
        items: [
          "کارت گرافیک",
          "پردازنده (CPU)",
          "مادربورد",
          "رم (RAM)",
          "مانیتور و نمایشگر",
          "کیبورد و موس",
        ],
      },
      {
        title: "گیمینگ",
        items: [
          "کنسول بازی",
          "دسته بازی",
          "صندلی گیمینگ",
          "میز گیمینگ",
          "کارت گرافیک گیمینگ",
        ],
      },
    ],
  },
  {
    id: "home",
    title: "خانه و آشپزخانه",
    icon: HomeIcon,
    groups: [
      {
        title: "لوازم آشپزخانه",
        items: [
          "یخچال و فریزر",
          "اجاق گاز و هود",
          "ماشین ظرفشویی",
          "مایکروویو و فر",
          "چای‌ساز و قهوه‌ساز",
          "آب‌سردکن و تصفیه آب",
        ],
      },
      {
        title: "مبلمان",
        items: [
          "مبل و کاناپه",
          "صندلی و میز ناهارخوری",
          "تخت خواب",
          "کمد و قفسه",
          "میز تحریر و کتابخانه",
        ],
      },
      {
        title: "دکوراسیون",
        items: [
          "پرده و رومیزی",
          "فرش و گلیم",
          "تابلو و ساعت دیواری",
          "گلدان و تزئینات",
          "آینه و شمعدان",
        ],
      },
      {
        title: "نور و روشنایی",
        items: [
          "لوستر و چراغ",
          "لامپ و هالوژن",
          "چراغ خواب",
          "چراغ مطالعه",
          "چراغ اضطراری",
        ],
      },
      {
        title: "سرویس خواب",
        items: [
          "ملحفه و روتختی",
          "بالش و تشک",
          "پتو و لحاف",
          "روبالشی و روتشکی",
        ],
      },
      {
        title: "نظافت",
        items: [
          "جاروبرقی",
          "ماشین لباسشویی",
          "اتو و میز اتو",
          "شوینده و پاک کننده",
          "سطل زباله",
        ],
      },
      {
        title: "حمام و سرویس بهداشتی",
        items: [
          "دوش و شیرآلات",
          "توالت و روشویی",
          "موکت و حصیر",
          "آینه و کابینت",
        ],
      },
      {
        title: "حیاط و تراس",
        items: [
          "میز و صندلی باغچه",
          "چتر و سایبان",
          "باربیکیو و منقل",
          "گلدان و گیاه مصنوعی",
        ],
      },
    ],
  },
  {
    id: "fashion",
    title: "مد و پوشاک",
    icon: SwatchIcon,
    groups: [
      {
        title: "لباس مردانه",
        items: [
          "پیراهن و شلوار",
          "تی‌شرت و پولوشرت",
          "کت و شلوار",
          "لباس ورزشی",
          "لباس مجلسی",
          "لباس زیر",
        ],
      },
      {
        title: "لباس زنانه",
        items: [
          "مانتو و شلوار",
          "بلوز و دامن",
          "لباس مجلسی",
          "لباس ورزشی",
          "لباس خواب",
          "لباس زیر",
        ],
      },
      {
        title: "بچه‌گانه",
        items: [
          "پسرانه",
          "دخترانه",
          "نوزادی",
          "لباس مدرسه",
          "لباس عروسک",
        ],
      },
      {
        title: "کفش",
        items: [
          "کفش مردانه",
          "کفش زنانه",
          "کفش ورزشی",
          "کفش مجلسی",
          "کفش بچه‌گانه",
        ],
      },
      {
        title: "اکسسوری",
        items: [
          "کیف و کوله پشتی",
          "کلاه و شال",
          "کمربند و بند ساعت",
          "عینک آفتابی",
          "دستکش و جوراب",
        ],
      },
      {
        title: "ساعت و زیورآلات",
        items: [
          "ساعت مچی",
          "گردنبند و دستبند",
          "انگشتر و النگو",
          "گوشواره و پابند",
          "ساعت دیواری",
        ],
      },
      {
        title: "لباس عروس و داماد",
        items: [
          "لباس عروس",
          "لباس داماد",
          "تزئینات عروسی",
          "کفش عروس",
        ],
      },
      {
        title: "مزون و اختصاصی",
        items: [
          "طراحی اختصاصی",
          "دوخت سفارشی",
          "برندهای لوکس",
          "لباس سنتی",
        ],
      },
    ],
  },
  {
    id: "beauty",
    title: "زیبایی و سلامت",
    icon: FaceSmileIcon,
    groups: [
      {
        title: "آرایشی",
        items: [
          "رژ لب و برق لب",
          "فونداسیون و پودر",
          "سایه و خط چشم",
          "ریمل و مژه",
          "رژگونه و هایلایتر",
        ],
      },
      {
        title: "بهداشتی",
        items: [
          "شامپو و نرم کننده",
          "صابون و ژل شستشو",
          "خمیردندان و مسواک",
          "ضد تعریق و خوشبوکننده",
          "تونر و مرطوب کننده",
        ],
      },
      {
        title: "عطر",
        items: [
          "عطر مردانه",
          "عطر زنانه",
          "ادکلن",
          "اسپری بدن",
          "عطرهای اختصاصی",
        ],
      },
      {
        title: "لوازم شخصی",
        items: [
          "تیغ و اپیلیدی",
          "ماشین اصلاح مو",
          "سشوار و اتوی مو",
          "برس و شانه",
          "ناخنگیر و قیچی",
        ],
      },
      {
        title: "سلامت و درمان",
        items: [
          "ویتامین و مکمل",
          "لوازم پزشکی",
          "داروهای بدون نسخه",
          "محصولات ماساژ",
          "ترازو و فشارسنج",
        ],
      },
      {
        title: "مراقبت پوست",
        items: [
          "کرم ضد آفتاب",
          "لوسیون بدن",
          "ماسک صورت",
          "اسکراب و پیلینگ",
          "محصولات آکنه",
        ],
      },
      {
        title: "مراقبت مو",
        items: [
          "رنگ مو",
          "محصولات ابرو و مژه",
          "محصولات ریش و سبیل",
          "محصولات ضد ریزش",
        ],
      },
      {
        title: "آرایشگاه و سالن",
        items: [
          "لوازم حرفه‌ای",
          "صندلی آرایشگاه",
          "آینه و میز آرایش",
          "لوازم استریل",
        ],
      },
    ],
  },
  {
    id: "toys",
    title: "اسباب‌بازی و کودک",
    icon: SparklesIcon,
    groups: [
      {
        title: "اسباب بازی",
        items: [
          "ماشین و موتور",
          "عروسک و پولیش",
          "لگو و ساختنی",
          "فکری و آموزشی",
          "بازی‌های تخته‌ای",
        ],
      },
      {
        title: "پوشاک کودک",
        items: [
          "لباس نوزاد",
          "لباس پسرانه",
          "لباس دخترانه",
          "کفش کودک",
          "کلاه و جوراب",
        ],
      },
      {
        title: "غذای کودک",
        items: [
          "شیر خشک",
          "پوره و غذای آماده",
          "بیسکویت و تنقلات",
          "مکمل و ویتامین",
          "لوازم تغذیه",
        ],
      },
      {
        title: "وسایل نوزاد",
        items: [
          "کریر و کالسکه",
          "صندلی ماشین",
          "تخت و روروئک",
          "پوشک و مرطوب کننده",
          "شیشه شیر و پستانک",
        ],
      },
      {
        title: "سرگرمی",
        items: [
          "دوچرخه و اسکوتر",
          "استخر بادی",
          "تاب و سرسره",
          "لوازم نقاشی",
          "کتاب و قصه",
        ],
      },
      {
        title: "آموزشی",
        items: [
          "کامپیوتر کودک",
          "تبلت آموزشی",
          "پازل و معما",
          "موسیقی کودک",
          "زبان آموزی",
        ],
      },
      {
        title: "ایمنی و بهداشت",
        items: [
          "محافظ گوشه‌ها",
          "گیت و نرده محافظ",
          "دماسنج و مراقبت",
          "ضد عفونی کننده",
        ],
      },
      {
        title: "جشن و تولد",
        items: [
          "تزئینات جشن",
          "کیک و شیرینی",
          "هدیه و سوپرایز",
          "کارت دعوت",
        ],
      },
    ],
  },
  {
    id: "sports",
    title: "ورزش و سفر",
    icon: TrophyIcon,
    groups: [
      {
        title: "لوازم ورزشی",
        items: [
          "توپ و راکت",
          "دمبل و هالتر",
          "طناب و کش ورزشی",
          "لباس ورزشی",
          "کفش ورزشی",
        ],
      },
      {
        title: "باشگاه خانگی",
        items: [
          "تردمیل و دوچرخه ثابت",
          "الپتیکال و استپر",
          "نیمکت بدنسازی",
          "موسیقی ورزشی",
          "لوازم جانبی",
        ],
      },
      {
        title: "کوهنوردی",
        items: [
          "کفش و کتانی",
          "کوله پشتی",
          "چادر و کیسه خواب",
          "طناب و کارابین",
          "وسایل ایمنی",
        ],
      },
      {
        title: "سفر",
        items: [
          "چمدان و ساک",
          "کیف لوازم بهداشتی",
          "پاوربانک مسافرتی",
          "عینک و کلاه",
          "نقشه و راهنما",
        ],
      },
      {
        title: "کمپینگ",
        items: [
          "اجاق و باربیکیو",
          "چراغ قوه و چراغ",
          "ظروف سفری",
          "تشک و زیرانداز",
          "وسایل آشپزی",
        ],
      },
      {
        title: "دوچرخه",
        items: [
          "دوچرخه کوهستان",
          "دوچرخه شهری",
          "لوازم جانبی دوچرخه",
          "کلاه ایمنی",
          "پمپ و تعمیرات",
        ],
      },
      {
        title: "شنا و آبی",
        items: [
          "مایو و عینک شنا",
          "تشک و اسباب بازی آبی",
          "کفش و دماغی شنا",
          "لوازم غواصی",
        ],
      },
      {
        title: "ورزش‌های تخصصی",
        items: [
          "گلف و تنیس",
          "اسکی و اسنوبرد",
          "اسب‌سواری",
          "پینت بال",
        ],
      },
    ],
  },
  {
    id: "books",
    title: "کتاب و لوازم تحریر",
    icon: BookOpenIcon,
    groups: [
      {
        title: "کتاب",
        items: [
          "رمان و داستان",
          "کتاب دانشگاهی",
          "کودک و نوجوان",
          "تاریخ و سیاست",
          "مذهبی و عرفانی",
        ],
      },
      {
        title: "لوازم التحریر",
        items: [
          "خودکار و روان‌نویس",
          "مداد و پاک‌کن",
          "دفتر و کاغذ",
          "جامدادی و کیف",
          "خط کش و گونیا",
        ],
      },
      {
        title: "هنری",
        items: [
          "رنگ و قلمو",
          "بوم و کاغذ طراحی",
          "مداد شمعی و پاستل",
          "مجسمه سازی",
          "کالیگرافی",
        ],
      },
      {
        title: "اداری",
        items: [
          "پرونده و زونکن",
          "مهر و تاریخ‌زن",
          "منگنه و سوزن منگنه",
          "تمبر و پاکت نامه",
          "کاغذ کپی و پرینتر",
        ],
      },
      {
        title: "کاغذ و بسته‌بندی",
        items: [
          "کاغذ کادو",
          "ربان و تزئینات",
          "جعبه و کارتن",
          "نوار چسب و چسب",
          "کارت و برچسب",
        ],
      },
      {
        title: "نوشت‌افزار دیجیتال",
        items: [
          "تبلت طراحی",
          "قلم نوری",
          "نرم‌افزار طراحی",
          "اسکنر و پرینتر",
        ],
      },
      {
        title: "آموزشی",
        items: [
          "فلش کارت",
          "پازل آموزشی",
          "نقشه و اطلس",
          "کیت علمی",
        ],
      },
      {
        title: "کتاب‌های الکترونیکی",
        items: [
          "ایبوک ریدر",
          "کتاب‌های صوتی",
          "اشتراک کتابخانه",
          "اپلیکیشن‌های مطالعه",
        ],
      },
    ],
  },
  {
    id: "auto",
    title: "خودرو و موتورسیکلت",
    icon: TruckIcon,
    groups: [
      {
        title: "لوازم خودرو",
        items: [
          "روغن و ضد یخ",
          "لاستیک و رینگ",
          "باتری و استارت",
          "فیلتر هوا و روغن",
          "تیغه برف پاک کن",
        ],
      },
      {
        title: "موتورسیکلت",
        items: [
          "کلاه ایمنی",
          "لوازم یدکی موتور",
          "پوشاک موتورسوار",
          "زین و باربند",
          "آینه و روشنایی",
        ],
      },
      {
        title: "صوتی و تصویری",
        items: [
          "ضبط و پخش خودرو",
          "اسپیکر و آمپلی فایر",
          "دوربین دنده عقب",
          "هدآپ دیسپلی",
          "کابل و اتصالات",
        ],
      },
      {
        title: "ابزار",
        items: [
          "جعبه ابزار",
          "آچار و پیچ گوشتی",
          "جک و گاز آچار",
          "فنر و کمک فنر",
        ],
      },
      {
        title: "لوازم برقی خودرو",
        items: [
          "کارواش",
          "شامپو و واکس",
          "برس و اسفنج",
          "جاذب رطوبت",
          "دستگاه کارواش",
          "پولیش و درخشان کننده",
        ],
      },
      {
        title: "یدکی",
        items: [
          "سیستم تعلیق",
          "تسمه و پولی",
          "شمع و کوئل",
          "ترمز و کاسه چرخ",
          "رادیاتور و شلنگ",
        ],
      },
      {
        title: "ایمنی و نگهداری",
        items: [
          "کپسول آتش‌نشانی",
          "جکسه و مثلث خطر",
          "ضد سرقت و آلارم",
          "کاور و پارکینگی",
        ],
      },
      {
        title: "لوازم داخلی",
        items: [
          "روکش صندلی",
          "فرش و زیرپایی",
          "آینه و شیشه",
          "جاکلیدی و نگهدارنده",
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "صنعتی و ابزار",
    icon: WrenchScrewdriverIcon,
    groups: [
      {
        title: "ابزار دستی",
        items: [
          "آچار و پیچ گوشتی",
          "انبر و پliers",
          "چکش و پتک",
          "اره و اره مویی",
          "متر و خط کش",
        ],
      },
      {
        title: "ابزار برقی",
        items: [
          "دریل و پیچ گوشتی برقی",
          "اره برقی و فرز",
          "سمباده و پولیشر",
          "هویه و لحیم کاری",
          "شارژر و باتری",
        ],
      },
      {
        title: "ایمنی",
        items: [
          "کلاه و عینک ایمنی",
          "دستکش و کفش ایمنی",
          "ماسک و محافظ گوش",
          "جلیقه و لباس کار",
          "کپسول آتش‌نشانی",
        ],
      },
      {
        title: "اندازه‌گیری",
        items: [
          "متر لیزری",
          "کولیس و میکرومتر",
          "تراز و شاغول",
          "دماسنج و رطوبت سنج",
          "آمپرمتر و مولتی متر",
        ],
      },
      {
        title: "جوشکاری",
        items: [
          "دستگاه جوش",
          "ماسک جوشکاری",
          "الکترود و سیم جوش",
          "انبر و چکش جوشکاری",
          "گاز و اکسیژن",
        ],
      },
      {
        title: "باغبانی",
        items: [
          "قیچی باغبانی",
          "اره و تبر",
          "بیل و شن کش",
          "چمن زن و هرس برقی",
          "آبپاش و شلنگ",
        ],
      },
      {
        title: "نگهداری و تعمیر",
        items: [
          "روغن و گریس",
          "چسب و درزگیر",
          "سیم و کابل",
          "پیچ و مهره",
        ],
      },
      {
        title: "ماشین‌آلات",
        items: [
          "کمپرسور باد",
          "پمپ آب و شناور",
          "ژنراتور و موتور",
          "جرثقیل و بالابر",
        ],
      },
    ],
  },
  {
    id: "garden",
    title: "کشاورزی و باغبانی",
    icon: GlobeAltIcon,
    groups: [
      {
        title: "بذر و نهال",
        items: [
          "بذر سبزیجات",
          "بذر گل و گیاهان زینتی",
          "نهال میوه",
          "قلمه و پیاز",
          "بذر صیفی جات",
        ],
      },
      {
        title: "کود و سم",
        items: [
          "کود حیوانی",
          "کود شیمیایی",
          "کود مایع و تقویتی",
          "سموم دفع آفات",
          "قارچ کش و علف کش",
        ],
      },
      {
        title: "آبیاری",
        items: [
          "شلنگ و اتصالات",
          "پمپ آب و قطره چکان",
          "آبپاش و مه پاش",
          "تایمر و سیستم اتوماتیک",
          "منبع و مخزن آب",
        ],
      },
      {
        title: "ابزار باغبانی",
        items: [
          "بیل و بیلچه",
          "چنگک و شن کش",
          "قیچی باغبانی",
          "اره و تبر",
          "فرغون و سطل",
        ],
      },
      {
        title: "گل و گیاه",
        items: [
          "گلدان و زیرگلدانی",
          "خاک و بستر کاشت",
          "گیاهان آپارتمانی",
          "گیاهان فضای باز",
          "کاکتوس و ساکولنت",
        ],
      },
      {
        title: "ماشین‌آلات",
        items: [
          "تراکتور و تیلر",
          "دروگر و کمباین",
          "سمپاش و کودپاش",
          "چمن زن و علف تراش",
          "پمپ و موتور آب",
        ],
      },
      {
        title: "پرورش و دامداری",
        items: [
          "خوراک دام و طیور",
          "تجهیزات مرغداری",
          "لوازم زنبورداری",
          "آبخوری و دانخوری",
          "قرص و مکمل دامی",
        ],
      },
      {
        title: "تجهیزات گلخانه",
        items: [
          "پوشش گلخانه",
          "سیستم گرمایشی",
          "سیستم تهویه",
          "قفسه و گروباکس",
          "کنترل رطوبت و دما",
        ],
      },
    ],
  },
];

// جستجوهای پیشنهادی
const trendingSearches = [
  "گوشی iphone 17",
  "گوشی iphone 16",
  "گوشی S25",
  "لپ‌تاپ گیمینگ",
  "ساعت هوشمند",
];

const recentSearches = ["مک بوک", "گوشی شیائومی", "گوشی سامسونگ"];

// لینک دسته‌بندی‌ها
const categoryHref = (value: string) =>
  `/products?search=${encodeURIComponent(value)}`;

// دسته‌بندی‌های برتر ثابت
const featuredCategories = [
  "گوشی‌های هوشمند",
  "لپ‌تاپ",
  "هندزفری بی‌سیم",
  "ساعت‌های هوشمند",
  "لوازم جانبی",
  "کنسول بازی",
];

// برندهای ویژه ثابت
const featuredBrands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Sony",
  "Lenovo",
  "Asus",
];

export default function DesktopHeader() {
  const [activeCategory, setActiveCategory] = useState("digital");
  const [searchValue, setSearchValue] = useState("");
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(true);
  const [topHeaderHeight, setTopHeaderHeight] = useState(0);
  const navigationVisibleRef = useRef(true);
  const topHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerElement = topHeaderRef.current;
    if (!headerElement) return;

    const updateHeaderHeight = () => {
      setTopHeaderHeight(headerElement.offsetHeight);
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerElement);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let animationFrame = 0;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;

        const currentScrollY = window.scrollY;
        const delta = currentScrollY - previousScrollY;
        previousScrollY = currentScrollY;

        if (currentScrollY < 100) {
          accumulatedDelta = 0;

          if (!navigationVisibleRef.current) {
            navigationVisibleRef.current = true;
            setIsNavigationVisible(true);
          }
          return;
        }

        if (delta === 0) return;

        // Reset the accumulator when the scroll direction changes.
        if (
          accumulatedDelta !== 0 &&
          Math.sign(delta) !== Math.sign(accumulatedDelta)
        ) {
          accumulatedDelta = 0;
        }

        accumulatedDelta += delta;

        // Ignore tiny movements; require a deliberate 32px direction change.
        if (accumulatedDelta >= 32 && navigationVisibleRef.current) {
          navigationVisibleRef.current = false;
          setIsNavigationVisible(false);
          accumulatedDelta = 0;
        } else if (
          accumulatedDelta <= -32 &&
          !navigationVisibleRef.current
        ) {
          navigationVisibleRef.current = true;
          setIsNavigationVisible(true);
          accumulatedDelta = 0;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const activeMenu =
    categories.find((category) => category.id === activeCategory) ??
    categories[0];

  return (
    <div className="hidden bg-background lg:block">
      

      {/* Sticky header: main section stays visible while scrolling */}
      <div className="relative z-[60] bg-background">
      {/* Main header */}
      <div
        ref={topHeaderRef}
        className="relative z-50 border-b border-border bg-background"
      >
        <div className="mx-auto px-6">
          <div className="flex h-24 items-center justify-between gap-6">
              {/* Logo + Global Search (right side in RTL) */}
              <div className="flex min-w-0 flex-1 items-center gap-26">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex shrink-0 items-center gap-3"
                  aria-label="AUVENA TECH"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-evergreen text-2xl font-black text-white">
                    A
                  </span>

                  <span className="flex flex-col">
                    <span className="text-lg font-black tracking-wide text-brand-evergreen">
                      AUVENA
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.28em] text-brand-gold">
                      TECH
                    </span>
                  </span>
                </Link>

                {/* Global Search */}
                <div className="min-w-0 max-w-2xl flex-1">
                  <GlobalSearch />
                </div>
              </div>

              {/* Account, Notifications and Cart (left side in RTL) */}
              <div className="flex shrink-0 items-center gap-3">
                {/* Notifications */}
                <button
                  type="button"
                  aria-label="اعلان‌ها"
                  className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl text-brand-olive transition"
                >
                  <BellIcon className="h-6 w-6 origin-top transition-transform duration-300 group-hover:rotate-12" />

                  <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-danger ring-2 ring-surface" />
                </button>

                {/* Login / Register */}
                <Link
                  href="/login"
                  className="flex h-12 items-center gap-2 rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-4 text-sm font-bold text-foreground transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold/20 hover:shadow-sm"
                >
                  <UserIcon className="h-5 w-5 text-brand-olive transition-colors duration-200" />
                  <span>ورود | ثبت‌نام</span>
                </Link>

                {/* Divider */}
                <div className="h-8 w-px bg-border-strong" />

                {/* Shopping Cart */}
                <Link
                  href="/cart"
                  aria-label="سبد خرید"
                  className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-button-primary text-white shadow-card transition hover:bg-button-primary-hover"
                >
                  <ShoppingBagIcon className="h-6 w-6" />

                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-lg border-2 border-background bg-brand-olive px-1 text-[10px] font-black text-brand-evergreen">
                    ۲
                  </span>
                </Link>
              </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation: slides behind the main header on downward scroll */}
      <div
        className="relative z-40 mt-0.5 mb-3 transition-transform duration-500 ease-in-out [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: isNavigationVisible
            ? "translateY(0)"
            : `translateY(-${topHeaderHeight}px)`,
          willChange: "transform",
          pointerEvents: isNavigationVisible ? "auto" : "none",
        }}
        aria-hidden={!isNavigationVisible}
      >
      <nav className="relative rounded-full border border-brand-gold/25 bg-[#F7F3E5]/75 shadow-[0_4px_18px_rgba(191,163,62,0.07)]">
        <div className="px-5">
          <ul className="flex h-14 items-center gap-7">
            {/* Categories mega menu */}
            <li
              className="static h-full"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
                onFocus={() => setIsMegaMenuOpen(true)}
                onClick={() => setIsMegaMenuOpen((open) => !open)}
                className="flex h-full items-center gap-2 text-sm font-black text-foreground transition hover:text-brand-gold"
              >
                <Bars3Icon className="h-5 w-5" />
                دسته‌بندی محصولات
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full z-50 w-full origin-top overflow-hidden rounded-2xl border border-brand-gold/25 bg-surface shadow-[0_18px_45px_rgba(6,39,38,0.14)] transition-all duration-300 ease-out ${
                  isMegaMenuOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible pointer-events-none translate-y-2 opacity-0"
                }`}
                aria-hidden={!isMegaMenuOpen}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                {/* Full-width mega menu */}
                <div className="grid w-full min-h-[650px] grid-cols-[240px_minmax(0,1fr)_640px] gap-0 bg-surface py-5">
                  {/* Category sidebar */}
                  <div className="border-l border-border pl-4 pr-6">
                    <div className="mb-4 px-3">
                      <p className="text-xs font-black text-text-muted">
                        دسته‌بندی‌های اصلی
                      </p>
                    </div>

                    <div className="space-y-1">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;

                        return (
                          <button
                            key={category.id}
                            type="button"
                            onMouseEnter={() =>
                              setActiveCategory(category.id)
                            }
                            onFocus={() =>
                              setActiveCategory(category.id)
                            }
                            onClick={() =>
                              setActiveCategory(category.id)
                            }
                            aria-pressed={isActive}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-right text-xs font-bold transition ${
                              isActive
                                ? "bg-surface-gold text-brand-gold"
                                : "text-text-secondary hover:bg-surface-muted hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5 shrink-0" />
                            <span>{category.title}</span>
                            <ChevronLeftIcon className="mr-auto h-4 w-4" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active category content */}
                  <div className="min-w-0 px-7">
                    <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <h3 className="text-lg font-black text-foreground">
                          {activeMenu.title}
                        </h3>
                        <p className="mt-1 text-xs text-text-muted">
                          محصولات و زیر‌دسته‌های {activeMenu.title}
                        </p>
                      </div>

                      <Link
                        href={categoryHref(activeMenu.title)}
                        className="flex shrink-0 items-center gap-2 rounded-xl bg-surface-gold px-4 py-2.5 text-xs font-bold text-brand-gold transition hover:bg-brand-gold hover:text-white"
                      >
                        مشاهده همه محصولات
                        <ChevronLeftIcon className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-x-7 gap-y-8">
                      {activeMenu.groups.map((group) => (
                        <div key={group.title} className="space-y-4">
                          <Link
                            href={categoryHref(group.title)}
                            className="block border-r-2 border-brand-olive pr-3 text-sm font-black text-foreground transition hover:text-brand-gold"
                          >
                            {group.title}
                          </Link>

                          <ul className="space-y-3 pr-4">
                            {group.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={categoryHref(item)}
                                  className="text-xs text-text-secondary transition hover:text-brand-gold"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fixed promotional sidebar */}
                  <aside className="flex min-w-0 flex-col gap-3 border-r border-border px-4">
                    {/* Fixed-height promotional banner */}
                    <Link
                      href="/products?filter=offers"
                      className="group/banner relative flex h-[245px] min-h-[245px] max-h-[245px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-brand-evergreen p-5 text-white shadow-card transition hover:shadow-dropdown"
                    >
                      <span className="absolute -left-10 -top-10 h-36 w-36 rounded-full border-[18px] border-white/5 transition-transform duration-500 group-hover/banner:scale-110" />

                      <span className="absolute -bottom-12 -right-8 h-40 w-80 rounded-full bg-brand-olive/15 blur-2xl" />

                      <div className="relative z-10">
                        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-brand-olive">
                          پیشنهاد ویژه AUVENA
                        </span>

                        <p className="mt-5 text-xl font-black leading-8">
                          انتخاب هوشمندانه، خرید مطمئن
                        </p>

                        <p className="mt-2 text-xs leading-6 text-white/70">
                          پیشنهادهای ویژه و محصولات منتخب را از دست ندهید.
                        </p>
                      </div>

                      <span className="relative z-10 mt-5 flex items-center gap-2 text-xs font-bold text-brand-olive">
                        مشاهده پیشنهادها
                        <ChevronLeftIcon className="h-4 w-4" />
                      </span>
                    </Link>

                    {/* Static featured categories */}
                    <div className="rounded-2xl border border-border bg-surface-muted p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-xs font-black text-foreground">
                          دسته‌بندی‌های برتر
                        </h4>
                        <SparklesIcon className="h-4 w-4 text-brand-gold" />
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {featuredCategories.map((category) => (
                          <Link
                            key={category}
                            href={categoryHref(category)}
                            className="rounded-lg border border-border bg-surface px-2.5 py-2 text-[10px] font-bold text-text-secondary transition hover:border-brand-olive hover:text-brand-gold"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Static featured brands */}
                    <div className="rounded-2xl border border-border bg-surface p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-xs font-black text-foreground">
                          برندهای ویژه
                        </h4>
                        <SparklesIcon className="h-4 w-4 text-brand-gold" />
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {featuredBrands.map((brand) => (
                          <Link
                            key={brand}
                            href={categoryHref(brand)}
                            className="rounded-lg border border-border bg-surface-muted px-2.5 py-2 text-[10px] font-bold text-text-secondary transition hover:border-brand-olive hover:text-brand-gold"
                          >
                            {brand}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </li>

            {/* Support dropdown */}
            <li className="group/support relative h-full">
              <button
                type="button"
                className="flex h-full items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-brand-gold"
              >
                پشتیبانی و راهنما
                <ChevronDownIcon className="h-4 w-4 transition group-hover/support:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-dropdown transition-all group-hover/support:visible group-hover/support:translate-y-0 group-hover/support:opacity-100 group-focus-within/support:visible group-focus-within/support:translate-y-0 group-focus-within/support:opacity-100">
                <Link
                  href="/support"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-xs text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
                >
                  واحد پشتیبانی
                </Link>

                <Link
                  href="/faq"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-xs text-text-secondary transition hover:bg-surface-muted hover:text-brand-gold"
                >
                  <QuestionMarkCircleIcon className="h-4 w-4" />
                  سوالات متداول
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/products?filter=offers"
                className="flex items-center gap-2 text-sm font-bold text-brand-gold transition hover:text-brand-evergreen"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
                شگفت‌انگیزها
              </Link>
            </li>

            <li>
              <Link
                href="/products?sort=bestselling"
                className="text-sm font-medium text-text-secondary transition hover:text-brand-gold"
              >
                پرفروش‌ترین‌ها
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="text-sm font-medium text-text-secondary transition hover:text-brand-gold"
              >
                وبلاگ
              </Link>
            </li>

            <li className="mr-auto">
              <Link
                href="/shipping"
                className="flex h-9 items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3  text-xs font-bold text-danger transition-all duration-200 hover:border-brand-gold hover:bg-brand-gold/20 hover:shadow-sm"
              >
                <MapPinIcon className="h-4 w-4 text-brand-gold" />

                <span>انتخاب آدرس</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      </div>
    </div>
  );
}