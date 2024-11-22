// Initialize Firebase

$(document).ready(() => {

  // Firebase configuration
  const firebaseUser = "users/1";
  const config = {
    apiKey: "AIzaSyCbfGuOEZekK56PPthiMiPfGdTJc9HpQvs",
    authDomain: "firstt-c87d2.firebaseapp.com",
    databaseURL: "https://firstt-c87d2.firebaseio.com",
    projectId: "firstt-c87d2",
    storageBucket: "firstt-c87d2.appspot.com",
    messagingSenderId: "477537511068"
  };
  firebase.initializeApp(config);

  // Reference to a specific field in the Firebase database
  const FieldRef = firebase.database().ref().child(`${firebaseUser}/nameText`);

  // Listen for changes to the database field
  FieldRef.on('value', (nameRef) => {
    $("#display-area").text(nameRef.val());
  });

  // Add event listener to button
  $("#change-button").click(() => {
    const nameInput = $("#input-field").val();
    firebase.database().ref(firebaseUser).set({
      nameText: nameInput,
    });
  });

});