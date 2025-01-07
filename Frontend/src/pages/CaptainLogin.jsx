import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
    console.log(captainData);
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
          alt=""
          className="w-12 mb-10"
        />
        <h2 className="text-2xl font-bold mb-5">Captain Login</h2>
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-semibold mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-semibold mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base"
            required
            placeholder="password"
          />
          <button
            type="submit"
            className="bg-[#111111] text-white px-4 py-2 mb-3 rounded w-full text-lg hover:bg-[#222222]"
          >
            Login as Captain
          </button>
        </form>
        <p className="text-center text-sm">
          New Captain?{" "}
          <Link to="/captain-signup" className="text-blue-500 font-semibold">
            Create a Captain account
          </Link>
        </p>
      </div>
      <div className="">
        <Link
          to="/login"
          className="bg-blue-500 flex items-center justify-center text-white mb-7 px-4 py-2 rounded w-full text-lg hover:bg-blue-600"
        >
          Login as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
