"use client";

import PoissonDiskSampling from "poisson-disk-sampling";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import {
  particleFragmentShader,
  particleVertexShader,
  simulationFragmentShader,
  simulationVertexShader,
} from "@/lib/antigravity-shaders";

const TEXTURE_SIZE = 256;
const TEXTURE_LENGTH = TEXTURE_SIZE * TEXTURE_SIZE;
const DENSITY = 230;
const PARTICLE_SCALE = 0.59;
const RING_WIDTH = 0.006;
const RING_WIDTH_INNER = 0.107;
const RING_DISPLACEMENT = 0.62;

const remap = (
  value: number,
  inputMinimum: number,
  inputMaximum: number,
  outputMinimum: number,
  outputMaximum: number,
) =>
  ((value - inputMinimum) * (outputMaximum - outputMinimum)) /
    (inputMaximum - inputMinimum) +
  outputMinimum;

class SmoothNoise {
  private readonly values = Array.from({ length: 256 }, () => Math.random());

  sample(position: number) {
    const base = Math.floor(position);
    const fraction = position - base;
    const eased = fraction * fraction * (3 - 2 * fraction);
    const firstIndex = ((base % 255) + 255) % 255;
    const secondIndex = (firstIndex + 1) % 255;

    return THREE.MathUtils.lerp(
      this.values[firstIndex],
      this.values[secondIndex],
      eased,
    );
  }
}

function createPositionTexture() {
  const sampling = new PoissonDiskSampling({
    shape: [500, 500],
    minDistance: remap(DENSITY, 0, 300, 10, 2),
    maxDistance: remap(DENSITY, 0, 300, 11, 3),
    tries: 20,
  });
  const points = sampling.fill();
  const textureData = new Float32Array(TEXTURE_LENGTH * 4);

  points.forEach((point, index) => {
    const offset = index * 4;
    textureData[offset] = (point[0] - 250) / 250;
    textureData[offset + 1] = (point[1] - 250) / 250;
  });

  const texture = new THREE.DataTexture(
    textureData,
    TEXTURE_SIZE,
    TEXTURE_SIZE,
    THREE.RGBAFormat,
    THREE.FloatType,
  );
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;

  return { points, texture };
}

function createRenderTarget() {
  return new THREE.WebGLRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, {
    depthBuffer: false,
    format: THREE.RGBAFormat,
    magFilter: THREE.NearestFilter,
    minFilter: THREE.NearestFilter,
    stencilBuffer: false,
    type: THREE.FloatType,
  });
}

export default function AntigravityCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      powerPreference: "high-performance",
      precision: "highp",
      stencil: false,
    });
    renderer.setClearColor(0xffffff, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
    camera.position.z = 3.1;

    const { points, texture: referenceTexture } = createPositionTexture();
    let readTarget = createRenderTarget();
    let writeTarget = createRenderTarget();
    let hasRendered = false;

    const simulationScene = new THREE.Scene();
    const simulationCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const ringPosition = new THREE.Vector2();
    const simulationMaterial = new THREE.ShaderMaterial({
      fragmentShader: simulationFragmentShader,
      uniforms: {
        uPosition: { value: referenceTexture },
        uPositionReference: { value: referenceTexture },
        uRingDisplacement: { value: RING_DISPLACEMENT },
        uRingPosition: { value: ringPosition },
        uRingRadius: { value: 0.2 },
        uRingWidth: { value: RING_WIDTH },
        uRingWidthInner: { value: RING_WIDTH_INNER },
        uTime: { value: 0 },
      },
      vertexShader: simulationVertexShader,
    });
    const simulationPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      simulationMaterial,
    );
    simulationScene.add(simulationPlane);

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points.length * 3);
    const textureCoordinates = new Float32Array(points.length * 2);

    for (let index = 0; index < points.length; index += 1) {
      textureCoordinates[index * 2] = (index % TEXTURE_SIZE) / TEXTURE_SIZE;
      textureCoordinates[index * 2 + 1] =
        Math.floor(index / TEXTURE_SIZE) / TEXTURE_SIZE;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute(
      "uv",
      new THREE.BufferAttribute(textureCoordinates, 2),
    );

    const particleMaterial = new THREE.ShaderMaterial({
      depthTest: false,
      depthWrite: false,
      fragmentShader: particleFragmentShader,
      transparent: true,
      uniforms: {
        uAlpha: { value: 1 },
        uColorBlue: { value: new THREE.Color("#2c64ed") },
        uColorRed: { value: new THREE.Color("#f84242") },
        uColorYellow: { value: new THREE.Color("#ffcf03") },
        uParticleScale: { value: PARTICLE_SCALE },
        uPixelRatio: { value: window.devicePixelRatio },
        uPosition: { value: referenceTexture },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uRingPosition: { value: ringPosition },
        uTime: { value: 0 },
      },
      vertexShader: particleVertexShader,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.frustumCulled = false;
    particles.scale.setScalar(5);
    scene.add(particles);

    [readTarget, writeTarget].forEach((target) => {
      renderer.setRenderTarget(target);
      renderer.clear();
    });
    renderer.setRenderTarget(null);

    const idleNoise = new SmoothNoise();
    let width = 1;
    let height = 1;
    let pointerX = 0;
    let pointerY = 0;
    let pointerInside = false;
    let visible = true;
    let animationFrame = 0;
    let lastTime = performance.now();
    let elapsedTime = 0;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const pixelRatio = window.devicePixelRatio || 1;

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      particleMaterial.uniforms.uResolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height,
      );
      particleMaterial.uniforms.uPixelRatio.value = pixelRatio;
    };

    const updateRingPosition = (frameScale: number) => {
      const horizontalNoise = (idleNoise.sample(elapsedTime * 0.66 + 94.234) - 0.5) * 2;
      const verticalNoise = (idleNoise.sample(elapsedTime * 0.75 + 21.028) - 0.5) * 2;
      let targetX = horizontalNoise * 0.2;
      let targetY = verticalNoise * 0.1;
      let easing = 1 - Math.pow(0.99, frameScale);

      if (pointerInside) {
        const normalizedX = (pointerX / width) * 2 - 1;
        const normalizedY = -(pointerY / height) * 2 + 1;
        const halfHeight =
          Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * camera.position.z;
        const halfWidth = halfHeight * camera.aspect;
        targetX = normalizedX * halfWidth * 0.175 + horizontalNoise * 0.1;
        targetY = normalizedY * halfHeight * 0.175 + verticalNoise * 0.1;
        easing = 1 - Math.pow(0.98, frameScale);
      }

      ringPosition.x += (targetX - ringPosition.x) * easing;
      ringPosition.y += (targetY - ringPosition.y) * easing;
    };

    const renderFrame = (time: number) => {
      const deltaMilliseconds = Math.min(time - lastTime, 34);
      const frameScale = deltaMilliseconds / (1000 / 60);
      lastTime = time;

      if (visible) {
        elapsedTime += deltaMilliseconds / 1000;
        updateRingPosition(frameScale);

        simulationMaterial.uniforms.uPosition.value = hasRendered
          ? readTarget.texture
          : referenceTexture;
        simulationMaterial.uniforms.uTime.value = elapsedTime;
        simulationMaterial.uniforms.uRingRadius.value =
          0.175 + Math.sin(elapsedTime) * 0.03 + Math.cos(elapsedTime * 3) * 0.02;

        renderer.setRenderTarget(writeTarget);
        renderer.render(simulationScene, simulationCamera);

        particleMaterial.uniforms.uPosition.value = writeTarget.texture;
        particleMaterial.uniforms.uTime.value = elapsedTime;
        particleMaterial.uniforms.uParticleScale.value =
          (renderer.domElement.width /
            (window.devicePixelRatio || 1) /
            2000) *
          PARTICLE_SCALE;

        renderer.setRenderTarget(null);
        renderer.clear();
        renderer.render(scene, camera);

        const previousReadTarget = readTarget;
        readTarget = writeTarget;
        writeTarget = previousReadTarget;
        hasRendered = true;
      }

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
      pointerInside = true;
    };

    const handlePointerLeave = () => {
      pointerInside = false;
    };

    const restart = () => {
      window.cancelAnimationFrame(animationFrame);
      lastTime = performance.now();

      if (reducedMotion.matches) {
        for (let frame = 0; frame < 18; frame += 1) {
          renderFrame(lastTime + frame * (1000 / 60));
        }
      } else {
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      lastTime = performance.now();
    });

    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    reducedMotion.addEventListener("change", restart);

    resize();
    restart();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      reducedMotion.removeEventListener("change", restart);
      particleGeometry.dispose();
      particleMaterial.dispose();
      simulationPlane.geometry.dispose();
      simulationMaterial.dispose();
      referenceTexture.dispose();
      readTarget.dispose();
      writeTarget.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
