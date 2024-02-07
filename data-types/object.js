/*
OBJECT - objektas 

JSe viskas yra objektai

*/

console.clear();

// vartotojas: vardas, amzius ar vedes


const jonas = {
    isMarried: true,
    age: 99,
    name: 'Jonas',
};

// const a = [1, 2, 3 ....masyvas]
// standartine sintakse [] ir supaprastinta sitakse xxx.yyy
console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas);

jonas.isMarried = false;
console.log(jonas);
