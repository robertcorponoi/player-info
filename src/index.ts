'use strict'

import Player from './player/Player';
import Storage from './storage/Storage';
import { uuidv4 } from './utils/uuid';

import Hypergiant from 'hypergiant';

/**
 * A client-side only solution to manage player state and data.
 */
export default class PlayerInfo {

  /**
   * A reference to the Storage object.
   * 
   * @private
   * 
   * @property {CookieManager}
   */
  private _storage: Storage = new Storage();

  /**
   * A reference to the PlayerData object.
   * 
   * @private
   * 
   * @property {Playe}
   */
  private _player: Player;

  /**
   * A reference to the signal that is dispatched when the player first connects to the game.
   * 
   * This signal is dispatched with the data of the player that connected to the game.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */
  private _onConnect: Hypergiant = new Hypergiant();

  /**
   * The signal that is dispatched when the player leaves the game.
   * 
   * This signal is dispatched with the data of the player that connected to the game but also including the time stamp of when the player left and how much time elapsed in between arriving and departing.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */
  private _onDisconnect: Hypergiant = new Hypergiant();

  constructor() {

    this._storage.load();

    if (!this._storage.persistentData.id) {

      this._player = new Player(uuidv4());

      this._storage.persistentData.id = this._player.id;

    } else this._player = new Player(this._storage.persistentData.id);

    this._storage.save();

    window.addEventListener('load', () => this._onLoad());

    window.addEventListener('unload', () => this._onBeforeUnload());

  }

  /**
   * Gets a reference to the player's data.
   * 
   * @returns {Player}
   */
  get player(): Player { return this._player; }

  /**
   * Gets a reference to the onConnect signal.
   * 
   * @returns {Hypergiant}
   */
  get onConnect(): Hypergiant { return this._onConnect; }

  /**
   * Gets a reference to the onDisconnect signal.
   * 
   * @returns {Hypergiant}
   */
  get onDisconnect(): Hypergiant { return this._onDisconnect; }

  /**
   * Saves an item to the persistent storage that is tied to this player.
   * 
   * For example, if your game has levels you can save the current level that the user is on so that when they
   * come back, they can start/access that level.
   * 
   * @param {string} key A key to identify the item to save.
   * @param {string} item The actual item to save. This can be any type of value on your end but it should be a string when being saved.
   * 
   * @example
   * 
   * const level = 5;
   * 
   * playerInfo.save('level', level);
   */
  save(key: string, item: string) {

    this._storage.persistentData[key] = item;

    this._storage.save();

  }

  /**
   * Loads an item from the persistent storage.
   * 
   * @param {string} key The key used to save the item when it was saved.
   * 
   * @returns {string} Returns the item from the persistent storage that matches the provided key.
   * 
   * @example
   * 
   * const level = playerInfo.load('level');
   */
  load(key: string): string {

    return this._storage.persistentData[key];    

  }

  /**
   * Handles the sending on the onConnect signal when the player lands on the game page.
   * 
   * @private
   */
  private _onLoad() {

    this._onConnect.dispatch(this.player);

  }

  /**
   * Handles the saving of persistent data once the player leaves the game.
   * 
   * @private
   */
  private _onBeforeUnload() {

    this._player.disconnected = new Date();

    this._player.elapsed = this._player.disconnected.getTime() - this._player.connected.getTime();

    this._storage.save();

    this._onDisconnect.dispatch();

  }

}