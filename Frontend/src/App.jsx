import React from "react";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";

import Home from "./pages/User/Home";
import UserLogin from "./pages/User/UserLogin";
import UserSignup from "./pages/User/UserSignup";
import Riding from "./pages/User/Riding";
import UserLogout from "./pages/User/UserLogout";
import UserProtectedWrapper from "./wrappers/UserProtectedWrapper";

import CaptainHome from "./pages/Captain/CaptainHome";
import CaptainLogout from "./pages/Captain/CaptainLogout";
import CaptainLogin from "./pages/Captain/CaptainLogin";
import CaptainSignup from "./pages/Captain/CaptainSignup";
import CaptainRiding from "./pages/Captain/CaptainRiding";
import CaptainProtectedWrapper from "./wrappers/CaptainProtectedWrapper";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<GetStarted />} />
        {/* USER ROUTES */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />

        {/* CAPTAIN ROUTES */}
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
