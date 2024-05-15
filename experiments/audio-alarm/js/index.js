
var todoList = [];
// each time we get a new item
todoList.push("Feed the dog");
// or
todoList.push(
	{
		text: "Feed the dog",
		done: false,
		due: 450850453554
	});

// Local storage
// https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
localStorage.setItem('todo-list-data', JSON.stringify(todoList));
// retrieve
todoList = JSON.parse(localStorage.getItem('todo-list-data'));

// have a date
// https://www.w3schools.com/jsref/jsref_gettime.asp

// define all of our audio sounds
// attribute come from here https://www.w3schools.com/jsref/prop_audio_volume.asp
var alarm = new Audio('audio/01_test.mp3');
alarm.loop = true;
var soundCreate = new Audio('audio/aahhh.wav');
soundCreate.volume = 0.3;
var soundDone = new Audio('audio/brass-blat.wav');
soundDone.volume = 0.3;

document.getElementById('start-button').addEventListener('click', function(){
	alarm.play();
});

document.getElementById('cancel-button').addEventListener('click', function(){
	alarm.pause();
})


document.getElementById('create-button').addEventListener('click', function(){
	soundCreate.play();
});

document.getElementById('done-button').addEventListener('click', function(){
	soundDone.play();
})