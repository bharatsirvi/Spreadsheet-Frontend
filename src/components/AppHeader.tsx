import { ChevronRight, Bell, Search } from "lucide-react";
import { BsThreeDots } from "react-icons/bs";

const AppHeader = () => {
  const handleMoreClick = () => {
    console.log("More button clicked");
  };

  const handleWorkspaceClick = () => {
    console.log("Workspace clicked");
  };
  const handleFolderClick = () => {
    console.log("Folder clicked");
  };
  const handleSpreadsheetClick = () => {
    console.log("Spreadsheet clicked");
  };

  const handleNotificationClick = () => {
    console.log("Notification bell clicked");
  };

  const handleAvatarClick = () => {
    console.log("User avatar clicked");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search input changed:", e.target.value);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px] border-gray-200">
      <div className="flex items-center gap-1 text-sm font-medium font-body text-[#AFAFAF]">
        <div className="flex items-center gap-4">
          <div className="w-5 relative h-4 rounded-sm border border-[#618666]">
            <div className="w-1.5 absolute right-0 h-full rounded-br-xs rounded-tr-xs bg-[#618666]"></div>
          </div>
          <span className="cursor-pointer" onClick={handleWorkspaceClick}>
            Workspace
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="cursor-pointer" onClick={handleFolderClick}>
          Folder 2
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span
          className="text-[#121212] font-medium cursor-pointer"
          onClick={handleSpreadsheetClick}
        >
          Spreadsheet 3
        </span>
        <button
          className="text-gray-400 px-1 text-lg leading-none cursor"
          onClick={handleMoreClick}
        >
          <BsThreeDots className="w-5 h-5 m-1 cursor-pointer" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-3 w-4 h-4 text-[#AFAFAF]" />
          <input
            onChange={handleSearchChange}
            type="text"
            placeholder="Search within sheet"
            className="pl-10 pr-0.5 py-3 text-xs font-normal rounded-md border-none bg-[#F6F6F6] placeholder:text-[#757575] focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <button
          className="relative cursor-pointer"
          onClick={handleNotificationClick}
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-[#121212]" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#4B6A4F] text-[#F6F6F6] text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        <button
          className="flex items-center gap-2 pl-1 cursor-pointer"
          onClick={handleAvatarClick}
          aria-label="User profile"
        >
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
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
