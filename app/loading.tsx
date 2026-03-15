import AboutSectionSkeleton from "./_components/skeletons/AboutSectionSkeleton";
import { ProfileSidebarSkeleton } from "./_components/skeletons/ProfileSidebarSkeleton";

function loading() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebarSkeleton />
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <AboutSectionSkeleton />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default loading;
