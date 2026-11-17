
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "soft" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "!bg-[#061A3E] !text-white !border-[#061A3E] hover:!bg-[#102B52] hover:!border-[#102B52]",

  secondary:
    "!bg-[#061A3E] !text-white !border-[#061A3E] hover:!bg-[#102B52] hover:!border-[#102B52]",

  outline:
    "bg-transparent text-[#061A3E] border-[#061A3E] hover:!bg-[#061A3E] hover:!text-white",

  soft:
    "bg-[#E9EEF5] text-[#061A3E] border-transparent hover:bg-[#DCE5F0]",

  danger:
    "bg-danger text-white border-danger hover:opacity-90",
};


const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`
        inline-flex items-center justify-center gap-2
        border font-medium
        transition-all duration-200
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-border-focus
        active:scale-[0.98]
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}

      {children}
    </button>
  );
}
