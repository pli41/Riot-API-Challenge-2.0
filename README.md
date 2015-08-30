# Riot-API-Challenge-2.0
This webapp is for Riot Api Challenge 2.0. Created by [xPLzzZx](http://na.op.gg/summoner/userName=xplzzzx) and   [toysoldier1226](http://na.op.gg/summoner/userName=toysoldier1226).

##FAQ
1. **What is this webApp for and what does it do?**

	This is for Riot API Challenge 2.0 competition. We improved the original item sets function, so that the users could find the items much more quickly. 
	
2. **How to use the webApp?**
	* Click the champion you want to make a item set for.
	* Add blocks (max 5)
	* Drag items to blocks (on the right)
	* Double click to delete the item
	* The title and short description would be available upon mouseOver
	* Change Item Sets Page name
	* Change Block name
	* Click on `Generate JSON` to download Item Sets Json file
	* Follow the popup instruction
	* Enjoy your new item set:)
	
3. Why did you implement these features?
	We feel the users do not benefit much from the item sets function in the game client, and the main reasons are
	* UI is complicated, and the users cannot find what they want
	* Users do not know which item to drag
	
3. **How did you make it?**

	We analyzed the builds for each champion from over 20k normal games from NA 5.14 patch, and put the most common items into our `Most Commonly Used Items` section.

##Technology Used

1. AngularJs : For making the WebApp
2. [BootStrap](https://angular-ui.github.io/bootstrap/) : For UI
3. Node JS: For downloading and analyzing JSON files
