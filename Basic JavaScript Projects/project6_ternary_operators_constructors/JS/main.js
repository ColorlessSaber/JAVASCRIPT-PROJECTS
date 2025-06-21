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