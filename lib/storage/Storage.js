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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yYWdlL1N0b3JhZ2UudHMiXSwibmFtZXMiOlsiU3RvcmFnZSIsInN0b3JhZ2VFeGlzdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZSIsInBlcnNpc3RlbnREYXRhIiwiSlNPTiIsInBhcnNlIiwid2luZG93Iiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7SUFHcUJBLE87OztBQUNuQjs7Ozs7QUFPQSxxQkFBYztBQUFBOztBQUFBLDRDQUZtQixFQUVuQjs7QUFDWixRQUFNQyxhQUE4QixHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBdkM7QUFFQSxRQUFJLENBQUNGLGFBQUwsRUFBb0IsS0FBS0csSUFBTDtBQUNyQjtBQUVEOzs7Ozs7OzJCQUdPO0FBQ0wsV0FBS0MsY0FBTCxHQUFzQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ04sWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBWCxDQUF0QjtBQUNEO0FBRUQ7Ozs7OzsyQkFHTztBQUNMSyxNQUFBQSxNQUFNLENBQUNOLFlBQVAsQ0FBb0JPLE9BQXBCLENBQTRCLFlBQTVCLEVBQTBDSCxJQUFJLENBQUNJLFNBQUwsQ0FBZSxLQUFLTCxjQUFwQixDQUExQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBQZXJzaXN0ZW50RGF0YSBmcm9tICcuLi9pbnRlcmZhY2VzL1BlcnNpc3RlbnREYXRhJztcblxuLyoqXG4gKiBBIHRoaW4gbGF5ZXIgYXJvdW5kIGxvY2FsU3RvcmFnZSB0byBtYWtlIGl0IGVhc2llciBmb3IgUGxheUluZm8gdG8gd29yayB3aXRoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBwZXJzaXN0ZW50IGRhdGEgdGhhdCBnZXRzIHNhdmVkIHRvIHRoZSBsb2NhbFN0b3JhZ2UuXG4gICAqIFxuICAgKiBAcHJvcGVydHkge1BlcnNpc3RlbnREYXRhfVxuICAgKi9cbiAgcGVyc2lzdGVudERhdGE6IFBlcnNpc3RlbnREYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RvcmFnZUV4aXN0czogKHN0cmluZyB8IG51bGwpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcmluZm8nKTtcblxuICAgIGlmICghc3RvcmFnZUV4aXN0cykgdGhpcy5zYXZlKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGxhdGVzdCBwZXJzaXN0ZW50IGRhdGEgZnJvbSB0aGUgbG9jYWxTdG9yYWdlLlxuICAgKi9cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnBlcnNpc3RlbnREYXRhID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllcmluZm8nKSEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwZXJzaXN0ZW50IGRhdGEgdG8gdGhlIGxvY2FsU3RvcmFnZS5cbiAgICovXG4gIHNhdmUoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJzaXN0ZW50RGF0YSkpO1xuICB9XG59XG4iXX0=