import { Eye, Code, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ProjectCard({ index, project }: { index: number; project: any }) {
  const { image, title, description, liveUrl, github_url, category } = project;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
      onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Toggle active card on click/tap
    >
      <div className="aspect-[4/3] overflow-hidden bg-background">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/20 transition-all duration-300 flex flex-col justify-end p-4 md:p-6 ${
          activeIndex === index
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <h3
          className={`text-md md:text-md font-bold text-foreground transform transition-transform duration-300 ${
            activeIndex === index
              ? "translate-y-0"
              : "translate-y-4 group-hover:translate-y-0"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm md:text-sm text-accent mb-2 transform transition-transform duration-300 ${
            activeIndex === index
              ? "translate-y-0"
              : "translate-y-4 group-hover:translate-y-0"
          }`}
        >
          {description}
        </p>

        <div
          className={`flex gap-2 md:gap-3 transform transition-transform duration-300 delay-75 ${
            activeIndex === index
              ? "translate-y-0"
              : "translate-y-4 group-hover:translate-y-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking inside this div
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              liveUrl ? "" : "opacity-50 cursor-not-allowed"
            } flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-1 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity`}
            onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking the link
          >
            {liveUrl ? (
              <>
                <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Preview
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {github_url ? "Not Live" : "Building"}
              </>
            )}
          </a>

          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${!github_url ? "opacity-50 cursor-not-allowed" : ""} flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-1 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity`}
            onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking the link
          >
            <Code className="w-3.5 h-3.5 md:w-4 md:h-4" />
            {github_url ? "Repo" : "Private"}
          </a>
        </div>
      </div>

      <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-accent uppercase">
        {category}
      </div>
    </div>
  );
}

export default ProjectCard;
