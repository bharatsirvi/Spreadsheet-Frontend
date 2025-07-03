import {
  EyeOff,
  ArrowDownUp,
  ListFilter,
  UnfoldVertical,
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiArrowsSplit } from "react-icons/pi";

const Toolbar = () => {
  const handleToolbarClick = () => {
    console.log("Toolbar toggled");
  };

  const handleHideFields = () => {
    console.log("Hide fields clicked");
  };

  const handleSort = () => {
    console.log("Sort clicked");
  };

  const handleFilter = () => {
    console.log("Filter clicked");
  };

  const handleCellView = () => {
    console.log("Cell view clicked");
  };

  const handleImport = () => {
    console.log("Import clicked");
  };

  const handleExport = () => {
    console.log("Export clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  const handleNewAction = () => {
    console.log("New Action clicked");
  };
  return (
    <div
      className="flex items-center justify-between px-4 py-1 bg-white border-b-[1px] border-gray-200 text-sm font-normal"
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center font-normal text-sm text-[#121212] gap-5">
        <span
          onClick={handleToolbarClick}
          className="flex items-center gap-1 cursor-pointer"
        >
          Tool bar{" "}
          <MdKeyboardDoubleArrowRight className="text-[#121212] w-5 h-5" />
        </span>
        <div className="w-[1px] h-6 bg-[#EEEEEE]"></div>
        <button
          className="flex items-center gap-1 hover:text-black cursor-pointer"
          onClick={handleHideFields}
        >
          <EyeOff className="w-4 h-4" />
          Hide fields
        </button>
        <button
          className="flex items-center gap-1 hover:text-black cursor-pointer"
          onClick={handleSort}
        >
          <ArrowDownUp className="w-4 h-4" />
          Sort
        </button>
        <button
          className="flex items-center gap-1 hover:text-black cursor-pointer"
          onClick={handleFilter}
        >
          <ListFilter className="w-4 h-4" />
          Filter
        </button>
        <button
          className="flex items-center gap-1 hover:text-black cursor-pointer"
          onClick={handleCellView}
        >
          <UnfoldVertical className="w-4 h-4" />
          Cell view
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <button
          className="flex items-center gap-1 px-3 py-2  border border-gray-300 rounded-md text-[#545454] hover:bg-gray-50 cursor-pointer"
          onClick={handleImport}
        >
          <ArrowDownToLine className="w-5 h-5" />
          Import
        </button>
        <button
          className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md text-[#545454] hover:bg-gray-50 cursor-pointer"
          onClick={handleExport}
        >
          <ArrowUpToLine className="w-5 h-5" />
          Export
        </button>
        <button
          className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md text-[#545454] hover:bg-gray-50 cursor-pointer"
          onClick={handleShare}
        >
          <FaRegShareFromSquare className="w-5 h-5" />
          Share
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#4B6A4F] text-white rounded-md hover:[#4B6A4F] cursor-pointer"
          onClick={handleNewAction}
        >
          <PiArrowsSplit className="w-5 h-5" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
