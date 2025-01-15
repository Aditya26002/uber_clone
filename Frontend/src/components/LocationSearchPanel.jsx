import React from "react";

const LocationSearchPanel = (props) => {
  return (
    <div
      className="flex items-center gap-2 rounded-xl border-[3px] border-white active:border-black"
      onClick={() => {
        props.setVehiclePanelOpen(true);
        props.setPanelOpen(false);
      }}
    >
      <div className="flex items-center justify-center w-[10vw] h-[10vw]">
        <h2 className="h-8 w-8 flex items-center justify-center bg-[#eee] rounded-full text-lg">
          <i className="ri-map-pin-2-fill"></i>
        </h2>
      </div>
      <div className="">
        <h3 className="font-semibold">Phoenix Marketcity</h3>
        <h4 className="text-sm text-gray-500 leading-tight">
          Whitefield Rd, Devasandra Industrial Estate, Mahadevapura, Bengaluru,
          Karnataka
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;