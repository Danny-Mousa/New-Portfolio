"use client";

import dynamic from "next/dynamic";
import ResumeSectionSkeleton from "../_components/skeletons/ResumeSectionSkeleton";

const ResumeSection = dynamic(() => import("../_components/ResumeSection"), {
  ssr: false,
  loading: () => <ResumeSectionSkeleton />,
});

function page() {
  return <ResumeSection />;
}

export default page;
