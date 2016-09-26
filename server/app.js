/* Main server file */
var express = require('express');

var app = express();

var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Im listening, darling... port', port);
});
