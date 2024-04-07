export class Entity {
    constructor(type, models, x, y, z) {
        this.type = type;
        this.model = null; // Initialize model as null
        if (models === null || models === undefined)
            console.error("models null");
        models.forEach(m => {
            if (m.type === type && m.model) {
                this.model = m.model.clone();
            } else {
                console.error("model not und");
            }
        });
        // Check if model is not null before setting position
        this.setPosition(x, y, z);
    }

    setPosition(x, y, z) {
        this.posX = x;
        this.posY = y;
        this.posZ = z;
        // Check if model is not null before setting position
        if (this.model) {
            this.model.position.set(this.posX, this.posY, this.posZ);
        } else {
            console.error("loi model");
        }
    }

    getPosition() {
        return { x: this.posX, y: this.posY, z: this.posZ };
    }
}