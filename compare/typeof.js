/*
TYPEOF - duomens tipo nustatymo operatorius
*/


const a = typeof 5;
console.log(a);

const b = typeof 'aaaasssd';
console.log(b);

const c = typeof true;
console.log(c);

function example() {
    return 777;
}

const d = typeof example();
console.log(d);

const e = typeof example;
console.log(e);

const f = typeof undefined;
console.log(f);

const g = typeof typeof 5;
// const g = typeof (typeof 5);
// const g = typeof ('number'); (number grazina kaip stringa)
// const g = 'string';
console.log(g);

console.log('--------------');

const h = typeof [5, 7, 8];
console.log(h);

const i = typeof ['labas', 'rytas'];
console.log(i);