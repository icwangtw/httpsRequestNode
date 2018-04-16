var https = require("https");

function getAndPrintHTML (options) {
  var result = "";
  https.get(options, function(response){
    response.on("data", function(data){
      result += data;
    });
    response.on("end", function(){
      console.log(result);
    });
  });
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

