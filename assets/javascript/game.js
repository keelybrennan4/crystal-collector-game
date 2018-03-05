$(document).ready(function() {

//---------- GLOBAL VARIABLES ---------// 
var crystal = {
    one:
    {
        value: 0
    },
    two:
    {
        value: 0
    },
    three:
    {
        value: 0
    },
    four:
    {
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0; 

//------------ FUNCTIONS ----------// 
// function to generate random numbers 
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

//starts the game and restarts the game 
var startGame = function(){
    //set current score equal to 0 
    currentScore = 0;

    //set targetScore to random number between 19 and 120 
    targetScore = getRandom(19, 120);

    //set each crystal score to a random number between 1 and 12
    crystal.one.value = getRandom(1, 12);
    crystal.two.value = getRandom(1, 12);
    crystal.three.value = getRandom(1, 12);
    crystal.four.value = getRandom(1, 12);

    // print to html to reflect the score changes after each guess
    $("#user-score").html(currentScore);
    $("#number-to-guess").html(targetScore);
}

//function to pass the randomy generated value to each crystal and store the value during each round 
var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
    $("#user-score").html(currentScore);
    //call the check win function
    checkWin();
    console.log("Your Score:  " + currentScore); 
}

//check if user won or lost, and reset the game 
var checkWin = function(){
    //check if currentScore is greater than targetScore 
    if(currentScore > targetScore){
        console.log("You lost!");
        lossCount++
        $("#losses").html(lossCount);
        startGame();
    }
    else if(currentScore == targetScore) {
        console.log("You Won!");
        winCount++
        $("#wins").html(winCount);
        startGame();
    }
}

//------------ GAME ----------// 
//starts game the first time 
startGame();

//click functions 
$("#one").click(function() {
// pass the randomy generated value to each crystal and store the value during each round 
    addValues(crystal.one);
})

$("#two").click(function() {
    addValues(crystal.two);
})

$("#three").click(function() {
    addValues(crystal.three);
})

$("#four").click(function() {
    addValues(crystal.four);
})

console.log("Target Score: " + targetScore);
console.log("Crystal One:  "  + crystal.one.value);
console.log("Crystal Two:  "  + crystal.two.value);
console.log("Crystal Three:  "  + crystal.three.value);
console.log("Crystal Four:  "  + crystal.four.value);
});