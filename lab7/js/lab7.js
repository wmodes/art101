/*
 * Author: S Llawom Eydansele <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

/* better */

// // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
// String.prototype.shuffle = function () {
//     var a = this.split(""),
//         n = a.length;
//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// }
//
// // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
// function toTitleCase(str) {
//   return str.replace(
//     /\w\S*/g,
//     function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
//   );
// }
//
// toTitleCase(str.toLowerCase().shuffle().trim().replace("  ", " "))




// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
    // // convert to lower case
    // userName = userName.toLowerCase();
    // console.log("userName =", userName);
    // // split string to array
    // var nameArray = userName.split('');
    // console.log("nameArray =", nameArray);
    // // sort the array
    // var nameArraySort = nameArray.sort();
    // console.log("nameArraySort =", nameArraySort);
    // // join array back to a string
    // var nameSorted = nameArraySort.join('');
    // console.log("nameSorted =", nameSorted);
    // // Note that I could have done the above lines as a single line:
    // //   userName.toLowerCase().split("").sort().join("")
    return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}

function main() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("And oh hey, I fixed your name.<br>Your new one is above.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

// call the function
main();
