import Bird from './Bird.js';

class Stark extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Stark';
        this.sound = 'trr trr trr';
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



// / - Bird(name, color), intro(), fly(), stopFly():
// // - Parrot(name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
//     - history
//     - repeatSound({{ sound }})
//     - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
//         - Canary(name, color), intro(), fly(), stopFly()
//         - Stark(name, color), intro(), fly(), stopFly(), bringBabies()
//         - babiesCount
//         - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika({{ babiesCount }})