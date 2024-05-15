/*
  demo.js - demo code for the hide/show demo

  author: Wes Modes
  date: 2023
*/

// Let's wait until the document is ready
$(document).ready(function() {

  // Let's create an array so we can advance to the next room
  const roomArray = [
    'er-lobby',
    'hallway1',
    'child-ward',
    'nursery',
    'waiting-area',
    'or',
    'staircase',
    'psych-ward',
    'hallway2',
    'morgue'
  ];

  // Let's create a function that will display a new room
  function displayRoom(room) {
    // Let's hide all the rooms
    $('.room').hide();
    // Let's show the room we want
    $('#' + room).show();
  } 

  // Let's create a function that will add a "Go Back" and a "Keep Going" button to each room
  function addButtons() {
    // Let's loop through all the rooms
    $.each(roomArray, function(index, room) {
      // Let's add a "Go Back" button to each room, except the first one
      if (index != 0) {
        $('#' + room).append('<button class="go-back" data-room="' + room + '">Go Back</button>');
      }
      // Let's add a "Keep Going" button to each room
      $('#' + room).append('<button class="keep-going" data-room="' + room + '">Keep Going</button>');
    });
  }

  // Let's attach event handlers to the buttons
  function attachButtonListeners() {
    $('.go-back').click(function() {
      console.log('go back');
      // Let's get the data attribute of the button
      var room = $(this).attr('data-room');
      // Let's find the index of the room in the array
      var index = roomArray.indexOf(room);
      // Let's get the previous room
      var previousRoom = roomArray[index - 1];
      console.log(`going from ${room} to ${previousRoom}`)
      // Let's display the previous room
      displayRoom(previousRoom);
    });

    $('.keep-going').click(function() {
      // Let's get the data attribute of the button
      var room = $(this).attr('data-room');
      // Let's find the index of the room in the array
      var index = roomArray.indexOf(room);
      // Let's get the next room
      if (index == roomArray.length - 1) {
        // If we're at the end of the array, let's loop back to the beginning
        var nextRoom = roomArray[0];
      } else {
        var nextRoom = roomArray[index + 1];
      }
      console.log(`going from ${room} to ${nextRoom}`)
      // Let's display the next room
      displayRoom(nextRoom);
    });
  }

  // Let's kick things off by displaying the first room
  displayRoom(roomArray[0]);
  // Let's add buttons to the rooms
  addButtons();
  // Let's attach event handlers to the buttons
  attachButtonListeners();

});