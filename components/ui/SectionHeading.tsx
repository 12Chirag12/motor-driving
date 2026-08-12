type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
          <span className="h-2 w-2 rounded-full bg-[#FACC15]" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E40AF]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#1F2937] sm:text-4xl">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-12 rounded-full bg-[#FACC15] ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
