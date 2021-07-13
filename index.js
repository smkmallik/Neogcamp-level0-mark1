var readlineSync = require('readline-sync');
var chalk = require('chalk');

var header = `
-----------------------------
    Let's see how well you know SOUMIK!!
-----------------------------
`;

console.log(header);

var userName = readlineSync.question('\n Please enter your name: ');

while(userName.length === 0) {
  console.log("\nWait! you haven't entered your name.");
  userName = readlineSync.question('\nPlease enter your name: ');
}

userName = userName.charAt(0).toUpperCase() + userName.slice(1);

var greetingMessage = 'Hi' + ' ' + userName + '👋' + '' + "Let's see how well you know me !! " + '😉';

console.log(greetingMessage);

console.log("\nLet's begin the quiz, best of luck");

var questionSet = [
  {
    question: "1) Where do I live now?",
    options: ["Surat", "Chennai", "Kolkata", "Jaipur"],
    answer: "Surat"
  },
  {
    question: "2) When is my birthday?",
    options: ["15th August", "20th December", "12th October", "30th March"],
    answer: "30th March"
  },
  {
    question: "3) Am I an early bird or night owl?",
    options: ["Early Bird", "Night Owl", "None"],
    answer: "Night Owl"
  },
  {
    question: "4) What is my favorite color? ",
    options: ["black", "blue", "green", "red"],
    answer: "black"
  },
  {
    question: "5) What is my favorite sport?",
    options: ['Football', 'Tennis', 'Cricket', 'Table Tennis'],
    answer: 'Football'
  },
  {
    question: "6) What is my favorite pet?",
    options: ['Cat', 'Dog', 'Mice', 'None'],
    answer: 'Dog'
  }
]

var highScore = [
  {
    name: 'Anirudh',
    score: 7
  }
]

var score = 0;
function play(question, options, answer) {
  var index = readlineSync.keyInSelect(options, question);
  var userAnswer = options[index];
  if(userAnswer === answer) {
    score = score + 1;
    console.log('Correct!');
  } else if (userAnswer === undefined) {
    console.log('You have skipped the question');
  } else {
    console.log('Wrong!');
  }
}

for(var i=0;i<questionSet.length;i++) {
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}

var leaderBoard = `
-----------LEADERBOARD-------------
`
console.log(leaderBoard);

var highScoreBeaten = false;
var indexInsert = 0;
for(var i=0;i<highScore.length;i++) {
  highScoreBeaten = true;
  indexInsert=i;
  highScore.splice(indexInsert, 0, {name: `${userName}`, score: `${score}`});
  break;
}

if(highScoreBeaten) {
  for(var i=0;i<highScore.length;i++) {
    console.log(highScore[i].name + ': ' + highScore[i].score);
  }
}

console.log('------------------------');
