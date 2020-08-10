import * as THREE from 'three';
import sleep from './js-util/sleep'; 
import Sun from './Sun';
import Core from './Core';
import Shell from './Shell';
import SunShine from './SunShine';
import Background from './Background';
import PromiseTextureLoader from "./PromiseTextureLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const img1= require("./core.png")
const img2= require("./core_normal.png")
const img3= require("./sunshine.png")

export default async function() {
  // ==========
  // Define common variables
  //


  
let width = window.innerWidth;
let height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // fov = field of view
  width / height, // aspect ratio
  0.1, // near plane
  1000 // far plane
);


camera.aspect = 3 / 2;
camera.setFocalLength(50);
camera.position.set(0, 0, 60);


const controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance=90
controls.minDistance=40
controls.maxPolarAngle=Math.PI/2
controls.minPolarAngle=Math.PI/2
controls.enableKeys=false
controls.enablePan=false
// controls.maxPolarAngle = 3.13 / 2;
const clock = new THREE.Clock({
  autoStart: false
});




  const resolution = new THREE.Vector2();


  // const renderer = new THREE.WebGLRenderer({
  //   alpha: true,
  //   antialias: true,
  // });
  document.body.appendChild(renderer.domElement);

  // renderer.setPixelRatio(window.devicePixelRatio);
  const cameraResolution = new THREE.Vector2();


  // For the preloader.
  // const preloader = document.querySelector('.p-preloader');

  // ==========
  // Define unique variables
  //
  const sun = new Sun();
  const core = new Core();
  const shell = new Shell();
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
  
  controls.addEventListener("change",(e)=>{
    // shell.lookAt(camera.position)
    sunShine.lookAt(camera.position)
  })
  // ==========
  // Initialize
  //
  renderer.setClearColor(0xeeeeee, 1.0);
  
  
  window.addEventListener('resize', resizeWindow);
  resizeWindow();

  
  await Promise.all([
    PromiseTextureLoader(img1),
    PromiseTextureLoader(img2),
    PromiseTextureLoader(img3),
  ]).then(response => {
    textures = response;
  });

  if (textures) {
    textures[0].wrapS = THREE.RepeatWrapping;
    textures[0].wrapT = THREE.RepeatWrapping;
    textures[1].wrapS = THREE.RepeatWrapping;
    textures[1].wrapT = THREE.RepeatWrapping;

    core.start(textures[0], textures[1]);
    shell.start(textures[0], textures[1]);
    sunShine.start(textures[2]);
  }


  

  sun.add(core);
  sun.add(shell);

  scene.add(sun);
  scene.add(sunShine);
  scene.add(bg);

  // preloader.classList.add('is-hidden');
  await sleep(200);

  clock.start();
  renderLoop();
}
