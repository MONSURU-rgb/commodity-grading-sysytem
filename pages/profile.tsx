import React from "react";
import Profile from "@/components/profile/profile";
import withAuth from "./protect";

function ProfilePage() {
  return (
    <div className="!bg-[#F5F5F6] min-h-screen">
      <Profile />
    </div>
  );
}

export default withAuth(ProfilePage);
