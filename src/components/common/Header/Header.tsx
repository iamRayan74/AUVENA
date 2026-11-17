import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { PromotionSlot } from "@/features/promotions/components/PromotionSlot";

export default function Header() {
  return (
    <header className="sticky top-0 z-[60]">
      <PromotionSlot name="header.topBanner" />
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}