"use client";

import { whyChoose } from "@/lib/data";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Why Students Trust Mangesh Motor Driving"
          description="Professional driving lessons, modern vehicles and complete RTO services."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#1E40AF] text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-[#1F2937]">
                  {item.title}
                </h3>

                <p className="text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}