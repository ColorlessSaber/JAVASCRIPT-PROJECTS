function getMsg() {
    // step 1: setup the XML HTTP request object
    let ajexRequest = new XMLHttpRequest();

    // get input value of name to display to user after request has been made
    let inputVal = document.getElementById("fullName").value;

    // function to display user input value once request has been received
    ajexRequest.onload = function() {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    // step 2: prepare the type of request an dwhat to request from the server
    ajexRequest.open('GET', 'response.html', true);

    // step 3: Defines the AHAX response callback method that establishes whether the response
    // was successful and where the data should be displayed
    ajexRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = ajexRequest.responseText;
        }
    }

    // step 4: send the request
    ajexRequest.send();
}