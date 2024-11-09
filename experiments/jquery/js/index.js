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

console.log('Hello from index.js');

function getNameAndDisplay() {
  // prompt the user to input their name 
  // let name = prompt("Name please:");
  let name = $('#name').val();
  // Use this input to change the text of the h1 using 
  $('#title').html('Hello, ' + name);
}

// Attach a click handler to the button within the JS file
$("#my-button").click(getNameAndDisplay);
// $("#my-button").click(function(){
//   console.log("Click")
// });



