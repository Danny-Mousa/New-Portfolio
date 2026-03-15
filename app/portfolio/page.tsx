"use client";

import dynamic from "next/dynamic";
import PortfolioSectionSkeleton from "../_components/skeletons/PortfolioSectionSkeleton";

const PortfolioSection = dynamic(
  () => import("../_components/PortfolioSection"),
  {
    ssr: false,
    loading: () => <PortfolioSectionSkeleton />,
  },
);

function page() {
  return <PortfolioSection />;
}

export default page;
