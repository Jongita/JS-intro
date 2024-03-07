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

console.log(evenNumber(5));
console.log(evenNumber(4));

console.log('---------------------11----------------------');



// console.log(newText('lietuva', ));


console.log('---------------------12----------------------');

function convertToFarenheit(temp) {
    const farenheit = temp * (9 / 5) + 32;
    return farenheit;
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

    for (var i = 5; i * i <= number; i = i + 6) {
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
console.log(changeLetters('aaaaa'));

console.log('---------------------18----------------------');

// const currentY = 2024;
// const currentM = 3;
// const currentD = 8;


// const yearToAge = (num1, num2, num3)


//     if (num1 < 1900) {
//         return `Tu jau miręs arba įvedei netikslius metus`;
//     }
//     if (num1 >= 1900) {
//     } else if (currentM < num2) {
//         console.log(num1);
//     }
//     return 0;
// }

// console.log(yearToAge(1977, 2, 26));

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

function doublewArray(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                result.push(array2[j])
            }
        }
    }
    return result;
}


console.log(doublewArray([2, 4, 6, 8, 10, 2, 8], [2, 14, 4, 10, 12, 8, 12, 18, 44]));

// newDoubleArray = [2, 4, 8, 10]

// const finalResult = [];
// for (let i = 0; i < resilt.length; i++) {
//     if (result.indexOf(array[i]) === -1) {
//         result.push(array[i]);