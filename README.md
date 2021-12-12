# Copy Editor: A RegEx Puzzle Game

A puzzle game by the educational non-profit [Cinq-Mars Media](https://cinqmarsmedia.com) that encourages learning Regular Expressions. The game is currently available on [steam](https://store.steampowered.com/app/1489660/Copy_Editor_A_RegEx_Puzzle/) and [itch.io](https://cinqmarsmedia.itch.io/copyeditor).

## Installing

The game uses the Ionic Framework, Angular and Electron as its foundation. It was built using Node version 10, other versions have not been tested but should work in theory. 

1) Install Node.js if not already on system.
2) Download the codebase and **cd** into the root directory
3) run **npm install** to download dependencies
4) run **npm rebuild node-sass** (sometimes necessary before npm start will work, especially on Windows)
5) Run **npm start** 

The game should then run, however, all firebase credentials have obviously been removed. New ones can be generated and added within **constants.ts**. 



