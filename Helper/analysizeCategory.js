var fs = require('fs');
var items = JSON.parse(fs.readFileSync('item.json'));
var itemlists = {};
var count = 0;
for(i in items["data"]){
  if(items["data"][i]!=undefined){
    for(m in items["data"][i]["tags"]){

        if(itemlists[items["data"][i]["tags"][m]]!=undefined){
          console.log(itemlists[items["data"][i]["tags"][m]]);

        	itemlists[items["data"][i]["tags"][m]].push(i);
        }
        else{
        	itemlists[items["data"][i]["tags"][m]] = [];
          itemlists[items["data"][i]["tags"][m]].push(i);
          
        }
      
    }
  }
  }
console.log(itemlists);
fs.writeFileSync('itemCategory.json', JSON.stringify(itemlists));