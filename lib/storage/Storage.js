'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A thin layer around localStorage to make it easier for PlayInfo to work with.
 */
var Storage =
/*#__PURE__*/
function () {
  /**
   * A reference to the persistent data that gets saved to the localStorage.
   * 
   * @property {PersistentData}
   */
  function Storage() {
    _classCallCheck(this, Storage);

    _defineProperty(this, "persistentData", {});

    var storageExists = localStorage.getItem('playerinfo');
    if (!storageExists) this.save();
  }
  /**
   * Loads the latest persistent data from the localStorage.
   */


  _createClass(Storage, [{
    key: "load",
    value: function load() {
      this.persistentData = JSON.parse(window.localStorage.getItem('playerinfo'));
    }
    /**
     * Saves the persistent data to the localStorage.
     */

  }, {
    key: "save",
    value: function save() {
      window.localStorage.setItem('playerinfo', JSON.stringify(this.persistentData));
    }
  }]);

  return Storage;
}();

exports["default"] = Storage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yYWdlL1N0b3JhZ2UudHMiXSwibmFtZXMiOlsiU3RvcmFnZSIsInN0b3JhZ2VFeGlzdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZSIsInBlcnNpc3RlbnREYXRhIiwiSlNPTiIsInBhcnNlIiwid2luZG93Iiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLE87OztBQUVuQjs7Ozs7QUFPQSxxQkFBYztBQUFBOztBQUFBLDRDQUZtQixFQUVuQjs7QUFFWixRQUFNQyxhQUE4QixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBdkM7QUFFQSxRQUFJLENBQUNGLGFBQUwsRUFBb0IsS0FBS0csSUFBTDtBQUVyQjtBQUVEOzs7Ozs7OzJCQUdPO0FBRUwsV0FBS0MsY0FBTCxHQUFzQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ04sWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBWCxDQUF0QjtBQUVEO0FBRUQ7Ozs7OzsyQkFHTztBQUVMSyxNQUFBQSxNQUFNLENBQUNOLFlBQVAsQ0FBb0JPLE9BQXBCLENBQTRCLFlBQTVCLEVBQTBDSCxJQUFJLENBQUNJLFNBQUwsQ0FBZSxLQUFLTCxjQUFwQixDQUExQztBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgUGVyc2lzdGVudERhdGEgZnJvbSAnLi4vaW50ZXJmYWNlcy9QZXJzaXN0ZW50RGF0YSc7XHJcblxyXG4vKipcclxuICogQSB0aGluIGxheWVyIGFyb3VuZCBsb2NhbFN0b3JhZ2UgdG8gbWFrZSBpdCBlYXNpZXIgZm9yIFBsYXlJbmZvIHRvIHdvcmsgd2l0aC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xyXG5cclxuICAvKipcclxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgcGVyc2lzdGVudCBkYXRhIHRoYXQgZ2V0cyBzYXZlZCB0byB0aGUgbG9jYWxTdG9yYWdlLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7UGVyc2lzdGVudERhdGF9XHJcbiAgICovXHJcbiAgcGVyc2lzdGVudERhdGE6IFBlcnNpc3RlbnREYXRhID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIGNvbnN0IHN0b3JhZ2VFeGlzdHM6IChzdHJpbmcgfCBudWxsKSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJpbmZvJyk7XHJcblxyXG4gICAgaWYgKCFzdG9yYWdlRXhpc3RzKSB0aGlzLnNhdmUoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgbGF0ZXN0IHBlcnNpc3RlbnQgZGF0YSBmcm9tIHRoZSBsb2NhbFN0b3JhZ2UuXHJcbiAgICovXHJcbiAgbG9hZCgpIHtcclxuXHJcbiAgICB0aGlzLnBlcnNpc3RlbnREYXRhID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcmluZm8nKSEpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmVzIHRoZSBwZXJzaXN0ZW50IGRhdGEgdG8gdGhlIGxvY2FsU3RvcmFnZS5cclxuICAgKi9cclxuICBzYXZlKCkge1xyXG5cclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGxheWVyaW5mbycsIEpTT04uc3RyaW5naWZ5KHRoaXMucGVyc2lzdGVudERhdGEpKTtcclxuXHJcbiAgfVxyXG5cclxufSJdfQ==