module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloMan = function (_React$Component) {
  _inherits(HelloMan, _React$Component);

  function HelloMan() {
    _classCallCheck(this, HelloMan);

    return _possibleConstructorReturn(this, (HelloMan.__proto__ || Object.getPrototypeOf(HelloMan)).apply(this, arguments));
  }

  _createClass(HelloMan, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.props.className || "align-right" },
        "Hello ",
        this.props.name
      );
      // return <button type="button">{this.props.name}</button>;
    }
  }]);

  return HelloMan;
}(_react2.default.Component);

exports.default = HelloMan;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputBox = function (_React$Component) {
  _inherits(InputBox, _React$Component);

  function InputBox() {
    _classCallCheck(this, InputBox);

    return _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).apply(this, arguments));
  }

  _createClass(InputBox, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "span",
          null,
          this.props.label + ": " || ""
        ),
        _react2.default.createElement("input", {
          className: this.props.className,
          type: this.props.type || "text",
          placeholder: this.props.placeholder,
          onChange: this.props.onChange,
          value: this.props.value
        })
      );
    }
  }]);

  return InputBox;
}(_react2.default.Component);

exports.default = InputBox;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputButton = function (_React$Component) {
  _inherits(InputButton, _React$Component);

  function InputButton() {
    _classCallCheck(this, InputButton);

    return _possibleConstructorReturn(this, (InputButton.__proto__ || Object.getPrototypeOf(InputButton)).apply(this, arguments));
  }

  _createClass(InputButton, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          {
            onClick: this.props.onClick,
            className: this.props.className,
            type: "button"
          },
          this.props.value || "Button"
        )
      );
    }
  }]);

  return InputButton;
}(_react2.default.Component);

exports.default = InputButton;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(16);

var _appicon = __webpack_require__(19);

var _appicon2 = _interopRequireDefault(_appicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopAppBar = function (_React$Component) {
  _inherits(TopAppBar, _React$Component);

  function TopAppBar() {
    _classCallCheck(this, TopAppBar);

    return _possibleConstructorReturn(this, (TopAppBar.__proto__ || Object.getPrototypeOf(TopAppBar)).apply(this, arguments));
  }

  _createClass(TopAppBar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.props.appBarStyle || "top-app-bar-style" },
        _react2.default.createElement(
          "div",
          { className: "top-app-bar-icon-style" },
          _react2.default.createElement("img", { src: this.props.icon || _appicon2.default, height: this.props.appBarIconHeight || "80px" })
        ),
        _react2.default.createElement(
          "div",
          { className: this.props.appBarTitleStyle || "top-app-bar-title-style" },
          this.props.title || "Title"
        )
      );
    }
  }]);

  return TopAppBar;
}(_react2.default.Component);

exports.default = TopAppBar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { id: this.props.id || "mySidenav", className: "sidenav" },
          this.props.items.map(function (item, i) {
            console.log("Entered");
            // Return the element. Also pass key
            return _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "a",
                { key: item, href: "#" },
                item
              ),
              _react2.default.createElement("hr", null)
            );
          })
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this.props.mainDiv || "login-div-main" },
        _react2.default.createElement(
          "div",
          { className: this.props.headingStyle || "login-div-heading" },
          this.props.headingText || "Log In"
        ),
        _react2.default.createElement(
          "div",
          { className: "login-div-content" },
          _react2.default.createElement(
            "div",
            { className: "login-div-content-label" },
            _react2.default.createElement(
              "div",
              { className: "login-div-content-label-span" },
              _react2.default.createElement(
                "span",
                null,
                this.props.userNameLabel + " : " || "Username : "
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "span",
                null,
                this.props.passwordLabel + " : " || "Password : "
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "login-div-content-inputfield" },
            _react2.default.createElement(
              "div",
              { className: "login-div-content-input-span" },
              _react2.default.createElement("input", {
                className: this.props.className,
                type: "text",
                placeholder: this.props.userNamePlaceholder || "username",
                onChange: this.props.onChangeUserName,
                value: this.props.userNameValue
              }),
              _react2.default.createElement("input", {
                className: this.props.className,
                type: "password",
                placeholder: this.props.passwordPlaceholder || "password",
                onChange: this.props.onChangePassword,
                value: this.props.passwordValue
              })
            )
          )
        )
      )

      //   <div>
      //     <h1>{this.props.heading || "Log In"}</h1>
      //     <br />
      //     <br />
      //     <span>{this.props.userNameLabel + " : " || "Username : "}</span>
      //     <input
      //       className={this.props.className}
      //       type="text"
      //       placeholder={this.props.userNamePlaceholder}
      //       onChange={this.props.onChangeUserName}
      //       value={this.props.userNameValue}
      //     />
      //     <br />
      //     <span>{this.props.passwordLabel + " : " || "Password : "}</span>
      //     <input
      //       className={this.props.className}
      //       type="password"
      //       placeholder={this.props.passwordPlaceholder}
      //       onChange={this.props.onChangePassword}
      //       value={this.props.passwordValue}
      //     />
      //   </div>
      ;
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.TopAppBar = exports.Drawer = exports.Login = exports.InputButton = exports.HelloMan = exports.InputBox = undefined;

var _HelloMan = __webpack_require__(3);

var _HelloMan2 = _interopRequireDefault(_HelloMan);

var _InputButton = __webpack_require__(5);

var _InputButton2 = _interopRequireDefault(_InputButton);

var _InputBox = __webpack_require__(4);

var _InputBox2 = _interopRequireDefault(_InputBox);

var _login = __webpack_require__(8);

var _login2 = _interopRequireDefault(_login);

var _TopAppBar = __webpack_require__(6);

var _TopAppBar2 = _interopRequireDefault(_TopAppBar);

var _Menu = __webpack_require__(7);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.InputBox = _InputBox2.default;
exports.HelloMan = _HelloMan2.default;
exports.InputButton = _InputButton2.default;
exports.Login = _login2.default;
exports.Drawer = Drawer;
exports.TopAppBar = _TopAppBar2.default;
exports.Menu = _Menu2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".width-100{width:100%}.height-100{height:100%}.align-right{text-align:right}\n", ""]);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".top-app-bar-style {\n    width: 100%;\n    background-color: #b0b0b0;\n  }\n  \n  .top-app-bar-icon-style {\n    padding-left: 20px;\n    float: left;\n    width: 100px;\n    height: 80px;\n  }\n  \n  .top-app-bar-title-style {\n    padding-left: 40px;\n    vertical-align: middle;\n    line-height: 80px;\n    font-size: 25px;\n    color: white;\n  }\n  ", ""]);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "/* The side navigation menu */\n.sidenav {\n  margin-top: 80px;\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 8px; /* Place content 60px from the top */\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  }\n  \n  /* The navigation menu links */\n  .sidenav a {\n    padding: 8px 12px 12px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n  }\n  \n  /* When you mouse over the navigation links, change their color */\n  .sidenav a:hover {\n    color: #f1f1f1;\n  }\n  \n  /* Position and style the close button (top right corner) */\n  .sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n  }\n  \n  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n  #main {\n    transition: margin-left .5s;\n    padding: 20px;\n  }\n  \n  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n  @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n\n  .menu-open-style{\n    font-size: 30px;\n    cursor: pointer;\n  }", ""]);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Imports
exports.i(__webpack_require__(14), "");
// Module
exports.push([module.i, "/* @import \"../node_modules/@material/list/mdc-list.scss\"; */\n\n\n\n\n.login-div-main {\n    align-content: center;\n    width: 500px;\n    text-align: center;\n    background-color: #1fa8b5;\n  }\n  \n  .login-div-content-label {\n    float: left;\n    align-content: center;\n    width: 200px;\n    height: 220px;\n    font-size: 25px;\n    text-align: right;\n    /* background-color: #c4b0ab; */\n    /* padding-bottom: 50px;\n    padding-top: 10px; */\n  }\n  \n  .login-div-content-inputfield {\n    float: right;\n    align-content: center;\n    width: 300px;\n    height: 220px;\n    text-align: left;\n    /* background-color: #604f3d */\n    /* padding-bottom: 50px;\n    padding-top: 10px; */\n  }\n  \n  .login-div-heading {\n    vertical-align: middle;\n    line-height: 80px; \n    font-size: 40px;\n    width: 500px;\n    height: 80px;\n    text-align: center;\n    /* background-color: #63b51f; */\n  }\n  \n  .login-div-content {\n    align-content: center;\n    width: 500px;\n    height: 220px;\n    text-align: center;\n    /* background-color: #b56f1f; */\n  }\n  \n  .login-div-content-label-span{\n    padding-top: 35px;\n    padding-bottom: 30px;\n    padding-right: 10px;\n    padding-left: 20px;\n    vertical-align: middle;\n    line-height: 60px; \n  }\n  .login-div-content-input-span{\n    padding-top: 40px;\n    padding-bottom: 30px;\n    padding-right: 10px;\n    vertical-align: middle;\n    line-height: 60px; \n  }\n  ", ""]);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "//color\n\n.width-100 {\n  width: 100%;\n}\n\n.height-100 {\n  height: 100%;\n}\n\n.align-right {\n  text-align: right;\n}\n", ""]);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(10);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(11);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(12);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(13);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(2)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);