var express = require('express');
var app = express();

//pick a directory
app.use('/', express.static('app/'));

//setup the port
app.listen(8080);
console.log('App listening on port 8080');