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
 * PlayerInfo gets relevant information about clients connecting to your game.
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
    } else this._player = new _Player["default"](this._storage.persistentData.id);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJQbGF5ZXJJbmZvIiwiU3RvcmFnZSIsIkh5cGVyZ2lhbnQiLCJfc3RvcmFnZSIsImxvYWQiLCJwZXJzaXN0ZW50RGF0YSIsImlkIiwiX3BsYXllciIsIlBsYXllciIsInNhdmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiX29uTG9hZCIsIl9vbkJlZm9yZVVubG9hZCIsImtleSIsIml0ZW0iLCJfb25Db25uZWN0IiwiZGlzcGF0Y2giLCJwbGF5ZXIiLCJkaXNjb25uZWN0ZWQiLCJEYXRlIiwiZWxhcHNlZCIsImdldFRpbWUiLCJjb25uZWN0ZWQiLCJfb25EaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQSxVOzs7QUFFbkI7Ozs7Ozs7O0FBU0E7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBV0Esd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxzQ0FqQ2MsSUFBSUMsbUJBQUosRUFpQ2Q7O0FBQUE7O0FBQUEsd0NBYm1CLElBQUlDLHNCQUFKLEVBYW5COztBQUFBLDJDQUZzQixJQUFJQSxzQkFBSixFQUV0Qjs7QUFFWixTQUFLQyxRQUFMLENBQWNDLElBQWQ7O0FBRUEsUUFBSSxDQUFDLEtBQUtELFFBQUwsQ0FBY0UsY0FBZCxDQUE2QkMsRUFBbEMsRUFBc0M7QUFFcEMsV0FBS0MsT0FBTCxHQUFlLElBQUlDLGtCQUFKLENBQVcsbUJBQVgsQ0FBZjtBQUVBLFdBQUtMLFFBQUwsQ0FBY0UsY0FBZCxDQUE2QkMsRUFBN0IsR0FBa0MsS0FBS0MsT0FBTCxDQUFhRCxFQUEvQztBQUVELEtBTkQsTUFNTyxLQUFLQyxPQUFMLEdBQWUsSUFBSUMsa0JBQUosQ0FBVyxLQUFLTCxRQUFMLENBQWNFLGNBQWQsQ0FBNkJDLEVBQXhDLENBQWY7O0FBRVAsU0FBS0gsUUFBTCxDQUFjTSxJQUFkOztBQUVBQyxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO0FBQUEsYUFBTSxLQUFJLENBQUNDLE9BQUwsRUFBTjtBQUFBLEtBQWhDO0FBRUFGLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFBQSxhQUFNLEtBQUksQ0FBQ0UsZUFBTCxFQUFOO0FBQUEsS0FBbEM7QUFFRDtBQUVEOzs7Ozs7Ozs7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7eUJBZUtDLEcsRUFBYUMsSSxFQUFjO0FBRTlCLFdBQUtaLFFBQUwsQ0FBY0UsY0FBZCxDQUE2QlMsR0FBN0IsSUFBb0NDLElBQXBDOztBQUVBLFdBQUtaLFFBQUwsQ0FBY00sSUFBZDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O3lCQVdLSyxHLEVBQXFCO0FBRXhCLGFBQU8sS0FBS1gsUUFBTCxDQUFjRSxjQUFkLENBQTZCUyxHQUE3QixDQUFQO0FBRUQ7QUFFRDs7Ozs7Ozs7OEJBS2tCO0FBRWhCLFdBQUtFLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLEtBQUtDLE1BQTlCO0FBRUQ7QUFFRDs7Ozs7Ozs7c0NBSzBCO0FBRXhCLFdBQUtYLE9BQUwsQ0FBYVksWUFBYixHQUE0QixJQUFJQyxJQUFKLEVBQTVCO0FBRUEsV0FBS2IsT0FBTCxDQUFhYyxPQUFiLEdBQXVCLEtBQUtkLE9BQUwsQ0FBYVksWUFBYixDQUEwQkcsT0FBMUIsS0FBc0MsS0FBS2YsT0FBTCxDQUFhZ0IsU0FBYixDQUF1QkQsT0FBdkIsRUFBN0Q7O0FBRUEsV0FBS25CLFFBQUwsQ0FBY00sSUFBZDs7QUFFQSxXQUFLZSxhQUFMLENBQW1CUCxRQUFuQjtBQUVEOzs7d0JBbEZvQjtBQUFFLGFBQU8sS0FBS1YsT0FBWjtBQUFzQjtBQUU3Qzs7Ozs7Ozs7d0JBSzRCO0FBQUUsYUFBTyxLQUFLUyxVQUFaO0FBQXlCO0FBRXZEOzs7Ozs7Ozt3QkFLK0I7QUFBRSxhQUFPLEtBQUtRLGFBQVo7QUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIvUGxheWVyJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyB1dWlkdjQgfSBmcm9tICcuL3V0aWxzL3V1aWQnO1xyXG5cclxuaW1wb3J0IEh5cGVyZ2lhbnQgZnJvbSAnaHlwZXJnaWFudCc7XHJcblxyXG4vKipcclxuICogUGxheWVySW5mbyBnZXRzIHJlbGV2YW50IGluZm9ybWF0aW9uIGFib3V0IGNsaWVudHMgY29ubmVjdGluZyB0byB5b3VyIGdhbWUuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJJbmZvIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtDb29raWVNYW5hZ2VyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N0b3JhZ2U6IFN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgUGxheWVyRGF0YSBvYmplY3QuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge1BsYXllfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3BsYXllcjogUGxheWVyO1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgc2lnbmFsIHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuIHRoZSBwbGF5ZXIgZmlyc3QgY29ubmVjdHMgdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogVGhpcyBzaWduYWwgaXMgZGlzcGF0Y2hlZCB3aXRoIHRoZSBkYXRhIG9mIHRoZSBwbGF5ZXIgdGhhdCBjb25uZWN0ZWQgdG8gdGhlIGdhbWUuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Db25uZWN0OiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHNpZ25hbCB0aGF0IGlzIGRpc3BhdGNoZWQgd2hlbiB0aGUgcGxheWVyIGxlYXZlcyB0aGUgZ2FtZS5cclxuICAgKiBcclxuICAgKiBUaGlzIHNpZ25hbCBpcyBkaXNwYXRjaGVkIHdpdGggdGhlIGRhdGEgb2YgdGhlIHBsYXllciB0aGF0IGNvbm5lY3RlZCB0byB0aGUgZ2FtZSBidXQgYWxzbyBpbmNsdWRpbmcgdGhlIHRpbWUgc3RhbXAgb2Ygd2hlbiB0aGUgcGxheWVyIGxlZnQgYW5kIGhvdyBtdWNoIHRpbWUgZWxhcHNlZCBpbiBiZXR3ZWVuIGFycml2aW5nIGFuZCBkZXBhcnRpbmcuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25EaXNjb25uZWN0OiBIeXBlcmdpYW50ID0gbmV3IEh5cGVyZ2lhbnQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdGhpcy5fc3RvcmFnZS5sb2FkKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9zdG9yYWdlLnBlcnNpc3RlbnREYXRhLmlkKSB7XHJcblxyXG4gICAgICB0aGlzLl9wbGF5ZXIgPSBuZXcgUGxheWVyKHV1aWR2NCgpKTtcclxuXHJcbiAgICAgIHRoaXMuX3N0b3JhZ2UucGVyc2lzdGVudERhdGEuaWQgPSB0aGlzLl9wbGF5ZXIuaWQ7XHJcblxyXG4gICAgfSBlbHNlIHRoaXMuX3BsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5fc3RvcmFnZS5wZXJzaXN0ZW50RGF0YS5pZCk7XHJcblxyXG4gICAgdGhpcy5fc3RvcmFnZS5zYXZlKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB0aGlzLl9vbkxvYWQoKSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsICgpID0+IHRoaXMuX29uQmVmb3JlVW5sb2FkKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSByZWZlcmVuY2UgdG8gdGhlIHBsYXllcidzIGRhdGEuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge1BsYXllcn1cclxuICAgKi9cclxuICBnZXQgcGxheWVyKCk6IFBsYXllciB7IHJldHVybiB0aGlzLl9wbGF5ZXI7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHJlZmVyZW5jZSB0byB0aGUgb25Db25uZWN0IHNpZ25hbC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7SHlwZXJnaWFudH1cclxuICAgKi9cclxuICBnZXQgb25Db25uZWN0KCk6IEh5cGVyZ2lhbnQgeyByZXR1cm4gdGhpcy5fb25Db25uZWN0OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSByZWZlcmVuY2UgdG8gdGhlIG9uRGlzY29ubmVjdCBzaWduYWwuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0h5cGVyZ2lhbnR9XHJcbiAgICovXHJcbiAgZ2V0IG9uRGlzY29ubmVjdCgpOiBIeXBlcmdpYW50IHsgcmV0dXJuIHRoaXMuX29uRGlzY29ubmVjdDsgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlcyBhbiBpdGVtIHRvIHRoZSBwZXJzaXN0ZW50IHN0b3JhZ2UgdGhhdCBpcyB0aWVkIHRvIHRoaXMgcGxheWVyLlxyXG4gICAqIFxyXG4gICAqIEZvciBleGFtcGxlLCBpZiB5b3VyIGdhbWUgaGFzIGxldmVscyB5b3UgY2FuIHNhdmUgdGhlIGN1cnJlbnQgbGV2ZWwgdGhhdCB0aGUgdXNlciBpcyBvbiBzbyB0aGF0IHdoZW4gdGhleVxyXG4gICAqIGNvbWUgYmFjaywgdGhleSBjYW4gc3RhcnQvYWNjZXNzIHRoYXQgbGV2ZWwuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBIGtleSB0byBpZGVudGlmeSB0aGUgaXRlbSB0byBzYXZlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtIFRoZSBhY3R1YWwgaXRlbSB0byBzYXZlLiBUaGlzIGNhbiBiZSBhbnkgdHlwZSBvZiB2YWx1ZSBvbiB5b3VyIGVuZCBidXQgaXQgc2hvdWxkIGJlIGEgc3RyaW5nIHdoZW4gYmVpbmcgc2F2ZWQuXHJcbiAgICogXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBcclxuICAgKiBjb25zdCBsZXZlbCA9IDU7XHJcbiAgICogXHJcbiAgICogcGxheWVySW5mby5zYXZlKCdsZXZlbCcsIGxldmVsKTtcclxuICAgKi9cclxuICBzYXZlKGtleTogc3RyaW5nLCBpdGVtOiBzdHJpbmcpIHtcclxuXHJcbiAgICB0aGlzLl9zdG9yYWdlLnBlcnNpc3RlbnREYXRhW2tleV0gPSBpdGVtO1xyXG5cclxuICAgIHRoaXMuX3N0b3JhZ2Uuc2F2ZSgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWRzIGFuIGl0ZW0gZnJvbSB0aGUgcGVyc2lzdGVudCBzdG9yYWdlLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB1c2VkIHRvIHNhdmUgdGhlIGl0ZW0gd2hlbiBpdCB3YXMgc2F2ZWQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgaXRlbSBmcm9tIHRoZSBwZXJzaXN0ZW50IHN0b3JhZ2UgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICogXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBcclxuICAgKiBjb25zdCBsZXZlbCA9IHBsYXllckluZm8ubG9hZCgnbGV2ZWwnKTtcclxuICAgKi9cclxuICBsb2FkKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5wZXJzaXN0ZW50RGF0YVtrZXldOyAgICBcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHRoZSBzZW5kaW5nIG9uIHRoZSBvbkNvbm5lY3Qgc2lnbmFsIHdoZW4gdGhlIHBsYXllciBsYW5kcyBvbiB0aGUgZ2FtZSBwYWdlLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG5cclxuICAgIHRoaXMuX29uQ29ubmVjdC5kaXNwYXRjaCh0aGlzLnBsYXllcik7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB0aGUgc2F2aW5nIG9mIHBlcnNpc3RlbnQgZGF0YSBvbmNlIHRoZSBwbGF5ZXIgbGVhdmVzIHRoZSBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfb25CZWZvcmVVbmxvYWQoKSB7XHJcblxyXG4gICAgdGhpcy5fcGxheWVyLmRpc2Nvbm5lY3RlZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgdGhpcy5fcGxheWVyLmVsYXBzZWQgPSB0aGlzLl9wbGF5ZXIuZGlzY29ubmVjdGVkLmdldFRpbWUoKSAtIHRoaXMuX3BsYXllci5jb25uZWN0ZWQuZ2V0VGltZSgpO1xyXG5cclxuICAgIHRoaXMuX3N0b3JhZ2Uuc2F2ZSgpO1xyXG5cclxuICAgIHRoaXMuX29uRGlzY29ubmVjdC5kaXNwYXRjaCgpO1xyXG5cclxuICB9XHJcblxyXG59Il19