var fs = require('fs');
var https = require('https');
var apikey =;
var games = JSON.parse(fs.readFileSync('NAranked.json'));
var path = "NA_Ranked_data/";
var mark = 0;
var f = function(i) {
  mark = i;
  https.request({
    host : "na.api.pvp.net",
    path : "/api/lol/na/v2.2/match/" + games[i] + "?api_key=" + apikey
  }, function(response) {
    console.log("mark =" + i );
    var matchdatastr = '';
    response.on('data', function (matchdata) {
      matchdatastr += matchdata;
    });
    response.on('end', function () {
      try {
        var match = JSON.parse(matchdatastr);
      } catch (e) {
        return ;
      }
      fs.writeFileSync(path + games[i] + '.json', matchdatastr);
    });
    
  }).on('error', function(e){
    console.log(e)
  }).end();
  setTimeout(function() {
    f(i + 1);
  }, 2000);
};
f(mark);