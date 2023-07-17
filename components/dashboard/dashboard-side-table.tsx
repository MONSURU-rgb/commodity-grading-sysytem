import { Table } from "@mantine/core";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const dashSideTableData = [
  {
    imagesrc: "/paddy-dash.svg",
    title: "Paddy Rice",
    totalScans: "1520 total scans",
    link: "/paddy-rice-commodities",
  },

  {
    imagesrc: "/cocoa-dash.png",
    title: "Cocoa Beans",
    totalScans: "1520 total scans",
    link: "",
  },

  {
    imagesrc: "/wheat-dash.svg",
    title: "Wheat",
    totalScans: "1520 total scans",
    link: "",
  },

  {
    imagesrc: "/groundnut-dash.svg",
    title: "Groundnut",
    totalScans: "1520 total scans",
    link: "",
  },

  {
    imagesrc: "/ginger-dash.svg",
    title: "Dried Split Ginger",
    totalScans: "1520 total scans",
    link: "",
  },
];

interface SideTableData {
  imagesrc: string;
  title: string;
  totalScans: string;
  link: string;
}

function DashboardSideTable() {
  return (
    <div className="pb-24 px-16 bg-white rounded-xl text-16 !text-[#5E606A] !h-fit">
      <section className="flex flex-col gap-1 pb-24">
        <h2 className="text-[#4A4C58] text-16">
          Commodities{" "}
          <span className="text-[#8F9198]">(Top scans this week)</span>
        </h2>
        <h4 className="text-[#8F9198] text-12">24 June, 2023</h4>
      </section>
      <Table striped highlightOnHover verticalSpacing={16}>
        <tbody>
          <section className="grid gap-16">
            {dashSideTableData.map(
              ({ imagesrc, title, totalScans, link }: SideTableData) => (
                <tr key={title}>
                  <section className="flex justify-between">
                    <article className="flex gap-3">
                      <p className="relative rounded-full w-31 h-31">
                        <Image src={imagesrc} fill alt={title}></Image>
                      </p>

                      <article>
                        <h2 className="text-16 font-medium leading-[150%]">
                          {title}
                        </h2>

                        <h4 className="text-8">{totalScans}</h4>
                      </article>
                    </article>

                    <Link href={link} className="text-12 text-[#076D3A]">
                      View
                    </Link>
                  </section>
                </tr>
              )
            )}
          </section>
        </tbody>
      </Table>
    </div>
  );
}

export default DashboardSideTable;
