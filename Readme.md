## PouchDB Testing app
1) Ensure you have CouchDB installed
* This can be achieved using `brew install couchdb`
* Verify that it installed by running `curl localhost:5984`
	* If this breaks, ensure that you have started the database using `brew start services couchdb`

2) Install Dependencies
* `npm install`

3) Ensure CORS is enabled for CouchDB
* Run `npm install -g add-cors-to-couchdb`
* Run `$ add-cors-to-couchdb`
	* If it ran successfully, you'll see `success`

4) Installing PouchDB
* There are many ways to install this depending on your application
	* [View the docs here](https://pouchdb.com/guides/setup-pouchdb.html)

5)