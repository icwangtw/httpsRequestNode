function getHTML (options, callback) {
  var https = require("https");
  var result = "";
  https.get(options, function(response){
    response.on("data", function(data){
      result += data;
    });
    response.on("end", function(){
      callback(result);
    });
  });
};
module.exports = getHTML;