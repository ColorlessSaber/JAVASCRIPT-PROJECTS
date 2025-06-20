// A simple function that changes the text on the button when pressed.
function combine_two_strings (){
    var str1 = "You clicked me!";
    var str2 = " YAY!"
    document.getElementById("button_text").innerHTML = str1 + str2;
}

//Changes the text in a paragraph when clicked on.
function clickable_text (){
    var str1 = "Told ya "
    str1 += " that I was clickable!"
    document.getElementById("clickable_parag").innerHTML = str1;
}

//Function to display text when button is clicked
function display_text() {
    document.getElementById("message").innerHTML = "Should you be alive, if it's even possible to continue to exist in these sealed lands"
                                                    + ", one day perhaps you will make atonement for what you've done."
}