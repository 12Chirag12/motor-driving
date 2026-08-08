"use client";

import { stats } from "@/lib/data";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-8 text-center shadow-sm"
          >
            <h2 className="text-5xl font-bold text-[#1E40AF]">
              {item.value}
            </h2>

            <p className="mt-3 text-gray-600">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}