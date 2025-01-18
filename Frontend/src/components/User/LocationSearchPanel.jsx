import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanelOpen(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {suggestions.map((elem, index) => (
        <div
          key={index}
          className="flex items-center gap-2 rounded-xl border-[3px] border-white active:border-black"
          onClick={() => handleSuggestionClick(elem)}
        >
          <div className="flex items-center justify-center w-[10vw] h-[10vw]">
            <h2 className="h-8 w-8 flex items-center justify-center bg-[#eee] rounded-full text-lg">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
          </div>
          <div className="">
            <h4 className="text-sm text-gray-500 leading-tight">{elem}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
