import React, { useState } from "react";
import "./App.css"
import { Cat } from "../components/Cat";

// @material-ui/core components
import Navbar from "../components/Navbar/Navbar.js";


export default function Admin() {


  return (
    <div>
      {/* <Navbar color="primary" /> */}
      <div className="content">
      <Cat></Cat>
    </div>
      
    </div>
  );
}
