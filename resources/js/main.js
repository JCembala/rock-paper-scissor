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

function playerPlay(playerSelection) {
    return playerSelection.trim().toLowerCase();
}

function round(playerInput, computerInput) {

    let roundMessage = 'none';
    let winner = 'none';

    if (playerInput === computerInput) {
        roundMessage = 'Draw';
    } else if (playerInput === 'rock' && computerInput === 'paper') {
        roundMessage = 'You lose, Paper beats Rock.'
        winner = 'computer';
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
        roundMessage = 'You win!'
        winner = 'player';
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        roundMessage = 'You win!'
        winner = 'player';
    } else if (playerInput === 'paper' && computerInput === 'scissors') {
        roundMessage = 'You lose, Scissors beats Paper.'
        winner = 'computer';
    } else if (playerInput === 'scissor' && computerInput === 'paper') {
        roundMessage = 'You win!'
        winner = 'player';
    } else if (playerInput === 'scissor' && computerInput === 'rock') {
        roundMessage = 'You lose, Rock beats Scissors.'
        winner = 'computer';
    }

    console.log(roundMessage);
    return winner;
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = 'none';

    const rockBtn = document.querySelector('.actions__rock--js');
    const paperBtn = document.querySelector('.actions__paper--js');
    const scissorsBtn = document.querySelector('actions__scissors--js');

    rockBtn.addEventListener('click', () => {
        round(playerPlay('rock'), computerPlay());
    })

    paperBtn.addEventListener('click', () => {
        round(playerPlay('paper'), computerPlay());
    })

    scissorsBtn.addEventListener('click', () => {
        round(playerPlay('scissors'), computerPlay());
    })

    for (let i = 0; i < 5; i++) {
        let currentWinner = round(playerPlay(), computerPlay());

        if(currentWinner === 'player') {
            playerScore++;
        } else if (currentWinner === 'computer') {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        gameWinner = 'Player';
    } else if (computerScore > playerScore) {
        gameWinner = 'Computer';
    } else { 
        gameWinner = 'Draw';
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    
    if (gameWinner === 'Draw') {
        console.log(`There is no match winner, draw!`)
    } else {
        console.log(`Match winner: ${gameWinner}`)
    }
}

game();