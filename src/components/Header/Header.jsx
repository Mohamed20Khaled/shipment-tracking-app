import { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSearch = () => {
    if (trackingNumber.trim()) {
      console.log("Searching for:", trackingNumber);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const items = [
    {
      key: language === "en" ? "ar" : "en",
      label: (
        <span className="text-gray-700">
          {language === "en" ? "العربية" : "ENG"}
        </span>
      ),
      onClick: () => setLanguage(language === "en" ? "ar" : "en"),
      className:
        "hover:bg-transparent focus:bg-transparent active:bg-transparent",
    },
  ];

  return (
    <header className="relative w-full bg-[#F3FAFB] shadow-md z-40 pt-8">
      <div className="px-6 py-4 flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <img src="/src/assets/En.logo.png" alt="Bosta Logo" className="h-8" />
        </div>

        <div className="flex items-center gap-2">
          <Dropdown
            menu={{
              items,
              style: {
                backgroundColor: "#F3FAFB",
                boxShadow: "none",
                border: "none",
                outline: "none",
              },
            }}
            placement="bottomRight"
            trigger={["click"]}
            overlayStyle={{ background: "transparent" }}
          >
            <button className="flex items-center gap-1 text-m bg-[#F3FAFB] text-gray-700 hover:text-gray-700">
              {language === "en" ? "ENG" : "العربية"}
              <DownOutlined className="text-xs" />
            </button>
          </Dropdown>
        </div>
      </div>

      {/* Bottom Section - Search Bar */}
      <div className="px-6 pt-16 pb-8 max-w-[1440px] mx-auto">
        <div className="max-w-md mx-auto flex flex-col items-center gap-1">
          <img
            src="/src/assets/pin.png"
            alt="Location Pin"
            className="w-200 h-150"
          />
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-1">
            Track Your Order
          </h1>
          {/* Overlapping Search Bar */}
          <div className="relative w-full translate-y-16">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your shipment"
              className="w-full px-4 py-5 pr-12 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 border-0 text-lg"
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full flex items-center justify-center px-3 bg-red-600 rounded-r-lg hover:bg-red-700 transition-colors border-0 outline-none"
            >
              <SearchOutlined className="text-white text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
