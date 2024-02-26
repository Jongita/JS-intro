/*
Animals
*/

import Dog from "./Dog.js";
import Cat from "./Cat.js";
import Hamster from "./Hamster.js";

import Parrot from "./Parrot.js";
import Canary from "./Canary.js";
import Stark from "./Stark.js";
import Shark from "./Shark.js";
import Goldfish from "./Goldfish.js";
import Dolphin from "./Dolphin.js";

const rexas = new Dog('Rexas', 'brown', 'bark');
const brisius = new Dog('Brisius', 'white', 'au');
console.log(rexas.intro());
console.log(brisius.intro());

const pukis = new Cat('Pūkis', 'white');
const garfildas = new Cat('Garfildas', 'ginger');
console.log(pukis.intro());
console.log(garfildas.intro());

const steve = new Hamster('Steve', 'white');
const spirgis = new Hamster('Spirgis', 'white-black');
console.log(steve.intro());
console.log(spirgis.intro());
steve.eat(2);
console.log(steve.eat(2));


console.log('-----------------------------------------');

const zakas = new Parrot('Zakas', 'green');
console.log(zakas.intro());
console.log(zakas.fly());
console.log(zakas.stopFly());
console.log(zakas.repeatSound('cik cirik'));

const cika = new Canary('Cika', 'yellow');
console.log(cika.intro());
console.log(cika.fly());
console.log(cika.stopFly());

const baltasis = new Stark('Baltasis', 'white');
console.log(baltasis.intro());
console.log(baltasis.fly());
console.log(baltasis.stopFly());
console.log(baltasis.bringBabies(1));
console.log(baltasis.bringBabies(2));



console.log('-----------------------------------------');

const babyShark = new Shark('BabyShark', 'grey');
console.log(babyShark.intro());
console.log(babyShark.swim());
console.log(babyShark.stopSwim());
console.log(babyShark.eatHuman());

const karosiukas = new Goldfish('Karosiukas', 'orange', 3);
console.log(karosiukas.intro());
console.log(karosiukas.swim());
console.log(karosiukas.stopSwim());
console.log(karosiukas.makeWish('Noriu namo'));
console.log(karosiukas.makeWish('Noriu pinigu'));
console.log(karosiukas.makeWish('Noriu atsidurti saloje'));
console.log(karosiukas.makeWish('Noriu atostogu!'));


const orkas = new Dolphin('Orkas', 'blue');
console.log(orkas.intro());
console.log(orkas.swim());
console.log(orkas.stopSwim());
console.log(orkas.jumpFromWater(1));
console.log(orkas.jumpFromWater(1));