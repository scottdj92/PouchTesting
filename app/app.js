//import database
var database = require('./db.js');
var angular = require('angular');

var todoApp = angular.module('todoApp', []);

function MainController($scope) {
	$scope.formData = {};
	$scope.database = database;

	//upon landing, retrieve all records
	$scope.database.allDocs({include_docs: true}).then(function(response){
		console.log(response);
		$scope.todos = response;
	});

	$scope.checkOff = function(docID) {
		console.log('checked off');
	};

	$scope.createTodo = function() {
		this.database.create($scope)
	}
};