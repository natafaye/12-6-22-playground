console.log("Inside Shari's javascript file!");
let numberOfPeople = prompt("How many people are in the room?");
console.log("numberOfPeople = " + numberOfPeople);

let isMorning = prompt("Is it morning?");
console.log("isMorning = " + isMorning);

let message = "";

for (let i = 0; i < numberOfPeople; i++) {
    if (isMorning === "yes")
        message += "Good morning!\n";
    else
        message += "Good afternoon!\n";
}
alert(message);
