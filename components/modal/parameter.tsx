import {
  Button,
  Modal,
  Popover,
  RangeSlider,
  Select,
  Slider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import CreateParameterModal from "./createParameterModal";

interface ModalType {
  opened: boolean;
  close: () => void;
}

function ParameterModal({ opened, close }: ModalType) {
  const [value, setValue] = useState(20);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const [placeholderValue, setPlaceholderValue] = useState("Select parameter");
  const [placeholderValue1, setPlaceholderValue1] =
    useState("Select parameter");
  const [placeholderValue2, setPlaceholderValue2] =
    useState("Select parameter");
  const [placeholderValue3, setPlaceholderValue3] =
    useState("Select parameter");

  const [openedParam, { open: openPram, close: closeParam }] =
    useDisclosure(false);

  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];

  return (
    <div className="parameter-modal">
      <Modal
        opened={opened}
        onClose={close}
        title="Creating Parameter Value"
        centered
        size="xl"
        classNames={{
          root: "!py-[28px,2.5vw,40px] !px-[56px,4.8vw,76px]",
          content:
            "!pb-[clamp(28px,2.5vw,40px)] !px-[clamp(56px,4.8vw,76px)] z-200 !rounded-2xl",
          title: "!pt-[clamp(28px,2.5vw,40px)]",
        }}
        className="scrollbar-hidden">
        <div className="w-full bg-[#F1F3F5]"></div>
        <div className="pt-31">
          <div className="grid gap-2 mb-[clamp(30px,2.6vw,44px)]">
            <h2 className="text-[#4A4C58] text-16 font-semibold">Grade</h2>
            <input
              type="text"
              placeholder="Enter grade name"
              className="py-18 px-[clamp(10px,0.9vw,14px)] bg-white rounded-lg"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(193, 194, 198, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
                border: "1px solid #DADADD",
              }}
            />
          </div>

          <div>
            <div className="flex flex-col gap-12">
              <h2 className="text-[#4A4C58] text-16 font-semibold">
                Parameters
              </h2>
              <h4 className="text-[#8F9198] text-12">Default parameters</h4>
            </div>

            <div className="grid gap-16 pt-16">
              <div className="flex gap-31">
                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Name</h2>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "!bg-white !px-[12px] !py-[16px] !flex !flex-col",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal",
                            label: "flex !justify-between !w-full !px-[16px]",
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
                          className="text-[#195B3E] text-12 font-medium !w-fit text-right self-end pb-3"
                          onClick={openPram}>
                          Create Parameter
                        </button>
                        <div className="flex flex-col gap-1">
                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start font-normal"
                            onClick={() =>
                              setPlaceholderValue("Foreign material")
                            }>
                            Foreign material
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue("Immature Green Shells")
                            }>
                            Immature Green Shells
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() => setPlaceholderValue("Short Grains")}>
                            Short Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() => setPlaceholderValue("Red Grains")}>
                            Red Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue("Life Infestation")
                            }>
                            Life Infestation
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue("Damaged/Discoloured Grains")
                            }>
                            Damaged/Discoloured Grains
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                </div>

                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Value</h2>

                  <RangeSlider
                    defaultValue={[1, 6]}
                    classNames={{
                      root: "w-full",
                      bar: "bg-[#195B3E]",
                      thumb: "border border-[#195B3E]",
                    }}
                    marks={[
                      { value: 5, label: "1%" }, // -> displays mark on slider track
                      { value: 80, label: "6%" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex gap-31">
                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Name</h2>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "!bg-white !px-[12px] !py-[16px] !flex !flex-col",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal",
                            label: "flex !justify-between !w-full !px-[16px]",
                          }}>
                          <h2>{placeholderValue1}</h2>
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
                          className="text-[#195B3E] text-12 font-medium !w-fit text-right self-end pb-3"
                          onClick={openPram}>
                          Create Parameter
                        </button>
                        <div className="flex flex-col gap-1">
                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start font-normal"
                            onClick={() =>
                              setPlaceholderValue1("Foreign material")
                            }>
                            Foreign material
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue1("Immature Green Shells")
                            }>
                            Immature Green Shells
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue1("Short Grains")
                            }>
                            Short Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() => setPlaceholderValue1("Red Grains")}>
                            Red Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue1("Life Infestation")
                            }>
                            Life Infestation
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue1("Damaged/Discoloured Grains")
                            }>
                            Damaged/Discoloured Grains
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                </div>

                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Value</h2>

                  <RangeSlider
                    defaultValue={[1, 6]}
                    classNames={{
                      root: "w-full",
                      bar: "bg-[#195B3E]",
                      thumb: "border border-[#195B3E]",
                    }}
                    marks={[
                      { value: 5, label: "1%" }, // -> displays mark on slider track
                      { value: 80, label: "6%" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex gap-31">
                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Name</h2>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "!bg-white !px-[12px] !py-[16px] !flex !flex-col",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal",
                            label: "flex !justify-between !w-full !px-[16px]",
                          }}>
                          <h2>{placeholderValue2}</h2>
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
                          className="text-[#195B3E] text-12 font-medium !w-fit text-right self-end pb-3"
                          onClick={openPram}>
                          Create Parameter
                        </button>
                        <div className="flex flex-col gap-1">
                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start font-normal"
                            onClick={() =>
                              setPlaceholderValue2("Foreign material")
                            }>
                            Foreign material
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue2("Immature Green Shells")
                            }>
                            Immature Green Shells
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue2("Short Grains")
                            }>
                            Short Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() => setPlaceholderValue2("Red Grains")}>
                            Red Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue2("Life Infestation")
                            }>
                            Life Infestation
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue2("Damaged/Discoloured Grains")
                            }>
                            Damaged/Discoloured Grains
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                </div>

                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Value</h2>

                  <RangeSlider
                    defaultValue={[1, 6]}
                    classNames={{
                      root: "w-full",
                      bar: "bg-[#195B3E]",
                      thumb: "border border-[#195B3E]",
                    }}
                    marks={[
                      { value: 5, label: "1%" }, // -> displays mark on slider track
                      { value: 80, label: "6%" },
                    ]}
                  />
                </div>
              </div>

              <div className="flex gap-31">
                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Name</h2>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "!bg-white !px-[12px] !py-[16px] !flex !flex-col",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal",
                            label: "flex !justify-between !w-full !px-[16px]",
                          }}>
                          <h2>{placeholderValue3}</h2>
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
                          className="text-[#195B3E] text-12 font-medium !w-fit text-right self-end pb-3"
                          onClick={openPram}>
                          Create Parameter
                        </button>
                        <div className="flex flex-col gap-1">
                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start font-normal"
                            onClick={() =>
                              setPlaceholderValue3("Foreign material")
                            }>
                            Foreign material
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue3("Immature Green Shells")
                            }>
                            Immature Green Shells
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue3("Short Grains")
                            }>
                            Short Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() => setPlaceholderValue3("Red Grains")}>
                            Red Grains
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue3("Life Infestation")
                            }>
                            Life Infestation
                          </button>

                          <button
                            className="p-[6px] bg-[#F5F5F6] rounded text-[12px] text-[#4F4F4F] w-full text-start"
                            onClick={() =>
                              setPlaceholderValue3("Damaged/Discoloured Grains")
                            }>
                            Damaged/Discoloured Grains
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                </div>

                <div className="flex-1 flex gap-2 items-center">
                  <h2 className="text-[#8F9198] text-14">Value</h2>

                  <RangeSlider
                    defaultValue={[1, 6]}
                    classNames={{
                      root: "w-full",
                      bar: "bg-[#195B3E]",
                      thumb: "border border-[#195B3E]",
                    }}
                    marks={[
                      { value: 5, label: "1%" }, // -> displays mark on slider track
                      { value: 80, label: "6%" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <button
              className="px-24 py-2 rounded-lg bg-[#E6F0EB] text-[#195B3E] text-14 font-medium my-31"
              onClick={close}>
              Add Parameters
            </button>

            <div className="flex gap-2 justify-between items-center">
              <button
                className="px-24 py-12 text-[#195B3E] rounded-lg"
                style={{ border: "1px solid #195B3E" }}
                onClick={close}>
                Close
              </button>
              <button
                className="px-24 py-12 rounded-lg bg-[#195B3E] text-white"
                onClick={close}>
                Submit
              </button>
            </div>
          </div>

          <CreateParameterModal opened={openedParam} close={closeParam} />
        </div>
      </Modal>
    </div>
  );
}

export default ParameterModal;
