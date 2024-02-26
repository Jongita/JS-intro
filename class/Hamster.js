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

