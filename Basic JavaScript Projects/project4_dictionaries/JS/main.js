// Created a function to learn how to create and call a key from a dictionary.
function favorite_icecream() {
    var icecream_flavors = {
        flavor1: "Oreo Cookie Ice Cream",
        flavor2: "Vinilla Ice Cream",
        flavor3: "Mini Chocolate Chip Ice Cream",
        flavor4: "Cookie & Cream Ice Cream"
    };
    delete icecream_flavors.flavor3;
    document.getElementById("dictionary").innerHTML = "My favorite ice cream today is: " + icecream_flavors.flavor3;
}