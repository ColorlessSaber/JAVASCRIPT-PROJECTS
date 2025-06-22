// Using the concat method to combine multiple strings
function full_sentence() {
    var string1 = "Fate/";
    var string2 = "Stay Night";
    var string3 = " ";
    var string4 = "Heaven's Feel";
    var compelte_sentence = string1.concat(string2, string3, string4);
    document.getElementById("long_string").innerHTML = compelte_sentence;
}

// using the slice method that comes with a string object.
function slice_string() {
    var string_to_slice = document.getElementById("string_to_slice").innerText;
    var result_string_slice = string_to_slice.slice(12, 25);
    document.getElementById("result_string_slice").innerHTML = result_string_slice;
}

// Trying out the toupperCase() and search() method that comes with a string object.
function find_string() {
    var string_to_search = document.getElementById("string_to_search").innerText;
    var string_to_find = document.getElementById("string_to_find").value;
    document.getElementById("search_results").innerHTML = string_to_find.toUpperCase() + " was at " + string_to_search.search(string_to_find);
}

// Trying out the toString() method that comes with a number object.
function number_to_string() {
    var number = 135;
    document.getElementById("number_string").innerHTML = number + " in string form is " +
        number.toString() + "... No difference!?";
}

// Trying out the .toPercision() method that comes with number object.
function trim_number() {
    // The HTML element is a string; thus had to convert it to a number to use toPercision.
    var number_to_trim = Number(document.getElementById("number_to_trim").value);
    var signif_digits = document.getElementById("signif_digits").value;
    document.getElementById("result_number_trim").innerHTML = number_to_trim.toPrecision(signif_digits);
}

// Trying out the toFixed() and valueOf() method that comes with number object.
function reduce_number() {
    var number_reduced = (4578.56789564).toFixed(3);
    document.getElementById("result_number_reduce").innerHTML = number_reduced.valueOf();
}