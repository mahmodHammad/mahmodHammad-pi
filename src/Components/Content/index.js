import React from "react";
import Home from "./Home/index";
import Events from "./Events/index";
import Contact from "./Contact/index";
import About from "./About/index";

import "./index.css";
export default function Content() {
  const views = {
    Home,
    About,
    Events,
    Contact,
  };

  return <div className="content">
      {/* {views[1]} */}
      <Home/>
  </div>;
}
