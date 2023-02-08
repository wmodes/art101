$(document).ready(function(){
	var words = 
		{

		story:{
			"origin":["#beginning# #middle#"],
			"beginning":["Once upon a time,", "A long time ago,", "In a land far far away,",
					"In 1982 in Southern California,", "At the beginning of our story,",
					"At the end of this era,", "We end with a parable:",
					"After waiting what felt like an eternity,"],
			"middle": [
					"there lived a #character#.", 
					"a #character# struggled to pay their bills.", 
					"a #character# lived and died.",
					"a #character# fought a #character#.",
					"a #character# plied the waves of an endless sea.",
					"a #character# and a #character# fell deeply in love.",
					"a #character#, a #character#, and a #character# pulled off the heist of the century.",
					"hard times fell upon a #character#.",
					"a #character# found that their ship had finally come in.",
					"a #character# and a #character# found that they could finally get legally married.",
					"a #character#, a #character#, and a #character# began a polyamorous relationship that would change history." 
					],
			"character": ["#adjective# #noun#"],
			"adjective": ["gregarious but cranky", "grumpy", "would-be heroic", 
					"destitute", "poor but cheery", "phantom", "emotionally-manipulative", 
					"flatulent", "one-legged", "hook-nosed", "emotionally-damaged",
					"cheerful", "brilliantly intelligent", "incarcerated", "chipper"],
			"noun": ["heiress", "horse", "politician", "scientist", "feminist princess",
					"pirate", "insurance broker", "fiction writer", "artificial intelligence",
					"screenwriter", "and sentient volkswagen beetle", "dragon", "faerie", 
					"and aging auteur", "popular actress from the last century"]
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