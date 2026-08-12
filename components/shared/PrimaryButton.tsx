import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  className,
  type = "button",
  "aria-label": ariaLabel,
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#FACC15]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
