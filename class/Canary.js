import Bird from './Bird.js';

class Canary extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'canary';
        // this.sound = 'Miau miau';
        // this.emoji = '🐈🐈';
    }
}

export default Canary;