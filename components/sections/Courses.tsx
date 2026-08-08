import { Check, Clock3 } from "lucide-react";

import { courses } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Courses() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        <SectionHeading
          title="Driving Courses"
          subtitle="Choose the training program that best matches your driving experience and goals."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <article
              key={course.title}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                index === 1
                  ? "border-[#1E40AF] ring-1 ring-[#1E40AF]/10"
                  : "border-slate-200"
              }`}
            >
              {/* Popular badge */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1E40AF] px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Course Header */}
              <div>
                <p className="text-sm font-semibold text-[#1E40AF]">
                  Driving Program
                </p>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1F2937] sm:text-2xl">
                  {course.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 size={17} className="text-[#1E40AF]" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 border-y border-slate-100 py-5">
                <span className="text-3xl font-extrabold tracking-tight text-[#1F2937]">
                  {course.price}
                </span>

                <span className="ml-2 text-sm text-slate-500">
                  course fee
                </span>
              </div>

              {/* Features */}
              <div className="mt-6 flex-1">
                <p className="text-sm font-semibold text-[#1F2937]">
                  Course includes:
                </p>

                <ul className="mt-4 space-y-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1E40AF]">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-8 flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  index === 1
                    ? "bg-[#1E40AF] text-white hover:bg-blue-800"
                    : "border border-slate-200 bg-white text-[#1E40AF] hover:border-[#1E40AF] hover:bg-blue-50"
                }`}
              >
                Enquire About Course
              </a>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Need help choosing a course?{" "}
            <a
              href="#contact"
              className="font-semibold text-[#1E40AF] hover:underline"
            >
              Contact us
            </a>{" "}
            and we'll help you choose the right program.
          </p>
        </div>

      </div>
    </section>
  );
}