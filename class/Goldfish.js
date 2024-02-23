import Fish from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'goldfish';

    }
}

export default Goldfish;