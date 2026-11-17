
import type { HTMLAttributes } from "react";

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: () => void;
  blur?: boolean;
  opacity?: "light" | "medium" | "dark";
  zIndex?: number;
  closeOnClick?: boolean;
}

const opacityStyles = {
  light: "bg-brand-evergreen/20",
  medium: "bg-brand-evergreen/40",
  dark: "bg-brand-evergreen/60",
};

export default function Backdrop({
  isOpen,
  onClose,
  blur = true,
  opacity = "medium",
  zIndex = 40,
  closeOnClick = true,
  className = "",
  ...props
}: BackdropProps) {
  if (!isOpen) return null;

  return (
    <div
      aria-hidden="true"
      onClick={closeOnClick ? onClose : undefined}
      className={`
        fixed inset-0
        ${opacityStyles[opacity]}
        ${blur ? "backdrop-blur-sm" : ""}
        animate-in fade-in duration-200
        ${className}
      `}
      style={{ zIndex }}
      {...props}
    />
  );
}
