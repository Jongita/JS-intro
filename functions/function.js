/*
FUNCTION - funkcija
Perpanaudojamas logikos blokas

function example(parametrai) {
    // 1. parametru validavimas
    // 2. logika
    // 3. rezultato validavimas
    // 4. rezultato grazinimas
}


*/

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 13;
const b2 = 13;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

const c1 = 7;
const c2 = 77;
const c3 = 1 + c1 * 2 + c2 * 3 + 3;
console.log(c3);

// Funkcija pavadinimu “tusciaFunkcija”:
function empty() {
}

const x1 = empty();
console.log(x1);

// gražina boolean tipo reikšmę “false”

function boolFalse() {
    return false;
}

const x2 = boolFalse();
console.log(x2);


function giveMeNumber() {
    return 42069
}

const x4 = giveMeNumber();
console.log(x4);


function labas(name) {
    return `Labas as ${name}!`;
}

const x7 = labas();
console.log(x7);

// Krabas --> Labas, as krabas!
// Jonas --> Labas, as Jonas!
// Maryte --> Labas, as Maryte!

// Labas as krabas!

// VARDAS --> Labas, as {VARDAS}!

const x8 = labas('Jonas');
console.log(x8);


function dvygubai(number) {
    return number * 2;
}

const x10 = dvygubai(10);
console.log(x10);

function introduction(name, age) {
    return `Sveiki mano vardas ${name} ir man ${age} metai`;
}

const x14 = introduction('Jonas', '99');
console.log(x14);
const x15 = introduction('Maryte', '88');
console.log(x15);

// 0 -> 0 Eur 
// 10 -> 10 Eur 
// 50 -> 50 Eur 
// 90 -> 90 Eur 
// 99 -> 99 Eur 
// 100 -> 50 Eur 
// 102 -> 51 Eur 
// 200 -> 100 Eur 


function price(amount) {
    if (amount < 100) {
        return amount + ' Eur';
    } else {
        return (amount / 2) + ' Eur';
    }
}

console.log(price(0), '->', '0 Eur');
console.log(price(10), '->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90), '->', '90 Eur');
console.log(price(99), '->', '99 Eur');
console.log(price(100), '->', '50 Eur');
console.log(price(102), '->', '51 Eur');
console.log(price(200), '->', '100 Eur');


console.log(price(-200), '->', 'Error');
console.log(price(Infinity), '->', 'Error');
console.log(price(-Infinity), '->', 'Error');
console.log(price(NaN), '->', 'Error');
console.log(price(true), '->', 'Error');
console.log(price('dasfg'), '->', 'Error');
console.log(price(undefined), '->', 'Error');
console.log(price(), '->', 'Error');
console.log(price(price), '->', 'Error');

console.clear();


function betterPrice(amount) {
    //  validacijos
    if (typeof amount !== 'number') {
        return 'ERROR: duok skaiciaus tipo reiksme';
    }
    if (amount < 0) {
        return 'ERROR: duok teigiama skaiciu';
    }
    if (amount === Infinity) {
        return 'ERROR: skaicius negali buti Infinity';
    }
    if (isNaN(amount)) {
        return 'ERROR: duok normalu skaiciu';
    }
    // logika
    let result = '';

    if (amount < 100) {
        result = amount + ' Eur';
    } else {
        result = (amount * 0.5) + ' Eur';
    }
    //  rezultato validacija
    if (result === '') {
        return 'ERROR: kazkas negerai su logika'
    }
    // rezultato grazinimas
    return result;
}



console.log(betterPrice(0), '->', '0 Eur');
console.log(betterPrice(10), '->', '10 Eur');
console.log(betterPrice(50), '->', '50 Eur');
console.log(betterPrice(90), '->', '90 Eur');
console.log(betterPrice(99), '->', '99 Eur');
console.log(betterPrice(100), '->', '50 Eur');
console.log(betterPrice(102), '->', '51 Eur');
console.log(betterPrice(200), '->', '100 Eur');
console.log(betterPrice(200.01), '->', '100.00 Eur');



console.log(betterPrice(true), '->', 'Error');
console.log(betterPrice('dasfg'), '->', 'Error');
console.log(betterPrice(undefined), '->', 'Error');
console.log(betterPrice(), '->', 'Error');
console.log(betterPrice(betterPrice), '->', 'Error');
console.log(betterPrice(-200), '->', 'Error');
console.log(betterPrice(Infinity), '->', 'Error');
console.log(betterPrice(-Infinity), '->', 'Error');
console.log(betterPrice(NaN), '->', 'Error');

// Kuriant funkcija galvoti apie isimtis, pvz, dave skaiciu, o jei duos ne skaiciu
// whitelistas ar blacklistas yra geriau? pvz, negali zinoti visu pavardziu

// const x16 = introduction('Petras');
// console.log(x16);
// const x17 = introduction(66);
// console.log(x17);


// if (isNaN(NaN)) {
//     console.log('Taip');

// } else {
//     console.log('Ne');
// }


// if (isFinite(9999)) {
//     console.log('Taip');

// } else {
//     console.log('Ne');
// }

// if ('' + NaN === 'NaN') {
//     console.log('Taip');

// } else {
//     console.log('Ne');
// }

console.clear();
