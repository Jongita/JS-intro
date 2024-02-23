import Bird from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'parrot';
    }

}

export default Parrot;
