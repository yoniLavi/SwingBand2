angular.module('TodoApp', ['ngRoute', 'RouteControllers','TodoDirective']);

angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes

	$routeProvider.eagerInstantiationEnabled(false)
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/ourmusic', {
		templateUrl: 'templates/ourmusic.html',
		controller: 'RegisterController'
	})
	.when('/bookings', {
		templateUrl: 'templates/bookings.html',
		controller: 'RegisterController'
	})
	.when('/aboutus', {
		templateUrl: 'templates/aboutus.html',
		controller: 'RegisterController'
	})	
});
