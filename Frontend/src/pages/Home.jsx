import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [lookingForDriverPanelOpen, setLookingForDriverPanelOpen] =
    useState(false);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] =
    useState(true);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookingForDriverPanelRef = useRef(null);
  const waitingForDriverPanelRef = useRef(null);

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

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        translateY: "0%",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        translateY: "100%",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanelOpen) {
      gsap.to(confirmRidePanelRef.current, {
        translateY: "0%",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        translateY: "100%",
      });
    }
  }, [confirmRidePanelOpen]);

  useGSAP(() => {
    if (lookingForDriverPanelOpen) {
      gsap.to(lookingForDriverPanelRef.current, {
        translateY: "0%",
      });
    } else {
      gsap.to(lookingForDriverPanelRef.current, {
        translateY: "100%",
      });
    }
  }, [lookingForDriverPanelOpen]);

  useGSAP(() => {
    if (waitingForDriverPanelOpen) {
      gsap.to(waitingForDriverPanelRef.current, {
        translateY: "0%",
      });
    } else {
      gsap.to(waitingForDriverPanelRef.current, {
        translateY: "100%",
      });
    }
  }, [waitingForDriverPanelOpen]);

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
      {/* FIND A TRIP */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        {/* INPUTS */}
        <div className="h-auto p-6 bg-white relative flex flex-col gap-4">
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
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      {/* VEHICLES */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white w-full px-2 py-8 translate-y-full rounded-t-xl"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 bg-white w-full p-2 translate-y-full rounded-t-xl"
      >
        <ConfirmRide
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={lookingForDriverPanelRef}
        className="fixed z-10 bottom-0 bg-white w-full p-2 translate-y-full rounded-t-xl"
      >
        <LookingForDriver
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div
        ref={waitingForDriverPanelRef}
        className="fixed z-10 bottom-0 bg-white w-full p-2 rounded-t-xl"
      >
        <WaitingForDriver
          setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}
          setLookingForDriverPanelOpen={setLookingForDriverPanelOpen}
        />
      </div>
    </div>
  );
};

export default Home;
