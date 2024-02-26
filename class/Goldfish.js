import Fish from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color, wishLimit) {
        super(name, color);
        this.breed = 'goldfish';
        this.emoji = '🐠🐠';
        this.canMakeWishes = true;
        this.wishLimit = 3;
        this.makeWishes = 0;
    }
    makeWish(myWish) {
        this.makeWishes += myWish.split().length;
        if (this.canMakeWishes === false) {
            return `As nepildau noru / Wrong fish 👀`;
        } else if (this.makeWishes <= this.wishLimit) {
            return `${this.name}: Stai tavo noras: ${myWish}`;
        } else {
            return `${this.name}: Daugiau noru ispildyti nebegaliu 😒`;
        }
    }
}

export default Goldfish;


// - Fish(name, color), intro(), swim(), stopSwim():
// - Shark(name, color), intro(), swim(), stopSwim(), eatHuman()
//     - eatHuman() Kaip noreciau paragauti plaukmenu...
// Goldfish(name, color, wishLimit ?), intro(), swim(), stopSwim(), makeWish()
//     - wishLimit(default: 3)
//     - makeWish({{ myWish }})
//     - jeigu liko neispildytu noru: Stai tavo noras: { { myWish } }
// - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu: (
//     - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀



