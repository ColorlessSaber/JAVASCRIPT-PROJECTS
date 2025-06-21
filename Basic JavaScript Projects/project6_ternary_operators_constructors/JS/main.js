// Check to see if user is old enough to ride.
function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

// Check to see if user is old enough to vote
function age_to_vote_check () {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age >= 18) ? "You're old enough":"You're not old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

// learning how to create a Class in JavaScript
// NOTE: This is the old way to create a Class in JS--Object Constructor Function.
// *** Example from BootCamp ***
function Vehicle(make, model, year, color) {
    this.vhicle_make = make;
    this.vehicle_mdoel = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emily = new Vehicle("Jeep", "Trail hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function eriks_car() {
    document.getElementById("new_and_this").innerHTML = "Erik drives a " + erik.vehicle_color + "-colored " + 
                                                        erik.vehicle_model + " manufactured in " + erik.vehicle_year;
}

// *** Custom Object Constructor Function ***
function Spell(name, magic_points, range, cool_down) {
    this.name = name;
    this.magic_points = magic_points;
    this.range = range;
    this.cool_down = cool_down;
}

var fireball = new Spell("Fireball", 10, 5, 1.75);

function favorite_spell () {
    document.getElementById("fav_spell").innerHTML = "My favorite spell is the " + fireball.name + " spell! It takes " + 
                                                    fireball.magic_points + "mp, has a range of " + fireball.range +
                                                    "m and only has a cool down time of " + fireball.cool_down + "secs."
}


// Testing to see if I can use a reserved keyword for a variable
// Commented out for it will not run/display result.
//var true = "Apple";
//document.write(true);

// Nested functions
function outer() {
    var outer_string = "I'm a string from the outer function!";
    document.getElementById("nested_function").innerHTML = outer_string + inner();
    function inner() {
        var inner_string = "<br>I'm a string from the inner function!"
        return inner_string;
    }
}