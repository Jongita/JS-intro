function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation === "+") {
        return result = value1 + value2;
    }
    if (operation === "-") {
        return result = value1 - value2;
    }
    if (operation === "*") {
        return result = value1 * value2;
    }
    if (operation === "/") {
        return result = value1 / value2;
    }
    return result;
};

console.log(basicOp("+", 4, 7), 11, "4 + 7 = 11");
console.log(basicOp("-", 15, 18), -3, "15 - 18 = -3");
console.log(basicOp("*", 5, 5), 25, "5 * 5 = 25");
console.log(basicOp("/", 49, 7), 7, "49 / 7 = 7");

console.log('----------------------------');


function isSquare(n) {
    if (n < 0) {
        return false;
    }
    if (n === 0) {
        return true;
    }
    if (n % 2 === 0) {
        return true;
    }
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let d = i * i;
        return d === n ? true : false;
    }
    return result;
}


console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");

// if (d === n) {
//     return true;

console.log('----------------------------');

function testEven(n) {
    if (n % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}
console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");

console.log('----------------------------');

function createPhoneNumber(numbers) {
    result = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

console.log('----------------------------');

function arithmetic(a, b, operator) {
    if (operator === "add") {
        return result = a + b;
    }
    if (operator === "subtract") {
        return result = a - b;
    }
    if (operator === "multiply") {
        return result = a * b;
    }
    if (operator === "divide") {
        return result = a / b;
    }
    return result;
}

console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");


console.log('--------------------------------');

function positiveSum(arr) {
    let result = 0;
    for (const number of arr) {
        if (number > 0) {
            result += number;
        };

    }
    return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

// function positiveSum(arr) {
//     var total = 0;
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//         if (arr[i] > 0) {                   // if arr[i] is greater than zero
//             total += arr[i];                  // add arr[i] to total
//         }
//     }
//     return total;                         // return total
// }

console.log('----------------------------');

function whatday(num) {
    if (num === 1) {
        return 'Sunday';
    }
    if (num === 2) {
        return 'Monday';
    }
    if (num === 3) {
        return 'Tuesday';
    }
    if (num === 4) {
        return 'Wednesday';
    }
    if (num === 5) {
        return 'Thursday';
    }
    if (num === 6) {
        return 'Friday';
    }
    if (num === 7) {
        return 'Saturday';
    }
    if (num >= 8) {
        return 'Wrong, please enter a number between 1 and 7';
    }
    if (num <= 0) {
        return 'Wrong, please enter a number between 1 and 7';
    }
}

console.log(whatday(1), 'Sunday')
console.log(whatday(2), 'Monday')
console.log(whatday(3), 'Tuesday')
console.log(whatday(8), 'Wrong, please enter a number between 1 and 7')
console.log(whatday(20), 'Wrong, please enter a number between 1 and 7')

// function whatday(num) {
//     let days = {
//         1: 'Sunday',
//         2: 'Monday',
//         3: 'Tuesday',
//         4: 'Wednesday',
//         5: 'Thursday',
//         6: 'Friday',
//         7: 'Saturday'
//     }
//     return days[num] || 'Wrong, please enter a number between 1 and 7';
// }

// onsole.log(whatday(1), 'Sunday')
// console.log(whatday(2), 'Monday')
// console.log(whatday(3), 'Tuesday')
// console.log(whatday(8), 'Wrong, please enter a number between 1 and 7')
// console.log(whatday(20), 'Wrong, please enter a number between 1 and 7')

console.log('------------------------------------------');

function bmi(weight, height) {
    let bmi = weight / height ** 2;

    if (bmi <= 18.5) {
        return "Underweight";
    }
    if (bmi <= 25.0) {
        return "Normal";
    }
    if (bmi <= 30.0) {
        return "Overweight";
    }
    if (bmi > 30) {
        return "Obese";
    }
    return bmi;
}

console.log(bmi(80, 1.80), "Normal");

// function bmi(weight, height) {
//     const bmi = weight / (height * height);
//     if (bmi <= 18.5) return "Underweight";
//     if (bmi <= 25) return "Normal";
//     if (bmi <= 30) return "Overweight";
//     return "Obese";
// }

function paperwork(n, m) {
    let total = n * m;
    if (n < 0 || m < 0) {
        return 0;
    }
    return total;
}

console.log(paperwork(5, 5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5, -5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5, -5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5, 5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5, 0), 0, 'Failed at paperwork(5, 0)');

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }

console.log('----------------------------');

function booleanToString(b) {
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
}

console.log(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
console.log(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

console.log('----------------------------');

function setAlarm(employed, vacation) {
    if (employed === true && vacation === true) {
        return false;
    }
    if (employed === true && vacation === false) {
        return true;
    }
    if (employed === false && vacation === true) {
        return false;
    }
    if (employed === false && vacation === false) {
        return false;
    }
}

console.log(setAlarm(true, true), false, "Should be false.");
console.log(setAlarm(false, true), false, "Should be false.");
console.log(setAlarm(true, false), true, "Should be true.");

// employed | vacation
// true | true     => false
// true | false    => true
// false | true     => false
// false | false    => false

console.log('----------------------------');

function smash(words) {
    let a = words;
    let sentence = a.join(" ");
    return sentence;
}

console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

// smash = function (words) {
//     return words.join(" ");
// };

console.log('----------------------------');


function peopleWithAgeDrink(old) {
    if (old < 14) {
        return "drink toddy";
    }
    if (old >= 14 && old <= 17) {
        return "drink coke";
    }
    if (old >= 18 && old <= 20) {
        return "drink beer";
    }
    if (old >= 18 && old <= 20) {
        return "drink beer";
    }
    if (old >= 21) {
        return "drink whisky"
    }
};


console.log(peopleWithAgeDrink(22), 'drink whisky');

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

//     Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
//     Examples: (Input-- > Output)

// 13 -- > "drink toddy"
// 17 -- > "drink coke"
// 18 -- > "drink beer"
// 20 -- > "drink beer"
// 30 -- > "drink whisky"

// const peopleWithAgeDrink = (age) =>
//     age < 14 ? "drink toddy" :
//         age < 18 ? "drink coke" :
//             age < 21 ? "drink beer" : "drink whisky"

//  susumuoti visus masyve esancius teigiamus skaicius

// Rimanto mokymas:
const a1 = [10, 2, 8, 4, 6];
const a2 = [-10, 2, 8, 4, 6];
const a3 = [-10, -2, -8, -4, -6];

function removeNegative(list) {
    let result = 0;
    for (const number of list) {
        if (number > 0) {
            result += number;
        };

    }
    return result;
}

console.log(removeNegative(a1));
console.log(removeNegative(a2));
console.log(removeNegative(a3));

console.log('----------------------------');

function abbrevName(name) {
    const myArray = name.split(" ");
    let word = myArray[1];
    let inicial1 = myArray[0];
    let inicial2 = myArray[1];
    const bigLetter1 = inicial1.toUpperCase();
    const lowLetter2 = inicial2.toUpperCase();
    const inicial3 = `${bigLetter1[0]}.${lowLetter2[0]}`
    return inicial3
}
console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");

// function abbrevName(name) {

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

function problem(x) {
    if (typeof x !== 'number') {
        return 'Error';
    }
    const value = x * 50 + 6;
    return value;
}


console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);

// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function doubleInteger(i) {
    i *= 2;
    return i;
}

console.log(doubleInteger(2), 4);
console.log(doubleInteger(8), 16);

// return i * 2;

function updateLight(current) {
    if (current === 'green') {
        return 'yellow';
    }
    if (current === 'yellow') {
        return 'red';
    }
    if (current === 'red') {
        return 'green';
    }
}

console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");

// return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// Pythagorean Triple

function isPythagoreanTriple(integers) {
    const a = integers[0];
    const b = integers[1];
    const c = integers[2];

    return (a ** 2) + (b ** 2) === c ** 2 ? true : false;
}

console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);
console.log(isPythagoreanTriple([2232, 2418, 930]), true);

console.log('----Reverse---------------');

function solution(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

// function solution(str) {
//     return str.split('').reverse().join('');
// }

console.log('----------------------------');

function between(a, b) {
    let total = 0;
    let i = 0;
    for (let i = a; i <= b; i++) {
        const arrayOfDigits = Array.from(i);
        console.log(arrayOfDigits);
    }
    return total;


}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);

console.log('----Num to string---------------');

function numberToString(num) {
    let string1 = String(num);
    return string1;
}

console.log(numberToString(67), '67');

// return num.toString();

console.log('----index of---------------');

function check(a, x) {
    return a.indexOf(x) !== -1 ? true : false
}

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);

// const check = (a, x) => a.includes(x);

console.log('-------------------');

function arrayMadness(a, b) {
    let aSum = 0;

    for (let i = 0; i < a.length; i++) {
        let c = a[i] ** 2;
        aSum += c;
    }
    let bSum = 0;
    for (let i = 0; i < b.length; i++) {
        let d = b[i] ** 3;
        bSum += d;
    }
    if (aSum > bSum) {
        return true;
    } else {
        return false;
    }
}

// function arrayMadness(a, b) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0, { length } = a; i < length; ++i) {
//         sum1 += a[i] ** 2;
//     }
//     for (let i = 0, { length } = b; i < length; ++i) {
//         sum2 += b[i] ** 3;
//     }
//     return sum1 > sum2;

console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);
console.log(arrayMadness([2, 3, 4], [1, 2, 3]), false);
console.log(arrayMadness([1, 2, 3], [0, 1, 2]), true);
console.log(arrayMadness([5, 3, 2, 4, 1], [15]), false);
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]), false);
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]), false);
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]), false);


console.log('-------------------');

// function strCount(str, letter) {
//     if ((str - letter) == 0)
//         return true;
// }


// console.log(strCount('Hello', 'o'), 1);
// console.log(strCount('Hello', 'l'), 2);
// console.log(strCount('', 'z'), 0);

// let sumStr = '';
// for (let i = 0; i < str.length; i++)
//     if (str[i] === letter) {
//         return 1;
//     }
// //     sumStr += str[i];
// // if (str.indexOf(letter) !== -1) {
// //     return 1;

// for (let i = 0; i <= str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//         if (str[j] === str[i]) {
//             return 2;
//         }
//     }
// }
// return 1

console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
// console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
// console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
// console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
// console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");

// Pythagorean Triple

// function isPythagoreanTriple(integers) {
//     const a = integers[0];
//     const b = integers[1];
//     const c = integers[2];

//     if (a ** 2 + b ** 2 === c ** 2) {
//         return true;
//     }
//     if (a ** 2 + c ** 2 === b ** 2) {
//         return true;
//     }
//     if (b ** 2 + c ** 2 === a ** 2) {
//         return true;
//     }
//     return false;
// }

// console.log('-------------------');

// console.log(isPythagoreanTriple([3, 4, 5]), true);
// console.log(isPythagoreanTriple([3, 5, 9]), false);
// console.log(isPythagoreanTriple([2232, 2418, 930]), true);

function tripleTrouble(one, two, three) {
    const sumThree = one + two + three;
    console.log(sumThree);

    let oneSum = '';
    for (let i = 0; i < one.length; i++) {
        oneSum += one[i];
        console.log(oneSum);
    }
    let twoSum = '';
    for (let j = 0; j < one.length; j++) {
        twoSum += two[j];
        console.log(twoSum);
    }
}
console.log('-------------------');

const areaOrPerimeter = (l, w) => l === w ? l * w : l * 2 + w * 2;

console.log(areaOrPerimeter(3, 3), 9);
console.log(areaOrPerimeter(6, 10), 32);

// const areaOrPerimeter = function (l, w) {
//     return l == w ? l * w : 2 * (l + w)
// };

console.log('-------------------');

function removeChar(str) {
    let result = str.slice(1, -1);
    return result;
};

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');

console.log('-------------------');

const stringToNumber = (str) => Number(str);

console.log(stringToNumber("1234"), 1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"), 1405)
console.log(stringToNumber("-7"), -7)

// var stringToNumber = function (str) {
//     return parseInt(str);
// }

console.log('----------------------------');

function enough(cap, on, wait) {
    if (on + wait < cap) {
        return 0;
    } else {
        return on + wait - cap;
    }
}
console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
// }
console.log('-------------------');

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? true : false;

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
// };

console.log('-------------------');

function differenceInAges(ages) {
    let largest = ages[0];

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > largest) {
            largest = ages[i];
        }
    }
    let smallest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < smallest) {
            smallest = ages[i];
        }
    }
    return [smallest, largest, largest - smallest];
}
console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

// function differenceInAges(ages) {

//     let max = Math.max(...ages),
//         min = Math.min(...ages)
//     diff = max - min

//     return [min, max, diff]
// }

console.log('-------------------');


const opposite = (number) => number - number - number;


console.log(opposite(1), -1);
console.log(opposite(0), 0);
console.log(opposite(4.25), -4.25);
console.log(opposite(3.3333333), -3.3333333);
console.log(opposite(-12525220.3325), 12525220.3325);
console.log(opposite(-5), 5);

// function opposite(number) {
//     return (-number);
// }

console.log('-------------------');

const litres = (time) => Math.floor(time * 0.5);


console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

console.log('-------------------');



function pillars(numPill, dist, width) {
    if (numPill <= 1) {
        return 0;
    } else {
        return ((numPill - 1) * dist * 100) + ((numPill - 2) * width);
    }
}

console.log(pillars(1, 10, 10), 0);
console.log(pillars(11, 15, 30), 15270);
console.log(pillars(2, 20, 25), 2000);

// function pillars(num_pill, dist, width) {
//     // your code here
//     return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
// }

console.log('-------------------');

const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9;


console.log(simpleMultiplication(2), 16, 'Should return given argument times eight...')
console.log(simpleMultiplication(1), 9, 'Should return given argument times nine...')
console.log(simpleMultiplication(8), 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4), 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5), 45, 'Should return given argument times nine...')

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

console.log('-------------------');

function getAverage(marks) {
    let result = 0;
    for (let i = 0; i < marks.length; i++) {
        result += marks[i];

    }
    return Math.floor(result / marks.length);
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5,]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);

// function getAverage(marks) {
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }

console.log('-------------------');

function capitalizeWord(word) {
    const firstLetter = word[0].toUpperCase();
    const otherLetters = word.slice(1).toLowerCase();

    return firstLetter + otherLetters;
}


console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('glasswear'), 'Glasswear');

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }

console.log('----------------------------');

const checkForFactor = (base, factor) => (base / factor) % 1 === 0 ? true : false;


console.log(checkForFactor(10, 2), true)
console.log(checkForFactor(63, 7), true)
console.log(checkForFactor(2450, 5), true)
console.log(checkForFactor(24612, 3), true)
console.log(checkForFactor(9, 2), false)
console.log(checkForFactor(653, 7), false)
console.log(checkForFactor(2453, 5), false)
console.log(checkForFactor(24617, 3), false)


// function checkForFactor(base, factor) {
//     return base % factor === 0;
// }

console.log('-------------------');

function grow(x) {
    let result = 1;
    for (const number of x) {
        if (number > 0) {
            result *= number;
        };
    }
    return result;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);

// const grow = x => x.reduce((a, b) => a * b);
// function grow(x) {
//     return x.reduce((a, b) => a * b, 1);
// }

console.log('-------------------');

// neissprestas     Removing Elements

function removeEveryOther(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i];
    }
    return result.split([" "]);
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);

console.log('-------------------');

function reverseList(list) {
    return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);

// Mazejancia tvarka:
// return list.sort((a, b) => b - a);
// return list.sort((a, b) => b - a);

console.log('-------------------');

function otherAngle(a, b) {
    return 180 - a - b;
}

console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);

console.log('-------------------');

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const totalBalls = blueStart + redStart;
    const totalPulled = redPulled + bluePulled;
    return (blueStart - bluePulled) / (totalBalls - totalPulled);
}
console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);


console.log('-------------------');

// function digitize(n) {
//     let myInt = n;

//     // Getting the string as a parameter
//     // and typecasting it into an integer
//     let myFunc = num => Number(num);

//     let intArr = Array.from(String(myInt), myFunc);

//     // Print the result array
//     console.log(intArr);
//     let total = 0;
//     for (let i = intArr.length - 1; i >= 0; i--) {
//         total += intArr[i];
//         console.log(total, intArr[i]);
//     }
//     return
// }

// console.log(digitize(35231), [1, 3, 2, 5, 3]);
// console.log(digitize(0), [0]);

console.log('-------------------');

function summation(num) {
    let result1 = 0;
    let i = 0;
    for (let i = 1; i <= num; i++) {
        result1 += i;
    }
    return result1;
}

console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);

// function summation(num) {
//     return num * (num + 1) / 2
// }

console.log('-------------------');

const past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000);



console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)

console.log('-------------------');

function century(year) {
    const century = year / 100;
    if (century < 1) {
        return 1;
    }
    if (century % 1 === 0) {
        return Math.round(century);
    }
    if (century % 1 !== 0); {
        return Math.round(century + 0.5);
    }

}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
console.log(century(426759), 4268, 'Testing for year 4268');

// const century = year => Math.ceil(year / 100)

console.log('-------------------');

// function switchItUp(number) {
//     const wordNumber = number.string;
//     console.log(wordNumber);
// }

// console.log(switchItUp(1), "One");
// console.log(switchItUp(3), "Three");
// console.log(switchItUp(5), "Five");



// const hotpo = (n) => n % 2 === 0 ? (n / 2) : (3 * n + 1);



// console.log(hotpo(1), 0);
// console.log(hotpo(5), 5);
// console.log(hotpo(6), 8);
// console.log(hotpo(23), 15);


function amountOfPages(summary) {
    let result = 0;
    for (const number of summary); {
        result = + number;
    }
    return result;


}

console.log(amountOfPages(5), 5)
console.log(amountOfPages(10), 11)
// console.log(amountOfPages(25), 17)
// console.log(amountOfPages(1095), 401)
// console.log(amountOfPages(185), 97)
// console.log(amountOfPages(660), 256)

function switchItUp(n) {
    return [
        'Zero', 'One', 'Two', 'Three', 'Four',
        'Five', 'Six', 'Seven', 'Eight', 'Nine',
    ][n];
}

console.log(switchItUp(1), "One");
console.log(switchItUp(3), "Three");
console.log(switchItUp(5), "Five");

// switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]

console.log('------------------------------------');

function countSheeps(sheep) {
    let result = 0;
    for (const n of sheep) {
        if (n === true) {
            result++;
        }

    }
    return result;
}

console.log(countSheeps([undefined]), 0);
// console.log(countSheeps[[null]), 0);
// console.log(countSheeps[false], 0);
// console.log(countSheeps([true]), 1);
// console.log(countSheeps[[undefined, null, false, true], 1]);
// console.log(countSheeps[[undefined, null, false, true, true, false, null, undefined], 2]);
// console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]), 17);


function correctPolishLetters(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'ą') {
            result += 'a';
        } else if (string[i] === 'ć') {
            result += 'c';
        } else if (string[i] === 'ę') {
            result += 'e';
        } else if (string[i] === 'ł') {
            result += 'l';
        } else if (string[i] === 'ń') {
            result += 'n';
        } else if (string[i] === 'ó') {
            result += 'o';
        } else if (string[i] === 'ś') {
            result += 's';
        } else if (string[i] === 'ź') {
            result += 'z';
        } else if (string[i] === 'ż') {
            result += 'z';
        } else {
            result += string[i];
        }
    }
    return result;
}
console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");

// var mapping = {
//     'ą': 'a',
//     'ć': 'c',
//     'ę': 'e',
//     'ł': 'l',
//     'ń': 'n',
//     'ó': 'o',
//     'ś': 's',
//     'ź': 'z',
//     'ż': 'z',
// };

// function correctPolishLetters(text) {
//     return text.split('').map(c => mapping[c] || c).join('');


function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
        case 2:
            name = 'Venus'
        case 3:
            name = 'Earth'
        case 4:
            name = 'Mars'
        case 5:
            name = 'Jupiter'
        case 6:
            name = 'Saturn'
        case 7:
            name = 'Uranus'
        case 8:
            name = 'Neptune'
    }

    return name;
}

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');

function strCount(str, letter) {

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            result += [i].length;
        }
    }
    return result;
}

console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);

// function strCount(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == letter)
//             count++;
//     }
//     return count;
// }

// function strCount(str, letter) {
//     return str.split(letter).length - 1
// }

const hero = (bullets, dragons) => dragons * 2 <= bullets ? true : false;


console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);

function getDrinkByProfession(param) {
    const letter = param.toLowerCase();

    if (letter === 'jabroni') {
        return 'Patron Tequila';
    }
    if (letter === 'school counselor') {
        return 'Anything with Alcohol';
    }
    if (letter === 'programmer') {
        return 'Hipster Craft Beer';
    }
    if (letter === 'bike gang member') {
        return 'Moonshine';
    }
    if (letter === 'politician') {
        return 'Your tax dollars';
    }
    if (letter === 'rapper') {
        return 'Cristal';
    } else {
        return 'Beer';
    }
}



console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");



// function getDrinkByProfession(param) {
//     param = param.toLowerCase();

//     switch (param) {
//         case "jabroni": return "Patron Tequila";
//         case "school counselor": return "Anything with Alcohol";
//         case "programmer": return "Hipster Craft Beer";
//         case "bike gang member": return "Moonshine";
//         case "politician": return "Your tax dollars";
//         case "rapper": return "Cristal";
//         default: return "Beer";
//     }
// }

function tripleTrouble(one, two, three) {
    let result = '';
    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i];
    }
    return result;
}

// const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");

console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");


console.log('---------------------------');

function addLength(str) {
    return str.split(' ').map(w => `${w} ${w.length}`);

}

console.log(addLength('you will win'), ["you 3", "will 4", "win 3"]);


// function addLength(str) {
//     var split = str.split(" ");
//     var result = [];

//     for (i = 0; i < split.length; ++i) {
//         result.push(split[i] + " " + split[i].length);
//     }
//     return result;
// }
console.log('---------------------------');

function reverseWords(str) {

    return str.split(' ').reverse().join(' ')
};

console.log(reverseWords("hello world!"), "world! hello");
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
console.log(reverseWords(""), "");

console.log('---------------------------');

console.log('Noriu atostogu'.split());
console.log('Noriu atostogu'.split().length);

console.log('---------------------------');

function addLength(str) {
    return str.split(' ').map(w => `${w} ${w.length}`);

}

console.log(addLength('you will win'), ["you 3", "will 4", "win 3"]);


// function addLength(str) {
//     var split = str.split(" ");
//     var result = [];

//     for (i = 0; i < split.length; ++i) {
//         result.push(split[i] + " " + split[i].length);
//     }
//     return result;
// }

function findDifference(a, b) {
    let sumA = 1;
    let sumB = 1;
    for (let i = 0; i < a.length; i++) {
        sumA *= a[i];
        sumB *= b[i];
    }
    return Math.abs(sumA - sumB);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


function multipleOfIndex(array) {
    let result = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % i === 0 || array[i] === 0) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
console.log(multipleOfIndex([11, -11]), [-11]);
console.log(multipleOfIndex([0, 2, 3, 6, 9]), [+0, 2, 6]);

// function multipleOfIndex(array) {
//     return array.filter((x, i) => x == 0 || x % i === 0)
// }


function grabDoll(dolls) {
    let bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (dolls[i] === !'Hello Kitty') continue;
        if (dolls[i] === !'Barbie doll') continue;
        if ((dolls[i] == 'Hello Kitty' || dolls[i] == 'Barbie doll') && bag.length < 3) {
            bag.push(dolls[i]);
        } else if (bag.length === 3) {
            break;
        }
    }
    return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"]);
console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Barbie doll", "Hello Kitty", "Hello Kitty"]);

// function grabDoll(dolls) {
//     var bag = [];

//     for (var i = 0; i < dolls.length; i++) {

//         if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
//             bag.push(dolls[i]);
//         else
//             continue;

//         if (bag.length === 3) break;
//     }

//     return bag;
// }

// function grabDoll(dolls) {
//     var bag = [], doll;
//     for (doll of dolls) {
//         if (doll == "Hello Kitty" || doll == "Barbie doll") bag.push(doll)
//         else continue
//         if (bag.length > 2) break
//     }
//     return bag;
// }