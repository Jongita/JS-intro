import Bird from './Bird.js';

class Stark extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'stark';
        // this.sound = 'Miau miau';
        this.emoji = '🦅🦅';
        this.isBringingBabies = true;
        this.babiesCount = 0;
    }

    bringBabies(amount) {
        this.babiesCount += amount;
        if (this.isBringingBabies === true) {
            return `${this.name}: Zmones i kopustu lauka atnesiau dar viena vaika. Viso jau: ${this.babiesCount}`;
        } else {
            return `${this.name}: As nenesu vaiku`;
        }
    }
}

export default Stark;



// - Stark(name, color), intro(), fly(), stopFly(), bringBabies()
//     - babiesCount
//     - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika({{ babiesCount }})
