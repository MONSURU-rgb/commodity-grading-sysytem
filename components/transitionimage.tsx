import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export function TransitionImage() {
  const [background, setBackground] = useState("/firstbg.png");
  const [hText, sethHText] = useState("Commodity Grading Made Easy");

  const check1 = (
    <div className="flex gap-3">
      <div className="w-14 h-3 bg-[#195B3E] rounded"></div>
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
    </div>
  );

  const check2 = (
    <div className="flex gap-3">
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
      <div className="w-14 h-3 bg-[#195B3E] rounded"></div>
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
    </div>
  );

  const check3 = (
    <div className="flex gap-3">
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
      <div className="w-8 h-3 bg-[#E6E6E6] rounded"></div>
      <div className="w-14 h-3 bg-[#195B3E] rounded"></div>
    </div>
  );

  const [backbroundlength, setBackgroundLength] = useState<ReactNode>(check1);

  const [pText, setPText] = useState(
    "Introducing the commodity grading system to help you unlock the true value of your commodity."
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const background = [
        "bg-[url(/firstbg.png)]",
        "bg-[url(/secondbg.png)]",
        "bg-[url(/thirdbg.png)]",
      ];

      const hText = [
        "Commodity Grading Made Easy",
        "Scan your commodities in one step",
        "Grading in it’s easiest form",
      ];

      const pText = [
        "Introducing the commodity grading system to help you unlock the true value of your commodity.",
        "Efficiently Assess and Grade Your Commodities.",
        "Streamline Your Commodity Grading Process with the Ultimate Grading App",
      ];

      const randomBackground =
        background[Math.floor(Math.random() * background.length)];
      setBackground(randomBackground);

      const hTextShown = hText[Math.floor(Math.random() * hText.length)];
      sethHText(hTextShown);

      const pTextShown = pText[Math.floor(Math.random() * pText.length)];
      setPText(pTextShown);
    }, 2000); // Change the background and text color every 2 seconds

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <motion.div
      className={clsx(
        "bg-[url(/firstbg.png)] bg-cover w-1/2 relative px-34 secimage max-h-screen",
        background
      )}
      style={{ background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="absolute bottom-8 right-24 left-24 grid gap-20 px-24 rounded-2xl blurred py-31">
        <h2
          className={clsx(
            "grid text-[clamp(20px,1.5vw,28px)] font-inter text-white font-semibold"
          )}>
          {hText}
        </h2>

        <p className="text-white font-inter font-semibold text-[clamp(12px,1.2vw,18px)]">
          {pText}
        </p>

        {background === "bg-[url(/firstbg.png)]"
          ? check1
          : background === "bg-[url(/secondbg.png)]"
          ? check2
          : check3}
      </div>
    </motion.div>
  );
}
