$(document).ready(function(){
	var words = 
		{

		story:{
			"origin":["#recipe#"],
			"recipe":[
					"#event# #youwontbelieve#", 
					"Was #deadperson# #abadthingtobe#?", 
					"Is #liveperson# #abadthingtobe#?", 
					"Was This #categoryofperson# Actually #abadthingtobe#?",
					"#dothisto# #thesethings# And Tell Me You Are Not #abadthingtobe#",
					"This #categoryofperson# Made Me #mademe#",
					"What This #categoryofperson# Discovered Will #makeyou#",
					"If You Can Watch This And Not Feel Surprised, Then You're Made Of Stone",
					"I Wish I Was More Outraged By What This #categoryofperson# Exposed, But I'm Not.",
					"Some Call It #reallygoodthing#. They Call It #reallybadthing#",
					"You Will Get Upset When You See What This #categoryofperson# Created",
					"Before You Say #questionableassertion#, #dothisto# #thesethings# From This #categoryofperson#",
					"#number# Tips That Will Keep You From Becoming #abadthingtobe#",
					"#number# Absolute Rules That Will Keep Your Relationship Healthy",
					],
			"event": ["This #categoryofperson# Said #questionableassertion#. #youwontbelieve#",
					"#liveperson# Fought With #liveperson# at a Gala Event. #youwontbelieve#",
					"#categoryofperson# Stared Down #reallybadthing#. #youwontbelieve#"],
			"liveperson": ["Beyonce", "Brad Pitt", "George W. Bush", "Obama", "Vladamir Putin",
					"Kim Kardashian", "Kanye West", "Eminem", "Macklemore", "Tom Cruise", "Oprah",
					"Jerry Seinfeld", "Madonna", "Jennifer Lopez", "Steven Spielberg", "Mickey Mouse",
					"Britney Spears", "Tom Hanks", "Taylor Swift", "Bill Cosby", "George Clooney",
					"Cher", "Bono", "Elton John"],
			"deadperson": ["Ben Franklin", "Emma Goldman", "Susan B. Anthony", "Sojourner Truth",
					"George Washington", "Thomas Jefferson", "Charles Dickens", "J.D. Salinger",
					"Jesus Christ", "Issac Newton", "Albert Einstien", "Leonardo da Vinci",
					"Aristotle", "Muhammad", "Galileo", "Charles Darin", "Gandhi", 
					"Alexander the Great", "Shakespeare", "Socrates", "MLK",
					"Abraham Lincoln", "Nikola Tesla", "Thomas Edison", "Mozart", "Buddha",
					"Karl Marx", "Napoleon", "Beethoven", "Bruce Lee", "Walt Disney", 
					"Marilyn Monroe", "Elvis Presley", "Che Guevara", "Cleopatra", "Michael Jackson",
					"Princess Diana", "Frank Sinatra", "JFK", "Mary Tyler Moore", "Hawkeye Pierce",
					"Audrey Hepburn", "Sonny Bono"],
			"categoryofperson": ["Trailblazing Holocaust Survivor", "Angry Beauty Queen", 
					"Trailblazing Entrepreneur", "Brilliant Scientist", "Angry Mom", 
					"Fallen Priest", "Forgotten '40s Crooner", "8-Month Old Baby",
					"Afghan Incest Survivor", "Legendary Veteran", "Queer Physicist", 
					"Police Officer", "Forgotten Poet", "Innovative Programmer"],
			"dothisto": ["Listen To", "Read", "Sit With", "Enjoy", "Discover", "Buy"],
			"thesethings": ["This Song", "These #number# #things#"],
			"number": ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "10",
					"12", "13", "15", "20", "25", "30"],
			"things": ["Words", "Songs", "Books", "Websites", "Moments In History",
					"Broken Promises", "Famous Paintings", "Well-Known Concertos"],
			"abadthingtobe": ["A Satanist", "A Polygamist", "A Money Launderer", "A Mafioso", 
					"A Slave Holder", "A Drug Dealer", "An Opium Addict", "A Sex-Worker",
					"A Secret Hero of the Revolution", "A Forger", "A Plagiarizer", 
					"the First Hacker", "A Mercenary", "A Secret Coward", "A Misogynist"],
			"mademe": ["Change The Way I Look At The World", "Re-examine My Life", 
					"Stop Buying Things Online", "Stop Giving To Charities"],
			"reallybadthing": ["A Silent Genocide", "Another Species Extinction", "Exploitation",
					"Exploitation of the Working Class", "Capitalism's Usual Excesses", "Starvation",
					"More Government on Their Backs", "The Begining of the End For Roe V. Wade", 
					"Regulation Of Industry", "End Of Democracy", "A Disaster"],
			"reallygoodthing": ["An Answer To World Hunger", "Siezing the Means of Production",
					"Helping People Get On Their Feet", "Breaking The Chains That Bind Them",
					"Feeding People", "Laws to Protect the Vulnerable", 
					"The Greatest Thing That's Ever Happened"],
			"questionableassertion": ["We're Not In A Housing Bubble", 
					"We're Living In Post-Racial America", "Socialism Is Not So Bad", 
					"#liveperson# Is Not So Bad", "You Are Not Racist", "Your Education Was Worth It", 
					"The Economy Is In Good Shape", "You Can Find Work Easily", 
					"Your Kids Will Have It Better Than You Do", "Everything Will Be All Right", 
					"There's Light At The End Of The Tunnel", "There's Life After Death", 
					"There's No Life After Death", "You Have Untapped Talent"],
			"youwontbelieve": ["The Reason Why Will #makeyou#", "You Won't Believe What Happens Next", 
					"You'll Never See It The Same Way Again", "You'll Be Shocked By The Answer"],
			"makeyou": ["Make You Cry", "Shock You!", "Change Your Habits", "Blow Your Mind",
					"Make You A New Person"],
		}
	};

	$('#buttonTrigger').click(function(){
		loadGrammar();
	});
	
	function loadGrammar(){
		var grammar = tracery.createGrammar(words["story"]);
		$('#output').html("<div>"+grammar.flatten('#origin#')+"</div>");
		console.log("finished loading!");
	}

	setTimeout(function() {
        loadGrammar();
    }, 10);

});