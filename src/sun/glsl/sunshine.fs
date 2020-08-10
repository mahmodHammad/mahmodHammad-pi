precision highp float;

uniform float time;
uniform sampler2D texture;

varying vec3 vPosition;
varying vec2 vUv;

mat3 calcRotateMat3(float radian) {
  return mat3(
    cos(radian), -sin(radian), 0.0,
    sin(radian), cos(radian), 0.0,
    0.0, 0.0, 1.0
  );
}

vec3 convertHsvToRgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  vec2 rotateUv = (calcRotateMat3(time * 0.04) * vec3(p, 1.0)).xy * 0.5 + 0.5;
  vec4 texColor = texture2D(texture, rotateUv);

  float l = length(vPosition);
  vec2 rotateMask = (calcRotateMat3(time * -0.02) * vec3(p, 1.0)).xy;
  float opacityIn = pow(1.0 - smoothstep(6.0, 10.0, l), 2.0);
  float opacityOut = 1.0 - smoothstep(8.0, 24.0, l);
  float opacityRay = sin(acos(dot(normalize(rotateMask), vec2(1.0, 0.0))) * 2.4 + time) * 0.4 + 0.6;
  float opacity = opacityIn * 0.7 + opacityOut * 0.1 + opacityRay * texColor.r;

  vec3 hsv = vec3(
    opacity * 0.1 + 0.98,
    1.0 - opacity * 0.8,
    opacity * 0.4 + 0.5
    );
  vec3 rgb = convertHsvToRgb(hsv);

  gl_FragColor = vec4(rgb, opacity);
}
