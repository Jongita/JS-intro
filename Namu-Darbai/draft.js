
// Reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip nauja studento objekto rakta (marksCount).
// Reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti kaip nauja studento objekto rakta (marksAverage).
// Reikia rasti kiekvieno studento maziausia pazymi ir tai prideti kaip nauja studento objekto rakta (minMark).
// Reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip nauja studento objekto rakta (maxMark).
// Reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu vidurkis yra didesnis uz 5.
// Reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra didesnis uz 5.




// Reikia apskaiciuoti kiekvieno studento pazymiu kieki
// ir tai prideti kaip nauja studento objekto rakta (marksCount).

// const students = [
//     { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
//     { name: 'Ona', age: 66, isMarried: true, marks: [7, 7, 7] },
//     { name: 'Maryte', age: 88, isMarried: false, marks: [7, 6, 5, 4, 3] },
//     { name: 'Petras', age: 77, isMarried: false, marks: [1] },
// ];





// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(students[i]);
// }

// for (let i = 0; i < students.length; i++) {
//     const marks = students[i].marks;
//     console.log(students[i].marks);
// }
// let average = 0;
// for (let i = 0; i < marks.length; i++) {
//     average = + marks[i];
//     console.log(average);
// }







// const students1MarkCount = students[0].marks.length;
// const students2MarkCount = students[1].marks.length;
// const students3MarkCount = students[2].marks.length;
// const students4MarkCount = students[3].marks.length;


// students[0].markCount = students1MarkCount;
// students[1].markCount = students2MarkCount;
// students[2].markCount = students3MarkCount;
// students[3].markCount = students4MarkCount;
// console.log(students);

// console.log('-----------------');

// // // Reikia apskaiciuoti kiekvieno studento pazymiu vidurki
// // // ir tai prideti kaip nauja studento objekto rakta (marksAverage).

// const studentMarks1 = students[0].marks;
// const studentMarks2 = students[1].marks;
// const studentMarks3 = students[2].marks;
// const studentMarks4 = students[3].marks;

// let total1 = 0;
// for (const number of studentMarks1) {
//     total1 += number;
// }
// let total2 = 0;
// for (const number of studentMarks2) {
//     total2 += number;
// }
// let total3 = 0;
// for (const number of studentMarks3) {
//     total3 += number;
// }
// let total4 = 0;
// for (const number of studentMarks4) {
//     total4 += number;
// }

// students[0].markAverage = total1 / students1MarkCount;
// students[1].markAverage = total2 / students2MarkCount
// students[2].markAverage = total3 / students3MarkCount;
// students[3].markAverage = total4 / students4MarkCount;
// console.log(students);

// console.log('-----------------');


// // Reikia rasti kiekvieno studento maziausia pazymi
// // ir tai prideti kaip nauja studento objekto rakta (minMark).

// let marksToMin1 = studentMarks1.sort((a, b) => b - a);
// let markMin1 = marksToMin1.at(-1);

// let marksToMin2 = studentMarks2.sort((a, b) => b - a);
// let markMin2 = marksToMin2.at(-1);

// let marksToMin3 = studentMarks3.sort((a, b) => b - a);
// let markMin3 = marksToMin3.at(-1);

// let marksToMin4 = studentMarks4.sort((a, b) => b - a);
// let markMin4 = marksToMin4.at(-1);

// students[0].markMin = markMin1;
// students[1].markMin = markMin2;
// students[2].markMin = markMin3;
// students[3].markMin = markMin4;
// console.log(students);

// console.log('-----------------');

// // // Reikia rasti kiekvieno studento maziausia pazymi
// // // ir tai prideti kaip nauja studento objekto rakta(maxMark).



// // function studentMarkMax(marks) {
// //     let marksToMax = marks.sort((a, b) => a - b);
// //     let markMax = marksToMax.at(-1);
// //     return markMax;

// // }

// // console.log(studentMarkMax(studentMarks1));
// // console.log(studentMarkMax(studentMarks2));
// // console.log(studentMarkMax(studentMarks3));
// // console.log(studentMarkMax(studentMarks4));

// let marksToMax1 = studentMarks1.sort((a, b) => a - b);
// let markMax1 = marksToMax1.at(-1);

// let marksToMax2 = studentMarks2.sort((a, b) => a - b);
// let markMax2 = marksToMax2.at(-1);

// let marksToMax3 = studentMarks3.sort((a, b) => a - b);
// let markMax3 = marksToMax3.at(-1);

// let marksToMax4 = studentMarks4.sort((a, b) => a - b);
// let markMax4 = marksToMax4.at(-1);

// students[0].markMax = markMax1;
// students[1].markMax = markMax2;
// students[2].markMax = markMax3;
// students[3].markMax = markMax4;
// console.log(students);

// // console.log('-----------------');

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);

// console.log(Math.abs(-7777));
// console.log(Math.abs(7777));

// console.log(Math.exp(9), Math.E ** 9);

// console.log(Math.sign(-7125485));
// console.log(Math.sign(74562));
// console.log(Math.sign(0));



// // min=0; max=5
// // min=1; max=6
// // min=2; max=7
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const count5 = Array(6).fill(0);
// const min = 2;
// for (let i = 0; i < 5; i++) {
//     const r = random(min, 7);
//     count5[r - min]++;
// }

// console.log(count5);

function sumBetween2(start, end) {

    const markLenght = (end - start) + 1;

    const totalSum = markLenght * end;

    const total2 = markLenght - 1;

    const total3 = (total2 * (total2 + 1)) / 2;

    const result2 = totalSum - total3;

    return result2;
}

console.log(sumBetween2(574, 815));
console.log(sumBetween2(-50, 50));
console.log(sumBetween2(-70, 30));
console.log(sumBetween2(-50, 0));

console.log('-------------------------------');

function amountOfPages(summary) {
    let result = [];
    let i = 0;

    for (i = 1; i < summary + 1; i++) {
        result += [i];
    }
    return result.split('').length;
}


// console.log(amountOfPages(5), 5)
// console.log(amountOfPages(10), 11)
console.log(amountOfPages(25), 17)
// console.log(amountOfPages(1095), 401)
// console.log(amountOfPages(185), 97)
// console.log(amountOfPages(660), 256)

function ration(number, n) {
    return number ** n;
}
console.log(ration(2, 2));


function htag(string) {
    return `${string}`;
}
console.log(htag('labas rytas'));


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(1, 2));

function random_0_5() {
    return Math.floor(Math.random() * 6);
}

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

console.log('-----------------');

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
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]), 17);


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
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }

    return name;
}

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');

console.log('-------------------------------');

function strCount(str, letter) {

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            result++;
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

console.log('-----------------------------------');

function magNumber(input) {
    const input1 = input[0];
    const input2 = input[1] * 3;

    if (input1 === 'PT92') {
        return Math.ceil(input2 / 17);
    }
    if (input1 === 'M4A1') {
        return Math.ceil(input2 / 30);
    }
    if (input1 === 'M16A2') {
        return Math.ceil(input2 / 30);
    }
    if (input1 === 'PSG1') {
        return Math.ceil(input2 / 5);
    }

}
console.log(magNumber(["PT92", 6]), 2);
console.log(magNumber(["M4A1", 8]), 1);
console.log(magNumber(["M16A2", 19]), 2);
console.log(magNumber(["PSG1", 31]), 19);
console.log(magNumber(["PT92", 19]), 4);
console.log(magNumber(["M4A1", 4]), 1);

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

function reverseWords(str) {
    let result = '';
    for (let i = str.length; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

console.log(reverseWords("hello world!"), "world! hello");
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda");
console.log(reverseWords("foobar"), "foobar");
console.log(reverseWords("kata editor"), "editor kata");
console.log(reverseWords("row row row your boat"), "boat your row row row");
console.log(reverseWords(""), "");