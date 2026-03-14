export function ProfileSidebarSkeleton() {
  return (
    <aside className="w-full lg:w-80 bg-card rounded-2xl border border-border p-4 md:p-6 lg:sticky lg:top-8 h-fit">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent animate-pulse-slow" />
          <div className="absolute inset-[2px] rounded-3xl bg-secondary overflow-hidden">
            {/* Image placeholder - just a colored div */}
            <div className="w-full h-full bg-muted animate-pulse" />
          </div>
        </div>

        {/* Name placeholder */}
        <div className="h-7 md:h-8 w-40 bg-muted rounded animate-pulse mb-2" />
        {/* Title placeholder */}
        <div className="h-5 md:h-6 w-24 bg-muted rounded animate-pulse" />
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4 md:my-6" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-muted animate-pulse flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-3 w-12 bg-muted rounded animate-pulse mb-1" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-muted animate-pulse flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 w-12 bg-muted rounded animate-pulse mb-1" />
            <div className="h-4 w-28 bg-muted rounded animate-pulse" />
          </div>
        </div>

        {/* Birthday */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-muted animate-pulse flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 w-12 bg-muted rounded animate-pulse mb-1" />
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-muted animate-pulse flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 w-12 bg-muted rounded animate-pulse mb-1" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
        <div className="w-10 h-10 rounded-lg bg-muted animate-pulse" />
        <div className="w-10 h-10 rounded-lg bg-muted animate-pulse" />
      </div>
    </aside>
  );
}
