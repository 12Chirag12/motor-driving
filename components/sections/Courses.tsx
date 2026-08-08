import { Check, Clock3 } from "lucide-react";
import { courses } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Courses() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Driving Courses"
          subtitle="Choose the training program that best fits your experience and learning goals."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`
                relative
                flex
                h-full
                flex-col
                rounded-2xl
                border
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                ${
                  index === 1
                    ? "border-[#1E40AF] ring-2 ring-blue-100"
                    : "border-gray-100"
                }
              `}
            >
              {/* Recommended Badge */}
              {index === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FACC15] px-4 py-1 text-xs font-bold text-[#1F2937] shadow-sm">
                  MOST POPULAR
                </span>
              )}

              {/* Course Name */}
              <h3 className="text-2xl font-bold text-[#1F2937]">
                {course.title}
              </h3>

              {/* Duration */}
              <div className="mt-4 flex items-center gap-2 text-gray-600">
                <Clock3 className="h-5 w-5 text-[#1E40AF]" />
                <span className="font-medium">{course.duration}</span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-bold text-[#1E40AF]">
                  {course.price}
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-100" />

              {/* Features */}
              <ul className="flex flex-1 flex-col gap-4">
                {course.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50">
                      <Check className="h-3.5 w-3.5 text-green-600" />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <PrimaryButton className="w-full justify-center">
                  Enquire Now
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-blue-50 p-5 text-center">
          <p className="text-sm leading-6 text-[#1E40AF]">
            Course fees and duration may vary depending on the learner's
            requirements. Contact us for the latest package details.
          </p>
        </div>
      </div>
    </section>
  );
}