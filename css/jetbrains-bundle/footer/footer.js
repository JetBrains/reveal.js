(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(54);


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @name Footer
	 * @collection Layout
	 * @example-file ./examples.html
	*/

	/**
	 * Dependencies
	 */
	__webpack_require__(55);

	document.addEventListener("DOMContentLoaded", updateCopyrightYear, false);

	function updateCopyrightYear () {
	  var copyYearBlock = document.querySelectorAll(".js-footer-current-year");
	  var fullYear = new Date().getFullYear();

	  var i = copyYearBlock.length;
	  while (i--) {
	    copyYearBlock[i].innerHTML = fullYear;
	  }
	}


/***/ },

/***/ 55:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;