import dynamic from "next/dynamic";
import Description from "./Description";
import SectionTitle from "./SectionTitle";
import Services from "./Services";
import CardsSkeleton from "./skeletons/CardsSkeleton";

const Clients = dynamic(() => import("./Clients"), {
  ssr: false,
  loading: () => <CardsSkeleton />,
});

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
  loading: () => <CardsSkeleton />,
});

export default function AboutSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      <SectionTitle title="About Me" />
      <Description />
      <Services />
      <Testimonials />
      <Clients />
    </div>
  );
}
