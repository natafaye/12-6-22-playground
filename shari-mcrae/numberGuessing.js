console.log("Inside Shari's numberGuessing.js file!");
let randomNumber;

function getRandomInt(max) {
    return (Math.floor(Math.random() * max) + 1);
}

// get a random number between 1 and 10
randomNumber = getRandomInt(10);
console.log("randomNumber", randomNumber);

let numberString;
let number;
let promptString = "Please guess a number between 1 and 10.";

// prompt for number guess
numberString = prompt(promptString);
do {
    console.log("numberString = " + numberString);
    number = parseInt(numberString);

    // if they select cancel
    if (numberString === null) 
        // thank them for playing and fail loop condition
        alert("Thanks for playing!");

    // if they enter something besides a number
    else if (isNaN(number))
        // tell them of the error and prompt again
        numberString = prompt(numberString + " is not a number. Please try again.");

    // if they enter the correct number
    else if (number === randomNumber) {
        // congratulate them and break out of loop
        alert("You guessed it! The number is " + number + ".");
        break;
    
    // if we are still trying
    } else 
        // prompt again
        numberString = prompt("Nope! Try again. " + promptString);   

 } while (numberString !== null);
