import Bird from './Bird.js';

class Canary extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Canary';
        this.sound = 'Ciur Ciur';
        this.emoji = '🐤🐤';
    }
}

export default Canary;