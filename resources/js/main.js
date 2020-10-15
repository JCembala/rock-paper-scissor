function randomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor((Math.random() * (max - min + 1))) + min;
}

function computerPlay() {

    let randomizedValue = randomInt(1, 3);
    let computerSelection = 'none';

    switch (randomizedValue) {
        case 1:
            computerSelection = 'rock';
            break;

        case 2:
            computerSelection = 'paper';
            break;

        case 3:
            computerSelection = 'scissors';
            break;
    }

    return computerSelection;
}

function playerPlay() {
    const playerSelection = prompt('Choose one of these: Paper, Rock, Scissors');

    return playerSelection.trim().toLowerCase();
}

function round(playerInput, computerInput) {

    let roundWinner = 'none';

    if (playerInput === computerInput) {
        roundWinner = 'Draw';
    } else if (playerInput === 'rock' && computerInput === 'paper') {
        roundWinner = 'You lose, Paper beats Rock.'
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
        roundWinner = 'You win!'
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        roundWinner = 'You win!'
    } else if (playerInput === 'paper' && computerInput === 'scissors') {
        roundWinner = 'You lose, Scissors beats Paper.'
    } else if (playerInput === 'scissor' && computerInput === 'paper') {
        roundWinner = 'You win!'
    } else if (playerInput === 'scissor' && computerInput === 'rock') {
        roundWinner = 'You lose, Rock beats Scissors.'
    }

    return roundWinner;
}

console.log(round(playerPlay(), computerPlay()));