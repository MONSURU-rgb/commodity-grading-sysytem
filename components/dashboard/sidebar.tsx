import { AuthContext, IContextType } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import { useRouter } from "next/router";
import { SidebarContext } from "../dashboard/sideBarContext";

interface ISidebar {
  src: string;
  url: string;
  name: string;
  id?: string;
  path?: string;
}

interface ISidebar1 {
  src: string;
  url?: string;
  action?: () => void;
  name: string;
  id?: string;
  path?: string;
}

const sideBarData: ISidebar[] = [
  {
    src: "/dashboard.svg",
    url: "./dashboard",
    name: "Dashboard",
    id: "1",
    path: "/dashboard",
  },
  {
    src: "/commodities.svg",
    url: "./commodities",
    name: "Commodities",
    id: "2",
    path: "/commodities",
  },
  {
    src: "/activity.svg",
    url: "./activity",
    name: "Activity Log",
    id: "3",
    path: "/activity",
  },
];

const secondSideBarData: ISidebar1[] = [
  {
    src: "/profile.svg",
    url: "./profile",
    name: "Profile",
    id: "1",
    path: "/profile",
  },

  {
    src: "/logout.svg",
    action: () => {
      localStorage.removeItem("my-details");
      // push("/sign-up");
    },
    name: "Logout",
    id: "2",
    path: "/logout",
  },
];

function Sidebar() {
  const { push, asPath } = useRouter();
  const [sideBarItemActive, setSideBarActive] =
    React.useState<string>("Dashboard");

  console.log(asPath);

  const colorRef = useRef<string>("Dashboard");

  const { authUser } = useContext(AuthContext) as IContextType;

  const handleItemClick = (name: string, url: string) => {
    setSideBarActive(name);
    colorRef.current = name;
    push(url);
  };

  return (
    <section className="bg-[url(/sidebar.png)] pb-38 min-h-[calc(100vh-56px)] w-[clamp(180px,14vw,238px)] bg-cover bg-no-repeat pl-26 pr-10 sbar fixed flex flex-col justify-between">
      <div className="pt-31 flex flex-col justify-between">
        <div>
          <div className="grid gap-16 pb-24">
            <h3 className="text-[#C1C2C6] text-16 font-medium leading-[160%] sideh3 mb-16">
              Main
            </h3>
            <div className="flex flex-col gap-4">
              {sideBarData.map((item) => {
                const { url, src, name, path } = item;
                const isActive = name === colorRef.current;
                console.log(colorRef.current);
                console.log(name, isActive);
                return (
                  <Link
                    href={url}
                    key={name}
                    onClick={() => {
                      setSideBarActive(name);
                      colorRef.current = name;
                    }}>
                    <div
                      className={`flex gap-2 p-2 ${
                        path === asPath ? "dashboard-page" : ""
                      }`}>
                      <div className="w-20 h-20 relative hover:bg-blend-color">
                        <Image src={src} alt="dashboard" fill></Image>
                      </div>
                      <p className="text-14 font-normal text-white">{name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-16 pb-24">
            <h3 className="text-[#C1C2C6] text-16 font-medium leading-[160%] sideh3 mb-16">
              User
            </h3>
            <div className="grid gap-4">
              <Link
                href="./profile"
                key="Profile"
                onClick={() => setSideBarActive("Profile")}>
                <div
                  className={`flex gap-2 p-2 ${
                    "/profile" == asPath ? "dashboard-page" : ""
                  }`}>
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/profile.svg" alt="profile" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Profile</p>
                </div>
              </Link>

              <Link
                href="./sign-up"
                key="Profile"
                onClick={() => {
                  setSideBarActive("Logout");
                  localStorage.removeItem("my-details");
                  push("/sign-up");
                }}>
                <div
                  className={`flex gap-2 p-2 ${
                    "/logout" == asPath ? "dashboard-page" : ""
                  }`}>
                  <div className="w-20 h-20 relative hover:bg-blend-color">
                    <Image src="/logout.svg" alt="profile" fill></Image>
                  </div>
                  <p className="text-14 font-normal text-white">Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="./profile">
        <div className="flex gap-2 items-center">
          <div className="relative w-28 h-28">
            <Image src="/ayodeji.png" alt="ayodeji image" fill></Image>
          </div>

          <p className="text-white text-14 font-medium">
            {authUser?.first_name} {authUser?.last_name}
          </p>
        </div>
      </Link>
    </section>
  );
}

export default Sidebar;
