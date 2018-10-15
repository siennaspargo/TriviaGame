$("document").ready(function() {

  // global variables
  // variable array of question objects
  var questions = [
    {
      prompt: "This tool helps bartenders create the perfect pour every time.\n(a) mister\n\ (b) snifter\n(c) jigger",
      answer: "c"
    },
    {
      prompt: "Which term describes a drink served at room temperature, with no ice or chilling?\n(a) neat\n\ (b) straight up\n(c) on the rocks",
      answer: "a"
    },
    {
      prompt: "Tom Cruise showed off his bartending skills in this classic 1988 film.\n(a) Risky Business\n\ (b) Stand by Me\n(c) Cocktail",
      answer: "c"
    },
    {
      prompt: "These cocktail additives, made from herbs and roots, are used to make both a Manhattan and the classic martini.\n(a) sours\n\ (b) bitters\n(c) sugars",
      answer: "b"
    },
    {
      prompt: "How can you estimate the proof of a liquor?\n(a) double the alcohol by volume\n\ (b) half the alcohol by volume\n(c) add 50 to the alcohol by volume",
      answer: "a"
    },
    {
      prompt: "Which of the following is NOT typically found in an Old Fashioned?.\n(a) vermouth\n\ (b) bitters\n(c) sugar",
      answer: "a"
    },
    {
      prompt: "Which two ingredients make up a martini?\n(a) vodka and bitters\n\ (b) gin and tonic\n(c) gin and vermouth",
      answer: "c"
    },
    {
      prompt: "What two ingredients make up the Shirley Temple.\n(a) ginger ale and grenadine\n\ (b) cola and simple syrup\n(c) orange juice and seltzer water",
      answer: "a"
    },
  ]
  // variable for score
  var score = 0;

  for(var i = 0; i <questions.length; i++)
  // prompt for user to enter in
  var response = window.prompt(questions[i].prompt);

  if (response == questions[i].answer){
    score++;
    alert("nice job!");
  } else {
      alert("wrong");
    }

    alert("you got " + score + "/" + questions.length);
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  });