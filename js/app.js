var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'mainController', 
      templateUrl: 'html/index.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    });
  
  $routeProvider
  	.when('/champions/:id',{
  		controller: 'championController',
    	templateUrl: 'html/champion.html'
  
  	});

});