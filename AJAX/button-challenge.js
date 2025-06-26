function changeParag() {
    var xhttp = new XMLHttpRequest(); // Create a request object.

    // validate that connection was successful
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("parag").innerHTML = this.responseText;
        }
    };

    // Execute the request
    xhttp.open("GET", "button_challenge.txt", true);
    xhttp.send();
}