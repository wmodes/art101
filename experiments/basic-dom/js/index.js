// index.js
// This is an experiment with basic webpage manipulation
// author: Wes Modes <wmodes@ucsc.edu>
// date: 32 April 2020

function main() {
	// start by finding target element
    outputEl = document.getElementById("output");
    // create new element
    var newEl = document.createElement("span");
    // change text in element
    newEl.innerHTML = `A Lot. `;
    // append new element to output div
    outputEl.appendChild(newEl);
}
