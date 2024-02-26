import Animal from './Animal.js';

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);
        this.soundRepeatCount = 2;
        this.breed = 'Pet';
        this.sound = 'naminis';
        // this.emoji = '🐕🐈🐹';
    }
}

export default Pet;