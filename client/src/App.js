import React, { useEffect, useState } from "react";
// import Login from "./components/login";
import Homepage from "./components/homepage";
import { Login } from "./components/login";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserSignedIn(true);
    else setIsUserSignedIn(false);
  }, []);

  const onLoginSuccessful = () => {
    localStorage.setItem('token', 'test');
    setIsUserSignedIn(true);
  };

  const onLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    setIsUserSignedIn(false);
  };

  return (
    (isUserSignedIn && <Homepage onLogout={onLogout} />) || (
      <Login onLoginSuccessful={onLoginSuccessful} />
    )
  );
}

export default App;