import Image from "next/image";
import React from "react";
import clsx from "clsx";

const reportCardDetails: {
  month: string;
  level: string;
  text: string;
  secondPass: string;
  src: string;
  levelColor: string;
}[] = [
  {
    month: "This month",
    level: "97%",
    levelColor: "text-[#195B3E]",
    text: "Scan Accuracy",
    secondPass: "12%",
    src: "/green-arrow-down.svg",
  },

  {
    month: "This month",
    level: "150",
    levelColor: "text-[#AB3FD9]",
    text: "Daily scan/usage",
    secondPass: "80+",
    src: "",
  },

  {
    month: "This month",
    level: "120s",
    levelColor: "text-[#FF6A00]",
    text: "Average scan time",
    secondPass: "12%",
    src: "/green-arrow-down.svg",
  },

  {
    month: "This month",
    level: "43.4%",
    levelColor: "text-[#3851DD]",
    text: "Successful scans",
    secondPass: "12% ",
    src: "/red-arrow-down.svg",
  },
];

interface ReportCardProps {
  month: string;
  level: string;
  text: string;
  levelColor: string;
  src: string;
  secondPass: string;
}

function PaddyReport() {
  return (
    <div className="grid grid-cols-2 gap-24 pr-10 flex-1">
      {reportCardDetails.map(
        ({
          month,
          level,
          text,
          src,
          secondPass,
          levelColor,
        }: ReportCardProps) => (
          <div
            key={level}
            className={clsx("rounded-2xl p-20 bg-cover flex-1")}
            style={{
              borderRadius: "8px",
              border: "0.5px solid #DADADD",
              background: "#FDFDFD",
              boxShadow: "0px 8px 24px 0px rgba(194, 194, 194, 0.20)",
            }}>
            <div className="flex flex-col gap-34 justify-between h-full">
              <h2 className="text-[#8F9198] text-12 font-normal">{month}</h2>
              <div className="gap-12">
                <h2 className={clsx("text-40 font-medium", levelColor)}>
                  {level}
                </h2>
                <div className="text-white text-16 flex justify-between gap-20">
                  <h3 className="text-[#4A4C58] text-16 whitespace-nowrap">
                    {text}
                  </h3>
                  <div className="flex items-center text-[#38CB89] justify-between gap-2">
                    {secondPass === "12% " ? (
                      <span className="text-[#E1261C]">{secondPass}</span>
                    ) : (
                      <span>{secondPass}</span>
                    )}
                    <div className="relative w-16 h-16">
                      {src ? (
                        <Image src={src} fill alt="right arrow"></Image>
                      ) : (
                        "  "
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
  );
}

export default PaddyReport;
