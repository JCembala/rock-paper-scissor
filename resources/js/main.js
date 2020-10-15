function randomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor((Math.random() * (max - min + 1))) + min;
}

function computerPlay() {

    let randomizedValue = randomInt(1, 3);

    console.log(randomizedValue);
    let returnValue = 'none';

    switch (randomizedValue) {
        case 1:
            returnValue = 'rock';
            break;

        case 2:
            returnValue = 'paper';
            break;

        case 3:
            returnValue = 'scissor';
            break;

        default:
            returnValue = 'I was here';
            break;
    }

    return returnValue;
}

console.log(computerPlay());