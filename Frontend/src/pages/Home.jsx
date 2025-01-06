import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-between pt-8 bg-[url(https://plus.unsplash.com/premium_vector-1725637515931-ef98ceeac699?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
          className="w-16 ml-8"
        />
        <div className="py-4 px-4 pb-7 bg-white">
          <h2 className="text-2xl font-semibold pb-2">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="flex justify-center items-center w-full font-semibold bg-black text-white py-3 mt-5 rounded-lg gap-2"
          >
            <p>Continue</p>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
