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
  $scope.champion = shareTest.message;
   championbuilds.success(function(data) {
     for(var i in data){
       if($scope.champion == data[i]['name']){
          var buildsdata =  data[i]['data'];
          $scope.list2 = [];
          $scope.list3 = [];
          $scope.list4 = [];
          $scope.list5 = [];
          $scope.list6 = [];
          
          $scope.list1 = [
          ];
          for(var build in buildsdata){
            $scope.list1.push(build);
          }
       }
     }
   });
}])

app.controller('jsonCtrl',['$scope', 'championbuilds','shareTest', function ($scope,championbuilds, shareTest){
     $scope.done = function(){
        $scope.listDone = {
        "title": "Page Title",
        "type": "custom",
        "map": "any",
        "mode": "any",
        "priority": false,
        "sortrank": 0,
        "blocks": [
            
        ]
     }
     var count = 1;
     $scope.addblock = function(){
       //add block here
       
       count ++;
     }
     var buildTemplate =  {
              "type": "name",
              "recMath": false,
              "minSummonerLevel": -1,
              "maxSummonerLevel": -1,
              "showIfSummonerSpell": "",
              "hideIfSummonerSpell": "",
              "items": [
              ]
      };  
     $scope.listDone["title"] = "Change name here";
     for(var i =0;i<count;i++){
       $scope.listDone['blocks'].push(buildTemplate);
     }
     
       for(var i in $scope.list2){
          var item = {};
          item["id"] = $scope.list2[i];
          item["count"] = 1;
          $scope.listDone["blocks"][0]["items"].push(item);
      }
       for(var i in $scope.list3){
          var item = {};
          item["id"] = $scope.list3[i];
          item["count"] = 1;
          $scope.listDone["blocks"][1]["items"].push(item);
      }
       for(var i in $scope.list4){
          var item = {};
          item["id"] = $scope.list4[i];
          item["count"] = 1;
          $scope.listDone["blocks"][2]["items"].push(item);
      }
       for(var i in $scope.list5){
          var item = {};
          item["id"] = $scope.list5[i];
          item["count"] = 1;
          $scope.listDone["blocks"][3]["items"].push(item);
      }
      for(var i in $scope.list6){
          var item = {};
          item["id"] = $scope.list6[i];
          item["count"] = 1;
          $scope.listDone["blocks"][4]["items"].push(item);
      }
      var json = JSON.stringify($scope.listDone);
      var blob = new Blob([json], {type: "application/json"});
      var name = $scope.champion + "builds.json";
      saveAs(blob, name);
     }
   
  }])
  
app.controller('ButtonsCtrl', ['$scope', 'items',function ($scope,items) {
   items.success(function(data) {
        $scope.checkModel = {
          Consumable: false,
          GoldIncome: false,
          Vision: false,
          Armor:false,
          Health:false,
          HealthRegen:false,
          MagicResist:false,
          AttackSpeed:false,
          CriticalStrike:false,
          Damage:false,
          LifeSteal:false,
          CDReduction:false,
          Mana:false,
          ManaRegen:false,
          AbilityPower:false,
          Boots:false
      };
    
      $scope.checkResults = [];
    
      $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        $scope.checked = [];
        angular.forEach($scope.checkModel, function (value, key) {
          if (value) {
            $scope.checkResults=data[key];
          }
        });
     });
   });
  
}]);

  
app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false,
    isSecondOpen: false,
    isThirdOpen: false
  };
});
