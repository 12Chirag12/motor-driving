import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { gallery } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Our Gallery"
          subtitle="A glimpse of our driving training sessions, vehicles and learning environment."
        />

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.image}
              className="group relative overflow-hidden rounded-2xl bg-slate-100"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-2 h-0.5 w-8 bg-[#FACC15] transition-all duration-300 group-hover:w-14" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="text-sm font-semibold text-[#1E40AF]">
              Want to know more?
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#1F2937] sm:text-xl">
              Visit Mangesh Motor Driving School
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1E40AF] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}