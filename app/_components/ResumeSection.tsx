import { resumeData } from "@/lib/portfolio-data";
import ItemDetails from "./ItemDetails";
import SectionTitle from "./SectionTitle";

export default function ResumeSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Skills */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <SectionTitle title="My Skills" />
        </div>
        <div className="space-y-5 md:space-y-6 relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
          {resumeData.skills.map((category, index) => (
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
                      className="text-secondary text-xs md:text-sm text-muted-foreground mr-1 mb-1 py-1 px-3 rounded-4xl bg-accent"
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
          <SectionTitle title="Education" />
        </div>
        <div className="space-y-4">
          {resumeData.education.map((item, index) => (
            <ItemDetails key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <SectionTitle title="Experience" />
        </div>
        <div className="space-y-4">
          {resumeData.experience.map((item, index) => (
            <ItemDetails key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
