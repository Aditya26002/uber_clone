import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* LOGO */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
        className="w-16 absolute top-5 left-5"
      />{" "}
      {/* Background Image */}
      <div className="h-screen w-screen">
        <img
          src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        {/* INPUTS */}
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-6 right-6 text-xl font-semibold "
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold"> Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* PICK-UP LOCATION */}
            <div className="bg-[#eee] px-[18px] py-2 text-base rounded-lg w-full mt-3 flex items-center gap-4 border-[3px] border-[#eee] focus-within:border-black focus-within:border-[3px]">
              <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                <circle
                  r="3"
                  cx="6"
                  cy="6"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                />
              </svg>
              <input
                type="text"
                value={pickup}
                className="w-full bg-[#eee] focus:outline-none"
                placeholder="Add a pick-up location"
                onChange={(e) => setPickup(e.target.value)}
                onClick={() => setPanelOpen(true)}
              />
            </div>
            {/* <div className="h-10 w-[3px] bg-black rounded-full absolute left-[13%] top-[50%]" /> */}
            {/* DESTINATION */}
            <div className="bg-[#eee] px-5 py-2 text-base rounded-lg w-full mt-3 flex items-center gap-4 border-[3px] border-[#eee] focus-within:border-black focus-within:border-[3px]">
              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                <rect
                  width="6"
                  height="6"
                  x="1"
                  y="1"
                  style={{
                    fill: "none",
                    strokeWidth: 2,
                    stroke: "black",
                  }}
                />
              </svg>
              <input
                type="text"
                value={destination}
                className="w-full bg-[#eee] focus:outline-none"
                placeholder="Enter your destination"
                onChange={(e) => setDestination(e.target.value)}
                onClick={() => setPanelOpen(true)}
              />
            </div>
          </form>
        </div>
        {/* MAP */}
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed z-10 bottom-0 bg-white w-full px-2 py-8 rounded-t-xl">
        <h2 className="text-2xl font-medium text-center pb-3">
          Choose a Vehicle
        </h2>
        {/* UberGo */}
        <div className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black acive:border-[3px]">
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
                <i class="ri-user-fill"></i>
                <h4>4</h4>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <p>2 mins away</p>
                <div className="flex items-center justify-center text-[6px]">
                  <i class="ri-circle-fill"></i>
                </div>
                <p>15:24</p>
              </div>
              <h4 className="text-gray-600 text-sm">
                Affordable, compact rides
              </h4>
            </div>
          </div>
          <h4 className="font-semibold">₹193.20</h4>
        </div>
        {/* Moto */}
        <div className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black acive:border-[3px]">
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
                <i class="ri-user-fill"></i>
                <h4>1</h4>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <p>3 mins away</p>
                <div className="flex items-center justify-center text-[6px]">
                  <i class="ri-circle-fill"></i>
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
        <div className="flex justify-between w-full py-3 pr-3 rounded-xl border-[3px] border-white active:border-black acive:border-[3px]">
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
                <i class="ri-user-fill"></i>
                <h4>3</h4>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <p>5 mins away</p>
                <div className="flex items-center justify-center text-[6px]">
                  <i class="ri-circle-fill"></i>
                </div>
                <p>15:26</p>
              </div>
            </div>
          </div>
          <h4 className="font-semibold">₹113.20</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
