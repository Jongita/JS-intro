import Fish from './Fish.js';

class Shark extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'shark';
        this.sound = 'hsh hsh';
        this.emoji = '🦈🦈';
        this.likesEatHuman = false;
    }
    eatHuman() {
        if (this.likesEatHuman = true); {
            return `${this.name}: Kaip noreciau paragauti plaukmenu...`;
        }
    }
}

export default Shark;

// / - Fish(name, color), intro(), swim(), stopSwim():
// - Shark(name, color), intro(), swim(), stopSwim(), eatHuman()
//     - eatHuman() Kaip noreciau paragauti plaukmenu...
// Goldfish(name, color, wishLimit ?), intro(), swim(), stopSwim(), makeWish()
//     - wishLimit(default: 3)
//     - makeWish({{ myWish }})
//     - jeigu liko neispildytu noru: Stai tavo noras: { { myWish } }
// - jeigu neliko neispildytu noru: Daugiau noru ispildyti nebegaliu: (
//     - jeigu is viso nepildo noru: As nepildau noru / Wrong fish 👀