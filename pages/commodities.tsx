import React from "react";
import Commodities from "@/components/commodities.tsx/commodities";
import withAuth from "./protect";

function CommoditiesPage() {
  return <Commodities />;
}

export default withAuth(CommoditiesPage);
