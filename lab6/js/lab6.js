/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 13 September
 * License: Public Domain
 */

// Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"];

myMainRide = {
    make: "Ford",
    model : "Taurus",
    color : "Rusty",
    year : 1995,
    age : function() {
        return 2019 - age;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

