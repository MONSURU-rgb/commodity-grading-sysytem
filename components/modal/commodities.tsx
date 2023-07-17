import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button, TextInput, Select } from "@mantine/core";
import { IconChevronDown, IconUpload, IconX } from "@tabler/icons-react";
import { RiArrowDropDownLine } from "./drop-down";
import PersonalInfo from "./personalInfo";
import { Popover } from "@mantine/core";
import { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/image";

import clsx from "clsx";
import ParameterModal from "./parameter";
import CreateParameterModal from "./createParameterModal";

interface ModalType {
  opened: boolean;
  close: () => void;
}

interface CurrentDataProps {
  company_name: string;
  first_name: string;
  second_name: string;
  third_name: string;
  picture: File | null;
}

function CommoditiesModal({ opened, close }: ModalType) {
  const [fileName, setFileName] = useState(null);
  const [imgSize, setImgSize] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [show, setShow] = useState("hidden");

  const [placeholderValue, setPlaceholderValue] = useState("Select parameter");
  const [placeholderValue1, setPlaceholderValue1] =
    useState("Select parameter");
  const [placeholderValue2, setPlaceholderValue2] =
    useState("Select parameter");
  const [placeholderValue3, setPlaceholderValue3] =
    useState("Select parameter");

  const [openedParam, { open: openPram, close: closeParam }] =
    useDisclosure(false);

  const [createOpened, { open: openCreate, close: closeCreate }] =
    useDisclosure(false);

  const [currentData, handleCurrentData] = useState<CurrentDataProps>({
    company_name: "",
    first_name: "",
    second_name: "",
    third_name: "",
    picture: null,
  });

  return (
    <div className="commodity-modal">
      <Modal
        opened={opened}
        onClose={close}
        title="Create Commodity"
        centered
        size="961px"
        classNames={{
          root: "!py-[28px,2.5vw,40px] !px-[56px,4.8vw,76px]",
          content:
            "!pb-[clamp(28px,2.5vw,40px)] !px-[clamp(56px,4.8vw,76px)] z-200 !rounded-2xl",
          title: "!pt-[clamp(28px,2.5vw,40px)]",
        }}
        className="scrollbar-hidden">
        <div className="w-full !h-[0.5px] bg-[#F1F3F5]"></div>
        <div className="pt-31 commodities-modal scrollbar-hidden">
          <div className="flex flex-col gap-2 scrollbar-hidden">
            <h3 className="text-[#0f0f0f]">Commodity Name</h3>
            <div className="rounded-lg mb-40">
              <TextInput
                className="w-full"
                classNames={{
                  wrapper: "!h-[clamp(42px,3.6vw,55px)]",
                  input: "!border-0 !border !h-[clamp(38px,3.4vw,55px)]",
                }}
                placeholder="Enter Name"
                value={currentData.company_name}
                onChange={(e) =>
                  handleCurrentData({
                    ...currentData,
                    company_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid gap-12">
              <h2 className="text-[#4A4C58] text-16">Parameters</h2>
              <h3 className="text-[#373839] text-12">Default parameters</h3>
            </div>
            <div className="grid gap-16">
              <div className="flex gap-10 items-center">
                <h2 className="text-[#8F9198] text-14 leading-5">Name</h2>
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
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[54px]",
                          label: "flex !justify-between !w-full !px-[16px]",
                        }}>
                        <h2 className="text-[#8F9198] font-normal text-12 leading-[19.2px]">
                          {placeholderValue}
                        </h2>
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

              <div className="flex gap-10 items-center">
                <h2 className="text-[#8F9198] text-14 leading-5">Name</h2>
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
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[54px]",
                          label: "flex !justify-between !w-full !px-[16px]",
                        }}>
                        <h2 className="text-[#8F9198] font-normal text-12 leading-[19.2px]">
                          {placeholderValue1}
                        </h2>
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
                          onClick={() => setPlaceholderValue1("Short Grains")}>
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

              <div className="flex gap-10 items-center">
                <h2 className="text-[#8F9198] text-14 leading-5">Name</h2>
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
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[54px]",
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
                          onClick={() => setPlaceholderValue2("Short Grains")}>
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

              <div className={clsx("gap-10 items-center pb-24", show)}>
                <h2 className="text-[#8F9198] text-14 leading-5">Name</h2>
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
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[54px]",
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
                          onClick={() => setPlaceholderValue3("Short Grains")}>
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
            </div>

            <div className="flex justify-between pt-24">
              <button
                className="px-24 py-2 rounded-lg bg-[#E6F0EB] text-[#195B3E] text-14 font-medium"
                onClick={() => setShow("flex")}>
                Add Parameters
              </button>

              <button
                onClick={openCreate}
                className="text-[#195B3E] text-14 font-medium px-24 py-2 rounded-lg"
                style={{
                  border: "1px solid #DADADD",
                  opacity: show === "flex" ? "1" : "0.5",
                }}>
                Set Grade Value
              </button>
            </div>

            <div className="grid gap-16 mt-40">
              <h2 className="text-[#4A4C58] text-16">
                Upload Commodity’s Image
              </h2>

              <Dropzone
                onDrop={(files) => {
                  const reader = new FileReader();
                  handleCurrentData({
                    ...currentData,
                    picture: files[0],
                  });
                  //   setFileName(files[0].name);
                  //   setImgSize(files[0].size);
                  const data = files[0].size;
                  console.log(data / 1024);
                  reader.readAsDataURL(files[0]);

                  //   reader.onload = () => {
                  //     setImgPreview(reader.result as string);
                  //   };
                }}
                // onReject={(files) => console.log("rejected files", files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                styles={{
                  root: {
                    border: "1px dashed #6E6F73",
                    "&:hover": {
                      border: "1px dashed #6D0802",
                      borderRadius: "8px",
                    },
                  },
                }}>
                <Group
                  className="flex flex-col"
                  position="center"
                  spacing="xl"
                  //   style={{ minHeight: rem(220), pointerEvents: "none" }}>
                >
                  <Dropzone.Accept>
                    <IconUpload size="3.2rem" stroke={1.5} />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX size="3.2rem" stroke={1.5} />
                  </Dropzone.Reject>
                  {imgPreview ? (
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <div className="rounded-[11px] p-[1px] border border-[#7C827D]">
                        <Image
                          src={imgPreview}
                          alt=""
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <span className=" text-davy-grey text-14 ">
                          {fileName}
                        </span>
                        <span className=" text-phillipine-silver text-[10px]">
                          {imgSize}MB Image
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Dropzone.Idle>
                        <div className="flex flex-col gap-16 justify-center items-center">
                          <div className="relative w-24 h-24">
                            <Image src={"/gallery.svg"} alt={"upload"} fill />
                          </div>
                          <div className="px-20 py-16 grid place-content-center">
                            <p className="text-[#4A4C58] text-20">
                              Drag & drop or <b>choose an image</b> to upload
                            </p>

                            <p className="text-12 text-[#4A4C58] text-center">
                              <b>PEG, PNG, and SVG</b> (Size limit 10mb)
                            </p>
                          </div>
                        </div>
                      </Dropzone.Idle>

                      {/* <Link href={"/"}>
                        <Button
                          className="w-full text-engineering rounded-lg mt-2"
                          styles={{
                            root: {
                              background: "#F8E7E7 !important",
                              height: "50px",
                              "&:hover": {
                                background: " !important ",
                              },
                            },
                          }}>
                          Choose File
                        </Button>
                      </Link> */}
                    </>
                  )}
                </Group>
              </Dropzone>
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center mt-31">
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

        <ParameterModal opened={createOpened} close={closeCreate} />
      </Modal>

      <CreateParameterModal opened={openedParam} close={closeParam} />
    </div>
  );
}

export default CommoditiesModal;
