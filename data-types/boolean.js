/*

BOOLEAN - logine reiksme
Galimos reiksmes:
- true
-false

Loginiai operatoriai:
- && (and)
- || (or)
- ! (not/invert)
*/



const arLyja = true;
const arSninga = false;

const dabartineTemp = -1;
const siltaNuoTemp = 20;

const arSilta = false;

const vardas = 'Jonas';
const arNurodytasVardas = false;

console.log(true, false);

console.clear();

// Sportas
// - varzybos vyksta tik dienos metu
// - varzybos vyksta tik jei turime bent 2 komandas

const arDiena = true;
const arYraDviKomandos = false;

// Varzybos vyksta kai tenkinamos VISOS salygos (true + true)
const arVykstavarzybos = arDiena && arYraDviKomandos;
console.log('Varzybos:', arVykstavarzybos);

// Kermosius
//  - vaikas noretu gaidelio
//  - vaikas noretu lazdeles
//  - vaikas noretu grybuko

const arNoriGaidelio = true;
const arNoriLazdeles = true;
const arNoriGrybuko = true;

// saldaini gauna kai turima BENT VIENA preke
const arVaikasGausSaldaini = arNoriGaidelio || arNoriLazdeles || arNoriGrybuko;
console.log('Kermosius', arVaikasGausSaldaini);

const a = true;
const b = false;
const c = true;

// Pirmenybe yra && !!!!!!!!!!!!
// Skliaustai zymi ka suskaiciuoti pirmiausiai!!!!

console.log(a && b, '->', false);
console.log(a || b, '->', true);
console.log(a || b || c, '->', true);
console.log(a && b && c, '->', false);
console.log(a && b || c, '->', true);
console.log(a || b && c, '->', true);

console.log(false && false || false, '->', false);
console.log(false && false || true, '->', true);
console.log(false && true || false, '->', false);
console.log(false && true || true, '->', true);
console.log(true && true || false, '->', true);
console.log(true && true || true, '->', true);
console.log(true && false || false, '->', false);
console.log(true && false || true, '->', true);


console.log(false || false && false, '->', false);
console.log(false || false && true, '->', false);
console.log(false || true && false, '->', false);
console.log(false || true && true, '->', true);
console.log(true || true && true, '->', true);
console.log(true || false && true, '->', true);

console.log(true || true && false, '->', false);
console.log(true || false && false, '->', false);

console.log((true && true) || (false && false));
console.log((true && true) || false);

console.log(((true && true) || false) && false);

console.log(!true);
console.log(!false);


const arMiega = false;
const arNeMiega = true;

// ar neMiega? Taip, jis nemiega
console.log(!arMiega);

console.log(!arNeMiega);

console.log(!!true);
console.log(!!false);


// Visi stringai yra true, isskyrus tuscias
console.log(!!'Labas', false, true);
console.log(!!'', true, false);

// Visi skaiciai yra true, isskyrus 0 (nulis)
console.log(!!5);
console.log(!!-5);
console.log(!!0);

// positive, negative numbers
// truthy, falsy number values

console.clear();

console.log(false && false || false && false, '->', false);
console.log(false && false || false && true, '->', false,);
console.log(false && false || true && false, '->', false);
console.log(false && false || true && true, '->', true);

console.log(false && true || false && false, '->', false,);
console.log(false && true || false && true, '->', false);
console.log(false && true || true && false, '->', false);
console.log(false && true || true && true, '->', true);

console.log(true && true || false && false, '->', true);
console.log(true && true || false && true, '->', true);
console.log(true && true || true && false, '->', true);
console.log(true && true || true && true, '->', true);

console.log(true && false || false && false, '->', false);
console.log(true && false || false && true, '->', false);
console.log(true && false || true && false, '->', false);
console.log(true && false || true && true, '->', true);

console.log('--------------------------------------------');

console.log(false || false && false && false, '->', false);
console.log(false || false && false && true, '->', false);
console.log(false || false && true && false, '->', false);
console.log(false || false && true && true, '->', false);

console.log(false || true && false && false, '->', false);
console.log(false || true && false && true, '->', false);
console.log(false || true && true && false, '->', false);
console.log(false || true && true && true, '->', true);

console.log(true || true && false && false, '->', true);
console.log(true || true && false && true, '->', true);
console.log(true || true && true && false, '->', true);
console.log(true || true && true && true, '->', true);

console.log(true || false && false && false, '->', true);
console.log(true || false && false && true, '->', true);
console.log(true || false && true && false, '->', true);
console.log(true || false && true && true, '->', true);

console.log('--------------------------------------------');

console.log(false && false && false || false, '->', false);
console.log(false && false && false || true, '->', true);
console.log(false && false && true || false, '->', false);
console.log(false && false && true || true, '->', true);

console.log(false && true && false || false, '->', false);
console.log(false && true && false || true, '->', true);
console.log(false && true && true || false, '->', false);
console.log(false && true && true || true, '->', true);

console.log(true && true && false || false, '->', false);
console.log(true && true && false || true, '->', true);
console.log(true && true && true || false, '->', true);
console.log(true && true && true || true, '->', true);

console.log(true && false && false || false, '->', false);
console.log(true && false && false || true, '->', true);
console.log(true && false && true || false, '->', false);
console.log(true && false && true || true, '->', true);

console.log('--------------------------------------------');
console.log('--------------------------------------------');

console.log(false && (false || false) && false, '->', false);
console.log(false && (false || false) && true, '->', false,);
console.log(false && (false || true) && false, '->', false);
console.log(false && (false || true) && true, '->', false);

console.log(false && (true || false) && false, '->', false,);
console.log(false && (true || false) && true, '->', false);
console.log(false && (true || true) && false, '->', false);
console.log(false && (true || true) && true, '->', false);

console.log(true && (true || false) && false, '->', false);
console.log(true && (true || false) && true, '->', true);
console.log(true && (true || true) && false, '->', false);
console.log(true && (true || true) && true, '->', true);

console.log(true && (false || false) && false, '->', false);
console.log(true && (false || false) && true, '->', false);
console.log(true && (false || true) && false, '->', false);
console.log(true && (false || true) && true, '->', true);

console.log('--------------------------------------------');

console.log((false || false) && false && false, '->', false);
console.log((false || false) && false && true, '->', false);
console.log((false || false) && true && false, '->', false);
console.log((false || false) && true && true, '->', false);

console.log((false || true) && false && false, '->', false);
console.log((false || true) && false && true, '->', false);
console.log((false || true) && true && false, '->', false);
console.log((false || true) && true && true, '->', true);

console.log((true || true) && false && false, '->', false);
console.log((true || true) && false && true, '->', false);
console.log((true || true) && true && false, '->', false);
console.log((true || true) && true && true, '->', true);

console.log((true || false) && false && false, '->', false);
console.log((true || false) && false && true, '->', false);
console.log((true || false) && true && false, '->', false);
console.log((true || false) && true && true, '->', true);

console.log('--------------------------------------------');

console.log(false && false && (false || false), '->', false);
console.log(false && false && (false || true), '->', false);
console.log(false && false && (true || false), '->', false);
console.log(false && false && (true || true), '->', false);

console.log(false && true && (false || false), '->', false);
console.log(false && true && (false || true), '->', false);
console.log(false && true && (true || false), '->', false);
console.log(false && true && (true || true), '->', false);

console.log(true && true && (false || false), '->', false);
console.log(true && true && (false || true), '->', true);
console.log(true && true && (true || false), '->', true);
console.log(true && true && (true || true), '->', true);

console.log(true && false && (false || false), '->', false);
console.log(true && false && (false || true), '->', false);
console.log(true && false && (true || false), '->', false);
console.log(true && false && (true || true), '->', false);

console.log('--------------------------------------------');

console.log((false && false || false) && false, '->', false);
console.log((false && false || false) && true, '->', false,);
console.log((false && false || true) && false, '->', false);
console.log((false && false || true) && true, '->', true);

console.log((false && true || false) && false, '->', false,);
console.log((false && true || false) && true, '->', false);
console.log((false && true || true) && false, '->', false);
console.log((false && true || true) && true, '->', true);

console.log((true && true || false) && false, '->', false);
console.log((true && true || false) && true, '->', true);
console.log((true && true || true) && false, '->', false);
console.log((true && true || true) && true, '->', true);

console.log((true && false || false) && false, '->', false);
console.log((true && false || false) && true, '->', false);
console.log((true && false || true) && false, '->', false);
console.log((true && false || true) && true, '->', true);

console.log('--------------------------------------------');