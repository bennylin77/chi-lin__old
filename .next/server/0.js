exports.ids = [0];
exports.modules = {

/***/ "./components/ImageAnnotationDemo.js":
/*!*******************************************!*\
  !*** ./components/ImageAnnotationDemo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-annotation-tool */ "react-annotation-tool");
/* harmony import */ var react_annotation_tool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/production/chi-lin/components/ImageAnnotationDemo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Demo =
/*#__PURE__*/
function (_Component) {
  _inherits(Demo, _Component);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Demo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (r) {
      _this.setState({
        result: r
      });
    });

    _this.state = {
      result: null
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var result = this.state.result;
      var annotations = [{
        "id": "jlvnw6az",
        "name": "jlvnw6az",
        "closed": true,
        "color": "rgba(227,0,255,1)",
        "vertices": [{
          "id": "jlvnw6az",
          "name": "jlvnw6az",
          "x": 189.5625,
          "y": 201
        }, {
          "id": "jlvnw8qs",
          "name": "jlvnw8qs",
          "x": 309.25,
          "y": 200
        }, {
          "id": "jlvnw9vp",
          "name": "jlvnw9vp",
          "x": 313.25,
          "y": 203
        }, {
          "id": "jlvnwbvk",
          "name": "jlvnwbvk",
          "x": 316.25,
          "y": 288
        }, {
          "id": "jlvnwczb",
          "name": "jlvnwczb",
          "x": 310.25,
          "y": 292
        }, {
          "id": "jlvnwfhm",
          "name": "jlvnwfhm",
          "x": 187.25,
          "y": 294
        }, {
          "id": "jlvnwgoe",
          "name": "jlvnwgoe",
          "x": 181.25,
          "y": 290
        }, {
          "id": "jlvnwidd",
          "name": "jlvnwidd",
          "x": 183.25,
          "y": 205
        }],
        "selected": [{
          "id": "0",
          "value": "root"
        }, {
          "id": "1",
          "value": "Electronic"
        }, {
          "id": "1-1",
          "value": "Laptop"
        }, {
          "id": "1-1-1",
          "value": "Apple"
        }]
      }, {
        "id": "jlvnxa79",
        "name": "jlvnxa79",
        "color": "rgba(0,255,81,1)",
        "closed": true,
        "vertices": [{
          "id": "jlvnxa79",
          "name": "jlvnxa79",
          "x": 369.25,
          "y": 350.5
        }, {
          "id": "jlvnxbct",
          "name": "jlvnxbct",
          "x": 372.25,
          "y": 343.5
        }, {
          "id": "jlvnxcg6",
          "name": "jlvnxcg6",
          "x": 387.25,
          "y": 341
        }, {
          "id": "jlvnxdic",
          "name": "jlvnxdic",
          "x": 393.25,
          "y": 343
        }, {
          "id": "jlvnxfp2",
          "name": "jlvnxfp2",
          "x": 424.25,
          "y": 342
        }, {
          "id": "jlvnxgfx",
          "name": "jlvnxgfx",
          "x": 426.25,
          "y": 347
        }, {
          "id": "jlvnxjd8",
          "name": "jlvnxjd8",
          "x": 381.25,
          "y": 350
        }],
        "selected": [{
          "id": "0",
          "value": "root"
        }, {
          "id": "2",
          "value": "Stationery"
        }, {
          "id": "2-1",
          "value": "Pen"
        }]
      }];
      var menu = {
        id: "0",
        value: "root",
        options: [{
          id: "1",
          value: "Electronic",
          options: [{
            id: "1-1",
            value: "Laptop",
            options: [{
              id: "1-1-1",
              value: "Apple",
              options: []
            }, {
              id: "1-1-2",
              value: "Asus",
              options: []
            }]
          }, {
            id: "1-2",
            value: "Charger",
            options: []
          }, {
            id: "1-3",
            value: "Wire",
            options: []
          }, {
            id: "1-4",
            value: "Watch",
            options: []
          }]
        }, {
          id: "2",
          value: "Stationery",
          options: [{
            id: "2-1",
            value: "Pen",
            options: []
          }, {
            id: "2-2",
            value: "Eraser",
            options: []
          }]
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        className: "py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        class: "display-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Image Tool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "py-3",
        style: {
          background: "rgb(246, 246, 246)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_annotation_tool__WEBPACK_IMPORTED_MODULE_1__["ImageTool"], {
        annotationWidth: 500,
        onNextClick: this.handleSubmit,
        onPreviousClick: this.handleSubmit,
        onSkipClick: this.handleSubmit,
        menu: menu,
        category: "Others",
        categoryOptions: ["No Objects", "No Image"],
        dynamicOptions: true,
        annotations: annotations,
        disabledOptionLevels: [1],
        url: "https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Output"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, JSON.stringify(result, null, 2)))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ })

};;
//# sourceMappingURL=0.js.map