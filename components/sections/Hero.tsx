import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, ShieldCheck, UserCheck } from "lucide-react";

import Container from "@/components/shared/Container";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { contactData, heroData } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#eff6ff_100%)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#1E40AF]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] left-[-8rem] h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-14 pb-20 sm:py-16 sm:pb-24 lg:min-h-[660px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-20 lg:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-bold text-[#1E40AF] shadow-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            {heroData.badge}
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
            Learn driving with <span className="text-[#1E40AF]">confidence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {heroData.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton href="#contact" className="w-full sm:w-auto">
              {heroData.primaryButton} <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <a
              href={`https://wa.me/${contactData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#1E40AF] transition-colors hover:border-blue-300 hover:bg-blue-50 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" /> {heroData.secondaryButton}
            </a>
          </div>
          <div className="mt-8 flex max-w-xl flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-600 sm:text-sm">
            <span className="inline-flex items-center gap-2"><UserCheck className="h-4 w-4 text-[#1E40AF]" /> Patient instructors</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#1E40AF]" /> Flexible timings</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#1E40AF]" /> Safety-first lessons</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-[#FACC15] sm:-right-6 sm:-top-6" aria-hidden="true" />
          <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl border-2 border-[#1E40AF]/15" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-[6px] border-white bg-slate-200 shadow-[0_24px_60px_-20px_rgba(30,64,175,0.35)] sm:border-8">
            <Image
              src="/images/training/learner-with-instructor.jpg"
              alt="Learner driver practising with a professional instructor"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 90vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:left-6 sm:right-auto sm:min-w-64">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF]">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-[#1F2937]">Safe, patient training</p>
              <p className="mt-0.5 text-xs text-slate-500">Dual-control vehicles</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
