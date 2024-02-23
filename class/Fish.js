class Fish {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'Fish';
        // this.sound = 'Au miau niom';
        // this.emoji = '🐕🐈🐹';
    }

    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}.`;
    }
}

export default Fish;