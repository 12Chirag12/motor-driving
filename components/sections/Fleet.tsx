import Image from "next/image";
import { CheckCircle2, Gauge } from "lucide-react";

import { fleet } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Fleet() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <SectionHeading
          title="Our Training Fleet"
          subtitle="Learn with well-maintained training vehicles designed for safe and confident driving practice."
        />

        {/* Fleet Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle) => (
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

        {/* Fleet Summary */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E40AF] to-[#2563EB] px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              Ready for practical training?
            </p>

            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              6+ Cars & 1 Auto Rickshaw
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
              Practice with different vehicles and build the confidence
              needed to handle real-world driving situations safely.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#FACC15] px-6 py-3 text-sm font-bold text-[#1F2937] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
            >
              Book a Driving Lesson
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}