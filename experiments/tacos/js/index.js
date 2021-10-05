//
// Comment block here
//

// action for the button

$("#taco-button").click(function(){
    // console.log("Button pressed");
    // go to api get data / tacos$
    $.ajax({
        // The URL for the request (ENDPOINT)
        // url: "http://taco-randomizer.herokuapp.com/random/?full-taco=true",
        url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        // data: { id: 123},
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        // dataType : "json",
    })
    // If the request succeeds
    .done(function(data) {
        // jQuery returns us the data as an object not a JSON string
        console.log(data);
        // print title
        console.log(data.name);
        // put data in webpage
        $(".output").append("<h1>" + data.name);
        $(".output").append("<p>" + data.recipe);
        $(".output").append("<a href=" + data.url + ">click for more</a>");
    });

    // output to webpage
    // $(".output").html(something here);

})

