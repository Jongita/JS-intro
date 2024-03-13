console.log('---------------------1----------------------');
function greet(name) {
    return `Labas rytas, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}
console.log(greet('john'));
console.log('---------------------2----------------------');
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(-4, 8));
console.log('---------------------3----------------------');

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(sumArray([2, 4, 6, 8, 10]));

console.log('---------------------4----------------------');

function biggestNumber(array) {
    const newArray = array.sort((a, b) => a - b);
    return newArray.at(-1);
}
console.log(biggestNumber([2, 4, 6, 8, 10]));

console.log('---------------------5----------------------');

function textLength(text) {
    return text.length;
}
console.log(textLength('lietuva'));

console.log('---------------------6----------------------');

function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}
console.log(factorial(10));

console.log('---------------------7----------------------');

function biggestThan(array, num) {
    const newArray = array.filter(n => n > num);
    return newArray;
}
console.log(biggestThan([2, 4, 6, 8, 10], 5));

console.log('---------------------8----------------------');

function textReverse(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}
console.log(textReverse('abcdefgh'));

console.log('---------------------9----------------------');

function palindromas(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
        if (result === text) {
            return 'Palindromas';
        }
    }
    return 'Ne palindromas';
}

console.log(palindromas('savas'));
console.log(palindromas('sedes'));
console.log(palindromas('kedes'));

console.log('---------------------10----------------------');

const evenNumber = (number) => number % 2 === 0 ? true : false;

// const even = (number) => number % 2 === 0;

console.log(evenNumber(5));
console.log(evenNumber(4));

console.log('---------------------11----------------------');

const newText = (str, letter1, letter2) => str.toLowerCase().replaceAll(letter1, letter2);

console.log(newText('Helicopter', 'e', 'a'));


console.log('---------------------12----------------------');

function convertToFarenheit(temp) {
    return temp * (9 / 5) + 32;
}

console.log(convertToFarenheit(10))
console.log(convertToFarenheit(-10))

console.log('---------------------13.1----------------------');

function withoutDublicate(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}
// const double = [...new Set(array)];
// console.log(double);

console.log(withoutDublicate([2, 4, 6, 8, 10, 2, 8, 12, 18, 4]));

console.log('---------------------13.2----------------------');

function pirminis(number) {
    if (number <= 1)
        return false;

    if (number <= 3)
        return true;

    if (number % 2 == 0 || number % 3 == 0)
        return false;

    for (let i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0)
            return false;
    }

    return true;

}

console.log(pirminis(10));
console.log(pirminis(11));
console.log(pirminis(12));
console.log(pirminis(23));

console.log('---------------------14----------------------');

function sortToSmallest(array) {
    const newArray = array.sort((a, b) => b - a);
    return newArray;
}
console.log(sortToSmallest([2, 4, 6, 8, 10]));

console.log('---------------------15----------------------');

function sumBetween(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}
console.log(sumBetween(574, 815));

console.log('---------------------17----------------------');

function changeLetters(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const nextLetter = String.fromCharCode(input.charCodeAt(i) + 1);

        result += nextLetter;
    }
    return result;
}
console.log(changeLetters('hello'));
console.log(changeLetters('aaa'));

console.log('---------------------18----------------------');

const currentY = 2024;
const currentM = 3;
const currentD = 8;


function yearToAge(year, month, day) {

    if (year < 1900 || year > currentY) {
        return `Ivedei netikslius metus`;
    }
    if (year >= 1900 && month > currentM) {
        return currentY - year - 1;
    }
    if (year >= 1900 && month === currentM && day > currentD) {
        return currentY - year;
    }
    if (year >= 1900 && month === currentM && day == currentD) {
        return `Siandien tavo gimtadienis ir tau ${currentY - year} metai!`;
    }
    if (year >= 1900 && month === currentM && day < currentD) {
        return currentY - year - 1;
    }
    if (year >= 1900 && month < currentM) {
        return currentY - year;
    }
}

console.log(yearToAge(1984, 3, 8));

console.log('---------------------19----------------------');

function letterCount(str, letter) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            result++;
        }
    }
    return result;
}
console.log(letterCount('Hello', 'l'));
console.log(letterCount('Pomidoras', 'o'));

console.log('---------------------20----------------------');

function doubleArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return 'ERROR: irasyk masyva';
    }
    if (array1.length === 0 || array2.length === 0) {
        return 'ERROR: tuscias masyvas';
    }
    for (const number of array1) {
        if (typeof number !== 'number' || !isFinite(number)) {
            return 'ERROR: masyve nurodyti tik skaicius'
        }
    }
    for (const number of array2) {
        if (typeof number !== 'number' || !isFinite(number)) {
            return 'ERROR: masyve nurodyti tik skaicius'
        }
    }
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array2[j])
            }
        }
    }
    const finalResult = [];
    for (let i = 0; i < result.length; i++) {
        if (finalResult.indexOf(result[i]) === -1) {
            finalResult.push(result[i]);
        }
    }
    return finalResult;
}

console.log(doubleArray([2, 4, 6, 8, 10, 2, 8], [2, 14, 4, 10, 12, 8, 12, 18, 44]));
console.log(doubleArray([-5, 78, 14, 0, 18, 5], [2, Infinity, 4, 10, 12, 8, 12, 18, 44]));
console.log(doubleArray([2, 4, 6, 'labas', 10, 2, 8], [2, 14, 4, 10, 12, 8, 12, 18, 44]));
console.log(doubleArray('labas', 'hello'));
console.log(doubleArray(2154, 564888));
console.log(doubleArray(true, false));
console.log(doubleArray(null, [1, 2, 3, 4, 5, 6]));
console.log(doubleArray({}));
console.log(doubleArray());
console.log(doubleArray(undefined));
console.log(doubleArray([]));


