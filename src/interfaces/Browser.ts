'use strict'

/**
 * Describes the structure of the object that defines the browser name and version that the player is using.
 */
export default interface Browser {

  /**
   * The name of the browser the player is using.
   */
  name: string;

  /**
   * The version of the browser the player is using.
   */
  version: string;

}