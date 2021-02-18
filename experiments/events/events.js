// Events.js 
// An experiment with Javascript events
// Author: Wes Modes <wmdes@gmail.com>
// Feb 26, 2020



// Create an event handler within the JS file that listens for a button click.
var button = document.getElementById("my-button");
console.log("Here da button", button);

button.addEventListener("click", function(){
	// When the button is pushed, prompt the user to 
	// input their name with the prompt() function. 
	// var name = prompt("What is your name?");
	var name = document.getElementById("name-field").value;
	console.log("Name iz", name);
	// Use this input to change the text from ‘Hello, World!’ 
	// to ‘Hello’ + the user’s name
	var heading = document.getElementById("my-heading");
	console.log("heading:", heading);
	heading.innerHTML = "Hello, " + name;
})

// create hover event
button.addEventListener("mouseover", function(){
	// move button in random direction
	// choose amount for x and y to move button
	var x_delta = Math.floor(Math.random() * 200) + -100;  // returns a random integer from -100 to 100
	var y_delta = Math.floor(Math.random() * 200) + -100;  // returns a random integer from -100 to 100
	console.log("random change x,y", x_delta, y_delta);
	var top = button.offsetTop;
	var left = button.offsetLeft;
  	console.log("Top: " + top + " Left: " + left);
  	button.style.top = top + y_delta + "px";
  	button.style.left = left + x_delta + "px";

})


