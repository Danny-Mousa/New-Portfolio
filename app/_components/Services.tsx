import { aboutData } from "@/lib/portfolio-data";
import { Code, PenTool, Smartphone, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
};

function Services() {
  return (
    <>
      <SectionTitle title="What I'm Doing" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {aboutData.services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div
              key={index}
              className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <IconComponent
                  className="w-full h-full text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Services;
