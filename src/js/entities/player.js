import { Entity } from "./entity";
import { generateRandomPosition, createLane } from '../utilities/generateMap.js'
import { playSfx } from "../utilities/playSound.js";

const counterDOM = document.getElementById('counter');
const maxScore = document.getElementById('maxScore');
const currentMaxScore = localStorage.getItem('maxScoreFunWorld')

export class Player extends Entity {
  constructor(type, models, x, y, z) {
    super(type, models, x, y, z);
    this.isJumping = false;
    this.duration = 400; // Thời gian mỗi animation
    this.ScoreNow = 0;
    this.counter = 0
  }

  play(models, scene) {
    const movementDistance = 1;
    let pressedKey = false;

    // Event listener for keydown
    document.addEventListener('keydown', (event) => {
      try {
        if (!pressedKey) {
          pressedKey = true;
          setTimeout(() => {
            pressedKey = false;
          }, this.duration)

          let keyCode = event.code;
          let deltaX = 0, deltaZ = 0;

          switch (keyCode) {
            case "ArrowLeft":
              deltaX = +movementDistance; // sang trai
              this.jump();
              break;

            case "ArrowRight":
              deltaX = -movementDistance; //phai
              this.jump();
              break;

            case "ArrowDown":
              if (this.targetZ != 0) {
                deltaZ = -movementDistance;// xuong
                this.jump();
                // deleteLane(scene)
              }
              break;

            case "ArrowUp": {
              deltaZ = +movementDistance; // len
              this.jump();
              this.targetZ = this.posZ + deltaZ;
              // thêm lane
              const laneType = generateRandomPosition(0, 2) === 0 ? 'field' : 'road';
              const direction = Math.random() < 0.5 ? 'left' : 'right';

              createLane(laneType, direction, this.targetZ + 13, models, scene)
              this.counter++;
              if (this.counter > this.ScoreNow) {
                this.ScoreNow = this.counter;
              }
              if (this.counter >= currentMaxScore) {
                localStorage.setItem('maxScoreFunWorld', this.counter)
                maxScore.innerText = "Max: " + this.ScoreNow
              }
              counterDOM.innerText = this.ScoreNow;
              break;
            }

            default:
              return;
          }

          playSfx("jump");

          this.targetX = this.posX + deltaX;
          this.targetZ = this.posZ + deltaZ;

          this.setPosition(this.posX, 0, this.posZ);
          this.model.lookAt(this.targetX, 0, this.targetZ);
        }
      } catch (error) {
        console.log(error)
      }

    })
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.startTime = Date.now();
      this.jumpStartPosY = this.model.position.y;
      this.animate();
    }
  }

  animate() {
    const jumpHeight = 0.75; // Độ cao của nhảy

    const elapsedTime = Date.now() - this.startTime;
    const progress = Math.min(elapsedTime / this.duration, 1); // Ensure jump completes within duration

    const jumpPosition = this.jumpStartPosY + jumpHeight * Math.sin(Math.PI * progress);
    const horizontalPosition = this.posX + (this.targetX - this.posX) * progress;
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