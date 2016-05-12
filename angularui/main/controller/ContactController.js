/**
 * http://usejsdoc.org/
 */

app.controller('ContactController', function ($scope) {	
	console.log("Inside Contact  Controller.......");
	$scope.page = "home";	
	$scope.contacts = null;
	
	$scope.add = function(formContact) {
		console.log(formContact);
		$scope.contacts = formContact;	
		$scope.page = "show";
	};
	
	$scope.get = function() {
		return mainService.getContacts();
	};	
	
	console.log("you are on the page ::: " + $scope.page);

});

