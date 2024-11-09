/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Wes modes
   Date: 2023
*/

function generateRandomText() {
  const text = `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only. There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.`;
  const min = 3;
  const max = 150;
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
  let selectedText = text.slice(randStart, endIdx).trim();
  // Capitalize the first letter of the selected text
  return selectedText.charAt(0).toUpperCase() + selectedText.slice(1);
}


// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

