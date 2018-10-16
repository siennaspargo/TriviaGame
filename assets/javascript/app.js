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








  // variable references to html elements
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');



  // function to for trivia questions + answers + display of trivia 
  



  function barQuiz() {
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
          answers.push()
        }
      }
    )
  }
  


});