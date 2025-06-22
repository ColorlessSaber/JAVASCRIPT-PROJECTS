// Code to demastore how local and global variables work.
var overlord = "I am an overlord! (global variable)";

function village1 () {
    var villager = "I am a villager in village1 (local variable)";
    console.log(overlord + " " + villager);
}

function village2 () {
    // Did this on purpose to show how local variables stay within the function they are made in.1
    console.log(villager);
}

village1();
village2();

// If statement example
function check_the_time () {
    if (new Date().getHours() > 12) {
        document.getElementById("time_check").innerHTML = "Yes indeedy! It is past noon!";
    }
}

function allowed_to_pull_sword () {
    if (document.getElementById("name").value == "Link") {
        document.getElementById("sword_pull_result").innerHTML = "You are the Hero! You can pull the Master Sword out!";
    }
    else {
        document.getElementById("sword_pull_result").innerHTML = "You are not the Hero. You cannot pull the Master Sword out.";
    }
}