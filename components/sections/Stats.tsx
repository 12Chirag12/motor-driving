import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-white px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-4 py-7 text-center sm:px-6 ${
              index !== stats.length - 1
                ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                : ""
            } ${
              index === 0 || index === 2
                ? "border-r border-slate-200"
                : ""
            }`}
          >
            <p className="text-3xl font-extrabold tracking-tight text-[#1E40AF] sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}