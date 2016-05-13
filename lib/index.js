var server = require('./server.js');

if(process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'test') {
	var dotenv = require('dotenv');
	dotenv.load();
}

require('./app/app.js');