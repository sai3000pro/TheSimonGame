
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];


var gameStart = false;


var level = 0;

$(document).keypress(function() {
    if (!gameStart) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStart = true;
    }
});




$(".btn").click(function() {
    if (gameStart) {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    }
});

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // randomChosenColour.play();
    playSound(randomChosenColour);
}



function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        console.log("Success!");
    }
    else if (gameStart) {
        console.log("Fail!");
        startOver();
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart")
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)
    }

    if (gamePattern.length - 1 == currentLevel) {
        setTimeout(function() {
            userClickedPattern=[];
            nextSequence();
        }, 1000)
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStart = false;
}