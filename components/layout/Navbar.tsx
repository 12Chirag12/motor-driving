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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[#1E40AF] sm:h-12 sm:w-12">
            <Image
              src="/images/logo/logo.png"
              alt="Mangesh Motor Driving School"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-bold text-[#1F2937] sm:text-lg lg:text-xl">
              Mangesh Motor
            </h1>

            <p className="text-xs text-gray-500 sm:text-sm">
              Driving School
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-all duration-300 hover:text-[#1E40AF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <PrimaryButton
            href="tel:+919876543210"
            className="gap-2"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </PrimaryButton>

          <PrimaryButton
            href="https://wa.me/919876543210"
            className="h-11 w-11 rounded-xl bg-green-600 px-0 py-0 hover:bg-green-700"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} />
          </PrimaryButton>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition-all duration-300 hover:border-[#1E40AF] hover:text-[#1E40AF] lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm p-0"
          >
            <SheetHeader className="border-b border-slate-200 px-6 py-5">
              <SheetTitle className="text-left text-lg font-semibold text-[#1F2937]">
                Navigate
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-slate-50 hover:text-[#1E40AF]"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Actions */}
              <div className="mt-4 grid gap-3">
                <PrimaryButton
                  href="tel:+919876543210"
                  className="w-full gap-2"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </PrimaryButton>

                <PrimaryButton
                  href="https://wa.me/919876543210"
                  className="w-full gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Us</span>
                </PrimaryButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}