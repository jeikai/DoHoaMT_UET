import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // Ensure correct path
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

loader.load('donut.glb', (gltf) => {
	const mesh = gltf.scene;
	mesh.position.set(0, 1.05, -1);
	scene.add(mesh);
})

const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); 
}

animate();
