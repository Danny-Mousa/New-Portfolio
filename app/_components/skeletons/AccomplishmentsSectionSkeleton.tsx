function AccomplishmentsSectionSkeleton() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <div>
        <div className="h-8 md:h-9 w-28 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-7" />
      </div>

      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground/8 rounded-full animate-pulse" />
          <div className="h-7 md:h-8 w-48 bg-foreground/8 rounded animate-pulse" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="relative pb-6 last:pb-0">
              <div className="h-5 md:h-6 w-48 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="h-4 w-28 bg-foreground/8 rounded animate-pulse mb-2" />
              <div className="space-y-1">
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-full" />
                <div className="h-4 bg-foreground/8 rounded animate-pulse w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccomplishmentsSectionSkeleton;
