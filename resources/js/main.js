function randomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor((Math.random() * (max - min + 1))) + min;
}

function computerPlay() {

    let randomizedValue = randomInt(1, 3);

    console.log(randomizedValue);
    let computerSelection = 'none';

    switch (randomizedValue) {
        case 1:
            computerSelection = 'rock';
            break;

        case 2:
            computerSelection = 'paper';
            break;

        case 3:
            computerSelection = 'scissor';
            break;
    }

    return computerSelection;
}

function round(playerInput, computerInput) {

    let roundWinner = 'none';

    if (playerInput === computerInput) {
        roundWinner = 'Draw';
    } else if (playerInput === 'rock' && computerInput === 'paper') {
        roundWinner = 'You lose, Paper beats Rock.'
    } else if (playerInput === 'rock' && computerInput === 'scissor') {
        roundWinner = 'You win!'
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        roundWinner = 'You win!'
    } else if (playerInput === 'paper' && computerInput === 'scissor') {
        roundWinner = 'You lose, Scissor beats Paper.'
    } else if (playerInput === 'scissor' && computerInput === 'paper') {
        roundWinner = 'You win!'
    } else if (playerInput === 'scissor' && computerInput === 'rock') {
        roundWinner = 'You lose, Rock beats Scissor.'
    }

    return roundWinner;
}

console.log(round('paper', computerPlay()));