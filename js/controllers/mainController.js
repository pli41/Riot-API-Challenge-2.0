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
  
}]);

app.factory('shareTest', function(){
  return {};
});

app.controller('oneCtrl',['$scope', 'championbuilds','shareTest', function ($scope,championbuilds, shareTest){
  // $scope.champion = shareTest.message;
  // console.log($scope.champion + "test:");
   championbuilds.success(function(data) {
      var buildsdata =  data['1']['data'];
      // console.log(buildsdata);
      $scope.list1 = [];
      
      $scope.list2 = [
      ];
      for(var build in buildsdata){
        $scope.list2.push(build);
      }
      
   
    
      
   });
}])

app.controller('jsonCtrl',['$scope', 'championbuilds','shareTest', function ($scope,championbuilds, shareTest){
     $scope.done = function(){
        $scope.list3 = {
        "title": "Page Title",
        "type": "custom",
        "map": "SR",
        "mode": "CLASSIC",
        "priority": false,
        "sortrank": 0,
        "blocks": [
             {
              "type": "name",
              "recMath": false,
              "minSummonerLevel": -1,
              "maxSummonerLevel": -1,
              "showIfSummonerSpell": "",
              "hideIfSummonerSpell": "",
              "items": [
              ]
          }
        ]
     }
     $scope.list3["title"] = "Change name here";
       for(var i in $scope.list1){
          var item = {};
          item["id"] = $scope.list1[i];
          item["count"] = 1;
          $scope.list3["blocks"][0]["items"].push(item);
      }
      var json = JSON.stringify($scope.list3);
      var blob = new Blob([json], {type: "application/json"});
      saveAs(blob, "AnnieTemp.json");
     }
   
  }]);