/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

$("#api-button").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

function doAPIStuff() {
  console.log("Doing API Stuff");
  $.ajax({
    // The URL for the request
    url: "http://numbersapi.com/42",
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET"
    // The type of data we expect back
    //dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
    console.log("Success:", data);
    putTextOnPage(data);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);
    //console.log(errorThrown + " Status:" + status );
  })
  console.log("Asynchronously doing the next thing.");

}
