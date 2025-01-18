import React from "react";

const LookingForDriver = (props) => {
  return (
    <div className="flex flex-col items-center gap-3 p-3 relative">
      <div className="text-2xl font-bold flex items-center gap-3">
        <h2>Looking for a Driver</h2>
      </div>
      <div className="">
        {props.vehicleType === "car" ? (
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt="car"
            className="h-24"
          />
        ) : props.vehicleType === "moto" ? (
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="bike"
            className="h-24"
          />
        ) : (
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="auto"
            className="h-24"
          />
        )}
      </div>
      <div className="flex flex-col gap-3 border-t-2 py-3">
        {/* PICK-UP LOCATION */}
        <div className="flex items-center gap-3">
          <div className="text-xl text-gray-600">
            <i className="ri-map-pin-user-fill"></i>
          </div>
          <div className="">
            <h5 className="font-medium text-gray-800">{props.pickup}</h5>
          </div>
        </div>
        {/* DESTINATON */}
        <div className="flex items-center gap-3 border-y-2 py-2">
          <div className="text-xl text-gray-600">
            <i className="ri-map-2-line"></i>
          </div>
          <div className="">
            <h5 className="font-medium text-gray-800">{props.destination}</h5>
          </div>
        </div>
        {/* FARE */}
        <div className="flex items-center gap-3">
          <div className="text-xl text-gray-600">
            <i className="ri-bank-card-2-fill"></i>
          </div>
          <div className="">
            <h4 className="font-semibold text-lg">
              ₹{props.fare[props.vehicleType]}
            </h4>
            <h5 className="text-sm text-gray-500 leading-tight">Cash</h5>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          props.setLookingForDriverPanelOpen(false);
          props.setConfirmRidePanelOpen(true);
        }}
        className="bg-red-700 opacity-90 w-full py-2 rounded-lg text-white font-semibold"
      >
        Cancel Ride
      </button>
    </div>
  );
};

export default LookingForDriver;
