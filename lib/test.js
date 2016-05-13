var chai = require('chai');
var should = chai.should();

//import all module tests
require('../tests/dbtest.js');

var app = require('../app/app.js');

describe('Server up', function() {
	it('should connect to localhost');
	it('should connect to the database');
	it('should have our app listen to the web server');
});