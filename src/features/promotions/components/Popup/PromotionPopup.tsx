"use client";

import { useEffect, useState } from "react";
import type { PopupPromotion } from "../../types/promotion.types";
import { usePromotionContext } from "../../providers/PromotionProvider";
import { DestinationResolver } from "../DestinationResolver";

const STORAGE_KEY = "auvena-promotion-popup";

export function PromotionPopup() {
  const { placements } = usePromotionContext();
  const value = placements["global.popup"];
  const promotion = (Array.isArray(value) ? value[0] : value) as PopupPromotion | null;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!promotion) return;
    if (promotion.frequency === "once" && localStorage.getItem(STORAGE_KEY) === promotion.id) return;
    if (promotion.frequency === "session" && sessionStorage.getItem(STORAGE_KEY) === promotion.id) return;
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, [promotion]);

  useEffect(() => {
    if (!open || !promotion) return;
    if (promotion.frequency === "once") localStorage.setItem(STORAGE_KEY, promotion.id);
    if (promotion.frequency === "session") sessionStorage.setItem(STORAGE_KEY, promotion.id);
  }, [open, promotion]);

  if (!promotion || !open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-4" role="dialog" aria-modal="true" aria-label={promotion.title} onClick={() => setOpen(false)}>
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => setOpen(false)} aria-label="بستن" className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-xl text-[#062726]">×</button>
        <DestinationResolver destination={promotion.destination} className="block">
          <img src={promotion.image.desktop} alt={promotion.image.alt ?? promotion.title} className="block max-h-[70vh] w-full object-cover" />
        </DestinationResolver>
        <div className="p-5 text-right" dir="rtl">
          <h2 className="font-bold text-[#062726]">{promotion.title}</h2>
          {promotion.description && <p className="mt-2 text-sm text-[#52645B]">{promotion.description}</p>}
        </div>
      </div>
    </div>
  );
}
