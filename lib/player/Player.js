'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _browser = require("../utils/browser");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Player object represents all of the data that is related to the client connected to the game.
 */
var Player =
/**
 * The id of this player.
 * 
 * If the player is a returning player the id will be the same as it was last time they played.
 * 
 * @property {string};
 */

/**
 * The name and version of the browser that the player is using.
 * 
 * @property {Browser}
 */

/**
 * Indicates whether or not the player is using a mobile device or not.
 * 
 * @property {boolean}
 */

/**
 * The previous URL that the player came from.
 * 
 * This helps you know what sites are linking to your game.
 * 
 * @property {string}
 */

/**
 * The dimensions of the player's screen.
 * 
 * @property {Dimensions}
 */

/**
 * The dimensions of the player's viewport.
 * 
 * @property {Dimensions}
 */

/**
 * The timestamp of when the player landed on the game's page.
 * 
 * @property {Date}
 */

/**
 * The timestamp of when the player left the game's page.
 * 
 * @property {Date}
 */

/**
 * The amount of time elapsed between connecting and disconnecting in milliseconds.
 * 
 * @property {number}
 */

/**
 * @param {string} id The id of this player.
 */
function Player(id) {
  _classCallCheck(this, Player);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "browser", void 0);

  _defineProperty(this, "isMobile", void 0);

  _defineProperty(this, "referringLink", void 0);

  _defineProperty(this, "screen", void 0);

  _defineProperty(this, "viewport", void 0);

  _defineProperty(this, "connected", void 0);

  _defineProperty(this, "disconnected", void 0);

  _defineProperty(this, "elapsed", void 0);

  this.id = id;
  this.browser = (0, _browser.getBrowserInfo)();
  this.isMobile = (0, _browser.isMobile)();
  this.referringLink = document.referrer;
  this.screen = {
    width: window.screen.width,
    height: window.screen.height
  };
  this.viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  this.connected = new Date();
};

exports["default"] = Player;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGF5ZXIvUGxheWVyLnRzIl0sIm5hbWVzIjpbIlBsYXllciIsImlkIiwiYnJvd3NlciIsImlzTW9iaWxlIiwicmVmZXJyaW5nTGluayIsImRvY3VtZW50IiwicmVmZXJyZXIiLCJzY3JlZW4iLCJ3aWR0aCIsIndpbmRvdyIsImhlaWdodCIsInZpZXdwb3J0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29ubmVjdGVkIiwiRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFLQTs7Ozs7O0FBRUE7OztJQUdxQkEsTTtBQUNuQjs7Ozs7Ozs7QUFTQTs7Ozs7O0FBT0E7Ozs7OztBQU9BOzs7Ozs7OztBQVNBOzs7Ozs7QUFPQTs7Ozs7O0FBT0E7Ozs7OztBQU9BOzs7Ozs7QUFPQTs7Ozs7O0FBT0E7OztBQUdBLGdCQUFZQyxFQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3RCLE9BQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUVBLE9BQUtDLE9BQUwsR0FBZSw4QkFBZjtBQUVBLE9BQUtDLFFBQUwsR0FBZ0Isd0JBQWhCO0FBRUEsT0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxRQUE5QjtBQUVBLE9BQUtDLE1BQUwsR0FBYztBQUFFQyxJQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0YsTUFBUCxDQUFjQyxLQUF2QjtBQUE4QkUsSUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNGLE1BQVAsQ0FBY0c7QUFBcEQsR0FBZDtBQUVBLE9BQUtDLFFBQUwsR0FBZ0I7QUFBRUgsSUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNHLFVBQWhCO0FBQTRCRixJQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0k7QUFBM0MsR0FBaEI7QUFFQSxPQUFLQyxTQUFMLEdBQWlCLElBQUlDLElBQUosRUFBakI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBCcm93c2VyIGZyb20gJy4uL2ludGVyZmFjZXMvQnJvd3Nlcic7XG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICcuLi9pbnRlcmZhY2VzL0RpbWVuc2lvbnMnO1xuXG5pbXBvcnQgeyBnZXRCcm93c2VySW5mbywgaXNNb2JpbGUgfSBmcm9tICcuLi91dGlscy9icm93c2VyJztcblxuLyoqXG4gKiBUaGUgUGxheWVyIG9iamVjdCByZXByZXNlbnRzIGFsbCBvZiB0aGUgZGF0YSB0aGF0IGlzIHJlbGF0ZWQgdG8gdGhlIGNsaWVudCBjb25uZWN0ZWQgdG8gdGhlIGdhbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhpcyBwbGF5ZXIuXG4gICAqIFxuICAgKiBJZiB0aGUgcGxheWVyIGlzIGEgcmV0dXJuaW5nIHBsYXllciB0aGUgaWQgd2lsbCBiZSB0aGUgc2FtZSBhcyBpdCB3YXMgbGFzdCB0aW1lIHRoZXkgcGxheWVkLlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9O1xuICAgKi9cbiAgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgYW5kIHZlcnNpb24gb2YgdGhlIGJyb3dzZXIgdGhhdCB0aGUgcGxheWVyIGlzIHVzaW5nLlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtCcm93c2VyfVxuICAgKi9cbiAgYnJvd3NlcjogQnJvd3NlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBwbGF5ZXIgaXMgdXNpbmcgYSBtb2JpbGUgZGV2aWNlIG9yIG5vdC5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn1cbiAgICovXG4gIGlzTW9iaWxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXMgVVJMIHRoYXQgdGhlIHBsYXllciBjYW1lIGZyb20uXG4gICAqIFxuICAgKiBUaGlzIGhlbHBzIHlvdSBrbm93IHdoYXQgc2l0ZXMgYXJlIGxpbmtpbmcgdG8geW91ciBnYW1lLlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9XG4gICAqL1xuICByZWZlcnJpbmdMaW5rOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaW1lbnNpb25zIG9mIHRoZSBwbGF5ZXIncyBzY3JlZW4uXG4gICAqIFxuICAgKiBAcHJvcGVydHkge0RpbWVuc2lvbnN9XG4gICAqL1xuICBzY3JlZW46IERpbWVuc2lvbnM7XG5cbiAgLyoqXG4gICAqIFRoZSBkaW1lbnNpb25zIG9mIHRoZSBwbGF5ZXIncyB2aWV3cG9ydC5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7RGltZW5zaW9uc31cbiAgICovXG4gIHZpZXdwb3J0OiBEaW1lbnNpb25zO1xuXG4gIC8qKlxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHdoZW4gdGhlIHBsYXllciBsYW5kZWQgb24gdGhlIGdhbWUncyBwYWdlLlxuICAgKiBcbiAgICogQHByb3BlcnR5IHtEYXRlfVxuICAgKi9cbiAgY29ubmVjdGVkOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHdoZW4gdGhlIHBsYXllciBsZWZ0IHRoZSBnYW1lJ3MgcGFnZS5cbiAgICogXG4gICAqIEBwcm9wZXJ0eSB7RGF0ZX1cbiAgICovXG4gIGRpc2Nvbm5lY3RlZD86IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gY29ubmVjdGluZyBhbmQgZGlzY29ubmVjdGluZyBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFxuICAgKiBAcHJvcGVydHkge251bWJlcn1cbiAgICovXG4gIGVsYXBzZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhpcyBwbGF5ZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgdGhpcy5icm93c2VyID0gZ2V0QnJvd3NlckluZm8oKTtcblxuICAgIHRoaXMuaXNNb2JpbGUgPSBpc01vYmlsZSgpO1xuXG4gICAgdGhpcy5yZWZlcnJpbmdMaW5rID0gZG9jdW1lbnQucmVmZXJyZXI7XG5cbiAgICB0aGlzLnNjcmVlbiA9IHsgd2lkdGg6IHdpbmRvdy5zY3JlZW4ud2lkdGgsIGhlaWdodDogd2luZG93LnNjcmVlbi5oZWlnaHQgfTtcblxuICAgIHRoaXMudmlld3BvcnQgPSB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcblxuICAgIHRoaXMuY29ubmVjdGVkID0gbmV3IERhdGUoKTtcbiAgfVxufVxuIl19