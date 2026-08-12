import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/shared/Container";

export default function Services() {
  return (
    <section
      className="bg-slate-50 py-16 lg:py-20"
    >
      <Container>
        <SectionHeading
          title="Our Services"
          eyebrow="Everything You Need"
          subtitle="Complete driving, licence, insurance and vehicle-related services under one roof."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="absolute right-5 top-4 font-mono text-4xl font-bold text-slate-100 transition-colors group-hover:text-blue-50" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1E40AF] transition-all duration-300 group-hover:bg-[#1E40AF] group-hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#1F2937] sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-auto pt-5">
                  <span className="block h-0.5 w-8 rounded-full bg-[#FACC15] transition-all duration-300 group-hover:w-14" />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
