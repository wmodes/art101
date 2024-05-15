// index.js
// This is an experiment with basic webpage manipulation
// author: Wes Modes <wmodes@ucsc.edu>
// date: 32 April 2020


function generateAnagram(inputString) {
  // Convert the input string to an array of characters
  const characters = inputString.split('');

  // Shuffle the array of characters to create an anagram
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  // Join the shuffled characters back into a string and return
  return characters.join('');
}

console.log("Javascipt is working!");

$("#my-button").click(function(){
  // console.log("Button clicked!");
  // var name = prompt("What is your name?");

  var name = $("#input").val()

  var anagram = generateAnagram(name);

  console.log("Prompt returned: " + anagram);

  newText = "Hello " + anagram + "!";
  $("#title").html(newText);
});