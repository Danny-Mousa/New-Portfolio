import { aboutData } from "@/lib/portfolio-data";
import { Code, PenTool, Smartphone, Zap, BrainCircuit } from "lucide-react";
import SectionTitle from "./SectionTitle";

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
  BrainCircuit,
};

function Services() {
  return (
    <>
      <SectionTitle title="What I'm Doing" />
      <div className="relative overflow-hidden">
        <div className="flex gap-3 md:gap-4 animate-marquee">
          {[...aboutData.services, ...aboutData.services].map(
            (service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="flex flex-shrink-0 w-72 md:w-90 gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
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
            },
          )}
        </div>
      </div>
    </>
  );
}

export default Services;
