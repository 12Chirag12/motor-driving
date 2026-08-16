import Image from "next/image";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck } from "lucide-react";

import { fleet } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Fleet() {
  const cars = fleet.slice(0, 6);
  const autoRickshaw = fleet[6];

  return (
    <AnimatedSection className="bg-white py-16 lg:py-20">
      <Container>

        {/* Section Heading */}
        <SectionHeading
          title="Our Training Fleet"
          eyebrow="Learn in Comfort"
          subtitle="Learn with well-maintained training vehicles designed for safe and confident driving practice."
        />

        {/* Fleet Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} training vehicle`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1E40AF] shadow-md backdrop-blur-sm">
                  <CheckCircle2 size={14} />
                  {vehicle.badge}
                </div>

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Vehicle Information */}
              <div className="p-5 sm:p-6">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">
                      Training Vehicle
                    </p>

                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#1F2937]">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Gauge size={17} className="text-[#1E40AF]" />
                    <span>Transmission</span>
                  </div>

                  <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-[#1E40AF]">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {autoRickshaw && (
          <div className="mt-8 grid overflow-hidden rounded-3xl bg-[#1E40AF] shadow-lg lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-64 overflow-hidden lg:min-h-[360px]">
              <Image
                src={autoRickshaw.image}
                alt="Auto rickshaw used for RTO training"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#1E40AF] shadow-sm">
                <CheckCircle2 className="h-4 w-4" /> {autoRickshaw.badge}
              </span>
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden p-7 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[36px] border-white/5" aria-hidden="true" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#FACC15]"><ShieldCheck className="h-6 w-6" /></div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#FACC15]">More Ways to Learn</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Car and auto-rickshaw training</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                  Train across our dual-control car fleet or prepare for auto-rickshaw licensing with practical, road-focused guidance.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-blue-50 sm:text-sm">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">6+ training cars</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">1 auto rickshaw</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5">Manual transmission</span>
                </div>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FACC15] px-5 py-3 text-sm font-bold text-[#1F2937] transition-colors hover:bg-yellow-300">
                  Book Practical Training <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </Container>
    </AnimatedSection>
  );
}
