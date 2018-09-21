(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/VideoAnnotationDemo.js":
/*!*******************************************!*\
  !*** ./components/VideoAnnotationDemo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-annotation-tool */ "./node_modules/react-annotation-tool/dist/bundle.js");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/home/production/chi-lin/components/VideoAnnotationDemo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Demo =
/*#__PURE__*/
function (_Component) {
  _inherits(Demo, _Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Demo).call(this, props));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "display-4  text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Video Tool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Coming soon")));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash.isfunction/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash.isfunction/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isobject/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash.tonumber/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.tonumber/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.4
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-annotation-tool/dist/bundle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-annotation-tool/dist/bundle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=121)}([function(t,e,n){t.exports=n(111)()},function(t,e,n){"use strict";t.exports=n(119)},function(t,e,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,i=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(i[s]=n[s]);if(r){c=r(n);for(var h=0;h<c.length;h++)o.call(n,c[h])&&(i[c[h]]=n[c[h]])}}return i}},function(t,e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,i=Object.prototype.toString;function l(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==i.call(t)}(t))return NaN;if(l(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=l(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var s=a.test(t);return s||o.test(t)?c(t.slice(2),s?2:8):r.test(t)?NaN:+t}},function(t,e,n){"use strict";(function(t){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/** @license React v16.5.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t.exports=function e(r){"use strict";var a=n(26),o=n(1);function c(t){for(var e=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(t,e,n,r,a,o,c,i){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,void 0,void 0,void 0,void 0,void 0],s=0;(t=Error(e.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,l="function"==typeof Symbol&&Symbol.for,s=l?Symbol.for("react.element"):60103,h=l?Symbol.for("react.portal"):60106,d=l?Symbol.for("react.fragment"):60107,u=l?Symbol.for("react.strict_mode"):60108,v=l?Symbol.for("react.profiler"):60114,p=l?Symbol.for("react.provider"):60109,g=l?Symbol.for("react.context"):60110,f=l?Symbol.for("react.async_mode"):60111,m=l?Symbol.for("react.forward_ref"):60112,z=l?Symbol.for("react.placeholder"):60113,x="function"==typeof Symbol&&Symbol.iterator;function M(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=x&&t[x]||t["@@iterator"])?t:null}function b(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case f:return"AsyncMode";case d:return"Fragment";case h:return"Portal";case v:return"Profiler";case u:return"StrictMode";case z:return"Placeholder"}if("object"==typeof t){switch(t.$$typeof){case g:return"Context.Consumer";case p:return"Context.Provider";case m:return""!==(t=(t=t.render).displayName||t.name||"")?"ForwardRef("+t+")":"ForwardRef"}if("function"==typeof t.then&&(t=1===t._reactStatus?t._reactResult:null))return b(t)}return null}function w(t){var e=t;if(t.alternate)for(;e.return;)e=e.return;else{if(0!=(2&e.effectTag))return 1;for(;e.return;)if(0!=(2&(e=e.return).effectTag))return 1}return 5===e.tag?2:3}function y(t){2!==w(t)&&c("188")}function H(t){var e=t.alternate;if(!e)return 3===(e=w(t))&&c("188"),1===e?null:t;for(var n=t,r=e;;){var a=n.return,o=a?a.alternate:null;if(!a||!o)break;if(a.child===o.child){for(var i=a.child;i;){if(i===n)return y(a),t;if(i===r)return y(a),e;i=i.sibling}c("188")}if(n.return!==r.return)n=a,r=o;else{i=!1;for(var l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}i||c("189")}}n.alternate!==r&&c("190")}return 5!==n.tag&&c("188"),n.stateNode.current===n?t:e}function C(t){if(!(t=H(t)))return null;for(var e=t;;){if(7===e.tag||8===e.tag)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}var V=r.getPublicInstance,L=r.getRootHostContext,B=r.getChildHostContext,k=r.prepareForCommit,S=r.resetAfterCommit,_=r.createInstance,T=r.appendInitialChild,F=r.finalizeInitialChildren,P=r.prepareUpdate,E=r.shouldSetTextContent,I=r.shouldDeprioritizeSubtree,O=r.createTextInstance,N=r.scheduleDeferredCallback,A=r.cancelDeferredCallback,R=r.noTimeout,D=r.now,j=r.isPrimaryRenderer,K=r.supportsMutation,U=r.supportsPersistence,G=r.supportsHydration,W=r.appendChild,q=r.appendChildToContainer,Y=r.commitTextUpdate,X=r.commitMount,Q=r.commitUpdate,$=r.insertBefore,J=r.insertInContainerBefore,Z=r.removeChild,tt=r.removeChildFromContainer,et=r.resetTextContent,nt=r.cloneInstance,rt=r.createContainerChildSet,at=r.appendChildToContainerChildSet,ot=r.finalizeContainerChildren,ct=r.replaceContainerChildren,it=r.canHydrateInstance,lt=r.canHydrateTextInstance,st=r.getNextHydratableSibling,ht=r.getFirstHydratableChild,dt=r.hydrateInstance,ut=r.hydrateTextInstance,vt=/^(.*)[\\\/]/;function pt(t){var e="";do{t:switch(t.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var n=t._debugOwner,r=t._debugSource,a=b(t.type),o=null;n&&(o=b(n.type)),n=a,a="",r?a=" (at "+r.fileName.replace(vt,"")+":"+r.lineNumber+")":o&&(a=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+a;break t;default:o=""}e+=o,t=t.return}while(t);return e}new Set;var gt=[],ft=-1;function mt(t){0>ft||(t.current=gt[ft],gt[ft]=null,ft--)}function zt(t,e){gt[++ft]=t.current,t.current=e}var xt={},Mt={current:xt},bt={current:!1},wt=xt;function yt(t,e){var n=t.type.contextTypes;if(!n)return xt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=e[a];return r&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Ht(t){return null!==(t=t.childContextTypes)&&void 0!==t}function Ct(t){mt(bt),mt(Mt)}function Vt(t){mt(bt),mt(Mt)}function Lt(t,e,n){Mt.current!==xt&&c("168"),zt(Mt,e),zt(bt,n)}function Bt(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())o in t||c("108",b(e)||"Unknown",o);return a({},n,r)}function kt(t){var e=t.stateNode;return e=e&&e.__reactInternalMemoizedMergedChildContext||xt,wt=Mt.current,zt(Mt,e),zt(bt,bt.current),!0}function St(t,e,n){var r=t.stateNode;r||c("169"),n?(e=Bt(t,e,wt),r.__reactInternalMemoizedMergedChildContext=e,mt(bt),mt(Mt),zt(Mt,e)):mt(bt),zt(bt,n)}var _t=null,Tt=null;function Ft(t){return function(e){try{return t(e)}catch(t){}}}function Pt(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=null,this.index=0,this.ref=null,this.pendingProps=e,this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Et(t){return"object"==typeof(t=t.prototype)&&null!==t&&"object"==typeof t.isReactComponent&&null!==t.isReactComponent}function It(t,e,n){var r=t.alternate;return null===r?((r=new Pt(t.tag,e,t.key,t.mode)).type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childExpirationTime=t.childExpirationTime,r.expirationTime=e!==t.pendingProps?n:t.expirationTime,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,r.firstContextDependency=t.firstContextDependency,r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ot(t,e,n){var r=t.type,a=t.key;t=t.props;var o=void 0;if("function"==typeof r)o=Et(r)?2:4;else if("string"==typeof r)o=7;else t:switch(r){case d:return Nt(t.children,e,n,a);case f:o=10,e|=3;break;case u:o=10,e|=2;break;case v:return(r=new Pt(15,t,a,4|e)).type=v,r.expirationTime=n,r;case z:o=16;break;default:if("object"==typeof r&&null!==r)switch(r.$$typeof){case p:o=12;break t;case g:o=11;break t;case m:o=13;break t;default:if("function"==typeof r.then){o=4;break t}}c("130",null==r?r:typeof r,"")}return(e=new Pt(o,t,a,e)).type=r,e.expirationTime=n,e}function Nt(t,e,n,r){return(t=new Pt(9,t,r,e)).expirationTime=n,t}function At(t,e,n){return(t=new Pt(8,t,null,e)).expirationTime=n,t}function Rt(t,e,n){return(e=new Pt(6,null!==t.children?t.children:[],t.key,e)).expirationTime=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dt(t,e){t.didError=!1;var n=t.earliestPendingTime;0===n?t.earliestPendingTime=t.latestPendingTime=e:n>e?t.earliestPendingTime=e:t.latestPendingTime<e&&(t.latestPendingTime=e),jt(e,t)}function jt(t,e){var n=e.earliestSuspendedTime,r=e.latestSuspendedTime,a=e.earliestPendingTime,o=e.latestPingedTime;0===(a=0!==a?a:o)&&(0===t||r>t)&&(a=r),0!==(t=a)&&0!==n&&n<t&&(t=n),e.nextExpirationTimeToWorkOn=a,e.expirationTime=t}var Kt=!1;function Ut(t){return{baseState:t,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Gt(t){return{baseState:t.baseState,firstUpdate:t.firstUpdate,lastUpdate:t.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Wt(t){return{expirationTime:t,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function qt(t,e){null===t.lastUpdate?t.firstUpdate=t.lastUpdate=e:(t.lastUpdate.next=e,t.lastUpdate=e)}function Yt(t,e){var n=t.alternate;if(null===n){var r=t.updateQueue,a=null;null===r&&(r=t.updateQueue=Ut(t.memoizedState))}else r=t.updateQueue,a=n.updateQueue,null===r?null===a?(r=t.updateQueue=Ut(t.memoizedState),a=n.updateQueue=Ut(n.memoizedState)):r=t.updateQueue=Gt(a):null===a&&(a=n.updateQueue=Gt(r));null===a||r===a?qt(r,e):null===r.lastUpdate||null===a.lastUpdate?(qt(r,e),qt(a,e)):(qt(r,e),a.lastUpdate=e)}function Xt(t,e){var n=t.updateQueue;null===(n=null===n?t.updateQueue=Ut(t.memoizedState):Qt(t,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=e:(n.lastCapturedUpdate.next=e,n.lastCapturedUpdate=e)}function Qt(t,e){var n=t.alternate;return null!==n&&e===n.updateQueue&&(e=t.updateQueue=Gt(e)),e}function $t(t,e,n,r,o,c){switch(n.tag){case 1:return"function"==typeof(t=n.payload)?t.call(c,r,o):t;case 3:t.effectTag=-1025&t.effectTag|64;case 0:if(null===(o="function"==typeof(t=n.payload)?t.call(c,r,o):t)||void 0===o)break;return a({},r,o);case 2:Kt=!0}return r}function Jt(t,e,n,r,a){Kt=!1;for(var o=(e=Qt(t,e)).baseState,c=null,i=0,l=e.firstUpdate,s=o;null!==l;){var h=l.expirationTime;h>a?(null===c&&(c=l,o=s),(0===i||i>h)&&(i=h)):(s=$t(t,0,l,s,n,r),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastEffect?e.firstEffect=e.lastEffect=l:(e.lastEffect.nextEffect=l,e.lastEffect=l))),l=l.next}for(h=null,l=e.firstCapturedUpdate;null!==l;){var d=l.expirationTime;d>a?(null===h&&(h=l,null===c&&(o=s)),(0===i||i>d)&&(i=d)):(s=$t(t,0,l,s,n,r),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastCapturedEffect?e.firstCapturedEffect=e.lastCapturedEffect=l:(e.lastCapturedEffect.nextEffect=l,e.lastCapturedEffect=l))),l=l.next}null===c&&(e.lastUpdate=null),null===h?e.lastCapturedUpdate=null:t.effectTag|=32,null===c&&null===h&&(o=s),e.baseState=o,e.firstUpdate=c,e.firstCapturedUpdate=h,t.expirationTime=i,t.memoizedState=s}function Zt(t,e,n){null!==e.firstCapturedUpdate&&(null!==e.lastUpdate&&(e.lastUpdate.next=e.firstCapturedUpdate,e.lastUpdate=e.lastCapturedUpdate),e.firstCapturedUpdate=e.lastCapturedUpdate=null),te(e.firstEffect,n),e.firstEffect=e.lastEffect=null,te(e.firstCapturedEffect,n),e.firstCapturedEffect=e.lastCapturedEffect=null}function te(t,e){for(;null!==t;){var n=t.callback;if(null!==n){t.callback=null;var r=e;"function"!=typeof n&&c("191",n),n.call(r)}t=t.nextEffect}}function ee(t,e){return{value:t,source:e,stack:pt(e)}}var ne={current:null},re=null,ae=null,oe=null;function ce(t,e){var n=t.type._context;j?(zt(ne,n._currentValue),n._currentValue=e):(zt(ne,n._currentValue2),n._currentValue2=e)}function ie(t){var e=ne.current;mt(ne),t=t.type._context,j?t._currentValue=e:t._currentValue2=e}function le(t){re=t,oe=ae=null,t.firstContextDependency=null}function se(t,e){return oe!==t&&!1!==e&&0!==e&&("number"==typeof e&&1073741823!==e||(oe=t,e=1073741823),e={context:t,observedBits:e,next:null},null===ae?(null===re&&c("277"),re.firstContextDependency=ae=e):ae=ae.next=e),j?t._currentValue:t._currentValue2}var he={},de={current:he},ue={current:he},ve={current:he};function pe(t){return t===he&&c("174"),t}function ge(t,e){zt(ve,e),zt(ue,t),zt(de,he),e=L(e),mt(de),zt(de,e)}function fe(t){mt(de),mt(ue),mt(ve)}function me(t){var e=pe(ve.current),n=pe(de.current);n!==(e=B(n,t.type,e))&&(zt(ue,t),zt(de,e))}function ze(t){ue.current===t&&(mt(de),mt(ue))}var xe=Object.prototype.hasOwnProperty;function Me(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function be(t,e){if(Me(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!xe.call(e,n[r])||!Me(t[n[r]],e[n[r]]))return!1;return!0}var we=(new o.Component).refs;function ye(t,e,n,r){n=null===(n=n(r,e=t.memoizedState))||void 0===n?e:a({},e,n),t.memoizedState=n,null!==(r=t.updateQueue)&&0===t.expirationTime&&(r.baseState=n)}var He={isMounted:function(t){return!!(t=t._reactInternalFiber)&&2===w(t)},enqueueSetState:function(t,e,n){t=t._reactInternalFiber;var r=ir(),a=Wt(r=Fn(r,t));a.payload=e,void 0!==n&&null!==n&&(a.callback=n),Yt(t,a),Pn(t,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternalFiber;var r=ir(),a=Wt(r=Fn(r,t));a.tag=1,a.payload=e,void 0!==n&&null!==n&&(a.callback=n),Yt(t,a),Pn(t,r)},enqueueForceUpdate:function(t,e){t=t._reactInternalFiber;var n=ir(),r=Wt(n=Fn(n,t));r.tag=2,void 0!==e&&null!==e&&(r.callback=e),Yt(t,r),Pn(t,n)}};function Ce(t,e,n,r,a,o,c){return"function"==typeof(t=t.stateNode).shouldComponentUpdate?t.shouldComponentUpdate(r,o,c):!(e.prototype&&e.prototype.isPureReactComponent&&be(n,r)&&be(a,o))}function Ve(t,e,n,r){t=e.state,"function"==typeof e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),"function"==typeof e.UNSAFE_componentWillReceiveProps&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&He.enqueueReplaceState(e,e.state,null)}function Le(t,e,n,r){var a=t.stateNode,o=Ht(e)?wt:Mt.current;a.props=n,a.state=t.memoizedState,a.refs=we,a.context=yt(t,o),null!==(o=t.updateQueue)&&(Jt(t,o,n,a,r),a.state=t.memoizedState),"function"==typeof(o=e.getDerivedStateFromProps)&&(ye(t,e,o,n),a.state=t.memoizedState),"function"==typeof e.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(e=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),e!==a.state&&He.enqueueReplaceState(a,a.state,null),null!==(o=t.updateQueue)&&(Jt(t,o,n,a,r),a.state=t.memoizedState)),"function"==typeof a.componentDidMount&&(t.effectTag|=4)}var Be=Array.isArray;function ke(t,e,n){if(null!==(t=n.ref)&&"function"!=typeof t&&"object"!=typeof t){if(n._owner){var r=void 0;(n=n._owner)&&(2!==n.tag&&3!==n.tag&&c("110"),r=n.stateNode),r||c("147",t);var a=""+t;return null!==e&&null!==e.ref&&"function"==typeof e.ref&&e.ref._stringRef===a?e.ref:((e=function(t){var e=r.refs;e===we&&(e=r.refs={}),null===t?delete e[a]:e[a]=t})._stringRef=a,e)}"string"!=typeof t&&c("284"),n._owner||c("254",t)}return t}function Se(t,e){"textarea"!==t.type&&c("31","[object Object]"===Object.prototype.toString.call(e)?"object with keys {"+Object.keys(e).join(", ")+"}":e,"")}function _e(t){function e(e,n){if(t){var r=e.lastEffect;null!==r?(r.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!t)return null;for(;null!==r;)e(n,r),r=r.sibling;return null}function r(t,e){for(t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(t,e,n){return(t=It(t,e,n)).index=0,t.sibling=null,t}function o(e,n,r){return e.index=r,t?null!==(r=e.alternate)?(r=r.index)<n?(e.effectTag=2,n):r:(e.effectTag=2,n):n}function i(e){return t&&null===e.alternate&&(e.effectTag=2),e}function l(t,e,n,r){return null===e||8!==e.tag?((e=At(n,t.mode,r)).return=t,e):((e=a(e,n,r)).return=t,e)}function u(t,e,n,r){return null!==e&&e.type===n.type?((r=a(e,n.props,r)).ref=ke(t,e,n),r.return=t,r):((r=Ot(n,t.mode,r)).ref=ke(t,e,n),r.return=t,r)}function v(t,e,n,r){return null===e||6!==e.tag||e.stateNode.containerInfo!==n.containerInfo||e.stateNode.implementation!==n.implementation?((e=Rt(n,t.mode,r)).return=t,e):((e=a(e,n.children||[],r)).return=t,e)}function p(t,e,n,r,o){return null===e||9!==e.tag?((e=Nt(n,t.mode,r,o)).return=t,e):((e=a(e,n,r)).return=t,e)}function g(t,e,n){if("string"==typeof e||"number"==typeof e)return(e=At(""+e,t.mode,n)).return=t,e;if("object"==typeof e&&null!==e){switch(e.$$typeof){case s:return(n=Ot(e,t.mode,n)).ref=ke(t,null,e),n.return=t,n;case h:return(e=Rt(e,t.mode,n)).return=t,e}if(Be(e)||M(e))return(e=Nt(e,t.mode,n,null)).return=t,e;Se(t,e)}return null}function f(t,e,n,r){var a=null!==e?e.key:null;if("string"==typeof n||"number"==typeof n)return null!==a?null:l(t,e,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case s:return n.key===a?n.type===d?p(t,e,n.props.children,r,a):u(t,e,n,r):null;case h:return n.key===a?v(t,e,n,r):null}if(Be(n)||M(n))return null!==a?null:p(t,e,n,r,null);Se(t,n)}return null}function m(t,e,n,r,a){if("string"==typeof r||"number"==typeof r)return l(e,t=t.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case s:return t=t.get(null===r.key?n:r.key)||null,r.type===d?p(e,t,r.props.children,a,r.key):u(e,t,r,a);case h:return v(e,t=t.get(null===r.key?n:r.key)||null,r,a)}if(Be(r)||M(r))return p(e,t=t.get(n)||null,r,a,null);Se(e,r)}return null}function z(a,c,i,l){for(var s=null,h=null,d=c,u=c=0,v=null;null!==d&&u<i.length;u++){d.index>u?(v=d,d=null):v=d.sibling;var p=f(a,d,i[u],l);if(null===p){null===d&&(d=v);break}t&&d&&null===p.alternate&&e(a,d),c=o(p,c,u),null===h?s=p:h.sibling=p,h=p,d=v}if(u===i.length)return n(a,d),s;if(null===d){for(;u<i.length;u++)(d=g(a,i[u],l))&&(c=o(d,c,u),null===h?s=d:h.sibling=d,h=d);return s}for(d=r(a,d);u<i.length;u++)(v=m(d,a,u,i[u],l))&&(t&&null!==v.alternate&&d.delete(null===v.key?u:v.key),c=o(v,c,u),null===h?s=v:h.sibling=v,h=v);return t&&d.forEach(function(t){return e(a,t)}),s}function x(a,i,l,s){var h=M(l);"function"!=typeof h&&c("150"),null==(l=h.call(l))&&c("151");for(var d=h=null,u=i,v=i=0,p=null,z=l.next();null!==u&&!z.done;v++,z=l.next()){u.index>v?(p=u,u=null):p=u.sibling;var x=f(a,u,z.value,s);if(null===x){u||(u=p);break}t&&u&&null===x.alternate&&e(a,u),i=o(x,i,v),null===d?h=x:d.sibling=x,d=x,u=p}if(z.done)return n(a,u),h;if(null===u){for(;!z.done;v++,z=l.next())null!==(z=g(a,z.value,s))&&(i=o(z,i,v),null===d?h=z:d.sibling=z,d=z);return h}for(u=r(a,u);!z.done;v++,z=l.next())null!==(z=m(u,a,v,z.value,s))&&(t&&null!==z.alternate&&u.delete(null===z.key?v:z.key),i=o(z,i,v),null===d?h=z:d.sibling=z,d=z);return t&&u.forEach(function(t){return e(a,t)}),h}return function(t,r,o,l){var u="object"==typeof o&&null!==o&&o.type===d&&null===o.key;u&&(o=o.props.children);var v="object"==typeof o&&null!==o;if(v)switch(o.$$typeof){case s:t:{for(v=o.key,u=r;null!==u;){if(u.key===v){if(9===u.tag?o.type===d:u.type===o.type){n(t,u.sibling),(r=a(u,o.type===d?o.props.children:o.props,l)).ref=ke(t,u,o),r.return=t,t=r;break t}n(t,u);break}e(t,u),u=u.sibling}o.type===d?((r=Nt(o.props.children,t.mode,l,o.key)).return=t,t=r):((l=Ot(o,t.mode,l)).ref=ke(t,r,o),l.return=t,t=l)}return i(t);case h:t:{for(u=o.key;null!==r;){if(r.key===u){if(6===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(t,r.sibling),(r=a(r,o.children||[],l)).return=t,t=r;break t}n(t,r);break}e(t,r),r=r.sibling}(r=Rt(o,t.mode,l)).return=t,t=r}return i(t)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&8===r.tag?(n(t,r.sibling),(r=a(r,o,l)).return=t,t=r):(n(t,r),(r=At(o,t.mode,l)).return=t,t=r),i(t);if(Be(o))return z(t,r,o,l);if(M(o))return x(t,r,o,l);if(v&&Se(t,o),void 0===o&&!u)switch(t.tag){case 2:case 3:case 0:c("152",(l=t.type).displayName||l.name||"Component")}return n(t,r)}}var Te=_e(!0),Fe=_e(!1),Pe=null,Ee=null,Ie=!1;function Oe(t,e){var n=new Pt(7,null,null,0);n.type="DELETED",n.stateNode=e,n.return=t,n.effectTag=8,null!==t.lastEffect?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Ne(t,e){switch(t.tag){case 7:return null!==(e=it(e,t.type,t.pendingProps))&&(t.stateNode=e,!0);case 8:return null!==(e=lt(e,t.pendingProps))&&(t.stateNode=e,!0);default:return!1}}function Ae(t){if(Ie){var e=Ee;if(e){var n=e;if(!Ne(t,e)){if(!(e=st(n))||!Ne(t,e))return t.effectTag|=2,Ie=!1,void(Pe=t);Oe(Pe,n)}Pe=t,Ee=ht(e)}else t.effectTag|=2,Ie=!1,Pe=t}}function Re(t){for(t=t.return;null!==t&&7!==t.tag&&5!==t.tag;)t=t.return;Pe=t}function De(t){if(!G||t!==Pe)return!1;if(!Ie)return Re(t),Ie=!0,!1;var e=t.type;if(7!==t.tag||"head"!==e&&"body"!==e&&!E(e,t.memoizedProps))for(e=Ee;e;)Oe(t,e),e=st(e);return Re(t),Ee=Pe?st(t.stateNode):null,!0}function je(){G&&(Ee=Pe=null,Ie=!1)}var Ke=i.ReactCurrentOwner;function Ue(t,e,n,r){e.child=null===t?Fe(e,null,n,r):Te(e,t.child,n,r)}function Ge(t,e,n,r,a){n=n.render;var o=e.ref;return bt.current||e.memoizedProps!==r||o!==(null!==t?t.ref:null)?(Ue(t,e,n=n(r,o),a),e.memoizedProps=r,e.child):Je(t,e,a)}function We(t,e){var n=e.ref;(null===t&&null!==n||null!==t&&t.ref!==n)&&(e.effectTag|=128)}function qe(t,e,n,r,a){var o=Ht(n)?wt:Mt.current;return o=yt(e,o),le(e),n=n(r,o),e.effectTag|=1,Ue(t,e,n,a),e.memoizedProps=r,e.child}function Ye(t,e,n,r,a){if(Ht(n)){var o=!0;kt(e)}else o=!1;if(le(e),null===t)if(null===e.stateNode){var c=Ht(n)?wt:Mt.current,i=n.contextTypes,l=null!==i&&void 0!==i,s=new n(r,i=l?yt(e,c):xt);e.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,s.updater=He,e.stateNode=s,s._reactInternalFiber=e,l&&((l=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=c,l.__reactInternalMemoizedMaskedChildContext=i),Le(e,n,r,a),r=!0}else{c=e.stateNode,i=e.memoizedProps,c.props=i;var h=c.context;l=yt(e,l=Ht(n)?wt:Mt.current);var d=n.getDerivedStateFromProps;(s="function"==typeof d||"function"==typeof c.getSnapshotBeforeUpdate)||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==r||h!==l)&&Ve(e,c,r,l),Kt=!1;var u=e.memoizedState;h=c.state=u;var v=e.updateQueue;null!==v&&(Jt(e,v,r,c,a),h=e.memoizedState),i!==r||u!==h||bt.current||Kt?("function"==typeof d&&(ye(e,n,d,r),h=e.memoizedState),(i=Kt||Ce(e,n,i,r,u,h,l))?(s||"function"!=typeof c.UNSAFE_componentWillMount&&"function"!=typeof c.componentWillMount||("function"==typeof c.componentWillMount&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&c.UNSAFE_componentWillMount()),"function"==typeof c.componentDidMount&&(e.effectTag|=4)):("function"==typeof c.componentDidMount&&(e.effectTag|=4),e.memoizedProps=r,e.memoizedState=h),c.props=r,c.state=h,c.context=l,r=i):("function"==typeof c.componentDidMount&&(e.effectTag|=4),r=!1)}else c=e.stateNode,i=e.memoizedProps,c.props=i,h=c.context,l=yt(e,l=Ht(n)?wt:Mt.current),(s="function"==typeof(d=n.getDerivedStateFromProps)||"function"==typeof c.getSnapshotBeforeUpdate)||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==r||h!==l)&&Ve(e,c,r,l),Kt=!1,h=e.memoizedState,u=c.state=h,null!==(v=e.updateQueue)&&(Jt(e,v,r,c,a),u=e.memoizedState),i!==r||h!==u||bt.current||Kt?("function"==typeof d&&(ye(e,n,d,r),u=e.memoizedState),(d=Kt||Ce(e,n,i,r,h,u,l))?(s||"function"!=typeof c.UNSAFE_componentWillUpdate&&"function"!=typeof c.componentWillUpdate||("function"==typeof c.componentWillUpdate&&c.componentWillUpdate(r,u,l),"function"==typeof c.UNSAFE_componentWillUpdate&&c.UNSAFE_componentWillUpdate(r,u,l)),"function"==typeof c.componentDidUpdate&&(e.effectTag|=4),"function"==typeof c.getSnapshotBeforeUpdate&&(e.effectTag|=256)):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=256),e.memoizedProps=r,e.memoizedState=u),c.props=r,c.state=u,c.context=l,r=d):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=256),r=!1);return Xe(t,e,n,r,o,a)}function Xe(t,e,n,r,a,o){We(t,e);var c=0!=(64&e.effectTag);if(!r&&!c)return a&&St(e,n,!1),Je(t,e,o);r=e.stateNode,Ke.current=e;var i=c?null:r.render();return e.effectTag|=1,null!==t&&c&&(Ue(t,e,null,o),e.child=null),Ue(t,e,i,o),e.memoizedState=r.state,e.memoizedProps=r.props,a&&St(e,n,!0),e.child}function Qe(t){var e=t.stateNode;e.pendingContext?Lt(0,e.pendingContext,e.pendingContext!==e.context):e.context&&Lt(0,e.context,!1),ge(t,e.containerInfo)}function $e(t,e){if(t&&t.defaultProps)for(var n in e=a({},e),t=t.defaultProps)void 0===e[n]&&(e[n]=t[n]);return e}function Je(t,e,n){null!==t&&(e.firstContextDependency=t.firstContextDependency);var r=e.childExpirationTime;if(0===r||r>n)return null;if(null!==t&&e.child!==t.child&&c("153"),null!==e.child){for(n=It(t=e.child,t.pendingProps,t.expirationTime),e.child=n,n.return=e;null!==t.sibling;)t=t.sibling,(n=n.sibling=It(t,t.pendingProps,t.expirationTime)).return=e;n.sibling=null}return e.child}function Ze(t){t.effectTag|=4}function tn(t,e){for(var n=e.child;null!==n;){if(7===n.tag||8===n.tag)T(t,n.stateNode);else if(6!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}var en=void 0,nn=void 0,rn=void 0;function an(t,e){var n=e.source,r=e.stack;null===r&&null!==n&&(r=pt(n)),null!==n&&b(n.type),e=e.value,null!==t&&2===t.tag&&b(t.type);try{console.error(e)}catch(t){setTimeout(function(){throw t})}}function on(t){var e=t.ref;if(null!==e)if("function"==typeof e)try{e(null)}catch(e){Tn(t,e)}else e.current=null}function cn(t){switch("function"==typeof Tt&&Tt(t),t.tag){case 2:case 3:on(t);var e=t.stateNode;if("function"==typeof e.componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Tn(t,e)}break;case 7:on(t);break;case 6:K?dn(t):U&&U&&(t=t.stateNode.containerInfo,e=rt(t),ct(t,e))}}function ln(t){for(var e=t;;)if(cn(e),null===e.child||K&&6===e.tag){if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return;e=e.return}e.sibling.return=e.return,e=e.sibling}else e.child.return=e,e=e.child}function sn(t){return 7===t.tag||5===t.tag||6===t.tag}function hn(t){if(K){t:{for(var e=t.return;null!==e;){if(sn(e)){var n=e;break t}e=e.return}c("160"),n=void 0}var r=e=void 0;switch(n.tag){case 7:e=n.stateNode,r=!1;break;case 5:case 6:e=n.stateNode.containerInfo,r=!0;break;default:c("161")}16&n.effectTag&&(et(e),n.effectTag&=-17);t:e:for(n=t;;){for(;null===n.sibling;){if(null===n.return||sn(n.return)){n=null;break t}n=n.return}for(n.sibling.return=n.return,n=n.sibling;7!==n.tag&&8!==n.tag;){if(2&n.effectTag)continue e;if(null===n.child||6===n.tag)continue e;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break t}}for(var a=t;;){if(7===a.tag||8===a.tag)n?r?J(e,a.stateNode,n):$(e,a.stateNode,n):r?q(e,a.stateNode):W(e,a.stateNode);else if(6!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break;for(;null===a.sibling;){if(null===a.return||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}}function dn(t){for(var e=t,n=!1,r=void 0,a=void 0;;){if(!n){n=e.return;t:for(;;){switch(null===n&&c("160"),n.tag){case 7:r=n.stateNode,a=!1;break t;case 5:case 6:r=n.stateNode.containerInfo,a=!0;break t}n=n.return}n=!0}if(7===e.tag||8===e.tag)ln(e),a?tt(r,e.stateNode):Z(r,e.stateNode);else if(6===e.tag?(r=e.stateNode.containerInfo,a=!0):cn(e),null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return;6===(e=e.return).tag&&(n=!1)}e.sibling.return=e.return,e=e.sibling}}function un(t,e){if(K)switch(e.tag){case 2:case 3:break;case 7:var n=e.stateNode;if(null!=n){var r=e.memoizedProps;t=null!==t?t.memoizedProps:r;var a=e.type,o=e.updateQueue;e.updateQueue=null,null!==o&&Q(n,o,a,t,r,e)}break;case 8:null===e.stateNode&&c("162"),n=e.memoizedProps,Y(e.stateNode,null!==t?t.memoizedProps:n,n);break;case 5:case 15:case 16:break;default:c("163")}else if(U)switch(e.tag){case 2:case 3:case 7:case 8:break;case 5:case 6:e=e.stateNode,ct(e.containerInfo,e.pendingChildren);break;default:c("163")}}function vn(t,e,n){(n=Wt(n)).tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gr(r),an(t,e)},n}function pn(t,e,n){(n=Wt(n)).tag=3;var r=t.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){null===Ln?Ln=new Set([this]):Ln.add(this);var n=e.value,r=e.stack;an(t,e),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function gn(t){switch(t.tag){case 2:Ht(t.type)&&Ct();var e=t.effectTag;return 1024&e?(t.effectTag=-1025&e|64,t):null;case 3:return Ht(t.type._reactResult)&&Ct(),1024&(e=t.effectTag)?(t.effectTag=-1025&e|64,t):null;case 5:return fe(),Vt(),0!=(64&(e=t.effectTag))&&c("285"),t.effectTag=-1025&e|64,t;case 7:return ze(t),null;case 16:return 1024&(e=t.effectTag)?(t.effectTag=-1025&e|64,t):null;case 6:return fe(),null;case 12:return ie(t),null;default:return null}}K?(en=function(){},nn=function(t,e,n){(e.updateQueue=n)&&Ze(e)},rn=function(t,e,n,r){n!==r&&Ze(e)}):U?(en=function(t){var e=t.stateNode;if(null!==t.firstEffect){var n=e.containerInfo,r=rt(n);t:for(var a=t.child;null!==a;){if(7===a.tag||8===a.tag)at(r,a.stateNode);else if(6!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;null===a.sibling;){if(null===a.return||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}e.pendingChildren=r,Ze(t),ot(n,r)}},nn=function(t,e,n,r,a,o,c,i){var l=null===e.firstEffect;t=t.stateNode,l&&null===n?e.stateNode=t:(n=nt(t,n,r,a,o,e,l,e.stateNode),F(n,r,o,c,i)&&Ze(e),e.stateNode=n,l?Ze(e):tn(n,e))},rn=function(t,e,n,r){n!==r&&(t=pe(ve.current),n=pe(de.current),e.stateNode=O(r,t,n,e),Ze(e))}):(en=function(){},nn=function(){},rn=function(){});var fn={readContext:se},mn=i.ReactCurrentOwner,zn=0,xn=0,Mn=!1,bn=null,wn=null,yn=0,Hn=!1,Cn=null,Vn=!1,Ln=null;function Bn(){if(null!==bn)for(var t=bn.return;null!==t;){var e=t;switch(e.tag){case 2:var n=e.type.childContextTypes;null!==n&&void 0!==n&&Ct();break;case 3:null!==(n=e.type._reactResult.childContextTypes)&&void 0!==n&&Ct();break;case 5:fe(),Vt();break;case 7:ze(e);break;case 6:fe();break;case 12:ie(e)}t=t.return}wn=null,yn=0,Hn=!1,bn=null}function kn(t){for(;;){var e=t.alternate,n=t.return,r=t.sibling;if(0==(512&t.effectTag)){var a=e,o=(e=t).pendingProps;switch(e.tag){case 0:case 1:break;case 2:Ht(e.type)&&Ct();break;case 3:Ht(e.type._reactResult)&&Ct();break;case 5:fe(),Vt(),(o=e.stateNode).pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==a&&null!==a.child||(De(e),e.effectTag&=-3),en(e);break;case 7:ze(e);var i=pe(ve.current),l=e.type;if(null!==a&&null!=e.stateNode){var s=a.memoizedProps;if(s!==o){var h=e.stateNode,d=pe(de.current);h=P(h,l,s,o,i,d),nn(a,e,h,l,s,o,i,d)}a.ref!==e.ref&&(e.effectTag|=128)}else o?(a=pe(de.current),De(e)?(o=e,G||c("175"),i=dt(o.stateNode,o.type,o.memoizedProps,i,a,o),o.updateQueue=i,(o=null!==i)&&Ze(e)):(tn(s=_(l,o,i,a,e),e),F(s,l,o,i,a)&&Ze(e),e.stateNode=s),null!==e.ref&&(e.effectTag|=128)):null===e.stateNode&&c("166");break;case 8:a&&null!=e.stateNode?rn(a,e,a.memoizedProps,o):("string"!=typeof o&&null===e.stateNode&&c("166"),i=pe(ve.current),l=pe(de.current),De(e)?(o=e,G||c("176"),(o=ut(o.stateNode,o.memoizedProps,o))&&Ze(e)):e.stateNode=O(o,i,l,e));break;case 13:case 14:case 16:case 9:case 10:case 15:break;case 6:fe(),en(e);break;case 12:ie(e);break;case 11:break;case 4:c("167");default:c("156")}if(e=bn=null,o=t,1073741823===yn||1073741823!==o.childExpirationTime){for(i=0,l=o.child;null!==l;)a=l.expirationTime,s=l.childExpirationTime,(0===i||0!==a&&a<i)&&(i=a),(0===i||0!==s&&s<i)&&(i=s),l=l.sibling;o.childExpirationTime=i}if(null!==e)return e;null!==n&&0==(512&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=t.firstEffect),n.lastEffect=t.lastEffect),1<t.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=t:n.firstEffect=t,n.lastEffect=t))}else{if(null!==(t=gn(t)))return t.effectTag&=511,t;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=512)}if(null!==r)return r;if(null===n)break;t=n}return null}function Sn(t){var e=function(t,e,n){var r=e.expirationTime;if(!bt.current&&(0===r||r>n)){switch(e.tag){case 5:Qe(e),je();break;case 7:me(e);break;case 2:Ht(e.type)&&kt(e);break;case 3:Ht(e.type._reactResult)&&kt(e);break;case 6:ge(e,e.stateNode.containerInfo);break;case 12:ce(e,e.memoizedProps.value)}return Je(t,e,n)}switch(e.expirationTime=0,e.tag){case 4:return function(t,e,n,r){null!==t&&c("155");var a=e.pendingProps;if("object"==typeof n&&null!==n&&"function"==typeof n.then){var o=n=function(t){switch(t._reactStatus){case 1:return t._reactResult;case 2:throw t._reactResult;case 0:throw t;default:throw t._reactStatus=0,t.then(function(e){if(0===t._reactStatus){if(t._reactStatus=1,"object"==typeof e&&null!==e){var n=e.default;e=void 0!==n&&null!==n?n:e}t._reactResult=e}},function(e){0===t._reactStatus&&(t._reactStatus=2,t._reactResult=e)}),t}}(n);o="function"==typeof o?Et(o)?3:1:void 0!==o&&null!==o&&o.$$typeof?14:4,o=e.tag=o;var i=$e(n,a);switch(o){case 1:return qe(t,e,n,i,r);case 3:return Ye(t,e,n,i,r);case 14:return Ge(t,e,n,i,r);default:c("283",n)}}if(o=yt(e,Mt.current),le(e),o=n(a,o),e.effectTag|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){e.tag=2,Ht(n)?(i=!0,kt(e)):i=!1,e.memoizedState=null!==o.state&&void 0!==o.state?o.state:null;var l=n.getDerivedStateFromProps;return"function"==typeof l&&ye(e,n,l,a),o.updater=He,e.stateNode=o,o._reactInternalFiber=e,Le(e,n,a,r),Xe(t,e,n,!0,i,r)}return e.tag=0,Ue(t,e,o,r),e.memoizedProps=a,e.child}(t,e,e.type,n);case 0:return qe(t,e,e.type,e.pendingProps,n);case 1:var a=e.type._reactResult;return t=qe(t,e,a,$e(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 2:return Ye(t,e,e.type,e.pendingProps,n);case 3:return t=Ye(t,e,a=e.type._reactResult,$e(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 5:return Qe(e),null===(r=e.updateQueue)&&c("282"),a=null!==(a=e.memoizedState)?a.element:null,Jt(e,r,e.pendingProps,null,n),(r=e.memoizedState.element)===a?(je(),e=Je(t,e,n)):(a=e.stateNode,(a=(null===t||null===t.child)&&a.hydrate)&&(G?(Ee=ht(e.stateNode.containerInfo),Pe=e,a=Ie=!0):a=!1),a?(e.effectTag|=2,e.child=Fe(e,null,r,n)):(Ue(t,e,r,n),je()),e=e.child),e;case 7:me(e),null===t&&Ae(e),r=e.type,a=e.pendingProps;var o=null!==t?t.memoizedProps:null,i=a.children;return E(r,a)?i=null:null!==o&&E(r,o)&&(e.effectTag|=16),We(t,e),1073741823!==n&&1&e.mode&&I(r,a)?(e.expirationTime=1073741823,e.memoizedProps=a,e=null):(Ue(t,e,i,n),e.memoizedProps=a,e=e.child),e;case 8:return null===t&&Ae(e),e.memoizedProps=e.pendingProps,null;case 16:return null;case 6:return ge(e,e.stateNode.containerInfo),r=e.pendingProps,null===t?e.child=Te(e,null,r,n):Ue(t,e,r,n),e.memoizedProps=r,e.child;case 13:return Ge(t,e,e.type,e.pendingProps,n);case 14:return t=Ge(t,e,a=e.type._reactResult,$e(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 9:return Ue(t,e,r=e.pendingProps,n),e.memoizedProps=r,e.child;case 10:return Ue(t,e,r=e.pendingProps.children,n),e.memoizedProps=r,e.child;case 15:return Ue(t,e,(r=e.pendingProps).children,n),e.memoizedProps=r,e.child;case 12:t:{if(r=e.type._context,a=e.pendingProps,i=e.memoizedProps,o=a.value,e.memoizedProps=a,ce(e,o),null!==i){var l=i.value;if(0==(o=l===o&&(0!==l||1/l==1/o)||l!=l&&o!=o?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(i.children===a.children&&!bt.current){e=Je(t,e,n);break t}}else for(null!==(i=e.child)&&(i.return=e);null!==i;){if(null!==(l=i.firstContextDependency))do{if(l.context===r&&0!=(l.observedBits&o)){if(2===i.tag||3===i.tag){var s=Wt(n);s.tag=2,Yt(i,s)}(0===i.expirationTime||i.expirationTime>n)&&(i.expirationTime=n),null!==(s=i.alternate)&&(0===s.expirationTime||s.expirationTime>n)&&(s.expirationTime=n);for(var h=i.return;null!==h;){if(s=h.alternate,0===h.childExpirationTime||h.childExpirationTime>n)h.childExpirationTime=n,null!==s&&(0===s.childExpirationTime||s.childExpirationTime>n)&&(s.childExpirationTime=n);else{if(null===s||!(0===s.childExpirationTime||s.childExpirationTime>n))break;s.childExpirationTime=n}h=h.return}}s=i.child,l=l.next}while(null!==l);else s=12===i.tag&&i.type===e.type?null:i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}Ue(t,e,a.children,n),e=e.child}return e;case 11:return o=e.type,a=(r=e.pendingProps).children,le(e),a=a(o=se(o,r.unstable_observedBits)),e.effectTag|=1,Ue(t,e,a,n),e.memoizedProps=r,e.child;default:c("156")}}(t.alternate,t,yn);return null===e&&(e=kn(t)),mn.current=null,e}function _n(t,e,n){Mn&&c("243"),Mn=!0,mn.currentDispatcher=fn;var r=t.nextExpirationTimeToWorkOn;r===yn&&t===wn&&null!==bn||(Bn(),yn=r,bn=It((wn=t).current,null,yn),t.pendingCommitExpirationTime=0);for(var a=!1;;){try{if(e)for(;null!==bn&&!pr();)bn=Sn(bn);else for(;null!==bn;)bn=Sn(bn)}catch(t){if(null===bn)a=!0,gr(t);else{null===bn&&c("271");var o=bn,i=o.return;if(null!==i){t:{var l=i,s=o,h=t;i=yn,s.effectTag|=512,s.firstEffect=s.lastEffect=null,Hn=!0,h=ee(h,s);do{switch(l.tag){case 5:l.effectTag|=1024,l.expirationTime=i,Xt(l,i=vn(l,h,i));break t;case 2:case 3:s=h;var d=l.stateNode;if(0==(64&l.effectTag)&&null!==d&&"function"==typeof d.componentDidCatch&&(null===Ln||!Ln.has(d))){l.effectTag|=1024,l.expirationTime=i,Xt(l,i=pn(l,s,i));break t}}l=l.return}while(null!==l)}bn=kn(o);continue}a=!0,gr(t)}}break}if(Mn=!1,oe=ae=re=mn.currentDispatcher=null,a)wn=null,t.finishedWork=null;else if(null!==bn)t.finishedWork=null;else{if(null===(e=t.current.alternate)&&c("281"),wn=null,Hn){if(a=t.latestPendingTime,o=t.latestSuspendedTime,i=t.latestPingedTime,0!==a&&a>r||0!==o&&o>r||0!==i&&i>r)return t.didError=!1,0!==(n=t.latestPingedTime)&&n<=r&&(t.latestPingedTime=0),n=t.earliestPendingTime,e=t.latestPendingTime,n===r?t.earliestPendingTime=e===r?t.latestPendingTime=0:e:e===r&&(t.latestPendingTime=n),n=t.earliestSuspendedTime,e=t.latestSuspendedTime,0===n?t.earliestSuspendedTime=t.latestSuspendedTime=r:n>r?t.earliestSuspendedTime=r:e<r&&(t.latestSuspendedTime=r),jt(r,t),void(t.expirationTime=t.expirationTime);if(!t.didError&&!n)return t.didError=!0,t.nextExpirationTimeToWorkOn=r,void(t.expirationTime=1)}t.pendingCommitExpirationTime=r,t.finishedWork=e}}function Tn(t,e){var n;t:{for(Mn&&!Vn&&c("263"),n=t.return;null!==n;){switch(n.tag){case 2:case 3:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromCatch||"function"==typeof r.componentDidCatch&&(null===Ln||!Ln.has(r))){Yt(n,t=pn(n,t=ee(e,t),1)),Pn(n,1),n=void 0;break t}break;case 5:Yt(n,t=vn(n,t=ee(e,t),1)),Pn(n,1),n=void 0;break t}n=n.return}5===t.tag&&(Yt(t,n=vn(t,n=ee(e,t),1)),Pn(t,1)),n=void 0}return n}function Fn(t,e){return 0!==xn?t=xn:Mn?t=Vn?1:yn:1&e.mode?(t=Qn?2+10*(1+((t-2+15)/10|0)):2+25*(1+((t-2+500)/25|0)),null!==wn&&t===yn&&(t+=1)):t=1,Qn&&(0===Kn||t>Kn)&&(Kn=t),t}function Pn(t,e){t:{(0===t.expirationTime||t.expirationTime>e)&&(t.expirationTime=e);var n=t.alternate;null!==n&&(0===n.expirationTime||n.expirationTime>e)&&(n.expirationTime=e);var r=t.return;if(null===r&&5===t.tag)t=t.stateNode;else{for(;null!==r;){if(n=r.alternate,(0===r.childExpirationTime||r.childExpirationTime>e)&&(r.childExpirationTime=e),null!==n&&(0===n.childExpirationTime||n.childExpirationTime>e)&&(n.childExpirationTime=e),null===r.return&&5===r.tag){t=r.stateNode;break t}r=r.return}t=null}}null!==t&&(!Mn&&0!==yn&&e<yn&&Bn(),Dt(t,e),Mn&&!Vn&&wn===t||lr(t,t.expirationTime),nr>er&&(nr=0,c("185")))}function En(t,e,n,r,a){var o=xn;xn=1;try{return t(e,n,r,a)}finally{xn=o}}var In=null,On=null,Nn=0,An=void 0,Rn=!1,Dn=null,jn=0,Kn=0,Un=!1,Gn=!1,Wn=null,qn=null,Yn=!1,Xn=!1,Qn=!1,$n=null,Jn=D(),Zn=2+(Jn/10|0),tr=Zn,er=50,nr=0,rr=null,ar=1;function or(){Zn=2+((D()-Jn)/10|0)}function cr(t,e){if(0!==Nn){if(e>Nn)return;null!==An&&A(An)}Nn=e,t=D()-Jn,An=N(hr,{timeout:10*(e-2)-t})}function ir(){return Rn?tr:(sr(),0!==jn&&1073741823!==jn||(or(),tr=Zn),tr)}function lr(t,e){if(null===t.nextScheduledRoot)t.expirationTime=e,null===On?(In=On=t,t.nextScheduledRoot=t):(On=On.nextScheduledRoot=t).nextScheduledRoot=In;else{var n=t.expirationTime;(0===n||e<n)&&(t.expirationTime=e)}Rn||(Yn?Xn&&(Dn=t,jn=1,ur(t,1,!0)):1===e?dr(1,null):cr(t,e))}function sr(){var t=0,e=null;if(null!==On)for(var n=On,r=In;null!==r;){var a=r.expirationTime;if(0===a){if((null===n||null===On)&&c("244"),r===r.nextScheduledRoot){In=On=r.nextScheduledRoot=null;break}if(r===In)In=a=r.nextScheduledRoot,On.nextScheduledRoot=a,r.nextScheduledRoot=null;else{if(r===On){(On=n).nextScheduledRoot=In,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((0===t||a<t)&&(t=a,e=r),r===On)break;if(1===t)break;n=r,r=r.nextScheduledRoot}}Dn=e,jn=t}function hr(t){if(t.didTimeout&&null!==In){or();var e=In;do{var n=e.expirationTime;0!==n&&Zn>=n&&(e.nextExpirationTimeToWorkOn=Zn),e=e.nextScheduledRoot}while(e!==In)}dr(0,t)}function dr(t,e){if(qn=e,sr(),null!==qn)for(or(),tr=Zn;null!==Dn&&0!==jn&&(0===t||t>=jn)&&(!Un||Zn>=jn);)ur(Dn,jn,Zn>=jn),sr(),or(),tr=Zn;else for(;null!==Dn&&0!==jn&&(0===t||t>=jn);)ur(Dn,jn,!0),sr();if(null!==qn&&(Nn=0,An=null),0!==jn&&cr(Dn,jn),qn=null,Un=!1,nr=0,rr=null,null!==$n)for(t=$n,$n=null,e=0;e<t.length;e++){var n=t[e];try{n._onComplete()}catch(t){Gn||(Gn=!0,Wn=t)}}if(Gn)throw t=Wn,Wn=null,Gn=!1,t}function ur(t,e,n){if(Rn&&c("245"),Rn=!0,null===qn||n){var r=t.finishedWork;null!==r?vr(t,r,e):(t.finishedWork=null,_n(t,!1,n),null!==(r=t.finishedWork)&&vr(t,r,e))}else null!==(r=t.finishedWork)?vr(t,r,e):(t.finishedWork=null,_n(t,!0,n),null!==(r=t.finishedWork)&&(pr()?t.finishedWork=r:vr(t,r,e)));Rn=!1}function vr(t,e,n){var r=t.firstBatch;if(null!==r&&r._expirationTime<=n&&(null===$n?$n=[r]:$n.push(r),r._defer))return t.finishedWork=e,void(t.expirationTime=0);t.finishedWork=null,t===rr?nr++:(rr=t,nr=0),Vn=Mn=!0,t.current===e&&c("177"),0===(n=t.pendingCommitExpirationTime)&&c("261"),t.pendingCommitExpirationTime=0,r=e.expirationTime;var a=e.childExpirationTime;for(r=0===r||0!==a&&a<r?a:r,t.didError=!1,0===r?(t.earliestPendingTime=0,t.latestPendingTime=0,t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0):(0!==(a=t.latestPendingTime)&&(a<r?t.earliestPendingTime=t.latestPendingTime=0:t.earliestPendingTime<r&&(t.earliestPendingTime=t.latestPendingTime)),0===(a=t.earliestSuspendedTime)?Dt(t,r):r>t.latestSuspendedTime?(t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0,Dt(t,r)):r<a&&Dt(t,r)),jt(0,t),mn.current=null,1<e.effectTag?null!==e.lastEffect?(e.lastEffect.nextEffect=e,r=e.firstEffect):r=e:r=e.firstEffect,k(t.containerInfo),Cn=r;null!==Cn;){a=!1;var o=void 0;try{for(;null!==Cn;){if(256&Cn.effectTag){var i=Cn.alternate;t:{var l=Cn;switch(l.tag){case 2:case 3:if(256&l.effectTag&&null!==i){var s=i.memoizedProps,h=i.memoizedState,d=l.stateNode;d.props=l.memoizedProps,d.state=l.memoizedState;var u=d.getSnapshotBeforeUpdate(s,h);d.__reactInternalSnapshotBeforeUpdate=u}break t;case 5:case 7:case 8:case 6:break t;default:c("163")}}}Cn=Cn.nextEffect}}catch(t){a=!0,o=t}a&&(null===Cn&&c("178"),Tn(Cn,o),null!==Cn&&(Cn=Cn.nextEffect))}for(Cn=r;null!==Cn;){i=!1,s=void 0;try{for(;null!==Cn;){var v=Cn.effectTag;if(16&v&&K&&et(Cn.stateNode),128&v){var p=Cn.alternate;if(null!==p){var g=p.ref;null!==g&&("function"==typeof g?g(null):g.current=null)}}switch(14&v){case 2:hn(Cn),Cn.effectTag&=-3;break;case 6:hn(Cn),Cn.effectTag&=-3,un(Cn.alternate,Cn);break;case 4:un(Cn.alternate,Cn);break;case 8:h=Cn,K?dn(h):ln(h),h.return=null,h.child=null,h.alternate&&(h.alternate.child=null,h.alternate.return=null)}Cn=Cn.nextEffect}}catch(t){i=!0,s=t}i&&(null===Cn&&c("178"),Tn(Cn,s),null!==Cn&&(Cn=Cn.nextEffect))}for(S(t.containerInfo),t.current=e,Cn=r;null!==Cn;){v=!1,p=void 0;try{for(g=n;null!==Cn;){var f=Cn.effectTag;if(36&f){var m=Cn.alternate;switch(s=g,(i=Cn).tag){case 2:case 3:var z=i.stateNode;if(4&i.effectTag)if(null===m)z.props=i.memoizedProps,z.state=i.memoizedState,z.componentDidMount();else{var x=m.memoizedProps,M=m.memoizedState;z.props=i.memoizedProps,z.state=i.memoizedState,z.componentDidUpdate(x,M,z.__reactInternalSnapshotBeforeUpdate)}var b=i.updateQueue;null!==b&&(z.props=i.memoizedProps,z.state=i.memoizedState,Zt(0,b,z));break;case 5:var w=i.updateQueue;if(null!==w){if(h=null,null!==i.child)switch(i.child.tag){case 7:h=V(i.child.stateNode);break;case 2:case 3:h=i.child.stateNode}Zt(0,w,h)}break;case 7:var y=i.stateNode;null===m&&4&i.effectTag&&X(y,i.type,i.memoizedProps,i);break;case 8:case 6:case 15:case 16:break;default:c("163")}}if(128&f){var H=Cn.ref;if(null!==H){var C=Cn.stateNode;switch(Cn.tag){case 7:var L=V(C);break;default:L=C}"function"==typeof H?H(L):H.current=L}}var B=Cn.nextEffect;Cn.nextEffect=null,Cn=B}}catch(t){v=!0,p=t}v&&(null===Cn&&c("178"),Tn(Cn,p),null!==Cn&&(Cn=Cn.nextEffect))}Mn=Vn=!1,"function"==typeof _t&&_t(e.stateNode),f=e.expirationTime,e=e.childExpirationTime,0===(e=0===f||0!==e&&e<f?e:f)&&(Ln=null),t.expirationTime=e,t.finishedWork=null}function pr(){return!!Un||!(null===qn||qn.timeRemaining()>ar)&&(Un=!0)}function gr(t){null===Dn&&c("246"),Dn.expirationTime=0,Gn||(Gn=!0,Wn=t)}function fr(t,e,n,r,a){var o=e.current;return n=function(t){if(!t)return xt;t=t._reactInternalFiber;t:{(2!==w(t)||2!==t.tag&&3!==t.tag)&&c("170");var e=t;do{switch(e.tag){case 5:e=e.stateNode.context;break t;case 2:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}break;case 3:if(Ht(e.type._reactResult)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(null!==e);c("171"),e=void 0}if(2===t.tag){var n=t.type;if(Ht(n))return Bt(t,n,e)}else if(3===t.tag&&Ht(n=t.type._reactResult))return Bt(t,n,e);return e}(n),null===e.context?e.context=n:e.pendingContext=n,e=a,(a=Wt(r)).payload={element:t},null!==(e=void 0===e?null:e)&&(a.callback=e),Yt(o,a),Pn(o,r),r}var mr={updateContainerAtExpirationTime:fr,createContainer:function(t,e,n){return t={current:e=new Pt(5,null,null,e?3:0),containerInfo:t,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:R,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},e.stateNode=t},updateContainer:function(t,e,n,r){var a=e.current;return fr(t,e,n,a=Fn(ir(),a),r)},flushRoot:function(t,e){Rn&&c("253"),Dn=t,jn=e,ur(t,e,!0),dr(1,null)},requestWork:lr,computeUniqueAsyncExpiration:function(){var t=2+25*(1+((ir()-2+500)/25|0));return t<=zn&&(t=zn+1),zn=t},batchedUpdates:function(t,e){var n=Yn;Yn=!0;try{return t(e)}finally{(Yn=n)||Rn||dr(1,null)}},unbatchedUpdates:function(t,e){if(Yn&&!Xn){Xn=!0;try{return t(e)}finally{Xn=!1}}return t(e)},deferredUpdates:function(t){var e=ir(),n=xn,r=Qn;xn=2+25*(1+((e-2+500)/25|0)),Qn=!1;try{return t()}finally{xn=n,Qn=r}},syncUpdates:En,interactiveUpdates:function(t,e,n){if(Qn)return t(e,n);Yn||Rn||0===Kn||(dr(Kn,null),Kn=0);var r=Qn,a=Yn;Yn=Qn=!0;try{return t(e,n)}finally{Qn=r,(Yn=a)||Rn||dr(1,null)}},flushInteractiveUpdates:function(){Rn||0===Kn||(dr(Kn,null),Kn=0)},flushControlled:function(t){var e=Yn;Yn=!0;try{En(t)}finally{(Yn=e)||Rn||dr(1,null)}},flushSync:function(t,e){Rn&&c("187");var n=Yn;Yn=!0;try{return En(t,e)}finally{Yn=n,dr(1,null)}},getPublicRootInstance:function(t){if(!(t=t.current).child)return null;switch(t.child.tag){case 7:return V(t.child.stateNode);default:return t.child.stateNode}},findHostInstance:function(t){var e=t._reactInternalFiber;return void 0===e&&("function"==typeof t.render?c("188"):c("268",Object.keys(t))),null===(t=C(e))?null:t.stateNode},findHostInstanceWithNoPortals:function(t){return null===(t=function(t){if(!(t=H(t)))return null;for(var e=t;;){if(7===e.tag||8===e.tag)return e;if(e.child&&6!==e.tag)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}(t))?null:t.stateNode},injectIntoDevTools:function(t){var e=t.findFiberByHostInstance;return function(t){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)return!0;try{var n=e.inject(t);_t=Ft(function(t){return e.onCommitFiberRoot(n,t)}),Tt=Ft(function(t){return e.onCommitFiberUnmount(n,t)})}catch(t){}return!0}(a({},t,{findHostInstanceByFiber:function(t){return null===(t=C(t))?null:t.stateNode},findFiberByHostInstance:function(t){return e?e(t):null}}))}};t.exports=mr.default||mr;var zr=t.exports;return t.exports=e,zr}},function(t,e,n){"use strict";t.exports=n(81)},function(t,e,n){(function(e){
/*
 * Konva JavaScript Framework v2.3.0
 * http://konvajs.github.io/
 * Licensed under the MIT
 * Date: Thu Aug 30 2018
 *
 * Original work Copyright (C) 2011 - 2013 by Eric Rowell (KineticJS)
 * Modified work Copyright (C) 2014 - present by Anton Lavrenov (Konva)
 *
 * @license
 */
!function(){"use strict";var n=Math.PI/180,r={version:"2.3.0",stages:[],idCounter:0,ids:{},names:{},shapes:{},listenClickTap:!1,inDblClickWindow:!1,isBrowser:"undefined"!=typeof window&&("[object Window]"==={}.toString.call(window)||"[object global]"==={}.toString.call(window)),isUnminified:/comment/.test(function(){}),enableTrace:!1,traceArrMax:100,dblClickWindow:400,pixelRatio:void 0,dragDistance:3,angleDeg:!0,showWarnings:!0,Filters:{},isDragging:function(){var t=r.DD;return!!t&&t.isDragging},isDragReady:function(){var t=r.DD;return!!t&&!!t.node},_addId:function(t,e){e&&(this.ids[e]=t)},_removeId:function(t){void 0!==t&&delete this.ids[t]},_addName:function(t,e){e&&(this.names[e]||(this.names[e]=[]),this.names[e].push(t))},_removeName:function(t,e){if(t){var n=this.names[t];if(n){for(var r=0;r<n.length;r++)n[r]._id===e&&n.splice(r,1);0===n.length&&delete this.names[t]}}},getAngle:function(t){return this.angleDeg?t*n:t},_detectIE:function(t){var e=t.indexOf("msie ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("trident/")>0){var n=t.indexOf("rv:");return parseInt(t.substring(n+3,t.indexOf(".",n)),10)}var r=t.indexOf("edge/");return r>0&&parseInt(t.substring(r+5,t.indexOf(".",r)),10)},_parseUA:function(t){var e=t.toLowerCase(),n=/(chrome)[ /]([\w.]+)/.exec(e)||/(webkit)[ /]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],a=!!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),o=!!t.match(/IEMobile/i);return{browser:n[1]||"",version:n[2]||"0",isIE:r._detectIE(e),mobile:a,ieMobile:o}},UA:void 0},a=void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:{};r.UA=r._parseUA(a.navigator&&a.navigator.userAgent||""),a.Konva&&console.error("Konva instance is already exist in current eviroment. Please use only one instance."),a.Konva=r,r.global=a,r.window=a,r.document=a.document,t.exports=r}(),function(){"use strict";Konva.Collection=function(){var t=[].slice.call(arguments),e=t.length,n=0;for(this.length=e;n<e;n++)this[n]=t[n];return this},Konva.Collection.prototype=[],Konva.Collection.prototype.each=function(t){for(var e=0;e<this.length;e++)t(this[e],e)},Konva.Collection.prototype.toArray=function(){var t,e=[],n=this.length;for(t=0;t<n;t++)e.push(this[t]);return e},Konva.Collection.toCollection=function(t){var e,n=new Konva.Collection,r=t.length;for(e=0;e<r;e++)n.push(t[e]);return n},Konva.Collection._mapMethod=function(t){Konva.Collection.prototype[t]=function(){var e,n=this.length,r=[].slice.call(arguments);for(e=0;e<n;e++)this[e][t].apply(this[e],r);return this}},Konva.Collection.mapMethods=function(t){var e=t.prototype;for(var n in e)Konva.Collection._mapMethod(n)},Konva.Transform=function(t){this.m=t&&t.slice()||[1,0,0,1,0,0]},Konva.Transform.prototype={copy:function(){return new Konva.Transform(this.m)},point:function(t){var e=this.m;return{x:e[0]*t.x+e[2]*t.y+e[4],y:e[1]*t.x+e[3]*t.y+e[5]}},translate:function(t,e){return this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this},scale:function(t,e){return this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e,this},rotate:function(t){var e=Math.cos(t),n=Math.sin(t),r=this.m[0]*e+this.m[2]*n,a=this.m[1]*e+this.m[3]*n,o=this.m[0]*-n+this.m[2]*e,c=this.m[1]*-n+this.m[3]*e;return this.m[0]=r,this.m[1]=a,this.m[2]=o,this.m[3]=c,this},getTranslation:function(){return{x:this.m[4],y:this.m[5]}},skew:function(t,e){var n=this.m[0]+this.m[2]*e,r=this.m[1]+this.m[3]*e,a=this.m[2]+this.m[0]*t,o=this.m[3]+this.m[1]*t;return this.m[0]=n,this.m[1]=r,this.m[2]=a,this.m[3]=o,this},multiply:function(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],n=this.m[1]*t.m[0]+this.m[3]*t.m[1],r=this.m[0]*t.m[2]+this.m[2]*t.m[3],a=this.m[1]*t.m[2]+this.m[3]*t.m[3],o=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],c=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];return this.m[0]=e,this.m[1]=n,this.m[2]=r,this.m[3]=a,this.m[4]=o,this.m[5]=c,this},invert:function(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,n=-this.m[1]*t,r=-this.m[2]*t,a=this.m[0]*t,o=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),c=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);return this.m[0]=e,this.m[1]=n,this.m[2]=r,this.m[3]=a,this.m[4]=o,this.m[5]=c,this},getMatrix:function(){return this.m},setAbsolutePosition:function(t,e){var n=this.m[0],r=this.m[1],a=this.m[2],o=this.m[3],c=this.m[4],i=(n*(e-this.m[5])-r*(t-c))/(n*o-r*a),l=(t-c-a*i)/n;return this.translate(l,i)}};var t=Math.PI/180,e=180/Math.PI,n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,132,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,255,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,203],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[119,128,144],slategrey:[119,128,144],snow:[255,255,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],transparent:[255,255,255,0],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,5]},r=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;Konva.Util={_isElement:function(t){return!(!t||1!=t.nodeType)},_isFunction:function(t){return!!(t&&t.constructor&&t.call&&t.apply)},_isObject:function(t){return!!t&&t.constructor===Object},_isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},_isNumber:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t)&&isFinite(t)},_isString:function(t){return"[object String]"===Object.prototype.toString.call(t)},_isBoolean:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},isObject:function(t){return t instanceof Object},isValidSelector:function(t){if("string"!=typeof t)return!1;var e=t[0];return"#"===e||"."===e||e===e.toUpperCase()},_sign:function(t){return 0===t?0:t>0?1:-1},createCanvasElement:function(){var t=Konva.isBrowser?Konva.document.createElement("canvas"):new Konva._nodeCanvas;try{t.style=t.style||{}}catch(t){}return t},_isInDocument:function(t){for(;t=t.parentNode;)if(t==Konva.document)return!0;return!1},_simplifyArray:function(t){var e,n,r=[],a=t.length,o=Konva.Util;for(e=0;e<a;e++)n=t[e],o._isNumber(n)?n=Math.round(1e3*n)/1e3:o._isString(n)||(n=n.toString()),r.push(n);return r},_getImage:function(t,e){var n,r;t?this._isElement(t)?e(t):this._isString(t)?((n=new Konva.window.Image).onload=function(){e(n)},n.src=t):t.data?((r=Konva.Util.createCanvasElement()).width=t.width,r.height=t.height,r.getContext("2d").putImageData(t,0,0),this._getImage(r.toDataURL(),e)):e(null):e(null)},_getRGBAString:function(t){return["rgba(",t.red||0,",",t.green||0,",",t.blue||0,",",t.alpha||1,")"].join("")},_rgbToHex:function(t,e,n){return((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1)},_hexToRgb:function(t){t=t.replace("#","");var e=parseInt(t,16);return{r:e>>16&255,g:e>>8&255,b:255&e}},getRandomColor:function(){for(var t=(16777215*Math.random()<<0).toString(16);t.length<6;)t="0"+t;return"#"+t},get:function(t,e){return void 0===t?e:t},getRGB:function(t){var e;return t in n?{r:(e=n[t])[0],g:e[1],b:e[2]}:"#"===t[0]?this._hexToRgb(t.substring(1)):"rgb("===t.substr(0,4)?(e=r.exec(t.replace(/ /g,"")),{r:parseInt(e[1],10),g:parseInt(e[2],10),b:parseInt(e[3],10)}):{r:0,g:0,b:0}},colorToRGBA:function(t){return t=t||"black",Konva.Util._namedColorToRBA(t)||Konva.Util._hex3ColorToRGBA(t)||Konva.Util._hex6ColorToRGBA(t)||Konva.Util._rgbColorToRGBA(t)||Konva.Util._rgbaColorToRGBA(t)},_namedColorToRBA:function(t){var e=n[t.toLowerCase()];return e?{r:e[0],g:e[1],b:e[2],a:1}:null},_rgbColorToRGBA:function(t){if(0===t.indexOf("rgb(")){var e=(t=t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:1}}},_rgbaColorToRGBA:function(t){if(0===t.indexOf("rgba(")){var e=(t=t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);return{r:e[0],g:e[1],b:e[2],a:e[3]}}},_hex6ColorToRGBA:function(t){if("#"===t[0]&&7===t.length)return{r:parseInt(t.slice(1,3),16),g:parseInt(t.slice(3,5),16),b:parseInt(t.slice(5,7),16),a:1}},_hex3ColorToRGBA:function(t){if("#"===t[0]&&4===t.length)return{r:parseInt(t[1]+t[1],16),g:parseInt(t[2]+t[2],16),b:parseInt(t[3]+t[3],16),a:1}},_merge:function(t,e){var n=this._clone(e);for(var r in t)this._isObject(t[r])?n[r]=this._merge(t[r],n[r]):n[r]=t[r];return n},haveIntersection:function(t,e){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y)},cloneObject:function(t){var e={};for(var n in t)this._isObject(t[n])?e[n]=this.cloneObject(t[n]):this._isArray(t[n])?e[n]=this.cloneArray(t[n]):e[n]=t[n];return e},cloneArray:function(t){return t.slice(0)},_degToRad:function(e){return e*t},_radToDeg:function(t){return t*e},_capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},throw:function(t){throw new Error("Konva error: "+t)},error:function(t){console.error("Konva error: "+t)},warn:function(t){Konva.global.console&&console.warn&&Konva.showWarnings&&console.warn("Konva warning: "+t)},extend:function(t,e){function n(){this.constructor=t}n.prototype=e.prototype;var r=t.prototype;for(var a in t.prototype=new n,r)r.hasOwnProperty(a)&&(t.prototype[a]=r[a]);t.__super__=e.prototype,t.super=e},addMethods:function(t,e){var n;for(n in e)t.prototype[n]=e[n]},_getControlPoints:function(t,e,n,r,a,o,c){var i=Math.sqrt(Math.pow(n-t,2)+Math.pow(r-e,2)),l=Math.sqrt(Math.pow(a-n,2)+Math.pow(o-r,2)),s=c*i/(i+l),h=c*l/(i+l);return[n-s*(a-t),r-s*(o-e),n+h*(a-t),r+h*(o-e)]},_expandPoints:function(t,e){var n,r,a=t.length,o=[];for(n=2;n<a-2;n+=2)r=Konva.Util._getControlPoints(t[n-2],t[n-1],t[n],t[n+1],t[n+2],t[n+3],e),o.push(r[0]),o.push(r[1]),o.push(t[n]),o.push(t[n+1]),o.push(r[2]),o.push(r[3]);return o},_removeLastLetter:function(t){return t.substring(0,t.length-1)},each:function(t,e){for(var n in t)e(n,t[n])},_inRange:function(t,e,n){return e<=t&&t<n},_getProjectionToSegment:function(t,e,n,r,a,o){var c,i,l,s=(t-n)*(t-n)+(e-r)*(e-r);if(0==s)c=t,i=e,l=(a-n)*(a-n)+(o-r)*(o-r);else{var h=((a-t)*(n-t)+(o-e)*(r-e))/s;h<0?(c=t,i=e,l=(t-a)*(t-a)+(e-o)*(e-o)):h>1?(c=n,i=r,l=(n-a)*(n-a)+(r-o)*(r-o)):l=((c=t+h*(n-t))-a)*(c-a)+((i=e+h*(r-e))-o)*(i-o)}return[c,i,l]},_getProjectionToLine:function(t,e,n){var r=Konva.Util.cloneObject(t),a=Number.MAX_VALUE;return e.forEach(function(o,c){if(n||c!==e.length-1){var i=e[(c+1)%e.length],l=Konva.Util._getProjectionToSegment(o.x,o.y,i.x,i.y,t.x,t.y),s=l[0],h=l[1],d=l[2];d<a&&(r.x=s,r.y=h,a=d)}}),r},_prepareArrayForTween:function(t,e,n){var r,a=[],o=[];if(t.length>e.length){var c=e;e=t,t=c}for(r=0;r<t.length;r+=2)a.push({x:t[r],y:t[r+1]});for(r=0;r<e.length;r+=2)o.push({x:e[r],y:e[r+1]});var i=[];return o.forEach(function(t){var e=Konva.Util._getProjectionToLine(t,a,n);i.push(e.x),i.push(e.y)}),i},_prepareToStringify:function(t){var e;for(var n in t.visitedByCircularReferenceRemoval=!0,t)if(t.hasOwnProperty(n)&&t[n]&&"object"==typeof t[n])if(e=Object.getOwnPropertyDescriptor(t,n),t[n].visitedByCircularReferenceRemoval||Konva.Util._isElement(t[n])){if(!e.configurable)return null;delete t[n]}else if(null===Konva.Util._prepareToStringify(t[n])){if(!e.configurable)return null;delete t[n]}return delete t.visitedByCircularReferenceRemoval,t}}}(),function(){"use strict";var t;Konva.Canvas=function(t){this.init(t)},Konva.Canvas.prototype={init:function(e){var n=(e||{}).pixelRatio||Konva.pixelRatio||function(){if(t)return t;var e=Konva.Util.createCanvasElement().getContext("2d");return t=(Konva.window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}();this.pixelRatio=n,this._canvas=Konva.Util.createCanvasElement(),this._canvas.style.padding=0,this._canvas.style.margin=0,this._canvas.style.border=0,this._canvas.style.background="transparent",this._canvas.style.position="absolute",this._canvas.style.top=0,this._canvas.style.left=0},getContext:function(){return this.context},getPixelRatio:function(){return this.pixelRatio},setPixelRatio:function(t){var e=this.pixelRatio;this.pixelRatio=t,this.setSize(this.getWidth()/e,this.getHeight()/e)},setWidth:function(t){this.width=this._canvas.width=t*this.pixelRatio,this._canvas.style.width=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)},setHeight:function(t){this.height=this._canvas.height=t*this.pixelRatio,this._canvas.style.height=t+"px";var e=this.pixelRatio;this.getContext()._context.scale(e,e)},getWidth:function(){return this.width},getHeight:function(){return this.height},setSize:function(t,e){this.setWidth(t),this.setHeight(e)},toDataURL:function(t,e){try{return this._canvas.toDataURL(t,e)}catch(t){try{return this._canvas.toDataURL()}catch(t){return Konva.Util.warn("Unable to get data URL. "+t.message),""}}}},Konva.SceneCanvas=function(t){var e=t||{},n=e.width||0,r=e.height||0;Konva.Canvas.call(this,e),this.context=new Konva.SceneContext(this),this.setSize(n,r)},Konva.Util.extend(Konva.SceneCanvas,Konva.Canvas),Konva.HitCanvas=function(t){var e=t||{},n=e.width||0,r=e.height||0;Konva.Canvas.call(this,e),this.context=new Konva.HitContext(this),this.setSize(n,r),this.hitCanvas=!0},Konva.Util.extend(Konva.HitCanvas,Konva.Canvas)}(),function(){"use strict";var t=["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","createLinearGradient","createPattern","createRadialGradient","drawImage","fill","fillText","getImageData","createImageData","lineTo","moveTo","putImageData","quadraticCurveTo","rect","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeText","transform","translate"];Konva.Context=function(t){this.init(t)},Konva.Context.prototype={init:function(t){this.canvas=t,this._context=t._canvas.getContext("2d"),Konva.enableTrace&&(this.traceArr=[],this._enableTrace())},fillShape:function(t){t.getFillEnabled()&&this._fill(t)},strokeShape:function(t){t.getStrokeEnabled()&&this._stroke(t)},fillStrokeShape:function(t){t.getFillEnabled()&&this._fill(t),t.getStrokeEnabled()&&this._stroke(t)},getTrace:function(t){var e,n,r,a,o=this.traceArr,c=o.length,i="";for(e=0;e<c;e++)(r=(n=o[e]).method)?(a=n.args,i+=r,t?i+="()":Konva.Util._isArray(a[0])?i+="(["+a.join(",")+"])":i+="("+a.join(",")+")"):(i+=n.property,t||(i+="="+n.val)),i+=";";return i},clearTrace:function(){this.traceArr=[]},_trace:function(t){var e=this.traceArr;e.push(t),e.length>=Konva.traceArrMax&&e.shift()},reset:function(){var t=this.getCanvas().getPixelRatio();this.setTransform(1*t,0,0,1*t,0,0)},getCanvas:function(){return this.canvas},clear:function(t){var e=this.getCanvas();t?this.clearRect(t.x||0,t.y||0,t.width||0,t.height||0):this.clearRect(0,0,e.getWidth()/e.pixelRatio,e.getHeight()/e.pixelRatio)},_applyLineCap:function(t){var e=t.getLineCap();e&&this.setAttr("lineCap",e)},_applyOpacity:function(t){var e=t.getAbsoluteOpacity();1!==e&&this.setAttr("globalAlpha",e)},_applyLineJoin:function(t){var e=t.getLineJoin();e&&this.setAttr("lineJoin",e)},setAttr:function(t,e){this._context[t]=e},arc:function(){var t=arguments;this._context.arc(t[0],t[1],t[2],t[3],t[4],t[5])},beginPath:function(){this._context.beginPath()},bezierCurveTo:function(){var t=arguments;this._context.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5])},clearRect:function(){var t=arguments;this._context.clearRect(t[0],t[1],t[2],t[3])},clip:function(){this._context.clip()},closePath:function(){this._context.closePath()},createImageData:function(){var t=arguments;return 2===t.length?this._context.createImageData(t[0],t[1]):1===t.length?this._context.createImageData(t[0]):void 0},createLinearGradient:function(){var t=arguments;return this._context.createLinearGradient(t[0],t[1],t[2],t[3])},createPattern:function(){var t=arguments;return this._context.createPattern(t[0],t[1])},createRadialGradient:function(){var t=arguments;return this._context.createRadialGradient(t[0],t[1],t[2],t[3],t[4],t[5])},drawImage:function(){var t=arguments,e=this._context;3===t.length?e.drawImage(t[0],t[1],t[2]):5===t.length?e.drawImage(t[0],t[1],t[2],t[3],t[4]):9===t.length&&e.drawImage(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},isPointInPath:function(t,e){return this._context.isPointInPath(t,e)},fill:function(){this._context.fill()},fillRect:function(t,e,n,r){this._context.fillRect(t,e,n,r)},strokeRect:function(t,e,n,r){this._context.strokeRect(t,e,n,r)},fillText:function(){var t=arguments;this._context.fillText(t[0],t[1],t[2])},measureText:function(t){return this._context.measureText(t)},getImageData:function(){var t=arguments;return this._context.getImageData(t[0],t[1],t[2],t[3])},lineTo:function(){var t=arguments;this._context.lineTo(t[0],t[1])},moveTo:function(){var t=arguments;this._context.moveTo(t[0],t[1])},rect:function(){var t=arguments;this._context.rect(t[0],t[1],t[2],t[3])},putImageData:function(){var t=arguments;this._context.putImageData(t[0],t[1],t[2])},quadraticCurveTo:function(){var t=arguments;this._context.quadraticCurveTo(t[0],t[1],t[2],t[3])},restore:function(){this._context.restore()},rotate:function(){var t=arguments;this._context.rotate(t[0])},save:function(){this._context.save()},scale:function(){var t=arguments;this._context.scale(t[0],t[1])},setLineDash:function(){var t=arguments,e=this._context;this._context.setLineDash?e.setLineDash(t[0]):"mozDash"in e?e.mozDash=t[0]:"webkitLineDash"in e&&(e.webkitLineDash=t[0])},getLineDash:function(){return this._context.getLineDash()},setTransform:function(){var t=arguments;this._context.setTransform(t[0],t[1],t[2],t[3],t[4],t[5])},stroke:function(){this._context.stroke()},strokeText:function(){var t=arguments;this._context.strokeText(t[0],t[1],t[2])},transform:function(){var t=arguments;this._context.transform(t[0],t[1],t[2],t[3],t[4],t[5])},translate:function(){var t=arguments;this._context.translate(t[0],t[1])},_enableTrace:function(){var e,n,r=this,a=t.length,o=Konva.Util._simplifyArray,c=this.setAttr,i=function(t){var e,a=r[t];r[t]=function(){return n=o(Array.prototype.slice.call(arguments,0)),e=a.apply(r,arguments),r._trace({method:t,args:n}),e}};for(e=0;e<a;e++)i(t[e]);r.setAttr=function(){c.apply(r,arguments);var t=arguments[0],e=arguments[1];"shadowOffsetX"!==t&&"shadowOffsetY"!==t&&"shadowBlur"!==t||(e/=this.canvas.getPixelRatio()),r._trace({property:t,val:e})}}},["fillStyle","strokeStyle","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","font","textAlign","textBaseline","globalAlpha","globalCompositeOperation"].forEach(function(t){Object.defineProperty(Konva.Context.prototype,t,{get:function(){return this._context[t]},set:function(e){this._context[t]=e}})}),Konva.SceneContext=function(t){Konva.Context.call(this,t)},Konva.SceneContext.prototype={_fillColor:function(t){var e=t.fill();this.setAttr("fillStyle",e),t._fillFunc(this)},_fillPattern:function(t){var e=t.getFillPatternX(),n=t.getFillPatternY(),r=t.getFillPatternScale(),a=Konva.getAngle(t.getFillPatternRotation()),o=t.getFillPatternOffset();(e||n)&&this.translate(e||0,n||0),a&&this.rotate(a),r&&this.scale(r.x,r.y),o&&this.translate(-1*o.x,-1*o.y),this.setAttr("fillStyle",this.createPattern(t.getFillPatternImage(),t.getFillPatternRepeat()||"repeat")),this.fill()},_fillLinearGradient:function(t){var e=t.getFillLinearGradientStartPoint(),n=t.getFillLinearGradientEndPoint(),r=t.getFillLinearGradientColorStops(),a=this.createLinearGradient(e.x,e.y,n.x,n.y);if(r){for(var o=0;o<r.length;o+=2)a.addColorStop(r[o],r[o+1]);this.setAttr("fillStyle",a),t._fillFunc(this)}},_fillRadialGradient:function(t){for(var e=t.getFillRadialGradientStartPoint(),n=t.getFillRadialGradientEndPoint(),r=t.getFillRadialGradientStartRadius(),a=t.getFillRadialGradientEndRadius(),o=t.getFillRadialGradientColorStops(),c=this.createRadialGradient(e.x,e.y,r,n.x,n.y,a),i=0;i<o.length;i+=2)c.addColorStop(o[i],o[i+1]);this.setAttr("fillStyle",c),this.fill()},_fill:function(t){var e=t.fill(),n=t.getFillPriority();if(e&&"color"===n)this._fillColor(t);else{var r=t.getFillPatternImage();if(r&&"pattern"===n)this._fillPattern(t);else{var a=t.getFillLinearGradientColorStops();if(a&&"linear-gradient"===n)this._fillLinearGradient(t);else{var o=t.getFillRadialGradientColorStops();o&&"radial-gradient"===n?this._fillRadialGradient(t):e?this._fillColor(t):r?this._fillPattern(t):a?this._fillLinearGradient(t):o&&this._fillRadialGradient(t)}}}},_strokeLinearGradient:function(t){var e=t.getStrokeLinearGradientStartPoint(),n=t.getStrokeLinearGradientEndPoint(),r=t.getStrokeLinearGradientColorStops(),a=this.createLinearGradient(e.x,e.y,n.x,n.y);if(r){for(var o=0;o<r.length;o+=2)a.addColorStop(r[o],r[o+1]);this.setAttr("strokeStyle",a)}},_stroke:function(t){var e=t.dash(),n=t.getStrokeScaleEnabled()||t instanceof Konva.Text;t.hasStroke()&&(n||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(t),e&&t.dashEnabled()&&(this.setLineDash(e),this.setAttr("lineDashOffset",t.dashOffset())),this.setAttr("lineWidth",t.strokeWidth()),t.getShadowForStrokeEnabled()||this.setAttr("shadowColor","rgba(0,0,0,0)"),t.getStrokeLinearGradientColorStops()?this._strokeLinearGradient(t):this.setAttr("strokeStyle",t.stroke()),t._strokeFunc(this),n||this.restore())},_applyShadow:function(t){var e=Konva.Util,n=e.get(t.getShadowRGBA(),"black"),r=e.get(t.getShadowBlur(),5),a=e.get(t.getShadowOffset(),{x:0,y:0}),o=t.getAbsoluteScale(),c=this.canvas.getPixelRatio(),i=o.x*c,l=o.y*c;this.setAttr("shadowColor",n),this.setAttr("shadowBlur",r*Math.min(Math.abs(i),Math.abs(l))),this.setAttr("shadowOffsetX",a.x*i),this.setAttr("shadowOffsetY",a.y*l)},_applyGlobalCompositeOperation:function(t){var e=t.getGlobalCompositeOperation();"source-over"!==e&&this.setAttr("globalCompositeOperation",e)}},Konva.Util.extend(Konva.SceneContext,Konva.Context),Konva.HitContext=function(t){Konva.Context.call(this,t)},Konva.HitContext.prototype={_fill:function(t){this.save(),this.setAttr("fillStyle",t.colorKey),t._fillFuncHit(this),this.restore()},_stroke:function(t){if(t.hasStroke()&&t.strokeHitEnabled()){var e=t.getStrokeScaleEnabled()||t instanceof Konva.Text;e||(this.save(),this.setTransform(1,0,0,1,0,0)),this._applyLineCap(t),this.setAttr("lineWidth",t.strokeWidth()),this.setAttr("strokeStyle",t.colorKey),t._strokeFuncHit(this),e||this.restore()}}},Konva.Util.extend(Konva.HitContext,Konva.Context)}(),function(){"use strict";Konva.Factory={addGetterSetter:function(t,e,n,r,a){this.addGetter(t,e,n),this.addSetter(t,e,r,a),this.addOverloadedGetterSetter(t,e)},addGetter:function(t,e,n){var r="get"+Konva.Util._capitalize(e);t.prototype[r]=function(){var t=this.attrs[e];return void 0===t?n:t}},addSetter:function(t,e,n,r){var a="set"+Konva.Util._capitalize(e);t.prototype[a]=function(t){return n&&void 0!==t&&null!==t&&(t=n.call(this,t,e)),this._setAttr(e,t),r&&r.call(this),this}},addComponentsGetterSetter:function(t,e,n,r,a){var o,c,i=n.length,l=Konva.Util._capitalize,s="get"+l(e),h="set"+l(e);t.prototype[s]=function(){var t={};for(o=0;o<i;o++)t[c=n[o]]=this.getAttr(e+l(c));return t},t.prototype[h]=function(t){var n,o=this.attrs[e];for(n in r&&(t=r.call(this,t)),t)t.hasOwnProperty(n)&&this._setAttr(e+l(n),t[n]);return this._fireChangeEvent(e,o,t),a&&a.call(this),this},this.addOverloadedGetterSetter(t,e)},addOverloadedGetterSetter:function(t,e){var n=Konva.Util._capitalize(e),r="set"+n,a="get"+n;t.prototype[e]=function(){return arguments.length?(this[r](arguments[0]),this):this[a]()}},addDeprecatedGetterSetter:function(t,e,n,r){Konva.Util.error("Adding deprecated "+e);var a="get"+Konva.Util._capitalize(e),o=e+" property is deprecated and will be removed soon. Look at Konva change log for more information.";t.prototype[a]=function(){Konva.Util.error(o);var t=this.attrs[e];return void 0===t?n:t},this.addSetter(t,e,r,function(){Konva.Util.error(o)}),this.addOverloadedGetterSetter(t,e)},backCompat:function(t,e){Konva.Util.each(e,function(e,n){var r=t.prototype[n],a="get"+Konva.Util._capitalize(e),o="set"+Konva.Util._capitalize(e);function c(){r.apply(this,arguments),Konva.Util.error('"'+e+'" method is deprecated and will be removed soon. Use ""'+n+'" instead.')}t.prototype[e]=c,t.prototype[a]=c,t.prototype[o]=c})},afterSetFilter:function(){this._filterUpToDate=!1}},Konva.Validators={RGBComponent:function(t){return t>255?255:t<0?0:Math.round(t)},alphaComponent:function(t){return t>1?1:t<1e-4?1e-4:t},_formatValue:function(t){return Konva.Util._isString(t)?'"'+t+'"':"[object Number]"===Object.prototype.toString.call(t)?t:Konva.Util._isBoolean(t)?t:Object.prototype.toString.call(t)},getNumberValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isNumber(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a number.'),t}},getNumberOrAutoValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isNumber(t)||"auto"===t||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a number or "auto".'),t}},getStringValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isString(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a string.'),t}},getFunctionValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isFunction(t)||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a function.'),t}},getNumberArrayValidator:function(){if(Konva.isUnminified)return function(t,e){return Konva.Util._isArray(t)?t.forEach(function(t){Konva.Util._isNumber(t)||Konva.Util.warn('"'+e+'" attribute has non numeric element '+t+". Make sure that all elements are numbers.")}):Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a array of numbers.'),t}},getBooleanValidator:function(){if(Konva.isUnminified)return function(t,e){return!0===t||!1===t||Konva.Util.warn(Konva.Validators._formatValue(t)+' is a not valid value for "'+e+'" attribute. The value should be a boolean.'),t}}}}(),function(t){"use strict";var e="Shape",n=["id"],r=["xChange.konva","yChange.konva","scaleXChange.konva","scaleYChange.konva","skewXChange.konva","skewYChange.konva","rotationChange.konva","offsetXChange.konva","offsetYChange.konva","transformsEnabledChange.konva"].join(" "),a=["scaleXChange.konva","scaleYChange.konva"].join(" ");t.Node=function(t){this._init(t)},t.Util.addMethods(t.Node,{_init:function(e){this._id=t.idCounter++,this.eventListeners={},this.attrs={},this._cache={},this._filterUpToDate=!1,this._isUnderCache=!1,this.setAttrs(e),this.on(r,function(){this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")}),this.on(a,function(){this._clearSelfAndDescendantCache("absoluteScale")}),this.on("visibleChange.konva",function(){this._clearSelfAndDescendantCache("visible")}),this.on("listeningChange.konva",function(){this._clearSelfAndDescendantCache("listening")}),this.on("opacityChange.konva",function(){this._clearSelfAndDescendantCache("absoluteOpacity")})},_clearCache:function(t){t?delete this._cache[t]:this._cache={}},_getCache:function(t,e){return void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]},_clearSelfAndDescendantCache:function(t){this._clearCache(t),this.children&&this.getChildren().each(function(e){e._clearSelfAndDescendantCache(t)})},clearCache:function(){return delete this._cache.canvas,this._filterUpToDate=!1,this},cache:function(e){var n=e||{},r=this.getClientRect({skipTransform:!0,relativeTo:this.getParent()}),a=n.width||r.width,o=n.height||r.height,c=n.pixelRatio,i=n.x||r.x,l=n.y||r.y,s=n.offset||0,h=n.drawBorder||!1;if(a&&o){a+=2*s,o+=2*s,i-=s,l-=s;var d=new t.SceneCanvas({pixelRatio:c,width:a,height:o}),u=new t.SceneCanvas({pixelRatio:c,width:a,height:o}),v=new t.HitCanvas({pixelRatio:1,width:a,height:o}),p=d.getContext(),g=v.getContext();return v.isCache=!0,this.clearCache(),p.save(),g.save(),p.translate(-i,-l),g.translate(-i,-l),this._isUnderCache=!0,this._clearSelfAndDescendantCache("absoluteOpacity"),this._clearSelfAndDescendantCache("absoluteScale"),this.drawScene(d,this,!0),this.drawHit(v,this,!0),this._isUnderCache=!1,p.restore(),g.restore(),h&&(p.save(),p.beginPath(),p.rect(0,0,a,o),p.closePath(),p.setAttr("strokeStyle","red"),p.setAttr("lineWidth",5),p.stroke(),p.restore()),this._cache.canvas={scene:d,filter:u,hit:v,x:i,y:l},this}t.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")},getClientRect:function(){throw new Error('abstract "getClientRect" method call')},_transformedRect:function(t,e){var n,r,a,o,c=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}],i=this.getAbsoluteTransform(e);return c.forEach(function(t){var e=i.point(t);void 0===n&&(n=a=e.x,r=o=e.y),n=Math.min(n,e.x),r=Math.min(r,e.y),a=Math.max(a,e.x),o=Math.max(o,e.y)}),{x:n,y:r,width:a-n,height:o-r}},_drawCachedSceneCanvas:function(t){t.save(),t._applyOpacity(this),t._applyGlobalCompositeOperation(this),t.translate(this._cache.canvas.x,this._cache.canvas.y);var e=this._getCachedSceneCanvas(),n=e.pixelRatio;t.drawImage(e._canvas,0,0,e.width/n,e.height/n),t.restore()},_drawCachedHitCanvas:function(t){var e=this._cache.canvas.hit;t.save(),t.translate(this._cache.canvas.x,this._cache.canvas.y),t.drawImage(e._canvas,0,0),t.restore()},_getCachedSceneCanvas:function(){var e,n,r,a,o=this.filters(),c=this._cache.canvas,i=c.scene,l=c.filter,s=l.getContext();if(o){if(!this._filterUpToDate){var h=i.pixelRatio;try{for(e=o.length,s.clear(),s.drawImage(i._canvas,0,0,i.getWidth()/h,i.getHeight()/h),n=s.getImageData(0,0,l.getWidth(),l.getHeight()),r=0;r<e;r++)"function"==typeof(a=o[r])?(a.call(this,n),s.putImageData(n,0,0)):t.Util.error("Filter should be type of function, but got "+typeof a+" insted. Please check correct filters")}catch(e){t.Util.error("Unable to apply filter. "+e.message)}this._filterUpToDate=!0}return l}return i},on:function(t,e){if(3===arguments.length)return this._delegate.apply(this,arguments);var n,r,a,o,c=t.split(" "),i=c.length;for(n=0;n<i;n++)a=(r=c[n].split("."))[0],o=r[1]||"",this.eventListeners[a]||(this.eventListeners[a]=[]),this.eventListeners[a].push({name:o,handler:e});return this},off:function(t,e){var n,r,a,o,c,i=(t||"").split(" "),l=i.length;if(!t)for(r in this.eventListeners)this._off(r);for(n=0;n<l;n++)if(o=(a=i[n].split("."))[0],c=a[1],o)this.eventListeners[o]&&this._off(o,c,e);else for(r in this.eventListeners)this._off(r,c,e);return this},dispatchEvent:function(t){var e={target:this,type:t.type,evt:t};return this.fire(t.type,e),this},addEventListener:function(t,e){return this.on(t,function(t){e.call(this,t.evt)}),this},removeEventListener:function(t){return this.off(t),this},_delegate:function(e,n,r){var a=this;this.on(e,function(e){for(var o=e.target.findAncestors(n,!0,a),c=0;c<o.length;c++)(e=t.Util.cloneObject(e)).currentTarget=o[c],r.call(o[c],e)})},remove:function(){var t=this.getParent();return t&&t.children&&(t.children.splice(this.index,1),t._setChildrenIndices(),delete this.parent),this._clearSelfAndDescendantCache("stage"),this._clearSelfAndDescendantCache("absoluteTransform"),this._clearSelfAndDescendantCache("visible"),this._clearSelfAndDescendantCache("listening"),this._clearSelfAndDescendantCache("absoluteOpacity"),this},destroy:function(){t._removeId(this.getId());for(var e=(this.getName()||"").split(/\s/g),n=0;n<e.length;n++){var r=e[n];t._removeName(r,this._id)}return this.remove(),this},getAttr:function(e){var n="get"+t.Util._capitalize(e);return t.Util._isFunction(this[n])?this[n]():this.attrs[e]},getAncestors:function(){for(var e=this.getParent(),n=new t.Collection;e;)n.push(e),e=e.getParent();return n},getAttrs:function(){return this.attrs||{}},setAttrs:function(e){var n,r;if(!e)return this;for(n in e)"children"!==n&&(r="set"+t.Util._capitalize(n),t.Util._isFunction(this[r])?this[r](e[n]):this._setAttr(n,e[n]));return this},isListening:function(){return this._getCache("listening",this._isListening)},_isListening:function(){var t=this.getListening(),e=this.getParent();return"inherit"===t?!e||e.isListening():t},isVisible:function(){return this._getCache("visible",this._isVisible)},_isVisible:function(){var t=this.getVisible(),e=this.getParent();return"inherit"===t?!e||e.isVisible():t},shouldDrawHit:function(t){var e=this.getLayer();return t&&t.isCache||e&&e.hitGraphEnabled()&&this.isListening()&&this.isVisible()},show:function(){return this.setVisible(!0),this},hide:function(){return this.setVisible(!1),this},getZIndex:function(){return this.index||0},getAbsoluteZIndex:function(){var t,n,r,a,o=this.getDepth(),c=this,i=0;return"Stage"!==c.nodeType&&function l(s){for(t=[],n=s.length,r=0;r<n;r++)a=s[r],i++,a.nodeType!==e&&(t=t.concat(a.getChildren().toArray())),a._id===c._id&&(r=n);t.length>0&&t[0].getDepth()<=o&&l(t)}(c.getStage().getChildren()),i},getDepth:function(){for(var t=0,e=this.parent;e;)t++,e=e.parent;return t},setPosition:function(t){return this.setX(t.x),this.setY(t.y),this},getPosition:function(){return{x:this.getX(),y:this.getY()}},getAbsolutePosition:function(e){var n=this.getAbsoluteTransform(e).getMatrix(),r=new t.Transform,a=this.offset();return r.m=n.slice(),r.translate(a.x,a.y),r.getTranslation()},setAbsolutePosition:function(t){var e,n=this._clearTransform();return this.attrs.x=n.x,this.attrs.y=n.y,delete n.x,delete n.y,(e=this.getAbsoluteTransform()).invert(),e.translate(t.x,t.y),t={x:this.attrs.x+e.getTranslation().x,y:this.attrs.y+e.getTranslation().y},this.setPosition({x:t.x,y:t.y}),this._setTransform(n),this},_setTransform:function(t){var e;for(e in t)this.attrs[e]=t[e];this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")},_clearTransform:function(){var t={x:this.getX(),y:this.getY(),rotation:this.getRotation(),scaleX:this.getScaleX(),scaleY:this.getScaleY(),offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),skewX:this.getSkewX(),skewY:this.getSkewY()};return this.attrs.x=0,this.attrs.y=0,this.attrs.rotation=0,this.attrs.scaleX=1,this.attrs.scaleY=1,this.attrs.offsetX=0,this.attrs.offsetY=0,this.attrs.skewX=0,this.attrs.skewY=0,this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform"),t},move:function(t){var e=t.x,n=t.y,r=this.getX(),a=this.getY();return void 0!==e&&(r+=e),void 0!==n&&(a+=n),this.setPosition({x:r,y:a}),this},_eachAncestorReverse:function(t,e){var n,r,a=[],o=this.getParent();if(e&&e._id===this._id)t(this);else{for(a.unshift(this);o&&(!e||o._id!==e._id);)a.unshift(o),o=o.parent;for(n=a.length,r=0;r<n;r++)t(a[r])}},rotate:function(t){return this.setRotation(this.getRotation()+t),this},moveToTop:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveToTop function is ignored."),!1;var e=this.index;return this.parent.children.splice(e,1),this.parent.children.push(this),this.parent._setChildrenIndices(),!0},moveUp:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveUp function is ignored."),!1;var e=this.index;return e<this.parent.getChildren().length-1&&(this.parent.children.splice(e,1),this.parent.children.splice(e+1,0,this),this.parent._setChildrenIndices(),!0)},moveDown:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveDown function is ignored."),!1;var e=this.index;return e>0&&(this.parent.children.splice(e,1),this.parent.children.splice(e-1,0,this),this.parent._setChildrenIndices(),!0)},moveToBottom:function(){if(!this.parent)return t.Util.warn("Node has no parent. moveToBottom function is ignored."),!1;var e=this.index;return e>0&&(this.parent.children.splice(e,1),this.parent.children.unshift(this),this.parent._setChildrenIndices(),!0)},setZIndex:function(e){if(!this.parent)return t.Util.warn("Node has no parent. zIndex parameter is ignored."),!1;var n=this.index;return this.parent.children.splice(n,1),this.parent.children.splice(e,0,this),this.parent._setChildrenIndices(),this},getAbsoluteOpacity:function(){return this._getCache("absoluteOpacity",this._getAbsoluteOpacity)},_getAbsoluteOpacity:function(){var t=this.getOpacity(),e=this.getParent();return e&&!e._isUnderCache&&(t*=this.getParent().getAbsoluteOpacity()),t},moveTo:function(t){return this.getParent()!==t&&((this.__originalRemove||this.remove).call(this),t.add(this)),this},toObject:function(){var e,n,r,a,o={},c=this.getAttrs();for(e in o.attrs={},c)n=c[e],r="function"==typeof this[e]&&this[e],delete c[e],a=r?r.call(this):null,c[e]=n,a!==n&&(o.attrs[e]=n);return o.className=this.getClassName(),t.Util._prepareToStringify(o)},toJSON:function(){return JSON.stringify(this.toObject())},getParent:function(){return this.parent},findAncestors:function(t,e,n){var r=[];e&&this._isMatch(t)&&r.push(this);for(var a=this.parent;a;){if(a===n)return r;a._isMatch(t)&&r.push(a),a=a.parent}return r},findAncestor:function(t,e,n){return this.findAncestors(t,e,n)[0]},_isMatch:function(e){if(!e)return!1;var n,r,a=e.replace(/ /g,"").split(","),o=a.length;for(n=0;n<o;n++)if(r=a[n],t.Util.isValidSelector(r)||(t.Util.warn('Selector "'+r+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'),t.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'),t.Util.warn("Konva is awesome, right?")),"#"===r.charAt(0)){if(this.id()===r.slice(1))return!0}else if("."===r.charAt(0)){if(this.hasName(r.slice(1)))return!0}else if(0!==this._get(r).length)return!0;return!1},getLayer:function(){var t=this.getParent();return t?t.getLayer():null},getStage:function(){return this._getCache("stage",this._getStage)},_getStage:function(){var t=this.getParent();return t?t.getStage():void 0},fire:function(t,e,n){return(e=e||{}).target=e.target||this,n?this._fireAndBubble(t,e):this._fire(t,e),this},getAbsoluteTransform:function(t){return t?this._getAbsoluteTransform(t):this._getCache("absoluteTransform",this._getAbsoluteTransform)},_getAbsoluteTransform:function(e){var n=new t.Transform;return this._eachAncestorReverse(function(t){var e=t.transformsEnabled();"all"===e?n.multiply(t.getTransform()):"position"===e&&n.translate(t.getX()-t.getOffsetX(),t.getY()-t.getOffsetY())},e),n},getAbsoluteScale:function(t){return t?this._getAbsoluteScale(t):this._getCache("absoluteScale",this._getAbsoluteScale)},_getAbsoluteScale:function(t){for(var e=this;e;)e._isUnderCache&&(t=e),e=e.getParent();var n=1,r=1;return this._eachAncestorReverse(function(t){n*=t.scaleX(),r*=t.scaleY()},t),{x:n,y:r}},getTransform:function(){return this._getCache("transform",this._getTransform)},_getTransform:function(){var e=new t.Transform,n=this.getX(),r=this.getY(),a=t.getAngle(this.getRotation()),o=this.getScaleX(),c=this.getScaleY(),i=this.getSkewX(),l=this.getSkewY(),s=this.getOffsetX(),h=this.getOffsetY();return 0===n&&0===r||e.translate(n,r),0!==a&&e.rotate(a),0===i&&0===l||e.skew(i,l),1===o&&1===c||e.scale(o,c),0===s&&0===h||e.translate(-1*s,-1*h),e},clone:function(e){var r,a,o,c,i,l=t.Util.cloneObject(this.attrs);for(var s in n)delete l[n[s]];for(r in e)l[r]=e[r];var h=new this.constructor(l);for(r in this.eventListeners)for(o=(a=this.eventListeners[r]).length,c=0;c<o;c++)(i=a[c]).name.indexOf("konva")<0&&(h.eventListeners[r]||(h.eventListeners[r]=[]),h.eventListeners[r].push(i));return h},_toKonvaCanvas:function(e){e=e||{};var n=this.getClientRect(),r=this.getStage(),a=void 0!==e.x?e.x:n.x,o=void 0!==e.y?e.y:n.y,c=e.pixelRatio||1,i=new t.SceneCanvas({width:e.width||n.width||(r?r.getWidth():0),height:e.height||n.height||(r?r.getHeight():0),pixelRatio:c}),l=i.getContext();return l.save(),(a||o)&&l.translate(-1*a,-1*o),this.drawScene(i),l.restore(),i},toCanvas:function(t){return this._toKonvaCanvas(t)._canvas},toDataURL:function(t){var e=(t=t||{}).mimeType||null,n=t.quality||null,r=this._toKonvaCanvas(t).toDataURL(e,n);return t.callback&&t.callback(r),r},toImage:function(e){if(!e||!e.callback)throw"callback required for toImage method config argument";var n=e.callback;delete e.callback,t.Util._getImage(this.toDataURL(e),function(t){n(t)})},setSize:function(t){return this.setWidth(t.width),this.setHeight(t.height),this},getSize:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return this.attrs.width||0},getHeight:function(){return this.attrs.height||0},getClassName:function(){return this.className||this.nodeType},getType:function(){return this.nodeType},getDragDistance:function(){return void 0!==this.attrs.dragDistance?this.attrs.dragDistance:this.parent?this.parent.getDragDistance():t.dragDistance},_get:function(t){return this.className===t||this.nodeType===t?[this]:[]},_off:function(t,e,n){var r,a,o,c=this.eventListeners[t];for(r=0;r<c.length;r++)if(a=c[r].name,o=c[r].handler,!("konva"===a&&"konva"!==e||e&&a!==e||n&&n!==o)){if(c.splice(r,1),0===c.length){delete this.eventListeners[t];break}r--}},_fireChangeEvent:function(t,e,n){this._fire(t+"Change",{oldVal:e,newVal:n})},setId:function(e){var n=this.getId();return t._removeId(n),t._addId(this,e),this._setAttr("id",e),this},setName:function(e){var n,r,a=(this.getName()||"").split(/\s/g),o=(e||"").split(/\s/g);for(r=0;r<a.length;r++)n=a[r],-1===o.indexOf(n)&&n&&t._removeName(n,this._id);for(r=0;r<o.length;r++)n=o[r],-1===a.indexOf(n)&&n&&t._addName(this,n);return this._setAttr("name",e),this},addName:function(t){if(!this.hasName(t)){var e=this.name(),n=e?e+" "+t:t;this.setName(n)}return this},hasName:function(t){return-1!==(this.name()||"").split(/\s/g).indexOf(t)},removeName:function(t){var e=(this.name()||"").split(/\s/g),n=e.indexOf(t);return-1!==n&&(e.splice(n,1),this.setName(e.join(" "))),this},setAttr:function(e,n){var r=this["set"+t.Util._capitalize(e)];return t.Util._isFunction(r)?r.call(this,n):this._setAttr(e,n),this},_setAttr:function(e,n){var r;(r=this.attrs[e])===n&&!t.Util.isObject(n)||(void 0===n||null===n?delete this.attrs[e]:this.attrs[e]=n,this._fireChangeEvent(e,r,n))},_setComponentAttr:function(t,e,n){var r;void 0!==n&&((r=this.attrs[t])||(this.attrs[t]=this.getAttr(t)),this.attrs[t][e]=n,this._fireChangeEvent(t,r,n))},_fireAndBubble:function(t,n,r){var a=!0;if(n&&this.nodeType===e&&(n.target=this),"mouseenter"===t&&r&&(this._id===r._id||this.isAncestorOf&&this.isAncestorOf(r))?a=!1:"mouseleave"===t&&r&&(this._id===r._id||this.isAncestorOf&&this.isAncestorOf(r))&&(a=!1),a){this._fire(t,n);var o=("mouseenter"===t||"mouseleave"===t)&&r&&r.isAncestorOf&&r.isAncestorOf(this)&&!r.isAncestorOf(this.parent);(n&&!n.cancelBubble||!n)&&this.parent&&this.parent.isListening()&&!o&&(r&&r.parent?this._fireAndBubble.call(this.parent,t,n,r.parent):this._fireAndBubble.call(this.parent,t,n))}},_fire:function(t,e){var n,r=this.eventListeners[t];if((e=e||{}).currentTarget=this,e.type=t,r)for(n=0;n<r.length;n++)r[n].handler.call(this,e)},draw:function(){return this.drawScene(),this.drawHit(),this}}),t.Node.create=function(e,n){return t.Util._isString(e)&&(e=JSON.parse(e)),this._createNode(e,n)},t.Node._createNode=function(e,n){var r,a,o,c=t.Node.prototype.getClassName.call(e),i=e.children;if(n&&(e.attrs.container=n),r=new t[c](e.attrs),i)for(a=i.length,o=0;o<a;o++)r.add(this._createNode(i[o]));return r},t.Factory.addOverloadedGetterSetter(t.Node,"position"),t.Factory.addGetterSetter(t.Node,"x",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"y",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"globalCompositeOperation","source-over",t.Validators.getStringValidator()),t.Factory.addGetterSetter(t.Node,"opacity",1,t.Validators.getNumberValidator()),t.Factory.addGetter(t.Node,"name"),t.Factory.addOverloadedGetterSetter(t.Node,"name"),t.Factory.addGetter(t.Node,"id"),t.Factory.addOverloadedGetterSetter(t.Node,"id"),t.Factory.addGetterSetter(t.Node,"rotation",0,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"scale",["x","y"]),t.Factory.addGetterSetter(t.Node,"scaleX",1,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"scaleY",1,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"skew",["x","y"]),t.Factory.addGetterSetter(t.Node,"skewX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"skewY",0,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Node,"offset",["x","y"]),t.Factory.addGetterSetter(t.Node,"offsetX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Node,"offsetY",0,t.Validators.getNumberValidator()),t.Factory.addSetter(t.Node,"dragDistance",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"dragDistance"),t.Factory.addSetter(t.Node,"width",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"width"),t.Factory.addSetter(t.Node,"height",t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"height"),t.Factory.addGetterSetter(t.Node,"listening","inherit",function(e){return!0===e||!1===e||"inherit"===e||t.Util.warn(e+' is a not valid value for "listening" attribute. The value may be true, false or "inherit".'),e}),t.Factory.addGetterSetter(t.Node,"preventDefault",!0,t.Validators.getBooleanValidator()),t.Factory.addGetterSetter(t.Node,"filters",null,function(t){return this._filterUpToDate=!1,t}),t.Factory.addGetterSetter(t.Node,"visible","inherit",function(e){return!0===e||!1===e||"inherit"===e||t.Util.warn(e+' is a not valid value for "visible" attribute. The value may be true, false or "inherit".'),e}),t.Factory.addGetterSetter(t.Node,"transformsEnabled","all",t.Validators.getStringValidator()),t.Factory.addOverloadedGetterSetter(t.Node,"size"),t.Factory.backCompat(t.Node,{rotateDeg:"rotate",setRotationDeg:"setRotation",getRotationDeg:"getRotation"}),t.Collection.mapMethods(t.Node)}(Konva),function(){"use strict";Konva.Filters.Grayscale=function(t){var e,n,r=t.data,a=r.length;for(e=0;e<a;e+=4)n=.34*r[e]+.5*r[e+1]+.16*r[e+2],r[e]=n,r[e+1]=n,r[e+2]=n}}(),function(t){"use strict";t.Filters.Brighten=function(t){var e,n=255*this.brightness(),r=t.data,a=r.length;for(e=0;e<a;e+=4)r[e]+=n,r[e+1]+=n,r[e+2]+=n},t.Factory.addGetterSetter(t.Node,"brightness",0,t.Validators.getNumberValidator(),t.Factory.afterSetFilter)}(Konva),function(){"use strict";Konva.Filters.Invert=function(t){var e,n=t.data,r=n.length;for(e=0;e<r;e+=4)n[e]=255-n[e],n[e+1]=255-n[e+1],n[e+2]=255-n[e+2]}}(),function(t){"use strict";function e(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}var n=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],r=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];t.Filters.Blur=function(t){var a=Math.round(this.blurRadius());a>0&&function(t,a){var o,c,i,l,s,h,d,u,v,p,g,f,m,z,x,M,b,w,y,H,C,V,L,B,k=t.data,S=t.width,_=t.height,T=a+a+1,F=S-1,P=_-1,E=a+1,I=E*(E+1)/2,O=new e,N=null,A=O,R=null,D=null,j=n[a],K=r[a];for(i=1;i<T;i++)A=A.next=new e,i===E&&(N=A);for(A.next=O,d=h=0,c=0;c<_;c++){for(M=b=w=y=u=v=p=g=0,f=E*(H=k[h]),m=E*(C=k[h+1]),z=E*(V=k[h+2]),x=E*(L=k[h+3]),u+=I*H,v+=I*C,p+=I*V,g+=I*L,A=O,i=0;i<E;i++)A.r=H,A.g=C,A.b=V,A.a=L,A=A.next;for(i=1;i<E;i++)l=h+((F<i?F:i)<<2),u+=(A.r=H=k[l])*(B=E-i),v+=(A.g=C=k[l+1])*B,p+=(A.b=V=k[l+2])*B,g+=(A.a=L=k[l+3])*B,M+=H,b+=C,w+=V,y+=L,A=A.next;for(R=O,D=N,o=0;o<S;o++)k[h+3]=L=g*j>>K,0!==L?(L=255/L,k[h]=(u*j>>K)*L,k[h+1]=(v*j>>K)*L,k[h+2]=(p*j>>K)*L):k[h]=k[h+1]=k[h+2]=0,u-=f,v-=m,p-=z,g-=x,f-=R.r,m-=R.g,z-=R.b,x-=R.a,l=d+((l=o+a+1)<F?l:F)<<2,u+=M+=R.r=k[l],v+=b+=R.g=k[l+1],p+=w+=R.b=k[l+2],g+=y+=R.a=k[l+3],R=R.next,f+=H=D.r,m+=C=D.g,z+=V=D.b,x+=L=D.a,M-=H,b-=C,w-=V,y-=L,D=D.next,h+=4;d+=S}for(o=0;o<S;o++){for(b=w=y=M=v=p=g=u=0,f=E*(H=k[h=o<<2]),m=E*(C=k[h+1]),z=E*(V=k[h+2]),x=E*(L=k[h+3]),u+=I*H,v+=I*C,p+=I*V,g+=I*L,A=O,i=0;i<E;i++)A.r=H,A.g=C,A.b=V,A.a=L,A=A.next;for(s=S,i=1;i<=a;i++)h=s+o<<2,u+=(A.r=H=k[h])*(B=E-i),v+=(A.g=C=k[h+1])*B,p+=(A.b=V=k[h+2])*B,g+=(A.a=L=k[h+3])*B,M+=H,b+=C,w+=V,y+=L,A=A.next,i<P&&(s+=S);for(h=o,R=O,D=N,c=0;c<_;c++)k[3+(l=h<<2)]=L=g*j>>K,L>0?(L=255/L,k[l]=(u*j>>K)*L,k[l+1]=(v*j>>K)*L,k[l+2]=(p*j>>K)*L):k[l]=k[l+1]=k[l+2]=0,u-=f,v-=m,p-=z,g-=x,f-=R.r,m-=R.g,z-=R.b,x-=R.a,l=o+((l=c+E)<P?l:P)*S<<2,u+=M+=R.r=k[l],v+=b+=R.g=k[l+1],p+=w+=R.b=k[l+2],g+=y+=R.a=k[l+3],R=R.next,f+=H=D.r,m+=C=D.g,z+=V=D.b,x+=L=D.a,M-=H,b-=C,w-=V,y-=L,D=D.next,h+=S}}(t,a)},t.Factory.addGetterSetter(t.Node,"blurRadius",0,t.Validators.getNumberValidator(),t.Factory.afterSetFilter)}(Konva),function(){"use strict";function t(t,e,n){var r=4*(n*t.width+e),a=[];return a.push(t.data[r++],t.data[r++],t.data[r++],t.data[r++]),a}function e(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)+Math.pow(t[2]-e[2],2))}Konva.Filters.Mask=function(n){var r=function(n,r){var a=t(n,0,0),o=t(n,n.width-1,0),c=t(n,0,n.height-1),i=t(n,n.width-1,n.height-1),l=r||10;if(e(a,o)<l&&e(o,i)<l&&e(i,c)<l&&e(c,a)<l){for(var s=function(t){for(var e=[0,0,0],n=0;n<t.length;n++)e[0]+=t[n][0],e[1]+=t[n][1],e[2]+=t[n][2];return e[0]/=t.length,e[1]/=t.length,e[2]/=t.length,e}([o,a,i,c]),h=[],d=0;d<n.width*n.height;d++){var u=e(s,[n.data[4*d],n.data[4*d+1],n.data[4*d+2]]);h[d]=u<l?0:255}return h}}(n,this.threshold());return r&&function(t,e){for(var n=0;n<t.width*t.height;n++)t.data[4*n+3]=e[n]}(n,r=function(t,e,n){for(var r=[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9],a=Math.round(Math.sqrt(r.length)),o=Math.floor(a/2),c=[],i=0;i<n;i++)for(var l=0;l<e;l++){for(var s=i*e+l,h=0,d=0;d<a;d++)for(var u=0;u<a;u++){var v=i+d-o,p=l+u-o;if(v>=0&&v<n&&p>=0&&p<e){var g=r[d*a+u];h+=t[v*e+p]*g}}c[s]=h}return c}(r=function(t,e,n){for(var r=[1,1,1,1,1,1,1,1,1],a=Math.round(Math.sqrt(r.length)),o=Math.floor(a/2),c=[],i=0;i<n;i++)for(var l=0;l<e;l++){for(var s=i*e+l,h=0,d=0;d<a;d++)for(var u=0;u<a;u++){var v=i+d-o,p=l+u-o;if(v>=0&&v<n&&p>=0&&p<e){var g=r[d*a+u];h+=t[v*e+p]*g}}c[s]=h>=1020?255:0}return c}(r=function(t,e,n){for(var r=[1,1,1,1,0,1,1,1,1],a=Math.round(Math.sqrt(r.length)),o=Math.floor(a/2),c=[],i=0;i<n;i++)for(var l=0;l<e;l++){for(var s=i*e+l,h=0,d=0;d<a;d++)for(var u=0;u<a;u++){var v=i+d-o,p=l+u-o;if(v>=0&&v<n&&p>=0&&p<e){var g=r[d*a+u];h+=t[v*e+p]*g}}c[s]=2040===h?255:0}return c}(r,n.width,n.height),n.width,n.height),n.width,n.height)),n},Konva.Factory.addGetterSetter(Konva.Node,"threshold",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.RGB=function(t){var e,n,r=t.data,a=r.length,o=this.red(),c=this.green(),i=this.blue();for(e=0;e<a;e+=4)n=(.34*r[e]+.5*r[e+1]+.16*r[e+2])/255,r[e]=n*o,r[e+1]=n*c,r[e+2]=n*i,r[e+3]=r[e+3]},Konva.Factory.addGetterSetter(Konva.Node,"red",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"green",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"blue",0,Konva.Validators.RGBComponent,Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.RGBA=function(t){var e,n,r=t.data,a=r.length,o=this.red(),c=this.green(),i=this.blue(),l=this.alpha();for(e=0;e<a;e+=4)n=1-l,r[e]=o*l+r[e]*n,r[e+1]=c*l+r[e+1]*n,r[e+2]=i*l+r[e+2]*n},Konva.Factory.addGetterSetter(Konva.Node,"red",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"green",0,function(t){return this._filterUpToDate=!1,t>255?255:t<0?0:Math.round(t)}),Konva.Factory.addGetterSetter(Konva.Node,"blue",0,Konva.Validators.RGBComponent,Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"alpha",1,function(t){return this._filterUpToDate=!1,t>1?1:t<0?0:t})}(),function(){"use strict";Konva.Filters.HSV=function(t){var e,n,r,a,o,c=t.data,i=c.length,l=Math.pow(2,this.value()),s=Math.pow(2,this.saturation()),h=Math.abs(this.hue()+360)%360,d=l*s*Math.cos(h*Math.PI/180),u=l*s*Math.sin(h*Math.PI/180),v=.299*l+.701*d+.167*u,p=.587*l-.587*d+.33*u,g=.114*l-.114*d-.497*u,f=.299*l-.299*d-.328*u,m=.587*l+.413*d+.035*u,z=.114*l-.114*d+.293*u,x=.299*l-.3*d+1.25*u,M=.587*l-.586*d-1.05*u,b=.114*l+.886*d-.2*u;for(e=0;e<i;e+=4)n=c[e+0],r=c[e+1],a=c[e+2],o=c[e+3],c[e+0]=v*n+p*r+g*a,c[e+1]=f*n+m*r+z*a,c[e+2]=x*n+M*r+b*a,c[e+3]=o},Konva.Factory.addGetterSetter(Konva.Node,"hue",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"saturation",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"value",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Factory.addGetterSetter(Konva.Node,"hue",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"saturation",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"luminance",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Filters.HSL=function(t){var e,n,r,a,o,c=t.data,i=c.length,l=Math.pow(2,this.saturation()),s=Math.abs(this.hue()+360)%360,h=127*this.luminance(),d=1*l*Math.cos(s*Math.PI/180),u=1*l*Math.sin(s*Math.PI/180),v=.299+.701*d+.167*u,p=.587-.587*d+.33*u,g=.114-.114*d-.497*u,f=.299-.299*d-.328*u,m=.587+.413*d+.035*u,z=.114-.114*d+.293*u,x=.299-.3*d+1.25*u,M=.587-.586*d-1.05*u,b=.114+.886*d-.2*u;for(e=0;e<i;e+=4)n=c[e+0],r=c[e+1],a=c[e+2],o=c[e+3],c[e+0]=v*n+p*r+g*a+h,c[e+1]=f*n+m*r+z*a+h,c[e+2]=x*n+M*r+b*a+h,c[e+3]=o}}(),function(){"use strict";Konva.Filters.Emboss=function(t){var e=10*this.embossStrength(),n=255*this.embossWhiteLevel(),r=this.embossDirection(),a=this.embossBlend(),o=0,c=0,i=t.data,l=t.width,s=t.height,h=4*l,d=s;switch(r){case"top-left":o=-1,c=-1;break;case"top":o=-1,c=0;break;case"top-right":o=-1,c=1;break;case"right":o=0,c=1;break;case"bottom-right":o=1,c=1;break;case"bottom":o=1,c=0;break;case"bottom-left":o=1,c=-1;break;case"left":o=0,c=-1;break;default:Konva.Util.error("Unknown emboss direction: "+r)}do{var u=(d-1)*h,v=o;d+v<1&&(v=0),d+v>s&&(v=0);var p=(d-1+v)*l*4,g=l;do{var f=u+4*(g-1),m=c;g+m<1&&(m=0),g+m>l&&(m=0);var z=p+4*(g-1+m),x=i[f]-i[z],M=i[f+1]-i[z+1],b=i[f+2]-i[z+2],w=x,y=w>0?w:-w;if((M>0?M:-M)>y&&(w=M),(b>0?b:-b)>y&&(w=b),w*=e,a){var H=i[f]+w,C=i[f+1]+w,V=i[f+2]+w;i[f]=H>255?255:H<0?0:H,i[f+1]=C>255?255:C<0?0:C,i[f+2]=V>255?255:V<0?0:V}else{var L=n-w;L<0?L=0:L>255&&(L=255),i[f]=i[f+1]=i[f+2]=L}}while(--g)}while(--d)},Konva.Factory.addGetterSetter(Konva.Node,"embossStrength",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossWhiteLevel",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossDirection","top-left",null,Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"embossBlend",!1,null,Konva.Factory.afterSetFilter)}(),function(){"use strict";function t(t,e,n,r,a){var o=n-e,c=a-r;return 0===o?r+c/2:0===c?r:c*((t-e)/o)+r}Konva.Filters.Enhance=function(e){var n,r,a,o,c=e.data,i=c.length,l=c[0],s=l,h=c[1],d=h,u=c[2],v=u,p=this.enhance();if(0!==p){for(o=0;o<i;o+=4)(n=c[o+0])<l?l=n:n>s&&(s=n),(r=c[o+1])<h?h=r:r>d&&(d=r),(a=c[o+2])<u?u=a:a>v&&(v=a);var g,f,m,z,x,M,b,w,y;for(s===l&&(s=255,l=0),d===h&&(d=255,h=0),v===u&&(v=255,u=0),p>0?(f=s+p*(255-s),m=l-p*(l-0),x=d+p*(255-d),M=h-p*(h-0),w=v+p*(255-v),y=u-p*(u-0)):(f=s+p*(s-(g=.5*(s+l))),m=l+p*(l-g),x=d+p*(d-(z=.5*(d+h))),M=h+p*(h-z),w=v+p*(v-(b=.5*(v+u))),y=u+p*(u-b)),o=0;o<i;o+=4)c[o+0]=t(c[o+0],l,s,m,f),c[o+1]=t(c[o+1],h,d,M,x),c[o+2]=t(c[o+2],u,v,y,w)}},Konva.Factory.addGetterSetter(Konva.Node,"enhance",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Posterize=function(t){var e,n=Math.round(254*this.levels())+1,r=t.data,a=r.length,o=255/n;for(e=0;e<a;e+=1)r[e]=Math.floor(r[e]/o)*o},Konva.Factory.addGetterSetter(Konva.Node,"levels",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Noise=function(t){var e,n=255*this.noise(),r=t.data,a=r.length,o=n/2;for(e=0;e<a;e+=4)r[e+0]+=o-2*o*Math.random(),r[e+1]+=o-2*o*Math.random(),r[e+2]+=o-2*o*Math.random()},Konva.Factory.addGetterSetter(Konva.Node,"noise",.2,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Pixelate=function(t){var e,n,r,a,o,c,i,l,s,h,d,u,v,p,g=Math.ceil(this.pixelSize()),f=t.width,m=t.height,z=Math.ceil(f/g),x=Math.ceil(m/g);if(t=t.data,g<=0)Konva.Util.error("pixelSize value can not be <= 0");else for(u=0;u<z;u+=1)for(v=0;v<x;v+=1){for(a=0,o=0,c=0,i=0,s=(l=u*g)+g,d=(h=v*g)+g,p=0,e=l;e<s;e+=1)if(!(e>=f))for(n=h;n<d;n+=1)n>=m||(a+=t[0+(r=4*(f*n+e))],o+=t[r+1],c+=t[r+2],i+=t[r+3],p+=1);for(a/=p,o/=p,c/=p,i/=p,e=l;e<s;e+=1)if(!(e>=f))for(n=h;n<d;n+=1)n>=m||(t[0+(r=4*(f*n+e))]=a,t[r+1]=o,t[r+2]=c,t[r+3]=i)}},Konva.Factory.addGetterSetter(Konva.Node,"pixelSize",8,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";Konva.Filters.Threshold=function(t){var e,n=255*this.threshold(),r=t.data,a=r.length;for(e=0;e<a;e+=1)r[e]=r[e]<n?0:255},Konva.Factory.addGetterSetter(Konva.Node,"threshold",.5,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(){"use strict";
/**
   * Sepia Filter
   * Based on: Pixastic Lib - Sepia filter - v0.1.0
   * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
   * @function
   * @name Sepia
   * @memberof Konva.Filters
   * @param {Object} imageData
   * @author Jacob Seidelin <jseidelin@nihilogic.dk>
   * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
   * @example
   * node.cache();
   * node.filters([Konva.Filters.Sepia]);
   */Konva.Filters.Sepia=function(t){var e,n,r,a,o,c,i,l,s,h=t.data,d=t.width,u=t.height,v=4*d;do{e=(u-1)*v,n=d;do{i=.393*(a=h[r=e+4*(n-1)])+.769*(o=h[r+1])+.189*(c=h[r+2]),l=.349*a+.686*o+.168*c,s=.272*a+.534*o+.131*c,h[r]=i>255?255:i,h[r+1]=l>255?255:l,h[r+2]=s>255?255:s,h[r+3]=h[r+3]}while(--n)}while(--u)}}(),function(){"use strict";Konva.Filters.Solarize=function(t){var e=t.data,n=t.width,r=4*n,a=t.height;do{var o=(a-1)*r,c=n;do{var i=o+4*(c-1),l=e[i],s=e[i+1],h=e[i+2];l>127&&(l=255-l),s>127&&(s=255-s),h>127&&(h=255-h),e[i]=l,e[i+1]=s,e[i+2]=h}while(--c)}while(--a)}}(),function(){"use strict";Konva.Filters.Kaleidoscope=function(t){var e,n,r,a,o,c,i,l,s,h=t.width,d=t.height,u=Math.round(this.kaleidoscopePower()),v=Math.round(this.kaleidoscopeAngle()),p=Math.floor(h*(v%360)/360);if(!(u<1)){var g=Konva.Util.createCanvasElement();g.width=h,g.height=d;var f=g.getContext("2d").getImageData(0,0,h,d);!function(t,e,n){var r,a,o,c,i=t.data,l=e.data,s=t.width,h=t.height,d=n.polarCenterX||s/2,u=n.polarCenterY||h/2,v=0,p=0,g=0,f=0,m=Math.sqrt(d*d+u*u);a=s-d,o=h-u,m=(c=Math.sqrt(a*a+o*o))>m?c:m;var z,x,M,b,w=h,y=s,H=360/y*Math.PI/180;for(x=0;x<y;x+=1)for(M=Math.sin(x*H),b=Math.cos(x*H),z=0;z<w;z+=1)a=Math.floor(d+m*z/w*b),v=i[0+(r=4*((o=Math.floor(u+m*z/w*M))*s+a))],p=i[r+1],g=i[r+2],f=i[r+3],l[0+(r=4*(x+z*s))]=v,l[r+1]=p,l[r+2]=g,l[r+3]=f}(t,f,{polarCenterX:h/2,polarCenterY:d/2});for(var m=h/Math.pow(2,u);m<=8;)m*=2,u-=1;var z=m=Math.ceil(m),x=0,M=z,b=1;for(p+m>h&&(x=z,M=0,b=-1),n=0;n<d;n+=1)for(e=x;e!==M;e+=b)l=4*(h*n+Math.round(e+p)%h),a=f.data[l+0],o=f.data[l+1],c=f.data[l+2],i=f.data[l+3],s=4*(h*n+e),f.data[s+0]=a,f.data[s+1]=o,f.data[s+2]=c,f.data[s+3]=i;for(n=0;n<d;n+=1)for(z=Math.floor(m),r=0;r<u;r+=1){for(e=0;e<z+1;e+=1)l=4*(h*n+e),a=f.data[l+0],o=f.data[l+1],c=f.data[l+2],i=f.data[l+3],s=4*(h*n+2*z-e-1),f.data[s+0]=a,f.data[s+1]=o,f.data[s+2]=c,f.data[s+3]=i;z*=2}!function(t,e,n){var r,a,o,c,i,l,s=t.data,h=e.data,d=t.width,u=t.height,v=n.polarCenterX||d/2,p=n.polarCenterY||u/2,g=0,f=0,m=0,z=0,x=Math.sqrt(v*v+p*p);a=d-v,o=u-p,x=(l=Math.sqrt(a*a+o*o))>x?l:x;var M,b,w,y=u,H=d,C=n.polarRotation||0;for(a=0;a<d;a+=1)for(o=0;o<u;o+=1)c=a-v,i=o-p,M=Math.sqrt(c*c+i*i)*y/x,b=(b=(180*Math.atan2(i,c)/Math.PI+360+C)%360)*H/360,w=Math.floor(b),g=s[0+(r=4*(Math.floor(M)*d+w))],f=s[r+1],m=s[r+2],z=s[r+3],h[0+(r=4*(o*d+a))]=g,h[r+1]=f,h[r+2]=m,h[r+3]=z}(f,t,{polarRotation:0})}},Konva.Factory.addGetterSetter(Konva.Node,"kaleidoscopePower",2,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter),Konva.Factory.addGetterSetter(Konva.Node,"kaleidoscopeAngle",0,Konva.Validators.getNumberValidator(),Konva.Factory.afterSetFilter)}(),function(t){"use strict";t.Filters.Contrast=function(t){var e,n=Math.pow((parseInt(this.contrast())+100)/100,2),r=t.data,a=r.length,o=150,c=150,i=150;for(e=0;e<a;e+=4)o=r[e],c=r[e+1],i=r[e+2],o/=255,o-=.5,o*=n,o+=.5,c/=255,c-=.5,c*=n,c+=.5,c*=255,i/=255,i-=.5,i*=n,i+=.5,i*=255,o=(o*=255)<0?0:o>255?255:o,c=c<0?0:c>255?255:c,i=i<0?0:i>255?255:i,r[e]=o,r[e+1]=c,r[e+2]=i},t.Factory.addGetterSetter(t.Node,"contrast",0,t.Validators.getNumberValidator(),t.Factory.afterSetFilter)}(Konva),function(){"use strict";Konva.Container=function(t){this.__init(t)},Konva.Util.addMethods(Konva.Container,{__init:function(t){this.children=new Konva.Collection,Konva.Node.call(this,t)},getChildren:function(t){if(!t)return this.children;var e=new Konva.Collection;return this.children.each(function(n){t(n)&&e.push(n)}),e},hasChildren:function(){return this.getChildren().length>0},removeChildren:function(){for(var t,e=Konva.Collection.toCollection(this.children),n=0;n<e.length;n++)delete(t=e[n]).parent,t.index=0,t.remove();return e=null,this.children=new Konva.Collection,this},destroyChildren:function(){for(var t,e=Konva.Collection.toCollection(this.children),n=0;n<e.length;n++)delete(t=e[n]).parent,t.index=0,t.destroy();return e=null,this.children=new Konva.Collection,this},add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t.getParent())return t.moveTo(this),this;var n=this.children;return this._validateAdd(t),t.index=n.length,t.parent=this,n.push(t),this._fire("add",{child:t}),Konva.DD&&t.isDragging()&&Konva.DD.anim.setLayers(t.getLayer()),this},destroy:function(){return this.hasChildren()&&this.destroyChildren(),Konva.Node.prototype.destroy.call(this),this},find:function(t){return this._generalFind(t,!1)},findOne:function(t){var e=this._generalFind(t,!0);return e.length>0?e[0]:void 0},_generalFind:function(t,e){var n=[];return"string"==typeof t?n=this._findByString(t,e):"function"==typeof t&&(n=this._findByFunction(t,e)),Konva.Collection.toCollection(n)},_findByString:function(t){var e,n,r,a,o,c,i,l=[],s=t.replace(/ /g,"").split(","),h=s.length;for(e=0;e<h;e++){if(r=s[e],!Konva.Util.isValidSelector(r)){var d='Selector "'+r+'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".\nIf you have a custom shape with such className, please change it to start with upper letter like "Triangle".\nKonva is awesome, right?';Konva.Util.warn(d)}if("#"===r.charAt(0))(o=this._getNodeById(r.slice(1)))&&l.push(o);else if("."===r.charAt(0))a=this._getNodesByName(r.slice(1)),l=l.concat(a);else for(i=(c=this.getChildren()).length,n=0;n<i;n++)l=l.concat(c[n]._get(r))}return l},_findByFunction:function(t,e){var n=[],r=function(a){if(!(e&&n.length>0)){var o=a.getChildren(),c=o.length;t(a)&&(n=n.concat(a));for(var i=0;i<c;i++)r(o[i])}};return r(this),n},_getNodeById:function(t){var e=Konva.ids[t];return void 0!==e&&this.isAncestorOf(e)?e:null},_getNodesByName:function(t){var e=Konva.names[t]||[];return this._getDescendants(e)},_get:function(t){for(var e=Konva.Node.prototype._get.call(this,t),n=this.getChildren(),r=n.length,a=0;a<r;a++)e=e.concat(n[a]._get(t));return e},toObject:function(){var t=Konva.Node.prototype.toObject.call(this);t.children=[];for(var e=this.getChildren(),n=e.length,r=0;r<n;r++){var a=e[r];t.children.push(a.toObject())}return t},_getDescendants:function(t){for(var e=[],n=t.length,r=0;r<n;r++){var a=t[r];this.isAncestorOf(a)&&e.push(a)}return e},isAncestorOf:function(t){for(var e=t.getParent();e;){if(e._id===this._id)return!0;e=e.getParent()}return!1},clone:function(t){var e=Konva.Node.prototype.clone.call(this,t);return this.getChildren().each(function(t){e.add(t.clone())}),e},getAllIntersections:function(t){var e=[];return this.find("Shape").each(function(n){n.isVisible()&&n.intersects(t)&&e.push(n)}),e},_setChildrenIndices:function(){this.children.each(function(t,e){t.index=e})},drawScene:function(t,e,n){var r=this.getLayer(),a=t||r&&r.getCanvas(),o=a&&a.getContext(),c=this._cache.canvas,i=c&&c.scene;return(this.isVisible()||n)&&(!n&&i?(o.save(),r._applyTransform(this,o,e),this._drawCachedSceneCanvas(o),o.restore()):this._drawChildren(a,"drawScene",e,!1,n)),this},drawHit:function(t,e,n){var r=this.getLayer(),a=t||r&&r.hitCanvas,o=a&&a.getContext(),c=this._cache.canvas,i=c&&c.hit;return(this.shouldDrawHit(a)||n)&&(r&&r.clearHitCache(),!n&&i?(o.save(),r._applyTransform(this,o,e),this._drawCachedHitCanvas(o),o.restore()):this._drawChildren(a,"drawHit",e)),this},_drawChildren:function(t,e,n,r,a){var o,c,i=this.getLayer(),l=t&&t.getContext(),s=this.getClipWidth(),h=this.getClipHeight(),d=this.getClipFunc(),u=s&&h||d;if(u&&i){l.save();var v=this.getAbsoluteTransform(n),p=v.getMatrix();l.transform(p[0],p[1],p[2],p[3],p[4],p[5]),l.beginPath(),d?d.call(this,l,this):(o=this.getClipX(),c=this.getClipY(),l.rect(o,c,s,h)),l.clip(),p=v.copy().invert().getMatrix(),l.transform(p[0],p[1],p[2],p[3],p[4],p[5])}this.children.each(function(o){o[e](t,n,r,a)}),u&&l.restore()},shouldDrawHit:function(t){var e=this.getLayer(),n=Konva.DD&&Konva.isDragging()&&-1!==Konva.DD.anim.getLayers().indexOf(e);return t&&t.isCache||e&&e.hitGraphEnabled()&&this.isVisible()&&!n},getClientRect:function(t){var e,n,r,a,o,c=(t=t||{}).skipTransform,i=t.relativeTo,l=this;this.children.each(function(t){if(t.getVisible()){var o=t.getClientRect({relativeTo:l});void 0===e?(e=o.x,n=o.y,r=o.x+o.width,a=o.y+o.height):(e=Math.min(e,o.x),n=Math.min(n,o.y),r=Math.max(r,o.x+o.width),a=Math.max(a,o.y+o.height))}});for(var s=this.find("Shape"),h=!1,d=0;d<s.length;d++)if(s[d].getVisible()){h=!0;break}return o=h?{x:e,y:n,width:r-e,height:a-n}:{x:0,y:0,width:0,height:0},c?o:this._transformedRect(o,i)}}),Konva.Util.extend(Konva.Container,Konva.Node),Konva.Container.prototype.get=Konva.Container.prototype.find,Konva.Factory.addComponentsGetterSetter(Konva.Container,"clip",["x","y","width","height"]),Konva.Factory.addGetterSetter(Konva.Container,"clipX",void 0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Container,"clipY",void 0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Container,"clipWidth",void 0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Container,"clipHeight",void 0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Container,"clipFunc"),Konva.Collection.mapMethods(Konva.Container)}(),function(t){"use strict";var e="hasShadow",n="shadowRGBA";function r(t){t.fill()}function a(t){t.stroke()}function o(t){t.fill()}function c(t){t.stroke()}function i(){this._clearCache(e)}function l(){this._clearCache(n)}t.Shape=function(t){this.__init(t)},t.Util.addMethods(t.Shape,{__init:function(e){this.nodeType="Shape",this._fillFunc=r,this._strokeFunc=a,this._fillFuncHit=o,this._strokeFuncHit=c;for(var n,s=t.shapes;!(n=t.Util.getRandomColor())||n in s;);this.colorKey=n,s[n]=this,t.Node.call(this,e),this.on("shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",i),this.on("shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",l)},hasChildren:function(){return!1},getChildren:function(){return[]},getContext:function(){return this.getLayer().getContext()},getCanvas:function(){return this.getLayer().getCanvas()},hasShadow:function(){return this._getCache(e,this._hasShadow)},_hasShadow:function(){return this.getShadowEnabled()&&0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())},getShadowRGBA:function(){return this._getCache(n,this._getShadowRGBA)},_getShadowRGBA:function(){if(this.hasShadow()){var e=t.Util.colorToRGBA(this.shadowColor());return"rgba("+e.r+","+e.g+","+e.b+","+e.a*(this.getShadowOpacity()||1)+")"}},hasFill:function(){return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())},hasStroke:function(){return this.strokeEnabled()&&!(!this.stroke()&&!this.getStrokeLinearGradientColorStops())},intersects:function(t){var e=this.getStage().bufferHitCanvas;return e.getContext().clear(),this.drawHit(e),e.context.getImageData(Math.round(t.x),Math.round(t.y),1,1).data[3]>0},destroy:function(){return t.Node.prototype.destroy.call(this),delete t.shapes[this.colorKey],this},_useBufferCanvas:function(t){return!t&&this.perfectDrawEnabled()&&1!==this.getAbsoluteOpacity()&&this.hasFill()&&this.hasStroke()&&this.getStage()||this.perfectDrawEnabled()&&this.hasShadow()&&1!==this.getAbsoluteOpacity()&&this.hasFill()&&this.hasStroke()&&this.getStage()},getSelfRect:function(){var t=this.getSize();return{x:this._centroid?Math.round(-t.width/2):0,y:this._centroid?Math.round(-t.height/2):0,width:t.width,height:t.height}},getClientRect:function(t){var e=(t=t||{}).skipTransform,n=t.relativeTo,r=this.getSelfRect(),a=this.hasStroke()&&this.strokeWidth()||0,o=r.width+a,c=r.height+a,i=this.hasShadow()?this.shadowOffsetX():0,l=this.hasShadow()?this.shadowOffsetY():0,s=o+Math.abs(i),h=c+Math.abs(l),d=this.hasShadow()&&this.shadowBlur()||0,u=s+2*d,v=h+2*d,p=0;Math.round(a/2)!==a/2&&(p=1);var g={width:u+p,height:v+p,x:-Math.round(a/2+d)+Math.min(i,0)+r.x,y:-Math.round(a/2+d)+Math.min(l,0)+r.y};return e?g:this._transformedRect(g,n)},drawScene:function(t,e,n,r){var a,o,c=this.getLayer(),i=t||c.getCanvas(),l=i.getContext(),s=this._cache.canvas,h=this.sceneFunc(),d=this.hasShadow(),u=this.hasStroke();if(!this.isVisible()&&!n)return this;if(s)return l.save(),c._applyTransform(this,l,e),this._drawCachedSceneCanvas(l),l.restore(),this;if(!h)return this;if(l.save(),this._useBufferCanvas(n)&&!r){if((o=(a=this.getStage().bufferCanvas).getContext()).clear(),o.save(),o._applyLineJoin(this),!n)if(c)c._applyTransform(this,o,e);else{var v=this.getAbsoluteTransform(e).getMatrix();l.transform(v[0],v[1],v[2],v[3],v[4],v[5])}h.call(this,o,this),o.restore();var p=a.pixelRatio;d&&!i.hitCanvas?(l.save(),l._applyShadow(this),l._applyOpacity(this),l._applyGlobalCompositeOperation(this),l.drawImage(a._canvas,0,0,a.width/p,a.height/p),l.restore()):(l._applyOpacity(this),l._applyGlobalCompositeOperation(this),l.drawImage(a._canvas,0,0,a.width/p,a.height/p))}else{if(l._applyLineJoin(this),!n)if(c)c._applyTransform(this,l,e);else{var g=this.getAbsoluteTransform(e).getMatrix();l.transform(g[0],g[1],g[2],g[3],g[4],g[5])}d&&u&&!i.hitCanvas?(l.save(),n||(l._applyOpacity(this),l._applyGlobalCompositeOperation(this)),l._applyShadow(this),h.call(this,l,this),l.restore(),this.hasFill()&&this.getShadowForStrokeEnabled()&&h.call(this,l,this)):d&&!i.hitCanvas?(l.save(),n||(l._applyOpacity(this),l._applyGlobalCompositeOperation(this)),l._applyShadow(this),h.call(this,l,this),l.restore()):(n||(l._applyOpacity(this),l._applyGlobalCompositeOperation(this)),h.call(this,l,this))}return l.restore(),this},drawHit:function(t,e,n){var r=this.getLayer(),a=t||r.hitCanvas,o=a.getContext(),c=this.hitFunc()||this.sceneFunc(),i=this._cache.canvas,l=i&&i.hit;if(!this.shouldDrawHit(a)&&!n)return this;if(r&&r.clearHitCache(),l)return o.save(),r._applyTransform(this,o,e),this._drawCachedHitCanvas(o),o.restore(),this;if(!c)return this;if(o.save(),o._applyLineJoin(this),!n)if(r)r._applyTransform(this,o,e);else{var s=this.getAbsoluteTransform(e).getMatrix();o.transform(s[0],s[1],s[2],s[3],s[4],s[5])}return c.call(this,o,this),o.restore(),this},drawHitFromCache:function(e){var n,r,a,o,c,i=e||0,l=this._cache.canvas,s=this._getCachedSceneCanvas(),h=l.hit,d=h.getContext(),u=h.getWidth(),v=h.getHeight();d.clear(),d.drawImage(s._canvas,0,0,u,v);try{for(a=(r=(n=d.getImageData(0,0,u,v)).data).length,o=t.Util._hexToRgb(this.colorKey),c=0;c<a;c+=4)r[c+3]>i?(r[c]=o.r,r[c+1]=o.g,r[c+2]=o.b,r[c+3]=255):r[c+3]=0;d.putImageData(n,0,0)}catch(e){t.Util.error("Unable to draw hit graph from cached scene canvas. "+e.message)}return this}}),t.Util.extend(t.Shape,t.Node),t.Factory.addGetterSetter(t.Shape,"stroke",void 0,t.Validators.getStringValidator()),t.Factory.addGetterSetter(t.Shape,"strokeWidth",2,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"strokeHitEnabled",!0,t.Validators.getBooleanValidator()),t.Factory.addGetterSetter(t.Shape,"perfectDrawEnabled",!0,t.Validators.getBooleanValidator()),t.Factory.addGetterSetter(t.Shape,"shadowForStrokeEnabled",!0,t.Validators.getBooleanValidator()),t.Factory.addGetterSetter(t.Shape,"lineJoin"),t.Factory.addGetterSetter(t.Shape,"lineCap"),t.Factory.addGetterSetter(t.Shape,"sceneFunc"),t.Factory.addGetterSetter(t.Shape,"hitFunc"),t.Factory.addGetterSetter(t.Shape,"dash"),t.Factory.addGetterSetter(t.Shape,"dashOffset",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"shadowColor",void 0,t.Validators.getStringValidator()),t.Factory.addGetterSetter(t.Shape,"shadowBlur",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"shadowOpacity",1,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Shape,"shadowOffset",["x","y"]),t.Factory.addGetterSetter(t.Shape,"shadowOffsetX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"shadowOffsetY",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"fillPatternImage"),t.Factory.addGetterSetter(t.Shape,"fill",void 0,t.Validators.getStringValidator()),t.Factory.addGetterSetter(t.Shape,"fillPatternX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"fillPatternY",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"fillLinearGradientColorStops"),t.Factory.addGetterSetter(t.Shape,"strokeLinearGradientColorStops"),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientStartRadius",0),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientEndRadius",0),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientColorStops"),t.Factory.addGetterSetter(t.Shape,"fillPatternRepeat","repeat"),t.Factory.addGetterSetter(t.Shape,"fillEnabled",!0),t.Factory.addGetterSetter(t.Shape,"strokeEnabled",!0),t.Factory.addGetterSetter(t.Shape,"shadowEnabled",!0),t.Factory.addGetterSetter(t.Shape,"dashEnabled",!0),t.Factory.addGetterSetter(t.Shape,"strokeScaleEnabled",!0),t.Factory.addGetterSetter(t.Shape,"fillPriority","color"),t.Factory.addComponentsGetterSetter(t.Shape,"fillPatternOffset",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillPatternOffsetX",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"fillPatternOffsetY",0,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Shape,"fillPatternScale",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillPatternScaleX",1,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Shape,"fillPatternScaleY",1,t.Validators.getNumberValidator()),t.Factory.addComponentsGetterSetter(t.Shape,"fillLinearGradientStartPoint",["x","y"]),t.Factory.addComponentsGetterSetter(t.Shape,"strokeLinearGradientStartPoint",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillLinearGradientStartPointX",0),t.Factory.addGetterSetter(t.Shape,"strokeLinearGradientStartPointX",0),t.Factory.addGetterSetter(t.Shape,"fillLinearGradientStartPointY",0),t.Factory.addGetterSetter(t.Shape,"strokeLinearGradientStartPointY",0),t.Factory.addComponentsGetterSetter(t.Shape,"fillLinearGradientEndPoint",["x","y"]),t.Factory.addComponentsGetterSetter(t.Shape,"strokeLinearGradientEndPoint",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillLinearGradientEndPointX",0),t.Factory.addGetterSetter(t.Shape,"strokeLinearGradientEndPointX",0),t.Factory.addGetterSetter(t.Shape,"fillLinearGradientEndPointY",0),t.Factory.addGetterSetter(t.Shape,"strokeLinearGradientEndPointY",0),t.Factory.addComponentsGetterSetter(t.Shape,"fillRadialGradientStartPoint",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientStartPointX",0),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientStartPointY",0),t.Factory.addComponentsGetterSetter(t.Shape,"fillRadialGradientEndPoint",["x","y"]),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientEndPointX",0),t.Factory.addGetterSetter(t.Shape,"fillRadialGradientEndPointY",0),t.Factory.addGetterSetter(t.Shape,"fillPatternRotation",0),t.Factory.backCompat(t.Shape,{dashArray:"dash",getDashArray:"getDash",setDashArray:"getDash",drawFunc:"sceneFunc",getDrawFunc:"getSceneFunc",setDrawFunc:"setSceneFunc",drawHitFunc:"hitFunc",getDrawHitFunc:"getHitFunc",setDrawHitFunc:"setHitFunc"}),t.Collection.mapMethods(t.Shape)}(Konva),function(){"use strict";var t="_",e=["mousedown","mousemove","mouseup","mouseout","touchstart","touchmove","touchend","mouseover","wheel","contextmenu"],n=e.length;function r(e,n){e.content.addEventListener(n,function(r){e[t+n](r)},!1)}Konva.Stage=function(t){this.___init(t)},Konva.Util.addMethods(Konva.Stage,{___init:function(t){this.nodeType="Stage",Konva.Container.call(this,t),this._id=Konva.idCounter++,this._buildDOM(),this._bindContentEvents(),this._enableNestedTransforms=!1,Konva.stages.push(this)},_validateAdd:function(t){"Layer"!==t.getType()&&Konva.Util.throw("You may only add layers to the stage.")},setContainer:function(t){if("string"==typeof t){if("."===t.charAt(0)){var e=t.slice(1);t=Konva.document.getElementsByClassName(e)[0]}else{var n;n="#"!==t.charAt(0)?t:t.slice(1),t=Konva.document.getElementById(n)}if(!t)throw"Can not find container in document with id "+n}return this._setAttr("container",t),this},shouldDrawHit:function(){return!0},draw:function(){return Konva.Node.prototype.draw.call(this),this},setHeight:function(t){return Konva.Node.prototype.setHeight.call(this,t),this._resizeDOM(),this},setWidth:function(t){return Konva.Node.prototype.setWidth.call(this,t),this._resizeDOM(),this},clear:function(){var t,e=this.children,n=e.length;for(t=0;t<n;t++)e[t].clear();return this},clone:function(t){return t||(t={}),t.container=Konva.document.createElement("div"),Konva.Container.prototype.clone.call(this,t)},destroy:function(){var t=this.content;Konva.Container.prototype.destroy.call(this),t&&Konva.Util._isInDocument(t)&&this.getContainer().removeChild(t);var e=Konva.stages.indexOf(this);return e>-1&&Konva.stages.splice(e,1),this},getPointerPosition:function(){return this.pointerPos},getStage:function(){return this},getContent:function(){return this.content},_toKonvaCanvas:function(t){var e=(t=t||{}).x||0,n=t.y||0,r=new Konva.SceneCanvas({width:t.width||this.getWidth(),height:t.height||this.getHeight(),pixelRatio:t.pixelRatio||1}),a=r.getContext()._context,o=this.children;return(e||n)&&a.translate(-1*e,-1*n),o.each(function(r){if(r.isVisible()){var o=r._toKonvaCanvas(t);a.drawImage(o._canvas,e,n,o.getWidth()/o.getPixelRatio(),o.getHeight()/o.getPixelRatio())}}),r},toImage:function(t){var e=t.callback;t.callback=function(t){Konva.Util._getImage(t,function(t){e(t)})},this.toDataURL(t)},getIntersection:function(t,e){var n,r,a=this.getChildren();for(n=a.length-1;n>=0;n--)if(r=a[n].getIntersection(t,e))return r;return null},_resizeDOM:function(){if(this.content){var t,e,n=this.getWidth(),r=this.getHeight(),a=this.getChildren(),o=a.length;for(this.content.style.width=n+"px",this.content.style.height=r+"px",this.bufferCanvas.setSize(n,r),this.bufferHitCanvas.setSize(n,r),t=0;t<o;t++)(e=a[t]).setSize(n,r),e.draw()}},add:function(t){if(arguments.length>1){for(var e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return Konva.Container.prototype.add.call(this,t),t._setCanvasSize(this.width(),this.height()),t.draw(),Konva.isBrowser&&this.content.appendChild(t.canvas._canvas),this},getParent:function(){return null},getLayer:function(){return null},getLayers:function(){return this.getChildren()},_bindContentEvents:function(){if(Konva.isBrowser)for(var t=0;t<n;t++)r(this,e[t])},_mouseover:function(t){Konva.UA.mobile||(this._setPointerPosition(t),this._fire("contentMouseover",{evt:t}))},_mouseout:function(t){if(!Konva.UA.mobile){this._setPointerPosition(t);var e=this.targetShape;e&&!Konva.isDragging()&&(e._fireAndBubble("mouseout",{evt:t}),e._fireAndBubble("mouseleave",{evt:t}),this.targetShape=null),this.pointerPos=void 0,this._fire("contentMouseout",{evt:t})}},_mousemove:function(t){return Konva.UA.ieMobile?this._touchmove(t):void 0===t.movementX&&void 0===t.movementY||0!==t.movementY||0!==t.movementX?Konva.UA.mobile?null:(this._setPointerPosition(t),Konva.isDragging()||((e=this.getIntersection(this.getPointerPosition()))&&e.isListening()?Konva.isDragging()||this.targetShape&&this.targetShape._id===e._id?e._fireAndBubble("mousemove",{evt:t}):(this.targetShape&&(this.targetShape._fireAndBubble("mouseout",{evt:t},e),this.targetShape._fireAndBubble("mouseleave",{evt:t},e)),e._fireAndBubble("mouseover",{evt:t},this.targetShape),e._fireAndBubble("mouseenter",{evt:t},this.targetShape),this.targetShape=e):(this.targetShape&&!Konva.isDragging()&&(this.targetShape._fireAndBubble("mouseout",{evt:t}),this.targetShape._fireAndBubble("mouseleave",{evt:t}),this.targetShape=null),this._fire("mousemove",{evt:t,target:this,currentTarget:this})),this._fire("contentMousemove",{evt:t})),void(t.cancelable&&t.preventDefault())):null;var e},_mousedown:function(t){if(Konva.UA.ieMobile)return this._touchstart(t);if(!Konva.UA.mobile){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition());Konva.listenClickTap=!0,e&&e.isListening()?(this.clickStartShape=e,e._fireAndBubble("mousedown",{evt:t})):this._fire("mousedown",{evt:t,target:this,currentTarget:this}),this._fire("contentMousedown",{evt:t})}},_mouseup:function(t){if(Konva.UA.ieMobile)return this._touchend(t);if(!Konva.UA.mobile){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition()),n=this.clickStartShape,r=this.clickEndShape,a=!1,o=Konva.DD;Konva.inDblClickWindow?(a=!0,clearTimeout(this.dblTimeout)):o&&o.justDragged?o&&(o.justDragged=!1):(Konva.inDblClickWindow=!0,clearTimeout(this.dblTimeout)),this.dblTimeout=setTimeout(function(){Konva.inDblClickWindow=!1},Konva.dblClickWindow),e&&e.isListening()?(this.clickEndShape=e,e._fireAndBubble("mouseup",{evt:t}),Konva.listenClickTap&&n&&n._id===e._id&&(e._fireAndBubble("click",{evt:t}),a&&r&&r._id===e._id&&e._fireAndBubble("dblclick",{evt:t}))):(this._fire("mouseup",{evt:t,target:this,currentTarget:this}),this._fire("click",{evt:t,target:this,currentTarget:this}),a&&this._fire("dblclick",{evt:t,target:this,currentTarget:this})),this._fire("contentMouseup",{evt:t}),Konva.listenClickTap&&(this._fire("contentClick",{evt:t}),a&&this._fire("contentDblclick",{evt:t})),Konva.listenClickTap=!1}t.cancelable&&t.preventDefault()},_contextmenu:function(t){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble("contextmenu",{evt:t}):this._fire("contextmenu",{evt:t,target:this,currentTarget:this}),this._fire("contentContextmenu",{evt:t})},_touchstart:function(t){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition());Konva.listenClickTap=!0,e&&e.isListening()?(this.tapStartShape=e,e._fireAndBubble("touchstart",{evt:t}),e.isListening()&&e.preventDefault()&&t.cancelable&&t.preventDefault()):this._fire("touchstart",{evt:t,target:this,currentTarget:this}),this._fire("contentTouchstart",{evt:t})},_touchend:function(t){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition()),n=!1;Konva.inDblClickWindow?(n=!0,clearTimeout(this.dblTimeout)):(Konva.inDblClickWindow=!0,clearTimeout(this.dblTimeout)),this.dblTimeout=setTimeout(function(){Konva.inDblClickWindow=!1},Konva.dblClickWindow),e&&e.isListening()?(e._fireAndBubble("touchend",{evt:t}),Konva.listenClickTap&&this.tapStartShape&&e._id===this.tapStartShape._id&&(e._fireAndBubble("tap",{evt:t}),n&&e._fireAndBubble("dbltap",{evt:t})),e.isListening()&&e.preventDefault()&&t.cancelable&&t.preventDefault()):(this._fire("touchend",{evt:t,target:this,currentTarget:this}),this._fire("tap",{evt:t,target:this,currentTarget:this}),n&&this._fire("dbltap",{evt:t,target:this,currentTarget:this})),this._fire("contentTouchend",{evt:t}),Konva.listenClickTap&&(this._fire("contentTap",{evt:t}),n&&this._fire("contentDbltap",{evt:t})),Konva.listenClickTap=!1},_touchmove:function(t){this._setPointerPosition(t);var e,n=Konva.DD;Konva.isDragging()||((e=this.getIntersection(this.getPointerPosition()))&&e.isListening()?(e._fireAndBubble("touchmove",{evt:t}),e.isListening()&&e.preventDefault()&&t.cancelable&&t.preventDefault()):this._fire("touchmove",{evt:t,target:this,currentTarget:this}),this._fire("contentTouchmove",{evt:t})),n&&Konva.isDragging()&&Konva.DD.node.preventDefault()&&t.cancelable&&t.preventDefault()},_wheel:function(t){this._setPointerPosition(t);var e=this.getIntersection(this.getPointerPosition());e&&e.isListening()?e._fireAndBubble("wheel",{evt:t}):this._fire("wheel",{evt:t,target:this,currentTarget:this}),this._fire("contentWheel",{evt:t})},_setPointerPosition:function(t){var e=this._getContentPosition(),n=null,r=null;if(void 0!==(t=t||window.event).touches){if(t.touches.length>0){var a=t.touches[0];n=a.clientX-e.left,r=a.clientY-e.top}}else n=t.clientX-e.left,r=t.clientY-e.top;null!==n&&null!==r&&(this.pointerPos={x:n,y:r})},_getContentPosition:function(){var t=this.content.getBoundingClientRect?this.content.getBoundingClientRect():{top:0,left:0};return{top:t.top,left:t.left}},_buildDOM:function(){if(this.bufferCanvas=new Konva.SceneCanvas,this.bufferHitCanvas=new Konva.HitCanvas({pixelRatio:1}),Konva.isBrowser){var t=this.getContainer();if(!t)throw"Stage has no container. A container is required.";t.innerHTML="",this.content=Konva.document.createElement("div"),this.content.style.position="relative",this.content.className="konvajs-content",this.content.setAttribute("role","presentation"),t.appendChild(this.content),this._resizeDOM()}},_onContent:function(t,e){var n,r,a=t.split(" "),o=a.length;for(n=0;n<o;n++)r=a[n],this.content.addEventListener(r,e,!1)},cache:function(){Konva.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")},clearCache:function(){}}),Konva.Util.extend(Konva.Stage,Konva.Container),Konva.Factory.addGetter(Konva.Stage,"container"),Konva.Factory.addOverloadedGetterSetter(Konva.Stage,"container")}(),function(t){"use strict";t.BaseLayer=function(t){this.___init(t)},t.Util.addMethods(t.BaseLayer,{___init:function(e){this.nodeType="Layer",t.Container.call(this,e)},createPNGStream:function(){return this.canvas._canvas.createPNGStream()},getCanvas:function(){return this.canvas},getHitCanvas:function(){return this.hitCanvas},getContext:function(){return this.getCanvas().getContext()},clear:function(t){return this.getContext().clear(t),this},clearHitCache:function(){this._hitImageData=void 0},setZIndex:function(e){t.Node.prototype.setZIndex.call(this,e);var n=this.getStage();return n&&(n.content.removeChild(this.getCanvas()._canvas),e<n.getChildren().length-1?n.content.insertBefore(this.getCanvas()._canvas,n.getChildren()[e+1].getCanvas()._canvas):n.content.appendChild(this.getCanvas()._canvas)),this},moveToTop:function(){t.Node.prototype.moveToTop.call(this);var e=this.getStage();return e&&(e.content.removeChild(this.getCanvas()._canvas),e.content.appendChild(this.getCanvas()._canvas)),this},moveUp:function(){if(!t.Node.prototype.moveUp.call(this))return this;var e=this.getStage();return e?(e.content.removeChild(this.getCanvas()._canvas),this.index<e.getChildren().length-1?e.content.insertBefore(this.getCanvas()._canvas,e.getChildren()[this.index+1].getCanvas()._canvas):e.content.appendChild(this.getCanvas()._canvas),this):this},moveDown:function(){if(t.Node.prototype.moveDown.call(this)){var e=this.getStage();if(e){var n=e.getChildren();e.content.removeChild(this.getCanvas()._canvas),e.content.insertBefore(this.getCanvas()._canvas,n[this.index+1].getCanvas()._canvas)}}return this},moveToBottom:function(){if(t.Node.prototype.moveToBottom.call(this)){var e=this.getStage();if(e){var n=e.getChildren();e.content.removeChild(this.getCanvas()._canvas),e.content.insertBefore(this.getCanvas()._canvas,n[1].getCanvas()._canvas)}}return this},getLayer:function(){return this},remove:function(){var e=this.getCanvas()._canvas;return t.Node.prototype.remove.call(this),e&&e.parentNode&&t.Util._isInDocument(e)&&e.parentNode.removeChild(e),this},getStage:function(){return this.parent},setSize:function(t,e){return this.canvas.setSize(t,e),this},_toKonvaCanvas:function(e){return(e=e||{}).width=e.width||this.getWidth(),e.height=e.height||this.getHeight(),e.x=void 0!==e.x?e.x:this.getX(),e.y=void 0!==e.y?e.y:this.getY(),t.Node.prototype._toKonvaCanvas.call(this,e)},getWidth:function(){if(this.parent)return this.parent.getWidth()},setWidth:function(){t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')},getHeight:function(){if(this.parent)return this.parent.getHeight()},setHeight:function(){t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')},_applyTransform:function(t,e,n){var r=t.getAbsoluteTransform(n).getMatrix();e.transform(r[0],r[1],r[2],r[3],r[4],r[5])}}),t.Util.extend(t.BaseLayer,t.Container),t.Factory.addGetterSetter(t.BaseLayer,"clearBeforeDraw",!0),t.Collection.mapMethods(t.BaseLayer)}(Konva),function(){"use strict";var t=[{x:0,y:0},{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],e=t.length;Konva.Layer=function(t){this.____init(t)},Konva.Util.addMethods(Konva.Layer,{____init:function(t){this.nodeType="Layer",this.canvas=new Konva.SceneCanvas,this.hitCanvas=new Konva.HitCanvas({pixelRatio:1}),Konva.BaseLayer.call(this,t)},_setCanvasSize:function(t,e){this.canvas.setSize(t,e),this.hitCanvas.setSize(t,e)},_validateAdd:function(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&Konva.Util.throw("You may only add groups and shapes to a layer.")},getIntersection:function(n,r){var a,o,c,i;if(!this.hitGraphEnabled()||!this.isVisible())return null;for(var l=1,s=!1;;){for(o=0;o<e;o++){if(c=t[o],(i=(a=this._getIntersection({x:n.x+c.x*l,y:n.y+c.y*l})).shape)&&r)return i.findAncestor(r,!0);if(i)return i;if(s=!!a.antialiased,!a.antialiased)break}if(!s)return null;l+=1}},_getImageData:function(t,e){var n=this.hitCanvas.width||1,r=this.hitCanvas.height||1,a=Math.round(e)*n+Math.round(t);return this._hitImageData||(this._hitImageData=this.hitCanvas.context.getImageData(0,0,n,r)),[this._hitImageData.data[4*a+0],this._hitImageData.data[4*a+1],this._hitImageData.data[4*a+2],this._hitImageData.data[4*a+3]]},_getIntersection:function(t){var e,n,r=this.hitCanvas.pixelRatio,a=this.hitCanvas.context.getImageData(Math.round(t.x*r),Math.round(t.y*r),1,1).data,o=a[3];return 255===o?(e=Konva.Util._rgbToHex(a[0],a[1],a[2]),(n=Konva.shapes["#"+e])?{shape:n}:{antialiased:!0}):o>0?{antialiased:!0}:{}},drawScene:function(t,e){var n=this.getLayer(),r=t||n&&n.getCanvas();return this._fire("beforeDraw",{node:this}),this.getClearBeforeDraw()&&r.getContext().clear(),Konva.Container.prototype.drawScene.call(this,r,e),this._fire("draw",{node:this}),this},drawHit:function(t,e){var n=this.getLayer(),r=t||n&&n.hitCanvas;return n&&n.getClearBeforeDraw()&&n.getHitCanvas().getContext().clear(),Konva.Container.prototype.drawHit.call(this,r,e),this.imageData=null,this},clear:function(t){return Konva.BaseLayer.prototype.clear.call(this,t),this.getHitCanvas().getContext().clear(t),this.imageData=null,this},setVisible:function(t){return Konva.Node.prototype.setVisible.call(this,t),t?(this.getCanvas()._canvas.style.display="block",this.hitCanvas._canvas.style.display="block"):(this.getCanvas()._canvas.style.display="none",this.hitCanvas._canvas.style.display="none"),this},enableHitGraph:function(){return this.setHitGraphEnabled(!0),this},disableHitGraph:function(){return this.setHitGraphEnabled(!1),this},setSize:function(t,e){return Konva.BaseLayer.prototype.setSize.call(this,t,e),this.hitCanvas.setSize(t,e),this}}),Konva.Util.extend(Konva.Layer,Konva.BaseLayer),Konva.Factory.addGetterSetter(Konva.Layer,"hitGraphEnabled",!0),Konva.Collection.mapMethods(Konva.Layer)}(),function(){"use strict";Konva.FastLayer=function(t){this.____init(t)},Konva.Util.addMethods(Konva.FastLayer,{____init:function(t){this.nodeType="Layer",this.canvas=new Konva.SceneCanvas,Konva.BaseLayer.call(this,t)},_validateAdd:function(t){"Shape"!==t.getType()&&Konva.Util.throw("You may only add shapes to a fast layer.")},_setCanvasSize:function(t,e){this.canvas.setSize(t,e)},hitGraphEnabled:function(){return!1},getIntersection:function(){return null},drawScene:function(t){var e=this.getLayer(),n=t||e&&e.getCanvas();return this.getClearBeforeDraw()&&n.getContext().clear(),Konva.Container.prototype.drawScene.call(this,n),this},draw:function(){return this.drawScene(),this},setVisible:function(t){return Konva.Node.prototype.setVisible.call(this,t),this.getCanvas()._canvas.style.display=t?"block":"none",this}}),Konva.Util.extend(Konva.FastLayer,Konva.BaseLayer),Konva.Collection.mapMethods(Konva.FastLayer)}(),function(){"use strict";Konva.Group=function(t){this.___init(t)},Konva.Util.addMethods(Konva.Group,{___init:function(t){this.nodeType="Group",Konva.Container.call(this,t)},_validateAdd:function(t){var e=t.getType();"Group"!==e&&"Shape"!==e&&Konva.Util.throw("You may only add groups and shapes to groups.")}}),Konva.Util.extend(Konva.Group,Konva.Container),Konva.Collection.mapMethods(Konva.Group)}(),function(t){"use strict";var e=t.global.performance&&t.global.performance.now?function(){return t.global.performance.now()}:function(){return(new Date).getTime()};var n=t.global.requestAnimationFrame||t.global.webkitRequestAnimationFrame||t.global.mozRequestAnimationFrame||t.global.oRequestAnimationFrame||t.global.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};function r(){return n.apply(t.global,arguments)}t.Animation=function(n,r){var a=t.Animation;this.func=n,this.setLayers(r),this.id=a.animIdCounter++,this.frame={time:0,timeDiff:0,lastTime:e()}},t.Animation.prototype={setLayers:function(t){var e;return e=t?t.length>0?t:[t]:[],this.layers=e,this},getLayers:function(){return this.layers},addLayer:function(t){var e,n=this.layers,r=n.length;for(e=0;e<r;e++)if(n[e]._id===t._id)return!1;return this.layers.push(t),!0},isRunning:function(){var e,n=t.Animation.animations,r=n.length;for(e=0;e<r;e++)if(n[e].id===this.id)return!0;return!1},start:function(){var n=t.Animation;return this.stop(),this.frame.timeDiff=0,this.frame.lastTime=e(),n._addAnimation(this),this},stop:function(){return t.Animation._removeAnimation(this),this},_updateFrameObject:function(t){this.frame.timeDiff=t-this.frame.lastTime,this.frame.lastTime=t,this.frame.time+=this.frame.timeDiff,this.frame.frameRate=1e3/this.frame.timeDiff}},t.Animation.animations=[],t.Animation.animIdCounter=0,t.Animation.animRunning=!1,t.Animation._addAnimation=function(t){this.animations.push(t),this._handleAnimation()},t.Animation._removeAnimation=function(t){var e,n=t.id,r=this.animations,a=r.length;for(e=0;e<a;e++)if(r[e].id===n){this.animations.splice(e,1);break}},t.Animation._runFrames=function(){var t,n,r,a,o,c,i,l,s={},h=this.animations;for(a=0;a<h.length;a++)if(n=(t=h[a]).layers,r=t.func,t._updateFrameObject(e()),c=n.length,!r||!1!==r.call(t,t.frame))for(o=0;o<c;o++)void 0!==(i=n[o])._id&&(s[i._id]=i);for(l in s)s.hasOwnProperty(l)&&s[l].draw()},t.Animation._animationLoop=function(){var e=t.Animation;e.animations.length?(e._runFrames(),r(e._animationLoop)):e.animRunning=!1},t.Animation._handleAnimation=function(){this.animRunning||(this.animRunning=!0,r(this._animationLoop))},t.BaseLayer.prototype.batchDraw=function(){var e=this,n=t.Animation;return this.batchAnim||(this.batchAnim=new n(function(){e.batchAnim.stop()},this)),this.batchAnim.isRunning()||this.batchAnim.start(),this},t.Stage.prototype.batchDraw=function(){return this.getChildren().each(function(t){t.batchDraw()}),this}}(Konva),function(){"use strict";var t={node:1,duration:1,easing:1,onFinish:1,yoyo:1},e=0,n=["fill","stroke","shadowColor"],r=function(t,e,n,r,a,o,c){this.prop=t,this.propFunc=e,this.begin=r,this._pos=r,this.duration=o,this._change=0,this.prevPos=0,this.yoyo=c,this._time=0,this._position=0,this._startTime=0,this._finish=0,this.func=n,this._change=a-this.begin,this.pause()};r.prototype={fire:function(t){var e=this[t];e&&e()},setTime:function(t){t>this.duration?this.yoyo?(this._time=this.duration,this.reverse()):this.finish():t<0?this.yoyo?(this._time=0,this.play()):this.reset():(this._time=t,this.update())},getTime:function(){return this._time},setPosition:function(t){this.prevPos=this._pos,this.propFunc(t),this._pos=t},getPosition:function(t){return void 0===t&&(t=this._time),this.func(t,this.begin,this._change,this.duration)},play:function(){this.state=2,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onPlay")},reverse:function(){this.state=3,this._time=this.duration-this._time,this._startTime=this.getTimer()-this._time,this.onEnterFrame(),this.fire("onReverse")},seek:function(t){this.pause(),this._time=t,this.update(),this.fire("onSeek")},reset:function(){this.pause(),this._time=0,this.update(),this.fire("onReset")},finish:function(){this.pause(),this._time=this.duration,this.update(),this.fire("onFinish")},update:function(){this.setPosition(this.getPosition(this._time))},onEnterFrame:function(){var t=this.getTimer()-this._startTime;2===this.state?this.setTime(t):3===this.state&&this.setTime(this.duration-t)},pause:function(){this.state=1,this.fire("onPause")},getTimer:function(){return(new Date).getTime()}},Konva.Tween=function(n){var a,o,c=this,i=n.node,l=i._id,s=n.easing||Konva.Easings.Linear,h=!!n.yoyo;a=void 0===n.duration?.3:0===n.duration?.001:n.duration,this.node=i,this._id=e++;var d=i.getLayer()||(i instanceof Konva.Stage?i.getLayers():null);for(o in d||Konva.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."),this.anim=new Konva.Animation(function(){c.tween.onEnterFrame()},d),this.tween=new r(o,function(t){c._tweenFunc(t)},s,0,1,1e3*a,h),this._addListeners(),Konva.Tween.attrs[l]||(Konva.Tween.attrs[l]={}),Konva.Tween.attrs[l][this._id]||(Konva.Tween.attrs[l][this._id]={}),Konva.Tween.tweens[l]||(Konva.Tween.tweens[l]={}),n)void 0===t[o]&&this._addAttr(o,n[o]);this.reset(),this.onFinish=n.onFinish,this.onReset=n.onReset},Konva.Tween.attrs={},Konva.Tween.tweens={},Konva.Tween.prototype={_addAttr:function(t,e){var r,a,o,c,i,l,s,h=this.node,d=h._id;if((o=Konva.Tween.tweens[d][t])&&delete Konva.Tween.attrs[d][o][t],r=h.getAttr(t),Konva.Util._isArray(e))for(a=[],i=Math.max(e.length,r.length),"points"===t&&e.length!==r.length&&(e.length>r.length?(s=r,r=Konva.Util._prepareArrayForTween(r,e,h.closed())):(l=e,e=Konva.Util._prepareArrayForTween(e,r,h.closed()))),c=0;c<i;c++)a.push(e[c]-r[c]);else if(-1!==n.indexOf(t)){r=Konva.Util.colorToRGBA(r);var u=Konva.Util.colorToRGBA(e);a={r:u.r-r.r,g:u.g-r.g,b:u.b-r.b,a:u.a-r.a}}else a=e-r;Konva.Tween.attrs[d][this._id][t]={start:r,diff:a,end:e,trueEnd:l,trueStart:s},Konva.Tween.tweens[d][t]=this._id},_tweenFunc:function(t){var e,r,a,o,c,i,l,s,h=this.node,d=Konva.Tween.attrs[h._id][this._id];for(e in d){if(a=(r=d[e]).start,o=r.diff,s=r.end,Konva.Util._isArray(a))for(c=[],l=Math.max(a.length,s.length),i=0;i<l;i++)c.push((a[i]||0)+o[i]*t);else c=-1!==n.indexOf(e)?"rgba("+Math.round(a.r+o.r*t)+","+Math.round(a.g+o.g*t)+","+Math.round(a.b+o.b*t)+","+(a.a+o.a*t)+")":a+o*t;h.setAttr(e,c)}},_addListeners:function(){var t=this;this.tween.onPlay=function(){t.anim.start()},this.tween.onReverse=function(){t.anim.start()},this.tween.onPause=function(){t.anim.stop()},this.tween.onFinish=function(){var e=t.node,n=Konva.Tween.attrs[e._id][t._id];n.points&&n.points.trueEnd&&e.points(n.points.trueEnd),t.onFinish&&t.onFinish.call(t)},this.tween.onReset=function(){var e=t.node,n=Konva.Tween.attrs[e._id][t._id];n.points&&n.points.trueStart&&e.points(n.points.trueStart),t.onReset&&t.onReset()}},play:function(){return this.tween.play(),this},reverse:function(){return this.tween.reverse(),this},reset:function(){return this.tween.reset(),this},seek:function(t){return this.tween.seek(1e3*t),this},pause:function(){return this.tween.pause(),this},finish:function(){return this.tween.finish(),this},destroy:function(){var t,e=this.node._id,n=this._id,r=Konva.Tween.tweens[e];for(t in this.pause(),r)delete Konva.Tween.tweens[e][t];delete Konva.Tween.attrs[e][n]}},Konva.Node.prototype.to=function(t){var e=t.onFinish;t.node=this,t.onFinish=function(){this.destroy(),e&&e()},new Konva.Tween(t).play()},Konva.Easings={BackEaseIn:function(t,e,n,r){var a=1.70158;return n*(t/=r)*t*((a+1)*t-a)+e},BackEaseOut:function(t,e,n,r){var a=1.70158;return n*((t=t/r-1)*t*((a+1)*t+a)+1)+e},BackEaseInOut:function(t,e,n,r){var a=1.70158;return(t/=r/2)<1?n/2*(t*t*((1+(a*=1.525))*t-a))+e:n/2*((t-=2)*t*((1+(a*=1.525))*t+a)+2)+e},ElasticEaseIn:function(t,e,n,r,a,o){var c=0;return 0===t?e:1==(t/=r)?e+n:(o||(o=.3*r),!a||a<Math.abs(n)?(a=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/a),-a*Math.pow(2,10*(t-=1))*Math.sin((t*r-c)*(2*Math.PI)/o)+e)},ElasticEaseOut:function(t,e,n,r,a,o){var c=0;return 0===t?e:1==(t/=r)?e+n:(o||(o=.3*r),!a||a<Math.abs(n)?(a=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/a),a*Math.pow(2,-10*t)*Math.sin((t*r-c)*(2*Math.PI)/o)+n+e)},ElasticEaseInOut:function(t,e,n,r,a,o){var c=0;return 0===t?e:2==(t/=r/2)?e+n:(o||(o=r*(.3*1.5)),!a||a<Math.abs(n)?(a=n,c=o/4):c=o/(2*Math.PI)*Math.asin(n/a),t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*r-c)*(2*Math.PI)/o)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-c)*(2*Math.PI)/o)*.5+n+e)},BounceEaseOut:function(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},BounceEaseIn:function(t,e,n,r){return n-Konva.Easings.BounceEaseOut(r-t,0,n,r)+e},BounceEaseInOut:function(t,e,n,r){return t<r/2?.5*Konva.Easings.BounceEaseIn(2*t,0,n,r)+e:.5*Konva.Easings.BounceEaseOut(2*t-r,0,n,r)+.5*n+e},EaseIn:function(t,e,n,r){return n*(t/=r)*t+e},EaseOut:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},EaseInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},StrongEaseIn:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},StrongEaseOut:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},StrongEaseInOut:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e},Linear:function(t,e,n,r){return n*t/r+e}}}(),function(){"use strict";Konva.DD={anim:new Konva.Animation(function(){var t=this.dirty;return this.dirty=!1,t}),isDragging:!1,justDragged:!1,offset:{x:0,y:0},node:null,_drag:function(t){var e=Konva.DD,n=e.node;if(n){if(!e.isDragging){var r=n.getStage().getPointerPosition();r||(n.getStage()._setPointerPosition(t),r=n.getStage().getPointerPosition());var a=n.dragDistance();if(Math.max(Math.abs(r.x-e.startPointerPos.x),Math.abs(r.y-e.startPointerPos.y))<a)return}n.getStage()._setPointerPosition(t),n._setDragPosition(t),e.isDragging||(e.isDragging=!0,n.fire("dragstart",{type:"dragstart",target:n,evt:t},!0)),n.fire("dragmove",{type:"dragmove",target:n,evt:t},!0)}},_endDragBefore:function(t){var e,n=Konva.DD,r=n.node;r&&(e=r.getLayer(),n.anim.stop(),n.isDragging&&(n.isDragging=!1,n.justDragged=!0,Konva.listenClickTap=!1,t&&(t.dragEndNode=r)),delete n.node,(r.getLayer()||e||r instanceof Konva.Stage)&&(e||r).draw())},_endDragAfter:function(t){var e=(t=t||{}).dragEndNode;t&&e&&e.fire("dragend",{type:"dragend",target:e,evt:t},!0)}},Konva.Node.prototype.startDrag=function(){var t=Konva.DD,e=this.getStage(),n=this.getLayer(),r=e.getPointerPosition(),a=this.getAbsolutePosition();r&&(t.node&&t.node.stopDrag(),t.node=this,t.startPointerPos=r,t.offset.x=r.x-a.x,t.offset.y=r.y-a.y,t.anim.setLayers(n||this.getLayers()),t.anim.start(),this._setDragPosition())},Konva.Node.prototype._setDragPosition=function(t){var e=Konva.DD,n=this.getStage().getPointerPosition(),r=this.getDragBoundFunc();if(n){var a={x:n.x-e.offset.x,y:n.y-e.offset.y};void 0!==r&&(a=r.call(this,a,t)),this.setAbsolutePosition(a),this._lastPos&&this._lastPos.x===a.x&&this._lastPos.y===a.y||(e.anim.dirty=!0),this._lastPos=a}},Konva.Node.prototype.stopDrag=function(){var t=Konva.DD,e={};t._endDragBefore(e),t._endDragAfter(e)},Konva.Node.prototype.setDraggable=function(t){this._setAttr("draggable",t),this._dragChange()};var t=Konva.Node.prototype.remove;Konva.Node.prototype.__originalRemove=t,Konva.Node.prototype.remove=function(){var e=Konva.DD;e.node&&e.node._id===this._id&&this.stopDrag(),t.call(this)},Konva.Node.prototype.isDragging=function(){var t=Konva.DD;return!(!t.node||t.node._id!==this._id||!t.isDragging)},Konva.Node.prototype._listenDrag=function(){var t=this;this._dragCleanup(),"Stage"===this.getClassName()?this.on("contentMousedown.konva contentTouchstart.konva",function(e){Konva.DD.node||t.startDrag(e)}):this.on("mousedown.konva touchstart.konva",function(e){1!==e.evt.button&&2!==e.evt.button&&(Konva.DD.node||t.startDrag(e))})},Konva.Node.prototype._dragChange=function(){if(this.attrs.draggable)this._listenDrag();else{this._dragCleanup();var t=this.getStage(),e=Konva.DD;t&&e.node&&e.node._id===this._id&&e.node.stopDrag()}},Konva.Node.prototype._dragCleanup=function(){"Stage"===this.getClassName()?(this.off("contentMousedown.konva"),this.off("contentTouchstart.konva")):(this.off("mousedown.konva"),this.off("touchstart.konva"))},Konva.Factory.addGetterSetter(Konva.Node,"dragBoundFunc"),Konva.Factory.addGetter(Konva.Node,"draggable",!1),Konva.Factory.addOverloadedGetterSetter(Konva.Node,"draggable"),Konva.isBrowser&&(window.addEventListener("mouseup",Konva.DD._endDragBefore,!0),window.addEventListener("touchend",Konva.DD._endDragBefore,!0),window.addEventListener("mousemove",Konva.DD._drag),window.addEventListener("touchmove",Konva.DD._drag),window.addEventListener("mouseup",Konva.DD._endDragAfter,!1),window.addEventListener("touchend",Konva.DD._endDragAfter,!1))}(),function(){"use strict";Konva.Rect=function(t){this.___init(t)},Konva.Rect.prototype={___init:function(t){Konva.Shape.call(this,t),this.className="Rect",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e=this.getCornerRadius(),n=this.getWidth(),r=this.getHeight();t.beginPath(),e?(e=Math.min(e,n/2,r/2),t.moveTo(e,0),t.lineTo(n-e,0),t.arc(n-e,e,e,3*Math.PI/2,0,!1),t.lineTo(n,r-e),t.arc(n-e,r-e,e,0,Math.PI/2,!1),t.lineTo(e,r),t.arc(e,r-e,e,Math.PI/2,Math.PI,!1),t.lineTo(0,e),t.arc(e,e,e,Math.PI,3*Math.PI/2,!1)):t.rect(0,0,n,r),t.closePath(),t.fillStrokeShape(this)}},Konva.Util.extend(Konva.Rect,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Rect,"cornerRadius",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.Rect)}(),function(t){"use strict";var e=2*Math.PI-1e-4;t.Circle=function(t){this.___init(t)},t.Circle.prototype={_centroid:!0,___init:function(e){t.Shape.call(this,e),this.className="Circle",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){t.beginPath(),t.arc(0,0,this.getRadius(),0,e,!1),t.closePath(),t.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(e){t.Node.prototype.setWidth.call(this,e),this.radius()!==e/2&&this.setRadius(e/2)},setHeight:function(e){t.Node.prototype.setHeight.call(this,e),this.radius()!==e/2&&this.setRadius(e/2)}},t.Util.extend(t.Circle,t.Shape),t.Factory.addGetterSetter(t.Circle,"radius",0,t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Circle,"radius"),t.Collection.mapMethods(t.Circle)}(Konva),function(){"use strict";var t=2*Math.PI-1e-4;Konva.Ellipse=function(t){this.___init(t)},Konva.Ellipse.prototype={_centroid:!0,___init:function(t){Konva.Shape.call(this,t),this.className="Ellipse",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(e){var n=this.getRadiusX(),r=this.getRadiusY();e.beginPath(),e.save(),n!==r&&e.scale(1,r/n),e.arc(0,0,n,0,t,!1),e.restore(),e.closePath(),e.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadiusX()},getHeight:function(){return 2*this.getRadiusY()},setWidth:function(t){Konva.Node.prototype.setWidth.call(this,t),this.setRadius({x:t/2})},setHeight:function(t){Konva.Node.prototype.setHeight.call(this,t),this.setRadius({y:t/2})}},Konva.Util.extend(Konva.Ellipse,Konva.Shape),Konva.Factory.addComponentsGetterSetter(Konva.Ellipse,"radius",["x","y"]),Konva.Factory.addGetterSetter(Konva.Ellipse,"radiusX",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Ellipse,"radiusY",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.Ellipse)}(),function(){"use strict";var t=2*Math.PI-1e-4;Konva.Ring=function(t){this.___init(t)},Konva.Ring.prototype={_centroid:!0,___init:function(t){Konva.Shape.call(this,t),this.className="Ring",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(e){e.beginPath(),e.arc(0,0,this.getInnerRadius(),0,t,!1),e.moveTo(this.getOuterRadius(),0),e.arc(0,0,this.getOuterRadius(),t,0,!0),e.closePath(),e.fillStrokeShape(this)},getWidth:function(){return 2*this.getOuterRadius()},getHeight:function(){return 2*this.getOuterRadius()},setWidth:function(t){Konva.Node.prototype.setWidth.call(this,t),this.outerRadius()!==t/2&&this.setOuterRadius(t/2)},setHeight:function(t){Konva.Node.prototype.setHeight.call(this,t),this.outerRadius()!==t/2&&this.setOuterRadius(t/2)},setOuterRadius:function(t){this._setAttr("outerRadius",t),this.setWidth(2*t),this.setHeight(2*t)}},Konva.Util.extend(Konva.Ring,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Ring,"innerRadius",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetter(Konva.Ring,"outerRadius",0,Konva.Validators.getNumberValidator()),Konva.Factory.addOverloadedGetterSetter(Konva.Ring,"outerRadius"),Konva.Collection.mapMethods(Konva.Ring)}(),function(){"use strict";Konva.Wedge=function(t){this.___init(t)},Konva.Wedge.prototype={_centroid:!0,___init:function(t){Konva.Shape.call(this,t),this.className="Wedge",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){t.beginPath(),t.arc(0,0,this.getRadius(),0,Konva.getAngle(this.getAngle()),this.getClockwise()),t.lineTo(0,0),t.closePath(),t.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(t){Konva.Node.prototype.setWidth.call(this,t),this.radius()!==t/2&&this.setRadius(t/2)},setHeight:function(t){Konva.Node.prototype.setHeight.call(this,t),this.radius()!==t/2&&this.setRadius(t/2)}},Konva.Util.extend(Konva.Wedge,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Wedge,"radius",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Wedge,"angle",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Wedge,"clockwise",!1),Konva.Factory.backCompat(Konva.Wedge,{angleDeg:"angle",getAngleDeg:"getAngle",setAngleDeg:"setAngle"}),Konva.Collection.mapMethods(Konva.Wedge)}(),function(t){"use strict";t.Arc=function(t){this.___init(t)},t.Arc.prototype={_centroid:!0,___init:function(e){t.Shape.call(this,e),this.className="Arc",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(e){var n=t.getAngle(this.angle()),r=this.clockwise();e.beginPath(),e.arc(0,0,this.getOuterRadius(),0,n,r),e.arc(0,0,this.getInnerRadius(),n,0,!r),e.closePath(),e.fillStrokeShape(this)},getWidth:function(){return 2*this.getOuterRadius()},getHeight:function(){return 2*this.getOuterRadius()},setWidth:function(e){t.Node.prototype.setWidth.call(this,e),this.getOuterRadius()!==e/2&&this.setOuterRadius(e/2)},setHeight:function(e){t.Node.prototype.setHeight.call(this,e),this.getOuterRadius()!==e/2&&this.setOuterRadius(e/2)}},t.Util.extend(t.Arc,t.Shape),t.Factory.addGetterSetter(t.Arc,"innerRadius",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Arc,"outerRadius",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Arc,"angle",0,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Arc,"clockwise",!1),t.Collection.mapMethods(t.Arc)}(Konva),function(){"use strict";Konva.Image=function(t){this.___init(t)},Konva.Image.prototype={___init:function(t){Konva.Shape.call(this,t),this.className="Image",this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()&&this.getStage()},_sceneFunc:function(t){var e,n,r,a=this.getWidth(),o=this.getHeight(),c=this.getImage();c&&(e=this.getCropWidth(),n=this.getCropHeight(),r=e&&n?[c,this.getCropX(),this.getCropY(),e,n,0,0,a,o]:[c,0,0,a,o]),(this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,a,o),t.closePath(),t.fillStrokeShape(this)),c&&t.drawImage.apply(t,r)},_hitFunc:function(t){var e=this.getWidth(),n=this.getHeight();t.beginPath(),t.rect(0,0,e,n),t.closePath(),t.fillStrokeShape(this)},getWidth:function(){var t=this.getImage();return this.attrs.width||(t?t.width:0)},getHeight:function(){var t=this.getImage();return this.attrs.height||(t?t.height:0)}},Konva.Util.extend(Konva.Image,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Image,"image"),Konva.Factory.addComponentsGetterSetter(Konva.Image,"crop",["x","y","width","height"]),Konva.Factory.addGetterSetter(Konva.Image,"cropX",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Image,"cropY",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Image,"cropWidth",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Image,"cropHeight",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.Image),Konva.Image.fromURL=function(t,e){var n=new Image;n.onload=function(){var t=new Konva.Image({image:n});e(t)},n.crossOrigin="Anonymous",n.src=t}}(),function(){"use strict";var t,e="2d",n=["fontFamily","fontSize","fontStyle","fontVariant","padding","align","verticalAlign","lineHeight","text","width","height","wrap","ellipsis","letterSpacing"],r=n.length;function a(){return t||(t=Konva.Util.createCanvasElement().getContext(e))}function o(t){t.fillText(this.partialText,0,0)}function c(t){t.strokeText(this.partialText,0,0)}Konva.Text=function(t){this.___init(t)},Konva.Text.prototype={___init:function(t){(t=t||{}).fillLinearGradientColorStops||t.fillRadialGradientColorStops||(t.fill=t.fill||"black"),Konva.Shape.call(this,t),this._fillFunc=o,this._strokeFunc=c,this.className="Text";for(var e=0;e<r;e++)this.on(n[e]+"Change.konva",this._setTextData);this._setTextData(),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(t){var e,n=this.getPadding(),r=this.getTextHeight(),a=this.getLineHeight()*r,o=this.textArr,c=o.length,i=this.getVerticalAlign(),l=0,s=this.getAlign(),h=this.getWidth(),d=this.getLetterSpacing(),u=this.textDecoration(),v=this.fill(),p=this.fontSize();for(t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline","middle"),t.setAttr("textAlign","left"),"middle"===i?l=(this.getHeight()-c*a-2*n)/2:"bottom"===i&&(l=this.getHeight()-c*a-2*n),n?(t.translate(n,0),t.translate(0,l+n+a/2)):t.translate(0,l+a/2),e=0;e<c;e++){var g,f,m,z=o[e],x=z.text,M=z.width,b=e!==c-1;if(t.save(),"right"===s?t.translate(h-M-2*n,0):"center"===s&&t.translate((h-M-2*n)/2,0),-1!==u.indexOf("underline")&&(t.save(),t.beginPath(),t.moveTo(0,Math.round(a/2)),f=0==(g=x.split(" ").length-1),m="justify"===s&&b&&!f?h-2*n:M,t.lineTo(Math.round(m),Math.round(a/2)),t.lineWidth=p/15,t.strokeStyle=v,t.stroke(),t.restore()),-1!==u.indexOf("line-through")&&(t.save(),t.beginPath(),t.moveTo(0,0),f=0==(g=x.split(" ").length-1),m="justify"===s&&b&&!f?h-2*n:M,t.lineTo(Math.round(m),0),t.lineWidth=p/15,t.strokeStyle=v,t.stroke(),t.restore()),0!==d||"justify"===s){g=x.split(" ").length-1;for(var w=0;w<x.length;w++){var y=x[w];" "===y&&e!==c-1&&"justify"===s&&t.translate(Math.floor((h-2*n-M)/g),0),this.partialText=y,t.fillStrokeShape(this),t.translate(Math.round(this._getTextSize(y).width)+d,0)}}else this.partialText=x,t.fillStrokeShape(this);t.restore(),c>1&&t.translate(0,a)}},_hitFunc:function(t){var e=this.getWidth(),n=this.getHeight();t.beginPath(),t.rect(0,0,e,n),t.closePath(),t.fillStrokeShape(this)},setText:function(t){var e=Konva.Util._isString(t)?t:(t||"").toString();return this._setAttr("text",e),this},getWidth:function(){return"auto"===this.attrs.width||void 0===this.attrs.width?this.getTextWidth()+2*this.getPadding():this.attrs.width},getHeight:function(){return"auto"===this.attrs.height||void 0===this.attrs.height?this.getTextHeight()*this.textArr.length*this.getLineHeight()+2*this.getPadding():this.attrs.height},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},_getTextSize:function(t){var e,n=a(),r=this.getFontSize();return n.save(),n.font=this._getContextFont(),e=n.measureText(t),n.restore(),{width:e.width,height:parseInt(r,10)}},_getContextFont:function(){return Konva.UA.isIE?this.getFontStyle()+" "+this.getFontSize()+"px "+this.getFontFamily():this.getFontStyle()+" "+this.getFontVariant()+" "+this.getFontSize()+"px "+this.getFontFamily()},_addTextLine:function(t){"justify"===this.align()&&(t=t.trim());var e=this._getTextWidth(t);return this.textArr.push({text:t,width:e})},_getTextWidth:function(t){var e=this.getLetterSpacing(),n=t.length;return a().measureText(t).width+(n?e*(n-1):0)},_setTextData:function(){var t=this.getText().split("\n"),e=+this.getFontSize(),n=0,r=this.getLineHeight()*e,o=this.attrs.width,c=this.attrs.height,i="auto"!==o,l="auto"!==c,s=this.getPadding(),h=o-2*s,d=c-2*s,u=0,v=this.getWrap(),p="none"!==v,g="char"!==v&&p,f=this.getEllipsis()&&!p;this.textArr=[],a().font=this._getContextFont();for(var m=0,z=t.length;m<z;++m){var x=t[m],M=f?this._getTextWidth("…"):0,b=this._getTextWidth(x);if(i&&b>h)for(;x.length>0;){for(var w=0,y=x.length,H="",C=0;w<y;){var V=w+y>>>1,L=x.slice(0,V+1),B=this._getTextWidth(L)+M;B<=h?(w=V+1,H=L+(f?"…":""),C=B):y=V}if(!H)break;if(g){var k,S=x[H.length];(k=(" "===S||"-"===S)&&C<=h?H.length:Math.max(H.lastIndexOf(" "),H.lastIndexOf("-"))+1)>0&&(w=k,H=H.slice(0,w),C=this._getTextWidth(H))}if(this._addTextLine(H),n=Math.max(n,C),u+=r,!p||l&&u+r>d)break;if((x=x.slice(w)).length>0&&(b=this._getTextWidth(x))<=h){this._addTextLine(x),u+=r,n=Math.max(n,b);break}}else this._addTextLine(x),u+=r,n=Math.max(n,b);if(l&&u+r>d)break}this.textHeight=e,this.textWidth=n}},Konva.Util.extend(Konva.Text,Konva.Shape),Konva.Factory.addSetter(Konva.Node,"width",Konva.Validators.getNumberOrAutoValidator()),Konva.Factory.addSetter(Konva.Node,"height",Konva.Validators.getNumberOrAutoValidator()),Konva.Factory.addGetterSetter(Konva.Text,"fontFamily","Arial"),Konva.Factory.addGetterSetter(Konva.Text,"fontSize",12,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Text,"fontStyle","normal"),Konva.Factory.addGetterSetter(Konva.Text,"fontVariant","normal"),Konva.Factory.addGetterSetter(Konva.Text,"padding",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Text,"align","left"),Konva.Factory.addGetterSetter(Konva.Text,"verticalAlign","top"),Konva.Factory.addGetterSetter(Konva.Text,"lineHeight",1,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Text,"wrap","word"),Konva.Factory.addGetterSetter(Konva.Text,"ellipsis",!1),Konva.Factory.addGetterSetter(Konva.Text,"letterSpacing",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetter(Konva.Text,"text",""),Konva.Factory.addOverloadedGetterSetter(Konva.Text,"text"),Konva.Factory.addGetterSetter(Konva.Text,"textDecoration",""),Konva.Collection.mapMethods(Konva.Text)}(),function(){"use strict";Konva.Line=function(t){this.___init(t)},Konva.Line.prototype={___init:function(t){Konva.Shape.call(this,t),this.className="Line",this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",function(){this._clearCache("tensionPoints")}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e,n,r,a=this.getPoints(),o=a.length,c=this.getTension(),i=this.getClosed(),l=this.getBezier();if(o){if(t.beginPath(),t.moveTo(a[0],a[1]),0!==c&&o>4){for(n=(e=this.getTensionPoints()).length,r=i?0:4,i||t.quadraticCurveTo(e[0],e[1],e[2],e[3]);r<n-2;)t.bezierCurveTo(e[r++],e[r++],e[r++],e[r++],e[r++],e[r++]);i||t.quadraticCurveTo(e[n-2],e[n-1],a[o-2],a[o-1])}else if(l)for(r=2;r<o;)t.bezierCurveTo(a[r++],a[r++],a[r++],a[r++],a[r++],a[r++]);else for(r=2;r<o;r+=2)t.lineTo(a[r],a[r+1]);i?(t.closePath(),t.fillStrokeShape(this)):t.strokeShape(this)}},getTensionPoints:function(){return this._getCache("tensionPoints",this._getTensionPoints)},_getTensionPoints:function(){return this.getClosed()?this._getTensionPointsClosed():Konva.Util._expandPoints(this.getPoints(),this.getTension())},_getTensionPointsClosed:function(){var t=this.getPoints(),e=t.length,n=this.getTension(),r=Konva.Util,a=r._getControlPoints(t[e-2],t[e-1],t[0],t[1],t[2],t[3],n),o=r._getControlPoints(t[e-4],t[e-3],t[e-2],t[e-1],t[0],t[1],n),c=Konva.Util._expandPoints(t,n);return[a[2],a[3]].concat(c).concat([o[0],o[1],t[e-2],t[e-1],o[2],o[3],a[0],a[1],t[0],t[1]])},getWidth:function(){return this.getSelfRect().width},getHeight:function(){return this.getSelfRect().height},getSelfRect:function(){for(var t,e,n,r=(t=0!==this.getTension()?this._getTensionPoints():this.getPoints())[0],a=t[0],o=t[1],c=t[1],i=0;i<t.length/2;i++)e=t[2*i],n=t[2*i+1],r=Math.min(r,e),a=Math.max(a,e),o=Math.min(o,n),c=Math.max(c,n);return{x:Math.round(r),y:Math.round(o),width:Math.round(a-r),height:Math.round(c-o)}}},Konva.Util.extend(Konva.Line,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Line,"closed",!1),Konva.Factory.addGetterSetter(Konva.Line,"bezier",!1),Konva.Factory.addGetterSetter(Konva.Line,"tension",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Line,"points",[],Konva.Validators.getNumberArrayValidator()),Konva.Collection.mapMethods(Konva.Line)}(),function(){"use strict";Konva.Sprite=function(t){this.___init(t)},Konva.Sprite.prototype={___init:function(t){Konva.Shape.call(this,t),this.className="Sprite",this._updated=!0;var e=this;this.anim=new Konva.Animation(function(){var t=e._updated;return e._updated=!1,t}),this.on("animationChange.konva",function(){this.frameIndex(0)}),this.on("frameIndexChange.konva",function(){this._updated=!0}),this.on("frameRateChange.konva",function(){this.anim.isRunning()&&(clearInterval(this.interval),this._setInterval())}),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(t){var e=this.getAnimation(),n=this.frameIndex(),r=4*n,a=this.getAnimations()[e],o=this.frameOffsets(),c=a[r+0],i=a[r+1],l=a[r+2],s=a[r+3],h=this.getImage();if((this.hasFill()||this.hasStroke())&&(t.beginPath(),t.rect(0,0,l,s),t.closePath(),t.fillStrokeShape(this)),h)if(o){var d=o[e],u=2*n;t.drawImage(h,c,i,l,s,d[u+0],d[u+1],l,s)}else t.drawImage(h,c,i,l,s,0,0,l,s)},_hitFunc:function(t){var e=this.getAnimation(),n=this.frameIndex(),r=4*n,a=this.getAnimations()[e],o=this.frameOffsets(),c=a[r+2],i=a[r+3];if(t.beginPath(),o){var l=o[e],s=2*n;t.rect(l[s+0],l[s+1],c,i)}else t.rect(0,0,c,i);t.closePath(),t.fillShape(this)},_useBufferCanvas:function(){return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()},_setInterval:function(){var t=this;this.interval=setInterval(function(){t._updateIndex()},1e3/this.getFrameRate())},start:function(){var t=this.getLayer();this.anim.setLayers(t),this._setInterval(),this.anim.start()},stop:function(){this.anim.stop(),clearInterval(this.interval)},isRunning:function(){return this.anim.isRunning()},_updateIndex:function(){var t=this.frameIndex(),e=this.getAnimation();t<this.getAnimations()[e].length/4-1?this.frameIndex(t+1):this.frameIndex(0)}},Konva.Util.extend(Konva.Sprite,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Sprite,"animation"),Konva.Factory.addGetterSetter(Konva.Sprite,"animations"),Konva.Factory.addGetterSetter(Konva.Sprite,"frameOffsets"),Konva.Factory.addGetterSetter(Konva.Sprite,"image"),Konva.Factory.addGetterSetter(Konva.Sprite,"frameIndex",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Sprite,"frameRate",17,Konva.Validators.getNumberValidator()),Konva.Factory.backCompat(Konva.Sprite,{index:"frameIndex",getIndex:"getFrameIndex",setIndex:"setFrameIndex"}),Konva.Collection.mapMethods(Konva.Sprite)}(),function(){"use strict";Konva.Path=function(t){this.___init(t)},Konva.Path.prototype={___init:function(t){this.dataArray=[];var e=this;Konva.Shape.call(this,t),this.className="Path",this.dataArray=Konva.Path.parsePathData(this.getData()),this.pathLength=0;for(var n=0;n<this.dataArray.length;++n)this.pathLength+=this.dataArray[n].pathLength;this.on("dataChange.konva",function(){e.dataArray=Konva.Path.parsePathData(this.getData()),this.pathLength=0;for(var t=0;t<this.dataArray.length;++t)this.pathLength+=this.dataArray[t].pathLength}),this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e=this.dataArray;t.beginPath();for(var n=0;n<e.length;n++){var r=e[n].command,a=e[n].points;switch(r){case"L":t.lineTo(a[0],a[1]);break;case"M":t.moveTo(a[0],a[1]);break;case"C":t.bezierCurveTo(a[0],a[1],a[2],a[3],a[4],a[5]);break;case"Q":t.quadraticCurveTo(a[0],a[1],a[2],a[3]);break;case"A":var o=a[0],c=a[1],i=a[2],l=a[3],s=a[4],h=a[5],d=a[6],u=a[7],v=i>l?i:l,p=i>l?1:i/l,g=i>l?l/i:1;t.translate(o,c),t.rotate(d),t.scale(p,g),t.arc(0,0,v,s,s+h,1-u),t.scale(1/p,1/g),t.rotate(-d),t.translate(-o,-c);break;case"z":t.closePath()}}t.fillStrokeShape(this)},getSelfRect:function(){var t=[];this.dataArray.forEach(function(e){t=t.concat(e.points)});for(var e,n,r=t[0],a=t[0],o=t[1],c=t[1],i=0;i<t.length/2;i++)e=t[2*i],n=t[2*i+1],r=Math.min(r,e),a=Math.max(a,e),o=Math.min(o,n),c=Math.max(c,n);return{x:Math.round(r),y:Math.round(o),width:Math.round(a-r),height:Math.round(c-o)}},getLength:function(){return this.pathLength},getPointAtLength:function(t){var e,n=0,r=this.dataArray.length;if(!r)return null;for(;n<r&&t>this.dataArray[n].pathLength;)t-=this.dataArray[n].pathLength,++n;if(n===r)return{x:(e=this.dataArray[n-1].points.slice(-2))[0],y:e[1]};if(t<.01)return{x:(e=this.dataArray[n].points.slice(0,2))[0],y:e[1]};var a=this.dataArray[n],o=a.points;switch(a.command){case"L":return Konva.Path.getPointOnLine(t,a.start.x,a.start.y,o[0],o[1]);case"C":return Konva.Path.getPointOnCubicBezier(t/a.pathLength,a.start.x,a.start.y,o[0],o[1],o[2],o[3],o[4],o[5]);case"Q":return Konva.Path.getPointOnQuadraticBezier(t/a.pathLength,a.start.x,a.start.y,o[0],o[1],o[2],o[3]);case"A":var c=o[0],i=o[1],l=o[2],s=o[3],h=o[4],d=o[5],u=o[6];return h+=d*t/a.pathLength,Konva.Path.getPointOnEllipticalArc(c,i,l,s,h,u)}return null}},Konva.Util.extend(Konva.Path,Konva.Shape),Konva.Path.getLineLength=function(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e))},Konva.Path.getPointOnLine=function(t,e,n,r,a,o,c){void 0===o&&(o=e),void 0===c&&(c=n);var i=(a-n)/(r-e+1e-8),l=Math.sqrt(t*t/(1+i*i));r<e&&(l*=-1);var s,h=i*l;if(r===e)s={x:o,y:c+h};else if((c-n)/(o-e+1e-8)===i)s={x:o+l,y:c+h};else{var d,u,v=this.getLineLength(e,n,r,a);if(v<1e-8)return;var p=(o-e)*(r-e)+(c-n)*(a-n);d=e+(p/=v*v)*(r-e),u=n+p*(a-n);var g=this.getLineLength(o,c,d,u),f=Math.sqrt(t*t-g*g);l=Math.sqrt(f*f/(1+i*i)),r<e&&(l*=-1),s={x:d+l,y:u+(h=i*l)}}return s},Konva.Path.getPointOnCubicBezier=function(t,e,n,r,a,o,c,i,l){function s(t){return t*t*t}function h(t){return 3*t*t*(1-t)}function d(t){return 3*t*(1-t)*(1-t)}function u(t){return(1-t)*(1-t)*(1-t)}return{x:i*s(t)+o*h(t)+r*d(t)+e*u(t),y:l*s(t)+c*h(t)+a*d(t)+n*u(t)}},Konva.Path.getPointOnQuadraticBezier=function(t,e,n,r,a,o,c){function i(t){return t*t}function l(t){return 2*t*(1-t)}function s(t){return(1-t)*(1-t)}return{x:o*i(t)+r*l(t)+e*s(t),y:c*i(t)+a*l(t)+n*s(t)}},Konva.Path.getPointOnEllipticalArc=function(t,e,n,r,a,o){var c=Math.cos(o),i=Math.sin(o),l=n*Math.cos(a),s=r*Math.sin(a);return{x:t+(l*c-s*i),y:e+(l*i+s*c)}},Konva.Path.parsePathData=function(t){if(!t)return[];var e=t,n=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];e=e.replace(new RegExp(" ","g"),",");for(var r=0;r<n.length;r++)e=e.replace(new RegExp(n[r],"g"),"|"+n[r]);var a,o=e.split("|"),c=[],i=[],l=0,s=0,h=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;for(r=1;r<o.length;r++){var d=o[r],u=d.charAt(0);for(d=d.slice(1),i.length=0;a=h.exec(d);)i.push(a[0]);for(var v=[],p=0,g=i.length;p<g;p++){var f=parseFloat(i[p]);isNaN(f)||v.push(f)}for(;v.length>0&&!isNaN(v[0]);){var m,z,x,M,b,w,y,H,C,V,L=null,B=[],k=l,S=s;switch(u){case"l":l+=v.shift(),s+=v.shift(),L="L",B.push(l,s);break;case"L":l=v.shift(),s=v.shift(),B.push(l,s);break;case"m":var _=v.shift(),T=v.shift();if(l+=_,s+=T,L="M",c.length>2&&"z"===c[c.length-1].command)for(var F=c.length-2;F>=0;F--)if("M"===c[F].command){l=c[F].points[0]+_,s=c[F].points[1]+T;break}B.push(l,s),u="l";break;case"M":l=v.shift(),s=v.shift(),L="M",B.push(l,s),u="L";break;case"h":l+=v.shift(),L="L",B.push(l,s);break;case"H":l=v.shift(),L="L",B.push(l,s);break;case"v":s+=v.shift(),L="L",B.push(l,s);break;case"V":s=v.shift(),L="L",B.push(l,s);break;case"C":B.push(v.shift(),v.shift(),v.shift(),v.shift()),l=v.shift(),s=v.shift(),B.push(l,s);break;case"c":B.push(l+v.shift(),s+v.shift(),l+v.shift(),s+v.shift()),l+=v.shift(),s+=v.shift(),L="C",B.push(l,s);break;case"S":z=l,x=s,"C"===(m=c[c.length-1]).command&&(z=l+(l-m.points[2]),x=s+(s-m.points[3])),B.push(z,x,v.shift(),v.shift()),l=v.shift(),s=v.shift(),L="C",B.push(l,s);break;case"s":z=l,x=s,"C"===(m=c[c.length-1]).command&&(z=l+(l-m.points[2]),x=s+(s-m.points[3])),B.push(z,x,l+v.shift(),s+v.shift()),l+=v.shift(),s+=v.shift(),L="C",B.push(l,s);break;case"Q":B.push(v.shift(),v.shift()),l=v.shift(),s=v.shift(),B.push(l,s);break;case"q":B.push(l+v.shift(),s+v.shift()),l+=v.shift(),s+=v.shift(),L="Q",B.push(l,s);break;case"T":z=l,x=s,"Q"===(m=c[c.length-1]).command&&(z=l+(l-m.points[0]),x=s+(s-m.points[1])),l=v.shift(),s=v.shift(),L="Q",B.push(z,x,l,s);break;case"t":z=l,x=s,"Q"===(m=c[c.length-1]).command&&(z=l+(l-m.points[0]),x=s+(s-m.points[1])),l+=v.shift(),s+=v.shift(),L="Q",B.push(z,x,l,s);break;case"A":M=v.shift(),b=v.shift(),w=v.shift(),y=v.shift(),H=v.shift(),C=l,V=s,l=v.shift(),s=v.shift(),L="A",B=this.convertEndpointToCenterParameterization(C,V,l,s,y,H,M,b,w);break;case"a":M=v.shift(),b=v.shift(),w=v.shift(),y=v.shift(),H=v.shift(),C=l,V=s,l+=v.shift(),s+=v.shift(),L="A",B=this.convertEndpointToCenterParameterization(C,V,l,s,y,H,M,b,w)}c.push({command:L||u,points:B,start:{x:k,y:S},pathLength:this.calcLength(k,S,L||u,B)})}"z"!==u&&"Z"!==u||c.push({command:"z",points:[],start:void 0,pathLength:0})}return c},Konva.Path.calcLength=function(t,e,n,r){var a,o,c,i,l=Konva.Path;switch(n){case"L":return l.getLineLength(t,e,r[0],r[1]);case"C":for(a=0,o=l.getPointOnCubicBezier(0,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),i=.01;i<=1;i+=.01)c=l.getPointOnCubicBezier(i,t,e,r[0],r[1],r[2],r[3],r[4],r[5]),a+=l.getLineLength(o.x,o.y,c.x,c.y),o=c;return a;case"Q":for(a=0,o=l.getPointOnQuadraticBezier(0,t,e,r[0],r[1],r[2],r[3]),i=.01;i<=1;i+=.01)c=l.getPointOnQuadraticBezier(i,t,e,r[0],r[1],r[2],r[3]),a+=l.getLineLength(o.x,o.y,c.x,c.y),o=c;return a;case"A":a=0;var s=r[4],h=r[5],d=r[4]+h,u=Math.PI/180;if(Math.abs(s-d)<u&&(u=Math.abs(s-d)),o=l.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],s,0),h<0)for(i=s-u;i>d;i-=u)c=l.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],i,0),a+=l.getLineLength(o.x,o.y,c.x,c.y),o=c;else for(i=s+u;i<d;i+=u)c=l.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],i,0),a+=l.getLineLength(o.x,o.y,c.x,c.y),o=c;return c=l.getPointOnEllipticalArc(r[0],r[1],r[2],r[3],d,0),a+l.getLineLength(o.x,o.y,c.x,c.y)}return 0},Konva.Path.convertEndpointToCenterParameterization=function(t,e,n,r,a,o,c,i,l){var s=l*(Math.PI/180),h=Math.cos(s)*(t-n)/2+Math.sin(s)*(e-r)/2,d=-1*Math.sin(s)*(t-n)/2+Math.cos(s)*(e-r)/2,u=h*h/(c*c)+d*d/(i*i);u>1&&(c*=Math.sqrt(u),i*=Math.sqrt(u));var v=Math.sqrt((c*c*(i*i)-c*c*(d*d)-i*i*(h*h))/(c*c*(d*d)+i*i*(h*h)));a===o&&(v*=-1),isNaN(v)&&(v=0);var p=v*c*d/i,g=v*-i*h/c,f=(t+n)/2+Math.cos(s)*p-Math.sin(s)*g,m=(e+r)/2+Math.sin(s)*p+Math.cos(s)*g,z=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},x=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(z(t)*z(e))},M=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(x(t,e))},b=M([1,0],[(h-p)/c,(d-g)/i]),w=[(h-p)/c,(d-g)/i],y=[(-1*h-p)/c,(-1*d-g)/i],H=M(w,y);return x(w,y)<=-1&&(H=Math.PI),x(w,y)>=1&&(H=0),0===o&&H>0&&(H-=2*Math.PI),1===o&&H<0&&(H+=2*Math.PI),[f,m,c,i,b,H,s,o]},Konva.Factory.addGetterSetter(Konva.Path,"data"),Konva.Collection.mapMethods(Konva.Path)}(),function(){"use strict";function t(t){t.fillText(this.partialText,0,0)}function e(t){t.strokeText(this.partialText,0,0)}Konva.TextPath=function(t){this.___init(t)},Konva.TextPath.prototype={___init:function(n){var r=this;this.dummyCanvas=Konva.Util.createCanvasElement(),this.dataArray=[],this.getKerning=n&&n.getKerning,Konva.Shape.call(this,n),this._fillFunc=t,this._strokeFunc=e,this._fillFuncHit=t,this._strokeFuncHit=e,this.className="TextPath",this.dataArray=Konva.Path.parsePathData(this.attrs.data),this.on("dataChange.konva",function(){r.dataArray=Konva.Path.parsePathData(this.attrs.data),r._setTextData()}),this.on("textChange.konva alignChange.konva letterSpacingChange.konva",r._setTextData),r._setTextData(),this.sceneFunc(this._sceneFunc),this.hitFunc(this._hitFunc)},_sceneFunc:function(t){t.setAttr("font",this._getContextFont()),t.setAttr("textBaseline",this.getTextBaseline()),t.setAttr("textAlign","left"),t.save();var e=this.textDecoration(),n=this.fill(),r=this.fontSize(),a=this.glyphInfo;"underline"===e&&t.beginPath();for(var o=0;o<a.length;o++){t.save();var c=a[o].p0;t.translate(c.x,c.y),t.rotate(a[o].rotation),this.partialText=a[o].text,t.fillStrokeShape(this),"underline"===e&&(0===o&&t.moveTo(0,r/2+1),t.lineTo(r,r/2+1)),t.restore()}"underline"===e&&(t.strokeStyle=n,t.lineWidth=r/20,t.stroke()),t.restore()},_hitFunc:function(t){t.beginPath();var e=this.glyphInfo;if(e.length>=1){var n=e[0].p0;t.moveTo(n.x,n.y)}for(var r=0;r<e.length;r++){var a=e[r].p1;t.lineTo(a.x,a.y)}t.setAttr("lineWidth",this.getFontSize()),t.setAttr("strokeStyle",this.colorKey),t.stroke()},getTextWidth:function(){return this.textWidth},getTextHeight:function(){return this.textHeight},setText:function(t){Konva.Text.prototype.setText.call(this,t)},_getTextSize:function(t){var e=this.dummyCanvas.getContext("2d");e.save(),e.font=this._getContextFont();var n=e.measureText(t);return e.restore(),{width:n.width,height:parseInt(this.attrs.fontSize,10)}},_setTextData:function(){var t=this,e=this._getTextSize(this.attrs.text),n=this.getLetterSpacing(),r=this.align();this.textWidth=e.width,this.textHeight=e.height;var a=Math.max(this.textWidth+((this.attrs.text||"").length-1)*n,0);this.glyphInfo=[];for(var o=0,c=0;c<t.dataArray.length;c++)t.dataArray[c].pathLength>0&&(o+=t.dataArray[c].pathLength);var i=0;"center"===r&&(i=Math.max(0,o/2-a/2)),"right"===r&&(i=Math.max(0,o-a));for(var l,s,h,d=this.getText().split(""),u=this.getText().split(" ").length-1,v=-1,p=0,g=function(){p=0;for(var e=t.dataArray,n=v+1;n<e.length;n++){if(e[n].pathLength>0)return v=n,e[n];"M"===e[n].command&&(l={x:e[n].points[0],y:e[n].points[1]})}return{}},f=function(e){var c=t._getTextSize(e).width+n;" "===e&&"justify"===r&&(c+=(o-a)/u);var i=0,d=0;for(s=void 0;Math.abs(c-i)/c>.01&&d<25;){d++;for(var v=i;void 0===h;)(h=g())&&v+h.pathLength<c&&(v+=h.pathLength,h=void 0);if(h==={}||void 0===l)return;var f=!1;switch(h.command){case"L":Konva.Path.getLineLength(l.x,l.y,h.points[0],h.points[1])>c?s=Konva.Path.getPointOnLine(c,l.x,l.y,h.points[0],h.points[1],l.x,l.y):h=void 0;break;case"A":var m=h.points[4],z=h.points[5],x=h.points[4]+z;0===p?p=m+1e-8:c>i?p+=Math.PI/180*z/Math.abs(z):p-=Math.PI/360*z/Math.abs(z),(z<0&&p<x||z>=0&&p>x)&&(p=x,f=!0),s=Konva.Path.getPointOnEllipticalArc(h.points[0],h.points[1],h.points[2],h.points[3],p,h.points[6]);break;case"C":0===p?p=c>h.pathLength?1e-8:c/h.pathLength:c>i?p+=(c-i)/h.pathLength:p-=(i-c)/h.pathLength,p>1&&(p=1,f=!0),s=Konva.Path.getPointOnCubicBezier(p,h.start.x,h.start.y,h.points[0],h.points[1],h.points[2],h.points[3],h.points[4],h.points[5]);break;case"Q":0===p?p=c/h.pathLength:c>i?p+=(c-i)/h.pathLength:p-=(i-c)/h.pathLength,p>1&&(p=1,f=!0),s=Konva.Path.getPointOnQuadraticBezier(p,h.start.x,h.start.y,h.points[0],h.points[1],h.points[2],h.points[3])}void 0!==s&&(i=Konva.Path.getLineLength(l.x,l.y,s.x,s.y)),f&&(f=!1,h=void 0)}},m=t._getTextSize("C").width+n,z=0;z<i/m&&(f("C"),void 0!==l&&void 0!==s);z++)l=s;for(var x=0;x<d.length&&(f(d[x]),void 0!==l&&void 0!==s);x++){var M=Konva.Path.getLineLength(l.x,l.y,s.x,s.y),b=0;if(this.getKerning)try{b=this.getKerning(d[x-1],d[x])*this.fontSize()}catch(t){b=0}l.x+=b,s.x+=b,this.textWidth+=b;var w=Konva.Path.getPointOnLine(b+M/2,l.x,l.y,s.x,s.y),y=Math.atan2(s.y-l.y,s.x-l.x);this.glyphInfo.push({transposeX:w.x,transposeY:w.y,text:d[x],rotation:y,p0:l,p1:s}),l=s}},getSelfRect:function(){var t=[];this.glyphInfo.forEach(function(e){t.push(e.p0.x),t.push(e.p0.y),t.push(e.p1.x),t.push(e.p1.y)});for(var e,n,r=t[0],a=t[0],o=t[0],c=t[0],i=0;i<t.length/2;i++)e=t[2*i],n=t[2*i+1],r=Math.min(r,e),a=Math.max(a,e),o=Math.min(o,n),c=Math.max(c,n);var l=this.fontSize();return{x:Math.round(r)-l/2,y:Math.round(o)-l/2,width:Math.round(a-r)+l,height:Math.round(c-o)+l}}},Konva.TextPath.prototype._getContextFont=Konva.Text.prototype._getContextFont,Konva.Util.extend(Konva.TextPath,Konva.Shape),Konva.Factory.addGetterSetter(Konva.TextPath,"data"),Konva.Factory.addGetterSetter(Konva.TextPath,"fontFamily","Arial"),Konva.Factory.addGetterSetter(Konva.TextPath,"fontSize",12,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.TextPath,"fontStyle","normal"),Konva.Factory.addGetterSetter(Konva.TextPath,"align","left"),Konva.Factory.addGetterSetter(Konva.TextPath,"letterSpacing",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.TextPath,"textBaseline","middle"),Konva.Factory.addGetterSetter(Konva.TextPath,"fontVariant","normal"),Konva.Factory.addGetter(Konva.TextPath,"text",""),Konva.Factory.addGetterSetter(Konva.TextPath,"textDecoration",null),Konva.Collection.mapMethods(Konva.TextPath)}(),function(){"use strict";Konva.RegularPolygon=function(t){this.___init(t)},Konva.RegularPolygon.prototype={_centroid:!0,___init:function(t){Konva.Shape.call(this,t),this.className="RegularPolygon",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e,n,r,a=this.attrs.sides,o=this.attrs.radius;for(t.beginPath(),t.moveTo(0,0-o),e=1;e<a;e++)n=o*Math.sin(2*e*Math.PI/a),r=-1*o*Math.cos(2*e*Math.PI/a),t.lineTo(n,r);t.closePath(),t.fillStrokeShape(this)},getWidth:function(){return 2*this.getRadius()},getHeight:function(){return 2*this.getRadius()},setWidth:function(t){Konva.Node.prototype.setWidth.call(this,t),this.radius()!==t/2&&this.setRadius(t/2)},setHeight:function(t){Konva.Node.prototype.setHeight.call(this,t),this.radius()!==t/2&&this.setRadius(t/2)}},Konva.Util.extend(Konva.RegularPolygon,Konva.Shape),Konva.Factory.addGetterSetter(Konva.RegularPolygon,"radius",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.RegularPolygon,"sides",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.RegularPolygon)}(),function(){"use strict";Konva.Star=function(t){this.___init(t)},Konva.Star.prototype={_centroid:!0,___init:function(t){Konva.Shape.call(this,t),this.className="Star",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e=this.innerRadius(),n=this.outerRadius(),r=this.numPoints();t.beginPath(),t.moveTo(0,0-n);for(var a=1;a<2*r;a++){var o=a%2==0?n:e,c=o*Math.sin(a*Math.PI/r),i=-1*o*Math.cos(a*Math.PI/r);t.lineTo(c,i)}t.closePath(),t.fillStrokeShape(this)},getWidth:function(){return 2*this.getOuterRadius()},getHeight:function(){return 2*this.getOuterRadius()},setWidth:function(t){Konva.Node.prototype.setWidth.call(this,t),this.outerRadius()!==t/2&&this.setOuterRadius(t/2)},setHeight:function(t){Konva.Node.prototype.setHeight.call(this,t),this.outerRadius()!==t/2&&this.setOuterRadius(t/2)}},Konva.Util.extend(Konva.Star,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Star,"numPoints",5,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Star,"innerRadius",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Star,"outerRadius",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.Star)}(),function(){"use strict";var t=["fontFamily","fontSize","fontStyle","padding","lineHeight","text","width"],e=t.length;Konva.Label=function(t){this.____init(t)},Konva.Label.prototype={____init:function(t){var e=this;Konva.Group.call(this,t),this.className="Label",this.on("add.konva",function(t){e._addListeners(t.child),e._sync()})},getText:function(){return this.find("Text")[0]},getTag:function(){return this.find("Tag")[0]},_addListeners:function(n){var r,a=this,o=function(){a._sync()};for(r=0;r<e;r++)n.on(t[r]+"Change.konva",o)},getWidth:function(){return this.getText().getWidth()},getHeight:function(){return this.getText().getHeight()},_sync:function(){var t,e,n,r,a,o,c,i=this.getText(),l=this.getTag();if(i&&l){switch(t=i.getWidth(),e=i.getHeight(),n=l.getPointerDirection(),r=l.getPointerWidth(),c=l.getPointerHeight(),a=0,o=0,n){case"up":a=t/2,o=-1*c;break;case"right":a=t+r,o=e/2;break;case"down":a=t/2,o=e+c;break;case"left":a=-1*r,o=e/2}l.setAttrs({x:-1*a,y:-1*o,width:t,height:e}),i.setAttrs({x:-1*a,y:-1*o})}}},Konva.Util.extend(Konva.Label,Konva.Group),Konva.Collection.mapMethods(Konva.Label),Konva.Tag=function(t){this.___init(t)},Konva.Tag.prototype={___init:function(t){Konva.Shape.call(this,t),this.className="Tag",this.sceneFunc(this._sceneFunc)},_sceneFunc:function(t){var e=this.getWidth(),n=this.getHeight(),r=this.getPointerDirection(),a=this.getPointerWidth(),o=this.getPointerHeight(),c=Math.min(this.getCornerRadius(),e/2,n/2);t.beginPath(),c?t.moveTo(c,0):t.moveTo(0,0),"up"===r&&(t.lineTo((e-a)/2,0),t.lineTo(e/2,-1*o),t.lineTo((e+a)/2,0)),c?(t.lineTo(e-c,0),t.arc(e-c,c,c,3*Math.PI/2,0,!1)):t.lineTo(e,0),"right"===r&&(t.lineTo(e,(n-o)/2),t.lineTo(e+a,n/2),t.lineTo(e,(n+o)/2)),c?(t.lineTo(e,n-c),t.arc(e-c,n-c,c,0,Math.PI/2,!1)):t.lineTo(e,n),"down"===r&&(t.lineTo((e+a)/2,n),t.lineTo(e/2,n+o),t.lineTo((e-a)/2,n)),c?(t.lineTo(c,n),t.arc(c,n-c,c,Math.PI/2,Math.PI,!1)):t.lineTo(0,n),"left"===r&&(t.lineTo(0,(n+o)/2),t.lineTo(-1*a,n/2),t.lineTo(0,(n-o)/2)),c&&(t.lineTo(0,c),t.arc(c,c,c,Math.PI,3*Math.PI/2,!1)),t.closePath(),t.fillStrokeShape(this)},getSelfRect:function(){var t=0,e=0,n=this.getPointerWidth(),r=this.getPointerHeight(),a=this.pointerDirection(),o=this.getWidth(),c=this.getHeight();return"up"===a?(e-=r,c+=r):"down"===a?c+=r:"left"===a?(t-=1.5*n,o+=n):"right"===a&&(o+=1.5*n),{x:t,y:e,width:o,height:c}}},Konva.Util.extend(Konva.Tag,Konva.Shape),Konva.Factory.addGetterSetter(Konva.Tag,"pointerDirection","none"),Konva.Factory.addGetterSetter(Konva.Tag,"pointerWidth",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Tag,"pointerHeight",0,Konva.Validators.getNumberValidator()),Konva.Factory.addGetterSetter(Konva.Tag,"cornerRadius",0,Konva.Validators.getNumberValidator()),Konva.Collection.mapMethods(Konva.Tag)}(),function(t){"use strict";t.Arrow=function(t){this.____init(t)},t.Arrow.prototype={____init:function(e){t.Line.call(this,e),this.className="Arrow"},_sceneFunc:function(e){t.Line.prototype._sceneFunc.apply(this,arguments);var n=2*Math.PI,r=this.points(),a=r,o=0!==this.getTension()&&r.length>4;o&&(a=this.getTensionPoints());var c,i,l=r.length;o?(c=r[l-2]-a[l-2],i=r[l-1]-a[l-1]):(c=r[l-2]-r[l-4],i=r[l-1]-r[l-3]);var s=(Math.atan2(i,c)+n)%n,h=this.pointerLength(),d=this.pointerWidth();e.save(),e.beginPath(),e.translate(r[l-2],r[l-1]),e.rotate(s),e.moveTo(0,0),e.lineTo(-h,d/2),e.lineTo(-h,-d/2),e.closePath(),e.restore(),this.pointerAtBeginning()&&(e.save(),e.translate(r[0],r[1]),o?(c=a[0]-r[0],i=a[1]-r[1]):(c=r[2]-r[0],i=r[3]-r[1]),e.rotate((Math.atan2(-i,-c)+n)%n),e.moveTo(0,0),e.lineTo(-h,d/2),e.lineTo(-h,-d/2),e.closePath(),e.restore());var u=this.dashEnabled();u&&(this.attrs.dashEnabled=!1,e.setLineDash([])),e.fillStrokeShape(this),u&&(this.attrs.dashEnabled=!0)}},t.Util.extend(t.Arrow,t.Line),t.Factory.addGetterSetter(t.Arrow,"pointerLength",10,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Arrow,"pointerWidth",10,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Arrow,"pointerAtBeginning",!1),t.Collection.mapMethods(t.Arrow)}(Konva),function(t){"use strict";var e=["resizeEnabledChange","rotateAnchorOffsetChange","enabledAnchorsChange","anchorSizeChange","borderEnabledChange","borderStrokeChange","borderStrokeWidthChange","anchorStrokeChange","anchorStrokeWidthChange","anchorFillChange"].join(" "),n=["xChange.resizer","yChange.resizer","widthChange.resizer","heightChange.resizer","scaleXChange.resizer","scaleYChange.resizer","skewXChange.resizer","skewYChange.resizer","rotationChange.resizer","offsetXChange.resizer","offsetYChange.resizer","transformsEnabledChange.resizer"].join(" "),r=["widthChange.resizer","heightChange.resizer","scaleXChange.resizer","scaleYChange.resizer","skewXChange.resizer","skewYChange.resizer","rotationChange.resizer","offsetXChange.resizer","offsetYChange.resizer"].join(" "),a={"top-left":-45,"top-center":0,"top-right":45,"middle-right":-90,"middle-left":90,"bottom-left":-135,"bottom-center":180,"bottom-right":135};t.Transformer=function(t){this.____init(t)};var o=["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"];t.Transformer.prototype={_centroid:!1,____init:function(n){t.Group.call(this,n),this.className="Transformer",this._createElements(),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this.update=this.update.bind(this),this.on(e,this.update),this.getNode()&&this.update()},attachTo:function(t){this.setNode(t)},setNode:function(t){return this._node&&this.detach(),this._node=t,this._resetTransformCache(),t.on(n,this._resetTransformCache.bind(this)),t.on(r,function(){this._transforming||this.update()}.bind(this)),!!this.findOne(".top-left")&&this.update(),this},getNode:function(){return this._node},detach:function(){this.getNode()&&(this.getNode().off(".resizer"),this._node=void 0),this._resetTransformCache()},_resetTransformCache:function(){this._clearCache("nodeRect"),this._clearCache("transform"),this._clearSelfAndDescendantCache("absoluteTransform")},_getNodeRect:function(){return this._getCache("nodeRect",this.__getNodeRect)},__getNodeRect:function(){var e=this.getNode();if(!e)return{x:-Number.MAX_SAFE_INTEGER,y:-Number.MAX_SAFE_INTEGER,width:0,height:0,rotation:0};var n=e.getClientRect({skipTransform:!0}),r=t.getAngle(e.rotation()),a=n.x*e.scaleX()-e.offsetX()*e.scaleX(),o=n.y*e.scaleY()-e.offsetY()*e.scaleY();return{x:e.x()+a*Math.cos(r)+o*Math.sin(-r),y:e.y()+o*Math.cos(r)+a*Math.sin(r),width:n.width*e.scaleX(),height:n.height*e.scaleY(),rotation:e.rotation()}},getX:function(){return this._getNodeRect().x},getY:function(){return this._getNodeRect().y},getRotation:function(){return this._getNodeRect().rotation},getWidth:function(){return this._getNodeRect().width},getHeight:function(){return this._getNodeRect().height},_createElements:function(){this._createBack(),o.forEach(function(t){this._createAnchor(t)}.bind(this)),this._createAnchor("rotater")},_createAnchor:function(e){var n=new t.Rect({stroke:"rgb(0, 161, 255)",fill:"white",strokeWidth:1,name:e+" _anchor",dragDistance:0,draggable:!0}),r=this;n.on("mousedown touchstart",function(t){r._handleMouseDown(t)}),n.on("dragstart",function(t){t.cancelBubble=!0}),n.on("dragmove",function(t){t.cancelBubble=!0}),n.on("dragend",function(t){t.cancelBubble=!0}),n.on("mouseenter",function(){var r=this.getLayer(),o=this.getParent(),c=t.getAngle(o.rotation()),i=o.getNode().getAbsoluteScale(),l=i.y*i.x<0,s=function(e,n,r){if("rotater"===e)return"crosshair";n+=t.Util._degToRad(a[e]||0),r&&(n*=-1);var o=(t.Util._radToDeg(n)%360+360)%360;return t.Util._inRange(o,337.5,360)||t.Util._inRange(o,0,22.5)?"ns-resize":t.Util._inRange(o,22.5,67.5)?"nesw-resize":t.Util._inRange(o,67.5,112.5)?"ew-resize":t.Util._inRange(o,112.5,157.5)?"nwse-resize":t.Util._inRange(o,157.5,202.5)?"ns-resize":t.Util._inRange(o,202.5,247.5)?"nesw-resize":t.Util._inRange(o,247.5,292.5)?"ew-resize":t.Util._inRange(o,292.5,337.5)?"nwse-resize":(t.Util.error("Transformer has unknown angle for cursor detection: "+o),"pointer")}(e,c,l);n.getStage().content.style.cursor=s,r.batchDraw()}),n.on("mouseout",function(){var t=this.getLayer();t&&(n.getStage().content.style.cursor="",t.batchDraw())}),this.add(n)},_createBack:function(){var e=new t.Shape({name:"back",width:0,height:0,listening:!1,sceneFunc:function(e){var n=this.getParent(),r=n.getPadding();e.beginPath(),e.rect(-r,-r,this.width()+2*r,this.height()+2*r),e.moveTo(this.width()/2,-r),n.rotateEnabled()&&e.lineTo(this.width()/2,-n.rotateAnchorOffset()*t.Util._sign(this.height())),e.fillStrokeShape(this)}});this.add(e)},_handleMouseDown:function(t){this.movingResizer=t.target.name().split(" ")[0];var e=this._getNodeRect(),n=e.width,r=e.height,a=Math.sqrt(Math.pow(n,2)+Math.pow(r,2));this.sin=r/a,this.cos=n/a,window.addEventListener("mousemove",this._handleMouseMove),window.addEventListener("touchmove",this._handleMouseMove),window.addEventListener("mouseup",this._handleMouseUp,!0),window.addEventListener("touchend",this._handleMouseUp,!0),this._transforming=!0,this.fire("transformstart"),this.getNode().fire("transformstart")},_handleMouseMove:function(e){var n,r,a,o=this.findOne("."+this.movingResizer),c=o.getStage().getContent().getBoundingClientRect(),i=c.left,l=c.top,s={x:(void 0!==e.clientX?e.clientX:e.touches[0].clientX)-i,y:(void 0!==e.clientX?e.clientY:e.touches[0].clientY)-l};o.setAbsolutePosition(s);var h=this.keepRatio()||e.shiftKey;if("top-left"===this.movingResizer)h&&(n=(a=Math.sqrt(Math.pow(this.findOne(".bottom-right").x()-o.x(),2)+Math.pow(this.findOne(".bottom-right").y()-o.y(),2)))*this.cos,r=a*this.sin,this.findOne(".top-left").x(this.findOne(".bottom-right").x()-n),this.findOne(".top-left").y(this.findOne(".bottom-right").y()-r));else if("top-center"===this.movingResizer)this.findOne(".top-left").y(o.y());else if("top-right"===this.movingResizer){h&&(n=(a=Math.sqrt(Math.pow(this.findOne(".bottom-left").x()-o.x(),2)+Math.pow(this.findOne(".bottom-left").y()-o.y(),2)))*this.cos,r=a*this.sin,this.findOne(".top-right").x(n),this.findOne(".top-right").y(this.findOne(".bottom-left").y()-r));var d=o.position();this.findOne(".top-left").y(d.y),this.findOne(".bottom-right").x(d.x)}else if("middle-left"===this.movingResizer)this.findOne(".top-left").x(o.x());else if("middle-right"===this.movingResizer)this.findOne(".bottom-right").x(o.x());else if("bottom-left"===this.movingResizer)h&&(n=(a=Math.sqrt(Math.pow(this.findOne(".top-right").x()-o.x(),2)+Math.pow(this.findOne(".top-right").y()-o.y(),2)))*this.cos,r=a*this.sin,this.findOne(".bottom-left").x(this.findOne(".top-right").x()-n),this.findOne(".bottom-left").y(r)),d=o.position(),this.findOne(".top-left").x(d.x),this.findOne(".bottom-right").y(d.y);else if("bottom-center"===this.movingResizer)this.findOne(".bottom-right").y(o.y());else if("bottom-right"===this.movingResizer)h&&(n=(a=Math.sqrt(Math.pow(this.findOne(".bottom-right").x(),2)+Math.pow(this.findOne(".bottom-right").y(),2)))*this.cos,r=a*this.sin,this.findOne(".bottom-right").x(n),this.findOne(".bottom-right").y(r));else if("rotater"===this.movingResizer){var u=this.getPadding(),v=this._getNodeRect();n=o.x()-v.width/2,r=-o.y()+v.height/2;var p=Math.atan2(-r,n)+Math.PI/2;v.height<0&&(p-=Math.PI);for(var g=t.getAngle(this.rotation()),f=t.Util._radToDeg(g)+t.Util._radToDeg(p),m=t.getAngle(this.getNode().rotation()),z=t.Util._degToRad(f),x=this.rotationSnaps(),M=0;M<x.length;M++){var b=t.getAngle(x[M]);Math.abs(b-t.Util._degToRad(f))%(2*Math.PI)<.1&&(f=t.Util._radToDeg(b),z=t.Util._degToRad(f))}var w=u,y=u;this._fitNodeInto({rotation:t.angleDeg?f:t.Util._degToRad(f),x:v.x+(v.width/2+u)*(Math.cos(m)-Math.cos(z))+(v.height/2+u)*(Math.sin(-m)-Math.sin(-z))-(w*Math.cos(g)+y*Math.sin(-g)),y:v.y+(v.height/2+u)*(Math.cos(m)-Math.cos(z))+(v.width/2+u)*(Math.sin(m)-Math.sin(z))-(y*Math.cos(g)+w*Math.sin(g)),width:v.width+2*u,height:v.height+2*u})}else console.error(new Error("Wrong position argument of selection resizer: ",this.movingResizer));if("rotater"!==this.movingResizer){var H=this.findOne(".top-left").getAbsolutePosition(this.getParent());n=H.x,r=H.y;var C=this.findOne(".bottom-right").x()-this.findOne(".top-left").x(),V=this.findOne(".bottom-right").y()-this.findOne(".top-left").y();this._fitNodeInto({x:n+this.offsetX(),y:r+this.offsetY(),width:C,height:V})}},_handleMouseUp:function(){this._removeEvents()},_removeEvents:function(){if(this._transforming){this._transforming=!1,window.removeEventListener("mousemove",this._handleMouseMove),window.removeEventListener("touchmove",this._handleMouseMove),window.removeEventListener("mouseup",this._handleMouseUp,!0),window.removeEventListener("touchend",this._handleMouseUp,!0),this.fire("transformend");var t=this.getNode();t&&t.fire("transformend")}},_fitNodeInto:function(e){var n=this.getBoundBoxFunc();if(n){var r=this._getNodeRect();e=n.call(this,r,e)}this._settings=!0;var a=this.getNode();void 0!==e.rotation&&this.getNode().rotation(e.rotation);var o=a.getClientRect({skipTransform:!0}),c=this.getPadding(),i=(e.width-2*c)/o.width,l=(e.height-2*c)/o.height,s=t.getAngle(a.getRotation()),h=o.x*i-c-a.offsetX()*i,d=o.y*l-c-a.offsetY()*l;this.getNode().setAttrs({scaleX:i,scaleY:l,x:e.x-(h*Math.cos(s)+d*Math.sin(-s)),y:e.y-(d*Math.cos(s)+h*Math.sin(s))}),this._settings=!1,this.fire("transform"),this.getNode().fire("transform"),this.update(),this.getLayer().batchDraw()},forceUpdate:function(){this._resetTransformCache(),this.update()},update:function(){var e=this._getNodeRect(),n=this.getNode(),r={x:1,y:1};n&&n.getParent()&&(r=n.getParent().getAbsoluteScale());var a={x:1/r.x,y:1/r.y},o=e.width,c=e.height,i=this.enabledAnchors(),l=this.resizeEnabled(),s=this.getPadding(),h=this.getAnchorSize();this.find("._anchor").setAttrs({width:h,height:h,offsetX:h/2,offsetY:h/2,stroke:this.getAnchorStroke(),strokeWidth:this.getAnchorStrokeWidth(),fill:this.getAnchorFill()}),this.findOne(".top-left").setAttrs({x:-s,y:-s,scale:a,visible:l&&i.indexOf("top-left")>=0}),this.findOne(".top-center").setAttrs({x:o/2,y:-s,scale:a,visible:l&&i.indexOf("top-center")>=0}),this.findOne(".top-right").setAttrs({x:o+s,y:-s,scale:a,visible:l&&i.indexOf("top-right")>=0}),this.findOne(".middle-left").setAttrs({x:-s,y:c/2,scale:a,visible:l&&i.indexOf("middle-left")>=0}),this.findOne(".middle-right").setAttrs({x:o+s,y:c/2,scale:a,visible:l&&i.indexOf("middle-right")>=0}),this.findOne(".bottom-left").setAttrs({x:-s,y:c+s,scale:a,visible:l&&i.indexOf("bottom-left")>=0}),this.findOne(".bottom-center").setAttrs({x:o/2,y:c+s,scale:a,visible:l&&i.indexOf("bottom-center")>=0}),this.findOne(".bottom-right").setAttrs({x:o+s,y:c+s,scale:a,visible:l&&i.indexOf("bottom-right")>=0});var d=-this.rotateAnchorOffset()*Math.abs(a.y);this.findOne(".rotater").setAttrs({x:o/2,y:d*t.Util._sign(c),scale:a,visible:this.rotateEnabled()}),this.findOne(".back").setAttrs({width:o*r.x,height:c*r.y,scale:a,visible:this.borderEnabled(),stroke:this.getBorderStroke(),strokeWidth:this.getBorderStrokeWidth(),dash:this.getBorderDash()})},isTransforming:function(){return this._transforming},stopTransform:function(){if(this._transforming){this._removeEvents();var t=this.findOne("."+this.movingResizer);t&&t.stopDrag()}},destroy:function(){t.Group.prototype.destroy.call(this),this.detach(),this._removeEvents()},toObject:function(){return t.Node.prototype.toObject.call(this)}},t.Util.extend(t.Transformer,t.Group),t.Factory.addGetterSetter(t.Transformer,"enabledAnchors",o,function(e){return e instanceof Array||t.Util.warn("enabledAnchors value should be an array"),e instanceof Array&&e.forEach(function(e){-1===o.indexOf(e)&&t.Util.warn("Unknown resizer name: "+e+". Available names are: "+o.join(", "))}),e||[]}),t.Factory.addGetterSetter(t.Transformer,"resizeEnabled",!0),t.Factory.addGetterSetter(t.Transformer,"anchorSize",10,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Transformer,"rotateEnabled",!0),t.Factory.addGetterSetter(t.Transformer,"rotationSnaps",[]),t.Factory.addGetterSetter(t.Transformer,"rotateAnchorOffset",50,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Transformer,"borderEnabled",!0),t.Factory.addGetterSetter(t.Transformer,"anchorStroke","rgb(0, 161, 255)"),t.Factory.addGetterSetter(t.Transformer,"anchorStrokeWidth",1,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Transformer,"anchorFill","white"),t.Factory.addGetterSetter(t.Transformer,"borderStroke","rgb(0, 161, 255)"),t.Factory.addGetterSetter(t.Transformer,"borderStrokeWidth",1,t.Validators.getNumberValidator()),t.Factory.addGetterSetter(t.Transformer,"borderDash"),t.Factory.addGetterSetter(t.Transformer,"keepRatio",!0),t.Factory.addGetterSetter(t.Transformer,"padding",0,t.Validators.getNumberValidator()),t.Factory.addOverloadedGetterSetter(t.Transformer,"node"),t.Factory.addGetterSetter(t.Transformer,"boundBoxFunc"),t.Factory.backCompat(t.Transformer,{lineEnabled:"borderEnabled",rotateHandlerOffset:"rotateAnchorOffset",enabledHandlers:"enabledAnchors"}),t.Collection.mapMethods(t.Transformer)}(Konva)}).call(this,n(15))},function(t,e,n){"use strict";t.exports={}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,a,o,c,i){if(!t){var l;if(void 0===e)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,o,c,i],h=0;(l=new Error(e.replace(/%s/g,function(){return s[h++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".konva-wrapper {\n\tbackground: transparent;\n\tposition: absolute;\n\ttop: 0px;\n}\n",""])},function(t,e,n){var r=n(86);"string"==typeof r&&(r=[[t.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n(87);var c=n(37),i=n(23),l=n(12);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleStageMouseOver=function(t){n.props.adding&&(document.body.style.cursor="crosshair")},n.handleStageMouseLeave=function(t){document.body.style.cursor="default"},n.handleStageMouseOut=function(t){document.body.style.cursor="default"},n.handleStageMouseMove=function(t){n.props.onCanvasStageMouseMove(t)},n.handleStageMouseDown=function(t){n.props.onCanvasStageMouseDown(t)},n.handleStageMouseUp=function(t){n.props.onCanvasStageMouseUp(t)},n.handleGroupMouseDown=function(t){t.target.findAncestor("Group").moveToTop(),n.props.onCanvasGroupMouseDown(t)},n.handleGroupDragStart=function(t){n.props.onCanvasGroupDragStart(t)},n.handleGroupDragMove=function(t){if("Group"===t.target.getClassName()){for(var e,r,a=t.target,o=n.props,c=o.width,i=o.height,l=a.get(".topLeft")[0],s=a.get(".topRight")[0],h=a.get(".bottomRight")[0],d=a.get(".bottomLeft")[0],u=a.get(".top")[0],v=a.get(".left")[0],p=a.get(".right")[0],g=a.get(".bottom")[0],f=a.get("Rect")[0],m=a.get("Text")[0],z=void 0,x=void 0,M=void 0,b=[l,s,h,d,u,g,v,p],w=0;w<b.length;w++){var y=b[w];z=y.getAbsolutePosition().x,x=y.getAbsolutePosition().y,z=z<0?0:z,x=x<0?0:x,z=z>c?c:z,x=x>i?i:x,y.setAbsolutePosition({x:z,y:x})}var H=(M=l).getX(),C=M.getY();s.y(C),u.y(C),d.x(H),v.x(H),r=h.y()-l.y(),e=h.x()-l.x(),u.x(H+e/2),v.y(C+r/2),p.y(C+r/2),g.x(H+e/2),m.x(H),m.y(C),f.position(l.position()),f.width(e),f.height(r)}},n.handleGroupDragEnd=function(t){n.props.onCanvasGroupDragEnd(t)},n.handleDotMouseOver=function(t){switch(t.target.getName()){case"topLeft":case"bottomRight":document.body.style.cursor="nwse-resize";break;case"topRight":case"bottomLeft":document.body.style.cursor="nesw-resize";break;case"top":case"bottom":document.body.style.cursor="ns-resize";break;case"left":case"right":document.body.style.cursor="ew-resize"}},n.handleDotMouseOut=function(t){document.body.style.cursor="default"},n.handleDotMouseDown=function(t){var e=t.target.findAncestor("Group");e.draggable(!1),e.moveToTop(),t.target.moveToTop(),n.props.onCanvasDotMouseDown(t)},n.handleDotDragEnd=function(t){n.props.onCanvasDotDragEnd(t),document.body.style.cursor="default"},n.handleDotDragMove=function(t){var e=n.props,r=e.width,a=e.height,o=t.target,c=o.getParent(),i=c.get(".topLeft")[0],l=c.get(".topRight")[0],s=c.get(".bottomRight")[0],h=c.get(".bottomLeft")[0],d=c.get(".top")[0],u=c.get(".left")[0],v=c.get(".right")[0],p=c.get(".bottom")[0],g=c.get("Rect")[0],f=c.get("Text")[0],m=void 0,z=void 0,x=o.getAbsolutePosition().x,M=o.getAbsolutePosition().y;x=x<0?0:x,M=M<0?0:M,x=x>r?r:x,M=M>a?a:M,o.setAbsolutePosition({x:x,y:M});var b=o.getX(),w=o.getY();switch(o.getName()){case"topLeft":l.y(w),d.y(w),h.x(b),u.x(b),z=s.y()-i.y(),m=s.x()-i.x(),d.x(b+m/2),u.y(w+z/2),v.y(w+z/2),p.x(b+m/2),f.x(b),f.y(w);break;case"topRight":i.y(w),d.y(w),s.x(b),v.x(b),z=s.y()-i.y(),m=s.x()-i.x(),d.x(b-m/2),u.y(w+z/2),v.y(w+z/2),p.x(b-m/2),f.y(w),f.x(b-m);break;case"bottomRight":h.y(w),p.y(w),l.x(b),v.x(b),z=s.y()-i.y(),m=s.x()-i.x(),d.x(b-m/2),u.y(w-z/2),v.y(w-z/2),p.x(b-m/2),f.x(b-m);break;case"bottomLeft":s.y(w),p.y(w),i.x(b),u.x(b),z=s.y()-i.y(),m=s.x()-i.x(),d.x(b+m/2),u.y(w-z/2),v.y(w-z/2),p.x(b+m/2),f.x(b);break;case"top":i.y(w),l.y(w),z=s.y()-i.y(),m=s.x()-i.x(),d.x(i.x()+m/2),u.y(w+z/2),v.y(w+z/2),f.y(w);break;case"left":i.x(b),h.x(b),z=s.y()-i.y(),m=s.x()-i.x(),u.y(i.y()+z/2),d.x(b+m/2),p.x(b+m/2),f.x(b);break;case"right":l.x(b),s.x(b),z=s.y()-i.y(),m=s.x()-i.x(),v.y(i.y()+z/2),d.x(b-m/2),p.x(b-m/2),f.x(b-m);break;case"bottom":h.y(w),s.y(w),z=s.y()-i.y(),m=s.x()-i.x(),p.x(i.x()+m/2),u.y(w-z/2),v.y(w-z/2)}g.position(i.position()),g.width(m),g.height(z)},n.handle=function(t){},n.state={dotLength:6},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.height,r=e.width,a=e.objects,h=e.played,d=e.focusing,u=e.adding,v=this.state.dotLength,p=[];a.slice().reverse().forEach(function(e){for(var n=e.trajectories,r=0;r<n.length;r++){var a=void 0,u=void 0,g=void 0,f=void 0;if(h>=n[r].time){if(r!==n.length-1&&h>=n[r+1].time)continue;if(n[r].status!==i.SHOW)continue;if(r===n.length-1)a=n[r].x,u=n[r].y,g=n[r].width,f=n[r].height;else{var m=(0,l.interpolationArea)({startTraj:n[r],endTraj:n[r+1],played:h}),z=(0,l.interpolationPosition)({startTraj:n[r],endTraj:n[r+1],played:h});a=z.x,u=z.y,g=m.width,f=m.height}var x=[],M=d===e.name?e.color.replace(/,1\)/,",.3)"):"",b=o.default.createElement(c.Rect,{x:0,y:0,fill:M,width:g,height:f,stroke:e.color,strokeWidth:1}),w=o.default.createElement(c.Text,{offsetY:20,x:0,y:0,fontFamily:"Calibri",text:""+e.id,fontSize:16,lineHeight:1.2,fill:"#fff"});x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:0,y:0,key:"topLeft",name:"topLeft",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:g,y:0,key:"topRight",name:"topRight",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:g,y:f,key:"bottomRight",name:"bottomRight",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:0,y:f,key:"bottomLeft",name:"bottomLeft",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:g/2,y:0,key:"top",name:"top",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:0,y:f/2,key:"left",name:"left",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:g,y:f/2,key:"right",name:"right",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),x.push(o.default.createElement(c.Rect,{offsetX:v/2,offsetY:v/2,x:g/2,y:f,key:"bottom",name:"bottom",stroke:e.color,fill:e.color,strokeWidth:0,width:v,height:v,draggable:!0,dragOnTop:!1,onDragMove:t.handleDotDragMove,onMouseDown:t.handleDotMouseDown,onDragEnd:t.handleDotDragEnd,onMouseOver:t.handleDotMouseOver,onMouseOut:t.handleDotMouseOut})),p.push(o.default.createElement(c.Group,s({x:a,y:u,key:e.name,name:e.name,draggable:!0,onDragMove:t.handle,onMouseDown:t.handleGroupMouseDown,onDragEnd:t.handleGroupDragEnd,onDragStart:t.handleGroupDragStart},"onDragMove",t.handleGroupDragMove),w,b,x));break}}});var g=void 0;return u&&(g=o.default.createElement(c.Layer,null,o.default.createElement(c.Rect,{fill:"#ffffff",width:r,height:n,opacity:.3}),o.default.createElement(c.Text,{y:n/2,width:r,text:"Click and Drag here to add new box",align:"center",fontSize:16,fill:"#fff"}))),o.default.createElement(c.Stage,{width:r,height:n,className:"konva-wrapper",onMouseDown:this.handleStageMouseDown,onMouseUp:this.handleStageMouseUp,onMouseMove:this.handleStageMouseMove,onMouseOver:this.handleStageMouseOver,onMouseLeave:this.handleStageMouseLeave,onMouseOut:this.handleStageMouseOut},g,o.default.createElement(c.Layer,null,p))}}]),e}();e.default=h},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,'/*player*/\n.player-slider{\n\tposition: relative;\n}\n.player-slider input[type=\'range\'] {\n\t-webkit-appearance: none;\n\twidth: 100%;\n\theight: 15px;\n\tborder-radius: 5px;\n\tbackground: #d3d3d3;\n\toutline: none;\n\topacity: 0.7;\n\t-webkit-transition: .2s;\n\ttransition: opacity .2s;\n}\n.player-slider input:hover {\n  opacity: 1;\n}\n.player-slider input::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 15px;\n  height: 15px;\n\tborder-radius: 50%;\n\tbackground: rgb(0, 123, 255);\n\tcursor: pointer;\n\t/*\n\tbox-shadow: -80px 0 0 80px #43e5f7;\n\t*/\n}\n.player-slider input::-moz-range-thumb {\n\twidth: 15px;\n\theight: 15px;\n\tborder-radius: 50%;\n\tbackground: rgb(0, 123, 255);\n\tcursor: pointer;\n}\n\n\n\n/** FF*/\ninput[type="range"]::-moz-range-progress {\n  background-color: #d3d3d3;\n}\ninput[type="range"]::-moz-range-track {\n  background-color: rgb(0, 123, 255);\n}\n/* IE*/\ninput[type="range"]::-ms-fill-lower {\n  background-color: #d3d3d3;\n}\ninput[type="range"]::-ms-fill-upper {\n  background-color: rgb(0, 123, 255);\n}\n',""])},function(t,e,n){var r=n(89);"string"==typeof r&&(r=[[t.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(a);function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(90);var i=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=c(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.handleMouseUp=function(t){r.props.onSliderMouseUp(t)},r.handleMouseDown=function(t){r.props.onSliderMouseDown(t)},r.handleChange=function(t){r.props.onSliderChange(t)},c(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"render",value:function(){var t=this.props.played;return o.default.createElement("div",{className:"player-slider"},o.default.createElement("input",{type:"range",min:0,max:1,step:"any",value:t,onMouseUp:this.handleMouseUp,onMouseDown:this.handleMouseDown,onChange:this.handleChange,onInput:this.handleChange}))}}]),e}();e.default=i},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".speed-toggle{\n\tfont-family: Courier;\n}\n.speed-toggle:hover, .speed-toggle:active, .speed-toggle:focus{\n\ttext-decoration: none !important;\n}\n.speed-item{\n\tfont-family: Courier;\n}\n.speed-item:hover{\n\tcursor: pointer;\n}\n.speed-item:active{\n\tbackground: #f8f9fa !important;\n}\n.speed-item:focus{\n\toutline: none;\n}\n.player-button{\n\t\n}\n",""])},function(t,e,n){var r=n(92);"string"==typeof r&&(r=[[t.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";
/** @license React v16.5.0
 * schedule.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(e,"__esModule",{value:!0});var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a=Date,o="function"==typeof setTimeout?setTimeout:void 0,c="function"==typeof clearTimeout?clearTimeout:void 0,i="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,l="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0,s="object"==typeof performance&&"function"==typeof performance.now;if(e.unstable_now=void 0,s){var h=performance;e.unstable_now=function(){return h.now()}}else e.unstable_now=function(){return a.now()};if(e.unstable_scheduleWork=void 0,e.unstable_cancelScheduledWork=void 0,r){var d=null,u=null,v=-1,p=!1,g=!1,f=void 0,m=void 0,z=function(t){f=i(function(e){c(m),t(e)}),m=o(function(){l(f),t(e.unstable_now())},100)},x=0,M=33,b=33,w={didTimeout:!1,timeRemaining:function(){var t=x-e.unstable_now();return 0<t?t:0}},y=function(t,n){var r=t.scheduledCallback,a=!1;try{r(n),a=!0}finally{e.unstable_cancelScheduledWork(t),a||(p=!0,window.postMessage(H,"*"))}},H="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(t){if(t.source===window&&t.data===H&&(p=!1,null!==d)){if(null!==d){var n=e.unstable_now();if(!(-1===v||v>n)){t=-1;for(var r=[],a=d;null!==a;){var o=a.timeoutTime;-1!==o&&o<=n?r.push(a):-1!==o&&(-1===t||o<t)&&(t=o),a=a.next}if(0<r.length)for(w.didTimeout=!0,n=0,a=r.length;n<a;n++)y(r[n],w);v=t}}for(t=e.unstable_now();0<x-t&&null!==d;)t=d,w.didTimeout=!1,y(t,w),t=e.unstable_now();null===d||g||(g=!0,z(C))}},!1);var C=function(t){g=!1;var e=t-x+b;e<b&&M<b?(8>e&&(e=8),b=e<M?M:e):M=e,x=t+b,p||(p=!0,window.postMessage(H,"*"))};e.unstable_scheduleWork=function(t,n){var r=-1;return null!=n&&"number"==typeof n.timeout&&(r=e.unstable_now()+n.timeout),(-1===v||-1!==r&&r<v)&&(v=r),t={scheduledCallback:t,timeoutTime:r,prev:null,next:null},null===d?d=t:null!==(n=t.prev=u)&&(n.next=t),u=t,g||(g=!0,z(C)),t},e.unstable_cancelScheduledWork=function(t){if(null!==t.prev||d===t){var e=t.next,n=t.prev;t.next=null,t.prev=null,null!==e?null!==n?(n.next=e,e.prev=n):(e.prev=null,d=e):null!==n?(n.next=null,u=n):u=d=null}}}else{var V=new Map;e.unstable_scheduleWork=function(t){var e={scheduledCallback:t,timeoutTime:0,next:null,prev:null},n=o(function(){t({timeRemaining:function(){return 1/0},didTimeout:!1})});return V.set(t,n),e},e.unstable_cancelScheduledWork=function(t){var e=V.get(t.scheduledCallback);V.delete(t),c(e)}}},function(t,e,n){"use strict";t.exports=n(94)},function(t,e,n){"use strict";
/** @license React v16.5.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(1),a=n(26),o=n(95);function c(t){for(var e=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(t,e,n,r,a,o,c,i){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,void 0,void 0,void 0,void 0,void 0],s=0;(t=Error(e.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}r||c("227");var i=!1,l=null,s=!1,h=null,d={onError:function(t){i=!0,l=t}};function u(t,e,n,r,a,o,c,s,h){i=!1,l=null,function(t,e,n,r,a,o,c,i,l){var s=Array.prototype.slice.call(arguments,3);try{e.apply(n,s)}catch(t){this.onError(t)}}.apply(d,arguments)}var v=null,p={};function g(){if(v)for(var t in p){var e=p[t],n=v.indexOf(t);if(-1<n||c("96",t),!m[n])for(var r in e.extractEvents||c("97",t),m[n]=e,n=e.eventTypes){var a=void 0,o=n[r],i=e,l=r;z.hasOwnProperty(l)&&c("99",l),z[l]=o;var s=o.phasedRegistrationNames;if(s){for(a in s)s.hasOwnProperty(a)&&f(s[a],i,l);a=!0}else o.registrationName?(f(o.registrationName,i,l),a=!0):a=!1;a||c("98",r,t)}}}function f(t,e,n){x[t]&&c("100",t),x[t]=e,M[t]=e.eventTypes[n].dependencies}var m=[],z={},x={},M={},b=null,w=null,y=null;function H(t,e,n,r){e=t.type||"unknown-event",t.currentTarget=y(r),function(t,e,n,r,a,o,d,v,p){if(u.apply(this,arguments),i){if(i){var g=l;i=!1,l=null}else c("198"),g=void 0;s||(s=!0,h=g)}}(e,n,void 0,t),t.currentTarget=null}function C(t,e){return null==e&&c("30"),null==t?e:Array.isArray(t)?Array.isArray(e)?(t.push.apply(t,e),t):(t.push(e),t):Array.isArray(e)?[t].concat(e):[t,e]}function V(t,e,n){Array.isArray(t)?t.forEach(e,n):t&&e.call(n,t)}var L=null;function B(t,e){if(t){var n=t._dispatchListeners,r=t._dispatchInstances;if(Array.isArray(n))for(var a=0;a<n.length&&!t.isPropagationStopped();a++)H(t,e,n[a],r[a]);else n&&H(t,e,n,r);t._dispatchListeners=null,t._dispatchInstances=null,t.isPersistent()||t.constructor.release(t)}}function k(t){return B(t,!0)}function S(t){return B(t,!1)}function _(t,e){var n=t.stateNode;if(!n)return null;var r=b(n);if(!r)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(r=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!r;break t;default:t=!1}return t?null:(n&&"function"!=typeof n&&c("231",e,typeof n),n)}function T(t,e){if(null!==t&&(L=C(L,t)),t=L,L=null,t&&(V(t,e?k:S),L&&c("95"),s))throw e=h,s=!1,h=null,e}var F=Math.random().toString(36).slice(2),P="__reactInternalInstance$"+F,E="__reactEventHandlers$"+F;function I(t){if(t[P])return t[P];for(;!t[P];){if(!t.parentNode)return null;t=t.parentNode}return 7===(t=t[P]).tag||8===t.tag?t:null}function O(t){return!(t=t[P])||7!==t.tag&&8!==t.tag?null:t}function N(t){if(7===t.tag||8===t.tag)return t.stateNode;c("33")}function A(t){return t[E]||null}function R(t){do{t=t.return}while(t&&7!==t.tag);return t||null}function D(t,e,n){(e=_(t,n.dispatchConfig.phasedRegistrationNames[e]))&&(n._dispatchListeners=C(n._dispatchListeners,e),n._dispatchInstances=C(n._dispatchInstances,t))}function j(t){if(t&&t.dispatchConfig.phasedRegistrationNames){for(var e=t._targetInst,n=[];e;)n.push(e),e=R(e);for(e=n.length;0<e--;)D(n[e],"captured",t);for(e=0;e<n.length;e++)D(n[e],"bubbled",t)}}function K(t,e,n){t&&n&&n.dispatchConfig.registrationName&&(e=_(t,n.dispatchConfig.registrationName))&&(n._dispatchListeners=C(n._dispatchListeners,e),n._dispatchInstances=C(n._dispatchInstances,t))}function U(t){t&&t.dispatchConfig.registrationName&&K(t._targetInst,null,t)}function G(t){V(t,j)}var W=!("undefined"==typeof window||!window.document||!window.document.createElement);function q(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Y={animationend:q("Animation","AnimationEnd"),animationiteration:q("Animation","AnimationIteration"),animationstart:q("Animation","AnimationStart"),transitionend:q("Transition","TransitionEnd")},X={},Q={};function $(t){if(X[t])return X[t];if(!Y[t])return t;var e,n=Y[t];for(e in n)if(n.hasOwnProperty(e)&&e in Q)return X[t]=n[e];return t}W&&(Q=document.createElement("div").style,"AnimationEvent"in window||(delete Y.animationend.animation,delete Y.animationiteration.animation,delete Y.animationstart.animation),"TransitionEvent"in window||delete Y.transitionend.transition);var J=$("animationend"),Z=$("animationiteration"),tt=$("animationstart"),et=$("transitionend"),nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rt=null,at=null,ot=null;function ct(){if(ot)return ot;var t,e,n=at,r=n.length,a="value"in rt?rt.value:rt.textContent,o=a.length;for(t=0;t<r&&n[t]===a[t];t++);var c=r-t;for(e=1;e<=c&&n[r-e]===a[o-e];e++);return ot=a.slice(t,1<e?1-e:void 0)}function it(){return!0}function lt(){return!1}function st(t,e,n,r){for(var a in this.dispatchConfig=t,this._targetInst=e,this.nativeEvent=n,t=this.constructor.Interface)t.hasOwnProperty(a)&&((e=t[a])?this[a]=e(n):"target"===a?this.target=r:this[a]=n[a]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?it:lt,this.isPropagationStopped=lt,this}function ht(t,e,n,r){if(this.eventPool.length){var a=this.eventPool.pop();return this.call(a,t,e,n,r),a}return new this(t,e,n,r)}function dt(t){t instanceof this||c("279"),t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function ut(t){t.eventPool=[],t.getPooled=ht,t.release=dt}a(st.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():"unknown"!=typeof t.returnValue&&(t.returnValue=!1),this.isDefaultPrevented=it)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():"unknown"!=typeof t.cancelBubble&&(t.cancelBubble=!0),this.isPropagationStopped=it)},persist:function(){this.isPersistent=it},isPersistent:lt,destructor:function(){var t,e=this.constructor.Interface;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=lt,this._dispatchInstances=this._dispatchListeners=null}}),st.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},st.extend=function(t){function e(){}function n(){return r.apply(this,arguments)}var r=this;e.prototype=r.prototype;var o=new e;return a(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=a({},r.Interface,t),n.extend=r.extend,ut(n),n},ut(st);var vt=st.extend({data:null}),pt=st.extend({data:null}),gt=[9,13,27,32],ft=W&&"CompositionEvent"in window,mt=null;W&&"documentMode"in document&&(mt=document.documentMode);var zt=W&&"TextEvent"in window&&!mt,xt=W&&(!ft||mt&&8<mt&&11>=mt),Mt=String.fromCharCode(32),bt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},wt=!1;function yt(t,e){switch(t){case"keyup":return-1!==gt.indexOf(e.keyCode);case"keydown":return 229!==e.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Ht(t){return"object"==typeof(t=t.detail)&&"data"in t?t.data:null}var Ct=!1,Vt={eventTypes:bt,extractEvents:function(t,e,n,r){var a=void 0,o=void 0;if(ft)t:{switch(t){case"compositionstart":a=bt.compositionStart;break t;case"compositionend":a=bt.compositionEnd;break t;case"compositionupdate":a=bt.compositionUpdate;break t}a=void 0}else Ct?yt(t,n)&&(a=bt.compositionEnd):"keydown"===t&&229===n.keyCode&&(a=bt.compositionStart);return a?(xt&&"ko"!==n.locale&&(Ct||a!==bt.compositionStart?a===bt.compositionEnd&&Ct&&(o=ct()):(at="value"in(rt=r)?rt.value:rt.textContent,Ct=!0)),a=vt.getPooled(a,e,n,r),o?a.data=o:null!==(o=Ht(n))&&(a.data=o),G(a),o=a):o=null,(t=zt?function(t,e){switch(t){case"compositionend":return Ht(e);case"keypress":return 32!==e.which?null:(wt=!0,Mt);case"textInput":return(t=e.data)===Mt&&wt?null:t;default:return null}}(t,n):function(t,e){if(Ct)return"compositionend"===t||!ft&&yt(t,e)?(t=ct(),ot=at=rt=null,Ct=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xt&&"ko"!==e.locale?null:e.data;default:return null}}(t,n))?((e=pt.getPooled(bt.beforeInput,e,n,r)).data=t,G(e)):e=null,null===o?e:null===e?o:[o,e]}},Lt=null,Bt=null,kt=null;function St(t){if(t=w(t)){"function"!=typeof Lt&&c("280");var e=b(t.stateNode);Lt(t.stateNode,t.type,e)}}function _t(t){Bt?kt?kt.push(t):kt=[t]:Bt=t}function Tt(){if(Bt){var t=Bt,e=kt;if(kt=Bt=null,St(t),e)for(t=0;t<e.length;t++)St(e[t])}}function Ft(t,e){return t(e)}function Pt(t,e,n){return t(e,n)}function Et(){}var It=!1;function Ot(t,e){if(It)return t(e);It=!0;try{return Ft(t,e)}finally{It=!1,(null!==Bt||null!==kt)&&(Et(),Tt())}}var Nt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function At(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return"input"===e?!!Nt[t.type]:"textarea"===e}function Rt(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}function Dt(t){if(!W)return!1;var e=(t="on"+t)in document;return e||((e=document.createElement("div")).setAttribute(t,"return;"),e="function"==typeof e[t]),e}function jt(t){var e=t.type;return(t=t.nodeName)&&"input"===t.toLowerCase()&&("checkbox"===e||"radio"===e)}function Kt(t){t._valueTracker||(t._valueTracker=function(t){var e=jt(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(t){r=""+t,o.call(this,t)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(t){r=""+t},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}(t))}function Ut(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jt(t)?t.checked?"true":"false":t.value),(t=r)!==n&&(e.setValue(t),!0)}var Gt=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wt=/^(.*)[\\\/]/,qt="function"==typeof Symbol&&Symbol.for,Yt=qt?Symbol.for("react.element"):60103,Xt=qt?Symbol.for("react.portal"):60106,Qt=qt?Symbol.for("react.fragment"):60107,$t=qt?Symbol.for("react.strict_mode"):60108,Jt=qt?Symbol.for("react.profiler"):60114,Zt=qt?Symbol.for("react.provider"):60109,te=qt?Symbol.for("react.context"):60110,ee=qt?Symbol.for("react.async_mode"):60111,ne=qt?Symbol.for("react.forward_ref"):60112,re=qt?Symbol.for("react.placeholder"):60113,ae="function"==typeof Symbol&&Symbol.iterator;function oe(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=ae&&t[ae]||t["@@iterator"])?t:null}function ce(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case ee:return"AsyncMode";case Qt:return"Fragment";case Xt:return"Portal";case Jt:return"Profiler";case $t:return"StrictMode";case re:return"Placeholder"}if("object"==typeof t){switch(t.$$typeof){case te:return"Context.Consumer";case Zt:return"Context.Provider";case ne:return""!==(t=(t=t.render).displayName||t.name||"")?"ForwardRef("+t+")":"ForwardRef"}if("function"==typeof t.then&&(t=1===t._reactStatus?t._reactResult:null))return ce(t)}return null}function ie(t){var e="";do{t:switch(t.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var n=t._debugOwner,r=t._debugSource,a=ce(t.type),o=null;n&&(o=ce(n.type)),n=a,a="",r?a=" (at "+r.fileName.replace(Wt,"")+":"+r.lineNumber+")":o&&(a=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+a;break t;default:o=""}e+=o,t=t.return}while(t);return e}var le=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,se=Object.prototype.hasOwnProperty,he={},de={};function ue(t,e,n,r,a){this.acceptsBooleans=2===e||3===e||4===e,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=t,this.type=e}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new ue(t,0,!1,t,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new ue(e,1,!1,t[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new ue(t,2,!1,t.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new ue(t,2,!1,t,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new ue(t,3,!1,t.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new ue(t,3,!0,t,null)}),["capture","download"].forEach(function(t){ve[t]=new ue(t,4,!1,t,null)}),["cols","rows","size","span"].forEach(function(t){ve[t]=new ue(t,6,!1,t,null)}),["rowSpan","start"].forEach(function(t){ve[t]=new ue(t,5,!1,t.toLowerCase(),null)});var pe=/[\-:]([a-z])/g;function ge(t){return t[1].toUpperCase()}function fe(t,e,n,r){var a=ve.hasOwnProperty(e)?ve[e]:null;(null!==a?0===a.type:!r&&2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))||(function(t,e,n,r){if(null===e||void 0===e||function(t,e,n,r){if(null!==n&&0===n.type)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(t=t.toLowerCase().slice(0,5))&&"aria-"!==t);default:return!1}}(t,e,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!e;case 4:return!1===e;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}(e,n,a,r)&&(n=null),r||null===a?function(t){return!!se.call(de,t)||!se.call(he,t)&&(le.test(t)?de[t]=!0:(he[t]=!0,!1))}(e)&&(null===n?t.removeAttribute(e):t.setAttribute(e,""+n)):a.mustUseProperty?t[a.propertyName]=null===n?3!==a.type&&"":n:(e=a.attributeName,r=a.attributeNamespace,null===n?t.removeAttribute(e):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}function me(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function ze(t,e){var n=e.checked;return a({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:t._wrapperState.initialChecked})}function xe(t,e){var n=null==e.defaultValue?"":e.defaultValue,r=null!=e.checked?e.checked:e.defaultChecked;n=me(null!=e.value?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}}function Me(t,e){null!=(e=e.checked)&&fe(t,"checked",e,!1)}function be(t,e){Me(t,e);var n=me(e.value),r=e.type;if(null!=n)"number"===r?(0===n&&""===t.value||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if("submit"===r||"reset"===r)return void t.removeAttribute("value");e.hasOwnProperty("value")?ye(t,e.type,n):e.hasOwnProperty("defaultValue")&&ye(t,e.type,me(e.defaultValue)),null==e.checked&&null!=e.defaultChecked&&(t.defaultChecked=!!e.defaultChecked)}function we(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!("submit"!==r&&"reset"!==r||void 0!==e.value&&null!==e.value))return;e=""+t._wrapperState.initialValue,r=t.value,n||e===r||(t.value=e),t.defaultValue=e}""!==(n=t.name)&&(t.name=""),t.defaultChecked=!t.defaultChecked,t.defaultChecked=!!t._wrapperState.initialChecked,""!==n&&(t.name=n)}function ye(t,e,n){"number"===e&&t.ownerDocument.activeElement===t||(null==n?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pe,ge);ve[e]=new ue(e,1,!1,t,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pe,ge);ve[e]=new ue(e,1,!1,t,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pe,ge);ve[e]=new ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace")}),ve.tabIndex=new ue("tabIndex",1,!1,"tabindex",null);var He={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ce(t,e,n){return(t=st.getPooled(He.change,t,e,n)).type="change",_t(n),G(t),t}var Ve=null,Le=null;function Be(t){T(t,!1)}function ke(t){if(Ut(N(t)))return t}function Se(t,e){if("change"===t)return e}var _e=!1;function Te(){Ve&&(Ve.detachEvent("onpropertychange",Fe),Le=Ve=null)}function Fe(t){"value"===t.propertyName&&ke(Le)&&Ot(Be,t=Ce(Le,t,Rt(t)))}function Pe(t,e,n){"focus"===t?(Te(),Le=n,(Ve=e).attachEvent("onpropertychange",Fe)):"blur"===t&&Te()}function Ee(t){if("selectionchange"===t||"keyup"===t||"keydown"===t)return ke(Le)}function Ie(t,e){if("click"===t)return ke(e)}function Oe(t,e){if("input"===t||"change"===t)return ke(e)}W&&(_e=Dt("input")&&(!document.documentMode||9<document.documentMode));var Ne={eventTypes:He,_isInputEventSupported:_e,extractEvents:function(t,e,n,r){var a=e?N(e):window,o=void 0,c=void 0,i=a.nodeName&&a.nodeName.toLowerCase();if("select"===i||"input"===i&&"file"===a.type?o=Se:At(a)?_e?o=Oe:(o=Ee,c=Pe):(i=a.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(o=Ie),o&&(o=o(t,e)))return Ce(o,n,r);c&&c(t,a,e),"blur"===t&&(t=a._wrapperState)&&t.controlled&&"number"===a.type&&ye(a,"number",a.value)}},Ae=st.extend({view:null,detail:null}),Re={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function De(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):!!(t=Re[t])&&!!e[t]}function je(){return De}var Ke=0,Ue=0,Ge=!1,We=!1,qe=Ae.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:je,button:null,buttons:null,relatedTarget:function(t){return t.relatedTarget||(t.fromElement===t.srcElement?t.toElement:t.fromElement)},movementX:function(t){if("movementX"in t)return t.movementX;var e=Ke;return Ke=t.screenX,Ge?"mousemove"===t.type?t.screenX-e:0:(Ge=!0,0)},movementY:function(t){if("movementY"in t)return t.movementY;var e=Ue;return Ue=t.screenY,We?"mousemove"===t.type?t.screenY-e:0:(We=!0,0)}}),Ye=qe.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Qe={eventTypes:Xe,extractEvents:function(t,e,n,r){var a="mouseover"===t||"pointerover"===t,o="mouseout"===t||"pointerout"===t;if(a&&(n.relatedTarget||n.fromElement)||!o&&!a)return null;if(a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window,o?(o=e,e=(e=n.relatedTarget||n.toElement)?I(e):null):o=null,o===e)return null;var c=void 0,i=void 0,l=void 0,s=void 0;"mouseout"===t||"mouseover"===t?(c=qe,i=Xe.mouseLeave,l=Xe.mouseEnter,s="mouse"):"pointerout"!==t&&"pointerover"!==t||(c=Ye,i=Xe.pointerLeave,l=Xe.pointerEnter,s="pointer");var h=null==o?a:N(o);if(a=null==e?a:N(e),(t=c.getPooled(i,o,n,r)).type=s+"leave",t.target=h,t.relatedTarget=a,(n=c.getPooled(l,e,n,r)).type=s+"enter",n.target=a,n.relatedTarget=h,r=e,o&&r)t:{for(a=r,s=0,c=e=o;c;c=R(c))s++;for(c=0,l=a;l;l=R(l))c++;for(;0<s-c;)e=R(e),s--;for(;0<c-s;)a=R(a),c--;for(;s--;){if(e===a||e===a.alternate)break t;e=R(e),a=R(a)}e=null}else e=null;for(a=e,e=[];o&&o!==a&&(null===(s=o.alternate)||s!==a);)e.push(o),o=R(o);for(o=[];r&&r!==a&&(null===(s=r.alternate)||s!==a);)o.push(r),r=R(r);for(r=0;r<e.length;r++)K(e[r],"bubbled",t);for(r=o.length;0<r--;)K(o[r],"captured",n);return[t,n]}},$e=Object.prototype.hasOwnProperty;function Je(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function Ze(t,e){if(Je(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!$e.call(e,n[r])||!Je(t[n[r]],e[n[r]]))return!1;return!0}function tn(t){var e=t;if(t.alternate)for(;e.return;)e=e.return;else{if(0!=(2&e.effectTag))return 1;for(;e.return;)if(0!=(2&(e=e.return).effectTag))return 1}return 5===e.tag?2:3}function en(t){2!==tn(t)&&c("188")}function nn(t){if(!(t=function(t){var e=t.alternate;if(!e)return 3===(e=tn(t))&&c("188"),1===e?null:t;for(var n=t,r=e;;){var a=n.return,o=a?a.alternate:null;if(!a||!o)break;if(a.child===o.child){for(var i=a.child;i;){if(i===n)return en(a),t;if(i===r)return en(a),e;i=i.sibling}c("188")}if(n.return!==r.return)n=a,r=o;else{i=!1;for(var l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}i||c("189")}}n.alternate!==r&&c("190")}return 5!==n.tag&&c("188"),n.stateNode.current===n?t:e}(t)))return null;for(var e=t;;){if(7===e.tag||8===e.tag)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}var rn=st.extend({animationName:null,elapsedTime:null,pseudoElement:null}),an=st.extend({clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),on=Ae.extend({relatedTarget:null});function cn(t){var e=t.keyCode;return"charCode"in t?0===(t=t.charCode)&&13===e&&(t=13):t=e,10===t&&(t=13),32<=t||13===t?t:0}var ln={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn=Ae.extend({key:function(t){if(t.key){var e=ln[t.key]||t.key;if("Unidentified"!==e)return e}return"keypress"===t.type?13===(t=cn(t))?"Enter":String.fromCharCode(t):"keydown"===t.type||"keyup"===t.type?sn[t.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:je,charCode:function(t){return"keypress"===t.type?cn(t):0},keyCode:function(t){return"keydown"===t.type||"keyup"===t.type?t.keyCode:0},which:function(t){return"keypress"===t.type?cn(t):"keydown"===t.type||"keyup"===t.type?t.keyCode:0}}),dn=qe.extend({dataTransfer:null}),un=Ae.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:je}),vn=st.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),pn=qe.extend({deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:null,deltaMode:null}),gn=[["abort","abort"],[J,"animationEnd"],[Z,"animationIteration"],[tt,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[et,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],fn={},mn={};function zn(t,e){var n=t[0],r="on"+((t=t[1])[0].toUpperCase()+t.slice(1));e={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:e},fn[t]=e,mn[n]=e}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(t){zn(t,!0)}),gn.forEach(function(t){zn(t,!1)});var xn={eventTypes:fn,isInteractiveTopLevelEventType:function(t){return void 0!==(t=mn[t])&&!0===t.isInteractive},extractEvents:function(t,e,n,r){var a=mn[t];if(!a)return null;switch(t){case"keypress":if(0===cn(n))return null;case"keydown":case"keyup":t=hn;break;case"blur":case"focus":t=on;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":t=qe;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":t=dn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":t=un;break;case J:case Z:case tt:t=rn;break;case et:t=vn;break;case"scroll":t=Ae;break;case"wheel":t=pn;break;case"copy":case"cut":case"paste":t=an;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":t=Ye;break;default:t=st}return G(e=t.getPooled(a,e,n,r)),e}},Mn=xn.isInteractiveTopLevelEventType,bn=[];function wn(t){var e=t.targetInst,n=e;do{if(!n){t.ancestors.push(n);break}var r;for(r=n;r.return;)r=r.return;if(!(r=5!==r.tag?null:r.stateNode.containerInfo))break;t.ancestors.push(n),n=I(r)}while(n);for(n=0;n<t.ancestors.length;n++){e=t.ancestors[n];var a=Rt(t.nativeEvent);r=t.topLevelType;for(var o=t.nativeEvent,c=null,i=0;i<m.length;i++){var l=m[i];l&&(l=l.extractEvents(r,e,o,a))&&(c=C(c,l))}T(c,!1)}}var yn=!0;function Hn(t,e){if(!e)return null;var n=(Mn(t)?Vn:Ln).bind(null,t);e.addEventListener(t,n,!1)}function Cn(t,e){if(!e)return null;var n=(Mn(t)?Vn:Ln).bind(null,t);e.addEventListener(t,n,!0)}function Vn(t,e){Pt(Ln,t,e)}function Ln(t,e){if(yn){var n=Rt(e);if(null===(n=I(n))||"number"!=typeof n.tag||2===tn(n)||(n=null),bn.length){var r=bn.pop();r.topLevelType=t,r.nativeEvent=e,r.targetInst=n,t=r}else t={topLevelType:t,nativeEvent:e,targetInst:n,ancestors:[]};try{Ot(wn,t)}finally{t.topLevelType=null,t.nativeEvent=null,t.targetInst=null,t.ancestors.length=0,10>bn.length&&bn.push(t)}}}var Bn={},kn=0,Sn="_reactListenersID"+(""+Math.random()).slice(2);function _n(t){return Object.prototype.hasOwnProperty.call(t,Sn)||(t[Sn]=kn++,Bn[t[Sn]]={}),Bn[t[Sn]]}function Tn(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}function Fn(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pn(t,e){var n,r=Fn(t);for(t=0;r;){if(3===r.nodeType){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Fn(r)}}function En(){for(var t=window,e=Tn();e instanceof t.HTMLIFrameElement;){try{t=e.contentDocument.defaultView}catch(t){break}e=Tn(t.document)}return e}function In(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&("input"===e&&("text"===t.type||"search"===t.type||"tel"===t.type||"url"===t.type||"password"===t.type)||"textarea"===e||"true"===t.contentEditable)}var On=W&&"documentMode"in document&&11>=document.documentMode,Nn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},An=null,Rn=null,Dn=null,jn=!1;function Kn(t,e){var n=e.window===e?e.document:9===e.nodeType?e:e.ownerDocument;return jn||null==An||An!==Tn(n)?null:(n="selectionStart"in(n=An)&&In(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Dn&&Ze(Dn,n)?null:(Dn=n,(t=st.getPooled(Nn.select,Rn,t,e)).type="select",t.target=An,G(t),t))}var Un={eventTypes:Nn,extractEvents:function(t,e,n,r){var a,o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(a=!o)){t:{o=_n(o),a=M.onSelect;for(var c=0;c<a.length;c++){var i=a[c];if(!o.hasOwnProperty(i)||!o[i]){o=!1;break t}}o=!0}a=!o}if(a)return null;switch(o=e?N(e):window,t){case"focus":(At(o)||"true"===o.contentEditable)&&(An=o,Rn=e,Dn=null);break;case"blur":Dn=Rn=An=null;break;case"mousedown":jn=!0;break;case"contextmenu":case"mouseup":case"dragend":return jn=!1,Kn(n,r);case"selectionchange":if(On)break;case"keydown":case"keyup":return Kn(n,r)}return null}};function Gn(t,e){return t=a({children:void 0},e),(e=function(t){var e="";return r.Children.forEach(t,function(t){null!=t&&(e+=t)}),e}(e.children))&&(t.children=e),t}function Wn(t,e,n,r){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&r&&(t[n].defaultSelected=!0)}else{for(n=""+me(n),e=null,a=0;a<t.length;a++){if(t[a].value===n)return t[a].selected=!0,void(r&&(t[a].defaultSelected=!0));null!==e||t[a].disabled||(e=t[a])}null!==e&&(e.selected=!0)}}function qn(t,e){return null!=e.dangerouslySetInnerHTML&&c("91"),a({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yn(t,e){var n=e.value;null==n&&(n=e.defaultValue,null!=(e=e.children)&&(null!=n&&c("92"),Array.isArray(e)&&(1>=e.length||c("93"),e=e[0]),n=e),null==n&&(n="")),t._wrapperState={initialValue:me(n)}}function Xn(t,e){var n=me(e.value);null!=n&&((n=""+n)!==t.value&&(t.value=n),null==e.defaultValue&&(t.defaultValue=n)),null!=e.defaultValue&&(t.defaultValue=""+me(e.defaultValue))}function Qn(t){var e=t.textContent;e===t._wrapperState.initialValue&&(t.value=e)}(function(t){v&&c("101"),v=Array.prototype.slice.call(t),g()})("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),b=A,w=O,y=N,function(t){var e,n=!1;for(e in t)if(t.hasOwnProperty(e)){var r=t[e];p.hasOwnProperty(e)&&p[e]===r||(p[e]&&c("102",e),p[e]=r,n=!0)}n&&g()}({SimpleEventPlugin:xn,EnterLeaveEventPlugin:Qe,ChangeEventPlugin:Ne,SelectEventPlugin:Un,BeforeInputEventPlugin:Vt});var $n={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Jn(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zn(t,e){return null==t||"http://www.w3.org/1999/xhtml"===t?Jn(e):"http://www.w3.org/2000/svg"===t&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":t}var tr=void 0,er=function(t){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,n,r,a){MSApp.execUnsafeLocalFunction(function(){return t(e,n)})}:t}(function(t,e){if(t.namespaceURI!==$n.svg||"innerHTML"in t)t.innerHTML=e;else{for((tr=tr||document.createElement("div")).innerHTML="<svg>"+e+"</svg>",e=tr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&3===n.nodeType)return void(n.nodeValue=e)}t.textContent=e}var rr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ar=["Webkit","ms","Moz","O"];function or(t,e){for(var n in t=t.style,e)if(e.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=n,o=e[n];a=null==o||"boolean"==typeof o||""===o?"":r||"number"!=typeof o||0===o||rr.hasOwnProperty(a)&&rr[a]?(""+o).trim():o+"px","float"===n&&(n="cssFloat"),r?t.setProperty(n,a):t[n]=a}}Object.keys(rr).forEach(function(t){ar.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),rr[e]=rr[t]})});var cr=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ir(t,e){e&&(cr[t]&&(null!=e.children||null!=e.dangerouslySetInnerHTML)&&c("137",t,""),null!=e.dangerouslySetInnerHTML&&(null!=e.children&&c("60"),"object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML||c("61")),null!=e.style&&"object"!=typeof e.style&&c("62",""))}function lr(t,e){if(-1===t.indexOf("-"))return"string"==typeof e.is;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function sr(t,e){var n=_n(t=9===t.nodeType||11===t.nodeType?t:t.ownerDocument);e=M[e];for(var r=0;r<e.length;r++){var a=e[r];if(!n.hasOwnProperty(a)||!n[a]){switch(a){case"scroll":Cn("scroll",t);break;case"focus":case"blur":Cn("focus",t),Cn("blur",t),n.blur=!0,n.focus=!0;break;case"cancel":case"close":Dt(a)&&Cn(a,t);break;case"invalid":case"submit":case"reset":break;default:-1===nt.indexOf(a)&&Hn(a,t)}n[a]=!0}}}function hr(){}var dr=null,ur=null;function vr(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function pr(t,e){return"textarea"===t||"option"===t||"noscript"===t||"string"==typeof e.children||"number"==typeof e.children||"object"==typeof e.dangerouslySetInnerHTML&&null!==e.dangerouslySetInnerHTML&&null!=e.dangerouslySetInnerHTML.__html}function gr(t){for(t=t.nextSibling;t&&1!==t.nodeType&&3!==t.nodeType;)t=t.nextSibling;return t}function fr(t){for(t=t.firstChild;t&&1!==t.nodeType&&3!==t.nodeType;)t=t.nextSibling;return t}new Set;var mr=[],zr=-1;function xr(t){0>zr||(t.current=mr[zr],mr[zr]=null,zr--)}function Mr(t,e){mr[++zr]=t.current,t.current=e}var br={},wr={current:br},yr={current:!1},Hr=br;function Cr(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=e[a];return r&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=o),o}function Vr(t){return null!==(t=t.childContextTypes)&&void 0!==t}function Lr(t){xr(yr),xr(wr)}function Br(t){xr(yr),xr(wr)}function kr(t,e,n){wr.current!==br&&c("168"),Mr(wr,e),Mr(yr,n)}function Sr(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())o in t||c("108",ce(e)||"Unknown",o);return a({},n,r)}function _r(t){var e=t.stateNode;return e=e&&e.__reactInternalMemoizedMergedChildContext||br,Hr=wr.current,Mr(wr,e),Mr(yr,yr.current),!0}function Tr(t,e,n){var r=t.stateNode;r||c("169"),n?(e=Sr(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=e,xr(yr),xr(wr),Mr(wr,e)):xr(yr),Mr(yr,n)}var Fr=null,Pr=null;function Er(t){return function(e){try{return t(e)}catch(t){}}}function Ir(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=null,this.index=0,this.ref=null,this.pendingProps=e,this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Or(t){return"object"==typeof(t=t.prototype)&&null!==t&&"object"==typeof t.isReactComponent&&null!==t.isReactComponent}function Nr(t,e,n){var r=t.alternate;return null===r?((r=new Ir(t.tag,e,t.key,t.mode)).type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childExpirationTime=t.childExpirationTime,r.expirationTime=e!==t.pendingProps?n:t.expirationTime,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,r.firstContextDependency=t.firstContextDependency,r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ar(t,e,n){var r=t.type,a=t.key;t=t.props;var o=void 0;if("function"==typeof r)o=Or(r)?2:4;else if("string"==typeof r)o=7;else t:switch(r){case Qt:return Rr(t.children,e,n,a);case ee:o=10,e|=3;break;case $t:o=10,e|=2;break;case Jt:return(r=new Ir(15,t,a,4|e)).type=Jt,r.expirationTime=n,r;case re:o=16;break;default:if("object"==typeof r&&null!==r)switch(r.$$typeof){case Zt:o=12;break t;case te:o=11;break t;case ne:o=13;break t;default:if("function"==typeof r.then){o=4;break t}}c("130",null==r?r:typeof r,"")}return(e=new Ir(o,t,a,e)).type=r,e.expirationTime=n,e}function Rr(t,e,n,r){return(t=new Ir(9,t,r,e)).expirationTime=n,t}function Dr(t,e,n){return(t=new Ir(8,t,null,e)).expirationTime=n,t}function jr(t,e,n){return(e=new Ir(6,null!==t.children?t.children:[],t.key,e)).expirationTime=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kr(t,e){t.didError=!1;var n=t.earliestPendingTime;0===n?t.earliestPendingTime=t.latestPendingTime=e:n>e?t.earliestPendingTime=e:t.latestPendingTime<e&&(t.latestPendingTime=e),Ur(e,t)}function Ur(t,e){var n=e.earliestSuspendedTime,r=e.latestSuspendedTime,a=e.earliestPendingTime,o=e.latestPingedTime;0===(a=0!==a?a:o)&&(0===t||r>t)&&(a=r),0!==(t=a)&&0!==n&&n<t&&(t=n),e.nextExpirationTimeToWorkOn=a,e.expirationTime=t}var Gr=!1;function Wr(t){return{baseState:t,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function qr(t){return{baseState:t.baseState,firstUpdate:t.firstUpdate,lastUpdate:t.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Yr(t){return{expirationTime:t,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Xr(t,e){null===t.lastUpdate?t.firstUpdate=t.lastUpdate=e:(t.lastUpdate.next=e,t.lastUpdate=e)}function Qr(t,e){var n=t.alternate;if(null===n){var r=t.updateQueue,a=null;null===r&&(r=t.updateQueue=Wr(t.memoizedState))}else r=t.updateQueue,a=n.updateQueue,null===r?null===a?(r=t.updateQueue=Wr(t.memoizedState),a=n.updateQueue=Wr(n.memoizedState)):r=t.updateQueue=qr(a):null===a&&(a=n.updateQueue=qr(r));null===a||r===a?Xr(r,e):null===r.lastUpdate||null===a.lastUpdate?(Xr(r,e),Xr(a,e)):(Xr(r,e),a.lastUpdate=e)}function $r(t,e){var n=t.updateQueue;null===(n=null===n?t.updateQueue=Wr(t.memoizedState):Jr(t,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=e:(n.lastCapturedUpdate.next=e,n.lastCapturedUpdate=e)}function Jr(t,e){var n=t.alternate;return null!==n&&e===n.updateQueue&&(e=t.updateQueue=qr(e)),e}function Zr(t,e,n,r,o,c){switch(n.tag){case 1:return"function"==typeof(t=n.payload)?t.call(c,r,o):t;case 3:t.effectTag=-1025&t.effectTag|64;case 0:if(null===(o="function"==typeof(t=n.payload)?t.call(c,r,o):t)||void 0===o)break;return a({},r,o);case 2:Gr=!0}return r}function ta(t,e,n,r,a){Gr=!1;for(var o=(e=Jr(t,e)).baseState,c=null,i=0,l=e.firstUpdate,s=o;null!==l;){var h=l.expirationTime;h>a?(null===c&&(c=l,o=s),(0===i||i>h)&&(i=h)):(s=Zr(t,0,l,s,n,r),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastEffect?e.firstEffect=e.lastEffect=l:(e.lastEffect.nextEffect=l,e.lastEffect=l))),l=l.next}for(h=null,l=e.firstCapturedUpdate;null!==l;){var d=l.expirationTime;d>a?(null===h&&(h=l,null===c&&(o=s)),(0===i||i>d)&&(i=d)):(s=Zr(t,0,l,s,n,r),null!==l.callback&&(t.effectTag|=32,l.nextEffect=null,null===e.lastCapturedEffect?e.firstCapturedEffect=e.lastCapturedEffect=l:(e.lastCapturedEffect.nextEffect=l,e.lastCapturedEffect=l))),l=l.next}null===c&&(e.lastUpdate=null),null===h?e.lastCapturedUpdate=null:t.effectTag|=32,null===c&&null===h&&(o=s),e.baseState=o,e.firstUpdate=c,e.firstCapturedUpdate=h,t.expirationTime=i,t.memoizedState=s}function ea(t,e,n){null!==e.firstCapturedUpdate&&(null!==e.lastUpdate&&(e.lastUpdate.next=e.firstCapturedUpdate,e.lastUpdate=e.lastCapturedUpdate),e.firstCapturedUpdate=e.lastCapturedUpdate=null),na(e.firstEffect,n),e.firstEffect=e.lastEffect=null,na(e.firstCapturedEffect,n),e.firstCapturedEffect=e.lastCapturedEffect=null}function na(t,e){for(;null!==t;){var n=t.callback;if(null!==n){t.callback=null;var r=e;"function"!=typeof n&&c("191",n),n.call(r)}t=t.nextEffect}}function ra(t,e){return{value:t,source:e,stack:ie(e)}}var aa={current:null},oa=null,ca=null,ia=null;function la(t,e){var n=t.type._context;Mr(aa,n._currentValue),n._currentValue=e}function sa(t){var e=aa.current;xr(aa),t.type._context._currentValue=e}function ha(t){oa=t,ia=ca=null,t.firstContextDependency=null}function da(t,e){return ia!==t&&!1!==e&&0!==e&&("number"==typeof e&&1073741823!==e||(ia=t,e=1073741823),e={context:t,observedBits:e,next:null},null===ca?(null===oa&&c("277"),oa.firstContextDependency=ca=e):ca=ca.next=e),t._currentValue}var ua={},va={current:ua},pa={current:ua},ga={current:ua};function fa(t){return t===ua&&c("174"),t}function ma(t,e){Mr(ga,e),Mr(pa,t),Mr(va,ua);var n=e.nodeType;switch(n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zn(null,"");break;default:e=Zn(e=(n=8===n?e.parentNode:e).namespaceURI||null,n=n.tagName)}xr(va),Mr(va,e)}function za(t){xr(va),xr(pa),xr(ga)}function xa(t){fa(ga.current);var e=fa(va.current),n=Zn(e,t.type);e!==n&&(Mr(pa,t),Mr(va,n))}function Ma(t){pa.current===t&&(xr(va),xr(pa))}var ba=(new r.Component).refs;function wa(t,e,n,r){n=null===(n=n(r,e=t.memoizedState))||void 0===n?e:a({},e,n),t.memoizedState=n,null!==(r=t.updateQueue)&&0===t.expirationTime&&(r.baseState=n)}var ya={isMounted:function(t){return!!(t=t._reactInternalFiber)&&2===tn(t)},enqueueSetState:function(t,e,n){t=t._reactInternalFiber;var r=ac(),a=Yr(r=So(r,t));a.payload=e,void 0!==n&&null!==n&&(a.callback=n),Qr(t,a),_o(t,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternalFiber;var r=ac(),a=Yr(r=So(r,t));a.tag=1,a.payload=e,void 0!==n&&null!==n&&(a.callback=n),Qr(t,a),_o(t,r)},enqueueForceUpdate:function(t,e){t=t._reactInternalFiber;var n=ac(),r=Yr(n=So(n,t));r.tag=2,void 0!==e&&null!==e&&(r.callback=e),Qr(t,r),_o(t,n)}};function Ha(t,e,n,r,a,o,c){return"function"==typeof(t=t.stateNode).shouldComponentUpdate?t.shouldComponentUpdate(r,o,c):!(e.prototype&&e.prototype.isPureReactComponent&&Ze(n,r)&&Ze(a,o))}function Ca(t,e,n,r){t=e.state,"function"==typeof e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r),"function"==typeof e.UNSAFE_componentWillReceiveProps&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ya.enqueueReplaceState(e,e.state,null)}function Va(t,e,n,r){var a=t.stateNode,o=Vr(e)?Hr:wr.current;a.props=n,a.state=t.memoizedState,a.refs=ba,a.context=Cr(t,o),null!==(o=t.updateQueue)&&(ta(t,o,n,a,r),a.state=t.memoizedState),"function"==typeof(o=e.getDerivedStateFromProps)&&(wa(t,e,o,n),a.state=t.memoizedState),"function"==typeof e.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(e=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),e!==a.state&&ya.enqueueReplaceState(a,a.state,null),null!==(o=t.updateQueue)&&(ta(t,o,n,a,r),a.state=t.memoizedState)),"function"==typeof a.componentDidMount&&(t.effectTag|=4)}var La=Array.isArray;function Ba(t,e,n){if(null!==(t=n.ref)&&"function"!=typeof t&&"object"!=typeof t){if(n._owner){var r=void 0;(n=n._owner)&&(2!==n.tag&&3!==n.tag&&c("110"),r=n.stateNode),r||c("147",t);var a=""+t;return null!==e&&null!==e.ref&&"function"==typeof e.ref&&e.ref._stringRef===a?e.ref:((e=function(t){var e=r.refs;e===ba&&(e=r.refs={}),null===t?delete e[a]:e[a]=t})._stringRef=a,e)}"string"!=typeof t&&c("284"),n._owner||c("254",t)}return t}function ka(t,e){"textarea"!==t.type&&c("31","[object Object]"===Object.prototype.toString.call(e)?"object with keys {"+Object.keys(e).join(", ")+"}":e,"")}function Sa(t){function e(e,n){if(t){var r=e.lastEffect;null!==r?(r.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!t)return null;for(;null!==r;)e(n,r),r=r.sibling;return null}function r(t,e){for(t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(t,e,n){return(t=Nr(t,e,n)).index=0,t.sibling=null,t}function o(e,n,r){return e.index=r,t?null!==(r=e.alternate)?(r=r.index)<n?(e.effectTag=2,n):r:(e.effectTag=2,n):n}function i(e){return t&&null===e.alternate&&(e.effectTag=2),e}function l(t,e,n,r){return null===e||8!==e.tag?((e=Dr(n,t.mode,r)).return=t,e):((e=a(e,n,r)).return=t,e)}function s(t,e,n,r){return null!==e&&e.type===n.type?((r=a(e,n.props,r)).ref=Ba(t,e,n),r.return=t,r):((r=Ar(n,t.mode,r)).ref=Ba(t,e,n),r.return=t,r)}function h(t,e,n,r){return null===e||6!==e.tag||e.stateNode.containerInfo!==n.containerInfo||e.stateNode.implementation!==n.implementation?((e=jr(n,t.mode,r)).return=t,e):((e=a(e,n.children||[],r)).return=t,e)}function d(t,e,n,r,o){return null===e||9!==e.tag?((e=Rr(n,t.mode,r,o)).return=t,e):((e=a(e,n,r)).return=t,e)}function u(t,e,n){if("string"==typeof e||"number"==typeof e)return(e=Dr(""+e,t.mode,n)).return=t,e;if("object"==typeof e&&null!==e){switch(e.$$typeof){case Yt:return(n=Ar(e,t.mode,n)).ref=Ba(t,null,e),n.return=t,n;case Xt:return(e=jr(e,t.mode,n)).return=t,e}if(La(e)||oe(e))return(e=Rr(e,t.mode,n,null)).return=t,e;ka(t,e)}return null}function v(t,e,n,r){var a=null!==e?e.key:null;if("string"==typeof n||"number"==typeof n)return null!==a?null:l(t,e,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case Yt:return n.key===a?n.type===Qt?d(t,e,n.props.children,r,a):s(t,e,n,r):null;case Xt:return n.key===a?h(t,e,n,r):null}if(La(n)||oe(n))return null!==a?null:d(t,e,n,r,null);ka(t,n)}return null}function p(t,e,n,r,a){if("string"==typeof r||"number"==typeof r)return l(e,t=t.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case Yt:return t=t.get(null===r.key?n:r.key)||null,r.type===Qt?d(e,t,r.props.children,a,r.key):s(e,t,r,a);case Xt:return h(e,t=t.get(null===r.key?n:r.key)||null,r,a)}if(La(r)||oe(r))return d(e,t=t.get(n)||null,r,a,null);ka(e,r)}return null}function g(a,c,i,l){for(var s=null,h=null,d=c,g=c=0,f=null;null!==d&&g<i.length;g++){d.index>g?(f=d,d=null):f=d.sibling;var m=v(a,d,i[g],l);if(null===m){null===d&&(d=f);break}t&&d&&null===m.alternate&&e(a,d),c=o(m,c,g),null===h?s=m:h.sibling=m,h=m,d=f}if(g===i.length)return n(a,d),s;if(null===d){for(;g<i.length;g++)(d=u(a,i[g],l))&&(c=o(d,c,g),null===h?s=d:h.sibling=d,h=d);return s}for(d=r(a,d);g<i.length;g++)(f=p(d,a,g,i[g],l))&&(t&&null!==f.alternate&&d.delete(null===f.key?g:f.key),c=o(f,c,g),null===h?s=f:h.sibling=f,h=f);return t&&d.forEach(function(t){return e(a,t)}),s}function f(a,i,l,s){var h=oe(l);"function"!=typeof h&&c("150"),null==(l=h.call(l))&&c("151");for(var d=h=null,g=i,f=i=0,m=null,z=l.next();null!==g&&!z.done;f++,z=l.next()){g.index>f?(m=g,g=null):m=g.sibling;var x=v(a,g,z.value,s);if(null===x){g||(g=m);break}t&&g&&null===x.alternate&&e(a,g),i=o(x,i,f),null===d?h=x:d.sibling=x,d=x,g=m}if(z.done)return n(a,g),h;if(null===g){for(;!z.done;f++,z=l.next())null!==(z=u(a,z.value,s))&&(i=o(z,i,f),null===d?h=z:d.sibling=z,d=z);return h}for(g=r(a,g);!z.done;f++,z=l.next())null!==(z=p(g,a,f,z.value,s))&&(t&&null!==z.alternate&&g.delete(null===z.key?f:z.key),i=o(z,i,f),null===d?h=z:d.sibling=z,d=z);return t&&g.forEach(function(t){return e(a,t)}),h}return function(t,r,o,l){var s="object"==typeof o&&null!==o&&o.type===Qt&&null===o.key;s&&(o=o.props.children);var h="object"==typeof o&&null!==o;if(h)switch(o.$$typeof){case Yt:t:{for(h=o.key,s=r;null!==s;){if(s.key===h){if(9===s.tag?o.type===Qt:s.type===o.type){n(t,s.sibling),(r=a(s,o.type===Qt?o.props.children:o.props,l)).ref=Ba(t,s,o),r.return=t,t=r;break t}n(t,s);break}e(t,s),s=s.sibling}o.type===Qt?((r=Rr(o.props.children,t.mode,l,o.key)).return=t,t=r):((l=Ar(o,t.mode,l)).ref=Ba(t,r,o),l.return=t,t=l)}return i(t);case Xt:t:{for(s=o.key;null!==r;){if(r.key===s){if(6===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(t,r.sibling),(r=a(r,o.children||[],l)).return=t,t=r;break t}n(t,r);break}e(t,r),r=r.sibling}(r=jr(o,t.mode,l)).return=t,t=r}return i(t)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&8===r.tag?(n(t,r.sibling),(r=a(r,o,l)).return=t,t=r):(n(t,r),(r=Dr(o,t.mode,l)).return=t,t=r),i(t);if(La(o))return g(t,r,o,l);if(oe(o))return f(t,r,o,l);if(h&&ka(t,o),void 0===o&&!s)switch(t.tag){case 2:case 3:case 0:c("152",(l=t.type).displayName||l.name||"Component")}return n(t,r)}}var _a=Sa(!0),Ta=Sa(!1),Fa=null,Pa=null,Ea=!1;function Ia(t,e){var n=new Ir(7,null,null,0);n.type="DELETED",n.stateNode=e,n.return=t,n.effectTag=8,null!==t.lastEffect?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Oa(t,e){switch(t.tag){case 7:var n=t.type;return null!==(e=1!==e.nodeType||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e)&&(t.stateNode=e,!0);case 8:return null!==(e=""===t.pendingProps||3!==e.nodeType?null:e)&&(t.stateNode=e,!0);default:return!1}}function Na(t){if(Ea){var e=Pa;if(e){var n=e;if(!Oa(t,e)){if(!(e=gr(n))||!Oa(t,e))return t.effectTag|=2,Ea=!1,void(Fa=t);Ia(Fa,n)}Fa=t,Pa=fr(e)}else t.effectTag|=2,Ea=!1,Fa=t}}function Aa(t){for(t=t.return;null!==t&&7!==t.tag&&5!==t.tag;)t=t.return;Fa=t}function Ra(t){if(t!==Fa)return!1;if(!Ea)return Aa(t),Ea=!0,!1;var e=t.type;if(7!==t.tag||"head"!==e&&"body"!==e&&!pr(e,t.memoizedProps))for(e=Pa;e;)Ia(t,e),e=gr(e);return Aa(t),Pa=Fa?gr(t.stateNode):null,!0}function Da(){Pa=Fa=null,Ea=!1}var ja=Gt.ReactCurrentOwner;function Ka(t,e,n,r){e.child=null===t?Ta(e,null,n,r):_a(e,t.child,n,r)}function Ua(t,e,n,r,a){n=n.render;var o=e.ref;return yr.current||e.memoizedProps!==r||o!==(null!==t?t.ref:null)?(Ka(t,e,n=n(r,o),a),e.memoizedProps=r,e.child):$a(t,e,a)}function Ga(t,e){var n=e.ref;(null===t&&null!==n||null!==t&&t.ref!==n)&&(e.effectTag|=128)}function Wa(t,e,n,r,a){var o=Vr(n)?Hr:wr.current;return o=Cr(e,o),ha(e),n=n(r,o),e.effectTag|=1,Ka(t,e,n,a),e.memoizedProps=r,e.child}function qa(t,e,n,r,a){if(Vr(n)){var o=!0;_r(e)}else o=!1;if(ha(e),null===t)if(null===e.stateNode){var c=Vr(n)?Hr:wr.current,i=n.contextTypes,l=null!==i&&void 0!==i,s=new n(r,i=l?Cr(e,c):br);e.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,s.updater=ya,e.stateNode=s,s._reactInternalFiber=e,l&&((l=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=c,l.__reactInternalMemoizedMaskedChildContext=i),Va(e,n,r,a),r=!0}else{c=e.stateNode,i=e.memoizedProps,c.props=i;var h=c.context;l=Cr(e,l=Vr(n)?Hr:wr.current);var d=n.getDerivedStateFromProps;(s="function"==typeof d||"function"==typeof c.getSnapshotBeforeUpdate)||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==r||h!==l)&&Ca(e,c,r,l),Gr=!1;var u=e.memoizedState;h=c.state=u;var v=e.updateQueue;null!==v&&(ta(e,v,r,c,a),h=e.memoizedState),i!==r||u!==h||yr.current||Gr?("function"==typeof d&&(wa(e,n,d,r),h=e.memoizedState),(i=Gr||Ha(e,n,i,r,u,h,l))?(s||"function"!=typeof c.UNSAFE_componentWillMount&&"function"!=typeof c.componentWillMount||("function"==typeof c.componentWillMount&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&c.UNSAFE_componentWillMount()),"function"==typeof c.componentDidMount&&(e.effectTag|=4)):("function"==typeof c.componentDidMount&&(e.effectTag|=4),e.memoizedProps=r,e.memoizedState=h),c.props=r,c.state=h,c.context=l,r=i):("function"==typeof c.componentDidMount&&(e.effectTag|=4),r=!1)}else c=e.stateNode,i=e.memoizedProps,c.props=i,h=c.context,l=Cr(e,l=Vr(n)?Hr:wr.current),(s="function"==typeof(d=n.getDerivedStateFromProps)||"function"==typeof c.getSnapshotBeforeUpdate)||"function"!=typeof c.UNSAFE_componentWillReceiveProps&&"function"!=typeof c.componentWillReceiveProps||(i!==r||h!==l)&&Ca(e,c,r,l),Gr=!1,h=e.memoizedState,u=c.state=h,null!==(v=e.updateQueue)&&(ta(e,v,r,c,a),u=e.memoizedState),i!==r||h!==u||yr.current||Gr?("function"==typeof d&&(wa(e,n,d,r),u=e.memoizedState),(d=Gr||Ha(e,n,i,r,h,u,l))?(s||"function"!=typeof c.UNSAFE_componentWillUpdate&&"function"!=typeof c.componentWillUpdate||("function"==typeof c.componentWillUpdate&&c.componentWillUpdate(r,u,l),"function"==typeof c.UNSAFE_componentWillUpdate&&c.UNSAFE_componentWillUpdate(r,u,l)),"function"==typeof c.componentDidUpdate&&(e.effectTag|=4),"function"==typeof c.getSnapshotBeforeUpdate&&(e.effectTag|=256)):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=256),e.memoizedProps=r,e.memoizedState=u),c.props=r,c.state=u,c.context=l,r=d):("function"!=typeof c.componentDidUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=4),"function"!=typeof c.getSnapshotBeforeUpdate||i===t.memoizedProps&&h===t.memoizedState||(e.effectTag|=256),r=!1);return Ya(t,e,n,r,o,a)}function Ya(t,e,n,r,a,o){Ga(t,e);var c=0!=(64&e.effectTag);if(!r&&!c)return a&&Tr(e,n,!1),$a(t,e,o);r=e.stateNode,ja.current=e;var i=c?null:r.render();return e.effectTag|=1,null!==t&&c&&(Ka(t,e,null,o),e.child=null),Ka(t,e,i,o),e.memoizedState=r.state,e.memoizedProps=r.props,a&&Tr(e,n,!0),e.child}function Xa(t){var e=t.stateNode;e.pendingContext?kr(0,e.pendingContext,e.pendingContext!==e.context):e.context&&kr(0,e.context,!1),ma(t,e.containerInfo)}function Qa(t,e){if(t&&t.defaultProps)for(var n in e=a({},e),t=t.defaultProps)void 0===e[n]&&(e[n]=t[n]);return e}function $a(t,e,n){null!==t&&(e.firstContextDependency=t.firstContextDependency);var r=e.childExpirationTime;if(0===r||r>n)return null;if(null!==t&&e.child!==t.child&&c("153"),null!==e.child){for(n=Nr(t=e.child,t.pendingProps,t.expirationTime),e.child=n,n.return=e;null!==t.sibling;)t=t.sibling,(n=n.sibling=Nr(t,t.pendingProps,t.expirationTime)).return=e;n.sibling=null}return e.child}function Ja(t){t.effectTag|=4}var Za=void 0,to=void 0,eo=void 0;function no(t,e){var n=e.source,r=e.stack;null===r&&null!==n&&(r=ie(n)),null!==n&&ce(n.type),e=e.value,null!==t&&2===t.tag&&ce(t.type);try{console.error(e)}catch(t){setTimeout(function(){throw t})}}function ro(t){var e=t.ref;if(null!==e)if("function"==typeof e)try{e(null)}catch(e){ko(t,e)}else e.current=null}function ao(t){switch("function"==typeof Pr&&Pr(t),t.tag){case 2:case 3:ro(t);var e=t.stateNode;if("function"==typeof e.componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){ko(t,e)}break;case 7:ro(t);break;case 6:io(t)}}function oo(t){return 7===t.tag||5===t.tag||6===t.tag}function co(t){t:{for(var e=t.return;null!==e;){if(oo(e)){var n=e;break t}e=e.return}c("160"),n=void 0}var r=e=void 0;switch(n.tag){case 7:e=n.stateNode,r=!1;break;case 5:case 6:e=n.stateNode.containerInfo,r=!0;break;default:c("161")}16&n.effectTag&&(nr(e,""),n.effectTag&=-17);t:e:for(n=t;;){for(;null===n.sibling;){if(null===n.return||oo(n.return)){n=null;break t}n=n.return}for(n.sibling.return=n.return,n=n.sibling;7!==n.tag&&8!==n.tag;){if(2&n.effectTag)continue e;if(null===n.child||6===n.tag)continue e;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break t}}for(var a=t;;){if(7===a.tag||8===a.tag)if(n)if(r){var o=e,i=a.stateNode,l=n;8===o.nodeType?o.parentNode.insertBefore(i,l):o.insertBefore(i,l)}else e.insertBefore(a.stateNode,n);else r?(o=e,i=a.stateNode,8===o.nodeType?(l=o.parentNode).insertBefore(i,o):(l=o).appendChild(i),null===l.onclick&&(l.onclick=hr)):e.appendChild(a.stateNode);else if(6!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break;for(;null===a.sibling;){if(null===a.return||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function io(t){for(var e=t,n=!1,r=void 0,a=void 0;;){if(!n){n=e.return;t:for(;;){switch(null===n&&c("160"),n.tag){case 7:r=n.stateNode,a=!1;break t;case 5:case 6:r=n.stateNode.containerInfo,a=!0;break t}n=n.return}n=!0}if(7===e.tag||8===e.tag){t:for(var o=e,i=o;;)if(ao(i),null!==i.child&&6!==i.tag)i.child.return=i,i=i.child;else{if(i===o)break;for(;null===i.sibling;){if(null===i.return||i.return===o)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}a?(o=r,i=e.stateNode,8===o.nodeType?o.parentNode.removeChild(i):o.removeChild(i)):r.removeChild(e.stateNode)}else if(6===e.tag?(r=e.stateNode.containerInfo,a=!0):ao(e),null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)return;6===(e=e.return).tag&&(n=!1)}e.sibling.return=e.return,e=e.sibling}}function lo(t,e){switch(e.tag){case 2:case 3:break;case 7:var n=e.stateNode;if(null!=n){var r=e.memoizedProps,a=null!==t?t.memoizedProps:r;t=e.type;var o=e.updateQueue;if(e.updateQueue=null,null!==o){for(n[E]=r,"input"===t&&"radio"===r.type&&null!=r.name&&Me(n,r),lr(t,a),e=lr(t,r),a=0;a<o.length;a+=2){var i=o[a],l=o[a+1];"style"===i?or(n,l):"dangerouslySetInnerHTML"===i?er(n,l):"children"===i?nr(n,l):fe(n,i,l,e)}switch(t){case"input":be(n,r);break;case"textarea":Xn(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?Wn(n,!!r.multiple,o,!1):t!==!!r.multiple&&(null!=r.defaultValue?Wn(n,!!r.multiple,r.defaultValue,!0):Wn(n,!!r.multiple,r.multiple?[]:"",!1))}}}break;case 8:null===e.stateNode&&c("162"),e.stateNode.nodeValue=e.memoizedProps;break;case 5:case 15:case 16:break;default:c("163")}}function so(t,e,n){(n=Yr(n)).tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dc(r),no(t,e)},n}function ho(t,e,n){(n=Yr(n)).tag=3;var r=t.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){null===Ho?Ho=new Set([this]):Ho.add(this);var n=e.value,r=e.stack;no(t,e),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function uo(t){switch(t.tag){case 2:Vr(t.type)&&Lr();var e=t.effectTag;return 1024&e?(t.effectTag=-1025&e|64,t):null;case 3:return Vr(t.type._reactResult)&&Lr(),1024&(e=t.effectTag)?(t.effectTag=-1025&e|64,t):null;case 5:return za(),Br(),0!=(64&(e=t.effectTag))&&c("285"),t.effectTag=-1025&e|64,t;case 7:return Ma(t),null;case 16:return 1024&(e=t.effectTag)?(t.effectTag=-1025&e|64,t):null;case 6:return za(),null;case 12:return sa(t),null;default:return null}}Za=function(){},to=function(t,e,n){(e.updateQueue=n)&&Ja(e)},eo=function(t,e,n,r){n!==r&&Ja(e)};var vo={readContext:da},po=Gt.ReactCurrentOwner,go=0,fo=0,mo=!1,zo=null,xo=null,Mo=0,bo=!1,wo=null,yo=!1,Ho=null;function Co(){if(null!==zo)for(var t=zo.return;null!==t;){var e=t;switch(e.tag){case 2:var n=e.type.childContextTypes;null!==n&&void 0!==n&&Lr();break;case 3:null!==(n=e.type._reactResult.childContextTypes)&&void 0!==n&&Lr();break;case 5:za(),Br();break;case 7:Ma(e);break;case 6:za();break;case 12:sa(e)}t=t.return}xo=null,Mo=0,bo=!1,zo=null}function Vo(t){for(;;){var e=t.alternate,n=t.return,r=t.sibling;if(0==(512&t.effectTag)){var o=e,i=(e=t).pendingProps;switch(e.tag){case 0:case 1:break;case 2:Vr(e.type)&&Lr();break;case 3:Vr(e.type._reactResult)&&Lr();break;case 5:za(),Br(),(i=e.stateNode).pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==o&&null!==o.child||(Ra(e),e.effectTag&=-3),Za(e);break;case 7:Ma(e);var l=fa(ga.current),s=e.type;if(null!==o&&null!=e.stateNode){var h=o.memoizedProps;if(h!==i){var d=e.stateNode,u=fa(va.current),v=d,p=s,g=h,f=i;d=l;var m=null;switch(p){case"input":g=ze(v,g),f=ze(v,f),m=[];break;case"option":g=Gn(v,g),f=Gn(v,f),m=[];break;case"select":g=a({},g,{value:void 0}),f=a({},f,{value:void 0}),m=[];break;case"textarea":g=qn(v,g),f=qn(v,f),m=[];break;default:"function"!=typeof g.onClick&&"function"==typeof f.onClick&&(v.onclick=hr)}ir(p,f),p=v=void 0;var z=null;for(v in g)if(!f.hasOwnProperty(v)&&g.hasOwnProperty(v)&&null!=g[v])if("style"===v){var M=g[v];for(p in M)M.hasOwnProperty(p)&&(z||(z={}),z[p]="")}else"dangerouslySetInnerHTML"!==v&&"children"!==v&&"suppressContentEditableWarning"!==v&&"suppressHydrationWarning"!==v&&"autoFocus"!==v&&(x.hasOwnProperty(v)?m||(m=[]):(m=m||[]).push(v,null));for(v in f){var b=f[v];if(M=null!=g?g[v]:void 0,f.hasOwnProperty(v)&&b!==M&&(null!=b||null!=M))if("style"===v)if(M){for(p in M)!M.hasOwnProperty(p)||b&&b.hasOwnProperty(p)||(z||(z={}),z[p]="");for(p in b)b.hasOwnProperty(p)&&M[p]!==b[p]&&(z||(z={}),z[p]=b[p])}else z||(m||(m=[]),m.push(v,z)),z=b;else"dangerouslySetInnerHTML"===v?(b=b?b.__html:void 0,M=M?M.__html:void 0,null!=b&&M!==b&&(m=m||[]).push(v,""+b)):"children"===v?M===b||"string"!=typeof b&&"number"!=typeof b||(m=m||[]).push(v,""+b):"suppressContentEditableWarning"!==v&&"suppressHydrationWarning"!==v&&(x.hasOwnProperty(v)?(null!=b&&sr(d,v),m||M===b||(m=[])):(m=m||[]).push(v,b))}z&&(m=m||[]).push("style",z),to(o,e,m,s,h,i,l,u)}o.ref!==e.ref&&(e.effectTag|=128)}else if(i){if(m=fa(va.current),Ra(e)){switch(d=(i=e).stateNode,o=i.type,h=i.memoizedProps,u=l,d[P]=i,d[E]=h,s=void 0,l=d,o){case"iframe":case"object":Hn("load",l);break;case"video":case"audio":for(d=0;d<nt.length;d++)Hn(nt[d],l);break;case"source":Hn("error",l);break;case"img":case"image":case"link":Hn("error",l),Hn("load",l);break;case"form":Hn("reset",l),Hn("submit",l);break;case"details":Hn("toggle",l);break;case"input":xe(l,h),Hn("invalid",l),sr(u,"onChange");break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Hn("invalid",l),sr(u,"onChange");break;case"textarea":Yn(l,h),Hn("invalid",l),sr(u,"onChange")}for(s in ir(o,h),d=null,h)h.hasOwnProperty(s)&&(m=h[s],"children"===s?"string"==typeof m?l.textContent!==m&&(d=["children",m]):"number"==typeof m&&l.textContent!==""+m&&(d=["children",""+m]):x.hasOwnProperty(s)&&null!=m&&sr(u,s));switch(o){case"input":Kt(l),we(l,h,!0);break;case"textarea":Kt(l),Qn(l);break;case"select":case"option":break;default:"function"==typeof h.onClick&&(l.onclick=hr)}s=d,i.updateQueue=s,(i=null!==s)&&Ja(e)}else{h=e,o=s,u=i,d=9===l.nodeType?l:l.ownerDocument,m===$n.html&&(m=Jn(o)),m===$n.html?"script"===o?((o=d.createElement("div")).innerHTML="<script><\/script>",d=o.removeChild(o.firstChild)):"string"==typeof u.is?d=d.createElement(o,{is:u.is}):(d=d.createElement(o),"select"===o&&u.multiple&&(d.multiple=!0)):d=d.createElementNS(m,o),(o=d)[P]=h,o[E]=i;t:for(h=o,u=e,d=u.child;null!==d;){if(7===d.tag||8===d.tag)h.appendChild(d.stateNode);else if(6!==d.tag&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===u)break;for(;null===d.sibling;){if(null===d.return||d.return===u)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}switch(u=o,v=l,z=lr(d=s,h=i),d){case"iframe":case"object":Hn("load",u),l=h;break;case"video":case"audio":for(l=0;l<nt.length;l++)Hn(nt[l],u);l=h;break;case"source":Hn("error",u),l=h;break;case"img":case"image":case"link":Hn("error",u),Hn("load",u),l=h;break;case"form":Hn("reset",u),Hn("submit",u),l=h;break;case"details":Hn("toggle",u),l=h;break;case"input":xe(u,h),l=ze(u,h),Hn("invalid",u),sr(v,"onChange");break;case"option":l=Gn(u,h);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},l=a({},h,{value:void 0}),Hn("invalid",u),sr(v,"onChange");break;case"textarea":Yn(u,h),l=qn(u,h),Hn("invalid",u),sr(v,"onChange");break;default:l=h}for(m in ir(d,l),m=void 0,g=d,f=u,p=l)p.hasOwnProperty(m)&&(M=p[m],"style"===m?or(f,M):"dangerouslySetInnerHTML"===m?null!=(M=M?M.__html:void 0)&&er(f,M):"children"===m?"string"==typeof M?("textarea"!==g||""!==M)&&nr(f,M):"number"==typeof M&&nr(f,""+M):"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&"autoFocus"!==m&&(x.hasOwnProperty(m)?null!=M&&sr(v,m):null!=M&&fe(f,m,M,z)));switch(d){case"input":Kt(u),we(u,h,!1);break;case"textarea":Kt(u),Qn(u);break;case"option":null!=h.value&&u.setAttribute("value",""+me(h.value));break;case"select":(l=u).multiple=!!h.multiple,null!=(u=h.value)?Wn(l,!!h.multiple,u,!1):null!=h.defaultValue&&Wn(l,!!h.multiple,h.defaultValue,!0);break;default:"function"==typeof l.onClick&&(u.onclick=hr)}(i=vr(s,i))&&Ja(e),e.stateNode=o}null!==e.ref&&(e.effectTag|=128)}else null===e.stateNode&&c("166");break;case 8:o&&null!=e.stateNode?eo(o,e,o.memoizedProps,i):("string"!=typeof i&&null===e.stateNode&&c("166"),l=fa(ga.current),fa(va.current),Ra(e)?(s=(i=e).stateNode,l=i.memoizedProps,s[P]=i,(i=s.nodeValue!==l)&&Ja(e)):(s=e,(i=(9===l.nodeType?l:l.ownerDocument).createTextNode(i))[P]=s,e.stateNode=i));break;case 13:case 14:case 16:case 9:case 10:case 15:break;case 6:za(),Za(e);break;case 12:sa(e);break;case 11:break;case 4:c("167");default:c("156")}if(e=zo=null,i=t,1073741823===Mo||1073741823!==i.childExpirationTime){for(s=0,l=i.child;null!==l;)o=l.expirationTime,h=l.childExpirationTime,(0===s||0!==o&&o<s)&&(s=o),(0===s||0!==h&&h<s)&&(s=h),l=l.sibling;i.childExpirationTime=s}if(null!==e)return e;null!==n&&0==(512&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=t.firstEffect),n.lastEffect=t.lastEffect),1<t.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=t:n.firstEffect=t,n.lastEffect=t))}else{if(null!==(t=uo(t)))return t.effectTag&=511,t;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=512)}if(null!==r)return r;if(null===n)break;t=n}return null}function Lo(t){var e=function(t,e,n){var r=e.expirationTime;if(!yr.current&&(0===r||r>n)){switch(e.tag){case 5:Xa(e),Da();break;case 7:xa(e);break;case 2:Vr(e.type)&&_r(e);break;case 3:Vr(e.type._reactResult)&&_r(e);break;case 6:ma(e,e.stateNode.containerInfo);break;case 12:la(e,e.memoizedProps.value)}return $a(t,e,n)}switch(e.expirationTime=0,e.tag){case 4:return function(t,e,n,r){null!==t&&c("155");var a=e.pendingProps;if("object"==typeof n&&null!==n&&"function"==typeof n.then){var o=n=function(t){switch(t._reactStatus){case 1:return t._reactResult;case 2:throw t._reactResult;case 0:throw t;default:throw t._reactStatus=0,t.then(function(e){if(0===t._reactStatus){if(t._reactStatus=1,"object"==typeof e&&null!==e){var n=e.default;e=void 0!==n&&null!==n?n:e}t._reactResult=e}},function(e){0===t._reactStatus&&(t._reactStatus=2,t._reactResult=e)}),t}}(n);o="function"==typeof o?Or(o)?3:1:void 0!==o&&null!==o&&o.$$typeof?14:4,o=e.tag=o;var i=Qa(n,a);switch(o){case 1:return Wa(t,e,n,i,r);case 3:return qa(t,e,n,i,r);case 14:return Ua(t,e,n,i,r);default:c("283",n)}}if(o=Cr(e,wr.current),ha(e),o=n(a,o),e.effectTag|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){e.tag=2,Vr(n)?(i=!0,_r(e)):i=!1,e.memoizedState=null!==o.state&&void 0!==o.state?o.state:null;var l=n.getDerivedStateFromProps;return"function"==typeof l&&wa(e,n,l,a),o.updater=ya,e.stateNode=o,o._reactInternalFiber=e,Va(e,n,a,r),Ya(t,e,n,!0,i,r)}return e.tag=0,Ka(t,e,o,r),e.memoizedProps=a,e.child}(t,e,e.type,n);case 0:return Wa(t,e,e.type,e.pendingProps,n);case 1:var a=e.type._reactResult;return t=Wa(t,e,a,Qa(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 2:return qa(t,e,e.type,e.pendingProps,n);case 3:return t=qa(t,e,a=e.type._reactResult,Qa(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 5:return Xa(e),null===(r=e.updateQueue)&&c("282"),a=null!==(a=e.memoizedState)?a.element:null,ta(e,r,e.pendingProps,null,n),(r=e.memoizedState.element)===a?(Da(),e=$a(t,e,n)):(a=e.stateNode,(a=(null===t||null===t.child)&&a.hydrate)&&(Pa=fr(e.stateNode.containerInfo),Fa=e,a=Ea=!0),a?(e.effectTag|=2,e.child=Ta(e,null,r,n)):(Ka(t,e,r,n),Da()),e=e.child),e;case 7:xa(e),null===t&&Na(e),r=e.type,a=e.pendingProps;var o=null!==t?t.memoizedProps:null,i=a.children;return pr(r,a)?i=null:null!==o&&pr(r,o)&&(e.effectTag|=16),Ga(t,e),1073741823!==n&&1&e.mode&&a.hidden?(e.expirationTime=1073741823,e.memoizedProps=a,e=null):(Ka(t,e,i,n),e.memoizedProps=a,e=e.child),e;case 8:return null===t&&Na(e),e.memoizedProps=e.pendingProps,null;case 16:return null;case 6:return ma(e,e.stateNode.containerInfo),r=e.pendingProps,null===t?e.child=_a(e,null,r,n):Ka(t,e,r,n),e.memoizedProps=r,e.child;case 13:return Ua(t,e,e.type,e.pendingProps,n);case 14:return t=Ua(t,e,a=e.type._reactResult,Qa(a,r=e.pendingProps),n),e.memoizedProps=r,t;case 9:return Ka(t,e,r=e.pendingProps,n),e.memoizedProps=r,e.child;case 10:return Ka(t,e,r=e.pendingProps.children,n),e.memoizedProps=r,e.child;case 15:return Ka(t,e,(r=e.pendingProps).children,n),e.memoizedProps=r,e.child;case 12:t:{if(r=e.type._context,a=e.pendingProps,i=e.memoizedProps,o=a.value,e.memoizedProps=a,la(e,o),null!==i){var l=i.value;if(0==(o=l===o&&(0!==l||1/l==1/o)||l!=l&&o!=o?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(i.children===a.children&&!yr.current){e=$a(t,e,n);break t}}else for(null!==(i=e.child)&&(i.return=e);null!==i;){if(null!==(l=i.firstContextDependency))do{if(l.context===r&&0!=(l.observedBits&o)){if(2===i.tag||3===i.tag){var s=Yr(n);s.tag=2,Qr(i,s)}(0===i.expirationTime||i.expirationTime>n)&&(i.expirationTime=n),null!==(s=i.alternate)&&(0===s.expirationTime||s.expirationTime>n)&&(s.expirationTime=n);for(var h=i.return;null!==h;){if(s=h.alternate,0===h.childExpirationTime||h.childExpirationTime>n)h.childExpirationTime=n,null!==s&&(0===s.childExpirationTime||s.childExpirationTime>n)&&(s.childExpirationTime=n);else{if(null===s||!(0===s.childExpirationTime||s.childExpirationTime>n))break;s.childExpirationTime=n}h=h.return}}s=i.child,l=l.next}while(null!==l);else s=12===i.tag&&i.type===e.type?null:i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}Ka(t,e,a.children,n),e=e.child}return e;case 11:return o=e.type,a=(r=e.pendingProps).children,ha(e),a=a(o=da(o,r.unstable_observedBits)),e.effectTag|=1,Ka(t,e,a,n),e.memoizedProps=r,e.child;default:c("156")}}(t.alternate,t,Mo);return null===e&&(e=Vo(t)),po.current=null,e}function Bo(t,e,n){mo&&c("243"),mo=!0,po.currentDispatcher=vo;var r=t.nextExpirationTimeToWorkOn;r===Mo&&t===xo&&null!==zo||(Co(),Mo=r,zo=Nr((xo=t).current,null,Mo),t.pendingCommitExpirationTime=0);for(var a=!1;;){try{if(e)for(;null!==zo&&!hc();)zo=Lo(zo);else for(;null!==zo;)zo=Lo(zo)}catch(t){if(null===zo)a=!0,dc(t);else{null===zo&&c("271");var o=zo,i=o.return;if(null!==i){t:{var l=i,s=o,h=t;i=Mo,s.effectTag|=512,s.firstEffect=s.lastEffect=null,bo=!0,h=ra(h,s);do{switch(l.tag){case 5:l.effectTag|=1024,l.expirationTime=i,$r(l,i=so(l,h,i));break t;case 2:case 3:s=h;var d=l.stateNode;if(0==(64&l.effectTag)&&null!==d&&"function"==typeof d.componentDidCatch&&(null===Ho||!Ho.has(d))){l.effectTag|=1024,l.expirationTime=i,$r(l,i=ho(l,s,i));break t}}l=l.return}while(null!==l)}zo=Vo(o);continue}a=!0,dc(t)}}break}if(mo=!1,ia=ca=oa=po.currentDispatcher=null,a)xo=null,t.finishedWork=null;else if(null!==zo)t.finishedWork=null;else{if(null===(e=t.current.alternate)&&c("281"),xo=null,bo){if(a=t.latestPendingTime,o=t.latestSuspendedTime,i=t.latestPingedTime,0!==a&&a>r||0!==o&&o>r||0!==i&&i>r)return t.didError=!1,0!==(n=t.latestPingedTime)&&n<=r&&(t.latestPingedTime=0),n=t.earliestPendingTime,e=t.latestPendingTime,n===r?t.earliestPendingTime=e===r?t.latestPendingTime=0:e:e===r&&(t.latestPendingTime=n),n=t.earliestSuspendedTime,e=t.latestSuspendedTime,0===n?t.earliestSuspendedTime=t.latestSuspendedTime=r:n>r?t.earliestSuspendedTime=r:e<r&&(t.latestSuspendedTime=r),Ur(r,t),void(t.expirationTime=t.expirationTime);if(!t.didError&&!n)return t.didError=!0,t.nextExpirationTimeToWorkOn=r,r=t.expirationTime=1,void(t.expirationTime=r)}t.pendingCommitExpirationTime=r,t.finishedWork=e}}function ko(t,e){var n;t:{for(mo&&!yo&&c("263"),n=t.return;null!==n;){switch(n.tag){case 2:case 3:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromCatch||"function"==typeof r.componentDidCatch&&(null===Ho||!Ho.has(r))){Qr(n,t=ho(n,t=ra(e,t),1)),_o(n,1),n=void 0;break t}break;case 5:Qr(n,t=so(n,t=ra(e,t),1)),_o(n,1),n=void 0;break t}n=n.return}5===t.tag&&(Qr(t,n=so(t,n=ra(e,t),1)),_o(t,1)),n=void 0}return n}function So(t,e){return 0!==fo?t=fo:mo?t=yo?1:Mo:1&e.mode?(t=qo?2+10*(1+((t-2+15)/10|0)):2+25*(1+((t-2+500)/25|0)),null!==xo&&t===Mo&&(t+=1)):t=1,qo&&(0===Ro||t>Ro)&&(Ro=t),t}function _o(t,e){t:{(0===t.expirationTime||t.expirationTime>e)&&(t.expirationTime=e);var n=t.alternate;null!==n&&(0===n.expirationTime||n.expirationTime>e)&&(n.expirationTime=e);var r=t.return;if(null===r&&5===t.tag)t=t.stateNode;else{for(;null!==r;){if(n=r.alternate,(0===r.childExpirationTime||r.childExpirationTime>e)&&(r.childExpirationTime=e),null!==n&&(0===n.childExpirationTime||n.childExpirationTime>e)&&(n.childExpirationTime=e),null===r.return&&5===r.tag){t=r.stateNode;break t}r=r.return}t=null}}null!==t&&(!mo&&0!==Mo&&e<Mo&&Co(),Kr(t,e),mo&&!yo&&xo===t||(e=t,t=t.expirationTime,null===e.nextScheduledRoot?(e.expirationTime=t,null===Po?(Fo=Po=e,e.nextScheduledRoot=e):(Po=Po.nextScheduledRoot=e).nextScheduledRoot=Fo):(0===(n=e.expirationTime)||t<n)&&(e.expirationTime=t),Oo||(Go?Wo&&(No=e,Ao=1,lc(e,1,!0)):1===t?ic(1,null):rc(e,t))),Zo>Jo&&(Zo=0,c("185")))}function To(t,e,n,r,a){var o=fo;fo=1;try{return t(e,n,r,a)}finally{fo=o}}var Fo=null,Po=null,Eo=0,Io=void 0,Oo=!1,No=null,Ao=0,Ro=0,Do=!1,jo=!1,Ko=null,Uo=null,Go=!1,Wo=!1,qo=!1,Yo=null,Xo=o.unstable_now(),Qo=2+(Xo/10|0),$o=Qo,Jo=50,Zo=0,tc=null,ec=1;function nc(){Qo=2+((o.unstable_now()-Xo)/10|0)}function rc(t,e){if(0!==Eo){if(e>Eo)return;null!==Io&&o.unstable_cancelScheduledWork(Io)}Eo=e,t=o.unstable_now()-Xo,Io=o.unstable_scheduleWork(cc,{timeout:10*(e-2)-t})}function ac(){return Oo?$o:(oc(),0!==Ao&&1073741823!==Ao||(nc(),$o=Qo),$o)}function oc(){var t=0,e=null;if(null!==Po)for(var n=Po,r=Fo;null!==r;){var a=r.expirationTime;if(0===a){if((null===n||null===Po)&&c("244"),r===r.nextScheduledRoot){Fo=Po=r.nextScheduledRoot=null;break}if(r===Fo)Fo=a=r.nextScheduledRoot,Po.nextScheduledRoot=a,r.nextScheduledRoot=null;else{if(r===Po){(Po=n).nextScheduledRoot=Fo,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((0===t||a<t)&&(t=a,e=r),r===Po)break;if(1===t)break;n=r,r=r.nextScheduledRoot}}No=e,Ao=t}function cc(t){if(t.didTimeout&&null!==Fo){nc();var e=Fo;do{var n=e.expirationTime;0!==n&&Qo>=n&&(e.nextExpirationTimeToWorkOn=Qo),e=e.nextScheduledRoot}while(e!==Fo)}ic(0,t)}function ic(t,e){if(Uo=e,oc(),null!==Uo)for(nc(),$o=Qo;null!==No&&0!==Ao&&(0===t||t>=Ao)&&(!Do||Qo>=Ao);)lc(No,Ao,Qo>=Ao),oc(),nc(),$o=Qo;else for(;null!==No&&0!==Ao&&(0===t||t>=Ao);)lc(No,Ao,!0),oc();if(null!==Uo&&(Eo=0,Io=null),0!==Ao&&rc(No,Ao),Uo=null,Do=!1,Zo=0,tc=null,null!==Yo)for(t=Yo,Yo=null,e=0;e<t.length;e++){var n=t[e];try{n._onComplete()}catch(t){jo||(jo=!0,Ko=t)}}if(jo)throw t=Ko,Ko=null,jo=!1,t}function lc(t,e,n){if(Oo&&c("245"),Oo=!0,null===Uo||n){var r=t.finishedWork;null!==r?sc(t,r,e):(t.finishedWork=null,Bo(t,!1,n),null!==(r=t.finishedWork)&&sc(t,r,e))}else null!==(r=t.finishedWork)?sc(t,r,e):(t.finishedWork=null,Bo(t,!0,n),null!==(r=t.finishedWork)&&(hc()?t.finishedWork=r:sc(t,r,e)));Oo=!1}function sc(t,e,n){var r=t.firstBatch;if(null!==r&&r._expirationTime<=n&&(null===Yo?Yo=[r]:Yo.push(r),r._defer))return t.finishedWork=e,void(t.expirationTime=0);t.finishedWork=null,t===tc?Zo++:(tc=t,Zo=0),yo=mo=!0,t.current===e&&c("177"),0===(n=t.pendingCommitExpirationTime)&&c("261"),t.pendingCommitExpirationTime=0,r=e.expirationTime;var a=e.childExpirationTime;if(r=0===r||0!==a&&a<r?a:r,t.didError=!1,0===r?(t.earliestPendingTime=0,t.latestPendingTime=0,t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0):(0!==(a=t.latestPendingTime)&&(a<r?t.earliestPendingTime=t.latestPendingTime=0:t.earliestPendingTime<r&&(t.earliestPendingTime=t.latestPendingTime)),0===(a=t.earliestSuspendedTime)?Kr(t,r):r>t.latestSuspendedTime?(t.earliestSuspendedTime=0,t.latestSuspendedTime=0,t.latestPingedTime=0,Kr(t,r)):r<a&&Kr(t,r)),Ur(0,t),po.current=null,1<e.effectTag?null!==e.lastEffect?(e.lastEffect.nextEffect=e,r=e.firstEffect):r=e:r=e.firstEffect,dr=yn,In(a=En())){if("selectionStart"in a)var o={start:a.selectionStart,end:a.selectionEnd};else t:{var i=(o=(o=a.ownerDocument)&&o.defaultView||window).getSelection&&o.getSelection();if(i&&0!==i.rangeCount){o=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{o.nodeType,s.nodeType}catch(t){o=null;break t}var h=0,d=-1,u=-1,v=0,p=0,g=a,f=null;e:for(;;){for(var m;g!==o||0!==l&&3!==g.nodeType||(d=h+l),g!==s||0!==i&&3!==g.nodeType||(u=h+i),3===g.nodeType&&(h+=g.nodeValue.length),null!==(m=g.firstChild);)f=g,g=m;for(;;){if(g===a)break e;if(f===o&&++v===l&&(d=h),f===s&&++p===i&&(u=h),null!==(m=g.nextSibling))break;f=(g=f).parentNode}g=m}o=-1===d||-1===u?null:{start:d,end:u}}else o=null}o=o||{start:0,end:0}}else o=null;for(ur={focusedElem:a,selectionRange:o},yn=!1,wo=r;null!==wo;){a=!1,o=void 0;try{for(;null!==wo;){if(256&wo.effectTag){var z=wo.alternate;t:switch(l=wo,l.tag){case 2:case 3:if(256&l.effectTag&&null!==z){var x=z.memoizedProps,M=z.memoizedState,b=l.stateNode;b.props=l.memoizedProps,b.state=l.memoizedState;var w=b.getSnapshotBeforeUpdate(x,M);b.__reactInternalSnapshotBeforeUpdate=w}break t;case 5:case 7:case 8:case 6:break t;default:c("163")}}wo=wo.nextEffect}}catch(t){a=!0,o=t}a&&(null===wo&&c("178"),ko(wo,o),null!==wo&&(wo=wo.nextEffect))}for(wo=r;null!==wo;){z=!1,x=void 0;try{for(;null!==wo;){var y=wo.effectTag;if(16&y&&nr(wo.stateNode,""),128&y){var H=wo.alternate;if(null!==H){var C=H.ref;null!==C&&("function"==typeof C?C(null):C.current=null)}}switch(14&y){case 2:co(wo),wo.effectTag&=-3;break;case 6:co(wo),wo.effectTag&=-3,lo(wo.alternate,wo);break;case 4:lo(wo.alternate,wo);break;case 8:io(M=wo),M.return=null,M.child=null,M.alternate&&(M.alternate.child=null,M.alternate.return=null)}wo=wo.nextEffect}}catch(t){z=!0,x=t}z&&(null===wo&&c("178"),ko(wo,x),null!==wo&&(wo=wo.nextEffect))}if(C=ur,H=En(),y=C.focusedElem,x=C.selectionRange,H!==y&&y&&y.ownerDocument&&function t(e,n){return!(!e||!n)&&(e===n||(!e||3!==e.nodeType)&&(n&&3===n.nodeType?t(e,n.parentNode):"contains"in e?e.contains(n):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(n))))}(y.ownerDocument.documentElement,y)){null!==x&&In(y)&&(H=x.start,void 0===(C=x.end)&&(C=H),"selectionStart"in y?(y.selectionStart=H,y.selectionEnd=Math.min(C,y.value.length)):(H=((z=y.ownerDocument||document)?z.defaultView:window).getSelection(),M=y.textContent.length,C=Math.min(x.start,M),x=void 0===x.end?C:Math.min(x.end,M),!H.extend&&C>x&&(M=x,x=C,C=M),M=Pn(y,C),b=Pn(y,x),M&&b&&(1!==H.rangeCount||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==b.node||H.focusOffset!==b.offset)&&((z=z.createRange()).setStart(M.node,M.offset),H.removeAllRanges(),C>x?(H.addRange(z),H.extend(b.node,b.offset)):(z.setEnd(b.node,b.offset),H.addRange(z))))),H=[];for(C=y;C=C.parentNode;)1===C.nodeType&&H.push({element:C,left:C.scrollLeft,top:C.scrollTop});for("function"==typeof y.focus&&y.focus(),y=0;y<H.length;y++)(C=H[y]).element.scrollLeft=C.left,C.element.scrollTop=C.top}for(ur=null,yn=!!dr,dr=null,t.current=e,wo=r;null!==wo;){r=!1,y=void 0;try{for(H=n;null!==wo;){var V=wo.effectTag;if(36&V){var L=wo.alternate;switch(z=H,(C=wo).tag){case 2:case 3:var B=C.stateNode;if(4&C.effectTag)if(null===L)B.props=C.memoizedProps,B.state=C.memoizedState,B.componentDidMount();else{var k=L.memoizedProps,S=L.memoizedState;B.props=C.memoizedProps,B.state=C.memoizedState,B.componentDidUpdate(k,S,B.__reactInternalSnapshotBeforeUpdate)}var _=C.updateQueue;null!==_&&(B.props=C.memoizedProps,B.state=C.memoizedState,ea(0,_,B));break;case 5:var T=C.updateQueue;if(null!==T){if(x=null,null!==C.child)switch(C.child.tag){case 7:x=C.child.stateNode;break;case 2:case 3:x=C.child.stateNode}ea(0,T,x)}break;case 7:var F=C.stateNode;null===L&&4&C.effectTag&&vr(C.type,C.memoizedProps)&&F.focus();break;case 8:case 6:case 15:case 16:break;default:c("163")}}if(128&V){var P=wo.ref;if(null!==P){var E=wo.stateNode;switch(wo.tag){case 7:var I=E;break;default:I=E}"function"==typeof P?P(I):P.current=I}}var O=wo.nextEffect;wo.nextEffect=null,wo=O}}catch(t){r=!0,y=t}r&&(null===wo&&c("178"),ko(wo,y),null!==wo&&(wo=wo.nextEffect))}mo=yo=!1,"function"==typeof Fr&&Fr(e.stateNode),V=e.expirationTime,e=e.childExpirationTime,0===(e=0===V||0!==e&&e<V?e:V)&&(Ho=null),t.expirationTime=e,t.finishedWork=null}function hc(){return!!Do||!(null===Uo||Uo.timeRemaining()>ec)&&(Do=!0)}function dc(t){null===No&&c("246"),No.expirationTime=0,jo||(jo=!0,Ko=t)}function uc(t,e){var n=Go;Go=!0;try{return t(e)}finally{(Go=n)||Oo||ic(1,null)}}function vc(t,e){if(Go&&!Wo){Wo=!0;try{return t(e)}finally{Wo=!1}}return t(e)}function pc(t,e,n){if(qo)return t(e,n);Go||Oo||0===Ro||(ic(Ro,null),Ro=0);var r=qo,a=Go;Go=qo=!0;try{return t(e,n)}finally{qo=r,(Go=a)||Oo||ic(1,null)}}function gc(t,e,n,r,a){var o=e.current;return n=function(t){if(!t)return br;t=t._reactInternalFiber;t:{(2!==tn(t)||2!==t.tag&&3!==t.tag)&&c("170");var e=t;do{switch(e.tag){case 5:e=e.stateNode.context;break t;case 2:if(Vr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}break;case 3:if(Vr(e.type._reactResult)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break t}}e=e.return}while(null!==e);c("171"),e=void 0}if(2===t.tag){var n=t.type;if(Vr(n))return Sr(t,n,e)}else if(3===t.tag&&Vr(n=t.type._reactResult))return Sr(t,n,e);return e}(n),null===e.context?e.context=n:e.pendingContext=n,e=a,(a=Yr(r)).payload={element:t},null!==(e=void 0===e?null:e)&&(a.callback=e),Qr(o,a),_o(o,r),r}function fc(t,e,n,r){var a=e.current;return gc(t,e,n,a=So(ac(),a),r)}function mc(t){if(!(t=t.current).child)return null;switch(t.child.tag){case 7:default:return t.child.stateNode}}function zc(t){var e=2+25*(1+((ac()-2+500)/25|0));e<=go&&(e=go+1),this._expirationTime=go=e,this._root=t,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function xc(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Mc(t,e,n){t={current:e=new Ir(5,null,null,e?3:0),containerInfo:t,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=e.stateNode=t}function bc(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType&&(8!==t.nodeType||" react-mount-point-unstable "!==t.nodeValue))}function wc(t,e,n,r,a){bc(n)||c("200");var o=n._reactRootContainer;if(o){if("function"==typeof a){var i=a;a=function(){var t=mc(o._internalRoot);i.call(t)}}null!=t?o.legacy_renderSubtreeIntoContainer(t,e,a):o.render(e,a)}else{if(o=n._reactRootContainer=function(t,e){if(e||(e=!(!(e=t?9===t.nodeType?t.documentElement:t.firstChild:null)||1!==e.nodeType||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Mc(t,!1,e)}(n,r),"function"==typeof a){var l=a;a=function(){var t=mc(o._internalRoot);l.call(t)}}vc(function(){null!=t?o.legacy_renderSubtreeIntoContainer(t,e,a):o.render(e,a)})}return mc(o._internalRoot)}function yc(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return bc(e)||c("200"),function(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Xt,key:null==r?null:""+r,children:t,containerInfo:e,implementation:n}}(t,e,null,n)}Lt=function(t,e,n){switch(e){case"input":if(be(t,n),e=n.name,"radio"===n.type&&null!=e){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var a=A(r);a||c("90"),Ut(r),be(r,a)}}}break;case"textarea":Xn(t,n);break;case"select":null!=(e=n.value)&&Wn(t,!!n.multiple,e,!1)}},zc.prototype.render=function(t){this._defer||c("250"),this._hasChildren=!0,this._children=t;var e=this._root._internalRoot,n=this._expirationTime,r=new xc;return gc(t,e,null,n,r._onCommit),r},zc.prototype.then=function(t){if(this._didComplete)t();else{var e=this._callbacks;null===e&&(e=this._callbacks=[]),e.push(t)}},zc.prototype.commit=function(){var t=this._root._internalRoot,e=t.firstBatch;if(this._defer&&null!==e||c("251"),this._hasChildren){var n=this._expirationTime;if(e!==this){this._hasChildren&&(n=this._expirationTime=e._expirationTime,this.render(this._children));for(var r=null,a=e;a!==this;)r=a,a=a._next;null===r&&c("251"),r._next=a._next,this._next=e,t.firstBatch=this}this._defer=!1,e=n,Oo&&c("253"),No=t,Ao=e,lc(t,e,!0),ic(1,null),e=this._next,this._next=null,null!==(e=t.firstBatch=e)&&e._hasChildren&&e.render(e._children)}else this._next=null,this._defer=!1},zc.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var t=this._callbacks;if(null!==t)for(var e=0;e<t.length;e++)(0,t[e])()}},xc.prototype.then=function(t){if(this._didCommit)t();else{var e=this._callbacks;null===e&&(e=this._callbacks=[]),e.push(t)}},xc.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var t=this._callbacks;if(null!==t)for(var e=0;e<t.length;e++){var n=t[e];"function"!=typeof n&&c("191",n),n()}}},Mc.prototype.render=function(t,e){var n=this._internalRoot,r=new xc;return null!==(e=void 0===e?null:e)&&r.then(e),fc(t,n,null,r._onCommit),r},Mc.prototype.unmount=function(t){var e=this._internalRoot,n=new xc;return null!==(t=void 0===t?null:t)&&n.then(t),fc(null,e,null,n._onCommit),n},Mc.prototype.legacy_renderSubtreeIntoContainer=function(t,e,n){var r=this._internalRoot,a=new xc;return null!==(n=void 0===n?null:n)&&a.then(n),fc(e,r,t,a._onCommit),a},Mc.prototype.createBatch=function(){var t=new zc(this),e=t._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=t,t._next=null;else{for(n=null;null!==r&&r._expirationTime<=e;)n=r,r=r._next;t._next=r,null!==n&&(n._next=t)}return t},Ft=uc,Pt=pc,Et=function(){Oo||0===Ro||(ic(Ro,null),Ro=0)};var Hc={createPortal:yc,findDOMNode:function(t){if(null==t)return null;if(1===t.nodeType)return t;var e=t._reactInternalFiber;return void 0===e&&("function"==typeof t.render?c("188"):c("268",Object.keys(t))),null===(t=nn(e))?null:t.stateNode},hydrate:function(t,e,n){return wc(null,t,e,!0,n)},render:function(t,e,n){return wc(null,t,e,!1,n)},unstable_renderSubtreeIntoContainer:function(t,e,n,r){return(null==t||void 0===t._reactInternalFiber)&&c("38"),wc(t,e,n,!1,r)},unmountComponentAtNode:function(t){return bc(t)||c("40"),!!t._reactRootContainer&&(vc(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return yc.apply(void 0,arguments)},unstable_batchedUpdates:uc,unstable_interactiveUpdates:pc,flushSync:function(t,e){Oo&&c("187");var n=Go;Go=!0;try{return To(t,e)}finally{Go=n,ic(1,null)}},unstable_flushControlled:function(t){var e=Go;Go=!0;try{To(t)}finally{(Go=e)||Oo||ic(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[O,N,A,z,G,function(t){V(t,U)},_t,Tt,Ln,T]},unstable_createRoot:function(t,e){return bc(t)||c("278"),new Mc(t,!0,null!=e&&!0===e.hydrate)}};!function(t){var e=t.findFiberByHostInstance;!function(t){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)return!0;try{var n=e.inject(t);Fr=Er(function(t){return e.onCommitFiberRoot(n,t)}),Pr=Er(function(t){return e.onCommitFiberUnmount(n,t)})}catch(t){}}(a({},t,{findHostInstanceByFiber:function(t){return null===(t=nn(t))?null:t.stateNode},findFiberByHostInstance:function(t){return e?e(t):null}}))}({findFiberByHostInstance:I,bundleType:0,version:"16.5.0",rendererPackageName:"react-dom"});var Cc={default:Hc},Vc=Cc&&Hc||Cc;t.exports=Vc.default||Vc},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=h(a),c=(h(n(44)),n(10)),i=n(8);n(93);var l=h(n(91)),s=h(n(38));function h(t){return t&&t.__esModule?t:{default:t}}var d=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleSpeedToggle=function(){n.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})},n.handleSliderMouseUp=function(t){n.props.onPlayerControlSliderMouseUp(t)},n.handleSliderMouseDown=function(t){n.props.onPlayerControlSliderMouseDown(t)},n.handleSliderChange=function(t){n.props.onPlayerControlSliderChange(t)},n.handleVideoRewind=function(){n.props.onPlayerControlVideoRewind()},n.handleVideoPlayPause=function(){n.props.onPlayerControlVideoPlayPause()},n.handleVideoSpeed=function(t){n.props.onPlayerControlVideoSpeedChange(t)},n.state={dropdownOpen:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.playing,r=e.played,a=e.playbackRate,h=e.duration;return o.default.createElement("div",null,o.default.createElement(l.default,{played:r,onSliderMouseUp:this.handleSliderMouseUp,onSliderMouseDown:this.handleSliderMouseDown,onSliderChange:this.handleSliderChange}),o.default.createElement("div",{className:"d-flex"},o.default.createElement("div",{className:"mr-auto d-flex align-items-center"},o.default.createElement(i.ButtonGroup,null,o.default.createElement(i.Button,{className:"player-button d-flex align-items-center",color:"link",onClick:this.handleVideoRewind},o.default.createElement(c.MdReplay,{style:{fontSize:"30px"}})),o.default.createElement(i.Button,{className:"player-button d-flex align-items-center",color:"link",onClick:this.handleVideoPlayPause},n?o.default.createElement(c.MdPause,{style:{fontSize:"30px"}}):o.default.createElement(c.MdPlayArrow,{style:{fontSize:"30px"}}))),o.default.createElement(i.Dropdown,{isOpen:this.state.dropdownOpen,toggle:this.handleSpeedToggle,size:"sm"},o.default.createElement(i.DropdownToggle,{className:"speed-toggle",color:"link",caret:!0},"x",a),o.default.createElement(i.DropdownMenu,null,o.default.createElement(i.DropdownItem,{header:!0,className:""},"Speed"),o.default.createElement(i.DropdownItem,{className:"speed-item text-primary",onClick:function(){return t.handleVideoSpeed(.25)}},"0.25"),o.default.createElement(i.DropdownItem,{className:"speed-item text-primary",onClick:function(){return t.handleVideoSpeed(.5)}},"0.5"),o.default.createElement(i.DropdownItem,{className:"speed-item text-primary",onClick:function(){return t.handleVideoSpeed(1)}},"1"),o.default.createElement(i.DropdownItem,{className:"speed-item text-primary",onClick:function(){return t.handleVideoSpeed(1.5)}},"1.5"),o.default.createElement(i.DropdownItem,{className:"speed-item text-primary",onClick:function(){return t.handleVideoSpeed(2)}},"2")))),o.default.createElement("div",{className:"d-flex align-items-center"},o.default.createElement("div",{className:"text-right text-muted"},o.default.createElement(s.default,{seconds:r*h})," / ",o.default.createElement(s.default,{seconds:h})))))}}]),e}();e.default=d},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var a,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".player{\n\tbackground: #ffffff;\n}\n",""])},function(t,e,n){var r=n(99);"string"==typeof r&&(r=[[t.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=[],o=!0,c=!1,i=void 0;try{for(var l,s=h[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){var d=l.value;!d.Player.canPlay(t)&&e[d.configKey].preload&&n.push(r.default.createElement(a.default,{key:d.Player.displayName,activePlayer:d.Player,url:d.url,playing:!0,muted:!0,style:{display:"none"}}))}}catch(t){c=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(c)throw i}}return n};var r=s(n(1)),a=s(n(24)),o=n(43),c=n(42),i=n(41),l=n(40);function s(t){return t&&t.__esModule?t:{default:t}}var h=[{Player:o.YouTube,configKey:"youtube",url:"https://www.youtube.com/watch?v=GlCmAC4MHek"},{Player:c.SoundCloud,configKey:"soundcloud",url:"https://soundcloud.com/seucheu/john-cage-433-8-bit-version"},{Player:i.Vimeo,configKey:"vimeo",url:"https://vimeo.com/127250231"},{Player:l.DailyMotion,configKey:"dailymotion",url:"http://www.dailymotion.com/video/xqdpyk"}]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Mixcloud=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),c=s(o),i=n(5),l=s(n(6));function s(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=/mixcloud\.com\/([^/]+\/[^/]+)/,u=e.Mixcloud=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.callPlayer=i.callPlayer,r.duration=null,r.currentTime=null,r.secondsLoaded=null,r.mute=function(){},r.unmute=function(){},r.ref=function(t){r.iframe=t},h(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),a(e,[{key:"load",value:function(t){var e=this;(0,i.getSDK)("//widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(function(t){e.player=t.PlayerWidget(e.iframe),e.player.ready.then(function(){e.player.events.play.on(e.props.onPlay),e.player.events.pause.on(e.props.onPause),e.player.events.ended.on(e.props.onEnded),e.player.events.error.on(e.props.error),e.player.events.progress.on(function(t,n){e.currentTime=t,e.duration=n}),e.props.onReady()})},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var t=this.props,e=t.url,n=t.config,a=e.match(d)[1],o=(0,i.queryString)(r({},n.mixcloud.options,{feed:"/"+a+"/"}));return c.default.createElement("iframe",{key:a,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?"+o,frameBorder:"0"})}}]),e}();u.displayName="Mixcloud",u.canPlay=function(t){return d.test(t)},e.default=(0,l.default)(u)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Twitch=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),c=s(o),i=n(5),l=s(n(6));function s(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,u=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,v="twitch-player-",p=e.Twitch=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.callPlayer=i.callPlayer,r.playerID=v+(0,i.randomString)(),r.mute=function(){r.callPlayer("setMuted",!0)},r.unmute=function(){r.callPlayer("setMuted",!1)},h(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),a(e,[{key:"load",value:function(t,e){var n=this,a=this.props,o=a.playsinline,c=a.onError,l=a.config,s=u.test(t),h=s?t.match(u)[1]:t.match(d)[1];e?s?this.player.setChannel(h):this.player.setVideo("v"+h):(0,i.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then(function(t){n.player=new t.Player(n.playerID,r({video:s?"":h,channel:s?h:"",height:"100%",width:"100%",playsinline:o,autoplay:n.props.playing,muted:n.props.muted},l.twitch.options));var e=t.Player,a=e.READY,c=e.PLAY,i=e.PAUSE,d=e.ENDED;n.player.addEventListener(a,n.props.onReady),n.player.addEventListener(c,n.props.onPlay),n.player.addEventListener(i,n.props.onPause),n.player.addEventListener(d,n.props.onEnded)},c)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return c.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}]),e}();p.displayName="Twitch",p.canPlay=function(t){return d.test(t)||u.test(t)},p.loopOnEnded=!0,e.default=(0,l.default)(p)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Wistia=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),c=s(o),i=n(5),l=s(n(6));function s(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=/(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,u=e.Wistia=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.callPlayer=i.callPlayer,r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},h(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),a(e,[{key:"getID",value:function(t){return t&&t.match(d)[1]}},{key:"load",value:function(t){var e=this,n=this.props,a=n.playing,o=n.muted,c=n.controls,l=n.onReady,s=n.onPlay,h=n.onPause,d=n.onSeek,u=n.onEnded,v=n.config;(0,i.getSDK)("//fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(){window._wq=window._wq||[],window._wq.push({id:e.getID(t),options:r({autoPlay:a,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:c},v.wistia.options),onReady:function(t){e.player=t,e.player.bind("play",s),e.player.bind("pause",h),e.player.bind("seek",d),e.player.bind("end",u),l()}})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("remove")}},{key:"seekTo",value:function(t){this.callPlayer("time",t)}},{key:"setVolume",value:function(t){this.callPlayer("volume",t)}},{key:"setPlaybackRate",value:function(t){this.callPlayer("playbackRate",t)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var t=this.getID(this.props.url),e="wistia_embed wistia_async_"+t;return c.default.createElement("div",{key:t,className:e,style:{width:"100%",height:"100%"}})}}]),e}();u.displayName="Wistia",u.canPlay=function(t){return d.test(t)},u.loopOnEnded=!0,e.default=(0,l.default)(u)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Streamable=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=l(a),c=n(5),i=l(n(6));function l(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=/streamable\.com\/([a-z0-9]+)$/,d=e.Streamable=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.callPlayer=c.callPlayer,r.duration=null,r.currentTime=null,r.secondsLoaded=null,r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},r.ref=function(t){r.iframe=t},s(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"load",value:function(t){var e=this;(0,c.getSDK)("//cdn.embed.ly/player-0.1.0.min.js","playerjs").then(function(t){e.iframe&&(e.player=new t.Player(e.iframe),e.player.setLoop(e.props.loop),e.player.on("ready",e.props.onReady),e.player.on("play",e.props.onPlay),e.player.on("pause",e.props.onPause),e.player.on("seeked",e.props.onSeek),e.player.on("ended",e.props.onEnded),e.player.on("error",e.props.onError),e.player.on("timeupdate",function(t){var n=t.duration,r=t.seconds;e.duration=n,e.currentTime=r}),e.player.on("buffered",function(t){var n=t.percent;e.duration&&(e.secondsLoaded=e.duration*n)}),e.props.muted&&e.player.mute())},this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("setCurrentTime",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",100*t)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var t=this.props.url.match(h)[1];return o.default.createElement("iframe",{ref:this.ref,src:"https://streamable.com/o/"+t,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allowFullScreen:!0})}}]),e}();d.displayName="Streamable",d.canPlay=function(t){return h.test(t)},e.default=(0,i.default)(d)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Facebook=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=l(a),c=n(5),i=l(n(6));function l(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h="//connect.facebook.net/en_US/sdk.js",d=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,u="facebook-player-",v=e.Facebook=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.callPlayer=c.callPlayer,r.playerID=u+(0,c.randomString)(),r.mute=function(){r.callPlayer("mute")},r.unmute=function(){r.callPlayer("unmute")},s(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"load",value:function(t,e){var n=this;e?(0,c.getSDK)(h,"FB","fbAsyncInit").then(function(t){return t.XFBML.parse()}):(0,c.getSDK)(h,"FB","fbAsyncInit").then(function(t){t.init({appId:n.props.config.facebook.appId,xfbml:!0,version:"v2.5"}),t.Event.subscribe("xfbml.ready",function(t){"video"===t.type&&t.id===n.playerID&&(n.player=t.instance,n.player.subscribe("startedPlaying",n.props.onPlay),n.player.subscribe("paused",n.props.onPause),n.player.subscribe("finishedPlaying",n.props.onEnded),n.player.subscribe("startedBuffering",n.props.onBuffer),n.player.subscribe("error",n.props.onError),n.props.muted||n.callPlayer("unmute"),n.props.onReady())})})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(t){this.callPlayer("seek",t)}},{key:"setVolume",value:function(t){this.callPlayer("setVolume",t)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"black"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"})}}]),e}();v.displayName="Facebook",v.canPlay=function(t){return d.test(t)},v.loopOnEnded=!0,e.default=(0,i.default)(v)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(43),a=n(42),o=n(41),c=n(106),i=n(105),l=n(104),s=n(103),h=n(40),d=n(102),u=n(39);e.default=[r.YouTube,a.SoundCloud,o.Vimeo,c.Facebook,i.Streamable,l.Wistia,s.Twitch,h.DailyMotion,d.Mixcloud,u.FilePlayer]},function(t,e,n){"use strict";n.r(e);var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===a}(t)}(t)},a="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(t,e){return!1!==e.clone&&e.isMergeableObject(t)?i(function(t){return Array.isArray(t)?[]:{}}(t),t,e):t}function c(t,e,n){return t.concat(e).map(function(t){return o(t,n)})}function i(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||c,n.isMergeableObject=n.isMergeableObject||r;var a=Array.isArray(e);return a===Array.isArray(t)?a?n.arrayMerge(t,e,n):function(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(e){r[e]=o(t[e],n)}),Object.keys(e).forEach(function(a){n.isMergeableObject(e[a])&&t[a]?r[a]=i(t[a],e[a],n):r[a]=o(e[a],n)}),r}(t,e,n):o(e,n)}i.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return i(t,n,e)},{})};var l=i;e.default=l},function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}t.exports=function(t,e,r){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},o.type=e.type||"text/javascript",o.charset=e.charset||"utf8",o.async=!("async"in e&&!e.async),o.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(o,e.attrs),e.text&&(o.text=""+e.text),("onload"in o?n:function(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}})(o,r),o.onload||n(o,r),a.appendChild(o)}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";var r=n(110);function a(){}t.exports=function(){function t(t,e,n,a,o,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=a,n.PropTypes=n,n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),o=i(a),c=i(n(44));function i(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(100);var s=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=l(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(o))),r.handleReady=function(t){r.props.onVideoReady(t)},r.handleProgress=function(t){r.props.onVideoProgress(t)},r.handleDuration=function(t){r.props.onVideoDuration(t)},r.handleEnded=function(t){r.props.onVideoEnded(t)},r.handleRef=function(t){r.props.playerRef(t)},l(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),r(e,[{key:"render",value:function(){var t=this.props,e=t.playing,n=t.width,r=t.url,a=t.loop,i=t.playbackRate;return o.default.createElement(c.default,{url:r,playing:e,id:"react-player",ref:this.handleRef,onReady:this.handleReady,onProgress:this.handleProgress,onDuration:this.handleDuration,onEnded:this.handleEnded,className:"player",progressInterval:100,controls:!1,muted:!0,loop:a,playbackRate:i,width:n,height:"auto"})}}]),e}();e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},e.IconContext=r.createContext&&r.createContext(e.DefaultContext)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.denormalize=e.normalize=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(18)),c=function(t,e,n,r,o,c){var i=a({},e);return Object.keys(t).forEach(function(n){var r=t[n],a=o(e[n],e,n,r,c);void 0===a||null===a?delete i[n]:i[n]=a}),i};e.normalize=c;var i=function(t,e,n){if(o.isImmutable(e))return o.denormalizeImmutable(t,e,n);var r=a({},e);return Object.keys(t).forEach(function(e){r[e]&&(r[e]=n(r[e],t[e]))}),r};e.denormalize=i;var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.define(e)}return r(t,[{key:"define",value:function(t){this.schema=Object.keys(t).reduce(function(e,n){var r=t[n];return a({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))},this.schema||{})}},{key:"normalize",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return c.apply(void 0,[this.schema].concat(e))}},{key:"denormalize",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return i.apply(void 0,[this.schema].concat(e))}}]),t}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.denormalize=e.normalize=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(t){return t&&t.__esModule?t:{default:t}}(n(25)),o=function(t){if(Array.isArray(t)&&t.length>1)throw new Error("Expected schema definition to be a single schema, but found "+t.length+".");return t[0]},c=function(t){return Array.isArray(t)?t:Object.keys(t).map(function(e){return t[e]})},i=(e.normalize=function(t,e,n,r,a,i){return t=o(t),c(e).map(function(e,o){return a(e,n,r,t,i)})},e.denormalize=function(t,e,n){return t=o(t),e&&e.map?e.map(function(e){return n(e,t)}):e},function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),r(e,[{key:"normalize",value:function(t,e,n,r,a){var o=this;return c(t).map(function(t,c){return o.normalizeValue(t,e,n,r,a)}).filter(function(t){return void 0!==t&&null!==t})}},{key:"denormalize",value:function(t,e){var n=this;return t&&t.map?t.map(function(t){return n.denormalizeValue(t,e)}):t}}]),e}());e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(n(25));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),a(e,[{key:"normalize",value:function(t,e,n,a,o){var i=this;return Object.keys(t).reduce(function(e,n,l){var s=t[n];return void 0!==s&&null!==s?r({},e,c({},n,i.normalizeValue(s,t,n,a,o))):e},{})}},{key:"denormalize",value:function(t,e){var n=this;return Object.keys(t).reduce(function(a,o){var i=t[o];return r({},a,c({},o,n.denormalizeValue(i,e)))},{})}}]),e}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(t){return t&&t.__esModule?t:{default:t}}(n(25)),o=function(t){function e(t,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),!n)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),r(e,[{key:"normalize",value:function(t,e,n,r,a){return this.normalizeValue(t,e,n,r,a)}},{key:"denormalize",value:function(t,e){return this.denormalizeValue(t,e)}}]),e}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(18)),i=function(t){return function(e){return c.isImmutable(e)?e.get(t):e[t]}},l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e||"string"!=typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var o=r.idAttribute,c=void 0===o?"id":o,l=r.mergeStrategy,s=void 0===l?function(t,e){return a({},t,e)}:l,h=r.processStrategy,d=void 0===h?function(t){return a({},t)}:h;this._key=e,this._getId="function"==typeof c?c:i(c),this._idAttribute=c,this._mergeStrategy=s,this._processStrategy=d,this.define(n)}return o(t,[{key:"define",value:function(t){this.schema=Object.keys(t).reduce(function(e,n){var r=t[n];return a({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))},this.schema||{})}},{key:"getId",value:function(t,e,n){return this._getId(t,e,n)}},{key:"merge",value:function(t,e){return this._mergeStrategy(t,e)}},{key:"normalize",value:function(t,e,n,a,o){var c=this,i=this._processStrategy(t,e,n);return Object.keys(this.schema).forEach(function(t){if(i.hasOwnProperty(t)&&"object"===r(i[t])){var e=c.schema[t];i[t]=a(i[t],i,t,e,o)}}),o(this,i,t,e,n),this.getId(t,e,n)}},{key:"denormalize",value:function(t,e){var n=this;return c.isImmutable(t)?c.denormalizeImmutable(this.schema,t,e):(Object.keys(this.schema).forEach(function(r){if(t.hasOwnProperty(r)){var a=n.schema[r];t[r]=e(t[r],a)}}),t)}},{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),t}();e.default=l},function(t,e,n){"use strict";
/** @license React v16.5.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(26),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,s=a?Symbol.for("react.profiler"):60114,h=a?Symbol.for("react.provider"):60109,d=a?Symbol.for("react.context"):60110,u=a?Symbol.for("react.async_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112;a&&Symbol.for("react.placeholder");var p="function"==typeof Symbol&&Symbol.iterator;function g(t){for(var e=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(t,e,n,r,a,o,c,i){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,void 0,void 0,void 0,void 0,void 0],s=0;(t=Error(e.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function z(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||f}function x(){}function M(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||f}z.prototype.isReactComponent={},z.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&g("85"),this.updater.enqueueSetState(this,t,e,"setState")},z.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},x.prototype=z.prototype;var b=M.prototype=new x;b.constructor=M,r(b,z.prototype),b.isPureReactComponent=!0;var w={current:null,currentDispatcher:null},y=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0};function C(t,e,n){var r=void 0,a={},c=null,i=null;if(null!=e)for(r in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(c=""+e.key),e)y.call(e,r)&&!H.hasOwnProperty(r)&&(a[r]=e[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),h=0;h<l;h++)s[h]=arguments[h+2];a.children=s}if(t&&t.defaultProps)for(r in l=t.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:t,key:c,ref:i,props:a,_owner:w.current}}function V(t){return"object"==typeof t&&null!==t&&t.$$typeof===o}var L=/\/+/g,B=[];function k(t,e,n,r){if(B.length){var a=B.pop();return a.result=t,a.keyPrefix=e,a.func=n,a.context=r,a.count=0,a}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function S(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>B.length&&B.push(t)}function _(t,e,n){return null==t?0:function t(e,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return r(a,e,""===n?"."+T(e,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var h=n+T(i=e[s],s);l+=t(i,h,r,a)}else if("function"==typeof(h=null===e||"object"!=typeof e?null:"function"==typeof(h=p&&e[p]||e["@@iterator"])?h:null))for(e=h.call(e),s=0;!(i=e.next()).done;)l+=t(i=i.value,h=n+T(i,s++),r,a);else"object"===i&&g("31","[object Object]"==(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return l}(t,"",e,n)}function T(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function F(t,e){t.func.call(t.context,e,t.count++)}function P(t,e,n){var r=t.result,a=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?E(t,r,n,function(t){return t}):null!=t&&(V(t)&&(t=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,a+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(L,"$&/")+"/")+n)),r.push(t))}function E(t,e,n,r,a){var o="";null!=n&&(o=(""+n).replace(L,"$&/")+"/"),_(t,P,e=k(e,o,r,a)),S(e)}var I={Children:{map:function(t,e,n){if(null==t)return t;var r=[];return E(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;_(t,F,e=k(null,null,e,n)),S(e)},count:function(t){return _(t,function(){return null},null)},toArray:function(t){var e=[];return E(t,e,null,function(t){return t}),e},only:function(t){return V(t)||g("143"),t}},createRef:function(){return{current:null}},Component:z,PureComponent:M,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:d,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,Provider:null,Consumer:null,unstable_read:null}).Provider={$$typeof:h,_context:t},t.Consumer=t,t.unstable_read=function(t,e){var n=w.currentDispatcher;return null===n&&g("277"),n.readContext(t,e)}.bind(null,t),t},forwardRef:function(t){return{$$typeof:v,render:t}},Fragment:i,StrictMode:l,unstable_AsyncMode:u,unstable_Profiler:s,createElement:C,cloneElement:function(t,e,n){(null===t||void 0===t)&&g("267",t);var a=void 0,c=r({},t.props),i=t.key,l=t.ref,s=t._owner;if(null!=e){void 0!==e.ref&&(l=e.ref,s=w.current),void 0!==e.key&&(i=""+e.key);var h=void 0;for(a in t.type&&t.type.defaultProps&&(h=t.type.defaultProps),e)y.call(e,a)&&!H.hasOwnProperty(a)&&(c[a]=void 0===e[a]&&void 0!==h?h[a]:e[a])}if(1==(a=arguments.length-2))c.children=n;else if(1<a){h=Array(a);for(var d=0;d<a;d++)h[d]=arguments[d+2];c.children=h}return{$$typeof:o,type:t.type,key:i,ref:l,props:c,_owner:s}},createFactory:function(t){var e=C.bind(null,t);return e.type=t,e},isValidElement:V,version:"16.5.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:r}},O={default:I},N=O&&I||O;t.exports=N.default||N},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),c=z(o),i=(n(45),n(10)),l=z(n(112)),s=z(n(97)),h=z(n(88)),d=z(n(77)),u=z(n(66)),v=z(n(63)),p=n(8);n(9);var g=n(12),f=n(23),m=n(31);function z(t){return t&&t.__esModule?t:{default:t}}var x=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.playerRef=function(t){n.player=t},n.handleVideoReady=function(){},n.handleVideoProgress=function(t){if(!n.state.seeking){var e=t.played;n.setState(function(t,n){return{played:e}})}},n.handleVideoDuration=function(t){n.setState({duration:t})},n.handleVideoEnded=function(){n.setState({playing:n.state.loop})},n.handlePlayerControlVideoRewind=function(){n.setState({playing:!1,played:0}),n.player.seekTo(0)},n.handlePlayerControlVideoPlayPause=function(){n.setState({playing:!n.state.playing})},n.handlePlayerControlVideoSpeedChange=function(t){n.setState({playbackRate:t})},n.handlePlayerControlSliderMouseUp=function(t){n.setState({seeking:!1})},n.handlePlayerControlSliderMouseDown=function(t){n.setState({playing:!1,seeking:!0})},n.handlePlayerControlSliderChange=function(t){var e=parseFloat(t.target.value);n.setState(function(t,n){var r=t.objects,a=t.focusing;if(a)for(var o=r.find(function(t){return t.name===a}).trajectories,c=0;c<o.length;c++){if(e>=o[c].time){if(c!==o.length-1&&e>=o[c+1].time)continue;o[c].status!==f.SHOW&&(a="");break}c==o.length-1&&(a="")}return{played:e,focusing:a}},function(){n.player.seekTo(e)})},n.handleAddObject=function(){n.setState(function(t,e){return{adding:!t.adding,playing:!1}})},n.handleCanvasStageMouseMove=function(t){},n.handleCanvasStageMouseDown=function(t){if(n.state.adding){var e=t.target.getStage(),a=e.getPointerPosition(),o=(new Date).getTime().toString(36),c=g.colors[(0,g.getRandomInt)(g.colors.length)],i=[];n.UndoRedo.save(r({},n.state,{adding:!1})),n.setState(function(t,e){return i.push(new f.Trajectory({x:a.x,y:a.y,height:1,width:1,time:t.played})),{adding:!t.adding,objectCounter:t.objectCounter+1,focusing:""+o,objects:[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t.objects),[new f.VideoObject({id:t.objectCounter+1,name:""+o,color:c,trajectories:i})])}},function(){e.find("."+o)[0].get(".bottomRight")[0].startDrag()})}},n.handleCanvasStageMouseUp=function(t){},n.handleCanvasGroupMouseDown=function(t){var e=t.target.findAncestor("Group");n.setState({playing:!1,focusing:e.name()})},n.handleCanvasGroupDragStart=function(t){},n.handleCanvasGroupDragEnd=function(t){if("Group"===t.target.getClassName()){var e=t.target,a=e.get("Rect")[0],o=e.get(".topLeft")[0].getAbsolutePosition();n.setState(function(t,n){var c=t.played;return{playing:!1,objects:t.objects.map(function(t){if(t.name!==e.name())return t;for(var n=t.trajectories,i=0;i<n.length;i++)if(c>=n[i].time){if(i!==n.length-1&&c>=n[i+1].time)continue;if(c===n[i].time){n[i].x=o.x,n[i].y=o.y,n[i].width=a.width(),n[i].height=a.height();break}if(i===n.length-1){n.push(new f.Trajectory({x:o.x,y:o.y,width:a.width(),height:a.height(),time:c}));break}n.splice(i+1,0,new f.Trajectory({x:o.x,y:o.y,height:a.height(),width:a.width(),time:c}));break}return r({},t,{trajectories:n})})}})}},n.handleCanvasDotMouseDown=function(t){var e=t.target.findAncestor("Group");n.setState({focusing:e.name()})},n.handleCanvasDotDragMove=function(t){},n.handleCanvasDotDragEnd=function(t){var e=t.target.getParent();e.draggable(!0);var a=e.get(".topLeft")[0],o=e.get(".topRight")[0],c=e.get(".bottomRight")[0],i=e.get(".bottomLeft")[0],l=Math.max(a.getAbsolutePosition().x,o.getAbsolutePosition().x,c.getAbsolutePosition().x,i.getAbsolutePosition().x),s=Math.min(a.getAbsolutePosition().x,o.getAbsolutePosition().x,c.getAbsolutePosition().x,i.getAbsolutePosition().x),h=Math.max(a.getAbsolutePosition().y,o.getAbsolutePosition().y,c.getAbsolutePosition().y,i.getAbsolutePosition().y),d=Math.min(a.getAbsolutePosition().y,o.getAbsolutePosition().y,c.getAbsolutePosition().y,i.getAbsolutePosition().y);n.setState(function(t,n){var a=t.played;return{objects:t.objects.map(function(t){if(t.name!==e.name())return t;for(var n=t.trajectories,o=0;o<n.length;o++)if(a>=n[o].time){if(o!==n.length-1&&a>=n[o+1].time)continue;if(a===n[o].time){n[o].x=s,n[o].y=d,n[o].height=h-d,n[o].width=l-s;break}n.splice(o+1,0,new f.Trajectory({x:s,y:d,height:h-d,width:l-s,time:a}));break}return r({},t,{trajectories:n})})}})},n.handleListObjectItemClick=function(t){n.setState({focusing:t})},n.handleListTrajectoryJump=function(t){var e=t.name,r=t.time;n.setState({playing:!1,focusing:e},function(){n.player.seekTo(parseFloat(r));var t=!0,a=!1,o=void 0;try{for(var c,i=n.state.objects[Symbol.iterator]();!(t=(c=i.next()).done);t=!0){var l=c.value;if(l.name===e){l.status===f.SHOW&&n.state.stage.find("."+e)[0].moveToTop();break}}}catch(t){a=!0,o=t}finally{try{!t&&i.return&&i.return()}finally{if(a)throw o}}})},n.handleListTrajectoryDelete=function(t){var e=t.name,a=t.time;n.UndoRedo.save(n.state),n.setState(function(t){return{objects:t.objects.map(function(t){if(t.name!==e)return t;var n=t.trajectories.filter(function(t){return t.time!==a});return r({},t,{trajectories:n})})}})},n.handleListObjectDelete=function(t){n.UndoRedo.save(n.state),n.setState(function(e){return{objects:e.objects.filter(function(e){if(e.name!==t){var n=e.children.indexOf(t);return-1!==n&&(e.children.splice(n,1),0==e.children.length&&e.trajectories[e.trajectories.length-1].status===f.SPLIT&&(e.trajectories[e.trajectories.length-1].status=f.SHOW)),!0}return!1}),focusing:""}})},n.handleListObjectShowHide=function(t){var e=t.name,a=t.status;n.UndoRedo.save(n.state),n.setState(function(t,n){var o=t.played;return{objects:t.objects.map(function(t){if(t.name!==e)return t;for(var n=t.trajectories,c=0;c<n.length;c++){if(0===c&&o<n[c].time){n.splice(0,0,new f.Trajectory({x:n[c].x,y:n[c].y,height:n[c].height,width:n[c].width,time:o,status:a}));break}if(o>=n[c].time){if(c!==n.length-1&&o>=n[c+1].time)continue;if(o===n[c].time){n.splice(c,1,new f.Trajectory(r({},n[c],{status:a})));break}if(c===n.length-1){n.push(new f.Trajectory({x:n[c].x,y:n[c].y,height:n[c].height,width:n[c].width,time:o,status:a}));break}var i=(0,g.interpolationArea)({startTraj:n[c],endTraj:n[c+1],played:o}),l=(0,g.interpolationPosition)({startTraj:n[c],endTraj:n[c+1],played:o});n.splice(c+1,0,new f.Trajectory({x:l.x,y:l.y,height:i.height,width:i.width,time:o,status:a}));break}}return a===f.HIDE&&f.Trajectory.clearDuplicateTrajectory(n,a),r({},t,{trajectories:n})})}})},n.handleListObjectSplit=function(t){var e=(new Date).getTime().toString(36),a=((new Date).getTime()+1).toString(36),o=[],c=[],i=f.SPLIT,l=void 0,s=void 0,h=void 0,d=void 0,u=void 0,v=void 0,p=void 0,m=void 0,z=void 0,x=void 0;n.UndoRedo.save(n.state),n.setState(function(n,M){var b=n.played,w=n.objects.map(function(n,o){if(n.name!==t)return n;s=n.children[0],h=n.children[1],z=o,d=n.id,x=n.color;for(var c=g.colors[(0,g.getRandomInt)(g.colors.length)];x===c;)c=g.colors[(0,g.getRandomInt)(g.colors.length)];l=c;for(var M=n.trajectories,w=0;w<M.length;w++)if(b>=M[w].time){if(w!==M.length-1&&b>=M[w+1].time)continue;if(u=M[w].x,v=M[w].y,p=M[w].width,m=M[w].height,b===M[w].time){M.splice(w,1,new f.Trajectory(r({},M[w],{status:i}))),M=M.slice(0,w+1);break}if(w===M.length-1){M.push(new f.Trajectory({x:M[w].x,y:M[w].y,height:M[w].height,width:M[w].width,time:b,status:i}));break}var y=(0,g.interpolationArea)({startTraj:M[w],endTraj:M[w+1],played:b}),H=(0,g.interpolationPosition)({startTraj:M[w],endTraj:M[w+1],played:b});u=H.x,v=H.y,p=y.width,m=y.height,M.splice(w+1,0,new f.Trajectory({x:H.x,y:H.y,height:y.height,width:y.width,time:b,status:i})),M=M.slice(0,w+2);break}return r({},n,{trajectories:M,children:[""+e,""+a]})});return o.push(new f.Trajectory({x:u,y:v,height:m/2,width:p/2,time:b})),c.push(new f.Trajectory({x:u+p/2-20,y:v+m/2-20,height:m/2,width:p/2,time:b})),w.splice(z,0,new f.VideoObject({id:d+"-1",name:""+e,color:l,trajectories:o,parent:t})),w.splice(z,0,new f.VideoObject({id:d+"-2",name:""+a,color:l,trajectories:c,parent:t})),{objects:w=w.filter(function(t){return t.name!==s&&t.name!==h}),focusing:""+a}})},n.handleListVideoPause=function(){n.setState({playing:!1})},n.handleUndo=function(){n.setState(function(t,e){var a=n.UndoRedo.undo(t);return r({},a)})},n.handleRedo=function(){n.setState(function(t,e){var a=n.UndoRedo.redo(t);return r({},a)})},n.handlePreviewed=function(){n.setState({previewed:!0})},n.handleFormFinalSubmit=function(t){var e=n.state,r=e.annotationWidth,a=e.annotationHeight,o=e.objects,c=n.props,i=c.url,l=c.width,s=c.height;n.props.onSubmit({feedback:t,url:i,width:l,height:s,annotationWidth:r,annotationHeight:a,objects:o})},n.handleFormCancelSubmission=function(){n.setState({loop:!1,submitted:!1,playing:!1})},n.handleFormSubmit=function(){n.setState({loop:!0,submitted:!0,played:0,playing:!0,focusing:""})},n.state={previewed:!1,submitted:!1,annotationWidth:t.annotationWidth||400,annotationHeight:0,played:0,playing:!1,playbackRate:1,duration:0,loop:!1,seeking:!1,adding:!1,objectCounter:0,focusing:"",objects:t.objects||[]},n.UndoRedo=new m.UndoRedo,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),a(e,[{key:"componentDidUpdate",value:function(t){this.state.annotationHeight!==document.getElementById("react-player").children[0].clientHeight&&this.setState({annotationHeight:document.getElementById("react-player").children[0].clientHeight})}},{key:"render",value:function(){var t,e=this.state,n=e.previewed,r=e.submitted,a=e.annotationWidth,o=e.annotationHeight,g=e.playing,f=e.played,m=e.playbackRate,z=e.duration,x=e.loop,M=e.adding,b=e.focusing,w=e.objects,y=this.props,H=y.url,C=y.width,V=y.height,L=y.mturk,B=y.mturkAction,k=y.mturkAssignmentId,S=o<=1440?o:1440;return t=r?c.default.createElement(u.default,{url:H,width:C,height:V,annotationWidth:a,annotationHeight:o,mturk:L,mturkAction:B,mturkAssignmentId:k,objects:w,onFormSubmit:this.handleFormFinalSubmit,onFormCancelSubmission:this.handleFormCancelSubmission}):n?c.default.createElement("div",null,c.default.createElement("div",{className:"pb-3 clearfix",style:{minWidth:"400px"}},c.default.createElement(p.Button,{outline:!0,disabled:M,color:"primary",onClick:this.handleAddObject,className:"d-flex align-items-center float-left"},c.default.createElement(i.MdAdd,null)," ",M?"Adding Box":"Add Box"),c.default.createElement(p.ButtonGroup,{className:"float-right"},c.default.createElement(p.Button,{disabled:0==this.UndoRedo.previous.length,outline:!0,onClick:this.handleUndo},c.default.createElement(i.MdUndo,null)),c.default.createElement(p.Button,{disabled:0==this.UndoRedo.next.length,outline:!0,onClick:this.handleRedo},c.default.createElement(i.MdRedo,null)))),c.default.createElement(d.default,{objects:w,duration:z,played:f,focusing:b,height:S,onListVideoPause:this.handleListVideoPause,onListObjectItemClick:this.handleListObjectItemClick,onListObjectDelete:this.handleListObjectDelete,onListObjectShowHide:this.handleListObjectShowHide,onListObjectSplit:this.handleListObjectSplit,onListTrajectoryJump:this.handleListTrajectoryJump,onListTrajectoryDelete:this.handleListTrajectoryDelete})):c.default.createElement(v.default,{annotationHeight:o,onPreviewed:this.handlePreviewed}),c.default.createElement("div",null,c.default.createElement("div",{className:"d-flex flex-wrap justify-content-around pt-3",style:{background:"#f6f6f6"}},c.default.createElement("div",{className:"mb-3"},c.default.createElement("div",{style:{width:a}},c.default.createElement("div",{style:{position:"relative"}},c.default.createElement(l.default,{playerRef:this.playerRef,onVideoReady:this.handleVideoReady,onVideoProgress:this.handleVideoProgress,onVideoDuration:this.handleVideoDuration,onVideoEnded:this.handleVideoEnded,url:H,width:a,playing:g,loop:x,playbackRate:m}),c.default.createElement(h.default,{width:a,height:o,objects:w,played:f,focusing:b,adding:M,onCanvasStageMouseMove:this.handleCanvasStageMouseMove,onCanvasStageMouseDown:this.handleCanvasStageMouseDown,onCanvasStageMouseUp:this.handleCanvasStageMouseUp,onCanvasGroupMouseDown:this.handleCanvasGroupMouseDown,onCanvasGroupDragStart:this.handleCanvasGroupDragStart,onCanvasGroupDragEnd:this.handleCanvasGroupDragEnd,onCanvasDotMouseDown:this.handleCanvasDotMouseDown,onCanvasDotDragMove:this.handleCanvasDotDragMove,onCanvasDotDragEnd:this.handleCanvasDotDragEnd})),c.default.createElement(s.default,{playing:g,played:f,playbackRate:m,duration:z,onPlayerControlSliderMouseUp:this.handlePlayerControlSliderMouseUp,onPlayerControlSliderMouseDown:this.handlePlayerControlSliderMouseDown,onPlayerControlSliderChange:this.handlePlayerControlSliderChange,onPlayerControlVideoRewind:this.handlePlayerControlVideoRewind,onPlayerControlVideoPlayPause:this.handlePlayerControlVideoPlayPause,onPlayerControlVideoSpeedChange:this.handlePlayerControlVideoSpeedChange}))),c.default.createElement("div",{className:"mb-3"},t)),r||!n?"":c.default.createElement(p.Row,null,c.default.createElement(p.Col,{className:"text-right mb-3"},c.default.createElement(p.Button,{onClick:this.handleFormSubmit},"I finished this task"))))}}]),e}();e.default=x},function(t,e,n){"use strict";var r=o(n(120)),a=o(n(60));function o(t){return t&&t.__esModule?t:{default:t}}t.exports={ImageTool:a.default,VideoTool:r.default}}]);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_5d62d38be3592dca3a42 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5d62d38be3592dca3a42 */ "dll-reference dll_5d62d38be3592dca3a42"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-popper/lib/Arrow.js":
/*!************************************************!*\
  !*** ./node_modules/react-popper/lib/Arrow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

Arrow.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./node_modules/react-popper/lib/Manager.js":
/*!**************************************************!*\
  !*** ./node_modules/react-popper/lib/Manager.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Manager.childContextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Manager.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Manager.defaultProps = {
  tag: 'div'
};


/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./node_modules/react-popper/lib/Popper.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popper/lib/Popper.js ***!
  \*************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var placements = popper_js__WEBPACK_IMPORTED_MODULE_2__["default"].placements;

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      if (_this.props.target) {
        return _this.props.target;
      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled,
          positionFixed = _props.positionFixed;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }
      this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          positionFixed = _props2.positionFixed,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
    }
  }]);

  return Popper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Popper.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Popper.childContextTypes = {
  popper: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Popper.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(placements),
  eventsEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  positionFixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  // the following check is needed for SSR
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(typeof Element !== 'undefined' ? Element : Object), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getBoundingClientRect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    clientWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    clientHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};


/* harmony default export */ __webpack_exports__["default"] = (Popper);

/***/ }),

/***/ "./node_modules/react-popper/lib/Target.js":
/*!*************************************************!*\
  !*** ./node_modules/react-popper/lib/Target.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

Target.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

/* harmony default export */ __webpack_exports__["default"] = (Target);

/***/ }),

/***/ "./node_modules/react-popper/lib/react-popper.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-popper/lib/react-popper.js ***!
  \*******************************************************/
/*! exports provided: Manager, Target, Popper, placements, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Target */ "./node_modules/react-popper/lib/Target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _Target__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_2__["placements"]; });

/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Arrow */ "./node_modules/react-popper/lib/Arrow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/reactstrap/dist/reactstrap.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.es.js ***!
  \*******************************************************/
/*! exports provided: Alert, Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavDropdown, NavLink, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Badge, Card, CardLink, CardGroup, CardDeck, CardColumns, CardBody, CardBlock, CardFooter, CardHeader, CardImg, CardImgOverlay, Carousel, UncontrolledCarousel, CarouselControl, CarouselItem, CarouselIndicators, CarouselCaption, CardSubtitle, CardText, CardTitle, Popover, PopoverContent, PopoverBody, PopoverTitle, PopoverHeader, Progress, Modal, ModalHeader, ModalBody, ModalFooter, PopperContent, PopperTargetHelper, Tooltip, Table, ListGroup, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupButtonDropdown, InputGroupText, Label, CustomInput, Media, Pagination, PaginationItem, PaginationLink, TabContent, TabPane, Jumbotron, Collapse, ListGroupItem, ListGroupItemText, ListGroupItemHeading, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCollapse, UncontrolledDropdown, UncontrolledNavDropdown, UncontrolledTooltip, Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return NavbarBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarToggler", function() { return NavbarToggler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return NavDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return BreadcrumbItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDropdown", function() { return ButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return ButtonToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownToggle", function() { return DropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLink", function() { return CardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return CardGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDeck", function() { return CardDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardColumns", function() { return CardColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBody", function() { return CardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBlock", function() { return CardBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return CardImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImgOverlay", function() { return CardImgOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledCarousel", function() { return UncontrolledCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselControl", function() { return CarouselControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return CarouselItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselIndicators", function() { return CarouselIndicators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCaption", function() { return CarouselCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSubtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return CardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContent", function() { return PopoverContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverBody", function() { return PopoverBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTitle", function() { return PopoverTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverHeader", function() { return PopoverHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return ModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return ModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopperContent", function() { return PopperContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopperTargetHelper", function() { return PopperTargetHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return ListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFeedback", function() { return FormFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return FormText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupAddon", function() { return InputGroupAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupButton", function() { return InputGroupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupButtonDropdown", function() { return InputGroupButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupText", function() { return InputGroupText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInput", function() { return CustomInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationItem", function() { return PaginationItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationLink", function() { return PaginationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return TabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return Jumbotron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return ListGroupItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItemText", function() { return ListGroupItemText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItemHeading", function() { return ListGroupItemHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledAlert", function() { return UncontrolledAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledButtonDropdown", function() { return UncontrolledButtonDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledCollapse", function() { return UncontrolledCollapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledDropdown", function() { return UncontrolledDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledNavDropdown", function() { return UncontrolledNavDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UncontrolledTooltip", function() { return UncontrolledTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return utils; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isfunction */ "./node_modules/lodash.isfunction/index.js");
/* harmony import */ var lodash_isfunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isfunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.isobject */ "./node_modules/lodash.isobject/index.js");
/* harmony import */ var lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isobject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/react-popper.js");
/* harmony import */ var lodash_tonumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.tonumber */ "./node_modules/lodash.tonumber/index.js");
/* harmony import */ var lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_tonumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");










// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);

  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

var globalCssModule = void 0;

function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

var warned = {};

function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}

function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
    }

    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(undefined, [props, propName, componentName].concat(rest));
  };
}

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
var TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];

var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};

var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};

var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function findDOMElements(target) {
  if (lodash_isfunction__WEBPACK_IMPORTED_MODULE_3___default()(target)) {
    return target();
  }
  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll('#' + target);
    }
    if (!selection.length) {
      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
    }
    return selection;
  }
  return target;
}

function isArrayOrNodeList(els) {
  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}

function getTarget(target) {
  var els = findDOMElements(target);
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}

var defaultToggleEvents = ['touchstart', 'click'];

function addMultipleEventListeners(_els, handler, _events) {
  var els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;
  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');
  }
  events.forEach(function (event) {
    els.forEach(function (el) {
      el.addEventListener(event, handler);
    });
  });
  return function removeEvents() {
    events.forEach(function (event) {
      els.forEach(function (el) {
        el.removeEventListener(event, handler);
      });
    });
  };
}

var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = Object.freeze({
	getScrollbarWidth: getScrollbarWidth,
	setScrollbarWidth: setScrollbarWidth,
	isBodyOverflowing: isBodyOverflowing,
	getOriginalBodyPadding: getOriginalBodyPadding,
	conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
	setGlobalCssModule: setGlobalCssModule,
	mapToCssModules: mapToCssModules,
	omit: omit,
	pick: pick,
	warnOnce: warnOnce,
	deprecated: deprecated,
	DOMElement: DOMElement,
	TransitionTimeouts: TransitionTimeouts,
	TransitionPropTypeKeys: TransitionPropTypeKeys,
	TransitionStatuses: TransitionStatuses,
	keyCodes: keyCodes,
	PopperPlacements: PopperPlacements,
	canUseDOM: canUseDOM,
	findDOMElements: findDOMElements,
	isArrayOrNodeList: isArrayOrNodeList,
	getTarget: getTarget,
	defaultToggleEvents: defaultToggleEvents,
	addMultipleEventListeners: addMultipleEventListeners,
	focusableElements: focusableElements
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, fluid ? 'container-fluid' : 'container'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

var propTypes$1 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  noGutters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$1 = {
  tag: 'div'
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);

var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes$2 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  widths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);

  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, colClasses), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;

var propTypes$3 = {
  light: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "dark"'),
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sticky: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggleable: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]), 'Please use the prop "expand"'),
  expand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + expand;
};

// To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
var toggleableToExpand = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl'
};

var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === undefined || toggleable === 'xl') {
    return false;
  } else if (toggleable === false) {
    return 'navbar-expand';
  }

  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
};

var Navbar = function Navbar(props) {
  var _classNames;

  var toggleable = props.toggleable,
      expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      inverse = props.inverse,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
    'navbar-light': light,
    'navbar-dark': inverse || dark
  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$4 = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-brand'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;

var propTypes$5 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var defaultProps$5 = {
  tag: 'button',
  type: 'button'
};

var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
  );
};

NavbarToggler.propTypes = propTypes$5;
NavbarToggler.defaultProps = defaultProps$5;

var propTypes$6 = {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pills: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  justified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  card: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$6 = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return 'flex-' + vertical + '-column';
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Nav.propTypes = propTypes$6;
Nav.defaultProps = defaultProps$6;

var propTypes$7 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$7 = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'nav-item', active ? 'active' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

NavItem.propTypes = propTypes$7;
NavItem.defaultProps = defaultProps$7;

/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var propTypes$8 = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dropup: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "direction" with the value "up".'),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']),
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  nav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append'])]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setActiveFromChild: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$8 = {
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};

var childContextTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var Dropdown = function (_React$Component) {
  inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    classCallCheck(this, Dropdown);

    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (keyCodes.tab === e.which || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;

      var container = this.getContainer();

      if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
      var disabledClass = mapToCssModules('disabled', this.props.cssModule);

      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
      if (!items.length) return;

      var index = -1;

      var charPressed = String.fromCharCode(e.which).toLowerCase();

      for (var i = 0; i < items.length; i += 1) {
        var firstLetter = items[i].textContent && items[i].textContent[0].toLowerCase();
        if (firstLetter === charPressed || items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'setActiveFromChild', 'active', 'addonType']);

      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;

      attrs.tag = attrs.tag || (nav ? 'li' : 'div');

      var subItemIsActive = false;
      if (setActiveFromChild) {
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, direction !== 'down' && 'drop' + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Manager"], _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
    }
  }]);
  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Dropdown.propTypes = propTypes$8;
Dropdown.defaultProps = defaultProps$8;
Dropdown.childContextTypes = childContextTypes;

function NavDropdown(props) {
  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ nav: true }, props));
}

var propTypes$9 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var defaultProps$9 = {
  tag: 'a'
};

var NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);

  function NavLink(props) {
    classCallCheck(this, NavLink);

    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(NavLink, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);


      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
    }
  }]);
  return NavLink;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

NavLink.propTypes = propTypes$9;
NavLink.defaultProps = defaultProps$9;

var propTypes$10 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$10 = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'children', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className), cssModule);

  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('breadcrumb', listClassName), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, { className: classes, 'aria-label': label }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      ListTag,
      { className: listClasses },
      children
    )
  );
};

Breadcrumb.propTypes = propTypes$10;
Breadcrumb.defaultProps = defaultProps$10;

var propTypes$11 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$11 = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, 'aria-current': active ? 'page' : undefined }));
};

BreadcrumbItem.propTypes = propTypes$11;
BreadcrumbItem.defaultProps = defaultProps$11;

var propTypes$12 = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$12 = {
  color: 'secondary',
  tag: 'button'
};

var Button = function (_React$Component) {
  inherits(Button, _React$Component);

  function Button(props) {
    classCallCheck(this, Button);

    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          block = _props.block,
          className = _props.className,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);


      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick
      }));
    }
  }]);
  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Button.propTypes = propTypes$12;
Button.defaultProps = defaultProps$12;

var propTypes$13 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ group: true }, props));
};

ButtonDropdown.propTypes = propTypes$13;

var propTypes$14 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$13 = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonGroup.propTypes = propTypes$14;
ButtonGroup.defaultProps = defaultProps$13;

var propTypes$15 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$14 = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'btn-toolbar'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ButtonToolbar.propTypes = propTypes$15;
ButtonToolbar.defaultProps = defaultProps$14;

var propTypes$16 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  divider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var contextTypes = {
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var defaultProps$15 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    classCallCheck(this, DropdownItem);

    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.getTabIndex = _this.getTabIndex.bind(_this);
    return _this;
  }

  createClass(DropdownItem, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);
  return DropdownItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DropdownItem.propTypes = propTypes$16;
DropdownItem.defaultProps = defaultProps$15;
DropdownItem.contextTypes = contextTypes;

var propTypes$17 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  persist: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$16 = {
  tag: 'div',
  flip: true
};

var contextTypes$1 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var noFlipModifier = { flip: { enabled: false } };

var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      modifiers = props.modifiers,
      persist = props.persist,
      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip', 'modifiers', 'persist']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);

  var Tag = tag;

  if (persist || context.isOpen && !context.inNavbar) {
    Tag = react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"];

    var position1 = directionPositionMap[context.direction] || 'bottom';
    var position2 = right ? 'end' : 'start';
    attrs.placement = position1 + '-' + position2;
    attrs.component = tag;
    attrs.modifiers = !flip ? _extends({}, modifiers, noFlipModifier) : modifiers;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    tabIndex: '-1',
    role: 'menu'
  }, attrs, {
    'aria-hidden': !context.isOpen,
    className: classes,
    'x-placement': attrs.placement
  }));
};

DropdownMenu.propTypes = propTypes$17;
DropdownMenu.defaultProps = defaultProps$16;
DropdownMenu.contextTypes = contextTypes$1;

var propTypes$18 = {
  caret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  'aria-haspopup': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  split: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  nav: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$17 = {
  'aria-haspopup': true,
  color: 'secondary'
};

var contextTypes$2 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  inNavbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

var DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    classCallCheck(this, DropdownToggle);

    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  createClass(DropdownToggle, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );

      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          'aria-expanded': this.context.isOpen,
          children: children
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Target"], _extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        'aria-expanded': this.context.isOpen,
        children: children
      }));
    }
  }]);
  return DropdownToggle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DropdownToggle.propTypes = propTypes$18;
DropdownToggle.defaultProps = defaultProps$17;
DropdownToggle.contextTypes = contextTypes$2;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var PropTypes$1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes2 = _interopRequireDefault(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function (props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
        }
      }

      return null;
    };
  }

  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  }).isRequired]);

  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    active: _propTypes2.default.string
  }), _propTypes2.default.shape({
    enter: _propTypes2.default.string,
    enterDone: _propTypes2.default.string,
    enterActive: _propTypes2.default.string,
    exit: _propTypes2.default.string,
    exitDone: _propTypes2.default.string,
    exitActive: _propTypes2.default.string
  })]);
});

unwrapExports(PropTypes$1);

var Transition_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

  var PropTypes$$1 = _interopRequireWildcard(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a);

  var _react2 = _interopRequireDefault(react__WEBPACK_IMPORTED_MODULE_0___default.a);

  var _reactDom2 = _interopRequireDefault(react_dom__WEBPACK_IMPORTED_MODULE_5___default.a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
  var EXITED = exports.EXITED = 'exited';
  var ENTERING = exports.ENTERING = 'entering';
  var ENTERED = exports.ENTERED = 'entered';
  var EXITING = exports.EXITING = 'exiting';

  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      var parentGroup = context.transitionGroup;
      // In the context of a TransitionGroup all enters are really appears
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = { status: initialStatus };

      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return { transitionGroup: null }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _ref = this.pendingState || this.state,
          status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({ status: EXITED });
        }
        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;

      var exit = void 0,
          enter = void 0,
          appear = void 0;

      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }
      return { exit: exit, enter: enter, appear: appear };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null;
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({ status: UNMOUNTED });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;

      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

      var timeouts = this.getTimeouts();

      // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
      if (!mounting && !enter) {
        this.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);

      this.safeSetState({ status: ENTERING }, function () {
        _this2.props.onEntering(node, appearing);

        // FIXME: appear timeout?
        _this2.onTransitionEnd(node, timeouts.enter, function () {
          _this2.safeSetState({ status: ENTERED }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;

      var timeouts = this.getTimeouts();

      // no exit animation skip right to EXITED
      if (!exit) {
        this.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);

      this.safeSetState({ status: EXITING }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({ status: EXITED }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
      var _this4 = this;

      // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition
      this.pendingState = nextState;

      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, function () {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
          children = _props.children,
          childProps = _objectWithoutProperties(_props, ['children']);
      // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  }(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {}
  };

  Transition.propTypes =  true ? {
    /**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes$$1.bool,

    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes$$1.bool,

    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes$$1.bool,

    /**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */
    appear: PropTypes$$1.bool,

    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes$$1.bool,

    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes$$1.bool,

    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var pt = PropTypes$1.timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;
      return pt.apply(undefined, [props].concat(args));
    },

    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes$$1.func,

    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes$$1.func,

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes$$1.func,

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes$$1.func,

    /**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes$$1.func,

    /**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes$$1.func,

    /**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes$$1.func
  } : undefined;

  // Name the function so it is clearer in the documentation
  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop
  };

  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  exports.default = Transition;
});

var Transition = unwrapExports(Transition_1);

var propTypes$19 = _extends({}, Transition.propTypes, {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  baseClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  baseClassActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
});

var defaultProps$18 = _extends({}, Transition.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children', 'innerRef']);

  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
  // empty object "{}". This is the result of the `react-transition-group` babel
  // configuration settings. Therefore, to ensure that production builds work without
  // error, we can either explicitly define keys or use the Transition.defaultProps.
  // Using the Transition.defaultProps excludes any required props. Thus, the best
  // solution is to explicitly define required props in our utilities and reference these.
  // This also gives us more flexibility in the future to remove the prop-types
  // dependency in distribution builds (Similar to how `react-transition-group` does).
  // Note: Without omitting the `react-transition-group` props, the resulting child
  // Tag component would inherit the Transition properties as attributes for the HTML
  // element which results in errors/warnings for non-valid attributes.

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Transition,
    transitionProps,
    function (status) {
      var isActive = status === 'entered';
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, baseClass, isActive && baseClassActive), cssModule);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tag,
        _extends({ className: classes }, childProps, { ref: innerRef }),
        children
      );
    }
  );
}

Fade.propTypes = propTypes$19;
Fade.defaultProps = defaultProps$18;

var propTypes$20 = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  pill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$19 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Badge.propTypes = propTypes$20;
Badge.defaultProps = defaultProps$19;

var propTypes$21 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  block: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the props "body"'),
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var defaultProps$20 = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag', 'innerRef']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, ref: innerRef }));
};

Card.propTypes = propTypes$21;
Card.defaultProps = defaultProps$20;

var propTypes$22 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$21 = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-group'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardGroup.propTypes = propTypes$22;
CardGroup.defaultProps = defaultProps$21;

var propTypes$23 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$22 = {
  tag: 'div'
};

var CardDeck = function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-deck'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardDeck.propTypes = propTypes$23;
CardDeck.defaultProps = defaultProps$22;

var propTypes$24 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$23 = {
  tag: 'div'
};

var CardColumns = function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-columns'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardColumns.propTypes = propTypes$24;
CardColumns.defaultProps = defaultProps$23;

var propTypes$25 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$24 = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardBody.propTypes = propTypes$25;
CardBody.defaultProps = defaultProps$24;

function CardBlock(props) {
  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, props);
}

var propTypes$26 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$25 = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-link'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
};

CardLink.propTypes = propTypes$26;
CardLink.defaultProps = defaultProps$25;

var propTypes$27 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$26 = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-footer'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardFooter.propTypes = propTypes$27;
CardFooter.defaultProps = defaultProps$26;

var propTypes$28 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$27 = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-header'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardHeader.propTypes = propTypes$28;
CardHeader.defaultProps = defaultProps$27;

var propTypes$29 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$28 = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);


  var cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, cardImgClassName), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImg.propTypes = propTypes$29;
CardImg.defaultProps = defaultProps$28;

var propTypes$30 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$29 = {
  tag: 'div'
};

var CardImgOverlay = function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-img-overlay'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardImgOverlay.propTypes = propTypes$30;
CardImgOverlay.defaultProps = defaultProps$29;

var CarouselItem = function (_React$Component) {
  inherits(CarouselItem, _React$Component);

  function CarouselItem(props) {
    classCallCheck(this, CarouselItem);

    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

    _this.state = {
      startAnimation: false
    };

    _this.onEnter = _this.onEnter.bind(_this);
    _this.onEntering = _this.onEntering.bind(_this);
    _this.onExit = _this.onExit.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(CarouselItem, [{
    key: 'onEnter',
    value: function onEnter(node, isAppearing) {
      this.setState({ startAnimation: false });
      this.props.onEnter(node, isAppearing);
    }
  }, {
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = node.offsetHeight;
      this.setState({ startAnimation: true });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ startAnimation: false });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      this.setState({ startAnimation: true });
      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isIn = _props.in,
          children = _props.children,
          cssModule = _props.cssModule,
          slide = _props.slide,
          Tag = _props.tag,
          className = _props.className,
          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          enter: slide,
          exit: slide,
          'in': isIn,
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var direction = _this2.context.direction;

          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
          var itemClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Tag,
            { className: itemClasses },
            children
          );
        }
      );
    }
  }]);
  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

CarouselItem.propTypes = _extends({}, Transition.propTypes, {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  in: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  slide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});

CarouselItem.contextTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var Carousel = function (_React$Component) {
  inherits(Carousel, _React$Component);

  function Carousel(props) {
    classCallCheck(this, Carousel);

    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.renderItems = _this.renderItems.bind(_this);
    _this.hoverStart = _this.hoverStart.bind(_this);
    _this.hoverEnd = _this.hoverEnd.bind(_this);
    _this.state = {
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  createClass(Carousel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { direction: this.state.direction };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      }

      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setInterval(nextProps);
      // Calculate the direction to turn
      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
        this.setState({ direction: 'right' });
      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
        this.setState({ direction: 'left' });
      } else if (this.props.activeIndex > nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'left' : 'right' });
      } else if (this.props.activeIndex !== nextProps.activeIndex) {
        this.setState({ direction: this.state.indicatorClicked ? 'right' : 'left' });
      }
      this.setState({ indicatorClicked: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    }
  }, {
    key: 'setInterval',
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      // make sure not to have multiple intervals going...
      this.clearInterval();
      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    })
  }, {
    key: 'clearInterval',
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    })
  }, {
    key: 'hoverStart',
    value: function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }
      if (this.props.mouseEnter) {
        var _props;

        (_props = this.props).mouseEnter.apply(_props, arguments);
      }
    }
  }, {
    key: 'hoverEnd',
    value: function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }
      if (this.props.mouseLeave) {
        var _props2;

        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { role: 'listbox', className: className },
        carouselItems.map(function (item, index) {
          var isIn = index === _this2.props.activeIndex;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(item, {
            in: isIn,
            slide: slide
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          cssModule = _props3.cssModule,
          slide = _props3.slide,
          className = _props3.className;

      var outerClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel', slide && 'slide'), cssModule);

      var innerClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('carousel-inner'), cssModule);

      // filter out booleans, null, or undefined
      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });

      var slidesOnly = children.every(function (child) {
        return child.type === CarouselItem;
      });

      // Rendering only slides
      if (slidesOnly) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(children, innerClasses)
        );
      }

      // Rendering slides and controls
      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
          this.renderItems(_carouselItems, innerClasses),
          _controlLeft,
          _controlRight
        );
      }

      // Rendering indicators, slides and controls
      var indicators = children[0];
      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({ indicatorClicked: true }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };
      var wrappedIndicators = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(indicators, { onClickHandler: wrappedOnClick });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
        wrappedIndicators,
        this.renderItems(carouselItems, innerClasses),
        controlLeft,
        controlRight
      );
    }
  }]);
  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true
};

Carousel.childContextTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;


  var anchorClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-control-' + direction), cssModule);

  var iconClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('carousel-control-' + direction + '-icon'), cssModule);

  var screenReaderClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('sr-only'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'a',
    {
      className: anchorClasses,
      role: 'button',
      tabIndex: '0',
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      { className: screenReaderClasses },
      directionText || direction
    )
  );
};

CarouselControl.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  directionText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;


  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()({ active: activeIndex === idx }), cssModule);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('li', {
      key: '' + (item.key || item.src) + item.caption + item.altText,
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'ol',
    { className: listClasses },
    indicators
  );
};

CarouselIndicators.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: classes },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'h3',
      null,
      captionHeader
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'p',
      null,
      captionText
    )
  );
};

CarouselCaption.propTypes = {
  captionHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  captionText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var propTypes$31 = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  indicators: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  goToIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var UncontrolledCarousel = function (_Component) {
  inherits(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    classCallCheck(this, UncontrolledCarousel);

    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));

    _this.animating = false;
    _this.state = { activeIndex: 0 };
    _this.next = _this.next.bind(_this);
    _this.previous = _this.previous.bind(_this);
    _this.goToIndex = _this.goToIndex.bind(_this);
    _this.onExiting = _this.onExiting.bind(_this);
    _this.onExited = _this.onExited.bind(_this);
    return _this;
  }

  createClass(UncontrolledCarousel, [{
    key: 'onExiting',
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: 'onExited',
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'previous',
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  }, {
    key: 'goToIndex',
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoPlay = _props.autoPlay,
          indicators = _props.indicators,
          controls = _props.controls,
          items = _props.items,
          goToIndex = _props.goToIndex,
          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
      var activeIndex = this.state.activeIndex;


      var slides = items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          CarouselItem,
          {
            onExiting: _this2.onExiting,
            onExited: _this2.onExited,
            key: item.src
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { className: 'd-block w-100', src: item.src, alt: item.altText }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.header || item.caption })
        );
      });

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Carousel,
        _extends({
          activeIndex: activeIndex,
          next: this.next,
          previous: this.previous,
          ride: autoPlay ? 'carousel' : undefined
        }, props),
        indicators && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselIndicators, {
          items: items,
          activeIndex: props.activeIndex || activeIndex,
          onClickHandler: goToIndex || this.goToIndex
        }),
        slides,
        controls && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselControl, {
          direction: 'prev',
          directionText: 'Previous',
          onClickHandler: props.previous || this.previous
        }),
        controls && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CarouselControl, {
          direction: 'next',
          directionText: 'Next',
          onClickHandler: props.next || this.next
        })
      );
    }
  }]);
  return UncontrolledCarousel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UncontrolledCarousel.propTypes = propTypes$31;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};

var propTypes$32 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$30 = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-subtitle'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardSubtitle.propTypes = propTypes$32;
CardSubtitle.defaultProps = defaultProps$30;

var propTypes$33 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$31 = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardText.propTypes = propTypes$33;
CardText.defaultProps = defaultProps$31;

var propTypes$34 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$32 = {
  tag: 'h5'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'card-title'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

CardTitle.propTypes = propTypes$34;
CardTitle.defaultProps = defaultProps$32;

var propTypes$35 = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bsSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

function CustomInput(props) {
  var className = props.className,
      label = props.label,
      inline = props.inline,
      valid = props.valid,
      invalid = props.invalid,
      cssModule = props.cssModule,
      children = props.children,
      bsSize = props.bsSize,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'label', 'inline', 'valid', 'invalid', 'cssModule', 'children', 'bsSize', 'innerRef']);


  var type = attributes.type;

  var customClass = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'custom-' + type, bsSize ? 'custom-' + type + '-' + bsSize : false), cssModule);

  var validationClassNames = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(invalid && 'is-invalid', valid && 'is-valid'), cssModule);

  if (type === 'select') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'select',
      _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, customClass) }),
      children
    );
  }

  if (type === 'file') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      { className: customClass },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, mapToCssModules('custom-file-input', cssModule)) })),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'label',
        { className: mapToCssModules('custom-file-label', cssModule), htmlFor: attributes.id },
        label || 'Choose file'
      )
    );
  }

  if (type !== 'checkbox' && type !== 'radio') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, { ref: innerRef, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, customClass) }));
  }

  var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(customClass, mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('custom-control', { 'custom-control-inline': inline }), cssModule));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: wrapperClasses },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({}, attributes, {
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(validationClassNames, mapToCssModules('custom-control-input', cssModule))
    })),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'label',
      { className: mapToCssModules('custom-control-label', cssModule), htmlFor: attributes.id },
      label
    ),
    children
  );
}

CustomInput.propTypes = propTypes$35;

var propTypes$36 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  arrowClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  fallbackPlacement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  container: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]),
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]).isRequired,
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$33 = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {}
};

var childContextTypes$1 = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var PopperContent = function (_React$Component) {
  inherits(PopperContent, _React$Component);

  function PopperContent(props) {
    classCallCheck(this, PopperContent);

    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.setTargetNode = _this.setTargetNode.bind(_this);
    _this.getTargetNode = _this.getTargetNode.bind(_this);
    _this.state = {};
    return _this;
  }

  createClass(PopperContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this.setTargetNode,
          getTargetNode: this.getTargetNode
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      } else if (this._element) {
        // rerender
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'setTargetNode',
    value: function setTargetNode(node) {
      this.targetNode = node;
    }
  }, {
    key: 'getTargetNode',
    value: function getTargetNode() {
      return this.targetNode;
    }
  }, {
    key: 'getContainerNode',
    value: function getContainerNode() {
      return getTarget(this.props.container);
    }
  }, {
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({ placement: data.placement });
      }
      return data;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.container !== 'inline') {
        if (this.props.isOpen) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this._element) {
        this.getContainerNode().removeChild(this._element);
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(this._element);
        this._element = null;
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._element = document.createElement('div');
      this.getContainerNode().appendChild(this._element);
      this.renderIntoSubtree();
      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          flip = _props.flip,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          _arrowClassName = _props.arrowClassName,
          hideArrow = _props.hideArrow,
          className = _props.className,
          tag = _props.tag,
          container = _props.container,
          modifiers = _props.modifiers,
          boundariesElement = _props.boundariesElement,
          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'arrowClassName', 'hideArrow', 'className', 'tag', 'container', 'modifiers', 'boundariesElement']);

      var arrowClassName = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('arrow', _arrowClassName), cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var popperClassName = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var extendedModifiers = _extends({
        offset: { offset: offset },
        flip: { enabled: flip, behavior: fallbackPlacement },
        preventOverflow: { boundariesElement: boundariesElement },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      }, modifiers);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_popper__WEBPACK_IMPORTED_MODULE_6__["Popper"],
        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName, 'x-placement': this.state.placement || attrs.placement }),
        children,
        !hideArrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_6__["Arrow"], { className: arrowClassName })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      this.setTargetNode(getTarget(this.props.target));

      if (this.props.container === 'inline') {
        return this.props.isOpen ? this.renderChildren() : null;
      }

      return null;
    }
  }]);
  return PopperContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PopperContent.propTypes = propTypes$36;
PopperContent.defaultProps = defaultProps$33;
PopperContent.childContextTypes = childContextTypes$1;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

PopperTargetHelper.propTypes = {
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]).isRequired
};

var propTypes$37 = {
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(PopperPlacements),
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]).isRequired,
  container: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]),
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  innerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};

var defaultProps$34 = {
  isOpen: false,
  hideArrow: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {}
};

var Popover = function (_React$Component) {
  inherits(Popover, _React$Component);

  function Popover(props) {
    classCallCheck(this, Popover);

    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.getRef = _this.getRef.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this._popover = ref;
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.props.isOpen) {
          this.toggle(e);
        }
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$37));
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('popover-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('popover', 'show', this.props.className), this.props.cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          boundariesElement: this.props.boundariesElement
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
      );
    }
  }]);
  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Popover.propTypes = propTypes$37;
Popover.defaultProps = defaultProps$34;

var propTypes$38 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$35 = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'popover-header'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverHeader.propTypes = propTypes$38;
PopoverHeader.defaultProps = defaultProps$35;

function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopoverHeader, props);
}

var propTypes$39 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$36 = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'popover-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PopoverBody.propTypes = propTypes$39;
PopoverBody.defaultProps = defaultProps$36;

function PopoverContent(props) {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopoverBody, props);
}

var propTypes$40 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  bar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  multi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  animated: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  barClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$37 = {
  tag: 'div',
  value: 0,
  max: 100
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);


  var percent = lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default()(value) / lodash_tonumber__WEBPACK_IMPORTED_MODULE_7___default()(max) * 100;

  var progressClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'progress'), cssModule);

  var progressBarClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);

  var ProgressBar = multi ? children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
    className: progressBarClasses,
    style: { width: percent + '%' },
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max,
    children: children
  });

  if (bar) {
    return ProgressBar;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
};

Progress.propTypes = propTypes$40;
Progress.defaultProps = defaultProps$37;

var propTypes$42 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var Portal = function (_React$Component) {
  inherits(Portal, _React$Component);

  function Portal() {
    classCallCheck(this, Portal);
    return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Portal.propTypes = propTypes$42;

function noop() {}

var FadePropTypes = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Fade.propTypes);

var propTypes$41 = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['static'])]),
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  modalClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backdropClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  external: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var propsToOmit = Object.keys(propTypes$41);

var defaultProps$38 = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition
  }
};

var Modal = function (_React$Component) {
  inherits(Modal, _React$Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_this);
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.onOpened = _this.onOpened.bind(_this);
    _this.onClosed = _this.onClosed.bind(_this);

    _this.state = {
      isOpen: props.isOpen
    };

    if (props.isOpen) {
      _this.init();
    }
    return _this;
  }

  createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }

      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }

      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this.state.isOpen) {
        this.destroy();
      }

      this._isMounted = false;
    }
  }, {
    key: 'onOpened',
    value: function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
    }
  }, {
    key: 'onClosed',
    value: function onClosed(node) {
      // so all methods get called before it is unmounted
      this.props.onClosed();
      (this.props.modalTransition.onExited || noop)(node);
      this.destroy();

      if (this._isMounted) {
        this.setState({ isOpen: false });
      }
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'getFocusableChildren',
    value: function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    }
  }, {
    key: 'getFocusedChild',
    value: function getFocusedChild() {
      var currentFocus = void 0;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }
      return currentFocus;
    }

    // not mouseUp because scrollbar fires it, shouldn't close when user scrolls

  }, {
    key: 'handleBackdropClick',
    value: function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        if (!this.props.isOpen || this.props.backdrop !== true) return;

        var container = this._dialog;

        if (e.target && !container.contains(e.target) && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (e.which !== 9) return;

      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      var currentFocus = this.getFocusedChild();

      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    }
  }, {
    key: 'handleBackdropMouseDown',
    value: function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._originalBodyPadding = getOriginalBodyPadding();

      conditionallyUpdateScrollbar();

      document.body.appendChild(this._element);
      if (!this.bodyClassAdded) {
        document.body.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
        this.bodyClassAdded = true;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._element) {
        document.body.removeChild(this._element);
        this._element = null;
      }

      if (this._triggeringElement) {
        this._triggeringElement.focus();
        this._triggeringElement = null;
      }

      if (this.bodyClassAdded) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
        // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
        var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
        this.bodyClassAdded = false;
      }

      setScrollbarWidth(this._originalBodyPadding);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _classNames,
          _this2 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        _extends({}, attributes, {
          className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
          role: 'document',
          ref: function ref(c) {
            _this2._dialog = c;
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-content', this.props.contentClassName), this.props.cssModule)
          },
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            wrapClassName = _props.wrapClassName,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy,
            external = _props.external,
            innerRef = _props.innerRef;


        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: { display: 'block' },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };

        var hasTransition = this.props.fade;
        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = hasTransition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, _extends({}, backdropTransition, {
          'in': isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-backdrop', backdropClassName), cssModule)
        })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal-backdrop', 'show', backdropClassName), cssModule) });

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Portal,
          { node: this._element },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: mapToCssModules(wrapClassName) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              Fade,
              _extends({}, modalAttributes, modalTransition, {
                'in': isOpen,
                onEntered: this.onOpened,
                onExited: this.onClosed,
                cssModule: cssModule,
                className: mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('modal', modalClassName), cssModule),
                innerRef: innerRef
              }),
              external,
              this.renderModalDialog()
            ),
            Backdrop
          )
        );
      }

      return null;
    }
  }]);
  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Modal.propTypes = propTypes$41;
Modal.defaultProps = defaultProps$38;

var propTypes$43 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  wrapTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  closeAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  charCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

var defaultProps$39 = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel', 'charCode']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-header'), cssModule);

  if (toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'button',
      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        closeIcon
      )
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      { className: mapToCssModules('modal-title', cssModule) },
      children
    ),
    closeButton
  );
};

ModalHeader.propTypes = propTypes$43;
ModalHeader.defaultProps = defaultProps$39;

var propTypes$44 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$40 = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-body'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalBody.propTypes = propTypes$44;
ModalBody.defaultProps = defaultProps$40;

var propTypes$45 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$41 = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'modal-footer'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ModalFooter.propTypes = propTypes$45;
ModalFooter.defaultProps = defaultProps$41;

var propTypes$46 = {
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(PopperPlacements),
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]).isRequired,
  container: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, DOMElement]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  boundariesElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  innerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  arrowClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  autohide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  placementPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, hide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var DEFAULT_DELAYS$1 = {
  show: 0,
  hide: 250
};

var defaultProps$42 = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS$1,
  autohide: true,
  toggle: function toggle() {}
};

var Tooltip = function (_React$Component) {
  inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    classCallCheck(this, Tooltip);

    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_this);
    return _this;
  }

  createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = getTarget(this.props.target);
      this.addTargetEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeTargetEvents();
    }
  }, {
    key: 'onMouseOverTooltip',
    value: function onMouseOverTooltip(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    }
  }, {
    key: 'onMouseLeaveTooltip',
    value: function onMouseLeaveTooltip(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onMouseOverTooltipContent',
    value: function onMouseOverTooltipContent() {
      if (this.props.autohide) {
        return;
      }
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }, {
    key: 'onMouseLeaveTooltipContent',
    value: function onMouseLeaveTooltipContent(e) {
      if (this.props.autohide) {
        return;
      }
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  }, {
    key: 'onEscKeyDown',
    value: function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'show',
    value: function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'hide',
    value: function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.toggle(e);
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e.target === this._target || this._target.contains(e.target)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.toggle(e);
        }
      } else if (this.props.isOpen && e.target.getAttribute('role') !== 'tooltip') {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    }
  }, {
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      var _this2 = this;

      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');
        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1) {
            ['click', 'touchstart'].forEach(function (event) {
              return document.addEventListener(event, _this2.handleDocumentClick, true);
            });
          }
          if (triggers.indexOf('hover') > -1) {
            this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
            this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
          }
          if (triggers.indexOf('focus') > -1) {
            this._target.addEventListener('focusin', this.show, true);
            this._target.addEventListener('focusout', this.hide, true);
          }
          this._target.addEventListener('keydown', this.onEscKeyDown, true);
        }
      } else {
        this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
        this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
        this._target.addEventListener('keydown', this.onEscKeyDown, true);
        this._target.addEventListener('focusin', this.show, true);
        this._target.addEventListener('focusout', this.hide, true);
        ['click', 'touchstart'].forEach(function (event) {
          return document.addEventListener(event, _this2.handleDocumentClick, true);
        });
      }
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      var _this3 = this;

      this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
      this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
      this._target.addEventListener('keydown', this.onEscKeyDown, true);
      this._target.addEventListener('focusin', this.show, true);
      this._target.addEventListener('focusout', this.hide, true);

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = omit(this.props, Object.keys(propTypes$46));
      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tooltip-inner', this.props.innerClassName), this.props.cssModule);

      var popperClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tooltip', 'show', this.props.className), this.props.cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        PopperContent,
        {
          className: popperClasses,
          target: this.props.target,
          isOpen: this.props.isOpen,
          hideArrow: this.props.hideArrow,
          boundariesElement: this.props.boundariesElement,
          placement: this.props.placement,
          placementPrefix: this.props.placementPrefix,
          arrowClassName: this.props.arrowClassName,
          container: this.props.container,
          modifiers: this.props.modifiers,
          offset: this.props.offset,
          cssModule: this.props.cssModule
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _extends({}, attributes, {
          ref: this.props.innerRef,
          className: classes,
          role: 'tooltip',
          'aria-hidden': this.props.isOpen,
          onMouseOver: this.onMouseOverTooltipContent,
          onMouseLeave: this.onMouseLeaveTooltipContent,
          onKeyDown: this.onEscKeyDown
        }))
      );
    }
  }]);
  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tooltip.propTypes = propTypes$46;
Tooltip.defaultProps = defaultProps$42;

var propTypes$47 = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bordered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  borderless: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  striped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "dark"'),
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  responsiveTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$43 = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      inverse = props.inverse,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'borderless', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);

  var table = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));

  if (responsive) {
    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      ResponsiveTag,
      { className: responsiveClassName },
      table
    );
  }

  return table;
};

Table.propTypes = propTypes$47;
Table.defaultProps = defaultProps$43;

var propTypes$48 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  flush: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$44 = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroup.propTypes = propTypes$48;
ListGroup.defaultProps = defaultProps$44;

var propTypes$49 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$45 = {
  tag: 'form'
};

var Form = function (_Component) {
  inherits(Form, _Component);

  function Form(props) {
    classCallCheck(this, Form);

    var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  createClass(Form, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'submit',
    value: function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);


      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, inline ? 'form-inline' : false), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Form.propTypes = propTypes$49;
Form.defaultProps = defaultProps$45;

var propTypes$50 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var defaultProps$46 = {
  tag: 'div',
  valid: undefined
};

var FormFeedback = function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tooltip', 'tag']);


  var validMode = tooltip ? 'tooltip' : 'feedback';

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, valid ? 'valid-' + validMode : 'invalid-' + validMode), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormFeedback.propTypes = propTypes$50;
FormFeedback.defaultProps = defaultProps$46;

var propTypes$51 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  row: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  check: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$47 = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'position-relative', row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormGroup.propTypes = propTypes$51;
FormGroup.defaultProps = defaultProps$47;

var propTypes$52 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$48 = {
  tag: 'small',
  color: 'muted'
};

var FormText = function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

FormText.propTypes = propTypes$52;
FormText.defaultProps = defaultProps$48;

/* eslint react/prefer-stateless-function: 0 */

var propTypes$53 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  bsSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  state: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  static: deprecated(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, 'Please use the prop "plaintext"'),
  plaintext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$49 = {
  type: 'text'
};

var Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.getRef = _this.getRef.bind(_this);
    _this.focus = _this.focus.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'getRef',
    value: function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }
      this.ref = ref;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          type = _props.type,
          bsSize = _props.bsSize,
          state = _props.state,
          valid = _props.valid,
          invalid = _props.invalid,
          tag = _props.tag,
          addon = _props.addon,
          staticInput = _props.static,
          plaintext = _props.plaintext,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);


      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');

      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');

      var formControlClass = 'form-control';

      if (plaintext || staticInput) {
        formControlClass = formControlClass + '-plaintext';
        Tag = tag || 'p';
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
        if (state === 'danger') {
          invalid = true;
        } else if (state === 'success') {
          valid = true;
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce('Input with a type of "' + type + '" cannot have children. Please use "value"/"defaultValue" instead.');
        delete attributes.children;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Input.propTypes = propTypes$53;
Input.defaultProps = defaultProps$49;

var propTypes$54 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$50 = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroup.propTypes = propTypes$54;
InputGroup.defaultProps = defaultProps$50;

var propTypes$56 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$52 = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

InputGroupText.propTypes = propTypes$56;
InputGroupText.defaultProps = defaultProps$52;

var propTypes$55 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$51 = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'input-group-' + addonType), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroupText, { children: children })
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
};

InputGroupAddon.propTypes = propTypes$55;
InputGroupAddon.defaultProps = defaultProps$51;

var propTypes$57 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  groupClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groupAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var InputGroupButton = function InputGroupButton(props) {
  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');

  var children = props.children,
      groupClassName = props.groupClassName,
      groupAttributes = props.groupAttributes,
      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);


  if (typeof children === 'string') {
    var cssModule = propsWithoutGroup.cssModule,
        tag = propsWithoutGroup.tag,
        addonType = propsWithoutGroup.addonType,
        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);


    var allGroupAttributes = _extends({}, groupAttributes, {
      cssModule: cssModule,
      tag: tag,
      addonType: addonType
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      InputGroupAddon,
      _extends({}, allGroupAttributes, { className: groupClassName }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, attributes, { children: children }))
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputGroupAddon, _extends({}, props, { children: children }));
};

InputGroupButton.propTypes = propTypes$57;

var propTypes$58 = {
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['prepend', 'append']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, props);
};

InputGroupButtonDropdown.propTypes = propTypes$58;

var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp$1 = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]);

var columnProps$1 = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  size: stringOrNumberProp$1,
  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);

var propTypes$59 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  check: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  for: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var defaultProps$53 = {
  tag: 'label',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);


  var colClasses = [];

  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass = void 0;

    if (lodash_isobject__WEBPACK_IMPORTED_MODULE_4___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);

      colClasses.push(mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};

Label.propTypes = propTypes$59;
Label.defaultProps = defaultProps$53;

var propTypes$60 = {
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  middle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  object: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);


  var defaultTag = void 0;
  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  var Tag = tag || defaultTag;

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Media.propTypes = propTypes$60;

var propTypes$61 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps$54 = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

var Pagination = function Pagination(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = objectWithoutProperties(props, ['className', 'listClassName', 'cssModule', 'size', 'tag', 'listTag', 'aria-label']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className), cssModule);

  var listClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(listClassName, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    { className: classes, 'aria-label': label },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListTag, _extends({}, attributes, { className: listClasses }))
  );
};

Pagination.propTypes = propTypes$61;
Pagination.defaultProps = defaultProps$54;

var propTypes$62 = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$55 = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

PaginationItem.propTypes = propTypes$62;
PaginationItem.defaultProps = defaultProps$55;

var propTypes$63 = {
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps$56 = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'page-link'), cssModule);

  var defaultAriaLabel = void 0;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }
  var ariaLabel = props['aria-label'] || defaultAriaLabel;

  var defaultCaret = void 0;
  if (previous) {
    defaultCaret = '\xAB';
  } else if (next) {
    defaultCaret = '\xBB';
  }

  var children = props.children;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next) {
    children = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      {
        'aria-hidden': 'true',
        key: 'caret'
      },
      children || defaultCaret
    ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      {
        className: 'sr-only',
        key: 'sr'
      },
      ariaLabel
    )];
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Tag,
    _extends({}, attributes, {
      className: classes,
      'aria-label': ariaLabel
    }),
    children
  );
};

PaginationLink.propTypes = propTypes$63;
PaginationLink.defaultProps = defaultProps$56;

var propTypes$64 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$57 = {
  tag: 'div'
};

var childContextTypes$2 = {
  activeTabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var TabContent = function (_Component) {
  inherits(TabContent, _Component);
  createClass(TabContent, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }
      return null;
    }
  }]);

  function TabContent(props) {
    classCallCheck(this, TabContent);

    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));

    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  createClass(TabContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        activeTabId: this.state.activeTab
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;


      var attributes = omit(this.props, Object.keys(propTypes$64));

      var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tab-content', className), cssModule);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(TabContent);
TabContent.propTypes = propTypes$64;
TabContent.defaultProps = defaultProps$57;
TabContent.childContextTypes = childContextTypes$2;

var propTypes$65 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var defaultProps$58 = {
  tag: 'div'
};

var contextTypes$3 = {
  activeTabId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

function TabPane(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
}
TabPane.propTypes = propTypes$65;
TabPane.defaultProps = defaultProps$58;
TabPane.contextTypes = contextTypes$3;

var propTypes$66 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$59 = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

Jumbotron.propTypes = propTypes$66;
Jumbotron.defaultProps = defaultProps$59;

var propTypes$67 = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  transition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(Fade.propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};

var defaultProps$60 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _extends({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition', 'fade', 'innerRef']);


  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);

  var closeClasses = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()('close', closeClassName), cssModule);

  var alertTransition = _extends({}, Fade.defaultProps, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Fade,
    _extends({}, attributes, alertTransition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert', innerRef: innerRef }),
    toggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'button',
      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    ) : null,
    children
  );
}

Alert.propTypes = propTypes$67;
Alert.defaultProps = defaultProps$60;

var _transitionStatusToCl;

var propTypes$68 = _extends({}, Transition.propTypes, {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
});

var defaultProps$61 = _extends({}, Transition.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse = function (_Component) {
  inherits(Collapse, _Component);

  function Collapse(props) {
    classCallCheck(this, Collapse);

    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      height: null
    };

    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_this);
    });
    return _this;
  }

  createClass(Collapse, [{
    key: 'onEntering',
    value: function onEntering(node, isAppearing) {
      this.setState({ height: getHeight(node) });
      this.props.onEntering(node, isAppearing);
    }
  }, {
    key: 'onEntered',
    value: function onEntered(node, isAppearing) {
      this.setState({ height: null });
      this.props.onEntered(node, isAppearing);
    }
  }, {
    key: 'onExit',
    value: function onExit(node) {
      this.setState({ height: getHeight(node) });
      this.props.onExit(node);
    }
  }, {
    key: 'onExiting',
    value: function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
      this.setState({ height: 0 });
      this.props.onExiting(node);
    }
  }, {
    key: 'onExited',
    value: function onExited(node) {
      this.setState({ height: null });
      this.props.onExited(node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Tag = _props.tag,
          isOpen = _props.isOpen,
          className = _props.className,
          navbar = _props.navbar,
          cssModule = _props.cssModule,
          children = _props.children,
          innerRef = _props.innerRef,
          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children', 'innerRef']);
      var height = this.state.height;

      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
      // empty object "{}". This is the result of the `react-transition-group` babel
      // configuration settings. Therefore, to ensure that production builds work without
      // error, we can either explicitly define keys or use the Transition.defaultProps.
      // Using the Transition.defaultProps excludes any required props. Thus, the best
      // solution is to explicitly define required props in our utilities and reference these.
      // This also gives us more flexibility in the future to remove the prop-types
      // dependency in distribution builds (Similar to how `react-transition-group` does).
      // Note: Without omitting the `react-transition-group` props, the resulting child
      // Tag component would inherit the Transition properties as attributes for the HTML
      // element which results in errors/warnings for non-valid attributes.

      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Transition,
        _extends({}, transitionProps, {
          'in': isOpen,
          onEntering: this.onEntering,
          onEntered: this.onEntered,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }),
        function (status) {
          var collapseClass = getTransitionClass(status);
          var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
          var style = height === null ? null : { height: height };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Tag,
            _extends({}, childProps, {
              style: _extends({}, childProps.style, style),
              className: classes,
              ref: _this2.props.innerRef
            }),
            children
          );
        }
      );
    }
  }]);
  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Collapse.propTypes = propTypes$68;
Collapse.defaultProps = defaultProps$61;

var propTypes$69 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$62 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItem.propTypes = propTypes$69;
ListGroupItem.defaultProps = defaultProps$62;

var propTypes$70 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$63 = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group-item-heading'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemHeading.propTypes = propTypes$70;
ListGroupItemHeading.defaultProps = defaultProps$63;

var propTypes$71 = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cssModule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var defaultProps$64 = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = mapToCssModules(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'list-group-item-text'), cssModule);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, { className: classes }));
};

ListGroupItemText.propTypes = propTypes$71;
ListGroupItemText.defaultProps = defaultProps$64;

var UncontrolledAlert = function (_Component) {
  inherits(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    classCallCheck(this, UncontrolledAlert);

    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));

    _this.state = { isOpen: true };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledAlert, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledAlert;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var UncontrolledButtonDropdown = function (_Component) {
  inherits(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    classCallCheck(this, UncontrolledButtonDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledButtonDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledButtonDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var propTypes$72 = {
  toggler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  toggleEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};

var defaultProps$65 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = function (_Component) {
  inherits(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    classCallCheck(this, UncontrolledCollapse);

    var _this = possibleConstructorReturn(this, (UncontrolledCollapse.__proto__ || Object.getPrototypeOf(UncontrolledCollapse)).call(this, props));

    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_this);

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  createClass(UncontrolledCollapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);
      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return { isOpen: !isOpen };
      });
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          toggleEvents = _props.toggleEvents,
          rest = objectWithoutProperties(_props, ['toggleEvents']);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, _extends({ isOpen: this.state.isOpen }, rest));
    }
  }]);
  return UncontrolledCollapse;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UncontrolledCollapse.propTypes = propTypes$72;
UncontrolledCollapse.defaultProps = defaultProps$65;

var UncontrolledDropdown = function (_Component) {
  inherits(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    classCallCheck(this, UncontrolledDropdown);

    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledDropdown, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
};

var UncontrolledTooltip = function (_Component) {
  inherits(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    classCallCheck(this, UncontrolledTooltip);

    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(UncontrolledTooltip, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
    }
  }]);
  return UncontrolledTooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


//# sourceMappingURL=reactstrap.es.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=2.js.map