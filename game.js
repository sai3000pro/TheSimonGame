var randomNumber;
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
var randomChosenColour;
// var blue = new Audio('./sounds/blue.mp3');
// var green = new Audio('./sounds/green.mp3');
// var red = new Audio('./sounds/red.mp3');
// var yellow = new Audio('./sounds/yellow.mp3');
// var wrong = new Audio('./sounds/wrong.mp3');
var userChosenColour;
let userClickedPattern = [];

function newSequence() {
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    // randomChosenColour.play();
    var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(".btn").click(function() {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})