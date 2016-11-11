var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html'
	})
	.when('/about',{
		templateUrl: 'partials/about.html'
	})
	.when('/skills',{
		templateUrl: 'partials/skills.html'
	})
	.when('/projects',{
		templateUrl: 'partials/projects.html'
	})
	.when('/froxxi',{
		templateUrl: 'partials/froxxi.html'
	})
	.when('/stardate',{
		templateUrl: 'partials/stardate.html'
	})
	.when('/snippet',{
		templateUrl: 'partials/snippet.html'
	})
	.when('/localator',{
		templateUrl: 'partials/loca.html'
	})
	.when('/contact',{
		templateUrl: 'partials/contact.html'
	})	
	.otherwise({
		redirectTo: '/'
	})
});
