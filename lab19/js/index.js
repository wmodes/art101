

// attach click action to button
$('#action').click(function(){
    // get data via ajax from numbersapi
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (ENDPOINT)
        url: "https://swapi.co/api/people/1/",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        console.log(data);
        // put data in webpage
        $("#output").append("<p>" + JSON.stringify(data));
    })
    console.log("This is for you, Jeremy.");
});