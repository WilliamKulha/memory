import { Deck } from './deck.js'

export function assignPositions() {
    let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    shuffle(positions);
    Deck.forEach(function(card) {
        card.pos1 = positions[0];
        positions.shift();
        card.pos2 = positions[0];
        positions.shift();
    });  
}


function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
