import Link from "next/link";
import type { ReactNode } from "react";
import type { PromotionDestination } from "../types/destination.types";
import { isExternalDestination, resolveDestination } from "../utils/destination.utils";

type Props = {
  destination: PromotionDestination;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function DestinationResolver({
  destination,
  children,
  className,
  ariaLabel,
}: Props) {
  const href = resolveDestination(destination);

  if (!href) {
    return <div className={className}>{children}</div>;
  }

  if (isExternalDestination(destination)) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
