import { render,controls } from "./setup";

let requestID;
const startAnimationLoop = () => {
  render();
  controls.update()
  requestID = window.requestAnimationFrame(startAnimationLoop);
};

export { startAnimationLoop, requestID };
