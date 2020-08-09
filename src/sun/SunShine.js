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
    const material = new THREE.MeshBasicMaterial({
      color:"red"
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
