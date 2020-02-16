'use strict'

import Browser from '../interfaces/Browser';
import Dimensions from '../interfaces/Dimensions';

import { getBrowserInfo, isMobile } from '../utils/browser';

/**
 * The Player object represents all of the data that is related to the client connected to the game.
 */
export default class Player {
  /**
   * The id of this player.
   * 
   * If the player is a returning player the id will be the same as it was last time they played.
   * 
   * @property {string};
   */
  id: string;

  /**
   * The name and version of the browser that the player is using.
   * 
   * @property {Browser}
   */
  browser: Browser;

  /**
   * Indicates whether or not the player is using a mobile device or not.
   * 
   * @property {boolean}
   */
  isMobile: boolean;

  /**
   * The previous URL that the player came from.
   * 
   * This helps you know what sites are linking to your game.
   * 
   * @property {string}
   */
  referringLink: string;

  /**
   * The dimensions of the player's screen.
   * 
   * @property {Dimensions}
   */
  screen: Dimensions;

  /**
   * The dimensions of the player's viewport.
   * 
   * @property {Dimensions}
   */
  viewport: Dimensions;

  /**
   * The timestamp of when the player landed on the game's page.
   * 
   * @property {Date}
   */
  connected: Date;

  /**
   * The timestamp of when the player left the game's page.
   * 
   * @property {Date}
   */
  disconnected?: Date;

  /**
   * The amount of time elapsed between connecting and disconnecting in milliseconds.
   * 
   * @property {number}
   */
  elapsed?: number;

  /**
   * @param {string} id The id of this player.
   */
  constructor(id: string) {
    this.id = id;

    this.browser = getBrowserInfo();

    this.isMobile = isMobile();

    this.referringLink = document.referrer;

    this.screen = { width: window.screen.width, height: window.screen.height };

    this.viewport = { width: window.innerWidth, height: window.innerHeight };

    this.connected = new Date();
  }
}
