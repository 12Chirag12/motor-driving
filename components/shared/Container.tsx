import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export default function Container({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
