import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="What Our Students Say"
          subtitle="Real experiences from learners who trained with Mangesh Motor Driving School."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                group
                flex
                h-full
                flex-col
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Quote Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF]">
                <Quote className="h-5 w-5" />
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-[#FACC15] text-[#FACC15]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-base leading-7 text-gray-600">
                “{testimonial.review}”
              </p>

              {/* Student */}
              <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E40AF] font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-[#1F2937]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 rounded-2xl bg-[#1E40AF] px-6 py-8 text-center md:px-10">
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-[#FACC15] text-[#FACC15]"
                />
              ))}
            </div>

            <p className="text-lg font-semibold text-white">
              Trusted by 1000+ happy students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}