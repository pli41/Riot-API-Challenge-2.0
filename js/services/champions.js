app.factory('champions', ['$http', function($http) { 
  return $http.get('champions.json') 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

app.factory('championbuilds', ['$http', function($http) { 
  return $http.get('champion_builds.json') 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
