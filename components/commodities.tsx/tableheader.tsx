import { Table } from "@mantine/core";
import React, { useState } from "react";
import { SearchIcon } from "./search-icon";
import { RoundFilter } from "../activity/filtericon";
import Image from "next/image";

function TableHeader({ text }: { text: string }) {
  const [showFilter, setShowFilter] = useState("none");
  const [bgColorOnClick, setBgColorOnClick] = useState("");
  const [changedBgColor, setChangedBgColor] = useState("#195B3E");
  const [bgColorOnClick1, setBgColorOnClick1] = useState("");
  const [bgColorOnClick2, setBgColorOnClick2] = useState("");

  return (
    <div className="pb-24 px-16 bg-white rounded-xl text-16 !text-[#5E606A] sticky top-0">
      <div className="w-full py-23 flex justify-between bg-white rounded-t-lg">
        <h3 className="#4A4C58 text-16">{text}</h3>

        <div className="flex">
          <div
            className="py-24 px-20 border border-[#F0F0F1] bg-white w-[clamp(180px,23vw,350px)] flex-col gap-12 rounded-xl absolute z-10 left-[22%]"
            style={{
              boxShadow: "-4px 6px 20px 0px rgba(0, 0, 0, 0.10)",
              display: showFilter,
            }}>
            <div className="grid gap-2">
              <h3 className="text-[#C1C2C6] text-12">By Commodity</h3>
              <div className="flex gap-x-2 gap-y-16 flex-wrap">
                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Paddy Rice
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Cocoa Beans
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Wheat
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Groundnut
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Dried Split Ginger
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Maize
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Soy Beans
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Millet
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Chilli Pepper
                </button>

                <button
                  className="px-2 py-1 rounded-lg text-[#195B3E] bg-[#FDFDFD] text-12"
                  style={{ border: "0.5px solid #195B3E" }}>
                  Sorghum
                </button>
              </div>
            </div>

            <h3 className="text-[#C1C2C6] text-12">By Grade</h3>
            <button
              className="flex gap-12 p-2 rounded text-white flex-1 items-center"
              style={{
                backgroundColor: changedBgColor,
                color: changedBgColor ? "white" : "#4A4C58",
                cursor: "pointer",
              }}
              onClick={() => {
                setChangedBgColor("#195B3E");
                setBgColorOnClick("");
                setBgColorOnClick1("");
                setBgColorOnClick2("");
              }}>
              <div className="relative w-12 h-[8px]">
                <Image src="/pass.svg" fill alt="pass mark icon"></Image>
              </div>
              <h3 className="text-12 font-medium">All Grades</h3>
            </button>

            <div className="flex flex-col gap-12">
              <div
                className="p-2 flex gap-12 items-center rounded"
                style={{
                  backgroundColor: bgColorOnClick,
                  color: bgColorOnClick ? "white" : "#4A4C58",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBgColorOnClick("#195B3E");
                  setChangedBgColor("");
                }}>
                <div className="relative w-24 h-20">
                  <Image src="/grade1.svg" fill alt="pass mark icon"></Image>
                </div>

                <h4 className="text-12">Grade 1</h4>
              </div>

              <div
                className="p-2 flex gap-12 items-center"
                style={{
                  backgroundColor: bgColorOnClick1,
                  color: bgColorOnClick1 ? "white" : "#4A4C58",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBgColorOnClick1("#195B3E");
                  setChangedBgColor("");
                  setBgColorOnClick("");
                }}>
                <div className="relative w-24 h-20">
                  <Image src="/grade2.svg" fill alt="pass mark icon"></Image>
                </div>

                <h4 className="text-12">Grade 2</h4>
              </div>

              <div
                className="p-2 flex gap-12 items-center"
                style={{
                  backgroundColor: bgColorOnClick2,
                  color: bgColorOnClick2 ? "white" : "#4A4C58",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBgColorOnClick2("#195B3E");
                  setChangedBgColor("");
                  setBgColorOnClick("");
                  setBgColorOnClick1("");
                }}>
                <div className="relative w-24 h-20">
                  <Image src="/grade3.svg" fill alt="pass mark icon"></Image>
                </div>

                <h4 className="text-12">Grade 3</h4>
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              className="flex gap-2 px-3 py-1 btnfilter items-center"
              onClick={() => {
                setShowFilter("flex");
                if (showFilter === "flex") {
                  setShowFilter("none");
                }
              }}>
              <RoundFilter />
              <p className="text-[#5E606A] text-14">Filter</p>
            </button>
            <div
              className="flex justify-between px-3 py-1 items-center h-full"
              style={{
                borderRadius: "0px 8px 8px 0px",
                background: "white",
                border: "1.5px solid #A1A9B8",
              }}>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-0"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #C1C2C6",
          width: "full",
          height: "1px",
        }}></div>
    </div>
  );
}

export default TableHeader;
