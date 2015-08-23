var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'html/championList.html',
      controller: 'tabsCtrl as championList'
    })

    .state('champion', {
      url: '/champion',
      templateUrl: 'html/champion.html',
      controller: 'championCtrl'
    })
}]);

