


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
        console.log(i, text[i]);
        result += text[i];
    }

    return result;


}

console.log(reverse('abc'), '---', 'cba');

// console.log(reverse(2154)); --> typeof text !== 'string'
// console.log(reverse(true)); -->typeof text !== 'string'
// console.log(reverse(reverse)); -->typeof text !== 'string'
// console.log(reverse()); -->typeof text !== 'string'
// console.log(reverse(undefined)); -->typeof text !== 'string'
// console.log(reverse([])); -->typeof text !== 'string'
// console.log(reverse(['asd'])); -->typeof text !== 'string'
// console.log(reverse([2545])); -->typeof text !== 'string'
// console.log(reverse(''), '->', ''); --> text === ' '
// console.log(reverse('x'), '->', 'x'); --> text.length <= 1


console.log(reverse('labas'), '->', 'sabal');
console.log(reverse('kedes'), '->', 'sedek');
console.log(reverse('alus'), '->', 'sula');