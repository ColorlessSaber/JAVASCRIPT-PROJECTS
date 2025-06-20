//Two ways to do an "alert"
//alert("Hello, world!");
window.alert("Hello, world!");

//Writing "hello world" to the browser screen.
/*The function is still valid, dispite being called "deprected". its jsut consider bad practise becuase
it does not work in XHTML.*/
document.write("Hello, world!");

//Learning how to define a variable.
var catch_phrase = "Sonic the Hedgehog! The fastest thing alive! \"I'm waiting...\"";
document.write("<br>" + catch_phrase);

//Challenge: Define a variable and set it to the window.alert()
var alert_message = "Danger, Will Robison!"
window.alert(alert_message);

//Concatenate two strings
var temp = "The Legend of Zelda: " + "Twilight Princes"
document.write("<br>" + temp);

// Multiple variables in one statement
var mage_one = "Frieren", mage_two = "Ren", warrior = "Stark";
document.write("<br>" + mage_one);

var sent1 = "This is the beginning of the string", sent2 = " and this is the end of the string";
document.write("<br>" + sent1 + sent2);

// Writing an expression
var math_result = 70 / 70 * 70 + 70 - 70;