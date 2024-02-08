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
