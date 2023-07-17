import PaddyRice from "@/components/commodities.tsx/paddy-rice";
import React from "react";
import withAuth from "./protect";

function PaddyRiceCommodities() {
  return <PaddyRice />;
}

export default withAuth(PaddyRiceCommodities);
