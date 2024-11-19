// guess - guess a number between 1 to n
// author: wmodes@csumb.edu
//

var finalFlag, lastGuess, lowerLimit, upperLimit;
var guessNum = 0;

function getGuess() {
  if (! finalFlag) {
    guessNum++;
  }
  var newGuess = Math.round((upperLimit-lowerLimit)/2+lowerLimit);
  if (newGuess == lastGuess) {
    finalFlag = true;
    finalOutput(newGuess);
  }
  else {
    updateOutput(newGuess);
  }
  lastGuess = newGuess;
  return newGuess;
}

function updateOutput(num) {
  var outputStr = "<span class=num>" + guessNum + "</span>Is it " + num + "?";
  $("#output").html(outputStr);
}

function finalOutput(num) {
  var outputStr = "<span class=num>" + guessNum + "</span>It is " + num + "!";
  $("#output").html(outputStr);
}

function guessLower() {
  upperLimit = lastGuess;
  getGuess();
}

function guessHigher() {
  lowerLimit = lastGuess;
  getGuess();
}

// Let's get started
$("#start").click(function(){
  finalFlag = false;
  guessNum = 0;
  var max = $("#max").val();
  lowerLimit = 1;
  upperLimit = max;
  getGuess();
});

$("#lower").click(function(){
  guessLower();
});

$("#higher").click(function(){
  guessHigher();
});

$("#yes").click(function(){
  finalFlag = true;
  finalOutput(lastGuess);
})
