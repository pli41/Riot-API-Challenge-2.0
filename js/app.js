var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url:'',
      views: {
        "main":{
          templateUrl: 'html/championList.html',
          controller: 'tabsCtrl'
        },
      }
    })

    .state('champion', {
      parent: 'home',
      url: '/champion',
      templateUrl: 'html/champion.html',
      controller: 'championCtrl'
    })
    
}]);

app.controller('championCtrl', ['$scope', function ($scope){

}])