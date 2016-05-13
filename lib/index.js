var PouchDB = require('pouchdb');
var dotenv = require('dotenv');
dotenv.load();

var db = new PouchDB(process.env.REMOTE_DATABASE_URL);
db.debug.enable('*');
db.info().then(function(info) {
	console.log(info);
});