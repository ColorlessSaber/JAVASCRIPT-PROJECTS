let active_player = 'X'; // Keeps track of whose turn it is.
let selected_squares = []; // Stores an array of moves used to determine wing conditions.

// For placing an X or O in a square
function placeXorO(square_number) {
    // Check to see if the square hasn't been selected already
    if (!selected_squares.some(element => element.includes(square_number))){
        let select = document.getElementById(square_number); // Retrieves the HTML element that was clicked
        
        // Checks to see who's turn it is
        if (active_player === 'X') {
            // Place x.png in HTML
            select.style.backgroundImage = 'url("./images/x.png")';
        } else {
            // Place 0.png in HTML
            select.style.backgroundImage = 'url("./images/o.png")';
        }

        selected_squares.push(square_number + active_player); // Add square_number with active_player to selected_squares
        checkWinConditions(); // Check for any win conditions

        // Change the active player
        if (active_player === 'X'){
            active_player = 'O';
        } else {
            active_player = 'X';
        }

        playAudio('./media/place.mp3'); // Play place sound

        // See if it is the computer's turn
        if (active_player === 'O') {
            disableClick();
            setTimeout(function () { computersTurn();}, 1000); // Delay computer's turn by 1 second delay
        }
        return true; // Needed for computersTurn() to work
    }

    // Randomly selects square for computer's turn
    function computersTurn() {
        let success = false; // Used to keep track if computer has played or not
        let pick_a_square; // used to store random number 0-8

        // Loop through and find an avaliable square to play.
        while (!success){
            pick_a_square = String(Math.floor(Math.random() * 9)); // Randomly pick a number between 0-8

            // Check to see if pick_a_square is an avaliable move or not.
            if (placeXorO(pick_a_square)){
                success = true;
            }
        }
    }
}

// Checking to see if there is a winCondition
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)} // X 0, 1, 2 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304)} // X 3, 4, 5 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508)} // X 6, 7, 8 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558)} // X 0, 3, 6 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558)} // X 1, 4, 7 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558)} // X 2, 5, 8 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90)} // X 6, 4, 2 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)} // X 0, 4, 8 condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100)} // O 0, 1, 2 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304)} // O 3, 4, 5 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)} // O 6, 7, 8 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)} // O 0, 3, 6 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558)} // O 1, 4, 7 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)} // O 2, 5, 8 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90)} // O 6, 4, 2 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)} // O 0, 4, 8 condition
    else if (selected_squares.length >= 9) { // Check to see if it is a tie
        playAudio('./media/tie.mp3');
        setTimeout(function () {resetGame();}, 500); // Reset game after .3 second delay
    }
}

// Checks if an array included 3 strings, AKA, checks for win condition.
function arrayIncludes(square_a, square_b, square_c){
    const a = selected_squares.includes(square_a);
    const b = selected_squares.includes(square_b);
    const c = selected_squares.includes(square_c);
    if (a === true && b == true && c === true) {return true;}
}

// Makes the tic-tac-toe table temporarily unclickable
function disableClick(){
    body.style.pointerEvents = 'none'; // makes body unclickable
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000); // makes body clickable after 1 second delay
}

// Play an audio file
function playAudio(audio_url){
    let audio_file = new Audio(audio_url);
    audio_file.play();
}

// Draw the win line
function drawWinLine(coord_x1, coord_y1, coord_x2, coord_y2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coord_x1, y1 = coord_y1, x2 = coord_x2, y2 = coord_y2, x = x1, y = y1;

    // animate the draw line on cavas
    function animateLineDrawing () {
        const animate_loop = requestAnimationFrame(animateLineDrawing); // Creates the loop for drawing the line
        c.clearRect(0, 0, 608, 608); // Clears conent from last loop iteration
        c.beginPath(); // starts a new path
        c.moveTo(x1, y1); // Start point of line
        c.lineTo(x, y); // end point of line
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.stroke();

        // Checks if we've reached the endpoints
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;} // Adds 10 to the previous end x endpoint
            if (y < y2) {y += 10;} // Adds 10 to the previous end y endpoint
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animate_loop);} // Necessary for the 6, 4, 2 win conditions
        }

        // Check for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animate_loop);}
        }
    }

    // Clear the canvas after the win line is drawn
    function clear() {
        const animation_loop = requestAnimationFrame(clear); // starts the animation loop
        c.clearRect(0,0,608,608); // clears the canvas
        cancelAnimationFrame(animation_loop);
    }

    disableClick();
    playAudio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame();}, 1000); // Clears and then reset game after 1 second delay
}

// Resets the game in the event of a tie or a win
function resetGame() {
    // Loop through and remove the images from the squares
    for (let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selected_squares = []; // Reset variable
}