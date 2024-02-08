




console.log('FUNKCIJOS-------------------------------------');
console.log('Tuscia funkcija-------------------------------------');

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.log('Daugyba---------------------------------------------');

const skaicius1 = 15;
const skaicius2 = 20;
const skaicius3 = 25;

function daugyba(number1, number2) {
    return number1 * number2;
}

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));

console.log('skaitmenukelintaRaideSkaiciuje--------------------------------');


function skaitmenuKiekisSkaiciuje(number) {
    if (typeof number !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (isNaN(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (number > 1) {
        return Math.floor(Math.log10(Math.abs(number))) + 1;
    }
    if (number === 0) {
        return 1;
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('isrinktiRaides--------------------------------');

const letters = 'abcdefg';
const kasAntraRaide = letters[1] + letters[3] + letters[5];

function isrinktiRaides(string, number) {
    if (typeof string !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (string.length > 99) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    } else {
        return string
    }
}
console.log(isrinktiRaides(letters, kasAntraRaide));



const asmensKodas = 37060123456;
const akIlgis = asmensKodas.length;
const akTekstas = string(asmensKodas);
