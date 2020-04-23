(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _matrix = require("./mixin/matrix");

var _blending = require("./mixin/blending");

var _program = require("./mixin/program");

var _colour = require("./mixin/colour");

var _texture = require("./mixin/texture");

var _depth = require("./mixin/depth");

var _shader = require("./mixin/shader");

var _buffer = require("./mixin/buffer");

var _location = require("./mixin/location");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "canvas";

    _classCallCheck(this, Canvas);

    _defineProperty(this, "applyMatrix", _matrix.applyMatrix);

    _defineProperty(this, "enableBlending", _blending.enableBlending);

    _defineProperty(this, "useProgram", _program.useProgram);

    _defineProperty(this, "createProgram", _program.createProgram);

    _defineProperty(this, "clearColour", _colour.clearColour);

    _defineProperty(this, "clearColourBuffer", _colour.clearColourBuffer);

    _defineProperty(this, "createTexture", _texture.createTexture);

    _defineProperty(this, "enableAnisotropicFiltering", _texture.enableAnisotropicFiltering);

    _defineProperty(this, "clearDepth", _depth.clearDepth);

    _defineProperty(this, "clearDepthBuffer", _depth.clearDepthBuffer);

    _defineProperty(this, "enableDepthTesting", _depth.enableDepthTesting);

    _defineProperty(this, "createShader", _shader.createShader);

    _defineProperty(this, "createVertexShader", _shader.createVertexShader);

    _defineProperty(this, "createFragmentShader", _shader.createFragmentShader);

    _defineProperty(this, "bindBuffer", _buffer.bindBuffer);

    _defineProperty(this, "createBuffer", _buffer.createBuffer);

    _defineProperty(this, "bindElementBuffer", _buffer.bindElementBuffer);

    _defineProperty(this, "createElementBuffer", _buffer.createElementBuffer);

    _defineProperty(this, "getUniformLocation", _location.getUniformLocation);

    _defineProperty(this, "getAttributeLocation", _location.getAttributeLocation);

    _defineProperty(this, "setUniformLocationIntegerValue", _location.setUniformLocationIntegerValue);

    var domElement = domElementFromSelector(selector),
        context = contextFromDOMElement(domElement);
    this.domElement = domElement;
    this.context = context;
    this.enableDepthTesting(); ///
  }

  _createClass(Canvas, [{
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.domElement.height;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.domElement.setAttribute("width", width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.domElement.setAttribute("height", height);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      var x = 0,
          y = 0;
      this.setWidth(width);
      this.setHeight(height);
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: "render",
    value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(),
          normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(),
          positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(),
          rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(),
          projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
      this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
      this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
    }
  }, {
    key: "drawElements",
    value: function drawElements(start, finish) {
      var _this$context = this.context,
          TRIANGLES = _this$context.TRIANGLES,
          UNSIGNED_SHORT = _this$context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT,
          count = finish - start,
          offset = start * 2; ///

      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

exports["default"] = Canvas;

function domElementFromSelector(selector) {
  var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function contextFromDOMElement(domElement) {
  var context = domElement.getContext("webgl");

  if (!context) {
    throw new Error("Unable to get the WebGL context.");
  }

  return context;
}

},{"./mixin/blending":37,"./mixin/buffer":38,"./mixin/colour":39,"./mixin/depth":40,"./mixin/location":41,"./mixin/matrix":42,"./mixin/program":43,"./mixin/shader":44,"./mixin/texture":45}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIELD_OF_VIEW = exports.DEGREES_TO_RADIANS_SCALAR = exports.DEFAULT_MARGIN_OF_ERROR = exports.MINIMUM_DISTANCE = exports.VERTICES_LENGTH = exports.SHIFT_KEY_CODE = exports.OFFSET_SCALAR = exports.ANGLES_SCALAR = exports.INVERT_SCALAR = exports.DELTA_SCALAR = exports.MOUSE_WHEEL = exports.MOUSE_MOVE = exports.MOUSE_DOWN = exports.MOUSE_UP = exports.Z_NEAR = exports.Z_FAR = void 0;
var Z_FAR = 1000;
exports.Z_FAR = Z_FAR;
var Z_NEAR = 1;
exports.Z_NEAR = Z_NEAR;
var MOUSE_UP = "MOUSE_UP";
exports.MOUSE_UP = MOUSE_UP;
var MOUSE_DOWN = "MOUSE_DOWN";
exports.MOUSE_DOWN = MOUSE_DOWN;
var MOUSE_MOVE = "MOUSE_MOVE";
exports.MOUSE_MOVE = MOUSE_MOVE;
var MOUSE_WHEEL = "MOUSE_WHEEL";
exports.MOUSE_WHEEL = MOUSE_WHEEL;
var DELTA_SCALAR = 1.25;
exports.DELTA_SCALAR = DELTA_SCALAR;
var INVERT_SCALAR = -1;
exports.INVERT_SCALAR = INVERT_SCALAR;
var ANGLES_SCALAR = 0.01;
exports.ANGLES_SCALAR = ANGLES_SCALAR;
var OFFSET_SCALAR = 0.25;
exports.OFFSET_SCALAR = OFFSET_SCALAR;
var SHIFT_KEY_CODE = 16;
exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
var VERTICES_LENGTH = 3;
exports.VERTICES_LENGTH = VERTICES_LENGTH;
var MINIMUM_DISTANCE = 1;
exports.MINIMUM_DISTANCE = MINIMUM_DISTANCE;
var DEFAULT_MARGIN_OF_ERROR = 0.0000001;
exports.DEFAULT_MARGIN_OF_ERROR = DEFAULT_MARGIN_OF_ERROR;
var DEGREES_TO_RADIANS_SCALAR = Math.PI / 180;
exports.DEGREES_TO_RADIANS_SCALAR = DEGREES_TO_RADIANS_SCALAR;
var FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS_SCALAR;
exports.FIELD_OF_VIEW = FIELD_OF_VIEW;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: "getChildElements",
    value: function getChildElements() {
      return this.childElements;
    }
  }, {
    key: "setChildElements",
    value: function setChildElements(childElements) {
      this.childElements = childElements;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = _construct(Class, remainingArguments),
          childElements = typeof element.childElements === "function" ? element.childElements(properties) : properties.childElements || [];

      element.setChildElements(childElements);
      return element;
    }
  }]);

  return Element;
}();

exports["default"] = Element;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Camera = /*#__PURE__*/function (_Element) {
  _inherits(Camera, _Element);

  var _super = _createSuper(Camera);

  function Camera(pan, tilt) {
    var _this;

    _classCallCheck(this, Camera);

    _this = _super.call(this);
    _this.pan = pan;
    _this.tilt = tilt;
    return _this;
  }

  _createClass(Camera, [{
    key: "getPan",
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: "getTilt",
    value: function getTilt() {
      return this.tilt;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromProperties.apply(_element["default"], [Class, properties].concat(remainingArguments));
    }
  }]);

  return Camera;
}(_element["default"]);

exports["default"] = Camera;

},{"../element":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));

var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));

var _zoom = _interopRequireDefault(require("../../miscellaneous/zoom"));

var _camera = _interopRequireDefault(require("../camera"));

var _vector = require("../../maths/vector");

var _matrix = require("../../utilities/matrix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialOffsets = (0, _vector.zero3)(),
    defaultInitialDistance = 5;

var DesignCamera = /*#__PURE__*/function (_Camera) {
  _inherits(DesignCamera, _Camera);

  var _super = _createSuper(DesignCamera);

  function DesignCamera(pan, tilt, zoom) {
    var _this;

    _classCallCheck(this, DesignCamera);

    _this = _super.call(this, pan, tilt);
    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: "update",
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        this.zoom.updateDistance(mouseWheelDelta);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets),
          positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance),
          rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles),
          projectionMatrix = (0, _matrix.projectionMatrixFromWidthAndHeight)(width, height),
          normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === void 0 ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === void 0 ? defaultInitialOffsets : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === void 0 ? defaultInitialDistance : _properties$initialDi,
          flipped = false,
          pan = _pan["default"].fromInitialOffsets(initialOffsets),
          tilt = _tilt["default"].fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = _zoom["default"].fromInitialDistance(initialDistance),
          designCamera = _camera["default"].fromProperties(DesignCamera, properties, pan, tilt, zoom);

      return designCamera;
    }
  }]);

  return DesignCamera;
}(_camera["default"]);

exports["default"] = DesignCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../miscellaneous/zoom":36,"../../utilities/matrix":84,"../camera":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pan = _interopRequireDefault(require("../../miscellaneous/pan"));

var _tilt = _interopRequireDefault(require("../../miscellaneous/tilt"));

var _camera = _interopRequireDefault(require("../camera"));

var _vector = require("../../maths/vector");

var _matrix = require("../../utilities/matrix");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = /*#__PURE__*/function (_Camera) {
  _inherits(GamingCamera, _Camera);

  var _super = _createSuper(GamingCamera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _super.apply(this, arguments);
  }

  _createClass(GamingCamera, [{
    key: "update",
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets),
          positionMatrix = (0, _matrix.positionMatrixFromNothing)(),
          rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles),
          projectionMatrix = (0, _matrix.projectionMatrixFromWidthAndHeight)(width, height),
          normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === void 0 ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === void 0 ? defaultInitialPosition : _properties$initialPo,
          flipped = true,
          pan = _pan["default"].fromInitialPosition(initialPosition),
          tilt = _tilt["default"].fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = _camera["default"].fromProperties(GamingCamera, properties, pan, tilt);

      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(_camera["default"]);

exports["default"] = GamingCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../utilities/matrix":84,"../camera":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _transform = require("../utilities/transform");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CanvasElement = /*#__PURE__*/function (_Element) {
  _inherits(CanvasElement, _Element);

  var _super = _createSuper(CanvasElement);

  function CanvasElement(transform, facets, mask, hidden) {
    var _this;

    _classCallCheck(this, CanvasElement);

    _this = _super.call(this);
    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;
    _this.hidden = hidden;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: "getTransform",
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: "getFacets",
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: "getMask",
    value: function getMask() {
      return this.mask;
    }
  }, {
    key: "setFacets",
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: "applyMask",
    value: function applyMask(mask) {
      if (mask) {
        var element = this; ///

        mask.maskElement(element);
      }
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      var childElements = this.getChildElements();
      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });
      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: "createFacets",
    value: function createFacets(hidden) {
      var childElements = this.getChildElements();
      hidden = hidden || this.hidden; ///

      childElements.forEach(function (childElement) {
        return childElement.createFacets(hidden);
      });
      return hidden;
    }
  }, {
    key: "amendFacets",
    value: function amendFacets() {
      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
      this.applyTransform(this.transform);
      this.applyMask(this.mask);
    }
  }, {
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var _properties$scale = properties.scale,
          scale = _properties$scale === void 0 ? null : _properties$scale,
          _properties$rotations = properties.rotations,
          rotations = _properties$rotations === void 0 ? null : _properties$rotations,
          _properties$position = properties.position,
          position = _properties$position === void 0 ? null : _properties$position,
          _properties$mask = properties.mask,
          mask = _properties$mask === void 0 ? null : _properties$mask,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          transform = (0, _transform.composeTransform)(scale, rotations, position),
          facets = [],
          canvasElement = _element["default"].fromProperties.apply(_element["default"], [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));

      return canvasElement;
    }
  }]);

  return CanvasElement;
}(_element["default"]);

exports["default"] = CanvasElement;

},{"../element":3,"../utilities/transform":90}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _canvas = _interopRequireDefault(require("../../element/canvas"));

var _coloured = _interopRequireDefault(require("../../primitive/facet/coloured"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColouredCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  var _super = _createSuper(ColouredCanvasElement);

  function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
    var _this;

    _classCallCheck(this, ColouredCanvasElement);

    _this = _super.call(this, transform, facets, mask, hidden);
    _this.coordinates = coordinates;
    _this.indexes = indexes;
    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: "createFacets",
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, hidden); ///

      if (!hidden) {
        var indexTuples = this.indexes,
            ///
        facets = indexTuples.map(function (indexTuple) {
          var coordinateTuples = _this2.coordinates,
              ///
          colouredFacet = _coloured["default"].fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, _this2.colour),
              facet = colouredFacet; ///


          return facet;
        });
        this.setFacets(facets);
      }
    }
  }, {
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();
      colourRenderer.addFacets(facets);

      _get(_getPrototypeOf(ColouredCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      return _canvas["default"].fromProperties.apply(_canvas["default"], [Class, properties, coordinates, indexes, colour].concat(remainingArguments));
    }
  }]);

  return ColouredCanvasElement;
}(_canvas["default"]);

exports["default"] = ColouredCanvasElement;

},{"../../element/canvas":7,"../../primitive/facet/coloured":49}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _canvas = _interopRequireDefault(require("../../element/canvas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FunctionCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(FunctionCanvasElement, _CanvasElement);

  var _super = _createSuper(FunctionCanvasElement);

  function FunctionCanvasElement() {
    _classCallCheck(this, FunctionCanvasElement);

    return _super.apply(this, arguments);
  }

  _createClass(FunctionCanvasElement, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var functionElement = _canvas["default"].fromProperties(FunctionCanvasElement, properties);

      return functionElement;
    }
  }]);

  return FunctionCanvasElement;
}(_canvas["default"]);

exports["default"] = FunctionCanvasElement;

},{"../../element/canvas":7}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _canvas = _interopRequireDefault(require("../../element/canvas"));

var _textured = _interopRequireDefault(require("../../primitive/facet/textured"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TexturedCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  var _super = _createSuper(TexturedCanvasElement);

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    var _this;

    _classCallCheck(this, TexturedCanvasElement);

    _this = _super.call(this, transform, facets, mask, hidden);
    _this.coordinates = coordinates;
    _this.indexes = indexes;
    _this.imageName = imageName;
    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: "createFacets",
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(_getPrototypeOf(TexturedCanvasElement.prototype), "createFacets", this).call(this, hidden); ///

      if (!hidden) {
        var indexTuples = this.indexes,
            ///
        facets = indexTuples.map(function (indexTuple, index) {
          var vertexTextureCoordinateTuples = _this2.textureCoordinates[index],
              ///
          coordinateTuples = _this2.coordinates,
              ///
          texturedFacet = _textured["default"].fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this2.imageName),
              facet = texturedFacet; ///


          return facet;
        });
        this.setFacets(facets);
      }
    }
  }, {
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();
      textureRenderer.addFacets(facets);

      _get(_getPrototypeOf(TexturedCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      return _canvas["default"].fromProperties.apply(_canvas["default"], [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(_canvas["default"]);

exports["default"] = TexturedCanvasElement;

},{"../../element/canvas":7,"../../primitive/facet/textured":50}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mask = /*#__PURE__*/function (_Element) {
  _inherits(Mask, _Element);

  var _super = _createSuper(Mask);

  function Mask(hidden) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _super.call(this);
    _this.hidden = hidden;
    return _this;
  }

  _createClass(Mask, [{
    key: "retrieveMaskingFacets",
    value: function retrieveMaskingFacets() {
      var childElements = this.getChildElements(),
          facets = retrieveFacets(childElements),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = _maskingFacet["default"].fromFacet(facet);

        return maskingFacet;
      });
      return maskingFacets;
    }
  }, {
    key: "maskElement",
    value: function maskElement(element) {
      var maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

      _maskElement(element, maskingFacets);

      childElements.forEach(function (childElement) {
        return _maskElement(childElement, maskingFacets);
      });
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var _this2 = this;

      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.createFacets(_this2.hidden);
      });
      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          mask = _element["default"].fromProperties(Mask, properties, hidden);

      mask.initialise();
      return mask;
    }
  }]);

  return Mask;
}(_element["default"]);

exports["default"] = Mask;

function retrieveFacets(childElements) {
  var facets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  childElements.forEach(function (childElement) {
    var element = childElement,
        ///
    elementFacets = element.getFacets(),
        childElements = element.getChildElements();
    (0, _array.push)(facets, elementFacets);
    retrieveFacets(childElements, facets);
  });
  return facets;
}

function _maskElement(element, maskingFacets) {
  var facets = element.getFacets();
  maskingFacets.forEach(function (maskingFacet) {
    var unmaskedFacets = [];
    facets.forEach(function (facet) {
      return maskingFacet.maskFacet(facet, unmaskedFacets);
    });
    facets = unmaskedFacets; ///
  });
  element.setFacets(facets);
  var childElements = element.getChildElements();
  childElements.forEach(function (childElement) {
    var element = childElement; ///

    _maskElement(element, maskingFacets);
  });
}

},{"../element":3,"../primitive/maskingFacet":51,"../utilities/array":81}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _colour = _interopRequireDefault(require("../renderer/colour"));

var _images = _interopRequireDefault(require("../renderer/texture/images"));

var _imageMap = _interopRequireDefault(require("../renderer/texture/imageMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Part = /*#__PURE__*/function (_Element) {
  _inherits(Part, _Element);

  var _super = _createSuper(Part);

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    var _this;

    _classCallCheck(this, Part);

    _this = _super.call(this);
    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageTiling = imageTiling;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    _this.hidden = hidden;
    return _this;
  }

  _createClass(Part, [{
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var _this2 = this;

      var textureRenderer = null;

      var colourRenderer = _colour["default"].fromNothing(canvas);

      if (this.images) {
        var imagesTextureRenderer = _images["default"].fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);

        textureRenderer = imagesTextureRenderer; ///
      }

      if (this.imageMap) {
        var imageMapTextureRenderer = _imageMap["default"].fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

        textureRenderer = imageMapTextureRenderer; ///
      }

      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.createFacets(_this2.hidden);
      });
      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
      colourRenderer && colourRenderer.createBuffers(canvas); ///

      textureRenderer && textureRenderer.createBuffers(canvas); ///

      this.colourRenderer = colourRenderer;
      this.textureRenderer = textureRenderer;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$images = properties.images,
          images = _properties$images === void 0 ? null : _properties$images,
          _properties$imageMap = properties.imageMap,
          imageMap = _properties$imageMap === void 0 ? null : _properties$imageMap,
          _properties$imageName = properties.imageNames,
          imageNames = _properties$imageName === void 0 ? null : _properties$imageName,
          _properties$imageTili = properties.imageTiling,
          imageTiling = _properties$imageTili === void 0 ? false : _properties$imageTili,
          _properties$imageMapJ = properties.imageMapJSON,
          imageMapJSON = _properties$imageMapJ === void 0 ? null : _properties$imageMapJ,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          colourRenderer = null,
          textureRenderer = null,
          part = _element["default"].fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);

      return part;
    }
  }]);

  return Part;
}(_element["default"]);

exports["default"] = Part;

},{"../element":3,"../renderer/colour":60,"../renderer/texture/imageMap":77,"../renderer/texture/images":78}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _part = _interopRequireDefault(require("../element/part"));

var _camera = _interopRequireDefault(require("../element/camera"));

var _element = _interopRequireDefault(require("../element"));

var _userInput = _interopRequireDefault(require("../miscellaneous/userInput"));

var _vector = require("../maths/vector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var forEach = _necessary.asynchronousUtilities.forEach;

var Scene = /*#__PURE__*/function (_Element) {
  _inherits(Scene, _Element);

  var _super = _createSuper(Scene);

  function Scene(parts, camera, canvas) {
    var _this;

    _classCallCheck(this, Scene);

    _this = _super.call(this);
    _this.parts = parts;
    _this.camera = camera;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: "windowResizeHandler",
    value: function windowResizeHandler() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight,
          ///
      render = this.render.bind(this),
          callback = render; ///

      this.canvas.resize(width, height);
      var relativeMouseCoordinates = (0, _vector.zero2)(),
          ///
      mouseWheelDelta = 0,
          ///
      shiftKeyDown = false; ///

      this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
    }
  }, {
    key: "userInputHandler",
    value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this),
          callback = render; ///

      this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
    }
  }, {
    key: "render",
    value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();
      this.parts.forEach(function (part) {
        return part.render(_this2.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
    }
  }, {
    key: "initialise",
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var userInput = _userInput["default"].fromNothing(),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

      userInput.initialise(canvas);
      initialiseParts(this.parts, update, canvas, function () {
        window.onresize = windowResizeHandler;
        userInput.addUserInputHandler(userInputHandler);

        _this3.windowResizeHandler(); ///


        done && done(); ///
      });
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          done = properties.done,
          update = properties.update,
          childElements = properties.childElements,
          parts = partsFromChildElements(childElements),
          camera = cameraFromChildElements(childElements),
          scene = _element["default"].fromProperties(Scene, properties, parts, camera, canvas);

      scene.initialise(canvas, update, done);
      return scene;
    }
  }]);

  return Scene;
}(_element["default"]);

exports["default"] = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}

function initialiseParts(parts, update, canvas, done) {
  forEach(parts, function (part, next, done, context, index) {
    var partsLength = parts.length,
        progress = (index + 1) / partsLength;
    part.initialise(canvas);
    defer(function () {
      update && update(progress); ///

      next();
    });
  }, done);
}

function partsFromChildElements(childElements) {
  var parts = childElements.reduce(function (parts, childElement) {
    if (childElement instanceof _part["default"]) {
      var part = childElement; ///

      parts.push(part);
    }

    return parts;
  }, []);
  return parts;
}

function cameraFromChildElements(childElements) {
  var camera = childElements.reduce(function (camera, childElement) {
    if (camera === null) {
      if (childElement instanceof _camera["default"]) {
        camera = childElement; ///
      }
    }

    return camera;
  }, null);
  return camera;
}

},{"../element":3,"../element/camera":4,"../element/part":12,"../maths/vector":29,"../miscellaneous/userInput":35,"necessary":95}],14:[function(require,module,exports){
"use strict";

var _cube = _interopRequireDefault(require("./example/cube"));

var _simple = _interopRequireDefault(require("./example/simple"));

var _masking = _interopRequireDefault(require("./example/masking"));

var _pyramid = _interopRequireDefault(require("./example/pyramid"));

var _tiling = _interopRequireDefault(require("./example/tiling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var example = window.location.search.substring(1); ///

switch (example) {
  case "simple":
    (0, _simple["default"])();
    break;

  case "cube":
    (0, _cube["default"])();
    break;

  case "masking":
    (0, _masking["default"])();
    break;

  case "pyramid":
    (0, _pyramid["default"])();
    break;

  case "tiling":
    (0, _tiling["default"])();
    break;
}

},{"./example/cube":15,"./example/masking":23,"./example/pyramid":24,"./example/simple":25,"./example/tiling":26}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _cube = _interopRequireDefault(require("./element/cube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var cubeExample = function cubeExample() {
  return /*#__PURE__*/React.createElement(_index.Scene, {
    canvas: canvas
  }, /*#__PURE__*/React.createElement(_index.Part, null, /*#__PURE__*/React.createElement(_cube["default"], {
    colour: [0, 1, 0]
  })), /*#__PURE__*/React.createElement(_index.DesignCamera, null));
};

var _default = cubeExample;
exports["default"] = _default;

},{"../index":27,"./element/cube":17}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultColour = [1, 0, 0];

var ColouredSquare = /*#__PURE__*/function (_ColouredCanvasElemen) {
  _inherits(ColouredSquare, _ColouredCanvasElemen);

  var _super = _createSuper(ColouredSquare);

  function ColouredSquare() {
    _classCallCheck(this, ColouredSquare);

    return _super.apply(this, arguments);
  }

  _createClass(ColouredSquare, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$colour = properties.colour,
          colour = _properties$colour === void 0 ? defaultColour : _properties$colour,
          colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);

      return colouredSquare;
    }
  }]);

  return ColouredSquare;
}(_index.ColouredCanvasElement);

exports["default"] = ColouredSquare;

},{"../../index":27}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _face = _interopRequireDefault(require("./face"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultColour = [1, 1, 0];

var Cube = function Cube(properties) {
  var _properties$colour = properties.colour,
      colour = _properties$colour === void 0 ? defaultColour : _properties$colour;
  return [/*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, 0, 0]
  }), /*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [+90, 0, 0]
  }), /*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, +90, 0]
  }), /*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [180, 0, 0]
  }), /*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [-90, 0, 0]
  }), /*#__PURE__*/React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, -90, 0]
  })];
};

var _default = Cube;
exports["default"] = _default;

},{"./face":18}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colouredSquare = _interopRequireDefault(require("./colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Face = function Face(properties) {
  var colour = properties.colour;
  return /*#__PURE__*/React.createElement(_colouredSquare["default"], {
    colour: colour,
    position: [-0.5, -0.5, +0.5]
  });
};

var _default = Face;
exports["default"] = _default;

},{"./colouredSquare":16}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _side = _interopRequireDefault(require("./side"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pyramid = function Pyramid(properties) {
  return [/*#__PURE__*/React.createElement(_side["default"], null), /*#__PURE__*/React.createElement(_side["default"], {
    rotations: [0, 90, 0]
  }), /*#__PURE__*/React.createElement(_side["default"], {
    rotations: [0, 180, 0]
  }), /*#__PURE__*/React.createElement(_side["default"], {
    rotations: [0, 270, 0]
  })];
};

var _default = Pyramid;
exports["default"] = _default;

},{"./side":20}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _texturedTriangle = _interopRequireDefault(require("./texturedTriangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Side = function Side(properties) {
  return /*#__PURE__*/React.createElement(_texturedTriangle["default"], {
    scale: [1, 1 / Math.sqrt(2), 1],
    position: [-0.5, 0, 0.5],
    rotations: [-45, 0, 0]
  });
};

var _default = Side;
exports["default"] = _default;

},{"./texturedTriangle":22}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultImageName = "plaster.jpg",
    defaultTextureCoordinates = [[[0, 0], [2, 0], [2, 2]], [[2, 2], [0, 2], [0, 0]]];

var TexturedQuadrangle = /*#__PURE__*/function (_TexturedCanvasElemen) {
  _inherits(TexturedQuadrangle, _TexturedCanvasElemen);

  var _super = _createSuper(TexturedQuadrangle);

  function TexturedQuadrangle() {
    _classCallCheck(this, TexturedQuadrangle);

    return _super.apply(this, arguments);
  }

  _createClass(TexturedQuadrangle, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === void 0 ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === void 0 ? defaultTextureCoordinates : _properties$textureCo,
          texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);

      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(_index.TexturedCanvasElement);

exports["default"] = TexturedQuadrangle;

},{"../../index":27}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../index");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0.5, 1, 0]],
    indexes = [[0, 1, 2]],
    defaultImageName = "stripes.jpg",
    defaultTextureCoordinates = [[[0, 0], [1, 0], [0.5, 1]]];

var TexturedTriangle = /*#__PURE__*/function (_TexturedCanvasElemen) {
  _inherits(TexturedTriangle, _TexturedCanvasElemen);

  var _super = _createSuper(TexturedTriangle);

  function TexturedTriangle() {
    _classCallCheck(this, TexturedTriangle);

    return _super.apply(this, arguments);
  }

  _createClass(TexturedTriangle, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === void 0 ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === void 0 ? defaultTextureCoordinates : _properties$textureCo,
          texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);

      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(_index.TexturedCanvasElement);

exports["default"] = TexturedTriangle;

},{"../../index":27}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _cube = _interopRequireDefault(require("./element/cube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var maskingExample = function maskingExample() {
  var SmallCube = function SmallCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      scale: [1 / 4, 1 / 4, 1 / 4]
    });
  },
      smallCubeMask = /*#__PURE__*/React.createElement(_index.Mask, null, /*#__PURE__*/React.createElement(SmallCube, null)),
      MediumCube = function MediumCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      scale: [1 / 2, 1 / 2, 1 / 2],
      mask: smallCubeMask
    });
  },
      mediumCubeMask = /*#__PURE__*/React.createElement(_index.Mask, null, /*#__PURE__*/React.createElement(MediumCube, null)),
      LargeCube = function LargeCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      mask: mediumCubeMask
    });
  };

  return /*#__PURE__*/React.createElement(_index.Scene, {
    canvas: canvas
  }, /*#__PURE__*/React.createElement(_index.Part, null, /*#__PURE__*/React.createElement(LargeCube, null)), /*#__PURE__*/React.createElement(_index.DesignCamera, null));
};

var _default = maskingExample;
exports["default"] = _default;

},{"../index":27,"./element/cube":17}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _pyramid = _interopRequireDefault(require("./element/pyramid"));

var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var pyramidExample = function pyramidExample() {
  preloadImageMap(function (imageMap) {
    var imageMapJSON = _configuration["default"].imageMapJSON;
    return /*#__PURE__*/React.createElement(_index.Scene, {
      canvas: canvas
    }, /*#__PURE__*/React.createElement(_index.Part, {
      imageMap: imageMap,
      imageMapJSON: imageMapJSON
    }, /*#__PURE__*/React.createElement(_pyramid["default"], null)), /*#__PURE__*/React.createElement(_index.GamingCamera, null));
  });
};

var _default = pyramidExample;
exports["default"] = _default;

function preloadImageMap(callback) {
  var imageMapURI = _configuration["default"].imageMapURI,
      imageMap = new Image(),
      src = imageMapURI; ///

  Object.assign(imageMap, {
    src: src,
    onload: onload
  });

  function onload(event) {
    callback(imageMap);
  }
}

},{"../index":27,"../miscellaneous/configuration":30,"./element/pyramid":19}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var simpleExample = function simpleExample() {
  return /*#__PURE__*/React.createElement(_index.Scene, {
    canvas: canvas
  }, /*#__PURE__*/React.createElement(_index.Part, null, /*#__PURE__*/React.createElement(_colouredSquare["default"], {
    colour: [0, 0, 1]
  })), /*#__PURE__*/React.createElement(_index.DesignCamera, null));
};

var _default = simpleExample;
exports["default"] = _default;

},{"../index":27,"./element/colouredSquare":16}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _index = require("../index");

var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));

var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));

var _texturedQuadrangle = _interopRequireDefault(require("./element/texturedQuadrangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var forEach = _necessary.asynchronousUtilities.forEach;
var canvas = new _index.Canvas(),
    mask = /*#__PURE__*/React.createElement(_index.Mask, null, /*#__PURE__*/React.createElement(_colouredSquare["default"], {
  scale: [0.25, 0.25, 1],
  position: [0.125, 0.125, 0]
}));

var tilingExample = function tilingExample() {
  var imageNames = _configuration["default"].imageNames,
      imageDirectoryURI = _configuration["default"].imageDirectoryURI;
  preloadImages(imageNames, imageDirectoryURI, function (images) {
    return /*#__PURE__*/React.createElement(_index.Scene, {
      canvas: canvas
    }, /*#__PURE__*/React.createElement(_index.Part, {
      images: images,
      imageNames: imageNames,
      imageTiling: true
    }, /*#__PURE__*/React.createElement(_texturedQuadrangle["default"], {
      position: [0, 0, 0],
      imageName: "floorboards.jpg",
      mask: mask
    }), /*#__PURE__*/React.createElement(_texturedQuadrangle["default"], {
      position: [-0.5, -0.5, -0.5],
      imageName: "paving.jpg",
      mask: mask
    })), /*#__PURE__*/React.createElement(_index.DesignCamera, null));
  });
};

var _default = tilingExample;
exports["default"] = _default;

function preloadImages(imageNames, imageDirectoryURI, callback) {
  var images = [],
      context = {
    images: images
  };
  forEach(imageNames, function (imageName, next, done, context) {
    var image = new Image(),
        src = "".concat(imageDirectoryURI, "/").concat(imageName);
    Object.assign(image, {
      src: src,
      onload: onload
    });

    function onload() {
      images.push(image);
      next();
    }
  }, done, context);

  function done() {
    var images = context.images;
    callback(images);
  }
}

},{"../index":27,"../miscellaneous/configuration":30,"./element/colouredSquare":16,"./element/texturedQuadrangle":21,"necessary":95}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Canvas", {
  enumerable: true,
  get: function get() {
    return _canvas["default"];
  }
});
Object.defineProperty(exports, "Mask", {
  enumerable: true,
  get: function get() {
    return _mask["default"];
  }
});
Object.defineProperty(exports, "Part", {
  enumerable: true,
  get: function get() {
    return _part["default"];
  }
});
Object.defineProperty(exports, "Scene", {
  enumerable: true,
  get: function get() {
    return _scene["default"];
  }
});
Object.defineProperty(exports, "Camera", {
  enumerable: true,
  get: function get() {
    return _camera["default"];
  }
});
Object.defineProperty(exports, "GamingCamera", {
  enumerable: true,
  get: function get() {
    return _gaming["default"];
  }
});
Object.defineProperty(exports, "DesignCamera", {
  enumerable: true,
  get: function get() {
    return _design["default"];
  }
});
Object.defineProperty(exports, "CanvasElement", {
  enumerable: true,
  get: function get() {
    return _canvas2["default"];
  }
});
Object.defineProperty(exports, "ColouredCanvasElement", {
  enumerable: true,
  get: function get() {
    return _coloured["default"];
  }
});
Object.defineProperty(exports, "TexturedCanvasElement", {
  enumerable: true,
  get: function get() {
    return _textured["default"];
  }
});

require("./xgl");

var _canvas = _interopRequireDefault(require("./canvas"));

var _mask = _interopRequireDefault(require("./element/mask"));

var _part = _interopRequireDefault(require("./element/part"));

var _scene = _interopRequireDefault(require("./element/scene"));

var _camera = _interopRequireDefault(require("./element/camera"));

var _gaming = _interopRequireDefault(require("./element/camera/gaming"));

var _design = _interopRequireDefault(require("./element/camera/design"));

var _canvas2 = _interopRequireDefault(require("./element/canvas"));

var _coloured = _interopRequireDefault(require("./element/canvas/coloured"));

var _textured = _interopRequireDefault(require("./element/canvas/textured"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./canvas":1,"./element/camera":4,"./element/camera/design":5,"./element/camera/gaming":6,"./element/canvas":7,"./element/canvas/coloured":8,"./element/canvas/textured":10,"./element/mask":11,"./element/part":12,"./element/scene":13,"./xgl":92}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity2 = identity2;
exports.identity3 = identity3;
exports.identity4 = identity4;
exports.multiply2 = multiply2;
exports.multiply3 = multiply3;
exports.multiply4 = multiply4;
exports.invert2 = invert2;
exports.invert3 = invert3;
exports.invert4 = invert4;
exports.transpose2 = transpose2;
exports.transpose3 = transpose3;
exports.transpose4 = transpose4;
exports.scale4 = scale4;
exports.rotate4 = rotate4;
exports.translate4 = translate4;
exports.perspective4 = perspective4;

function identity2() {
  return [1, 0, 0, 1];
}

function identity3() {
  return [1, 0, 0, 0, 1, 0, 0, 0, 1];
}

function identity4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

function multiply2(matrixA, matrixB) {
  var a0 = matrixA[0],
      a1 = matrixA[1],
      a2 = matrixA[2],
      a3 = matrixA[3],
      b0 = matrixB[0],
      b1 = matrixB[1],
      b2 = matrixB[2],
      b3 = matrixB[3];
  return [a0 * b0 + a2 * b1, a1 * b0 + a3 * b1, a0 * b2 + a2 * b3, a1 * b2 + a3 * b3];
}

function multiply3(matrixA, matrixB) {
  var a0 = matrixA[0],
      a1 = matrixA[1],
      a2 = matrixA[2],
      a3 = matrixA[3],
      a4 = matrixA[4],
      a5 = matrixA[5],
      a6 = matrixA[6],
      a7 = matrixA[7],
      a8 = matrixA[8],
      b0 = matrixB[0],
      b1 = matrixB[1],
      b2 = matrixB[2],
      b3 = matrixB[3],
      b4 = matrixB[4],
      b5 = matrixB[5],
      b6 = matrixB[6],
      b7 = matrixB[7],
      b8 = matrixB[8];
  return [a0 * b0 + a3 * b1 + a6 * b2, a1 * b0 + a4 * b1 + a7 * b2, a2 * b0 + a5 * b1 + a8 * b2, a0 * b3 + a3 * b4 + a6 * b5, a1 * b3 + a4 * b4 + a7 * b5, a2 * b3 + a5 * b4 + a8 * b5, a0 * b6 + a3 * b7 + a6 * b8, a1 * b6 + a4 * b7 + a7 * b8, a2 * b6 + a5 * b7 + a8 * b8];
}

function multiply4(matrixA, matrixB) {
  var a0 = matrixA[0],
      a1 = matrixA[1],
      a2 = matrixA[2],
      a3 = matrixA[3],
      a4 = matrixA[4],
      a5 = matrixA[5],
      a6 = matrixA[6],
      a7 = matrixA[7],
      a8 = matrixA[8],
      a9 = matrixA[9],
      a10 = matrixA[10],
      a11 = matrixA[11],
      a12 = matrixA[12],
      a13 = matrixA[13],
      a14 = matrixA[14],
      a15 = matrixA[15],
      b0 = matrixB[0],
      b1 = matrixB[1],
      b2 = matrixB[2],
      b3 = matrixB[3],
      b4 = matrixB[4],
      b5 = matrixB[5],
      b6 = matrixB[6],
      b7 = matrixB[7],
      b8 = matrixB[8],
      b9 = matrixB[9],
      b10 = matrixB[10],
      b11 = matrixB[11],
      b12 = matrixB[12],
      b13 = matrixB[13],
      b14 = matrixB[14],
      b15 = matrixB[15];
  return [a0 * b0 + a4 * b1 + a8 * b2 + a12 * b3, a1 * b0 + a5 * b1 + a9 * b2 + a13 * b3, a2 * b0 + a6 * b1 + a10 * b2 + a14 * b3, a3 * b0 + a7 * b1 + a11 * b2 + a15 * b3, a0 * b4 + a4 * b5 + a8 * b6 + a12 * b7, a1 * b4 + a5 * b5 + a9 * b6 + a13 * b7, a2 * b4 + a6 * b5 + a10 * b6 + a14 * b7, a3 * b4 + a7 * b5 + a11 * b6 + a15 * b7, a0 * b8 + a4 * b9 + a8 * b10 + a12 * b11, a1 * b8 + a5 * b9 + a9 * b10 + a13 * b11, a2 * b8 + a6 * b9 + a10 * b10 + a14 * b11, a3 * b8 + a7 * b9 + a11 * b10 + a15 * b11, a0 * b12 + a4 * b13 + a8 * b14 + a12 * b15, a1 * b12 + a5 * b13 + a9 * b14 + a13 * b15, a2 * b12 + a6 * b13 + a10 * b14 + a14 * b15, a3 * b12 + a7 * b13 + a11 * b14 + a15 * b15];
}

function invert2(matrix) {
  var m0 = matrix[0],
      m1 = matrix[1],
      m2 = matrix[2],
      m3 = matrix[3],
      determinant = m0 * m3 - m2 * m1;

  if (determinant !== 0) {
    return [+m3 / determinant, -m1 / determinant, -m2 / determinant, +m0 / determinant];
  }
}

function invert3(matrix) {
  var m00 = matrix[0],
      m01 = matrix[1],
      m02 = matrix[2],
      m10 = matrix[3],
      m11 = matrix[4],
      m12 = matrix[5],
      m20 = matrix[6],
      m21 = matrix[7],
      m22 = matrix[8],
      b01 = m22 * m11 - m12 * m21,
      b11 = -m22 * m10 + m12 * m20,
      b21 = m21 * m10 - m11 * m20,
      determinant = m00 * b01 + m01 * b11 + m02 * b21;

  if (determinant !== 0) {
    return [b01 / determinant, (-m22 * m01 + m02 * m21) / determinant, (m12 * m01 - m02 * m11) / determinant, b11 / determinant, (m22 * m00 - m02 * m20) / determinant, (-m12 * m00 + m02 * m10) / determinant, b21 / determinant, (-m21 * m00 + m01 * m20) / determinant, (m11 * m00 - m01 * m10) / determinant];
  }
}

function invert4(matrix) {
  var m00 = matrix[0],
      m01 = matrix[1],
      m02 = matrix[2],
      m03 = matrix[3],
      m10 = matrix[4],
      m11 = matrix[5],
      m12 = matrix[6],
      m13 = matrix[7],
      m20 = matrix[8],
      m21 = matrix[9],
      m22 = matrix[10],
      m23 = matrix[11],
      m30 = matrix[12],
      m31 = matrix[13],
      m32 = matrix[14],
      m33 = matrix[15],
      b00 = m00 * m11 - m01 * m10,
      b01 = m00 * m12 - m02 * m10,
      b02 = m00 * m13 - m03 * m10,
      b03 = m01 * m12 - m02 * m11,
      b04 = m01 * m13 - m03 * m11,
      b05 = m02 * m13 - m03 * m12,
      b06 = m20 * m31 - m21 * m30,
      b07 = m20 * m32 - m22 * m30,
      b08 = m20 * m33 - m23 * m30,
      b09 = m21 * m32 - m22 * m31,
      b10 = m21 * m33 - m23 * m31,
      b11 = m22 * m33 - m23 * m32,
      determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (determinant !== 0) {
    return [(m11 * b11 - m12 * b10 + m13 * b09) / determinant, (m02 * b10 - m01 * b11 - m03 * b09) / determinant, (m31 * b05 - m32 * b04 + m33 * b03) / determinant, (m22 * b04 - m21 * b05 - m23 * b03) / determinant, (m12 * b08 - m10 * b11 - m13 * b07) / determinant, (m00 * b11 - m02 * b08 + m03 * b07) / determinant, (m32 * b02 - m30 * b05 - m33 * b01) / determinant, (m20 * b05 - m22 * b02 + m23 * b01) / determinant, (m10 * b10 - m11 * b08 + m13 * b06) / determinant, (m01 * b08 - m00 * b10 - m03 * b06) / determinant, (m30 * b04 - m31 * b02 + m33 * b00) / determinant, (m21 * b02 - m20 * b04 - m23 * b00) / determinant, (m11 * b07 - m10 * b09 - m12 * b06) / determinant, (m00 * b09 - m01 * b07 + m02 * b06) / determinant, (m31 * b01 - m30 * b03 - m32 * b00) / determinant, (m20 * b03 - m21 * b01 + m22 * b00) / determinant];
  }
}

function transpose2(matrix) {
  return [matrix[0], matrix[2], matrix[1], matrix[3]];
}

function transpose3(matrix) {
  return [matrix[0], matrix[3], matrix[6], matrix[1], matrix[4], matrix[7], matrix[2], matrix[5], matrix[8]];
}

function transpose4(matrix) {
  return [matrix[0], matrix[4], matrix[8], matrix[12], matrix[1], matrix[5], matrix[9], matrix[13], matrix[2], matrix[6], matrix[10], matrix[14], matrix[3], matrix[7], matrix[11], matrix[15]];
}

function scale4(matrix, vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2];
  return [matrix[0] * x, matrix[1] * x, matrix[2] * x, matrix[3] * x, matrix[4] * y, matrix[5] * y, matrix[6] * y, matrix[7] * y, matrix[8] * z, matrix[9] * z, matrix[10] * z, matrix[11] * z, matrix[12] * 1, matrix[13] * 1, matrix[14] * 1, matrix[15] * 1];
}

function rotate4(matrix, angle, vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2];
  var length = Math.sqrt(x * x + y * y + z * z);

  if (length !== 0) {
    x /= length;
    y /= length;
    z /= length;
    var s = Math.sin(angle),
        c = Math.cos(angle),
        t = 1 - c,
        m00 = matrix[0],
        m01 = matrix[1],
        m02 = matrix[2],
        m03 = matrix[3],
        m10 = matrix[4],
        m11 = matrix[5],
        m12 = matrix[6],
        m13 = matrix[7],
        m20 = matrix[8],
        m21 = matrix[9],
        m22 = matrix[10],
        m23 = matrix[11],
        b00 = x * x * t + c,
        b01 = y * x * t + z * s,
        b02 = z * x * t - y * s,
        b10 = x * y * t - z * s,
        b11 = y * y * t + c,
        b12 = z * y * t + x * s,
        b20 = x * z * t + y * s,
        b21 = y * z * t - x * s,
        b22 = z * z * t + c;
    return [m00 * b00 + m10 * b01 + m20 * b02, m01 * b00 + m11 * b01 + m21 * b02, m02 * b00 + m12 * b01 + m22 * b02, m03 * b00 + m13 * b01 + m23 * b02, m00 * b10 + m10 * b11 + m20 * b12, m01 * b10 + m11 * b11 + m21 * b12, m02 * b10 + m12 * b11 + m22 * b12, m03 * b10 + m13 * b11 + m23 * b12, m00 * b20 + m10 * b21 + m20 * b22, m01 * b20 + m11 * b21 + m21 * b22, m02 * b20 + m12 * b21 + m22 * b22, m03 * b20 + m13 * b21 + m23 * b22, matrix[12], matrix[13], matrix[14], matrix[15]];
  }
}

function translate4(matrix, vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      m00 = matrix[0],
      m01 = matrix[1],
      m02 = matrix[2],
      m03 = matrix[3],
      m10 = matrix[4],
      m11 = matrix[5],
      m12 = matrix[6],
      m13 = matrix[7],
      m20 = matrix[8],
      m21 = matrix[9],
      m22 = matrix[10],
      m23 = matrix[11];
  return [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m00 * x + m10 * y + m20 * z + matrix[12], m01 * x + m11 * y + m21 * z + matrix[13], m02 * x + m12 * y + m22 * z + matrix[14], m03 * x + m13 * y + m23 * z + matrix[15]];
}

function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
  var f = 1.0 / Math.tan(fieldOfView / 2),
      nf = 1 / (zNear - zFar);
  return [f / aspectRatio, 0, 0, 0, 0, f, 0, 0, 0, 0, (zFar + zNear) * nf, -1, 0, 0, 2 * zFar * zNear * nf, 0];
}

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero2 = zero2;
exports.zero3 = zero3;
exports.zero4 = zero4;
exports.length2 = length2;
exports.length3 = length3;
exports.length4 = length4;
exports.dot2 = dot2;
exports.dot3 = dot3;
exports.dot4 = dot4;
exports.cross3 = cross3;
exports.normalise2 = normalise2;
exports.normalise3 = normalise3;
exports.normalise4 = normalise4;
exports.reflect2 = reflect2;
exports.reflect3 = reflect3;
exports.reflect4 = reflect4;
exports.scale2 = scale2;
exports.scale3 = scale3;
exports.scale4 = scale4;
exports.add2 = add2;
exports.add3 = add3;
exports.add4 = add4;
exports.subtract2 = subtract2;
exports.subtract3 = subtract3;
exports.subtract4 = subtract4;
exports.multiply2 = multiply2;
exports.multiply3 = multiply3;
exports.multiply4 = multiply4;
exports.transform2 = transform2;
exports.transform3 = transform3;
exports.transform4 = transform4;

function zero2() {
  return [0, 0];
}

function zero3() {
  return [0, 0, 0];
}

function zero4() {
  return [0, 0, 0, 0];
}

function length2(vector) {
  var x = vector[0],
      y = vector[1];
  return Math.sqrt(x * x + y * y);
}

function length3(vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2];
  return Math.sqrt(x * x + y * y + z * z);
}

function length4(vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      w = vector[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

function dot2(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
}

function dot3(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2];
}

function dot4(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2] + vectorA[3] * vectorB[3];
}

function cross3(vectorA, vectorB) {
  var ax = vectorA[0],
      ay = vectorA[1],
      az = vectorA[2],
      bx = vectorB[0],
      by = vectorB[1],
      bz = vectorB[2];
  return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
}

function normalise2(vector) {
  var x = vector[0],
      y = vector[1],
      length = Math.sqrt(x * x + y * y);

  if (length > 0) {
    return [x / length, y / length];
  }
}

function normalise3(vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      length = Math.sqrt(x * x + y * y + z * z);

  if (length > 0) {
    return [x / length, y / length, z / length];
  }
}

function normalise4(vector) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      w = vector[3],
      length = Math.sqrt(x * x + y * y + z * z + w * w);

  if (length > 0) {
    return [x / length, y / length, z / length, w / length];
  }
}

function reflect2(vector) {
  return [vector[0] * -1, vector[1] * -1];
}

function reflect3(vector) {
  return [vector[0] * -1, vector[1] * -1, vector[2] * -1];
}

function reflect4(vector) {
  return [vector[0] * -1, vector[1] * -1, vector[2] * -1, vector[3] * -1];
}

function scale2(vector, scalar) {
  return [vector[0] * scalar, vector[1] * scalar];
}

function scale3(vector, scalar) {
  return [vector[0] * scalar, vector[1] * scalar, vector[2] * scalar];
}

function scale4(vector, scalar) {
  return [vector[0] * scalar, vector[1] * scalar, vector[2] * scalar, vector[3] * scalar];
}

function add2(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
}

function add3(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1], vectorA[2] + vectorB[2]];
}

function add4(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1], vectorA[2] + vectorB[2], vectorA[3] + vectorB[3]];
}

function subtract2(vectorA, vectorB) {
  return [vectorA[0] - vectorB[0], vectorA[1] - vectorB[1]];
}

function subtract3(vectorA, vectorB) {
  return [vectorA[0] - vectorB[0], vectorA[1] - vectorB[1], vectorA[2] - vectorB[2]];
}

function subtract4(vectorA, vectorB) {
  return [vectorA[0] - vectorB[0], vectorA[1] - vectorB[1], vectorA[2] - vectorB[2], vectorA[3] - vectorB[3]];
}

function multiply2(vectorA, vectorB) {
  return [vectorA[0] * vectorB[0], vectorA[1] * vectorB[1]];
}

function multiply3(vectorA, vectorB) {
  return [vectorA[0] * vectorB[0], vectorA[1] * vectorB[1], vectorA[2] * vectorB[2]];
}

function multiply4(vectorA, vectorB) {
  return [vectorA[0] * vectorB[0], vectorA[1] * vectorB[1], vectorA[2] * vectorB[2], vectorA[3] * vectorB[3]];
}

function transform2(vector, matrix) {
  var x = vector[0],
      y = vector[1];
  return [matrix[0] * x + matrix[2] * y, matrix[1] * x + matrix[3] * y];
}

function transform3(vector, matrix) {
  var x = vector[0],
      y = vector[1],
      z = vector[2];
  return [matrix[0] * x + matrix[3] * y + matrix[6] * z, matrix[1] * x + matrix[4] * y + matrix[7] * z, matrix[2] * x + matrix[5] * y + matrix[8] * z];
}

function transform4(vector, matrix) {
  var x = vector[0],
      y = vector[1],
      z = vector[2],
      w = vector[3];
  return [matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w, matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w, matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w, matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w];
}

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var configuration = window.__configuration__; ///

var _default = configuration;
exports["default"] = _default;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyEvents = /*#__PURE__*/function () {
  function KeyEvents(handlers, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: "isShiftKeyDown",
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: "keyUpEventListener",
    value: function keyUpEventListener(event) {
      var _this = this;

      var keyCode = event.keyCode;

      if (keyCode === _constants.SHIFT_KEY_CODE) {
        this.shiftKeyDown = false;
        this.handlers.forEach(function (handler) {
          return handler(_this.shiftKeyDown);
        });
      }
    }
  }, {
    key: "keyDownEventListener",
    value: function keyDownEventListener(event) {
      var _this2 = this;

      var keyCode = event.keyCode;

      if (keyCode === _constants.SHIFT_KEY_CODE) {
        this.shiftKeyDown = true;
        this.handlers.forEach(function (handler) {
          return handler(_this2.shiftKeyDown);
        });
      }
    }
  }, {
    key: "addShiftKeyHandler",
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var handler = shiftKeyHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var documentDOMElement = document.documentElement,
          ///
      keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);
      documentDOMElement.addEventListener("keyup", keyUpEventListener);
      documentDOMElement.addEventListener("keydown", keyDownEventListener);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var handlers = [],
          shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlers, shiftKeyDown);
      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

exports["default"] = KeyEvents;

},{"../constants":2}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseEvents = /*#__PURE__*/function () {
  function MouseEvents(handlersMap, mouseDown) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
  }

  _createClass(MouseEvents, [{
    key: "mouseEventListener",
    value: function mouseEventListener(event, eventType) {
      var _this = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event);
      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this.mouseDown);
      });
      event.preventDefault();
    }
  }, {
    key: "mouseUpEventListener",
    value: function mouseUpEventListener(event) {
      this.mouseDown = false;
      this.mouseEventListener(event, _constants.MOUSE_UP);
    }
  }, {
    key: "mouseDownEventListener",
    value: function mouseDownEventListener(event) {
      this.mouseDown = true;
      this.mouseEventListener(event, _constants.MOUSE_DOWN);
    }
  }, {
    key: "mouseMoveEventListener",
    value: function mouseMoveEventListener(event) {
      this.mouseEventListener(event, _constants.MOUSE_MOVE);
    }
  }, {
    key: "mouseWheelEventListener",
    value: function mouseWheelEventListener(event) {
      var handlers = this.handlersMap[_constants.MOUSE_WHEEL],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);
      handlers.forEach(function (handler) {
        return handler(mouseWheelDelta);
      });
      event.preventDefault();
    }
  }, {
    key: "addMouseUpHandler",
    value: function addMouseUpHandler(mouseUpHandler) {
      var mouseUpHandlers = this.handlersMap[_constants.MOUSE_UP];
      mouseUpHandlers.push(mouseUpHandler);
    }
  }, {
    key: "addMouseDownHandler",
    value: function addMouseDownHandler(mouseDownHandler) {
      var mouseDownHandlers = this.handlersMap[_constants.MOUSE_DOWN];
      mouseDownHandlers.push(mouseDownHandler);
    }
  }, {
    key: "addMouseMoveHandler",
    value: function addMouseMoveHandler(mouseMoveHandler) {
      var mouseMoveHandlers = this.handlersMap[_constants.MOUSE_MOVE];
      mouseMoveHandlers.push(mouseMoveHandler);
    }
  }, {
    key: "addMouseWheelHandler",
    value: function addMouseWheelHandler(mouseWheelHandler) {
      var mouseWheelHandlers = this.handlersMap[_constants.MOUSE_WHEEL];
      mouseWheelHandlers.push(mouseWheelHandler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var canvasDOMElement = canvas.getDOMElement(),
          mouseUpEventListener = this.mouseUpEventListener.bind(this),
          mouseDownEventListener = this.mouseDownEventListener.bind(this),
          mouseMoveEventListener = this.mouseMoveEventListener.bind(this),
          mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
      this.handlersMap[_constants.MOUSE_UP] = [];
      this.handlersMap[_constants.MOUSE_DOWN] = [];
      this.handlersMap[_constants.MOUSE_MOVE] = [];
      this.handlersMap[_constants.MOUSE_WHEEL] = [];
      canvasDOMElement.addEventListener("mouseup", mouseUpEventListener);
      canvasDOMElement.addEventListener("mousedown", mouseDownEventListener);
      canvasDOMElement.addEventListener("mousemove", mouseMoveEventListener);
      canvasDOMElement.addEventListener("mousewheel", mouseWheelEventListener);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var handlersMap = {},
          mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown);
      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

exports["default"] = MouseEvents;

function mouseWheelDeltaFromEvent(event) {
  var mouseWheelDelta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return mouseWheelDelta;
}

function mouseCoordinatesFromEvent(event) {
  var target = event.target,
      clientX = event.clientX,
      clientY = event.clientY,
      canvasDOMElement = target,
      boundingClientRect = canvasDOMElement.getBoundingClientRect(),
      top = boundingClientRect.top,
      left = boundingClientRect.left,
      mouseCoordinates = [clientX - left, top - clientY];
  return mouseCoordinates;
}

},{"../constants":2}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vector = require("../maths/vector");

var _offsets = require("../utilities/offsets");

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pan = /*#__PURE__*/function () {
  function Pan(offsets) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
  }

  _createClass(Pan, [{
    key: "getOffsets",
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: "updateOffsets",
    value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
      var angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * _constants.DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = (0, _vector.reflect2)((0, _vector.scale2)(relativeMouseCoordinates, _constants.OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = (0, _offsets.relativeOffsetsFromAnglesAndDirections)(angles, directions);
      this.offsets = (0, _vector.add3)(this.offsets, relativeOffsets);
    }
  }], [{
    key: "fromInitialOffsets",
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      pan = new Pan(offsets);
      return pan;
    }
  }, {
    key: "fromInitialPosition",
    value: function fromInitialPosition(initialPosition) {
      var offsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_SCALAR),
          pan = new Pan(offsets);
      return pan;
    }
  }]);

  return Pan;
}();

exports["default"] = Pan;

},{"../constants":2,"../maths/vector":29,"../utilities/offsets":86}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("../utilities/array");

var _vector = require("../maths/vector");

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tilt = /*#__PURE__*/function () {
  function Tilt(angles, flipped) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.flipped = flipped;
  }

  _createClass(Tilt, [{
    key: "getXAngle",
    value: function getXAngle() {
      var firstAngle = (0, _array.first)(this.angles),
          xAngle = firstAngle; ///

      return xAngle;
    }
  }, {
    key: "getYAngle",
    value: function getYAngle() {
      var secondAngle = (0, _array.second)(this.angles),
          yAngle = secondAngle; ///

      return yAngle;
    }
  }, {
    key: "getZAngle",
    value: function getZAngle() {
      var zAngle = 0;
      return zAngle;
    }
  }, {
    key: "getAngles",
    value: function getAngles() {
      return this.angles;
    }
  }, {
    key: "updateAngles",
    value: function updateAngles(relativeMouseCoordinates) {
      var scalar = this.flipped ? +_constants.ANGLES_SCALAR : -_constants.ANGLES_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = (0, _vector.transform3)([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = (0, _vector.add3)(this.angles, relativeAngles);
    }
  }], [{
    key: "fromInitialAnglesAndFlipped",
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? +_constants.DEGREES_TO_RADIANS_SCALAR : -_constants.DEGREES_TO_RADIANS_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          angles = (0, _vector.transform3)([].concat(_toConsumableArray(initialAngles), [0]), matrix),
          ///
      tilt = new Tilt(angles, flipped);
      return tilt;
    }
  }]);

  return Tilt;
}();

exports["default"] = Tilt;

},{"../constants":2,"../maths/vector":29,"../utilities/array":81}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _keyEvents = _interopRequireDefault(require("./keyEvents"));

var _mouseEvents = _interopRequireDefault(require("./mouseEvents"));

var _vector = require("../maths/vector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInput = /*#__PURE__*/function () {
  function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, UserInput);

    this.handlers = handlers;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(UserInput, [{
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      this.previousMouseCoordinates = this.mouseCoordinates; ///

      this.mouseCoordinates = mouseCoordinates;

      if (this.previousMouseCoordinates === null) {
        return;
      }

      if (mouseDown) {
        var mouseWheelDelta = 0,
            ///
        shiftKeyDown = this.keyEvents.isShiftKeyDown(),
            relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
        this.handlers.forEach(function (handler) {
          return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
    }
  }, {
    key: "mouseWheelHandler",
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = (0, _vector.zero2)();
      this.handlers.forEach(function (handler) {
        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
      });
    }
  }, {
    key: "addUserInputHandler",
    value: function addUserInputHandler(userInputHandler) {
      var handler = userInputHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);
      this.keyEvents.initialise(canvas);
      this.mouseEvents.initialise(canvas);
      this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var handlers = [],
          keyEvents = _keyEvents["default"].fromNothing(),
          mouseEvents = _mouseEvents["default"].fromNothing(),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);

      return userInput;
    }
  }]);

  return UserInput;
}();

exports["default"] = UserInput;

},{"../maths/vector":29,"./keyEvents":31,"./mouseEvents":32}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Zoom = /*#__PURE__*/function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: "getDistance",
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: "updateDistance",
    value: function updateDistance(mouseWheelDelta) {
      this.distance -= mouseWheelDelta * _constants.DELTA_SCALAR;
      this.distance = Math.max(_constants.MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: "fromInitialDistance",
    value: function fromInitialDistance(initialDistance) {
      var distance = initialDistance,
          ///
      zoom = new Zoom(distance);
      return zoom;
    }
  }]);

  return Zoom;
}();

exports["default"] = Zoom;

},{"../constants":2}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableBlending = enableBlending;

function enableBlending() {
  var _this$context = this.context,
      BLEND = _this$context.BLEND,
      SRC_ALPHA = _this$context.SRC_ALPHA,
      ONE = _this$context.ONE,
      capacity = BLEND,
      sourceFactor = SRC_ALPHA,
      destinationFactor = ONE;
  this.context.enable(capacity);
  this.context.blendFunc(sourceFactor, destinationFactor);
}

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElementBuffer = createElementBuffer;
exports.bindElementBuffer = bindElementBuffer;
exports.createBuffer = createBuffer;
exports.bindBuffer = bindBuffer;

function createElementBuffer(data) {
  var _this$context = this.context,
      ELEMENT_ARRAY_BUFFER = _this$context.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _this$context.STATIC_DRAW,
      target = ELEMENT_ARRAY_BUFFER,
      usage = STATIC_DRAW,
      uint16Array = new Uint16Array(data),
      elementBuffer = this.context.createBuffer();
  this.context.bindBuffer(target, elementBuffer);
  this.context.bufferData(target, uint16Array, usage);
  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER,
      target = ELEMENT_ARRAY_BUFFER;
  this.context.bindBuffer(target, elementBuffer);
}

function createBuffer(data) {
  var _this$context2 = this.context,
      ARRAY_BUFFER = _this$context2.ARRAY_BUFFER,
      STATIC_DRAW = _this$context2.STATIC_DRAW,
      target = ARRAY_BUFFER,
      usage = STATIC_DRAW,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data);
  this.context.bindBuffer(target, buffer);
  this.context.bufferData(target, float32Array, usage);
  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var _this$context3 = this.context,
      ARRAY_BUFFER = _this$context3.ARRAY_BUFFER,
      FLOAT = _this$context3.FLOAT,
      target = ARRAY_BUFFER,
      type = FLOAT,
      normalize = false,
      stride = 0,
      offset = 0;
  this.context.bindBuffer(target, buffer);
  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
  this.context.enableVertexAttribArray(attributeLocation);
}

},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearColour = clearColour;
exports.clearColourBuffer = clearColourBuffer;
var defaultR = 0.0,
    defaultG = 0.0,
    defaultB = 0.0,
    defaultA = 1.0;

function clearColour() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultR;
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultG;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultB;
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultA;
  this.context.clearColor(r, g, b, a);
}

function clearColourBuffer() {
  var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT,
      mask = COLOR_BUFFER_BIT;
  this.context.clear(mask);
}

},{}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearDepth = clearDepth;
exports.clearDepthBuffer = clearDepthBuffer;
exports.enableDepthTesting = enableDepthTesting;
var defaultDepth = 1.0;

function clearDepth() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDepth;
  this.context.clearDepth(depth);
}

function clearDepthBuffer() {
  var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT,
      mask = DEPTH_BUFFER_BIT;
  this.context.clear(mask);
}

function enableDepthTesting() {
  var _this$context = this.context,
      DEPTH_TEST = _this$context.DEPTH_TEST,
      LEQUAL = _this$context.LEQUAL,
      capacity = DEPTH_TEST,
      depthComparisonFunction = LEQUAL;
  this.context.enable(capacity);
  this.context.depthFunc(depthComparisonFunction);
}

},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniformLocation = getUniformLocation;
exports.getAttributeLocation = getAttributeLocation;
exports.setUniformLocationIntegerValue = setUniformLocationIntegerValue;

function getUniformLocation(program, name) {
  return this.context.getUniformLocation(program, name);
}

function getAttributeLocation(program, name) {
  return this.context.getAttribLocation(program, name);
}

function setUniformLocationIntegerValue(uniformLocation, integerValue) {
  this.context.uniform1i(uniformLocation, integerValue);
}

},{}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMatrix = applyMatrix;

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

},{}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProgram = createProgram;
exports.useProgram = useProgram;

function createProgram(vertexShader, fragmentShader) {
  var program = this.context.createProgram();
  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);
  this.context.linkProgram(program);
  return program;
}

function useProgram(program) {
  this.context.useProgram(program);
}

},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createShader = createShader;
exports.createVertexShader = createVertexShader;
exports.createFragmentShader = createFragmentShader;

function createShader(type, shaderSource) {
  var COMPILE_STATUS = this.context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = this.context.createShader(type);
  this.context.shaderSource(shader, shaderSource);
  this.context.compileShader(shader);
  var compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error("Unable to create the shader.");
  }

  return shader;
}

function createVertexShader(vertexShaderSource, canvas) {
  var VERTEX_SHADER = this.context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = this.createShader(type, vertexShaderSource);
  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  var FRAGMENT_SHADER = this.context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      fragmentShader = this.createShader(type, fragmentShaderSource);
  return fragmentShader;
}

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTexture = createTexture;
exports.enableAnisotropicFiltering = enableAnisotropicFiltering;

function createTexture(image, index, repeat) {
  var _this$context = this.context,
      RGBA = _this$context.RGBA,
      LINEAR = _this$context.LINEAR,
      UNSIGNED_BYTE = _this$context.UNSIGNED_BYTE,
      TEXTURE0 = _this$context.TEXTURE0,
      TEXTURE_2D = _this$context.TEXTURE_2D,
      TEXTURE_WRAP_S = _this$context.TEXTURE_WRAP_S,
      TEXTURE_WRAP_T = _this$context.TEXTURE_WRAP_T,
      UNPACK_FLIP_Y_WEBGL = _this$context.UNPACK_FLIP_Y_WEBGL,
      CLAMP_TO_EDGE = _this$context.CLAMP_TO_EDGE,
      NEAREST = _this$context.NEAREST,
      REPEAT = _this$context.REPEAT,
      TEXTURE_MIN_FILTER = _this$context.TEXTURE_MIN_FILTER,
      target = TEXTURE0 + index,
      level = 0,
      internalFormat = RGBA,
      format = RGBA,
      type = UNSIGNED_BYTE,
      texture = this.context.createTexture();
  this.context.activeTexture(target);
  this.context.bindTexture(TEXTURE_2D, texture);
  this.context.pixelStorei(UNPACK_FLIP_Y_WEBGL, true);
  this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);

  if (repeat) {
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, REPEAT);
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, REPEAT);
  } else {
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }

  this.context.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
  return texture;
}

function enableAnisotropicFiltering() {
  var extension = this.context.getExtension("EXT_texture_filter_anisotropic") || this.context.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.context.getExtension("WEBKIT_EXT_texture_filter_anisotropic");

  if (extension) {
    var TEXTURE_2D = this.context.TEXTURE_2D,
        MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT,
        TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT,
        maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
  }
}

},{}],46:[function(require,module,exports){
"use strict";

var _vector = require("../maths/vector");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Edge = /*#__PURE__*/function () {
  function Edge(position, extent) {
    _classCallCheck(this, Edge);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Edge, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      return this.extent;
    }
  }, {
    key: "clone",
    value: function clone() {
      var position = this.position.slice(),
          extent = this.extent.slice(),
          edge = new Edge(position, extent);
      return edge;
    }
  }], [{
    key: "fromStartVertexAndEndVertex",
    value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
      if (endVertex === undefined) {
        endVertex = startVertex;
        startVertex = Class;
        Class = Edge;
      }

      var startPosition = startVertex.getPosition(),
          endPosition = endVertex.getPosition(),
          position = startPosition.slice(),
          ///
      extent = (0, _vector.subtract3)(endPosition, startPosition),
          edge = new Class(position, extent);
      return edge;
    }
  }]);

  return Edge;
}();

module.exports = Edge;

},{"../maths/vector":29}],47:[function(require,module,exports){
"use strict";

var _edge = _interopRequireDefault(require("../edge"));

var _array = require("../../utilities/array");

var _vector = require("../../maths/vector");

var _midPoint = require("../../utilities/midPoint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaskingEdge = /*#__PURE__*/function (_Edge) {
  _inherits(MaskingEdge, _Edge);

  var _super = _createSuper(MaskingEdge);

  function MaskingEdge() {
    _classCallCheck(this, MaskingEdge);

    return _super.apply(this, arguments);
  }

  _createClass(MaskingEdge, [{
    key: "isMidPointPositionToTheLeft",
    value: function isMidPointPositionToTheLeft(midPointPosition) {
      midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition); ///

      var extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position),
          crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition),
          ///
      thirdCrossProductComponent = (0, _array.third)(crossProductComponents),
          midPointPositionToTheLeft = thirdCrossProductComponent > 0;
      return midPointPositionToTheLeft;
    }
  }, {
    key: "isMidPointPositionToTheRight",
    value: function isMidPointPositionToTheRight(midPointPosition) {
      var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
          midPointPositionToTheRight = !midPointPositionToTheLeft;
      return midPointPositionToTheRight;
    }
  }], [{
    key: "fromStartVertexAndEndVertex",
    value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
      return _edge["default"].fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
    }
  }]);

  return MaskingEdge;
}(_edge["default"]);

module.exports = MaskingEdge;

},{"../../maths/vector":29,"../../utilities/array":81,"../../utilities/midPoint":85,"../edge":46}],48:[function(require,module,exports){
"use strict";

var _edge = _interopRequireDefault(require("./edge"));

var _normal = _interopRequireDefault(require("./normal"));

var _vertex = _interopRequireDefault(require("./vertex"));

var _array = require("../utilities/array");

var _constants = require("../constants");

var _facet = require("../utilities/facet");

var _midPoint = require("../utilities/midPoint");

var _intersection = require("../utilities/intersection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Facet = /*#__PURE__*/function () {
  function Facet(vertices, normal, edges) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
    this.edges = edges;
  }

  _createClass(Facet, [{
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: "getNormal",
    value: function getNormal() {
      return this.normal;
    }
  }, {
    key: "getEdges",
    value: function getEdges() {
      return this.edges;
    }
  }, {
    key: "getVertexPositions",
    value: function getVertexPositions() {
      var vertexPositions = this.vertices.map(function (vertex) {
        return vertex.getPosition();
      });
      return vertexPositions;
    }
  }, {
    key: "getVertexNormals",
    value: function getVertexNormals() {
      var normalExtent = this.normal.getExtent(),
          vertexNormal = normalExtent,
          ///
      vertexNormals = [vertexNormal, vertexNormal, vertexNormal];
      return vertexNormals;
    }
  }, {
    key: "getVertexIndexes",
    value: function getVertexIndexes(index) {
      var vertexIndex = index * 3,
          vertexIndexes = [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2];
      return vertexIndexes;
    }
  }, {
    key: "isMasked",
    value: function isMasked(maskingFacet) {
      var maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges; ///

      return masked;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      this.vertices = (0, _array.permute)(this.vertices, places);
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "rotate",
    value: function rotate(rotationQuaternion) {
      this.vertices.forEach(function (vertex) {
        return vertex.rotate(rotationQuaternion);
      });
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      this.vertices.forEach(function (vertex) {
        return vertex.applyTransform(transform);
      });
      this.normal = (0, _facet.calculateNormal)(this.vertices, _normal["default"]);
      this.edges = (0, _facet.calculateEdges)(this.vertices, _edge["default"]);
    }
  }, {
    key: "splitWithIntersections",
    value: function splitWithIntersections(intersections, smallerFacets) {
      var nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections),
          nonNullIntersectionsLength = nonNullIntersections.length;

      switch (nonNullIntersectionsLength) {
        case 2:
          this.splitWithTwoNonNullIntersections(intersections, smallerFacets);
          break;

        case 1:
          this.splitWithOneNonNullIntersection(intersections, smallerFacets);
          break;

        case 0:
          this.splitWithNoNonNullIntersections(intersections, smallerFacets);
          break;
      }
    }
  }, {
    key: "splitWithTwoNonNullIntersections",
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets) {
      var nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections),
          places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
      intersections = (0, _array.permute)(intersections, places);
      intersections = intersections.slice(1); ///

      this.permute(places);
      var startVertexPositionIndexes = [1, 2],
          endVertexPositionIndexes = [2, 0],
          indexTuples = [[0, 1, 3], [3, 4, 0], [3, 2, 4]];
      this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
    }
  }, {
    key: "splitWithOneNonNullIntersection",
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets) {
      var nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections),
          places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
      intersections = (0, _array.permute)(intersections, places);
      intersections = intersections.slice(0, 1); ///

      this.permute(places);
      var startVertexPositionIndexes = [0],
          endVertexPositionIndexes = [1],
          indexTuples = [[0, 3, 2], [3, 1, 2]];
      this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
    }
  }, {
    key: "splitWithNoNonNullIntersections",
    value: function splitWithNoNonNullIntersections(intersections, smallerFacets) {
      var smallerFacet = this.fromVertices(this.vertices); ///

      smallerFacets.push(smallerFacet);
    }
  }, {
    key: "splitWithIndexTuplesAndIntersections",
    value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets) {
      var _this = this;

      var vertexPositions = this.getVertexPositions(),
          intermediateVertexPositions = intersections.map(function (intersection, index) {
        var startVertexPositionIndex = startVertexPositionIndexes[index],
            endVertexPositionIndex = endVertexPositionIndexes[index],
            startVertexPosition = vertexPositions[startVertexPositionIndex],
            endVertexPosition = vertexPositions[endVertexPositionIndex],
            intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
        return intermediateVertexPosition;
      });
      (0, _array.push)(vertexPositions, intermediateVertexPositions);
      indexTuples.forEach(function (indexTuple) {
        var positions = vertexPositions,
            ///
        indexes = indexTuple,
            ///
        facet = _this,
            smallerFacet = smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet);

        if (smallerFacet !== null) {
          smallerFacets.push(smallerFacet);
        }
      });
    }
  }]);

  return Facet;
}();

module.exports = Facet;

function smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet) {
  var vertices = indexes.map(function (index) {
    var position = positions[index];
    position = position.slice(); ///

    var vertex = _vertex["default"].fromPosition(position);

    return vertex;
  }),
      smallerFacet = facet.fromVertices(vertices);
  return smallerFacet;
}

},{"../constants":2,"../utilities/array":81,"../utilities/facet":82,"../utilities/intersection":83,"../utilities/midPoint":85,"./edge":46,"./normal":52,"./vertex":53}],49:[function(require,module,exports){
"use strict";

var _edge = _interopRequireDefault(require("../edge"));

var _facet = _interopRequireDefault(require("../facet"));

var _normal = _interopRequireDefault(require("../normal"));

var _vertex = _interopRequireDefault(require("../vertex"));

var _approximate = require("../../utilities/approximate");

var _vertices = require("../../utilities/vertices");

var _facet2 = require("../../utilities/facet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColouredFacet = /*#__PURE__*/function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  var _super = _createSuper(ColouredFacet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    var _this;

    _classCallCheck(this, ColouredFacet);

    _this = _super.call(this, vertices, normal, edges);
    _this.rgba = rgba;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: "clone",
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();
      vertices = (0, _facet2.cloneVertices)(vertices);
      normal = (0, _facet2.cloneNormal)(normal);
      edges = (0, _facet2.cloneEdges)(edges);
      var rgba = this.rgba,
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      return colouredFacet;
    }
  }, {
    key: "getVertexColours",
    value: function getVertexColours() {
      var vertexColour = this.rgba,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];
      return vertexColours;
    }
  }, {
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var colouredFacet = null;
      var area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var rgba = this.rgba,
            normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]);
        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }], [{
    key: "fromCoordinateTuplesIndexTupleAndColour",
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var colouredFacet = null;
      var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex["default"]),
          area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]),
            rgba = [].concat(_toConsumableArray(colour), [1]); ///

        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(_facet["default"]);

module.exports = ColouredFacet;

},{"../../utilities/approximate":80,"../../utilities/facet":82,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],50:[function(require,module,exports){
"use strict";

var _edge = _interopRequireDefault(require("../edge"));

var _facet = _interopRequireDefault(require("../facet"));

var _normal = _interopRequireDefault(require("../normal"));

var _vertex = _interopRequireDefault(require("../vertex"));

var _array = require("../../utilities/array");

var _approximate = require("../../utilities/approximate");

var _vertices = require("../../utilities/vertices");

var _facet2 = require("../../utilities/facet");

var _texture = require("../../utilities/texture");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TexturedFacet = /*#__PURE__*/function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  var _super = _createSuper(TexturedFacet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    var _this;

    _classCallCheck(this, TexturedFacet);

    _this = _super.call(this, vertices, normal, edges);
    _this.imageName = imageName;
    _this.textureCoordinateTuples = textureCoordinateTuples;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: "clone",
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();
      vertices = (0, _facet2.cloneVertices)(vertices);
      normal = (0, _facet2.cloneNormal)(normal);
      edges = (0, _facet2.cloneEdges)(edges);
      var imageName = this.imageName,
          ///
      textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      return texturedFacet;
    }
  }, {
    key: "getImageName",
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: "getTextureCoordinateTuples",
    value: function getTextureCoordinateTuples() {
      return this.textureCoordinateTuples;
    }
  }, {
    key: "getMappedTextureCoordinateTuples",
    value: function getMappedTextureCoordinateTuples(imageMapJSON) {
      var json = imageMapJSON[this.imageName],
          extent = json,
          ///
      mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
      return mappedTextureCoordinateTuples;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);

      this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
    }
  }, {
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var texturedFacet = null;
      var area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            parentVertices = this.vertices,
            ///
        adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]),
            imageName = this.imageName,
            textureCoordinateTuples = adjustedTextureCoordinateTuple; ///

        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }], [{
    key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName",
    value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(textureCoordinateTuples, coordinateTuples, indexTuple, imageName) {
      var texturedFacet = null;
      var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex["default"]),
          area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]);
        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(_facet["default"]);

module.exports = TexturedFacet;

},{"../../utilities/approximate":80,"../../utilities/array":81,"../../utilities/facet":82,"../../utilities/texture":89,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],51:[function(require,module,exports){
"use strict";

var _masking = _interopRequireDefault(require("./edge/masking"));

var _verticalLine = _interopRequireDefault(require("./verticalLine"));

var _vertices = require("../utilities/vertices");

var _array = require("../utilities/array");

var _constants = require("../constants");

var _quaternion = require("../utilities/quaternion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MaskingFacet = /*#__PURE__*/function () {
  function MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    this.maskingEdges = maskingEdges;
    this.verticalLines = verticalLines;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(MaskingFacet, [{
    key: "getMaskingEdges",
    value: function getMaskingEdges() {
      return this.maskingEdges;
    }
  }, {
    key: "getVerticalLines",
    value: function getVerticalLines() {
      return this.verticalLines;
    }
  }, {
    key: "getForwardsRotationQuaternion",
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: "getBackwardsRotationQuaternion",
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: "maskFacet",
    value: function maskFacet(facet, unmaskedFacets) {
      var _this = this;

      var unmaskedFacet = facet.clone(); ///

      facet.rotate(this.forwardsRotationQuaternion);
      var maskingFacet = this,
          ///
      smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];
      (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function (smallerFacet) {
        var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
        return smallerFacetMasked;
      });
      var maskedSmallerFacetsLength = maskedSmallerFacets.length;

      if (maskedSmallerFacetsLength === 0) {
        unmaskedFacets.push(unmaskedFacet);
      } else {
        unmaskedSmallerFacets.forEach(function (unmaskedSmallerFacet) {
          unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
        });
        (0, _array.push)(unmaskedFacets, unmaskedSmallerFacets);
      }
    }
  }, {
    key: "splitFacet",
    value: function splitFacet(facet) {
      var facets = [facet],
          smallerFacets = facets; ///

      this.verticalLines.forEach(function (verticalLine) {
        smallerFacets = verticalLine.splitFacets(facets);
        facets = smallerFacets; ///
      });
      return smallerFacets;
    }
  }], [{
    key: "fromFacet",
    value: function fromFacet(facet) {
      var facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          normal = facetNormal,
          ///
      arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal),
          rotationQuaternion = arbitraryRotationQuaternion,
          ///
      vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion),
          maskingEdges = calculateMaskingEdges(vertices),
          verticalLines = maskingEdges.map(function (maskingEdge) {
        var verticalLine = _verticalLine["default"].fromMaskingEdge(maskingEdge);

        return verticalLine;
      }),
          forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion),
          backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion),
          maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
      return maskingFacet;
    }
  }]);

  return MaskingFacet;
}();

module.exports = MaskingFacet;

function calculateMaskingEdges(vertices) {
  var maskingEdges = vertices.map(function (vertex, index) {
    var startIndex = index,
        endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH,
        startVertex = vertices[startIndex],
        endVertex = vertices[endIndex],
        maskingEdge = _masking["default"].fromStartVertexAndEndVertex(startVertex, endVertex);

    return maskingEdge;
  });
  return maskingEdges;
}

},{"../constants":2,"../utilities/array":81,"../utilities/quaternion":87,"../utilities/vertices":91,"./edge/masking":47,"./verticalLine":54}],52:[function(require,module,exports){
"use strict";

var _array = require("../utilities/array");

var _vector = require("../maths/vector");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Normal = /*#__PURE__*/function () {
  function Normal(extent) {
    _classCallCheck(this, Normal);

    this.extent = extent;
  }

  _createClass(Normal, [{
    key: "clone",
    value: function clone() {
      var extent = cloneExtent(this.extent),
          normal = new Normal(extent);
      return normal;
    }
  }, {
    key: "getExtent",
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var firstVertex = (0, _array.first)(vertices),
          secondVertex = (0, _array.second)(vertices),
          thirdVertex = (0, _array.third)(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition),
          secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition),
          extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)),
          normal = new Normal(extent);
      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

function cloneExtent(extent) {
  return extent.slice();
}

},{"../maths/vector":29,"../utilities/array":81}],53:[function(require,module,exports){
"use strict";

var _rotation = require("../utilities/rotation");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vertex = /*#__PURE__*/function () {
  function Vertex(position) {
    _classCallCheck(this, Vertex);

    this.position = position;
  }

  _createClass(Vertex, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "clone",
    value: function clone() {
      var position = this.position.slice(),
          ///
      vertex = new Vertex(position);
      return vertex;
    }
  }, {
    key: "rotate",
    value: function rotate(rotationQuaternion) {
      this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      this.position = transform(this.position);
    }
  }], [{
    key: "fromPosition",
    value: function fromPosition(position) {
      var vertex = new Vertex(position);
      return vertex;
    }
  }, {
    key: "fromCoordinateTuple",
    value: function fromCoordinateTuple(coordinateTuple) {
      var position = coordinateTuple.slice(),
          ///
      vertex = new Vertex(position);
      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;

},{"../utilities/rotation":88}],54:[function(require,module,exports){
"use strict";

var _array = require("../utilities/array");

var _rotation = require("../utilities/rotation");

var _intersection = require("../utilities/intersection");

var _quaternion = require("../utilities/quaternion");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VerticalLine = /*#__PURE__*/function () {
  function VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, VerticalLine);

    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(VerticalLine, [{
    key: "getFirstPositionComponent",
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: "getForwardsRotationQuaternion",
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: "getBackwardsRotationQuaternion",
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: "splitFacet",
    value: function splitFacet(facet, smallerFacets) {
      var _this = this;

      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = (0, _intersection.calculateIntersection)(edge, _this.firstPositionComponent);
        return intersection;
      });
      facet.splitWithIntersections(intersections, smallerFacets);
    }
  }, {
    key: "splitFacets",
    value: function splitFacets(facets) {
      var _this2 = this;

      var smallerFacets = [];
      facets.forEach(function (facet) {
        facet.rotate(_this2.forwardsRotationQuaternion);

        _this2.splitFacet(facet, smallerFacets);
      });
      smallerFacets.forEach(function (smallerFacet) {
        return smallerFacet.rotate(_this2.backwardsRotationQuaternion);
      });
      return smallerFacets;
    }
  }], [{
    key: "fromMaskingEdge",
    value: function fromMaskingEdge(maskingEdge) {
      var maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge),
          rotationQuaternion = rotationAboutZAxisQuaternion,
          ///
      forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion),
          backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion),
          position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion),
          positionComponents = position,
          ///
      firstPositionComponent = (0, _array.first)(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
      return verticalLine;
    }
  }]);

  return VerticalLine;
}();

module.exports = VerticalLine;

},{"../utilities/array":81,"../utilities/intersection":83,"../utilities/quaternion":87,"../utilities/rotation":88}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

var _function = _interopRequireDefault(require("./element/canvas/function"));

var _array = require("./utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  properties = properties || {}; ///

  childElements = (0, _array.flatten)(childElements); ///

  var element;

  if (isSubclassOf(firstArgument, _element["default"])) {
    var Class = firstArgument; ///

    Object.assign(properties, {
      childElements: childElements
    });
    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === "function") {
    var func = firstArgument,
        ///
    _childElements = (0, _array.guarantee)(func(properties));

    Object.assign(properties, {
      childElements: _childElements
    });
    element = _function["default"].fromProperties(properties);
  }

  return element;
}

var _default = {
  createElement: createElement
};
exports["default"] = _default;

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":3,"./element/canvas/function":9,"./utilities/array":81}],56:[function(require,module,exports){
"use strict";

var _array = require("./utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var add = _array.push; ///

var Renderer = /*#__PURE__*/function () {
  function Renderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.facets = facets;
    this.program = program;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
  }

  _createClass(Renderer, [{
    key: "getFacets",
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: "getProgram",
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: "getRendererData",
    value: function getRendererData() {
      return this.rendererData;
    }
  }, {
    key: "getRendererBuffers",
    value: function getRendererBuffers() {
      return this.rendererBuffers;
    }
  }, {
    key: "getUniformLocations",
    value: function getUniformLocations() {
      return this.uniformLocations;
    }
  }, {
    key: "getAttributeLocations",
    value: function getAttributeLocations() {
      return this.attributeLocations;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.rendererData.getCount();
    }
  }, {
    key: "getOffsetsMatrixUniformLocation",
    value: function getOffsetsMatrixUniformLocation() {
      return this.uniformLocations.getOffsetsMatrixUniformLocation();
    }
  }, {
    key: "getNormalsMatrixUniformLocation",
    value: function getNormalsMatrixUniformLocation() {
      return this.uniformLocations.getNormalsMatrixUniformLocation();
    }
  }, {
    key: "getPositionMatrixUniformLocation",
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: "getRotationsMatrixUniformLocation",
    value: function getRotationsMatrixUniformLocation() {
      return this.uniformLocations.getRotationsMatrixUniformLocation();
    }
  }, {
    key: "getProjectionMatrixUniformLocation",
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: "getVertexPositionAttributeLocation",
    value: function getVertexPositionAttributeLocation() {
      return this.attributeLocations.getVertexPositionAttributeLocation();
    }
  }, {
    key: "getVertexNormalAttributeLocation",
    value: function getVertexNormalAttributeLocation() {
      return this.attributeLocations.getVertexNormalAttributeLocation();
    }
  }, {
    key: "addFacets",
    value: function addFacets(facets) {
      add(this.facets, facets);
    }
  }]);

  return Renderer;
}();

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  var vertexShader = canvas.createVertexShader(vertexShaderSource),
      fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
      program = canvas.createProgram(vertexShader, fragmentShader);
  return program;
}

Object.assign(Renderer, {
  createProgram: createProgram
});
module.exports = Renderer;

},{"./utilities/array":81}],57:[function(require,module,exports){
"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vertexNormalComponents = 3,
    vertexPositionComponents = 3;

var RendererBuffers = /*#__PURE__*/function () {
  function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
    _classCallCheck(this, RendererBuffers);

    this.vertexPositionsBuffer = vertexPositionsBuffer;
    this.vertexNormalsBuffer = vertexNormalsBuffer;
    this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
  }

  _createClass(RendererBuffers, [{
    key: "createVertexPositionsBuffer",
    value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
      this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
    }
  }, {
    key: "createVertexNormalsBuffer",
    value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
      this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
    }
  }, {
    key: "createVertexIndexesElementBuffer",
    value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
      this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
    }
  }, {
    key: "bindVertexNormalsBuffer",
    value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: "bindVertexPositionsBuffer",
    value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: "bindVertexIndexesElementBuffer",
    value: function bindVertexIndexesElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
      this.createVertexPositionsBuffer(vertexPositionsData, canvas);
      this.createVertexNormalsBuffer(vertexNormalsData, canvas);
      this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
      this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
      this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
      this.bindVertexIndexesElementBuffer(canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsBuffer = null,
          ///
      vertexNormalsBuffer = null,
          ///
      vertexIndexesElementBuffer = null,
          ///
      rendererBuffers = _construct(Class, [vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer].concat(remainingArguments));

      return rendererBuffers;
    }
  }]);

  return RendererBuffers;
}();

module.exports = RendererBuffers;

},{}],58:[function(require,module,exports){
"use strict";

var _buffers = _interopRequireDefault(require("../../renderer/buffers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var vertexColourComponents = 4;

var ColourRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(ColourRendererBuffers, _RendererBuffers);

  var _super = _createSuper(ColourRendererBuffers);

  function ColourRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
    var _this;

    _classCallCheck(this, ColourRendererBuffers);

    _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
    _this.vertexColoursBuffer = vertexColoursBuffer;
    return _this;
  }

  _createClass(ColourRendererBuffers, [{
    key: "createVertexColoursBuffer",
    value: function createVertexColoursBuffer(vertexColoursData, canvas) {
      this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
    }
  }, {
    key: "bindVertexColoursBuffer",
    value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
      _get(_getPrototypeOf(ColourRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createVertexColoursBuffer(vertexColoursData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
      _get(_getPrototypeOf(ColourRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexColoursBuffer = null,
          ///
      colourRendererBuffers = _buffers["default"].fromNothing(ColourRendererBuffers, vertexColoursBuffer);

      return colourRendererBuffers;
    }
  }]);

  return ColourRendererBuffers;
}(_buffers["default"]);

module.exports = ColourRendererBuffers;

},{"../../renderer/buffers":57}],59:[function(require,module,exports){
"use strict";

var _buffers = _interopRequireDefault(require("../../renderer/buffers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var textureCoordinateComponents = 2;

var TextureRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(TextureRendererBuffers, _RendererBuffers);

  var _super = _createSuper(TextureRendererBuffers);

  function TextureRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
    var _this;

    _classCallCheck(this, TextureRendererBuffers);

    _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
    _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
    return _this;
  }

  _createClass(TextureRendererBuffers, [{
    key: "createTextureCoordinatesBuffer",
    value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
      this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
    }
  }, {
    key: "bindTextureCoordinatesBuffer",
    value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
      canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
      _get(_getPrototypeOf(TextureRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
      _get(_getPrototypeOf(TextureRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var textureCoordinatesBuffer = null,
          ///
      textureRendererBuffers = _buffers["default"].fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);

      return textureRendererBuffers;
    }
  }]);

  return TextureRendererBuffers;
}(_buffers["default"]);

module.exports = TextureRendererBuffers;

},{"../../renderer/buffers":57}],60:[function(require,module,exports){
"use strict";

var _renderer = _interopRequireWildcard(require("../renderer"));

var _colour = _interopRequireDefault(require("../renderer/data/colour"));

var _vertexShader = _interopRequireDefault(require("./source/colour/vertexShader"));

var _fragmentShader = _interopRequireDefault(require("./source/colour/fragmentShader"));

var _colour2 = _interopRequireDefault(require("../renderer/buffers/colour"));

var _uniform = _interopRequireDefault(require("./locations/colour/uniform"));

var _attribute = _interopRequireDefault(require("./locations/colour/attribute"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ColourRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  var _super = _createSuper(ColourRenderer);

  function ColourRenderer() {
    _classCallCheck(this, ColourRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(ColourRenderer, [{
    key: "getVertexColourAttributeLocation",
    value: function getVertexColourAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
      return vertexColourAttributeLocation;
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexColours = [];
      facets.forEach(function (facet, index) {
        var colouredFacet = facet,
            ///
        facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            colouredFacetVertexColours = colouredFacet.getVertexColours();
        add(vertexIndexes, facetVertexIndexes);
        add(vertexNormals, facetVertexNormals);
        add(vertexPositions, facetVertexPositions);
        add(vertexColours, colouredFacetVertexColours);
      });
      var rendererData = this.getRendererData();
      rendererData.addVertexIndexes(vertexIndexes);
      rendererData.addVertexNormals(vertexNormals);
      rendererData.addVertexColours(vertexColours);
      rendererData.addVertexPositions(vertexPositions);
      var rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexColoursData = rendererData.getVertexColoursData();
      rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
    }
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var count = this.getCount(),
          start = 0,
          finish = count; ///

      canvas.drawElements(start, finish);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(canvas) {
      var facets = [],
          program = (0, _renderer.createProgram)(_vertexShader["default"], _fragmentShader["default"], canvas),
          colourRendererData = _colour["default"].fromNothing(),
          colourRendererBuffers = _colour2["default"].fromNothing(),
          colourUniformLocations = _uniform["default"].fromProgram(program, canvas),
          colourAttributeLocations = _attribute["default"].fromProgram(program, canvas),
          rendererData = colourRendererData,
          ///
      rendererBuffers = colourRendererBuffers,
          ///
      uniformLocations = colourUniformLocations,
          ///
      attributeLocations = colourAttributeLocations,
          ///
      colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(_renderer["default"]);

module.exports = ColourRenderer;

},{"../renderer":56,"../renderer/buffers/colour":58,"../renderer/data/colour":62,"../utilities/array":81,"./locations/colour/attribute":65,"./locations/colour/uniform":66,"./source/colour/fragmentShader":70,"./source/colour/vertexShader":71}],61:[function(require,module,exports){
"use strict";

var _array = require("../utilities/array");

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var add = _array.merge; ///

var RendererData = /*#__PURE__*/function () {
  function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
    _classCallCheck(this, RendererData);

    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
  }

  _createClass(RendererData, [{
    key: "getCount",
    value: function getCount() {
      var vertexIndexesDataLength = this.vertexIndexesData.length,
          count = vertexIndexesDataLength; ///

      return count;
    }
  }, {
    key: "getVertexPositionsData",
    value: function getVertexPositionsData() {
      return this.vertexPositionsData;
    }
  }, {
    key: "getVertexNormalsData",
    value: function getVertexNormalsData() {
      return this.vertexNormalsData;
    }
  }, {
    key: "getVertexIndexesData",
    value: function getVertexIndexesData() {
      return this.vertexIndexesData;
    }
  }, {
    key: "addVertexPositions",
    value: function addVertexPositions(vertexPositions) {
      var vertexPositionsData = (0, _array.flatten)(vertexPositions);
      add(this.vertexPositionsData, vertexPositionsData);
    }
  }, {
    key: "addVertexNormals",
    value: function addVertexNormals(vertexNormals) {
      var vertexNormalsData = (0, _array.flatten)(vertexNormals);
      add(this.vertexNormalsData, vertexNormalsData);
    }
  }, {
    key: "addVertexIndexes",
    value: function addVertexIndexes(vertexIndexes) {
      var vertexIndexesData = vertexIndexes; ///

      add(this.vertexIndexesData, vertexIndexesData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          rendererData = _construct(Class, [vertexPositionsData, vertexNormalsData, vertexIndexesData].concat(remainingArguments));

      return rendererData;
    }
  }]);

  return RendererData;
}();

module.exports = RendererData;

},{"../utilities/array":81}],62:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("../../renderer/data"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.merge; ///

var ColourRendererData = /*#__PURE__*/function (_RendererData) {
  _inherits(ColourRendererData, _RendererData);

  var _super = _createSuper(ColourRendererData);

  function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
    var _this;

    _classCallCheck(this, ColourRendererData);

    _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
    _this.vertexColoursData = vertexColoursData;
    return _this;
  }

  _createClass(ColourRendererData, [{
    key: "getVertexColoursData",
    value: function getVertexColoursData() {
      return this.vertexColoursData;
    }
  }, {
    key: "addVertexColours",
    value: function addVertexColours(vertexColours) {
      var vertexColoursData = (0, _array.flatten)(vertexColours);
      add(this.vertexColoursData, vertexColoursData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexColoursData = [],
          colourRendererData = _data["default"].fromNothing(ColourRendererData, vertexColoursData);

      return colourRendererData;
    }
  }]);

  return ColourRendererData;
}(_data["default"]);

module.exports = ColourRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],63:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("../../renderer/data"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.merge; ///

var TextureRendererData = /*#__PURE__*/function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  var _super = _createSuper(TextureRendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
    var _this;

    _classCallCheck(this, TextureRendererData);

    _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
    _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: "getVertexTextureCoordinatesData",
    value: function getVertexTextureCoordinatesData() {
      return this.vertexTextureCoordinatesData;
    }
  }, {
    key: "addVertexTextureCoordinateTuples",
    value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
      var vertexTextureCoordinatesData = (0, _array.flatten)(vertexTextureCoordinateTuples);
      add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexTextureCoordinatesData = [],
          textureRendererData = _data["default"].fromNothing(TextureRendererData, vertexTextureCoordinatesData);

      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(_data["default"]);

module.exports = TextureRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],64:[function(require,module,exports){
"use strict";

var _lighting = require("../source/lighting");

var _position = require("../source/position");

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AttributeLocations = /*#__PURE__*/function () {
  function AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    _classCallCheck(this, AttributeLocations);

    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }

  _createClass(AttributeLocations, [{
    key: "getVertexPositionAttributeLocation",
    value: function getVertexPositionAttributeLocation() {
      return this.vertexPositionAttributeLocation;
    }
  }, {
    key: "getVertexNormalAttributeLocation",
    value: function getVertexNormalAttributeLocation() {
      return this.vertexNormalAttributeLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName),
          attributeLocations = _construct(Class, [vertexPositionAttributeLocation, vertexNormalAttributeLocation].concat(remainingArguments));

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

module.exports = AttributeLocations;

},{"../source/lighting":72,"../source/position":73}],65:[function(require,module,exports){
"use strict";

var _attribute = _interopRequireDefault(require("../../locations/attribute"));

var _vertexShader = require("../../source/colour/vertexShader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColourAttributeLocations = /*#__PURE__*/function (_AttributeLocations) {
  _inherits(ColourAttributeLocations, _AttributeLocations);

  var _super = _createSuper(ColourAttributeLocations);

  function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    var _this;

    _classCallCheck(this, ColourAttributeLocations);

    _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    return _this;
  }

  _createClass(ColourAttributeLocations, [{
    key: "getVertexColourAttributeLocation",
    value: function getVertexColourAttributeLocation() {
      return this.vertexColourAttributeLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName),
          colourAttributeLocations = _attribute["default"].fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);

      return colourAttributeLocations;
    }
  }]);

  return ColourAttributeLocations;
}(_attribute["default"]);

module.exports = ColourAttributeLocations;

},{"../../locations/attribute":64,"../../source/colour/vertexShader":71}],66:[function(require,module,exports){
"use strict";

var _uniform = _interopRequireDefault(require("../../locations/uniform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColourUniformLocations = /*#__PURE__*/function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  var _super = _createSuper(ColourUniformLocations);

  function ColourUniformLocations() {
    _classCallCheck(this, ColourUniformLocations);

    return _super.apply(this, arguments);
  }

  _createClass(ColourUniformLocations, null, [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      return _uniform["default"].fromProgram(ColourUniformLocations, program, canvas);
    }
  }]);

  return ColourUniformLocations;
}(_uniform["default"]);

module.exports = ColourUniformLocations;

},{"../../locations/uniform":69}],67:[function(require,module,exports){
"use strict";

var _attribute = _interopRequireDefault(require("../../locations/attribute"));

var _vertexShader = require("../../source/texture/vertexShader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextureAttributeLocations = /*#__PURE__*/function (_AttributeLocations) {
  _inherits(TextureAttributeLocations, _AttributeLocations);

  var _super = _createSuper(TextureAttributeLocations);

  function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    var _this;

    _classCallCheck(this, TextureAttributeLocations);

    _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    return _this;
  }

  _createClass(TextureAttributeLocations, [{
    key: "getTextureCoordinateAttributeLocation",
    value: function getTextureCoordinateAttributeLocation() {
      return this.textureCoordinateAttributeLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName),
          textureAttributeLocations = _attribute["default"].fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);

      return textureAttributeLocations;
    }
  }]);

  return TextureAttributeLocations;
}(_attribute["default"]);

module.exports = TextureAttributeLocations;

},{"../../locations/attribute":64,"../../source/texture/vertexShader":75}],68:[function(require,module,exports){
"use strict";

var _uniform = _interopRequireDefault(require("../../locations/uniform"));

var _fragmentShader = require("../../source/texture/fragmentShader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextureUniformLocations = /*#__PURE__*/function (_UniformLocations) {
  _inherits(TextureUniformLocations, _UniformLocations);

  var _super = _createSuper(TextureUniformLocations);

  function TextureUniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
    var _this;

    _classCallCheck(this, TextureUniformLocations);

    _this = _super.call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation);
    _this.samplerUniformLocation = samplerUniformLocation;
    return _this;
  }

  _createClass(TextureUniformLocations, [{
    key: "getSamplerUniformLocation",
    value: function getSamplerUniformLocation() {
      return this.samplerUniformLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      var samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName),
          textureUniformLocations = _uniform["default"].fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);

      return textureUniformLocations;
    }
  }]);

  return TextureUniformLocations;
}(_uniform["default"]);

module.exports = TextureUniformLocations;

},{"../../locations/uniform":69,"../../source/texture/fragmentShader":74}],69:[function(require,module,exports){
"use strict";

var _lighting = require("../source/lighting");

var _position = require("../source/position");

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UniformLocations = /*#__PURE__*/function () {
  function UniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
    _classCallCheck(this, UniformLocations);

    this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
  }

  _createClass(UniformLocations, [{
    key: "getOffsetsMatrixUniformLocation",
    value: function getOffsetsMatrixUniformLocation() {
      return this.offsetsMatrixUniformLocation;
    }
  }, {
    key: "getNormalsMatrixUniformLocation",
    value: function getNormalsMatrixUniformLocation() {
      return this.normalsMatrixUniformLocation;
    }
  }, {
    key: "getPositionMatrixUniformLocation",
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: "getRotationsMatrixUniformLocation",
    value: function getRotationsMatrixUniformLocation() {
      return this.rotationsMatrixUniformLocation;
    }
  }, {
    key: "getProjectionMatrixUniformLocation",
    value: function getProjectionMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }], [{
    key: "fromProgram",
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName),
          uniformLocations = _construct(Class, [offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation].concat(remainingArguments));

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

module.exports = UniformLocations;

},{"../source/lighting":72,"../source/position":73}],70:[function(require,module,exports){
"use strict";

var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
module.exports = fragmentShaderSource;

},{}],71:[function(require,module,exports){
"use strict";

var _lighting = _interopRequireDefault(require("../../source/lighting"));

var _position = _interopRequireDefault(require("../../source/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vertexColourAttributeName = "aVertexColour",
    vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting["default"], "\n      \n        ").concat(_position["default"], "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});
module.exports = vertexShaderSource;

},{"../../source/lighting":72,"../../source/position":73}],72:[function(require,module,exports){
"use strict";

var normalsMatrixName = "uNormalsMatrix",
    vertexNormalAttributeName = "aVertexNormal";
var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
Object.assign(lightingSource, {
  normalsMatrixName: normalsMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});
module.exports = lightingSource;

},{}],73:[function(require,module,exports){
"use strict";

var offsetsMatrixName = "uOffsetsMatrix",
    positionMatrixName = "uPositionMatrix",
    rotationsMatrixName = "uRotationsMatrix",
    projectionMatrixName = "uPerspectiveMatrix",
    vertexPositionAttributeName = "aVertexPosition";
var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
Object.assign(positionSource, {
  offsetsMatrixName: offsetsMatrixName,
  positionMatrixName: positionMatrixName,
  rotationsMatrixName: rotationsMatrixName,
  projectionMatrixName: projectionMatrixName,
  vertexPositionAttributeName: vertexPositionAttributeName
});
module.exports = positionSource;

},{}],74:[function(require,module,exports){
"use strict";

var samplerName = "uSampler",
    fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});
module.exports = fragmentShaderSource;

},{}],75:[function(require,module,exports){
"use strict";

var _lighting = _interopRequireDefault(require("../../source/lighting"));

var _position = _interopRequireDefault(require("../../source/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var textureCoordinateAttributeName = "aTextureCoordinate",
    vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting["default"], "\n      \n        ").concat(_position["default"], "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});
module.exports = vertexShaderSource;

},{"../../source/lighting":72,"../../source/position":73}],76:[function(require,module,exports){
"use strict";

var _renderer = _interopRequireWildcard(require("../renderer"));

var _vertexShader = _interopRequireDefault(require("./source/texture/vertexShader"));

var _texture = _interopRequireDefault(require("../renderer/data/texture"));

var _fragmentShader = _interopRequireDefault(require("./source/texture/fragmentShader"));

var _texture2 = _interopRequireDefault(require("../renderer/buffers/texture"));

var _uniform = _interopRequireDefault(require("./locations/texture/uniform"));

var _attribute = _interopRequireDefault(require("./locations/texture/attribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextureRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  var _super = _createSuper(TextureRenderer);

  function TextureRenderer() {
    _classCallCheck(this, TextureRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(TextureRenderer, [{
    key: "getTextureCoordinateAttributeLocation",
    value: function getTextureCoordinateAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
      return textureCoordinateAttributeLocation;
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
      rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
    }
  }, {
    key: "useTexture",
    value: function useTexture(index, canvas) {
      var uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class, canvas) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var facets = [],
          program = (0, _renderer.createProgram)(_vertexShader["default"], _fragmentShader["default"], canvas),
          textureRendererData = _texture["default"].fromNothing(),
          textureRendererBuffers = _texture2["default"].fromNothing(),
          textureUniformLocations = _uniform["default"].fromProgram(program, canvas),
          textureAttributeLocations = _attribute["default"].fromProgram(program, canvas),
          rendererData = textureRendererData,
          ///
      rendererBuffers = textureRendererBuffers,
          ///
      uniformLocations = textureUniformLocations,
          ///
      attributeLocations = textureAttributeLocations,
          ///
      textureRenderer = _construct(Class, [facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations].concat(remainingArguments));

      canvas.enableAnisotropicFiltering(); ///

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(_renderer["default"]);

module.exports = TextureRenderer;

},{"../renderer":56,"../renderer/buffers/texture":59,"../renderer/data/texture":63,"./locations/texture/attribute":67,"./locations/texture/uniform":68,"./source/texture/fragmentShader":74,"./source/texture/vertexShader":75}],77:[function(require,module,exports){
"use strict";

var _texture = _interopRequireDefault(require("../../renderer/texture"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ImageMapTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImageMapTextureRenderer, _TextureRenderer);

  var _super = _createSuper(ImageMapTextureRenderer);

  function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
    var _this;

    _classCallCheck(this, ImageMapTextureRenderer);

    _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    _this.imageMapJSON = imageMapJSON;
    return _this;
  }

  _createClass(ImageMapTextureRenderer, [{
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var _this2 = this;

      var facets = this.getFacets(),
          vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];
      facets.forEach(function (facet, index) {
        var texturedFacet = facet,
            ///
        facetVertexIndexes = facet.getVertexIndexes(index),
            facetVertexNormals = facet.getVertexNormals(),
            facetVertexPositions = facet.getVertexPositions(),
            mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this2.imageMapJSON),
            texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///

        add(vertexIndexes, facetVertexIndexes);
        add(vertexNormals, facetVertexNormals);
        add(vertexPositions, facetVertexPositions);
        add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
      });
      var rendererData = this.getRendererData();
      rendererData.addVertexIndexes(vertexIndexes);
      rendererData.addVertexNormals(vertexNormals);
      rendererData.addVertexPositions(vertexPositions);
      rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

      _get(_getPrototypeOf(ImageMapTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(canvas) {
      var rendererBuffers = this.getRendererBuffers(),
          vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
          vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
          textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
      rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
    }
  }, {
    key: "useTexture",
    value: function useTexture(index, canvas) {
      var uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          samplerUniformLocationIntegerValue = index; ///

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
    }
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var rendererData = this.getRendererData(),
          count = rendererData.getCount(),
          index = 0,
          start = 0,
          finish = count; ///

      this.useTexture(index, canvas);
      canvas.drawElements(start, finish);
    }
  }], [{
    key: "fromImageMapAndImageMapJSON",
    value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
      var image = imageMap,
          ///
      index = 0,
          repeat = false;
      canvas.createTexture(image, index, repeat);

      var imageMapTextureRenderer = _texture["default"].fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);

      return imageMapTextureRenderer;
    }
  }]);

  return ImageMapTextureRenderer;
}(_texture["default"]);

module.exports = ImageMapTextureRenderer;

},{"../../renderer/texture":76,"../../utilities/array":81}],78:[function(require,module,exports){
"use strict";

var _texture = _interopRequireDefault(require("../../renderer/texture"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var add = _array.push; ///

var ImagesTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  var _super = _createSuper(ImagesTextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    var _this;

    _classCallCheck(this, ImagesTextureRenderer);

    _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
    _this.imageNames = imageNames;
    _this.facetsMap = facetsMap;
    _this.offsets = offsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: "addFacets",
    value: function addFacets(facets) {
      var texturedFacets = facets,
          ///
      texturedFacetsLength = texturedFacets.length;

      if (texturedFacetsLength > 0) {
        var firstTexturedFacet = (0, _array.first)(texturedFacets),
            texturedFacet = firstTexturedFacet,
            ///
        imageName = texturedFacet.getImageName(),
            _facets = this.facetsMap[imageName];
        add(_facets, texturedFacets);
      }
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(canvas) {
      var _this2 = this;

      var vertexIndexes = [],
          vertexNormals = [],
          vertexPositions = [],
          vertexTextureCoordinateTuples = [];
      var index = 0;
      this.imageNames.forEach(function (imageName) {
        var facets = _this2.facetsMap[imageName];
        facets.forEach(function (facet) {
          var texturedFacet = facet,
              ///
          facetVertexIndexes = facet.getVertexIndexes(index),
              facetVertexNormals = facet.getVertexNormals(),
              facetVertexPositions = facet.getVertexPositions(),
              texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(),
              texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples; ///

          add(vertexIndexes, facetVertexIndexes);
          add(vertexNormals, facetVertexNormals);
          add(vertexPositions, facetVertexPositions);
          add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
          index++;
        });
        var offset = index * 3; ///

        _this2.offsets.push(offset);
      });
      var rendererData = this.getRendererData();
      rendererData.addVertexIndexes(vertexIndexes);
      rendererData.addVertexNormals(vertexNormals);
      rendererData.addVertexPositions(vertexPositions);
      rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);

      _get(_getPrototypeOf(ImagesTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
    }
  }, {
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this3 = this;

      var program = this.getProgram();
      canvas.useProgram(program);
      this.bindBuffers(canvas);
      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      var start,
          finish = 0; ///

      this.offsets.forEach(function (offset, index) {
        start = finish; ///

        finish = offset; ///

        _this3.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
    }
  }], [{
    key: "fromImagesImageNamesAndImageTiling",
    value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
      var offsets = [],
          facetsMap = {};
      images.forEach(function (image, index) {
        var facets = [],
            repeat = imageTiling,
            ///
        imageName = imageNames[index];
        facetsMap[imageName] = facets;
        canvas.createTexture(image, index, repeat);
      });

      var imagesTextureRenderer = _texture["default"].fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);

      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(_texture["default"]);

module.exports = ImagesTextureRenderer;

},{"../../renderer/texture":76,"../../utilities/array":81}],79:[function(require,module,exports){
"use strict";

function calculateHalfAngleSine(angleCosine) {
  return Math.sqrt((1 - angleCosine) / 2);
}

function calculateHalfAngleCosine(angleCosine) {
  return Math.sqrt((1 + angleCosine) / 2);
}

module.exports = {
  calculateHalfAngleSine: calculateHalfAngleSine,
  calculateHalfAngleCosine: calculateHalfAngleCosine
};

},{}],80:[function(require,module,exports){
"use strict";

var _constants = require("../constants");

function isApproximatelyEqualToOne(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 1, marginOfError);
}

function isApproximatelyEqualToZero(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 0, marginOfError);
}

module.exports = {
  isApproximatelyEqualToOne: isApproximatelyEqualToOne,
  isApproximatelyEqualToZero: isApproximatelyEqualToZero
};

function isApproximatelyEqualTo(valueA, valueB) {
  var marginOfError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.DEFAULT_MARGIN_OF_ERROR;
  var difference = valueA - valueB,
      absoluteDifference = Math.abs(difference),
      approximatelyEqual = absoluteDifference < marginOfError;
  return approximatelyEqual;
}

},{"../constants":2}],81:[function(require,module,exports){
"use strict";

var _necessary = require("necessary");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function permute(array, places) {
  var length = array.length,
      cut = length - places,
      leadingElements = array.slice(0, cut),
      trailingElements = array.slice(cut);
  array = [].concat(_toConsumableArray(trailingElements), _toConsumableArray(leadingElements));
  return array;
}

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

module.exports = Object.assign(_necessary.arrayUtilities, {
  permute: permute,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":95}],82:[function(require,module,exports){
"use strict";

var _constants = require("../constants");

var _array = require("../utilities/array");

var _vector = require("../maths/vector");

function cloneEdges(edges) {
  edges = edges.map(function (edge) {
    return edge.clone();
  });
  return edges;
}

function cloneNormal(normal) {
  normal = normal.clone();
  return normal;
}

function cloneVertices(vertices) {
  vertices = vertices.map(function (vertex) {
    return vertex.clone();
  });
  return vertices;
}

function calculateEdges(vertices, Edge) {
  var edges = vertices.map(function (vertex, index) {
    var startIndex = index,
        ///
    endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH,
        startVertex = vertices[startIndex],
        endVertex = vertices[endIndex],
        edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
    return edge;
  });
  return edges;
}

function calculateNormal(vertices, Normal) {
  var normal = Normal.fromVertices(vertices);
  return normal;
}

function calculateArea(vertices) {
  var firstVertex = (0, _array.first)(vertices),
      secondVertex = (0, _array.second)(vertices),
      thirdVertex = (0, _array.third)(vertices),
      firstVertexPosition = firstVertex.getPosition(),
      secondVertexPosition = secondVertex.getPosition(),
      thirdVertexPosition = thirdVertex.getPosition(),
      firstExtent = (0, _vector.subtract3)(secondVertexPosition, firstVertexPosition),
      secondExtent = (0, _vector.subtract3)(thirdVertexPosition, firstVertexPosition),
      area = (0, _vector.length3)((0, _vector.cross3)(firstExtent, secondExtent)) / 2;
  return area;
}

module.exports = {
  cloneEdges: cloneEdges,
  cloneNormal: cloneNormal,
  cloneVertices: cloneVertices,
  calculateEdges: calculateEdges,
  calculateNormal: calculateNormal,
  calculateArea: calculateArea
};

},{"../constants":2,"../maths/vector":29,"../utilities/array":81}],83:[function(require,module,exports){
"use strict";

var _array = require("../utilities/array");

var _vector = require("../maths/vector");

var _approximate = require("../utilities/approximate");

function calculateIntersection(edge, firstPositionComponent) {
  var intersection = null;
  var edgeNonParallel = isEdgeNonParallel(edge);

  if (edgeNonParallel) {
    var edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent),
        edgeIntersectionNonTrivial = edgeIntersection > 0 && edgeIntersection < 1;

    if (edgeIntersectionNonTrivial) {
      intersection = edgeIntersection; ///
    }
  }

  return intersection;
}

function calculateNonNullIntersections(intersections) {
  var nonNullIntersections = intersections.reduce(function (nonNullIntersections, intersection) {
    if (intersection !== null) {
      var nonNullIntersection = intersection; ///

      nonNullIntersections.push(nonNullIntersection);
    }

    return nonNullIntersections;
  }, []);
  return nonNullIntersections;
}

function calculateNullIntersectionIndex(intersections) {
  var nullIntersectionIndex = intersections.reduce(function (nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection === null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);
  return nullIntersectionIndex;
}

function calculateNonNullIntersectionIndex(intersections) {
  var nullIntersectionIndex = intersections.reduce(function (nullIntersectionIndex, intersection, index) {
    if (nullIntersectionIndex === null) {
      if (intersection !== null) {
        nullIntersectionIndex = index;
      }
    }

    return nullIntersectionIndex;
  }, null);
  return nullIntersectionIndex;
}

function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
  var extent = (0, _vector.subtract3)(endVertexPosition, startVertexPosition),
      offset = (0, _vector.scale3)(extent, intersection),
      intermediateVertexPosition = (0, _vector.add3)(startVertexPosition, offset);
  return intermediateVertexPosition;
}

module.exports = module.exports = {
  calculateIntersection: calculateIntersection,
  calculateNonNullIntersections: calculateNonNullIntersections,
  calculateNullIntersectionIndex: calculateNullIntersectionIndex,
  calculateNonNullIntersectionIndex: calculateNonNullIntersectionIndex,
  calculateIntermediateVertexPosition: calculateIntermediateVertexPosition
};

function isEdgeNonParallel(edge) {
  var edgeExtent = edge.getExtent(),
      edgeExtentComponents = edgeExtent,
      ///
  firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents),
      secondEdgeExtentComponent = (0, _array.second)(edgeExtentComponents),
      edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent,
      edgeAngleTangentApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(edgeAngleTangent),
      edgeParallel = edgeAngleTangentApproximatelyEqualToZero,
      ///
  edgeNonParallel = !edgeParallel;
  return edgeNonParallel;
}

function calculateEdgeIntersection(edge, firstPositionComponent) {
  var edgeExtent = edge.getExtent(),
      edgePosition = edge.getPosition(),
      edgeExtentComponents = edgeExtent,
      ///
  edgePositionComponents = edgePosition,
      ///
  firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents),
      firstEdgePositionComponent = (0, _array.first)(edgePositionComponents),
      edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
  return edgeIntersection;
}

},{"../maths/vector":29,"../utilities/approximate":80,"../utilities/array":81}],84:[function(require,module,exports){
"use strict";

var _vector = require("../maths/vector");

var _array = require("../utilities/array");

var _constants = require("../constants");

var _matrix = require("../maths/matrix");

function scaleMatrixFromScale(scale) {
  var scaleMatrix = (0, _matrix.identity4)();
  scaleMatrix = (0, _matrix.scale4)(scaleMatrix, scale);
  return scaleMatrix;
}

function offsetsMatrixFromOffsets(offsets) {
  var offsetsMatrix = (0, _matrix.identity4)(); ///

  offsetsMatrix = (0, _matrix.translate4)(offsetsMatrix, offsets);
  return offsetsMatrix;
}

function positionMatrixFromNothing() {
  var positionMatrix = (0, _matrix.identity4)(); ///

  return positionMatrix;
}

function positionMatrixFromDistance(distance) {
  var positionMatrix = (0, _matrix.identity4)(); ///

  var x = 0,
      y = 0,
      z = -distance;
  positionMatrix = (0, _matrix.translate4)(positionMatrix, [x, y, z]);
  return positionMatrix;
}

function positionMatrixFromPosition(position) {
  var positionMatrix = (0, _matrix.identity4)(); ///

  positionMatrix = (0, _matrix.translate4)(positionMatrix, position);
  return positionMatrix;
}

function rotationsMatrixFromAngles(angles) {
  var reverseOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var rotationsMatrix = (0, _matrix.identity4)(); ///

  var firstAngle = (0, _array.first)(angles),
      secondAngle = (0, _array.second)(angles),
      thirdAngle = (0, _array.third)(angles),
      xAngle = firstAngle,
      yAngle = secondAngle,
      zAngle = thirdAngle,
      xAxis = [1, 0, 0],
      yAxis = [0, 1, 0],
      zAxis = [0, 0, 1];

  if (reverseOrder) {
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
  } else {
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
    rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
  }

  return rotationsMatrix;
}

function rotationsMatrixFromRotations(rotations) {
  var scalar = _constants.DEGREES_TO_RADIANS_SCALAR,
      angles = (0, _vector.scale3)(rotations, scalar),
      rotationsMatrix = rotationsMatrixFromAngles(angles);
  return rotationsMatrix;
}

function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
  var normalsMatrix = (0, _matrix.invert4)(rotationsMatrix);
  normalsMatrix = (0, _matrix.transpose4)(normalsMatrix);
  return normalsMatrix;
}

function projectionMatrixFromWidthAndHeight(width, height) {
  var fieldOfView = _constants.FIELD_OF_VIEW,
      ///
  aspectRatio = width / height,
      zNear = _constants.Z_NEAR,
      ///
  zFar = _constants.Z_FAR,
      ///
  projectionMatrix = (0, _matrix.perspective4)(fieldOfView, aspectRatio, zNear, zFar);
  return projectionMatrix;
}

module.exports = {
  scaleMatrixFromScale: scaleMatrixFromScale,
  offsetsMatrixFromOffsets: offsetsMatrixFromOffsets,
  positionMatrixFromNothing: positionMatrixFromNothing,
  positionMatrixFromDistance: positionMatrixFromDistance,
  positionMatrixFromPosition: positionMatrixFromPosition,
  rotationsMatrixFromAngles: rotationsMatrixFromAngles,
  rotationsMatrixFromRotations: rotationsMatrixFromRotations,
  normalsMatrixFromRotationsMatrix: normalsMatrixFromRotationsMatrix,
  projectionMatrixFromWidthAndHeight: projectionMatrixFromWidthAndHeight
};

},{"../constants":2,"../maths/matrix":28,"../maths/vector":29,"../utilities/array":81}],85:[function(require,module,exports){
"use strict";

var _vector = require("../maths/vector");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function calculateMidPointPosition(vertices) {
  var midPointPosition = vertices.reduce(function (midPointPosition, vertex) {
    var vertexPosition = vertex.getPosition(),
        scaledVertexPosition = (0, _vector.scale3)(vertexPosition, 1 / 3);
    midPointPosition = (0, _vector.add3)(midPointPosition, scaledVertexPosition);
    return midPointPosition;
  }, [0, 0, 0]);
  return midPointPosition;
}

function projectMidPointPositionOntoXYPlane(midPointPosition) {
  midPointPosition = [].concat(_toConsumableArray(midPointPosition.slice(0, 2)), [0]); ///

  return midPointPosition;
}

function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
  var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges),
      midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges),
      midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges; ///

  return midPointPositionToOneSideOfMaskingEdges;
}

module.exports = module.exports = {
  calculateMidPointPosition: calculateMidPointPosition,
  projectMidPointPositionOntoXYPlane: projectMidPointPositionOntoXYPlane,
  isMidPointPositionToOneSideOfMaskingEdges: isMidPointPositionToOneSideOfMaskingEdges
};

function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
  var midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function (midPointPositionToTheLeftOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheLeftOfMaskingEdges) {
      var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
      midPointPositionToTheLeftOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdge;
    }

    return midPointPositionToTheLeftOfMaskingEdges;
  }, true);
  return midPointPositionToTheLeftOfMaskingEdges;
}

function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
  var midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function (midPointPositionToTheRightOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheRightOfMaskingEdges) {
      var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
      midPointPositionToTheRightOfMaskingEdges = midPointPositionToTheRightOfMaskingEdge;
    }

    return midPointPositionToTheRightOfMaskingEdges;
  }, true);
  return midPointPositionToTheRightOfMaskingEdges;
}

},{"../maths/vector":29}],86:[function(require,module,exports){
"use strict";

var _vector = require("../maths/vector");

var _matrix = require("../utilities/matrix");

function relativeOffsetsFromAnglesAndDirections(angles, directions) {
  var reverseOrder = true,
      reflectedAngles = (0, _vector.reflect3)(angles),
      rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(reflectedAngles, reverseOrder),
      relativeOffsets = (0, _vector.transform4)(directions, rotationsMatrix).slice(0, 3); ///

  return relativeOffsets;
}

module.exports = {
  relativeOffsetsFromAnglesAndDirections: relativeOffsetsFromAnglesAndDirections
};

},{"../maths/vector":29,"../utilities/matrix":84}],87:[function(require,module,exports){
"use strict";

var _vector = require("../maths/vector");

var _approximate = require("../utilities/approximate");

var _array = require("../utilities/array");

var _angle = require("../utilities/angle");

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
  return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
}

function calculateInverseRotationQuaternion(rotationQuaternion) {
  var rotationQuaternionComponents = rotationQuaternion,
      ///
  firstRotationQuaternionComponent = (0, _array.first)(rotationQuaternionComponents),
      secondRotationQuaternionComponent = (0, _array.second)(rotationQuaternionComponents),
      thirdRotationQuaternionComponent = (0, _array.third)(rotationQuaternionComponents),
      fourthRotationQuaternionComponent = (0, _array.fourth)(rotationQuaternionComponents),
      inverseRotationQuaternion = [firstRotationQuaternionComponent, -secondRotationQuaternionComponent, -thirdRotationQuaternionComponent, -fourthRotationQuaternionComponent];
  return inverseRotationQuaternion;
}

function calculateForwardsRotationQuaternion(rotationQuaternion) {
  var forwardsRotationQuaternion = rotationQuaternion; ///

  return forwardsRotationQuaternion;
}

function calculateBackwardsRotationQuaternion(rotationQuaternion) {
  var inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
      backwardsRotationQuaternion = inverseRotationQuaternion; ///

  return backwardsRotationQuaternion;
}

function calculateArbitraryRotationQuaternion(normal) {
  var extent = normal.getExtent(),
      unitNormal = extent,
      ///
  zAxis = [0, 0, 1],
      dotProductOfUnitNormalAndZAxis = (0, _vector.dot3)(unitNormal, zAxis),
      crossProductOfUnitNormalAndZAxis = (0, _vector.cross3)(unitNormal, zAxis),
      angleOfRotationCosine = dotProductOfUnitNormalAndZAxis,
      ///
  angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine),
      angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = (0, _approximate.isApproximatelyEqualToOne)(angleOfRotationCosineAbsoluteValue),
      axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [1, 0, 0] : ///
  crossProductOfUnitNormalAndZAxis,
      unitAxisOfRotation = (0, _vector.normalise3)(axisOfRotation),
      halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine),
      halfAngleOfRotationSine = (0, _angle.calculateHalfAngleSine)(angleOfRotationCosine),
      unitAxisOfRotationComponents = unitAxisOfRotation,
      ///
  firstAxisOfRotationComponent = (0, _array.first)(unitAxisOfRotationComponents),
      secondAxisOfRotationComponent = (0, _array.second)(unitAxisOfRotationComponents),
      thirdAxisOfRotationComponent = (0, _array.third)(unitAxisOfRotationComponents),
      arbitraryRotationQuaternion = [halfAngleOfRotationCosine, firstAxisOfRotationComponent * halfAngleOfRotationSine, secondAxisOfRotationComponent * halfAngleOfRotationSine, thirdAxisOfRotationComponent * halfAngleOfRotationSine];
  return arbitraryRotationQuaternion;
}

function calculateRotationAboutZAxisQuaternion(maskingEdge) {
  var maskingEdgeExtent = maskingEdge.getExtent(),
      unitMaskingEdgeExtent = (0, _vector.normalise3)(maskingEdgeExtent),
      unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent,
      ///
  firstUnitMaskingEdgeExtentComponent = (0, _array.first)(unitMaskingEdgeExtentComponents),
      secondUnitMaskingEdgeExtentComponent = (0, _array.second)(unitMaskingEdgeExtentComponents),
      angleOfRotationSine = firstUnitMaskingEdgeExtentComponent,
      ///
  angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent,
      ///
  halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine),
      halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine) : -(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine),
      rotationAboutZAxisQuaternion = [halfAngleOfRotationCosine, 0, 0, halfAngleOfRotationSine];
  return rotationAboutZAxisQuaternion;
}

module.exports = {
  rotateImaginaryQuaternion: rotateImaginaryQuaternion,
  calculateInverseRotationQuaternion: calculateInverseRotationQuaternion,
  calculateForwardsRotationQuaternion: calculateForwardsRotationQuaternion,
  calculateBackwardsRotationQuaternion: calculateBackwardsRotationQuaternion,
  calculateArbitraryRotationQuaternion: calculateArbitraryRotationQuaternion,
  calculateRotationAboutZAxisQuaternion: calculateRotationAboutZAxisQuaternion
};

function hamiltonProduct(quaternionA, quaternionB) {
  var a1 = quaternionA[0],
      b1 = quaternionA[1],
      c1 = quaternionA[2],
      d1 = quaternionA[3],
      a2 = quaternionB[0],
      b2 = quaternionB[1],
      c2 = quaternionB[2],
      d2 = quaternionB[3],
      a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
      b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
      c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
      d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
      quaternion = [a, b, c, d];
  return quaternion;
}

},{"../maths/vector":29,"../utilities/angle":79,"../utilities/approximate":80,"../utilities/array":81}],88:[function(require,module,exports){
"use strict";

var _quaternion = require("../utilities/quaternion");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function rotatePosition(position, rotationQuaternion) {
  var imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
      inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion),
      rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
  return position;
}

module.exports = {
  rotatePosition: rotatePosition
};

function imaginaryQuaternionFromPosition(position) {
  return [0].concat(_toConsumableArray(position));
} ///


function positionFromImaginaryQuaternion(imaginaryQuaternion) {
  return imaginaryQuaternion.slice(1);
} ///

},{"../utilities/quaternion":87}],89:[function(require,module,exports){
"use strict";

var _vertices = require("../utilities/vertices");

var _matrix = require("../maths/matrix");

var _array = require("../utilities/array");

var _quaternion = require("../utilities/quaternion");

var _vector = require("../maths/vector");

function cloneTextureCoordinateTuples(textureCoordinateTuples) {
  textureCoordinateTuples = textureCoordinateTuples.map(function (textureCoordinateTuple) {
    return textureCoordinateTuple.slice();
  }); ///

  return textureCoordinateTuples;
}

function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
  var left = extent.left,
      bottom = extent.bottom,
      width = extent.width,
      height = extent.height,
      mappedTextureCoordinateTuples = textureCoordinateTuples.map(function (textureCoordinateTuple) {
    return (0, _vector.add2)((0, _vector.multiply2)(textureCoordinateTuple, [width, height]), [left, bottom]);
  }); ///

  return mappedTextureCoordinateTuples;
}

function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
  var arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal),
      rotationQuaternion = arbitraryRotationQuaternion; ///

  var tempVertices = (0, _vertices.rotateVertices)(vertices, rotationQuaternion);
  parentVertices = (0, _vertices.rotateVertices)(parentVertices, rotationQuaternion);
  vertices = tempVertices; ///

  var firstVertex = (0, _array.first)(vertices),
      secondVertex = (0, _array.second)(vertices),
      thirdVertex = (0, _array.third)(vertices),
      firstParentVertex = (0, _array.first)(parentVertices),
      secondParentVertex = (0, _array.second)(parentVertices),
      thirdParentVertex = (0, _array.third)(parentVertices),
      firstTextureCoordinateTuple = (0, _array.first)(textureCoordinateTuples),
      secondTextureCoordinateTuple = (0, _array.second)(textureCoordinateTuples),
      thirdTextureCoordinateTuple = (0, _array.third)(textureCoordinateTuples),
      firstVertexPosition = firstVertex.getPosition(),
      secondVertexPosition = secondVertex.getPosition(),
      thirdVertexPosition = thirdVertex.getPosition(),
      firstParentVertexPosition = firstParentVertex.getPosition(),
      secondParentVertexPosition = secondParentVertex.getPosition(),
      thirdParentVertexPosition = thirdParentVertex.getPosition(),
      R1x = firstVertexPosition[0],
      ///
  R1y = firstVertexPosition[1],
      ///
  R2x = secondVertexPosition[0],
      ///
  R2y = secondVertexPosition[1],
      ///
  R3x = thirdVertexPosition[0],
      ///
  R3y = thirdVertexPosition[1],
      ///
  P1x = firstParentVertexPosition[0],
      ///
  P2x = secondParentVertexPosition[0],
      ///
  P3x = thirdParentVertexPosition[0],
      ///
  P1y = firstParentVertexPosition[1],
      ///
  P2y = secondParentVertexPosition[1],
      ///
  P3y = thirdParentVertexPosition[1],
      ///
  P1u = firstTextureCoordinateTuple[0],
      ///
  P1v = firstTextureCoordinateTuple[1],
      ///
  P2u = secondTextureCoordinateTuple[0],
      ///
  P2v = secondTextureCoordinateTuple[1],
      ///
  P3u = thirdTextureCoordinateTuple[0],
      ///
  P3v = thirdTextureCoordinateTuple[1],
      ///
  textureCoordinatesMatrix = (0, _matrix.invert3)([1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v]),
      firstTransformedParentVerticesComponent = (0, _vector.transform3)([P1x, P2x, P3x], textureCoordinatesMatrix),
      secondTransformedParentVerticesComponent = (0, _vector.transform3)([P1y, P2y, P3y], textureCoordinatesMatrix),
      Ox = firstTransformedParentVerticesComponent[0],
      ///
  Ux = firstTransformedParentVerticesComponent[1],
      ///
  Vx = firstTransformedParentVerticesComponent[2],
      ///
  Oy = secondTransformedParentVerticesComponent[0],
      ///
  Uy = secondTransformedParentVerticesComponent[1],
      ///
  Vy = secondTransformedParentVerticesComponent[2],
      ///
  transformedParentVerticesMatrix = (0, _matrix.invert2)([Ux, Uy, Vx, Vy]),
      firstAdjustedTextureCoordinate = (0, _vector.transform2)([R1x - Ox, R1y - Oy], transformedParentVerticesMatrix),
      secondAdjustedTextureCoordinate = (0, _vector.transform2)([R2x - Ox, R2y - Oy], transformedParentVerticesMatrix),
      thirdAdjustedTextureCoordinate = (0, _vector.transform2)([R3x - Ox, R3y - Oy], transformedParentVerticesMatrix),
      adjustedTextureCoordinateTuple = [firstAdjustedTextureCoordinate, secondAdjustedTextureCoordinate, thirdAdjustedTextureCoordinate];
  return adjustedTextureCoordinateTuple;
}

module.exports = {
  cloneTextureCoordinateTuples: cloneTextureCoordinateTuples,
  calculateMappedTextureCoordinateTuples: calculateMappedTextureCoordinateTuples,
  calculateAdjustedTextureCoordinateTuples: calculateAdjustedTextureCoordinateTuples
};

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/array":81,"../utilities/quaternion":87,"../utilities/vertices":91}],90:[function(require,module,exports){
"use strict";

var _matrix = require("../maths/matrix");

var _vector = require("../maths/vector");

var _matrix2 = require("../utilities/matrix");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function composeTransform(scale, rotations, position) {
  var matrix = null;

  if (scale !== null) {
    var scaleMatrix = (0, _matrix2.scaleMatrixFromScale)(scale);
    matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
  }

  if (rotations !== null) {
    var rotationsMatrix = (0, _matrix2.rotationsMatrixFromRotations)(rotations);
    matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
  }

  if (position !== null) {
    var positionMatrix = (0, _matrix2.positionMatrixFromPosition)(position);
    matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
  }

  var transform = matrix === null ? function (vector) {
    return vector;
  } : function (vector) {
    return (0, _vector.transform4)([].concat(_toConsumableArray(vector), [1]), matrix).slice(0, 3);
  };
  return transform;
}

module.exports = module.exports = {
  composeTransform: composeTransform
};

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/matrix":84}],91:[function(require,module,exports){
"use strict";

function rotateVertices(vertices, rotationQuaternion) {
  var rotatedVertices = vertices.map(function (vertex) {
    var rotatedVertex = vertex.clone(); ///

    rotatedVertex.rotate(rotationQuaternion);
    return rotatedVertex;
  });
  return rotatedVertices;
}

function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
  ///
  var indexes = indexTuple,
      ///
  vertices = indexes.map(function (index) {
    var coordinateTuple = coordinateTuples[index],
        vertex = Vertex.fromCoordinateTuple(coordinateTuple);
    return vertex;
  });
  return vertices;
}

module.exports = {
  rotateVertices: rotateVertices,
  verticesFromCoordinateTuplesAndIndexTuple: verticesFromCoordinateTuplesAndIndexTuple
};

},{}],92:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("./react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.defineProperty(window, "React", {
  get: function get() {
    return _react["default"];
  }
});

},{"./react":55}],93:[function(require,module,exports){

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_RC_BASE_EXTENSION = exports.CARRIAGE_RETURN_CHARACTER = exports.LINE_FEED_CHARACTER = exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.CTRL_C = exports.UTF8_ENCODING = exports.DATA_EVENT = exports.APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE = exports.POST_METHOD = exports.GET_METHOD = exports.DEFAULT_LOG_FILE_BASE_NAME = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.DEFAULT_LOG_LEVEL = exports.FATAL = exports.ERROR = exports.WARNING = exports.INFO = exports.DEBUG = exports.TRACE = void 0;
var TRACE = "TRACE";
exports.TRACE = TRACE;
var DEBUG = "DEBUG";
exports.DEBUG = DEBUG;
var INFO = "INFO";
exports.INFO = INFO;
var WARNING = "WARNING";
exports.WARNING = WARNING;
var ERROR = "ERROR";
exports.ERROR = ERROR;
var FATAL = "FATAL";
exports.FATAL = FATAL;
var DEFAULT_LOG_LEVEL = WARNING;
exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
var DEFAULT_LOG_DIRECTORY_PATH = null;
exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
var DEFAULT_LOG_FILE_BASE_NAME = "default";
exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
var GET_METHOD = "GET";
exports.GET_METHOD = GET_METHOD;
var POST_METHOD = "POST";
exports.POST_METHOD = POST_METHOD;
var APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE = "application/json;charset=UTF-8";
exports.APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE = APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE;
var DATA_EVENT = "data";
exports.DATA_EVENT = DATA_EVENT;
var UTF8_ENCODING = "utf8";
exports.UTF8_ENCODING = UTF8_ENCODING;
var CTRL_C = "^C";
exports.CTRL_C = CTRL_C;
var ETX_CHARACTER = "\x03";
exports.ETX_CHARACTER = ETX_CHARACTER;
var BACKSPACE_CHARACTER = String.fromCharCode(127);
exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
var LINE_FEED_CHARACTER = "\n";
exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
var CARRIAGE_RETURN_CHARACTER = "\r";
exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
var DEFAULT_RC_BASE_EXTENSION = "";
exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;

},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pathUtilities", {
  enumerable: true,
  get: function get() {
    return _path["default"];
  }
});
Object.defineProperty(exports, "arrayUtilities", {
  enumerable: true,
  get: function get() {
    return _array["default"];
  }
});
Object.defineProperty(exports, "templateUtilities", {
  enumerable: true,
  get: function get() {
    return _template["default"];
  }
});
Object.defineProperty(exports, "fileSystemUtilities", {
  enumerable: true,
  get: function get() {
    return _fileSystem["default"];
  }
});
Object.defineProperty(exports, "asynchronousUtilities", {
  enumerable: true,
  get: function get() {
    return _asynchronous["default"];
  }
});
Object.defineProperty(exports, "miscellaneousUtilities", {
  enumerable: true,
  get: function get() {
    return _miscellaneous["default"];
  }
});

var _path = _interopRequireDefault(require("./utilities/path"));

var _array = _interopRequireDefault(require("./utilities/array"));

var _template = _interopRequireDefault(require("./utilities/template"));

var _fileSystem = _interopRequireDefault(require("./utilities/fileSystem"));

var _asynchronous = _interopRequireDefault(require("./utilities/asynchronous"));

var _miscellaneous = _interopRequireDefault(require("./utilities/miscellaneous"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./utilities/array":96,"./utilities/asynchronous":97,"./utilities/fileSystem":98,"./utilities/miscellaneous":99,"./utilities/path":105,"./utilities/template":106}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.second = second;
exports.third = third;
exports.fourth = fourth;
exports.fifth = fifth;
exports.fifthLast = fifthLast;
exports.fourthLast = fourthLast;
exports.thirdLast = thirdLast;
exports.secondLast = secondLast;
exports.last = last;
exports.tail = tail;
exports.push = push;
exports.unshift = unshift;
exports.concat = concat;
exports.clear = clear;
exports.copy = copy;
exports.merge = merge;
exports.splice = splice;
exports.replace = replace;
exports.filter = filter;
exports.find = find;
exports.prune = prune;
exports.patch = patch;
exports.augment = augment;
exports.separate = separate;
exports.forwardsSome = forwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsEvery = forwardsEvery;
exports.backwardsEvery = backwardsEvery;
exports.forwardsReduce = forwardsReduce;
exports.backwardsReduce = backwardsReduce;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function concat(array1, elementOrArray2) {
  var array2 = elementOrArray2 instanceof Array ? elementOrArray2 : [elementOrArray2];
  push(array1, array2);
}

function clear(array) {
  var start = 0;
  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function splice(array1, start) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);
  return deletedItemsArray;
}

function replace(array, element, test) {
  var start = -1;
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;
    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];
  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);
      filteredElements.unshift(firstDeletedElement); ///
    }
  });
  return filteredElements;
}

function find(array, test) {
  var elements = [];
  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });
  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;
  array.some(function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);
      prunedElement = firstDeletedElement; ///

      return true;
    }
  });
  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);
    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsEvery(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (!result) {
      return false;
    }
  }

  return true;
}

function backwardsEvery(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (!result) {
      return false;
    }
  }

  return true;
}

function forwardsReduce(array, callback, initialValue) {
  var value = initialValue;
  forwardsForEach(array, function (element, index) {
    value = callback(value, element, index);
  });
  return value;
}

function backwardsReduce(array, callback, initialValue) {
  var value = initialValue;
  backwardsForEach(array, function (element, index) {
    value = callback(value, element, index);
  });
  return value;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];
    callback(element, index);
  }
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];
    callback(element, index);
  }
}

var _default = {
  first: first,
  second: second,
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  concat: concat,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsEvery: forwardsEvery,
  backwardsEvery: backwardsEvery,
  forwardsReduce: forwardsReduce,
  backwardsReduce: backwardsReduce,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};
exports["default"] = _default;

},{}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whilst = whilst;
exports.forEach = forEach;
exports.sequence = sequence;
exports.eventually = eventually;
exports.repeatedly = repeatedly;
exports.forwardsForEach = forwardsForEach;
exports.backwardsForEach = backwardsForEach;
exports["default"] = void 0;

function whilst(callback, done, context) {
  var count = -1;

  function next() {
    count++;
    var index = count,
        ///
    terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      callback = callbacks[index];
      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = 0;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function (callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  var count = 0;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  for (var index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

function forwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;
    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

function backwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = length;

  function next() {
    count--;
    var terminate = count === -1;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];
      callback(element, next, done, context, index);
    }
  }

  next();
}

var _default = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};
exports["default"] = _default;

},{}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEntryExists = checkEntryExists;
exports.checkFileExists = checkFileExists;
exports.checkDirectoryExists = checkDirectoryExists;
exports.isEntryFile = isEntryFile;
exports.isEntryDirectory = isEntryDirectory;
exports.isDirectoryEmpty = isDirectoryEmpty;
exports.readDirectory = readDirectory;
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.appendToFile = appendToFile;
exports.createDirectory = createDirectory;
exports.renameFile = renameFile;
exports.getStats = getStats;
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _constants = require("../constants");

var _path = require("../utilities/path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function checkEntryExists(entryPath) {
  var entryExists = _fs["default"].existsSync(entryPath);

  return entryExists;
}

function checkFileExists(filePath) {
  var fileExists = false;
  var entryPath = filePath,
      ///
  entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    var entryFile = isEntryFile(entryPath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function checkDirectoryExists(directoryPath) {
  var directoryExists = false;
  var entryPath = directoryPath,
      ///
  entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(entryPath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryFile(entryPath) {
  var stat = _fs["default"].statSync(entryPath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function isEntryDirectory(entryPath) {
  var stat = _fs["default"].statSync(entryPath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(directoryPath) {
  var subEntryNames = readDirectory(directoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;
  return directoryEmpty;
}

function readDirectory(directoryPath) {
  var subEntryNames = _fs["default"].readdirSync(directoryPath);

  return subEntryNames;
}

function readFile(filePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.UTF8_ENCODING;

  var options = {
    encoding: encoding
  },
      content = _fs["default"].readFileSync(filePath, options);

  return content;
}

function writeFile(filePath, content) {
  _fs["default"].writeFileSync(filePath, content);
}

function appendToFile(filePath, content) {
  _fs["default"].appendFileSync(filePath, content);
}

function createDirectory(directoryPath) {
  var directoryPathWithoutBottommostName = (0, _path.pathWithoutBottommostNameFromPath)(directoryPath);

  if (directoryPathWithoutBottommostName !== "." && directoryPathWithoutBottommostName !== null) {
    var parentDirectoryPath = directoryPathWithoutBottommostName,
        ///
    parentDirectoryExists = checkDirectoryExists(parentDirectoryPath);

    if (!parentDirectoryExists) {
      createDirectory(parentDirectoryPath);
    }
  }

  _fs["default"].mkdirSync(directoryPath);
}

function renameFile(oldFilePath, newFilePath) {
  _fs["default"].renameSync(oldFilePath, newFilePath);
}

function getStats(filePath) {
  return _fs["default"].statSync(filePath);
}

var _default = {
  checkEntryExists: checkEntryExists,
  checkFileExists: checkFileExists,
  checkDirectoryExists: checkDirectoryExists,
  isEntryFile: isEntryFile,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile,
  appendToFile: appendToFile,
  createDirectory: createDirectory,
  renameFile: renameFile,
  getStats: getStats
};
exports["default"] = _default;

},{"../constants":94,"../utilities/path":105,"fs":93}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rc = _interopRequireDefault(require("./miscellaneous/rc"));

var _log = _interopRequireDefault(require("./miscellaneous/log"));

var _onETX = _interopRequireDefault(require("./miscellaneous/onETX"));

var _prompt = _interopRequireDefault(require("./miscellaneous/prompt"));

var _ajax = require("./miscellaneous/ajax");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  log: _log["default"],
  rc: _rc["default"],
  get: _ajax.get,
  post: _ajax.post,
  onETX: _onETX["default"],
  prompt: _prompt["default"]
};
exports["default"] = _default;

},{"./miscellaneous/ajax":100,"./miscellaneous/log":101,"./miscellaneous/onETX":102,"./miscellaneous/prompt":103,"./miscellaneous/rc":104}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;

var _constants = require("../../constants");

function get(host, uri, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = _constants.GET_METHOD,
      body = undefined;
  request(host, uri, parameters, method, body, callback);
}

function post(host, uri, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = _constants.POST_METHOD,
      body = JSON.stringify(json);
  request(host, uri, parameters, method, body, callback);
}

function request(host, uri, parameters, method, body, callback) {
  var url = urlFromHostURIAndParameters(host, uri, parameters),
      xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    var readyState = xmlHttpRequest.readyState,
        status = xmlHttpRequest.status,
        responseText = xmlHttpRequest.responseText;

    if (readyState == 4) {
      var json = null;

      if (status == 200) {
        var jsonString = responseText; ///

        try {
          json = JSON.parse(jsonString);
        } catch (error) {///
        }

        callback(json);
      }
    }
  };

  var contentType = _constants.APPLICATION_JSON_CHARSET_UTF8_CONTENT_TYPE;
  xmlHttpRequest.open(method, url);
  xmlHttpRequest.setRequestHeader("content-type", contentType);
  xmlHttpRequest.send(body);
}

function queryStringFromParameters(parameters) {
  var names = Object.keys(parameters),
      namesLength = names.length,
      lastIndex = namesLength - 1,
      queryString = names.reduce(function (queryString, name, index) {
    var value = parameters[name],
        encodedName = encodeURIComponent(name),
        encodedValue = encodeURIComponent(value),
        ampersandOrNothing = index !== lastIndex ? "&" : "";
    queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
    return queryString;
  }, "");
  return queryString;
}

function urlFromHostURIAndParameters(host, uri, parameters) {
  var queryString = queryStringFromParameters(parameters),
      url = queryString === "" ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
  return url;
}

},{"../../constants":94}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = log;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _path2 = require("../../utilities/path");

var _fileSystem = require("../../utilities/fileSystem");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logLevel = _constants.DEFAULT_LOG_LEVEL,
    logFileBaseName = _constants.DEFAULT_LOG_FILE_BASE_NAME,
    logDirectoryPath = _constants.DEFAULT_LOG_DIRECTORY_PATH;

function log(messageOrError) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var salientStackMessageIndex = 1;
  var levels = [_constants.TRACE, _constants.DEBUG, _constants.INFO, _constants.WARNING, _constants.ERROR, _constants.FATAL];

  if (level !== "") {
    var levelIndex = levels.indexOf(level),
        logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    salientStackMessageIndex += 1;
    level = "".concat(level, " "); ///
  }

  var error, message;

  if (messageOrError instanceof Error) {
    error = messageOrError; ///

    var _error = error;
    message = _error.message;
  } else {
    message = messageOrError; ///

    error = new Error(message);
  }

  var _error2 = error,
      stack = _error2.stack,
      stackMessages = stackMessagesFromStack(stack),
      pertinentStackMessage = stackMessages[salientStackMessageIndex],
      stackMessage = pertinentStackMessage,
      currentDateAndTimeString = getCurrentDateAndTimeString(),
      filePath = filePathFromStackMessage(stackMessage),
      lineNumber = lineNumberFromStackMessage(stackMessage),
      logMessage = "".concat(level).concat(currentDateAndTimeString, " ").concat(filePath, "(").concat(lineNumber, ") ").concat(message);
  console.log(logMessage);

  if (logDirectoryPath !== null) {
    rollOverLogFile();
    var logFilePath = getLogFilePath(),
        logFileContent = "".concat(logMessage, "\n");
    (0, _fileSystem.appendToFile)(logFilePath, logFileContent);
  }

  return logMessage;
}

function trace(message) {
  return log(message, _constants.TRACE);
}

function debug(message) {
  return log(message, _constants.DEBUG);
}

function info(message) {
  return log(message, _constants.INFO);
}

function warning(message) {
  return log(message, _constants.WARNING);
}

function error(message) {
  return log(message, _constants.ERROR);
}

function fatal(message) {
  return log(message, _constants.FATAL);
}

function setLogLevel(level) {
  logLevel = level;
}

function setLogFileBaseName(fileBaseName) {
  logFileBaseName = fileBaseName;
}

function setLogDirectoryPath(directoryPath) {
  logDirectoryPath = directoryPath;
}

function setLogOptions(logOptions) {
  var level = logOptions.level,
      fileBaseName = logOptions.fileBaseName,
      directoryPath = logOptions.directoryPath;
  setLogLevel(level);
  setLogFileBaseName(fileBaseName);
  setLogDirectoryPath(directoryPath);
}

function getLogFileContent() {
  var logFilePath = getLogFilePath(),
      logFileContent = (0, _fileSystem.readFile)(logFilePath);
  return logFileContent;
}

Object.assign(log, {
  TRACE: _constants.TRACE,
  DEBUG: _constants.DEBUG,
  INFO: _constants.INFO,
  WARNING: _constants.WARNING,
  ERROR: _constants.ERROR,
  FATAL: _constants.FATAL,
  trace: trace,
  debug: debug,
  info: info,
  warning: warning,
  error: error,
  fatal: fatal,
  setLogLevel: setLogLevel,
  setLogFileBaseName: setLogFileBaseName,
  setLogDirectoryPath: setLogDirectoryPath,
  setLogOptions: setLogOptions,
  getLogFileContent: getLogFileContent
});

function getLogFilePath() {
  var logFileName = "".concat(logFileBaseName, ".log"),
      logFilePath = (0, _path2.concatenatePaths)(logDirectoryPath, logFileName);
  return logFilePath;
}

function getRolledOverLogFilePath() {
  var currentDateString = getCurrentDateString(),
      rolledOverLogFileName = "".concat(logFileBaseName, ".").concat(currentDateString, ".log"),
      rolledOverLogFilePath = (0, _path2.concatenatePaths)(logDirectoryPath, rolledOverLogFileName);
  return rolledOverLogFilePath;
}

function getLogFileLastModifiedDate() {
  var logFilePath = getLogFilePath(),
      logFileStats = (0, _fileSystem.getStats)(logFilePath),
      mtime = logFileStats.mtime,
      logFileLastModifiedDate = new Date(mtime); ///

  return logFileLastModifiedDate;
}

function rollOverLogFile() {
  var logFilePath = getLogFilePath(),
      logFileExists = (0, _fileSystem.checkFileExists)(logFilePath);

  if (!logFileExists) {
    return;
  }

  var logFileLastModifiedDate = getLogFileLastModifiedDate(),
      logFileLastModifiedDateCurrentDate = isDateCurrentDate(logFileLastModifiedDate);

  if (!logFileLastModifiedDateCurrentDate) {
    var rolledOverLogFilePath = getRolledOverLogFilePath();
    (0, _fileSystem.renameFile)(logFilePath, rolledOverLogFilePath);
  }
}

function isDateCurrentDate(date) {
  var currentDate = new Date(),
      dateString = date.toDateString(),
      currentDateString = currentDate.toDateString(),
      dateCurrentDate = dateString === currentDateString;
  return dateCurrentDate;
}

function getCurrentDateString() {
  var date = new Date(),
      day = padStartWithZeroes(date.getDate(), 2),
      ///
  month = padStartWithZeroes(date.getMonth() + 1, 2),
      ///
  year = date.getFullYear(),
      currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year);
  return currentDateAndTimeString;
}

function getCurrentDateAndTimeString() {
  var date = new Date(),
      day = padStartWithZeroes(date.getDate(), 2),
      ///
  month = padStartWithZeroes(date.getMonth() + 1, 2),
      ///
  year = date.getFullYear(),
      hours = padStartWithZeroes(date.getHours(), 2),
      minutes = padStartWithZeroes(date.getMinutes(), 2),
      seconds = padStartWithZeroes(date.getSeconds(), 2),
      milliseconds = padStartWithZeroes(date.getMilliseconds(), 3),
      currentDateAndTimeString = "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds, ".").concat(milliseconds);
  return currentDateAndTimeString;
}

function stackMessagesFromStack(stack) {
  var stackMessages = [],
      stackLines = stack.split(/\r\n|\n/);
  var stackMessage = "";
  stackLines.forEach(function (stackLine) {
    var matches = /^\s*at.*/.test(stackLine);
    stackMessage = stackMessage === "" ? stackLine : "".concat(stackMessage, "\n").concat(stackLine);

    if (matches) {
      stackMessages.push(stackMessage);
      stackMessage = "";
    }
  });
  return stackMessages;
}

function filePathFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/(\/.+):\d+:\d+/m),
      secondMatch = (0, _array.second)(matches),
      absoluteFilePath = secondMatch,
      ///
  currentWorkingDirectoryPath = _path["default"].resolve("."),
      ///
  currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length,
      start = currentWorkingDirectoryPathLength + 1,
      ///
  filePath = absoluteFilePath.substr(start);

  return filePath;
}

function lineNumberFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/:(\d+)/m),
      secondMatch = (0, _array.second)(matches),
      lineNumber = secondMatch; ///

  return lineNumber;
}

function padStartWithZeroes(string, targetLength) {
  var padString = "0",
      paddedString = padStart(string, targetLength, padString);
  return paddedString;
}

function padStart(string, targetLength, padString) {
  var padding = "";

  for (var index = 0; index < targetLength; index++) {
    padding += padString;
  }

  var paddedString = "".concat(padding).concat(string).substr(-targetLength);
  return paddedString;
}

},{"../../constants":94,"../../utilities/array":96,"../../utilities/fileSystem":98,"../../utilities/path":105,"path":107}],102:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onETX;

var _constants = require("../../constants");

function onETX(handler) {
  var event = _constants.DATA_EVENT;

  if (process.stdin.setRawMode) {
    var rawMode = true,
        encoding = _constants.UTF8_ENCODING;
    process.stdin.setRawMode(rawMode);
    process.stdin.setEncoding(encoding);
    process.stdin.resume();
    process.stdin.addListener(event, dataHandler);
    return offExt;
  }

  function offExt() {
    process.stdin.removeListener(event, dataHandler);
  }

  function dataHandler(character) {
    if (character === _constants.ETX_CHARACTER) {
      handler();
    }
  }
}

}).call(this,require('_process'))

},{"../../constants":94,"_process":108}],103:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prompt;

var _onETX = _interopRequireDefault(require("./onETX"));

var _asynchronous = require("../../utilities/asynchronous");

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function prompt(options, callback) {
  var value = null,
      _options$attempts = options.attempts,
      attempts = _options$attempts === void 0 ? 3 : _options$attempts,
      context = {
    value: value,
    attempts: attempts,
    options: options
  };
  (0, _asynchronous.whilst)(attempt, function () {
    var value = context.value;
    callback(value);
  }, context);
}

function attempt(next, done, context) {
  var attempts = context.attempts;
  var terminate = attempts-- === 0;

  if (terminate) {
    done();
    return;
  }

  var options = context.options,
      _options$hidden = options.hidden,
      hidden = _options$hidden === void 0 ? false : _options$hidden,
      _options$encoding = options.encoding,
      encoding = _options$encoding === void 0 ? "utf8" : _options$encoding,
      description = options.description,
      _options$initialValue = options.initialValue,
      initialValue = _options$initialValue === void 0 ? "" : _options$initialValue,
      errorMessage = options.errorMessage,
      validationPattern = options.validationPattern,
      validationFunction = options.validationFunction;
  input(description, initialValue, encoding, hidden, callback);

  function callback(value) {
    var valid = validationFunction ? ///
    validationFunction(value) : validationPattern.test(value);

    if (valid) {
      Object.assign(context, {
        value: value
      });
      done();
    } else {
      console.log(errorMessage);
      Object.assign(context, {
        attempts: attempts
      });
      next();
    }
  }
}

function input(description, initialValue, encoding, hidden, callback) {
  var value = initialValue; ///

  var event = _constants.DATA_EVENT,
      rawMode = true,
      offETX = (0, _onETX["default"])(function () {
    console.log(_constants.CTRL_C);
    process.exit();
  });
  process.stdin.setEncoding(encoding);
  process.stdin.setRawMode(rawMode);
  process.stdout.write(description);

  if (!hidden) {
    process.stdout.write(value);
  }

  process.stdin.resume();
  process.stdin.on(event, listener);

  function listener(chunk) {
    var character = chunk.toString(encoding);

    switch (character) {
      case _constants.LINE_FEED_CHARACTER:
      case _constants.CARRIAGE_RETURN_CHARACTER:
        process.stdout.write(_constants.LINE_FEED_CHARACTER);
        process.stdin.removeListener(event, listener);
        process.stdin.pause();
        offETX();
        callback(value);
        break;

      case _constants.BACKSPACE_CHARACTER:
        value = value.slice(0, value.length - 1);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(description);

        if (!hidden) {
          process.stdout.write(value);
        }

        break;

      default:
        value += character;

        if (!hidden) {
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          process.stdout.write(description);
          process.stdout.write(value);
        }

        break;
    }
  }
}

}).call(this,require('_process'))

},{"../../constants":94,"../../utilities/asynchronous":97,"./onETX":102,"_process":108}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rc;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _constants = require("../../constants");

var _fileSystem = require("../../utilities/fileSystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathResolver = _path["default"].resolve,
    baseExtension = _constants.DEFAULT_RC_BASE_EXTENSION;

function rc() {
  var environmentNameOrArgv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var environment,
      environmentName,
      environmentNameOrArgvArgv = environmentNameOrArgv instanceof Array;

  if (environmentNameOrArgvArgv) {
    var argv = environmentNameOrArgv; ///

    environmentName = environmentNameFromArgv(argv);
  } else {
    environmentName = environmentNameOrArgv; ///
  }

  var json = readRCFile(),
      environments = json.environments;

  if (environmentName === null) {
    var firstEnvironment = (0, _array.first)(environments);
    environment = firstEnvironment; ///
  } else {
    environment = environments.find(function (environment) {
      var name = environment.name,
          found = name === environmentName;
      return found;
    });
  }

  delete environment.name;
  Object.assign(rc, environment);
  return environment;
}

function readRCFile() {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      fileContent = (0, _fileSystem.readFile)(absoluteRCFilePath),
      json = JSON.parse(fileContent);
  return json;
}

function writeRCFile(json) {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      fileContent = JSON.stringify(json, null, "\t");
  (0, _fileSystem.writeFile)(absoluteRCFilePath, fileContent);
}

function updateRCFile(addedProperties) {
  var json = readRCFile();

  if (addedProperties) {
    Object.assign(json, addedProperties);
  }

  for (var _len = arguments.length, deletedPropertyNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    deletedPropertyNames[_key - 1] = arguments[_key];
  }

  deletedPropertyNames.forEach(function (deletedPropertyName) {
    delete json[deletedPropertyName];
  });
  writeRCFile(json);
}

function checkRCFileExists() {
  var absoluteRCFilePath = absoluteRCFilePathFromNothing(),
      rcFileExists = (0, _fileSystem.checkFileExists)(absoluteRCFilePath);
  return rcFileExists;
}

function createVacuousRCFile() {
  var json = {
    "environments": [{}]
  };
  writeRCFile(json);
}

function setRCBaseExtension(rcBaseExtension) {
  baseExtension = rcBaseExtension;
}

function setRCPathResolver(rcPathResolver) {
  pathResolver = rcPathResolver;
}

Object.assign(rc, {
  readRCFile: readRCFile,
  writeRCFile: writeRCFile,
  updateRCFile: updateRCFile,
  checkRCFileExists: checkRCFileExists,
  createVacuousRCFile: createVacuousRCFile,
  setRCBaseExtension: setRCBaseExtension,
  setRCPathResolver: setRCPathResolver
});

function environmentNameFromArgv(argv) {
  var environmentName = null;
  argv.find(function (argument) {
    ///
    var matches = argument.match(/--environment=(.+)/),
        found = matches !== null;

    if (found) {
      var secondMatch = (0, _array.second)(matches);
      environmentName = secondMatch;
    }

    return found;
  });
  return environmentName;
}

function absoluteRCFilePathFromNothing() {
  var filePath = "./.".concat(baseExtension, "rc"),
      absoluteRCFilePath = pathResolver(filePath);
  return absoluteRCFilePath;
}

},{"../../constants":94,"../../utilities/array":96,"../../utilities/fileSystem":98,"path":107}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPathName = isPathName;
exports.isPathTopmostName = isPathTopmostName;
exports.isPathRelativePath = isPathRelativePath;
exports.isPathAbsolutePath = isPathAbsolutePath;
exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
exports.combinePaths = combinePaths;
exports.concatenatePaths = concatenatePaths;
exports.bottommostNameFromPath = bottommostNameFromPath;
exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
exports["default"] = void 0;

var _array = require("../utilities/array");

function isPathName(path) {
  path = path.replace(/^\//, "").replace(/\/$/, ""); ///

  var pathName = /\//.test(path) === false;
  return pathName;
}

function isPathTopmostName(path) {
  var pathName = isPathName(path),
      pathAbsolutePath = isPathAbsolutePath(path),
      pathTopmostName = pathName && pathAbsolutePath;
  return pathTopmostName;
}

function isPathRelativePath(path) {
  var pathRelativePath = !/^\//.test(path);
  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathAbsolutePath = /^\//.test(path);
  return pathAbsolutePath;
}

function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
  var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")),
      topmostNameInAbsolutePath = regExp.test(absolutePath);
  return topmostNameInAbsolutePath;
}

function combinePaths(path, relativePath) {
  var combinedPath = null;
  var pathNames = path.split(/\//),
      relativePathNames = relativePath.split(/\//);
  var lastPathName,
      firstRelativePathName = (0, _array.first)(relativePathNames);

  if (firstRelativePathName === ".") {
    relativePathNames.shift();
  }

  firstRelativePathName = (0, _array.first)(relativePathNames);
  lastPathName = (0, _array.last)(pathNames);

  while (firstRelativePathName === ".." && lastPathName !== undefined) {
    relativePathNames.shift();
    pathNames.pop();
    firstRelativePathName = (0, _array.first)(relativePathNames);
    lastPathName = (0, _array.last)(pathNames);
  }

  if (lastPathName !== undefined) {
    var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
    combinedPath = combinedPathNames.join("/");
  }

  return combinedPath;
}

function concatenatePaths(path, relativePath) {
  path = path.replace(/\/$/, ""); ///

  var concatenatedPath = "".concat(path, "/").concat(relativePath);
  return concatenatedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;
  var matches = path.match(/^.*\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = (0, _array.second)(matches),
      topmostDirectoryPath = secondMatch; ///

  return topmostDirectoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;
  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;
  var matches = path.match(/^(.*)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;
  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = (0, _array.second)(matches);
    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

var _default = {
  isPathName: isPathName,
  isPathTopmostName: isPathTopmostName,
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isTopmostNameInAbsolutePath: isTopmostNameInAbsolutePath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};
exports["default"] = _default;

},{"../utilities/array":96}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFile = parseFile;
exports.parseContent = parseContent;
exports.parseLine = parseLine;
exports["default"] = void 0;

var _fileSystem = require("../utilities/fileSystem");

function parseFile(filePath, args, regex) {
  var content = (0, _fileSystem.readFile)(filePath),
      parsedContent = parseContent(content, args, regex);
  return parsedContent;
}

function parseContent(content, args, regex) {
  var lines = content.split("\n"),
      parsedLines = parseLines(lines, args, regex),
      parsedContent = parsedLines.join("\n");
  return parsedContent;
}

function parseLine(line, args) {
  var regex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /\${(.+?)}/g;
  var parsedLine = line.replace(regex, function (match, token) {
    var parsedToken = parseToken(token, args);
    return parsedToken;
  });
  return parsedLine;
}

var _default = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};
exports["default"] = _default;

function parseLines(lines, args, regex) {
  var parsedLines = lines.map(function (line) {
    var parsedLine = parseLine(line, args, regex);
    return parsedLine;
  });
  return parsedLines;
}

function parseToken(token, args) {
  var parsedToken = "";

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

},{"../utilities/fileSystem":98}],107:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))

},{"_process":108}],108:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY2FudmFzLmpzIiwibGliL2NvbnN0YW50cy5qcyIsImxpYi9lbGVtZW50LmpzIiwibGliL2VsZW1lbnQvY2FtZXJhLmpzIiwibGliL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsImxpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCJsaWIvZWxlbWVudC9jYW52YXMuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCJsaWIvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCJsaWIvZWxlbWVudC9tYXNrLmpzIiwibGliL2VsZW1lbnQvcGFydC5qcyIsImxpYi9lbGVtZW50L3NjZW5lLmpzIiwibGliL2V4YW1wbGUuanMiLCJsaWIvZXhhbXBsZS9jdWJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwibGliL2V4YW1wbGUvbWFza2luZy5qcyIsImxpYi9leGFtcGxlL3B5cmFtaWQuanMiLCJsaWIvZXhhbXBsZS9zaW1wbGUuanMiLCJsaWIvZXhhbXBsZS90aWxpbmcuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvbWF0aHMvbWF0cml4LmpzIiwibGliL21hdGhzL3ZlY3Rvci5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24uanMiLCJsaWIvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCJsaWIvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy91c2VySW5wdXQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy96b29tLmpzIiwibGliL21peGluL2JsZW5kaW5nLmpzIiwibGliL21peGluL2J1ZmZlci5qcyIsImxpYi9taXhpbi9jb2xvdXIuanMiLCJsaWIvbWl4aW4vZGVwdGguanMiLCJsaWIvbWl4aW4vbG9jYXRpb24uanMiLCJsaWIvbWl4aW4vbWF0cml4LmpzIiwibGliL21peGluL3Byb2dyYW0uanMiLCJsaWIvbWl4aW4vc2hhZGVyLmpzIiwibGliL21peGluL3RleHR1cmUuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsImxpYi9wcmltaXRpdmUvZmFjZXQuanMiLCJsaWIvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwibGliL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsImxpYi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwibGliL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCJsaWIvcHJpbWl0aXZlL3ZlcnRleC5qcyIsImxpYi9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwibGliL3JlYWN0LmpzIiwibGliL3JlbmRlcmVyLmpzIiwibGliL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwibGliL3JlbmRlcmVyL2NvbG91ci5qcyIsImxpYi9yZW5kZXJlci9kYXRhLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3RleHR1cmUuanMiLCJsaWIvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsImxpYi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsImxpYi91dGlsaXRpZXMvYW5nbGUuanMiLCJsaWIvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvZmFjZXQuanMiLCJsaWIvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsImxpYi91dGlsaXRpZXMvbWF0cml4LmpzIiwibGliL3V0aWxpdGllcy9taWRQb2ludC5qcyIsImxpYi91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsImxpYi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImxpYi91dGlsaXRpZXMvcm90YXRpb24uanMiLCJsaWIvdXRpbGl0aWVzL3RleHR1cmUuanMiLCJsaWIvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsImxpYi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJsaWIveGdsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9hamF4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbG9nLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvb25FVFguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9wcm9tcHQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9yYy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXBwbHlNYXRyaXggfSBmcm9tIFwiLi9taXhpbi9tYXRyaXhcIjtcbmltcG9ydCB7IGVuYWJsZUJsZW5kaW5nIH0gZnJvbSBcIi4vbWl4aW4vYmxlbmRpbmdcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0sIHVzZVByb2dyYW0gfSBmcm9tIFwiLi9taXhpbi9wcm9ncmFtXCI7XG5pbXBvcnQgeyBjbGVhckNvbG91ciwgY2xlYXJDb2xvdXJCdWZmZXIgfSBmcm9tIFwiLi9taXhpbi9jb2xvdXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRleHR1cmUsIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nIH0gZnJvbSBcIi4vbWl4aW4vdGV4dHVyZVwiO1xuaW1wb3J0IHsgY2xlYXJEZXB0aCwgY2xlYXJEZXB0aEJ1ZmZlciwgZW5hYmxlRGVwdGhUZXN0aW5nIH0gZnJvbSBcIi4vbWl4aW4vZGVwdGhcIjtcbmltcG9ydCB7IGNyZWF0ZVNoYWRlciwgY3JlYXRlVmVydGV4U2hhZGVyLCBjcmVhdGVGcmFnbWVudFNoYWRlciB9IGZyb20gXCIuL21peGluL3NoYWRlclwiO1xuaW1wb3J0IHsgYmluZEJ1ZmZlciwgYmluZEVsZW1lbnRCdWZmZXIsIGNyZWF0ZUJ1ZmZlciwgY3JlYXRlRWxlbWVudEJ1ZmZlciB9IGZyb20gXCIuL21peGluL2J1ZmZlclwiO1xuaW1wb3J0IHsgZ2V0QXR0cmlidXRlTG9jYXRpb24sIGdldFVuaWZvcm1Mb2NhdGlvbiwgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIH0gZnJvbSBcIi4vbWl4aW4vbG9jYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgYXBwbHlNYXRyaXggPSBhcHBseU1hdHJpeDtcblxuICBlbmFibGVCbGVuZGluZyA9IGVuYWJsZUJsZW5kaW5nO1xuXG4gIHVzZVByb2dyYW0gPSB1c2VQcm9ncmFtO1xuICBjcmVhdGVQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbTtcblxuICBjbGVhckNvbG91ciA9IGNsZWFyQ29sb3VyO1xuICBjbGVhckNvbG91ckJ1ZmZlciA9IGNsZWFyQ29sb3VyQnVmZmVyO1xuXG4gIGNyZWF0ZVRleHR1cmUgPSBjcmVhdGVUZXh0dXJlO1xuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZyA9IGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nO1xuXG4gIGNsZWFyRGVwdGggPSBjbGVhckRlcHRoO1xuICBjbGVhckRlcHRoQnVmZmVyID0gY2xlYXJEZXB0aEJ1ZmZlcjtcbiAgZW5hYmxlRGVwdGhUZXN0aW5nID0gZW5hYmxlRGVwdGhUZXN0aW5nO1xuXG4gIGNyZWF0ZVNoYWRlciA9IGNyZWF0ZVNoYWRlcjtcbiAgY3JlYXRlVmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyO1xuICBjcmVhdGVGcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyO1xuXG4gIGJpbmRCdWZmZXIgPSBiaW5kQnVmZmVyO1xuICBjcmVhdGVCdWZmZXIgPSBjcmVhdGVCdWZmZXI7XG4gIGJpbmRFbGVtZW50QnVmZmVyID0gYmluZEVsZW1lbnRCdWZmZXI7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIgPSBjcmVhdGVFbGVtZW50QnVmZmVyO1xuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbiA9IGdldFVuaWZvcm1Mb2NhdGlvbjtcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24gPSBnZXRBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gXCJjYW52YXNcIikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBNT1VTRV9VUCA9IFwiTU9VU0VfVVBcIjtcbmV4cG9ydCBjb25zdCBNT1VTRV9ET1dOID0gXCJNT1VTRV9ET1dOXCI7XG5leHBvcnQgY29uc3QgTU9VU0VfTU9WRSA9IFwiTU9VU0VfTU9WRVwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFX1dIRUVMID0gXCJNT1VTRV9XSEVFTFwiO1xuZXhwb3J0IGNvbnN0IERFTFRBX1NDQUxBUiA9IDEuMjU7XG5leHBvcnQgY29uc3QgSU5WRVJUX1NDQUxBUiA9IC0xO1xuZXhwb3J0IGNvbnN0IEFOR0xFU19TQ0FMQVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IE9GRlNFVF9TQ0FMQVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgVkVSVElDRVNfTEVOR1RIID0gMztcbmV4cG9ydCBjb25zdCBNSU5JTVVNX0RJU1RBTkNFID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBGSUVMRF9PRl9WSUVXID0gNDUgKiBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBcImZ1bmN0aW9uXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrID0gbWFzaztcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCBtYXNrID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbiksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25DYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZnVuY3Rpb25FbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGdW5jdGlvbkNhbnZhc0VsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uRWxlbWVudDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IFRleHR1cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci9jb2xvdXJcIjtcbmltcG9ydCBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzXCI7XG5pbXBvcnQgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIgJiYgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRleHR1cmVSZW5kZXJlciAmJiB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCBzaW1wbGVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9tYXNraW5nXCI7XG5pbXBvcnQgcHlyYW1pZEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9weXJhbWlkXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgIDwvUGFydD5cbiAgICA8RGVzaWduQ2FtZXJhIC8+XG4gIDwvU2NlbmU+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgU21hbGxDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBzbWFsbEN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPFNtYWxsQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIE1lZGl1bUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFzaz17c21hbGxDdWJlTWFza30gLz5cblxuICAgICAgICAsXG4gICAgICAgIG1lZGl1bUN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPE1lZGl1bUN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIG1hc2s9e21lZGl1bUN1YmVNYXNrfSAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TGFyZ2VDdWJlIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5pbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IHtcbiAgICBjb25zdCB7IGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCB7IGltYWdlTWFwVVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXApO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICBtYXNrID1cblxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuXG4gICAgICA7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcykgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrPXttYXNrfSAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFwiLi94Z2xcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFzayB9IGZyb20gXCIuL2VsZW1lbnQvbWFza1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJ0IH0gZnJvbSBcIi4vZWxlbWVudC9wYXJ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjZW5lIH0gZnJvbSBcIi4vZWxlbWVudC9zY2VuZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9nYW1pbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZGVzaWduXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuICAgIHZlY3RvclsyXSAqIC0xLFxuICAgIHZlY3RvclszXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzNdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKyB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gLSB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFszXSAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzNdICogeSArIG1hdHJpeFs2XSAqIHosXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbN10gKiB6LFxuICAgIG1hdHJpeFsyXSAqIHggKyBtYXRyaXhbNV0gKiB5ICsgbWF0cml4WzhdICogeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4ICsgbWF0cml4WyA0XSAqIHkgKyBtYXRyaXhbIDhdICogeiArIG1hdHJpeFsxMl0gKiB3LFxuICAgIG1hdHJpeFsgMV0gKiB4ICsgbWF0cml4WyA1XSAqIHkgKyBtYXRyaXhbIDldICogeiArIG1hdHJpeFsxM10gKiB3LFxuICAgIG1hdHJpeFsgMl0gKiB4ICsgbWF0cml4WyA2XSAqIHkgKyBtYXRyaXhbMTBdICogeiArIG1hdHJpeFsxNF0gKiB3LFxuICAgIG1hdHJpeFsgM10gKiB4ICsgbWF0cml4WyA3XSAqIHkgKyBtYXRyaXhbMTFdICogeiArIG1hdHJpeFsxNV0gKiB3LFxuXG4gIF0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX187IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNISUZUX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VXaGVlbERlbHRhKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgbW91c2VVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZURvd25FdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VXaGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG5cbiAgICAgICAgICB0b3AgLSBjbGllbnRZLFxuXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX1NDQUxBUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX1NDQUxBUiksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBBTkdMRVNfU0NBTEFSLCBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArQU5HTEVTX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sIG1hdHJpeCksIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGZsaXBwZWQpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIikgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5cbmltcG9ydCB7IHRoaXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuXG5jbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcHVzaCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXModGhpcy52ZXJ0aWNlcyk7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCk7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0ZhY2V0O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckJ1ZmZlcnMsIHZlcnRleENvbG91cnNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5jbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCI7XG5cbmNsYXNzIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykgeyByZXR1cm4gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCI7XG5cbmltcG9ydCB7IHNhbXBsZXJOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5cbmNsYXNzIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pIHtcbiAgICBzdXBlcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxzTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcblxuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxzTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbnNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaWZvcm1Mb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIixcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIHtcbiAgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5vcm1hbHNNYXRyaXhOYW1lID0gXCJ1Tm9ybWFsc01hdHJpeFwiLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleE5vcm1hbFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsc01hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxzTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24obGlnaHRpbmdTb3VyY2UsIHtcbiAgbm9ybWFsc01hdHJpeE5hbWUsXG4gIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpZ2h0aW5nU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gXCJ1T2Zmc2V0c01hdHJpeFwiLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIixcbiAgICAgIHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIixcbiAgICAgIHByb2plY3Rpb25NYXRyaXhOYW1lID0gXCJ1UGVyc3BlY3RpdmVNYXRyaXhcIixcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24ocG9zaXRpb25Tb3VyY2UsIHtcbiAgb2Zmc2V0c01hdHJpeE5hbWUsXG4gIHBvc2l0aW9uTWF0cml4TmFtZSxcbiAgcm90YXRpb25zTWF0cml4TmFtZSxcbiAgcHJvamVjdGlvbk1hdHJpeE5hbWUsXG4gIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZVxufSk7XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IHBvc2l0aW9uU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGZyYWdtZW50U2hhZGVyU291cmNlLCB7XG4gIHNhbXBsZXJOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIixcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCI7XG5pbXBvcnQgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiO1xuaW1wb3J0IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSxcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lLFxuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVyb1xufTtcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZUEsIHZhbHVlQiwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZUEgLSB2YWx1ZUIsXG4gICAgICAgIGFic29sdXRlRGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpLFxuICAgICAgICBhcHByb3hpbWF0ZWx5RXF1YWwgPSAoYWJzb2x1dGVEaWZmZXJlbmNlIDwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIGFwcHJveGltYXRlbHlFcXVhbDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgcGVybXV0ZSxcbiAgZmxhdHRlbixcbiAgZ3VhcmFudGVlXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzLCBsZW5ndGgzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5mdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiBlZGdlLmNsb25lKCkpO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xvbmUoKSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSkge1xuICBjb25zdCBlZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lRWRnZXMsXG4gIGNsb25lTm9ybWFsLFxuICBjbG9uZVZlcnRpY2VzLFxuICBjYWxjdWxhdGVFZGdlcyxcbiAgY2FsY3VsYXRlTm9ybWFsLFxuICBjYWxjdWxhdGVBcmVhXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb24sXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25cbn07XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLCBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcblxuZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLFxuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSxcbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSxcbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsICAvLy9cbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgek5lYXIgPSBaX05FQVIsIC8vL1xuICAgICAgICB6RmFyID0gWl9GQVIsIC8vL1xuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2NhbGVNYXRyaXhGcm9tU2NhbGUsXG4gIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLFxuICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zLFxuICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sXG4gIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUsXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzXG59O1xuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZWZsZWN0MywgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5mdW5jdGlvbiByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpIHtcbiAgY29uc3QgcmV2ZXJzZU9yZGVyID0gdHJ1ZSxcbiAgICAgICAgcmVmbGVjdGVkQW5nbGVzID0gcmVmbGVjdDMoYW5nbGVzKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhyZWZsZWN0ZWRBbmdsZXMsIHJldmVyc2VPcmRlciksXG4gICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoZGlyZWN0aW9ucywgcm90YXRpb25zTWF0cml4KS5zbGljZSgwLCAzKTsgLy8vXG5cbiAgcmV0dXJuIHJlbGF0aXZlT2Zmc2V0cztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hbmdsZVwiO1xuXG5mdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSkge1xuICBjb25zdCBtYXNraW5nRWRnZUV4dGVudCA9IG1hc2tpbmdFZGdlLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnQgPSBub3JtYWxpc2UzKG1hc2tpbmdFZGdlRXh0ZW50KSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyA9IHVuaXRNYXNraW5nRWRnZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IChhbmdsZU9mUm90YXRpb25TaW5lID4gMCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2NhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLWNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbixcbiAgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uXG59O1xuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IGExID0gcXVhdGVybmlvbkFbMF0sXG4gICAgICAgIGIxID0gcXVhdGVybmlvbkFbMV0sXG4gICAgICAgIGMxID0gcXVhdGVybmlvbkFbMl0sXG4gICAgICAgIGQxID0gcXVhdGVybmlvbkFbM10sXG4gICAgICAgIGEyID0gcXVhdGVybmlvbkJbMF0sXG4gICAgICAgIGIyID0gcXVhdGVybmlvbkJbMV0sXG4gICAgICAgIGMyID0gcXVhdGVybmlvbkJbMl0sXG4gICAgICAgIGQyID0gcXVhdGVybmlvbkJbM10sXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5mdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBpbnZlcnQyLCBpbnZlcnQzIH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcbmltcG9ydCB7IGFkZDIsIG11bHRpcGx5MiwgdHJhbnNmb3JtMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHRlbXBWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSB0ZW1wVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLFxuICBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcG9zZVRyYW5zZm9ybVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlVmVydGljZXMsXG4gIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi9yZWFjdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBcIlJlYWN0XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuIiwiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUUkFDRSA9IFwiVFJBQ0VcIjtcbmV4cG9ydCBjb25zdCBERUJVRyA9IFwiREVCVUdcIjtcbmV4cG9ydCBjb25zdCBJTkZPID0gXCJJTkZPXCI7XG5leHBvcnQgY29uc3QgV0FSTklORyA9IFwiV0FSTklOR1wiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJFUlJPUlwiO1xuZXhwb3J0IGNvbnN0IEZBVEFMID0gXCJGQVRBTFwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9HX0xFVkVMID0gV0FSTklORztcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSCA9IG51bGw7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0dfRklMRV9CQVNFX05BTUUgPSBcImRlZmF1bHRcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURjhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIjtcblxuZXhwb3J0IGNvbnN0IERBVEFfRVZFTlQgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5cbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgTElORV9GRUVEX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OID0gXCJcIjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGVVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdGVtcGxhdGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWlzY2VsbGFuZW91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGxhc3QsXG4gIHRhaWwsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2ssIGluZGV4KSA9PiB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBVVEY4X0VOQ09ESU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCkge1xuICBjb25zdCBlbnRyeUV4aXN0cyA9IGZzLmV4aXN0c1N5bmMoZW50cnlQYXRoKTtcblxuICByZXR1cm4gZW50cnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShlbnRyeVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0RpcmVjdG9yeUV4aXN0cyhkaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBlbnRyeVBhdGggPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBjaGVja0VudHJ5RXhpc3RzKGVudHJ5UGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlGaWxlKGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGgsIGVuY29kaW5nID0gVVRGOF9FTkNPRElORykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9GaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLmFwcGVuZEZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKChkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBcIi5cIikgJiYgKGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhwYXJlbnREaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICghcGFyZW50RGlyZWN0b3J5RXhpc3RzKSB7XG4gICAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gICAgfVxuICB9XG5cbiAgZnMubWtkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRmlsZShvbGRGaWxlUGF0aCwgbmV3RmlsZVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRGaWxlUGF0aCwgbmV3RmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja0VudHJ5RXhpc3RzLFxuICBjaGVja0ZpbGVFeGlzdHMsXG4gIGNoZWNrRGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RmlsZSxcbiAgaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGUsXG4gIHdyaXRlRmlsZSxcbiAgYXBwZW5kVG9GaWxlLFxuICBjcmVhdGVEaXJlY3RvcnksXG4gIHJlbmFtZUZpbGUsXG4gIGdldFN0YXRzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByYyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL3JjXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvbG9nXCI7XG5pbXBvcnQgb25FVFggZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vbkVUWFwiO1xuaW1wb3J0IHByb21wdCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL3Byb21wdFwiO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2FqYXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2csXG4gIHJjLFxuICBnZXQsXG4gIHBvc3QsXG4gIG9uRVRYLFxuICBwcm9tcHRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QsIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEY4X0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBwYXJhbWV0ZXJzOyAvLy9cbiAgICBwYXJhbWV0ZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBib2R5ID0gdW5kZWZpbmVkO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBqc29uLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2VUZXh0IH0gPSB4bWxIdHRwUmVxdWVzdDtcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgICAgaWYgKHN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHJlc3BvbnNlVGV4dDsgLy8vXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGpzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEY4X0NPTlRFTlRfVFlQRTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIGNvbnRlbnRUeXBlKTtcblxuICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpO1xufVxuXG5mdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/IFwiJlwiIDogXCJcIjtcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgXCJcIik7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY29uY2F0ZW5hdGVQYXRocyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgY2hlY2tGaWxlRXhpc3RzLCByZWFkRmlsZSwgYXBwZW5kVG9GaWxlLCByZW5hbWVGaWxlLCBnZXRTdGF0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuaW1wb3J0IHsgVFJBQ0UsIERFQlVHLCBJTkZPLCBXQVJOSU5HLCBFUlJPUiwgRkFUQUwsIERFRkFVTFRfTE9HX0xFVkVMLCBERUZBVUxUX0xPR19GSUxFX0JBU0VfTkFNRSwgREVGQVVMVF9MT0dfRElSRUNUT1JZX1BBVEggfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmxldCBsb2dMZXZlbCA9IERFRkFVTFRfTE9HX0xFVkVMLFxuICAgIGxvZ0ZpbGVCYXNlTmFtZSA9IERFRkFVTFRfTE9HX0ZJTEVfQkFTRV9OQU1FLFxuICAgIGxvZ0RpcmVjdG9yeVBhdGggPSBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKG1lc3NhZ2VPckVycm9yLCBsZXZlbCA9IFwiXCIpIHtcbiAgbGV0IHNhbGllbnRTdGFja01lc3NhZ2VJbmRleCA9IDE7XG5cbiAgY29uc3QgbGV2ZWxzID0gW1xuICAgIFRSQUNFLFxuICAgIERFQlVHLFxuICAgIElORk8sXG4gICAgV0FSTklORyxcbiAgICBFUlJPUixcbiAgICBGQVRBTCxcbiAgXTtcblxuICBpZiAobGV2ZWwgIT09IFwiXCIpIHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobGV2ZWwpLFxuICAgICAgICAgIGxvZ0xldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsb2dMZXZlbCk7XG5cbiAgICBpZiAobGV2ZWxJbmRleCA8IGxvZ0xldmVsSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzYWxpZW50U3RhY2tNZXNzYWdlSW5kZXggKz0gMTtcblxuICAgIGxldmVsID0gYCR7bGV2ZWx9IGA7ICAvLy9cbiAgfVxuXG4gIGxldCBlcnJvcixcbiAgICAgIG1lc3NhZ2U7XG5cbiAgaWYgKG1lc3NhZ2VPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBlcnJvciA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gbWVzc2FnZU9yRXJyb3I7IC8vL1xuXG4gICAgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCB7IHN0YWNrIH0gPSBlcnJvcixcbiAgICAgICAgc3RhY2tNZXNzYWdlcyA9IHN0YWNrTWVzc2FnZXNGcm9tU3RhY2soc3RhY2spLFxuICAgICAgICBwZXJ0aW5lbnRTdGFja01lc3NhZ2UgPSBzdGFja01lc3NhZ2VzW3NhbGllbnRTdGFja01lc3NhZ2VJbmRleF0sXG4gICAgICAgIHN0YWNrTWVzc2FnZSA9IHBlcnRpbmVudFN0YWNrTWVzc2FnZSwgLy8vXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpLFxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpLFxuICAgICAgICBsaW5lTnVtYmVyID0gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbG9nTWVzc2FnZSA9IGAke2xldmVsfSR7Y3VycmVudERhdGVBbmRUaW1lU3RyaW5nfSAke2ZpbGVQYXRofSgke2xpbmVOdW1iZXJ9KSAke21lc3NhZ2V9YDtcblxuICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcblxuICBpZiAobG9nRGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHJvbGxPdmVyTG9nRmlsZSgpO1xuXG4gICAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gYCR7bG9nTWVzc2FnZX1cXG5gO1xuXG4gICAgYXBwZW5kVG9GaWxlKGxvZ0ZpbGVQYXRoLCBsb2dGaWxlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbG9nTWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gdHJhY2UobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFRSQUNFKTsgfVxuXG5mdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgREVCVUcpOyB9XG5cbmZ1bmN0aW9uIGluZm8obWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIElORk8pOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFdBUk5JTkcpOyB9XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBFUlJPUik7IH1cblxuZnVuY3Rpb24gZmF0YWwobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEZBVEFMKTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkgeyBsb2dMZXZlbCA9IGxldmVsOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpIHsgbG9nRmlsZUJhc2VOYW1lID0gZmlsZUJhc2VOYW1lOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkgeyBsb2dEaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dPcHRpb25zKGxvZ09wdGlvbnMpIHtcbiAgY29uc3QgeyBsZXZlbCwgZmlsZUJhc2VOYW1lLCBkaXJlY3RvcnlQYXRoIH0gPSBsb2dPcHRpb25zO1xuXG4gIHNldExvZ0xldmVsKGxldmVsKTtcblxuICBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKTtcblxuICBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlQ29udGVudCgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlQ29udGVudCA9IHJlYWRGaWxlKGxvZ0ZpbGVQYXRoKTtcblxuICByZXR1cm4gbG9nRmlsZUNvbnRlbnQ7XG59XG5cbk9iamVjdC5hc3NpZ24obG9nLCB7XG4gIFRSQUNFLFxuICBERUJVRyxcbiAgSU5GTyxcbiAgV0FSTklORyxcbiAgRVJST1IsXG4gIEZBVEFMLFxuICB0cmFjZSxcbiAgZGVidWcsXG4gIGluZm8sXG4gIHdhcm5pbmcsXG4gIGVycm9yLFxuICBmYXRhbCxcbiAgc2V0TG9nTGV2ZWwsXG4gIHNldExvZ0ZpbGVCYXNlTmFtZSxcbiAgc2V0TG9nRGlyZWN0b3J5UGF0aCxcbiAgc2V0TG9nT3B0aW9ucyxcbiAgZ2V0TG9nRmlsZUNvbnRlbnRcbn0pO1xuXG5mdW5jdGlvbiBnZXRMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgbG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LmxvZ2AsXG4gICAgICAgIGxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCBsb2dGaWxlTmFtZSk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRSb2xsZWRPdmVyTG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlU3RyaW5nID0gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS4ke2N1cnJlbnREYXRlU3RyaW5nfS5sb2dgLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJvbGxlZE92ZXJMb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUxhc3RNb2RpZmllZERhdGUoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZVN0YXRzID0gZ2V0U3RhdHMobG9nRmlsZVBhdGgpLFxuICAgICAgICB7IG10aW1lIH0gPSBsb2dGaWxlU3RhdHMsXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUobXRpbWUpOyAgLy8vXG5cbiAgcmV0dXJuIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlO1xufVxuXG5mdW5jdGlvbiByb2xsT3ZlckxvZ0ZpbGUoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhsb2dGaWxlUGF0aCk7XG5cbiAgaWYgKCFsb2dGaWxlRXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlID0gaXNEYXRlQ3VycmVudERhdGUobG9nRmlsZUxhc3RNb2RpZmllZERhdGUpO1xuXG4gIGlmICghbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSkge1xuICAgIGNvbnN0IHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpO1xuXG4gICAgcmVuYW1lRmlsZShsb2dGaWxlUGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RhdGVDdXJyZW50RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGN1cnJlbnREYXRlU3RyaW5nID0gY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGRhdGVDdXJyZW50RGF0ZSA9IChkYXRlU3RyaW5nID09PSBjdXJyZW50RGF0ZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGVDdXJyZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgaG91cnMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgbWludXRlcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgICAgIHNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRTZWNvbmRzKCksIDIpLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMyksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc30uJHttaWxsaXNlY29uZHN9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGFja01lc3NhZ2VzRnJvbVN0YWNrKHN0YWNrKSB7XG4gIGNvbnN0IHN0YWNrTWVzc2FnZXMgPSBbXSxcbiAgICAgICAgc3RhY2tMaW5lcyA9IHN0YWNrLnNwbGl0KC9cXHJcXG58XFxuLyk7XG5cbiAgbGV0IHN0YWNrTWVzc2FnZSA9IFwiXCI7XG5cbiAgc3RhY2tMaW5lcy5mb3JFYWNoKChzdGFja0xpbmUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gL15cXHMqYXQuKi8udGVzdChzdGFja0xpbmUpO1xuXG4gICAgc3RhY2tNZXNzYWdlID0gKHN0YWNrTWVzc2FnZSA9PT0gXCJcIikgP1xuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrTGluZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGFja01lc3NhZ2V9XFxuJHtzdGFja0xpbmV9YDtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBzdGFja01lc3NhZ2VzLnB1c2goc3RhY2tNZXNzYWdlKTtcblxuICAgICAgc3RhY2tNZXNzYWdlID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdGFja01lc3NhZ2VzO1xufVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLyhcXC8uKyk6XFxkKzpcXGQrL20pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aCA9IHBhdGgucmVzb2x2ZShcIi5cIiksICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggKyAxLCAgLy8vXG4gICAgICAgIGZpbGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aC5zdWJzdHIoc3RhcnQpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLzooXFxkKykvbSksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBsaW5lTnVtYmVyID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBsaW5lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYWRTdGFydFdpdGhaZXJvZXMoc3RyaW5nLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3QgcGFkU3RyaW5nID0gXCIwXCIsXG4gICAgICAgIHBhZGRlZFN0cmluZyA9IHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgbGV0IHBhZGRpbmcgPSBcIlwiO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YXJnZXRMZW5ndGg7IGluZGV4KyspIHtcbiAgICBwYWRkaW5nICs9IHBhZFN0cmluZztcbiAgfVxuXG4gIGNvbnN0IHBhZGRlZFN0cmluZyA9IGAke3BhZGRpbmd9JHtzdHJpbmd9YC5zdWJzdHIoLXRhcmdldExlbmd0aCk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEQVRBX0VWRU5ULCBFVFhfQ0hBUkFDVEVSLCBVVEY4X0VOQ09ESU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkVUWChoYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50ID0gREFUQV9FVkVOVDtcblxuICBpZiAocHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBVVEY4X0VOQ09ESU5HO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuICAgIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICAgIHByb2Nlc3Muc3RkaW4uYWRkTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgZGF0YUhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUhhbmRsZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbkVUWCBmcm9tIFwiLi9vbkVUWFwiO1xuXG5pbXBvcnQgeyB3aGlsc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5pbXBvcnQgeyBDVFJMX0MsIERBVEFfRVZFTlQsIEJBQ0tTUEFDRV9DSEFSQUNURVIsIExJTkVfRkVFRF9DSEFSQUNURVIsIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb21wdChvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCB2YWx1ZSA9IG51bGwsXG4gICAgICAgIHsgYXR0ZW1wdHMgPSAzIH0gPSBvcHRpb25zLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGF0dGVtcHRzLFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9LCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGhpZGRlbiA9IGZhbHNlLFxuICAgICAgICAgIGVuY29kaW5nID0gXCJ1dGY4XCIsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgaW5pdGlhbFZhbHVlID0gXCJcIixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uIH0gPSBvcHRpb25zO1xuXG4gIGlucHV0KGRlc2NyaXB0aW9uLCBpbml0aWFsVmFsdWUsIGVuY29kaW5nLCBoaWRkZW4sIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KHZhbHVlKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjaykge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGV2ZW50ID0gREFUQV9FVkVOVCxcbiAgICAgICAgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgIG9mZkVUWCA9IG9uRVRYKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhDVFJMX0MpO1xuXG4gICAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgaWYgKCFoaWRkZW4pIHtcbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gIH1cblxuICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuXG4gIHByb2Nlc3Muc3RkaW4ub24oZXZlbnQsIGxpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgcHJvY2Vzcy5zdGRpbi5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFsdWUgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlYWRGaWxlLCB3cml0ZUZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5sZXQgcGF0aFJlc29sdmVyID0gcGF0aC5yZXNvbHZlLFxuICAgIGJhc2VFeHRlbnNpb24gPSBERUZBVUxUX1JDX0JBU0VfRVhURU5TSU9OO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZSxcbiAgICAgIGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YgPSAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgLy8vXG5cbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KTtcbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudE5hbWUgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZCgoZW52aXJvbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZW52aXJvbm1lbnQsXG4gICAgICAgICAgICBmb3VuZCA9IChuYW1lID09PSBlbnZpcm9ubWVudE5hbWUpO1xuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgZW52aXJvbm1lbnQubmFtZTtcblxuICBPYmplY3QuYXNzaWduKHJjLCBlbnZpcm9ubWVudCk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50O1xufVxuXG5mdW5jdGlvbiByZWFkUkNGaWxlKCkge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IHJlYWRGaWxlKGFic29sdXRlUkNGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIGBcXHRgKTtcblxuICB3cml0ZUZpbGUoYWJzb2x1dGVSQ0ZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BlcnRpZXMsIC4uLmRlbGV0ZWRQcm9wZXJ0eU5hbWVzKSB7XG4gIGxldCBqc29uID0gcmVhZFJDRmlsZSgpO1xuXG4gIGlmIChhZGRlZFByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGpzb24sIGFkZGVkUHJvcGVydGllcyk7XG4gIH1cblxuICBkZWxldGVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKChkZWxldGVkUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgZGVsZXRlIGpzb25bZGVsZXRlZFByb3BlcnR5TmFtZV07XG4gIH0pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pOyAgICAgIFxufVxuXG5mdW5jdGlvbiBjaGVja1JDRmlsZUV4aXN0cygpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcmNGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGFic29sdXRlUkNGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIHJjRmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFjdW91c1JDRmlsZSgpIHtcbiAgY29uc3QganNvbiA9IHtcbiAgICBcImVudmlyb25tZW50c1wiOiBbXG4gICAgICB7fVxuICAgIF1cbiAgfTtcblxuICB3cml0ZVJDRmlsZShqc29uKTtcbn1cblxuZnVuY3Rpb24gc2V0UkNCYXNlRXh0ZW5zaW9uKHJjQmFzZUV4dGVuc2lvbikgeyBiYXNlRXh0ZW5zaW9uID0gcmNCYXNlRXh0ZW5zaW9uOyB9XG5cbmZ1bmN0aW9uIHNldFJDUGF0aFJlc29sdmVyKHJjUGF0aFJlc29sdmVyKSB7IHBhdGhSZXNvbHZlciA9IHJjUGF0aFJlc29sdmVyOyB9XG5cbk9iamVjdC5hc3NpZ24ocmMsIHtcbiAgcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZSxcbiAgY2hlY2tSQ0ZpbGVFeGlzdHMsXG4gIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUsXG4gIHNldFJDQmFzZUV4dGVuc2lvbixcbiAgc2V0UkNQYXRoUmVzb2x2ZXJcbn0pO1xuXG5mdW5jdGlvbiBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIGFyZ3YuZmluZCgoYXJndW1lbnQpID0+IHsgIC8vL1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhcmd1bWVudC5tYXRjaCgvLS1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG5cbmZ1bmN0aW9uIGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBmaWxlUGF0aCA9IGAuLy4ke2Jhc2VFeHRlbnNpb259cmNgLFxuICAgICAgICBhYnNvbHV0ZVJDRmlsZVBhdGggPSBwYXRoUmVzb2x2ZXIoZmlsZVBhdGgpO1xuXG4gIHJldHVybiBhYnNvbHV0ZVJDRmlsZVBhdGg7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLyxcIlwiKS5yZXBsYWNlKC9cXC8kLywgXCJcIik7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpbGUoZmlsZVBhdGgsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKSxcbiAgICAgICAgcGFyc2VkTGluZXMgPSBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKFwiXFxuXCIpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4ID0gL1xcJHsoLis/KX0vZykge1xuICBjb25zdCBwYXJzZWRMaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VGaWxlLFxuICBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgcGFyc2VkTGluZXMgPSBsaW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MsIHJlZ2V4KTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gXCJcIjtcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
