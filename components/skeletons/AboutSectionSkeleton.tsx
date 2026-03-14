export default function AboutSectionSkeleton() {
  // Placeholder counts for marquee sections

  return (
    <div className="space-y-8 md:space-y-15">
      {/* About Me */}
      <div>
        <div className="h-5 w-32 bg-foreground/8 rounded animate-pulse mb-4" />
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4">
          <div className="h-[250px] bg-foreground/8 rounded animate-pulse w-full" />
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <div className="h-5 md:h-5 w-44 bg-foreground/8 rounded animate-pulse mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/8 rounded-lg animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 md:h-6 w-32 bg-foreground/8 rounded animate-pulse" />
              <div className="h-4 w-full bg-foreground/8 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-foreground/8 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground/8 rounded-lg animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 md:h-6 w-32 bg-foreground/8 rounded animate-pulse" />
              <div className="h-4 w-full bg-foreground/8 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-foreground/8 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
