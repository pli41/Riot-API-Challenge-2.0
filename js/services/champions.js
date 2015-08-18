app.factory('champions', ['$http', function($http) { 
  return $http.get('champions.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
