import React, {  } from "react";
import { Route, Routes } from "react-router-dom";


import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Admin />} />
        {/* <Route path="/comps" element={} />
        <Route path="/leaderboards" element={} />
        <Route path="/guides" element={} /> */}
      </Routes>
    </>
  );
}

export default App;