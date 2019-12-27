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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGF5ZXIvUGxheWVyLnRzIl0sIm5hbWVzIjpbIlBsYXllciIsImlkIiwiYnJvd3NlciIsImlzTW9iaWxlIiwicmVmZXJyaW5nTGluayIsImRvY3VtZW50IiwicmVmZXJyZXIiLCJzY3JlZW4iLCJ3aWR0aCIsIndpbmRvdyIsImhlaWdodCIsInZpZXdwb3J0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29ubmVjdGVkIiwiRGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFLQTs7Ozs7O0FBRUE7OztJQUdxQkEsTTtBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7O0FBT0E7Ozs7OztBQU9BOzs7Ozs7OztBQVNBOzs7Ozs7QUFPQTs7Ozs7O0FBT0E7Ozs7OztBQU9BOzs7Ozs7QUFPQTs7Ozs7O0FBT0E7OztBQUdBLGdCQUFZQyxFQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRXRCLE9BQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUVBLE9BQUtDLE9BQUwsR0FBZSw4QkFBZjtBQUVBLE9BQUtDLFFBQUwsR0FBZ0Isd0JBQWhCO0FBRUEsT0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxRQUE5QjtBQUVBLE9BQUtDLE1BQUwsR0FBYztBQUFFQyxJQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0YsTUFBUCxDQUFjQyxLQUF2QjtBQUE4QkUsSUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNGLE1BQVAsQ0FBY0c7QUFBcEQsR0FBZDtBQUVBLE9BQUtDLFFBQUwsR0FBZ0I7QUFBRUgsSUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNHLFVBQWhCO0FBQTRCRixJQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0k7QUFBM0MsR0FBaEI7QUFFQSxPQUFLQyxTQUFMLEdBQWlCLElBQUlDLElBQUosRUFBakI7QUFFRCxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgQnJvd3NlciBmcm9tICcuLi9pbnRlcmZhY2VzL0Jyb3dzZXInO1xyXG5pbXBvcnQgRGltZW5zaW9ucyBmcm9tICcuLi9pbnRlcmZhY2VzL0RpbWVuc2lvbnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0QnJvd3NlckluZm8sIGlzTW9iaWxlIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XHJcblxyXG4vKipcclxuICogVGhlIFBsYXllciBvYmplY3QgcmVwcmVzZW50cyBhbGwgb2YgdGhlIGRhdGEgdGhhdCBpcyByZWxhdGVkIHRvIHRoZSBjbGllbnQgY29ubmVjdGVkIHRvIHRoZSBnYW1lLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGlkIG9mIHRoaXMgcGxheWVyLlxyXG4gICAqIFxyXG4gICAqIElmIHRoZSBwbGF5ZXIgaXMgYSByZXR1cm5pbmcgcGxheWVyIHRoZSBpZCB3aWxsIGJlIHRoZSBzYW1lIGFzIGl0IHdhcyBsYXN0IHRpbWUgdGhleSBwbGF5ZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9O1xyXG4gICAqL1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIGFuZCB2ZXJzaW9uIG9mIHRoZSBicm93c2VyIHRoYXQgdGhlIHBsYXllciBpcyB1c2luZy5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0Jyb3dzZXJ9XHJcbiAgICovXHJcbiAgYnJvd3NlcjogQnJvd3NlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBwbGF5ZXIgaXMgdXNpbmcgYSBtb2JpbGUgZGV2aWNlIG9yIG5vdC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmV2aW91cyBVUkwgdGhhdCB0aGUgcGxheWVyIGNhbWUgZnJvbS5cclxuICAgKiBcclxuICAgKiBUaGlzIGhlbHBzIHlvdSBrbm93IHdoYXQgc2l0ZXMgYXJlIGxpbmtpbmcgdG8geW91ciBnYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHJlZmVycmluZ0xpbms6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHBsYXllcidzIHNjcmVlbi5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0RpbWVuc2lvbnN9XHJcbiAgICovXHJcbiAgc2NyZWVuOiBEaW1lbnNpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGltZW5zaW9ucyBvZiB0aGUgcGxheWVyJ3Mgdmlld3BvcnQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtEaW1lbnNpb25zfVxyXG4gICAqL1xyXG4gIHZpZXdwb3J0OiBEaW1lbnNpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHdoZW4gdGhlIHBsYXllciBsYW5kZWQgb24gdGhlIGdhbWUncyBwYWdlLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RGF0ZX1cclxuICAgKi9cclxuICBjb25uZWN0ZWQ6IERhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lc3RhbXAgb2Ygd2hlbiB0aGUgcGxheWVyIGxlZnQgdGhlIGdhbWUncyBwYWdlLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RGF0ZX1cclxuICAgKi9cclxuICBkaXNjb25uZWN0ZWQ/OiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIGNvbm5lY3RpbmcgYW5kIGRpc2Nvbm5lY3RpbmcgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGVsYXBzZWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhpcyBwbGF5ZXIuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICB0aGlzLmJyb3dzZXIgPSBnZXRCcm93c2VySW5mbygpO1xyXG5cclxuICAgIHRoaXMuaXNNb2JpbGUgPSBpc01vYmlsZSgpO1xyXG5cclxuICAgIHRoaXMucmVmZXJyaW5nTGluayA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG5cclxuICAgIHRoaXMuc2NyZWVuID0geyB3aWR0aDogd2luZG93LnNjcmVlbi53aWR0aCwgaGVpZ2h0OiB3aW5kb3cuc2NyZWVuLmhlaWdodCB9O1xyXG5cclxuICAgIHRoaXMudmlld3BvcnQgPSB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcclxuXHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIH1cclxuXHJcbn0iXX0=