class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'animal';
        this.sound = '';
        this.emoji = '🐕🐈🐹';
        this.soundRepeatCount = 1;
    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}. ${this.sound}!! ${this.emoji}`;
    }
    doubleSound() {
        const text = Array(this.soundRepeatCount).fill(this.sound);
        if (this.soundRepeatCount > 0) {
            text[0] = this.sound[0].toUpperCase() + this.sound.slice(1);
        }
        return text.join(' ') + '.';
    }
}

export default Animal;



// Animal(name, color), intro():
// - Pet(name, color), intro():
// - Dog(name, color, sound), intro()
//     - sound -> Double sound
//         - Cat(name, color), intro()
//         - Hamster(name, color), intro(), eat()
//         - foodAmount
//         - eat(): Mano burnoje siuo metu yra { { foodAmout++ } } morku



//             Papildomi reikalavimai:
// - naminiai gyvunai { { sound } } kartoja 2 kartus
//     - vandens gyvunai { { sound } } kartoja 0 kartus
//         - delfinas: { { sound } } kartoja 5 kartus
//             - pauksciai { { sound } } kartoja 3 kartus