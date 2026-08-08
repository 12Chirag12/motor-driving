interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      <span className="inline-flex rounded-full bg-[#FACC15] px-4 py-2 text-sm font-semibold text-[#1E40AF]">
        {subtitle}
      </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#1F2937] md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}