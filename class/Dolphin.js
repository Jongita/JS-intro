import Fish from './Fish.js';

class Dolphin extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Dolphin';
        this.sound = 'Kvi Kvi';
        this.emoji = '🐬🐬';
        this.jumpCount = 0;
        this.soundRepeatCount = 5;
    }
    jumpFromWater(amount) {
        this.jumpCount += amount;
        return (`${this.name} issoko is vandens ${this.jumpCount} -a karta.`);
    }
}

export default Dolphin;


// - Fish(name, color), intro(), swim(), stopSwim():
// - Dophin(name, color), intro(), swim(), stopSwim(), jumpFromWater()
//     - jumpCount
//     - jumpFromWater() Delfinas issoko is vandens { { jumpCount } } -a karta