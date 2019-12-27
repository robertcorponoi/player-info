<h1 align="center">Player Info</h1>

<p align="center">A client-side only solution to manage player state and data.<p>

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/player-info.svg?style=flat)](https://www.npmjs.com/package/player-info)
  [![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/player-info/badge.svg)](https://snyk.io/test/github/robertcorponoi/player-info)
  ![npm](https://img.shields.io/npm/dt/player-info)
  [![NPM downloads](https://img.shields.io/npm/dm/player-info.svg?style=flat)](https://www.npmjs.com/package/player-info)
  <a href="https://badge.fury.io/js/player-info"><img src="https://img.shields.io/github/issues/robertcorponoi/player-info.svg" alt="issues" height="18"></a>
  <a href="https://badge.fury.io/js/player-info"><img src="https://img.shields.io/github/license/robertcorponoi/player-info.svg" alt="license" height="18"></a>
  [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

**Table of Contents**

- [Why](#why)
- [Installation](#installation)
- [Properties](#properties)
- [API](#api)
- [Events](#events)
- [Tests](#tests)

## **Why**

Sometimes you need to have persistent data tied to a player but you don't want to/can't have access to a server. PlayerInfo allows you to tie data to a player purely client side so you can still have state management with a serverless game.

## Installation

To install PlayerInfo, use:

```bash
$ npm install player-info
```

and then to use it your project, you import it as an ES6 module:

```js
// Browser
import PlayerInfo from './path/to/player-info.js';

// Webpack
import PlayerInfo from 'player-info';
```

and finally just create a new instance of it to be able to use PlayerInfo:

```js
const playerInfo =  new PlayerInfo();
```

## **Properties**

The following properties are available on any instance of PlayerInfo:

### **player**

The player object contains all data about the current player of the game including their unique id and browser information.

| property        	| type    	| description                                                                                                               	|
|-----------------	|---------	|---------------------------------------------------------------------------------------------------------------------------	|
| id              	| string  	| The unique id of the player. If the player is a returning player the id will be the same as it was last time they played. 	|
| browser         	| Object  	|                                                                                                                           	|
| browser.<span></span>name    	| string  	| The name of the browser the player is using.                                                                              	|
| browser.version 	| string  	| The version number of the browser being used.                                                                             	|
| isMobile        	| boolean 	| Indicates whether the player is using a mobile device or not.                                                             	|
| referringLink   	| string  	| The previous URL that the player came from. This helps you know what sites are linking to your game.                      	|
| screen          	| Object  	|                                                                                                                           	|
| screen.width    	| number  	| The player's screen width.                                                                                                	|
| screen.height   	| number  	| The player's screen height.                                                                                               	|
| viewport        	| Object  	|                                                                                                                           	|
| viewport.width  	| number  	| The player's viewport width.                                                                                              	|
| viewport.height 	| number  	| The player's viewport height.                                                                                             	|
| arrived         	| Date    	| The timestamp of when the player landed on the game's page.                                                               	|
| departed        	| Date    	| The timestamp of when the player left the game's page. This is only available after the user has left                     	|

So if you initialized PlayerInfo like the example above, you could do the following:

```js
// Get the player's browser name:
const browserName = playerInfo.player.browser.name;

// Get whether the player is using a mobile device or not.
const playerIsMobile = playerInfo.player.isMobile;
```

## **API**

### **save**

Saves an item to the persistent storage that is tied to this player.

For example, if your game has levels you can save the current level that the user is on so that when they come back, they can start/access that level.

| param 	|  type  	|                                                                                                    description 	| default 	|
|-------	|:------:	|---------------------------------------------------------------------------------------------------------------:	|---------	|
| key   	| string 	|                                                                             A key to identify the item to save 	|         	|
| item  	| string 	| The actual item to save. This can be any type of value on your end but it should be a string when being saved. 	|         	|

**example:**

```js
const level = 5;

playerInfo.save('level', level);
```

### **load**

Loads an item from the persistent storage.

| param 	|  type  	|                                      description 	| default 	|
|-------	|:------:	|-------------------------------------------------:	|---------	|
| key   	| string 	| The key used to save the item when it was saved. 	|         	|

**example:**

```js
const level = playerInfo.load('level');
```

## **Signals**

PlayerInfo offers two signals, onConnect and onDisconnect.

### **onConnect**

This signal gets dispatched whenever a player connects to the game and it includes the player data object.

**example:**

```js
playerInfo.onConnect.add(playerConnected);

function playerConnected(player) {
  console.log(player) // Same as accessing playerInfo.player
}
```

### **onDisconnect**

This signal gets dispatched whenever a player leaves the game and it includes the player object along with two extra properties added to it: disconnected (a Date object of when the player disconnected) and elapsed (the amount of time between connecting and disconnecting, in milliseconds).

**example:**

```js
playerInfo.onDisconnect.add(playerDisconnected);

function playerDisconnected(player) {
  console.log(player.disconnected, player.elapsed);
}
```

## **Tests**

Since the tests are very browser specific and some parts are hard to mock, all tests are run in a browser. To start up the local server to see the tests use:

```bash
$ npm run test
```

Then navigate to http://localhost/test/index.html to run the tests.

## **License**

MIT