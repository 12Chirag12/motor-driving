import Image from "next/image";
import { gallery } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="Take a look at our training vehicles, driving sessions and learning environment."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item.image}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Want to see our training vehicles in person?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#F97316] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            Visit Our Driving School
          </a>
        </div>
      </div>
    </section>
  );
}