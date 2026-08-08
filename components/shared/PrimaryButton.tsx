import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: PrimaryButtonProps) {
  const classes =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[#F97316] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 " +
    className;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
