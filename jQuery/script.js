$(document).ready(function(){
    
    // The shineLoop function uses the chaining technique to
    // utilize multiple animate even methods in the same function
    function shineloop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000).animate({backgroundPositionX: '-800px'}, 3000);
    };

    // setInterval will repeat the shineloop function and 0
    // sets the delay amount of time between each repeat
    setInterval(shineloop, 0);

    // shrinks header size when the doucment is scrolled down by 50 pixels
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 50){
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        // triggers the images to slide down one after the other when
        // the user's mouse enters the div area with the #classicCars ID
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },
        
        // triggers the images to slide up and hide each title one after
        // the other when the user's mouse leaves the div area with the 
        // #classicCars ID
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    // creates a toggle affect on each FAQ question by clicking each
    // element's sibling so they don't all display when one question
    // is clicked 
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    })

})