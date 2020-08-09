import * as THREE from 'three';
// import MathEx from './js-util/MathEx';

import raw from "raw.macro";

const vs = raw('./glsl/sunshine.vs')
const fs = raw('./glsl/sunshine.fs')


export default class SunShine extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.RingBufferGeometry(4, 24, 64);

    // Define Material
    const material = new THREE.ShaderMaterial({

      fragmentShader: `
      uniform vec3 colorA; 
      uniform vec3 colorB; 
      varying vec3 vUv;

      void main() {
        gl_FragColor = vec4(mix(vec3(1.0,0.3,0.0), colorB, vUv.z), 1.0);
      }
      ` ,
      vertexShader:`
      varying vec3 vUv; 
  
      void main() {
        vUv = position; 
  
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
      }
    `
    });

    // Create Object3D
    super(geometry, material);
    this.position.z = -5;
    this.name = 'SunShine';
  }
  start(texture) {
    // this.material.uniforms.texture.value = texture;
  }
  update(time) {
    // this.material.uniforms.time.value += time;
  }
}
