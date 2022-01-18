import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    <Routes>
      <Route path="/" element={<Home onLogout={onLogout} />} />
      <Route path="/login" element={<Login onLoginSuccessful={onLoginSuccessful} />} />
    </Routes>
  );
}

export default App;