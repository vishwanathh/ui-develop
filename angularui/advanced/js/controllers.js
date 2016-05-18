/**
 * Angular Controllers Module
 */

var angularControllers = angular.module("angularControllers",[]);

angularControllers.controller('CreateContact', ['$scope', '$location', 'contactService',                                              
    function ($scope, $location, contactService) {			
		console.log("Inside Create Contact  Controller.......");
	
		$scope.add = function(formContact) {
			console.log(formContact);
			formContact["id"] = "ct-" + new Date().getTime();
			contactService.addContact(formContact);
			$location.path("contact/view");
		};
	}
]);

angularControllers.controller('ShowContacts', ['$scope', '$routeParams', 'contactService',
    function ($scope, $routeParams, contactService) {
		console.log("Inside Show Contacts :::::::");
		$scope.contacts = contactService.getAllContacts();
		
		console.log($scope.contacts);
	}

]);