export class Entity {
    constructor(type, models, x, y, z) {
        this.type = type;
        this.model = null; // Initialize model as null
        if (models === null || models === undefined)
            console.error("models null");
        for (const i in models) {
            const m = models[i];
            if (m.type === type && m.model) {
                this.model = m.model.clone();
                break;
            } 
        }
        if(!this.model){
            console.error("model " + type + " not und");
        }
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
            console.error("loi model " + type);
        }
    }

    getPosition() {
        return { x: this.posX, y: this.posY, z: this.posZ };
    }
}