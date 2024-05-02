import { Entity } from "./entity";
import {
  generateLanes,
  generateRandomPosition,
} from "../utilities/generateMap.js";
import { playSfx } from "../utilities/playSound.js";
import { Lane } from "../utilities/generateMap.js"
import * as THREE from "three";

const counterDOM = document.getElementById("counter");
const maxScore = document.getElementById("maxScore");
const currentMaxScore = localStorage.getItem("maxScoreFunWorld");

export class Player extends Entity {
  isDead = false;
 
  constructor(type, models, x, y, z, scene) {
    super(type, models, x, y, z);
    this.scene = scene;
    this.isJumping = false;
    this.duration = 400; // Thời gian mỗi animation
    this.ScoreNow = 0;
    this.counter = 0;
  }

  play(models, scene) {
    const movementDistance = 1;
    let pressedKey = false;

    // Event listener for keydown

    document.addEventListener("keydown", (event) => {
      try {
        if (!pressedKey && !this.isDead) {
          pressedKey = true;
          setTimeout(() => {
            pressedKey = false;
          }, this.duration);

          let keyCode = event.code;
          let deltaX = 0,
            deltaZ = 0;

          switch (keyCode) {
            case "ArrowLeft":
              deltaX = +movementDistance; // sang trai
              this.jump(deltaX, deltaZ);
              break;

            case "ArrowRight":
              deltaX = -movementDistance; //phai
              this.jump(deltaX, deltaZ);
              break;

            case "ArrowDown":
              if (this.targetZ != 0) {
                deltaZ = -movementDistance; // xuong
                this.jump(deltaX, deltaZ);
                this.counter--;
                // deleteLane(scene)
              }
              break;

            case "ArrowUp": {
              deltaZ = +movementDistance; // len
              this.jump(deltaX, deltaZ);
              this.targetZ = this.posZ + deltaZ;
              // thêm lane
              let randomNumber = generateRandomPosition(1, 10)
              const laneType = randomNumber >= 1 && randomNumber <= 4 ? 'field' : randomNumber >= 5 && randomNumber <= 8 ? 'road' : 'railroad';
              const direction = Math.random() < 0.5 ? "left" : "right";

              new Lane(laneType, direction, this.targetZ + 13, models, scene)
              this.counter++; 
              if (this.counter > this.ScoreNow) {
                this.ScoreNow = this.counter;
              }
              if (this.ScoreNow >= currentMaxScore) {
                maxScore.innerText = "Max: " + this.ScoreNow;
              }
              counterDOM.innerText = this.ScoreNow;
              break;
            }

            default:
              return;
          }

          // playSfx("jump");


        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  jump(deltaX, deltaZ) {
    let trees = generateLanes(this.model, this.scene).list_trees;

    let playerBox = new THREE.Box3().setFromObject(this.model);
    const size = new THREE.Vector3();
    playerBox.getSize(size);

    // Lấy chiều dài, chiều rộng và chiều cao từ kích thước
    const length = size.x;
    const width = size.y;
    const height = size.z;

    let futurePlayerBox = new THREE.Box3().setFromCenterAndSize(
      new THREE.Vector3(this.posX + deltaX, this.posY, this.posZ + deltaZ), // Tọa độ góc dưới bên trái của hình hộp
      new THREE.Vector3(length - 0.5, width, height - 0.5) // Tọa độ góc trên bên phải của hình hộp
    );

    let isCollisions = false;
    for (let i = 0; i < trees.length; i++) {
      let tree = trees[i];

      // Tạo hình hộp bao quanh cây
      let treeBox = new THREE.Box3().setFromObject(tree.model);

      // Kiểm tra va chạm giữa futurePlayerBox và treeBox
      if (futurePlayerBox.intersectsBox(treeBox)) {
        isCollisions = true;
      }
    }

    if (isCollisions === false) {
      this.targetX = this.posX + deltaX;
      this.targetZ = this.posZ + deltaZ;

      playSfx("jump");
      if (!this.isJumping) {
        this.isJumping = true;
        this.startTime = Date.now();
        this.jumpStartPosY = this.model.position.y;
        this.animate();
      }

      // this.setPosition(this.posX, 0, this.posZ);
      this.model.lookAt(this.targetX, 0, this.targetZ);
    } else {
      console.error("Con lon dam dau vao cay roi");
    }
  }

  animate() {
    const jumpHeight = 0.75; // Độ cao của nhảy

    const elapsedTime = Date.now() - this.startTime;
    const progress = Math.min(elapsedTime / this.duration, 1); // Ensure jump completes within duration

    const jumpPosition =
      this.jumpStartPosY + jumpHeight * Math.sin(Math.PI * progress);
    const horizontalPosition =
      this.posX + (this.targetX - this.posX) * progress;
    const verticalPosition = this.posZ + (this.targetZ - this.posZ) * progress;

    this.model.position.y = jumpPosition;
    this.model.position.x = horizontalPosition;
    this.model.position.z = verticalPosition;

    if (elapsedTime < this.duration) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.isJumping = false;
      // Reset player position to ground level
      this.model.position.y = this.jumpStartPosY;
      this.posX = Math.max(-10, Math.min(10, this.targetX));
      this.posZ = this.targetZ;
    }
  }
}
