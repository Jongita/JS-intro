console.log('Ciklo for panaudojimas:-----------------');

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

console.log(sumBetween1(3, 7));
console.log(sumBetween1(4, 9));
console.log(sumBetween(574, 815));
console.log(sumBetween(-50, 50));
console.log(sumBetween(-70, 30));













console.log('1.Skaičiaus tipo kintamieji:-----------------');

const pomidoras = 'Pomidoras';
const isNaujo = 'Bandykite kitą kartą.';

const sauletuDienu = 15;
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
    } else {
        return string[1] + string[3] + string[5];
    }
}
console.log(isrinktiRaides('abcdefg', 2));
console.log(isrinktiRaides('abcdefghijkl', 3));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides(1561, 2));

