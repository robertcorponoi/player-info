import Player from './player/Player';
import Hypergiant from 'hypergiant';
/**
 * PlayerInfo gets relevant information about clients connecting to your game.
 */
export default class PlayerInfo {
    /**
     * A reference to the Storage object.
     *
     * @private
     *
     * @property {CookieManager}
     */
    private _storage;
    /**
     * A reference to the PlayerData object.
     *
     * @private
     *
     * @property {Playe}
     */
    private _player;
    /**
     * A reference to the signal that is dispatched when the player first connects to the game.
     *
     * This signal is dispatched with the data of the player that connected to the game.
     *
     * @private
     *
     * @property {Hypergiant}
     */
    private _onConnect;
    /**
     * The signal that is dispatched when the player leaves the game.
     *
     * This signal is dispatched with the data of the player that connected to the game but also including the time stamp of when the player left and how much time elapsed in between arriving and departing.
     *
     * @private
     *
     * @property {Hypergiant}
     */
    private _onDisconnect;
    constructor();
    /**
     * Gets a reference to the player's data.
     *
     * @returns {Player}
     */
    get player(): Player;
    /**
     * Gets a reference to the onConnect signal.
     *
     * @returns {Hypergiant}
     */
    get onConnect(): Hypergiant;
    /**
     * Gets a reference to the onDisconnect signal.
     *
     * @returns {Hypergiant}
     */
    get onDisconnect(): Hypergiant;
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
    save(key: string, item: string): void;
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
    load(key: string): string;
    /**
     * Handles the sending on the onConnect signal when the player lands on the game page.
     *
     * @private
     */
    private _onLoad;
    /**
     * Handles the saving of persistent data once the player leaves the game.
     *
     * @private
     */
    private _onBeforeUnload;
}
