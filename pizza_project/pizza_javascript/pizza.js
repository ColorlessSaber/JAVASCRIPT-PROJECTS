// Initializes the string for the receipt and calculates the cost for pizza size
function getRecipt () {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
    // Loop through and check to see which pizza size has been selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize+"<br>";
        }
    }

    // Calculate the cost for the selected pizza size
    if (selectedSize === "personal pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "small pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "medium pizza") { 
        sizeTotal = 10;
    } else if (selectedSize === "large pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "extra large pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;

    // print values to console
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");

    // Pass runnintTotal and text1 to the other functions
    getTopping(runningTotal, text1);
};

// Add the topping(s) selected to the recipet and calculate the cost for each topping
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through and check to see what toppings where selected
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }

    // check to see how many topings where selected
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Calculate the final cost and print values to the console
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = $"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("purchase total: $"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00</strong></h3>";
};