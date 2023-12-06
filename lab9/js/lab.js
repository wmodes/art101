// Lab 10 - sort or scramble a name
// Author: S Llawom Eydansele <wmodes@csumb.edu>
// Created: February 18, someyear
// License: Public Domain

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");

// Add to your previous JavaScript file:
// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
$(".highlight-button").click(function(){
  // I can use "this" to refer to the button that got clicked
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

// Now let's add a handler for the party toggle button
$("#party-toggle button").click(function(){
  // if the body element has a class of party...
  // then change button text to "Business Time"
  if ($("body").hasClass("party")) {
    $("body").removeClass("party");
    $("#party-toggle button").html("Party");
  }
  else {
    $("body").addClass("party");
    $("#party-toggle button").html("Business");
  }
})

$("#make-hide").click(function(){
  $("#instructions").toggleClass("hidden");
})  