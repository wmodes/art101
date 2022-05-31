// Comment block here
// Author:
// Date:


var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

// Endpoint format: http://xkcd.com/614/info.0.json

// a helper function to turn single and double quotes into
// html symbols so they don't confuse html tags
//
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax from numbersapi
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      // Whether this is a POST or GET request
      type: "GET",
  })
  // If the request succeeds
  .done(function(data) {
      // console.log(data);
      var imageUrl = data.img;
      // we use .replace(/"/g, '\\"') after the text strings because
      // sometimes there are single and double quotes in the text
      // that confuses the html
      var title = data.title;
      console.log("orig title:", title);
      title = make_safe(title);
      console.log("safe title:", title);
      var alt = data.alt;
      console.log("orig alt:", alt);
      alt = make_safe(alt);
      console.log("safe alt:", alt);
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      // console.log("My new html: \n", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  .fail(function(){
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a okay day! :-)");
  })

}

// start things off
getComic();
