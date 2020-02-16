'use strict'

import PersistentData from '../interfaces/PersistentData';

/**
 * A thin layer around localStorage to make it easier for PlayInfo to work with.
 */
export default class Storage {
  /**
   * A reference to the persistent data that gets saved to the localStorage.
   * 
   * @property {PersistentData}
   */
  persistentData: PersistentData = {};

  constructor() {
    const storageExists: (string | null) = localStorage.getItem('playerinfo');

    if (!storageExists) this.save();
  }

  /**
   * Loads the latest persistent data from the localStorage.
   */
  load() {
    this.persistentData = JSON.parse(window.localStorage.getItem('playerinfo')!);
  }

  /**
   * Saves the persistent data to the localStorage.
   */
  save() {
    window.localStorage.setItem('playerinfo', JSON.stringify(this.persistentData));
  }
}
