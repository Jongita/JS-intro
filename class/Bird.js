class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'Bird';
        this.canFly = false;
        this.isFlying = true;

    }

    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}.${this.emoji}`;
    }
    fly() {
        this.isFlying = true;
        return `${this.name}: Pradedu skristi`;
    }
    stopFly() {
        this.isFlying = false;
        return `${this.name}: Neskrendu`;
    }
}

export default Bird;

// - Bird(name, color), intro(), fly(), stopFly():
// - Parrot(name, color), intro(), fly(), stopFly(), repeatSound(), repeatHistory()
//     - history
//     - repeatSound({{ sound }})
//     - repeatHistory() isspausdina paskutinius 3 jam pasakytus tekstus
//         - Canary(name, color), intro(), fly(), stopFly()
//         - Stark(name, color), intro(), fly(), stopFly(), bringBabies()
//         - babiesCount
//         - bringBabies(): Zmones i kopustu lauka atnesiau dar viena vaika({{ babiesCount }})