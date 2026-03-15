"use client";

import dynamic from "next/dynamic";
import AboutSectionSkeleton from "../_components/skeletons/AboutSectionSkeleton";

const AboutSection = dynamic(() => import("../_components/AboutSection"), {
  ssr: false,
  loading: () => <AboutSectionSkeleton />,
});

function page() {
  return <AboutSection />;
}

export default page;
