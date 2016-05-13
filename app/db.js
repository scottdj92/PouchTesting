var PouchDB = require('pouchdb');

////////////////
//constructor //
////////////////
function DataPouch (url) {
	var self = this;
	
	var db = new PouchDB(url);
	//db.debug.enable('*');
	db.info().then(function(info) {
		console.log('PouchDB created with', info);
	});
};

//////////////////////
//database methods  //
//////////////////////

var db = DataPouch.prototype;

//get document
db.get = function(doc, options) {
	options = options || null;
	return this.get(doc, options).then(function(doc) {
		return doc;
	});
};

//create document
db.create = function(docTitle, docID, content) {
	return this.put({
		_id: docID,
		title: docTitle,
		content: content
	}).then(function(response) {
		console.log(response);
	}).catch(function(err) {
		console.log(err)
	});
};

//update document
db.update = function(docTitle, docID, docRev) {
	return this.put({
		_id: docID,
		title: docTitle,
		_rev: docRev
	}).then(function(response) {
		console.log(response);
	}).catch(function(err) {
		console.log(err);
	});
};

//delete a document
db.delete = function(docTitle, docID, docRev) {
	this.get(docTitle).then(function(doc) {
		return this.remove(doc.id, doc._rev);
	});
};

module.exports = DataPouch;