import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import React from "react";
import CreateGrade from "./create-grade";
import { Content } from "next/font/google";

interface PaddyType {
  opened: boolean;
  close: () => void;
}

function PaddyModal({ opened, close }: PaddyType) {
  const [createGrade, { open: openGrade, close: closeGrade }] =
    useDisclosure(false);

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="Grade 1 Paddy Rice"
        centered
        size="792px"
        classNames={{ content: "!px-[34px]" }}
        className="text-[#4A4C58] text-[18px] scrollbar-hidden">
        <div className="pt-38 !pb-38 scrollbar-hidden">
          <div className="flex justify-between pb-31 scrollbar-hidden">
            <h3 className="text-[#4A4C58] text-16 font-semibold">Parameters</h3>
            <h3 className="text-[#4A4C58] text-16 font-semibold">Value</h3>
          </div>
          <div className="pb-31 scrollbar-hidden">
            <div
              className="flex justify-between pb-18"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">
                Foreign material
              </h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>
            <div
              className="flex justify-between pb-18 pt-12"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">
                Immature Green Shells
              </h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>

            <div
              className="flex justify-between pb-18 pt-12"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">
                Short Grains
              </h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>

            <div
              className="flex justify-between pb-18 pt-12"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">Red Grains</h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>

            <div
              className="flex justify-between pb-18 pt-12"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">
                Life Infestation
              </h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>
            <div
              className="flex justify-between pb-18 pt-12"
              style={{ borderBottom: "1px solid #F0F0F1" }}>
              <h3 className="text-[#4A4C58] text-16 font-normal">
                Damaged/Discoloured Grains
              </h3>
              <h3 className="text-[#4A4C58] text-16 font-normal">0.01 - 1%</h3>
            </div>
          </div>

          <div className="grid gap-12 mb-[38px] scrollbar-hidden">
            <h3 className="text-[#8F9198] text-18">Image</h3>
            <div className="relative w-[clamp(90px,8vw,128px)] h-[clamp(90px,8vw,128px)]">
              <Image src="/paddy-rice-img.png" fill alt=""></Image>
            </div>
          </div>

          <button
            className="px-31 py-16 bg-[#195B3E] rounded-[10px] text-white text-14"
            onClick={openGrade}>
            Modify Grade Value
          </button>
        </div>
      </Modal>
      <CreateGrade
        opened={createGrade}
        close={closeGrade}
        placeholder="Modify Grade Value"
      />
    </div>
  );
}

export default PaddyModal;
