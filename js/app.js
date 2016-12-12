angular.module('TodoApp', ['ngRoute', 'RouteControllers','TodoDirective']);

angular.module('TodoApp').config(function($routeProvider) {
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