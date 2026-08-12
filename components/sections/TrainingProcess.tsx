import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainingSteps } from "@/lib/data";

export default function TrainingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#1E40AF] py-16 text-white lg:py-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border-[48px] border-white/5" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full border-[52px] border-[#FACC15]/10" />
      <Container className="relative">
        <div className="[&_h2]:text-white [&_p]:text-blue-100">
          <SectionHeading
            eyebrow="Simple Learning Journey"
            title="From first enquiry to confident driving"
            subtitle="A clear, supportive process designed to make learning feel comfortable from day one."
          />
        </div>

        <div className="relative mt-11 grid gap-4 lg:grid-cols-3 lg:gap-6">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-12 hidden border-t border-dashed border-white/25 lg:block" />
          {trainingSteps.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.step} className="relative rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1E40AF] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm font-bold tracking-[0.18em] text-[#FACC15]">STEP {item.step}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-blue-100">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#FACC15] px-6 py-3 text-sm font-bold text-[#1F2937] transition-colors hover:bg-yellow-300">
            Start Your Training <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
