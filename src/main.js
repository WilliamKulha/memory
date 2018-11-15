import { Deck } from './deck.js';
import {assignPositions} from './memory.js';
import './styles.css';
import './img/card-back.png';
import './img/faye.jpeg';
import './img/frankie.jpeg';
import './img/l.jpeg';
import './img/slowbro.png';
import './img/spike.jpeg'

let isEqual = function(name1, name2) {
    return name1 === name2;
}

$(document).ready(function() {
    assignPositions();
    Deck.forEach(function(card) {
        let position1 = document.getElementById(card.pos1);
        let position2 = document.getElementById(card.pos2);
        $(position1).html(`<img class="card" src=${card.img} alt=${card.name}>`)
        $(position2).html(`<img class="card" src=${card.img} alt=${card.name}>`)
    });

    let clickCounter = 0
    let clickedBoy1;
    let clickedBoy2;

    $('body').on('click', (e) => {
        if (clickCounter === 0) {
            clickedBoy1 = e.target;
            console.log(clickedBoy1.nextSibling);
            $(clickedBoy1).addClass('flipped');
            clickCounter++;    
        } else if (clickCounter === 1) {
            clickedBoy2 = e.target;
            $(clickedBoy2).addClass('flipped');
            if (isEqual(clickedBoy1.alt, clickedBoy2.alt)) {
                clickedBoy1.remove();
                clickedBoy2.remove();
            } else {
                $(clickedBoy1).removeClass('flipped');
                $(clickedBoy2).removeClass('flipped');
            }
            clickCounter = 0;
        }
    });

    
});

