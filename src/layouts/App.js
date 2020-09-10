import React, { useState } from "react";
import "./App.css";

import Navbar from "../Components/Navbar/index";
import Content from "../Components/Content/index";
import Footer from "../Components/Footer";

import Home from "../Components/Content/Home/index";
import Events from "../Components/Content/Events/index";
import Contact from "../Components/Content/Contact/index";
import About from "../Components/Content/About/index";

const routes = {
  home: <Home />,
  events: <Events />,
  contact: <Contact />,
  about: <About />,
};

export default function Admin() {
  const [Routes, setRoutes] = useState(routes);
  const [Active, setActive] = useState("home");

  return (
    <div id="holder" className="holder">
      {/* {console.log(Home)} */}

      <Navbar routes={routes} Active={Active} setActive={setActive} />
      {/* content --start */}
      <Content routes={routes} Active={Active} />

      {/* Home */}
      {/* About */ 1}
      {/* Events */}
      {/* Contect */}
      {/* content --end */}

      <Footer />
    </div>
  );
}

{
  /* <div className="content">


        <div className="addheight">
         
        </div>
        <div className="headerContainer">
          <div className="brandContainer">
            <h2 className="brand">PI</h2>
            <p className="glow slogan">Enlighten Your Way</p>
          </div>
        </div>
      </div> */
}
