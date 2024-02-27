import Pet from './Pet.js';

class Dog extends Pet {
    constructor(name, color, sound) {
        super(name, color);
        this.sound = this.doubleSound2(sound);
        this.breed = 'Dog';
        // this.sound = 'au au';
        this.emoji = '🐕🐕';
    }
    doubleSound2(sound) {
        const str = `${sound} ${sound}`;
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default Dog;


// Animal(name, color), intro():
// - Pet(name, color), intro():
// - Dog(name, color, sound), intro()
//     - sound -> Double sound
//         - Cat(name, color), intro()
//         - Hamster(name, color), intro(), eat()
//         - foodAmount
//         - eat(): Mano burnoje siuo metu yra { { foodAmout++ } } morku