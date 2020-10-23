let playerScore = 0;
let computerScore = 0;

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
        winner = 'computer';
    } else if (playerInput === 'rock' && computerInput === 'scissors') {
        winner = 'player';
    } else if (playerInput === 'paper' && computerInput === 'rock') {
        winner = 'player';
    } else if (playerInput === 'paper' && computerInput === 'scissors') {
        winner = 'computer';
    } else if (playerInput === 'scissors' && computerInput === 'paper') {
        winner = 'player';
    } else if (playerInput === 'scissors' && computerInput === 'rock') {
        winner = 'computer';
    }
    return winner;
}

function setup() {

    const rockBtn = document.querySelector('.actions__rock--js');
    const paperBtn = document.querySelector('.actions__paper--js');
    const scissorsBtn = document.querySelector('.actions__scissors--js');
    
    rockBtn.addEventListener('click', () => {
        game(round(playerPlay('rock'), computerPlay()));
    })
    
    paperBtn.addEventListener('click', () => {
        game(round(playerPlay('paper'), computerPlay()));
    })
    
    scissorsBtn.addEventListener('click', () => {
        game(round(playerPlay('scissors'), computerPlay()));
    })

}

function game(roundWinner) {

    let gameWinner = 'none';
    const scoreText = document.querySelector('.score__text--js');

    if(roundWinner === 'player') {
        playerScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    scoreText.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;


    if(playerScore >= 5 || computerScore >= 5)
    {
        if(playerScore > computerScore) {
            gameWinner = 'Player';
        } else if (computerScore > playerScore) {
            gameWinner = 'Computer';
        } else { 
            gameWinner = 'Draw';
        }

        if (gameWinner === 'Draw') {
            scoreText.innerText = `There is no match winner, draw!`;
        } else {
            scoreText.innerText = `Match winner: ${gameWinner}`;
        }

        playerScore = 0;
        computerScore = 0;
    } 
    
}

setup();
