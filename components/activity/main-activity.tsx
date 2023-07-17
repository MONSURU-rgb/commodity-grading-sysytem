import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Pagination, Popover, Table } from "@mantine/core";
import clsx from "clsx";
import { RoundFilter } from "./filtericon";
import { Input } from "@mantine/core";
import { Search } from "./search-icon";
import { tableList } from "./tableListData";
import Image from "next/image";

interface RowItems {
  id: string;
  action: string;
  commodity: string;
  user: string;
  status: string;
  result: string;
  date: string;
}

function Demo() {
  return <Input placeholder="Search" />;
}

function MainActivity(): React.JSX.Element {
  const [showFilter, setShowFilter] = useState("none");
  const [placeholderValue, setPlaceholderValue] =
    useState<string>("Select status");
  const [placeholderValue1, setPlaceholderValue1] =
    useState<string>("Select results");
  const [activePage, setPage] = useState(1);

  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the start and end indices of the items to display
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = tableList.slice(startIndex, endIndex);

  const rows = displayedItems.map(
    ({ id, action, commodity, user, status, result, date }: RowItems) => (
      <tr key={user}>
        <td>{id}</td>
        <td>{action}</td>
        <td>{commodity}</td>
        <td>{user}</td>
        <td>
          <span
            className={clsx(
              status === "Accepted" ? "text-[#289061]" : "text-[#E1261C]"
            )}>
            {status}
          </span>
        </td>
        <td>
          <span
            className={clsx(
              result === "Not up to standard"
                ? "text-[#E1261C]"
                : "text-[#49474D]"
            )}>
            {result}
          </span>
        </td>
        <td>{date}</td>
      </tr>
    )
  );

  const handlePrevPage = () => {
    setPage(activePage - 1);
  };

  const handleNextPage = () => {
    setPage(activePage + 1);
  };

  if (tableList.length === 0) {
    return (
      <div className="ml-[clamp(180px,14vw,200px)] w-full text-[#49474D] px-40 text-14 divtable">
        <div
          className="w-full px-40 py-40 flex justify-between bg-white"
          style={{ borderBottom: "1px solid #C1C2C6" }}>
          <h3 className="#4A4C58 text-16">Activities</h3>

          <div className="relative">
            <div
              className="py-24 px-20 border border-[#F0F0F1] bg-white w-[clamp(180px,23vw,350px)] flex-col gap-12 rounded-xl absolute z-10 -left-[130%]"
              style={{
                boxShadow: "-4px 6px 20px 0px rgba(0, 0, 0, 0.10)",
                display: showFilter,
              }}>
              <div className="grid gap-2">
                <h3 className="text-[#C1C2C6] text-12">Commodity</h3>
                <div className="flex gap-x-2 gap-y-16 flex-wrap !mb-16">
                  <button
                    className="px-2 py-1 rounded-lg text-white bg-[#195B3E] text-12 flex justify-center"
                    style={{ border: "0.5px solid #195B3E" }}>
                    All
                  </button>

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

                <div className="flex !gap-16 flex-col">
                  <h3 className="text-[#C1C2C6] text-12">Status</h3>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "flex flex-col gap-[12px] py-[24px] px-[10px] rounded-lg",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[52px]",
                            label:
                              "flex !justify-between !w-full !py-[14px] !px-16",
                          }}>
                          <h2 className="text-[#C1C2C6] text-16">
                            {placeholderValue}
                          </h2>
                          <div className="relative w-[20px] h-[20px]">
                            <Image
                              src="/popover-dropdown.svg"
                              fill
                              alt=""></Image>
                          </div>
                        </Button>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <div className="">
                          <button
                            className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start font-normal"
                            onClick={() => setPlaceholderValue("Accepted")}>
                            Accepted
                          </button>

                          <button
                            className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start"
                            onClick={() => setPlaceholderValue("Rejected")}>
                            Rejected
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
                </div>

                <div className="flex !gap-16 flex-col pt-16">
                  <h3 className="text-[#C1C2C6] text-12">Results</h3>
                  <div className="w-full">
                    <Popover
                      width="target"
                      position="bottom"
                      shadow="sm"
                      classNames={{
                        dropdown:
                          "flex flex-col gap-[12px] py-[24px] px-[10px] rounded-lg",
                      }}>
                      <Popover.Target>
                        <Button
                          classNames={{
                            root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[52px]",
                            label:
                              "flex !justify-between !w-full !py-[14px] !px-16",
                          }}>
                          <h2 className="text-[#C1C2C6] text-16">
                            {placeholderValue1}
                          </h2>
                          <div className="relative w-[20px] h-[20px]">
                            <Image
                              src="/popover-dropdown.svg"
                              fill
                              alt=""></Image>
                          </div>
                        </Button>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <div className="">
                          <button
                            className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start font-normal"
                            onClick={() => setPlaceholderValue1("Grade 1")}>
                            Grade 1
                          </button>

                          <button
                            className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start"
                            onClick={() => setPlaceholderValue1("Grade 2")}>
                            Grade 2
                          </button>

                          <button
                            className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start mb-[14px]"
                            onClick={() => setPlaceholderValue1("Grade 3")}>
                            Grade 3
                          </button>

                          <button
                            className="py-[10px] px-[24px] text-[16px] text-[#E1261C] w-full text-start ml-[5px]"
                            style={{ borderTop: "1px solid #DADADD" }}
                            onClick={() =>
                              setPlaceholderValue1("Not up to standard")
                            }>
                            Not up to standard
                          </button>
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  </div>
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
                <Search />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-31 pt-[clamp(88px,7vw,120px)]">
          <div className="relative w-[237px] h-[183px]">
            <Image src="empty-activity.svg" alt="empty" fill></Image>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#4A4C58] text-20">No recent activity</h3>
            <p className="text-[#8F9198] text-14">
              Your performed activities will show here.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-[clamp(180px,14vw,200px)] w-full text-[#49474D] px-40 text-14 divtable">
      <div
        className="w-full px-40 py-40 flex justify-between bg-white"
        style={{ borderBottom: "1px solid #C1C2C6" }}>
        <h3 className="#4A4C58 text-16">Activities</h3>

        <div className="relative">
          <div
            className="py-24 px-20 border border-[#F0F0F1] bg-white w-[clamp(180px,23vw,350px)] flex-col gap-12 rounded-xl absolute z-10 -left-[130%]"
            style={{
              boxShadow: "-4px 6px 20px 0px rgba(0, 0, 0, 0.10)",
              display: showFilter,
            }}>
            <div className="grid gap-2">
              <h3 className="text-[#C1C2C6] text-12">Commodity</h3>
              <div className="flex gap-x-2 gap-y-16 flex-wrap !mb-16">
                <button
                  className="px-2 py-1 rounded-lg text-white bg-[#195B3E] text-12 flex justify-center"
                  style={{ border: "0.5px solid #195B3E" }}>
                  All
                </button>

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

              <div className="flex !gap-16 flex-col">
                <h3 className="text-[#C1C2C6] text-12">Status</h3>
                <div className="w-full">
                  <Popover
                    width="target"
                    position="bottom"
                    shadow="sm"
                    classNames={{
                      dropdown:
                        "flex flex-col gap-[12px] py-[24px] px-[10px] rounded-lg",
                    }}>
                    <Popover.Target>
                      <Button
                        classNames={{
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[52px]",
                          label:
                            "flex !justify-between !w-full !py-[14px] !px-16",
                        }}>
                        <h2 className="text-[#C1C2C6] text-16">
                          {placeholderValue}
                        </h2>
                        <div className="relative w-[20px] h-[20px]">
                          <Image
                            src="/popover-dropdown.svg"
                            fill
                            alt=""></Image>
                        </div>
                      </Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className="">
                        <button
                          className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start font-normal"
                          onClick={() => setPlaceholderValue("Accepted")}>
                          Accepted
                        </button>

                        <button
                          className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start"
                          onClick={() => setPlaceholderValue("Rejected")}>
                          Rejected
                        </button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </div>
              </div>

              <div className="flex !gap-16 flex-col pt-16">
                <h3 className="text-[#C1C2C6] text-12">Results</h3>
                <div className="w-full">
                  <Popover
                    width="target"
                    position="bottom"
                    shadow="sm"
                    classNames={{
                      dropdown:
                        "flex flex-col gap-[12px] py-[24px] px-[10px] rounded-lg",
                    }}>
                    <Popover.Target>
                      <Button
                        classNames={{
                          root: "!bg-[white] !px-0 !text-[12px] !w-full !text-[#8F9198] !text-12 rounded-lg !border border-[#DADADD] !font-normal !h-[52px]",
                          label:
                            "flex !justify-between !w-full !py-[14px] !px-16",
                        }}>
                        <h2 className="text-[#C1C2C6] text-16">
                          {placeholderValue1}
                        </h2>
                        <div className="relative w-[20px] h-[20px]">
                          <Image
                            src="/popover-dropdown.svg"
                            fill
                            alt=""></Image>
                        </div>
                      </Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className="">
                        <button
                          className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start font-normal"
                          onClick={() => setPlaceholderValue1("Grade 1")}>
                          Grade 1
                        </button>

                        <button
                          className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start"
                          onClick={() => setPlaceholderValue1("Grade 2")}>
                          Grade 2
                        </button>

                        <button
                          className="py-[10px] px-[24px] rounded text-[16px] text-[#4A4C58] w-full text-start mb-[14px]"
                          onClick={() => setPlaceholderValue1("Grade 3")}>
                          Grade 3
                        </button>

                        <button
                          className="py-[10px] px-[24px] text-[16px] text-[#E1261C] w-full text-start ml-[5px]"
                          style={{ borderTop: "1px solid #DADADD" }}
                          onClick={() =>
                            setPlaceholderValue1("Not up to standard")
                          }>
                          Not up to standard
                        </button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </div>
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
              <Search />
            </div>
          </div>
        </div>
      </div>
      <Table striped highlightOnHover verticalSpacing={16}>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Action</th>
            <th>Commodity</th>
            <th>
              <span className="flex items-center gap-2">
                <span>User</span>
                <img src="/up-down-arrow.svg" alt="" className="w-4 h-4" />
              </span>
            </th>
            <th>
              <span className="flex items-center gap-2">
                Status
                <img src="/up-down-arrow.svg" alt="" className="w-4 h-4" />
              </span>
            </th>
            <th>
              <span className="flex items-center gap-2">
                Result
                <img src="/up-down-arrow.svg" alt="" className="w-4 h-4" />
              </span>
            </th>
            <th>
              <span className="flex items-center gap-2">
                Date
                <img src="/up-down-arrow.svg" alt="" className="w-4 h-4" />
              </span>
            </th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
      <div className="flex justify-between items-center mt-31">
        <button
          className="px-[14px] py-10 flex gap-2 border border-[#DBD9D9] bg-white rounded-lg items-center"
          onClick={handlePrevPage}
          disabled={activePage === 1}>
          <div className="relative w-16 h-16">
            <Image src="/prev.svg" alt="prev icon" fill></Image>
          </div>
          <h3 className="text-[#514747] text-14 font-medium">Prev</h3>
        </button>
        <Pagination
          value={activePage}
          onChange={setPage}
          total={Math.ceil(tableList.length / itemsPerPage)}
          styles={(theme) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "#195B3E",
                  to: "#195B3E",
                }),
                border: 0,
              },
            },
          })}
        />
        <button
          className="px-[14px] py-10 flex gap-2 border border-[#DBD9D9] bg-white rounded-lg items-center"
          onClick={handleNextPage}
          disabled={activePage === 10}>
          <h3 className="text-[#514747] text-14 font-medium">Next</h3>
          <div className="relative w-16 h-16">
            <Image src="/nextIcon.svg" alt="next icon" fill></Image>
          </div>
        </button>
      </div>
    </div>
  );
}

export default MainActivity;
