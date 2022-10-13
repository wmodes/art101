// Lab 10 - sort or scramble a name
// Author: S Llawom Eydansele <wmodes@csumb.edu>
// Created: February 18, someyear
// License: Public Domain

// Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

// Add to your previous JavaScript file:
// Using jQuery, do the following for each button:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section
// Go into your css and style each of the classes
// Test each button
$("#c-button").click(function(){
  // find the section, toggle a class
  // $("#challenge").toggleClass("special");

  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  // here's a different maybe better way to do it
  // (we are traversing the DOM to the parent)
  $(this).parent().toggleClass("special");
})
