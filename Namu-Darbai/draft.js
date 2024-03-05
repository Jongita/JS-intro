
function betterThanAverage(classPoints, yourPoints) {
    let total = 0;
    let i = 0;
    for (let i = 0; i < classPoints.length; i++) {
        total += classPoints[i];
    }
    return total / classPoints.length < yourPoints ? true : false
}



console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);

function digitize(n) {
    let myArr = String(n).split("");
    let result = [];

    for (let i = myArr.length - 1; i >= 0; i--) {
        result += myArr[i];
    }
    return result.split("").map(i => Number(i));
}


console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(0), [0]);

console.log('------------------------------');

function sumMix(x) {
    let newX = String(x).split(',').map(i => Number(i));

    let result = 0;
    for (let i = newX.length - 1; i >= 0; i--) {
        result += newX[i];
    }
    return result;
}

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);

// function sumMix(x) {
//     return x.map(a => +a).reduce((a, b) => a + b);
// }