let winningNumber = Math.floor((Math.random()*100)+1);
// Above is the variable that determins the number the players is trying to guess.

let playerGuess = undefined;
// Above is the player input of their guess
    // Should only be recorded after a button click

let attempts = 0;
// Above is the attempt that the player is currently on

let winCondition = false;
// Above establishes win condition, and sets to false, because player has not yet won.

// --------------------------
//#region ## DOM JS Element Creation, Definition, And Appending
// --------------------------

let input = document.createElement(`input`)
input.placeholder=`Do Ya Feel Lucky Punk?`
let goButton = document.createElement(`button`);
goButton.textContent=`Go!`;
let resetButton = document.createElement(`button`);
resetButton.textContent=`Reset`;
let hintButton = document.createElement(`button`);
hintButton.textContent=`I Need A Hint...`
let gameRoot = document.querySelector(`#gameContainer`);
gameRoot.append(input, goButton, resetButton, hintButton)


//#endregion ## DOM JS Element Creation, Definition, And Appending


let button = document.querySelector(`#submit`);
// This needs to be wrapped inside an event listener to the result of player input
goButton.addEventListener(`click`, (event)=>{
    playerGuess = input.value;
    console.log(`The winning number is `+winningNumber);
    console.log(`The player guess is ` +playerGuess)
    if (playerGuess == winningNumber) { //if player guesses the right number
        winCondition = true; // they win
        // Below: if the player wins reset try counter and assign new number
        console.log(`The win condition is presently: ` +winCondition)
        if (winCondition == true) { // if the player wins
            document.body.style.backgroundColor=`yellow`;
            
            alert("CONGRATULATIONS!!!\nYOU HAVE GUESSED CORRECTLY\nENJOY THE GOLD MEDAL -- WELL, WHILE WE DON'T HAVE A METAL, YOU CAN ENJOY THE GOLDEN COLOR AT LEAST.")

        }
    } else if (playerGuess != winningNumber) { //if the player's guess is not the winning number
        attempts ++; // an attempt is marked
    }
})
    


// --------------------------
//#region ## RESET BUTTON
// --------------------------
resetButton.addEventListener(`click`, (event)=>{
    attempts = 0; // Attempts is reset
    winningNumber = Math.floor((Math.random()*100)+1); // new winning number is assigned
    winCondition == false; // new game starts, setting win condition to false
    document.body.style.backgroundColor=`white`;
})
//#endregion ## RESET BUTTON
