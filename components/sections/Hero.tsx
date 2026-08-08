import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";

import PrimaryButton from "@/components/shared/PrimaryButton";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#1D4ED8]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex rounded-full bg-[#FACC15] px-4 py-2 text-sm font-bold text-[#1F2937] shadow-sm sm:px-5 sm:text-base">
            {heroData.badge}
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroData.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
            {heroData.subtitle}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="#contact" className="w-full sm:w-auto">
              {heroData.primaryButton}
            </PrimaryButton>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1E40AF] sm:w-auto"
            >
              <MessageCircle size={20} />
              {heroData.secondaryButton}
            </a>
          </div>

          {/* HERO STATS */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-7 sm:gap-8">
            <div>
              <div className="flex items-center gap-2">
                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={18}
                />
                <span className="text-xl font-bold text-white sm:text-2xl">
                  {heroData.rating}
                </span>
              </div>

              <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                Google Rating
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {heroData.students}
              </h3>

              <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                Happy Students
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {heroData.vehicles}
              </h3>

              <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                Training Vehicles
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Decorative glow */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white/95 p-3 shadow-2xl sm:p-5 lg:max-w-xl">
            <Image
              src="/images/hero/car.png"
              alt="Mangesh Motor Driving School training"
              width={900}
              height={600}
              priority
              className="h-auto max-h-[520px] w-full rounded-2xl object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}