class Fish {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'Fish';
        // this.sound = 'Au miau niom';
        // this.emoji = '🐕🐈🐹';
        this.canSwim = true;
        this.isSwimming = true;
    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}.${this.emoji}`;
    }
    swim() {
        this.canSwim = true;
        return `${this.name}: As plaukiu`;
    }
    stopSwim() {
        this.isSwimming = false;
        return `${this.name}: Dabar miegu`;
    }
}
export default Fish;



// / - Fish(name, color), intro(), swim(), stopSwim():
// - Shark(name, color), intro(), swim(), stopSwim(), eatHuman()
//     - eatHuman() Kaip noreciau paragauti plaukmenu...
// Goldfish(name, color, wishLimit ?), intro(), swim(), stopSwim(), makeWish()
//     - wishLimit(default: 3)
//     - makeWish({{ myWish }})
//     - jeigu liko neispildytu noru: Stai tavo noras: { { myWish } }
// - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu: (
//     - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀