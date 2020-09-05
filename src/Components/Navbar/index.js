import React from "react";
import "./index.css";
import logo from "../../assets/piIcon.png";
export default function Nav() {
  let navlinks = {};
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand">
        <img src={logo} />
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {/* Navitems start */}
          <li class="nav-item" >
            <a class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
          {/* Navitems end */}
        </ul>
      </div>
    </nav>
  );
}


