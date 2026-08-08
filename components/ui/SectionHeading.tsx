type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[#FACC15]" />

      <h2 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}