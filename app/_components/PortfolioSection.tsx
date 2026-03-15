"use client";

import { portfolioData } from "@/lib/portfolio-data";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

interface PortfolioSectionProps {
  data?: typeof portfolioData;
}

export default function PortfolioSection({
  data = portfolioData,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-6 md:space-y-8">
      <SectionTitle title="My Portfolio" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`cursor-pointer px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}
