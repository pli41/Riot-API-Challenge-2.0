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
          
          var maxBlockNum = 5;
          $scope.list2 = [];
          console.log('total number of blocks is ' + maxBlockNum);
          
          $scope.addBlock = function(){
            if($scope.list2.length < maxBlockNum){
              $scope.list2[$scope.list2.length]=[];
              console.log($scope.list2);
            }
            
          };
          
          
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
       console.log(e);
        $scope.list2[listInt].splice(index, 1);
     }
   };
}])

app.controller('jsonCtrl',['$scope', 'championbuilds','shareTest', function ($scope, championbuilds, shareTest){
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
     $scope.pushItems = function(listInt){
        for(var i in $scope.list2[listInt]){
            var item = {};
            item["id"] =  $scope.list2[listInt][i];
            item["count"] = 1;
            $scope.listDone["blocks"][listInt]["items"].push(item);
        }
      }
     $scope.listDone["title"] = "Change name here";
     for(var i =0;i<count;i++){
       $scope.listDone['blocks'].push(buildTemplate);
        $scope.pushItems(count);
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

app.controller('blockMgnCtrl', function ($scope){
  var maxGroupNo = 5;
  $scope.groups = [
  {
    title: 'Dynamic Group Header - 1',
    content: 
    [
      {
        title: 'item 1-1',
      },
      {
        title: 'item 2-1'
      }
    ]
  }, 
  {
    title: 'Dynamic Group Header - 2',
    content: 
    [
      {
        title: 'item 2-1',
      },
      {
        title: 'item 2-2'
      }
    ]
  }];

  $scope.addGroup = function() {
    var newGroupNo = $scope.groups.length + 1;
    if(newGroupNo < maxGroupNo+1){
      $scope.groups.push(
        {
          title: 'No.' + newGroupNo,
          content:
          [
            {title: newGroupNo+'-1 item'},
            {title: newGroupNo+'-2 item'}
          ]  
        }
      );
    }
  };
});
