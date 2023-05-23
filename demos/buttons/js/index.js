// author block here


// global vars
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var dupeTimeMin = 10000;
var dupeTimeVar = 20000;

// mutate a given string
//	this happens about half the time
//
function mutate(str) {
	// strings are immutable, so convert to array
	strArray = str.split('');
	// pick a random number
	var randChoice = Math.floor(Math.random() * 20);
	if (randChoice < 2) {
		// remove a letter
		strArray.splice(Math.floor(Math.random() * str.length), 1);
	} else if (randChoice < 4) {
		// add a letter
		var letter1 = characters[Math.floor(Math.random() * characters.length )];
		strArray.splice(Math.floor(Math.random() * str.length), 0, letter1);
	} else if (randChoice < 6) {
		// switch two letters
		var pos1 = Math.floor(Math.random() * str.length );
		var pos2 = Math.floor(Math.random() * str.length );
		var letter1 = str[pos1];
		var letter2 = str[pos2];
		strArray[pos1] = letter2;
		strArray[pos2] = letter1;
	} else if (randChoice < 8) {
		// change one letter
		var pos1 = Math.floor(Math.random() * str.length );
		var letter1 = characters[Math.floor(Math.random() * characters.length )];
		strArray[pos1] = letter1;
	}
	return(strArray.join(''));
}

function dupeButton(buttonEl) {
	var thisGen = buttonEl.data('gen');
	var nextGen = buttonEl.data('gen') + 1;
	var thisText = buttonEl.html();
	var newText = mutate(thisText);
	var topPos = buttonEl.offset().top;
	var leftPos = buttonEl.offset().left;
	var thisWidth = buttonEl.outerWidth();
	var thisHeight = buttonEl.outerHeight();
	var parent = buttonEl.parent();
	var colorNum = 255 - (nextGen * 5);
	if (colorNum < 0) {
		colorNum = 0;
	}
	var color = "rgb(" + colorNum + "," + colorNum + "," + colorNum + ")";
	// create and attach button
	var newButton = $('<button>');
	newButton.html(newText);
	newButton.css('background-color', color);
	newButton.data('gen', nextGen);
	if (Math.floor(Math.random() * 2)) {
		buttonEl.before(newButton);
	} else {
		buttonEl.after(newButton);
	}
	// adjust size of parent
	var count = parent.find("button").length;
	var boxWidth = Math.sqrt(count) * thisWidth;
	var boxHeight = Math.sqrt(count) * thisHeight;
	var originX = parent.data("originX");
	var originY = parent.data("originY");
	var newTop = originY - (boxHeight / 2);
	var newLeft = originX - (boxWidth / 2);
	parent.css({
		left: newLeft,
		top: newTop,
		width: boxWidth,
		height: boxHeight
	});
	// if we have too many buttons prune them
	if (newTop < 0 && newLeft < 0) {
		parent.find(":nth-child(" + Math.floor(Math.random() * count) + ")").remove();
		// console.log("pruned a button");
	}
	// set timeOut for reproducing
	//	1) parent button
	setTimeout(function(){
		dupeButton(buttonEl);
	}, dupeTimeMin + Math.floor(Math.random() * dupeTimeVar));
	//  2) new button
	setTimeout(function(){
		dupeButton(newButton);
	}, dupeTimeMin + Math.floor(Math.random() * dupeTimeVar));
	// now we attach all events
	attachClickHandlerToAllButtons();
}

function dupeGen(buttonEl) {
	thisGen = buttonEl.data('gen');
	$('button').each(function(){
		if ($(this).data('gen') == thisGen) {
			dupeButton($(this));
		}
	})
}

function attachClickHandlerToAllButtons() {
	$("button").unbind("click");
	$("button").click(function(){
		dupeButton($(this));
	})
}

function main() {

	// when we start, dupe all of the buttons in the same position on the button-canvas
	$("button").each(function(){
		// get orig button position
		var topPos = $(this).offset().top;
		var leftPos = $(this).offset().left;
		var newText = $(this).html();
		// console.log("button says", newText);
		// create dupe button and button-box
		var button = $('<button>');
		button.html(newText);
		button.data('gen', 0);
		// create the button box and put button in it
		var buttonBox = $('<div class="button-box">');
		buttonBox.append(button);
		// add the button-box to the button-canvas
		$('#button-canvas').append(buttonBox);
		// record the origin position
		buttonBox.data("originX", leftPos + (button.width()/2));
		buttonBox.data("originY", topPos + (button.height()/2));
		// explicitly set width and height
		buttonBox.css({
			width: buttonBox.width(),
			height: buttonBox.height()
		});
		// locate dupe button ver the old one
		buttonBox.css({top: topPos, left: leftPos});
		// remove original buttons
		$('main button').css('visibility', 'hidden')
	});

	attachClickHandlerToAllButtons();

}

// get this party started
main();
