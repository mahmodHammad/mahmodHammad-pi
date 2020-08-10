import React from "react";
import "./App.css"
import { Cat } from "../components/Cat";

// @material-ui/core components
import Navbar from "../components/Navbar/Navbar.js";


export default function Admin() {


  return (
    <div>
      <Navbar color="info" />
      <div className="content">
      <Cat/>

    </div>
    </div>
  );
}
