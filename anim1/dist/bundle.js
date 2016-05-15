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
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// configuration

	var conf = {
	  colors: ['lightgrey', 'lightgreen', 'lightblue', 'lightyellow', 'lightpink', 'lightorange', 'lightsalmon', 'red', 'aqua', 'cyan', 'coral', 'crimson'],
	  easings: ['ease', 'ease-in-out', 'ease-in', 'ease-out', 'linear'],
	  nbBalls: 5,
	  maxDuration: 8
	};

	console.log('qsdqsdqsd');

	// DOM elements
	var main = document.querySelector('#main');
	var template = document.querySelector('#ball-template').content;

	var Ball = function () {
	  function Ball() {
	    _classCallCheck(this, Ball);

	    this.color = _.sample(conf.colors);
	    this.top = Ball.lastTop += 120;
	    // this.duration = rand();
	    this.duration = _.random(1000, conf.maxDuration * 1000);
	    console.log('duration', this.duration);
	    var newBall = template.cloneNode(true);
	    var divInTemplate = newBall.querySelector('div');
	    divInTemplate.style['background-color'] = this.color;
	    divInTemplate.style['top'] = this.top + 'px';
	    divInTemplate.style.transition = 'transform ' + this.duration + 'ms ' + _.sample(conf.easings);
	    this.DOMElement = divInTemplate;
	  }

	  _createClass(Ball, [{
	    key: 'launchInterval',
	    value: function launchInterval() {
	      var ball = this;
	      setInterval(function () {
	        ball.DOMElement.classList.toggle('anim');
	      }, ball.duration);
	    }
	  }]);

	  return Ball;
	}();

	// propriété statique de la classe Ball


	Ball.lastTop = -120;

	var balls = [];

	for (var i = 0; i < conf.nbBalls; i++) {
	  balls.push(new Ball());
	}

	balls.forEach(function (ball) {
	  main.appendChild(ball.DOMElement);
	});
	var divs = document.querySelectorAll('.balle');

	balls.forEach(function (ball) {
	  ball.launchInterval();
	});

/***/ }
/******/ ]);