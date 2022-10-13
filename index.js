let winningNumber = Math.floor((Math.random()*100)+1);
// Above is the variable that determins the number the players is trying to guess.

let playerGuess = undefined;
// Above is the player input of their guess
    // Should only be recorded after a button click

let winCondition = false;
// Above establishes win condition, and sets to false, because player has not yet won.


// This needs to be wrapped inside an event listener to the result of player input
    if (playerGuess === winningNumber) { //if player guesses the right number
        winCondition == true; // they win
        // Below: if the player wins reset try counter and assign new number
        if (winCondition == true) { // if the player wins
            attempts = 0; // Attempts is reset
            winningNumber = Math.floor((Math.random()*100)+1); // new winning number is assigned
            winCondition == false; // new game starts, setting win condition to false
        }
    } else if (playerGuess != winningNumber) { //if the player's guess is not the winning number
        attempts ++; // an attempt is marked
    }

