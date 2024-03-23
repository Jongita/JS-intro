
function giveMeFive(obj) {

    let result = [];
    for (var key in obj) {
        if (key.length == 5) {
            result.push(key);
        }
        if (obj[key].length == 5) {
            result.push(obj[key]);
        }
    }

    return result;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }), ["earth", "world"]);
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }), ["Ihave", "money", "model"]);
console.log(giveMeFive({ Pears: "than", apple: "sweet" }), ["Pears", "apple", "sweet"]);

// function giveMeFive(obj) {
//     var five = [];
//     for (var key in obj) {
//         if (key.length == 5) five.push(key);
//         if (obj[key].length == 5) five.push(obj[key]);
//     }
//     return five;
// }

console.log('----------------------------');

function showObjectKeys(obj) {
    for (var key in obj) {
        console.log(key);
    }
}
function showObjectValues(obj) {
    for (var key in obj) {
        console.log(obj[key]);
    }
}
var ob = { item1: "This", item2: "is", item3: "an", item4: "example" };
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

console.log('----------------------------');

function showObjectKeys2(obj) {
    for (var key in obj) {
        console.log(key);
    }
}
function showObjectValues2(obj) {
    for (var key in obj) {
        console.log(obj[key]);
    }
}
var arr = ["one", "two", "three"];
console.log("keys of arr:")
showObjectKeys2(arr);
console.log("values of arr:")
showObjectValues2(arr);

console.log('----------------------------');



function gimmeTheLetters(sp) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const spNew = sp.split('-');
    const firstLetter = alphabet.indexOf(spNew[0]);
    const firstLetter2 = alphabet2.indexOf(spNew[0]);


    const lastLetter = alphabet.indexOf(spNew[1]);
    const lastLetter2 = alphabet2.indexOf(spNew[1]);

    let result = '';
    if ((spNew[0]) == spNew[0].toLowerCase()) {
        for (let i = firstLetter; i <= lastLetter; i++) {
            result += alphabet[i];

        }
    }
    if ((spNew[0]) == spNew[0].toUpperCase()) {
        for (let i = firstLetter2; i <= lastLetter2; i++) {
            result += alphabet2[i];

        }
    }
    return result;
}

// function gimmeTheLetters(sp) {
//     // Extract the first and last letters from the range
//     const [start, end] = sp.split('-')
//     // Convert the letters to their ASCII codes
//     const startCode = start.charCodeAt(0);
//     const endCode = end.charCodeAt(0)
//     // Generate the string of letters
//     let result = '';
//     for (let i = startCode; i <= endCode; i++) {
//         result += String.fromCharCode(i);
//     }

//     return result;
// }



console.log(gimmeTheLetters('a-b'), 'ab', `'a-b'`)
console.log(gimmeTheLetters('y-z'), 'yz', `'y-z'`)
console.log(gimmeTheLetters('H-I'), 'HI', `'H-I'`)
console.log(gimmeTheLetters('a-z'), 'abcdefghijklmnopqrstuvwxyz', `'a-z'`)
console.log(gimmeTheLetters('A-Z'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', `'A-Z'`)



    /