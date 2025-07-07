import { useState } from "react";
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

const columns = [
  { key: "jobRequest", align: "left" },
  { key: "submitted", align: "left" },
  { key: "status", align: "center" },
  { key: "submitter", align: "left" },
  { key: "url", align: "left" },
  { key: "assigned", align: "left" },
  { key: "priority", align: "center" },
  { key: "dueDate", align: "right" },
  { key: "estValue", align: "right" },
];

const Spreadsheet = () => {
  const [editCell, setEditCell] = useState<{ row: number; col: number } | null>(
    null
  );
  const [tempValue, setTempValue] = useState<string>("");

  const handleHeaderPlusClick = () => {
    console.log("Header plus button clicked");
  };

  const handleHeaderMoreClick = (header: string) => {
    console.log(`More clicked for : ${header}`);
  };

  const handleColumnDropdownClick = (column: string) => {
    console.log(`Dropdown clicked for column: ${column}`);
  };
  const handleRefreshClick = () => {
    console.log("Refresh clicked");
  };

  const getCellValue = (row: RowData | undefined, col: string) => {
    if (!row) return "";
    if (col === "priority" && row.priority)
      return <PriorityLabel priority={row.priority} />;
    if (col === "status" && row.status)
      return <StatusBadge status={row.status} />;
    if (col === "url" && row.url)
      return (
        <a
          href={`https://${row.url}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {row.url}
        </a>
      );
    if (col === "estValue" && row.estValue)
      return (
        <>
          {row.estValue.toLocaleString()}
          <span className="text-[#AFAFAF]"> ₹</span>
        </>
      );
    return row[col as keyof RowData] || "";
  };

  const handleCellKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    rowIdx: number,
    colIdx: number
  ) => {
    if (e.key === "Enter" || e.key === "Tab") {
      setEditCell(null);
      return;
    }
    if (e.key === "Escape") {
      setEditCell(null);
      return;
    }
    if (e.key === "ArrowRight") {
      const nextCol = Math.min(colIdx + 1, columns.length - 1);
      setEditCell({ row: rowIdx, col: nextCol });
      setTempValue(
        rows[rowIdx] ? String(rows[rowIdx][columns[nextCol].key] ?? "") : ""
      );
      setTimeout(() => {
        const next = document.getElementById(
          `cell-input-${rowIdx}-${nextCol}`
        );
        next?.focus();
      }, 0);
    }
    if (e.key === "ArrowLeft") {
      const prevCol = Math.max(colIdx - 1, 0);
      setEditCell({ row: rowIdx, col: prevCol });
      setTempValue(
        rows[rowIdx] ? String(rows[rowIdx][columns[prevCol].key] ?? "") : ""
      );
      setTimeout(() => {
        const prev = document.getElementById(
          `cell-input-${rowIdx}-${prevCol}`
        );
        prev?.focus();
      }, 0);
    }
    if (e.key === "ArrowDown") {
      const nextRow = rowIdx + 1;
      setEditCell({ row: nextRow, col: colIdx });
      setTempValue(
        rows[nextRow] ? String(rows[nextRow][columns[colIdx].key] ?? "") : ""
      );
      setTimeout(() => {
        const down = document.getElementById(
          `cell-input-${nextRow}-${colIdx}`
        );
        down?.focus();
      }, 0);
    }
    if (e.key === "ArrowUp") {
      const prevRow = Math.max(rowIdx - 1, 0);
      setEditCell({ row: prevRow, col: colIdx });
      setTempValue(
        rows[prevRow] ? String(rows[prevRow][columns[colIdx].key] ?? "") : ""
      );
      setTimeout(() => {
        const up = document.getElementById(
          `cell-input-${prevRow}-${colIdx}`
        );
        up?.focus();
      }, 0);
    }
  };

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
                  <div className="flex items-center gap-2 bg-[#EEEEEE] px-2 py-1 rounded-md">
                    <Link2 className="w-4 h-4 text-[#1A8CFF]" />
                    <span className="font-[400] text-xs text-[#545454]">
                      Q3 Financial Overview
                    </span>
                  </div>
                  <RefreshCw
                    onClick={handleRefreshClick}
                    className="w-4 h-4 text-[#FA6736] animate-spin-slow ml-2 cursor-pointer"
                  />
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
                  <BsThreeDots
                    onClick={() => handleHeaderMoreClick("ABC")}
                    className="text-[#AFAFAF] cursor-pointer"
                  />
                </span>
              </th>
              <th
                colSpan={2}
                className="bg-[#DCCFFC] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <PiArrowsSplit className="w-4 h-4 text-white" />
                  <span>Answer a question</span>
                  <BsThreeDots
                    onClick={() => handleHeaderMoreClick("Answer a question")}
                    className="text-[#AFAFAF] cursor-pointer"
                  />
                </span>
              </th>
              <th
                colSpan={1}
                className="bg-[#FAC2AF] px-3 py-1  border-t-0 border-gray-100 text-left"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59]">
                  <PiArrowsSplit className="w-4 h-4 text-white" />
                  <span>Extract</span>
                  <BsThreeDots
                    onClick={() => handleHeaderMoreClick("Extract")}
                    className="text-[#AFAFAF] cursor-pointer"
                  />
                </span>
              </th>
              <th
                onClick={() => handleHeaderPlusClick()}
                className="bg-[#f5f6f8] w-30  font-[400] text-[#463E59] border-gray-100"
              >
                <span className="flex justify-center items-center gap-1.5 font-[500] text-[#463E59] cursor-pointer">
                  <AiOutlinePlus size={20} />
                </span>
              </th>
            </tr>

            <tr className="bg-[#EEEEEE] h-8 text-[#757575] text-xs font-semibold">
              <th className="px-2 py-1 text-center text-gray-400 border border-gray-100">
                <HiMiniHashtag className="w-5 h-5 text-[#AFAFAF] mx-auto" />
              </th>
              <th className="px-2 py-1 border border-gray-100 ">
                <div className="flex items-center justify-between ">
                  <span className="flex items-center gap-1">
                    <MdBusinessCenter className="w-4 h-4 text-[#AFAFAF]" /> Job
                    Request
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("Job Request")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <IoCalendar className="w-3.5 h-3.5 text-[#AFAFAF]" />{" "}
                    Submitted
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("Submitted")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FaClock className="w-3 h-3 text-[#AFAFAF]" /> Status
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("Status")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FaUser className="w-3 h-3 text-[#AFAFAF]" /> Submitter
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("Submitter")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <TbWorld className="w-4 h-4 text-[#AFAFAF]" /> URL
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("URL")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
                </div>
              </th>
              <th className="px-2 py-1 border border-gray-100 bg-[#E8F0E9]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MdAssignmentInd className="w-4 h-4 text-[#AFAFAF]" />{" "}
                    Assigned
                  </span>
                  <MdKeyboardArrowDown
                    onClick={() => handleColumnDropdownClick("Assigned")}
                    className="w-4 h-4 text-[#AFAFAF] cursor-pointer"
                  />
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

          <tbody className=" w-full">
            {(
              [
                ...rows,
                ...Array.from({ length: 50 - rows.length }).map(
                  () => undefined
                ),
              ] as (RowData | undefined)[]
            ).map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-gray-50 h-8 text-xs text-[#121212]"
              >
                <td className="px-2 py-1 border border-gray-100 text-center text-gray-500">
                  {rowIdx + 1}
                </td>
                {columns.map((col, colIdx) => (
                  <td
                    key={col.key}
                    className={`px-2 py-1 border text-${
                      col.align
                    } cursor-pointer ${
                      editCell &&
                      editCell.row === rowIdx &&
                      editCell.col === colIdx
                        ? "border-2 border-black"
                        : "border-gray-100"
                    }`}
                    onClick={() => {
                      setEditCell({ row: rowIdx, col: colIdx });
                      setTempValue(
                        row ? String(row[col.key as keyof RowData] ?? "") : ""
                      );
                    }}
                  >
                    {editCell &&
                    editCell.row === rowIdx &&
                    editCell.col === colIdx ? (
                      <input
                        id={`cell-input-${rowIdx}-${colIdx}`}
                        className="w-full rounded text-xs outline-none"
                        autoFocus
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        onBlur={() => setEditCell(null)}
                        onKeyDown={(e) => handleCellKeyDown(e, rowIdx, colIdx)}
                      />
                    ) : (
                      getCellValue(row, col.key)
                    )}
                  </td>
                ))}
                <td className="w-30 py-1 border border-gray-100 text-center text-gray-400"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spreadsheet;
