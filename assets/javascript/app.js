$("document").ready(function() {


  // global variables
  // variable array of question objects
  var questions = [
    {
      question: "This tool helps bartenders create the perfect pour every time.\n(a) mister\n\ (b) snifter\n(c) jigger",
      answer: "c"
    },
    {
      question: "Which term describes a drink served at room temperature, with no ice or chilling?\n(a) neat\n\ (b) straight up\n(c) on the rocks",
      answer: "a"
    },
    {
      question: "Tom Cruise showed off his bartending skills in this classic 1988 film.\n(a) Risky Business\n (b) Stand by Me\n(c) Cocktail",
      answer: "c"
    },
    {
      question: "These cocktail additives, made from herbs and roots, are used to make both a Manhattan and the classic martini.\n(a) sours\n (b) bitters\n(c) sugars",
      answer: "b"
    },
    {
      question: "How can you estimate the proof of a liquor?\n(a) double the alcohol by volume\n (b) half the alcohol by volume\n(c) add 50 to the alcohol by volume",
      answer: "a"
    },
    {
      question: "Which of the following is NOT typically found in an Old Fashioned?.\n(a) vermouth\n (b) bitters\n(c) sugar",
      answer: "a"
    },
    {
      question: "Which two ingredients make up a martini?\n(a) vodka and bitters\n (b) gin and tonic\n(c) gin and vermouth",
      answer: "c"
    },
    {
      question: "What two ingredients make up the Shirley Temple.\n(a) ginger ale and grenadine\n (b) cola and simple syrup\n(c) orange juice and seltzer water",
      answer: "a"
    },
  ]
  // variable for score
  var score = 0;

  for(var i = 0; i <questions.length; i++)
  // prompt for user to enter in
  var response = $("#trivia").append(questions[i].question);

  if (response === questions[i].question){
    score++;
    alert("nice job!");
  } else {
      alert("wrong");
    }
    alert("you got " + score + "/" + questions.length);
    
$("#trivia").push(response).html;

// function timeOut(){

// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// function fiveSeconds() {
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function tenSeconds() {
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

// function timeUp() {
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// }
// timout.start();

// Set the date we're counting down to
var countDown = new time("0:0:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDown - now;

  // Time calculations for hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="time-left"
  document.getElementById("time-left").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-left").innerHTML = "TIMES UP!";
  }
}, 1000);

  });