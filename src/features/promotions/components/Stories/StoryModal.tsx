"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { StoryPromotion } from "../../types/promotion.types";
import { DestinationResolver } from "../DestinationResolver";

export function StoryModal({
  stories,
  index,
  onClose,
  onChange,
}: {
  stories: StoryPromotion[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const current = stories[index];

  const slides = useMemo(() => {
    if (current.slides?.length) return current.slides;
    return [{ image: current.image.desktop, duration: 5000, alt: current.image.alt }];
  }, [current]);

  const nextStory = useCallback(() => {
    if (index < stories.length - 1) onChange(index + 1);
    else onClose();
  }, [index, stories.length, onChange, onClose]);

  const previousStory = useCallback(() => {
    if (index > 0) onChange(index - 1);
  }, [index, onChange]);

  const nextSlide = useCallback(() => {
    if (slideIndex < slides.length - 1) setSlideIndex((value) => value + 1);
    else nextStory();
  }, [slideIndex, slides.length, nextStory]);

  const previousSlide = useCallback(() => {
    if (slideIndex > 0) setSlideIndex((value) => value - 1);
    else previousStory();
  }, [slideIndex, previousStory]);

  useEffect(() => {
    setSlideIndex(0);
  }, [index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, nextSlide, previousSlide]);

  useEffect(() => {
    const duration = slides[slideIndex]?.duration ?? 5000;
    const timer = window.setTimeout(nextSlide, duration);
    return () => window.clearTimeout(timer);
  }, [slideIndex, slides, nextSlide]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  if (!current) return null;

  const slide = slides[slideIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="relative h-[min(82vh,760px)] w-full max-w-[420px] overflow-hidden rounded-2xl bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={slide.image} alt={slide.alt ?? current.title} className="absolute inset-0 h-full w-full object-contain" />

        <div className="absolute inset-x-3 top-3 z-20 flex gap-1">
          {slides.map((item, itemIndex) => (
            <span key={`${item.image}-${itemIndex}`} className="h-1 flex-1 overflow-hidden rounded-full bg-white/35">
              <span className={`block h-full rounded-full bg-white ${itemIndex < slideIndex ? "w-full" : itemIndex === slideIndex ? "w-full animate-[story-progress_5s_linear]" : "w-0"}`} />
            </span>
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-7 text-white">
          <div className="flex items-center gap-2">
            <img src={current.image.thumbnail} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-sm font-semibold">{current.title}</span>
          </div>
          <button type="button" onClick={onClose} aria-label="بستن استوری" className="rounded-full bg-black/30 p-2 text-xl leading-none text-white">×</button>
        </div>

        <button type="button" aria-label="استوری قبلی" onClick={previousSlide} className="absolute inset-y-16 right-0 z-10 w-1/3 cursor-pointer" />
        <button type="button" aria-label="استوری بعدی" onClick={nextSlide} className="absolute inset-y-16 left-0 z-10 w-2/3 cursor-pointer" />

        {current.destination.type !== "none" && (
          <div className="absolute inset-x-5 bottom-5 z-20">
            <DestinationResolver destination={slide.destination ?? current.destination} className="block rounded-xl bg-white/95 px-4 py-3 text-center text-sm font-bold text-[#062726]">
              مشاهده بیشتر
            </DestinationResolver>
          </div>
        )}
      </div>
    </div>
  );
}
