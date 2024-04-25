import * as THREE from "three";
import { loadAllModels } from "./utilities/loadModelFromDish.js";
import { Player } from "./entities/player.js";
import { generateLanes, animateVehicle } from "./utilities/generateMap.js";
import { playMusic } from "./utilities/playSound.js";
import axios from 'axios';
import toastr, { error } from 'toastr';
import { Entity } from "./entities/entity.js";

const baseUrl = "https://funroad-server.onrender.com/api/user"
const rankButton = document.getElementById("see-rank");
const retryButton = document.querySelector(".end-game button");
const closeButton = document.getElementById("btn-close");
const counterCurrent = document.getElementById("counter");
const maxScore = document.getElementById("maxScore");
const retry = document.querySelector(".end-game");
const rankInformation = document.querySelector(".rank-container");
const startButton = document.querySelector("#start");
const gameTitle = document.querySelector("#gameTitle");

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

//Light
var shadowLight = new THREE.DirectionalLight(0xffffff, 1); // Màu trắng, intensity 1
shadowLight.position.set(-50, 50, -50);
shadowLight.castShadow = true;
shadowLight.intensity = 5;
shadowLight.shadow.camera.far = 100
shadowLight.shadow.camera.left = -15; // Điểm bắt đầu bên trái của phạm vi camera
shadowLight.shadow.camera.right = 15; // Điểm kết thúc bên phải của phạm vi camera
shadowLight.shadow.camera.top = 15; // Điểm kết thúc phía trên của phạm vi camera
shadowLight.shadow.camera.bottom = -15; // Điểm bắt đầu phía dưới của phạm vi camera
scene.add(shadowLight);



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
  {
    path: [
      "../assets/models/vehicles/train/back/0.obj",
      "../assets/models/vehicles/train/back/0.png",
    ],
    type: ["back_train", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/train/front/0.obj",
      "../assets/models/vehicles/train/front/0.png",
    ],
    type: ["front_train", "car"],
  },
  {
    path: [
      "../assets/models/vehicles/train/middle/0.obj",
      "../assets/models/vehicles/train/middle/0.png",
    ],
    type: ["middle_train", "car"],
  }
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

async function getDataRank() {
  try {
    const response = await axios.get(baseUrl)
    if (response.data.message === "OK") {
      const rankContainer = document.querySelector(".rank-container");
      const rankHeader = rankContainer.querySelector(".rank-header");
      rankHeader.innerHTML = "";

      const rankRow = document.createElement("div");
      rankRow.classList.add("rank-header");
      rankRow.innerHTML = `
        <p>Rank</p>
        <p>Score</p>
      `;
      rankHeader.appendChild(rankRow);

      const users = response.data.data.sort((userA, userB) => userB.score - userA.score);
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const rankItem = document.createElement("div");
        rankItem.classList.add("rank-item");
        rankItem.innerHTML = `
          <p>${i + 1}</p>
          <p>${user.name}</p>
          <p>${user.score}</p>
        `;
        rankContainer.appendChild(rankItem);
      }
    }
  } catch (error) {
    console.log(error)
  }
}

const initGame = async () => {
  window.addEventListener("resize", onResize);
  if (!localStorage.getItem("maxScoreFunWorld") || localStorage.getItem("maxScoreFunWorld" == null)) {
    localStorage.setItem("maxScoreFunWorld", 0);
  }

  getDataRank()

  maxScore.innerText = "Max: " + localStorage.getItem("maxScoreFunWorld");

  const form = document.querySelector(".form");
  if (localStorage.getItem("name")) {
    form.style.display = "none";
  } else {
    startButton.style.display = "none";
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", async () => {
      const name = document.getElementById("name");
      if (!name.value.trim || name.value == '') {
        toastr.info("Please enter a name.");
        return;
      }
      try {
        const data = name.value
        const response = await axios.post(baseUrl, {
          name: data
        });
        console.log(response)
        if (!response.data.account) {
          console.error("Error creating user:", response.data.message);
          return;
        }

        localStorage.setItem("name", response.data.account.name);
        localStorage.setItem("userId", response.data.account._id)
        localStorage.setItem("maxScoreFunWorld", response.data.account.score)
        form.style.display = "none";
        startButton.style.display = "block";
      } catch (error) {
        console.error("Error sending user name to API:", error);
      }
    })
  }

  playGame();
};

initGame();
addEvent();

function playGame() {
  if (models === null || models === undefined) {
    console.error("models null at main");
  }

  player = new Player("chicken", models, 0, 0, 0);
  scene.add(player.model);

  cars = generateLanes(models, scene).cars;
}

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
}

function shadowCamFollowPlayer() {
  let playerPos = player.model.position;
  shadowLight.position.set(playerPos.x - 50, 50, playerPos.z - 50)

  shadowLight.shadow.camera.left = playerPos.x - 15; // Điểm bắt đầu bên trái của phạm vi camera
  shadowLight.shadow.camera.right = playerPos.x + 15; // Điểm kết thúc bên phải của phạm vi camera
  shadowLight.shadow.camera.top = playerPos.z + 15; // Điểm kết thúc phía trên của phạm vi camera
  shadowLight.shadow.camera.bottom = playerPos.z - 15; // Điểm bắt đầu phía dưới của phạm vi camera
  // console.error(shadowLight.shadow.camera.left + " " + shadowLight.shadow.camera.right + " " +
  //   shadowLight.shadow.camera.top + " " + shadowLight.shadow.camera.down);
}

function endGame() {
  retry.style.display = "block";
  player.isDead = true;
}

function animate() {
  requestAnimationFrame(animate);
  checkCollisions();
  shadowCamFollowPlayer();
  // controls.update()
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

function addEvent() {
  retryButton.addEventListener("click", async function () {
    try {
      console.log(player.ScoreNow)
      if (player.ScoreNow > localStorage.getItem("maxScoreFunWorld")) {
        localStorage.setItem("maxScoreFunWorld", player.ScoreNow);
        const data = {
          _id: localStorage.getItem("userId"),
          score: localStorage.getItem("maxScoreFunWorld")
        }
        const response = await axios.put(baseUrl, data)
        getDataRank()
      }
    } catch (error) {
      console.error("Error sending user name to API:", error);
    }

    const endGameDiv = document.querySelector(".end-game");
    endGameDiv.style.display = "none";
    player.setPosition(0, 0, 0);
    camera.position.set(4, 12, -5);
    player.counter = 0;
    player.isDead = false;
    counterCurrent.innerText = player.counter;
  });

  rankButton.addEventListener("click", function () {
    rankInformation.style.display = "block";
    startButton.style.display = "none";
    gameTitle.style.display = "none";
  });

  closeButton.addEventListener("click", function () {
    rankInformation.style.display = "none";
    startButton.style.display = "block";
    gameTitle.style.display = "block";
  });

  startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    gameTitle.style.display = "none";
    playMusic();
    player.play(models, scene);
  });
}

