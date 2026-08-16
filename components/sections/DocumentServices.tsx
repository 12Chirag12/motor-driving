import { ArrowRight, Check } from "lucide-react";

import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { documentServices } from "@/lib/data";

export default function DocumentServices() {
  return (
    <AnimatedSection className="bg-slate-50 py-16 lg:py-20" aria-label="RTO, insurance and PUC services">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#1E40AF]">Vehicle Services</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#1F2937] sm:text-4xl">Paperwork made easier to understand</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#FACC15]" />
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Clear, practical assistance for the important documents that keep you and your vehicle road-ready.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {documentServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.id} id={service.id} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#1E40AF] to-[#FACC15]" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF] transition-colors group-hover:bg-[#1E40AF] group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#1E40AF]">{service.eyebrow}</p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-[#1F2937]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40AF]" />{item}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:underline">{service.cta}<ArrowRight className="h-4 w-4" /></a>
              </article>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
