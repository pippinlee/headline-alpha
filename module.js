// This is the part of the module that looks looks at
// the json object and gives you back properties on the
// data object
// ex: data.canada.toronto.cbc


var fs = require('fs');

function start(callback){
    fs.readFile("./data.json", function(err, content){
      if (err) return callback(err);
      var data = JSON.parse(content);
      return callback(null, data);
    });
}

exports.start = start;
