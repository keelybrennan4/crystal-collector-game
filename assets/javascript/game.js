$(document).ready(function() {

//-------- GLOBAL VARIABLES -------// 
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
var randomNumberGuess = 0;
var winCount = 0;
var lossCount = 0; 



//1. 4 crystals should display on the page each with a differnet random value between 1 and 12. 
    //math.floor.math.random()
    //print in container "number-to-guess"
//id="one", "two", "three" "four"

    //<button onclick="myFunction()">Try it</button>
//<p id="demo"></p>

//function myFunction() {
  //  var x = Math.floor((Math.random() * 12) + 1);
  //  document.getElementById("demo").innerHTML = x;
//}



//---------- FUNCTIONS -------// 

//2. As the user clicks on the crystals, userScore is incremented until the user reaches the numberToGuess.
    //math.floor.math.random()
    // 


//3. numberToGuess is randomly generated between 19 and 120 and displayed on the page.
    //math.floor.math.random() +19
    //print in container "number-to-guess"

    function getRandomNumber() {
        //var randomNumber = document.getElementById("number-to-guess")
        number.innerHTML = Math.floor((Math.random() * 100) + 19);
      }
    
    onclick="getRandomNumber()"
    console.log(getRandomNumber);

//4. userScore is compared to numberToGuess. 
    // IF the userScore is less than the numberToGuess, the user may continue to click the crystals to add points to the userScore
        // ELSE - when userScore == numberToGuess, 
            //the round is over
            // the wins are incrememted by 1 
            // game resets so the user can play another round 
        // ELSE IF - when userScore > numberToGuess, the user loses the round. 
            //the round is over
            // the wins are incrememted by 1 
            // game resets so the user can play another round 




//---------- GAME -------// 
//click functions 
$("#one").click(function() {
    alert("test");
})

$("#two").click(function() {
    alert("test");
})

$("#three").click(function() {
    alert("test");
})

$("#four").click(function() {
    alert("test");
})








});