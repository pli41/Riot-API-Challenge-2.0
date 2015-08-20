app.controller('mainController', ['$scope', 'champions', 'shared', function($scope, champions, shared) {
  champions.success(function(data) {
    	$scope.champions = data;
    	var champions = data.data;
    	var assassins = [];
    	var marksman = [];
    	var fighter = [];
    	var mage = [];
    	var support = [];
    	var tank = [];

    	for (var i = champions.length - 1; i >= 0; i--) {
    		//deal with primary role
    		var primary = champions[i]['primary role'];
    		var secondary = champions[i]['secondary role'];

    	};
        shared.setProperty('abc');
  });
}]);

app.controller('tabsCtrl', function ($scope, $window, shared) {
  $scope.tabs = [
    { title:'All', content: shared.getProperty() },
    { title:'Assassins', content:'Dynamic content 1' },
    { title:'Marksman', content:'Dynamic content 1' },
    { title:'Fighter', content:'Dynamic content 1' },
    { title:'Mage', content:'Dynamic content 1' },
    { title:'Support', content:'Dynamic content 1' },
    { title:'Tank', content:'Dynamic content 2', disabled: true }
  ];
});