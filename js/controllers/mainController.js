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


app.controller('oneCtrl',['$scope', 'championbuilds','championbuildspro','shareTest', function ($scope,championbuilds,championbuildspro, shareTest){

  $scope.champion = shareTest.message;
  championbuilds.success(function(data) {
     for(var i in data){
       if($scope.champion == data[i]['name']){
          var buildsdata =  data[i]['data'];
          
          var maxBlockNum = 5;
          $scope.list2 = [];
          $scope.blockNames=[];
          
          $scope.addBlock = function(){
            if($scope.list2.length < maxBlockNum){
              $scope.list2[$scope.list2.length]=[];
            }
          };
                  
          $scope.list1 = [];
          for(var build in buildsdata){
            $scope.list1.push(build);
          }
       }
     }
   });
    championbuildspro.success(function(data) {
     for(var i in data){
       if($scope.champion == data[i]['name']){
          var buildsdata =  data[i]['data'];
          $scope.listpro = [];
          for(var build in buildsdata){
            $scope.listpro.push(build);
          }
       }
     }
   });
   $scope.onOut = function(list,e) {
     var index = list.indexOf(e);
     if(index > -1){
       // console.log(e);
       list.splice(index, 1);
     }
   };
}])

app.controller('jsonCtrl',['$scope', 'championbuilds','shareTest',  function ($scope, championbuilds, shareTest){
  $scope.name = $scope.champion + " Page";
  // console.log($scope.name+"name:      ");
  $scope.done = function(){
    
    // console.log("clicked done");

    $scope.listDone = {

        "title": $scope.name,
        "type": "custom",
        "map": "any",
        "mode": "any",
        "priority": false,
        "sortrank": 0,
        "blocks": []
    }
  
    //change name
    if($scope.name!=""){
      $scope.listDone["title"] = $scope.name;
    }
          
    for(var i = 0; i<$scope.list2.length ;i++){
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
        // console.log("blockNames"+i+$scope.blockNames[i]);
        if($scope.blockNames[i]!=undefined){
            buildTemplate["type"] = $scope.blockNames[i];
        }
        for(var m in $scope.list2[i]){
          $scope.duplicate = 'false';
          for(var n in buildTemplate['items']){
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
        console.log($scope.list2[i]);
        console.log("buildTemplate"+buildTemplate);
        $scope.listDone['blocks'].push(buildTemplate); 
      }   
    }
    var json = JSON.stringify($scope.listDone);
    var blob = new Blob([json], {type: "application/json"});
    var name = $scope.champion + "builds.json";
    saveAs(blob, name); 
  }

  
}])
  
app.controller('ButtonsCtrl', ['$scope', 'items','itemOriginal',function ($scope, items, itemOriginal, $window) {
    
    itemOriginal.success(function(data){
        $scope.itemOriginalData = data['data'];
        // console.log(data['data']);
    });
        
   items.success(function(data) {
        $scope.items = data;
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
     })
     //tabs
       $scope.startingTabs = [{'title':'Lane','content':data['Lane']},{'title':'Jungle','content': data['Jungle']}];
   }) 
}]);

app.controller('SearchCtrl', ['$scope', 'itemWithName', function($scope, itemWithName){
  itemWithName.success(function(data) {

    $scope.searchText = '';
    $scope.searchText.name = '';
    $scope.items1 = data;
    
    $scope.$watch('searchText.name', function(){
      if($scope.searchText.name.length == 0){
        angular.element('#searchResult').css('display', 'none'); 
      }
      else{
        console.log('show');
        angular.element('#searchResult').css('display', 'block');
      };
    });
  })
}]);
  
app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false,
    isSecondOpen: false,
    isThirdOpen: false,
    isFourthOpen: false
  };
});

app.controller('ModalCtrl', function ($scope, $modal, $log) {
  $scope.animationsEnabled = true;
  $scope.open = function () {
    var modalInstance = $modal.open({
      animation: 'true',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        items: function () {
        }
      }
    });
  };
});
app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
  $scope.ok = function () {
    $modalInstance.close();
  };
});