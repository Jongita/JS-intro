//  012345678

const text = 'Pomidoras';

const lower = text.toLowerCase();
console.log(lower);

const upper = text.toUpperCase();
console.log(upper);


const firstLetter = text[0];
console.log(firstLetter);

const secondLetter = text[1];
console.log(secondLetter);

const crazyLetter = text[2.5];
console.log(crazyLetter);

// Pomidormas turi 9 raides.

const sakinys = `"${text} turi ${text.length} raides.`;
console.log(sakinys);

const ilgis = 'Kiek cia simboliu?'.length;
console.log(ilgis);

console.clear();

const name1 = 'Jonas';
const surname1 = 'Jonaitis';
const name2 = 'Maryte';
const surname2 = 'Marytaite';
const name3 = 'Petras';
const surname3 = 'Petraitis';
const name4 = 'Ona';
const surname4 = 'Onaite';

// Vardo "Jonas" ilgis yra 5 simboliai.
// Asmens Jonas Jonaitis inicialai yra J.J.

const vardas1 = `Vardo "${name1}" ilgis yra ${name1.length} simboliai.`
console.log(vardas1);

const vardas2 = `Vardo "${name2}" ilgis yra ${name2.length} simboliai.`
console.log(vardas2);

const vardas3 = `Vardo "${name3}" ilgis yra ${name3.length} simboliai.`
console.log(vardas3);

const vardas4 = `Vardo "${name4}" ilgis yra ${name4.length} simboliai.\n`
console.log(vardas4);

const pavarde1 = `Asmens ${name1} ${surname1} inicialai yra ${name1[0]} ${surname1[0]}.`
console.log(pavarde1);

const pavarde2 = `Asmens ${name2} ${surname2} inicialai yra ${name2[0]}.${surname2[0]}.`
console.log(pavarde2);

const pavarde3 = `Asmens ${name3} ${surname3} inicialai yra ${name3[0]}.${surname3[0]}.`
console.log(pavarde3);

const pavarde4 = `Asmens ${name4} ${surname4} inicialai yra ${name4[0]}.${surname4[0]}.\n`
console.log(pavarde4);


const name12 = 'Vardo' + ' ' + '"' + name1 + '"' + ' ' + 'ilgis yra' + ' ' + name1.length + ' ' + 'simboliai' + '.';
console.log(name12);
const surname12 = `Asmens ${name1 + ' ' + surname1} inicialai yra ${name1[0] + '.' + surname1[0]}.`
console.log(pavarde1);


console.clear();
