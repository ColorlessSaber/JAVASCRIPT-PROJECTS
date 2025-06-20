//Below are functions that demastrate javascript's math operations
function add_result () {
    var result = 3 + 5;
    document.getElementById("math_add").innerHTML = "3 + 5 = " + result;
}

function sub_result () {
    let result = 4 - 5;
    document.getElementById("math_sub").innerHTML = "4 - 5 = " + result;
}

function div_result () {
    let result = 64 / 8;
    document.getElementById("math_div").innerHTML = "64 / 8 = " + result;
}

function multi_result () {
    let result = 5 * 25;
    document.getElementById("math_multi").innerHTML = "5 * 25 = " + result;
}

function math_operations () {
    let result = 70 / 70 * 70 + 70 - 70;
    document.getElementById("math_all").innerHTML = "70 / 70 * 70 + 70 - 70 = " + result;
}

function mod_op (){
    let result = 125 % 8;
    document.getElementById("mod_op_result").innerHTML = "The reminder is: " + result;
}

function neg_op (){
    let result = -100;
    document.getElementById("neg_op_result").innerHTML = "You get: " + -result;
}
// The end of functions that demastrate javascript's math operations.


// Increment and decrement examples
function increment_value (){
    let parg_value = document.getElementById("number_value").innerText;
    parg_value++;
    document.getElementById("number_value").innerHTML = parg_value;
}

function decrement_value (){
    let parg_value = document.getElementById("number_value").innerText;
    parg_value--;
    document.getElementById("number_value").innerHTML = parg_value;
}

// Utilizing a few Math functions
function random_number (){
    document.getElementById("show_random_number").innerHTML = Math.random() * 50;
}

function exp_number () {
    let value = 5;
    document.getElementById("exp_number_result").innerHTML = Math.exp(value);
}