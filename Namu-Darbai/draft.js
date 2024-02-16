

const marks = [10, 2, 8, 4, 6];
const badMarkLimit = 5;

// kokie gauti geri pazymiai?
const goodMarks = marks.filter(n => n > badMarkLimit);
console.log(goodMarks);

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];
const marriedStudents = students.filter(s => s.isMarried);
console.log(marriedStudents);


const notMarriedStudents = students.filter(s => !s.isMarried);
console.log(notMarriedStudents);

const pensininkai = students
    .filter(student => student.age >= 70);
console.log(pensininkai);
