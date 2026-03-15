"use client";

import dynamic from "next/dynamic";
import ContactSectionSkeleton from "../_components/skeletons/ContactSectionSkeleton";

const ContactSection = dynamic(() => import("../_components/ContactSection"), {
  ssr: false,
  loading: () => <ContactSectionSkeleton />,
});

function page() {
  return <ContactSection />;
}

export default page;
