var PouchDB = require('pouchdb');
var server = require('./server.js');

if(process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'test') {
	var dotenv = require('dotenv');
	dotenv.load();
}

var db = new PouchDB(process.env.REMOTE_DATABASE_URL);
//db.debug.enable('*');
db.info().then(function(info) {
	console.log(info);
});