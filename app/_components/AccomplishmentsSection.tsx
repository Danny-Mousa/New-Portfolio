import { accomplishmentsData } from "@/lib/portfolio-data";
import ItemDetails from "./ItemDetails";
import SectionTitle from "./SectionTitle";

function AccomplishmentsSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <SectionTitle title="Honors & Awards" />
      <div className="space-y-4">
        {accomplishmentsData.awards.map((item, index) => (
          <ItemDetails key={index} item={item} />
        ))}
      </div>
      <SectionTitle title="Licenses & Certifications" />
      <div className="space-y-4">
        {accomplishmentsData.certifications.map((item, index) => (
          <ItemDetails key={index} item={item} />
        ))}
      </div>
      <SectionTitle title="Volunteering" />
      <div className="space-y-4">
        {accomplishmentsData.volunteering.map((item, index) => (
          <ItemDetails key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AccomplishmentsSection;
