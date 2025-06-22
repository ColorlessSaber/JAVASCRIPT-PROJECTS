// Counts down from a user inputed value
function countdown() {
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds;
        var time = setTimeout(tick, 1000); // This pauses the program for 1000miliseconds.
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick();
}

// *** SlideShow JS code ***
// Set the index and show the first slide.
let slide_index = 1;
show_slides(slide_index);

// The next/previous button controls
function plusSlide(n) {
    show_slides(slide_index += n);
}

// The dot/circle slideshow position reference selection.
function current_slide(n) {
    show_slides(slide_index = n);
}

// Shows/changes the slide on the screen
function show_slides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slide_index = 1} // if n is greater than length of slides, reset slide_index to 1
    if ( n < 1) {slide_index = 1} // if n is less than one, reset slide_index to 1

    // Hides slides that are not meant to be shown
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // makes the dot/circle for the slideshow position reference active when the slide is selected
    // does this by removing the class "active" from the element
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Un-hides selected slide and makes the dot/circle for it "active"
    // The -1 is the slideshow starts at zero.
    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active";
}