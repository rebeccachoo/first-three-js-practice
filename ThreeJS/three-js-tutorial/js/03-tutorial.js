import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const texture = new THREE.TextureLoader().load("textures/water.jpeg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(4, 4);

// const text = new THREE.TextGeometry(text, parameters);

renderer.render(scene, camera);
