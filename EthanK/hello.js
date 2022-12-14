let numberOfPeople = prompt('How many people are in the room?');

console.log(numberOfPeople);

let isMorning = prompt('Is it morning?');

let message = "";

for (let i = 0; i < numberOfPeople; i++) {
    if (isMorning === 'yes') {
        message += "good Morning!\n"
    }
    else
    {
        message += "Good afternoon!\n"
    }

}
alert(message)