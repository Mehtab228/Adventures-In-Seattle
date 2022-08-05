//let userName = prompt("Hey, what's your name?");
//document.write("Hey " + userName + ",Welcome to Seattle!");
//let response = prompt(userName  + " do you like to hike? ");
//if (response = yes) alert{"You've Come to the Right Place!"};

function getName(){
    let userName = prompt("What is your name?");
    if (userName == "" || userName == null || userName == undefined) {
        alert("Nice try Kassie");
        getName();
    } else {
        document.write("Hey " + userName + ", Welcome to Seattle!");
        }
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
        let response = prompt("Do you like to kayak?")
        if (response == "" || response == null || response == undefined){
            alert("Nice try Kassie")
        }
        else if (response == "yes"){
            alert("You've come to the right place!")
        }
        else if (response == "no"){
            let response = prompt("Do you like bars or nightclubs?")
            if (response == "" || response == null || response == undefined)
            {
                alert("Nice try Kassie")
            }
            else if (response == "yes")
            {
                alert("You've come to the right place!")
            }
            else if (response == "no"){
                alert("But you've made it so far!")
        }
        else {
            alert ("Next time, please type yes or no")
        }
        }
        else {
            alert ("Next time, please type yes or no")
        }
    }
    else {
        alert ("Next time, please type yes or no")
    }
}

ask1()

function ask2(){
    let response = prompt("Which of the three do you enjoy the most hiking, kayaking, or going out?")
    if (response == "hiking"){
        return document.write("<img src='hiking.jpeg'alt='The top of snow lake' class='image2'/>")
    }
    else if (response == "kayaking"){
        return document.write("<img src='kayak.jpeg'alt='kayaking south lake union'/>")
    }
    else if (response == "going out"){
        return document.write("<img src='rooftop.jpeg'alt='rooftop bar'/>")
    }
    else {
        return document.write("<img src='movienight.jpeg' alt='movie night at home'/>")
    }
}




