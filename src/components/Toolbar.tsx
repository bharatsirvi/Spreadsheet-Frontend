import {
  EyeOff,
  ArrowDownUp,
  ListFilter,
  UnfoldVertical,
  ArrowDownToLine,
  ArrowUpToLine,
  GitFork,
} from "lucide-react";
import { FaRegShareFromSquare } from "react-icons/fa6";

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px] border-gray-200 text-sm font-normal">
      <div className="flex items-center gap-5 text-gray-600">
        <span className="flex items-center gap-1">
          Tool bar <span className="text-gray-400">»</span>
        </span>
        <button className="flex items-center gap-1 hover:text-black">
          <EyeOff className="w-4 h-4" />
          Hide fields
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <ArrowDownUp className="w-4 h-4" />
          Sort
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <ListFilter className="w-4 h-4" />
          Filter
        </button>
        <button className="flex items-center gap-1 hover:text-black">
          <UnfoldVertical className="w-4 h-4" />
          Cell view
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <ArrowDownToLine className="w-4 h-4" />
          Import
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <ArrowUpToLine className="w-4 h-4" />
          Export
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <FaRegShareFromSquare className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-2 px-4 py-1.5 bg-[#4B6A4F] text-white rounded-md hover:bg-green-800">
          <GitFork className="w-4 h-4 rotate-180" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
