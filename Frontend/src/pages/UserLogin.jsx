import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    setEmail("");
    setPassword("");
    console.log(userData);
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
          className="w-16 mb-10"
        />
        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-semibold mb-2">What's your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-[#eeeeee] mb-7 px-4 py-2 border  rounded w-full text-lg placeholder:text-base"
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
            Login
          </button>
        </form>
        <p className="text-center text-sm">
          New to Uber?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Create an account
          </Link>
        </p>
      </div>
      <div className="">
        <Link
          to="/captain-login"
          className="bg-blue-500 flex items-center justify-center text-white mb-7 px-4 py-2 rounded w-full text-lg hover:bg-blue-600"
        >
          Login as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
