console.log("Inside Shari's counting.js file!");
let numberString;
let number;
do {
    numberString = prompt("Please enter a number to count?");
    console.log("numberString = " + numberString);

    number = parseInt(numberString);
    if (isNaN(number))
        alert(numberString + " is not a number. Please try again.");

} while (isNaN(number)) 

console.log("number = " + number);
let message = "";
for (let i = 1; i <= number; i++)
    message += i + (i%2 == 0?" (even), ":" (odd), ");
message = message.substring(0, message.length-2);
alert(message);
