$(document).ready(function () {
    //initializing variables
    //initializes score counter, wins, and losses to 0
    var counter = 0;
    wins = 0;
    losses = 0;

    //generates a random number between 19 and 120 as a target score number for the player
    var targetNumber = Math.floor(Math.random() * 120) + 19;


    //generates 4 numbers between 1 and 12
    //for the ruby picture
    var rubyValue = Math.floor(Math.random() * 12) + 1;
    //for the rose quartz picture
    var roseQuartzValue = Math.floor(Math.random() * 12) + 1;
    //for the sapphire picture
    var sapphireValue = Math.floor(Math.random() * 12) + 1;
    //for the amethyst picture
    var amethystValue = Math.floor(Math.random() * 12) + 1;


    //retrieves the data from each of the gem picture elements using ID
    var rubyPic = $("#rubyPic");

    var roseQuartzPic = $("#roseQuartzPic");

    var sapphirePic = $("#sapphirePic");

    var amethystPic = $("#amethystPic");

    //shows value to guess (target number)
    $("#targetScore").text(targetNumber);
    //initializes 0 in "your score" space
    $("#yourScore").text(counter);

    //adds a value to the gem pictures, a random number between 1 and 12 generated earlier
    rubyPic.attr("data-gemValue", rubyValue);

    roseQuartzPic.attr("data-gemValue", roseQuartzValue);

    sapphirePic.attr("data-gemValue", sapphireValue);

    amethystPic.attr("data-gemValue", amethystValue);

    //adds a click event to the crystals
    $(".gemPic").on("click", function () {

        //targets the clicked gem picture and retrieves its stored value (random number between 1 and 12)
        var crystalValue = ($(this).attr("data-gemValue"));

        //the returned string value of the random number is converted to an integer
        crystalValue = parseInt(crystalValue);

        //for each click, add to a global counter used for the player's score
        counter += crystalValue;

        //updates the player's current score on the page
        $("#yourScore").text(counter);

        //win condition, user wins when their score equals the target number
        if (targetNumber === counter) {
            //updates page to say the user won
            $("#win-lose").html("<h4>You won!</h4>").attr("class", "green-font");
            //win count is increased by 1
            wins += 1;
            //win count is updated on the page
            $("#wins").text(wins);
            //runs a reset function
            gameover();
        }
        //lose condition, user loses if their score is greater than the target number
        else if (targetNumber < counter) {
            //updates page to say user lost
            $("#win-lose").html("<h4>You lost!</h4>").attr("class", "red-font");
            //loss count is increased by 1
            losses += 1;
            //loss count is updated on the page
            $("#losses").text(losses);
            //runs a reset function
            gameover();
        }
        //game over reset function
        function gameover() {
            //resets score counter to 0 for the next game
            counter = 0;
            //refreshes the user's score to 0 for the next game
            $("#yourScore").text(counter);
            //creates a new random target number
            targetNumber = Math.floor(Math.random() * 120) + 19;
            //writes new target number to the page
            $("#targetScore").text(targetNumber);
            //creates new random gem values
            rubyValue = Math.floor(Math.random() * 12) + 1;

            roseQuartzValue = Math.floor(Math.random() * 12) + 1;

            sapphireValue = Math.floor(Math.random() * 12) + 1;

            amethystValue = Math.floor(Math.random() * 12) + 1;
            //stores new random gem values in the images
            rubyPic.attr("data-gemValue", rubyValue);

            roseQuartzPic.attr("data-gemValue", roseQuartzValue);

            sapphirePic.attr("data-gemValue", sapphireValue);

            amethystPic.attr("data-gemValue", amethystValue);
        }
    });
});