let winningNumber = Math.floor((Math.random()*100)+1);
// Above is the variable that determins the number the players is trying to guess.

let playerGuess = undefined;
// Above is the player input of their guess
    // Should only be recorded after a button click

let winCondition = false;

// This needs to be wrapped inside an event listener to the result of player input
    if (playerGuess === winningNumber) {
        winCondition == true;
    } else if (playerGuess != winningNumber) {
        winCondition == false;
        tryCounter ++;
    }

// Below: if the player wins reset try counter and assign new number
if (winCondition == true) {
    tryCounter = 0;
    winningNumber = Math.floor((Math.random()*100)+1);
}