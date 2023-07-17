import Image from "next/image";
import React, { ReactNode, useContext } from "react";
import { useState } from "react";
import { Button, Popover, Select } from "@mantine/core";
import clsx from "clsx";
import { cardDetails } from "./cardListDetails";
import DashboardTable from "./dashboard-table";
import DashboardSideTable from "./dashboard-side-table";

import {
  RechartGraph,
  RechartGraph1,
  RechartGraph2,
  RechartGraph3,
} from "./dashboardGraph";
import { AuthContext, IContextType } from "@/pages/_app";

function Demo(): React.JSX.Element {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="select">
      <Select value={value} onChange={setValue} data={[]} />
    </div>
  );
}

interface CardList {
  month: string;
  level: string;
  text: string;
  secondPass: string;
  src: string;
  bgImage: string;
}

function MainDashboard() {
  const { authUser } = useContext(AuthContext) as IContextType;
  const [showBorder, setShowBorder] = useState(true);

  const [placeholderValue, setPlaceholderValue] = useState("12 Months");
  const [graphState, setGraphState] = useState<ReactNode>(<RechartGraph />);

  return (
    <div className="ml-[clamp(180px,14vw,200px)] pl-31 pr-40 pt-48 bg-[#F5F5F6] pb-48">
      <header className="flex  items-center gap-16 pb-20">
        <div className="relative w-34 h-31">
          <Image
            src="/ayodeji-frame.svg"
            alt=""
            fill
            className="object-cover"></Image>
        </div>

        <div>
          <h2 className="text-[#4B4B4B] text-24 font-medium">
            Hi, {authUser?.first_name} {authUser?.last_name}!{" "}
          </h2>
          <h3 className="text-[#4B4B4B] text-12">Monday, 28 2023</h3>
        </div>
      </header>
      <div
        className="p-31 flex gap-31 mb-24"
        style={{
          borderRadius: "12px",
          border: "1px solid #F0F0F1",
          background: "#FFF",
        }}>
        <div
          className="py-23 px-18 w-3/5"
          style={{
            borderRadius: "7.528px",
            border: "0.753px solid #E4E4E7",
            background: "#FFF",
          }}>
          <div>
            <div className="flex justify-between">
              <h3 className="text-[#18181B] text-12 font-bold">
                Commodity Analytics
              </h3>
              <div className="flex gap-16">
                <div
                  className={clsx(
                    "flex gap-1 pb-2",
                    showBorder ? "border-b !border-b-[#0D3423]" : ""
                  )}>
                  <span
                    className={clsx(
                      "w-12 h-12 rounded-full",
                      showBorder ? "bg-[#195B3E]" : "bg-[#C1C2C6]"
                    )}
                    style={{
                      filter:
                        "drop-shadow(0px 0px 1px rgba(193, 194, 198, 0.40)) drop-shadow(0px 6px 6px rgba(193, 194, 198, 0.16))",
                    }}></span>
                  <span
                    className="text-[#5a5c5b] text-[6px] text-Roboto"
                    style={{
                      textShadow:
                        "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
                    }}>
                    Scan Accuracy
                  </span>
                </div>
                <div
                  className="flex gap-1  pb-2 hover:border-b !border-b-[#0D3423]"
                  onMouseEnter={() => {
                    setGraphState(<RechartGraph1 />);
                    setShowBorder(false);
                  }}
                  onMouseLeave={() => {
                    setGraphState(<RechartGraph />);
                    setShowBorder(true);
                  }}>
                  <span
                    className="w-12 h-12 rounded-full bg-[#C1C2C6] hover:bg-[#0D3423]"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 1px rgba(193, 194, 198, 0.40)) drop-shadow(0px 6px 6px rgba(193, 194, 198, 0.16))",
                    }}></span>
                  <span
                    className="text-[#8F9198] text-[6px] text-Roboto"
                    style={{
                      textShadow:
                        "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
                    }}>
                    Daily Usage
                  </span>
                </div>

                <div
                  className="flex gap-1 hover:border-b !border-b-[#7738DD] pb-2"
                  onMouseEnter={() => {
                    setGraphState(<RechartGraph2 />);
                    setShowBorder(false);
                  }}
                  onMouseLeave={() => {
                    setGraphState(<RechartGraph />);
                    setShowBorder(true);
                  }}>
                  <span
                    className="w-12 h-12 rounded-full bg-[rgb(193,194,198)] hover:bg-[#7738DD]"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 1px rgba(193, 194, 198, 0.40)) drop-shadow(0px 6px 6px rgba(193, 194, 198, 0.16))",
                    }}></span>
                  <span
                    className="text-[#8F9198] text-[6px] text-Roboto"
                    style={{
                      textShadow:
                        "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
                    }}>
                    Scan Time
                  </span>
                </div>

                <div
                  className="flex gap-1 pb-2 hover:border-b !border-b-[#E1891C]"
                  onMouseEnter={() => {
                    setGraphState(<RechartGraph3 />);
                    setShowBorder(false);
                  }}
                  onMouseLeave={() => {
                    setGraphState(<RechartGraph />);
                    setShowBorder(true);
                  }}>
                  <span
                    className="w-12 h-12 rounded-full bg-[rgb(193,194,198)] hover:bg-[#E1891C]"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 1px rgba(193, 194, 198, 0.40)) drop-shadow(0px 6px 6px rgba(193, 194, 198, 0.16))",
                    }}></span>
                  <span
                    className="text-[#8F9198] text-[6px] text-Roboto"
                    style={{
                      textShadow:
                        "0px 0px 1px 0px rgba(193, 194, 198, 0.40), 0px 6px 6px -6px rgba(193, 194, 198, 0.16)",
                    }}>
                    Successful scan
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-16 grid gap-[19px]">
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
                      <Image src="/popover-dropdown.svg" fill alt=""></Image>
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

                  {/* <Text size="sm" classNames={{}}>12 Months</Text> */}
                  {/* <div className="bg-[#262830] px-2 py-12">
                      <button className="p-[6px] bg-[#3B3D47] rounded text-[8px]">
                        12 Months
                      </button>
                    </div> */}
                </Popover.Dropdown>
              </Popover>

              <div className="h-[285px] w-full">{graphState}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24 flex-wrap w-2/3">
          {cardDetails.map(
            ({ month, level, text, secondPass, src, bgImage }: CardList) => (
              <div
                key={level}
                className={clsx("rounded-2xl p-20 bg-cover", bgImage)}>
                <div className="flex flex-col gap-34 justify-between h-full">
                  <h2 className="text-white text-20">{month}</h2>
                  <div className="gap-12">
                    <h2 className="text-white text-40 font-medium">{level}</h2>
                    <div className="text-white text-16 flex justify-between gap-31">
                      <h3 className="text-white text-16">{text}</h3>
                      <div className="flex gap-2 items-center">
                        <span>{secondPass}</span>
                        <div className="relative w-16 h-16">
                          {src && (
                            <Image src={src} fill alt="right arrow"></Image>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex gap-23">
        <div className="flex-grow">
          <DashboardTable />
        </div>
        <DashboardSideTable />
      </div>
    </div>
  );
}

export default MainDashboard;
