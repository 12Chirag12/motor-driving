import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section
      id="rto-services"
      className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          title="Our Services"
          subtitle="Complete driving, licence, insurance and vehicle-related services under one roof."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  flex
                  min-h-[240px]
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-100
                  hover:shadow-lg
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-[#1E40AF]
                    transition-all
                    duration-300
                    group-hover:bg-[#1E40AF]
                    group-hover:text-white
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-[#1F2937] sm:text-xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}