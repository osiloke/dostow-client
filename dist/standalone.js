(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_dostow"] = factory();
	else
		root["_dostow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// this is the entry point for your library
	exports.default = {
	  changes: __webpack_require__(1)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// BitMonster = require('./bitmonster/lib/BitMonster.js')

	var Changes = (function () {
	  function Changes(key, dostow_host) {
	    _classCallCheck(this, Changes);

	    this._dostow_host = dostow_host;
	    this._key = key;
	    this._bm = new BitMonster(this._dostow_host);
	    this._store = this._bm.module("store");
	    this._callbacks = {};
	    this._fails = {};
	    this._on_change = this._on_change.bind(this);
	    this._store.on("onRowChanged", this._on_change);
	  }

	  _createClass(Changes, [{
	    key: "_on_change",
	    value: function _on_change(data) {
	      var fn = this._callbacks[data.store];
	      if (fn) {
	        fn(data.new);
	      }
	    }
	    // _addListener

	  }, {
	    key: "watch",
	    value: function watch(store, filter, success, failed) {
	      self = this;
	      if (this._callbacks[store] || this._fails[store]) {
	        failed("store listener already exists");
	        return;
	      }
	      this._callbacks[store] = success;
	      this._fails[store] = failed;
	      console.log(this._callbacks);
	      this._store.call("changes", {
	        Store: store,
	        Key: this._key,
	        Filter: filter
	      }, function (data) {
	        success(data);
	      }, function (err) {
	        failed(err);
	      });
	    }
	  }, {
	    key: "stop",
	    value: function stop(store) {
	      delete this._callbacks[store];
	      delete this._fails[store];
	    }
	  }]);

	  return Changes;
	})();

	exports.default = Changes;

/***/ }
/******/ ])
});
;