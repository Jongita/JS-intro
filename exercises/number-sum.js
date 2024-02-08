/*
Suskaiciuoti skaiciu suma intervale (imtinai)
pvz.: 0..4 -> 0+1+2+3+4 = 10
*/

let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);
}

console.log('SUM', sum);

const min = 13;
const max = 15;
let total = 0;

for (let i = min; i <= max; i++) {
    total += i;
}

console.log('total:', total);

function sumBetween(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }

    // return `Sum between ${min} and ${max} is ${total}.`;
    return total;
}

// Sum between 0 and 4 is 10;
console.log(sumBetween(0, 4));
console.log(sumBetween(0, 10));
console.log(sumBetween(13, 15));
console.log(sumBetween(0, 100));
console.log(sumBetween(0, 1000));
console.log(sumBetween(0, 10_000));
console.log(sumBetween(0, 100_000));
console.log(sumBetween(0, 1000_000));
console.log(sumBetween(0, 10_000_000));
console.log(sumBetween(0, 100_000_000));


function correctBetween(max) {
    return (max * (max + 1)) / 2;
}
console.log(correctBetween(1));
console.log(correctBetween(10));
console.log(correctBetween(100));
console.log(correctBetween(1000));
console.log(correctBetween(10_000));
console.log(correctBetween(100_000));
console.log(correctBetween(1000_000));
console.log(correctBetween(10_000_000));
console.log(correctBetween(100_000_000));
console.log(correctBetween(1000_000_000));
console.log(correctBetween(10_000_000_000));
console.log(correctBetween(100_000_000_000));

// n * (n + 1) / 2


//alteruojanti eilute

const marks = [10, 2, 8, 4, 6];
let sum3 = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];
sum += marks[5];


for (let i = 0; i < marks.length; i++) {
    console.log(i, marks[i]);
}

// israsyti teksta paraidziui 