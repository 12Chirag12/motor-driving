import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { whyChoose } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        <SectionHeading
          title="Why Choose Mangesh Motor?"
          subtitle="Everything you need to learn driving safely, confidently and comfortably."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF] transition-all duration-300 group-hover:bg-[#1E40AF] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1F2937]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#1E40AF] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <CheckCircle2 size={15} />
                  Trusted by learners
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-sm font-semibold text-[#1E40AF]">
              Learn with confidence
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#1F2937] sm:text-2xl">
              Safe training. Experienced instructors. Better preparation.
            </h3>
          </div>

          <a
            href="#courses"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#1E40AF] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
          >
            View Courses
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}