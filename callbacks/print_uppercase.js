var getHTML = require("../http-functions.js");

function printUpper(html){
  var output = html.toUpperCase();
  console.log(output);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printUpper);