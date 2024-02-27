import Pet from './Pet.js';

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Cat';
        this.sound = 'miau miau';
        this.emoji = '🐈🐈';
    }
}

export default Cat;

// Animal(name, color), intro():
// - Pet(name, color), intro():
// - Dog(name, color, sound), intro()
//     - sound -> Double sound
//         - Cat(name, color), intro()
//         - Hamster(name, color), intro(), eat()
//         - foodAmount
//         - eat(): Mano burnoje siuo metu yra { { foodAmout++ } } morku