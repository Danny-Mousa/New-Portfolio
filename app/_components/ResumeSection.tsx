import { resumeData } from "@/lib/portfolio-data";
import { BookOpen, Briefcase, FileStack } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface ResumeSectionProps {
  data?: typeof resumeData;
}

export default function ResumeSection({
  data = resumeData,
}: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <SectionTitle title="My Resume" />
      {/* Skills */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <FileStack className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            My Skills
          </h3>
        </div>
        <div className="space-y-5 md:space-y-6 relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
          {data.skills.map((category, index) => (
            <div key={index}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="min-[1115px]:flex mb-2">
                <div className="text-xs flex items-center max-[1115px]:mb-2 md:text-base font-medium text-foreground mr-2">
                  {category.category}
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-secondary text-xs md:text-sm text-muted-foreground mr-1 py-1 px-3 rounded-4xl bg-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -left-[9px] bottom-0 w-4 h-4 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Education
          </h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div
              key={index}
              className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-accent mb-2">
                {item.location}
              </p>
              <p className="text-xs md:text-sm text-accent mb-2">
                {item.period}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Experience
          </h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div
              key={index}
              className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h4>
              <h4 className="text-xs md:text-sm text-foreground mb-2">
                {item.company}
              </h4>
              <p className="text-xs md:text-sm text-accent mb-2">
                {item.location}
              </p>
              <p className="text-xs md:text-sm text-accent mb-2">
                {item.period}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
