/*
ARRAY - masyvas, kolekcija / sarasas / listas / matrica / arejas




*/

const tuscias = [];
console.log(tuscias);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const paskutinisPazymys = pazymiai[pazymiai.length - 1];
console.log(paskutinisPazymys);

const pazymioPozicija = pazymiai.length - 1;
console.log(pazymioPozicija);

console.clear();

// Masyvas pazymiu
// Suskaiciuoti pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7. "

// Masyvas vietovardziu.
// Suformuoti sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

const pazymiaiMano = [8, 7, 8, 10, 6];
// const pazymiuSuma = pazymiaiMano[0] + pazymiaiMano[1] + pazymiaiMano[2] + pazymiaiMano[3] + pazymiaiMano[4];
let pazymiuSuma = 0;
pazymiuSuma += pazymiaiMano[0];
pazymiuSuma += pazymiaiMano[1];
pazymiuSuma += pazymiaiMano[2];
pazymiuSuma += pazymiaiMano[3];
pazymiuSuma += pazymiaiMano[4];

const pazymiuVidurkis = pazymiuSuma / pazymiaiMano.length;
const visoVidurkis = `Studento pazymiu vidurkis yra ${pazymiuVidurkis}.`;
console.log(visoVidurkis);

console.log('--------------------------------------');

const vietoVardziai = ['Vilnius', 'Kaunas', 'Palanga'];
// const aplankytosVietos = `${vietoVardziai[0]}, ${vietoVardziai[1]}, ${vietoVardziai[3]}, ${vietoVardziai[3]}, ${vietoVardziai[4]}."`

let aplankytosVietos = '';
aplankytosVietos += vietoVardziai[0];
aplankytosVietos += ', ';
aplankytosVietos += vietoVardziai[1];
aplankytosVietos += ', '
aplankytosVietos += vietoVardziai[2];
aplankytosVietos += '."'

const visosAplankytosVietos = `"Mano aplankytos vietos: ${aplankytosVietos}`;
console.log(visosAplankytosVietos)

console.clear();


let a = 5;
let x = 7;

// x = x + ++a; //12
// x = (x++) + a; //13

// x++ - X padidintas vienu vienetu

console.clear();

const colors = ['geltona', 'zalia', 'raudona'];
console.log(colors);

colors[1] = 777;
console.log(colors);

colors[1] = 'žalia';
console.log(colors);

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
