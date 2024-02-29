
function greet(language) {
    var names;
    switch (language) {
        case 'english': names = 'Welcome'; break;
        case 'czech': names = 'Vitejte'; break;
        case 'danish': names = 'Velkomst'; break;
        case 'dutch': names = 'Welkom'; break;
        case 'estonian': names = 'Tere tulemast'; break;
        case 'finnish': names = 'Tervetuloa'; break;
        case 'flemish': names = 'Welgekomen'; break;
        case 'french': names = 'Bienvenue'; break;
        case 'german': names = 'Willkommen'; break;
        case 'irish': names = 'Failte'; break;
        case 'italian': names = 'Benvenuto'; break;
        case 'latvian': names = 'Gaidits'; break;
        case 'lithuanian': names = 'Laukiamas'; break;
        case 'polish': names = 'Witamy'; break;
        case 'spanish': names = 'Bienvenido'; break;
        case 'swedish': names = 'Valkommen'; break;
        case 'welsh': names = 'Croeso'; break;
        default: names = 'Welcome';
    }
    return names;
}


console.log(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('polish'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");


// function greet(lang) {
//     return langs[lang] || langs['english'];
// }

// var langs = {
//     'english': 'Welcome',
//     'czech': 'Vitejte',
//     'danish': 'Velkomst',
//     'dutch': 'Welkom',
//     'estonian': 'Tere tulemast',
//     'finnish': 'Tervetuloa',
//     'flemish': 'Welgekomen',
//     'french': 'Bienvenue',
//     'german': 'Willkommen',
//     'irish': 'Failte',
//     'italian': 'Benvenuto',
//     'latvian': 'Gaidits',
//     'lithuanian': 'Laukiamas',
//     'polish': 'Witamy',
//     'spanish': 'Bienvenido',
//     'swedish': 'Valkommen',
//     'welsh': 'Croeso'
// }

function sc(floor) {
    if (floor <= 1) {
        return '';
    } else if (floor < 7) {
        return 'Aa~ '.repeat(floor - 1) + 'Pa! ' + 'Aa!';
    } else {
        return 'Aa~ '.repeat(floor - 1) + 'Pa!';
    }
}

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(1), "", "good luck!");
console.log(sc(-1), "", "good luck!");

// function sc(floor) {
//     if (floor <= 1) return "";

//     return 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor <= 6 ? ' Aa!' : '');
// }


function bingo(a) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"];
    const BingoLetters = [2, 9, 14, 7, 15];
    const letter = alphabet.indexOf('i') + 1;
    console.log(letter);

}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");


// b = 2, i = 9, n = 14, o = 15, g = 7

// let result = [];
// for (let i = 0; i < alphabet.length; i++) {
//     result.push(alphabet.indexOf(alphabet[i]) + 1);
// }

// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
//     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
//     "w", "x", "y", "z"];
// const BingoLetters = [2, 9, 14, 7, 15];
// let result = [];
// for (let i = 0; i < alphabet.length; i++) {
//     result.push(alphabet.indexOf(alphabet[i]) + 1);
//     if (result.includes(15))
//         return result;

// var arr = [1, 2, 3];
// var check = [3, 4];

// var found = false;
// for (var i = 0; i < check.length; i++) {
//     if (arr.indexOf(check[i]) > -1) {
//         found = true;
//         break;
//     }
// }
// console.log(found);