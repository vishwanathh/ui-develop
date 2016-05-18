/**
 * http://usejsdoc.org/
 */

var app = angular.module("angularApp",['ngRoute', 'angularControllers']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/contact/home', {
		templateUrl: "contacts/views/home.html"
	}).
	when('/contact/new', {
		templateUrl: 'contacts/views/new-contact.html',
		controller: 'CreateContact'
	}).
	when('/contact/view', {
		templateUrl: 'contacts/views/view-contacts.html',
		controller: 'ShowContacts'
	})/*
	when('/contact/edit/:id', {
		templateUrl: 'partials/phone-detail.html',
		controller: 'PhoneDetailCtrl'
	})*/.
	otherwise({
		redirectTo: '/contact/home'
	});
}]);