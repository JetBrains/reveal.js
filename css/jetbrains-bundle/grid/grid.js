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

	__webpack_require__(64);

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(65);

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @name Grid
	 * @collection layout
	 * @description A responsive flexbox grid.
	 * <h3>Simple Syntax</h3>
	 * All you need to remember is <code>.g-row > .g-col > content</code>. <br />
	 * Content wrapper is <code>.g-container</code> (max-width is the variable <code>$container-max-width </code>) <br />
	 * <h3>Responsive</h3>
	 * Responsive modifiers enable specifying different column sizes, alignment
	 * and distribution at sm (small), md (medium), lg (large), xlg (extra large) viewport widths.
	 * <h3>Auto Width</h3>
	 * Remove any number of auto sizing columns to a row.
	 * @example-file ./examples.html
	*/

	__webpack_require__(66);


/***/ },

/***/ 66:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })
});
;