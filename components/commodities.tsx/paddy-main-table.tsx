import clsx from "clsx";
import Image from "next/image";
import React from "react";

const paddyMainTableList: PaddyMainTableListProps[] = [
  {
    id: "1",
    grade: "Grade 1",
    status: "Failed",
  },

  {
    id: "2",
    grade: "Grade 2",
    status: "Success",
  },

  {
    id: "1",
    grade: "Grade 1",
    status: "Failed",
  },

  {
    id: "2",
    grade: "Grade 2",
    status: "Success",
  },

  {
    id: "1",
    grade: "Grade 1",
    status: "Failed",
  },

  {
    id: "2",
    grade: "Grade 2",
    status: "Success",
  },

  {
    id: "1",
    grade: "Grade 1",
    status: "Failed",
  },

  {
    id: "2",
    grade: "Grade 2",
    status: "Success",
  },

  {
    id: "1",
    grade: "Grade 1",
    status: "Failed",
  },
];

const grade1 = paddyMainTableList.filter((item) => item.grade === "Grade 1");
const grade2 = paddyMainTableList.filter((item) => item.grade === "Grade 2");

const grade3 = paddyMainTableList.filter((item) => item.grade === "Grade 3");

interface PaddyMainTableListProps {
  id: string;
  grade: string;
  status: string;
}

function PaddyMainTable({ list }: { list: string }) {
  console.log(list);
  return (
    <tbody className="w-full">
      {(list == "Grade1"
        ? grade1
        : list == "Grade2"
        ? grade2
        : list == "Grade3"
        ? grade3
        : list === "all"
        ? paddyMainTableList
        : []
      ).map(({ id, grade, status }) => (
        <tr key={id}>
          <td>
            <article className="gap-12 flex items-center">
              <figure className="relative rounded-lg w-31 h-31">
                <Image
                  src="/paddy-rice.svg"
                  fill
                  alt="paddy-rice image"></Image>
              </figure>
              <h3 className="text-[#101828] text-14 font-medium">Paddy Rice</h3>
            </article>
          </td>

          <td>
            <span className="text-[#667085] text-14">{grade}</span>
          </td>

          <td>
            {status === "Success" ? (
              <figure className="flex items-center gap-2 bg-[#ECFDF3] rounded w-fit py-[4px] px-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#12B76A]"></span>
                <h3 className={"text-14 font-medium text-[#027A48]"}>
                  {status}
                </h3>
              </figure>
            ) : (
              <figure className="flex items-center gap-2 rounded w-fit py-[4px] px-[10px] bg-[#FFF1F3]">
                <span className="w-2 h-2 rounded-full bg-[#F63D68]"></span>
                <h3 className={`text-14 font-medium text-[#C01048]`}>
                  {status}
                </h3>
              </figure>
            )}
          </td>
          <td>
            <span className="text-[#667085] text-14">Jan 4, 2022</span>
          </td>
          <td>
            {" "}
            <span className="text-[#667085] text-14">Abdulrasheed Basit</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default PaddyMainTable;
