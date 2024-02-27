import Pet from './Pet.js';

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Hamster';
        this.sound = 'nom nom';
        this.emoji = '🐹🐹';
        this.foodAmount = 0;
    }

    eat(amount) {
        this.foodAmount += amount;
        return (`${this.name} burnoje siuo metu yra ${this.foodAmount} morkos.`);
    }

}
export default Hamster;

// Animal(name, color), intro():
// - Pet(name, color), intro():
// - Dog(name, color, sound), intro()
//     - sound -> Double sound
//         - Cat(name, color), intro()
//         - Hamster(name, color), intro(), eat()
//         - foodAmount
//         - eat(): Mano burnoje siuo metu yra { { foodAmout++ } } morku