import React from "react";
import "./index.css";

export default function Content(prop) {
  return (
    <div className="content">
      {prop.routes[prop.Active]}
    </div>
  );
}
