var endpoint = "https://uselessfacts.jsph.pl/random.json?language=en";
var payload = {
	/* model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"] */
}

function getAndDisplayFact() {
  $.ajax({
      // The URL for the request
      url: endpoint,
      // The data to send (will be converted to a query string)
      data: payload,
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
  })
  // If the request succeeds
  .done(function( results ) {
      console.log("Success!");
      console.log(results);
      var text = results.text;
      $("#output").html("<h1 class='biggie'>" + text);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}

$(document).ready(function() {

  getAndDisplayFact();

  $("#my-button").click(function(){
    getAndDisplayFact();
  })

});
