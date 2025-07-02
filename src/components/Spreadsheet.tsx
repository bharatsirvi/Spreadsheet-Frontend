import type { RowData } from "../types/Row";
import { rows } from "../data/rows";
import StatusBadge from "./table/StatusBadge";
import PriorityLabel from "./table/PriorityLabel";
import { RefreshCw, Link2 } from "lucide-react";
import { PiArrowsSplit } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {
  MdAssignmentInd,
  MdBusinessCenter,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { FaClock, FaUser } from "react-icons/fa6";
import { HiMiniHashtag } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Spreadsheet = () => {
  return (
    <div className="overflow-y-scroll border border-gray-100 font-[400] rounded-md shadow bg-white font-body">
      <div className="overflow-y-auto max-h-[calc(100vh-150px)]">
        <table className="min-w-full table-fixed text-sm border-collapse">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className="text-sm text-[#545454] h-8">
              <th className="bg-[#f5f6f8] w-8   border-t-0 border-gray-100"></th>
              <th
                colSpan={4}
                className="bg-[#E2E2E2] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex items-center gap-1 text-sm text-[#545454]">
                  <div className="flex items-center gap-2 bg-[#EEEEEE] px-2 py-1.5 rounded-md">
                    <Link2 className="w-4 h-4 text-[#1A8CFF]" />
                    <span className="font-[400] text-xs text-[#545454]">
                      Q3 Financial Overview
                    </span>
                  </div>
                  <RefreshCw className="w-4 h-4 text-orange-500 animate-spin-slow ml-2" />
                </span>
              </th>
              <th colSpan={1} />
              <th
                colSpan={1}
                className="bg-[#D2E0D4] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <PiArrowsSplit className="w-4 h-4 text-[#A3ACA3]" />
                  <span>ABC</span>
                  <BsThreeDots className="text-gray-400" />
                </span>
              </th>
              <th
                colSpan={2}
                className="bg-[#DCCFFC] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <PiArrowsSplit className="w-4 h-4 text-white" />
                  <span>Answer a question</span>
                  <BsThreeDots className="text-gray-400" />
                </span>
              </th>
              <th
                colSpan={1}
                className="bg-[#FAC2AF] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <PiArrowsSplit className="w-4 h-4 text-white" />
                  <span>Extract</span>
                  <BsThreeDots className="text-gray-400" />
                </span>
              </th>
              <th className="bg-[#f5f6f8] w-30  font-[400] text-[#463E59] border-gray-100">
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <AiOutlinePlus size={20} />
                </span>
              </th>
            </tr>

            <tr className="bg-[#EEEEEE] h-8 text-[#757575] text-xs font-semibold">
              <th className="px-2 py-1 text-center text-gray-400 border border-gray-100">
                <HiMiniHashtag className="w-5 h-5 text-[#AFAFAF] mx-auto" />
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MdBusinessCenter className="w-4 h-4 text-[#AFAFAF]" /> Job
                    Request
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <IoCalendar className="w-3.5 h-3.5 text-[#AFAFAF]" />{" "}
                    Submitted
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FaClock className="w-3 h-3 text-[#AFAFAF]" /> Status
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FaUser className="w-3 h-3 text-[#AFAFAF]" /> Submitter
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <TbWorld className="w-4 h-4 text-[#AFAFAF]" /> URL
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100 bg-[#E8F0E9]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MdAssignmentInd className="w-4 h-4 text-[#AFAFAF]" />{" "}
                    Assigned
                  </span>
                  <MdKeyboardArrowDown className="w-4 h-4 text-[#AFAFAF]" />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100 bg-[#EAE3FC] text-left">
                Priority
              </th>
              <th className="px-2 py-1 border border-gray-100 bg-[#EAE3FC] text-left">
                Due Date
              </th>
              <th className="px-2 py-1 border border-gray-100 bg-[#FFE9E0] text-left">
                Est. Value
              </th>
              <th className="px-2 py-1 text-center bg-white text-gray-400 border border-gray-100"></th>
            </tr>
          </thead>

          <tbody>
            {(
              [
                ...rows,
                ...Array.from({ length: 50 - rows.length }).map(
                  () => undefined
                ),
              ] as (RowData | undefined)[]
            ).map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 h-8 text-xs text-[#121212]"
              >
                <td className="px-2 py-1 border border-gray-200 text-center text-gray-500">
                  {idx + 1}
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  {row?.jobRequest || ""}
                </td>
                <td className="px-2 py-1 border border-gray-200 text-left">
                  {row?.submitted || ""}
                </td>
                <td className="px-2 py-1 border border-gray-200 text-center">
                  {row?.status ? <StatusBadge status={row.status} /> : ""}
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  {row?.submitter || ""}
                </td>
                <td className="px-2 py-1 border border-gray-200 max-w-[140px] truncate">
                  {row?.url ? (
                    <a
                      href={`https://${row.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {row.url}
                    </a>
                  ) : (
                    ""
                  )}
                </td>
                <td className="px-2 py-1 border border-gray-200">
                  {row?.assigned || ""}
                </td>
                <td className="px-2 py-1 border border-gray-200 text-center">
                  {row?.priority ? (
                    <PriorityLabel priority={row.priority} />
                  ) : (
                    ""
                  )}
                </td>
                <td className="px-2 py-1 border border-gray-200 text-right">
                  {row?.dueDate || ""}
                </td>
                <td className="px-2 py-1 border border-gray-200 text-right">
                  {row?.estValue ? `${row.estValue.toLocaleString()}` : ""}
                  {row?.estValue ? (
                    <span className="text-[#AFAFAF]"> ₹</span>
                  ) : (
                    ""
                  )}
                </td>
                <td className="w-30 py-1 border border-gray-200 text-center text-gray-400"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
