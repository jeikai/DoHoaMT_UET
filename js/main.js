import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Add '.js' extension
import { loadAllModels } from './loadModelFromDish.js';
import { Entity } from './entities/entity.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.rotateY(Math.PI);
camera.updateMatrixWorld();
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xcccccc);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(10, 10);
gridHelper.position.set(0, 0, 0);
scene.add(gridHelper);

// tạo ra nguồn sáng ( giống mặt trời) trong phòng
const ambientLight = new THREE.AmbientLight(0xffffff, 2); // White light, intensity 2
scene.add(ambientLight);

const modelPaths = [
    { path: '../assets/chicken.glb', type: "chicken" },
    { path: '../assets/grass.glb', type: "grass" },
    { path: '../assets/tree0.glb', type: "tree0" },
    { path: '../assets/tree1.glb', type: "tree1" },
    { path: '../assets/tree2.glb', type: "tree2" },
    { path: '../assets/tree3.glb', type: "tree3" },
    { path: '../assets/blank_road.glb', type: "blank_road" },
    { path: '../assets/stripe_road.glb', type: "stripe_road" },
    { path: '../assets/orange_car.glb', type: "orange_car" }
];

// Load tất cả các model
loadAllModels(modelPaths)
    .then((models) => {
        console.log('Các model đã được load:', models);
        // Thực hiện các thao tác khác với các model đã load ở đây
        playGame(models);
    })
    .catch((error) => {
        console.error('Lỗi khi load model:', error);
    });

var player;
var cars = [];
function playGame(models) {
    if (models === null || models === undefined)
        console.error("models null at main");
    else
        console.error("models not null at main");

    player = new Entity("chicken", models, 0, 0, 0);
    scene.add(player.model);

    const grass = new Entity("grass", models, 0, -0.4, 0);
    scene.add(grass.model);
    const tree0 = new Entity("tree0", models, 2, 0, 0);
    scene.add(tree0.model);
    const tree1 = new Entity("tree1", models, 4, 0, 0);
    scene.add(tree1.model);
    const tree2 = new Entity("tree2", models, -2, 0, 0);
    scene.add(tree2.model);
    const tree3 = new Entity("tree3", models, -4, 0, 0);
    scene.add(tree3.model);
    const blank_road = new Entity("blank_road", models, 0, 0, 1);
    scene.add(blank_road.model);
    const stripe_road = new Entity("stripe_road", models, 0, 0, 2);
    scene.add(stripe_road.model);


    const orange_car = new Entity("orange_car", models, -10, 0.2, 2);
    orange_car.model.rotateY(Math.PI / 2);
    cars.push(orange_car);
    scene.add(orange_car.model);

    const orange_car1 = new Entity("orange_car", models, -7, 0.2, 1);
    orange_car1.model.rotateY(Math.PI / 2);
    cars.push(orange_car1);
    scene.add(orange_car1.model);

    // Get player position after it's initialized
    const playerPosition = player.getPosition();

    // Event listener for keydown
    document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode;
        var movementDistance = 0.2;
        var deltaX = 0, deltaY = 0, deltaZ = 0;
        switch (keyCode) {
            case 37:
                deltaX = +movementDistance; // sang trai
                break;
            case 38:
                deltaZ = +movementDistance; // sang phai
                break;
            case 39:
                deltaX = -movementDistance; //xuong
                break;
            case 40:
                deltaZ = -movementDistance; // len
                break;
        }

        // Update player position
        playerPosition.x += deltaX;
        playerPosition.x = Math.max(-10, Math.min(10, playerPosition.x));
        playerPosition.z += deltaZ;
        playerPosition.z = Math.max(-10, Math.min(10, playerPosition.z));

        player.setPosition(playerPosition.x, playerPosition.y, playerPosition.z);

        const cameraOffset = new THREE.Vector3(deltaX, 0, deltaZ);
        camera.position.add(cameraOffset);

        camera.position.x = Math.max(-10, Math.min(10, camera.position.x));
        camera.position.z = Math.max(-10, Math.min(10, camera.position.z));

        camera.lookAt(player.model.position);
    });

}

camera.position.z = -5;
camera.position.y = 5;
orbit.update(); // Move orbit controls update here

function animate() {
    requestAnimationFrame(animate);

    console.error(cars.length);
    const carArray = Object.values(cars);
    carArray.forEach(car => {
        const carPos = car.model.position; // Fix the access to position property
        car.model.position.set(carPos.x + 0.05, carPos.y, carPos.z); // Fix the setting of position
    });
    renderer.render(scene, camera);
}
animate(cars);