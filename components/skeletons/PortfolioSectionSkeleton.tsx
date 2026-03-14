export default function PortfolioSectionSkeleton() {
  const filterCount = 3;
  const projectCount = 4;

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <div className="h-8 md:h-9 w-32 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {Array.from({ length: filterCount }).map((_, idx) => (
          <div
            key={idx}
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-foreground/8 animate-pulse w-16 md:w-20 h-8 md:h-9"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Array.from({ length: projectCount }).map((_, idx) => (
          <div
            key={idx}
            className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden"
          >
            <div className="aspect-[4/3] bg-foreground/8 animate-pulse" />

            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-foreground/8/50 backdrop-blur-sm border border-border rounded-lg w-16 h-6 md:w-20 md:h-7 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
