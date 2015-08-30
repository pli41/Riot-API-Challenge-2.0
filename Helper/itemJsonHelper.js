var fs = require('fs');
var items = JSON.parse(fs.readFileSync('item.json'));
for(i in items["data"]){
  if(items["data"][i]!=undefined){

   if(items["data"][i]["plaintext"] == undefined){
    items["data"][i]["plaintext"] = "No short description available";
    console.log(items["data"][i]["plaintext"]);
   }
  }
  }
fs.writeFileSync('itemNew.json', JSON.stringify(items));