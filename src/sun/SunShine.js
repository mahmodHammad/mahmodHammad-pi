import * as THREE from 'three';
// import MathEx from './js-util/MathEx';

import raw from "raw.macro";
const  glsl =  require('glslify')

const vs = raw('./glsl/sunshine.vs')
const fs = raw('./glsl/sunshine.fs')


export default class SunShine extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.RingBufferGeometry(4, 24, 64);

    // Define Material
  
const material = new THREE.RawShaderMaterial({
  uniforms: {
    time: {
      type: 'f',
      value: 0
    },
    texture: {
      type: 't',
      value: null
    },
  },
  vertexShader:glsl( `attribute vec3 position;
  attribute vec2 uv;
  
  uniform mat4 projectionMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 modelMatrix;
  
  varying vec3 vPosition;
  varying vec2 vUv;
  
  void main(void) {
    // coordinate transformation
    vec4 mPosition = modelMatrix * vec4(position, 1.0);
  
    vPosition = position;
    vUv = uv;
  
    gl_Position = projectionMatrix * viewMatrix * mPosition;
  }
  `),
  fragmentShader:  glsl(`precision highp float;

uniform float time;
uniform sampler2D texture;

varying vec3 vPosition;
varying vec2 vUv;

 

void main() {
vec2 p = vUv * 2.0 - 1.0;

float l = length(vPosition);
vec2 rotateMask = vec2(0.4 , 0.1);
float opacityIn = pow(1.0 - smoothstep(6.0, 10.0, l), 2.0);
float opacityOut = 1.0 - smoothstep(8.0, 24.0, l);
float opacityRay = sin(acos(dot(normalize(rotateMask), vec2(1.0, 0.0))) * 2.4 + time) * 0.4 + 0.6;
 
vec3 rgb = vec3(1.0,1.0,0.3);

gl_FragColor = vec4(rgb, 0.3);
}
`),
  transparent: true,
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
    this.material.uniforms.time.value += time;
  }
}



// const material = new THREE.RawShaderMaterial({
//   uniforms: {
//     time: {
//       type: 'f',
//       value: 0
//     },
//     texture: {
//       type: 't',
//       value: null
//     },
//   },
//   vertexShader: `attribute vec3 position;
//   attribute vec2 uv;
  
//   uniform mat4 projectionMatrix;
//   uniform mat4 viewMatrix;
//   uniform mat4 modelMatrix;
  
//   varying vec3 vPosition;
//   varying vec2 vUv;
  
//   void main(void) {
//     // coordinate transformation
//     vec4 mPosition = modelMatrix * vec4(position, 1.0);
  
//     vPosition = position;
//     vUv = uv;
  
//     gl_Position = projectionMatrix * viewMatrix * mPosition;
//   }
//   `,
//   fragmentShader:  `precision highp float;

// uniform float time;
// uniform sampler2D texture;

// varying vec3 vPosition;
// varying vec2 vUv;

// #pragma glslify: calcRotateMat3 = require(glsl-matrix/calcRotateMat3);
// #pragma glslify: convertHsvToRgb = require(glsl-util/convertHsvToRgb);

// void main() {
// vec2 p = vUv * 2.0 - 1.0;
// vec2 rotateUv = (calcRotateMat3(time * 0.04) * vec3(p, 1.0)).xy * 0.5 + 0.5;
// vec4 texColor = texture2D(texture, rotateUv);

// float l = length(vPosition);
// vec2 rotateMask = (calcRotateMat3(time * -0.02) * vec3(p, 1.0)).xy;
// float opacityIn = pow(1.0 - smoothstep(6.0, 10.0, l), 2.0);
// float opacityOut = 1.0 - smoothstep(8.0, 24.0, l);
// float opacityRay = sin(acos(dot(normalize(rotateMask), vec2(1.0, 0.0))) * 2.4 + time) * 0.4 + 0.6;
// float opacity = opacityIn * 0.7 + opacityOut * 0.1 + opacityRay * texColor.r;

// vec3 hsv = vec3(
// opacity * 0.12 + 0.98,
// 1.0 - opacity * 0.8,
// opacity * 0.4 + 0.8
// );
// vec3 rgb = convertHsvToRgb(hsv);

// gl_FragColor = vec4(rgb, opacity);
// }
// `,
//   transparent: true,
// });