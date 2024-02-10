'use strict' // ateityje naudosim by default
/*
FOR - ciklas (pagrindinis)
*/

let a = 0;

a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;

console.log(a);

console.log('START');

// I - nuo ko pradeda, II - iki kiek
for (let i = 0; i < 15; i += 2) {
    console.log(i);
}

console.log('END');

// for (let i = 0; i < 15; i++)

//              0  1  2  3  4   5  < 6
const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    console.log(i, marks[i], '---', sum);
}

console.log('SUM:', sum, sum / marks.length);


console.clear();

let k = 0;

for (let k = 0; k < 4; k++) {
    console.log(k);
}

console.log('--------------');

for (; k < 8; k++) {
    console.log(k);
}
console.log('--------------');

for (; k < 11; k++) {
    console.log(k);
}

console.clear();

// let i = 0;

// for (; i < 5; ++i) {
//     console.log(i);
// }

// let m = 2;

// for (let i = 0; i + m < 5; i++) {
//     console.log(i, m, i + m);
// }

// m=2, i=0; i+m= 2<5=true --> 0;

// ++i efektyvesne

let m = 2;

for (let i = 0; i + m < 5;) {
    console.log(i, m, i + m);
    i++;
}

// pasiziureti begalini cikla

// irankis su funkcija

console.clear();

for (let i = 4; i >= 0; i--) {
    console.log(i);
}
console.clear();

function arTestiCikla(index) {
    if (index < 5) {
        return true;
    }

    return false;
}

let k = 0;
let i = 0;

for (; arTestiCikla(i);) {
    console.log(i, k++);
    i++;
}


console.clear();

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

console.log('----');

for (let i = 0; i < 5; i++) {
    console.log(4 - i);
}

