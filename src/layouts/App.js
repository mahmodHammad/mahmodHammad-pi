import React from "react";
import "./App.css";
import { Cat } from "../components/Cat";
import CustomInput from "../components/Form/CustomInput";
// @material-ui/core components
import Navbar from "../components/Navbar/Navbar.js";

function renderlol() {
  let tot = [];
  for (let i = 0; i < 100; i++) {
    tot.push(<h1>hey lol lol how are you lolololo lol lollo ooolo </h1>);
  }
  return tot;
}
export default function Admin() {
  const  listenToScroll = (e) => {
  console.log(e)
  };
  return (
    <div>
      <Navbar color="info" />
      <div className="content">
        <Cat />

        <div onScroll={(e) => console.log("WOOWOWOW", e)} className="addheight">
          {renderlol()}
        </div>

        <div className="headerContainer">
          <div className="brandContainer">
            <h2 className="brand">PI</h2>
            <p className="glow slogan">Enlighten Your Way</p>
          </div>
        </div>
      </div>
    </div>
  );
}
