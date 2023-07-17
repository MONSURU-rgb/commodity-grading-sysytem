import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import withAuth from "./protect";

function DashboardPage() {
  return <Dashboard />;
}

export default withAuth(DashboardPage);
