"use client";

import dynamic from "next/dynamic";
import BlogSectionSkeleton from "../_components/skeletons/BlogSectionSkeleton";

const BlogSection = dynamic(() => import("../_components/BlogSection"), {
  ssr: false,
  loading: () => <BlogSectionSkeleton />,
});

function page() {
  return <BlogSection />;
}

export default page;
