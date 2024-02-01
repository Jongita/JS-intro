/*
STRING - tekstas, simboliu grandinele

Iniciavimo simboliai: ' (vienguba), dviguba (") kabutes ir (Bachtick ` kabutes)
*/


const text1 = 'Pirmas tekstas';
console.log(text1);

const text2 = "o cia jau antras tekstas.";
console.log(text2);

// Cia yra tekstaS BE KABUCIU
const text31 = 'Cia yra tekstaS BE KABUCIU';
const text32 = "Cia yra tekstaS BE KABUCIU";
console.log(text31);
console.log(text32);

// Vienguba (') kabute
const kabute21 = "Vienguba (') kabute";
console.log(kabute21);

// Dviguba (") kabute 
const kabute12 = 'Dviguba(") kabute';
console.log(kabute12);

// vienguba (') ir dviguba (") kabutes.
//const kabute = ""

const vardas = 'Chuck';
const pavarde = 'Norris';

const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// vienguba (') ir dviguba (") kabutes.
const kabutemix1 = "vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabutemix1);

// vienguba (') ir dviguba (") kabutes.
const kabutemix21 = "vienguba (') ir" + ' dviguba (") kabutes.';
console.log(kabutemix21);

const kabutemix22 = "vienguba (\') ir" + ' dviguba (\") kabutes.';
console.log(kabutemix22);

const kabutemix23 = "vienguba (\') ir" + ' dviguba (") kabutes.';
console.log(kabutemix23);

const kabutemix24 = "vienguba (') ir" + ' dviguba (\") kabutes.';
console.log(kabutemix24);

console.clear();

const gele = 'tulpe';
const spalva = 'geltona';

// As turiu tulpe kuri yra geltona.
const sakinys = 'As turiu ' + gele + ' kuri yra ' + spalva + '.';
console.log(sakinys);

const backtick = `Backtick sakinys`;
console.log(backtick);

// vienguba (') ir dviguba (") kabutes.
const backtick12 = `vienguba (') ir dviguba (") kabutes.`;
console.log(backtick12);

const backtick123 = `vienguba (') ir dviguba (") ir bakctick (\`) kabutes.`;
console.log(backtick123);

console.clear();

const backtickGelytes = `As turiu ${gele} kuri yra ${spalva}.`;
console.log(backtickGelytes);

const n1 = 77;
const n2 = 55;

// 77 + 55 = 132
const pliusas = `${n1} + ${n2} = ${n1 + n2};`;
console.log(pliusas);

console.clear();

// Stai sarasas:
// - pirmas
// - antras
// - trecias

// \r - retur (rewrite ant tos pacios eilutes)
// \n - new line
// \t - tab

const eilutes = 'Stai sarasas:\r\n\
- pirmas\r\n\
- antras\r\n\
- trecias';

console.log(eilutes);

// html pRALEISTA



