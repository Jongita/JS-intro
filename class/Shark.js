import Fish from './Fish.js';

class Shark extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'shark';
        this.sound = 'hsh hsh';
        this.emoji = '🦈🦈';
        this.likesEatHuman = false;
    }
    eatHuman() {
        if (this.likesEatHuman = true); {
            return `${this.name}: Kaip noreciau paragauti plaukmenu...`;
        }
    }
}

export default Shark;