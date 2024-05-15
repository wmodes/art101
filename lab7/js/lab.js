

// accept a str and sorts it
function sortStr(str) {
    var strArray = str.split("");
    var sortedArray = strArray.sort();
    var sortedStr = sortedArray.join("");
    return sortedStr;
}

var str = prompt("Enter a string: ");

// caall the function, save the results in a variable, and print the results to the console.
var sortedStr = sortStr(str);

document.writeln("The sorted string is: " + sortedStr);
