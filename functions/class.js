/*
OOP - "objektinis" programavimas
*/

class Car {
    constructor(brand, model, color, price) {
        // šis (objektas) - kontekstinis kintamasis
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.isEngineOn = false;
        this.isRadioOn = false;
        this.windowsHeight = [1, 1, 1, 1];
        this.tankSize = 40;
        this.tankLevel = 5;
    }

    turnOnEngine() {
        this.isEngineOn = true;
    }

    turnOffEngine() {
        this.isEngineOn = false;
    }

    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel += amount;
        } else {
            const diff = this.tankSize - this.tankLevel;
            this.tankLevel = this.tankSize;
            console.log(`Per daug, ipilta tik ${diff}`);
        }
    }
}

const audi = new Car('Audi', '80', 'red', 300);
const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);

// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// audi.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOnEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

// tesla.turnOffEngine();
// audi.turnOffEngine();
// console.log(audi.isEngineOn);
// console.log(tesla.isEngineOn);

console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(5);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

audi.fillTank(25);
console.log('Dabartinis kiekis:', audi.tankLevel);

/*

Reikia class'es: Parrot

Savybes:
- vardas
- spalva
- amzius
- miega/nemiega

Funkcionalumas:
- gali pakartoti pasakyta zodi
    - jeigu miega, nereaguoja
    - jeigu pasakomas daugiau nei vienas zodis, tai pakartoja tik pirma zodi
- galima uzmigdyti
- galima pazadinti

*/



class Parrot {
    constructor(vardas, spalva, amzius, arMiegag) {
        this.name = vardas;
        this.color = spalva;
        this.age = amzius;
        this.isSleeping = false;
        this.isRepeating = false;
        this.isWakedUp = false;
        this.word = 'labas';
        this.react = false;


    }
}

const bird1 = new Parrot('Zakas', 'margas', '15', 'true');
console.log(bird1);
const bird2 = new Parrot('Roza', 'geltona', '5', 'false');
console.log(bird1);

