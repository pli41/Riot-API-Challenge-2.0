app.controller('mainController', ['$scope', 'champions', function($scope, champions) {
  champions.success(function(data) {
    	$scope.champions = data;
  });
}]);