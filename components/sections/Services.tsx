import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Complete driving, licence, insurance and vehicle-related services under one roof."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  flex
                  min-h-[260px]
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-100
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-[#1E40AF]
                    transition-all
                    duration-300
                    group-hover:bg-[#1E40AF]
                    group-hover:text-white
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#1F2937]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
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