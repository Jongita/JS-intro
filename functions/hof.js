/*
HOF - higher order function
*/

// // const sum = (a, b) => a + b;
// // const diff = (a, b) => a - b;
// // const multi = (a, b) => a * b;
// // const div = (a, b) => a / b;

// const mathFunctions = {
//     sum: (a, b) => a + b,
//     diff: (a, b) => a - b,
//     multi: (a, b) => a * b,
//     div: (a, b) => a / b,
// };

// const n1 = 7;
// const n2 = 5;
// const operation = 'sum';


// // function math(a, opera, b) {
// //     if (opera === '+') {
// //         return sum(a, b);
// //     }
// //     if (opera === '-') {
// //         return diff(a, b);
// //     }
// //     if (opera === '*') {
// //         return multi(a, b);
// //     }
// //     if (opera === '/') {
// //         return div(a, b);
// //     }
// // }
// // const res1 = math(7, '+', 5);
// // const res2 = math(7, '-', 5);
// // const res3 = math(7, '*', 5);
// // const res4 = math(7, '/', 5);

// function calculator(a, opera, b) {
//     return mathFunctions[opera](a, b)
// };

// const res1 = calculator(7, '+', 5);
// const res2 = calculator(7, '-', 5);
// const res3 = calculator(7, '*', 5);
// const res4 = calculator(7, '/', 5);

// console.log(res1);
// console.log(res2);
// console.log(res2);
// console.log(res4);

const mathFunctions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function calculator(a, opera, b) {
    return mathFunctions[opera](a, b);
}

const res1 = calculator(7, '+', 5);
const res2 = calculator(7, '-', 5);
const res3 = calculator(7, '*', 5);
const res4 = calculator(7, '/', 5);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

console.clear();

function firstLetter(text) {
    return text[0];
}

function lastLetter(text) {
    return text[text.length - 1];
    // return text.at(-1);
}

function giveMeLetter(text, func) {
    return func(text);
}

console.log(firstLetter('Chuck'));
console.log(lastLetter('Chuck'));

console.log(giveMeLetter('Chuck', firstLetter));
console.log(giveMeLetter('Norris', lastLetter));

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const calc = (a, func, b) => func(a, b);

console.log(calc(7, sum, 5));
console.log(calc(7, diff, 5));