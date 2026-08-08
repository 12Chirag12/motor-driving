import Image from "next/image";
import { fleet } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Fleet() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Training Fleet"
          subtitle="Learn with well-maintained training vehicles designed to give you a safe and confident driving experience."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} training vehicle`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-[#FACC15]
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-[#1F2937]
                    shadow-sm
                  "
                >
                  {vehicle.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  {vehicle.name}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-600">
                    Transmission
                  </span>

                  <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-semibold text-[#1E40AF]">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Summary */}
        <div className="mt-12 rounded-2xl bg-[#1E40AF] p-8 text-center text-white">
          <h3 className="text-2xl font-bold md:text-3xl">
            6+ Cars & 1 Auto Rickshaw
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Choose from our range of training vehicles and get practical
            experience in different driving conditions.
          </p>
        </div>
      </div>
    </section>
  );
}