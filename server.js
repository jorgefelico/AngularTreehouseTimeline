var express = require('express');

var server = express();

server.use(express.static('public'));

server.listen(3000, function(){
  console.log('Listening on port 3000');
});
