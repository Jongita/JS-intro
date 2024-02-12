console.log('KINTAMUJU INICIJAVIMAS:-----------------');

const a = 5;
console.log(a);
const b = 10;
console.log(b);
const c = 15;
console.log(c);

console.log('-------------------------');

const d = 'Labas';
console.log(d);
const e = 'rytas';
console.log(e);
const f = 'Lietuva';
console.log(f);

console.log('-------------------------');

const g = [7, 9, 11, 13, 15];
console.log(g);
const h = [5, 10, 15, 20, 25];
console.log(h);
const j = [2, 6, 4, 8, 10];
console.log(j);

console.log('-------------------------');

const mokiniai = ['Jonas', 'Petras', 'Maryte', 'Antanas', 'Ona'];
console.log(mokiniai);
const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Palanga', 'Kretinga'];
console.log(miestai);
const menesiai = ['Sausis', 'Kovas', 'Balandis', 'Birzelis', 'Rugsejis'];
console.log(menesiai);

console.log('-------------------------');

console.log('VEIKSMAI SU KINTAMAISIAIS:-----------------');

const sum = a + b + c;
console.log(a, '+', b, '+', c, '-->', 'SUMA', sum);

console.log('-------------------------');

const sujungtasTekstas = `${d} ${e}, ${f}!`;
console.log(sujungtasTekstas);

console.log('-------------------------');

const skaiciuVerte = g[0] - g[1] + g[2] - g[3] + g[4];
console.log('logika: 1-2+3-4+5', '-->', 'SUM:', skaiciuVerte);

console.log('-------------------------');

const miestaiAtvirksciai = `${miestai[4]}, ${miestai[3]}, ${miestai[2]}, ${miestai[1]}, ${miestai[0]}.`;
console.log(miestaiAtvirksciai);


console.log('KINTAMUJU PALYGINIMAS-----------------');
console.log('1.Skaičiaus tipo kintamieji:-----------------');

const pomidoras = 'Pomidoras';
const isNaujo = 'Bandykite kitą kartą.';

const sauletuDienu = 17;
const lyjaDienu = 15;


console.log('a.kuris didesnis------------------------');

if (sauletuDienu > lyjaDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const didesnis = sauletuDienu > lyjaDienu ? pomidoras : isNaujo;
console.log(didesnis);

console.log('b. kuris mažesnis------------------------');

if (lyjaDienu < sauletuDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const mazesnis = lyjaDienu < sauletuDienu ? pomidoras : isNaujo;
console.log(mazesnis);

console.log('c. ar jie lygūs------------------');


if (lyjaDienu === sauletuDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const lygus = sauletuDienu === lyjaDienu ? pomidoras : isNaujo;
console.log(lygus);

console.log('d. ar jie nelygūs----------------------');

if (lyjaDienu !== sauletuDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const neLygus = sauletuDienu !== lyjaDienu ? pomidoras : isNaujo;
console.log(neLygus);

console.log('e. didesnis arba lygus------------------');

if (lyjaDienu >= sauletuDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const didesnisLygus = sauletuDienu >= lyjaDienu ? pomidoras : isNaujo;
console.log(didesnisLygus);

console.log('f. mažesnis arba lygus------------------');

if (lyjaDienu <= sauletuDienu) {
    console.log(pomidoras);
} else {
    console.log(isNaujo);
}

const mazesnisLygus = sauletuDienu <= lyjaDienu ? pomidoras : isNaujo;
console.log(mazesnisLygus);

console.log('2. Teksto tipo kintamųjų ilgiai------------------');


const tekstasPomidoras = 'Pomidoras';
const tekstasIsNaujo = 'Bandykite kitą kartą.';

const ilgisPomidoras = tekstasPomidoras.length
const ilgisIsnaujo = tekstasIsNaujo.length
console.log(ilgisPomidoras);
console.log(ilgisIsnaujo);

console.log('3. a.kuris didesnis------------------');

if (ilgisIsnaujo > ilgisPomidoras) {
    console.log(tekstasPomidoras);
} else {
    console.log(tekstasIsNaujo);
}

const didesnis1 = ilgisIsnaujo > ilgisPomidoras ? tekstasPomidoras : tekstasIsNaujo;
console.log(didesnis1);

console.log('3. b.kuris mažesnis------------------');

if (ilgisPomidoras > ilgisIsnaujo) {
    console.log(tekstasPomidoras);
} else {
    console.log(tekstasIsNaujo);
}

const mazesnis1 = ilgisPomidoras > ilgisIsnaujo ? tekstasPomidoras : tekstasIsNaujo;
console.log(mazesnis1);

console.log('3. c.lygus------------------');

if (ilgisPomidoras === ilgisIsnaujo) {
    console.log(tekstasPomidoras);
} else {
    console.log(tekstasIsNaujo);
}
const lygus1 = ilgisPomidoras === ilgisIsnaujo ? tekstasPomidoras : tekstasIsNaujo;
console.log(lygus1);

console.log('3. d.didesnis arba lygus------------------');














console.log('CIKLO FOR PANAUDOJIMAS:-----------------');

function correctBetween(max) {
    return (max * (max + 1)) / 2;
}
console.log(correctBetween(0));
console.log(correctBetween(4));
console.log(correctBetween(100));

function sumBetween(min, max) {
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

console.log(sumBetween(574, 815));
console.log(sumBetween(-50, 50));
console.log(sumBetween(-70, 30));

console.log('-------------------------');


function sumBetween1(min, max) {

    const markLenght = (max - min) + 1;

    const totalSum = markLenght * max;

    let total1 = 0;
    for (let i = 0; i < markLenght; i++) {
        total1 += i;

    }
    const result1 = totalSum - total1;

    return result1;
}

console.log(sumBetween1(574, 815));
console.log(sumBetween1(-50, 50));
console.log(sumBetween1(-70, 30));

console.log('-------------------------');

function sumBetween2(min, max) {

    const markLenght = (max - min) + 1;

    const totalSum = markLenght * max;

    const total2 = markLenght - 1;

    const total3 = (total2 * (total2 + 1)) / 2;

    const result2 = totalSum - total3;

    return result2;
}

console.log(sumBetween2(574, 815));
console.log(sumBetween2(-50, 50));
console.log(sumBetween2(-70, 30));

console.log('-------------------------');

function reverse(text) {
    if (typeof text !== 'string') {
        return 'ERROR: duok teksta';
    }
    if (text === ' ') {
        return ' ';
    }
    if (text.length <= 1) {
        return text;
    }

    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result;

}

console.log(reverse('abcdef'), '---', 'fedcba');

// console.log(reverse(2154));
// console.log(reverse(true));
// console.log(reverse(reverse));
// console.log(reverse());
// console.log(reverse(undefined));
// console.log(reverse([]));
// console.log(reverse(['asd']));
// console.log(reverse([2545]));

console.log('-------------------------');




function liekana(min, max) {
    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }

    return result;

}









console.log(liekana(0, 11));






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

console.log('skaitmenukelintaRaideSkaiciuje------------');


function skaitmenuKiekisSkaiciuje(number) {
    if (typeof number !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (isNaN(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    } else {
        return String(number).length;
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.log('didziausiasSkaiciussarase-------------------------');


function didziausiasSkaiciusSarase(value) {
    if (value === '') {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    if (typeof value !== 'object') {
        return 'Pateikta netinkamo tipo reikšmė.';
    }


    return value.max
}


console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase());



console.log('isrinktiRaides-------------------------');


function isrinktiRaides(string, number) {
    if (typeof string !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (string.length > 99) {   // ar ne tuscias???
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if (typeof number !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (number <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (number > string.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    let result = ' ';

    for (let i = number - 1; i < string.length; i += number) {
        result += string[i];
    }

    return result;
}

console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));

console.log('-------------------------');

const tekstas = 'abcdefgh';

let result = ' ';

for (let i = 0; i <= tekstas.length; i++) {
    result += tekstas[i];
    console.log(tekstas[i]);
}

for (let i = tekstas.length - 1; i >= 0; i--) {
    result += tekstas[i];
    console.log(result);
}

function liekana(min, max) {
    let total = 0;
    let k = 3;


    for (let i = min; i <= max; i += 3) {
        total += i;
        console.log(i);
    }
    return total;

}

console.log(liekana(0, 11)); // is 3 --> 0 3 6 9

