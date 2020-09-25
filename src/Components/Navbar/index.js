import React, { useState } from "react";
import "./index.css";
import logo from "../../assets/piIcon.png";
export default function Nav({ routes, Active, setActive }) {
  const [Open, setOpen] = useState(true);

  function handleNavBtnClick() {
    const oldOpenState = Open;
    setOpen(!oldOpenState);
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand">
        <img class="logo" src={logo} />
      </a>
      <button
        onClick={handleNavBtnClick}
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${Open ? "collapse" : ""} navbar-collapse`}
        id="collapsibleNavId"
      >
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          {/* Navitems start */}

          {Object.keys(routes).map((route) => (
            <li class="nav-item" onClick={()=>setActive(route)}>
              <span class={`nav-link ${Active === route?'active':''}`}  >{route}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
