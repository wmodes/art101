/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 3 October
 * License: Public Domain
 */

 housesArray = [
    {
        title: "Gryffindor",
        text: "A Gryffindor values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
    },
    {
        title: "Hufflepuff",
        text: "A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
    },
    {
        title: "Ravenclaw",
        text: "A Ravenclaw values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw"
    },
    {
        title: "Slytherin",
        text: "A Slytherin values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones"
    },
    {
        title: "Grufflepuff (Gryffindor + Hufflepuff)",
        text: "Grufflepuffs are brave and courageous, and they use those traits to do good for others. They work hard, and are not afraid to speak their minds. They value honesty, goodness, kindness, and most of all, love. A Grufflepuff is the kind of person you want to be. They hold themselves to high standards and are just genuinely all around awesome people"
    },
    {
        title: "Ravendor (Ravenclaw + Gryffindor)",
        text: "A Ravendor boldly goes where no one else goes intellectually. They are not afraid to debate philosophy and controversial matters, and as firm and confident as they are in themselves, they are also open minded and willing to learn. They are smart, but not intellectual snobs (though if they aren't careful they may come off that way). They'll help you with your homework, even if they have piles of their own. They are the most adept public speakers of the lot"
    },
    {
        title: "Slyffindor (Slytherin + Gryffindor)",
        text: "You'd think that Slyffindors are a constant battle for good and evil, but that is not always the case. They are ambitious, and not afraid to do what they have to do to get where they want to be. They are extraodinary business men and women, and are highly successful. Slyffindors are the definition of ambiverts. They have the charm and charisma that helps them get whatever they want, but they know just when and how to be quiet. And they like those moments of quiet. Sure, some Slyffindors are extremely torn between the darkness and the light, and they often have a very strong devil/angel on the shoulder thing going on in their heads, but a lot of them are really awesome."
    },
    {
        title: "Ravenpuff (Ravenclaw + Hufflepuff)",
        text: "These are the people that you see in the library studying at all hours of the day. They are determined to be the very best they can be at everything, whether it be art, music, school or sports. They are always pushing themselves, not to be better than anyone else, but to personally better themselves. Sometimes, they can go a little overboard in their pursuit for greatness, and they can get upset when things don't go their way, but they are extraordinarily reliable and good at basically everything, so they are an excellent resource to keep around."
    },
    {
        title: "Raverin (Ravenclaw + Slytherin)",
        text: "Don't mess with a Raverin. Seriously. Don't. They are not only intelligent, witty, and creative, but they are sly, ambitious, and can be very cutthroat. They know just how to kill you in the worst way possible and make it look like an accident. But they aren't all bad. Sherlock Holmes would definitely be a Raverin, and he uses his sly intelligence to do good. Sure he may rub people the wrong way at times, but he genuinely is an awesome guy. But Moriarty would also be a Raverin. Let's just say it is up to each Raverin to choose his or her path, and it is up to you to decide if your beef with a Raverin is really worth what they'll give back to you if you decide to mess with them."
    },
    {
        title: "Slytherpuff (Hufflepuff + Slytherin)",
        text: "Slytherpuffs are the 'good Slytherins,' if you will. They are ambitious and they have deeply rooted morals that keep them grounded. They use that resourcefulness and ambition to help others, do good things, and spread kindness. They would be the kind of people that start non-profits (if wizards have non-profits, that is). They are some of the best kind of people. We could definitely see them palling around with Grufflepuffs."
     }
]

creditHTML = '<div class="credits">Hogwarts house descriptions courtesy of <a href="https://iamjustdandi.wordpress.com/2015/11/06/those-in-between-hogwarts-houses/">iamjustdandi</a></div>';

introHTML = '<div class="stage-direction">The Sorting Hat sings his song:</div>'


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHatLength(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

// Three pure javascript functions to manipulate classes
// from https://stackoverflow.com/questions/6787383/how-to-add-remove-a-class-in-javascript
function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//
function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
//
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % housesArray.length;
  return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHatHash(name);
  // output to output div (adding some text and HTML around the results)
  newText = "<h2>" + houseObj.title + "!</h2>" +
          introHTML +
          "<p>\"" + houseObj.text + "\"</p>" +
          creditHTML;
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
})

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});

// given a number, return a Hogwart's houses
//
// function getHouse(num){
//   // get the remainer divided by 4 of the length
//   var remainder = num % 4;
//   // create an if else to show house
//   if (remainder == 0) {
//     var str = "Gryffindor";
//   } else if (remainder == 1) {
//     var str = "Ravenclaw";
//   } else if (remainder == 2) {
//     var str = "Hufflepuff";
//   } else if (remainder == 3) {
//     var str = "Slytherin";
//   }
//   return str;
// }
//
//
// THIS IS THE ONE WE DID IN CLASS
//
// // attach click handler to submit button
// $("#button").click(function(){
//   // get the value in the #input text box, asign to a varaiable name
//   var name = $("#input").val()
//   console.log(name);
//   // get the length of the name
//   var nameLength = name.length;
//   console.log(nameLength);
//   // get the house
//   var house = getHouse(nameLength);
//   console.log(house);
//   // add house to output div
//   $("#output").html("<h1>" + house + "</h1>");
// })
