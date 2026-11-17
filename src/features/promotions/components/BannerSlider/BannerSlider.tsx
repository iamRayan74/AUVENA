"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { BannerSlidePromotion } from "../../types/promotion.types";
import { BannerSlide } from "./BannerSlide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner-slider.css";

export function BannerSlider({ banners }: { banners: BannerSlidePromotion[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!banners.length) return null;

  const height = "h-[120px] sm:h-[180px] lg:h-[400px]";

  if (!mounted) {
    return <div className={`w-full ${height} bg-surface-muted`} aria-hidden="true" />;
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1.16}
      centeredSlides
      spaceBetween={10}
      loop={banners.length > 1}
      autoplay={banners.length > 1 ? {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      } : false}
      navigation={banners.length > 1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1.16, centeredSlides: true, spaceBetween: 12 },
        1024: { slidesPerView: 1, centeredSlides: false, spaceBetween: 0 },
      }}
      className={`banner-swiper w-full ${height}`}
      dir="rtl"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id} className="h-full">
          <BannerSlide promotion={banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
