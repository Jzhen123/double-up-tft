import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  useEffect(() => {
    if (isUserSignedIn) navigate('/')
    else navigate('login')
  }, [isUserSignedIn]);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home onLogout={onLogout} />} />
        <Route path="/login" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
      </Routes>
    </>
  );
}

export default App;