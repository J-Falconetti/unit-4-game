
// this is the Javascript page
// game that picks a random number and the player needs to pick from 4 crystals with random values: to win game user must get to total without going over.  All values will rest after game is either won or lost and total score will be displayed


// setting up varibles Total, Crystals 1 to 4, crystal cunter, win and loss counters

var total;
var wins=0;
var loss=0;

//generating random values
    // Total is for total number between 19 and 120
 total =Math.floor(Math.random() * 101) + 19;
 $("#total").html("Your Total Goal is: " +total)
    // getting values for the 4 crystals and placing cards 
    for (i = 1; i < 5; i++) {

        var genran = Math.floor(Math.random() * 12) 
        var gems = $("<div>");
            gems.attr({
            "class": 'gems',
            "data-genran": genran
    });

        $(".playcard").append(gems);
    }
$(".gems").on('click', function () {
   
});