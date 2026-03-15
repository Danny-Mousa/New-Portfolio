"use client";

import dynamic from "next/dynamic";
import { ProfileSidebarSkeleton } from "./skeletons/ProfileSidebarSkeleton";

const ProfileSidebar = dynamic(() => import("./ProfileSidebar"), {
  ssr: false,
  loading: () => <ProfileSidebarSkeleton />,
});

function PortfolioSidebar() {
  return <ProfileSidebar />;
}

export default PortfolioSidebar;
