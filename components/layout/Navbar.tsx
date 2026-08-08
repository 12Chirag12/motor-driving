"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, Phone } from "lucide-react";

import PrimaryButton from "@/components/shared/PrimaryButton";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full sm:h-11 sm:w-11">
            <Image
              src="/images/logo/logo.png"
              alt="Mangesh Motor Driving School"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-tight text-[#1F2937] sm:text-base lg:text-lg">
              Mangesh Motor
            </h1>

            <p className="text-[11px] text-gray-500 sm:text-xs">
              Driving School
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-[#1E40AF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <PrimaryButton
            href="tel:+919876543210"
            className="h-10 gap-2 rounded-xl px-4 text-sm"
          >
            <Phone size={17} />
            <span>Call Now</span>
          </PrimaryButton>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white transition-colors duration-200 hover:bg-green-700"
          >
            <MessageCircle size={19} />
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors duration-200 hover:border-[#1E40AF] hover:text-[#1E40AF] lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={23} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm p-0"
          >
            <SheetHeader className="border-b border-slate-200 px-6 py-5">
              <SheetTitle className="text-left text-lg font-semibold text-[#1F2937]">
                Mangesh Motor
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-[#1E40AF]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5">
                <PrimaryButton
                  href="tel:+919876543210"
                  className="w-full gap-2"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </PrimaryButton>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-green-600 font-semibold text-white transition-colors duration-200 hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}