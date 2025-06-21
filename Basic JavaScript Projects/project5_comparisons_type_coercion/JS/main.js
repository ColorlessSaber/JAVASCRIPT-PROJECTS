// Using the typeof to learn how it works.
document.write(typeof 10.5269);

document.write("<br>"); // place content below on a new line.

// Testing out type coercion and see how JS will respond.
document.write(70 / "70" * "70" + "70" - 70);
/* This will print 7000. Why? It does 70/70, which is 1 and 1 time 70 is just 70. Next it appends 70 to 70 to get 7070,
and when you subtract 70 from 7070 you get 7000. */

// Display basic Boolian Logic
document.write("<br>"); // place content below on a new line
document.write("Boolian Logic"); // Identify what the following logic is on the screen
document.write("<br>"); // place content below on a new line
document.write(50 < 60);
document.write("<br>"); // place content below on a new line
document.write(70 > 90);

// Use the console.log to print to the browser's console
console.log(42 + 42);
console.log("a" > "b");
console.log(1000 == 1000);
console.log(-50 == 50);

// Learning how the "===" works
document.write("<br>"); // place content below on a new line
document.write("=== operations"); // Identify what the following logic is on the screen
document.write("<br>"); // place content below on a new line
document.write(-10 === -10);
document.write("<br>"); // place content below on a new line
document.write(-10 === "10");
document.write("<br>"); // place content below on a new line
document.write(-10 === "-10");
document.write("<br>"); // place content below on a new line
document.write(-10 === 10);

// Learning how the AND and OR operators
document.write("<br>"); // place content below on a new line
document.write("AND and OR operators"); // Identify what the following logic is on the screen
document.write("<br>"); // place content below on a new line
document.write(10 > 5 && -7 < -6);
document.write("<br>"); // place content below on a new line
document.write(10 < 5 && -7 < -6);
document.write("<br>"); // place content below on a new line
document.write(50 > 51 || 0.25 < 0.26);
document.write("<br>"); // place content below on a new line
document.write(50 > 51 || 0.25 > 0.26);

// Utilizing the NOT operator
document.write("<br>"); // place content below on a new line
document.write("NOT operators"); // Identify what the following logic is on the screen
document.write("<br>"); // place content below on a new line
document.write(!(60 > 50));
document.write("<br>"); // place content below on a new line
document.write(!(60 < 50));

// Learning how to use isNaN()
function run_true_isnan() {
    document.getElementById("isnan_true").innerHTML = isNaN("marry had a little lamp");
}

function run_false_isnan() {
    document.getElementById("isnan_false").innerHTML = isNaN("1234");
}

// The fllow functions will display positive and negative infinity on the screen when user clicks on the paragraph.
function show_pos_infinity () {
    document.getElementById("pos_infinity").innerHTML = 1.5E310;
}

function show_neg_infinity () {
    document.getElementById("neg_infinity").innerHTML = -1.5E310;
}