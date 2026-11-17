
import type { HTMLAttributes, ReactNode } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  closable?: boolean;
  icon?: boolean;
}

const variants = {
  success: {
    wrapper: "border-success/20 bg-success-bg text-success",
    icon: CheckCircleIcon,
  },
  error: {
    wrapper: "border-danger/20 bg-danger-bg text-danger",
    icon: ExclamationCircleIcon,
  },
  warning: {
    wrapper: "border-warning/20 bg-warning-bg text-warning",
    icon: ExclamationTriangleIcon,
  },
  info: {
    wrapper: "border-info/20 bg-info-bg text-info",
    icon: InformationCircleIcon,
  },
};

export default function Alert({
  variant = "info",
  title,
  children,
  onClose,
  closable = false,
  icon = true,
  className = "",
  ...props
}: AlertProps) {
  const currentVariant = variants[variant];
  const Icon = currentVariant.icon;

  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={`
        flex items-start gap-3
        rounded-xl border p-4
        ${currentVariant.wrapper}
        ${className}
      `}
      {...props}
    >
      {icon && (
        <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      )}

      <div className="min-w-0 flex-1">
        {title && (
          <h4 className="mb-1 text-sm font-bold">
            {title}
          </h4>
        )}

        <div className="text-sm leading-7 opacity-90">
          {children}
        </div>
      </div>

      {closable && (
        <button
          type="button"
          onClick={onClose}
          aria-label="بستن پیام"
          className="shrink-0 rounded-lg p-1 opacity-70 transition hover:bg-black/5 hover:opacity-100"
        >
          <XMarkIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
