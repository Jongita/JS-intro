import Bird from './Bird.js';

class Canary extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Canary';
        this.sound = 'ciur ciur';
        this.emoji = '🐤🐤';
    }
}

export default Canary;

// / - Bird(name, color), intro(), fly(), stopFly():
// // - Parrot(name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
//     - history
//     - repeatSound({{ sound }})
//     - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
//         - Canary(name, color), intro(), fly(), stopFly()
//         - Stark(name, color), intro(), fly(), stopFly(), bringBabies()
//         - babiesCount
//         - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika({{ babiesCount }})