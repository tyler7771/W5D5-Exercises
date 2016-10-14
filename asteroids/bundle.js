/******/ (function(modules) { // webpackBootstrap
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

	const Asteroid = __webpack_require__ (1);
	const Bullet = __webpack_require__ (2);
	const GameView = __webpack_require__ (3);
	const Game = __webpack_require__ (4);
	const MovingObject = __webpack_require__ (5);
	const Ship = __webpack_require__ (6);
	const Utils = __webpack_require__ (7);

	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.height = window.innerHeight;
	canvasEl.width = window.innerWidth;
	const context = canvasEl.getContext("2d");
	// new Game(
	//   canvasEl.width,
	//   canvasEl.height
	// ).start(canvasEl);

	const mover = new MovingObject({pos: [10,10], vel: [1,1], radius: 20, color: "#66ff33"});

	window.mover = mover;
	mover.draw(context);


/***/ },
/* 1 */
/***/ function(module, exports) {

	const Asteroid = function() {};
	module.exports = Asteroid;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const Bullet = function() {};
	module.exports = Bullet;


/***/ },
/* 3 */
/***/ function(module, exports) {

	const GameView = function() {};
	module.exports = GameView;


/***/ },
/* 4 */
/***/ function(module, exports) {

	const Game = function() {};
	module.exports = Game;


/***/ },
/* 5 */
/***/ function(module, exports) {

	const MovingObject = function(optionsHash) {
	  this.pos = optionsHash.pos;
	  this.vel = optionsHash.vel;
	  this.radius = optionsHash.radius;
	  this.color = optionsHash.color;
	};

	MovingObject.prototype.draw = function (context) {
	  let x = this.pos[0];
	  let y = this.pos[1];

	  context.fillStyle = this.color;
	  context.beginPath();

	  context.arc(
	    x,
	    y,
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );

	  context.fill();
	};

	MovingObject.prototype.move = function () {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	}
	module.exports = MovingObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	const Ship = function() {};
	module.exports = Ship;


/***/ },
/* 7 */
/***/ function(module, exports) {

	const Utils = {
	  inherits (childClass, parentClass) {

	  }
	};


	module.exports = Utils;


/***/ }
/******/ ]);