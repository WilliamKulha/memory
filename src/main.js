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
        $(position1).html(`
        <span class="${card.name} card back"></span>
        `)
        $(position2).html(`
        <span class="${card.name} card back"></span>
        `)
    });

    let clickCounter = 0
    let clickedBoy1;
    let clickedBoy2;

    $('body').on('click', '.card', (e) => {
        if (clickCounter === 0) {
            clickedBoy1 = e.target;
            $(clickedBoy1).removeClass('back');
            clickCounter++;    
        } else if (clickCounter === 1) {
            clickedBoy2 = e.target;
            $(clickedBoy2).removeClass('back');
            if (isEqual($(clickedBoy1).attr('class'), $(clickedBoy2).attr('class'))) {
                clickedBoy1.addClass('got-it');
                clickedBoy2.addClass('got-it');
            } else {
                setTimeout(function () {
                    $(clickedBoy1).addClass('back');
                    $(clickedBoy2).addClass('back');  
                }, 1200);
            }
            clickCounter = 0;
        }
    });

    
});

