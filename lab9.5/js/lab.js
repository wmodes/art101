/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */


// ^^^ Put a comment block (Links to an external site.) at the top of your program

// Use getElementById() to find your output <div> and assign it to a variable outputEl
// The first step of a 1000 miles, is FIND THE ELEMENT!
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Hello there!";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
// JS Creator: "Cuz I said so."
new2El.innerHTML = "Oh, why hello, sir.";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.color = "red";
new1El.style.fontSize = "30px";
new2El.style.color = "blue";
new2El.style.fontSize = "30px";
outputEl.style.backgroundColor = "papayawhip";
