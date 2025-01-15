import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <div className="text-2xl font-medium text-center pb-3 flex gap-3 items-center justify-center">
        <h2> Choose a Vehicle </h2>
        <div
          className=" text-gray-300"
          onClick={() => {
            props.setVehiclePanelOpen(false);
          }}
        >
          <i className="ri-arrow-down-wide-line"></i>
        </div>
      </div>
      {/* UberGo */}
      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt=""
              className="h-12"
            />
          </div>
          <div>
            <div className="flex">
              <h4 className="font-medium text-lg pr-2">UberGo</h4>
              <i className="ri-user-fill"></i>
              <h4>4</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <p>2 mins away</p>
              <div className="flex items-center justify-center text-[6px]">
                <i className="ri-circle-fill"></i>
              </div>
              <p>15:24</p>
            </div>
            <h4 className="text-gray-600 text-sm">Affordable, compact rides</h4>
          </div>
        </div>
        <h4 className="font-semibold">₹193.20</h4>
      </div>
      {/* Moto */}
      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              alt=""
              className="h-12 w-20 ml-1"
            />
          </div>
          <div>
            <div className="flex">
              <h4 className="font-medium text-lg pr-2">Moto</h4>
              <i className="ri-user-fill"></i>
              <h4>1</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <p>3 mins away</p>
              <div className="flex items-center justify-center text-[6px]">
                <i className="ri-circle-fill"></i>
              </div>
              <p>15:24</p>
            </div>
            <h4 className="text-gray-600 text-sm">
              Affordable motorcycle rides
            </h4>
          </div>
        </div>
        <h4 className="font-semibold">₹65.28</h4>
      </div>
      {/* UberAuto */}
      <div
        onClick={() => {
          props.setConfirmRidePanelOpen(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              alt=""
              className="h-12 w-20 ml-1 my-2"
            />
          </div>
          <div>
            <div className="flex">
              <h4 className="font-medium text-lg pr-2">UberAuto</h4>
              <i className="ri-user-fill"></i>
              <h4>3</h4>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <p>5 mins away</p>
              <div className="flex items-center justify-center text-[6px]">
                <i className="ri-circle-fill"></i>
              </div>
              <p>15:26</p>
            </div>
          </div>
        </div>
        <h4 className="font-semibold">₹113.20</h4>
      </div>
    </div>
  );
};

export default VehiclePanel;
