/*

IF - reiksmiu palyginimas
SABLONAI:
if () {}   - jei tenkina if - isspaudina, jei netenkina, nieko nespaudina

if () {} else {} -  If jei netenkina, toliau vykdo Else, jei if tenkina vykdo if

if () {} else if () {}  - Sekantis atsarginis klausimas, o jei ?If, else if...
prie default versijos grazina jei netenkina ne vienos versijos (if, else if..)
bus vykdomas tik pirmas tenkinamas variantas

if () {}.... else if () {} else {}


if () {}.... else if () {}...
if () {}.... else if () {}...else {}

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

*/

const profesija = 'Studentas';
const amzius = 18;
const amziausLimitas = 21;

if (amzius >= amziausLimitas) {
    console.log(('Ko noreso?'));
} else {
    console.log('Sorry...per mazai metuku');
}
console.log('END');



let msg = profesija + ' ieina i bara...';
console.log(msg);

if (amzius >= amziausLimitas) {
    msg = 'tai ko noresi uzsisakyti?';
} else {
    msg = profesija + '...tu vis tiek neturi pinigu';
}

console.log(msg);

console.log('END');

const win = 'xp';
let msgWin = 'Tu neturi windowsu???';


if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else {
    msgWin = 'Neatpazinta OS'
}
console.log(msgWin);

if ('keturi' == 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if ('4' === 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

let a = 7;
let b = 0;
let msgAB = 'Default...';
a += 1;

if (a = b) {
    msgAB = 'Lygus';
} else {
    msgAB = 'Skirtingi'
}

console.log(msgAB, a, b);

const saskaita = 100;
const isimti = 100;

let msgBankas = 'Inicijuojame bankine operacija...';

if (saskaita === isimti) {
    msgBankas = 'Stai tavo ' + isimti + ' pinigai';
} else {
    msgBankas = 'Tu tiek neturi, kiek nori issiimti'
}

console.log(msgBankas);


console.log('************************************************');


//  Code nesting, jei tenkina pirmini if, tik tada sekancius vidinius if

const diena = 2;
// iki 11val - pusryciu meniu;
// iki 16val - dienos meniu;
// po 16val - vakaro meniu;
const laikas = 20;

if (diena === 1) {
    if (laikas < 11) {
        console.log('Pirmadienio meniu: rytas');
    } else if (laikas < 16) {
        console.log('Pirmadienio meniu: diena');
    } else {
        console.log('Pirmadienio meniu: vakaras');
    }
} else {
    if (laikas < 11) {
        console.log('Standartinis meniu: rytas');
    } else if (laikas < 16) {
        console.log('Standartinis meniu: diena');
    } else {
        console.log('Standartinis meniu: vakaras');
    }
}

if (diena === 24 || diena === 25) {
    console.log('Kaledinis meniu');
} else if (diena === 1 && laikas < 11) {
    console.log('Pirmos menesio dienos meniu: rytas');
} else if (diena === 1 && laikas < 16) {
    console.log('Pirmos menesio dienos meniu: diena');
} else if (diena === 1) {
    console.log('Pirmos menesio dienos meniu: vakaras');
} else if (diena !== 1 && laikas < 11) {
    console.log('Standartinis meniu: rytas');
} else if (diena !== 1 && laikas < 16) {
    console.log('Standartinis meniu: diena');
} else if (diena !== 1) {
    console.log('Standartinis meniu: vakaras');
}


console.clear();

