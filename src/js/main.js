import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // Add '.js' extension
import { loadAllModels } from "./utilities/loadModelFromDish.js";
import { Player } from "./entities/player.js";
import { generateLanes, animateVehicle } from "./utilities/generateMap.js";
import { playMusic } from "./utilities/playSound.js";

const counterCurrent = document.getElementById("counter");
const maxScore = document.getElementById("maxScore");
const retry = document.querySelector(".end-game");
const retryButton = document.querySelector(".end-game button");

let cars = [];
let player;

//Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-2, 6, -4);

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
});
renderer.setClearColor(0xcccccc);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);

//Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Màu trắng, intensity 1
directionalLight.position.set(-6, 6, -6);
directionalLight.castShadow = true;
directionalLight.intensity = 5;
directionalLight.shadow.camera.left = -15; // Điểm bắt đầu bên trái của phạm vi camera
directionalLight.shadow.camera.right = 15; // Điểm kết thúc bên phải của phạm vi camera
directionalLight.shadow.camera.top = 15; // Điểm kết thúc phía trên của phạm vi camera
directionalLight.shadow.camera.bottom = -15; // Điểm bắt đầu phía dưới của phạm vi camera
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const modelPaths = [
  {
    path: [
      "../assets/models/characters/chicken/0.obj",
      "../assets/models/characters/chicken/0.png",
    ],
    type: ["chicken", "player"],
  },
  {
    path: [
      "../assets/models/characters/bacon/bacon.obj",
      "../assets/models/characters/bacon/bacon.png",
    ],
    type: ["bacon", "player"],
  },
  {
    path: [
      "../assets/models/environment/grass/model.obj",
      "../assets/models/environment/grass/light-grass.png",
    ],
    type: ["grass", "land"],
  },
  {
    path: [
      "../assets/models/environment/tree/0/0.obj",
      "../assets/models/environment/tree/0/0.png",
    ],
    type: ["tree0", "tree"],
  },
  {
    path: [
      "../assets/models/environment/tree/1/0.obj",
      "../assets/models/environment/tree/1/0.png",
    ],
    type: ["tree1", "tree"],
  },
  {
    path: [
      "../assets/models/environment/tree/2/0.obj",
      "../assets/models/environment/tree/2/0.png",
    ],
    type: ["tree2", "tree"],
  },
  {
    path: [
      "../assets/models/environment/tree/3/0.obj",
      "../assets/models/environment/tree/3/0.png",
    ],
    type: ["tree3", "tree"],
  },
  {
    path: [
      "../assets/models/environment/road/model.obj",
      "../assets/models/environment/road/blank-texture.png",
    ],
    type: ["blank_road", "road"],
  },
  {
    path: [
      "../assets/models/environment/road/model.obj",
      "../assets/models/environment/road/stripes-texture.png",
    ],
    type: ["stripe_road", "road"],
  },
  {
    path: [
      "../assets/models/environment/railroad/0.obj",
      "../assets/models/environment/railroad/0.png",
    ],
    type: ["railroad", "road"],
  },
  {
    path: [
      "../assets/models/vehicles/orange_car/0.obj",
      "../assets/models/vehicles/orange_car/0.png",
    ],
    type: ["orange_car", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/blue_truck/0.obj",
      "../assets/models/vehicles/blue_truck/0.png",
    ],
    type: ["blue_truck", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/blue_car/0.obj",
      "../assets/models/vehicles/blue_car/0.png",
    ],
    type: ["blue_car", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/green_car/0.obj",
      "../assets/models/vehicles/green_car/0.png",
    ],
    type: ["green_car", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/police_car/0.obj",
      "../assets/models/vehicles/police_car/0.png",
    ],
    type: ["police_car", "car"],
  },
];

const models = await loadAllModels(modelPaths).catch((error) => {
  console.error("Lỗi khi load model:", error);
});

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
}

const initGame = () => {
  window.addEventListener("resize", onResize);

  if (!localStorage.getItem("maxScoreFunWorld")) {
    localStorage.setItem("maxScoreFunWorld", 0);
  }

  maxScore.innerText = "Max: " + localStorage.getItem("maxScoreFunWorld");

  const startButton = document.querySelector("#start");
  const title = document.querySelector("#title");
  startButton.addEventListener("click", () => {
    startButton.remove();
    title.remove();
    playMusic();
    player.play(models, scene);
  });

  playGame();
};

initGame();

function playGame() {
  if (models === null || models === undefined) {
    console.error("models null at main");
  }

  player = new Player("chicken", models, 0, 0, 0);

  scene.add(player.model);

  cars = generateLanes(models, scene).cars;
}

orbit.update();

const collisionThreshold = 1;

function checkCollisions() {
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const carPosition = car.model.position;
    const distance = player.model.position.distanceTo(carPosition);
    if (distance < collisionThreshold) {
      endGame();
      return;
    }
  }

  /*const trees = [tree0, tree1, tree2, tree3];
    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];
        const treePosition = tree.model.position;
        const distanceToTree = player.model.position.distanceTo(treePosition);
        // Nếu khoảng cách nhỏ hơn ngưỡng va chạm với cây, xem như có va chạm
        if (distanceToTree < collisionThreshold) {
            // Lưu lại vị trí hợp lệ trước đó của người chơi
            player.lastValidPosition.copy(player.model.position);
            // Thiết lập lại vị trí của người chơi để ngăn chúng đi qua cây
            player.setPosition(player.lastValidPosition.x, player.lastValidPosition.y, player.lastValidPosition.z);
            return;
        }
    }*/
}

function endGame() {
  player.setPosition(0, 0, 0);
  camera.position.set(4, 12, -5);
  retry.style.display = "block";
  player.counter = 0;
  counterCurrent.innerText = player.counter;
}

function animate() {
  requestAnimationFrame(animate);
  checkCollisions();

  if (models) {
    animateVehicle(models);
  }

  const boundingBox = new THREE.Box3().setFromObject(player.model);
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);

  camera.position.set(center.x + 3, center.y + 10, center.z - 6);
  camera.lookAt(center);

  renderer.render(scene, camera);
}

animate();

retryButton.addEventListener("click", function () {
  var endGameDiv = document.querySelector(".end-game");
  endGameDiv.style.display = "none";
});
