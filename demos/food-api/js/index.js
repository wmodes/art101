// header here

var endpoint = "https://api.spoonacular.com/recipes/random";
var apiKey = "10a7b2d1d0e845479b56321c3a39fc88";

$.ajax({
    // The URL for the request
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: {
    	// provide api key
    	apiKey: apiKey,
    	// get one recipe
    	number: 1,
    	// get dessert
    	tags: "dessert"
 	},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
})
// If the request succeeds
.done(function( data ) {
    console.log("Here is the object we got back:", data);
    var recipe = data.recipes[0];
    console.log("Here is the recipe", recipe);
    console.log("Title:", recipe.title);
    $("#output").append("<div>" + recipe.title);
    console.log("Image:", recipe.image);
    $("#output").append("<img src=" + recipe.image + ">");
    console.log("sourceUrl:", recipe.sourceUrl);
    $("#output").append("<div>" + recipe.sourceUrl);
    console.log("summary:", recipe.summary);
    $("#output").append("<div>" + recipe.summary);
    console.log("instructions:", recipe.instructions);
    $("#output").append("<div>" + recipe.instructions);

})
// If the request fails
.fail(function( xhr, status, errorThrown ) {
    console.log(errorThrown + " Status:" + status );
});
