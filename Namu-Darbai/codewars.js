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


function createPhoneNumber(numbers) {
    result = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


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

// function positiveSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     if (arr[i] < 0) {
//         return false;
//     }
//     return 0;
// }



// console.log(positiveSum([1, 2, 3, 4, 5]), '---', 15);
// console.log(positiveSum([1, -2, 3, 4, 5]), '---', 13);
// // console.log(positiveSum([]), 0);
// // console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
// // console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

// // let result = 0;
// // for (let i = 1; i <= n; i++) {
// //     let d = i * i;
// //     return d === n ? true : false;

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