// Reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip nauja studento objekto rakta (marksCount).
// Reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti kaip nauja studento objekto rakta (marksAverage).
// Reikia rasti kiekvieno studento maziausia pazymi ir tai prideti kaip nauja studento objekto rakta (minMark).
// Reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip nauja studento objekto rakta (maxMark).
// Reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu vidurkis yra didesnis uz 5.
// Reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra didesnis uz 5.




// Reikia apskaiciuoti kiekvieno studento pazymiu kieki
// ir tai prideti kaip nauja studento objekto rakta (marksCount).

const students = [
    { name: 'Jonas', age: 99, isMarried: true, marks: [10, 2, 8, 4, 6] },
    { name: 'Ona', age: 66, isMarried: true, marks: [7, 7, 7] },
    { name: 'Maryte', age: 88, isMarried: false, marks: [7, 6, 5, 4, 3] },
    { name: 'Petras', age: 77, isMarried: false, marks: [1] },
];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(students[i]);
// }

// for (let i = 0; i < students.length; i++) {
//     const marks = students[i].marks;
//     console.log(students[i].marks);
// }
// for (let i = 0; i < students.length; i++) {
//     const markLength = students[i].marks.length;
//     console.log(markLength);
// }objects



const students1MarkCount = students[0].marks.length;
const students2MarkCount = students[1].marks.length;
const students3MarkCount = students[2].marks.length;
const students4MarkCount = students[3].marks.length;


students[0].markCount = students1MarkCount;
students[1].markCount = students2MarkCount;
students[2].markCount = students3MarkCount;
students[3].markCount = students4MarkCount;
console.log(students);

console.log('-----------------');

// // Reikia apskaiciuoti kiekvieno studento pazymiu vidurki
// // ir tai prideti kaip nauja studento objekto rakta (marksAverage).

const studentMarks1 = students[0].marks;
const studentMarks2 = students[1].marks;
const studentMarks3 = students[2].marks;
const studentMarks4 = students[3].marks;

let total1 = 0;
for (const number of studentMarks1) {
    total1 += number;
}
let total2 = 0;
for (const number of studentMarks2) {
    total2 += number;
}
let total3 = 0;
for (const number of studentMarks3) {
    total3 += number;
}
let total4 = 0;
for (const number of studentMarks4) {
    total4 += number;
}

students[0].markAverage = total1 / students1MarkCount;
students[1].markAverage = total2 / students2MarkCount
students[2].markAverage = total3 / students3MarkCount;
students[3].markAverage = total4 / students4MarkCount;
console.log(students);

console.log('-----------------');


// Reikia rasti kiekvieno studento maziausia pazymi 
// ir tai prideti kaip nauja studento objekto rakta (minMark).

let marksToMin1 = studentMarks1.sort((a, b) => b - a);
let markMin1 = marksToMin1.at(-1);

let marksToMin2 = studentMarks2.sort((a, b) => b - a);
let markMin2 = marksToMin2.at(-1);

let marksToMin3 = studentMarks3.sort((a, b) => b - a);
let markMin3 = marksToMin3.at(-1);

let marksToMin4 = studentMarks4.sort((a, b) => b - a);
let markMin4 = marksToMin4.at(-1);

students[0].markMin = markMin1;
students[1].markMin = markMin2;
students[2].markMin = markMin3;
students[3].markMin = markMin4;
console.log(students);

console.log('-----------------');

// // Reikia rasti kiekvieno studento maziausia pazymi
// // ir tai prideti kaip nauja studento objekto rakta(maxMark).



// function studentMarkMax(marks) {
//     let marksToMax = marks.sort((a, b) => a - b);
//     let markMax = marksToMax.at(-1);
//     return markMax;

// }

// console.log(studentMarkMax(studentMarks1));
// console.log(studentMarkMax(studentMarks2));
// console.log(studentMarkMax(studentMarks3));
// console.log(studentMarkMax(studentMarks4));

let marksToMax1 = studentMarks1.sort((a, b) => a - b);
let markMax1 = marksToMax1.at(-1);

let marksToMax2 = studentMarks2.sort((a, b) => a - b);
let markMax2 = marksToMax2.at(-1);

let marksToMax3 = studentMarks3.sort((a, b) => a - b);
let markMax3 = marksToMax3.at(-1);

let marksToMax4 = studentMarks4.sort((a, b) => a - b);
let markMax4 = marksToMax4.at(-1);

students[0].markMax = markMax1;
students[1].markMax = markMax2;
students[2].markMax = markMax3;
students[3].markMax = markMax4;
console.log(students);

console.log('-----------------');

// Reikia sudaryti studentu sarasa (pilni objektai),
// kuriu pazymiu vidurkis yra didesnis uz 5.


const goodStudents = students.filter(s => s.markAverage > 5);
console.log(goodStudents);

console.log('-----------------');

// Reikia sudaryti studentu vardu sarasa,
// kuriu pazymiu vidurkis yra didesnis uz 5.

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    if (student.markAverage > 5) {
        console.log(`${student.name}`);
    }
}

