// adventure.js - An interactive story
// Author: Wes Modes <wmodes@ucsc.edu>

// program data
rooms = {
    cu1: {
        name: "In the Classroom",
        description: "This is a large lecture room that holds maybe a couple hundred people. Half of the seats are filled by laconic students who are all looking at their phones and laptops. The lecturer hasn't arrived yet, so maybe you are still early for class. Perhaps there is still time to get a cup of coffee at the cafe. You'll need that too, if you want to survive your Astronomy 101 lecture.",
        exitKeys: ['waiting', 'foyer', 'forest1'],
        exitTexts: ["Wait for class to begin", "Go out the front of the lecture hall",
            "Slip out the back door"],
        image: "cu1.png",
    },
    waiting: {
        name: "Bored in Astronomy Class",
        description: "You sit in your seat, growing increasingly bored as you wait for the lecturer to arrive. The room is dimly lit, with the only source of light being the fluorescent lights above, and a tantalizing shaft of light from high inaccessible windows. You can hear birds chirping in the nearby forest inviting you to play. The air is filled with a mix of anticipation and lethargy as students shuffle in their seats, exchanging glances of shared boredom. The sound of tapping keyboards and occasional sighs fills the room, echoing off the walls. The clock on the wall ticks slowly, each passing second feeling like an eternity.",
        exitKeys: ['preparation', 'foyer', 'forest1'],
        exitTexts: ["Wait for class to begin", "Go out the front of the lecture hall",
            "Slip out the back door"],
        image: "waiting.png",
    },
    preparation: {
        name: "Lecturer's Clumsy Preparation",
        description: "The lecturer finally arrives, bustling around the front of the large stadium classroom. He fumbles with the control panel, trying to adjust the lights, but ends up dimming them too much, casting a shadowy ambiance over the room. With a loud screech, he turns the microphone on, causing a few students to cringe and cover their ears. He hastily adjusts the volume, and his voice booms through the speakers, momentarily startling everyone. The lecturer's comical struggle with technology adds a touch of amusement to the otherwise mundane atmosphere, providing some much-needed entertainment before the lecture begins.",
        exitKeys: ['theend2', 'foyer', 'forest1'],
        exitTexts: ["Settle in for the long haul", "Bravely march out the front door", "Escape out the back"],
        image: "preparation.png"
    },
    foyer: {
        name: "Foyer of Classroom Unit 1 & 2",
        description: "This is the foyer of your classroom. Students are here talking in clumps. The lecturer to the previous class is here with a few students arguing over grades and asking questions. There is a fiery lecture coming from Classroom Unit 2.",
        exitKeys: ['cu1', 'cu2', 'quarrypath'],
        exitTexts: ["Go back to your classroom.", "Slip into Classroom Unit 2", "Head down the path to the Quarry Plaza"],
        image: "foyer.png"
    },
    cu2: {
        name: "Next Door Classroom",
        description: "This is the lecture hall next door to your class. Weirdly, in your three years at school, you've never had a class in here. Looking in you see why: It is huge. It could easily fit 400 students. Your Queer Musicology major doesn't ever have very large classes. It seems this class has already started. You recognize the lecturer from somewhere. A magazine? A newspaper? The students who are about two-thirds young women, some with their hair shaved listen raptly to the teacher's excited lecture.<br><br>\"Today we are going to hear from some of the notorious, humorless, man-hating second wave feminists.\" she laughs, \"And you ladies (and men.. and others) having grown up taking for granted the fruits of their efforts are going to find that you owe them a huge intellectual debt. And that, to the contrary, they are far from humorless and were, in fact, some of the original culture jammers.\"",
        exitKeys: ['foyer', 'cu2listen1'],
        exitTexts: ["Go back to the foyer.", "Sit down for a minute and listen"],
        image: "cu2.png"
    },    
    cu2listen1: {
        name: "Next Door Classroom",
        description: "The lecturer is giving a brief and bracing history on Feminist Theory. She has a slide of a book cover by Valerie Solanas. The professor says \"SCUM stands for the 'Society for Cutting Up Men'. So you can kind of see where she is coming from. [The class laughs.] The book epitomizes everything you think when you hear the word 'manifesto': outrageous, incendiary, and a demand for action. It calls for women to -- and I quote -- overthrow the government, eliminate the money system, institute complete automation and eliminate the male sex. Exciting, if a bit impractical. And perhaps a good start. [The audience laughs again.] But seriously, she's shooting over the top to make a point. She's giving women inspiration to dream much bigger than the dreams offered them in 1967 and putting men on notice.\" She pauses and flips to the next slide.<br><br>\"Now obviously there's enough to say about any one of these books to fill an entire lecture if not an entire class, but we're giving you the super abbreviated version so we can catch you up to contemporary feminism.\"",
        exitKeys: ['foyer', 'cu2listen2'],
        exitTexts: ["Quietly head back to the foyer.", "Listen some more."],
        image: "cu2listen1.png"
    },
    cu2listen2: {
        name: "Next Door Classroom",
        description: "\"Okay, this book,\" the professor gestures at a photo of a book titled <i>Sexual Politics</i>, \" came out in 1970. Millett argues for the first time that sex is political and that furthermore patriarchy plays a role in sexual relations. This is new stuff here. She's not only pulling sex out of the bedroom, but also challenging political aspects of it. Better yet, she takes on classic canonical male writers such as D. H. Lawrence, Henry Miller, and Norman Mailer. Millett argues that these authors view and discuss sex in a patriarchal and sexist way. Sexual Politics was largely influenced by Simone De Beauvoir's 1949 book <i>The Second Sex</i>, although De Beauvoir's text is known for being more intellectual and less exciting than Millett's text. <br><br>\"She also takes on Sigmund Freud who deserves it. [Laughs.] Though in fairness, later critics (mostly non-feminist) have said Millett misreads Freud. But then. That's what they always say.\" The class laughs harder. You realize that if you stay here any longer you are going to miss your own class, though you have a pang of regret that you didn't take this class instead.",
        exitKeys: ['foyer'],
        exitTexts: ["Sneak back to the foyer."],
        image: "cu2listen2.png"
    },    
    forest1: {
        name: "Entrance to Forest Path",
        description: "Just out the back door of the classroom, paths lead into the inviting woods. Or you can go back to the lecture hall and wait for the class to start.",
        exitKeys: ['cu1', 'forest2'],
        exitTexts: ["Go back into your classroom.", "Follow the forest path."],
        image: "forest1.png"
    },
    forest2: {
        name: "Forest Path",
        description: "The forest path leads deeper into the woods. The paths go in several confusing directions. As you look around, you are unsure which direction you came from. You cross a bridge over a forested ravine.",
        exitKeys: ['forest3', 'forest3'],
        exitTexts: ["Follow the path further into the woods.", "Go back the other way."],
        image: "forest2.png"
    },
    forest3: {
        name: "Forest Path",
        description: "The forest path leads deeper into the woods. The paths go in several confusing directions. Which direction did you come from? There is an amazing gnarled stump here.",
        exitKeys: ['forest4', 'forest2'],
        exitTexts: ["Follow the path deeper into the woods.", "Go back the other way."],
        image: "forest3.png"
    },
    forest4: {
        name: "Forest Path",
        description: "The forest path leads deeper into the woods and toward a sunny patch of woods. The paths go in several confusing directions. Wait, how do you head back to the classroom? There are some red speckled mushrooms growing on a rotted log.",
        exitKeys: ['forest5', 'forest3', 'forest2'],
        exitTexts: ["Forget class! Head for the woods!", "Take the other crossing path.", "Go back the other way."],
        image: "forest4.png"
    },
    forest5: {
        name: "Forest Path",
        description: "The forest path crosses several other confusing paths in the woods. You are no longer sure which way leads back to the classroom. You thought you heard a wolf howl, is that possible? Wolves on campus?",
        exitKeys: ['forest6', 'forest3', 'forest4'],
        exitTexts: ["Follow the path deeper into the woods.", "Take another path that intersects this one.", "Go back the other way."],
        image: "forest5.png"
    },
    forest6: {
        name: "Back at Classroom Unit",
        description: "Here you are somehow back at the back door of the classroom, paths lead into the inviting woods. Or you can go back to the lecture hall and wait for the class to start.",
        exitKeys: ['cu1', 'forest1'],
        exitTexts: ["Go back into your classroom.", "Follow the forest path."],
        image: "forest6.png"
    }, 
    quarrypath: {
        name: "Path to Classroom Units",
        description: "This is the path to your lecture hall. There are students heading quickly to and fro rushing off to their next class, trying to make it before class starts. They are all looking down at their phones or listening to music in their headphones.",
        exitKeys: ['foyer', 'plaza'],
        exitTexts: ["Head back to class before you are late.", "See if you can get some coffee before Astronomy 101."],
        image: "quarrypath.png"
    },
    plaza: {
        name: "Quarry Plaza",
        description: "This is Quarry Plaza, the center of campus, such as it is. It is a bustle of activity and it seems like it must be Rush Week or something because the entire plaza is filled with colorful tents where students wearing bright matching outfits with Greek letters are chanting and yelling stuff to each other. Inane pop music and the smell of cheap pizza is overwhelming. You have to get the hell out of here as before you lose your mind.",
        exitKeys: ['quarrypath', 'bookstore', 'cafe'],
        exitTexts: ["Head back to class.", "Go to the bookstore.", "Go get coffee at the new Cafe Pric&#233;."],
        image: "plaza.png"
    },
    bookstore: {
        name: "Baytree Bookstore",
        description: "This is the campus bookstore. Just entering here you have a flash of PTSD from the $280 you spent on this quarter's books, none of which you have even cracked open. You are tempted to buy more school supplies, but you know you are just dawdling because you don't really want to get to class. You are going to be late if you don't hurry.",
        exitKeys: ['plaza'],
        exitTexts: ["Get out of here before you rack up more student loans."],
        image: "bookstore.png"
    },
    cafe: {
        name: "Cafe Pric&#233;",
        description: "The new campus cafe replaced the mediocre pizza place which replaced the mediocre burger place which replaced the mediocre cafe (nearly identical to this one) that was here when you toured on Visiting Day, the year before your freshman year.",
        exitKeys: ['plaza', 'inline1'],
        exitTexts: ["Head back to class before you are late.", "Go to the coffee bar for a cup of joe."],
        image: "cafe.png"
    },
    inline1: {
        name: "In Line",
        description: "You are in line at the coffee bar. You are keenly aware that you are already close to being late for class and the people in front of you are moving slowly like they are swimming through water. The cashier is chatting with the person at the front of the line about the pastries. The next guy can't decide what he wants and the cashier waits patiently. Come on. Are they all stoned?",
        exitKeys: ['cafe', 'inline2'],
        exitTexts: ["Forget it. You have to get to class.", "Keep waiting."],
        image: "inline1.png"
    },
    inline2: {
        name: "Still In Line",
        description: "The woman in front must be ordering for her whole class. She's ordering, God, how many pastries one by one, a double mocha soy low-fat latte, several coffees, and God help us, a couple smoothies. This is taking forever. You are tapping your foot and glaring at this woman who is oblivious. Finally, it's your turn.",
        exitKeys: ['cafe', 'coffeebar1'],
        exitTexts: ["Forget it. You have to get to class.", "Step forward."],
        image: "inline2.png"
    },    
    coffeebar1: {
        name: "Coffee Bar",
        description: "The woman at the counter mumbles a disinterested, \"howcanIhelpyou?\" not even bothering to meet your eyes. You are afraid that if you order you're definitely going to be late, but you've waited this long.",
        exitKeys: ['coffeebar2'],
        exitTexts: ["Order a cup of coffee."],
        image: "coffeebar1.png"
    },
    coffeebar2: {
        name: "Coffee Bar",
        description: "The counter lady takes your money and you hold out your hand expecting change. She turns away and you realize that you just spent three dollars for an ordinary cup of coffee. She moves in slow motion pouring a cup and fitting the lid and struggling to fit a cardboard coffee cozy over the cup. You are definitely going to be late now. She puts your coffee on the pickup counter and announces to the whole cafe, \"Sixteen ounce coffee!\" and looks around as if you aren't standing right there waiting for it.",
        exitKeys: ['offtoclass'],
        exitTexts: ["Take your cup."],
        image: "coffeebar2.png"
    },
    offtoclass: {
        name: "Hurrying to class",
        description: "You are hurrying to class, up the stairs, up the path. The path is mostly empty and the only students still out here obviously don't care about getting to class on time. You are definitely late now. The coffee is burning your hands and you shift it from one hand to another.",
        exitKeys: ['foyer2'],
        exitTexts: ["Get to class."],
        image: "offtoclass.png"
    },    
    foyer2: {
        name: "Foyer of Classroom Unit 1 & 2",
        description: "This is the foyer of your classroom. The lecturer from the previous class is still here with a few students arguing over grades and asking questions. Wow, apparently, this guy has lots of time on his hands.",
        exitKeys: ['cu1again'],
        exitTexts: ["Sneak into class as quietly as you can."],
        image: "foyer.png"
    },
    cu1again: {
        name: "Back in the Classroom",
        description: "This is a large lecture room that holds maybe a couple hundred people. Most of the seats are filled by laconic students who are all looking at their phones and laptops. The teacher is here now and in the midst of his Astronomy lecture. He is talking about black holes and general relativity and Stephen Hawking. <br><br>The moment you step in, he stops and pauses. All of the students look up from their devices to stare at you as if they've never been late in their lives. <br><br>The nearest seat is halfway up the lecture hall stairs and you feel like you are a complete spectacle. You juggle your backpack, your hot coffee, your books, and your laptop as you sit down. You manage to spill some of your coffee on your pants.<br><br>The teacher doesn't continue until you are completely settled.",
        exitKeys: ['theend1'],
        exitTexts: ["Settle in for a long lecture."],
        image: "cu1again.png"
    },
    theend1: {
        name: "The End",
        description: "As you expected, the lecturer manages to take the entirety of the cosmos, the universe, the billions of billions of stars and galaxies, the possibility of life on other planets, the mystery of time and space and black holes, and the origins of everything and render it mind-achingly dull. You stay awake through the class thanks to the coffee and to your next class and your final section.<br><br>Congratulations. You survived another day of your undergraduate education. Only another year and a half to go, unless you chose to dodge Real Life for another 2 to 8 years by going to grad school.",
        exitKeys: ['cu1'],
        exitTexts: ["Start over!"],
        image: "theend1.png"
    },
    theend2: {
        name: "The End",
        description: "As you expected, the lecturer manages to take the entirety of the cosmos, the universe, the billions of billions of stars and galaxies, the possibility of life on other planets, the mystery of time and space and black holes, and the origins of everything and render it mind-achingly dull. Because you didn't get coffee, you inevitably fall asleep. You wake when you hear gentle laughter nearby and see glances directed your way. Were you obvious? Were you snoring? Did you drop something? Did the instructor make a comment? You are pretty sure you will just die here and now.<br><br>Despite it all, you survived another day of your undergraduate education. Congratulations. Only another year and a half to go, unless you chose to dodge Real Life for another 2 to 8 years by going to grad school.",
        exitKeys: ['cu1'],
        exitTexts: ["Start over!"],
        image: "theend2.png"
    }     
}

// global variables
var currentRoom = 1;
var lastRoom = 20;
var outputHTMLid = "js-output";

/*
    Print something on the webpage in display area
    Parameters: string to display
 */
function display(string) {
    var element = $("#" + outputHTMLid);
    element.append(string);
}

/*
 * Clear display area
 */
function clearDisplayArea() {
    $("#" + outputHTMLid).html("");
}

/*
 * Display the current room
 * Parameters: Takes a room object
 */
function displayCurrentRoom(roomObj) {
    display("<div class='room-image'><img src='img/" + roomObj.image + "'></div>");
    display("<p class='title'>" + roomObj.name + "</p>");
    display("<p class='description'>" + roomObj.description + "</p>");
}

/*
 * Display current exitKeys
 * Parameters: Takes a room object
 */
function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room
    display("<p>Choose your next move:</p><ul class='exits'>");
    for(i = 0; i < roomObj.exitKeys.length; i++) {
        /* We want the HTML to look like this:
              <li><a onClick='javascript:newRoom("exitKey")'>Exit text</a></li>
        */
        exitHTML = "<li onClick='javascript:newRoom(\"" +
                roomObj.exitKeys[i] + "\")'>" + roomObj.exitTexts[i] + "</li>";
        display(exitHTML);
    }
    display("</ul>");
}

function newRoom(nextRoom) {
    currentRoom = nextRoom;
    currentRoomObj = rooms[currentRoom];
    clearDisplayArea();
    displayCurrentRoom(currentRoomObj);
    displayCurrentExits(currentRoomObj);
}

// we need to wait until the webpage is loaded before we display room 1
$(document).ready(function() {
    newRoom('cu1');
});
