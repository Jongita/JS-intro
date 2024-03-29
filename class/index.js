/*
Animals
*/

import Pet from "./Pet.js";
import Bird from "./Bird.js";
import Fish from "./Fish.js";
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
const brisius = new Dog('Brisius', 'white', 'wuf');
console.log(rexas.intro());
console.log(brisius.intro());
console.log(rexas.doubleSound());
console.log(brisius.doubleSound());

const pukis = new Cat('Pūkis', 'white');
const garfildas = new Cat('Garfildas', 'ginger');
console.log(pukis.intro());
console.log(garfildas.intro());
console.log(pukis.doubleSound());
console.log(garfildas.doubleSound());

const steve = new Hamster('Steve', 'white');
const spirgis = new Hamster('Spirgis', 'white-black');
console.log(steve.intro());
console.log(spirgis.intro());
steve.eat(2);
console.log(steve.eat(2));
console.log(steve.doubleSound());

console.log('-----------------------------------------');

const zakas = new Parrot('Zakas', 'green');
console.log(zakas.intro());
console.log(zakas.fly());
console.log(zakas.stopFly());
console.log(zakas.repeatSound());
console.log(zakas.doubleSound());
console.log(zakas.repeatHistory('Labas'));
console.log(zakas.repeatHistory('Ka veiki?'));
console.log(zakas.repeatHistory('Labanaktis'));
console.log(zakas.repeatHistory('Ka sakei?'));

const cika = new Canary('Cika', 'yellow');
console.log(cika.intro());
console.log(cika.fly());
console.log(cika.stopFly());
console.log(cika.doubleSound());

const baltasis = new Stark('Baltasis', 'white');
console.log(baltasis.intro());
console.log(baltasis.fly());
console.log(baltasis.stopFly());
console.log(baltasis.bringBabies(1));
console.log(baltasis.bringBabies(2));
console.log(baltasis.doubleSound());



console.log('-----------------------------------------');

const babyShark = new Shark('BabyShark', 'grey');
console.log(babyShark.intro());
console.log(babyShark.swim());
console.log(babyShark.stopSwim());
console.log(babyShark.eatHuman());
console.log(babyShark.doubleSound());

const karosiukas = new Goldfish('Karosiukas', 'orange', 3);
console.log(karosiukas.intro());
console.log(karosiukas.swim());
console.log(karosiukas.stopSwim());
console.log(karosiukas.makeWish('Noriu namo'));
console.log(karosiukas.makeWish('Noriu pinigu'));
console.log(karosiukas.makeWish('Noriu atsidurti saloje'));
console.log(karosiukas.makeWish('Noriu atostogu!'));
console.log(karosiukas.doubleSound());


const orkas = new Dolphin('Orkas', 'blue');
console.log(orkas.intro());
console.log(orkas.swim());
console.log(orkas.stopSwim());
console.log(orkas.jumpFromWater(1));
console.log(orkas.jumpFromWater(1));
console.log(orkas.doubleSound());