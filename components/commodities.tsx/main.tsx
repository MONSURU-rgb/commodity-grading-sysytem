import React from "react";
import { SearchIcon } from "./search-icon";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import CommoditiesModal from "../modal/commodities";

const commoditiesList = [
  {
    title: "Cocoa Beans",
    titlecolor: "text-[#E1891C]",
    bgimage: "bg-[url(/cocoa.png)]",
    icon: "/cocoa-icon.png",
    scanlevel: "210",
  },
  {
    title: "Millet",
    titlecolor: "text-[#7738DD]",
    bgimage: "bg-[url(/millet.png)]",
    icon: "/millet-icon.png",
    scanlevel: "210",
  },
  {
    title: "Wheat",
    titlecolor: "text-[#3851DD]",
    bgimage: "bg-[url(/wheat.png)]",
    icon: "/wheat-icon.png",
    scanlevel: "330",
  },
  {
    title: "Soy Beans",
    titlecolor: "text-[#BD9B4F]",
    bgimage: "bg-[url(/soyabean.png)]",
    icon: "/soyabean-icon.svg",
    scanlevel: "330",
  },
  {
    title: "Chilli Pepper",
    titlecolor: "text-[#E1261C]",
    bgimage: "bg-[url(/pepper.png)]",
    icon: "/pepper-icon.png",
    scanlevel: "330",
  },
  {
    title: "Groundnut",
    titlecolor: "text-[#401E1E]",
    bgimage: "bg-[url(/groundnut.png)]",
    icon: "/groundnut-icon.svg",
    scanlevel: "330",
  },
  {
    title: "Maize",
    titlecolor: "text-[#2E2E2E]",
    bgimage: "bg-[url(/maize.png)]",
    icon: "/maize-icon.svg",
    scanlevel: "210",
  },
  {
    title: "Sorghum",
    titlecolor: "text-[#1C9AE1]",
    bgimage: "bg-[url(/sorghum.png)]",
    icon: "/sorghum-icon.svg",
    scanlevel: "210",
  },
  {
    title: "Dried Split Ginger",
    titlecolor: "text-[#9E7B3F]",
    bgimage: "bg-[url(/ginger.png)] !flex-grow-0 !w-[330px]",
    icon: "/ginger-icon.svg",
    scanlevel: "330",
  },
];

function Main() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="ml-[clamp(180px,14vw,200px)] w-full pl-31 pr-40">
      <div
        className="flex justify-between w-full pt-34 pb-28"
        style={{ borderBottom: "1px solid #DADADD" }}>
        <div>
          <div
            className="px-12 flex items-center rounded-lg gap-2 py-2"
            style={{ border: "1px solid #C1C2C6" }}>
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-0"
            />
            <SearchIcon />
          </div>
        </div>

        <button
          onClick={open}
          className="py-2 px-16 rounded-lg bg-[#195B3E] text-white font-16 font-medium hover:opacity-70 transition hover:duration-1000 hover:ease-in">
          Add Commodity
        </button>
      </div>

      <section className="grid gap-12 pb-23">
        <div
          className="pt-24 flex gap-2 items-center pb-2"
          style={{ borderBottom: "1px solid #DADADD" }}>
          <h4 className="text-[#4A4C58] text-14 font-medium">Commodities</h4>
          <span className="text-[#8F9198] text-12 font-semibold leading-4 px-1 rounded-xl bg-[#F0F0F1]">
            {commoditiesList.length > 0 ? commoditiesList.length + 1 : 0}
          </span>
        </div>
        <p className="text-14 text-[#8F9198]">List of available commodities.</p>
      </section>

      {commoditiesList.length === 0 && (
        <div className="flex flex-col justify-center items-center gap-31 pt-[clamp(88px,7vw,120px)]">
          <div className="relative w-[237px] h-[183px]">
            <Image src="empty-commodity.svg" alt="empty" fill></Image>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#4A4C58] text-20">
              No recently added commodities{" "}
            </h3>
            <p className="text-[#8F9198] text-14">
              You have not added any commodity. To add a new commodity, click on
              the{" "}
              <span className="text-[#4A4C58] text-16">“Add Commodity”</span>{" "}
              button
            </p>
          </div>
          <button
            onClick={open}
            className="py-2 px-16 rounded-lg bg-[#195B3E] text-white w-fit font-16 font-medium hover:opacity-70 transition hover:duration-1000 hover:ease-in">
            Add Commodity
          </button>
        </div>
      )}

      {commoditiesList.length > 0 && (
        <section className="flex gap-x-24 gap-y-20 flex-wrap">
          <div className="w-[clamp(280px,24vw,380px)] pl-24 pt-31 bg-[url(/paddy-rice.png)] bg-cover bg-no-repeat basis-[32%] flex-grow">
            <div className="flex flex-col pb-31">
              <h2 className="text-[#195B3E] text-24">Paddy Rice</h2>
              <div className="flex gap-1">
                <h4 className="text-[#8F9198] text-12">Accuracy level</h4>
                <h4 className="text-[#195B3E] text-12 font-semibold">67%</h4>
              </div>
            </div>

            <div className="flex gap-x-31">
              <Link href="./paddy-rice-commodities" className="">
                <div className="relative w-34 h-34 hover:translate-x-6 duration-1000">
                  <Image
                    src="/paddy-rice-icon.png"
                    alt="paddy rice icon"
                    fill></Image>
                </div>
              </Link>

              <div className="flex gap-1 items-center pt-4">
                <h3 className="text-24 font-medium text-[#4A4C58]">330</h3>
                <h4 className="text-[#8F9198] text-12">Total scans</h4>
              </div>
            </div>
          </div>
          {commoditiesList.map(
            ({ title, titlecolor, icon, bgimage, scanlevel }) => {
              return (
                <div
                  key={title}
                  className={clsx(
                    "w-[clamp(280px,24vw,380px)] pl-24 pt-31 bg-cover bg-no-repeat !basis-[32%] !flex-grow",
                    bgimage
                  )}>
                  <div className="flex flex-col pb-31">
                    <h2 className={(clsx(`text-24`), titlecolor)}>{title}</h2>
                    <div className="flex gap-1">
                      <h4 className="text-[#8F9198] text-12">Accuracy level</h4>
                      <h4
                        className={clsx(
                          "text-[#195B3E] text-12 font-semibold",
                          titlecolor
                        )}>
                        67%
                      </h4>
                    </div>
                  </div>

                  <div className="flex gap-x-31">
                    <div className="relative w-34 h-34">
                      <Image src={icon} alt="paddy rice icon" fill></Image>
                    </div>

                    <div className="flex gap-1 items-center pt-4">
                      <h3 className="text-24 font-medium text-[#4A4C58]">
                        {scanlevel}
                      </h3>
                      <h4 className="text-[#8F9198] text-12">Total scans</h4>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </section>
      )}
      <CommoditiesModal opened={opened} close={close} />
    </div>
  );
}

export default Main;
