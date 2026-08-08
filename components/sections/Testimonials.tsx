import { Star, Quote } from "lucide-react";

import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        <SectionHeading
          title="What Our Students Say"
          subtitle="Real experiences from learners who trained with Mangesh Motor Driving School."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              {/* Quote Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF]">
                <Quote size={21} />
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    className="fill-[#FACC15] text-[#FACC15]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                “{testimonial.review}”
              </p>

              {/* Student */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E40AF] text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F2937]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Summary */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-6 text-center sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="text-sm font-semibold text-[#1E40AF]">
              Trusted by learners
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#1F2937]">
              Start your driving journey with confidence.
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <Star
              size={20}
              className="fill-[#FACC15] text-[#FACC15]"
            />

            <span className="text-lg font-bold text-[#1F2937]">
              4.9
            </span>

            <span className="text-sm text-slate-500">
              Google Rating
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}