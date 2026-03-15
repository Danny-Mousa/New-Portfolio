"use client";

import AboutSectionSkeleton from "./_components/skeletons/AboutSectionSkeleton";
import BlogSectionSkeleton from "./_components/skeletons/BlogSectionSkeleton";
import ContactSectionSkeleton from "./_components/skeletons/ContactSectionSkeleton";
import PortfolioSectionSkeleton from "./_components/skeletons/PortfolioSectionSkeleton";
import { ProfileSidebarSkeleton } from "./_components/skeletons/ProfileSidebarSkeleton";
import ResumeSectionSkeleton from "./_components/skeletons/ResumeSectionSkeleton";
import { ThemeToggle } from "./_components/ThemeToggle";
import {
  aboutData,
  portfolioData,
  profileData,
  resumeData,
} from "@/lib/portfolio-data";
import dynamic from "next/dynamic";
import { useState } from "react";

const ProfileSidebar = dynamic(() => import("./_components/ProfileSidebar"), {
  ssr: false,
  loading: () => <ProfileSidebarSkeleton />,
});
const AboutSection = dynamic(() => import("./_components/AboutSection"), {
  ssr: false,
  loading: () => <AboutSectionSkeleton />,
});
const ResumeSection = dynamic(() => import("./_components/ResumeSection"), {
  ssr: false,
  loading: () => <ResumeSectionSkeleton />,
});
const PortfolioSection = dynamic(
  () => import("./_components/PortfolioSection"),
  {
    ssr: false,
    loading: () => <PortfolioSectionSkeleton />,
  },
);
const BlogSection = dynamic(() => import("./_components/BlogSection"), {
  ssr: false,
  loading: () => <BlogSectionSkeleton />,
});
const ContactSection = dynamic(() => import("./_components/ContactSection"), {
  ssr: false,
  loading: () => <ContactSectionSkeleton />,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {["about", "resume", "portfolio", "blog", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={` cursor-pointer px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeSection === section
                        ? "text-foreground bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {section}
                  </button>
                ),
              )}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === "about" && <AboutSection data={aboutData} />}
              {activeSection === "resume" && (
                <ResumeSection data={resumeData} />
              )}
              {activeSection === "portfolio" && (
                <PortfolioSection data={portfolioData} />
              )}
              {activeSection === "blog" && (
                <BlogSection
                //  data={blogData}
                />
              )}
              {activeSection === "contact" && <ContactSection />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
