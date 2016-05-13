var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('./app/app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Server up', function() {
	it('should connect to localhost');
	it('should connect to the database');
	it('should have our app listen to the web server');
});