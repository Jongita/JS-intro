class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'Bird';
        this.canFly = false;
        this.isFlying = true;

    }

    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}.`;
    }
    fly() {
        this.isFlying = true;
        return `${this.name}: Pradedu skristi`;
    }
    stopFly() {
        this.isFlying = false;
        return `${this.name}: Neskrendu`;
    }
}

export default Bird;