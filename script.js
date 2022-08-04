//let userName = prompt("Hey, what's your name?");
//document.write("Hey " + userName + ",Welcome to Seattle!");
//let response = prompt(userName  + " do you like to hike? ");
//if (response = yes) alert{"You've Come to the Right Place!"};

function getName(){
    let userName = prompt("What is your name?");
    if (userName == "" || userName == null || userName == undefined) {
        alert("Nice try Kassie")
    }
    document.write("Hey " + userName + ",Welcome to Seattle!");
}

getName()

function ask1(){
    let response = prompt("Do you like to hike?")
    if (response == "" || response == null || response == undefined){
        alert("Nice try Kassie")
    }
    else if (response == "yes"){
        alert("You've come to the right place!")
    }
    else if (response == "no"){
        prompt("Do you like to kayak")
    }
    else {
        alert ("Next time, please type yes or no")
    }
}

ask1()

