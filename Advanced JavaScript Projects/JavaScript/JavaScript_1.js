// Calculates the fuel cost for the selected fuel type from user
function calculate_cost() {
    let fuel_selection = document.getElementById("fuel-selection").value;
    let number_of_gallons = document.getElementById("number-of-gallons").value;
    let total_cost;
    //Calculate the cost
    switch (fuel_selection.toLowerCase()){ // Makes all the letters be lower case to cap-error spelling
        case "pluto 3000":
            total_cost = 4500 * number_of_gallons;
            break;
        case "hyper-nitro premium":
            total_cost = 7300 * number_of_gallons;
            break;
        case "nebula color":
            total_cost = 3900 + number_of_gallons;
            break;
        case "knights power":
            total_cost = 6900 + number_of_gallons;
            break;
        default:
            total_cost = "non selected";
    }
    // If user selected a fuel from the list, print out the recipt
    if (total_cost != "non selected"){
        document.getElementById("recipt").innerHTML = "Your total cost comes to: $" + total_cost + ". Will that be cash or card?";
    }
    else {
        // Inform the user they have not selected a fuel from the list
        document.getElementById("recipt").innerHTML = "Please select a gas from the list.";
    }
}

// Change the buttons to a different color based input
function color_change(color) {
    var button_list = document.getElementsByClassName("btn-color")
    for (var i = 0; i< button_list.length; i++){
        button_list[i].style.backgroundColor = color;
        button_list[i].style.color = "white";
    }
}

// Draw an image in the HTML canvas-2 element
function draw_canvas1() {
    const canvas = document.getElementById("canvas1");
    const content = canvas.getContext("2d");

    // Create gradient
    const gradient = content.createRadialGradient(75,50,5,90,60,100);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "white");

    // Fill with gradient
    content.fillStyle = gradient;
    content.fillRect(10, 10, 150, 80);

    //Add words to canvas
    content.font = "30px Arial";
    content.strokeText("Good morning!", 10, 50)
}

// draw an image in HTML cavnas-2 element
function draw_canvas2() {
    const canvas = document.getElementById("canvas2");
    const content = canvas.getContext("2d");

    // create a gradient
    const gradient = content.createLinearGradient(0,0,170,0);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "blue");

    // Draw a filled rectangle
    content.fillStyle = gradient;
    content.fillRect(20,20,150,100);
}