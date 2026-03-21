"use client";

import dynamic from "next/dynamic";
import AccomplishmentsSectionSkeleton from "../_components/skeletons/AccomplishmentsSectionSkeleton";

const AccomplishmentsSection = dynamic(
  () => import("../_components/AccomplishmentsSection"),
  {
    ssr: false,
    loading: () => <AccomplishmentsSectionSkeleton />,
  },
);

function page() {
  return <AccomplishmentsSection />;
}

export default page;
