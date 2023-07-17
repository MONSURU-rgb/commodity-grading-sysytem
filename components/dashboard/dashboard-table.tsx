import React from "react";
import { Search } from "../activity/search-icon";
import { RoundFilter } from "../activity/filtericon";
import { Table } from "@mantine/core";
import clsx from "clsx";
import { Input } from "@mantine/core";
import { tableList } from "../activity/tableListData";
import { rowData } from "./row-data";
import TableHeader from "../commodities.tsx/tableheader";

function DashboardTable() {
  return (
    <div className="text-[#4A4C58] text-14 divtable rounded-xl pb-23 bg-white px-31 !max-h-[450px] overflow-y-scroll scroll-bar-hidden relative">
      <TableHeader text="Commodity users’ activities" />

      <div className="!text-14">
        <Table striped highlightOnHover verticalSpacing={16}>
          <thead>
            <tr>
              <th>Action</th>
              <th>Commodity</th>
              <th>Grades</th>
              <th>
                <span className="flex items-center gap-2">
                  <span>Date</span>
                  <img src="/up-down-arrow.svg" alt="" className="w-4 h-4" />
                </span>
              </th>
              <th>Action by</th>
            </tr>
          </thead>
          <tbody>{rowData}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default DashboardTable;
