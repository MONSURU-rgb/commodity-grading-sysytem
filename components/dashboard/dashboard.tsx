import React, { useContext } from "react";
import Sidebar from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import MainDashboard from "./maindashboard";
import { SidebarContext } from "./sideBarContext";

Image;

function Dashboard() {
  const { sideBarItemActive, setSideBarActive } = useContext(SidebarContext);

  return (
    <SidebarContext.Provider value={{ sideBarItemActive, setSideBarActive }}>
      <section>
        <div className="px-40 flex justify-between bg-[#195B3E] py-20 sticky top-0 z-10">
          <Link href="./">
            <header className="flex gap-1">
              <div className="relative w-125 h-31">
                <Image src="/vector.svg" alt="logo" fill></Image>
              </div>
              <div>
                <h2 className="uppercase font-bold text-[#195B3E] leading-[1.1]">
                  Commodity
                </h2>
                <h4 className="text-12 text-[#195B3E] leading-[1.1]">
                  Grading System
                </h4>
              </div>
            </header>
          </Link>

          <div className="relative w-31 h-31">
            <Image src="/notifications.png" alt="logo" fill></Image>
          </div>
        </div>
        <div>
          <Sidebar />
          <MainDashboard />
        </div>
      </section>
    </SidebarContext.Provider>
  );
}

export default Dashboard;
