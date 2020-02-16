function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Gets the name and version of the browser that the website visitor is using.
 * 
 * @returns {BrowserInfo}
 */
function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserInfo = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
  return {
    name: browserInfo[1],
    version: browserInfo[2]
  };
}
/**
 * Checks to see if the user is viewing the page on a mobile device or not.
 * 
 * @returns {boolean}
 */

function isMobile() {
  return window.matchMedia('only screen and (max-width: 760px)').matches;
}

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
  this.browser = getBrowserInfo();
  this.isMobile = isMobile();
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

/**
 * Generates a v4 compliant uuid.
 * 
 * @returns {string}
 */

function uuidv4() {
  var d = Date.now();
  d += performance.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass$1;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

var Task =
/*#__PURE__*/
function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
    * @private
    * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
    * 
    * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
    * 
    * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    classCallCheck(this, Task);

    defineProperty(this, "fn", void 0);

    defineProperty(this, "_once", void 0);

    defineProperty(this, "_delete", false);

    defineProperty(this, "_timesCalled", 0);

    defineProperty(this, "paused", false);

    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  createClass(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);

  return Task;
}();

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 */

var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    classCallCheck(this, Hypergiant);

    defineProperty(this, "_tasks", new Set());
  }

  createClass(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._tasks.add(new Task(fn, once));

      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Removes a task from this signal by name.
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
    /**
     * Removes all tasks from this signal.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this._tasks.clear();

      return this;
    }
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this;
    }
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Set<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.size;
    }
  }]);

  return Hypergiant;
}();

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

    _defineProperty(this, "_storage", new Storage());

    _defineProperty(this, "_player", void 0);

    _defineProperty(this, "_onConnect", new Hypergiant());

    _defineProperty(this, "_onDisconnect", new Hypergiant());

    this._storage.load();

    if (!this._storage.persistentData.id) {
      this._player = new Player(uuidv4());
      this._storage.persistentData.id = this._player.id;
    } else {
      this._player = new Player(this._storage.persistentData.id);
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

export default PlayerInfo;
