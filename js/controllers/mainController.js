app.controller('mainController', ['$scope', 'champions', function($scope, champions, shared) {
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


  });
}]);