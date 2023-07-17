import React from "react";
import Activity from "@/components/activity/activity";
import withAuth from "./protect";

function ActivityPage() {
  return <Activity />;
}

export default withAuth(ActivityPage);
