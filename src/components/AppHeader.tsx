import { ChevronRight, Bell, Search } from "lucide-react"; // or Heroicons

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px] border-gray-200">
      <div className="flex items-center gap-1 text-sm font-sans text-gray-500">
        <div className="flex items-center gap-4">
          <div className="w-5 relative h-4 rounded-sm border border-[#4B6A4F]">
            <div className="w-1.5 absolute right-0 h-full rounded-br-xs rounded-tr-xs bg-[#4B6A4F]"></div>
          </div>
          <span>Workspace</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span>Folder 2</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-black font-medium">Spreadsheet 3</span>
        <button className="text-gray-400 px-1 text-lg leading-none">•••</button>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-7 pr-3 py-1.5 text-sm rounded-md border border-gray-200 bg-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute -top-1 -right-2 bg-[#4B6A4F] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="avatar.png"
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500 truncate w-[100px]">
              john.doe@email.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
