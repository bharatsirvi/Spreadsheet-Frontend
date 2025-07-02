import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const BottomPanel = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  return (
    <div className="flex h-12 ml-10 absolute bottom-0 left-0 right-0 z-10 pt-0.5 bg-[#FFFFFF]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2.5 text-[16px] relative
            ${
              activeTab === tab
                ? "text-[#3E5741] bg-[#E8F0E9] font-semibold"
                : "text-[#757575] hover:bg-gray-50 font-medium"
            }
          `}
        >
          <span className={activeTab === tab ? "font-semibold" : ""}>
            {tab}
          </span>
          {activeTab === tab && (
            <div className="absolute -top-[1px] left-0 right-0 h-0.5 bg-[#4B6A4F]" />
          )}
        </button>
      ))}

    
      <button className="px-4 py-2.5 text-[#757575] hover:bg-gray-100">
        <AiOutlinePlus size={20} />
      </button>
    </div>
  );
};

export default BottomPanel;
