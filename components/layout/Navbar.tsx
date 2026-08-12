"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import PrimaryButton from "@/components/shared/PrimaryButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { contactData, navItems } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const phoneHref = `tel:${contactData.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="#home" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Mangesh Motor Driving School home">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white">
            <Image src="/images/logo/logo.PNG" alt="" fill sizes="44px" className="object-contain p-0.5" priority />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-bold tracking-tight text-[#1F2937] sm:text-base">Mangesh Motor</p>
            <p className="text-[11px] font-medium text-slate-500 sm:text-xs">Driving School</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
              className={cn(
                "relative whitespace-nowrap py-2 text-[13px] font-semibold text-slate-600 transition-colors hover:text-[#1E40AF] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#FACC15] after:transition-transform",
                active === item.href && "text-[#1E40AF] after:scale-x-100",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <PrimaryButton href={phoneHref} className="h-10 min-h-10 px-4">
            <Phone className="h-4 w-4" /> Call Now
          </PrimaryButton>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#1E40AF] xl:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm gap-0 overflow-y-auto border-slate-200 bg-white p-0">
            <SheetHeader className="border-b border-slate-200 px-6 py-5">
              <SheetTitle className="text-left text-lg font-bold text-[#1F2937]">Mangesh Motor</SheetTitle>
              <p className="text-left text-xs text-slate-500">Driving School · Palghar</p>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 py-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#1E40AF]",
                    active === item.href && "bg-blue-50 text-[#1E40AF]",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 grid gap-3 border-t border-slate-200 pt-5">
                <PrimaryButton href={phoneHref} className="w-full"><Phone className="h-4 w-4" /> Call Now</PrimaryButton>
                <a
                  href={`https://wa.me/${contactData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-700 transition-colors hover:bg-green-100"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
