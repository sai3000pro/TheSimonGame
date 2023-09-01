let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
// var blue = new Audio('./sounds/blue.mp3');
// var green = new Audio('./sounds/green.mp3');
// var red = new Audio('./sounds/red.mp3');
// var yellow = new Audio('./sounds/yellow.mp3');
// var wrong = new Audio('./sounds/wrong.mp3');
let userClickedPattern = [];
var level = 0;
var gameStart = false;

$(document).keypress(function() {
    if (!gameStart) {
        gameStart = true;
        nextSequence();
    }
})

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // randomChosenColour.play();
    playSound(randomChosenColour);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function animatePress(currentColour) {
    $("#" + currentColour).addClass(".pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass(".pressed");
    }, 100)
}

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}