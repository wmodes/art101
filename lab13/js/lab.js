// Put a comment block (Links to an external site.) at the top of your program
//

console.log("Yes, my JS is running.");


// Create a "FizzBuzz" function similar to how we did in class
function fizzBuzz() {
  console.log("Yes, my function is running.");
  // Loop through numbers 1 to 200, listing them as you go
  for (var i=1; i<=200; i++) {
    // start w empty string to build up
    var str = '';
    // If the number is a multiple of 3, if should print "Fizz!"
    if (i % 3 == 0) {
      str += "Fizz";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if (i % 5 == 0) {
      str += "Buzz";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if (i % 7 == 0) {
      str += "Boom";
    }
    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (str == '') {
      str += i;
    } else {
      str += "!";
    }
    debugger;
    $("#output").append("<p>" + str + "</p>")
  }
}

fizzBuzz();
