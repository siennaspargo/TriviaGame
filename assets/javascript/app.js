$("document").ready(function() {

  // global variables
// timer code

var number = 60;

// variable to hold interval ID for when the function is run
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

// decrement function
function decrement() {

  // decrease time number by 1
  number--;

  // display timer
  $("#timer").html("<h2>" + number + "</h2>");

  // once the timer stops
  if (number === 0) {
    stop();

   // alert user the time is up
   alert("Time is up!"); 
  }
}

// stop function
function stop() {

 // clear intervalId
 clearInterval(intervalId);
}

// execute the funtion by run()
run();

// END TIMER function

// TRIVIA QUESTIONS

var myQuestions = [
  {
    question: "This tool helps bartenders create the perfect pour every time.",
    answers: {
      a: "mister",
      b: "snifter",
      c: "jigger"
    },
    correctAnswer: "c"
  },
  {
    question: "Thich term describes a drink served at room temperature, with no ice or chilling?",
    answers: {
      a: "neat",
      b: "stright up",
      c: "on the rocks"
    },
    correctAnswer: "a"
  },
  {
    question: "om Cruise showed off his bartending skills in this classic 1988 film.",
    answers: {
      a: "Risky Business",
      b: "Stand By Me",
      c: "Cocktail"
    },
    correctAnswer: "c"
  },
  {
    question: "These cocktail additives, made from herbs and roots, are used to make both a Manhattan and the classic martini.",
    answers: {
      a: "sours",
      b: "bitters",
      c: "sugars"
    },
    correctAnswer: "b"
  },
  {
    question: "How can you estimate the proof of a liquor?",
    answers: {
      a: "double the alcohol by volume",
      b: "half the alcohol by volume",
      c: "add 50 to the alcohol by volume"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is NOT typically found in an Old Fashioned?",
    answers: {
      a: "vermouth",
      b: "bitters",
      c: "sugar"
    },
    correctAnswer: "a"
  },
  {
    question: "Which two ingredients make up a martini?\n(a) vodka and bitters?",
    answers: {
      a: "gin and tonic",
      b: "gin and vermouth",
      c: "vodka and bitters"
    },
    correctAnswer: "b"
  },
  {
    question: "What two ingredients make up the Shirley Temple?",
    answers: {
      a: "ginger ale and grenadine",
      b: "cola and simple syrup",
      c: "orange juice and seltzer water"
    },
    correctAnswer: "a"
  },

]






  // variable references to html elements
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');



  // function to for trivia questions + answers + display of trivia 
  



  function barQuiz() {
    var output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        var answers = [];

        for (letter in currentQuestion.answers) {
          answers.push()
        }
      }
    )
  }
  


});