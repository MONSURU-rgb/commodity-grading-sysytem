import Image from "next/image";
import React, { useState } from "react";
import ScanLevel from "./scan-level";
import PaddyReport from "./paddy-monthly-report";
import Link from "next/link";
import { Button, Popover, Table, Text } from "@mantine/core";
import { SearchIcon } from "./search-icon";
import { RoundFilter } from "../activity/filtericon";
import PaddyMainTable from "./paddy-main-table";
import PaddyModal from "../modal/paddy-modal";
import { useDisclosure } from "@mantine/hooks";
import CreateGrade from "../modal/create-grade";
import PaddyGraph from "./paddy-graph";

function MainPaddyRice() {
  const [createPaddy, { open: openPaddy, close: closePaddy }] =
    useDisclosure(false);

  const [createGrade, { open: openGrade, close: closeGrade }] =
    useDisclosure(false);

  const [showFilter, setShowFilter] = useState("none");
  const [bgColorOnClick, setBgColorOnClick] = useState("");
  const [changedBgColor, setChangedBgColor] = useState("#195B3E");
  const [bgColorOnClick1, setBgColorOnClick1] = useState("");
  const [bgColorOnClick2, setBgColorOnClick2] = useState("");

  const [placeholderValue, setPlaceholderValue] = useState("12 Months");
  const [list, setList] = useState("all");

  return (
    <div className="pt-31 pl-31 pr-38 ml-[clamp(180px,14vw,200px)] w-full bg-[#F0F5F3] flex flex-col gap-20 overflow-x-hidden">
      <div className="flex flex-col gap-16">
        <section className="flex">
          <h2 className="text-16 text-[#8F9198] font-normal">Commodities /</h2>
          <h2 className="text-[#195B3E] text-16 font-bold">Paddy Rice ...</h2>
        </section>

        <div className="divide-y divide-[#DADADD] bg-white rounded-xl">
          <div
            className="rounded-t-xl pt-31 pl-31 bg-white pr-31"
            style={{
              border: "1px solid #FFF",
              borderBottom: "1px solid #DADADD",
            }}>
            <section className="flex justify-between">
              <h2 className="text-[#195B3E] text-24 font-medium pb-18">
                Paddy Rice
              </h2>

              <button
                className="py-2 px-16 rounded-lg bg-[#195B3E] text-center text-white text-14 font-medium mb-16"
                onClick={openGrade}>
                Create New Grade
              </button>
            </section>
          </div>
          <div className="pt-34 pl-31 flex gap-34 pb-40">
            <div
              className="rounded-b-xl bg-white pr-31 pb-26 max-w-[547px] pl-16 pt-23"
              style={{
                borderRadius: "7.528px",
                border: "0.753px solid var(--gray-200, #E4E4E7)",
                background: "#FFF",
              }}>
              <div
                className="pb-1 max-w-[514px] mb-[clamp(35px,3vw,49px)]"
                style={{ borderBottom: "1px solid #F4F4F5" }}>
                <div className="flex justify-between w-[514px]">
                  <h3 className="text-[#18181B] text-12 font-bold">
                    Commodity Analytics
                  </h3>

                  <ScanLevel />
                </div>

                <div>
                  <Popover
                    width="target"
                    position="bottom"
                    shadow="sm"
                    classNames={{
                      dropdown: "!bg-[#262830] !px-[8px] !py-[12px]",
                    }}>
                    <Popover.Target>
                      <Button
                        w={85}
                        classNames={{
                          root: "!bg-[#262830] !px-0 !text-[8px]",
                          label: "flex gap-3",
                        }}>
                        <h2>{placeholderValue}</h2>
                        <div className="relative w-12 h-12">
                          <Image
                            src="/popover-dropdown.svg"
                            fill
                            alt=""></Image>
                        </div>
                      </Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <button
                        className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                        onClick={() => setPlaceholderValue("12 Months")}>
                        12 Months
                      </button>

                      <button
                        className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                        onClick={() => setPlaceholderValue("6 Months")}>
                        6 Months
                      </button>

                      <button
                        className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                        onClick={() => setPlaceholderValue("30 Days")}>
                        30 Days
                      </button>

                      <button
                        className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                        onClick={() => setPlaceholderValue("7 Days")}>
                        7 Days
                      </button>

                      <button
                        className="p-[6px] bg-[#3B3D47] rounded text-[8px] text-white w-full text-start"
                        onClick={() => setPlaceholderValue("Custom Date")}>
                        Custom Date
                      </button>
                    </Popover.Dropdown>
                  </Popover>
                </div>
              </div>
              <div className="relative w-[514px] h-[217px]">
                <PaddyGraph />
              </div>
            </div>
            <PaddyReport />
          </div>
        </div>
      </div>

      <div className="flex gap-20 relative">
        <div className="flex-grow">
          <div className="pb-24 px-16 bg-white rounded-xl text-16 !text-[#5E606A] flex-grow max-h-[360px] overflow-y-scroll paddytable">
            <div className="pb-24 px-16 bg-white rounded-xl text-16 !text-[#5E606A] relative">
              <div className="w-full py-23 flex justify-between bg-white rounded-t-lg">
                <h3 className="#4A4C58 text-16">Commodity users’ activities</h3>
                <div className="flex relative">
                  <div
                    className="py-24 px-20 border border-[#F0F0F1] bg-white w-[clamp(180px,14.1vw,225px)] flex-col gap-12 rounded-xl absolute z-10 -left-[80%]"
                    style={{
                      boxShadow: "-4px 6px 20px 0px rgba(0, 0, 0, 0.10)",
                      display: showFilter,
                    }}>
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
                        <Image
                          src="/pass.svg"
                          fill
                          alt="pass mark icon"></Image>
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
                          setBgColorOnClick1("");
                          setBgColorOnClick2("");
                          setChangedBgColor("");
                          setList("Grade1");
                        }}>
                        <div className="relative w-24 h-20">
                          <Image
                            src="/grade1.svg"
                            fill
                            alt="pass mark icon"></Image>
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
                          setBgColorOnClick2("");
                          setList("Grade2");
                        }}>
                        <div className="relative w-24 h-20">
                          <Image
                            src="/grade2.svg"
                            fill
                            alt="pass mark icon"></Image>
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
                          setBgColorOnClick1("");
                          setList("Grade3");
                        }}>
                        <div className="relative w-24 h-20">
                          <Image
                            src="/grade3.svg"
                            fill
                            alt="pass mark icon"></Image>
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

            <div className="!text-14 !w-full flex">
              <Table striped highlightOnHover verticalSpacing={16}>
                <thead className="!text-[#5E606A] opacity-80 !text-justify !pb-12">
                  <th>Commodity</th>
                  <th>
                    <span>Grades</span>
                  </th>
                  <th>
                    <span className="flex items-center gap-2">
                      <span>Status</span>
                      <img
                        src="/up-down-arrow.svg"
                        alt=""
                        className="w-4 h-4"
                      />
                    </span>
                  </th>
                  <th>
                    <span className="flex items-center gap-2">
                      <span>Date and Time</span>
                      <img
                        src="/up-down-arrow.svg"
                        alt=""
                        className="w-4 h-4"
                      />
                    </span>
                  </th>
                  <th>Scanned by</th>
                </thead>

                <PaddyMainTable list={list} />
              </Table>
            </div>
          </div>
        </div>
        <div className="pt-34 px-20 pb-31 bg-white flex flex-col gap-20 w-[246px] rounded-xl max-h-[260px]">
          <h2 className="text-[#4A4C58] text-16 font-medium">Grades</h2>
          <div className="flex gap-2 flex-col">
            <button
              className="px-10 py-4 flex justify-between rounded-lg bg-[#F9FAFB] w-full"
              style={{ border: "0.5px solid #DADADD" }}
              onClick={openPaddy}>
              <span className="text-12 text-[#8F9198]">Grade 1</span>
              <figure className="w-16 h-16 relative">
                <Image
                  src="/greater-than-arrow.svg"
                  fill
                  alt="greater than arrow"></Image>
              </figure>
            </button>

            <button
              className="px-10 py-4 flex justify-between rounded-lg bg-[#F9FAFB] w-full"
              style={{ border: "0.5px solid #DADADD" }}>
              <span className="text-12 text-[#8F9198]">Grade 2</span>
              <figure className="w-16 h-16 relative">
                <Image
                  src="/greater-than-arrow.svg"
                  fill
                  alt="greater than arrow"></Image>
              </figure>
            </button>

            <button
              className="px-10 py-4 flex justify-between rounded-lg bg-[#F9FAFB] w-full"
              style={{ border: "0.5px solid #DADADD" }}>
              <span className="text-12 text-[#8F9198]">Grade 3</span>
              <figure className="w-16 h-16 relative">
                <Image
                  src="/greater-than-arrow.svg"
                  fill
                  alt="greater than arrow"></Image>
              </figure>
            </button>
          </div>
        </div>
      </div>

      <PaddyModal opened={createPaddy} close={closePaddy} />
      <CreateGrade
        opened={createGrade}
        close={closeGrade}
        placeholder="Set Grade Value"
      />
    </div>
  );
}

export default MainPaddyRice;
