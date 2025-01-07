import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
      vehicleInfo: vehicleInfo,
    });
    setName("");
    setEmail("");
    setPassword("");
    setVehicleInfo("");
    console.log(captainData);
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
          alt=""
          className="w-12 mb-5"
        />
        <h2 className="text-2xl font-bold mb-5">Captain Sign Up</h2>
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-semibold mb-2">What's your name?</h3>
          <div className="flex gap-3 items-center">
            <input
              required
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-[#eeeeee] mb-5 px-4 py-2 border rounded w-1/2 placeholder:text-sm"
              placeholder="First name"
            />
            <input
              required
              value={firstName}
              onChange={(e) => setName(e.target.value)}
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
        <p className="text-xs text-gray-400">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-black underline">Privacy Policy</span> and{" "}
          <span className="text-black underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
