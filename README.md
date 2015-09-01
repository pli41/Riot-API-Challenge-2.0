# ReadySetsGo

This webapp is for Riot Api Challenge 2.0. Created by [xPLzzZx](http://na.op.gg/summoner/userName=xplzzzx) and   [toysoldier1226](http://na.op.gg/summoner/userName=toysoldier1226).

## Installation

"Ready Sets Go" is currently available on http://www.prism.gatech.edu/~pli41. It will be moved to a new place once the contest winner is announced.

## Usage

* Click the champion you want to make a item set for.
* Add blocks (max 5)
* Drag items to blocks (on the right)
* Double click to delete the item
* The title and short description would be available upon mouseOver
* Change Item Sets Page name
* Change Block name
* Click on `Read before Use` to read the instruction
* Click on `Generate JSON` to download Item Sets Json file
* Enjoy your new item set:)


##FAQ
1. **What is "ReadySetsGo" for and what does it do?**

	"ReadySetsGo" is created for Riot API Challenge 2.0 competition. In this project, we improved the original item sets system to enchance user experience.
	
2. **Why did you implement these features?**

	Based on our survey with nearby League player, we find out that the users do not benefit much from the item sets function in the game client, and the main reasons are
	* All items are shown in only one column, which looks too busy.
	* From the first glance, users can only see items such as "Mercenary Upgrade" and "Offense Upgrade". Since these items are not commonly used in normal and ranked SR games, users might not find them to be friendly and useful by the outside.
	* In order to create an effective item set, players who are not familiar with a specific champion have to search on internet first for a good guide of that champion, and then go back to Lol client to set up the item set.
	
		
	With a new UI as well as `Most Commonly Used Items` and `Pro Builds` sections, our webApp can partially solve the problems above and enhance user experience.

3. **How did you make it?**

	We analyzed the builds for each champion from over 20k normal games from NA 5.14 patch and put the most commonly used items into our `Most Commonly Used Items` section. Furthermore, we also analyzed platinum+ players build to create our `Pro Builds` section. In our opinion, these sections serve as a good reference for players to set up item sets.

##Technology Used

1. AngularJs
2. [BootStrap](https://angular-ui.github.io/bootstrap/)
3. Node JS: for downloading and analyzing JSON files
4. Angular UI Router
5. Angular animate
6. FileSaver: for exporting json files 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Web development: Peilin Li, Alier Hu

Especially thanks to:

1. Ting Zhang for AngularJS consult
2. Dylan Hornibrook for naming
3. Kha Tran, Zhengxuan Ni and Phillip Tryng Nguyen for user testing and commenting
 
##Riot API Challenge 2.0

"ReadySetsGo" isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends  Riot Games, Inc.
