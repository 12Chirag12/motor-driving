import Image from "next/image";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutHighlights } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_20px_55px_-28px_rgba(15,23,42,0.45)]">
              <Image
                src="/images/training/successful-learners.jpg"
                alt="Confident learners with their driving instructors"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E40AF]/45 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-[auto_1fr] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:left-6 sm:right-auto sm:min-w-72">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-[#D69E00]"><Star className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" /></span>
              <div><p className="text-sm font-bold text-[#1F2937]">Trusted since 2005</p><p className="mt-0.5 text-xs text-slate-500">Local training in Palghar</p></div>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <SectionHeading
              eyebrow="About Us"
              title="Local training built around safer drivers"
              subtitle="Mangesh Motor Driving School helps learners build the skills, judgement and confidence needed for everyday roads."
              align="left"
            />
            <div className="mt-7 grid gap-4">
              {aboutHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/40 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF] transition-colors group-hover:bg-[#1E40AF] group-hover:text-white"><Icon className="h-5 w-5" /></span>
                    <div><h3 className="text-base font-bold text-[#1F2937]">{item.title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{item.description}</p></div>
                  </article>
                );
              })}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E40AF]" /><p className="text-sm leading-6 text-slate-700">Training and vehicle-document support from one reliable local team.</p></div>
              <a href="#courses" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#1E40AF] hover:underline">View Courses <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
