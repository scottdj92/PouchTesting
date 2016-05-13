var assert = chai.assert;

//import required modules for testing
var PouchDB = require('pouchdb');

describe('Testing Connection', function() {
	it('should return an object', function() {
		var db = new PouchDB(process.env.DATABASE_URL);
		db.info().then(function(info) {
			assert.equal(typeof info === typeof {});
		});
	});
});

