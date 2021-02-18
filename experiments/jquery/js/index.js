// comment block here
// wmodes

// Dependency: jquery 3.x

// step 1: find the element, add event listener
$('#my-button').click(function(){
	// step 1: find the element, change the css
	// WE DON'T DO THIS - WE ARE GOOD PEOPLE
	// $('#headshot img').css("width", "400px");
	// $('#headshot').css({float: "right"});

	// we do this instead
	$('#headshot').toggleClass('special');
	$('#headshot img').attr('src', "https://www.infurmation.co.za/assets/uploads/Nov-2019-Another-kitten-after-FIP.jpg")
})

