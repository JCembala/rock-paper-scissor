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

        default:
            computerSelection = 'I was here';
            break;
    }

    return computerSelection;
}


console.log(computerPlay());