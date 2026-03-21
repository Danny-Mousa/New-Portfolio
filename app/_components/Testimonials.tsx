import { aboutData } from "@/lib/portfolio-data";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  return (
    <>
      <SectionTitle title="Testimonials" />
      <div className="relative overflow-hidden">
        <div className="flex gap-3 md:gap-4 animate-marquee">
          {[...aboutData.testimonials, ...aboutData.testimonials].map(
            (testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 md:w-80 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl object-cover"
                  />
                  <h4 className="text-base md:text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
