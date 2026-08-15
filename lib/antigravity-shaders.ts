const SIMPLEX_NOISE_3D = /* glsl */ `
  vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(
      permute(
        permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0)
      ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
    );

    float n = 1.0 / 7.0;
    vec3 ns = n * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(
      vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3))
    );
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(
      0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)),
      0.0
    );
    m *= m;

    return 42.0 * dot(
      m * m,
      vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))
    );
  }
`;

export const simulationVertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

export const simulationFragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uPosition;
  uniform sampler2D uPositionReference;
  uniform vec2 uRingPosition;
  uniform float uTime;
  uniform float uRingRadius;
  uniform float uRingWidth;
  uniform float uRingWidthInner;
  uniform float uRingDisplacement;

  ${SIMPLEX_NOISE_3D}

  void main() {
    vec2 simulationUv = gl_FragCoord.xy / vec2(256.0);
    vec4 previousFrame = texture2D(uPosition, simulationUv);
    vec2 referencePosition = texture2D(uPositionReference, simulationUv).xy;
    float scale = previousFrame.z;
    float velocity = previousFrame.w;
    float time = uTime * 0.5;

    vec2 carriedPosition = previousFrame.xy * 0.8;
    float distanceToRing = distance(referencePosition, uRingPosition);
    float edgeNoise = snoise(
      vec3(referencePosition * 0.2 + vec2(18.4924, 72.9744), time * 0.5)
    );
    float noisyDistance = distance(
      referencePosition + edgeNoise * 0.005,
      uRingPosition
    );

    float outerRing =
      smoothstep(
        uRingRadius - uRingWidth * 2.0,
        uRingRadius,
        distanceToRing
      ) -
      smoothstep(
        uRingRadius,
        uRingRadius + uRingWidth,
        noisyDistance
      );
    float innerRing =
      smoothstep(
        uRingRadius - uRingWidthInner * 2.0,
        uRingRadius,
        distanceToRing
      ) -
      smoothstep(
        uRingRadius,
        uRingRadius + uRingWidthInner,
        noisyDistance
      );
    float ringInterior = smoothstep(
      uRingRadius + uRingWidthInner,
      uRingRadius,
      distanceToRing
    );

    outerRing = pow(outerRing, 2.0);
    innerRing = pow(innerRing, 3.0);
    outerRing += innerRing * 3.0;
    outerRing += ringInterior * 0.4;
    outerRing +=
      snoise(
        vec3(referencePosition * 30.0 + vec2(11.4924, 12.9744), time * 0.5)
      ) *
      ringInterior *
      0.5;

    float broadNoise = snoise(
      vec3(referencePosition * 2.0 + vec2(18.4924, 72.9744), time * 0.5)
    );
    outerRing += pow((broadNoise + 1.5) * 0.5, 2.0) * 0.6;

    float middleNoiseX = snoise(
      vec3(referencePosition * 4.0 + vec2(88.494, 32.4397), time * 0.35)
    );
    float middleNoiseY = snoise(
      vec3(referencePosition * 4.0 + vec2(50.904, 120.947), time * 0.35)
    );
    float detailNoiseX = snoise(
      vec3(referencePosition * 20.0 + vec2(18.4924, 72.9744), time * 0.5)
    );
    float detailNoiseY = snoise(
      vec3(referencePosition * 20.0 + vec2(50.904, 120.947), time * 0.5)
    );

    vec2 displacement = vec2(middleNoiseX, middleNoiseY) * 0.03;
    displacement += vec2(detailNoiseX, detailNoiseY) * 0.005;
    displacement.x +=
      sin(referencePosition.x * 20.0 + time * 4.0) *
      0.02 *
      clamp(distanceToRing, 0.0, 1.0);
    displacement.y +=
      cos(referencePosition.y * 20.0 + time * 3.0) *
      0.02 *
      clamp(distanceToRing, 0.0, 1.0);

    carriedPosition -=
      (uRingPosition - (referencePosition + displacement)) *
      pow(innerRing, 0.75) *
      uRingDisplacement;

    scale += (outerRing - scale) * 0.2;
    velocity = velocity * 0.5 + scale * 0.25;
    vec2 finalPosition =
      referencePosition + displacement + carriedPosition * 0.25;

    gl_FragColor = vec4(finalPosition, scale, velocity);
  }
`;

export const particleVertexShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uPosition;
  uniform float uParticleScale;
  uniform float uPixelRatio;

  varying float vVelocity;
  varying vec2 vLocalPosition;
  varying vec2 vScreenPosition;
  varying float vScale;

  void main() {
    vec4 simulatedPosition = texture2D(uPosition, uv);
    vVelocity = simulatedPosition.w;
    vScale = simulatedPosition.z;
    vLocalPosition = simulatedPosition.xy;

    vec4 viewPosition = modelViewMatrix * vec4(simulatedPosition.xy, 0.0, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    vScreenPosition = gl_Position.xy;
    gl_PointSize = vScale * 7.0 * (uPixelRatio * 0.5) * uParticleScale;
  }
`;

export const particleFragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vScreenPosition;
  varying vec2 vLocalPosition;
  varying float vScale;
  varying float vVelocity;

  uniform vec3 uColorBlue;
  uniform vec3 uColorRed;
  uniform vec3 uColorYellow;
  uniform vec2 uRingPosition;
  uniform vec2 uResolution;
  uniform float uAlpha;
  uniform float uTime;

  ${SIMPLEX_NOISE_3D}

  float roundedBoxDistance(vec2 point, vec2 bounds, vec4 radius) {
    radius.xy = point.x > 0.0 ? radius.xy : radius.zw;
    radius.x = point.y > 0.0 ? radius.x : radius.y;
    vec2 edge = abs(point) - bounds + radius.x;
    return min(max(edge.x, edge.y), 0.0) + length(max(edge, 0.0)) - radius.x;
  }

  vec2 rotatePoint(vec2 point, float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return mat2(cosine, sine, -sine, cosine) * point;
  }

  void main() {
    float angleNoise = snoise(
      vec3(vLocalPosition * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85)
    );
    float colorNoise = snoise(
      vec3(vLocalPosition * 2.0 + vec2(74.664, 91.556), uTime * 0.5)
    );
    colorNoise = (colorNoise + 1.0) * 0.5;

    float direction = atan(
      vLocalPosition.y - uRingPosition.y,
      vLocalPosition.x - uRingPosition.x
    );
    vec2 pointUv = gl_PointCoord - vec2(0.5);
    pointUv.y *= -1.0;
    pointUv = rotatePoint(pointUv, -direction + angleNoise * 0.5);

    float progress = smoothstep(0.0, 0.75, pow(colorNoise, 2.0));
    float middle = 0.8;
    vec3 color = mix(
      mix(uColorBlue, uColorRed, progress / middle),
      mix(
        uColorRed,
        uColorYellow,
        (progress - middle) / (1.0 - middle)
      ),
      step(middle, progress)
    );

    float rounded = roundedBoxDistance(
      pointUv,
      vec2(0.5, 0.2),
      vec4(0.25)
    );
    rounded = smoothstep(0.1, 0.0, rounded);
    float alpha =
      uAlpha * rounded * smoothstep(0.1, 0.2, vScale);

    if (alpha < 0.01) discard;

    color = clamp(color, 0.0, 1.0);
    color *= clamp(vVelocity, 0.0, 1.0);
    gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));

    #ifdef SRGB_TRANSFER
      gl_FragColor = sRGBTransferOETF(gl_FragColor);
    #endif
  }
`;
