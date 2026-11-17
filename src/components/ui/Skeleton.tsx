
import type { HTMLAttributes } from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  width?: string | number;
  height?: string | number;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "gold" | "olive";
  animate?: boolean;
  circle?: boolean;
};

const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const variantStyles = {
  default: "bg-[#E9E3DC]",
  gold: "bg-[#F0E2E8]",
  olive: "bg-[#E8EDD9]",
};

export default function Skeleton({
  width,
  height = 16,
  rounded = "md",
  variant = "default",
  animate = true,
  circle = false,
  className = "",
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        ${variantStyles[variant]}
        ${circle ? "rounded-full" : roundedStyles[rounded]}
        ${animate ? "animate-pulse" : ""}
        ${className}
      `}
      style={{
        width: width ?? "100%",
        height: circle ? width ?? height : height,
        ...style,
      }}
      {...props}
    />
  );
}
