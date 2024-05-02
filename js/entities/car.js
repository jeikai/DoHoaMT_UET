import { Entity } from "./entity";

export class Car extends Entity {

    constructor(models, type, x, y, z, direction) {
        super(type, models, x, y, z);
        this.direction = direction;
    } 
}