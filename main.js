import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const globeGeometry = new THREE.IcosahedronGeometry(5, 20);
const material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.1,
  roughness: 0.1,
  transmission: 1,
  clearcoat: 0.3,
  clearcoatRoughness: 0.2,
  reflectivity: 0.09,
  ior: 1,
  thickness: 10, // Your environment map texture
});
const mesh = new THREE.Mesh(globeGeometry, material);

const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1000, 1000);
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0x808080,
  side: THREE.DoubleSide,
  flatShading: true,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.set(0, 0, -10);
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
const lightBg = new THREE.DirectionalLight(0xffffff, 1);
lightBg.position.set(10, 10, -10);

const { array } = planeMesh.geometry.attributes.position;
for (let i = 3; i < array.length; i += 3) {
  const z = array[i + 2];
  array[i + 2] = z + Math.random();
}

scene.add(planeMesh)
scene.add(mesh);
scene.add(light);
scene.add(lightBg);
camera.position.z = 15;
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  planeMesh.rotation.z += 0.001;
  renderer.render(scene, camera);
}

requestAnimationFrame(animate);

const containerEl = document.getElementById("container");

function addElement(x = "0", y = "0") {
  const element = document.createElement("div");
  element.className = "mouse-event1";
  element.textContent = x;
  containerEl.appendChild(element);
  addH4(containerEl, "Mouse X Position (px)");

  const element2 = document.createElement("div");
  element2.className = "mouse-event2";
  element2.textContent = y;
  containerEl.appendChild(element2);
  addH4(containerEl, "Mouse Y Position (px)");
}

addElement();

function addH4(parent, text) {
  const element = document.createElement("h4");
  element.textContent = text;
  parent.appendChild(element);
}

window.addEventListener("mousemove", (event) => {
  const mouseX = document.getElementsByClassName("mouse-event1")[0];
  const mouseY = document.getElementsByClassName("mouse-event2")[0];
  mouseX.textContent = event.clientX;
  mouseY.textContent = event.clientY;
});