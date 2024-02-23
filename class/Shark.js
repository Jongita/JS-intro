import Fish from './Fish.js';

class Shark extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'shark';

    }
}

export default Shark;