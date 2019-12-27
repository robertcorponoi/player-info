'use strict'

import PlayerInfo from './player-info.js';

let id;
let playerInfo;

beforeEach(() => playerInfo = new PlayerInfo());

afterEach(() => playerInfo = null);

describe('Players connecting to the game', () => {

  it('should assign a new id to the player since they have never connected before', () => {

    window.localStorage.clear();

    playerInfo = new PlayerInfo();

    id = playerInfo.player.id;

    chai.expect(playerInfo.id).to.not.be.null;

  });

  it('should store the previous id of the player from the last time they played', () => {

    chai.expect(playerInfo.player.id).to.equal(id);

  });

  it('should initialize the player object with certain properties', () => {

    const player = playerInfo.player;

    chai.expect(player.browser.name).to.not.be.null &&

      chai.expect(player.browser.version).to.not.be.null &&

      chai.expect(player.screen.width).to.not.be.null &&

      chai.expect(player.viewport.width).to.not.be.null &&

      chai.expect(player.connected instanceof Date).to.be.true;

  });

});

describe('Saving and loading data', () => {

  it('should save an item to the persistent and local storage', () => {

    window.localStorage.clear();

    playerInfo = new PlayerInfo();

    const level = 5;

    playerInfo.save('level', level);

    const levelFromLocalStorage = JSON.parse(window.localStorage.getItem('playerinfo'));

    chai.expect(playerInfo._storage.persistentData.level).to.equal(5) &&

      chai.expect(levelFromLocalStorage.level).to.equal(5);

  });

  it('should load an item to the persistent storage after being saved', () => {

    window.localStorage.clear();

    playerInfo = new PlayerInfo();

    const level = 5;

    playerInfo.save('level', level);

    chai.expect(playerInfo.load('level')).to.equal(5);

  });

});