var fs = require('fs');
var items = JSON.parse(fs.readFileSync('item.json'));
var itemlists = [];
for(i in items["data"]){
  if(items["data"][i]!=undefined){
  
    	var temp = {};
      temp["key"] = i;
      temp["name"] = items["data"][i]['name'];
      itemlists.push(temp);
      console.log(temp);
      
    }
  }
console.log(itemlists);
fs.writeFileSync('itemWithName.json', JSON.stringify(itemlists));