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

for (var i = 0; i < questions.length; i++)
// prompt for user to enter in
var response = $("#trivia").append(questions[i].question);

if (response === questions[i].questions){
  score++;
  alert("nice job!");
} else {
    alert("wrong");
  }
  alert("you got " + score + "/" + questions.length);



  // timer 

  // var timer2 = "3:01";
// var interval = setInterval(function() {
  
//   var timer = timer2.split(':');
//   // parse integer
//   var minutes = parseInt(timer[0], 10);
//   var seconds = parseInt(timer[1], 10);
//   --seconds;
//   minutes = (seconds < 0) ? --minutes : minutes;
  
//   if (minutes <0) clearInterval(interval);
//   seconds = (seconds < 0) ? 59 : seconds;
//   seconds = (seconds <10) ? '0' + seconds : seconds;

//   $('.timer').html(minutes + ':' + seconds);
//   timer2 = minutes + ':' + seconds;
// }, 1000);