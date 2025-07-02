import { ChevronRight, Bell, Search } from "lucide-react"; // or Heroicons
import { BsThreeDots } from "react-icons/bs";

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px] border-gray-200">
      <div className="flex items-center gap-1 text-sm font-medium font-body text-[#AFAFAF]">
        <div className="flex items-center gap-4">
          <div className="w-5 relative h-4 rounded-sm border border-[#618666]">
            <div className="w-1.5 absolute right-0 h-full rounded-br-xs rounded-tr-xs bg-[#618666]"></div>
          </div>
          <span>Workspace</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span>Folder 2</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-[#121212] font-medium">Spreadsheet 3</span>
        <button className="text-gray-400 px-1 text-lg leading-none">
          <BsThreeDots className="w-5 h-5 m-1" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-3 w-4 h-4 text-[#AFAFAF]" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-10 pr-0.5 py-3 text-xs font-normal rounded-md border-none bg-[#F6F6F6] placeholder:text-[#757575] focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="relative">
          <Bell className="w-6 h-6 text-[#121212]" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#4B6A4F] text-[#F6F6F6] text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="flex items-center gap-2 pl-1">
          <img
            src="avatar.png"
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <div className="text-left">
            <div className="text-xs font-normal text-[#121212]">John Doe</div>
            <div className="text-[10px] font-normal text-[#757575] truncate w-[100px]">
              john.doe@email.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
