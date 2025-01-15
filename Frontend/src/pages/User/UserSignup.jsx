import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/userContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: firstName, lastname: lastName },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
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
              value={firstName}
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
          <button
            type="submit"
            className="bg-[#111111] text-white px-4 py-2 mb-3 rounded w-full text-lg hover:bg-[#222222]"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
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

export default UserSignup;
