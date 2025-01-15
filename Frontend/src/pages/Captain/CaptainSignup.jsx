import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehichleColor, setVehicleColor] = useState("");
  const [vehichlePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      vehicle: {
        color: vehichleColor,
        plate: vehichlePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="p-7 flex gap-28 flex-col justify-between h-screen">
      <div className="">
        <div className="flex items-center gap-6">
          <img
            src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
            alt=""
            className="w-12 mb-5"
          />
          <h2 className="text-2xl font-bold mb-5">Captain Sign Up</h2>
        </div>
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-semibold mb-2">What's your name?</h3>
          <div className="flex gap-3 items-center">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-1/2 placeholder:text-sm"
              placeholder="First name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-1/2 placeholder:text-sm"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full placeholder:text-sm"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-semibold mb-2">Create a password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-full placeholder:text-sm"
            required
            placeholder="password"
          />
          <h3 className="text-lg font-semibold mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-4">
            <input
              required
              value={vehichleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border rounded placeholder:text-sm"
              placeholder="Vehicle Color"
            />
            <input
              required
              value={vehichlePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border rounded placeholder:text-sm"
              placeholder="Vehicle Plate Number"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border rounded placeholder:text-sm"
              placeholder="Vehicle Capacity"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] w-1/2 px-4 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ position: "relative" }}
            >
              <option disabled value="">
                Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#111111] text-white px-4 py-2 mb-3 rounded w-full text-lg hover:bg-[#222222]"
          >
            Sign Up as Captain
          </button>
        </form>
        <p className="text-center text-sm">
          Already have a Captain account?{" "}
          <Link to="/captain-login" className="text-blue-500 font-semibold">
            Log in
          </Link>
        </p>
      </div>
      <div className="">
        <p className="text-xs text-gray-400 pb-5">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-black underline">Privacy Policy</span> and{" "}
          <span className="text-black underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
