import React from "react";

const ConfirmRide = (props) => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 relative">
      <div className="text-2xl font-bold flex items-center gap-3">
        <h2>Confirm your Ride</h2>
        <div
          className="text-2xl font-medium text-center text-gray-300 "
          onClick={() => {
            props.setConfirmRidePanelOpen(false);
            props.setVehiclePanelOpen(true);
          }}
        >
          <i className="ri-arrow-down-wide-line"></i>
        </div>
      </div>
      <div className="">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="vehicle"
          className="h-24"
        />
      </div>
      <div className="flex flex-col gap-3 border-t-2 py-3">
        {/* PICK-UP LOCATION */}
        <div className="flex items-center gap-3">
          <div className="text-xl">
            <i className="ri-map-pin-user-fill"></i>
          </div>
          <div className="">
            <h4 className="font-semibold text-lg">Phoenix Marketcity</h4>
            <h5 className="text-sm text-gray-500 leading-tight">
              Whitefield Rd, Devasandra Industrial Estate, Mahadevapura,
              Bengaluru, Karnataka
            </h5>
          </div>
        </div>
        {/* DESTINATON */}
        <div className="flex items-center gap-3 border-y-2 py-2">
          <div className="text-xl">
            <i className="ri-map-2-line"></i>
          </div>
          <div className="">
            <h4 className="font-semibold text-lg">Phoenix Marketcity</h4>
            <h5 className="text-sm text-gray-500 leading-tight">
              Whitefield Rd, Devasandra Industrial Estate, Mahadevapura,
              Bengaluru, Karnataka
            </h5>
          </div>
        </div>
        {/* FARE */}
        <div className="flex items-center gap-3">
          <div className="text-xl">
            <i className="ri-bank-card-2-fill"></i>
          </div>
          <div className="">
            <h4 className="font-semibold text-lg">₹193.20</h4>
            <h5 className="text-sm text-gray-500 leading-tight">Cash</h5>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          props.setLookingForDriverPanelOpen(true);
          props.setConfirmRidePanelOpen(false);
        }}
        className="bg-green-500 w-full py-2 rounded-lg text-white font-semibold"
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
