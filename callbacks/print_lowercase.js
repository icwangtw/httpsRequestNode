var getHTML = require("../http-functions.js");

function printLower(html){
  var output = html.toLowerCase();
  console.log(output);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printLower);