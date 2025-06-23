// Counts up from zero to 10 and prints it on the screen.
function call_loop() {
    var count = 0;
    var text_to_display = "";
    while (count < 11){ // up bounds is set to 11 so the number 10 is shown on screen.
        //Add count with a HTML <br> to text_to_display
        text_to_display += count + "<br>";
        document.getElementById("loop").innerHTML = text_to_display;
        count++;
    }
}

// Trying out the string length method.
function count_string() {
    var string_to_count = document.getElementById("string-to-count").value;
    var count = 0; // Keep track of how many characters in string
    var text_to_display = ""; // Variable for paragrah
    while (count < string_to_count.length) {
        count++;
        text_to_display += count + "<br>";
        document.getElementById("string-count-result").innerHTML = text_to_display;
    }
    text_to_display += "The string is " + count + " long!";
    document.getElementById("string-count-result").innerHTML = text_to_display;
}

// Using a for-loop to list out musical instruments in star wars
function for_loop() {
    var instrument_list = ["Ommni Box", "Tartti", "Electric Vioddle", "Double Viol", "Quadjitar", "Flukebladder pipe balaxan", "Bandfill"];
    let list = "";
    let y;
    for (y = 0; y < instrument_list.length; y++) {
        list += instrument_list[y] + "<br>"
    }
    document.getElementById("list_of_instruments").innerHTML = list;
}

// Using an array and displaying a value from the array on the screen
function array_function() {
    let list = ["Frieren Beyond Journey's End", "Mythical Beast Investigator", "Colorless", "A Sign of Affection"];
    document.getElementById("array").innerHTML = list[1] + " is one of my favorite manga."
}

// Seeing how the const variable works
function constant_function() {
    const inventory = {
        potion: "high healing",
        weapon: "Long sword",
        armor: "leather"
    }
    // Add a new property to inventory and change the a value in inventory
    inventory["potion"] = "Elixer";
    inventory["money_bag"] = 2356;
    document.getElementById("constant").innerHTML = "Upgraded my potion to " + inventory["potion"] +
    " and included my money bag to inventory which has " + inventory["money_bag"] + " gold coins."
}

// Seeing the scope range of a let variable
function func_let() {
    var string1 = "Hello! I am, String1; I am a var variable, and I am free to roam! Unlike string2, who is locked away in a sub-function.";
    var message = string1 + "<br>";
    document.getElementById("text-message").innerHTML = message;
    function inner_func() {
        let string2 = "Yes, I, String2, is a let variable, and I am confined to this sub-function :(";
        message += string2 + "<br>";
    }
    inner_func()
    string1 = "Indeed is the sad life for String 2."
    message += string1 + "<br>"
    document.getElementById("text-message").innerHTML = message;
}

// Using the function return statement
function math_problem() {
    var message = "Lets do a math problem!";
    message += "<br>" + "What is 345892 / 918405?";
    function division(x, y) {
        return x / y;
    }
    message += "<br>" + "The answer is: " + division(345892, 918405);
    document.getElementById("result").innerHTML = message;
}

// Created a for-loop with a continue and break
function find_letter() {
    let string_to_loop = "The quick brown fox jumps over the lazy dog";
    let letter_to_find = document.getElementById("letter-to-search").value;
    let i;
    for (i = 0; i < string_to_loop.length; i++){
        // if letter to find matches the letter in position of string, break the loop, else continue
        if (letter_to_find == string_to_loop[i]){
            break;
        }
        else{
            continue;
        }
    }
    document.getElementById("found").innerHTML = "Found the letter at index " + i;
}

// Creating an object using let
let bookCollection = {
    quanity: 345,
    read_perc: "37%",
    oldest_book: "1876",
    print_oldest_book: function () {
        return "The oldest book that I have is a book from the year " + this.oldest_book;
    }
}
document.getElementById("book-collection").innerHTML = bookCollection.print_oldest_book();