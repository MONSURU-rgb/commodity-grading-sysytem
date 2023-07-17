import Image from "next/image";
import { Inter } from "next/font/google";
import { Homepage } from "@/components";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import Dashboard from "@/components/dashboard/dashboard";

function Index() {
  // const [state, setState] = useState(true);
  // if (state) {
  //   return <Dashboard />;
  // }

  return <Homepage />;
}

export default Index;
