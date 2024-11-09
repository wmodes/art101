// new js fille for lab 7
// autho wmodes
// created 10/29/2021


// get a string from the user, sort it, return the sorted string
function sortStr() {
  let userName = window.prompt("Enter a name: ");
  return userName.split("").sort().join("");
}

// call the function and print the results to the html doc
document.writeln(sortStr());