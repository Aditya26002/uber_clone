import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      setCaptain(data.captain);

      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <div className="flex items-center gap-6">
          <img
            src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
            alt=""
            className="w-12 mb-5"
          />
          <h2 className="text-2xl font-bold mb-5">Captain Login</h2>
        </div>
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
