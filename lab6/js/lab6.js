//
// Author: Wes Modes <wmodes@csumb.edu>
// Created: 13 September

// Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"];

// create an object for my main ride
myMainRide = {
    make: "Ford",
    model : "Taurus",
    color : "Rusty",
    year : 1995,
    // we can define a function within our object (called a method)
    // that uses the value of year above (using this.year)
    age : function() {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
