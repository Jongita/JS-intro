import Bird from './Bird.js';

class Stark extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'stark';
        // this.sound = 'Miau miau';
        // this.emoji = '🐈🐈';
    }
}

export default Stark;