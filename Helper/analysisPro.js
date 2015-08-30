var fs = require('fs');
var matches = JSON.parse(fs.readFileSync('NA.json'));
var champions = JSON.parse(fs.readFileSync('champions.json'));
var championsOriginal = JSON.parse(fs.readFileSync('champion-original.json'));
var builds = {};
var count = 0;

for(var i in champions.data){
  var name = champions.data[i].name;
   console.log(championsOriginal.data[name].key);
  builds[championsOriginal.data[name].key]={};
  builds[championsOriginal.data[name].key]["name"]= championsOriginal.data[name].name;
  builds[championsOriginal.data[name].key]["count"]= 0;
  builds[championsOriginal.data[name].key]["data"]= {};

}
for(i in matches){
  try {
      var match = JSON.parse(fs.readFileSync(matches[i]+'.json'));

  } catch (e) {
    continue;
   }
    var t =0;
    while(t < 10){
     try{ var champ = match.participants[t].championId;}
     catch(e){
      break;
     }
     if((match.participants[t].highestAchievedSeasonTier == "PLATINUM" ||
      match.participants[t].highestAchievedSeasonTier == "DIAMOND" ||
      match.participants[t].highestAchievedSeasonTier == "MASTER" ||
      match.participants[t].highestAchievedSeasonTier == "CHALLENGER") && 
      match.participants[t].stats.winner == true){
      console.log(match.participants[t].highestAchievedSeasonTier);
       if(builds[champ]!=undefined){
        builds[champ]["count"]++;
        for(var m=0; m <6; m++){
          
            if(builds[champ]["data"][match.participants[t].stats['item'+m]]!=undefined){
              // console.log(match.participants[t].stats['item'+m]);
              builds[champ]["data"][match.participants[t].stats['item'+m]] ++;
            }
            else{
              builds[champ]["data"][match.participants[t].stats['item'+m]] = 1;
              
            }
          }
      }
     }
      t++;
    }
  }
for(var i in builds){
  for(var t in builds[i]["data"]){
    builds[i]["data"][t] =Math.floor((builds[i]["data"][t]/builds[i]["count"]) * 100);
    if( builds[i]["data"][t] < 10){
      delete  builds[i]["data"][t];
    }

  }
  delete  builds[i]["data"]["0"];
}
console.log(builds);
fs.writeFileSync('champion_builds_pro.json', JSON.stringify(builds));