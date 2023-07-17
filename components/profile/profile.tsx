import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "../dashboard/sidebar";
import Mainpage from "./mainpage";

export default function Profile() {
  return (
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
      <div className="flex">
        <Sidebar />
        <Mainpage />
      </div>
    </section>
  );
}
