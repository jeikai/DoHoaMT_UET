import { error } from 'toastr';
import { Car } from '../entities/car.js';
import { Entity } from '../entities/entity.js';

const laneWidth = 11;
let lanes = []
let cars = []
let list_trees = []

export class Lane extends Entity {
    constructor(type, direction, zPosition, models, scene) {
        super(type, models, 0, -0.4, zPosition);
        this._type = type;
        this.direction = direction;
        this.zPosition = zPosition;
        this.entities = [];

        this.createLane(models, scene);
    }
    generateRandomPosition(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    createLane(models, scene) {
        const existingLane = lanes.find(lane => lane.zPosition == this.zPosition);
        if (!existingLane) {
            if (this.type === "field") {
                const grass = new Entity("grass", models, 0, -0.4, this.zPosition);
                scene.add(grass.model);
                this.entities.push(grass);

                if (this.zPosition !== 0) {
                    const numTrees = generateRandomPosition(1, 3);
                    for (let i = 0; i < numTrees; i++) {
                        const treeType = `tree${generateRandomPosition(0, 3)}`;
                        const treeX = generateRandomPosition(-laneWidth, laneWidth);
                        const tree = new Entity(treeType, models, treeX, 0, this.zPosition);
                        scene.add(tree.model);
                        list_trees.push(tree)
                        this.entities.push(tree);
                    }
                }
            } else if (this.type === 'road') {
                const stripe_road = new Entity("stripe_road", models, 0, -0.4, this.zPosition);
                scene.add(stripe_road.model);

                let car_entities = generateCars(models, scene, this.zPosition, this.direction);
                this.entities.push(car_entities)
            } else {
                const railroad = new Entity("railroad", models, 0, -0.4, this.zPosition);
                scene.add(railroad.model);

                let car_entities = generateTrain(models, scene, this.zPosition, this.direction);
                this.entities.push(car_entities);
            }
            lanes.push(this)
        }
    }
}
export function getLanes() {
    return lanes;
}

export function getLane(zIndex) {
    for (let i = 0; i < lanes.length; i++)
        if (lanes[i].zPosition === zIndex)
            return lanes[i];
}
export function generateRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function generateLanes(models, scene) {
    for (let i = -9; i <= 13; i++) {
        let randomNumber = generateRandomPosition(1, 10)
        const laneType = i <= 0 || i == 1 ? 'field' : randomNumber >= 1 && randomNumber <= 4 ? 'field' : randomNumber >= 5 && randomNumber <= 8 ? 'road' : 'railroad';
        const direction = Math.random() < 0.5 ? 'left' : 'right';

        new Lane(laneType, direction, i, models, scene);
    }
    return { lanes, cars, list_trees }
}
export function generateCars(models, scene, zPosition, direction) {
    let car_entities = []
    const numCars = generateRandomPosition(1, 4);
    for (let i = 0; i < numCars; i++) {
        let carXPosition = direction === "left" ? laneWidth : -laneWidth;
        const carZPosition = zPosition;
        const carType = getCarType(generateRandomPosition(1, 10))
        const vehicle = new Car(
            models,
            carType,
            carXPosition, -0.2, carZPosition, direction
        );
        vehicle.model.rotateY(direction === "left" ? -Math.PI / 2 : Math.PI / 2);
        cars.push(vehicle);
        car_entities.push(vehicle)
        scene.add(vehicle.model);
    }

    return car_entities;
}

export function generateTrain(models, scene, zPosition, direction) {
    let car_entities = []
    let d = direction === "left" ? 1 : -1;
    const ramdomPos = Math.floor(Math.random() * 5);
    let carXPosition = direction === "left" ? laneWidth + ramdomPos : -laneWidth - ramdomPos;
    const carZPosition = zPosition;
    const ramdomMiddleTrain = Math.floor(Math.random() * 2);

    const frontTrain = new Car(
        models,
        "front_train",
        carXPosition, -0.2, carZPosition, direction
    );


    frontTrain.model.rotateY(direction === "left" ? -Math.PI : Math.PI);
    cars.push(frontTrain);
    car_entities.push(frontTrain)

    scene.add(frontTrain.model);

    for (let i = 1; i <= ramdomMiddleTrain; i++) {
        carXPosition += 0.25 * d;
        const middleTrain = new Car(
            models,
            "middle_train",
            carXPosition, -0.2, carZPosition, direction
        );
        middleTrain.model.rotateY(direction === "left" ? -Math.PI : Math.PI);
        cars.push(middleTrain);
        car_entities.push(middleTrain)

        scene.add(middleTrain.model);
    }

    carXPosition += 0.25 * d;
    const backTrain = new Car(
        models,
        "back_train",
        carXPosition, -0.2, carZPosition, direction
    );
    backTrain.model.rotateY(direction === "left" ? -Math.PI : Math.PI);
    cars.push(backTrain);
    car_entities.push(backTrain)
    scene.add(backTrain.model);

    return car_entities;
}

function getCarType(randomNumber) {
    switch (randomNumber) {
        case 1:
        case 2:
            return 'orange_car';
        case 3:
        case 4:
            return 'blue_truck';
        case 5:
        case 6:
            return 'blue_car';
        case 7:
        case 8:
            return 'green_car';
        default:
            return 'police_car';
    }
}
export function animateVehicle() {
    lanes.forEach((lane) => {
        if (lane.type === "road") {
            const carArray = Object.values(lane.entities)
            carArray[0].forEach((car, index) => {
                setTimeout(() => {
                    const carPos = car.model.position;
                    const direction = car.direction === "left" ? -1 : 1;
                    const temp = (carPos.x + 0.05 * direction);

                    car.model.position.set(temp, carPos.y, carPos.z);

                    if (Math.round(temp) == laneWidth * direction) {
                        carPos.x = car.direction === "left" ? laneWidth : -laneWidth;
                    }
                }, index * 1000);
            });
        } else if (lane.type === "railroad") {
            const carArray = Object.values(lane.entities)

            carArray[0].forEach((car, index) => {
                setTimeout(() => {
                    const carPos = car.model.position;
                    const direction = car.direction === "left" ? -1 : 1;
                    const temp = (carPos.x + 0.075 * direction);

                    car.model.position.set(temp, carPos.y, carPos.z);
                    if (Math.round(temp) == laneWidth * direction) {
                        carPos.x = car.direction === "left" ? laneWidth : -laneWidth;
                    }
                }, index * 1000);
            });
        }
    })

}