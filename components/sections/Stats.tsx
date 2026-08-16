import { stats } from "@/lib/data";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Stats() {
  return (
    <AnimatedSection reveal="lift" revealDelay={0.12} className="relative z-10 -mt-8 bg-transparent pb-10 sm:-mt-10 sm:pb-12" aria-label="Driving school statistics">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white px-3 py-5 text-center sm:px-6 sm:py-6"
            >
              <p className="text-2xl font-extrabold tracking-tight text-[#1E40AF] sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1.5 text-xs font-semibold text-slate-600 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
