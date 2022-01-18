import React from "react";
import { Button } from "primereact/button";


import "../components/AuthForm.css";

export default () => {
  return (
    <Button label="Sign Out" onClick={() => localStorage.removeItem('token')} />
  );
}