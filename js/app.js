var app = angular.module('app', ['ngAnimate','ui.bootstrap','ui.router','ngDragDrop']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url:'/',
      views:{
        'champion':{
          templateUrl: 'html/championList.html',
          controller: 'tabsCtrl as championList'
        }
      }
      
    })

    .state('champion', {
      url: '/champion',
      views:{
        'champion':{
          templateUrl: 'html/champion.html',
          controller: 'championCtrl as champion'
        },

        'itemList':{
          // templateUrl: 'html/itemList.html',
          // controller: 'oneCtrl as itemList'
          templateUrl: 'html/test.html',
          controller: 'oneCtrl as test'

        }
      }
      
    })
}]);

