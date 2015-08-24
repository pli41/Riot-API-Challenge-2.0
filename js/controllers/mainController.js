app.controller('tabsCtrl', ['$scope', 'champions', 'shareTest', function ($scope, champions, shareTest) {
   champions.success(function(data) {
     var champions = data.data;
     var Assassins = [];
     var Marksmans = [];
     var Fighters = [];
     var Mages = [];
     var Supports = [];
     var Tanks = [];
     for(var i = 0; i < champions.length; i ++ ){
       if(champions[i]['primary role'] == 'Assassin' || champions[i]['secondary role'] == 'Assassin'){
         Assassins.push(champions[i]);
       }
       if(champions[i]['primary role'] == 'Marksman' || champions[i]['secondary role'] == 'Marksman'){
         Marksmans.push(champions[i]);
       }
       if(champions[i]['primary role'] == 'Fighter' || champions[i]['secondary role'] == 'Fighter'){
         Fighters.push(champions[i]);
       }
       if(champions[i]['primary role'] == 'Mage' || champions[i]['secondary role'] == 'Mage'){
         Mages.push(champions[i]);
       }
       if(champions[i]['primary role'] == 'Tank' || champions[i]['secondary role'] == 'Tank'){
         Tanks.push(champions[i]);
       }
        if(champions[i]['primary role'] == 'Support' || champions[i]['secondary role'] == 'Support'){
         Supports.push(champions[i]);
       }
     }
    	 $scope.tabs = [
      { title:'All', content:champions },
      { title:'Assassin', content:Assassins },
      { title:'Marksman', content:Marksmans },
      { title:'Fighter', content:Fighters},
      { title:'Mage', content:Mages },
      { title:'Support', content:Supports },
      { title:'Tank', content:Tanks }
    ];
  });
  $scope.handleClick = function(msg){
    $scope.shareTest = shareTest;
    $scope.shareTest.message = msg;
  }
}]);


app.controller('championCtrl', ['$scope', 'shareTest', function ($scope, shareTest) {
  $scope.message = '';
  $scope.message = shareTest.message;
  $scope.abc = '123';
  console.log($scope.message);
  console.log($scope.abc);
}]);

app.factory('shareTest', function(){
  return {};
});