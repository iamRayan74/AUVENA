"use client";

import { useState } from "react";
import type { TopBannerPromotion } from "../../types/promotion.types";
import { DestinationResolver } from "../DestinationResolver";

export function TopBanner({ promotion }: { promotion: TopBannerPromotion }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="relative flex min-h-9 items-center justify-center px-10 py-2 text-center text-xs font-medium sm:text-sm"
      style={{
        backgroundColor: promotion.backgroundColor ?? "#062726",
        color: promotion.textColor ?? "#FFFBCC",
      }}
      dir="rtl"
    >
      <DestinationResolver destination={promotion.destination} className="block">
        {promotion.message}
      </DestinationResolver>
      {promotion.dismissible && (
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="بستن اطلاعیه"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-80 transition hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" />
          </svg>
        </button>
      )}
    </div>
  );
}
