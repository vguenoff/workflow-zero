/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _LazyImage = __webpack_require__(1);\n\nvar _LazyImage2 = _interopRequireDefault(_LazyImage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _LazyImage2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz83YzBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF6eUltYWdlIGZyb20gJy4vTGF6eUltYWdlJztcclxuXHJcbkxhenlJbWFnZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n  var lazyLoadedImages = Array.from(document.querySelectorAll('img[data-src]'));\n\n  lazyLoadedImages.forEach(function (img) {\n    img.setAttribute('src', img.getAttribute('data-src'));\n    img.onload = function () {\n      return img.removeAttribute('data-src');\n    };\n  });\n\n  // array spread test\n  var a = [1, 2, 3];\n  var b = [1, 2, 3];\n  var c = [].concat(a, b);\n\n  console.log(c);\n\n  // object spread test\n  var d = {\n    a: 'a',\n    b: 'b'\n  };\n  var e = _extends({}, d, {\n    e: 'e'\n  });\n\n  console.log(e);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9MYXp5SW1hZ2UuanM/NzU4MiJdLCJuYW1lcyI6WyJsYXp5TG9hZGVkSW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImltZyIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsInJlbW92ZUF0dHJpYnV0ZSIsImEiLCJiIiwiYyIsImNvbnNvbGUiLCJsb2ciLCJkIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBQWUsWUFBTTtBQUNuQixNQUFNQSxtQkFBbUJDLE1BQU1DLElBQU4sQ0FBV0MsU0FBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBWCxDQUF6Qjs7QUFFQUosbUJBQWlCSyxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQVM7QUFDaENBLFFBQUlDLFlBQUosQ0FBaUIsS0FBakIsRUFBd0JELElBQUlFLFlBQUosQ0FBaUIsVUFBakIsQ0FBeEI7QUFDQUYsUUFBSUcsTUFBSixHQUFhO0FBQUEsYUFBTUgsSUFBSUksZUFBSixDQUFvQixVQUFwQixDQUFOO0FBQUEsS0FBYjtBQUNELEdBSEQ7O0FBS0E7QUFDQSxNQUFNQyxJQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVY7QUFDQSxNQUFNQyxJQUFJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVY7QUFDQSxNQUFNQyxjQUFRRixDQUFSLEVBQWNDLENBQWQsQ0FBTjs7QUFFQUUsVUFBUUMsR0FBUixDQUFZRixDQUFaOztBQUVBO0FBQ0EsTUFBTUcsSUFBSTtBQUNSTCxPQUFHLEdBREs7QUFFUkMsT0FBRztBQUZLLEdBQVY7QUFJQSxNQUFNSyxpQkFDREQsQ0FEQztBQUVKQyxPQUFHO0FBRkMsSUFBTjs7QUFLQUgsVUFBUUMsR0FBUixDQUFZRSxDQUFaO0FBQ0QsQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IGxhenlMb2FkZWRJbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKSk7XHJcblxyXG4gIGxhenlMb2FkZWRJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiBpbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBhcnJheSBzcHJlYWQgdGVzdFxyXG4gIGNvbnN0IGEgPSBbMSwgMiwgM107XHJcbiAgY29uc3QgYiA9IFsxLCAyLCAzXTtcclxuICBjb25zdCBjID0gWy4uLmEsIC4uLmJdO1xyXG5cclxuICBjb25zb2xlLmxvZyhjKTtcclxuXHJcbiAgLy8gb2JqZWN0IHNwcmVhZCB0ZXN0XHJcbiAgY29uc3QgZCA9IHtcclxuICAgIGE6ICdhJyxcclxuICAgIGI6ICdiJyxcclxuICB9O1xyXG4gIGNvbnN0IGUgPSB7XHJcbiAgICAuLi5kLFxyXG4gICAgZTogJ2UnLFxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGUpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9MYXp5SW1hZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);