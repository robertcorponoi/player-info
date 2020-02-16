'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Player = _interopRequireDefault(require("./player/Player"));

var _Storage = _interopRequireDefault(require("./storage/Storage"));

var _uuid = require("./utils/uuid");

var _hypergiant = _interopRequireDefault(require("hypergiant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A client-side only solution to manage player state and data.
 */
var PlayerInfo =
/*#__PURE__*/
function () {
  /**
   * A reference to the Storage object.
   * 
   * @private
   * 
   * @property {CookieManager}
   */

  /**
   * A reference to the PlayerData object.
   * 
   * @private
   * 
   * @property {Playe}
   */

  /**
   * A reference to the signal that is dispatched when the player first connects to the game.
   * 
   * This signal is dispatched with the data of the player that connected to the game.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */

  /**
   * The signal that is dispatched when the player leaves the game.
   * 
   * This signal is dispatched with the data of the player that connected to the game but also including the time stamp of when the player left and how much time elapsed in between arriving and departing.
   * 
   * @private
   * 
   * @property {Hypergiant}
   */
  function PlayerInfo() {
    var _this = this;

    _classCallCheck(this, PlayerInfo);

    _defineProperty(this, "_storage", new _Storage["default"]());

    _defineProperty(this, "_player", void 0);

    _defineProperty(this, "_onConnect", new _hypergiant["default"]());

    _defineProperty(this, "_onDisconnect", new _hypergiant["default"]());

    this._storage.load();

    if (!this._storage.persistentData.id) {
      this._player = new _Player["default"]((0, _uuid.uuidv4)());
      this._storage.persistentData.id = this._player.id;
    } else {
      this._player = new _Player["default"](this._storage.persistentData.id);
    }

    this._storage.save();

    window.addEventListener('load', function () {
      return _this._onLoad();
    });
    window.addEventListener('unload', function () {
      return _this._onBeforeUnload();
    });
  }
  /**
   * Gets a reference to the player's data.
   * 
   * @returns {Player}
   */


  _createClass(PlayerInfo, [{
    key: "save",

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
    value: function save(key, item) {
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

  }, {
    key: "load",
    value: function load(key) {
      return this._storage.persistentData[key];
    }
    /**
     * Handles the sending on the onConnect signal when the player lands on the game page.
     * 
     * @private
     */

  }, {
    key: "_onLoad",
    value: function _onLoad() {
      this._onConnect.dispatch(this.player);
    }
    /**
     * Handles the saving of persistent data once the player leaves the game.
     * 
     * @private
     */

  }, {
    key: "_onBeforeUnload",
    value: function _onBeforeUnload() {
      this._player.disconnected = new Date();
      this._player.elapsed = this._player.disconnected.getTime() - this._player.connected.getTime();

      this._storage.save();

      this._onDisconnect.dispatch();
    }
  }, {
    key: "player",
    get: function get() {
      return this._player;
    }
    /**
     * Gets a reference to the onConnect signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onConnect",
    get: function get() {
      return this._onConnect;
    }
    /**
     * Gets a reference to the onDisconnect signal.
     * 
     * @returns {Hypergiant}
     */

  }, {
    key: "onDisconnect",
    get: function get() {
      return this._onDisconnect;
    }
  }]);

  return PlayerInfo;
}();

exports["default"] = PlayerInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQbGF5ZXJJbmZvIiwiU3RvcmFnZSIsIkh5cGVyZ2lhbnQiLCJfc3RvcmFnZSIsImxvYWQiLCJwZXJzaXN0ZW50RGF0YSIsImlkIiwiX3BsYXllciIsIlBsYXllciIsInNhdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX29uTG9hZCIsIl9vbkJlZm9yZVVubG9hZCIsImtleSIsIml0ZW0iLCJfb25Db25uZWN0IiwiZGlzcGF0Y2giLCJwbGF5ZXIiLCJkaXNjb25uZWN0ZWQiLCJEYXRlIiwiZWxhcHNlZCIsImdldFRpbWUiLCJjb25uZWN0ZWQiLCJfb25EaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxVOzs7QUFDbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBV0Esd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxzQ0FqQ2MsSUFBSUMsbUJBQUosRUFpQ2Q7O0FBQUE7O0FBQUEsd0NBYm1CLElBQUlDLHNCQUFKLEVBYW5COztBQUFBLDJDQUZzQixJQUFJQSxzQkFBSixFQUV0Qjs7QUFDWixTQUFLQyxRQUFMLENBQWNDLElBQWQ7O0FBRUEsUUFBSSxDQUFDLEtBQUtELFFBQUwsQ0FBY0UsY0FBZCxDQUE2QkMsRUFBbEMsRUFBc0M7QUFDcEMsV0FBS0MsT0FBTCxHQUFlLElBQUlDLGtCQUFKLENBQVcsbUJBQVgsQ0FBZjtBQUVBLFdBQUtMLFFBQUwsQ0FBY0UsY0FBZCxDQUE2QkMsRUFBN0IsR0FBa0MsS0FBS0MsT0FBTCxDQUFhRCxFQUEvQztBQUNELEtBSkQsTUFJTztBQUNMLFdBQUtDLE9BQUwsR0FBZSxJQUFJQyxrQkFBSixDQUFXLEtBQUtMLFFBQUwsQ0FBY0UsY0FBZCxDQUE2QkMsRUFBeEMsQ0FBZjtBQUNEOztBQUVELFNBQUtILFFBQUwsQ0FBY00sSUFBZDs7QUFFQUMsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLGFBQU0sS0FBSSxDQUFDQyxPQUFMLEVBQU47QUFBQSxLQUFoQztBQUVBRixJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQUEsYUFBTSxLQUFJLENBQUNFLGVBQUwsRUFBTjtBQUFBLEtBQWxDO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7O3lCQWVLQyxHLEVBQWFDLEksRUFBYztBQUM5QixXQUFLWixRQUFMLENBQWNFLGNBQWQsQ0FBNkJTLEdBQTdCLElBQW9DQyxJQUFwQzs7QUFFQSxXQUFLWixRQUFMLENBQWNNLElBQWQ7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozt5QkFXS0ssRyxFQUFxQjtBQUN4QixhQUFPLEtBQUtYLFFBQUwsQ0FBY0UsY0FBZCxDQUE2QlMsR0FBN0IsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7OzhCQUtrQjtBQUNoQixXQUFLRSxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixLQUFLQyxNQUE5QjtBQUNEO0FBRUQ7Ozs7Ozs7O3NDQUswQjtBQUN4QixXQUFLWCxPQUFMLENBQWFZLFlBQWIsR0FBNEIsSUFBSUMsSUFBSixFQUE1QjtBQUVBLFdBQUtiLE9BQUwsQ0FBYWMsT0FBYixHQUF1QixLQUFLZCxPQUFMLENBQWFZLFlBQWIsQ0FBMEJHLE9BQTFCLEtBQXNDLEtBQUtmLE9BQUwsQ0FBYWdCLFNBQWIsQ0FBdUJELE9BQXZCLEVBQTdEOztBQUVBLFdBQUtuQixRQUFMLENBQWNNLElBQWQ7O0FBRUEsV0FBS2UsYUFBTCxDQUFtQlAsUUFBbkI7QUFDRDs7O3dCQTFFb0I7QUFBRSxhQUFPLEtBQUtWLE9BQVo7QUFBc0I7QUFFN0M7Ozs7Ozs7O3dCQUs0QjtBQUFFLGFBQU8sS0FBS1MsVUFBWjtBQUF5QjtBQUV2RDs7Ozs7Ozs7d0JBSytCO0FBQUUsYUFBTyxLQUFLUSxhQUFaO0FBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvUGxheWVyJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9TdG9yYWdlJztcbmltcG9ydCB7IHV1aWR2NCB9IGZyb20gJy4vdXRpbHMvdXVpZCc7XG5cbmltcG9ydCBIeXBlcmdpYW50IGZyb20gJ2h5cGVyZ2lhbnQnO1xuXG4vKipcbiAqIEEgY2xpZW50LXNpZGUgb25seSBzb2x1dGlvbiB0byBtYW5hZ2UgcGxheWVyIHN0YXRlIGFuZCBkYXRhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJJbmZvIHtcbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBTdG9yYWdlIG9iamVjdC5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0Nvb2tpZU1hbmFnZXJ9XG4gICAqL1xuICBwcml2YXRlIF9zdG9yYWdlOiBTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFBsYXllckRhdGEgb2JqZWN0LlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7UGxheWV9XG4gICAqL1xuICBwcml2YXRlIF9wbGF5ZXI6IFBsYXllcjtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbiB0aGUgcGxheWVyIGZpcnN0IGNvbm5lY3RzIHRvIHRoZSBnYW1lLlxuICAgKiBcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aXRoIHRoZSBkYXRhIG9mIHRoZSBwbGF5ZXIgdGhhdCBjb25uZWN0ZWQgdG8gdGhlIGdhbWUuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKiBcbiAgICogQHByb3BlcnR5IHtIeXBlcmdpYW50fVxuICAgKi9cbiAgcHJpdmF0ZSBfb25Db25uZWN0OiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcblxuICAvKipcbiAgICogVGhlIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbiB0aGUgcGxheWVyIGxlYXZlcyB0aGUgZ2FtZS5cbiAgICogXG4gICAqIFRoaXMgc2lnbmFsIGlzIGRpc3BhdGNoZWQgd2l0aCB0aGUgZGF0YSBvZiB0aGUgcGxheWVyIHRoYXQgY29ubmVjdGVkIHRvIHRoZSBnYW1lIGJ1dCBhbHNvIGluY2x1ZGluZyB0aGUgdGltZSBzdGFtcCBvZiB3aGVuIHRoZSBwbGF5ZXIgbGVmdCBhbmQgaG93IG11Y2ggdGltZSBlbGFwc2VkIGluIGJldHdlZW4gYXJyaXZpbmcgYW5kIGRlcGFydGluZy5cbiAgICogXG4gICAqIEBwcml2YXRlXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XG4gICAqL1xuICBwcml2YXRlIF9vbkRpc2Nvbm5lY3Q6IEh5cGVyZ2lhbnQgPSBuZXcgSHlwZXJnaWFudCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N0b3JhZ2UubG9hZCgpO1xuXG4gICAgaWYgKCF0aGlzLl9zdG9yYWdlLnBlcnNpc3RlbnREYXRhLmlkKSB7XG4gICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgUGxheWVyKHV1aWR2NCgpKTtcblxuICAgICAgdGhpcy5fc3RvcmFnZS5wZXJzaXN0ZW50RGF0YS5pZCA9IHRoaXMuX3BsYXllci5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFBsYXllcih0aGlzLl9zdG9yYWdlLnBlcnNpc3RlbnREYXRhLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdG9yYWdlLnNhdmUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gdGhpcy5fb25Mb2FkKCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsICgpID0+IHRoaXMuX29uQmVmb3JlVW5sb2FkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSByZWZlcmVuY2UgdG8gdGhlIHBsYXllcidzIGRhdGEuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7UGxheWVyfVxuICAgKi9cbiAgZ2V0IHBsYXllcigpOiBQbGF5ZXIgeyByZXR1cm4gdGhpcy5fcGxheWVyOyB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSByZWZlcmVuY2UgdG8gdGhlIG9uQ29ubmVjdCBzaWduYWwuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cbiAgICovXG4gIGdldCBvbkNvbm5lY3QoKTogSHlwZXJnaWFudCB7IHJldHVybiB0aGlzLl9vbkNvbm5lY3Q7IH1cblxuICAvKipcbiAgICogR2V0cyBhIHJlZmVyZW5jZSB0byB0aGUgb25EaXNjb25uZWN0IHNpZ25hbC5cbiAgICogXG4gICAqIEByZXR1cm5zIHtIeXBlcmdpYW50fVxuICAgKi9cbiAgZ2V0IG9uRGlzY29ubmVjdCgpOiBIeXBlcmdpYW50IHsgcmV0dXJuIHRoaXMuX29uRGlzY29ubmVjdDsgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhbiBpdGVtIHRvIHRoZSBwZXJzaXN0ZW50IHN0b3JhZ2UgdGhhdCBpcyB0aWVkIHRvIHRoaXMgcGxheWVyLlxuICAgKiBcbiAgICogRm9yIGV4YW1wbGUsIGlmIHlvdXIgZ2FtZSBoYXMgbGV2ZWxzIHlvdSBjYW4gc2F2ZSB0aGUgY3VycmVudCBsZXZlbCB0aGF0IHRoZSB1c2VyIGlzIG9uIHNvIHRoYXQgd2hlbiB0aGV5XG4gICAqIGNvbWUgYmFjaywgdGhleSBjYW4gc3RhcnQvYWNjZXNzIHRoYXQgbGV2ZWwuXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEEga2V5IHRvIGlkZW50aWZ5IHRoZSBpdGVtIHRvIHNhdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtIFRoZSBhY3R1YWwgaXRlbSB0byBzYXZlLiBUaGlzIGNhbiBiZSBhbnkgdHlwZSBvZiB2YWx1ZSBvbiB5b3VyIGVuZCBidXQgaXQgc2hvdWxkIGJlIGEgc3RyaW5nIHdoZW4gYmVpbmcgc2F2ZWQuXG4gICAqIFxuICAgKiBAZXhhbXBsZVxuICAgKiBcbiAgICogY29uc3QgbGV2ZWwgPSA1O1xuICAgKiBcbiAgICogcGxheWVySW5mby5zYXZlKCdsZXZlbCcsIGxldmVsKTtcbiAgICovXG4gIHNhdmUoa2V5OiBzdHJpbmcsIGl0ZW06IHN0cmluZykge1xuICAgIHRoaXMuX3N0b3JhZ2UucGVyc2lzdGVudERhdGFba2V5XSA9IGl0ZW07XG5cbiAgICB0aGlzLl9zdG9yYWdlLnNhdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBpdGVtIGZyb20gdGhlIHBlcnNpc3RlbnQgc3RvcmFnZS5cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB1c2VkIHRvIHNhdmUgdGhlIGl0ZW0gd2hlbiBpdCB3YXMgc2F2ZWQuXG4gICAqIFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBpdGVtIGZyb20gdGhlIHBlcnNpc3RlbnQgc3RvcmFnZSB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIGtleS5cbiAgICogXG4gICAqIEBleGFtcGxlXG4gICAqIFxuICAgKiBjb25zdCBsZXZlbCA9IHBsYXllckluZm8ubG9hZCgnbGV2ZWwnKTtcbiAgICovXG4gIGxvYWQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLnBlcnNpc3RlbnREYXRhW2tleV07ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHNlbmRpbmcgb24gdGhlIG9uQ29ubmVjdCBzaWduYWwgd2hlbiB0aGUgcGxheWVyIGxhbmRzIG9uIHRoZSBnYW1lIHBhZ2UuXG4gICAqIFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfb25Mb2FkKCkge1xuICAgIHRoaXMuX29uQ29ubmVjdC5kaXNwYXRjaCh0aGlzLnBsYXllcik7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgc2F2aW5nIG9mIHBlcnNpc3RlbnQgZGF0YSBvbmNlIHRoZSBwbGF5ZXIgbGVhdmVzIHRoZSBnYW1lLlxuICAgKiBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX29uQmVmb3JlVW5sb2FkKCkge1xuICAgIHRoaXMuX3BsYXllci5kaXNjb25uZWN0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdGhpcy5fcGxheWVyLmVsYXBzZWQgPSB0aGlzLl9wbGF5ZXIuZGlzY29ubmVjdGVkLmdldFRpbWUoKSAtIHRoaXMuX3BsYXllci5jb25uZWN0ZWQuZ2V0VGltZSgpO1xuXG4gICAgdGhpcy5fc3RvcmFnZS5zYXZlKCk7XG5cbiAgICB0aGlzLl9vbkRpc2Nvbm5lY3QuZGlzcGF0Y2goKTtcbiAgfVxufVxuIl19