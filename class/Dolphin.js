import Fish from './Fish.js';

class Dolphin extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'dolphin';

    }
}

export default Dolphin;