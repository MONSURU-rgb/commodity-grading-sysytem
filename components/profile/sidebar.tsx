import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <section className="bg-[url(/sidebar.png)] pb-38 min-h-[calc(100vh-70.36px)] w-[clamp(180px,14vw,238px)] bg-cover bg-no-repeat pl-26 pr-10 sbar fixed flex flex-col justify-between">
      <div className="pt-31 grid justify-between">
        <div>
          <div className="grid gap-16 pb-24">
            <h3 className="text-[#C1C2C6] text-16 font-medium leading-[160%] sideh3 mb-16">
              Main
            </h3>
            <div className="grid gap-4">
              <Link href="./dashboard">
                <div className="flex gap-2 p-2 dashboard-page">
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/dashboard.svg" alt="dashboard" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Dashboard</p>
                </div>
              </Link>

              <Link href="./commodities">
                <div className="flex gap-2 p-2">
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/commodities.svg" alt="dashboard" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Commodities</p>
                </div>
              </Link>

              <Link href="./activity">
                <div className="flex gap-2 p-2">
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/activity.svg" alt="dashboard" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Activity Log</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid gap-16 pb-24">
            <h3 className="text-[#C1C2C6] text-16 font-medium leading-[160%] sideh3 mb-16">
              User
            </h3>
            <div className="grid gap-4">
              <Link href="./profile">
                <div className="flex gap-2 p-2">
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/profile.svg" alt="dashboard" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Profile</p>
                </div>
              </Link>

              <Link href="./activity">
                <div className="flex gap-2 p-2">
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/logout.svg" alt="dashboard" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="./profile" className="self-end">
        <div className="flex gap-2 items-center">
          <div className="relative w-28 h-28">
            <Image src="/ayodeji.png" alt="ayodeji image" fill></Image>
          </div>

          <p className="text-white text-14 font-medium">Ayodeji Balogun</p>
        </div>
      </Link>
    </section>
  );
}

export default Sidebar;
