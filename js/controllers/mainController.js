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
          for(var i =0;i<5;i++){
            $scope.list2[i] = [];
          }
          
          $scope.list1 = [
          ];
          for(var build in buildsdata){
            $scope.list1.push(build);
          }
       }
     }
   });
   $scope.onOut = function(listInt,e) {
     var index = $scope.list2[listInt].indexOf(e);
     if(index > -1){
       // console.log(e);
        $scope.list2[listInt].splice(index, 1);
     }
  };
}])

app.controller('jsonCtrl',['$scope', 'championbuilds','shareTest', function ($scope,championbuilds, shareTest){
  $scope.name = $scope.champion + " Page";
     $scope.done = function(){
      $scope.listDone = {
          "title": $scope.champion + " Page",
          "type": "custom",
          "map": "any",
          "mode": "any",
          "priority": false,
          "sortrank": 0,
          "blocks": [
          ]
      }
      var count = 5;
      $scope.addblock = function(){
        //add block here
        
        count ++;
      }
        
        //change name
        if($scope.name!=""){
          $scope.listDone["title"] = $scope.name;
        }
        
        for(var i = 0; i<count ;i++){
             if($scope.list2[i][0]!=undefined){
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
                
                 for(var m in $scope.list2[i]){
                   $scope.duplicate = 'false';
                   for( n in buildTemplate['items']){
                     if(buildTemplate['items'][n]['id']==$scope.list2[i][m]){
                       buildTemplate['items'][n]['count']++;
                       $scope.duplicate = 'true';
                       break;
                     }
                   }
                   if($scope.duplicate == 'false'){
                     console.log("no duplicate");
                      var item = {};
                      item['id']=$scope.list2[i][m];
                      item['count']=1;
                      buildTemplate['items'].push(item);
                   }
                }
                
              $scope.listDone['blocks'].push(buildTemplate); 
           }   
        }
        var json = JSON.stringify($scope.listDone);
        var blob = new Blob([json], {type: "application/json"});
        var name = $scope.champion + "builds.json";
        saveAs(blob, name);
      }
   
  }])
  
app.controller('ButtonsCtrl', ['$scope', 'items',function ($scope,items, $window) {
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
        Boots:false,
        NonbootsMovement:false
      };
    
      $scope.checkResults = [];
    
      $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function (value, key) {
          if (value) {
            $scope.checkResults.push(key);
          }
        });
        for(var i in $scope.checkResults){
          $scope.checkResults[i] = data[$scope.checkResults[i]];
          // console.log("checkResults:"+$scope.checkResults[i]);
        }
        
        $scope.showResults = $scope.checkResults[0];
        
        for(var m=1; m < $scope.checkResults.length; m++){
           $scope.showResultsTemp = [];
          for(var n in $scope.checkResults[m]){
            for(var i in $scope.showResults){
              if($scope.showResults[i] == $scope.checkResults[m][n]){
                 $scope.showResultsTemp.push($scope.showResults[i]);
              }
            }
          }
          $scope.showResults = $scope.showResultsTemp;
         
        }
        // console.log("showResults:"+$scope.showResults);
     });
     //tabs
       $scope.startingTabs = [{'title':'Jungle','content': data['Jungle']},{'title':'Lane','content':data['Lane']}];
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
