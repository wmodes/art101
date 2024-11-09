/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/

function generateRandomText() {
  const text = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get a random starting index and adjust to nearest whitespace boundary
  let randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }

  // Set the end index and adjust to nearest whitespace boundary
  let endIdx = randStart + randLen;
  while (endIdx < text.length && text[endIdx] !== ' ') {
    endIdx++;
  }

  // Generate the random text, breaking at the nearest whitespace boundaries
  return text.slice(randStart, endIdx).trim();
}


// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

