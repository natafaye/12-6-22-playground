console.log("Inside Shari's javascript file!");
let numberOfPeopleString;
let numberOfPeople;
do {
    numberOfPeopleString = prompt("How many people are in the room?");
    console.log("numberOfPeopleString = " + numberOfPeopleString);

    numberOfPeople = parseInt(numberOfPeopleString);
    if (isNaN(numberOfPeople))
        alert(numberOfPeopleString + " is not a number. Please try again.");

} while (isNaN(numberOfPeople)) 

console.log("numberOfPeople = " + numberOfPeople);

let isMorning = prompt("Is it morning?");
console.log("isMorning = " + isMorning);

let message = "";

for (let i = 0; i < numberOfPeople; i++) {
    if (isMorning.toUpperCase() === "YES")
        message += "Good morning!\n";
    else
        message += "Good afternoon!\n";
}
alert(message);
