import Bird from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Parrot';
        this.sound = 'ka ka';
        this.emoji = '🦜🦜';
        this.history = 3;
        this.repeatedText = 0;
    }

    repeatSound(sound) {
        const str = `${this.sound} ${this.sound}`;
        const repeatedSound = str[0].toUpperCase() + str.slice(1);
        return `${this.name}: ${repeatedSound}`;
    }
    repeatHistory(text) {
        this.repeatedText += text.split().length;
        if (this.repeatedText <= this.history) {
            return `${this.name}: ${text}`;
        } else {
            return `${this.name}: Daugiau neatsimenu 😒`;
        }
    }
}



export default Parrot;


// - Bird(name, color), intro(), fly(), stopFly():
// - Parrot(name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
//     - history
//     - repeatSound({{ sound }})
//     - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
//         - Canary(name, color), intro(), fly(), stopFly()
//         - Stark(name, color), intro(), fly(), stopFly(), bringBabies()
//         - babiesCount
//         - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika({{ babiesCount }})



// Parrot
// repeatHistory()