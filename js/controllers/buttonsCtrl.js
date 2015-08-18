app.controller('buttonsCtrl', ['$scope', function ($scope) {

  $scope.checkModel = {
    Assassin: true,
    Marksman: true,
    Fighter: true,
    Mage: true,
    Support: true,
    Tank: true
  };

  $scope.checkResults = [];

  $scope.$watchCollection('checkModel', function () {
    $scope.checkResults = [];
    angular.forEach($scope.checkModel, function (value, key) {
      if (value) {
        $scope.checkResults.push(key);
      }
    });
  });
}]);