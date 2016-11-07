var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})
	.when('/about',{
		templateUrl: 'partials/about.html',
		controller: 'indexController'
	})
	.when('/skills',{
		templateUrl: 'partials/skills.html',
		controller: 'indexController'
	})
	.when('/projects',{
		templateUrl: 'partials/projects.html',
		controller: 'indexController'
	})		
	.when('/contact',{
		templateUrl: 'partials/contact.html',
		controller: 'indexController'
	})	
	.otherwise({
		redirectTo: '/'
	})
});
