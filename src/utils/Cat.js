import React, { Component } from "react";

// import { sceneSetup, controls } from "./setup";
// import { addCustomSceneObjects } from "./SceneObjects";
// import { startAnimationLoop, requestID } from "./Animate";

import init from "../sun/init"
class Cat extends Component {
  componentDidMount() {
    // init() 
  }

  // clean up to prevent memory leak
  componentWillUnmount() {
    // window.cancelAnimationFrame(requestID);
    // controls.dispose();
  }

  render() {
    return <div onClick={f=>console.log("clickccccc")}></div>
  }
}

export { Cat };
