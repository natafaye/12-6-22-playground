let peopleInRoom;
let isMorning;

peopleInRoom = window.prompt('How many people are in the room?');
peopleInRoom = parseInt(peopleInRoom);

isMorning = window.prompt("is it morning?")
let message = "";
for(i = 0; peopleInRoom > i; ++i){
    if(isMorning === "yes"){
        message += "Good Morning\n";

    } else {
        message += "Good Afternoon\n";
        
    }
}

alert(message);