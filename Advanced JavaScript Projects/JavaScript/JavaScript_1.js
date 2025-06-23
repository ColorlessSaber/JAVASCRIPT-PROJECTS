// Calculates the fuel cost for the selected fuel type from user
function calculate_cost() {
    let fuel_selection = document.getElementById("fuel-selection").value;
    let number_of_gallons = document.getElementById("number-of-gallons").value;
    let total_cost;
    //Calculate the cost
    switch (fuel_selection.toLowerCase()){ // Makes all the letters be lower case, thus avoid typoes
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
    if (total_cost == "non selected"){
        document.getElementById("recipt").innerHTML = "Please select a gas from the list.";
    }
    else {
        document.getElementById("recipt").innerHTML = "Your total cost comes to: $" + total_cost + ". Will that be cash or card?";
    }
}