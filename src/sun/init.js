import * as THREE from 'three';
import debounce from './js-util/debounce';
import sleep from './js-util/sleep';
import PromiseTextureLoader from './PromiseTextureLoader';

import Sun from './Sun';
import Core from './Core';
import Shell from './Shell';
import Points from './Points';
import SunShine from './SunShine';
import Background from './Background';

const img1= require("./core.png")
const img2= require("./core_normal.png")
const img3= require("./sunshine.png")

export default async function() {
  // ==========
  // Define common variables
  //
  const resolution = new THREE.Vector2();


  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  document.body.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera();
  const cameraResolution = new THREE.Vector2();
  const clock = new THREE.Clock({
    autoStart: false
  });

  // For the preloader.
  // const preloader = document.querySelector('.p-preloader');

  // ==========
  // Define unique variables
  //
  const sun = new Sun();
  const core = new Core();
  const shell = new Shell();
  const points = new Points();
  const sunShine = new SunShine();
  const bg = new Background();
  let textures;

  // ==========
  // Define functions
  //
  const render = () => {
    const time = clock.getDelta();
    sun.update(time);
    core.update(time);
    shell.update(time);
    points.update(time);
    sunShine.update(time);
    renderer.render(scene, camera);
  };
  const renderLoop = () => {
    render();
    requestAnimationFrame(renderLoop);
  };
  const resizeCamera = () => {
    if (resolution.x > resolution.y) {
      cameraResolution.set(
        (resolution.x >= 1200) ? 1200 : resolution.x,
        (resolution.x >= 1200) ? 800 : resolution.x * 0.66,
      );
    } else {
      cameraResolution.set(
        ((resolution.y >= 1200) ? 800 : resolution.y * 0.66) * 0.6,
        ((resolution.y >= 1200) ? 1200 : resolution.y) * 0.6,
      );
    }
    camera.setViewOffset(
      cameraResolution.x,
      cameraResolution.y,
      (resolution.x - cameraResolution.x) / -2,
      (resolution.y - cameraResolution.y) / -2,
      resolution.x,
      resolution.y
    );
    camera.updateProjectionMatrix();
  };
  const resizeWindow = () => {
    resolution.set(document.body.clientWidth, window.innerHeight);
    resizeCamera();
    renderer.setSize(resolution.x, resolution.y);
  };
  const on = () => {
    window.addEventListener('blur', () => {
      // this window is inactive.
      clock.stop();
    });
    window.addEventListener('focus', () => {
      // this window is inactive.
      clock.start();
    });
    window.addEventListener('resize', debounce(resizeWindow, 100));
  };

  // ==========
  // Initialize
  //
  renderer.setClearColor(0xeeeeee, 1.0);

  camera.aspect = 3 / 2;
  camera.far = 1000;
  camera.setFocalLength(50);
  camera.position.set(0, 0, 50);
  camera.lookAt(new THREE.Vector3());

  on();
  resizeWindow();

 
  if (textures) {
    img1.wrapS = THREE.RepeatWrapping;
    img1.wrapT = THREE.RepeatWrapping;
    img2.wrapS = THREE.RepeatWrapping;
    img2.wrapT = THREE.RepeatWrapping;

    core.start(img1, img2);
    shell.start(img1, img2);
    sunShine.start(img3);
  }

  sun.add(core);
  sun.add(shell);

  scene.add(sun);
  scene.add(points);
  scene.add(sunShine);
  scene.add(bg);

  // preloader.classList.add('is-hidden');
  await sleep(200);

  clock.start();
  renderLoop();
}
