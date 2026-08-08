import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";

import PrimaryButton from "@/components/shared/PrimaryButton";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1E40AF] via-blue-700 to-[#1E40AF]">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between px-6 py-20 lg:flex-row lg:px-8 lg:py-28">
        <div className="max-w-xl text-center lg:text-left">
          <span className="inline-flex rounded-full bg-[#FACC15] px-5 py-2 font-semibold text-[#1E40AF]">
            {heroData.badge}
          </span>

          <h1 className="mt-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-[1.1]">
            {heroData.title}
          </h1>

          <p className="mt-6 text-base leading-7 text-blue-100 md:text-lg">
            {heroData.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryButton href="tel:+919876543210" className="w-full sm:w-auto">
              {heroData.primaryButton}
            </PrimaryButton>

            <PrimaryButton
              href="https://wa.me/919876543210"
              className="w-full border border-white bg-transparent text-white hover:bg-white hover:text-[#1E40AF] sm:w-auto"
            >
              <MessageCircle size={18} />
              <span>{heroData.secondaryButton}</span>
            </PrimaryButton>
          </div>

          <div className="mt-12 flex flex-wrap items-start justify-center gap-8 lg:justify-start">
            <div>
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <span className="font-bold text-white">{heroData.rating}</span>
              </div>
              <p className="mt-1 text-blue-100">Google Rating</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">{heroData.students}</h3>
              <p className="mt-1 text-blue-100">Happy Students</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">{heroData.vehicles}</h3>
              <p className="mt-1 text-blue-100">Training Vehicles</p>
            </div>
          </div>
        </div>

        <div className="relative mt-14 w-full max-w-2xl lg:mt-0">
          <div className="absolute -left-8 top-5 h-36 w-36 rounded-full bg-[#FACC15] opacity-30 blur-3xl"></div>
          <div className="absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
          <Image
            src="/images/hero/car.jpeg"
            alt="Training Car"
            width={700}
            height={450}
            priority
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}