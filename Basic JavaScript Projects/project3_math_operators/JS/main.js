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