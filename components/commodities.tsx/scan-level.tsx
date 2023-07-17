import React from "react";

function ScanLevel() {
  return (
    <div className="flex gap-16 pb-20">
      <div className="flex gap-1 dashnav pb-2">
        <span
          className="w-12 h-12 rounded-full bg-[#195B3E]"
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
      <div className="flex gap-1 pb-2">
        <span
          className="w-12 h-12 rounded-full bg-[#AB3FD9]"
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

      <div className="flex gap-1 pb-2">
        <span
          className="w-12 h-12 rounded-full bg-[#FF6A00]"
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

      <div className="flex gap-1 pb-2">
        <span
          className="w-12 h-12 rounded-full bg-[#3851DD]"
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
  );
}

export default ScanLevel;
