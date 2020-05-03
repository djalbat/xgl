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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Edge;

},{"../maths/vector":29}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = MaskingEdge;

},{"../../maths/vector":29,"../../utilities/array":81,"../../utilities/midPoint":85,"../edge":46}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Facet;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColouredFacet;

},{"../../utilities/approximate":80,"../../utilities/facet":82,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TexturedFacet;

},{"../../utilities/approximate":80,"../../utilities/array":81,"../../utilities/facet":82,"../../utilities/texture":89,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = MaskingFacet;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Normal;

function cloneExtent(extent) {
  return extent.slice();
}

},{"../maths/vector":29,"../utilities/array":81}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Vertex;

},{"../utilities/rotation":88}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = VerticalLine;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProgram = createProgram;
exports["default"] = void 0;

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

exports["default"] = Renderer;

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  var vertexShader = canvas.createVertexShader(vertexShaderSource),
      fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
      program = canvas.createProgram(vertexShader, fragmentShader);
  return program;
}

},{"./utilities/array":81}],57:[function(require,module,exports){
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

exports["default"] = RendererBuffers;

},{}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColourRendererBuffers;

},{"../../renderer/buffers":57}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TextureRendererBuffers;

},{"../../renderer/buffers":57}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColourRenderer;

},{"../renderer":56,"../renderer/buffers/colour":58,"../renderer/data/colour":62,"../utilities/array":81,"./locations/colour/attribute":65,"./locations/colour/uniform":66,"./source/colour/fragmentShader":70,"./source/colour/vertexShader":71}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = RendererData;

},{"../utilities/array":81}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColourRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TextureRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = AttributeLocations;

},{"../source/lighting":72,"../source/position":73}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColourAttributeLocations;

},{"../../locations/attribute":64,"../../source/colour/vertexShader":71}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ColourUniformLocations;

},{"../../locations/uniform":69}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TextureAttributeLocations;

},{"../../locations/attribute":64,"../../source/texture/vertexShader":75}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TextureUniformLocations;

},{"../../locations/uniform":69,"../../source/texture/fragmentShader":74}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = UniformLocations;

},{"../source/lighting":72,"../source/position":73}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
var _default = fragmentShaderSource;
exports["default"] = _default;

},{}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.vertexColourAttributeName = void 0;

var _lighting = _interopRequireDefault(require("../../source/lighting"));

var _position = _interopRequireDefault(require("../../source/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vertexColourAttributeName = "aVertexColour";
exports.vertexColourAttributeName = vertexColourAttributeName;
var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting["default"], "\n      \n        ").concat(_position["default"], "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
var _default = vertexShaderSource;
exports["default"] = _default;

},{"../../source/lighting":72,"../../source/position":73}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.vertexNormalAttributeName = exports.normalsMatrixName = void 0;
var normalsMatrixName = "uNormalsMatrix";
exports.normalsMatrixName = normalsMatrixName;
var vertexNormalAttributeName = "aVertexNormal";
exports.vertexNormalAttributeName = vertexNormalAttributeName;
var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
var _default = lightingSource;
exports["default"] = _default;

},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.vertexPositionAttributeName = exports.projectionMatrixName = exports.rotationsMatrixName = exports.positionMatrixName = exports.offsetsMatrixName = void 0;
var offsetsMatrixName = "uOffsetsMatrix";
exports.offsetsMatrixName = offsetsMatrixName;
var positionMatrixName = "uPositionMatrix";
exports.positionMatrixName = positionMatrixName;
var rotationsMatrixName = "uRotationsMatrix";
exports.rotationsMatrixName = rotationsMatrixName;
var projectionMatrixName = "uPerspectiveMatrix";
exports.projectionMatrixName = projectionMatrixName;
var vertexPositionAttributeName = "aVertexPosition";
exports.vertexPositionAttributeName = vertexPositionAttributeName;
var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
var _default = positionSource;
exports["default"] = _default;

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.samplerName = void 0;
var samplerName = "uSampler";
exports.samplerName = samplerName;
var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
var _default = fragmentShaderSource;
exports["default"] = _default;

},{}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.textureCoordinateAttributeName = void 0;

var _lighting = _interopRequireDefault(require("../../source/lighting"));

var _position = _interopRequireDefault(require("../../source/position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var textureCoordinateAttributeName = "aTextureCoordinate";
exports.textureCoordinateAttributeName = textureCoordinateAttributeName;
var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting["default"], "\n      \n        ").concat(_position["default"], "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
var _default = vertexShaderSource;
exports["default"] = _default;

},{"../../source/lighting":72,"../../source/position":73}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = TextureRenderer;

},{"../renderer":56,"../renderer/buffers/texture":59,"../renderer/data/texture":63,"./locations/texture/attribute":67,"./locations/texture/uniform":68,"./source/texture/fragmentShader":74,"./source/texture/vertexShader":75}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ImageMapTextureRenderer;

},{"../../renderer/texture":76,"../../utilities/array":81}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = ImagesTextureRenderer;

},{"../../renderer/texture":76,"../../utilities/array":81}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateHalfAngleSine = calculateHalfAngleSine;
exports.calculateHalfAngleCosine = calculateHalfAngleCosine;

function calculateHalfAngleSine(angleCosine) {
  return Math.sqrt((1 - angleCosine) / 2);
}

function calculateHalfAngleCosine(angleCosine) {
  return Math.sqrt((1 + angleCosine) / 2);
}

},{}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isApproximatelyEqualToOne = isApproximatelyEqualToOne;
exports.isApproximatelyEqualToZero = isApproximatelyEqualToZero;

var _constants = require("../constants");

function isApproximatelyEqualToOne(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 1, marginOfError);
}

function isApproximatelyEqualToZero(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 0, marginOfError);
}

function isApproximatelyEqualTo(valueA, valueB) {
  var marginOfError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.DEFAULT_MARGIN_OF_ERROR;
  var difference = valueA - valueB,
      absoluteDifference = Math.abs(difference),
      approximatelyEqual = absoluteDifference < marginOfError;
  return approximatelyEqual;
}

},{"../constants":2}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permute = permute;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.separate = exports.merge = exports.push = exports.fourth = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    fourth = _necessary.arrayUtilities.fourth,
    push = _necessary.arrayUtilities.push,
    merge = _necessary.arrayUtilities.merge,
    separate = _necessary.arrayUtilities.separate;
exports.separate = separate;
exports.merge = merge;
exports.push = push;
exports.fourth = fourth;
exports.third = third;
exports.second = second;
exports.first = first;

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

},{"necessary":95}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneEdges = cloneEdges;
exports.cloneNormal = cloneNormal;
exports.cloneVertices = cloneVertices;
exports.calculateEdges = calculateEdges;
exports.calculateNormal = calculateNormal;
exports.calculateArea = calculateArea;

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

},{"../constants":2,"../maths/vector":29,"../utilities/array":81}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateIntersection = calculateIntersection;
exports.calculateNonNullIntersections = calculateNonNullIntersections;
exports.calculateNullIntersectionIndex = calculateNullIntersectionIndex;
exports.calculateNonNullIntersectionIndex = calculateNonNullIntersectionIndex;
exports.calculateIntermediateVertexPosition = calculateIntermediateVertexPosition;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleMatrixFromScale = scaleMatrixFromScale;
exports.offsetsMatrixFromOffsets = offsetsMatrixFromOffsets;
exports.positionMatrixFromNothing = positionMatrixFromNothing;
exports.positionMatrixFromDistance = positionMatrixFromDistance;
exports.positionMatrixFromPosition = positionMatrixFromPosition;
exports.rotationsMatrixFromAngles = rotationsMatrixFromAngles;
exports.rotationsMatrixFromRotations = rotationsMatrixFromRotations;
exports.normalsMatrixFromRotationsMatrix = normalsMatrixFromRotationsMatrix;
exports.projectionMatrixFromWidthAndHeight = projectionMatrixFromWidthAndHeight;

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

},{"../constants":2,"../maths/matrix":28,"../maths/vector":29,"../utilities/array":81}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateMidPointPosition = calculateMidPointPosition;
exports.projectMidPointPositionOntoXYPlane = projectMidPointPositionOntoXYPlane;
exports.isMidPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeOffsetsFromAnglesAndDirections = relativeOffsetsFromAnglesAndDirections;

var _vector = require("../maths/vector");

var _matrix = require("../utilities/matrix");

function relativeOffsetsFromAnglesAndDirections(angles, directions) {
  var reverseOrder = true,
      reflectedAngles = (0, _vector.reflect3)(angles),
      rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(reflectedAngles, reverseOrder),
      relativeOffsets = (0, _vector.transform4)(directions, rotationsMatrix).slice(0, 3); ///

  return relativeOffsets;
}

},{"../maths/vector":29,"../utilities/matrix":84}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateImaginaryQuaternion = rotateImaginaryQuaternion;
exports.calculateInverseRotationQuaternion = calculateInverseRotationQuaternion;
exports.calculateForwardsRotationQuaternion = calculateForwardsRotationQuaternion;
exports.calculateBackwardsRotationQuaternion = calculateBackwardsRotationQuaternion;
exports.calculateArbitraryRotationQuaternion = calculateArbitraryRotationQuaternion;
exports.calculateRotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion;

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotatePosition = rotatePosition;

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

function imaginaryQuaternionFromPosition(position) {
  return [0].concat(_toConsumableArray(position));
} ///


function positionFromImaginaryQuaternion(imaginaryQuaternion) {
  return imaginaryQuaternion.slice(1);
} ///

},{"../utilities/quaternion":87}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneTextureCoordinateTuples = cloneTextureCoordinateTuples;
exports.calculateMappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples;
exports.calculateAdjustedTextureCoordinateTuples = calculateAdjustedTextureCoordinateTuples;

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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/array":81,"../utilities/quaternion":87,"../utilities/vertices":91}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeTransform = composeTransform;

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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/matrix":84}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateVertices = rotateVertices;
exports.verticesFromCoordinateTuplesAndIndexTuple = verticesFromCoordinateTuplesAndIndexTuple;

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

},{}],92:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("./react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.assign(window, {
  React: _react["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY2FudmFzLmpzIiwibGliL2NvbnN0YW50cy5qcyIsImxpYi9lbGVtZW50LmpzIiwibGliL2VsZW1lbnQvY2FtZXJhLmpzIiwibGliL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsImxpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCJsaWIvZWxlbWVudC9jYW52YXMuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCJsaWIvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCJsaWIvZWxlbWVudC9tYXNrLmpzIiwibGliL2VsZW1lbnQvcGFydC5qcyIsImxpYi9lbGVtZW50L3NjZW5lLmpzIiwibGliL2V4YW1wbGUuanMiLCJsaWIvZXhhbXBsZS9jdWJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwibGliL2V4YW1wbGUvbWFza2luZy5qcyIsImxpYi9leGFtcGxlL3B5cmFtaWQuanMiLCJsaWIvZXhhbXBsZS9zaW1wbGUuanMiLCJsaWIvZXhhbXBsZS90aWxpbmcuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvbWF0aHMvbWF0cml4LmpzIiwibGliL21hdGhzL3ZlY3Rvci5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24uanMiLCJsaWIvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCJsaWIvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy91c2VySW5wdXQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy96b29tLmpzIiwibGliL21peGluL2JsZW5kaW5nLmpzIiwibGliL21peGluL2J1ZmZlci5qcyIsImxpYi9taXhpbi9jb2xvdXIuanMiLCJsaWIvbWl4aW4vZGVwdGguanMiLCJsaWIvbWl4aW4vbG9jYXRpb24uanMiLCJsaWIvbWl4aW4vbWF0cml4LmpzIiwibGliL21peGluL3Byb2dyYW0uanMiLCJsaWIvbWl4aW4vc2hhZGVyLmpzIiwibGliL21peGluL3RleHR1cmUuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsImxpYi9wcmltaXRpdmUvZmFjZXQuanMiLCJsaWIvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwibGliL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsImxpYi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwibGliL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCJsaWIvcHJpbWl0aXZlL3ZlcnRleC5qcyIsImxpYi9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwibGliL3JlYWN0LmpzIiwibGliL3JlbmRlcmVyLmpzIiwibGliL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwibGliL3JlbmRlcmVyL2NvbG91ci5qcyIsImxpYi9yZW5kZXJlci9kYXRhLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3RleHR1cmUuanMiLCJsaWIvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsImxpYi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsImxpYi91dGlsaXRpZXMvYW5nbGUuanMiLCJsaWIvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvZmFjZXQuanMiLCJsaWIvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsImxpYi91dGlsaXRpZXMvbWF0cml4LmpzIiwibGliL3V0aWxpdGllcy9taWRQb2ludC5qcyIsImxpYi91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsImxpYi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImxpYi91dGlsaXRpZXMvcm90YXRpb24uanMiLCJsaWIvdXRpbGl0aWVzL3RleHR1cmUuanMiLCJsaWIvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsImxpYi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJsaWIveGdsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9hamF4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbG9nLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvb25FVFguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9wcm9tcHQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9yYy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCLE07QUErQm5CLG9CQUFpQztBQUFBLFFBQXJCLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQUEseUNBOUJuQixtQkE4Qm1COztBQUFBLDRDQTVCaEIsd0JBNEJnQjs7QUFBQSx3Q0ExQnBCLG1CQTBCb0I7O0FBQUEsMkNBekJqQixzQkF5QmlCOztBQUFBLHlDQXZCbkIsbUJBdUJtQjs7QUFBQSwrQ0F0QmIseUJBc0JhOztBQUFBLDJDQXBCakIsc0JBb0JpQjs7QUFBQSx3REFuQkosbUNBbUJJOztBQUFBLHdDQWpCcEIsaUJBaUJvQjs7QUFBQSw4Q0FoQmQsdUJBZ0JjOztBQUFBLGdEQWZaLHlCQWVZOztBQUFBLDBDQWJsQixvQkFha0I7O0FBQUEsZ0RBWlosMEJBWVk7O0FBQUEsa0RBWFYsNEJBV1U7O0FBQUEsd0NBVHBCLGtCQVNvQjs7QUFBQSwwQ0FSbEIsb0JBUWtCOztBQUFBLCtDQVBiLHlCQU9hOztBQUFBLGlEQU5YLDJCQU1XOztBQUFBLGdEQUpaLDRCQUlZOztBQUFBLGtEQUhWLDhCQUdVOztBQUFBLDREQUZBLHdDQUVBOztBQUMvQixRQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxRQUFELENBQXpDO0FBQUEsUUFDTSxPQUFPLEdBQUcscUJBQXFCLENBQUMsVUFBRCxDQURyQztBQUdBLFNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUVBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFFQSxTQUFLLGtCQUFMLEdBUitCLENBUUg7QUFDN0I7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUssVUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUssT0FBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixLQUF2QjtBQUErQjs7O2dDQUVoQztBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLE1BQXZCO0FBQWdDOzs7cUNBRTdCO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsV0FBdkI7QUFBcUM7OztzQ0FFdEM7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixZQUF2QjtBQUFzQzs7OzZCQUVqRCxLLEVBQU87QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBdEM7QUFBK0M7Ozs4QkFFdkQsTSxFQUFRO0FBQUUsV0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLFFBQTdCLEVBQXVDLE1BQXZDO0FBQWlEOzs7MkJBRTlELEssRUFBTyxNLEVBQVE7QUFDcEIsVUFBTSxDQUFDLEdBQUcsQ0FBVjtBQUFBLFVBQ00sQ0FBQyxHQUFHLENBRFY7QUFHQSxXQUFLLFFBQUwsQ0FBYyxLQUFkO0FBRUEsV0FBSyxTQUFMLENBQWUsTUFBZjtBQUVBLFdBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsS0FBNUIsRUFBbUMsTUFBbkM7QUFDRDs7OzRCQUVPO0FBQ04sV0FBSyxVQUFMO0FBRUEsV0FBSyxXQUFMO0FBRUEsV0FBSyxnQkFBTDtBQUVBLFdBQUssaUJBQUw7QUFDRDs7OzJCQUVNLFEsRUFBVSxhLEVBQWUsYSxFQUFlLGMsRUFBZ0IsZSxFQUFpQixnQixFQUFrQjtBQUNoRyxVQUFNLDRCQUE0QixHQUFHLFFBQVEsQ0FBQywrQkFBVCxFQUFyQztBQUFBLFVBQ00sNEJBQTRCLEdBQUcsUUFBUSxDQUFDLCtCQUFULEVBRHJDO0FBQUEsVUFFTSw2QkFBNkIsR0FBRyxRQUFRLENBQUMsZ0NBQVQsRUFGdEM7QUFBQSxVQUdNLDhCQUE4QixHQUFHLFFBQVEsQ0FBQyxpQ0FBVCxFQUh2QztBQUFBLFVBSU0sK0JBQStCLEdBQUcsUUFBUSxDQUFDLGtDQUFULEVBSnhDO0FBTUEsV0FBSyxXQUFMLENBQWlCLDRCQUFqQixFQUErQyxhQUEvQztBQUNBLFdBQUssV0FBTCxDQUFpQiw0QkFBakIsRUFBK0MsYUFBL0M7QUFDQSxXQUFLLFdBQUwsQ0FBaUIsNkJBQWpCLEVBQWdELGNBQWhEO0FBQ0EsV0FBSyxXQUFMLENBQWlCLDhCQUFqQixFQUFpRCxlQUFqRDtBQUNBLFdBQUssV0FBTCxDQUFpQiwrQkFBakIsRUFBa0QsZ0JBQWxEO0FBQ0Q7OztpQ0FFWSxLLEVBQU8sTSxFQUFRO0FBQUEsMEJBQ1ksS0FBSyxPQURqQjtBQUFBLFVBQ2xCLFNBRGtCLGlCQUNsQixTQURrQjtBQUFBLFVBQ1AsY0FETyxpQkFDUCxjQURPO0FBQUEsVUFFcEIsSUFGb0IsR0FFYixTQUZhO0FBQUEsVUFHcEIsSUFIb0IsR0FHYixjQUhhO0FBQUEsVUFJcEIsS0FKb0IsR0FJWixNQUFNLEdBQUcsS0FKRztBQUFBLFVBS3BCLE1BTG9CLEdBS1gsS0FBSyxHQUFHLENBTEcsRUFLQTs7QUFFMUIsV0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixJQUExQixFQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE2QyxNQUE3QztBQUNEOzs7Ozs7OztBQUdILFNBQVMsc0JBQVQsQ0FBZ0MsUUFBaEMsRUFBMEM7QUFDeEMsTUFBTSxVQUFVLEdBQUksT0FBTyxRQUFQLEtBQW9CLFFBQXJCLEdBQ0UsUUFBUSxDQUFDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeEMsRUFBQSxRQUZ2QixDQUR3QyxDQUdOOztBQUVsQyxTQUFPLFVBQVA7QUFDRDs7QUFFRCxTQUFTLHFCQUFULENBQStCLFVBQS9CLEVBQTJDO0FBQ3pDLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFYLENBQXNCLE9BQXRCLENBQWhCOztBQUVBLE1BQUksQ0FBQyxPQUFMLEVBQWM7QUFDWixVQUFNLElBQUksS0FBSixvQ0FBTjtBQUNEOztBQUVELFNBQU8sT0FBUDtBQUNEOzs7QUN4SUQ7Ozs7OztBQUVPLElBQU0sS0FBSyxHQUFHLElBQWQ7O0FBQ0EsSUFBTSxNQUFNLEdBQUcsQ0FBZjs7QUFDQSxJQUFNLFFBQVEsR0FBRyxVQUFqQjs7QUFDQSxJQUFNLFVBQVUsR0FBRyxZQUFuQjs7QUFDQSxJQUFNLFVBQVUsR0FBRyxZQUFuQjs7QUFDQSxJQUFNLFdBQVcsR0FBRyxhQUFwQjs7QUFDQSxJQUFNLFlBQVksR0FBRyxJQUFyQjs7QUFDQSxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQXZCOztBQUNBLElBQU0sYUFBYSxHQUFHLElBQXRCOztBQUNBLElBQU0sYUFBYSxHQUFHLElBQXRCOztBQUNBLElBQU0sY0FBYyxHQUFHLEVBQXZCOztBQUNBLElBQU0sZUFBZSxHQUFHLENBQXhCOztBQUNBLElBQU0sZ0JBQWdCLEdBQUcsQ0FBekI7O0FBQ0EsSUFBTSx1QkFBdUIsR0FBRyxTQUFoQzs7QUFDQSxJQUFNLHlCQUF5QixHQUFHLElBQUksQ0FBQyxFQUFMLEdBQVUsR0FBNUM7O0FBQ0EsSUFBTSxhQUFhLEdBQUcsS0FBSyx5QkFBM0I7Ozs7QUNqQlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozt1Q0FDQTtBQUNqQixhQUFPLEtBQUssYUFBWjtBQUNEOzs7cUNBRWdCLGEsRUFBZTtBQUM5QixXQUFLLGFBQUwsR0FBcUIsYUFBckI7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFtQztBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsUUFBQSxrQkFBb0I7QUFBQTs7QUFDOUQsVUFBTSxPQUFPLGNBQU8sS0FBUCxFQUFnQixrQkFBaEIsQ0FBYjtBQUFBLFVBQ00sYUFBYSxHQUFJLE9BQU8sT0FBTyxDQUFDLGFBQWYsS0FBaUMsVUFBbEMsR0FDRSxPQUFPLENBQUMsYUFBUixDQUFzQixVQUF0QixDQURGLEdBRUksVUFBVSxDQUFDLGFBQVgsSUFBNEIsRUFIdEQ7O0FBS0EsTUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsYUFBekI7QUFFQSxhQUFPLE9BQVA7QUFDRDs7Ozs7Ozs7O0FDcEJIOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE07Ozs7O0FBQ25CLGtCQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUI7QUFBQTs7QUFBQTs7QUFDckI7QUFFQSxVQUFLLEdBQUwsR0FBVyxHQUFYO0FBRUEsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUxxQjtBQU10Qjs7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBSyxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBSyxJQUFaO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBbUM7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLFFBQUEsa0JBQW9CO0FBQUE7O0FBQUUsYUFBTyxvQkFBUSxjQUFSLDZCQUF1QixLQUF2QixFQUE4QixVQUE5QixTQUE2QyxrQkFBN0MsRUFBUDtBQUEwRTs7OztFQWpCMUcsbUI7Ozs7O0FDSnBDOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxvQkFBb0IsR0FBRyxvQkFBN0I7QUFBQSxJQUNNLHFCQUFxQixHQUFHLG9CQUQ5QjtBQUFBLElBRU0sc0JBQXNCLEdBQUcsQ0FGL0I7O0lBSXFCLFk7Ozs7O0FBQ25CLHdCQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFDM0IsOEJBQU0sR0FBTixFQUFXLElBQVg7QUFFQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBSDJCO0FBSTVCOzs7OzJCQUVNLHdCLEVBQTBCLGUsRUFBaUIsWSxFQUFjLEssRUFBTyxNLEVBQVEsUSxFQUFVO0FBQ3ZGLFVBQU0sR0FBRyxHQUFHLEtBQUssTUFBTCxFQUFaO0FBQUEsVUFDTSxJQUFJLEdBQUcsS0FBSyxPQUFMLEVBRGI7O0FBR0EsVUFBSSxLQUFKLEVBQVcsQ0FDVDtBQUNELE9BRkQsTUFFTyxJQUFJLFlBQUosRUFBa0I7QUFDdkIsUUFBQSxHQUFHLENBQUMsYUFBSixDQUFrQix3QkFBbEIsRUFBNEMsZUFBNUMsRUFBNkQsSUFBN0Q7QUFDRCxPQUZNLE1BRUEsSUFBSSxlQUFlLEtBQUssQ0FBeEIsRUFBMkI7QUFDaEMsYUFBSyxJQUFMLENBQVUsY0FBVixDQUF5QixlQUF6QjtBQUNELE9BRk0sTUFFQTtBQUNMLFFBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0Isd0JBQWxCO0FBQ0Q7O0FBRUQsVUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQUwsRUFBZjtBQUFBLFVBQ00sT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFKLEVBRGhCO0FBQUEsVUFFTSxRQUFRLEdBQUcsS0FBSyxJQUFMLENBQVUsV0FBVixFQUZqQjtBQUFBLFVBR00sYUFBYSxHQUFHLHNDQUF5QixPQUF6QixDQUh0QjtBQUFBLFVBSU0sY0FBYyxHQUFHLHdDQUEyQixRQUEzQixDQUp2QjtBQUFBLFVBS00sZUFBZSxHQUFHLHVDQUEwQixNQUExQixDQUx4QjtBQUFBLFVBTU0sZ0JBQWdCLEdBQUcsZ0RBQW1DLEtBQW5DLEVBQTBDLE1BQTFDLENBTnpCO0FBQUEsVUFPTSxhQUFhLEdBQUcsOENBQWlDLGVBQWpDLENBUHRCO0FBU0EsTUFBQSxRQUFRLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixjQUEvQixFQUErQyxlQUEvQyxFQUFnRSxnQkFBaEUsQ0FBUjtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFBLGtDQUNtRyxVQURuRyxDQUN4QixhQUR3QjtBQUFBLFVBQ3hCLGFBRHdCLHNDQUNSLG9CQURRO0FBQUEsa0NBQ21HLFVBRG5HLENBQ2MsY0FEZDtBQUFBLFVBQ2MsY0FEZCxzQ0FDK0IscUJBRC9CO0FBQUEsa0NBQ21HLFVBRG5HLENBQ3NELGVBRHREO0FBQUEsVUFDc0QsZUFEdEQsc0NBQ3dFLHNCQUR4RTtBQUFBLFVBRTFCLE9BRjBCLEdBRWhCLEtBRmdCO0FBQUEsVUFHMUIsR0FIMEIsR0FHcEIsZ0JBQUksa0JBQUosQ0FBdUIsY0FBdkIsQ0FIb0I7QUFBQSxVQUkxQixJQUowQixHQUluQixpQkFBSywyQkFBTCxDQUFpQyxhQUFqQyxFQUFnRCxPQUFoRCxDQUptQjtBQUFBLFVBSzFCLElBTDBCLEdBS25CLGlCQUFLLG1CQUFMLENBQXlCLGVBQXpCLENBTG1CO0FBQUEsVUFNMUIsWUFOMEIsR0FNWCxtQkFBTyxjQUFQLENBQXNCLFlBQXRCLEVBQW9DLFVBQXBDLEVBQWdELEdBQWhELEVBQXFELElBQXJELEVBQTJELElBQTNELENBTlc7O0FBUWhDLGFBQU8sWUFBUDtBQUNEOzs7O0VBMUN1QyxrQjs7Ozs7QUNsQjFDOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxvQkFBb0IsR0FBRyxvQkFBN0I7QUFBQSxJQUNNLHNCQUFzQixHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRC9COztJQUlxQixZOzs7Ozs7Ozs7Ozs7OzJCQU9aLHdCLEVBQTBCLGUsRUFBaUIsWSxFQUFjLEssRUFBTyxNLEVBQVEsUSxFQUFVO0FBQ3ZGLFVBQU0sR0FBRyxHQUFHLEtBQUssTUFBTCxFQUFaO0FBQUEsVUFDTSxJQUFJLEdBQUcsS0FBSyxPQUFMLEVBRGI7O0FBR0EsVUFBSSxLQUFKLEVBQVcsQ0FDVDtBQUNELE9BRkQsTUFFTyxJQUFJLFlBQUosRUFBa0I7QUFDdkIsUUFBQSxHQUFHLENBQUMsYUFBSixDQUFrQix3QkFBbEIsRUFBNEMsZUFBNUMsRUFBNkQsSUFBN0Q7QUFDRCxPQUZNLE1BRUEsSUFBSSxlQUFlLEtBQUssQ0FBeEIsRUFBMkI7QUFDaEMsUUFBQSxHQUFHLENBQUMsYUFBSixDQUFrQix3QkFBbEIsRUFBNEMsZUFBNUMsRUFBNkQsSUFBN0Q7QUFDRCxPQUZNLE1BRUE7QUFDTCxRQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLHdCQUFsQjtBQUNEOztBQUVELFVBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFMLEVBQWY7QUFBQSxVQUNNLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBSixFQURoQjtBQUFBLFVBR00sYUFBYSxHQUFHLHNDQUF5QixPQUF6QixDQUh0QjtBQUFBLFVBSU0sY0FBYyxHQUFHLHdDQUp2QjtBQUFBLFVBS00sZUFBZSxHQUFHLHVDQUEwQixNQUExQixDQUx4QjtBQUFBLFVBTU0sZ0JBQWdCLEdBQUcsZ0RBQW1DLEtBQW5DLEVBQTBDLE1BQTFDLENBTnpCO0FBQUEsVUFPTSxhQUFhLEdBQUcsOENBQWlDLGVBQWpDLENBUHRCO0FBU0EsTUFBQSxRQUFRLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixjQUEvQixFQUErQyxlQUEvQyxFQUFnRSxnQkFBaEUsQ0FBUjtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUFBLGtDQUMyRCxVQUQzRCxDQUN4QixhQUR3QjtBQUFBLFVBQ3hCLGFBRHdCLHNDQUNSLG9CQURRO0FBQUEsa0NBQzJELFVBRDNELENBQ2MsZUFEZDtBQUFBLFVBQ2MsZUFEZCxzQ0FDZ0Msc0JBRGhDO0FBQUEsVUFFMUIsT0FGMEIsR0FFaEIsSUFGZ0I7QUFBQSxVQUcxQixHQUgwQixHQUdwQixnQkFBSSxtQkFBSixDQUF3QixlQUF4QixDQUhvQjtBQUFBLFVBSTFCLElBSjBCLEdBSW5CLGlCQUFLLDJCQUFMLENBQWlDLGFBQWpDLEVBQWdELE9BQWhELENBSm1CO0FBQUEsVUFNMUIsWUFOMEIsR0FNWCxtQkFBTyxjQUFQLENBQXNCLFlBQXRCLEVBQW9DLFVBQXBDLEVBQWdELEdBQWhELEVBQXFELElBQXJELENBTlc7O0FBUWhDLGFBQU8sWUFBUDtBQUNEOzs7O0VBMUN1QyxrQjs7Ozs7QUNsQjFDOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLGE7Ozs7O0FBQ25CLHlCQUFZLFNBQVosRUFBdUIsTUFBdkIsRUFBK0IsSUFBL0IsRUFBcUMsTUFBckMsRUFBNkM7QUFBQTs7QUFBQTs7QUFDM0M7QUFFQSxVQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUVBLFVBQUssTUFBTCxHQUFjLE1BQWQ7QUFQMkM7QUFRNUM7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUssU0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUssSUFBWjtBQUNEOzs7OEJBRVMsTSxFQUFRO0FBQ2hCLFdBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRDs7OzhCQUVTLEksRUFBTTtBQUNkLFVBQUksSUFBSixFQUFVO0FBQ1IsWUFBTSxPQUFPLEdBQUcsSUFBaEIsQ0FEUSxDQUNjOztBQUV0QixRQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0Q7QUFDRjs7O21DQUVjLFMsRUFBVztBQUN4QixVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLEVBQXRCO0FBRUEsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixVQUFDLEtBQUQ7QUFBQSxlQUFXLEtBQUssQ0FBQyxjQUFOLENBQXFCLFNBQXJCLENBQVg7QUFBQSxPQUFwQjtBQUVBLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsVUFBQyxZQUFEO0FBQUEsZUFBa0IsWUFBWSxDQUFDLGNBQWIsQ0FBNEIsU0FBNUIsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7aUNBRVksTSxFQUFRO0FBQ25CLFVBQU0sYUFBYSxHQUFHLEtBQUssZ0JBQUwsRUFBdEI7QUFFQSxNQUFBLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSyxNQUF4QixDQUhtQixDQUdhOztBQUVoQyxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVksQ0FBQyxZQUFiLENBQTBCLE1BQTFCLENBQWxCO0FBQUEsT0FBdEI7QUFFQSxhQUFPLE1BQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTSxhQUFhLEdBQUcsS0FBSyxnQkFBTCxFQUF0QjtBQUVBLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsVUFBQyxZQUFEO0FBQUEsZUFBa0IsWUFBWSxDQUFDLFdBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUVBLFdBQUssY0FBTCxDQUFvQixLQUFLLFNBQXpCO0FBRUEsV0FBSyxTQUFMLENBQWUsS0FBSyxJQUFwQjtBQUNEOzs7OEJBRVMsYyxFQUFnQixlLEVBQWlCO0FBQ3pDLFVBQU0sYUFBYSxHQUFHLEtBQUssZ0JBQUwsRUFBdEI7QUFFQSxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVksQ0FBQyxTQUFiLENBQXVCLGNBQXZCLEVBQXVDLGVBQXZDLENBQWxCO0FBQUEsT0FBdEI7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFtQztBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsUUFBQSxrQkFBb0I7QUFBQTs7QUFBQSw4QkFDMkIsVUFEM0IsQ0FDdEQsS0FEc0Q7QUFBQSxVQUN0RCxLQURzRCxrQ0FDOUMsSUFEOEM7QUFBQSxrQ0FDMkIsVUFEM0IsQ0FDeEMsU0FEd0M7QUFBQSxVQUN4QyxTQUR3QyxzQ0FDNUIsSUFENEI7QUFBQSxpQ0FDMkIsVUFEM0IsQ0FDdEIsUUFEc0I7QUFBQSxVQUN0QixRQURzQixxQ0FDWCxJQURXO0FBQUEsNkJBQzJCLFVBRDNCLENBQ0wsSUFESztBQUFBLFVBQ0wsSUFESyxpQ0FDRSxJQURGO0FBQUEsK0JBQzJCLFVBRDNCLENBQ1EsTUFEUjtBQUFBLFVBQ1EsTUFEUixtQ0FDaUIsS0FEakI7QUFBQSxVQUV4RCxTQUZ3RCxHQUU1QyxpQ0FBaUIsS0FBakIsRUFBd0IsU0FBeEIsRUFBbUMsUUFBbkMsQ0FGNEM7QUFBQSxVQUd4RCxNQUh3RCxHQUcvQyxFQUgrQztBQUFBLFVBSXhELGFBSndELEdBSXhDLG9CQUFRLGNBQVIsNkJBQXVCLEtBQXZCLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELE1BQXJELEVBQTZELElBQTdELEVBQW1FLE1BQW5FLFNBQThFLGtCQUE5RSxFQUp3Qzs7QUFNOUQsYUFBTyxhQUFQO0FBQ0Q7Ozs7RUE1RXdDLG1COzs7OztBQ04zQzs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIscUI7Ozs7O0FBQ25CLGlDQUFZLFNBQVosRUFBdUIsTUFBdkIsRUFBK0IsSUFBL0IsRUFBcUMsTUFBckMsRUFBNkMsV0FBN0MsRUFBMEQsT0FBMUQsRUFBbUUsTUFBbkUsRUFBMkU7QUFBQTs7QUFBQTs7QUFDekUsOEJBQU0sU0FBTixFQUFpQixNQUFqQixFQUF5QixJQUF6QixFQUErQixNQUEvQjtBQUVBLFVBQUssV0FBTCxHQUFtQixXQUFuQjtBQUVBLFVBQUssT0FBTCxHQUFlLE9BQWY7QUFFQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBUHlFO0FBUTFFOzs7O2lDQUVZLE0sRUFBUTtBQUFBOztBQUNuQixNQUFBLE1BQU0sMkZBQXNCLE1BQXRCLENBQU4sQ0FEbUIsQ0FDbUI7O0FBRXRDLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLFdBQVcsR0FBRyxLQUFLLE9BQXpCO0FBQUEsWUFBbUM7QUFDN0IsUUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsVUFBQyxVQUFELEVBQWdCO0FBQ3ZDLGNBQU0sZ0JBQWdCLEdBQUcsTUFBSSxDQUFDLFdBQTlCO0FBQUEsY0FBMkM7QUFDckMsVUFBQSxhQUFhLEdBQUcscUJBQWMsdUNBQWQsQ0FBc0QsZ0JBQXRELEVBQXdFLFVBQXhFLEVBQW9GLE1BQUksQ0FBQyxNQUF6RixDQUR0QjtBQUFBLGNBRU0sS0FBSyxHQUFHLGFBRmQsQ0FEdUMsQ0FHVDs7O0FBRTlCLGlCQUFPLEtBQVA7QUFDRCxTQU5RLENBRGY7QUFTQSxhQUFLLFNBQUwsQ0FBZSxNQUFmO0FBQ0Q7QUFDRjs7OzhCQUVTLGMsRUFBZ0IsZSxFQUFpQjtBQUN6QyxVQUFNLE1BQU0sR0FBRyxLQUFLLFNBQUwsRUFBZjtBQUVBLE1BQUEsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsTUFBekI7O0FBRUEsMkZBQWdCLGNBQWhCLEVBQWdDLGVBQWhDO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWSxXLEVBQWEsTyxFQUFTLE0sRUFBK0I7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLFFBQUEsa0JBQW9CO0FBQUE7O0FBQUUsYUFBTyxtQkFBYyxjQUFkLDRCQUE2QixLQUE3QixFQUFvQyxVQUFwQyxFQUFnRCxXQUFoRCxFQUE2RCxPQUE3RCxFQUFzRSxNQUF0RSxTQUFpRixrQkFBakYsRUFBUDtBQUE4Rzs7OztFQXBDN0osa0I7Ozs7O0FDTG5EOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLHFCOzs7Ozs7Ozs7Ozs7O21DQUNHLFUsRUFBWTtBQUNoQyxVQUFNLGVBQWUsR0FBRyxtQkFBYyxjQUFkLENBQTZCLHFCQUE3QixFQUFvRCxVQUFwRCxDQUF4Qjs7QUFFQSxhQUFPLGVBQVA7QUFDRDs7OztFQUxnRCxrQjs7Ozs7QUNKbkQ7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLHFCOzs7OztBQUNuQixpQ0FBWSxTQUFaLEVBQXVCLE1BQXZCLEVBQStCLElBQS9CLEVBQXFDLE1BQXJDLEVBQTZDLFdBQTdDLEVBQTBELE9BQTFELEVBQW1FLFNBQW5FLEVBQThFLGtCQUE5RSxFQUFrRztBQUFBOztBQUFBOztBQUNoRyw4QkFBTSxTQUFOLEVBQWlCLE1BQWpCLEVBQXlCLElBQXpCLEVBQStCLE1BQS9CO0FBRUEsVUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBRUEsVUFBSyxPQUFMLEdBQWUsT0FBZjtBQUVBLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUVBLFVBQUssa0JBQUwsR0FBMEIsa0JBQTFCO0FBVGdHO0FBVWpHOzs7O2lDQUVZLE0sRUFBUTtBQUFBOztBQUNuQixNQUFBLE1BQU0sMkZBQXNCLE1BQXRCLENBQU4sQ0FEbUIsQ0FDbUI7O0FBRXRDLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLFdBQVcsR0FBRyxLQUFLLE9BQXpCO0FBQUEsWUFBbUM7QUFDN0IsUUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQVosQ0FBZ0IsVUFBQyxVQUFELEVBQWEsS0FBYixFQUF1QjtBQUM5QyxjQUFNLDZCQUE2QixHQUFHLE1BQUksQ0FBQyxrQkFBTCxDQUF3QixLQUF4QixDQUF0QztBQUFBLGNBQXNFO0FBQ2hFLFVBQUEsZ0JBQWdCLEdBQUcsTUFBSSxDQUFDLFdBRDlCO0FBQUEsY0FDMkM7QUFDckMsVUFBQSxhQUFhLEdBQUcscUJBQWMsa0VBQWQsQ0FBaUYsNkJBQWpGLEVBQWdILGdCQUFoSCxFQUFrSSxVQUFsSSxFQUE4SSxNQUFJLENBQUMsU0FBbkosQ0FGdEI7QUFBQSxjQUdNLEtBQUssR0FBRyxhQUhkLENBRDhDLENBSWhCOzs7QUFFOUIsaUJBQU8sS0FBUDtBQUNELFNBUFEsQ0FEZjtBQVVBLGFBQUssU0FBTCxDQUFlLE1BQWY7QUFDRDtBQUNGOzs7OEJBRVMsYyxFQUFnQixlLEVBQWlCO0FBQ3pDLFVBQU0sTUFBTSxHQUFHLEtBQUssU0FBTCxFQUFmO0FBRUEsTUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsTUFBMUI7O0FBRUEsMkZBQWdCLGNBQWhCLEVBQWdDLGVBQWhDO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWSxXLEVBQWEsTyxFQUFTLFMsRUFBVyxrQixFQUEyQztBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsUUFBQSxrQkFBb0I7QUFBQTs7QUFBRSxhQUFPLG1CQUFjLGNBQWQsNEJBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLEVBQWdELFdBQWhELEVBQTZELE9BQTdELEVBQXNFLFNBQXRFLEVBQWlGLGtCQUFqRixTQUF3RyxrQkFBeEcsRUFBUDtBQUFxSTs7OztFQXZDM00sa0I7Ozs7O0FDTG5EOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7Ozs7O0FBQ25CLGdCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEI7QUFFQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBSGtCO0FBSW5COzs7OzRDQUV1QjtBQUN0QixVQUFNLGFBQWEsR0FBRyxLQUFLLGdCQUFMLEVBQXRCO0FBQUEsVUFDTSxNQUFNLEdBQUcsY0FBYyxDQUFDLGFBQUQsQ0FEN0I7QUFBQSxVQUVNLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBUCxDQUFXLFVBQUMsS0FBRCxFQUFXO0FBQ3BDLFlBQU0sWUFBWSxHQUFHLHlCQUFhLFNBQWIsQ0FBdUIsS0FBdkIsQ0FBckI7O0FBRUEsZUFBTyxZQUFQO0FBQ0QsT0FKZSxDQUZ0QjtBQVFBLGFBQU8sYUFBUDtBQUNEOzs7Z0NBRVcsTyxFQUFTO0FBQ25CLFVBQU0sYUFBYSxHQUFHLEtBQUsscUJBQUwsRUFBdEI7QUFBQSxVQUNNLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQVIsRUFEdEI7O0FBR0EsTUFBQSxZQUFXLENBQUMsT0FBRCxFQUFVLGFBQVYsQ0FBWDs7QUFFQSxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVcsQ0FBQyxZQUFELEVBQWUsYUFBZixDQUE3QjtBQUFBLE9BQXRCO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU0sYUFBYSxHQUFHLEtBQUssZ0JBQUwsRUFBdEI7QUFFQSxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVksQ0FBQyxZQUFiLENBQTBCLE1BQUksQ0FBQyxNQUEvQixDQUFsQjtBQUFBLE9BQXRCO0FBRUEsTUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixVQUFDLFlBQUQ7QUFBQSxlQUFrQixZQUFZLENBQUMsV0FBYixFQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQUEsK0JBQ0wsVUFESyxDQUN4QixNQUR3QjtBQUFBLFVBQ3hCLE1BRHdCLG1DQUNmLEtBRGU7QUFBQSxVQUUxQixJQUYwQixHQUVuQixvQkFBUSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLFVBQTdCLEVBQXlDLE1BQXpDLENBRm1COztBQUloQyxNQUFBLElBQUksQ0FBQyxVQUFMO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUEzQytCLG1COzs7O0FBOENsQyxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBb0Q7QUFBQSxNQUFiLE1BQWEsdUVBQUosRUFBSTtBQUNsRCxFQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRCxFQUFrQjtBQUN0QyxRQUFNLE9BQU8sR0FBRyxZQUFoQjtBQUFBLFFBQThCO0FBQ3hCLElBQUEsYUFBYSxHQUFHLE9BQU8sQ0FBQyxTQUFSLEVBRHRCO0FBQUEsUUFFTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFSLEVBRnRCO0FBSUEscUJBQUssTUFBTCxFQUFhLGFBQWI7QUFFQSxJQUFBLGNBQWMsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBQWQ7QUFDRCxHQVJEO0FBVUEsU0FBTyxNQUFQO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULENBQXFCLE9BQXJCLEVBQThCLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFSLEVBQWI7QUFFQSxFQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRCxFQUFrQjtBQUN0QyxRQUFNLGNBQWMsR0FBRyxFQUF2QjtBQUVBLElBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFDLEtBQUQ7QUFBQSxhQUFXLFlBQVksQ0FBQyxTQUFiLENBQXVCLEtBQXZCLEVBQThCLGNBQTlCLENBQVg7QUFBQSxLQUFmO0FBRUEsSUFBQSxNQUFNLEdBQUcsY0FBVCxDQUxzQyxDQUtaO0FBQzNCLEdBTkQ7QUFRQSxFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLE1BQWxCO0FBRUEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFSLEVBQXRCO0FBRUEsRUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixVQUFDLFlBQUQsRUFBa0I7QUFDdEMsUUFBTSxPQUFPLEdBQUcsWUFBaEIsQ0FEc0MsQ0FDUjs7QUFFOUIsSUFBQSxZQUFXLENBQUMsT0FBRCxFQUFVLGFBQVYsQ0FBWDtBQUNELEdBSkQ7QUFLRDs7O0FDdkZEOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7Ozs7O0FBQ25CLGdCQUFZLE1BQVosRUFBb0IsUUFBcEIsRUFBOEIsVUFBOUIsRUFBMEMsV0FBMUMsRUFBdUQsWUFBdkQsRUFBcUUsY0FBckUsRUFBcUYsZUFBckYsRUFBc0csTUFBdEcsRUFBOEc7QUFBQTs7QUFBQTs7QUFDNUc7QUFFQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsVUFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLFlBQXBCO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLGNBQXRCO0FBQ0EsVUFBSyxlQUFMLEdBQXVCLGVBQXZCO0FBRUEsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQVg0RztBQVk3Rzs7OzsyQkFFTSxNLEVBQVEsYSxFQUFlLGEsRUFBZSxjLEVBQWdCLGUsRUFBaUIsZ0IsRUFBa0I7QUFDOUYsV0FBSyxjQUFMLElBQXVCLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUEyQixNQUEzQixFQUFtQyxhQUFuQyxFQUFrRCxhQUFsRCxFQUFpRSxjQUFqRSxFQUFpRixlQUFqRixFQUFrRyxnQkFBbEcsQ0FBdkIsQ0FEOEYsQ0FDK0M7O0FBRTdJLFdBQUssZUFBTCxJQUF3QixLQUFLLGVBQUwsQ0FBcUIsTUFBckIsQ0FBNEIsTUFBNUIsRUFBb0MsYUFBcEMsRUFBbUQsYUFBbkQsRUFBa0UsY0FBbEUsRUFBa0YsZUFBbEYsRUFBbUcsZ0JBQW5HLENBQXhCLENBSDhGLENBR2lEO0FBQ2hKOzs7K0JBRVUsTSxFQUFRO0FBQUE7O0FBQ2pCLFVBQUksZUFBZSxHQUFHLElBQXRCOztBQUVBLFVBQU0sY0FBYyxHQUFHLG1CQUFlLFdBQWYsQ0FBMkIsTUFBM0IsQ0FBdkI7O0FBRUEsVUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixZQUFNLHFCQUFxQixHQUFHLG1CQUFzQixrQ0FBdEIsQ0FBeUQsS0FBSyxNQUE5RCxFQUFzRSxLQUFLLFVBQTNFLEVBQXVGLEtBQUssV0FBNUYsRUFBeUcsTUFBekcsQ0FBOUI7O0FBRUEsUUFBQSxlQUFlLEdBQUcscUJBQWxCLENBSGUsQ0FHMkI7QUFDM0M7O0FBRUQsVUFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDakIsWUFBTSx1QkFBdUIsR0FBRyxxQkFBd0IsMkJBQXhCLENBQW9ELEtBQUssUUFBekQsRUFBbUUsS0FBSyxZQUF4RSxFQUFzRixNQUF0RixDQUFoQzs7QUFFQSxRQUFBLGVBQWUsR0FBRyx1QkFBbEIsQ0FIaUIsQ0FHMkI7QUFDN0M7O0FBRUQsVUFBTSxhQUFhLEdBQUcsS0FBSyxnQkFBTCxFQUF0QjtBQUVBLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsVUFBQyxZQUFEO0FBQUEsZUFBa0IsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsTUFBSSxDQUFDLE1BQS9CLENBQWxCO0FBQUEsT0FBdEI7QUFFQSxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVksQ0FBQyxXQUFiLEVBQWxCO0FBQUEsT0FBdEI7QUFFQSxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFVBQUMsWUFBRDtBQUFBLGVBQWtCLFlBQVksQ0FBQyxTQUFiLENBQXVCLGNBQXZCLEVBQXVDLGVBQXZDLENBQWxCO0FBQUEsT0FBdEI7QUFFQSxNQUFBLGNBQWMsSUFBSSxjQUFjLENBQUMsYUFBZixDQUE2QixNQUE3QixDQUFsQixDQXpCaUIsQ0F5QnVDOztBQUV4RCxNQUFBLGVBQWUsSUFBSSxlQUFlLENBQUMsYUFBaEIsQ0FBOEIsTUFBOUIsQ0FBbkIsQ0EzQmlCLENBMkJ5Qzs7QUFFMUQsV0FBSyxjQUFMLEdBQXNCLGNBQXRCO0FBRUEsV0FBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQUEsK0JBQ3dGLFVBRHhGLENBQ3hCLE1BRHdCO0FBQUEsVUFDeEIsTUFEd0IsbUNBQ2YsSUFEZTtBQUFBLGlDQUN3RixVQUR4RixDQUNULFFBRFM7QUFBQSxVQUNULFFBRFMscUNBQ0UsSUFERjtBQUFBLGtDQUN3RixVQUR4RixDQUNRLFVBRFI7QUFBQSxVQUNRLFVBRFIsc0NBQ3FCLElBRHJCO0FBQUEsa0NBQ3dGLFVBRHhGLENBQzJCLFdBRDNCO0FBQUEsVUFDMkIsV0FEM0Isc0NBQ3lDLEtBRHpDO0FBQUEsa0NBQ3dGLFVBRHhGLENBQ2dELFlBRGhEO0FBQUEsVUFDZ0QsWUFEaEQsc0NBQytELElBRC9EO0FBQUEsK0JBQ3dGLFVBRHhGLENBQ3FFLE1BRHJFO0FBQUEsVUFDcUUsTUFEckUsbUNBQzhFLEtBRDlFO0FBQUEsVUFFMUIsY0FGMEIsR0FFVCxJQUZTO0FBQUEsVUFHMUIsZUFIMEIsR0FHUixJQUhRO0FBQUEsVUFJMUIsSUFKMEIsR0FJbkIsb0JBQVEsY0FBUixDQUF1QixJQUF2QixFQUE2QixVQUE3QixFQUF5QyxNQUF6QyxFQUFpRCxRQUFqRCxFQUEyRCxVQUEzRCxFQUF1RSxXQUF2RSxFQUFvRixZQUFwRixFQUFrRyxjQUFsRyxFQUFrSCxlQUFsSCxFQUFtSSxNQUFuSSxDQUptQjs7QUFNaEMsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUE5RCtCLG1COzs7OztBQ1BsQzs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRLE8sR0FBWSxnQyxDQUFaLE87O0lBRWEsSzs7Ozs7QUFDbkIsaUJBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQixNQUEzQixFQUFtQztBQUFBOztBQUFBOztBQUNqQztBQUVBLFVBQUssS0FBTCxHQUFhLEtBQWI7QUFFQSxVQUFLLE1BQUwsR0FBYyxNQUFkO0FBRUEsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQVBpQztBQVFsQzs7OzswQ0FFcUI7QUFDcEIsVUFBTSxXQUFXLEdBQUcsS0FBSyxNQUFMLENBQVksY0FBWixFQUFwQjtBQUFBLFVBQ00sWUFBWSxHQUFHLEtBQUssTUFBTCxDQUFZLGVBQVosRUFEckI7QUFBQSxVQUVNLEtBQUssR0FBRyxXQUZkO0FBQUEsVUFFNEI7QUFDdEIsTUFBQSxNQUFNLEdBQUcsWUFIZjtBQUFBLFVBRzhCO0FBQ3hCLE1BQUEsTUFBTSxHQUFHLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FKZjtBQUFBLFVBS00sUUFBUSxHQUFHLE1BTGpCLENBRG9CLENBTU07O0FBRTFCLFdBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsS0FBbkIsRUFBMEIsTUFBMUI7QUFFQSxVQUFNLHdCQUF3QixHQUFHLG9CQUFqQztBQUFBLFVBQTBDO0FBQ3BDLE1BQUEsZUFBZSxHQUFHLENBRHhCO0FBQUEsVUFDNEI7QUFDdEIsTUFBQSxZQUFZLEdBQUcsS0FGckIsQ0FWb0IsQ0FZUTs7QUFFNUIsV0FBSyxNQUFMLENBQVksTUFBWixDQUFtQix3QkFBbkIsRUFBNkMsZUFBN0MsRUFBOEQsWUFBOUQsRUFBNEUsS0FBNUUsRUFBbUYsTUFBbkYsRUFBMkYsUUFBM0Y7QUFDRDs7O3FDQUVnQix3QixFQUEwQixlLEVBQWlCLFksRUFBYztBQUN4RSxVQUFNLEtBQUssR0FBRyxLQUFLLE1BQUwsQ0FBWSxRQUFaLEVBQWQ7QUFBQSxVQUNNLE1BQU0sR0FBRyxLQUFLLE1BQUwsQ0FBWSxTQUFaLEVBRGY7QUFBQSxVQUVNLE1BQU0sR0FBRyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBRmY7QUFBQSxVQUdNLFFBQVEsR0FBRyxNQUhqQixDQUR3RSxDQUk5Qzs7QUFFMUIsV0FBSyxNQUFMLENBQVksTUFBWixDQUFtQix3QkFBbkIsRUFBNkMsZUFBN0MsRUFBOEQsWUFBOUQsRUFBNEUsS0FBNUUsRUFBbUYsTUFBbkYsRUFBMkYsUUFBM0Y7QUFDRDs7OzJCQUVNLGEsRUFBZSxhLEVBQWUsYyxFQUFnQixlLEVBQWlCLGdCLEVBQWtCO0FBQUE7O0FBQ3RGLFdBQUssTUFBTCxDQUFZLEtBQVo7QUFFQSxXQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLFVBQUMsSUFBRDtBQUFBLGVBQVUsSUFBSSxDQUFDLE1BQUwsQ0FBWSxNQUFJLENBQUMsTUFBakIsRUFBeUIsYUFBekIsRUFBd0MsYUFBeEMsRUFBdUQsY0FBdkQsRUFBdUUsZUFBdkUsRUFBd0YsZ0JBQXhGLENBQVY7QUFBQSxPQUFuQjtBQUNEOzs7K0JBRVUsTSxFQUFRLE0sRUFBUSxJLEVBQU07QUFBQTs7QUFDL0IsVUFBTSxTQUFTLEdBQUcsc0JBQVUsV0FBVixFQUFsQjtBQUFBLFVBQ00sZ0JBQWdCLEdBQUcsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUR6QjtBQUFBLFVBRU0sbUJBQW1CLEdBQUcsS0FBSyxtQkFBTCxDQUF5QixJQUF6QixDQUE4QixJQUE5QixDQUY1Qjs7QUFJQSxNQUFBLFNBQVMsQ0FBQyxVQUFWLENBQXFCLE1BQXJCO0FBRUEsTUFBQSxlQUFlLENBQUMsS0FBSyxLQUFOLEVBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixZQUFNO0FBQ2hELFFBQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsbUJBQWxCO0FBRUEsUUFBQSxTQUFTLENBQUMsbUJBQVYsQ0FBOEIsZ0JBQTlCOztBQUVBLFFBQUEsTUFBSSxDQUFDLG1CQUFMLEdBTGdELENBS3BCOzs7QUFFNUIsUUFBQSxJQUFJLElBQUksSUFBSSxFQUFaLENBUGdELENBT2hDO0FBQ2pCLE9BUmMsQ0FBZjtBQVNEOzs7bUNBRXFCLFUsRUFBWTtBQUFBLFVBQ3hCLE1BRHdCLEdBQ2dCLFVBRGhCLENBQ3hCLE1BRHdCO0FBQUEsVUFDaEIsSUFEZ0IsR0FDZ0IsVUFEaEIsQ0FDaEIsSUFEZ0I7QUFBQSxVQUNWLE1BRFUsR0FDZ0IsVUFEaEIsQ0FDVixNQURVO0FBQUEsVUFDRixhQURFLEdBQ2dCLFVBRGhCLENBQ0YsYUFERTtBQUFBLFVBRTFCLEtBRjBCLEdBRWxCLHNCQUFzQixDQUFDLGFBQUQsQ0FGSjtBQUFBLFVBRzFCLE1BSDBCLEdBR2pCLHVCQUF1QixDQUFDLGFBQUQsQ0FITjtBQUFBLFVBSTFCLEtBSjBCLEdBSWxCLG9CQUFRLGNBQVIsQ0FBdUIsS0FBdkIsRUFBOEIsVUFBOUIsRUFBMEMsS0FBMUMsRUFBaUQsTUFBakQsRUFBeUQsTUFBekQsQ0FKa0I7O0FBTWhDLE1BQUEsS0FBSyxDQUFDLFVBQU4sQ0FBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsSUFBakM7QUFFQSxhQUFPLEtBQVA7QUFDRDs7OztFQXRFZ0MsbUI7Ozs7QUF5RW5DLFNBQVMsS0FBVCxDQUFlLFFBQWYsRUFBeUI7QUFDdkIsRUFBQSxVQUFVLENBQUMsUUFBRCxFQUFXLENBQVgsQ0FBVjtBQUNEOztBQUVELFNBQVMsZUFBVCxDQUF5QixLQUF6QixFQUFnQyxNQUFoQyxFQUF3QyxNQUF4QyxFQUFnRCxJQUFoRCxFQUFzRDtBQUNwRCxFQUFBLE9BQU8sQ0FBQyxLQUFELEVBQVEsVUFBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsT0FBbkIsRUFBNEIsS0FBNUIsRUFBc0M7QUFDbkQsUUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCO0FBQUEsUUFDTSxRQUFRLEdBQUcsQ0FBRSxLQUFLLEdBQUcsQ0FBVixJQUFnQixXQURqQztBQUdBLElBQUEsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsTUFBaEI7QUFFQSxJQUFBLEtBQUssQ0FBQyxZQUFNO0FBQ1YsTUFBQSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQUQsQ0FBaEIsQ0FEVSxDQUNrQjs7QUFFNUIsTUFBQSxJQUFJO0FBQ0wsS0FKSSxDQUFMO0FBS0QsR0FYTSxFQVdKLElBWEksQ0FBUDtBQVlEOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsYUFBaEMsRUFBK0M7QUFDN0MsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQWQsQ0FBcUIsVUFBQyxLQUFELEVBQVEsWUFBUixFQUF5QjtBQUMxRCxRQUFJLFlBQVksWUFBWSxnQkFBNUIsRUFBa0M7QUFDaEMsVUFBTSxJQUFJLEdBQUcsWUFBYixDQURnQyxDQUNKOztBQUU1QixNQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBWDtBQUNEOztBQUNELFdBQU8sS0FBUDtBQUNELEdBUGEsRUFPWCxFQVBXLENBQWQ7QUFTQSxTQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFTLHVCQUFULENBQWlDLGFBQWpDLEVBQWdEO0FBQzlDLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFkLENBQXFCLFVBQUMsTUFBRCxFQUFTLFlBQVQsRUFBMEI7QUFDNUQsUUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixVQUFJLFlBQVksWUFBWSxrQkFBNUIsRUFBb0M7QUFDbEMsUUFBQSxNQUFNLEdBQUcsWUFBVCxDQURrQyxDQUNWO0FBQ3pCO0FBQ0Y7O0FBRUQsV0FBTyxNQUFQO0FBQ0QsR0FSYyxFQVFaLElBUlksQ0FBZjtBQVVBLFNBQU8sTUFBUDtBQUNEOzs7QUNsSUQ7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUCxDQUFnQixNQUFoQixDQUF1QixTQUF2QixDQUFpQyxDQUFqQyxDQUFoQixDLENBQXNEOztBQUV0RCxRQUFRLE9BQVI7QUFDRSxPQUFLLFFBQUw7QUFDRTtBQUNBOztBQUVGLE9BQUssTUFBTDtBQUNFO0FBQ0E7O0FBRUYsT0FBSyxTQUFMO0FBQ0U7QUFDQTs7QUFFRixPQUFLLFNBQUw7QUFDRTtBQUNBOztBQUVGLE9BQUssUUFBTDtBQUNFO0FBQ0E7QUFuQko7OztBQ1ZBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7QUFGK0Q7QUFJL0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFKLEVBQWY7O0FBRUEsSUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFjO0FBQUEsc0JBRWxCLG9CQUFDLFlBQUQ7QUFBTyxJQUFBLE1BQU0sRUFBRTtBQUFmLGtCQUNFLG9CQUFDLFdBQUQscUJBQ0Usb0JBQUMsZ0JBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUjtBQUFkLElBREYsQ0FERixlQUlFLG9CQUFDLG1CQUFELE9BSkYsQ0FGa0I7QUFBQSxDQUFwQjs7ZUFXZSxXOzs7O0FDbkJmOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUVyRCxJQUFNLFdBQVcsR0FBRyxDQUVaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlksRUFHWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhZLEVBSVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FKWSxFQUtaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTFksQ0FBcEI7QUFBQSxJQVFNLE9BQU8sR0FBRyxDQUVSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhRLENBUmhCO0FBQUEsSUFjTSxhQUFhLEdBQUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FkdEI7O0lBZ0JxQixjOzs7Ozs7Ozs7Ozs7O21DQUNHLFUsRUFBWTtBQUFBLCtCQUNFLFVBREYsQ0FDekIsTUFEeUI7QUFBQSxVQUN6QixNQUR5QixtQ0FDaEIsYUFEZ0I7QUFBQSxVQUU3QixjQUY2QixHQUVaLDZCQUFzQixjQUF0QixDQUFxQyxjQUFyQyxFQUFxRCxVQUFyRCxFQUFpRSxXQUFqRSxFQUE4RSxPQUE5RSxFQUF1RixNQUF2RixDQUZZOztBQUlqQyxhQUFPLGNBQVA7QUFDQTs7OztFQU55Qyw0Qjs7Ozs7QUNwQjVDOzs7Ozs7O0FBRUE7Ozs7QUFFQSxJQUFNLGFBQWEsR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF0Qjs7QUFFQSxJQUFNLElBQUksR0FBRyxTQUFQLElBQU8sQ0FBQyxVQUFELEVBQWdCO0FBQUEsMkJBQ1EsVUFEUixDQUNuQixNQURtQjtBQUFBLE1BQ25CLE1BRG1CLG1DQUNWLGFBRFU7QUFHM0IsU0FBUSxjQUVOLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUUsTUFBZDtBQUFzQixJQUFBLFNBQVMsRUFBRSxDQUFJLENBQUosRUFBUyxDQUFULEVBQVksQ0FBWjtBQUFqQyxJQUZNLGVBR04sb0JBQUMsZ0JBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBRSxNQUFkO0FBQXNCLElBQUEsU0FBUyxFQUFFLENBQUUsQ0FBQyxFQUFILEVBQVMsQ0FBVCxFQUFZLENBQVo7QUFBakMsSUFITSxlQUlOLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUUsTUFBZDtBQUFzQixJQUFBLFNBQVMsRUFBRSxDQUFJLENBQUosRUFBTyxDQUFDLEVBQVIsRUFBWSxDQUFaO0FBQWpDLElBSk0sZUFNTixvQkFBQyxnQkFBRDtBQUFNLElBQUEsTUFBTSxFQUFFLE1BQWQ7QUFBc0IsSUFBQSxTQUFTLEVBQUUsQ0FBRSxHQUFGLEVBQVMsQ0FBVCxFQUFZLENBQVo7QUFBakMsSUFOTSxlQU9OLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxNQUFNLEVBQUUsTUFBZDtBQUFzQixJQUFBLFNBQVMsRUFBRSxDQUFFLENBQUMsRUFBSCxFQUFTLENBQVQsRUFBWSxDQUFaO0FBQWpDLElBUE0sZUFRTixvQkFBQyxnQkFBRDtBQUFNLElBQUEsTUFBTSxFQUFFLE1BQWQ7QUFBc0IsSUFBQSxTQUFTLEVBQUUsQ0FBSSxDQUFKLEVBQU8sQ0FBQyxFQUFSLEVBQVksQ0FBWjtBQUFqQyxJQVJNLENBQVI7QUFXRCxDQWREOztlQWdCZSxJOzs7O0FDdEJmOzs7Ozs7O0FBRUE7Ozs7QUFFQSxJQUFNLElBQUksR0FBRyxTQUFQLElBQU8sQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDbkIsTUFEbUIsR0FDUixVQURRLENBQ25CLE1BRG1CO0FBRzNCLHNCQUVFLG9CQUFDLDBCQUFEO0FBQWdCLElBQUEsTUFBTSxFQUFFLE1BQXhCO0FBQWdDLElBQUEsUUFBUSxFQUFFLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmO0FBQTFDLElBRkY7QUFLRCxDQVJEOztlQVVlLEk7Ozs7QUNkZjs7Ozs7OztBQUVBOzs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQUMsVUFBRDtBQUFBLFNBQWdCLGNBRTlCLG9CQUFDLGdCQUFELE9BRjhCLGVBRzlCLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxTQUFTLEVBQUUsQ0FBRSxDQUFGLEVBQU0sRUFBTixFQUFVLENBQVY7QUFBakIsSUFIOEIsZUFJOUIsb0JBQUMsZ0JBQUQ7QUFBTSxJQUFBLFNBQVMsRUFBRSxDQUFFLENBQUYsRUFBSyxHQUFMLEVBQVUsQ0FBVjtBQUFqQixJQUo4QixlQUs5QixvQkFBQyxnQkFBRDtBQUFNLElBQUEsU0FBUyxFQUFFLENBQUUsQ0FBRixFQUFLLEdBQUwsRUFBVSxDQUFWO0FBQWpCLElBTDhCLENBQWhCO0FBQUEsQ0FBaEI7O2VBU2UsTzs7OztBQ2JmOzs7Ozs7O0FBRUE7Ozs7QUFFQSxJQUFNLElBQUksR0FBRyxTQUFQLElBQU8sQ0FBQyxVQUFEO0FBQUEsc0JBRVgsb0JBQUMsNEJBQUQ7QUFBa0IsSUFBQSxLQUFLLEVBQUUsQ0FBRSxDQUFGLEVBQUssSUFBRSxJQUFJLENBQUMsSUFBTCxDQUFVLENBQVYsQ0FBUCxFQUFxQixDQUFyQixDQUF6QjtBQUFtRCxJQUFBLFFBQVEsRUFBRSxDQUFFLENBQUMsR0FBSCxFQUFRLENBQVIsRUFBVyxHQUFYLENBQTdEO0FBQStFLElBQUEsU0FBUyxFQUFFLENBQUUsQ0FBQyxFQUFILEVBQU8sQ0FBUCxFQUFVLENBQVY7QUFBMUYsSUFGVztBQUFBLENBQWI7O2VBTWUsSTs7OztBQ1ZmOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUVyRCxJQUFNLFdBQVcsR0FBRyxDQUVaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlksRUFHWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhZLEVBSVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FKWSxFQUtaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTFksQ0FBcEI7QUFBQSxJQVFNLE9BQU8sR0FBRyxDQUVSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhRLENBUmhCO0FBQUEsSUFjTSxnQkFBZ0IsR0FBRyxhQWR6QjtBQUFBLElBZU0seUJBQXlCLEdBQUcsQ0FFMUIsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLENBQUYsRUFBWSxDQUFFLENBQUYsRUFBSyxDQUFMLENBQVosRUFBc0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUF0QixDQUYwQixFQUcxQixDQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBRixFQUFZLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBWixFQUFzQixDQUFFLENBQUYsRUFBSyxDQUFMLENBQXRCLENBSDBCLENBZmxDOztJQXNCcUIsa0I7Ozs7Ozs7Ozs7Ozs7bUNBQ0csVSxFQUFZO0FBQUEsa0NBQ3lELFVBRHpELENBQ3hCLFNBRHdCO0FBQUEsVUFDeEIsU0FEd0Isc0NBQ1osZ0JBRFk7QUFBQSxrQ0FDeUQsVUFEekQsQ0FDTSxrQkFETjtBQUFBLFVBQ00sa0JBRE4sc0NBQzJCLHlCQUQzQjtBQUFBLFVBRTFCLGtCQUYwQixHQUVMLDZCQUFzQixjQUF0QixDQUFxQyxrQkFBckMsRUFBeUQsVUFBekQsRUFBcUUsV0FBckUsRUFBa0YsT0FBbEYsRUFBMkYsU0FBM0YsRUFBc0csa0JBQXRHLENBRks7O0FBSWhDLGFBQU8sa0JBQVA7QUFDRDs7OztFQU42Qyw0Qjs7Ozs7QUMxQmhEOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUVyRCxJQUFNLFdBQVcsR0FBRyxDQUVaLENBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBRlksRUFHWixDQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUhZLEVBSVosQ0FBRSxHQUFGLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FKWSxDQUFwQjtBQUFBLElBT00sT0FBTyxHQUFHLENBRVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGUSxDQVBoQjtBQUFBLElBWU0sZ0JBQWdCLEdBQUcsYUFaekI7QUFBQSxJQWFNLHlCQUF5QixHQUFHLENBRTFCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFGLEVBQVksQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFaLEVBQXNCLENBQUUsR0FBRixFQUFPLENBQVAsQ0FBdEIsQ0FGMEIsQ0FibEM7O0lBbUJxQixnQjs7Ozs7Ozs7Ozs7OzttQ0FDRyxVLEVBQVk7QUFBQSxrQ0FDeUQsVUFEekQsQ0FDeEIsU0FEd0I7QUFBQSxVQUN4QixTQUR3QixzQ0FDWixnQkFEWTtBQUFBLGtDQUN5RCxVQUR6RCxDQUNNLGtCQUROO0FBQUEsVUFDTSxrQkFETixzQ0FDMkIseUJBRDNCO0FBQUEsVUFFMUIsZ0JBRjBCLEdBRVAsNkJBQXNCLGNBQXRCLENBQXFDLGdCQUFyQyxFQUF1RCxVQUF2RCxFQUFtRSxXQUFuRSxFQUFnRixPQUFoRixFQUF5RixTQUF6RixFQUFvRyxrQkFBcEcsQ0FGTzs7QUFJaEMsYUFBTyxnQkFBUDtBQUNEOzs7O0VBTjJDLDRCOzs7OztBQ3ZCOUM7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUZxRTtBQUlyRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUosRUFBZjs7QUFFQSxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFpQixHQUFNO0FBQzNCLE1BQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLFVBQUQ7QUFBQSx3QkFFVixvQkFBQyxnQkFBRDtBQUFNLE1BQUEsS0FBSyxFQUFFLENBQUUsSUFBRSxDQUFKLEVBQU8sSUFBRSxDQUFULEVBQVksSUFBRSxDQUFkO0FBQWIsTUFGVTtBQUFBLEdBQWxCO0FBQUEsTUFLTSxhQUFhLGdCQUVYLG9CQUFDLFdBQUQscUJBQ0Usb0JBQUMsU0FBRCxPQURGLENBUFI7QUFBQSxNQVlNLFVBQVUsR0FBRyxTQUFiLFVBQWEsQ0FBQyxVQUFEO0FBQUEsd0JBRVgsb0JBQUMsZ0JBQUQ7QUFBTSxNQUFBLEtBQUssRUFBRSxDQUFFLElBQUUsQ0FBSixFQUFPLElBQUUsQ0FBVCxFQUFZLElBQUUsQ0FBZCxDQUFiO0FBQWdDLE1BQUEsSUFBSSxFQUFFO0FBQXRDLE1BRlc7QUFBQSxHQVpuQjtBQUFBLE1BaUJNLGNBQWMsZ0JBRVosb0JBQUMsV0FBRCxxQkFDRSxvQkFBQyxVQUFELE9BREYsQ0FuQlI7QUFBQSxNQXdCTSxTQUFTLEdBQUcsU0FBWixTQUFZLENBQUMsVUFBRDtBQUFBLHdCQUVWLG9CQUFDLGdCQUFEO0FBQU0sTUFBQSxJQUFJLEVBQUU7QUFBWixNQUZVO0FBQUEsR0F4QmxCOztBQThCQSxzQkFFRSxvQkFBQyxZQUFEO0FBQU8sSUFBQSxNQUFNLEVBQUU7QUFBZixrQkFDRSxvQkFBQyxXQUFELHFCQUNFLG9CQUFDLFNBQUQsT0FERixDQURGLGVBSUUsb0JBQUMsbUJBQUQsT0FKRixDQUZGO0FBVUQsQ0F6Q0Q7O2VBMkNlLGM7Ozs7QUNuRGY7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQUgrRDtBQUsvRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUosRUFBZjs7QUFFQSxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFpQixHQUFNO0FBQzNCLEVBQUEsZUFBZSxDQUFDLFVBQUMsUUFBRCxFQUFjO0FBQUEsUUFDcEIsWUFEb0IsR0FDSCx5QkFERyxDQUNwQixZQURvQjtBQUc1Qix3QkFFRSxvQkFBQyxZQUFEO0FBQU8sTUFBQSxNQUFNLEVBQUU7QUFBZixvQkFDRSxvQkFBQyxXQUFEO0FBQU0sTUFBQSxRQUFRLEVBQUUsUUFBaEI7QUFBMEIsTUFBQSxZQUFZLEVBQUU7QUFBeEMsb0JBQ0Usb0JBQUMsbUJBQUQsT0FERixDQURGLGVBSUUsb0JBQUMsbUJBQUQsT0FKRixDQUZGO0FBVUQsR0FiYyxDQUFmO0FBY0QsQ0FmRDs7ZUFpQmUsYzs7O0FBRWYsU0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DO0FBQzNCLE1BQUUsV0FBRixHQUFrQix5QkFBbEIsQ0FBRSxXQUFGO0FBQUEsTUFDQSxRQURBLEdBQ1csSUFBSSxLQUFKLEVBRFg7QUFBQSxNQUVBLEdBRkEsR0FFTSxXQUZOLENBRDJCLENBR1A7O0FBRTFCLEVBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxRQUFkLEVBQXdCO0FBQ3RCLElBQUEsR0FBRyxFQUFILEdBRHNCO0FBRXRCLElBQUEsTUFBTSxFQUFOO0FBRnNCLEdBQXhCOztBQUtBLFdBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUNyQixJQUFBLFFBQVEsQ0FBQyxRQUFELENBQVI7QUFDRDtBQUNGOzs7QUN6Q0Q7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUYrRDtBQUkvRCxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUosRUFBZjs7QUFFQSxJQUFNLGFBQWEsR0FBRyxTQUFoQixhQUFnQjtBQUFBLHNCQUVwQixvQkFBQyxZQUFEO0FBQU8sSUFBQSxNQUFNLEVBQUU7QUFBZixrQkFDRSxvQkFBQyxXQUFELHFCQUNFLG9CQUFDLDBCQUFEO0FBQWdCLElBQUEsTUFBTSxFQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSO0FBQXhCLElBREYsQ0FERixlQUlFLG9CQUFDLG1CQUFELE9BSkYsQ0FGb0I7QUFBQSxDQUF0Qjs7ZUFXZSxhOzs7O0FDbkJmOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFKcUU7SUFNN0QsTyxHQUFZLGdDLENBQVosTztBQUVSLElBQU0sTUFBTSxHQUFHLElBQUksYUFBSixFQUFmO0FBQUEsSUFDTSxJQUFJLGdCQUVGLG9CQUFDLFdBQUQscUJBQ0Usb0JBQUMsMEJBQUQ7QUFBZ0IsRUFBQSxLQUFLLEVBQUUsQ0FBRSxJQUFGLEVBQVEsSUFBUixFQUFjLENBQWQsQ0FBdkI7QUFBMEMsRUFBQSxRQUFRLEVBQUUsQ0FBRSxLQUFGLEVBQVMsS0FBVCxFQUFnQixDQUFoQjtBQUFwRCxFQURGLENBSFI7O0FBU0EsSUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsR0FBTTtBQUFBLE1BQ2xCLFVBRGtCLEdBQ2dCLHlCQURoQixDQUNsQixVQURrQjtBQUFBLE1BQ04saUJBRE0sR0FDZ0IseUJBRGhCLENBQ04saUJBRE07QUFHMUIsRUFBQSxhQUFhLENBQUMsVUFBRCxFQUFhLGlCQUFiLEVBQWdDLFVBQUMsTUFBRCxFQUFZO0FBQ3ZELHdCQUVFLG9CQUFDLFlBQUQ7QUFBTyxNQUFBLE1BQU0sRUFBRTtBQUFmLG9CQUNFLG9CQUFDLFdBQUQ7QUFBTSxNQUFBLE1BQU0sRUFBRSxNQUFkO0FBQXNCLE1BQUEsVUFBVSxFQUFFLFVBQWxDO0FBQThDLE1BQUEsV0FBVztBQUF6RCxvQkFDRSxvQkFBQyw4QkFBRDtBQUFvQixNQUFBLFFBQVEsRUFBRSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUE5QjtBQUEyQyxNQUFBLFNBQVMsRUFBQyxpQkFBckQ7QUFBdUUsTUFBQSxJQUFJLEVBQUU7QUFBN0UsTUFERixlQUVFLG9CQUFDLDhCQUFEO0FBQW9CLE1BQUEsUUFBUSxFQUFFLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmLENBQTlCO0FBQW9ELE1BQUEsU0FBUyxFQUFDLFlBQTlEO0FBQTJFLE1BQUEsSUFBSSxFQUFFO0FBQWpGLE1BRkYsQ0FERixlQUtFLG9CQUFDLG1CQUFELE9BTEYsQ0FGRjtBQVdELEdBWlksQ0FBYjtBQWFELENBaEJEOztlQWtCZSxhOzs7QUFFZixTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUMsaUJBQW5DLEVBQXNELFFBQXRELEVBQWdFO0FBQzlELE1BQU0sTUFBTSxHQUFHLEVBQWY7QUFBQSxNQUNNLE9BQU8sR0FBRztBQUNSLElBQUEsTUFBTSxFQUFOO0FBRFEsR0FEaEI7QUFLQSxFQUFBLE9BQU8sQ0FBQyxVQUFELEVBQWEsVUFBQyxTQUFELEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixPQUF4QixFQUFvQztBQUN0RCxRQUFNLEtBQUssR0FBRyxJQUFJLEtBQUosRUFBZDtBQUFBLFFBQ00sR0FBRyxhQUFNLGlCQUFOLGNBQTJCLFNBQTNCLENBRFQ7QUFHQSxJQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsS0FBZCxFQUFxQjtBQUNuQixNQUFBLEdBQUcsRUFBSCxHQURtQjtBQUVuQixNQUFBLE1BQU0sRUFBTjtBQUZtQixLQUFyQjs7QUFLQSxhQUFTLE1BQVQsR0FBa0I7QUFDaEIsTUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVo7QUFFQSxNQUFBLElBQUk7QUFDTDtBQUNGLEdBZE0sRUFjSixJQWRJLEVBY0UsT0FkRixDQUFQOztBQWdCQSxXQUFTLElBQVQsR0FBZ0I7QUFBQSxRQUNOLE1BRE0sR0FDSyxPQURMLENBQ04sTUFETTtBQUdkLElBQUEsUUFBUSxDQUFDLE1BQUQsQ0FBUjtBQUNEO0FBQ0Y7OztBQ25FRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7O0FDYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTLFNBQVQsR0FBcUI7QUFDMUIsU0FBUSxDQUVOLENBRk0sRUFFSCxDQUZHLEVBR04sQ0FITSxFQUdILENBSEcsQ0FBUjtBQU1EOztBQUVNLFNBQVMsU0FBVCxHQUFxQjtBQUMxQixTQUFRLENBRU4sQ0FGTSxFQUVILENBRkcsRUFFQSxDQUZBLEVBR04sQ0FITSxFQUdILENBSEcsRUFHQSxDQUhBLEVBSU4sQ0FKTSxFQUlILENBSkcsRUFJQSxDQUpBLENBQVI7QUFPRDs7QUFFTSxTQUFTLFNBQVQsR0FBcUI7QUFDMUIsU0FBUSxDQUVOLENBRk0sRUFFSCxDQUZHLEVBRUEsQ0FGQSxFQUVHLENBRkgsRUFHTixDQUhNLEVBR0gsQ0FIRyxFQUdBLENBSEEsRUFHRyxDQUhILEVBSU4sQ0FKTSxFQUlILENBSkcsRUFJQSxDQUpBLEVBSUcsQ0FKSCxFQUtOLENBTE0sRUFLSCxDQUxHLEVBS0EsQ0FMQSxFQUtHLENBTEgsQ0FBUjtBQVFEOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFsQjtBQUFBLE1BQ00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBRGxCO0FBQUEsTUFFTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUdNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUhsQjtBQUFBLE1BS00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBTGxCO0FBQUEsTUFNTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FObEI7QUFBQSxNQU9NLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQVBsQjtBQUFBLE1BUU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBUmxCO0FBVUEsU0FBUSxDQUVOLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBRlQsRUFHTixFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUhULEVBS04sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFMVCxFQU1OLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBTlQsQ0FBUjtBQVNEOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFsQjtBQUFBLE1BQ00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBRGxCO0FBQUEsTUFFTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FGbEI7QUFBQSxNQUdNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUhsQjtBQUFBLE1BSU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBSmxCO0FBQUEsTUFLTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FMbEI7QUFBQSxNQU1NLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQU5sQjtBQUFBLE1BT00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBUGxCO0FBQUEsTUFRTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FSbEI7QUFBQSxNQVVNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQVZsQjtBQUFBLE1BV00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBWGxCO0FBQUEsTUFZTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FabEI7QUFBQSxNQWFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQWJsQjtBQUFBLE1BY00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBZGxCO0FBQUEsTUFlTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FmbEI7QUFBQSxNQWdCTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FoQmxCO0FBQUEsTUFpQk0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBakJsQjtBQUFBLE1Ba0JNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQWxCbEI7QUFvQkEsU0FBUSxDQUVOLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBQWYsR0FBb0IsRUFBRSxHQUFHLEVBRm5CLEVBR04sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFBZixHQUFvQixFQUFFLEdBQUcsRUFIbkIsRUFJTixFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQUpuQixFQU1OLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBQWYsR0FBb0IsRUFBRSxHQUFHLEVBTm5CLEVBT04sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFBZixHQUFvQixFQUFFLEdBQUcsRUFQbkIsRUFRTixFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQVJuQixFQVVOLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBQWYsR0FBb0IsRUFBRSxHQUFHLEVBVm5CLEVBV04sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFBZixHQUFvQixFQUFFLEdBQUcsRUFYbkIsRUFZTixFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQVpuQixDQUFSO0FBZUQ7O0FBRU0sU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLE1BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBQW5CO0FBQUEsTUFDTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0FEbkI7QUFBQSxNQUVPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQUZuQjtBQUFBLE1BR08sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBSG5CO0FBQUEsTUFJTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0FKbkI7QUFBQSxNQUtPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQUxuQjtBQUFBLE1BTU8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBTm5CO0FBQUEsTUFPTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0FQbkI7QUFBQSxNQVFPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQVJuQjtBQUFBLE1BU08sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBVG5CO0FBQUEsTUFVTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUQsQ0FWbkI7QUFBQSxNQVdNLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRCxDQVhuQjtBQUFBLE1BWU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFELENBWm5CO0FBQUEsTUFhTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUQsQ0FibkI7QUFBQSxNQWNNLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRCxDQWRuQjtBQUFBLE1BZU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFELENBZm5CO0FBQUEsTUFpQk8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBakJuQjtBQUFBLE1Ba0JPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQWxCbkI7QUFBQSxNQW1CTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0FuQm5CO0FBQUEsTUFvQk8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBcEJuQjtBQUFBLE1BcUJPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQXJCbkI7QUFBQSxNQXNCTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0F0Qm5CO0FBQUEsTUF1Qk8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBdkJuQjtBQUFBLE1Bd0JPLEVBQUUsR0FBRyxPQUFPLENBQUUsQ0FBRixDQXhCbkI7QUFBQSxNQXlCTyxFQUFFLEdBQUcsT0FBTyxDQUFFLENBQUYsQ0F6Qm5CO0FBQUEsTUEwQk8sRUFBRSxHQUFHLE9BQU8sQ0FBRSxDQUFGLENBMUJuQjtBQUFBLE1BMkJNLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRCxDQTNCbkI7QUFBQSxNQTRCTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUQsQ0E1Qm5CO0FBQUEsTUE2Qk0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFELENBN0JuQjtBQUFBLE1BOEJNLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRCxDQTlCbkI7QUFBQSxNQStCTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUQsQ0EvQm5CO0FBQUEsTUFnQ00sR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFELENBaENuQjtBQWtDQSxTQUFRLENBRU4sRUFBRSxHQUFJLEVBQU4sR0FBWSxFQUFFLEdBQUksRUFBbEIsR0FBd0IsRUFBRSxHQUFJLEVBQTlCLEdBQW1DLEdBQUcsR0FBSSxFQUZwQyxFQUdOLEVBQUUsR0FBSSxFQUFOLEdBQVksRUFBRSxHQUFJLEVBQWxCLEdBQXdCLEVBQUUsR0FBSSxFQUE5QixHQUFtQyxHQUFHLEdBQUksRUFIcEMsRUFJTixFQUFFLEdBQUksRUFBTixHQUFZLEVBQUUsR0FBSSxFQUFsQixHQUF1QixHQUFHLEdBQUksRUFBOUIsR0FBbUMsR0FBRyxHQUFJLEVBSnBDLEVBS04sRUFBRSxHQUFJLEVBQU4sR0FBWSxFQUFFLEdBQUksRUFBbEIsR0FBdUIsR0FBRyxHQUFJLEVBQTlCLEdBQW1DLEdBQUcsR0FBSSxFQUxwQyxFQU9OLEVBQUUsR0FBSSxFQUFOLEdBQVksRUFBRSxHQUFJLEVBQWxCLEdBQXdCLEVBQUUsR0FBSSxFQUE5QixHQUFtQyxHQUFHLEdBQUksRUFQcEMsRUFRTixFQUFFLEdBQUksRUFBTixHQUFZLEVBQUUsR0FBSSxFQUFsQixHQUF3QixFQUFFLEdBQUksRUFBOUIsR0FBbUMsR0FBRyxHQUFJLEVBUnBDLEVBU04sRUFBRSxHQUFJLEVBQU4sR0FBWSxFQUFFLEdBQUksRUFBbEIsR0FBdUIsR0FBRyxHQUFJLEVBQTlCLEdBQW1DLEdBQUcsR0FBSSxFQVRwQyxFQVVOLEVBQUUsR0FBSSxFQUFOLEdBQVksRUFBRSxHQUFJLEVBQWxCLEdBQXVCLEdBQUcsR0FBSSxFQUE5QixHQUFtQyxHQUFHLEdBQUksRUFWcEMsRUFZTixFQUFFLEdBQUksRUFBTixHQUFZLEVBQUUsR0FBSSxFQUFsQixHQUF3QixFQUFFLEdBQUcsR0FBN0IsR0FBbUMsR0FBRyxHQUFHLEdBWm5DLEVBYU4sRUFBRSxHQUFJLEVBQU4sR0FBWSxFQUFFLEdBQUksRUFBbEIsR0FBd0IsRUFBRSxHQUFHLEdBQTdCLEdBQW1DLEdBQUcsR0FBRyxHQWJuQyxFQWNOLEVBQUUsR0FBSSxFQUFOLEdBQVksRUFBRSxHQUFJLEVBQWxCLEdBQXVCLEdBQUcsR0FBRyxHQUE3QixHQUFtQyxHQUFHLEdBQUcsR0FkbkMsRUFlTixFQUFFLEdBQUksRUFBTixHQUFZLEVBQUUsR0FBSSxFQUFsQixHQUF1QixHQUFHLEdBQUcsR0FBN0IsR0FBbUMsR0FBRyxHQUFHLEdBZm5DLEVBaUJOLEVBQUUsR0FBRyxHQUFMLEdBQVksRUFBRSxHQUFHLEdBQWpCLEdBQXdCLEVBQUUsR0FBRyxHQUE3QixHQUFtQyxHQUFHLEdBQUcsR0FqQm5DLEVBa0JOLEVBQUUsR0FBRyxHQUFMLEdBQVksRUFBRSxHQUFHLEdBQWpCLEdBQXdCLEVBQUUsR0FBRyxHQUE3QixHQUFtQyxHQUFHLEdBQUcsR0FsQm5DLEVBbUJOLEVBQUUsR0FBRyxHQUFMLEdBQVksRUFBRSxHQUFHLEdBQWpCLEdBQXVCLEdBQUcsR0FBRyxHQUE3QixHQUFtQyxHQUFHLEdBQUcsR0FuQm5DLEVBb0JOLEVBQUUsR0FBRyxHQUFMLEdBQVksRUFBRSxHQUFHLEdBQWpCLEdBQXVCLEdBQUcsR0FBRyxHQUE3QixHQUFtQyxHQUFHLEdBQUcsR0FwQm5DLENBQVI7QUF1QkQ7O0FBRU0sU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzlCLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWpCO0FBQUEsTUFDTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEakI7QUFBQSxNQUVNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BR00sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFELENBSGpCO0FBQUEsTUFLTSxXQUFXLEdBQUcsRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFMbkM7O0FBT0EsTUFBSSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsV0FBUSxDQUVOLENBQUMsRUFBRCxHQUFNLFdBRkEsRUFFYSxDQUFDLEVBQUQsR0FBTSxXQUZuQixFQUdOLENBQUMsRUFBRCxHQUFNLFdBSEEsRUFHYSxDQUFDLEVBQUQsR0FBTSxXQUhuQixDQUFSO0FBTUQ7QUFDRjs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDOUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBbEI7QUFBQSxNQUF1QixHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBbkM7QUFBQSxNQUF3QyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBcEQ7QUFBQSxNQUNNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQURsQjtBQUFBLE1BQ3VCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQURuQztBQUFBLE1BQ3dDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQURwRDtBQUFBLE1BRU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRmxCO0FBQUEsTUFFdUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRm5DO0FBQUEsTUFFd0MsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRnBEO0FBQUEsTUFJTSxHQUFHLEdBQUksR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FKL0I7QUFBQSxNQUtNLEdBQUcsR0FBRyxDQUFDLEdBQUQsR0FBTyxHQUFQLEdBQWEsR0FBRyxHQUFHLEdBTC9CO0FBQUEsTUFNTSxHQUFHLEdBQUksR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FOL0I7QUFBQSxNQVFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FSbEQ7O0FBVUEsTUFBSSxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsV0FBUSxDQUVOLEdBQUcsR0FBRyxXQUZBLEVBRWEsQ0FBQyxDQUFDLEdBQUQsR0FBTyxHQUFQLEdBQWEsR0FBRyxHQUFHLEdBQXBCLElBQTJCLFdBRnhDLEVBRXFELENBQUUsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBcEIsSUFBMkIsV0FGaEYsRUFHTixHQUFHLEdBQUcsV0FIQSxFQUdhLENBQUUsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBcEIsSUFBMkIsV0FIeEMsRUFHcUQsQ0FBQyxDQUFDLEdBQUQsR0FBTyxHQUFQLEdBQWEsR0FBRyxHQUFHLEdBQXBCLElBQTJCLFdBSGhGLEVBSU4sR0FBRyxHQUFHLFdBSkEsRUFJYSxDQUFDLENBQUMsR0FBRCxHQUFPLEdBQVAsR0FBYSxHQUFHLEdBQUcsR0FBcEIsSUFBMkIsV0FKeEMsRUFJcUQsQ0FBRSxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFwQixJQUEyQixXQUpoRixDQUFSO0FBT0Q7QUFDRjs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDOUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FBbEI7QUFBQSxNQUF3QixHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FBcEM7QUFBQSxNQUEwQyxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FBdEQ7QUFBQSxNQUE0RCxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FBeEU7QUFBQSxNQUNNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQURsQjtBQUFBLE1BQ3dCLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQURwQztBQUFBLE1BQzBDLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQUR0RDtBQUFBLE1BQzRELEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQUR4RTtBQUFBLE1BRU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBRmxCO0FBQUEsTUFFd0IsR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBRnBDO0FBQUEsTUFFMEMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFELENBRnREO0FBQUEsTUFFNEQsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFELENBRnhFO0FBQUEsTUFHTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FIbEI7QUFBQSxNQUd3QixHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FIcEM7QUFBQSxNQUcwQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FIdEQ7QUFBQSxNQUc0RCxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FIeEU7QUFBQSxNQUtNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUw5QjtBQUFBLE1BTU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBTjlCO0FBQUEsTUFPTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FQOUI7QUFBQSxNQVFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQVI5QjtBQUFBLE1BU00sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBVDlCO0FBQUEsTUFVTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FWOUI7QUFBQSxNQVdNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQVg5QjtBQUFBLE1BWU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBWjlCO0FBQUEsTUFhTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FiOUI7QUFBQSxNQWNNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQWQ5QjtBQUFBLE1BZU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBZjlCO0FBQUEsTUFnQk0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBaEI5QjtBQUFBLE1Ba0JNLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBOUIsR0FBb0MsR0FBRyxHQUFHLEdBQTFDLEdBQWdELEdBQUcsR0FBRyxHQUF0RCxHQUE0RCxHQUFHLEdBQUcsR0FsQnRGOztBQW9CQSxNQUFJLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQixXQUFRLENBRU4sQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FGaEMsRUFFNkMsQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FGbkYsRUFFZ0csQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FGdEksRUFFbUosQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FGekwsRUFHTixDQUFDLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUEvQixJQUFzQyxXQUhoQyxFQUc2QyxDQUFDLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUEvQixJQUFzQyxXQUhuRixFQUdnRyxDQUFDLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUEvQixJQUFzQyxXQUh0SSxFQUdtSixDQUFDLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUEvQixJQUFzQyxXQUh6TCxFQUlOLENBQUMsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBQS9CLElBQXNDLFdBSmhDLEVBSTZDLENBQUMsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBQS9CLElBQXNDLFdBSm5GLEVBSWdHLENBQUMsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBQS9CLElBQXNDLFdBSnRJLEVBSW1KLENBQUMsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBQS9CLElBQXNDLFdBSnpMLEVBS04sQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FMaEMsRUFLNkMsQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FMbkYsRUFLZ0csQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FMdEksRUFLbUosQ0FBQyxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FBL0IsSUFBc0MsV0FMekwsQ0FBUjtBQVFEO0FBQ0Y7O0FBRU0sU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCO0FBQ2pDLFNBQVEsQ0FFTixNQUFNLENBQUMsQ0FBRCxDQUZBLEVBRUssTUFBTSxDQUFDLENBQUQsQ0FGWCxFQUdOLE1BQU0sQ0FBQyxDQUFELENBSEEsRUFHSyxNQUFNLENBQUMsQ0FBRCxDQUhYLENBQVI7QUFNRDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFDakMsU0FBUSxDQUVOLE1BQU0sQ0FBQyxDQUFELENBRkEsRUFFSyxNQUFNLENBQUMsQ0FBRCxDQUZYLEVBRWdCLE1BQU0sQ0FBQyxDQUFELENBRnRCLEVBR04sTUFBTSxDQUFDLENBQUQsQ0FIQSxFQUdLLE1BQU0sQ0FBQyxDQUFELENBSFgsRUFHZ0IsTUFBTSxDQUFDLENBQUQsQ0FIdEIsRUFJTixNQUFNLENBQUMsQ0FBRCxDQUpBLEVBSUssTUFBTSxDQUFDLENBQUQsQ0FKWCxFQUlnQixNQUFNLENBQUMsQ0FBRCxDQUp0QixDQUFSO0FBT0Q7O0FBRU0sU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCO0FBQ2pDLFNBQVEsQ0FFTixNQUFNLENBQUUsQ0FBRixDQUZBLEVBRU0sTUFBTSxDQUFFLENBQUYsQ0FGWixFQUVrQixNQUFNLENBQUUsQ0FBRixDQUZ4QixFQUU4QixNQUFNLENBQUMsRUFBRCxDQUZwQyxFQUdOLE1BQU0sQ0FBRSxDQUFGLENBSEEsRUFHTSxNQUFNLENBQUUsQ0FBRixDQUhaLEVBR2tCLE1BQU0sQ0FBRSxDQUFGLENBSHhCLEVBRzhCLE1BQU0sQ0FBQyxFQUFELENBSHBDLEVBSU4sTUFBTSxDQUFFLENBQUYsQ0FKQSxFQUlNLE1BQU0sQ0FBRSxDQUFGLENBSlosRUFJa0IsTUFBTSxDQUFDLEVBQUQsQ0FKeEIsRUFJOEIsTUFBTSxDQUFDLEVBQUQsQ0FKcEMsRUFLTixNQUFNLENBQUUsQ0FBRixDQUxBLEVBS00sTUFBTSxDQUFFLENBQUYsQ0FMWixFQUtrQixNQUFNLENBQUMsRUFBRCxDQUx4QixFQUs4QixNQUFNLENBQUMsRUFBRCxDQUxwQyxDQUFSO0FBUUQ7O0FBRU0sU0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDO0FBQ3JDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQUEsTUFDTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFBQSxNQUVNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUZoQjtBQUlBLFNBQVEsQ0FFTixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FGUCxFQUVVLE1BQU0sQ0FBRSxDQUFGLENBQU4sR0FBYSxDQUZ2QixFQUUwQixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FGdkMsRUFFMEMsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBRnZELEVBR04sTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBSFAsRUFHVSxNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FIdkIsRUFHMEIsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBSHZDLEVBRzBDLE1BQU0sQ0FBRSxDQUFGLENBQU4sR0FBYSxDQUh2RCxFQUlOLE1BQU0sQ0FBRSxDQUFGLENBQU4sR0FBYSxDQUpQLEVBSVUsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBSnZCLEVBSTBCLE1BQU0sQ0FBQyxFQUFELENBQU4sR0FBYSxDQUp2QyxFQUkwQyxNQUFNLENBQUMsRUFBRCxDQUFOLEdBQWEsQ0FKdkQsRUFLTixNQUFNLENBQUMsRUFBRCxDQUFOLEdBQWEsQ0FMUCxFQUtVLE1BQU0sQ0FBQyxFQUFELENBQU4sR0FBYSxDQUx2QixFQUswQixNQUFNLENBQUMsRUFBRCxDQUFOLEdBQWEsQ0FMdkMsRUFLMEMsTUFBTSxDQUFDLEVBQUQsQ0FBTixHQUFhLENBTHZELENBQVI7QUFRRDs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsS0FBekIsRUFBZ0MsTUFBaEMsRUFBd0M7QUFDN0MsTUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBZDtBQUFBLE1BQ0ksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGQ7QUFBQSxNQUVJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUZkO0FBSUEsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQUMsR0FBRyxDQUFaLEdBQWdCLENBQUMsR0FBRyxDQUE5QixDQUFmOztBQUVBLE1BQUksTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDaEIsSUFBQSxDQUFDLElBQUksTUFBTDtBQUNBLElBQUEsQ0FBQyxJQUFJLE1BQUw7QUFDQSxJQUFBLENBQUMsSUFBSSxNQUFMO0FBRUEsUUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULENBQVY7QUFBQSxRQUNNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQVQsQ0FEVjtBQUFBLFFBRU0sQ0FBQyxHQUFHLElBQUksQ0FGZDtBQUFBLFFBSU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBSmxCO0FBQUEsUUFLTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FMbEI7QUFBQSxRQU1NLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQU5sQjtBQUFBLFFBT00sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBUGxCO0FBQUEsUUFRTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FSbEI7QUFBQSxRQVNNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQVRsQjtBQUFBLFFBVU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBVmxCO0FBQUEsUUFXTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FYbEI7QUFBQSxRQVlNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQVpsQjtBQUFBLFFBYU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBYmxCO0FBQUEsUUFjTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FkbEI7QUFBQSxRQWVNLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRCxDQWZsQjtBQUFBLFFBaUJNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVIsR0FBWSxDQWpCeEI7QUFBQSxRQWtCTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBQyxHQUFHLENBbEI1QjtBQUFBLFFBbUJNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFDLEdBQUcsQ0FuQjVCO0FBQUEsUUFvQk0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQUMsR0FBRyxDQXBCNUI7QUFBQSxRQXFCTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVksQ0FyQnhCO0FBQUEsUUFzQk0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQUMsR0FBRyxDQXRCNUI7QUFBQSxRQXVCTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBQyxHQUFHLENBdkI1QjtBQUFBLFFBd0JNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFDLEdBQUcsQ0F4QjVCO0FBQUEsUUF5Qk0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZLENBekJ4QjtBQTJCQSxXQUFRLENBRU4sR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBRnhCLEVBRTZCLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUYzRCxFQUVnRSxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FGOUYsRUFFbUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBRmpJLEVBR04sR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBSHhCLEVBRzZCLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUgzRCxFQUdnRSxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FIOUYsRUFHbUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBSGpJLEVBSU4sR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBSnhCLEVBSTZCLEdBQUcsR0FBRyxHQUFOLEdBQVksR0FBRyxHQUFHLEdBQWxCLEdBQXdCLEdBQUcsR0FBRyxHQUozRCxFQUlnRSxHQUFHLEdBQUcsR0FBTixHQUFZLEdBQUcsR0FBRyxHQUFsQixHQUF3QixHQUFHLEdBQUcsR0FKOUYsRUFJbUcsR0FBRyxHQUFHLEdBQU4sR0FBWSxHQUFHLEdBQUcsR0FBbEIsR0FBd0IsR0FBRyxHQUFHLEdBSmpJLEVBS2lCLE1BQU0sQ0FBQyxFQUFELENBTHZCLEVBS29ELE1BQU0sQ0FBQyxFQUFELENBTDFELEVBS3VGLE1BQU0sQ0FBQyxFQUFELENBTDdGLEVBSzBILE1BQU0sQ0FBQyxFQUFELENBTGhJLENBQVI7QUFRRDtBQUNGOztBQUVNLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUN6QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFoQjtBQUFBLE1BQ00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFFTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FGaEI7QUFBQSxNQUlNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQUpsQjtBQUFBLE1BS00sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBTGxCO0FBQUEsTUFNTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FObEI7QUFBQSxNQU9NLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQVBsQjtBQUFBLE1BUU0sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBUmxCO0FBQUEsTUFTTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FUbEI7QUFBQSxNQVVNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQVZsQjtBQUFBLE1BV00sR0FBRyxHQUFHLE1BQU0sQ0FBRSxDQUFGLENBWGxCO0FBQUEsTUFZTSxHQUFHLEdBQUcsTUFBTSxDQUFFLENBQUYsQ0FabEI7QUFBQSxNQWFNLEdBQUcsR0FBRyxNQUFNLENBQUUsQ0FBRixDQWJsQjtBQUFBLE1BY00sR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFELENBZGxCO0FBQUEsTUFlTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUQsQ0FmbEI7QUFpQkEsU0FBUSxDQUUrQixHQUYvQixFQUV5RSxHQUZ6RSxFQUVtSCxHQUZuSCxFQUU2SixHQUY3SixFQUcrQixHQUgvQixFQUd5RSxHQUh6RSxFQUdtSCxHQUhuSCxFQUc2SixHQUg3SixFQUkrQixHQUovQixFQUl5RSxHQUp6RSxFQUltSCxHQUpuSCxFQUk2SixHQUo3SixFQUtOLEdBQUcsR0FBRyxDQUFOLEdBQVUsR0FBRyxHQUFHLENBQWhCLEdBQW9CLEdBQUcsR0FBRyxDQUExQixHQUE4QixNQUFNLENBQUMsRUFBRCxDQUw5QixFQUtvQyxHQUFHLEdBQUcsQ0FBTixHQUFVLEdBQUcsR0FBRyxDQUFoQixHQUFvQixHQUFHLEdBQUcsQ0FBMUIsR0FBOEIsTUFBTSxDQUFDLEVBQUQsQ0FMeEUsRUFLOEUsR0FBRyxHQUFHLENBQU4sR0FBVSxHQUFHLEdBQUcsQ0FBaEIsR0FBb0IsR0FBRyxHQUFHLENBQTFCLEdBQThCLE1BQU0sQ0FBQyxFQUFELENBTGxILEVBS3dILEdBQUcsR0FBRyxDQUFOLEdBQVUsR0FBRyxHQUFHLENBQWhCLEdBQW9CLEdBQUcsR0FBRyxDQUExQixHQUE4QixNQUFNLENBQUMsRUFBRCxDQUw1SixDQUFSO0FBUUQ7O0FBRU0sU0FBUyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLFdBQW5DLEVBQWdELEtBQWhELEVBQXVELElBQXZELEVBQTZEO0FBQ2xFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxXQUFXLEdBQUcsQ0FBdkIsQ0FBaEI7QUFBQSxNQUNNLEVBQUUsR0FBRyxLQUFLLEtBQUssR0FBRyxJQUFiLENBRFg7QUFHQSxTQUFRLENBRU4sQ0FBQyxHQUFHLFdBRkUsRUFFVyxDQUZYLEVBRWMsQ0FGZCxFQUV1QyxDQUZ2QyxFQUdOLENBSE0sRUFHVyxDQUhYLEVBR2MsQ0FIZCxFQUd1QyxDQUh2QyxFQUlOLENBSk0sRUFJVyxDQUpYLEVBSWMsQ0FBQyxJQUFJLEdBQUcsS0FBUixJQUFpQixFQUovQixFQUlzQyxDQUFDLENBSnZDLEVBS04sQ0FMTSxFQUtXLENBTFgsRUFLZSxJQUFJLElBQUosR0FBVyxLQUFaLEdBQXFCLEVBTG5DLEVBS3VDLENBTHZDLENBQVI7QUFRRDs7O0FDeFdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBUyxLQUFULEdBQWlCO0FBQ3RCLFNBQVEsQ0FFTixDQUZNLEVBR04sQ0FITSxDQUFSO0FBTUQ7O0FBRU0sU0FBUyxLQUFULEdBQWlCO0FBQ3RCLFNBQVEsQ0FFTixDQUZNLEVBR04sQ0FITSxFQUlOLENBSk0sQ0FBUjtBQU9EOztBQUVNLFNBQVMsS0FBVCxHQUFpQjtBQUN0QixTQUFRLENBRU4sQ0FGTSxFQUdOLENBSE0sRUFJTixDQUpNLEVBS04sQ0FMTSxDQUFSO0FBUUQ7O0FBRU0sU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQUEsTUFDTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFHQSxTQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxHQUFDLENBQUYsR0FBTSxDQUFDLEdBQUMsQ0FBbEIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsT0FBVCxDQUFpQixNQUFqQixFQUF5QjtBQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFoQjtBQUFBLE1BQ00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFFTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FGaEI7QUFJQSxTQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxHQUFDLENBQUYsR0FBTSxDQUFDLEdBQUMsQ0FBUixHQUFZLENBQUMsR0FBQyxDQUF4QixDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzlCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQUEsTUFDTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFBQSxNQUVNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUZoQjtBQUFBLE1BR00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBSGhCO0FBS0EsU0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsR0FBQyxDQUFGLEdBQU0sQ0FBQyxHQUFDLENBQVIsR0FBWSxDQUFDLEdBQUMsQ0FBZCxHQUFrQixDQUFDLEdBQUMsQ0FBOUIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUIsT0FBdkIsRUFBZ0M7QUFBRSxTQUFRLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUFwQixHQUEwQixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FBdEQ7QUFBNkQ7O0FBRS9GLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUIsT0FBdkIsRUFBZ0M7QUFBRSxTQUFRLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUFwQixHQUEwQixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FBOUMsR0FBb0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBQWhGO0FBQXVGOztBQUV6SCxTQUFTLElBQVQsQ0FBYyxPQUFkLEVBQXVCLE9BQXZCLEVBQWdDO0FBQUUsU0FBUSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FBcEIsR0FBMEIsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBQTlDLEdBQW9ELE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUF4RSxHQUE4RSxPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FBMUc7QUFBaUg7O0FBRW5KLFNBQVMsTUFBVCxDQUFnQixPQUFoQixFQUF5QixPQUF6QixFQUFrQztBQUN2QyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFsQjtBQUFBLE1BQXVCLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFuQztBQUFBLE1BQXdDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFwRDtBQUFBLE1BQ00sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBRGxCO0FBQUEsTUFDdUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBRG5DO0FBQUEsTUFDd0MsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFELENBRHBEO0FBR0EsU0FBUSxDQUVOLEVBQUUsR0FBRyxFQUFMLEdBQVUsRUFBRSxHQUFHLEVBRlQsRUFHTixFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUhULEVBSU4sRUFBRSxHQUFHLEVBQUwsR0FBVSxFQUFFLEdBQUcsRUFKVCxDQUFSO0FBT0Q7O0FBRU0sU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCO0FBQ2pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQUEsTUFDTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFBQSxNQUVNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsR0FBQyxDQUFGLEdBQU0sQ0FBQyxHQUFDLENBQWxCLENBRmY7O0FBSUEsTUFBSSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNkLFdBQVEsQ0FFTixDQUFDLEdBQUcsTUFGRSxFQUdOLENBQUMsR0FBRyxNQUhFLENBQVI7QUFNRDtBQUNGOztBQUVNLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUNqQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFoQjtBQUFBLE1BQ00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFFTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FGaEI7QUFBQSxNQUdNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsR0FBQyxDQUFGLEdBQU0sQ0FBQyxHQUFDLENBQVIsR0FBWSxDQUFDLEdBQUMsQ0FBeEIsQ0FIZjs7QUFLQSxNQUFJLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2QsV0FBUSxDQUVOLENBQUMsR0FBRyxNQUZFLEVBR04sQ0FBQyxHQUFHLE1BSEUsRUFJTixDQUFDLEdBQUcsTUFKRSxDQUFSO0FBT0Q7QUFDRjs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEI7QUFDakMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxNQUNNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQURoQjtBQUFBLE1BRU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRmhCO0FBQUEsTUFHTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FIaEI7QUFBQSxNQUlNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBTCxDQUFVLENBQUMsR0FBQyxDQUFGLEdBQU0sQ0FBQyxHQUFDLENBQVIsR0FBWSxDQUFDLEdBQUMsQ0FBZCxHQUFrQixDQUFDLEdBQUMsQ0FBOUIsQ0FKZjs7QUFNQSxNQUFJLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2QsV0FBUSxDQUVOLENBQUMsR0FBRyxNQUZFLEVBR04sQ0FBQyxHQUFHLE1BSEUsRUFJTixDQUFDLEdBQUcsTUFKRSxFQUtOLENBQUMsR0FBRyxNQUxFLENBQVI7QUFRRDtBQUNGOztBQUVNLFNBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUMvQixTQUFRLENBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQUMsQ0FGUCxFQUdOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBSFAsQ0FBUjtBQU1EOztBQUVNLFNBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQjtBQUMvQixTQUFRLENBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQUMsQ0FGUCxFQUdOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBSFAsRUFJTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FBQyxDQUpQLENBQVI7QUFPRDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEI7QUFDL0IsU0FBUSxDQUVOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBRlAsRUFHTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FBQyxDQUhQLEVBSU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQUMsQ0FKUCxFQUtOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFDLENBTFAsQ0FBUjtBQVFEOztBQUVNLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQztBQUNyQyxTQUFRLENBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLE1BRk4sRUFHTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksTUFITixDQUFSO0FBTUQ7O0FBRU0sU0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQVEsQ0FFTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksTUFGTixFQUdOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxNQUhOLEVBSU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLE1BSk4sQ0FBUjtBQU9EOztBQUVNLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixNQUF4QixFQUFnQztBQUNyQyxTQUFRLENBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLE1BRk4sRUFHTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksTUFITixFQUlOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxNQUpOLEVBS04sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLE1BTE4sQ0FBUjtBQVFEOztBQUVNLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDckMsU0FBUSxDQUVOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUZkLEVBR04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBSGQsQ0FBUjtBQU1EOztBQUVNLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDckMsU0FBUSxDQUVOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUZkLEVBR04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBSGQsRUFJTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FKZCxDQUFSO0FBT0Q7O0FBRU0sU0FBUyxJQUFULENBQWMsT0FBZCxFQUF1QixPQUF2QixFQUFnQztBQUNyQyxTQUFRLENBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBRmQsRUFHTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FIZCxFQUlOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUpkLEVBS04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBTGQsQ0FBUjtBQVFEOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxTQUFRLENBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBRmQsRUFHTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FIZCxDQUFSO0FBTUQ7O0FBRU0sU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLFNBQVEsQ0FFTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FGZCxFQUdOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUhkLEVBSU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBSmQsQ0FBUjtBQU9EOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxTQUFRLENBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBRmQsRUFHTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FIZCxFQUlOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUpkLEVBS04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBTGQsQ0FBUjtBQVFEOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxTQUFRLENBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBRmQsRUFHTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FIZCxDQUFSO0FBTUQ7O0FBRU0sU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLFNBQVEsQ0FFTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FGZCxFQUdOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUhkLEVBSU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBSmQsQ0FBUjtBQU9EOztBQUVNLFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQztBQUMxQyxTQUFRLENBRU4sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBRmQsRUFHTixPQUFPLENBQUMsQ0FBRCxDQUFQLEdBQWEsT0FBTyxDQUFDLENBQUQsQ0FIZCxFQUlOLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYSxPQUFPLENBQUMsQ0FBRCxDQUpkLEVBS04sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhLE9BQU8sQ0FBQyxDQUFELENBTGQsQ0FBUjtBQVFEOztBQUVNLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUN6QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFoQjtBQUFBLE1BQ00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBR0EsU0FBUSxDQUVOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFaLEdBQWdCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUZ0QixFQUdOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFaLEdBQWdCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUh0QixDQUFSO0FBTUQ7O0FBRU0sU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLE1BQTVCLEVBQW9DO0FBQ3pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQUEsTUFDTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFBQSxNQUVNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUZoQjtBQUlBLFNBQVEsQ0FFTixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FBWixHQUFnQixNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FBNUIsR0FBZ0MsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBRnRDLEVBR04sTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQVosR0FBZ0IsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZLENBQTVCLEdBQWdDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUh0QyxFQUlOLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUFaLEdBQWdCLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWSxDQUE1QixHQUFnQyxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FKdEMsQ0FBUjtBQU9EOztBQUVNLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixNQUE1QixFQUFvQztBQUN6QyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUFoQjtBQUFBLE1BQ00sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBQUEsTUFFTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FGaEI7QUFBQSxNQUdNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBRCxDQUhoQjtBQUtBLFNBQVEsQ0FFTixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FBYixHQUFpQixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FBOUIsR0FBa0MsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBQS9DLEdBQW1ELE1BQU0sQ0FBQyxFQUFELENBQU4sR0FBYSxDQUYxRCxFQUdOLE1BQU0sQ0FBRSxDQUFGLENBQU4sR0FBYSxDQUFiLEdBQWlCLE1BQU0sQ0FBRSxDQUFGLENBQU4sR0FBYSxDQUE5QixHQUFrQyxNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FBL0MsR0FBbUQsTUFBTSxDQUFDLEVBQUQsQ0FBTixHQUFhLENBSDFELEVBSU4sTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBQWIsR0FBaUIsTUFBTSxDQUFFLENBQUYsQ0FBTixHQUFhLENBQTlCLEdBQWtDLE1BQU0sQ0FBQyxFQUFELENBQU4sR0FBYSxDQUEvQyxHQUFtRCxNQUFNLENBQUMsRUFBRCxDQUFOLEdBQWEsQ0FKMUQsRUFLTixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FBYixHQUFpQixNQUFNLENBQUUsQ0FBRixDQUFOLEdBQWEsQ0FBOUIsR0FBa0MsTUFBTSxDQUFDLEVBQUQsQ0FBTixHQUFhLENBQS9DLEdBQW1ELE1BQU0sQ0FBQyxFQUFELENBQU4sR0FBYSxDQUwxRCxDQUFSO0FBUUQ7OztBQzVURDs7Ozs7O0FBRUEsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGlCQUE3QixDLENBQWdEOztlQUVqQyxhOzs7O0FDSmY7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUIsUztBQUNuQixxQkFBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DO0FBQUE7O0FBQ2xDLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBSyxZQUFaO0FBQ0Q7Ozt1Q0FFa0IsSyxFQUFPO0FBQUE7O0FBQUEsVUFDaEIsT0FEZ0IsR0FDSixLQURJLENBQ2hCLE9BRGdCOztBQUd4QixVQUFJLE9BQU8sS0FBSyx5QkFBaEIsRUFBZ0M7QUFDOUIsYUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBRUEsYUFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFDLE9BQUQ7QUFBQSxpQkFBYSxPQUFPLENBQUMsS0FBSSxDQUFDLFlBQU4sQ0FBcEI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7Ozt5Q0FFb0IsSyxFQUFPO0FBQUE7O0FBQUEsVUFDbEIsT0FEa0IsR0FDTixLQURNLENBQ2xCLE9BRGtCOztBQUcxQixVQUFJLE9BQU8sS0FBSyx5QkFBaEIsRUFBZ0M7QUFDOUIsYUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBRUEsYUFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFDLE9BQUQ7QUFBQSxpQkFBYSxPQUFPLENBQUMsTUFBSSxDQUFDLFlBQU4sQ0FBcEI7QUFBQSxTQUF0QjtBQUNEO0FBQ0Y7Ozt1Q0FFa0IsZSxFQUFpQjtBQUNsQyxVQUFNLE9BQU8sR0FBRyxlQUFoQixDQURrQyxDQUNBOztBQUVsQyxXQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CO0FBQ0Q7OzsrQkFFVSxNLEVBQVE7QUFDakIsVUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsZUFBcEM7QUFBQSxVQUFzRDtBQUNoRCxNQUFBLGtCQUFrQixHQUFHLEtBQUssa0JBQUwsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FEM0I7QUFBQSxVQUVNLG9CQUFvQixHQUFHLEtBQUssb0JBQUwsQ0FBMEIsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FGN0I7QUFJQSxNQUFBLGtCQUFrQixDQUFDLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2QyxrQkFBN0M7QUFFQSxNQUFBLGtCQUFrQixDQUFDLGdCQUFuQixDQUFvQyxTQUFwQyxFQUErQyxvQkFBL0M7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ00sWUFBWSxHQUFHLEtBRHJCO0FBQUEsVUFDNkI7QUFDdkIsTUFBQSxTQUFTLEdBQUcsSUFBSSxTQUFKLENBQWMsUUFBZCxFQUF3QixZQUF4QixDQUZsQjtBQUlBLGFBQU8sU0FBUDtBQUNEOzs7Ozs7Ozs7QUN4REg7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUIsVztBQUNuQix1QkFBWSxXQUFaLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUE7O0FBQ2xDLFNBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNEOzs7O3VDQUVrQixLLEVBQU8sUyxFQUFXO0FBQUE7O0FBQ25DLFVBQU0sUUFBUSxHQUFHLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUFqQjtBQUFBLFVBQ00sZ0JBQWdCLEdBQUcseUJBQXlCLENBQUMsS0FBRCxDQURsRDtBQUdBLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBQyxPQUFEO0FBQUEsZUFBYSxPQUFPLENBQUMsZ0JBQUQsRUFBbUIsS0FBSSxDQUFDLFNBQXhCLENBQXBCO0FBQUEsT0FBakI7QUFFQSxNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0Q7Ozt5Q0FFb0IsSyxFQUFPO0FBQzFCLFdBQUssU0FBTCxHQUFpQixLQUFqQjtBQUVBLFdBQUssa0JBQUwsQ0FBd0IsS0FBeEIsRUFBK0IsbUJBQS9CO0FBQ0Q7OzsyQ0FFcUIsSyxFQUFPO0FBQzNCLFdBQUssU0FBTCxHQUFpQixJQUFqQjtBQUVBLFdBQUssa0JBQUwsQ0FBd0IsS0FBeEIsRUFBK0IscUJBQS9CO0FBQ0Q7OzsyQ0FFcUIsSyxFQUFPO0FBQzNCLFdBQUssa0JBQUwsQ0FBd0IsS0FBeEIsRUFBK0IscUJBQS9CO0FBQ0Q7Ozs0Q0FFdUIsSyxFQUFPO0FBQzdCLFVBQU0sUUFBUSxHQUFHLEtBQUssV0FBTCxDQUFrQixzQkFBbEIsQ0FBakI7QUFBQSxVQUNNLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQyxLQUFELENBRGhEO0FBR0EsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFDLE9BQUQ7QUFBQSxlQUFhLE9BQU8sQ0FBQyxlQUFELENBQXBCO0FBQUEsT0FBakI7QUFFRixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0M7OztzQ0FFaUIsYyxFQUFnQjtBQUNoQyxVQUFNLGVBQWUsR0FBRyxLQUFLLFdBQUwsQ0FBa0IsbUJBQWxCLENBQXhCO0FBRUEsTUFBQSxlQUFlLENBQUMsSUFBaEIsQ0FBcUIsY0FBckI7QUFDRDs7O3dDQUVtQixnQixFQUFrQjtBQUNwQyxVQUFNLGlCQUFpQixHQUFHLEtBQUssV0FBTCxDQUFrQixxQkFBbEIsQ0FBMUI7QUFFQSxNQUFBLGlCQUFpQixDQUFDLElBQWxCLENBQXVCLGdCQUF2QjtBQUNEOzs7d0NBRW1CLGdCLEVBQWtCO0FBQ3BDLFVBQU0saUJBQWlCLEdBQUcsS0FBSyxXQUFMLENBQWtCLHFCQUFsQixDQUExQjtBQUVBLE1BQUEsaUJBQWlCLENBQUMsSUFBbEIsQ0FBdUIsZ0JBQXZCO0FBQ0Q7Ozt5Q0FFb0IsaUIsRUFBbUI7QUFDdEMsVUFBTSxrQkFBa0IsR0FBRyxLQUFLLFdBQUwsQ0FBa0Isc0JBQWxCLENBQTNCO0FBRUEsTUFBQSxrQkFBa0IsQ0FBQyxJQUFuQixDQUF3QixpQkFBeEI7QUFDRDs7OytCQUVVLE0sRUFBUTtBQUNmLFVBQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGFBQVAsRUFBekI7QUFBQSxVQUNNLG9CQUFvQixHQUFHLEtBQUssb0JBQUwsQ0FBMEIsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FEN0I7QUFBQSxVQUVNLHNCQUFzQixHQUFHLEtBQUssc0JBQUwsQ0FBNEIsSUFBNUIsQ0FBaUMsSUFBakMsQ0FGL0I7QUFBQSxVQUdNLHNCQUFzQixHQUFHLEtBQUssc0JBQUwsQ0FBNEIsSUFBNUIsQ0FBaUMsSUFBakMsQ0FIL0I7QUFBQSxVQUlNLHVCQUF1QixHQUFHLEtBQUssdUJBQUwsQ0FBNkIsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FKaEM7QUFNRixXQUFLLFdBQUwsQ0FBa0IsbUJBQWxCLElBQStCLEVBQS9CO0FBQ0EsV0FBSyxXQUFMLENBQWtCLHFCQUFsQixJQUFpQyxFQUFqQztBQUNBLFdBQUssV0FBTCxDQUFrQixxQkFBbEIsSUFBaUMsRUFBakM7QUFDQSxXQUFLLFdBQUwsQ0FBa0Isc0JBQWxCLElBQWtDLEVBQWxDO0FBRUEsTUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsU0FBbEMsRUFBNkMsb0JBQTdDO0FBRUEsTUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsV0FBbEMsRUFBK0Msc0JBQS9DO0FBRUEsTUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsV0FBbEMsRUFBK0Msc0JBQS9DO0FBRUEsTUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsWUFBbEMsRUFBZ0QsdUJBQWhEO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTSxXQUFXLEdBQUcsRUFBcEI7QUFBQSxVQUNNLFNBQVMsR0FBRyxLQURsQjtBQUFBLFVBQzBCO0FBQ3pCLE1BQUEsV0FBVyxHQUFHLElBQUksV0FBSixDQUFnQixXQUFoQixFQUE2QixTQUE3QixDQUZmO0FBSUEsYUFBTyxXQUFQO0FBQ0Q7Ozs7Ozs7O0FBR0gsU0FBUyx3QkFBVCxDQUFrQyxLQUFsQyxFQUF5QztBQUN2QyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQUMsQ0FBVixFQUFhLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUssQ0FBQyxVQUFsQixDQUFiLENBQXhCLENBRHVDLENBQzhCOztBQUVyRSxTQUFPLGVBQVA7QUFDRDs7QUFFRCxTQUFTLHlCQUFULENBQW1DLEtBQW5DLEVBQTBDO0FBQUEsTUFDaEMsTUFEZ0MsR0FDSCxLQURHLENBQ2hDLE1BRGdDO0FBQUEsTUFDeEIsT0FEd0IsR0FDSCxLQURHLENBQ3hCLE9BRHdCO0FBQUEsTUFDZixPQURlLEdBQ0gsS0FERyxDQUNmLE9BRGU7QUFBQSxNQUVsQyxnQkFGa0MsR0FFZixNQUZlO0FBQUEsTUFHbEMsa0JBSGtDLEdBR2IsZ0JBQWdCLENBQUMscUJBQWpCLEVBSGE7QUFBQSxNQUlsQyxHQUprQyxHQUk1QixrQkFBa0IsQ0FBQyxHQUpTO0FBQUEsTUFLbEMsSUFMa0MsR0FLM0Isa0JBQWtCLENBQUMsSUFMUTtBQUFBLE1BTWxDLGdCQU5rQyxHQU1mLENBRWpCLE9BQU8sR0FBRyxJQUZPLEVBSWpCLEdBQUcsR0FBRyxPQUpXLENBTmU7QUFjeEMsU0FBTyxnQkFBUDtBQUNEOzs7QUN2SEQ7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsRztBQUNuQixlQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLLE9BQVo7QUFDRDs7O2tDQUVhLHdCLEVBQTBCLGUsRUFBaUIsSSxFQUFNO0FBQzdELFVBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFMLEVBQWY7QUFBQSxVQUNNLHFCQUFxQixHQUFHLGVBQWUsR0FBRyx1QkFEaEQ7QUFBQSxVQUVNLHVDQUF1QyxHQUFHLHNCQUFTLG9CQUFPLHdCQUFQLEVBQWlDLHdCQUFqQyxDQUFULENBRmhEO0FBQUEsVUFHTSxVQUFVLGdDQUFRLHVDQUFSLElBQWlELHFCQUFqRCxFQUF3RSxDQUF4RSxFQUhoQjtBQUFBLFVBSU0sZUFBZSxHQUFHLHFEQUF1QyxNQUF2QyxFQUErQyxVQUEvQyxDQUp4QjtBQU1BLFdBQUssT0FBTCxHQUFlLGtCQUFLLEtBQUssT0FBVixFQUFtQixlQUFuQixDQUFmO0FBQ0Q7Ozt1Q0FFeUIsYyxFQUFnQjtBQUN4QyxVQUFNLE9BQU8sR0FBRyxjQUFoQjtBQUFBLFVBQWdDO0FBQzFCLE1BQUEsR0FBRyxHQUFHLElBQUksR0FBSixDQUFRLE9BQVIsQ0FEWjtBQUdBLGFBQU8sR0FBUDtBQUNEOzs7d0NBRTBCLGUsRUFBaUI7QUFDMUMsVUFBTSxPQUFPLEdBQUcsb0JBQU8sZUFBUCxFQUF3Qix3QkFBeEIsQ0FBaEI7QUFBQSxVQUNNLEdBQUcsR0FBRyxJQUFJLEdBQUosQ0FBUSxPQUFSLENBRFo7QUFHQSxhQUFPLEdBQVA7QUFDRDs7Ozs7Ozs7O0FDckNIOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsZ0JBQVksTUFBWixFQUFvQixPQUFwQixFQUE2QjtBQUFBOztBQUMzQixTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBTSxVQUFVLEdBQUcsa0JBQU0sS0FBSyxNQUFYLENBQW5CO0FBQUEsVUFDTSxNQUFNLEdBQUcsVUFEZixDQURVLENBRWtCOztBQUU1QixhQUFPLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTSxXQUFXLEdBQUcsbUJBQU8sS0FBSyxNQUFaLENBQXBCO0FBQUEsVUFDTSxNQUFNLEdBQUcsV0FEZixDQURVLENBRWtCOztBQUU1QixhQUFPLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTSxNQUFNLEdBQUcsQ0FBZjtBQUVBLGFBQU8sTUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBWjtBQUNEOzs7aUNBRVksd0IsRUFBMEI7QUFDckMsVUFBTSxNQUFNLEdBQUcsS0FBSyxPQUFMLEdBQ0UsQ0FBQyx3QkFESCxHQUVJLENBQUMsd0JBRnBCO0FBQUEsVUFHTSxNQUFNLEdBQUcsQ0FFRCxDQUZDLEVBRUUsTUFGRixFQUVVLENBRlYsRUFHUCxDQUFDLE1BSE0sRUFHTyxDQUhQLEVBR1UsQ0FIVixFQUlELENBSkMsRUFJTyxDQUpQLEVBSVUsQ0FKVixDQUhmO0FBQUEsVUFVTSxjQUFjLEdBQUcscURBQWdCLHdCQUFoQixJQUEwQyxDQUExQyxJQUErQyxNQUEvQyxDQVZ2QixDQURxQyxDQVcyQzs7QUFFaEYsV0FBSyxNQUFMLEdBQWMsa0JBQUssS0FBSyxNQUFWLEVBQWtCLGNBQWxCLENBQWQ7QUFDRDs7O2dEQUVrQyxhLEVBQWUsTyxFQUFTO0FBQ3pELFVBQU0sTUFBTSxHQUFHLE9BQU8sR0FDTCxDQUFDLG9DQURJLEdBRUgsQ0FBQyxvQ0FGcEI7QUFBQSxVQUdNLE1BQU0sR0FBRyxDQUVELENBRkMsRUFFRSxNQUZGLEVBRVUsQ0FGVixFQUdQLENBQUMsTUFITSxFQUdPLENBSFAsRUFHVSxDQUhWLEVBSUQsQ0FKQyxFQUlPLENBSlAsRUFJVSxDQUpWLENBSGY7QUFBQSxVQVVNLE1BQU0sR0FBRyxxREFBZ0IsYUFBaEIsSUFBK0IsQ0FBL0IsSUFBb0MsTUFBcEMsQ0FWZjtBQUFBLFVBVTREO0FBQ3RELE1BQUEsSUFBSSxHQUFHLElBQUksSUFBSixDQUFTLE1BQVQsRUFBaUIsT0FBakIsQ0FYYjtBQWFBLGFBQU8sSUFBUDtBQUNEOzs7Ozs7Ozs7QUNuRUg7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztJQUVxQixTO0FBQ25CLHFCQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsV0FBakMsRUFBOEMsZ0JBQTlDLEVBQWdFLHdCQUFoRSxFQUEwRjtBQUFBOztBQUN4RixTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QjtBQUNBLFNBQUssd0JBQUwsR0FBZ0Msd0JBQWhDO0FBQ0Q7Ozs7cUNBRWdCLGdCLEVBQWtCLFMsRUFBVyxNLEVBQVE7QUFDcEQsV0FBSyx3QkFBTCxHQUFnQyxLQUFLLGdCQUFyQyxDQURvRCxDQUNJOztBQUV4RCxXQUFLLGdCQUFMLEdBQXdCLGdCQUF4Qjs7QUFFQSxVQUFJLEtBQUssd0JBQUwsS0FBa0MsSUFBdEMsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxVQUFJLFNBQUosRUFBZTtBQUNiLFlBQU0sZUFBZSxHQUFHLENBQXhCO0FBQUEsWUFBNEI7QUFDdEIsUUFBQSxZQUFZLEdBQUcsS0FBSyxTQUFMLENBQWUsY0FBZixFQURyQjtBQUFBLFlBRU0sd0JBQXdCLEdBQUcsdUJBQVUsS0FBSyxnQkFBZixFQUFpQyxLQUFLLHdCQUF0QyxDQUZqQztBQUlBLGFBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBQyxPQUFEO0FBQUEsaUJBQWEsT0FBTyxDQUFDLHdCQUFELEVBQTJCLGVBQTNCLEVBQTRDLFlBQTVDLENBQXBCO0FBQUEsU0FBdEI7QUFDRDtBQUNGOzs7c0NBRWlCLGUsRUFBaUIsTSxFQUFRO0FBQ3pDLFVBQU0sWUFBWSxHQUFHLEtBQUssU0FBTCxDQUFlLGNBQWYsRUFBckI7QUFBQSxVQUNNLHdCQUF3QixHQUFHLG9CQURqQztBQUdBLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBQyxPQUFEO0FBQUEsZUFBYSxPQUFPLENBQUMsd0JBQUQsRUFBMkIsZUFBM0IsRUFBNEMsWUFBNUMsQ0FBcEI7QUFBQSxPQUF0QjtBQUNEOzs7d0NBRW1CLGdCLEVBQWtCO0FBQ3BDLFVBQU0sT0FBTyxHQUFHLGdCQUFoQixDQURvQyxDQUNGOztBQUVsQyxXQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLE9BQW5CO0FBQ0Q7OzsrQkFFVSxNLEVBQVE7QUFDakIsVUFBTSxnQkFBZ0IsR0FBRyxLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCLENBQXpCO0FBQUEsVUFDTSxpQkFBaUIsR0FBRyxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBR0EsV0FBSyxTQUFMLENBQWUsVUFBZixDQUEwQixNQUExQjtBQUVBLFdBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixNQUE1QjtBQUVBLFdBQUssV0FBTCxDQUFpQixtQkFBakIsQ0FBcUMsZ0JBQXJDO0FBRUEsV0FBSyxXQUFMLENBQWlCLG9CQUFqQixDQUFzQyxpQkFBdEM7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ00sU0FBUyxHQUFHLHNCQUFVLFdBQVYsRUFEbEI7QUFBQSxVQUVNLFdBQVcsR0FBRyx3QkFBWSxXQUFaLEVBRnBCO0FBQUEsVUFHTSxnQkFBZ0IsR0FBRyxJQUh6QjtBQUFBLFVBR2dDO0FBQzFCLE1BQUEsd0JBQXdCLEdBQUcsSUFKakM7QUFBQSxVQUl3QztBQUNsQyxNQUFBLFNBQVMsR0FBRyxJQUFJLFNBQUosQ0FBYyxRQUFkLEVBQXdCLFNBQXhCLEVBQW1DLFdBQW5DLEVBQWdELGdCQUFoRCxFQUFrRSx3QkFBbEUsQ0FMbEI7O0FBT0EsYUFBTyxTQUFQO0FBQ0Q7Ozs7Ozs7OztBQ3JFSDs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQixJO0FBQ25CLGdCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUssUUFBWjtBQUNEOzs7bUNBRWMsZSxFQUFpQjtBQUM5QixXQUFLLFFBQUwsSUFBaUIsZUFBZSxHQUFHLHVCQUFuQztBQUVBLFdBQUssUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBTCxDQUFTLDJCQUFULEVBQTJCLEtBQUssUUFBaEMsQ0FBaEI7QUFDRDs7O3dDQUUwQixlLEVBQWlCO0FBQzFDLFVBQU0sUUFBUSxHQUFHLGVBQWpCO0FBQUEsVUFBa0M7QUFDNUIsTUFBQSxJQUFJLEdBQUcsSUFBSSxJQUFKLENBQVMsUUFBVCxDQURiO0FBR0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7Ozs7OztBQ3hCSDs7Ozs7OztBQUVPLFNBQVMsY0FBVCxHQUEwQjtBQUFBLHNCQUNHLEtBQUssT0FEUjtBQUFBLE1BQ3ZCLEtBRHVCLGlCQUN2QixLQUR1QjtBQUFBLE1BQ2hCLFNBRGdCLGlCQUNoQixTQURnQjtBQUFBLE1BQ0wsR0FESyxpQkFDTCxHQURLO0FBQUEsTUFFekIsUUFGeUIsR0FFZCxLQUZjO0FBQUEsTUFHekIsWUFIeUIsR0FHVixTQUhVO0FBQUEsTUFJekIsaUJBSnlCLEdBSUwsR0FKSztBQU0vQixPQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFFBQXBCO0FBRUEsT0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixZQUF2QixFQUFxQyxpQkFBckM7QUFDRDs7O0FDWEQ7Ozs7Ozs7Ozs7QUFFTyxTQUFTLG1CQUFULENBQTZCLElBQTdCLEVBQW1DO0FBQUEsc0JBQ00sS0FBSyxPQURYO0FBQUEsTUFDaEMsb0JBRGdDLGlCQUNoQyxvQkFEZ0M7QUFBQSxNQUNWLFdBRFUsaUJBQ1YsV0FEVTtBQUFBLE1BRWxDLE1BRmtDLEdBRXpCLG9CQUZ5QjtBQUFBLE1BR2xDLEtBSGtDLEdBRzFCLFdBSDBCO0FBQUEsTUFJbEMsV0FKa0MsR0FJcEIsSUFBSSxXQUFKLENBQWdCLElBQWhCLENBSm9CO0FBQUEsTUFLbEMsYUFMa0MsR0FLbEIsS0FBSyxPQUFMLENBQWEsWUFBYixFQUxrQjtBQU94QyxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE1BQXhCLEVBQWdDLGFBQWhDO0FBRUEsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixFQUFnQyxXQUFoQyxFQUE2QyxLQUE3QztBQUVBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsaUJBQVQsQ0FBMkIsYUFBM0IsRUFBMEM7QUFDekMsTUFBRSxvQkFBRixHQUEyQixLQUFLLE9BQWhDLENBQUUsb0JBQUY7QUFBQSxNQUNBLE1BREEsR0FDUyxvQkFEVDtBQUdOLE9BQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsTUFBeEIsRUFBZ0MsYUFBaEM7QUFDRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI7QUFBQSx1QkFDSyxLQUFLLE9BRFY7QUFBQSxNQUN6QixZQUR5QixrQkFDekIsWUFEeUI7QUFBQSxNQUNYLFdBRFcsa0JBQ1gsV0FEVztBQUFBLE1BRTNCLE1BRjJCLEdBRWxCLFlBRmtCO0FBQUEsTUFHM0IsS0FIMkIsR0FHbkIsV0FIbUI7QUFBQSxNQUkzQixNQUoyQixHQUlsQixLQUFLLE9BQUwsQ0FBYSxZQUFiLEVBSmtCO0FBQUEsTUFLM0IsWUFMMkIsR0FLWixJQUFJLFlBQUosQ0FBaUIsSUFBakIsQ0FMWTtBQU9qQyxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE1BQXhCLEVBQWdDLE1BQWhDO0FBRUEsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixFQUFnQyxZQUFoQyxFQUE4QyxLQUE5QztBQUVBLFNBQU8sTUFBUDtBQUNEOztBQUVNLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QixpQkFBNUIsRUFBK0MsVUFBL0MsRUFBMkQ7QUFBQSx1QkFDaEMsS0FBSyxPQUQyQjtBQUFBLE1BQ3hELFlBRHdELGtCQUN4RCxZQUR3RDtBQUFBLE1BQzFDLEtBRDBDLGtCQUMxQyxLQUQwQztBQUFBLE1BRTFELE1BRjBELEdBRWpELFlBRmlEO0FBQUEsTUFHMUQsSUFIMEQsR0FHbkQsS0FIbUQ7QUFBQSxNQUkxRCxTQUowRCxHQUk5QyxLQUo4QztBQUFBLE1BSzFELE1BTDBELEdBS2pELENBTGlEO0FBQUEsTUFNMUQsTUFOMEQsR0FNakQsQ0FOaUQ7QUFRaEUsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixFQUFnQyxNQUFoQztBQUVBLE9BQUssT0FBTCxDQUFhLG1CQUFiLENBQWlDLGlCQUFqQyxFQUFvRCxVQUFwRCxFQUFnRSxJQUFoRSxFQUFzRSxTQUF0RSxFQUFpRixNQUFqRixFQUF5RixNQUF6RjtBQUVBLE9BQUssT0FBTCxDQUFhLHVCQUFiLENBQXFDLGlCQUFyQztBQUNEOzs7QUNsREQ7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsR0FBRyxHQUFqQjtBQUFBLElBQ00sUUFBUSxHQUFHLEdBRGpCO0FBQUEsSUFFTSxRQUFRLEdBQUcsR0FGakI7QUFBQSxJQUdNLFFBQVEsR0FBRyxHQUhqQjs7QUFLTyxTQUFTLFdBQVQsR0FBNkU7QUFBQSxNQUF4RCxDQUF3RCx1RUFBcEQsUUFBb0Q7QUFBQSxNQUExQyxDQUEwQyx1RUFBdEMsUUFBc0M7QUFBQSxNQUE1QixDQUE0Qix1RUFBeEIsUUFBd0I7QUFBQSxNQUFkLENBQWMsdUVBQVYsUUFBVTtBQUFFLE9BQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakM7QUFBc0M7O0FBRXJILFNBQVMsaUJBQVQsR0FBNkI7QUFDNUIsTUFBRSxnQkFBRixHQUF1QixLQUFLLE9BQTVCLENBQUUsZ0JBQUY7QUFBQSxNQUNBLElBREEsR0FDTyxnQkFEUDtBQUdOLE9BQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsSUFBbkI7QUFDRDs7O0FDZEQ7Ozs7Ozs7O0FBRUEsSUFBTSxZQUFZLEdBQUcsR0FBckI7O0FBRU8sU0FBUyxVQUFULEdBQTBDO0FBQUEsTUFBdEIsS0FBc0IsdUVBQWQsWUFBYztBQUMvQyxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLEtBQXhCO0FBQ0Q7O0FBRU0sU0FBUyxnQkFBVCxHQUE0QjtBQUMzQixNQUFFLGdCQUFGLEdBQXVCLEtBQUssT0FBNUIsQ0FBRSxnQkFBRjtBQUFBLE1BQ0EsSUFEQSxHQUNPLGdCQURQO0FBR04sT0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixJQUFuQjtBQUNEOztBQUVNLFNBQVMsa0JBQVQsR0FBOEI7QUFBQSxzQkFDSixLQUFLLE9BREQ7QUFBQSxNQUMzQixVQUQyQixpQkFDM0IsVUFEMkI7QUFBQSxNQUNmLE1BRGUsaUJBQ2YsTUFEZTtBQUFBLE1BRTdCLFFBRjZCLEdBRWxCLFVBRmtCO0FBQUEsTUFHN0IsdUJBSDZCLEdBR0gsTUFIRztBQUtuQyxPQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFFBQXBCO0FBRUEsT0FBSyxPQUFMLENBQWEsU0FBYixDQUF1Qix1QkFBdkI7QUFDRDs7O0FDdkJEOzs7Ozs7Ozs7QUFFTyxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDO0FBQ2hELFNBQU8sS0FBSyxPQUFMLENBQWEsa0JBQWIsQ0FBZ0MsT0FBaEMsRUFBeUMsSUFBekMsQ0FBUDtBQUNEOztBQUVNLFNBQVMsb0JBQVQsQ0FBOEIsT0FBOUIsRUFBdUMsSUFBdkMsRUFBNkM7QUFDbEQsU0FBTyxLQUFLLE9BQUwsQ0FBYSxpQkFBYixDQUErQixPQUEvQixFQUF3QyxJQUF4QyxDQUFQO0FBQ0Q7O0FBRU0sU0FBUyw4QkFBVCxDQUF3QyxlQUF4QyxFQUF5RCxZQUF6RCxFQUF1RTtBQUM1RSxPQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLGVBQXZCLEVBQXdDLFlBQXhDO0FBQ0Q7OztBQ1pEOzs7Ozs7O0FBRU8sU0FBUyxXQUFULENBQXFCLGVBQXJCLEVBQXNDLE1BQXRDLEVBQThDO0FBQ25ELE1BQU0sU0FBUyxHQUFHLEtBQWxCLENBRG1ELENBQ3pCOztBQUUxQixPQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixlQUE5QixFQUErQyxTQUEvQyxFQUEwRCxNQUExRDtBQUNEOzs7QUNORDs7Ozs7Ozs7QUFFTyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsY0FBckMsRUFBcUQ7QUFDMUQsTUFBTSxPQUFPLEdBQUcsS0FBSyxPQUFMLENBQWEsYUFBYixFQUFoQjtBQUVBLE9BQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBbkM7QUFFQSxPQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLGNBQW5DO0FBRUEsT0FBSyxPQUFMLENBQWEsV0FBYixDQUF5QixPQUF6QjtBQUVBLFNBQU8sT0FBUDtBQUNEOztBQUVNLFNBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QjtBQUNsQyxPQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLE9BQXhCO0FBQ0Q7OztBQ2hCRDs7Ozs7Ozs7O0FBRU8sU0FBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCLFlBQTVCLEVBQTBDO0FBQ3pDLE1BQUUsY0FBRixHQUFxQixLQUFLLE9BQTFCLENBQUUsY0FBRjtBQUFBLE1BQ0EsS0FEQSxHQUNRLGNBRFI7QUFBQSxNQUVBLE1BRkEsR0FFUyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLElBQTFCLENBRlQ7QUFJTixPQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLFlBQWxDO0FBRUEsT0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixNQUEzQjtBQUVBLE1BQU0sYUFBYSxHQUFHLEtBQUssT0FBTCxDQUFhLGtCQUFiLENBQWdDLE1BQWhDLEVBQXdDLEtBQXhDLENBQXRCOztBQUVBLE1BQUksQ0FBQyxhQUFMLEVBQW9CO0FBQ2xCLFVBQU0sSUFBSSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOztBQUVELFNBQU8sTUFBUDtBQUNEOztBQUVNLFNBQVMsa0JBQVQsQ0FBNEIsa0JBQTVCLEVBQWdELE1BQWhELEVBQXdEO0FBQ3ZELE1BQUUsYUFBRixHQUFvQixLQUFLLE9BQXpCLENBQUUsYUFBRjtBQUFBLE1BQ0EsSUFEQSxHQUNPLGFBRFA7QUFBQSxNQUVBLFlBRkEsR0FFZSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0Isa0JBQXhCLENBRmY7QUFJTixTQUFPLFlBQVA7QUFDRDs7QUFFTSxTQUFTLG9CQUFULENBQThCLG9CQUE5QixFQUFvRCxNQUFwRCxFQUE0RDtBQUMzRCxNQUFFLGVBQUYsR0FBc0IsS0FBSyxPQUEzQixDQUFFLGVBQUY7QUFBQSxNQUNBLElBREEsR0FDTyxlQURQO0FBQUEsTUFFQSxjQUZBLEdBRWlCLEtBQUssWUFBTCxDQUFrQixJQUFsQixFQUF3QixvQkFBeEIsQ0FGakI7QUFJTixTQUFPLGNBQVA7QUFDRDs7O0FDbENEOzs7Ozs7OztBQUVPLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixLQUE5QixFQUFxQyxNQUFyQyxFQUE2QztBQUFBLHNCQUNvSCxLQUFLLE9BRHpIO0FBQUEsTUFDM0MsSUFEMkMsaUJBQzNDLElBRDJDO0FBQUEsTUFDckMsTUFEcUMsaUJBQ3JDLE1BRHFDO0FBQUEsTUFDN0IsYUFENkIsaUJBQzdCLGFBRDZCO0FBQUEsTUFDZCxRQURjLGlCQUNkLFFBRGM7QUFBQSxNQUNKLFVBREksaUJBQ0osVUFESTtBQUFBLE1BQ1EsY0FEUixpQkFDUSxjQURSO0FBQUEsTUFDd0IsY0FEeEIsaUJBQ3dCLGNBRHhCO0FBQUEsTUFDd0MsbUJBRHhDLGlCQUN3QyxtQkFEeEM7QUFBQSxNQUM2RCxhQUQ3RCxpQkFDNkQsYUFEN0Q7QUFBQSxNQUM0RSxPQUQ1RSxpQkFDNEUsT0FENUU7QUFBQSxNQUNxRixNQURyRixpQkFDcUYsTUFEckY7QUFBQSxNQUM2RixrQkFEN0YsaUJBQzZGLGtCQUQ3RjtBQUFBLE1BRWhELE1BRmdELEdBRXZDLFFBQVEsR0FBRyxLQUY0QjtBQUFBLE1BR2hELEtBSGdELEdBR3hDLENBSHdDO0FBQUEsTUFJaEQsY0FKZ0QsR0FJL0IsSUFKK0I7QUFBQSxNQUtoRCxNQUxnRCxHQUt2QyxJQUx1QztBQUFBLE1BTWhELElBTmdELEdBTXpDLGFBTnlDO0FBQUEsTUFPaEQsT0FQZ0QsR0FPdEMsS0FBSyxPQUFMLENBQWEsYUFBYixFQVBzQztBQVNsRCxPQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLE1BQTNCO0FBRUEsT0FBSyxPQUFMLENBQWEsV0FBYixDQUF5QixVQUF6QixFQUFxQyxPQUFyQztBQUVBLE9BQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsbUJBQXpCLEVBQThDLElBQTlDO0FBRUEsT0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixVQUF4QixFQUFvQyxLQUFwQyxFQUEyQyxjQUEzQyxFQUEyRCxNQUEzRCxFQUFtRSxJQUFuRSxFQUF5RSxLQUF6RTs7QUFFQSxNQUFJLE1BQUosRUFBWTtBQUNWLFNBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsVUFBM0IsRUFBdUMsY0FBdkMsRUFBdUQsTUFBdkQ7QUFDQSxTQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLFVBQTNCLEVBQXVDLGNBQXZDLEVBQXVELE1BQXZEO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsU0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixVQUEzQixFQUF1QyxjQUF2QyxFQUF1RCxhQUF2RDtBQUNBLFNBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsVUFBM0IsRUFBdUMsY0FBdkMsRUFBdUQsYUFBdkQ7QUFDRDs7QUFFRixPQUFLLE9BQUwsQ0FBYSxhQUFiLENBQTJCLFVBQTNCLEVBQXVDLGtCQUF2QyxFQUEyRCxNQUEzRDtBQUVBLFNBQU8sT0FBUDtBQUNBOztBQUVNLFNBQVMsMEJBQVQsR0FBc0M7QUFDM0MsTUFBTSxTQUFTLEdBQ2IsS0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixnQ0FBMUIsS0FDQSxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLG9DQUExQixDQURBLElBRUEsS0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQix1Q0FBMUIsQ0FIRjs7QUFNQSxNQUFJLFNBQUosRUFBZTtBQUNQLFFBQUUsVUFBRixHQUFpQixLQUFLLE9BQXRCLENBQUUsVUFBRjtBQUFBLFFBQ0UsOEJBREYsR0FDaUUsU0FEakUsQ0FDRSw4QkFERjtBQUFBLFFBQ2tDLDBCQURsQyxHQUNpRSxTQURqRSxDQUNrQywwQkFEbEM7QUFBQSxRQUVBLE9BRkEsR0FFVSxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLDhCQUExQixDQUZWO0FBSU4sU0FBSyxPQUFMLENBQWEsYUFBYixDQUEyQixVQUEzQixFQUF1QywwQkFBdkMsRUFBbUUsT0FBbkU7QUFDRDtBQUNGOzs7QUM5Q0Q7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFcUIsSTtBQUNuQixnQkFBWSxRQUFaLEVBQXNCLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBSyxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBSyxNQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQU0sUUFBUSxHQUFHLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBakI7QUFBQSxVQUNNLE1BQU0sR0FBRyxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBRGY7QUFBQSxVQUVNLElBQUksR0FBRyxJQUFJLElBQUosQ0FBUyxRQUFULEVBQW1CLE1BQW5CLENBRmI7QUFJQSxhQUFPLElBQVA7QUFDRDs7O2dEQUVrQyxLLEVBQU8sVyxFQUFhLFMsRUFBVztBQUNoRSxVQUFJLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixRQUFBLFNBQVMsR0FBRyxXQUFaO0FBQ0EsUUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBLFFBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDs7QUFFRCxVQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsV0FBWixFQUF0QjtBQUFBLFVBQ00sV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFWLEVBRHBCO0FBQUEsVUFFTSxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQWQsRUFGakI7QUFBQSxVQUV3QztBQUNsQyxNQUFBLE1BQU0sR0FBRyx1QkFBVSxXQUFWLEVBQXVCLGFBQXZCLENBSGY7QUFBQSxVQUlNLElBQUksR0FBRyxJQUFJLEtBQUosQ0FBVSxRQUFWLEVBQW9CLE1BQXBCLENBSmI7QUFNQSxhQUFPLElBQVA7QUFDRDs7Ozs7Ozs7O0FDeENIOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFc7Ozs7Ozs7Ozs7Ozs7Z0RBQ1MsZ0IsRUFBa0I7QUFDNUMsTUFBQSxnQkFBZ0IsR0FBRyxrREFBbUMsZ0JBQW5DLENBQW5CLENBRDRDLENBQzhCOztBQUUxRSxVQUFNLE1BQU0sR0FBRyxLQUFLLFNBQUwsRUFBZjtBQUFBLFVBQ00sUUFBUSxHQUFHLEtBQUssV0FBTCxFQURqQjtBQUFBLFVBRU0sd0JBQXdCLEdBQUcsdUJBQVUsZ0JBQVYsRUFBNEIsUUFBNUIsQ0FGakM7QUFBQSxVQUdNLHNCQUFzQixHQUFHLG9CQUFPLE1BQVAsRUFBZSx3QkFBZixDQUgvQjtBQUFBLFVBR3lFO0FBQ25FLE1BQUEsMEJBQTBCLEdBQUcsa0JBQU0sc0JBQU4sQ0FKbkM7QUFBQSxVQUtNLHlCQUF5QixHQUFJLDBCQUEwQixHQUFHLENBTGhFO0FBT0EsYUFBTyx5QkFBUDtBQUNEOzs7aURBRTRCLGdCLEVBQWtCO0FBQzdDLFVBQU0seUJBQXlCLEdBQUcsS0FBSywyQkFBTCxDQUFpQyxnQkFBakMsQ0FBbEM7QUFBQSxVQUNNLDBCQUEwQixHQUFHLENBQUMseUJBRHBDO0FBR0EsYUFBTywwQkFBUDtBQUNEOzs7Z0RBRWtDLFcsRUFBYSxTLEVBQVc7QUFBRSxhQUFPLGlCQUFLLDJCQUFMLENBQWlDLFdBQWpDLEVBQThDLFdBQTlDLEVBQTJELFNBQTNELENBQVA7QUFBK0U7Ozs7RUFyQnJHLGdCOzs7OztBQ1J6Qzs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBS3FCLEs7QUFDbkIsaUJBQVksUUFBWixFQUFzQixNQUF0QixFQUE4QixLQUE5QixFQUFxQztBQUFBOztBQUNuQyxTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLLFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLLEtBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNLGVBQWUsR0FBRyxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLFVBQUMsTUFBRDtBQUFBLGVBQVksTUFBTSxDQUFDLFdBQVAsRUFBWjtBQUFBLE9BQWxCLENBQXhCO0FBRUEsYUFBTyxlQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTSxZQUFZLEdBQUcsS0FBSyxNQUFMLENBQVksU0FBWixFQUFyQjtBQUFBLFVBQ00sWUFBWSxHQUFHLFlBRHJCO0FBQUEsVUFDb0M7QUFDOUIsTUFBQSxhQUFhLEdBQUcsQ0FDZCxZQURjLEVBRWQsWUFGYyxFQUdkLFlBSGMsQ0FGdEI7QUFRQSxhQUFPLGFBQVA7QUFDRDs7O3FDQUVnQixLLEVBQU87QUFDdEIsVUFBTSxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQTVCO0FBQUEsVUFDTSxhQUFhLEdBQUcsQ0FDZCxXQUFXLEdBQUcsQ0FEQSxFQUVkLFdBQVcsR0FBRyxDQUZBLEVBR2QsV0FBVyxHQUFHLENBSEEsQ0FEdEI7QUFPQSxhQUFPLGFBQVA7QUFDRDs7OzZCQUVRLFksRUFBYztBQUNyQixVQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsZUFBYixFQUFyQjtBQUFBLFVBQ00sZ0JBQWdCLEdBQUcseUNBQTBCLEtBQUssUUFBL0IsQ0FEekI7QUFBQSxVQUVNLHVDQUF1QyxHQUFHLHlEQUEwQyxnQkFBMUMsRUFBNEQsWUFBNUQsQ0FGaEQ7QUFBQSxVQUdNLE1BQU0sR0FBRyx1Q0FIZixDQURxQixDQUlvQzs7QUFFekQsYUFBTyxNQUFQO0FBQ0Q7Ozs0QkFFTyxNLEVBQVE7QUFDZCxXQUFLLFFBQUwsR0FBZ0Isb0JBQVEsS0FBSyxRQUFiLEVBQXVCLE1BQXZCLENBQWhCO0FBRUEsV0FBSyxNQUFMLEdBQWMsNEJBQWdCLEtBQUssUUFBckIsRUFBK0Isa0JBQS9CLENBQWQ7QUFFQSxXQUFLLEtBQUwsR0FBYSwyQkFBZSxLQUFLLFFBQXBCLEVBQThCLGdCQUE5QixDQUFiO0FBQ0Q7OzsyQkFFTSxrQixFQUFvQjtBQUN6QixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQUMsTUFBRDtBQUFBLGVBQVksTUFBTSxDQUFDLE1BQVAsQ0FBYyxrQkFBZCxDQUFaO0FBQUEsT0FBdEI7QUFFQSxXQUFLLE1BQUwsR0FBYyw0QkFBZ0IsS0FBSyxRQUFyQixFQUErQixrQkFBL0IsQ0FBZDtBQUVBLFdBQUssS0FBTCxHQUFhLDJCQUFlLEtBQUssUUFBcEIsRUFBOEIsZ0JBQTlCLENBQWI7QUFDRDs7O21DQUVjLFMsRUFBVztBQUN4QixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQUMsTUFBRDtBQUFBLGVBQVksTUFBTSxDQUFDLGNBQVAsQ0FBc0IsU0FBdEIsQ0FBWjtBQUFBLE9BQXRCO0FBRUEsV0FBSyxNQUFMLEdBQWMsNEJBQWdCLEtBQUssUUFBckIsRUFBK0Isa0JBQS9CLENBQWQ7QUFFQSxXQUFLLEtBQUwsR0FBYSwyQkFBZSxLQUFLLFFBQXBCLEVBQThCLGdCQUE5QixDQUFiO0FBQ0Q7OzsyQ0FFc0IsYSxFQUFlLGEsRUFBZTtBQUNuRCxVQUFNLG9CQUFvQixHQUFHLGlEQUE4QixhQUE5QixDQUE3QjtBQUFBLFVBQ00sMEJBQTBCLEdBQUcsb0JBQW9CLENBQUMsTUFEeEQ7O0FBR0EsY0FBUSwwQkFBUjtBQUNFLGFBQUssQ0FBTDtBQUNFLGVBQUssZ0NBQUwsQ0FBc0MsYUFBdEMsRUFBcUQsYUFBckQ7QUFDQTs7QUFFRixhQUFLLENBQUw7QUFDRSxlQUFLLCtCQUFMLENBQXFDLGFBQXJDLEVBQW9ELGFBQXBEO0FBQ0E7O0FBRUYsYUFBSyxDQUFMO0FBQ0UsZUFBSywrQkFBTCxDQUFxQyxhQUFyQyxFQUFvRCxhQUFwRDtBQUNBO0FBWEo7QUFhRDs7O3FEQUVnQyxhLEVBQWUsYSxFQUFlO0FBQzdELFVBQU0scUJBQXFCLEdBQUcsa0RBQStCLGFBQS9CLENBQTlCO0FBQUEsVUFDTSxNQUFNLEdBQUcsQ0FBQyw2QkFBa0IscUJBQW5CLElBQTRDLDBCQUQzRDtBQUdBLE1BQUEsYUFBYSxHQUFHLG9CQUFRLGFBQVIsRUFBdUIsTUFBdkIsQ0FBaEI7QUFFQSxNQUFBLGFBQWEsR0FBRyxhQUFhLENBQUMsS0FBZCxDQUFvQixDQUFwQixDQUFoQixDQU42RCxDQU1yQjs7QUFFeEMsV0FBSyxPQUFMLENBQWEsTUFBYjtBQUVBLFVBQU0sMEJBQTBCLEdBQUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFuQztBQUFBLFVBQ00sd0JBQXdCLEdBQUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQURqQztBQUFBLFVBRU0sV0FBVyxHQUFHLENBRVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGWSxFQUdaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSFksRUFJWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUpZLENBRnBCO0FBVUEsV0FBSyxvQ0FBTCxDQUEwQywwQkFBMUMsRUFBc0Usd0JBQXRFLEVBQWdHLFdBQWhHLEVBQTZHLGFBQTdHLEVBQTRILGFBQTVIO0FBQ0Q7OztvREFFK0IsYSxFQUFlLGEsRUFBZTtBQUM1RCxVQUFNLHdCQUF3QixHQUFHLHFEQUFrQyxhQUFsQyxDQUFqQztBQUFBLFVBQ00sTUFBTSxHQUFHLENBQUMsNkJBQWtCLHdCQUFuQixJQUErQywwQkFEOUQ7QUFHQSxNQUFBLGFBQWEsR0FBRyxvQkFBUSxhQUFSLEVBQXVCLE1BQXZCLENBQWhCO0FBRUEsTUFBQSxhQUFhLEdBQUcsYUFBYSxDQUFDLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBaEIsQ0FONEQsQ0FNaEI7O0FBRTVDLFdBQUssT0FBTCxDQUFhLE1BQWI7QUFFQSxVQUFNLDBCQUEwQixHQUFHLENBQUUsQ0FBRixDQUFuQztBQUFBLFVBQ00sd0JBQXdCLEdBQUcsQ0FBRSxDQUFGLENBRGpDO0FBQUEsVUFFTSxXQUFXLEdBQUcsQ0FFWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUZZLEVBR1osQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FIWSxDQUZwQjtBQVNBLFdBQUssb0NBQUwsQ0FBMEMsMEJBQTFDLEVBQXNFLHdCQUF0RSxFQUFnRyxXQUFoRyxFQUE2RyxhQUE3RyxFQUE0SCxhQUE1SDtBQUNEOzs7b0RBRStCLGEsRUFBZSxhLEVBQWU7QUFDNUQsVUFBTSxZQUFZLEdBQUcsS0FBSyxZQUFMLENBQWtCLEtBQUssUUFBdkIsQ0FBckIsQ0FENEQsQ0FDSjs7QUFFeEQsTUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQixZQUFuQjtBQUNEOzs7eURBRW9DLDBCLEVBQTRCLHdCLEVBQTBCLFcsRUFBYSxhLEVBQWUsYSxFQUFlO0FBQUE7O0FBQ3BJLFVBQU0sZUFBZSxHQUFHLEtBQUssa0JBQUwsRUFBeEI7QUFBQSxVQUNNLDJCQUEyQixHQUFHLGFBQWEsQ0FBQyxHQUFkLENBQWtCLFVBQUMsWUFBRCxFQUFlLEtBQWYsRUFBeUI7QUFDdkUsWUFBTSx3QkFBd0IsR0FBRywwQkFBMEIsQ0FBQyxLQUFELENBQTNEO0FBQUEsWUFDTSxzQkFBc0IsR0FBRyx3QkFBd0IsQ0FBQyxLQUFELENBRHZEO0FBQUEsWUFFTSxtQkFBbUIsR0FBRyxlQUFlLENBQUMsd0JBQUQsQ0FGM0M7QUFBQSxZQUdNLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxzQkFBRCxDQUh6QztBQUFBLFlBSU0sMEJBQTBCLEdBQUcsdURBQW9DLG1CQUFwQyxFQUF5RCxpQkFBekQsRUFBNEUsWUFBNUUsQ0FKbkM7QUFNQSxlQUFPLDBCQUFQO0FBQ0QsT0FSNkIsQ0FEcEM7QUFXQSx1QkFBSyxlQUFMLEVBQXNCLDJCQUF0QjtBQUVBLE1BQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsVUFBQyxVQUFELEVBQWdCO0FBQ2xDLFlBQU0sU0FBUyxHQUFHLGVBQWxCO0FBQUEsWUFBb0M7QUFDOUIsUUFBQSxPQUFPLEdBQUcsVUFEaEI7QUFBQSxZQUM2QjtBQUN2QixRQUFBLEtBQUssR0FBRyxLQUZkO0FBQUEsWUFHTSxZQUFZLEdBQUcsd0NBQXdDLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsS0FBckIsQ0FIN0Q7O0FBS0EsWUFBSSxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekIsVUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQixZQUFuQjtBQUNEO0FBQ0YsT0FURDtBQVVEOzs7Ozs7OztBQUdILFNBQVMsd0NBQVQsQ0FBa0QsU0FBbEQsRUFBNkQsT0FBN0QsRUFBc0UsS0FBdEUsRUFBNkU7QUFDM0UsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFDLEtBQUQsRUFBVztBQUNoQyxRQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBRCxDQUF4QjtBQUVBLElBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFULEVBQVgsQ0FIZ0MsQ0FHSDs7QUFFN0IsUUFBTSxNQUFNLEdBQUcsbUJBQU8sWUFBUCxDQUFvQixRQUFwQixDQUFmOztBQUVBLFdBQU8sTUFBUDtBQUNELEdBUlUsQ0FBakI7QUFBQSxNQVNNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBTixDQUFtQixRQUFuQixDQVRyQjtBQVdBLFNBQU8sWUFBUDtBQUNEOzs7QUM5TUQ7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7QUFDbkIseUJBQVksUUFBWixFQUFzQixNQUF0QixFQUE4QixLQUE5QixFQUFxQyxJQUFyQyxFQUEyQztBQUFBOztBQUFBOztBQUN6Qyw4QkFBTSxRQUFOLEVBQWdCLE1BQWhCLEVBQXdCLEtBQXhCO0FBRUEsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUh5QztBQUkxQzs7Ozs0QkFFTztBQUNOLFVBQUksUUFBUSxHQUFHLEtBQUssV0FBTCxFQUFmO0FBQUEsVUFDSSxNQUFNLEdBQUcsS0FBSyxTQUFMLEVBRGI7QUFBQSxVQUVJLEtBQUssR0FBRyxLQUFLLFFBQUwsRUFGWjtBQUlBLE1BQUEsUUFBUSxHQUFHLDJCQUFjLFFBQWQsQ0FBWDtBQUNBLE1BQUEsTUFBTSxHQUFHLHlCQUFZLE1BQVosQ0FBVDtBQUNBLE1BQUEsS0FBSyxHQUFHLHdCQUFXLEtBQVgsQ0FBUjtBQUVBLFVBQU0sSUFBSSxHQUFHLEtBQUssSUFBbEI7QUFBQSxVQUNNLGFBQWEsR0FBRyxJQUFJLGFBQUosQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEMsRUFBMkMsSUFBM0MsQ0FEdEI7QUFHQSxhQUFPLGFBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNLFlBQVksR0FBRyxLQUFLLElBQTFCO0FBQUEsVUFBZ0M7QUFDMUIsTUFBQSxhQUFhLEdBQUcsQ0FDZCxZQURjLEVBRWQsWUFGYyxFQUdkLFlBSGMsQ0FEdEI7QUFPQSxhQUFPLGFBQVA7QUFDRDs7O2lDQUVZLFEsRUFBVTtBQUNyQixVQUFJLGFBQWEsR0FBRyxJQUFwQjtBQUVBLFVBQU0sSUFBSSxHQUFHLDJCQUFjLFFBQWQsQ0FBYjtBQUFBLFVBQ00sNEJBQTRCLEdBQUcsNkNBQTJCLElBQTNCLENBRHJDO0FBQUEsVUFFTSxXQUFXLEdBQUcsQ0FBQyw0QkFGckIsQ0FIcUIsQ0FLK0I7O0FBRXBELFVBQUksV0FBSixFQUFpQjtBQUNmLFlBQU0sSUFBSSxHQUFHLEtBQUssSUFBbEI7QUFBQSxZQUNNLE1BQU0sR0FBRyw2QkFBZ0IsUUFBaEIsRUFBMEIsa0JBQTFCLENBRGY7QUFBQSxZQUVNLEtBQUssR0FBRyw0QkFBZSxRQUFmLEVBQXlCLGdCQUF6QixDQUZkO0FBSUEsUUFBQSxhQUFhLEdBQUcsSUFBSSxhQUFKLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDLEVBQTJDLElBQTNDLENBQWhCO0FBQ0Q7O0FBRUQsYUFBTyxhQUFQO0FBQ0Q7Ozs0REFFOEMsZ0IsRUFBa0IsVSxFQUFZLE0sRUFBUTtBQUNuRixVQUFJLGFBQWEsR0FBRyxJQUFwQjtBQUVBLFVBQU0sUUFBUSxHQUFHLHlEQUEwQyxnQkFBMUMsRUFBNEQsVUFBNUQsRUFBd0Usa0JBQXhFLENBQWpCO0FBQUEsVUFDTSxJQUFJLEdBQUcsMkJBQWMsUUFBZCxDQURiO0FBQUEsVUFFTSw0QkFBNEIsR0FBRyw2Q0FBMkIsSUFBM0IsQ0FGckM7QUFBQSxVQUdNLFdBQVcsR0FBRyxDQUFDLDRCQUhyQixDQUhtRixDQU0vQjs7QUFFcEQsVUFBSSxXQUFKLEVBQWlCO0FBQ2YsWUFBTSxNQUFNLEdBQUcsNkJBQWdCLFFBQWhCLEVBQTBCLGtCQUExQixDQUFmO0FBQUEsWUFDTSxLQUFLLEdBQUcsNEJBQWUsUUFBZixFQUF5QixnQkFBekIsQ0FEZDtBQUFBLFlBRU0sSUFBSSxnQ0FBUSxNQUFSLElBQWdCLENBQWhCLEVBRlYsQ0FEZSxDQUdpQjs7QUFFaEMsUUFBQSxhQUFhLEdBQUcsSUFBSSxhQUFKLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDLEVBQTJDLElBQTNDLENBQWhCO0FBQ0Q7O0FBRUQsYUFBTyxhQUFQO0FBQ0Q7Ozs7RUFwRXdDLGlCOzs7OztBQ1gzQzs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7QUFDbkIseUJBQVksUUFBWixFQUFzQixNQUF0QixFQUE4QixLQUE5QixFQUFxQyxTQUFyQyxFQUFnRCx1QkFBaEQsRUFBeUU7QUFBQTs7QUFBQTs7QUFDdkUsOEJBQU0sUUFBTixFQUFnQixNQUFoQixFQUF3QixLQUF4QjtBQUVBLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUVBLFVBQUssdUJBQUwsR0FBK0IsdUJBQS9CO0FBTHVFO0FBTXhFOzs7OzRCQUVPO0FBQ04sVUFBSSxRQUFRLEdBQUcsS0FBSyxXQUFMLEVBQWY7QUFBQSxVQUNJLE1BQU0sR0FBRyxLQUFLLFNBQUwsRUFEYjtBQUFBLFVBRUksS0FBSyxHQUFHLEtBQUssUUFBTCxFQUZaO0FBSUEsTUFBQSxRQUFRLEdBQUcsMkJBQWMsUUFBZCxDQUFYO0FBQ0EsTUFBQSxNQUFNLEdBQUcseUJBQVksTUFBWixDQUFUO0FBQ0EsTUFBQSxLQUFLLEdBQUcsd0JBQVcsS0FBWCxDQUFSO0FBRUEsVUFBTSxTQUFTLEdBQUcsS0FBSyxTQUF2QjtBQUFBLFVBQWtDO0FBQzVCLE1BQUEsdUJBQXVCLEdBQUcsMkNBQTZCLEtBQUssdUJBQWxDLENBRGhDO0FBQUEsVUFFTSxhQUFhLEdBQUcsSUFBSSxhQUFKLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDLEVBQTJDLFNBQTNDLEVBQXNELHVCQUF0RCxDQUZ0QjtBQUlBLGFBQU8sYUFBUDtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUssU0FBWjtBQUNEOzs7aURBRTRCO0FBQzNCLGFBQU8sS0FBSyx1QkFBWjtBQUNEOzs7cURBRWdDLFksRUFBYztBQUM3QyxVQUFNLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxTQUFOLENBQXpCO0FBQUEsVUFDTSxNQUFNLEdBQUcsSUFEZjtBQUFBLFVBQ3NCO0FBQ2hCLE1BQUEsNkJBQTZCLEdBQUcscURBQXVDLEtBQUssdUJBQTVDLEVBQXFFLE1BQXJFLENBRnRDO0FBSUEsYUFBTyw2QkFBUDtBQUNEOzs7NEJBRU8sTSxFQUFRO0FBQ2QsaUZBQWMsTUFBZDs7QUFFQSxXQUFLLHVCQUFMLEdBQStCLG9CQUFRLEtBQUssdUJBQWIsRUFBc0MsTUFBdEMsQ0FBL0I7QUFDRDs7O2lDQUVZLFEsRUFBVTtBQUNyQixVQUFJLGFBQWEsR0FBRyxJQUFwQjtBQUVBLFVBQU0sSUFBSSxHQUFHLDJCQUFjLFFBQWQsQ0FBYjtBQUFBLFVBQ00sNEJBQTRCLEdBQUcsNkNBQTJCLElBQTNCLENBRHJDO0FBQUEsVUFFTSxXQUFXLEdBQUcsQ0FBQyw0QkFGckIsQ0FIcUIsQ0FLK0I7O0FBRXBELFVBQUksV0FBSixFQUFpQjtBQUNmLFlBQU0sTUFBTSxHQUFHLDZCQUFnQixRQUFoQixFQUEwQixrQkFBMUIsQ0FBZjtBQUFBLFlBQ00sY0FBYyxHQUFHLEtBQUssUUFENUI7QUFBQSxZQUNzQztBQUNoQyxRQUFBLDhCQUE4QixHQUFHLHVEQUF5QyxRQUF6QyxFQUFtRCxNQUFuRCxFQUEyRCxjQUEzRCxFQUEyRSxLQUFLLHVCQUFoRixDQUZ2QztBQUFBLFlBR00sS0FBSyxHQUFHLDRCQUFlLFFBQWYsRUFBeUIsZ0JBQXpCLENBSGQ7QUFBQSxZQUlNLFNBQVMsR0FBRyxLQUFLLFNBSnZCO0FBQUEsWUFLTSx1QkFBdUIsR0FBRyw4QkFMaEMsQ0FEZSxDQU1rRDs7QUFFakUsUUFBQSxhQUFhLEdBQUcsSUFBSSxhQUFKLENBQWtCLFFBQWxCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDLEVBQTJDLFNBQTNDLEVBQXNELHVCQUF0RCxDQUFoQjtBQUNEOztBQUVELGFBQU8sYUFBUDtBQUNEOzs7dUZBRXlFLHVCLEVBQXlCLGdCLEVBQWtCLFUsRUFBWSxTLEVBQVc7QUFDMUksVUFBSSxhQUFhLEdBQUcsSUFBcEI7QUFFQSxVQUFNLFFBQVEsR0FBRyx5REFBMEMsZ0JBQTFDLEVBQTRELFVBQTVELEVBQXdFLGtCQUF4RSxDQUFqQjtBQUFBLFVBQ00sSUFBSSxHQUFHLDJCQUFjLFFBQWQsQ0FEYjtBQUFBLFVBRU0sNEJBQTRCLEdBQUcsNkNBQTJCLElBQTNCLENBRnJDO0FBQUEsVUFHTSxXQUFXLEdBQUcsQ0FBQyw0QkFIckIsQ0FIMEksQ0FNdEY7O0FBRXBELFVBQUksV0FBSixFQUFpQjtBQUNmLFlBQU0sTUFBTSxHQUFHLDZCQUFnQixRQUFoQixFQUEwQixrQkFBMUIsQ0FBZjtBQUFBLFlBQ00sS0FBSyxHQUFHLDRCQUFlLFFBQWYsRUFBeUIsZ0JBQXpCLENBRGQ7QUFHQSxRQUFBLGFBQWEsR0FBRyxJQUFJLGFBQUosQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEMsRUFBMkMsU0FBM0MsRUFBc0QsdUJBQXRELENBQWhCO0FBQ0Q7O0FBRUQsYUFBTyxhQUFQO0FBQ0Q7Ozs7RUFwRndDLGlCOzs7OztBQ2IzQzs7Ozs7OztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCLFk7QUFDbkIsd0JBQVksWUFBWixFQUEwQixhQUExQixFQUF5QywwQkFBekMsRUFBcUUsMkJBQXJFLEVBQWtHO0FBQUE7O0FBQ2hHLFNBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLFNBQUssYUFBTCxHQUFxQixhQUFyQjtBQUNBLFNBQUssMEJBQUwsR0FBa0MsMEJBQWxDO0FBQ0EsU0FBSywyQkFBTCxHQUFtQywyQkFBbkM7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLLFlBQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUssYUFBWjtBQUNEOzs7b0RBRStCO0FBQzlCLGFBQU8sS0FBSywwQkFBWjtBQUNEOzs7cURBRWdDO0FBQy9CLGFBQU8sS0FBSywyQkFBWjtBQUNEOzs7OEJBRVMsSyxFQUFPLGMsRUFBZ0I7QUFBQTs7QUFDL0IsVUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQU4sRUFBdEIsQ0FEK0IsQ0FDTzs7QUFFdEMsTUFBQSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQUssMEJBQWxCO0FBRUEsVUFBTSxZQUFZLEdBQUcsSUFBckI7QUFBQSxVQUE0QjtBQUN0QixNQUFBLGFBQWEsR0FBRyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FEdEI7QUFBQSxVQUVNLG1CQUFtQixHQUFHLEVBRjVCO0FBQUEsVUFHTSxxQkFBcUIsR0FBRyxFQUg5QjtBQUtBLDJCQUFTLGFBQVQsRUFBd0IsbUJBQXhCLEVBQTZDLHFCQUE3QyxFQUFvRSxVQUFDLFlBQUQsRUFBa0I7QUFDcEYsWUFBTSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsUUFBYixDQUFzQixZQUF0QixDQUEzQjtBQUVBLGVBQU8sa0JBQVA7QUFDRCxPQUpEO0FBTUEsVUFBTSx5QkFBeUIsR0FBRyxtQkFBbUIsQ0FBQyxNQUF0RDs7QUFFQSxVQUFJLHlCQUF5QixLQUFLLENBQWxDLEVBQXFDO0FBQ25DLFFBQUEsY0FBYyxDQUFDLElBQWYsQ0FBb0IsYUFBcEI7QUFDRCxPQUZELE1BRU87QUFDTCxRQUFBLHFCQUFxQixDQUFDLE9BQXRCLENBQThCLFVBQUMsb0JBQUQsRUFBMEI7QUFDdEQsVUFBQSxvQkFBb0IsQ0FBQyxNQUFyQixDQUE0QixLQUFJLENBQUMsMkJBQWpDO0FBQ0QsU0FGRDtBQUlBLHlCQUFLLGNBQUwsRUFBcUIscUJBQXJCO0FBQ0Q7QUFDRjs7OytCQUVVLEssRUFBTztBQUNoQixVQUFJLE1BQU0sR0FBRyxDQUNQLEtBRE8sQ0FBYjtBQUFBLFVBR0ksYUFBYSxHQUFHLE1BSHBCLENBRGdCLENBSVk7O0FBRTVCLFdBQUssYUFBTCxDQUFtQixPQUFuQixDQUEyQixVQUFDLFlBQUQsRUFBa0I7QUFDM0MsUUFBQSxhQUFhLEdBQUcsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsTUFBekIsQ0FBaEI7QUFFQSxRQUFBLE1BQU0sR0FBRyxhQUFULENBSDJDLENBR25CO0FBQ3pCLE9BSkQ7QUFNQSxhQUFPLGFBQVA7QUFDRDs7OzhCQUVnQixLLEVBQU87QUFDdEIsVUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQU4sRUFBcEI7QUFBQSxVQUNNLGFBQWEsR0FBRyxLQUFLLENBQUMsV0FBTixFQUR0QjtBQUFBLFVBRU0sTUFBTSxHQUFHLFdBRmY7QUFBQSxVQUU0QjtBQUN0QixNQUFBLDJCQUEyQixHQUFHLHNEQUFxQyxNQUFyQyxDQUhwQztBQUFBLFVBSU0sa0JBQWtCLEdBQUcsMkJBSjNCO0FBQUEsVUFJd0Q7QUFDbEQsTUFBQSxRQUFRLEdBQUcsOEJBQWUsYUFBZixFQUE4QixrQkFBOUIsQ0FMakI7QUFBQSxVQU1NLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxRQUFELENBTjFDO0FBQUEsVUFPTSxhQUFhLEdBQUcsWUFBWSxDQUFDLEdBQWIsQ0FBaUIsVUFBQyxXQUFELEVBQWlCO0FBQ2hELFlBQU0sWUFBWSxHQUFHLHlCQUFhLGVBQWIsQ0FBNkIsV0FBN0IsQ0FBckI7O0FBRUEsZUFBTyxZQUFQO0FBQ0QsT0FKZSxDQVB0QjtBQUFBLFVBWU0sMEJBQTBCLEdBQUcscURBQW9DLGtCQUFwQyxDQVpuQztBQUFBLFVBYU0sMkJBQTJCLEdBQUcsc0RBQXFDLGtCQUFyQyxDQWJwQztBQUFBLFVBY00sWUFBWSxHQUFHLElBQUksWUFBSixDQUFpQixZQUFqQixFQUErQixhQUEvQixFQUE4QywwQkFBOUMsRUFBMEUsMkJBQTFFLENBZHJCO0FBZ0JBLGFBQU8sWUFBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVMscUJBQVQsQ0FBK0IsUUFBL0IsRUFBeUM7QUFDdkMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEdBQVQsQ0FBYSxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQzdDLFFBQU0sVUFBVSxHQUFHLEtBQW5CO0FBQUEsUUFDTSxRQUFRLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBZCxJQUFtQiwwQkFEcEM7QUFBQSxRQUVNLFdBQVcsR0FBRyxRQUFRLENBQUMsVUFBRCxDQUY1QjtBQUFBLFFBR00sU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFELENBSDFCO0FBQUEsUUFJTSxXQUFXLEdBQUcsb0JBQVksMkJBQVosQ0FBd0MsV0FBeEMsRUFBcUQsU0FBckQsQ0FKcEI7O0FBTUEsV0FBTyxXQUFQO0FBQ0QsR0FSYyxDQUFyQjtBQVVBLFNBQU8sWUFBUDtBQUNEOzs7QUMvR0Q7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7SUFFcUIsTTtBQUNuQixrQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLE1BQU4sQ0FBMUI7QUFBQSxVQUNNLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVyxNQUFYLENBRGY7QUFHQSxhQUFPLE1BQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLLE1BQVo7QUFDRDs7O2lDQUVtQixRLEVBQVU7QUFDNUIsVUFBTSxXQUFXLEdBQUcsa0JBQU0sUUFBTixDQUFwQjtBQUFBLFVBQ00sWUFBWSxHQUFHLG1CQUFPLFFBQVAsQ0FEckI7QUFBQSxVQUVNLFdBQVcsR0FBRyxrQkFBTSxRQUFOLENBRnBCO0FBQUEsVUFHTSxhQUFhLEdBQUcsV0FBVyxDQUFDLFdBQVosRUFIdEI7QUFBQSxVQUlNLGNBQWMsR0FBRyxZQUFZLENBQUMsV0FBYixFQUp2QjtBQUFBLFVBS00sYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFaLEVBTHRCO0FBQUEsVUFNTSxXQUFXLEdBQUcsdUJBQVUsY0FBVixFQUEwQixhQUExQixDQU5wQjtBQUFBLFVBT00sWUFBWSxHQUFHLHVCQUFVLGFBQVYsRUFBeUIsYUFBekIsQ0FQckI7QUFBQSxVQVFNLE1BQU0sR0FBRyx3QkFBVyxvQkFBTyxXQUFQLEVBQW9CLFlBQXBCLENBQVgsQ0FSZjtBQUFBLFVBU00sTUFBTSxHQUFHLElBQUksTUFBSixDQUFXLE1BQVgsQ0FUZjtBQVdBLGFBQU8sTUFBUDtBQUNEOzs7Ozs7OztBQUdILFNBQVMsV0FBVCxDQUFxQixNQUFyQixFQUE2QjtBQUFFLFNBQU8sTUFBTSxDQUFDLEtBQVAsRUFBUDtBQUF3Qjs7O0FDckN2RDs7Ozs7OztBQUVBOzs7Ozs7OztJQUVxQixNO0FBQ25CLGtCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUssUUFBWjtBQUNEOzs7NEJBRU87QUFDTixVQUFNLFFBQVEsR0FBRyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQWpCO0FBQUEsVUFBd0M7QUFDbEMsTUFBQSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxDQURmO0FBR0EsYUFBTyxNQUFQO0FBQ0Q7OzsyQkFFTSxrQixFQUFvQjtBQUN6QixXQUFLLFFBQUwsR0FBZ0IsOEJBQWUsS0FBSyxRQUFwQixFQUE4QixrQkFBOUIsQ0FBaEI7QUFDRDs7O21DQUVjLFMsRUFBVztBQUN4QixXQUFLLFFBQUwsR0FBZ0IsU0FBUyxDQUFDLEtBQUssUUFBTixDQUF6QjtBQUNEOzs7aUNBRW1CLFEsRUFBVTtBQUM1QixVQUFNLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVyxRQUFYLENBQWY7QUFFQSxhQUFPLE1BQVA7QUFDRDs7O3dDQUUwQixlLEVBQWlCO0FBQzFDLFVBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxLQUFoQixFQUFqQjtBQUFBLFVBQTBDO0FBQ3BDLE1BQUEsTUFBTSxHQUFHLElBQUksTUFBSixDQUFXLFFBQVgsQ0FEZjtBQUdBLGFBQU8sTUFBUDtBQUNEOzs7Ozs7Ozs7QUN2Q0g7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFcUIsWTtBQUNuQix3QkFBWSxzQkFBWixFQUFvQywwQkFBcEMsRUFBZ0UsMkJBQWhFLEVBQTZGO0FBQUE7O0FBQzNGLFNBQUssc0JBQUwsR0FBOEIsc0JBQTlCO0FBQ0EsU0FBSywwQkFBTCxHQUFrQywwQkFBbEM7QUFDQSxTQUFLLDJCQUFMLEdBQW1DLDJCQUFuQztBQUNEOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUssc0JBQVo7QUFDRDs7O29EQUUrQjtBQUM5QixhQUFPLEtBQUssMEJBQVo7QUFDRDs7O3FEQUVnQztBQUMvQixhQUFPLEtBQUssMkJBQVo7QUFDRDs7OytCQUVVLEssRUFBTyxhLEVBQWU7QUFBQTs7QUFDL0IsVUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQU4sRUFBZDtBQUFBLFVBQ00sYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFOLENBQVUsVUFBQyxJQUFELEVBQVU7QUFDbEMsWUFBTSxZQUFZLEdBQUcseUNBQXNCLElBQXRCLEVBQTRCLEtBQUksQ0FBQyxzQkFBakMsQ0FBckI7QUFFQSxlQUFPLFlBQVA7QUFDRCxPQUplLENBRHRCO0FBT0EsTUFBQSxLQUFLLENBQUMsc0JBQU4sQ0FBNkIsYUFBN0IsRUFBNEMsYUFBNUM7QUFDRDs7O2dDQUVXLE0sRUFBUTtBQUFBOztBQUNsQixVQUFNLGFBQWEsR0FBRyxFQUF0QjtBQUVBLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFDLEtBQUQsRUFBVztBQUN4QixRQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsTUFBSSxDQUFDLDBCQUFsQjs7QUFFQSxRQUFBLE1BQUksQ0FBQyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLGFBQXZCO0FBQ0QsT0FKRDtBQU1BLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsVUFBQyxZQUFEO0FBQUEsZUFBa0IsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsTUFBSSxDQUFDLDJCQUF6QixDQUFsQjtBQUFBLE9BQXRCO0FBRUEsYUFBTyxhQUFQO0FBQ0Q7OztvQ0FFc0IsVyxFQUFhO0FBQ2xDLFVBQU0sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLFdBQVosRUFBNUI7QUFBQSxVQUNNLDRCQUE0QixHQUFHLHVEQUFzQyxXQUF0QyxDQURyQztBQUFBLFVBRU0sa0JBQWtCLEdBQUcsNEJBRjNCO0FBQUEsVUFFMEQ7QUFDcEQsTUFBQSwwQkFBMEIsR0FBRyxxREFBb0Msa0JBQXBDLENBSG5DO0FBQUEsVUFJTSwyQkFBMkIsR0FBRyxzREFBcUMsa0JBQXJDLENBSnBDO0FBQUEsVUFLTSxRQUFRLEdBQUcsOEJBQWUsbUJBQWYsRUFBb0Msa0JBQXBDLENBTGpCO0FBQUEsVUFNTSxrQkFBa0IsR0FBRyxRQU4zQjtBQUFBLFVBTXFDO0FBQy9CLE1BQUEsc0JBQXNCLEdBQUcsa0JBQU0sa0JBQU4sQ0FQL0I7QUFBQSxVQVFNLFlBQVksR0FBRyxJQUFJLFlBQUosQ0FBaUIsc0JBQWpCLEVBQXlDLDBCQUF6QyxFQUFxRSwyQkFBckUsQ0FSckI7QUFVQSxhQUFPLFlBQVA7QUFDRDs7Ozs7Ozs7O0FDL0RIOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsVUFBdEMsRUFBb0U7QUFBQSxvQ0FBZixhQUFlO0FBQWYsSUFBQSxhQUFlO0FBQUE7O0FBQ2xFLEVBQUEsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUEzQixDQURrRSxDQUNsQzs7QUFFaEMsRUFBQSxhQUFhLEdBQUcsb0JBQVEsYUFBUixDQUFoQixDQUhrRSxDQUcxQjs7QUFFeEMsTUFBSSxPQUFKOztBQUVBLE1BQUksWUFBWSxDQUFDLGFBQUQsRUFBZ0IsbUJBQWhCLENBQWhCLEVBQTBDO0FBQ3hDLFFBQU0sS0FBSyxHQUFHLGFBQWQsQ0FEd0MsQ0FDVjs7QUFFOUIsSUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLFVBQWQsRUFBMEI7QUFDeEIsTUFBQSxhQUFhLEVBQWI7QUFEd0IsS0FBMUI7QUFJQSxJQUFBLE9BQU8sR0FBRyxLQUFLLENBQUMsY0FBTixDQUFxQixVQUFyQixDQUFWO0FBQ0QsR0FSRCxNQVFPLElBQUksT0FBTyxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQzlDLFFBQU0sSUFBSSxHQUFHLGFBQWI7QUFBQSxRQUE2QjtBQUN2QixJQUFBLGNBQWEsR0FBRyxzQkFBVSxJQUFJLENBQUMsVUFBRCxDQUFkLENBRHRCOztBQUdBLElBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkLEVBQTBCO0FBQ3hCLE1BQUEsYUFBYSxFQUFiO0FBRHdCLEtBQTFCO0FBSUEsSUFBQSxPQUFPLEdBQUcscUJBQXNCLGNBQXRCLENBQXFDLFVBQXJDLENBQVY7QUFDRDs7QUFFRCxTQUFPLE9BQVA7QUFDRDs7ZUFFYztBQUNiLEVBQUEsYUFBYSxFQUFiO0FBRGEsQzs7O0FBSWYsU0FBUyxZQUFULENBQXNCLFFBQXRCLEVBQWdDLEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUksTUFBTSxHQUFHLEtBQWI7O0FBRUEsTUFBSSxRQUFRLENBQUMsSUFBVCxLQUFrQixLQUFLLENBQUMsSUFBNUIsRUFBa0M7QUFBRTtBQUNsQyxJQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsSUFBQSxRQUFRLEdBQUcsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJLFFBQUosRUFBYztBQUNaLE1BQUEsTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFELEVBQVcsS0FBWCxDQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxNQUFQO0FBQ0Q7OztBQ3RERDs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxXQUFaLEMsQ0FBa0I7O0lBRUcsUTtBQUNuQixvQkFBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCLFlBQTdCLEVBQTJDLGVBQTNDLEVBQTRELGdCQUE1RCxFQUE4RSxrQkFBOUUsRUFBa0c7QUFBQTs7QUFDaEcsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsZUFBdkI7QUFDQSxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QjtBQUNBLFNBQUssa0JBQUwsR0FBMEIsa0JBQTFCO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUssT0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBSyxZQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLLGVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUssZ0JBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUssa0JBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLLFlBQUwsQ0FBa0IsUUFBbEIsRUFBUDtBQUFzQzs7O3NEQUVqQjtBQUFFLGFBQU8sS0FBSyxnQkFBTCxDQUFzQiwrQkFBdEIsRUFBUDtBQUFpRTs7O3NEQUVuRTtBQUFFLGFBQU8sS0FBSyxnQkFBTCxDQUFzQiwrQkFBdEIsRUFBUDtBQUFpRTs7O3VEQUVsRTtBQUFFLGFBQU8sS0FBSyxnQkFBTCxDQUFzQixnQ0FBdEIsRUFBUDtBQUFrRTs7O3dEQUVuRTtBQUFFLGFBQU8sS0FBSyxnQkFBTCxDQUFzQixpQ0FBdEIsRUFBUDtBQUFtRTs7O3lEQUVwRTtBQUFFLGFBQU8sS0FBSyxnQkFBTCxDQUFzQixrQ0FBdEIsRUFBUDtBQUFvRTs7O3lEQUV0RTtBQUFFLGFBQU8sS0FBSyxrQkFBTCxDQUF3QixrQ0FBeEIsRUFBUDtBQUFzRTs7O3VEQUUxRTtBQUFFLGFBQU8sS0FBSyxrQkFBTCxDQUF3QixnQ0FBeEIsRUFBUDtBQUFvRTs7OzhCQUUvRixNLEVBQVE7QUFDaEIsTUFBQSxHQUFHLENBQUMsS0FBSyxNQUFOLEVBQWMsTUFBZCxDQUFIO0FBQ0Q7Ozs7Ozs7O0FBR0ksU0FBUyxhQUFULENBQXVCLGtCQUF2QixFQUEyQyxvQkFBM0MsRUFBaUUsTUFBakUsRUFBeUU7QUFDOUUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLGtCQUFQLENBQTBCLGtCQUExQixDQUFyQjtBQUFBLE1BQ00sY0FBYyxHQUFHLE1BQU0sQ0FBQyxvQkFBUCxDQUE0QixvQkFBNUIsQ0FEdkI7QUFBQSxNQUVNLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBUCxDQUFxQixZQUFyQixFQUFtQyxjQUFuQyxDQUZoQjtBQUlBLFNBQU8sT0FBUDtBQUNEOzs7QUNuRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLHNCQUFzQixHQUFHLENBQS9CO0FBQUEsSUFDTSx3QkFBd0IsR0FBRyxDQURqQzs7SUFHcUIsZTtBQUNuQiwyQkFBWSxxQkFBWixFQUFtQyxtQkFBbkMsRUFBd0QsMEJBQXhELEVBQW9GO0FBQUE7O0FBQ2xGLFNBQUsscUJBQUwsR0FBNkIscUJBQTdCO0FBQ0EsU0FBSyxtQkFBTCxHQUEyQixtQkFBM0I7QUFDQSxTQUFLLDBCQUFMLEdBQWtDLDBCQUFsQztBQUNEOzs7O2dEQUUyQixtQixFQUFxQixNLEVBQVE7QUFDdkQsV0FBSyxxQkFBTCxHQUE2QixNQUFNLENBQUMsWUFBUCxDQUFvQixtQkFBcEIsQ0FBN0I7QUFDRDs7OzhDQUV5QixpQixFQUFtQixNLEVBQVE7QUFDbkQsV0FBSyxtQkFBTCxHQUEyQixNQUFNLENBQUMsWUFBUCxDQUFvQixpQkFBcEIsQ0FBM0I7QUFDRDs7O3FEQUVnQyxpQixFQUFtQixNLEVBQVE7QUFDMUQsV0FBSywwQkFBTCxHQUFrQyxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsaUJBQTNCLENBQWxDO0FBQ0Q7Ozs0Q0FFdUIsNkIsRUFBK0IsTSxFQUFRO0FBQzdELE1BQUEsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsS0FBSyxtQkFBdkIsRUFBNEMsNkJBQTVDLEVBQTJFLHNCQUEzRTtBQUNEOzs7OENBRXlCLCtCLEVBQWlDLE0sRUFBUTtBQUNqRSxNQUFBLE1BQU0sQ0FBQyxVQUFQLENBQWtCLEtBQUsscUJBQXZCLEVBQThDLCtCQUE5QyxFQUErRSx3QkFBL0U7QUFDRDs7O21EQUU4QixNLEVBQVE7QUFDckMsTUFBQSxNQUFNLENBQUMsaUJBQVAsQ0FBeUIsS0FBSywwQkFBOUI7QUFDRDs7O2tDQUVhLG1CLEVBQXFCLGlCLEVBQW1CLGlCLEVBQW1CLE0sRUFBUTtBQUMvRSxXQUFLLDJCQUFMLENBQWlDLG1CQUFqQyxFQUFzRCxNQUF0RDtBQUNBLFdBQUsseUJBQUwsQ0FBK0IsaUJBQS9CLEVBQWtELE1BQWxEO0FBQ0EsV0FBSyxnQ0FBTCxDQUFzQyxpQkFBdEMsRUFBeUQsTUFBekQ7QUFDRDs7O2dDQUVXLDZCLEVBQStCLCtCLEVBQWlDLE0sRUFBUTtBQUNsRixXQUFLLHVCQUFMLENBQTZCLDZCQUE3QixFQUE0RCxNQUE1RDtBQUNBLFdBQUsseUJBQUwsQ0FBK0IsK0JBQS9CLEVBQWdFLE1BQWhFO0FBQ0EsV0FBSyw4QkFBTCxDQUFvQyxNQUFwQztBQUNEOzs7Z0NBRWtCLEssRUFBOEI7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLFFBQUEsa0JBQW9CO0FBQUE7O0FBQy9DLFVBQU0scUJBQXFCLEdBQUcsSUFBOUI7QUFBQSxVQUFvQztBQUM5QixNQUFBLG1CQUFtQixHQUFHLElBRDVCO0FBQUEsVUFDa0M7QUFDNUIsTUFBQSwwQkFBMEIsR0FBRyxJQUZuQztBQUFBLFVBRTBDO0FBQ3BDLE1BQUEsZUFBZSxjQUFPLEtBQVAsR0FBYSxxQkFBYixFQUFvQyxtQkFBcEMsRUFBeUQsMEJBQXpELFNBQXdGLGtCQUF4RixFQUhyQjs7QUFLQSxhQUFPLGVBQVA7QUFDRDs7Ozs7Ozs7O0FDdkRIOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sc0JBQXNCLEdBQUcsQ0FBL0I7O0lBRXFCLHFCOzs7OztBQUNuQixpQ0FBWSxxQkFBWixFQUFtQyxtQkFBbkMsRUFBd0QsMEJBQXhELEVBQW9GLG1CQUFwRixFQUF5RztBQUFBOztBQUFBOztBQUN2Ryw4QkFBTSxxQkFBTixFQUE2QixtQkFBN0IsRUFBa0QsMEJBQWxEO0FBRUEsVUFBSyxtQkFBTCxHQUEyQixtQkFBM0I7QUFIdUc7QUFJeEc7Ozs7OENBRXlCLGlCLEVBQW1CLE0sRUFBUTtBQUNuRCxXQUFLLG1CQUFMLEdBQTJCLE1BQU0sQ0FBQyxZQUFQLENBQW9CLGlCQUFwQixDQUEzQjtBQUNEOzs7NENBRXVCLDZCLEVBQStCLE0sRUFBUTtBQUM3RCxNQUFBLE1BQU0sQ0FBQyxVQUFQLENBQWtCLEtBQUssbUJBQXZCLEVBQTRDLDZCQUE1QyxFQUEyRSxzQkFBM0U7QUFDRDs7O2tDQUVhLG1CLEVBQXFCLGlCLEVBQW1CLGlCLEVBQW1CLGlCLEVBQW1CLE0sRUFBUTtBQUNsRywrRkFBb0IsbUJBQXBCLEVBQXlDLGlCQUF6QyxFQUE0RCxpQkFBNUQsRUFBK0UsTUFBL0U7O0FBRUEsV0FBSyx5QkFBTCxDQUErQixpQkFBL0IsRUFBa0QsTUFBbEQ7QUFDRDs7O2dDQUVXLDZCLEVBQStCLCtCLEVBQWlDLDZCLEVBQStCLE0sRUFBUTtBQUNqSCw2RkFBa0IsNkJBQWxCLEVBQWlELCtCQUFqRCxFQUFrRixNQUFsRjs7QUFFQSxXQUFLLHVCQUFMLENBQTZCLDZCQUE3QixFQUE0RCxNQUE1RDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sbUJBQW1CLEdBQUcsSUFBNUI7QUFBQSxVQUFrQztBQUM1QixNQUFBLHFCQUFxQixHQUFHLG9CQUFnQixXQUFoQixDQUE0QixxQkFBNUIsRUFBbUQsbUJBQW5ELENBRDlCOztBQUdBLGFBQU8scUJBQVA7QUFDRDs7OztFQWhDZ0QsbUI7Ozs7O0FDTm5EOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sMkJBQTJCLEdBQUcsQ0FBcEM7O0lBRXFCLHNCOzs7OztBQUNuQixrQ0FBWSxxQkFBWixFQUFtQyxtQkFBbkMsRUFBd0QsMEJBQXhELEVBQW9GLHdCQUFwRixFQUE4RztBQUFBOztBQUFBOztBQUM1Ryw4QkFBTSxxQkFBTixFQUE2QixtQkFBN0IsRUFBa0QsMEJBQWxEO0FBRUEsVUFBSyx3QkFBTCxHQUFnQyx3QkFBaEM7QUFINEc7QUFJN0c7Ozs7bURBRThCLHNCLEVBQXdCLE0sRUFBUTtBQUM3RCxXQUFLLHdCQUFMLEdBQWdDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLHNCQUFwQixDQUFoQztBQUNEOzs7aURBRTRCLGtDLEVBQW9DLE0sRUFBUTtBQUN2RSxNQUFBLE1BQU0sQ0FBQyxVQUFQLENBQWtCLEtBQUssd0JBQXZCLEVBQWlELGtDQUFqRCxFQUFxRiwyQkFBckY7QUFDRDs7O2tDQUVhLG1CLEVBQXFCLGlCLEVBQW1CLGlCLEVBQW1CLHNCLEVBQXdCLE0sRUFBUTtBQUN2RyxnR0FBb0IsbUJBQXBCLEVBQXlDLGlCQUF6QyxFQUE0RCxpQkFBNUQsRUFBK0UsTUFBL0U7O0FBRUEsV0FBSyw4QkFBTCxDQUFvQyxzQkFBcEMsRUFBNEQsTUFBNUQ7QUFDRDs7O2dDQUVXLDZCLEVBQStCLCtCLEVBQWlDLGtDLEVBQW9DLE0sRUFBUTtBQUN0SCw4RkFBa0IsNkJBQWxCLEVBQWlELCtCQUFqRCxFQUFrRixNQUFsRjs7QUFFQSxXQUFLLDRCQUFMLENBQWtDLGtDQUFsQyxFQUFzRSxNQUF0RTtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sd0JBQXdCLEdBQUcsSUFBakM7QUFBQSxVQUF3QztBQUNsQyxNQUFBLHNCQUFzQixHQUFHLG9CQUFnQixXQUFoQixDQUE0QixzQkFBNUIsRUFBb0Qsd0JBQXBELENBRC9COztBQUdBLGFBQU8sc0JBQVA7QUFDRDs7OztFQWhDaUQsbUI7Ozs7O0FDTnBEOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sR0FBRyxHQUFHLFdBQVosQyxDQUFrQjs7SUFFRyxjOzs7Ozs7Ozs7Ozs7O3VEQUNnQjtBQUNqQyxVQUFNLGtCQUFrQixHQUFHLEtBQUsscUJBQUwsRUFBM0I7QUFBQSxVQUNNLDZCQUE2QixHQUFHLGtCQUFrQixDQUFDLGdDQUFuQixFQUR0QztBQUdBLGFBQU8sNkJBQVA7QUFDRDs7O2tDQUVhLE0sRUFBUTtBQUNwQixVQUFNLE1BQU0sR0FBRyxLQUFLLFNBQUwsRUFBZjtBQUFBLFVBQ00sYUFBYSxHQUFHLEVBRHRCO0FBQUEsVUFFTSxhQUFhLEdBQUcsRUFGdEI7QUFBQSxVQUdNLGVBQWUsR0FBRyxFQUh4QjtBQUFBLFVBSU0sYUFBYSxHQUFHLEVBSnRCO0FBTUEsTUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDL0IsWUFBTSxhQUFhLEdBQUcsS0FBdEI7QUFBQSxZQUE4QjtBQUN4QixRQUFBLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxnQkFBTixDQUF1QixLQUF2QixDQUQzQjtBQUFBLFlBRU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGdCQUFOLEVBRjNCO0FBQUEsWUFHTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsa0JBQU4sRUFIN0I7QUFBQSxZQUlNLDBCQUEwQixHQUFHLGFBQWEsQ0FBQyxnQkFBZCxFQUpuQztBQU1BLFFBQUEsR0FBRyxDQUFDLGFBQUQsRUFBZ0Isa0JBQWhCLENBQUg7QUFDQSxRQUFBLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGtCQUFoQixDQUFIO0FBQ0EsUUFBQSxHQUFHLENBQUMsZUFBRCxFQUFrQixvQkFBbEIsQ0FBSDtBQUNBLFFBQUEsR0FBRyxDQUFDLGFBQUQsRUFBZ0IsMEJBQWhCLENBQUg7QUFDRCxPQVhEO0FBYUEsVUFBTSxZQUFZLEdBQUcsS0FBSyxlQUFMLEVBQXJCO0FBRUEsTUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsYUFBOUI7QUFDQSxNQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixhQUE5QjtBQUNBLE1BQUEsWUFBWSxDQUFDLGdCQUFiLENBQThCLGFBQTlCO0FBQ0EsTUFBQSxZQUFZLENBQUMsa0JBQWIsQ0FBZ0MsZUFBaEM7QUFFQSxVQUFNLGVBQWUsR0FBRyxLQUFLLGtCQUFMLEVBQXhCO0FBQUEsVUFDTSxtQkFBbUIsR0FBRyxZQUFZLENBQUMsc0JBQWIsRUFENUI7QUFBQSxVQUVNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxvQkFBYixFQUYxQjtBQUFBLFVBR00saUJBQWlCLEdBQUcsWUFBWSxDQUFDLG9CQUFiLEVBSDFCO0FBQUEsVUFJTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsb0JBQWIsRUFKMUI7QUFNQSxNQUFBLGVBQWUsQ0FBQyxhQUFoQixDQUE4QixtQkFBOUIsRUFBbUQsaUJBQW5ELEVBQXNFLGlCQUF0RSxFQUF5RixpQkFBekYsRUFBNEcsTUFBNUc7QUFDRDs7O2dDQUVXLE0sRUFBUTtBQUNsQixVQUFNLGVBQWUsR0FBRyxLQUFLLGtCQUFMLEVBQXhCO0FBQUEsVUFDTSw2QkFBNkIsR0FBRyxLQUFLLGdDQUFMLEVBRHRDO0FBQUEsVUFFTSwrQkFBK0IsR0FBRyxLQUFLLGtDQUFMLEVBRnhDO0FBQUEsVUFHTSw2QkFBNkIsR0FBRyxLQUFLLGdDQUFMLEVBSHRDO0FBS0EsTUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsNkJBQTVCLEVBQTJELCtCQUEzRCxFQUE0Riw2QkFBNUYsRUFBMkgsTUFBM0g7QUFDRDs7OzJCQUVNLE0sRUFBUSxhLEVBQWUsYSxFQUFlLGMsRUFBZ0IsZSxFQUFpQixnQixFQUFrQjtBQUM5RixVQUFNLE9BQU8sR0FBRyxLQUFLLFVBQUwsRUFBaEI7QUFFQSxNQUFBLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE9BQWxCO0FBRUEsV0FBSyxXQUFMLENBQWlCLE1BQWpCO0FBRUEsVUFBTSxRQUFRLEdBQUcsSUFBakIsQ0FQOEYsQ0FPdEU7O0FBRXhCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxRQUFkLEVBQXdCLGFBQXhCLEVBQXVDLGFBQXZDLEVBQXNELGNBQXRELEVBQXNFLGVBQXRFLEVBQXVGLGdCQUF2RjtBQUVBLFVBQU0sS0FBSyxHQUFHLEtBQUssUUFBTCxFQUFkO0FBQUEsVUFDTSxLQUFLLEdBQUcsQ0FEZDtBQUFBLFVBRU0sTUFBTSxHQUFHLEtBRmYsQ0FYOEYsQ0FheEU7O0FBRXRCLE1BQUEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsTUFBM0I7QUFDRDs7O2dDQUVrQixNLEVBQVE7QUFDekIsVUFBTSxNQUFNLEdBQUcsRUFBZjtBQUFBLFVBQ00sT0FBTyxHQUFHLDZCQUFjLHdCQUFkLEVBQWtDLDBCQUFsQyxFQUF3RCxNQUF4RCxDQURoQjtBQUFBLFVBRU0sa0JBQWtCLEdBQUcsbUJBQW1CLFdBQW5CLEVBRjNCO0FBQUEsVUFHTSxxQkFBcUIsR0FBRyxvQkFBc0IsV0FBdEIsRUFIOUI7QUFBQSxVQUlNLHNCQUFzQixHQUFHLG9CQUF1QixXQUF2QixDQUFtQyxPQUFuQyxFQUE0QyxNQUE1QyxDQUovQjtBQUFBLFVBS00sd0JBQXdCLEdBQUcsc0JBQXlCLFdBQXpCLENBQXFDLE9BQXJDLEVBQThDLE1BQTlDLENBTGpDO0FBQUEsVUFNTSxZQUFZLEdBQUcsa0JBTnJCO0FBQUEsVUFNMEM7QUFDcEMsTUFBQSxlQUFlLEdBQUcscUJBUHhCO0FBQUEsVUFPZ0Q7QUFDMUMsTUFBQSxnQkFBZ0IsR0FBRyxzQkFSekI7QUFBQSxVQVFrRDtBQUM1QyxNQUFBLGtCQUFrQixHQUFHLHdCQVQzQjtBQUFBLFVBU3NEO0FBQ2hELE1BQUEsY0FBYyxHQUFHLElBQUksY0FBSixDQUFtQixNQUFuQixFQUEyQixPQUEzQixFQUFvQyxZQUFwQyxFQUFrRCxlQUFsRCxFQUFtRSxnQkFBbkUsRUFBcUYsa0JBQXJGLENBVnZCOztBQVlBLGFBQU8sY0FBUDtBQUNEOzs7O0VBckZ5QyxvQjs7Ozs7QUNmNUM7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxZQUFaLEMsQ0FBb0I7O0lBRUMsWTtBQUNuQix3QkFBWSxtQkFBWixFQUFpQyxpQkFBakMsRUFBb0QsaUJBQXBELEVBQXVFO0FBQUE7O0FBQ3JFLFNBQUssbUJBQUwsR0FBMkIsbUJBQTNCO0FBQ0EsU0FBSyxpQkFBTCxHQUF5QixpQkFBekI7QUFDQSxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QjtBQUNEOzs7OytCQUVVO0FBQ1QsVUFBTSx1QkFBdUIsR0FBRyxLQUFLLGlCQUFMLENBQXVCLE1BQXZEO0FBQUEsVUFDTSxLQUFLLEdBQUcsdUJBRGQsQ0FEUyxDQUUrQjs7QUFFeEMsYUFBTyxLQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLLG1CQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLLGlCQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLLGlCQUFaO0FBQ0Q7Ozt1Q0FFa0IsZSxFQUFpQjtBQUNsQyxVQUFNLG1CQUFtQixHQUFHLG9CQUFRLGVBQVIsQ0FBNUI7QUFFQSxNQUFBLEdBQUcsQ0FBQyxLQUFLLG1CQUFOLEVBQTJCLG1CQUEzQixDQUFIO0FBQ0Q7OztxQ0FFZ0IsYSxFQUFlO0FBQzlCLFVBQU0saUJBQWlCLEdBQUcsb0JBQVEsYUFBUixDQUExQjtBQUVBLE1BQUEsR0FBRyxDQUFDLEtBQUssaUJBQU4sRUFBeUIsaUJBQXpCLENBQUg7QUFDRDs7O3FDQUVnQixhLEVBQWU7QUFDOUIsVUFBTSxpQkFBaUIsR0FBRyxhQUExQixDQUQ4QixDQUNZOztBQUUxQyxNQUFBLEdBQUcsQ0FBQyxLQUFLLGlCQUFOLEVBQXlCLGlCQUF6QixDQUFIO0FBQ0Q7OztnQ0FFa0IsSyxFQUE4QjtBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsUUFBQSxrQkFBb0I7QUFBQTs7QUFDL0MsVUFBTSxtQkFBbUIsR0FBRyxFQUE1QjtBQUFBLFVBQ00saUJBQWlCLEdBQUcsRUFEMUI7QUFBQSxVQUVNLGlCQUFpQixHQUFHLEVBRjFCO0FBQUEsVUFHTSxZQUFZLGNBQU8sS0FBUCxHQUFhLG1CQUFiLEVBQWtDLGlCQUFsQyxFQUFxRCxpQkFBckQsU0FBMkUsa0JBQTNFLEVBSGxCOztBQUtBLGFBQU8sWUFBUDtBQUNEOzs7Ozs7Ozs7QUN6REg7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxZQUFaLEMsQ0FBb0I7O0lBRUMsa0I7Ozs7O0FBQ25CLDhCQUFZLG1CQUFaLEVBQWlDLGlCQUFqQyxFQUFvRCxpQkFBcEQsRUFBdUUsaUJBQXZFLEVBQTBGO0FBQUE7O0FBQUE7O0FBQ3hGLDhCQUFNLG1CQUFOLEVBQTJCLGlCQUEzQixFQUE4QyxpQkFBOUM7QUFFQSxVQUFLLGlCQUFMLEdBQXlCLGlCQUF6QjtBQUh3RjtBQUl6Rjs7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLLGlCQUFaO0FBQ0Q7OztxQ0FFZ0IsYSxFQUFlO0FBQzlCLFVBQU0saUJBQWlCLEdBQUcsb0JBQVEsYUFBUixDQUExQjtBQUVBLE1BQUEsR0FBRyxDQUFDLEtBQUssaUJBQU4sRUFBeUIsaUJBQXpCLENBQUg7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNLGlCQUFpQixHQUFHLEVBQTFCO0FBQUEsVUFDTSxrQkFBa0IsR0FBRyxpQkFBYSxXQUFiLENBQXlCLGtCQUF6QixFQUE2QyxpQkFBN0MsQ0FEM0I7O0FBR0EsYUFBTyxrQkFBUDtBQUNEOzs7O0VBdEI2QyxnQjs7Ozs7QUNSaEQ7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEdBQUcsR0FBRyxZQUFaLEMsQ0FBb0I7O0lBRUMsbUI7Ozs7O0FBQ25CLCtCQUFZLG1CQUFaLEVBQWlDLGlCQUFqQyxFQUFvRCxpQkFBcEQsRUFBdUUsNEJBQXZFLEVBQXFHO0FBQUE7O0FBQUE7O0FBQ25HLDhCQUFNLG1CQUFOLEVBQTJCLGlCQUEzQixFQUE4QyxpQkFBOUM7QUFFQSxVQUFLLDRCQUFMLEdBQW9DLDRCQUFwQztBQUhtRztBQUlwRzs7OztzREFFaUM7QUFDaEMsYUFBTyxLQUFLLDRCQUFaO0FBQ0Q7OztxREFFZ0MsNkIsRUFBK0I7QUFDOUQsVUFBTSw0QkFBNEIsR0FBRyxvQkFBUSw2QkFBUixDQUFyQztBQUVBLE1BQUEsR0FBRyxDQUFDLEtBQUssNEJBQU4sRUFBb0MsNEJBQXBDLENBQUg7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNLDRCQUE0QixHQUFHLEVBQXJDO0FBQUEsVUFDTSxtQkFBbUIsR0FBRyxpQkFBYSxXQUFiLENBQXlCLG1CQUF6QixFQUE4Qyw0QkFBOUMsQ0FENUI7O0FBR0EsYUFBTyxtQkFBUDtBQUNEOzs7O0VBdEI4QyxnQjs7Ozs7QUNSakQ7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsa0I7QUFDbkIsOEJBQVksK0JBQVosRUFBNkMsNkJBQTdDLEVBQTRFO0FBQUE7O0FBQzFFLFNBQUssK0JBQUwsR0FBdUMsK0JBQXZDO0FBQ0EsU0FBSyw2QkFBTCxHQUFxQyw2QkFBckM7QUFDRDs7Ozt5REFFb0M7QUFDbkMsYUFBTyxLQUFLLCtCQUFaO0FBQ0Q7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLLDZCQUFaO0FBQ0Q7OztnQ0FFa0IsSyxFQUFPLE8sRUFBUyxNLEVBQStCO0FBQUEsd0NBQXBCLGtCQUFvQjtBQUFwQixRQUFBLGtCQUFvQjtBQUFBOztBQUNoRSxVQUFNLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxvQkFBUCxDQUE0QixPQUE1QixFQUFxQyxxQ0FBckMsQ0FBeEM7QUFBQSxVQUNNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxvQkFBUCxDQUE0QixPQUE1QixFQUFxQyxtQ0FBckMsQ0FEdEM7QUFBQSxVQUVNLGtCQUFrQixjQUFPLEtBQVAsR0FBYSwrQkFBYixFQUE4Qyw2QkFBOUMsU0FBZ0Ysa0JBQWhGLEVBRnhCOztBQUlBLGFBQU8sa0JBQVA7QUFDRDs7Ozs7Ozs7O0FDekJIOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLHdCOzs7OztBQUNuQixvQ0FBWSwrQkFBWixFQUE2Qyw2QkFBN0MsRUFBNEUsNkJBQTVFLEVBQTJHO0FBQUE7O0FBQUE7O0FBQ3pHLDhCQUFNLCtCQUFOLEVBQXVDLDZCQUF2QztBQUVBLFVBQUssNkJBQUwsR0FBcUMsNkJBQXJDO0FBSHlHO0FBSTFHOzs7O3VEQUVrQztBQUNqQyxhQUFPLEtBQUssNkJBQVo7QUFDRDs7O2dDQUVrQixPLEVBQVMsTSxFQUFRO0FBQ2xDLFVBQU0sNkJBQTZCLEdBQUcsTUFBTSxDQUFDLG9CQUFQLENBQTRCLE9BQTVCLEVBQXFDLHVDQUFyQyxDQUF0QztBQUFBLFVBQ00sd0JBQXdCLEdBQUcsc0JBQW1CLFdBQW5CLENBQStCLHdCQUEvQixFQUF5RCxPQUF6RCxFQUFrRSxNQUFsRSxFQUEwRSw2QkFBMUUsQ0FEakM7O0FBR0EsYUFBTyx3QkFBUDtBQUNEOzs7O0VBaEJtRCxxQjs7Ozs7QUNOdEQ7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsc0I7Ozs7Ozs7Ozs7Ozs7Z0NBQ0EsTyxFQUFTLE0sRUFBUTtBQUFFLGFBQU8sb0JBQWlCLFdBQWpCLENBQTZCLHNCQUE3QixFQUFxRCxPQUFyRCxFQUE4RCxNQUE5RCxDQUFQO0FBQStFOzs7O0VBRG5FLG1COzs7OztBQ0pwRDs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQix5Qjs7Ozs7QUFDbkIscUNBQVksK0JBQVosRUFBNkMsNkJBQTdDLEVBQTRFLGtDQUE1RSxFQUFnSDtBQUFBOztBQUFBOztBQUM5Ryw4QkFBTSwrQkFBTixFQUF1Qyw2QkFBdkM7QUFFQSxVQUFLLGtDQUFMLEdBQTBDLGtDQUExQztBQUg4RztBQUkvRzs7Ozs0REFFdUM7QUFDdEMsYUFBTyxLQUFLLGtDQUFaO0FBQ0Q7OztnQ0FFa0IsTyxFQUFTLE0sRUFBUTtBQUNsQyxVQUFNLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxvQkFBUCxDQUE0QixPQUE1QixFQUFxQyw0Q0FBckMsQ0FBM0M7QUFBQSxVQUNNLHlCQUF5QixHQUFHLHNCQUFtQixXQUFuQixDQUErQix5QkFBL0IsRUFBMEQsT0FBMUQsRUFBbUUsTUFBbkUsRUFBMkUsa0NBQTNFLENBRGxDOztBQUdBLGFBQU8seUJBQVA7QUFDRDs7OztFQWhCb0QscUI7Ozs7O0FDTnZEOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLHVCOzs7OztBQUNuQixtQ0FBWSw0QkFBWixFQUEwQyw0QkFBMUMsRUFBd0UsNkJBQXhFLEVBQXVHLDhCQUF2RyxFQUF1SSwrQkFBdkksRUFBd0ssc0JBQXhLLEVBQWdNO0FBQUE7O0FBQUE7O0FBQzlMLDhCQUFNLDRCQUFOLEVBQW9DLDRCQUFwQyxFQUFrRSw2QkFBbEUsRUFBaUcsOEJBQWpHLEVBQWlJLCtCQUFqSTtBQUVBLFVBQUssc0JBQUwsR0FBOEIsc0JBQTlCO0FBSDhMO0FBSS9MOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUssc0JBQVo7QUFDRDs7O2dDQUVrQixPLEVBQVMsTSxFQUFRO0FBQ2xDLFVBQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLGtCQUFQLENBQTBCLE9BQTFCLEVBQW1DLDJCQUFuQyxDQUEvQjtBQUFBLFVBQ00sdUJBQXVCLEdBQUcsb0JBQWlCLFdBQWpCLENBQTZCLHVCQUE3QixFQUFzRCxPQUF0RCxFQUErRCxNQUEvRCxFQUF1RSxzQkFBdkUsQ0FEaEM7O0FBR0EsYUFBTyx1QkFBUDtBQUNEOzs7O0VBaEJrRCxtQjs7Ozs7QUNOckQ7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsZ0I7QUFDbkIsNEJBQVksNEJBQVosRUFBMEMsNEJBQTFDLEVBQXdFLDZCQUF4RSxFQUF1Ryw4QkFBdkcsRUFBdUksK0JBQXZJLEVBQXdLO0FBQUE7O0FBQ3RLLFNBQUssNEJBQUwsR0FBb0MsNEJBQXBDO0FBQ0EsU0FBSyw0QkFBTCxHQUFvQyw0QkFBcEM7QUFDQSxTQUFLLDZCQUFMLEdBQXFDLDZCQUFyQztBQUNBLFNBQUssOEJBQUwsR0FBc0MsOEJBQXRDO0FBQ0EsU0FBSywrQkFBTCxHQUF1QywrQkFBdkM7QUFDRDs7OztzREFFaUM7QUFDaEMsYUFBTyxLQUFLLDRCQUFaO0FBQ0Q7OztzREFFaUM7QUFDaEMsYUFBTyxLQUFLLDRCQUFaO0FBQ0Q7Ozt1REFFa0M7QUFDakMsYUFBTyxLQUFLLDZCQUFaO0FBQ0Q7Ozt3REFFbUM7QUFDbEMsYUFBTyxLQUFLLDhCQUFaO0FBQ0Q7Ozt5REFFb0M7QUFDbkMsYUFBTyxLQUFLLCtCQUFaO0FBQ0Q7OztnQ0FFa0IsSyxFQUFPLE8sRUFBUyxNLEVBQStCO0FBQUEsd0NBQXBCLGtCQUFvQjtBQUFwQixRQUFBLGtCQUFvQjtBQUFBOztBQUNoRSxVQUFNLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQixPQUExQixFQUFtQywyQkFBbkMsQ0FBckM7QUFBQSxVQUNNLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQixPQUExQixFQUFtQywyQkFBbkMsQ0FEckM7QUFBQSxVQUVNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQixPQUExQixFQUFtQyw0QkFBbkMsQ0FGdEM7QUFBQSxVQUdNLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQixPQUExQixFQUFtQyw2QkFBbkMsQ0FIdkM7QUFBQSxVQUlNLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQixPQUExQixFQUFtQyw4QkFBbkMsQ0FKeEM7QUFBQSxVQUtNLGdCQUFnQixjQUFPLEtBQVAsR0FBYSw0QkFBYixFQUEyQyw0QkFBM0MsRUFBeUUsNkJBQXpFLEVBQXdHLDhCQUF4RyxFQUF3SSwrQkFBeEksU0FBNEssa0JBQTVLLEVBTHRCOztBQU9BLGFBQU8sZ0JBQVA7QUFDRDs7Ozs7Ozs7O0FDNUNIOzs7Ozs7QUFFQSxJQUFNLG9CQUFvQixHQUFHLElBQUksTUFBSixtT0FBN0I7ZUFZZSxvQjs7OztBQ2RmOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxJQUFNLHlCQUF5QixHQUFHLGVBQWxDOztBQUVQLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxNQUFKLDBDQUVGLHlCQUZFLDBCQUlqQixvQkFKaUIsK0JBTWpCLG9CQU5pQiw2UEFpQkwseUJBakJLLHdEQUEzQjtlQXNCZSxrQjs7OztBQzdCZjs7Ozs7O0FBRU8sSUFBTSxpQkFBaUIsR0FBRyxnQkFBMUI7O0FBQ0EsSUFBTSx5QkFBeUIsR0FBRyxlQUFsQzs7QUFFUCxJQUFNLGNBQWMsR0FBRyxJQUFJLE1BQUosc0NBRUEsaUJBRkEseUNBSUUseUJBSkYsNk5BVWMsaUJBVmQscUJBVTBDLHlCQVYxQyxtUUFBdkI7ZUFxQmUsYzs7OztBQzFCZjs7Ozs7O0FBRU8sSUFBTSxpQkFBaUIsR0FBRyxnQkFBMUI7O0FBQ0EsSUFBTSxrQkFBa0IsR0FBRyxpQkFBM0I7O0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyxrQkFBNUI7O0FBQ0EsSUFBTSxvQkFBb0IsR0FBRyxvQkFBN0I7O0FBQ0EsSUFBTSwyQkFBMkIsR0FBRyxpQkFBcEM7O0FBRVAsSUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFKLHNDQUVBLGlCQUZBLHFDQUdBLG1CQUhBLHFDQUlBLGtCQUpBLHFDQUtBLG9CQUxBLGlEQU9FLDJCQVBGLGdGQVVLLG9CQVZMLGdCQVUrQixrQkFWL0IsZ0JBVXVELG1CQVZ2RCxnQkFVZ0YsaUJBVmhGLGdCQVV1RywyQkFWdkcsNEVBQXZCO2VBaUJlLGM7Ozs7QUN6QmY7Ozs7OztBQUVPLElBQU0sV0FBVyxHQUFHLFVBQXBCOztBQUVQLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxNQUFKLGlEQUVELFdBRkMsNE1BU2tCLFdBVGxCLG1KQUE3QjtlQWdCZSxvQjs7OztBQ3BCZjs7Ozs7OztBQUVBOztBQUNBOzs7O0FBRU8sSUFBTSw4QkFBOEIsR0FBRyxvQkFBdkM7O0FBRVAsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQUosOENBRUYsOEJBRkUsa0NBSWpCLG9CQUppQiwrQkFNakIsb0JBTmlCLG9TQWlCTSw4QkFqQk4sb0NBQTNCO2VBc0JlLGtCOzs7O0FDN0JmOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXFCLGU7Ozs7Ozs7Ozs7Ozs7NERBQ3FCO0FBQ3RDLFVBQU0sa0JBQWtCLEdBQUcsS0FBSyxxQkFBTCxFQUEzQjtBQUFBLFVBQ00sa0NBQWtDLEdBQUcsa0JBQWtCLENBQUMscUNBQW5CLEVBRDNDO0FBR0EsYUFBTyxrQ0FBUDtBQUNEOzs7a0NBRWEsTSxFQUFRO0FBQ3BCLFVBQU0sWUFBWSxHQUFHLEtBQUssZUFBTCxFQUFyQjtBQUFBLFVBQ00sZUFBZSxHQUFHLEtBQUssa0JBQUwsRUFEeEI7QUFBQSxVQUVNLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxzQkFBYixFQUY1QjtBQUFBLFVBR00saUJBQWlCLEdBQUcsWUFBWSxDQUFDLG9CQUFiLEVBSDFCO0FBQUEsVUFJTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsb0JBQWIsRUFKMUI7QUFBQSxVQUtNLDRCQUE0QixHQUFHLFlBQVksQ0FBQywrQkFBYixFQUxyQztBQU9BLE1BQUEsZUFBZSxDQUFDLGFBQWhCLENBQThCLG1CQUE5QixFQUFtRCxpQkFBbkQsRUFBc0UsaUJBQXRFLEVBQXlGLDRCQUF6RixFQUF1SCxNQUF2SDtBQUNEOzs7Z0NBRVcsTSxFQUFRO0FBQ2xCLFVBQU0sZUFBZSxHQUFHLEtBQUssa0JBQUwsRUFBeEI7QUFBQSxVQUNNLDZCQUE2QixHQUFHLEtBQUssZ0NBQUwsRUFEdEM7QUFBQSxVQUVNLCtCQUErQixHQUFHLEtBQUssa0NBQUwsRUFGeEM7QUFBQSxVQUdNLGtDQUFrQyxHQUFHLEtBQUsscUNBQUwsRUFIM0M7QUFLQSxNQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0Qiw2QkFBNUIsRUFBMkQsK0JBQTNELEVBQTRGLGtDQUE1RixFQUFnSSxNQUFoSTtBQUNEOzs7K0JBRVUsSyxFQUFPLE0sRUFBUTtBQUN4QixVQUFNLGdCQUFnQixHQUFHLEtBQUssbUJBQUwsRUFBekI7QUFBQSxVQUNNLHNCQUFzQixHQUFHLGdCQUFnQixDQUFDLHlCQUFqQixFQUQvQjtBQUFBLFVBRU0sa0NBQWtDLEdBQUcsS0FGM0MsQ0FEd0IsQ0FHMEI7O0FBRWxELE1BQUEsTUFBTSxDQUFDLDhCQUFQLENBQXNDLHNCQUF0QyxFQUE4RCxrQ0FBOUQ7QUFDRDs7O2dDQUVrQixLLEVBQU8sTSxFQUErQjtBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsUUFBQSxrQkFBb0I7QUFBQTs7QUFDdkQsVUFBTSxNQUFNLEdBQUcsRUFBZjtBQUFBLFVBQ00sT0FBTyxHQUFHLDZCQUFjLHdCQUFkLEVBQWtDLDBCQUFsQyxFQUF3RCxNQUF4RCxDQURoQjtBQUFBLFVBRU0sbUJBQW1CLEdBQUcsb0JBQW9CLFdBQXBCLEVBRjVCO0FBQUEsVUFHTSxzQkFBc0IsR0FBRyxxQkFBdUIsV0FBdkIsRUFIL0I7QUFBQSxVQUlNLHVCQUF1QixHQUFHLG9CQUF3QixXQUF4QixDQUFvQyxPQUFwQyxFQUE2QyxNQUE3QyxDQUpoQztBQUFBLFVBS00seUJBQXlCLEdBQUcsc0JBQTBCLFdBQTFCLENBQXNDLE9BQXRDLEVBQStDLE1BQS9DLENBTGxDO0FBQUEsVUFNTSxZQUFZLEdBQUcsbUJBTnJCO0FBQUEsVUFNMkM7QUFDckMsTUFBQSxlQUFlLEdBQUcsc0JBUHhCO0FBQUEsVUFPZ0Q7QUFDMUMsTUFBQSxnQkFBZ0IsR0FBRyx1QkFSekI7QUFBQSxVQVFrRDtBQUM1QyxNQUFBLGtCQUFrQixHQUFHLHlCQVQzQjtBQUFBLFVBU3NEO0FBQ2hELE1BQUEsZUFBZSxjQUFPLEtBQVAsR0FBYSxNQUFiLEVBQXFCLE9BQXJCLEVBQThCLFlBQTlCLEVBQTRDLGVBQTVDLEVBQTZELGdCQUE3RCxFQUErRSxrQkFBL0UsU0FBc0csa0JBQXRHLEVBVnJCOztBQVlBLE1BQUEsTUFBTSxDQUFDLDBCQUFQLEdBYnVELENBYWpCOztBQUV0QyxhQUFPLGVBQVA7QUFDRDs7OztFQXBEMEMsb0I7Ozs7O0FDWjdDOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sR0FBRyxHQUFHLFdBQVosQyxDQUFrQjs7SUFFRyx1Qjs7Ozs7QUFDcEIsbUNBQVksTUFBWixFQUFvQixPQUFwQixFQUE2QixZQUE3QixFQUEyQyxlQUEzQyxFQUE0RCxnQkFBNUQsRUFBOEUsa0JBQTlFLEVBQWtHLFlBQWxHLEVBQWdIO0FBQUE7O0FBQUE7O0FBQy9HLDhCQUFNLE1BQU4sRUFBYyxPQUFkLEVBQXVCLFlBQXZCLEVBQXFDLGVBQXJDLEVBQXNELGdCQUF0RCxFQUF3RSxrQkFBeEU7QUFFQSxVQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFIK0c7QUFJL0c7Ozs7a0NBRWMsTSxFQUFRO0FBQUE7O0FBQ3BCLFVBQU0sTUFBTSxHQUFHLEtBQUssU0FBTCxFQUFmO0FBQUEsVUFDTSxhQUFhLEdBQUcsRUFEdEI7QUFBQSxVQUVNLGFBQWEsR0FBRyxFQUZ0QjtBQUFBLFVBR00sZUFBZSxHQUFHLEVBSHhCO0FBQUEsVUFJTSw2QkFBNkIsR0FBRyxFQUp0QztBQU1BLE1BQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQy9CLFlBQU0sYUFBYSxHQUFHLEtBQXRCO0FBQUEsWUFBOEI7QUFDeEIsUUFBQSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsS0FBdkIsQ0FEM0I7QUFBQSxZQUVNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxnQkFBTixFQUYzQjtBQUFBLFlBR00sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLGtCQUFOLEVBSDdCO0FBQUEsWUFJTSw2QkFBNkIsR0FBRyxhQUFhLENBQUMsZ0NBQWQsQ0FBK0MsTUFBSSxDQUFDLFlBQXBELENBSnRDO0FBQUEsWUFLTSwwQ0FBMEMsR0FBRyw2QkFMbkQsQ0FEK0IsQ0FNbUQ7O0FBRWxGLFFBQUEsR0FBRyxDQUFDLGFBQUQsRUFBZ0Isa0JBQWhCLENBQUg7QUFDQSxRQUFBLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGtCQUFoQixDQUFIO0FBQ0EsUUFBQSxHQUFHLENBQUMsZUFBRCxFQUFrQixvQkFBbEIsQ0FBSDtBQUNBLFFBQUEsR0FBRyxDQUFDLDZCQUFELEVBQWdDLDBDQUFoQyxDQUFIO0FBQ0QsT0FaRDtBQWNBLFVBQU0sWUFBWSxHQUFHLEtBQUssZUFBTCxFQUFyQjtBQUVBLE1BQUEsWUFBWSxDQUFDLGdCQUFiLENBQThCLGFBQTlCO0FBQ0EsTUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsYUFBOUI7QUFDQSxNQUFBLFlBQVksQ0FBQyxrQkFBYixDQUFnQyxlQUFoQztBQUNBLE1BQUEsWUFBWSxDQUFDLGdDQUFiLENBQThDLDZCQUE5Qzs7QUFFQSxpR0FBb0IsTUFBcEI7QUFDRDs7O2dDQUVXLE0sRUFBUTtBQUNsQixVQUFNLGVBQWUsR0FBRyxLQUFLLGtCQUFMLEVBQXhCO0FBQUEsVUFDTSw2QkFBNkIsR0FBRyxLQUFLLGdDQUFMLEVBRHRDO0FBQUEsVUFFTSwrQkFBK0IsR0FBRyxLQUFLLGtDQUFMLEVBRnhDO0FBQUEsVUFHTSxrQ0FBa0MsR0FBRyxLQUFLLHFDQUFMLEVBSDNDO0FBS0EsTUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsNkJBQTVCLEVBQTJELCtCQUEzRCxFQUE0RixrQ0FBNUYsRUFBZ0ksTUFBaEk7QUFDRDs7OytCQUVVLEssRUFBTyxNLEVBQVE7QUFDeEIsVUFBTSxnQkFBZ0IsR0FBRyxLQUFLLG1CQUFMLEVBQXpCO0FBQUEsVUFDTSxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyx5QkFBakIsRUFEL0I7QUFBQSxVQUVNLGtDQUFrQyxHQUFHLEtBRjNDLENBRHdCLENBRzBCOztBQUVsRCxNQUFBLE1BQU0sQ0FBQyw4QkFBUCxDQUFzQyxzQkFBdEMsRUFBOEQsa0NBQTlEO0FBQ0Q7OzsyQkFFTSxNLEVBQVEsYSxFQUFlLGEsRUFBZSxjLEVBQWdCLGUsRUFBaUIsZ0IsRUFBa0I7QUFDOUYsVUFBTSxPQUFPLEdBQUcsS0FBSyxVQUFMLEVBQWhCO0FBRUEsTUFBQSxNQUFNLENBQUMsVUFBUCxDQUFrQixPQUFsQjtBQUVBLFdBQUssV0FBTCxDQUFpQixNQUFqQjtBQUVBLFVBQU0sUUFBUSxHQUFHLElBQWpCLENBUDhGLENBT3RFOztBQUV4QixNQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsUUFBZCxFQUF3QixhQUF4QixFQUF1QyxhQUF2QyxFQUFzRCxjQUF0RCxFQUFzRSxlQUF0RSxFQUF1RixnQkFBdkY7QUFFQSxVQUFNLFlBQVksR0FBRyxLQUFLLGVBQUwsRUFBckI7QUFBQSxVQUNNLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBYixFQURkO0FBQUEsVUFFTSxLQUFLLEdBQUcsQ0FGZDtBQUFBLFVBR00sS0FBSyxHQUFHLENBSGQ7QUFBQSxVQUlNLE1BQU0sR0FBRyxLQUpmLENBWDhGLENBZXhFOztBQUV0QixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUIsTUFBdkI7QUFFQSxNQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCLE1BQTNCO0FBQ0Q7OztnREFFa0MsUSxFQUFVLFksRUFBYyxNLEVBQVE7QUFDakUsVUFBTSxLQUFLLEdBQUcsUUFBZDtBQUFBLFVBQXdCO0FBQ2xCLE1BQUEsS0FBSyxHQUFHLENBRGQ7QUFBQSxVQUVNLE1BQU0sR0FBRyxLQUZmO0FBSUEsTUFBQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxNQUFuQzs7QUFFQSxVQUFNLHVCQUF1QixHQUFHLG9CQUFnQixXQUFoQixDQUE0Qix1QkFBNUIsRUFBcUQsTUFBckQsRUFBNkQsWUFBN0QsQ0FBaEM7O0FBRUEsYUFBTyx1QkFBUDtBQUNEOzs7O0VBdkZrRCxtQjs7Ozs7QUNSckQ7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxHQUFHLEdBQUcsV0FBWixDLENBQWtCOztJQUVHLHFCOzs7OztBQUNwQixpQ0FBWSxNQUFaLEVBQW9CLE9BQXBCLEVBQTZCLFlBQTdCLEVBQTJDLGVBQTNDLEVBQTRELGdCQUE1RCxFQUE4RSxrQkFBOUUsRUFBa0csVUFBbEcsRUFBOEcsU0FBOUcsRUFBeUgsT0FBekgsRUFBa0k7QUFBQTs7QUFBQTs7QUFDakksOEJBQU0sTUFBTixFQUFjLE9BQWQsRUFBdUIsWUFBdkIsRUFBcUMsZUFBckMsRUFBc0QsZ0JBQXRELEVBQXdFLGtCQUF4RTtBQUVBLFVBQUssVUFBTCxHQUFrQixVQUFsQjtBQUVBLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUVBLFVBQUssT0FBTCxHQUFlLE9BQWY7QUFQaUk7QUFRakk7Ozs7OEJBRVMsTSxFQUFRO0FBQ2hCLFVBQU0sY0FBYyxHQUFHLE1BQXZCO0FBQUEsVUFBZ0M7QUFDekIsTUFBQSxvQkFBb0IsR0FBRyxjQUFjLENBQUMsTUFEN0M7O0FBR0EsVUFBSSxvQkFBb0IsR0FBRyxDQUEzQixFQUE4QjtBQUM1QixZQUFNLGtCQUFrQixHQUFHLGtCQUFNLGNBQU4sQ0FBM0I7QUFBQSxZQUNPLGFBQWEsR0FBRyxrQkFEdkI7QUFBQSxZQUMyQztBQUNwQyxRQUFBLFNBQVMsR0FBRyxhQUFhLENBQUMsWUFBZCxFQUZuQjtBQUFBLFlBR08sT0FBTSxHQUFHLEtBQUssU0FBTCxDQUFlLFNBQWYsQ0FIaEI7QUFLQSxRQUFBLEdBQUcsQ0FBQyxPQUFELEVBQVMsY0FBVCxDQUFIO0FBQ0E7QUFDRjs7O2tDQUVhLE0sRUFBUTtBQUFBOztBQUNwQixVQUFNLGFBQWEsR0FBRyxFQUF0QjtBQUFBLFVBQ00sYUFBYSxHQUFHLEVBRHRCO0FBQUEsVUFFTSxlQUFlLEdBQUcsRUFGeEI7QUFBQSxVQUdNLDZCQUE2QixHQUFHLEVBSHRDO0FBS0EsVUFBSSxLQUFLLEdBQUcsQ0FBWjtBQUVBLFdBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLFNBQUQsRUFBZTtBQUNyQyxZQUFNLE1BQU0sR0FBRyxNQUFJLENBQUMsU0FBTCxDQUFlLFNBQWYsQ0FBZjtBQUVBLFFBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFDLEtBQUQsRUFBVztBQUN4QixjQUFNLGFBQWEsR0FBRyxLQUF0QjtBQUFBLGNBQThCO0FBQ3hCLFVBQUEsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGdCQUFOLENBQXVCLEtBQXZCLENBRDNCO0FBQUEsY0FFTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsZ0JBQU4sRUFGM0I7QUFBQSxjQUdNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxrQkFBTixFQUg3QjtBQUFBLGNBSU0sb0NBQW9DLEdBQUcsYUFBYSxDQUFDLDBCQUFkLEVBSjdDO0FBQUEsY0FLTSwwQ0FBMEMsR0FBRyxvQ0FMbkQsQ0FEd0IsQ0FNa0U7O0FBRTFGLFVBQUEsR0FBRyxDQUFDLGFBQUQsRUFBZ0Isa0JBQWhCLENBQUg7QUFDQSxVQUFBLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGtCQUFoQixDQUFIO0FBQ0EsVUFBQSxHQUFHLENBQUMsZUFBRCxFQUFrQixvQkFBbEIsQ0FBSDtBQUNBLFVBQUEsR0FBRyxDQUFDLDZCQUFELEVBQWdDLDBDQUFoQyxDQUFIO0FBRUEsVUFBQSxLQUFLO0FBQ04sU0FkRDtBQWdCQSxZQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBdkIsQ0FuQnFDLENBbUJWOztBQUUzQixRQUFBLE1BQUksQ0FBQyxPQUFMLENBQWEsSUFBYixDQUFrQixNQUFsQjtBQUNELE9BdEJEO0FBd0JBLFVBQU0sWUFBWSxHQUFHLEtBQUssZUFBTCxFQUFyQjtBQUVBLE1BQUEsWUFBWSxDQUFDLGdCQUFiLENBQThCLGFBQTlCO0FBQ0EsTUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsYUFBOUI7QUFDQSxNQUFBLFlBQVksQ0FBQyxrQkFBYixDQUFnQyxlQUFoQztBQUNBLE1BQUEsWUFBWSxDQUFDLGdDQUFiLENBQThDLDZCQUE5Qzs7QUFFQSwrRkFBb0IsTUFBcEI7QUFDRDs7OzJCQUVNLE0sRUFBUSxhLEVBQWUsYSxFQUFlLGMsRUFBZ0IsZSxFQUFpQixnQixFQUFrQjtBQUFBOztBQUM5RixVQUFNLE9BQU8sR0FBRyxLQUFLLFVBQUwsRUFBaEI7QUFFQSxNQUFBLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE9BQWxCO0FBRUEsV0FBSyxXQUFMLENBQWlCLE1BQWpCO0FBRUEsVUFBTSxRQUFRLEdBQUcsSUFBakIsQ0FQOEYsQ0FPdEU7O0FBRXhCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxRQUFkLEVBQXdCLGFBQXhCLEVBQXVDLGFBQXZDLEVBQXNELGNBQXRELEVBQXNFLGVBQXRFLEVBQXVGLGdCQUF2RjtBQUVBLFVBQUksS0FBSjtBQUFBLFVBQ0ksTUFBTSxHQUFHLENBRGIsQ0FYOEYsQ0FZN0U7O0FBRWpCLFdBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUN0QyxRQUFBLEtBQUssR0FBRyxNQUFSLENBRHNDLENBQ3RCOztBQUVoQixRQUFBLE1BQU0sR0FBRyxNQUFULENBSHNDLENBR3BCOztBQUVsQixRQUFBLE1BQUksQ0FBQyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLE1BQXZCOztBQUVBLFFBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsTUFBM0I7QUFDRCxPQVJEO0FBU0Q7Ozt1REFFeUMsTSxFQUFRLFUsRUFBWSxXLEVBQWEsTSxFQUFRO0FBQ2pGLFVBQU0sT0FBTyxHQUFHLEVBQWhCO0FBQUEsVUFDTSxTQUFTLEdBQUcsRUFEbEI7QUFHQSxNQUFBLE1BQU0sQ0FBQyxPQUFQLENBQWUsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUMvQixZQUFNLE1BQU0sR0FBRyxFQUFmO0FBQUEsWUFDTSxNQUFNLEdBQUcsV0FEZjtBQUFBLFlBQzRCO0FBQ3RCLFFBQUEsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFELENBRjVCO0FBSUEsUUFBQSxTQUFTLENBQUMsU0FBRCxDQUFULEdBQXVCLE1BQXZCO0FBRUEsUUFBQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFyQixFQUE0QixLQUE1QixFQUFtQyxNQUFuQztBQUNELE9BUkQ7O0FBVUEsVUFBTSxxQkFBcUIsR0FBRyxvQkFBZ0IsV0FBaEIsQ0FBNEIscUJBQTVCLEVBQW1ELE1BQW5ELEVBQTJELFVBQTNELEVBQXVFLFNBQXZFLEVBQWtGLE9BQWxGLENBQTlCOztBQUVBLGFBQU8scUJBQVA7QUFDRDs7OztFQTdHZ0QsbUI7Ozs7O0FDUm5EOzs7Ozs7OztBQUVPLFNBQVMsc0JBQVQsQ0FBZ0MsV0FBaEMsRUFBNkM7QUFBRSxTQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxJQUFJLFdBQUwsSUFBb0IsQ0FBOUIsQ0FBUDtBQUEwQzs7QUFFekYsU0FBUyx3QkFBVCxDQUFrQyxXQUFsQyxFQUErQztBQUFFLFNBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFDLElBQUksV0FBTCxJQUFvQixDQUE5QixDQUFQO0FBQTBDOzs7QUNKbEc7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBUyx5QkFBVCxDQUFtQyxLQUFuQyxFQUFtRjtBQUFBLE1BQXpDLGFBQXlDLHVFQUF6QixrQ0FBeUI7QUFBRSxTQUFPLHNCQUFzQixDQUFDLEtBQUQsRUFBUSxDQUFSLEVBQVcsYUFBWCxDQUE3QjtBQUF5RDs7QUFFOUksU0FBUywwQkFBVCxDQUFvQyxLQUFwQyxFQUFvRjtBQUFBLE1BQXpDLGFBQXlDLHVFQUF6QixrQ0FBeUI7QUFBRSxTQUFPLHNCQUFzQixDQUFDLEtBQUQsRUFBUSxDQUFSLEVBQVcsYUFBWCxDQUE3QjtBQUF5RDs7QUFFdEosU0FBUyxzQkFBVCxDQUFnQyxNQUFoQyxFQUF3QyxNQUF4QyxFQUF5RjtBQUFBLE1BQXpDLGFBQXlDLHVFQUF6QixrQ0FBeUI7QUFDdkYsTUFBTSxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQTVCO0FBQUEsTUFDTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLFVBQVQsQ0FEM0I7QUFBQSxNQUVNLGtCQUFrQixHQUFJLGtCQUFrQixHQUFHLGFBRmpEO0FBSUEsU0FBTyxrQkFBUDtBQUNEOzs7QUNkRDs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUVlLEssR0FBd0QseUIsQ0FBeEQsSztJQUFPLE0sR0FBaUQseUIsQ0FBakQsTTtJQUFRLEssR0FBeUMseUIsQ0FBekMsSztJQUFPLE0sR0FBa0MseUIsQ0FBbEMsTTtJQUFRLEksR0FBMEIseUIsQ0FBMUIsSTtJQUFNLEssR0FBb0IseUIsQ0FBcEIsSztJQUFPLFEsR0FBYSx5QixDQUFiLFE7Ozs7Ozs7OztBQUVuRCxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsTUFBeEIsRUFBZ0M7QUFDckMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXJCO0FBQUEsTUFDTSxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BRHJCO0FBQUEsTUFFTSxlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFaLEVBQWUsR0FBZixDQUZ4QjtBQUFBLE1BR00sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxHQUFaLENBSHpCO0FBS0EsRUFBQSxLQUFLLGdDQUFRLGdCQUFSLHNCQUE2QixlQUE3QixFQUFMO0FBRUEsU0FBTyxLQUFQO0FBQ0Q7O0FBRU0sU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCO0FBQzlCLFNBQU8sTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFDLFFBQUQsRUFBVyxLQUFYO0FBQUEsV0FBcUIsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEIsQ0FBckI7QUFBQSxHQUFkLEVBQTJELEVBQTNELENBQVA7QUFDRDs7QUFFTSxTQUFTLFNBQVQsQ0FBbUIsY0FBbkIsRUFBbUM7QUFDeEMsRUFBQSxjQUFjLEdBQUcsY0FBYyxJQUFJLEVBQW5DO0FBRUEsU0FBUSxjQUFjLFlBQVksS0FBM0IsR0FDRSxjQURGLEdBRUcsQ0FBQyxjQUFELENBRlY7QUFHRDs7O0FDM0JEOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFTyxTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDaEMsRUFBQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxVQUFDLElBQUQ7QUFBQSxXQUFVLElBQUksQ0FBQyxLQUFMLEVBQVY7QUFBQSxHQUFWLENBQVI7QUFFQSxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkI7QUFDbEMsRUFBQSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQVAsRUFBVDtBQUVBLFNBQU8sTUFBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQztBQUN0QyxFQUFBLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBVCxDQUFhLFVBQUMsTUFBRDtBQUFBLFdBQVksTUFBTSxDQUFDLEtBQVAsRUFBWjtBQUFBLEdBQWIsQ0FBWDtBQUVBLFNBQU8sUUFBUDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxJQUFsQyxFQUF3QztBQUM3QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBVCxDQUFhLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7QUFDNUMsUUFBTSxVQUFVLEdBQUcsS0FBbkI7QUFBQSxRQUEwQjtBQUNwQixJQUFBLFFBQVEsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFkLElBQW1CLDBCQURwQztBQUFBLFFBRU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxVQUFELENBRjVCO0FBQUEsUUFHTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQUQsQ0FIMUI7QUFBQSxRQUlNLElBQUksR0FBRyxJQUFJLENBQUMsMkJBQUwsQ0FBaUMsV0FBakMsRUFBOEMsU0FBOUMsQ0FKYjtBQU1BLFdBQU8sSUFBUDtBQUNELEdBUmEsQ0FBZDtBQVVBLFNBQU8sS0FBUDtBQUNEOztBQUVNLFNBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxNQUFuQyxFQUEyQztBQUNoRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBUCxDQUFvQixRQUFwQixDQUFmO0FBRUEsU0FBTyxNQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDO0FBQ3RDLE1BQU0sV0FBVyxHQUFHLGtCQUFNLFFBQU4sQ0FBcEI7QUFBQSxNQUNNLFlBQVksR0FBRyxtQkFBTyxRQUFQLENBRHJCO0FBQUEsTUFFTSxXQUFXLEdBQUcsa0JBQU0sUUFBTixDQUZwQjtBQUFBLE1BR00sbUJBQW1CLEdBQUcsV0FBVyxDQUFDLFdBQVosRUFINUI7QUFBQSxNQUlNLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxXQUFiLEVBSjdCO0FBQUEsTUFLTSxtQkFBbUIsR0FBRyxXQUFXLENBQUMsV0FBWixFQUw1QjtBQUFBLE1BTU0sV0FBVyxHQUFHLHVCQUFVLG9CQUFWLEVBQWdDLG1CQUFoQyxDQU5wQjtBQUFBLE1BT00sWUFBWSxHQUFHLHVCQUFVLG1CQUFWLEVBQStCLG1CQUEvQixDQVByQjtBQUFBLE1BUU0sSUFBSSxHQUFHLHFCQUFRLG9CQUFPLFdBQVAsRUFBb0IsWUFBcEIsQ0FBUixJQUE2QyxDQVIxRDtBQVVBLFNBQU8sSUFBUDtBQUNEOzs7QUN4REQ7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRU8sU0FBUyxxQkFBVCxDQUErQixJQUEvQixFQUFxQyxzQkFBckMsRUFBNkQ7QUFDbEUsTUFBSSxZQUFZLEdBQUcsSUFBbkI7QUFFQSxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFELENBQXpDOztBQUVBLE1BQUksZUFBSixFQUFxQjtBQUNuQixRQUFNLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDLElBQUQsRUFBTyxzQkFBUCxDQUFsRDtBQUFBLFFBQ00sMEJBQTBCLEdBQUssZ0JBQWdCLEdBQUcsQ0FBcEIsSUFBNEIsZ0JBQWdCLEdBQUcsQ0FEbkY7O0FBR0EsUUFBSSwwQkFBSixFQUFnQztBQUM5QixNQUFBLFlBQVksR0FBRyxnQkFBZixDQUQ4QixDQUNJO0FBQ25DO0FBQ0Y7O0FBRUQsU0FBTyxZQUFQO0FBQ0Q7O0FBRU0sU0FBUyw2QkFBVCxDQUF1QyxhQUF2QyxFQUFzRDtBQUMzRCxNQUFNLG9CQUFvQixHQUFHLGFBQWEsQ0FBQyxNQUFkLENBQXFCLFVBQUMsb0JBQUQsRUFBdUIsWUFBdkIsRUFBd0M7QUFDeEYsUUFBSSxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekIsVUFBTSxtQkFBbUIsR0FBRyxZQUE1QixDQUR5QixDQUNpQjs7QUFFMUMsTUFBQSxvQkFBb0IsQ0FBQyxJQUFyQixDQUEwQixtQkFBMUI7QUFDRDs7QUFFRCxXQUFPLG9CQUFQO0FBQ0QsR0FSNEIsRUFRMUIsRUFSMEIsQ0FBN0I7QUFVQSxTQUFPLG9CQUFQO0FBQ0Q7O0FBRU0sU0FBUyw4QkFBVCxDQUF3QyxhQUF4QyxFQUF1RDtBQUM1RCxNQUFNLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxNQUFkLENBQXFCLFVBQUMscUJBQUQsRUFBd0IsWUFBeEIsRUFBc0MsS0FBdEMsRUFBZ0Q7QUFDakcsUUFBSSxxQkFBcUIsS0FBSyxJQUE5QixFQUFvQztBQUNsQyxVQUFJLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QixRQUFBLHFCQUFxQixHQUFHLEtBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLHFCQUFQO0FBQ0QsR0FSNkIsRUFRM0IsSUFSMkIsQ0FBOUI7QUFVQSxTQUFPLHFCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxpQ0FBVCxDQUEyQyxhQUEzQyxFQUEwRDtBQUMvRCxNQUFNLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxNQUFkLENBQXFCLFVBQUMscUJBQUQsRUFBd0IsWUFBeEIsRUFBc0MsS0FBdEMsRUFBZ0Q7QUFDakcsUUFBSSxxQkFBcUIsS0FBSyxJQUE5QixFQUFvQztBQUNsQyxVQUFJLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QixRQUFBLHFCQUFxQixHQUFHLEtBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPLHFCQUFQO0FBQ0QsR0FSNkIsRUFRM0IsSUFSMkIsQ0FBOUI7QUFVQSxTQUFPLHFCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxtQ0FBVCxDQUE2QyxtQkFBN0MsRUFBa0UsaUJBQWxFLEVBQXFGLFlBQXJGLEVBQW1HO0FBQ3hHLE1BQU0sTUFBTSxHQUFHLHVCQUFVLGlCQUFWLEVBQTZCLG1CQUE3QixDQUFmO0FBQUEsTUFDTSxNQUFNLEdBQUcsb0JBQU8sTUFBUCxFQUFlLFlBQWYsQ0FEZjtBQUFBLE1BRU0sMEJBQTBCLEdBQUcsa0JBQUssbUJBQUwsRUFBMEIsTUFBMUIsQ0FGbkM7QUFJQSxTQUFPLDBCQUFQO0FBQ0Q7O0FBRUQsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQztBQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBTCxFQUFuQjtBQUFBLE1BQ00sb0JBQW9CLEdBQUcsVUFEN0I7QUFBQSxNQUN5QztBQUNuQyxFQUFBLHdCQUF3QixHQUFHLGtCQUFNLG9CQUFOLENBRmpDO0FBQUEsTUFHTSx5QkFBeUIsR0FBRyxtQkFBTyxvQkFBUCxDQUhsQztBQUFBLE1BSU0sZ0JBQWdCLEdBQUcsd0JBQXdCLEdBQUcseUJBSnBEO0FBQUEsTUFLTSx3Q0FBd0MsR0FBRyw2Q0FBMkIsZ0JBQTNCLENBTGpEO0FBQUEsTUFNTSxZQUFZLEdBQUcsd0NBTnJCO0FBQUEsTUFNK0Q7QUFDekQsRUFBQSxlQUFlLEdBQUcsQ0FBQyxZQVB6QjtBQVNBLFNBQU8sZUFBUDtBQUNEOztBQUVELFNBQVMseUJBQVQsQ0FBbUMsSUFBbkMsRUFBeUMsc0JBQXpDLEVBQWlFO0FBQy9ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFMLEVBQW5CO0FBQUEsTUFDTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQUwsRUFEckI7QUFBQSxNQUVNLG9CQUFvQixHQUFHLFVBRjdCO0FBQUEsTUFFeUM7QUFDbkMsRUFBQSxzQkFBc0IsR0FBRyxZQUgvQjtBQUFBLE1BRzZDO0FBQ3ZDLEVBQUEsd0JBQXdCLEdBQUcsa0JBQU0sb0JBQU4sQ0FKakM7QUFBQSxNQUtNLDBCQUEwQixHQUFHLGtCQUFNLHNCQUFOLENBTG5DO0FBQUEsTUFNTSxnQkFBZ0IsR0FBRyxDQUFDLHNCQUFzQixHQUFHLDBCQUExQixJQUF3RCx3QkFOakY7QUFRQSxTQUFPLGdCQUFQO0FBQ0Q7OztBQ2hHRDs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sU0FBUyxvQkFBVCxDQUE4QixLQUE5QixFQUFxQztBQUMxQyxNQUFJLFdBQVcsR0FBRyx3QkFBbEI7QUFFQSxFQUFBLFdBQVcsR0FBRyxvQkFBTyxXQUFQLEVBQW9CLEtBQXBCLENBQWQ7QUFFQSxTQUFPLFdBQVA7QUFDRDs7QUFFTSxTQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDO0FBQ2hELE1BQUksYUFBYSxHQUFHLHdCQUFwQixDQURnRCxDQUNmOztBQUVqQyxFQUFBLGFBQWEsR0FBRyx3QkFBVyxhQUFYLEVBQTBCLE9BQTFCLENBQWhCO0FBRUEsU0FBTyxhQUFQO0FBQ0Q7O0FBRU0sU0FBUyx5QkFBVCxHQUFxQztBQUMxQyxNQUFJLGNBQWMsR0FBRyx3QkFBckIsQ0FEMEMsQ0FDUjs7QUFFbEMsU0FBTyxjQUFQO0FBQ0Q7O0FBRU0sU0FBUywwQkFBVCxDQUFvQyxRQUFwQyxFQUE4QztBQUNuRCxNQUFJLGNBQWMsR0FBRyx3QkFBckIsQ0FEbUQsQ0FDakI7O0FBRWxDLE1BQU0sQ0FBQyxHQUFHLENBQVY7QUFBQSxNQUNNLENBQUMsR0FBRyxDQURWO0FBQUEsTUFFTSxDQUFDLEdBQUcsQ0FBQyxRQUZYO0FBSUEsRUFBQSxjQUFjLEdBQUcsd0JBQVcsY0FBWCxFQUEyQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUEzQixDQUFqQjtBQUVBLFNBQU8sY0FBUDtBQUNEOztBQUVNLFNBQVMsMEJBQVQsQ0FBb0MsUUFBcEMsRUFBOEM7QUFDbkQsTUFBSSxjQUFjLEdBQUcsd0JBQXJCLENBRG1ELENBQ2pCOztBQUVsQyxFQUFBLGNBQWMsR0FBRyx3QkFBVyxjQUFYLEVBQTJCLFFBQTNCLENBQWpCO0FBRUEsU0FBTyxjQUFQO0FBQ0Q7O0FBRU0sU0FBUyx5QkFBVCxDQUFtQyxNQUFuQyxFQUFpRTtBQUFBLE1BQXRCLFlBQXNCLHVFQUFQLEtBQU87QUFDdEUsTUFBSSxlQUFlLEdBQUcsd0JBQXRCLENBRHNFLENBQ25DOztBQUVuQyxNQUFNLFVBQVUsR0FBRyxrQkFBTSxNQUFOLENBQW5CO0FBQUEsTUFDTSxXQUFXLEdBQUcsbUJBQU8sTUFBUCxDQURwQjtBQUFBLE1BRU0sVUFBVSxHQUFHLGtCQUFNLE1BQU4sQ0FGbkI7QUFBQSxNQUdNLE1BQU0sR0FBRyxVQUhmO0FBQUEsTUFJTSxNQUFNLEdBQUcsV0FKZjtBQUFBLE1BS00sTUFBTSxHQUFHLFVBTGY7QUFBQSxNQU1NLEtBQUssR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQU5kO0FBQUEsTUFPTSxLQUFLLEdBQUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FQZDtBQUFBLE1BUU0sS0FBSyxHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBUmQ7O0FBVUEsTUFBSSxZQUFKLEVBQWtCO0FBQ2hCLElBQUEsZUFBZSxHQUFHLHFCQUFRLGVBQVIsRUFBeUIsTUFBekIsRUFBaUMsS0FBakMsQ0FBbEI7QUFFQSxJQUFBLGVBQWUsR0FBRyxxQkFBUSxlQUFSLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLENBQWxCO0FBRUEsSUFBQSxlQUFlLEdBQUcscUJBQVEsZUFBUixFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxDQUFsQjtBQUNELEdBTkQsTUFNTztBQUNMLElBQUEsZUFBZSxHQUFHLHFCQUFRLGVBQVIsRUFBeUIsTUFBekIsRUFBaUMsS0FBakMsQ0FBbEI7QUFFQSxJQUFBLGVBQWUsR0FBRyxxQkFBUSxlQUFSLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLENBQWxCO0FBRUEsSUFBQSxlQUFlLEdBQUcscUJBQVEsZUFBUixFQUF5QixNQUF6QixFQUFpQyxLQUFqQyxDQUFsQjtBQUNEOztBQUVELFNBQU8sZUFBUDtBQUNEOztBQUVNLFNBQVMsNEJBQVQsQ0FBc0MsU0FBdEMsRUFBaUQ7QUFDdEQsTUFBTSxNQUFNLEdBQUcsb0NBQWY7QUFBQSxNQUNNLE1BQU0sR0FBRyxvQkFBTyxTQUFQLEVBQWtCLE1BQWxCLENBRGY7QUFBQSxNQUVNLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQyxNQUFELENBRmpEO0FBSUEsU0FBTyxlQUFQO0FBQ0Q7O0FBRU0sU0FBUyxnQ0FBVCxDQUEwQyxlQUExQyxFQUEyRDtBQUNoRSxNQUFJLGFBQWEsR0FBRyxxQkFBUSxlQUFSLENBQXBCO0FBRUEsRUFBQSxhQUFhLEdBQUcsd0JBQVcsYUFBWCxDQUFoQjtBQUVBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsa0NBQVQsQ0FBNEMsS0FBNUMsRUFBbUQsTUFBbkQsRUFBMkQ7QUFDaEUsTUFBTSxXQUFXLEdBQUcsd0JBQXBCO0FBQUEsTUFBb0M7QUFDOUIsRUFBQSxXQUFXLEdBQUcsS0FBSyxHQUFHLE1BRDVCO0FBQUEsTUFFTSxLQUFLLEdBQUcsaUJBRmQ7QUFBQSxNQUVzQjtBQUNoQixFQUFBLElBQUksR0FBRyxnQkFIYjtBQUFBLE1BR29CO0FBQ2QsRUFBQSxnQkFBZ0IsR0FBRywwQkFBYSxXQUFiLEVBQTBCLFdBQTFCLEVBQXVDLEtBQXZDLEVBQThDLElBQTlDLENBSnpCO0FBTUEsU0FBTyxnQkFBUDtBQUNEOzs7QUN2R0Q7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVMseUJBQVQsQ0FBbUMsUUFBbkMsRUFBNkM7QUFDbEQsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsTUFBVCxDQUFnQixVQUFDLGdCQUFELEVBQW1CLE1BQW5CLEVBQThCO0FBQ3JFLFFBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFQLEVBQXZCO0FBQUEsUUFDTSxvQkFBb0IsR0FBRyxvQkFBTyxjQUFQLEVBQXVCLElBQUUsQ0FBekIsQ0FEN0I7QUFHQSxJQUFBLGdCQUFnQixHQUFHLGtCQUFLLGdCQUFMLEVBQXVCLG9CQUF2QixDQUFuQjtBQUVBLFdBQU8sZ0JBQVA7QUFDRCxHQVB3QixFQU90QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQVBzQixDQUF6QjtBQVNBLFNBQU8sZ0JBQVA7QUFDRDs7QUFFTSxTQUFTLGtDQUFULENBQTRDLGdCQUE1QyxFQUE4RDtBQUNuRSxFQUFBLGdCQUFnQixnQ0FBUSxnQkFBZ0IsQ0FBQyxLQUFqQixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFSLElBQXNDLENBQXRDLEVBQWhCLENBRG1FLENBQ1A7O0FBRTVELFNBQU8sZ0JBQVA7QUFDRDs7QUFFTSxTQUFTLHlDQUFULENBQW1ELGdCQUFuRCxFQUFxRSxZQUFyRSxFQUFtRjtBQUN4RixNQUFNLHVDQUF1QyxHQUFHLHlDQUF5QyxDQUFDLGdCQUFELEVBQW1CLFlBQW5CLENBQXpGO0FBQUEsTUFDTSx3Q0FBd0MsR0FBRywwQ0FBMEMsQ0FBQyxnQkFBRCxFQUFtQixZQUFuQixDQUQzRjtBQUFBLE1BRU0sdUNBQXVDLEdBQUcsdUNBQXVDLElBQUksd0NBRjNGLENBRHdGLENBRzZDOztBQUVySSxTQUFPLHVDQUFQO0FBQ0Q7O0FBRUQsU0FBUyx5Q0FBVCxDQUFtRCxnQkFBbkQsRUFBcUUsWUFBckUsRUFBbUY7QUFDakYsTUFBTSx1Q0FBdUMsR0FBRyxZQUFZLENBQUMsTUFBYixDQUFvQixVQUFDLHVDQUFELEVBQTBDLFdBQTFDLEVBQTBEO0FBQzVILFFBQUksdUNBQUosRUFBNkM7QUFDM0MsVUFBTSxzQ0FBc0MsR0FBRyxXQUFXLENBQUMsMkJBQVosQ0FBd0MsZ0JBQXhDLENBQS9DO0FBRUEsTUFBQSx1Q0FBdUMsR0FBRyxzQ0FBMUM7QUFDRDs7QUFFRCxXQUFPLHVDQUFQO0FBQ0QsR0FSK0MsRUFRN0MsSUFSNkMsQ0FBaEQ7QUFVQSxTQUFPLHVDQUFQO0FBQ0Q7O0FBRUQsU0FBUywwQ0FBVCxDQUFvRCxnQkFBcEQsRUFBc0UsWUFBdEUsRUFBb0Y7QUFDbEYsTUFBTSx3Q0FBd0MsR0FBRyxZQUFZLENBQUMsTUFBYixDQUFvQixVQUFDLHdDQUFELEVBQTJDLFdBQTNDLEVBQTJEO0FBQzlILFFBQUksd0NBQUosRUFBOEM7QUFDNUMsVUFBTSx1Q0FBdUMsR0FBRyxXQUFXLENBQUMsNEJBQVosQ0FBeUMsZ0JBQXpDLENBQWhEO0FBRUEsTUFBQSx3Q0FBd0MsR0FBRyx1Q0FBM0M7QUFDRDs7QUFFRCxXQUFPLHdDQUFQO0FBQ0QsR0FSZ0QsRUFROUMsSUFSOEMsQ0FBakQ7QUFVQSxTQUFPLHdDQUFQO0FBQ0Q7OztBQ3pERDs7Ozs7OztBQUVBOztBQUNBOztBQUVPLFNBQVMsc0NBQVQsQ0FBZ0QsTUFBaEQsRUFBd0QsVUFBeEQsRUFBb0U7QUFDekUsTUFBTSxZQUFZLEdBQUcsSUFBckI7QUFBQSxNQUNNLGVBQWUsR0FBRyxzQkFBUyxNQUFULENBRHhCO0FBQUEsTUFFTSxlQUFlLEdBQUcsdUNBQTBCLGVBQTFCLEVBQTJDLFlBQTNDLENBRnhCO0FBQUEsTUFHTSxlQUFlLEdBQUcsd0JBQVcsVUFBWCxFQUF1QixlQUF2QixFQUF3QyxLQUF4QyxDQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxDQUh4QixDQUR5RSxDQUlJOztBQUU3RSxTQUFPLGVBQVA7QUFDRDs7O0FDWkQ7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLFNBQVMseUJBQVQsQ0FBbUMsbUJBQW5DLEVBQXdELGtCQUF4RCxFQUE0RSx5QkFBNUUsRUFBdUc7QUFBRSxTQUFPLGVBQWUsQ0FBQyxlQUFlLENBQUMsa0JBQUQsRUFBcUIsbUJBQXJCLENBQWhCLEVBQTJELHlCQUEzRCxDQUF0QjtBQUE4Rzs7QUFFdk4sU0FBUyxrQ0FBVCxDQUE0QyxrQkFBNUMsRUFBZ0U7QUFDckUsTUFBTSw0QkFBNEIsR0FBRyxrQkFBckM7QUFBQSxNQUEwRDtBQUNwRCxFQUFBLGdDQUFnQyxHQUFHLGtCQUFNLDRCQUFOLENBRHpDO0FBQUEsTUFFTSxpQ0FBaUMsR0FBRyxtQkFBTyw0QkFBUCxDQUYxQztBQUFBLE1BR00sZ0NBQWdDLEdBQUcsa0JBQU0sNEJBQU4sQ0FIekM7QUFBQSxNQUlNLGlDQUFpQyxHQUFHLG1CQUFPLDRCQUFQLENBSjFDO0FBQUEsTUFLTSx5QkFBeUIsR0FBRyxDQUMxQixnQ0FEMEIsRUFFMUIsQ0FBQyxpQ0FGeUIsRUFHMUIsQ0FBQyxnQ0FIeUIsRUFJMUIsQ0FBQyxpQ0FKeUIsQ0FMbEM7QUFZQSxTQUFPLHlCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxtQ0FBVCxDQUE2QyxrQkFBN0MsRUFBaUU7QUFDdEUsTUFBTSwwQkFBMEIsR0FBRyxrQkFBbkMsQ0FEc0UsQ0FDZDs7QUFFeEQsU0FBTywwQkFBUDtBQUNEOztBQUVNLFNBQVMsb0NBQVQsQ0FBOEMsa0JBQTlDLEVBQWtFO0FBQ3ZFLE1BQU0seUJBQXlCLEdBQUcsa0NBQWtDLENBQUMsa0JBQUQsQ0FBcEU7QUFBQSxNQUNNLDJCQUEyQixHQUFHLHlCQURwQyxDQUR1RSxDQUVQOztBQUVoRSxTQUFPLDJCQUFQO0FBRUQ7O0FBRU0sU0FBUyxvQ0FBVCxDQUE4QyxNQUE5QyxFQUFzRDtBQUMzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUCxFQUFmO0FBQUEsTUFDTSxVQUFVLEdBQUcsTUFEbkI7QUFBQSxNQUM0QjtBQUN0QixFQUFBLEtBQUssR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUZkO0FBQUEsTUFHTSw4QkFBOEIsR0FBRyxrQkFBSyxVQUFMLEVBQWlCLEtBQWpCLENBSHZDO0FBQUEsTUFJTSxnQ0FBZ0MsR0FBRyxvQkFBTyxVQUFQLEVBQW1CLEtBQW5CLENBSnpDO0FBQUEsTUFLTSxxQkFBcUIsR0FBRyw4QkFMOUI7QUFBQSxNQUs4RDtBQUN4RCxFQUFBLGtDQUFrQyxHQUFHLElBQUksQ0FBQyxHQUFMLENBQVMscUJBQVQsQ0FOM0M7QUFBQSxNQU9NLHlEQUF5RCxHQUFHLDRDQUEwQixrQ0FBMUIsQ0FQbEU7QUFBQSxNQVFNLGNBQWMsR0FBRyx5REFBeUQsR0FDeEQsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEd0QsR0FDMUM7QUFDWixFQUFBLGdDQVYxQjtBQUFBLE1BV00sa0JBQWtCLEdBQUcsd0JBQVcsY0FBWCxDQVgzQjtBQUFBLE1BWU0seUJBQXlCLEdBQUcscUNBQXlCLHFCQUF6QixDQVpsQztBQUFBLE1BYU0sdUJBQXVCLEdBQUcsbUNBQXVCLHFCQUF2QixDQWJoQztBQUFBLE1BY00sNEJBQTRCLEdBQUcsa0JBZHJDO0FBQUEsTUFjMEQ7QUFDcEQsRUFBQSw0QkFBNEIsR0FBRyxrQkFBTSw0QkFBTixDQWZyQztBQUFBLE1BZ0JNLDZCQUE2QixHQUFHLG1CQUFPLDRCQUFQLENBaEJ0QztBQUFBLE1BaUJNLDRCQUE0QixHQUFHLGtCQUFNLDRCQUFOLENBakJyQztBQUFBLE1Ba0JNLDJCQUEyQixHQUFHLENBQzVCLHlCQUQ0QixFQUU1Qiw0QkFBNEIsR0FBRyx1QkFGSCxFQUc1Qiw2QkFBNkIsR0FBRyx1QkFISixFQUk1Qiw0QkFBNEIsR0FBRyx1QkFKSCxDQWxCcEM7QUF5QkEsU0FBTywyQkFBUDtBQUNEOztBQUVNLFNBQVMscUNBQVQsQ0FBK0MsV0FBL0MsRUFBNEQ7QUFDakUsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsU0FBWixFQUExQjtBQUFBLE1BQ00scUJBQXFCLEdBQUcsd0JBQVcsaUJBQVgsQ0FEOUI7QUFBQSxNQUVNLCtCQUErQixHQUFHLHFCQUZ4QztBQUFBLE1BRWdFO0FBQzFELEVBQUEsbUNBQW1DLEdBQUcsa0JBQU0sK0JBQU4sQ0FINUM7QUFBQSxNQUlNLG9DQUFvQyxHQUFHLG1CQUFPLCtCQUFQLENBSjdDO0FBQUEsTUFLTSxtQkFBbUIsR0FBRyxtQ0FMNUI7QUFBQSxNQUtrRTtBQUM1RCxFQUFBLHFCQUFxQixHQUFHLG9DQU45QjtBQUFBLE1BTXFFO0FBQy9ELEVBQUEseUJBQXlCLEdBQUcscUNBQXlCLHFCQUF6QixDQVBsQztBQUFBLE1BUU0sdUJBQXVCLEdBQUksbUJBQW1CLEdBQUcsQ0FBdkIsR0FDQyxDQUFDLG1DQUF1QixxQkFBdkIsQ0FERixHQUVHLENBQUMsbUNBQXVCLHFCQUF2QixDQVZwQztBQUFBLE1BV00sNEJBQTRCLEdBQUcsQ0FDN0IseUJBRDZCLEVBRTdCLENBRjZCLEVBRzdCLENBSDZCLEVBSTdCLHVCQUo2QixDQVhyQztBQWtCQSxTQUFPLDRCQUFQO0FBQ0Q7O0FBRUQsU0FBUyxlQUFULENBQXlCLFdBQXpCLEVBQXNDLFdBQXRDLEVBQW1EO0FBQ2pELE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFELENBQXRCO0FBQUEsTUFDTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUQsQ0FEdEI7QUFBQSxNQUVNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BR00sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFELENBSHRCO0FBQUEsTUFJTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUQsQ0FKdEI7QUFBQSxNQUtNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUx0QjtBQUFBLE1BTU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFELENBTnRCO0FBQUEsTUFPTSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUQsQ0FQdEI7QUFBQSxNQVFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQUF6QixHQUE4QixFQUFFLEdBQUcsRUFSN0M7QUFBQSxNQVNNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQUF6QixHQUE4QixFQUFFLEdBQUcsRUFUN0M7QUFBQSxNQVVNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQUF6QixHQUE4QixFQUFFLEdBQUcsRUFWN0M7QUFBQSxNQVdNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBTCxHQUFVLEVBQUUsR0FBRyxFQUFmLEdBQW9CLEVBQUUsR0FBRyxFQUF6QixHQUE4QixFQUFFLEdBQUcsRUFYN0M7QUFBQSxNQVlNLFVBQVUsR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FabkI7QUFjQSxTQUFPLFVBQVA7QUFDRDs7O0FDMUdEOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLGtCQUFsQyxFQUFzRDtBQUMzRCxNQUFNLG1CQUFtQixHQUFHLCtCQUErQixDQUFDLFFBQUQsQ0FBM0Q7QUFBQSxNQUNNLHlCQUF5QixHQUFHLG9EQUFtQyxrQkFBbkMsQ0FEbEM7QUFBQSxNQUVNLDBCQUEwQixHQUFHLDJDQUEwQixtQkFBMUIsRUFBK0Msa0JBQS9DLEVBQW1FLHlCQUFuRSxDQUZuQztBQUlBLEVBQUEsUUFBUSxHQUFHLCtCQUErQixDQUFDLDBCQUFELENBQTFDO0FBRUEsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUywrQkFBVCxDQUF5QyxRQUF6QyxFQUFtRDtBQUFFLFVBQVEsQ0FBUiw0QkFBYyxRQUFkO0FBQTBCLEMsQ0FBRTs7O0FBRWpGLFNBQVMsK0JBQVQsQ0FBeUMsbUJBQXpDLEVBQThEO0FBQUUsU0FBTyxtQkFBbUIsQ0FBQyxLQUFwQixDQUEwQixDQUExQixDQUFQO0FBQXNDLEMsQ0FBRTs7O0FDaEJ4Rzs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sU0FBUyw0QkFBVCxDQUFzQyx1QkFBdEMsRUFBK0Q7QUFDcEUsRUFBQSx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQyxHQUF4QixDQUE0QixVQUFDLHNCQUFEO0FBQUEsV0FBNEIsc0JBQXNCLENBQUMsS0FBdkIsRUFBNUI7QUFBQSxHQUE1QixDQUExQixDQURvRSxDQUNnRDs7QUFFcEgsU0FBTyx1QkFBUDtBQUNEOztBQUVNLFNBQVMsc0NBQVQsQ0FBZ0QsdUJBQWhELEVBQXlFLE1BQXpFLEVBQWlGO0FBQUEsTUFDOUUsSUFEOEUsR0FDOUMsTUFEOEMsQ0FDOUUsSUFEOEU7QUFBQSxNQUN4RSxNQUR3RSxHQUM5QyxNQUQ4QyxDQUN4RSxNQUR3RTtBQUFBLE1BQ2hFLEtBRGdFLEdBQzlDLE1BRDhDLENBQ2hFLEtBRGdFO0FBQUEsTUFDekQsTUFEeUQsR0FDOUMsTUFEOEMsQ0FDekQsTUFEeUQ7QUFBQSxNQUVoRiw2QkFGZ0YsR0FFaEQsdUJBQXVCLENBQUMsR0FBeEIsQ0FBNEIsVUFBQyxzQkFBRDtBQUFBLFdBQTRCLGtCQUFLLHVCQUFVLHNCQUFWLEVBQWtDLENBQUUsS0FBRixFQUFTLE1BQVQsQ0FBbEMsQ0FBTCxFQUE0RCxDQUFFLElBQUYsRUFBUSxNQUFSLENBQTVELENBQTVCO0FBQUEsR0FBNUIsQ0FGZ0QsRUFFd0Y7O0FBRTlLLFNBQU8sNkJBQVA7QUFDRDs7QUFFTSxTQUFTLHdDQUFULENBQWtELFFBQWxELEVBQTRELE1BQTVELEVBQW9FLGNBQXBFLEVBQW9GLHVCQUFwRixFQUE2RztBQUNsSCxNQUFNLDJCQUEyQixHQUFHLHNEQUFxQyxNQUFyQyxDQUFwQztBQUFBLE1BQ00sa0JBQWtCLEdBQUcsMkJBRDNCLENBRGtILENBRTFEOztBQUV4RCxNQUFNLFlBQVksR0FBRyw4QkFBZSxRQUFmLEVBQXlCLGtCQUF6QixDQUFyQjtBQUVBLEVBQUEsY0FBYyxHQUFHLDhCQUFlLGNBQWYsRUFBK0Isa0JBQS9CLENBQWpCO0FBRUEsRUFBQSxRQUFRLEdBQUcsWUFBWCxDQVJrSCxDQVF4Rjs7QUFFMUIsTUFBTSxXQUFXLEdBQUcsa0JBQU0sUUFBTixDQUFwQjtBQUFBLE1BQ00sWUFBWSxHQUFHLG1CQUFPLFFBQVAsQ0FEckI7QUFBQSxNQUVNLFdBQVcsR0FBRyxrQkFBTSxRQUFOLENBRnBCO0FBQUEsTUFHTSxpQkFBaUIsR0FBRyxrQkFBTSxjQUFOLENBSDFCO0FBQUEsTUFJTSxrQkFBa0IsR0FBRyxtQkFBTyxjQUFQLENBSjNCO0FBQUEsTUFLTSxpQkFBaUIsR0FBRyxrQkFBTSxjQUFOLENBTDFCO0FBQUEsTUFNTSwyQkFBMkIsR0FBRyxrQkFBTSx1QkFBTixDQU5wQztBQUFBLE1BT00sNEJBQTRCLEdBQUcsbUJBQU8sdUJBQVAsQ0FQckM7QUFBQSxNQVFNLDJCQUEyQixHQUFHLGtCQUFNLHVCQUFOLENBUnBDO0FBQUEsTUFTTSxtQkFBbUIsR0FBRyxXQUFXLENBQUMsV0FBWixFQVQ1QjtBQUFBLE1BVU0sb0JBQW9CLEdBQUcsWUFBWSxDQUFDLFdBQWIsRUFWN0I7QUFBQSxNQVdNLG1CQUFtQixHQUFHLFdBQVcsQ0FBQyxXQUFaLEVBWDVCO0FBQUEsTUFZTSx5QkFBeUIsR0FBRyxpQkFBaUIsQ0FBQyxXQUFsQixFQVpsQztBQUFBLE1BYU0sMEJBQTBCLEdBQUcsa0JBQWtCLENBQUMsV0FBbkIsRUFibkM7QUFBQSxNQWNNLHlCQUF5QixHQUFHLGlCQUFpQixDQUFDLFdBQWxCLEVBZGxDO0FBQUEsTUFlTSxHQUFHLEdBQUcsbUJBQW1CLENBQUMsQ0FBRCxDQWYvQjtBQUFBLE1BZXFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUQsQ0FoQi9CO0FBQUEsTUFnQnFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLG9CQUFvQixDQUFDLENBQUQsQ0FqQmhDO0FBQUEsTUFpQnFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLG9CQUFvQixDQUFDLENBQUQsQ0FsQmhDO0FBQUEsTUFrQnFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUQsQ0FuQi9CO0FBQUEsTUFtQnFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLG1CQUFtQixDQUFDLENBQUQsQ0FwQi9CO0FBQUEsTUFvQnFDO0FBQy9CLEVBQUEsR0FBRyxHQUFHLHlCQUF5QixDQUFDLENBQUQsQ0FyQnJDO0FBQUEsTUFxQjBDO0FBQ3BDLEVBQUEsR0FBRyxHQUFHLDBCQUEwQixDQUFDLENBQUQsQ0F0QnRDO0FBQUEsTUFzQjJDO0FBQ3JDLEVBQUEsR0FBRyxHQUFHLHlCQUF5QixDQUFDLENBQUQsQ0F2QnJDO0FBQUEsTUF1QjBDO0FBQ3BDLEVBQUEsR0FBRyxHQUFHLHlCQUF5QixDQUFDLENBQUQsQ0F4QnJDO0FBQUEsTUF3QjBDO0FBQ3BDLEVBQUEsR0FBRyxHQUFHLDBCQUEwQixDQUFDLENBQUQsQ0F6QnRDO0FBQUEsTUF5QjJDO0FBQ3JDLEVBQUEsR0FBRyxHQUFHLHlCQUF5QixDQUFDLENBQUQsQ0ExQnJDO0FBQUEsTUEwQjBDO0FBQ3BDLEVBQUEsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUQsQ0EzQnZDO0FBQUEsTUEyQjRDO0FBQ3RDLEVBQUEsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUQsQ0E1QnZDO0FBQUEsTUE0QjRDO0FBQ3RDLEVBQUEsR0FBRyxHQUFHLDRCQUE0QixDQUFDLENBQUQsQ0E3QnhDO0FBQUEsTUE2QjZDO0FBQ3ZDLEVBQUEsR0FBRyxHQUFHLDRCQUE0QixDQUFDLENBQUQsQ0E5QnhDO0FBQUEsTUE4QjZDO0FBQ3ZDLEVBQUEsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUQsQ0EvQnZDO0FBQUEsTUErQjRDO0FBQ3RDLEVBQUEsR0FBRyxHQUFHLDJCQUEyQixDQUFDLENBQUQsQ0FoQ3ZDO0FBQUEsTUFnQzRDO0FBQ3RDLEVBQUEsd0JBQXdCLEdBQUcscUJBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLENBQVIsQ0FqQ2pDO0FBQUEsTUFrQ00sdUNBQXVDLEdBQUcsd0JBQVcsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FBWCxFQUE4Qix3QkFBOUIsQ0FsQ2hEO0FBQUEsTUFtQ00sd0NBQXdDLEdBQUcsd0JBQVcsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FBWCxFQUE4Qix3QkFBOUIsQ0FuQ2pEO0FBQUEsTUFvQ00sRUFBRSxHQUFHLHVDQUF1QyxDQUFDLENBQUQsQ0FwQ2xEO0FBQUEsTUFvQ3dEO0FBQ2xELEVBQUEsRUFBRSxHQUFHLHVDQUF1QyxDQUFDLENBQUQsQ0FyQ2xEO0FBQUEsTUFxQ3dEO0FBQ2xELEVBQUEsRUFBRSxHQUFHLHVDQUF1QyxDQUFDLENBQUQsQ0F0Q2xEO0FBQUEsTUFzQ3dEO0FBQ2xELEVBQUEsRUFBRSxHQUFHLHdDQUF3QyxDQUFDLENBQUQsQ0F2Q25EO0FBQUEsTUF1Q3lEO0FBQ25ELEVBQUEsRUFBRSxHQUFHLHdDQUF3QyxDQUFDLENBQUQsQ0F4Q25EO0FBQUEsTUF3Q3lEO0FBQ25ELEVBQUEsRUFBRSxHQUFHLHdDQUF3QyxDQUFDLENBQUQsQ0F6Q25EO0FBQUEsTUF5Q3lEO0FBQ25ELEVBQUEsK0JBQStCLEdBQUcscUJBQVEsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQVIsQ0ExQ3hDO0FBQUEsTUEyQ00sOEJBQThCLEdBQUcsd0JBQVcsQ0FBRSxHQUFHLEdBQUcsRUFBUixFQUFZLEdBQUcsR0FBRyxFQUFsQixDQUFYLEVBQW1DLCtCQUFuQyxDQTNDdkM7QUFBQSxNQTRDTSwrQkFBK0IsR0FBRyx3QkFBVyxDQUFFLEdBQUcsR0FBRyxFQUFSLEVBQVksR0FBRyxHQUFHLEVBQWxCLENBQVgsRUFBbUMsK0JBQW5DLENBNUN4QztBQUFBLE1BNkNNLDhCQUE4QixHQUFHLHdCQUFXLENBQUUsR0FBRyxHQUFHLEVBQVIsRUFBWSxHQUFHLEdBQUcsRUFBbEIsQ0FBWCxFQUFtQywrQkFBbkMsQ0E3Q3ZDO0FBQUEsTUE4Q00sOEJBQThCLEdBQUcsQ0FDL0IsOEJBRCtCLEVBRS9CLCtCQUYrQixFQUcvQiw4QkFIK0IsQ0E5Q3ZDO0FBb0RBLFNBQU8sOEJBQVA7QUFDRDs7O0FDcEZEOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBUyxnQkFBVCxDQUEwQixLQUExQixFQUFpQyxTQUFqQyxFQUE0QyxRQUE1QyxFQUFzRDtBQUMzRCxNQUFJLE1BQU0sR0FBRyxJQUFiOztBQUVBLE1BQUksS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsUUFBTSxXQUFXLEdBQUcsbUNBQXFCLEtBQXJCLENBQXBCO0FBRUEsSUFBQSxNQUFNLEdBQUksTUFBTSxLQUFLLElBQVosR0FDRSxXQURGLEdBRUksdUJBQVUsV0FBVixFQUF1QixNQUF2QixDQUZiO0FBR0Q7O0FBRUQsTUFBSSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsUUFBTSxlQUFlLEdBQUcsMkNBQTZCLFNBQTdCLENBQXhCO0FBRUEsSUFBQSxNQUFNLEdBQUksTUFBTSxLQUFLLElBQVosR0FDRSxlQURGLEdBRUksdUJBQVUsZUFBVixFQUEyQixNQUEzQixDQUZiO0FBSUQ7O0FBRUQsTUFBSSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckIsUUFBTSxjQUFjLEdBQUcseUNBQTJCLFFBQTNCLENBQXZCO0FBRUEsSUFBQSxNQUFNLEdBQUksTUFBTSxLQUFLLElBQVosR0FDRyxjQURILEdBRUssdUJBQVUsY0FBVixFQUEwQixNQUExQixDQUZkO0FBR0Q7O0FBRUQsTUFBTSxTQUFTLEdBQUksTUFBTSxLQUFLLElBQVosR0FDRSxVQUFDLE1BQUQ7QUFBQSxXQUFZLE1BQVo7QUFBQSxHQURGLEdBRUksVUFBQyxNQUFEO0FBQUEsV0FBWSxxREFBZ0IsTUFBaEIsSUFBd0IsQ0FBeEIsSUFBNkIsTUFBN0IsRUFBcUMsS0FBckMsQ0FBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsQ0FBWjtBQUFBLEdBRnRCO0FBSUEsU0FBTyxTQUFQO0FBQ0Q7OztBQ3ZDRDs7Ozs7Ozs7QUFFTyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0Msa0JBQWxDLEVBQXNEO0FBQzNELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFULENBQWEsVUFBQyxNQUFELEVBQVk7QUFDL0MsUUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQVAsRUFBdEIsQ0FEK0MsQ0FDUjs7QUFFdkMsSUFBQSxhQUFhLENBQUMsTUFBZCxDQUFxQixrQkFBckI7QUFFQSxXQUFPLGFBQVA7QUFDRCxHQU51QixDQUF4QjtBQVFBLFNBQU8sZUFBUDtBQUNEOztBQUVNLFNBQVMseUNBQVQsQ0FBbUQsZ0JBQW5ELEVBQXFFLFVBQXJFLEVBQWlGLE1BQWpGLEVBQXlGO0FBQUc7QUFDakcsTUFBTSxPQUFPLEdBQUcsVUFBaEI7QUFBQSxNQUE0QjtBQUN0QixFQUFBLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBUixDQUFZLFVBQUMsS0FBRCxFQUFXO0FBQ2hDLFFBQU0sZUFBZSxHQUFHLGdCQUFnQixDQUFDLEtBQUQsQ0FBeEM7QUFBQSxRQUNNLE1BQU0sR0FBRyxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsZUFBM0IsQ0FEZjtBQUdBLFdBQU8sTUFBUDtBQUNELEdBTFUsQ0FEakI7QUFRQSxTQUFPLFFBQVA7QUFDRDs7O0FDeEJEOztBQUVBOzs7O0FBRUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFkLEVBQXNCO0FBQ3BCLEVBQUEsS0FBSyxFQUFMO0FBRG9CLENBQXRCOzs7QUNKQTs7QUNBQTs7Ozs7O0FBRU8sSUFBTSxLQUFLLEdBQUcsT0FBZDs7QUFDQSxJQUFNLEtBQUssR0FBRyxPQUFkOztBQUNBLElBQU0sSUFBSSxHQUFHLE1BQWI7O0FBQ0EsSUFBTSxPQUFPLEdBQUcsU0FBaEI7O0FBQ0EsSUFBTSxLQUFLLEdBQUcsT0FBZDs7QUFDQSxJQUFNLEtBQUssR0FBRyxPQUFkOztBQUNBLElBQU0saUJBQWlCLEdBQUcsT0FBMUI7O0FBQ0EsSUFBTSwwQkFBMEIsR0FBRyxJQUFuQzs7QUFDQSxJQUFNLDBCQUEwQixHQUFHLFNBQW5DOztBQUVBLElBQU0sVUFBVSxHQUFHLEtBQW5COztBQUNBLElBQU0sV0FBVyxHQUFHLE1BQXBCOztBQUNBLElBQU0sMENBQTBDLEdBQUcsZ0NBQW5EOztBQUVBLElBQU0sVUFBVSxHQUFHLE1BQW5COztBQUNBLElBQU0sYUFBYSxHQUFHLE1BQXRCOztBQUVBLElBQU0sTUFBTSxHQUFHLElBQWY7O0FBQ0EsSUFBTSxhQUFhLEdBQUcsTUFBdEI7O0FBQ0EsSUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsWUFBUCxDQUFvQixHQUFwQixDQUE1Qjs7QUFDQSxJQUFNLG1CQUFtQixHQUFHLElBQTVCOztBQUNBLElBQU0seUJBQXlCLEdBQUcsSUFBbEM7O0FBRUEsSUFBTSx5QkFBeUIsR0FBRyxFQUFsQzs7OztBQ3pCUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0I7QUFBRSxTQUFPLEtBQUssQ0FBQyxDQUFELENBQVo7QUFBaUI7O0FBRXpDLFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUFFLFNBQU8sS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFrQjs7QUFFM0MsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFrQjs7QUFFMUMsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQUUsU0FBTyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUzQyxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQWtCOztBQUUxQyxTQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFBRSxTQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQWhCLENBQVo7QUFBaUM7O0FBRTdELFNBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQjtBQUFFLFNBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBWjtBQUFpQzs7QUFFOUQsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCO0FBQUUsU0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU4sR0FBZSxDQUFoQixDQUFaO0FBQWlDOztBQUU3RCxTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRSxTQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQWhCLENBQVo7QUFBaUM7O0FBRTlELFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFBRSxTQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQWhCLENBQVo7QUFBaUM7O0FBRXhELFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFBRSxTQUFPLEtBQUssQ0FBQyxLQUFOLENBQVksQ0FBWixDQUFQO0FBQXdCOztBQUUvQyxTQUFTLElBQVQsQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLEVBQThCO0FBQUUsRUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUEyQixNQUEzQixFQUFtQyxNQUFuQztBQUE2Qzs7QUFFN0UsU0FBUyxPQUFULENBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDO0FBQUUsRUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixPQUFoQixDQUF3QixLQUF4QixDQUE4QixNQUE5QixFQUFzQyxNQUF0QztBQUFnRDs7QUFFbkYsU0FBUyxNQUFULENBQWdCLE1BQWhCLEVBQXdCLGVBQXhCLEVBQXlDO0FBQzlDLE1BQU0sTUFBTSxHQUFJLGVBQWUsWUFBWSxLQUE1QixHQUNHLGVBREgsR0FFSSxDQUFDLGVBQUQsQ0FGbkI7QUFJQSxFQUFBLElBQUksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFKO0FBQ0Q7O0FBRU0sU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUMzQixNQUFNLEtBQUssR0FBRyxDQUFkO0FBRUEsU0FBTyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsQ0FBUDtBQUNEOztBQUVNLFNBQVMsSUFBVCxDQUFjLE1BQWQsRUFBc0IsTUFBdEIsRUFBOEI7QUFDbkMsTUFBTSxLQUFLLEdBQUcsQ0FBZDtBQUFBLE1BQ00sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUQzQixDQURtQyxDQUVDOztBQUVwQyxFQUFBLE1BQU0sQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixXQUFoQixFQUE2QixNQUE3QixDQUFOO0FBQ0Q7O0FBRU0sU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQjtBQUFFLEVBQUEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsS0FBckIsQ0FBMkIsTUFBM0IsRUFBbUMsTUFBbkM7QUFBNkM7O0FBRTlFLFNBQVMsTUFBVCxDQUFnQixNQUFoQixFQUF3QixLQUF4QixFQUFvRTtBQUFBLE1BQXJDLFdBQXFDLHVFQUF2QixRQUF1QjtBQUFBLE1BQWIsTUFBYSx1RUFBSixFQUFJO0FBQ3pFLE1BQU0sSUFBSSxJQUFJLEtBQUosRUFBVyxXQUFYLDRCQUEyQixNQUEzQixFQUFWO0FBQUEsTUFDTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsU0FBTixDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixNQUE3QixFQUFxQyxJQUFyQyxDQUQxQjtBQUdBLFNBQU8saUJBQVA7QUFDRDs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUM7QUFDNUMsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFiO0FBRUEsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQzNDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLE1BQUosRUFBWTtBQUNWLE1BQUEsS0FBSyxHQUFHLEtBQVIsQ0FEVSxDQUNNOztBQUVoQixhQUFPLElBQVA7QUFDRDtBQUNGLEdBUmEsQ0FBZDs7QUFVQSxNQUFJLEtBQUosRUFBVztBQUNULFFBQU0sV0FBVyxHQUFHLENBQXBCO0FBRUEsSUFBQSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsV0FBcEIsRUFBaUMsT0FBakM7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUIsSUFBdkIsRUFBNkI7QUFDbEMsTUFBTSxnQkFBZ0IsR0FBRyxFQUF6QjtBQUVBLEVBQUEsZ0JBQWdCLENBQUMsS0FBRCxFQUFRLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDMUMsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQW5COztBQUVBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxVQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsVUFBc0I7QUFDaEIsTUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFBQSxVQUVNLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsV0FBcEIsQ0FGeEI7QUFBQSxVQUdNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxlQUFELENBSGpDO0FBS0EsTUFBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixtQkFBekIsRUFOVyxDQU1xQztBQUNqRDtBQUNGLEdBWGUsQ0FBaEI7QUFhQSxTQUFPLGdCQUFQO0FBQ0Q7O0FBRU0sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQjtBQUNoQyxNQUFNLFFBQVEsR0FBRyxFQUFqQjtBQUVBLEVBQUEsZUFBZSxDQUFDLEtBQUQsRUFBUSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3pDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLE1BQUosRUFBWTtBQUNWLE1BQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxPQUFkO0FBQ0Q7QUFDRixHQU5jLENBQWY7QUFRQSxTQUFPLFFBQVA7QUFDRDs7QUFFTSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLElBQXRCLEVBQTRCO0FBQ2pDLE1BQUksYUFBYSxHQUFHLFNBQXBCO0FBRUEsRUFBQSxLQUFLLENBQUMsSUFBTixDQUFXLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDN0IsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQW5COztBQUVBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxVQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsVUFBc0I7QUFDaEIsTUFBQSxXQUFXLEdBQUcsQ0FEcEI7QUFBQSxVQUVNLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsRUFBb0IsV0FBcEIsQ0FGeEI7QUFBQSxVQUdNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxlQUFELENBSGpDO0FBS0EsTUFBQSxhQUFhLEdBQUcsbUJBQWhCLENBTlcsQ0FNMkI7O0FBRXRDLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FiRDtBQWVBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUM7QUFDMUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQzNDLFFBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFuQjs7QUFFQSxRQUFJLE1BQUosRUFBWTtBQUNWLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FOYSxDQUFkOztBQVNBLE1BQUksS0FBSixFQUFXO0FBQ1QsSUFBQSxLQUFLLENBQUMsSUFBTixDQUFXLE9BQVg7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsRUFBdUM7QUFDNUMsRUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDakMsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQW5COztBQUVBLFFBQUksTUFBSixFQUFZO0FBQ1YsTUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLE9BQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFTSxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsSUFBekMsRUFBK0M7QUFDcEQsRUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDaEMsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQW5CO0FBRUEsSUFBQSxNQUFNLEdBQ0osTUFBTSxDQUFDLElBQVAsQ0FBWSxPQUFaLENBREksR0FFRixNQUFNLENBQUMsSUFBUCxDQUFZLE9BQVosQ0FGSjtBQUdELEdBTkQ7QUFPRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDNUMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE9BQUssSUFBSSxLQUFLLEdBQUcsQ0FBakIsRUFBb0IsS0FBSyxHQUFHLFdBQTVCLEVBQXlDLEtBQUssRUFBOUMsRUFBa0Q7QUFDaEQsUUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBckI7QUFBQSxRQUNNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FEdkI7O0FBR0EsUUFBSSxNQUFKLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixRQUE5QixFQUF3QztBQUM3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBMUI7O0FBRUEsT0FBSyxJQUFJLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBL0IsRUFBa0MsS0FBSyxJQUFJLENBQTNDLEVBQThDLEtBQUssRUFBbkQsRUFBdUQ7QUFDckQsUUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBckI7QUFBQSxRQUNNLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FEdkI7O0FBR0EsUUFBSSxNQUFKLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNEOztBQUVNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixRQUE5QixFQUF3QztBQUM3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBMUI7O0FBRUEsT0FBSyxJQUFJLEtBQUssR0FBRyxDQUFqQixFQUFvQixLQUFLLEdBQUcsV0FBNUIsRUFBeUMsS0FBSyxFQUE5QyxFQUFrRDtBQUNoRCxRQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQUFyQjtBQUFBLFFBQ00sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUR2Qjs7QUFHQSxRQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFTSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsUUFBL0IsRUFBeUM7QUFDOUMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE9BQUssSUFBSSxLQUFLLEdBQUcsV0FBVyxHQUFHLENBQS9CLEVBQWtDLEtBQUssSUFBSSxDQUEzQyxFQUE4QyxLQUFLLEVBQW5ELEVBQXVEO0FBQ3JELFFBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFELENBQXJCO0FBQUEsUUFDTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRHZCOztBQUdBLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixRQUEvQixFQUF5QyxZQUF6QyxFQUF1RDtBQUM1RCxNQUFJLEtBQUssR0FBRyxZQUFaO0FBRUEsRUFBQSxlQUFlLENBQUMsS0FBRCxFQUFRLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDekMsSUFBQSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLENBQWhCO0FBQ0QsR0FGYyxDQUFmO0FBSUEsU0FBTyxLQUFQO0FBQ0Q7O0FBRU0sU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLFlBQTFDLEVBQXdEO0FBQzdELE1BQUksS0FBSyxHQUFHLFlBQVo7QUFFQSxFQUFBLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQzFDLElBQUEsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFoQjtBQUNELEdBRmUsQ0FBaEI7QUFJQSxTQUFPLEtBQVA7QUFDRDs7QUFFTSxTQUFTLGVBQVQsQ0FBeUIsS0FBekIsRUFBZ0MsUUFBaEMsRUFBMEM7QUFDL0MsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQTFCOztBQUVBLE9BQUssSUFBSSxLQUFLLEdBQUcsQ0FBakIsRUFBb0IsS0FBSyxHQUFHLFdBQTVCLEVBQXlDLEtBQUssRUFBOUMsRUFBa0Q7QUFDaEQsUUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUQsQ0FBckI7QUFFQSxJQUFBLFFBQVEsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUFSO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDLFFBQWpDLEVBQTJDO0FBQ2hELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUExQjs7QUFFQSxPQUFLLElBQUksS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUEvQixFQUFrQyxLQUFLLElBQUksQ0FBM0MsRUFBOEMsS0FBSyxFQUFuRCxFQUF1RDtBQUNyRCxRQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQUFyQjtBQUVBLElBQUEsUUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQVI7QUFDRDtBQUNGOztlQUVjO0FBQ2IsRUFBQSxLQUFLLEVBQUwsS0FEYTtBQUViLEVBQUEsTUFBTSxFQUFOLE1BRmE7QUFHYixFQUFBLEtBQUssRUFBTCxLQUhhO0FBSWIsRUFBQSxNQUFNLEVBQU4sTUFKYTtBQUtiLEVBQUEsS0FBSyxFQUFMLEtBTGE7QUFNYixFQUFBLFNBQVMsRUFBVCxTQU5hO0FBT2IsRUFBQSxVQUFVLEVBQVYsVUFQYTtBQVFiLEVBQUEsU0FBUyxFQUFULFNBUmE7QUFTYixFQUFBLFVBQVUsRUFBVixVQVRhO0FBVWIsRUFBQSxJQUFJLEVBQUosSUFWYTtBQVdiLEVBQUEsSUFBSSxFQUFKLElBWGE7QUFZYixFQUFBLElBQUksRUFBSixJQVphO0FBYWIsRUFBQSxPQUFPLEVBQVAsT0FiYTtBQWNiLEVBQUEsTUFBTSxFQUFOLE1BZGE7QUFlYixFQUFBLEtBQUssRUFBTCxLQWZhO0FBZ0JiLEVBQUEsSUFBSSxFQUFKLElBaEJhO0FBaUJiLEVBQUEsS0FBSyxFQUFMLEtBakJhO0FBa0JiLEVBQUEsTUFBTSxFQUFOLE1BbEJhO0FBbUJiLEVBQUEsT0FBTyxFQUFQLE9BbkJhO0FBb0JiLEVBQUEsTUFBTSxFQUFOLE1BcEJhO0FBcUJiLEVBQUEsSUFBSSxFQUFKLElBckJhO0FBc0JiLEVBQUEsS0FBSyxFQUFMLEtBdEJhO0FBdUJiLEVBQUEsS0FBSyxFQUFMLEtBdkJhO0FBd0JiLEVBQUEsT0FBTyxFQUFQLE9BeEJhO0FBeUJiLEVBQUEsUUFBUSxFQUFSLFFBekJhO0FBMEJiLEVBQUEsWUFBWSxFQUFaLFlBMUJhO0FBMkJiLEVBQUEsYUFBYSxFQUFiLGFBM0JhO0FBNEJiLEVBQUEsYUFBYSxFQUFiLGFBNUJhO0FBNkJiLEVBQUEsY0FBYyxFQUFkLGNBN0JhO0FBOEJiLEVBQUEsY0FBYyxFQUFkLGNBOUJhO0FBK0JiLEVBQUEsZUFBZSxFQUFmLGVBL0JhO0FBZ0NiLEVBQUEsZUFBZSxFQUFmLGVBaENhO0FBaUNiLEVBQUEsZ0JBQWdCLEVBQWhCO0FBakNhLEM7Ozs7QUMvUWY7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBUyxNQUFULENBQWdCLFFBQWhCLEVBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQzlDLE1BQUksS0FBSyxHQUFHLENBQUMsQ0FBYjs7QUFFQSxXQUFTLElBQVQsR0FBZ0I7QUFDZCxJQUFBLEtBQUs7QUFFTCxRQUFNLEtBQUssR0FBRyxLQUFkO0FBQUEsUUFBc0I7QUFDaEIsSUFBQSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsT0FBYixFQUFzQixLQUF0QixDQUQxQjs7QUFHQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMO0FBQ0Y7O0FBRUQsRUFBQSxJQUFJO0FBQ0w7O0FBRU0sU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLFFBQXhCLEVBQWtDLElBQWxDLEVBQXdDLE9BQXhDLEVBQWlEO0FBQ3RELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFyQixDQURzRCxDQUN4Qjs7QUFFOUIsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFiOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxNQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMLEtBRkQsTUFFTztBQUNMLFVBQU0sS0FBSyxHQUFHLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQixNQUFBLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQURyQjtBQUdBLE1BQUEsUUFBUSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLEtBQS9CLENBQVI7QUFDRDtBQUNGOztBQUVELEVBQUEsSUFBSTtBQUNMOztBQUVNLFNBQVMsUUFBVCxDQUFrQixTQUFsQixFQUE2QixJQUE3QixFQUFtQyxPQUFuQyxFQUE0QztBQUNqRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBekIsQ0FEaUQsQ0FDZjs7QUFFbEMsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFiOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxNQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMLEtBRkQsTUFFTztBQUNMLFVBQU0sS0FBSyxHQUFHLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQixNQUFBLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBRCxDQUQxQjtBQUdBLE1BQUEsUUFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsT0FBYixFQUFzQixLQUF0QixDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxFQUFBLElBQUk7QUFDTDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsU0FBcEIsRUFBK0IsSUFBL0IsRUFBcUMsT0FBckMsRUFBOEM7QUFDbkQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQXpCLENBRG1ELENBQ2pCOztBQUVsQyxNQUFJLEtBQUssR0FBRyxDQUFaOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxNQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMO0FBQ0Y7O0FBRUQsRUFBQSxTQUFTLENBQUMsT0FBVixDQUFrQixVQUFDLFFBQUQsRUFBVyxLQUFYLEVBQXFCO0FBQ3JDLElBQUEsUUFBUSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsT0FBYixFQUFzQixLQUF0QixDQUFSO0FBQ0QsR0FGRDtBQUdEOztBQUVNLFNBQVMsVUFBVCxDQUFvQixRQUFwQixFQUE4QixNQUE5QixFQUFzQyxJQUF0QyxFQUE0QyxPQUE1QyxFQUFxRDtBQUMxRCxNQUFJLEtBQUssR0FBRyxDQUFaOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxNQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMO0FBQ0Y7O0FBRUQsT0FBSyxJQUFJLEtBQUssR0FBRyxDQUFqQixFQUFvQixLQUFLLEdBQUcsTUFBNUIsRUFBb0MsS0FBSyxFQUF6QyxFQUE2QztBQUMzQyxJQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsRUFBc0IsS0FBdEIsQ0FBUjtBQUNEO0FBQ0Y7O0FBRU0sU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFFBQWhDLEVBQTBDLElBQTFDLEVBQWdELE9BQWhELEVBQXlEO0FBQzlELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFyQixDQUQ4RCxDQUNoQzs7QUFFOUIsTUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFiOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxNQUE3Qjs7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUNiLE1BQUEsSUFBSTtBQUNMLEtBRkQsTUFFTztBQUNMLFVBQU0sS0FBSyxHQUFHLEtBQWQ7QUFBQSxVQUFzQjtBQUNoQixNQUFBLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBRCxDQURyQjtBQUdBLE1BQUEsUUFBUSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLE9BQXRCLEVBQStCLEtBQS9CLENBQVI7QUFDRDtBQUNGOztBQUVELEVBQUEsSUFBSTtBQUNMOztBQUVNLFNBQVMsZ0JBQVQsQ0FBMEIsS0FBMUIsRUFBaUMsUUFBakMsRUFBMkMsSUFBM0MsRUFBaUQsT0FBakQsRUFBMEQ7QUFDL0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXJCLENBRCtELENBQ2pDOztBQUU5QixNQUFJLEtBQUssR0FBRyxNQUFaOztBQUVBLFdBQVMsSUFBVCxHQUFnQjtBQUNkLElBQUEsS0FBSztBQUVMLFFBQU0sU0FBUyxHQUFJLEtBQUssS0FBSyxDQUFDLENBQTlCOztBQUVBLFFBQUksU0FBSixFQUFlO0FBQ2IsTUFBQSxJQUFJO0FBQ0wsS0FGRCxNQUVPO0FBQ0wsVUFBTSxLQUFLLEdBQUcsS0FBZDtBQUFBLFVBQXNCO0FBQ2hCLE1BQUEsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFELENBRHJCO0FBR0EsTUFBQSxRQUFRLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0IsS0FBL0IsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsRUFBQSxJQUFJO0FBQ0w7O2VBRWM7QUFDYixFQUFBLE1BQU0sRUFBTixNQURhO0FBRWIsRUFBQSxPQUFPLEVBQVAsT0FGYTtBQUdiLEVBQUEsUUFBUSxFQUFSLFFBSGE7QUFJYixFQUFBLFVBQVUsRUFBVixVQUphO0FBS2IsRUFBQSxVQUFVLEVBQVYsVUFMYTtBQU1iLEVBQUEsZUFBZSxFQUFmLGVBTmE7QUFPYixFQUFBLGdCQUFnQixFQUFoQjtBQVBhLEM7Ozs7QUNySmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxTQUFTLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDO0FBQzFDLE1BQU0sV0FBVyxHQUFHLGVBQUcsVUFBSCxDQUFjLFNBQWQsQ0FBcEI7O0FBRUEsU0FBTyxXQUFQO0FBQ0Q7O0FBRU0sU0FBUyxlQUFULENBQXlCLFFBQXpCLEVBQW1DO0FBQ3hDLE1BQUksVUFBVSxHQUFHLEtBQWpCO0FBRUEsTUFBTSxTQUFTLEdBQUcsUUFBbEI7QUFBQSxNQUE0QjtBQUN0QixFQUFBLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFELENBRHBDOztBQUdBLE1BQUksV0FBSixFQUFpQjtBQUNmLFFBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFELENBQTdCOztBQUVBLFFBQUksU0FBSixFQUFlO0FBQ2IsTUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxVQUFQO0FBQ0Q7O0FBRU0sU0FBUyxvQkFBVCxDQUE4QixhQUE5QixFQUE2QztBQUNsRCxNQUFJLGVBQWUsR0FBRyxLQUF0QjtBQUVBLE1BQU0sU0FBUyxHQUFHLGFBQWxCO0FBQUEsTUFBaUM7QUFDM0IsRUFBQSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsU0FBRCxDQURwQzs7QUFHQSxNQUFJLFdBQUosRUFBaUI7QUFDZixRQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFELENBQXZDOztBQUVBLFFBQUksY0FBSixFQUFvQjtBQUNsQixNQUFBLGVBQWUsR0FBRyxJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxlQUFQO0FBQ0Q7O0FBRU0sU0FBUyxXQUFULENBQXFCLFNBQXJCLEVBQWdDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLGVBQUcsUUFBSCxDQUFZLFNBQVosQ0FBYjtBQUFBLE1BQ00sY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFMLEVBRHZCO0FBQUEsTUFFTSxTQUFTLEdBQUcsQ0FBQyxjQUZuQjs7QUFJQSxTQUFPLFNBQVA7QUFDRDs7QUFFTSxTQUFTLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDO0FBQzFDLE1BQU0sSUFBSSxHQUFHLGVBQUcsUUFBSCxDQUFZLFNBQVosQ0FBYjtBQUFBLE1BQ00sY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFMLEVBRHZCOztBQUdBLFNBQU8sY0FBUDtBQUNEOztBQUVNLFNBQVMsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUM7QUFDOUMsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQUQsQ0FBbkM7QUFBQSxNQUNNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxNQUQxQztBQUFBLE1BRU0sY0FBYyxHQUFJLG1CQUFtQixLQUFLLENBRmhEO0FBSUEsU0FBTyxjQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLGFBQXZCLEVBQXNDO0FBQzNDLE1BQU0sYUFBYSxHQUFHLGVBQUcsV0FBSCxDQUFlLGFBQWYsQ0FBdEI7O0FBRUEsU0FBTyxhQUFQO0FBQ0Q7O0FBRU0sU0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQXNEO0FBQUEsTUFBMUIsUUFBMEIsdUVBQWYsd0JBQWU7O0FBQzNELE1BQU0sT0FBTyxHQUFHO0FBQ1IsSUFBQSxRQUFRLEVBQVI7QUFEUSxHQUFoQjtBQUFBLE1BR00sT0FBTyxHQUFHLGVBQUcsWUFBSCxDQUFnQixRQUFoQixFQUEwQixPQUExQixDQUhoQjs7QUFLQSxTQUFPLE9BQVA7QUFDRDs7QUFFTSxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDM0MsaUJBQUcsYUFBSCxDQUFpQixRQUFqQixFQUEyQixPQUEzQjtBQUNEOztBQUVNLFNBQVMsWUFBVCxDQUFzQixRQUF0QixFQUFnQyxPQUFoQyxFQUF5QztBQUM5QyxpQkFBRyxjQUFILENBQWtCLFFBQWxCLEVBQTRCLE9BQTVCO0FBQ0Q7O0FBRU0sU0FBUyxlQUFULENBQXlCLGFBQXpCLEVBQXdDO0FBQzdDLE1BQU0sa0NBQWtDLEdBQUcsNkNBQWtDLGFBQWxDLENBQTNDOztBQUVBLE1BQUssa0NBQWtDLEtBQUssR0FBeEMsSUFBaUQsa0NBQWtDLEtBQUssSUFBNUYsRUFBbUc7QUFDakcsUUFBTSxtQkFBbUIsR0FBRyxrQ0FBNUI7QUFBQSxRQUFpRTtBQUMzRCxJQUFBLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDLG1CQUFELENBRGxEOztBQUdBLFFBQUksQ0FBQyxxQkFBTCxFQUE0QjtBQUMxQixNQUFBLGVBQWUsQ0FBQyxtQkFBRCxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxpQkFBRyxTQUFILENBQWEsYUFBYjtBQUNEOztBQUVNLFNBQVMsVUFBVCxDQUFvQixXQUFwQixFQUFpQyxXQUFqQyxFQUE4QztBQUNuRCxpQkFBRyxVQUFILENBQWMsV0FBZCxFQUEyQixXQUEzQjtBQUNEOztBQUVNLFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUE0QjtBQUNqQyxTQUFPLGVBQUcsUUFBSCxDQUFZLFFBQVosQ0FBUDtBQUNEOztlQUVjO0FBQ2IsRUFBQSxnQkFBZ0IsRUFBaEIsZ0JBRGE7QUFFYixFQUFBLGVBQWUsRUFBZixlQUZhO0FBR2IsRUFBQSxvQkFBb0IsRUFBcEIsb0JBSGE7QUFJYixFQUFBLFdBQVcsRUFBWCxXQUphO0FBS2IsRUFBQSxnQkFBZ0IsRUFBaEIsZ0JBTGE7QUFNYixFQUFBLGdCQUFnQixFQUFoQixnQkFOYTtBQU9iLEVBQUEsYUFBYSxFQUFiLGFBUGE7QUFRYixFQUFBLFFBQVEsRUFBUixRQVJhO0FBU2IsRUFBQSxTQUFTLEVBQVQsU0FUYTtBQVViLEVBQUEsWUFBWSxFQUFaLFlBVmE7QUFXYixFQUFBLGVBQWUsRUFBZixlQVhhO0FBWWIsRUFBQSxVQUFVLEVBQVYsVUFaYTtBQWFiLEVBQUEsUUFBUSxFQUFSO0FBYmEsQzs7OztBQ3BIZjs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O2VBRWU7QUFDYixFQUFBLEdBQUcsRUFBSCxlQURhO0FBRWIsRUFBQSxFQUFFLEVBQUYsY0FGYTtBQUdiLEVBQUEsR0FBRyxFQUFILFNBSGE7QUFJYixFQUFBLElBQUksRUFBSixVQUphO0FBS2IsRUFBQSxLQUFLLEVBQUwsaUJBTGE7QUFNYixFQUFBLE1BQU0sRUFBTjtBQU5hLEM7Ozs7QUNUZjs7Ozs7Ozs7QUFFQTs7QUFFTyxTQUFTLEdBQVQsQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLFVBQXhCLEVBQW9DLFFBQXBDLEVBQThDO0FBQ25ELE1BQUksUUFBUSxLQUFLLFNBQWpCLEVBQTRCO0FBQzFCLElBQUEsUUFBUSxHQUFHLFVBQVgsQ0FEMEIsQ0FDSDs7QUFDdkIsSUFBQSxVQUFVLEdBQUcsRUFBYjtBQUNEOztBQUVELE1BQU0sTUFBTSxHQUFHLHFCQUFmO0FBQUEsTUFDTSxJQUFJLEdBQUcsU0FEYjtBQUdBLEVBQUEsT0FBTyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksVUFBWixFQUF3QixNQUF4QixFQUFnQyxJQUFoQyxFQUFzQyxRQUF0QyxDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxJQUFULENBQWMsSUFBZCxFQUFvQixHQUFwQixFQUF5QixJQUF6QixFQUErQixVQUEvQixFQUEyQyxRQUEzQyxFQUFxRDtBQUMxRCxNQUFJLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUMxQixJQUFBLFFBQVEsR0FBRyxVQUFYLENBRDBCLENBQ0g7O0FBQ3ZCLElBQUEsVUFBVSxHQUFHLEVBQWI7QUFDRDs7QUFFRCxNQUFNLE1BQU0sR0FBRyxzQkFBZjtBQUFBLE1BQ00sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZixDQURiO0FBR0EsRUFBQSxPQUFPLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxVQUFaLEVBQXdCLE1BQXhCLEVBQWdDLElBQWhDLEVBQXNDLFFBQXRDLENBQVA7QUFDRDs7QUFFRCxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsR0FBdkIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsSUFBaEQsRUFBc0QsUUFBdEQsRUFBZ0U7QUFDOUQsTUFBTSxHQUFHLEdBQUcsMkJBQTJCLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxVQUFaLENBQXZDO0FBQUEsTUFDTSxjQUFjLEdBQUcsSUFBSSxjQUFKLEVBRHZCOztBQUdBLEVBQUEsY0FBYyxDQUFDLGtCQUFmLEdBQW9DLFlBQU07QUFBQSxRQUNoQyxVQURnQyxHQUNLLGNBREwsQ0FDaEMsVUFEZ0M7QUFBQSxRQUNwQixNQURvQixHQUNLLGNBREwsQ0FDcEIsTUFEb0I7QUFBQSxRQUNaLFlBRFksR0FDSyxjQURMLENBQ1osWUFEWTs7QUFHeEMsUUFBSSxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDbkIsVUFBSSxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCLFlBQU0sVUFBVSxHQUFHLFlBQW5CLENBRGlCLENBQ2dCOztBQUVqQyxZQUFJO0FBQ0YsVUFBQSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFYLENBQVA7QUFDRCxTQUZELENBRUUsT0FBTyxLQUFQLEVBQWMsQ0FDZDtBQUNEOztBQUVELFFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQWxCRDs7QUFvQkEsTUFBTSxXQUFXLEdBQUcscURBQXBCO0FBRUEsRUFBQSxjQUFjLENBQUMsSUFBZixDQUFvQixNQUFwQixFQUE0QixHQUE1QjtBQUVBLEVBQUEsY0FBYyxDQUFDLGdCQUFmLENBQWdDLGNBQWhDLEVBQWdELFdBQWhEO0FBRUEsRUFBQSxjQUFjLENBQUMsSUFBZixDQUFvQixJQUFwQjtBQUNEOztBQUVELFNBQVMseUJBQVQsQ0FBbUMsVUFBbkMsRUFBK0M7QUFDN0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxVQUFaLENBQWQ7QUFBQSxNQUNNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFEMUI7QUFBQSxNQUVNLFNBQVMsR0FBRyxXQUFXLEdBQUcsQ0FGaEM7QUFBQSxNQUdNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLFVBQUMsV0FBRCxFQUFjLElBQWQsRUFBb0IsS0FBcEIsRUFBOEI7QUFDdkQsUUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUQsQ0FBeEI7QUFBQSxRQUNNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFELENBRHRDO0FBQUEsUUFFTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsS0FBRCxDQUZ2QztBQUFBLFFBR00sa0JBQWtCLEdBQUksS0FBSyxLQUFLLFNBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFIekQ7QUFLQSxJQUFBLFdBQVcsY0FBTyxXQUFQLGNBQXNCLFlBQXRCLFNBQXFDLGtCQUFyQyxDQUFYO0FBRUEsV0FBTyxXQUFQO0FBQ0QsR0FUYSxFQVNYLEVBVFcsQ0FIcEI7QUFjQSxTQUFPLFdBQVA7QUFDRDs7QUFFRCxTQUFTLDJCQUFULENBQXFDLElBQXJDLEVBQTJDLEdBQTNDLEVBQWdELFVBQWhELEVBQTREO0FBQzFELE1BQU0sV0FBVyxHQUFHLHlCQUF5QixDQUFDLFVBQUQsQ0FBN0M7QUFBQSxNQUNNLEdBQUcsR0FBSSxXQUFXLEtBQUssRUFBakIsYUFDRyxJQURILFNBQ1UsR0FEVixjQUVLLElBRkwsU0FFWSxHQUZaLGNBRW1CLFdBRm5CLENBRFo7QUFLQSxTQUFPLEdBQVA7QUFDRDs7O0FDdEZEOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJLFFBQVEsR0FBRyw0QkFBZjtBQUFBLElBQ0ksZUFBZSxHQUFHLHFDQUR0QjtBQUFBLElBRUksZ0JBQWdCLEdBQUcscUNBRnZCOztBQUllLFNBQVMsR0FBVCxDQUFhLGNBQWIsRUFBeUM7QUFBQSxNQUFaLEtBQVksdUVBQUosRUFBSTtBQUN0RCxNQUFJLHdCQUF3QixHQUFHLENBQS9CO0FBRUEsTUFBTSxNQUFNLEdBQUcsQ0FDYixnQkFEYSxFQUViLGdCQUZhLEVBR2IsZUFIYSxFQUliLGtCQUphLEVBS2IsZ0JBTGEsRUFNYixnQkFOYSxDQUFmOztBQVNBLE1BQUksS0FBSyxLQUFLLEVBQWQsRUFBa0I7QUFDaEIsUUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxLQUFmLENBQW5CO0FBQUEsUUFDTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFmLENBRHRCOztBQUdBLFFBQUksVUFBVSxHQUFHLGFBQWpCLEVBQWdDO0FBQzlCO0FBQ0Q7O0FBRUQsSUFBQSx3QkFBd0IsSUFBSSxDQUE1QjtBQUVBLElBQUEsS0FBSyxhQUFNLEtBQU4sTUFBTCxDQVZnQixDQVVNO0FBQ3ZCOztBQUVELE1BQUksS0FBSixFQUNJLE9BREo7O0FBR0EsTUFBSSxjQUFjLFlBQVksS0FBOUIsRUFBcUM7QUFDbkMsSUFBQSxLQUFLLEdBQUcsY0FBUixDQURtQyxDQUNYOztBQURXLGlCQUdwQixLQUhvQjtBQUdoQyxJQUFBLE9BSGdDLFVBR2hDLE9BSGdDO0FBSXBDLEdBSkQsTUFJTztBQUNMLElBQUEsT0FBTyxHQUFHLGNBQVYsQ0FESyxDQUNxQjs7QUFFMUIsSUFBQSxLQUFLLEdBQUcsSUFBSSxLQUFKLENBQVUsT0FBVixDQUFSO0FBQ0Q7O0FBcENxRCxnQkFzQ3BDLEtBdENvQztBQUFBLE1Bc0M5QyxLQXRDOEMsV0FzQzlDLEtBdEM4QztBQUFBLE1BdUNoRCxhQXZDZ0QsR0F1Q2hDLHNCQUFzQixDQUFDLEtBQUQsQ0F2Q1U7QUFBQSxNQXdDaEQscUJBeENnRCxHQXdDeEIsYUFBYSxDQUFDLHdCQUFELENBeENXO0FBQUEsTUF5Q2hELFlBekNnRCxHQXlDakMscUJBekNpQztBQUFBLE1BMENoRCx3QkExQ2dELEdBMENyQiwyQkFBMkIsRUExQ047QUFBQSxNQTJDaEQsUUEzQ2dELEdBMkNyQyx3QkFBd0IsQ0FBQyxZQUFELENBM0NhO0FBQUEsTUE0Q2hELFVBNUNnRCxHQTRDbkMsMEJBQTBCLENBQUMsWUFBRCxDQTVDUztBQUFBLE1BNkNoRCxVQTdDZ0QsYUE2Q2hDLEtBN0NnQyxTQTZDeEIsd0JBN0N3QixjQTZDSSxRQTdDSixjQTZDZ0IsVUE3Q2hCLGVBNkMrQixPQTdDL0I7QUErQ3RELEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaOztBQUVBLE1BQUksZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsSUFBQSxlQUFlO0FBRWYsUUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFsQztBQUFBLFFBQ00sY0FBYyxhQUFNLFVBQU4sT0FEcEI7QUFHQSxrQ0FBYSxXQUFiLEVBQTBCLGNBQTFCO0FBQ0Q7O0FBRUQsU0FBTyxVQUFQO0FBQ0Q7O0FBRUQsU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QjtBQUFFLFNBQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxnQkFBVixDQUFWO0FBQTZCOztBQUV2RCxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCO0FBQUUsU0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLGdCQUFWLENBQVY7QUFBNkI7O0FBRXZELFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBdUI7QUFBRSxTQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsZUFBVixDQUFWO0FBQTRCOztBQUVyRCxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7QUFBRSxTQUFPLEdBQUcsQ0FBQyxPQUFELEVBQVUsa0JBQVYsQ0FBVjtBQUErQjs7QUFFM0QsU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QjtBQUFFLFNBQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxnQkFBVixDQUFWO0FBQTZCOztBQUV2RCxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQXdCO0FBQUUsU0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLGdCQUFWLENBQVY7QUFBNkI7O0FBRXZELFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUFFLEVBQUEsUUFBUSxHQUFHLEtBQVg7QUFBbUI7O0FBRWpELFNBQVMsa0JBQVQsQ0FBNEIsWUFBNUIsRUFBMEM7QUFBRSxFQUFBLGVBQWUsR0FBRyxZQUFsQjtBQUFpQzs7QUFFN0UsU0FBUyxtQkFBVCxDQUE2QixhQUE3QixFQUE0QztBQUFFLEVBQUEsZ0JBQWdCLEdBQUcsYUFBbkI7QUFBbUM7O0FBRWpGLFNBQVMsYUFBVCxDQUF1QixVQUF2QixFQUFtQztBQUFBLE1BQ3pCLEtBRHlCLEdBQ2MsVUFEZCxDQUN6QixLQUR5QjtBQUFBLE1BQ2xCLFlBRGtCLEdBQ2MsVUFEZCxDQUNsQixZQURrQjtBQUFBLE1BQ0osYUFESSxHQUNjLFVBRGQsQ0FDSixhQURJO0FBR2pDLEVBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUVBLEVBQUEsa0JBQWtCLENBQUMsWUFBRCxDQUFsQjtBQUVBLEVBQUEsbUJBQW1CLENBQUMsYUFBRCxDQUFuQjtBQUNEOztBQUVELFNBQVMsaUJBQVQsR0FBNkI7QUFDM0IsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFsQztBQUFBLE1BQ00sY0FBYyxHQUFHLDBCQUFTLFdBQVQsQ0FEdkI7QUFHQSxTQUFPLGNBQVA7QUFDRDs7QUFFRCxNQUFNLENBQUMsTUFBUCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsRUFBQSxLQUFLLEVBQUwsZ0JBRGlCO0FBRWpCLEVBQUEsS0FBSyxFQUFMLGdCQUZpQjtBQUdqQixFQUFBLElBQUksRUFBSixlQUhpQjtBQUlqQixFQUFBLE9BQU8sRUFBUCxrQkFKaUI7QUFLakIsRUFBQSxLQUFLLEVBQUwsZ0JBTGlCO0FBTWpCLEVBQUEsS0FBSyxFQUFMLGdCQU5pQjtBQU9qQixFQUFBLEtBQUssRUFBTCxLQVBpQjtBQVFqQixFQUFBLEtBQUssRUFBTCxLQVJpQjtBQVNqQixFQUFBLElBQUksRUFBSixJQVRpQjtBQVVqQixFQUFBLE9BQU8sRUFBUCxPQVZpQjtBQVdqQixFQUFBLEtBQUssRUFBTCxLQVhpQjtBQVlqQixFQUFBLEtBQUssRUFBTCxLQVppQjtBQWFqQixFQUFBLFdBQVcsRUFBWCxXQWJpQjtBQWNqQixFQUFBLGtCQUFrQixFQUFsQixrQkFkaUI7QUFlakIsRUFBQSxtQkFBbUIsRUFBbkIsbUJBZmlCO0FBZ0JqQixFQUFBLGFBQWEsRUFBYixhQWhCaUI7QUFpQmpCLEVBQUEsaUJBQWlCLEVBQWpCO0FBakJpQixDQUFuQjs7QUFvQkEsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQU0sV0FBVyxhQUFNLGVBQU4sU0FBakI7QUFBQSxNQUNNLFdBQVcsR0FBRyw2QkFBaUIsZ0JBQWpCLEVBQW1DLFdBQW5DLENBRHBCO0FBR0EsU0FBTyxXQUFQO0FBQ0Q7O0FBRUQsU0FBUyx3QkFBVCxHQUFvQztBQUNsQyxNQUFNLGlCQUFpQixHQUFHLG9CQUFvQixFQUE5QztBQUFBLE1BQ00scUJBQXFCLGFBQU0sZUFBTixjQUF5QixpQkFBekIsU0FEM0I7QUFBQSxNQUVNLHFCQUFxQixHQUFHLDZCQUFpQixnQkFBakIsRUFBbUMscUJBQW5DLENBRjlCO0FBSUEsU0FBTyxxQkFBUDtBQUNEOztBQUVELFNBQVMsMEJBQVQsR0FBc0M7QUFDOUIsTUFBQSxXQUFXLEdBQUcsY0FBYyxFQUE1QjtBQUFBLE1BQ0EsWUFEQSxHQUNlLDBCQUFTLFdBQVQsQ0FEZjtBQUFBLE1BRUUsS0FGRixHQUVZLFlBRlosQ0FFRSxLQUZGO0FBQUEsTUFHQSx1QkFIQSxHQUcwQixJQUFJLElBQUosQ0FBUyxLQUFULENBSDFCLENBRDhCLENBSWM7O0FBRWxELFNBQU8sdUJBQVA7QUFDRDs7QUFFRCxTQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBTSxXQUFXLEdBQUcsY0FBYyxFQUFsQztBQUFBLE1BQ00sYUFBYSxHQUFHLGlDQUFnQixXQUFoQixDQUR0Qjs7QUFHQSxNQUFJLENBQUMsYUFBTCxFQUFvQjtBQUNsQjtBQUNEOztBQUVELE1BQU0sdUJBQXVCLEdBQUcsMEJBQTBCLEVBQTFEO0FBQUEsTUFDTSxrQ0FBa0MsR0FBRyxpQkFBaUIsQ0FBQyx1QkFBRCxDQUQ1RDs7QUFHQSxNQUFJLENBQUMsa0NBQUwsRUFBeUM7QUFDdkMsUUFBTSxxQkFBcUIsR0FBRyx3QkFBd0IsRUFBdEQ7QUFFQSxnQ0FBVyxXQUFYLEVBQXdCLHFCQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQztBQUMvQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUosRUFBcEI7QUFBQSxNQUNNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBTCxFQURuQjtBQUFBLE1BRU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLFlBQVosRUFGMUI7QUFBQSxNQUdNLGVBQWUsR0FBSSxVQUFVLEtBQUssaUJBSHhDO0FBS0EsU0FBTyxlQUFQO0FBQ0Q7O0FBRUQsU0FBUyxvQkFBVCxHQUFnQztBQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUosRUFBYjtBQUFBLE1BQ00sR0FBRyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFMLEVBQUQsRUFBaUIsQ0FBakIsQ0FEOUI7QUFBQSxNQUNvRDtBQUM5QyxFQUFBLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBTCxLQUFrQixDQUFuQixFQUFzQixDQUF0QixDQUZoQztBQUFBLE1BRTBEO0FBQ3BELEVBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFMLEVBSGI7QUFBQSxNQUlNLHdCQUF3QixhQUFNLEdBQU4sY0FBYSxLQUFiLGNBQXNCLElBQXRCLENBSjlCO0FBTUEsU0FBTyx3QkFBUDtBQUNEOztBQUVELFNBQVMsMkJBQVQsR0FBdUM7QUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFKLEVBQWI7QUFBQSxNQUNNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTCxFQUFELEVBQWlCLENBQWpCLENBRDlCO0FBQUEsTUFDb0Q7QUFDOUMsRUFBQSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQUwsS0FBa0IsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FGaEM7QUFBQSxNQUUwRDtBQUNwRCxFQUFBLElBQUksR0FBRyxJQUFJLENBQUMsV0FBTCxFQUhiO0FBQUEsTUFJTSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQUwsRUFBRCxFQUFrQixDQUFsQixDQUpoQztBQUFBLE1BS00sT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFMLEVBQUQsRUFBb0IsQ0FBcEIsQ0FMbEM7QUFBQSxNQU1NLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBTCxFQUFELEVBQW9CLENBQXBCLENBTmxDO0FBQUEsTUFPTSxZQUFZLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQUwsRUFBRCxFQUF5QixDQUF6QixDQVB2QztBQUFBLE1BUU0sd0JBQXdCLGFBQU0sR0FBTixjQUFhLEtBQWIsY0FBc0IsSUFBdEIsY0FBOEIsS0FBOUIsY0FBdUMsT0FBdkMsY0FBa0QsT0FBbEQsY0FBNkQsWUFBN0QsQ0FSOUI7QUFVQSxTQUFPLHdCQUFQO0FBQ0Q7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxLQUFoQyxFQUF1QztBQUNyQyxNQUFNLGFBQWEsR0FBRyxFQUF0QjtBQUFBLE1BQ00sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksU0FBWixDQURuQjtBQUdBLE1BQUksWUFBWSxHQUFHLEVBQW5CO0FBRUEsRUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixVQUFDLFNBQUQsRUFBZTtBQUNoQyxRQUFNLE9BQU8sR0FBRyxXQUFXLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBaEI7QUFFQSxJQUFBLFlBQVksR0FBSSxZQUFZLEtBQUssRUFBbEIsR0FDRyxTQURILGFBRVEsWUFGUixlQUV5QixTQUZ6QixDQUFmOztBQUlBLFFBQUksT0FBSixFQUFhO0FBQ1gsTUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQixZQUFuQjtBQUVBLE1BQUEsWUFBWSxHQUFHLEVBQWY7QUFDRDtBQUNGLEdBWkQ7QUFjQSxTQUFPLGFBQVA7QUFDRDs7QUFFRCxTQUFTLHdCQUFULENBQWtDLFlBQWxDLEVBQWdEO0FBQzlDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFiLENBQW1CLGlCQUFuQixDQUFoQjtBQUFBLE1BQ00sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FEcEI7QUFBQSxNQUVNLGdCQUFnQixHQUFHLFdBRnpCO0FBQUEsTUFFdUM7QUFDakMsRUFBQSwyQkFBMkIsR0FBRyxpQkFBSyxPQUFMLENBQWEsR0FBYixDQUhwQztBQUFBLE1BR3dEO0FBQ2xELEVBQUEsaUNBQWlDLEdBQUcsMkJBQTJCLENBQUMsTUFKdEU7QUFBQSxNQUtNLEtBQUssR0FBRyxpQ0FBaUMsR0FBRyxDQUxsRDtBQUFBLE1BS3NEO0FBQ2hELEVBQUEsUUFBUSxHQUFHLGdCQUFnQixDQUFDLE1BQWpCLENBQXdCLEtBQXhCLENBTmpCOztBQVFBLFNBQU8sUUFBUDtBQUNEOztBQUVELFNBQVMsMEJBQVQsQ0FBb0MsWUFBcEMsRUFBa0Q7QUFDaEQsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsU0FBbkIsQ0FBaEI7QUFBQSxNQUNNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBRHBCO0FBQUEsTUFFTSxVQUFVLEdBQUcsV0FGbkIsQ0FEZ0QsQ0FHaEI7O0FBRWhDLFNBQU8sVUFBUDtBQUNEOztBQUVELFNBQVMsa0JBQVQsQ0FBNEIsTUFBNUIsRUFBb0MsWUFBcEMsRUFBa0Q7QUFDaEQsTUFBTSxTQUFTLEdBQUcsR0FBbEI7QUFBQSxNQUNNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsU0FBdkIsQ0FEN0I7QUFHQSxTQUFPLFlBQVA7QUFDRDs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsTUFBbEIsRUFBMEIsWUFBMUIsRUFBd0MsU0FBeEMsRUFBbUQ7QUFDakQsTUFBSSxPQUFPLEdBQUcsRUFBZDs7QUFFQSxPQUFLLElBQUksS0FBSyxHQUFHLENBQWpCLEVBQW9CLEtBQUssR0FBRyxZQUE1QixFQUEwQyxLQUFLLEVBQS9DLEVBQW1EO0FBQ2pELElBQUEsT0FBTyxJQUFJLFNBQVg7QUFDRDs7QUFFRCxNQUFNLFlBQVksR0FBRyxVQUFHLE9BQUgsU0FBYSxNQUFiLEVBQXNCLE1BQXRCLENBQTZCLENBQUMsWUFBOUIsQ0FBckI7QUFFQSxTQUFPLFlBQVA7QUFDRDs7OztBQ3hRRDs7Ozs7OztBQUVBOztBQUVlLFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0I7QUFDckMsTUFBTSxLQUFLLEdBQUcscUJBQWQ7O0FBRUEsTUFBSSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWxCLEVBQThCO0FBQzVCLFFBQU0sT0FBTyxHQUFHLElBQWhCO0FBQUEsUUFDTSxRQUFRLEdBQUcsd0JBRGpCO0FBR0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsQ0FBeUIsT0FBekI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsV0FBZCxDQUEwQixRQUExQjtBQUVBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxNQUFkO0FBRUEsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFdBQWQsQ0FBMEIsS0FBMUIsRUFBaUMsV0FBakM7QUFFQSxXQUFPLE1BQVA7QUFDRDs7QUFFRCxXQUFTLE1BQVQsR0FBa0I7QUFDaEIsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIsS0FBN0IsRUFBb0MsV0FBcEM7QUFDRDs7QUFFRCxXQUFTLFdBQVQsQ0FBcUIsU0FBckIsRUFBZ0M7QUFDOUIsUUFBSSxTQUFTLEtBQUssd0JBQWxCLEVBQWlDO0FBQy9CLE1BQUEsT0FBTztBQUNSO0FBQ0Y7QUFDRjs7Ozs7O0FDOUJEOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFFZSxTQUFTLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUIsUUFBekIsRUFBbUM7QUFDMUMsTUFBQSxLQUFLLEdBQUcsSUFBUjtBQUFBLDBCQUNtQixPQURuQixDQUNFLFFBREY7QUFBQSxNQUNFLFFBREYsa0NBQ2EsQ0FEYjtBQUFBLE1BRUEsT0FGQSxHQUVVO0FBQ1IsSUFBQSxLQUFLLEVBQUwsS0FEUTtBQUVSLElBQUEsUUFBUSxFQUFSLFFBRlE7QUFHUixJQUFBLE9BQU8sRUFBUDtBQUhRLEdBRlY7QUFRTiw0QkFBTyxPQUFQLEVBQWdCLFlBQU07QUFBQSxRQUNaLEtBRFksR0FDRixPQURFLENBQ1osS0FEWTtBQUdwQixJQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxHQUpELEVBSUcsT0FKSDtBQUtEOztBQUVELFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixPQUE3QixFQUFzQztBQUFBLE1BQzlCLFFBRDhCLEdBQ2pCLE9BRGlCLENBQzlCLFFBRDhCO0FBR3BDLE1BQU0sU0FBUyxHQUFJLFFBQVEsT0FBTyxDQUFsQzs7QUFFQSxNQUFJLFNBQUosRUFBZTtBQUNiLElBQUEsSUFBSTtBQUVKO0FBQ0Q7O0FBRUssTUFBRSxPQUFGLEdBQWMsT0FBZCxDQUFFLE9BQUY7QUFBQSx3QkFPeUIsT0FQekIsQ0FDRSxNQURGO0FBQUEsTUFDRSxNQURGLGdDQUNXLEtBRFg7QUFBQSwwQkFPeUIsT0FQekIsQ0FFRSxRQUZGO0FBQUEsTUFFRSxRQUZGLGtDQUVhLE1BRmI7QUFBQSxNQUdFLFdBSEYsR0FPeUIsT0FQekIsQ0FHRSxXQUhGO0FBQUEsOEJBT3lCLE9BUHpCLENBSUUsWUFKRjtBQUFBLE1BSUUsWUFKRixzQ0FJaUIsRUFKakI7QUFBQSxNQUtFLFlBTEYsR0FPeUIsT0FQekIsQ0FLRSxZQUxGO0FBQUEsTUFNRSxpQkFORixHQU95QixPQVB6QixDQU1FLGlCQU5GO0FBQUEsTUFPRSxrQkFQRixHQU95QixPQVB6QixDQU9FLGtCQVBGO0FBU04sRUFBQSxLQUFLLENBQUMsV0FBRCxFQUFjLFlBQWQsRUFBNEIsUUFBNUIsRUFBc0MsTUFBdEMsRUFBOEMsUUFBOUMsQ0FBTDs7QUFFQSxXQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDdkIsUUFBTSxLQUFLLEdBQUcsa0JBQWtCLEdBQUk7QUFDcEIsSUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBREYsR0FFZCxpQkFBaUIsQ0FBQyxJQUFsQixDQUF1QixLQUF2QixDQUZsQjs7QUFJQSxRQUFJLEtBQUosRUFBVztBQUNULE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxPQUFkLEVBQXVCO0FBQ3JCLFFBQUEsS0FBSyxFQUFFO0FBRGMsT0FBdkI7QUFJQSxNQUFBLElBQUk7QUFDTCxLQU5ELE1BTU87QUFDTCxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUVBLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxPQUFkLEVBQXVCO0FBQ3JCLFFBQUEsUUFBUSxFQUFSO0FBRHFCLE9BQXZCO0FBSUEsTUFBQSxJQUFJO0FBQ0w7QUFDRjtBQUNGOztBQUVELFNBQVMsS0FBVCxDQUFlLFdBQWYsRUFBNEIsWUFBNUIsRUFBMEMsUUFBMUMsRUFBb0QsTUFBcEQsRUFBNEQsUUFBNUQsRUFBc0U7QUFDcEUsTUFBSSxLQUFLLEdBQUcsWUFBWixDQURvRSxDQUMxQzs7QUFFMUIsTUFBTSxLQUFLLEdBQUcscUJBQWQ7QUFBQSxNQUNNLE9BQU8sR0FBRyxJQURoQjtBQUFBLE1BRU0sTUFBTSxHQUFHLHVCQUFNLFlBQU07QUFDbkIsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBRUEsSUFBQSxPQUFPLENBQUMsSUFBUjtBQUNELEdBSlEsQ0FGZjtBQVFBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxXQUFkLENBQTBCLFFBQTFCO0FBRUEsRUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsQ0FBeUIsT0FBekI7QUFFQSxFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixDQUFxQixXQUFyQjs7QUFFQSxNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsSUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsS0FBckI7QUFDRDs7QUFFRCxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsTUFBZDtBQUVBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxFQUFkLENBQWlCLEtBQWpCLEVBQXdCLFFBQXhCOztBQUVBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUN2QixRQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBTixDQUFlLFFBQWYsQ0FBbEI7O0FBRUEsWUFBUSxTQUFSO0FBQ0UsV0FBSyw4QkFBTDtBQUNBLFdBQUssb0NBQUw7QUFDRSxRQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixDQUFxQiw4QkFBckI7QUFFQSxRQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixLQUE3QixFQUFvQyxRQUFwQztBQUVBLFFBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkO0FBRUEsUUFBQSxNQUFNO0FBRU4sUUFBQSxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0E7O0FBRUYsV0FBSyw4QkFBTDtBQUNFLFFBQUEsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksQ0FBWixFQUFlLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBOUIsQ0FBUjtBQUVBLFFBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmO0FBRUEsUUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBeEI7QUFFQSxRQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixDQUFxQixXQUFyQjs7QUFFQSxZQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsVUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBcUIsS0FBckI7QUFDRDs7QUFDRDs7QUFFRjtBQUNFLFFBQUEsS0FBSyxJQUFJLFNBQVQ7O0FBRUEsWUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNYLFVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmO0FBRUEsVUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBeEI7QUFFQSxVQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixDQUFxQixXQUFyQjtBQUVBLFVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQXFCLEtBQXJCO0FBQ0Q7O0FBQ0Q7QUF4Q0o7QUEwQ0Q7QUFDRjs7Ozs7QUM1SUQ7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQUksWUFBWSxHQUFHLGlCQUFLLE9BQXhCO0FBQUEsSUFDSSxhQUFhLEdBQUcsb0NBRHBCOztBQUdlLFNBQVMsRUFBVCxHQUEwQztBQUFBLE1BQTlCLHFCQUE4Qix1RUFBTixJQUFNO0FBQ3ZELE1BQUksV0FBSjtBQUFBLE1BQ0ksZUFESjtBQUFBLE1BRUkseUJBQXlCLEdBQUkscUJBQXFCLFlBQVksS0FGbEU7O0FBSUEsTUFBSSx5QkFBSixFQUErQjtBQUM3QixRQUFNLElBQUksR0FBRyxxQkFBYixDQUQ2QixDQUNPOztBQUVwQyxJQUFBLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxJQUFELENBQXpDO0FBQ0QsR0FKRCxNQUlPO0FBQ0wsSUFBQSxlQUFlLEdBQUcscUJBQWxCLENBREssQ0FDcUM7QUFDM0M7O0FBRUssTUFBQSxJQUFJLEdBQUcsVUFBVSxFQUFqQjtBQUFBLE1BQ0UsWUFERixHQUNtQixJQURuQixDQUNFLFlBREY7O0FBR04sTUFBSSxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsUUFBTSxnQkFBZ0IsR0FBRyxrQkFBTSxZQUFOLENBQXpCO0FBRUEsSUFBQSxXQUFXLEdBQUcsZ0JBQWQsQ0FINEIsQ0FHSTtBQUNqQyxHQUpELE1BSU87QUFDTCxJQUFBLFdBQVcsR0FBRyxZQUFZLENBQUMsSUFBYixDQUFrQixVQUFDLFdBQUQsRUFBaUI7QUFDekMsVUFBRSxJQUFGLEdBQVcsV0FBWCxDQUFFLElBQUY7QUFBQSxVQUNBLEtBREEsR0FDUyxJQUFJLEtBQUssZUFEbEI7QUFHTixhQUFPLEtBQVA7QUFDRCxLQUxhLENBQWQ7QUFNRDs7QUFFRCxTQUFPLFdBQVcsQ0FBQyxJQUFuQjtBQUVBLEVBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFdBQWxCO0FBRUEsU0FBTyxXQUFQO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULEdBQXNCO0FBQ3BCLE1BQU0sa0JBQWtCLEdBQUcsNkJBQTZCLEVBQXhEO0FBQUEsTUFDTSxXQUFXLEdBQUcsMEJBQVMsa0JBQVQsQ0FEcEI7QUFBQSxNQUVNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLFdBQVgsQ0FGYjtBQUlBLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVMsV0FBVCxDQUFxQixJQUFyQixFQUEyQjtBQUN6QixNQUFNLGtCQUFrQixHQUFHLDZCQUE2QixFQUF4RDtBQUFBLE1BQ00sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFMLENBQWUsSUFBZixFQUFxQixJQUFyQixPQURwQjtBQUdBLDZCQUFVLGtCQUFWLEVBQThCLFdBQTlCO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULENBQXNCLGVBQXRCLEVBQWdFO0FBQzlELE1BQUksSUFBSSxHQUFHLFVBQVUsRUFBckI7O0FBRUEsTUFBSSxlQUFKLEVBQXFCO0FBQ25CLElBQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CLGVBQXBCO0FBQ0Q7O0FBTDZELG9DQUF0QixvQkFBc0I7QUFBdEIsSUFBQSxvQkFBc0I7QUFBQTs7QUFPOUQsRUFBQSxvQkFBb0IsQ0FBQyxPQUFyQixDQUE2QixVQUFDLG1CQUFELEVBQXlCO0FBQ3BELFdBQU8sSUFBSSxDQUFDLG1CQUFELENBQVg7QUFDRCxHQUZEO0FBSUEsRUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsU0FBUyxpQkFBVCxHQUE2QjtBQUMzQixNQUFNLGtCQUFrQixHQUFHLDZCQUE2QixFQUF4RDtBQUFBLE1BQ00sWUFBWSxHQUFHLGlDQUFnQixrQkFBaEIsQ0FEckI7QUFHQSxTQUFPLFlBQVA7QUFDRDs7QUFFRCxTQUFTLG1CQUFULEdBQStCO0FBQzdCLE1BQU0sSUFBSSxHQUFHO0FBQ1gsb0JBQWdCLENBQ2QsRUFEYztBQURMLEdBQWI7QUFNQSxFQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxTQUFTLGtCQUFULENBQTRCLGVBQTVCLEVBQTZDO0FBQUUsRUFBQSxhQUFhLEdBQUcsZUFBaEI7QUFBa0M7O0FBRWpGLFNBQVMsaUJBQVQsQ0FBMkIsY0FBM0IsRUFBMkM7QUFBRSxFQUFBLFlBQVksR0FBRyxjQUFmO0FBQWdDOztBQUU3RSxNQUFNLENBQUMsTUFBUCxDQUFjLEVBQWQsRUFBa0I7QUFDaEIsRUFBQSxVQUFVLEVBQVYsVUFEZ0I7QUFFaEIsRUFBQSxXQUFXLEVBQVgsV0FGZ0I7QUFHaEIsRUFBQSxZQUFZLEVBQVosWUFIZ0I7QUFJaEIsRUFBQSxpQkFBaUIsRUFBakIsaUJBSmdCO0FBS2hCLEVBQUEsbUJBQW1CLEVBQW5CLG1CQUxnQjtBQU1oQixFQUFBLGtCQUFrQixFQUFsQixrQkFOZ0I7QUFPaEIsRUFBQSxpQkFBaUIsRUFBakI7QUFQZ0IsQ0FBbEI7O0FBVUEsU0FBUyx1QkFBVCxDQUFpQyxJQUFqQyxFQUF1QztBQUNyQyxNQUFJLGVBQWUsR0FBRyxJQUF0QjtBQUVBLEVBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxVQUFDLFFBQUQsRUFBYztBQUFHO0FBQ3pCLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFULENBQWUsb0JBQWYsQ0FBaEI7QUFBQSxRQUNNLEtBQUssR0FBSSxPQUFPLEtBQUssSUFEM0I7O0FBR0EsUUFBSSxLQUFKLEVBQVc7QUFDVCxVQUFNLFdBQVcsR0FBRyxtQkFBTyxPQUFQLENBQXBCO0FBRUEsTUFBQSxlQUFlLEdBQUcsV0FBbEI7QUFDRDs7QUFFRCxXQUFPLEtBQVA7QUFDRCxHQVhEO0FBYUEsU0FBTyxlQUFQO0FBQ0Q7O0FBRUQsU0FBUyw2QkFBVCxHQUF5QztBQUN2QyxNQUFNLFFBQVEsZ0JBQVMsYUFBVCxPQUFkO0FBQUEsTUFDTSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsUUFBRCxDQUR2QztBQUdBLFNBQU8sa0JBQVA7QUFDRDs7O0FDbklEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRU8sU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQy9CLEVBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixFQUFtQixFQUFuQixFQUF1QixPQUF2QixDQUErQixLQUEvQixFQUFzQyxFQUF0QyxDQUFQLENBRCtCLENBQ21COztBQUVsRCxNQUFNLFFBQVEsR0FBSSxLQUFLLElBQUwsQ0FBVSxJQUFWLE1BQW9CLEtBQXRDO0FBRUEsU0FBTyxRQUFQO0FBQ0Q7O0FBRU0sU0FBUyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQztBQUN0QyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBRCxDQUEzQjtBQUFBLE1BQ00sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsSUFBRCxDQUQzQztBQUFBLE1BRU0sZUFBZSxHQUFJLFFBQVEsSUFBSSxnQkFGckM7QUFJQSxTQUFPLGVBQVA7QUFDRDs7QUFFTSxTQUFTLGtCQUFULENBQTRCLElBQTVCLEVBQWtDO0FBQ3ZDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLElBQU4sQ0FBVyxJQUFYLENBQTFCO0FBRUEsU0FBTyxnQkFBUDtBQUNEOztBQUVNLFNBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0M7QUFDdkMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQU4sQ0FBVyxJQUFYLENBQXpCO0FBRUEsU0FBTyxnQkFBUDtBQUNEOztBQUVNLFNBQVMsMkJBQVQsQ0FBcUMsV0FBckMsRUFBa0QsWUFBbEQsRUFBZ0U7QUFDckUsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFKLFlBQWUsV0FBZixpQkFBZjtBQUFBLE1BQ00seUJBQXlCLEdBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaLENBRGxDO0FBR0EsU0FBTyx5QkFBUDtBQUNEOztBQUVNLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QixZQUE1QixFQUEwQztBQUMvQyxNQUFJLFlBQVksR0FBRyxJQUFuQjtBQUVBLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBWCxDQUFsQjtBQUFBLE1BQ00saUJBQWlCLEdBQUcsWUFBWSxDQUFDLEtBQWIsQ0FBbUIsSUFBbkIsQ0FEMUI7QUFHQSxNQUFJLFlBQUo7QUFBQSxNQUNJLHFCQUFxQixHQUFHLGtCQUFNLGlCQUFOLENBRDVCOztBQUdBLE1BQUkscUJBQXFCLEtBQUssR0FBOUIsRUFBbUM7QUFDakMsSUFBQSxpQkFBaUIsQ0FBQyxLQUFsQjtBQUNEOztBQUVELEVBQUEscUJBQXFCLEdBQUcsa0JBQU0saUJBQU4sQ0FBeEI7QUFDQSxFQUFBLFlBQVksR0FBRyxpQkFBSyxTQUFMLENBQWY7O0FBRUEsU0FBUSxxQkFBcUIsS0FBSyxJQUEzQixJQUFxQyxZQUFZLEtBQUssU0FBN0QsRUFBeUU7QUFDdkUsSUFBQSxpQkFBaUIsQ0FBQyxLQUFsQjtBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVY7QUFFQSxJQUFBLHFCQUFxQixHQUFHLGtCQUFNLGlCQUFOLENBQXhCO0FBQ0EsSUFBQSxZQUFZLEdBQUcsaUJBQUssU0FBTCxDQUFmO0FBQ0Q7O0FBRUQsTUFBSSxZQUFZLEtBQUssU0FBckIsRUFBZ0M7QUFDOUIsUUFBTSxpQkFBaUIsR0FBRyxHQUFHLE1BQUgsQ0FBVSxTQUFWLEVBQXFCLE1BQXJCLENBQTRCLGlCQUE1QixDQUExQjtBQUVBLElBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLElBQWxCLENBQXVCLEdBQXZCLENBQWY7QUFDRDs7QUFFRCxTQUFPLFlBQVA7QUFDRDs7QUFFTSxTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDLFlBQWhDLEVBQThDO0FBQ25ELEVBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixDQUFQLENBRG1ELENBQ2xCOztBQUVqQyxNQUFNLGdCQUFnQixhQUFNLElBQU4sY0FBYyxZQUFkLENBQXRCO0FBRUEsU0FBTyxnQkFBUDtBQUNEOztBQUVNLFNBQVMsc0JBQVQsQ0FBZ0MsSUFBaEMsRUFBc0M7QUFDM0MsTUFBSSxjQUFjLEdBQUcsSUFBckI7QUFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLG1CQUFYLENBQWhCOztBQUVBLE1BQUksT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FBcEI7QUFFQSxJQUFBLGNBQWMsR0FBRyxXQUFqQixDQUhvQixDQUdXO0FBQ2hDOztBQUVELFNBQU8sY0FBUDtBQUNEOztBQUVNLFNBQVMsNEJBQVQsQ0FBc0MsSUFBdEMsRUFBNEM7QUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjtBQUFBLE1BQ00sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FEcEI7QUFBQSxNQUVNLG9CQUFvQixHQUFHLFdBRjdCLENBRGlELENBR1A7O0FBRTFDLFNBQU8sb0JBQVA7QUFDRDs7QUFFTSxTQUFTLDRCQUFULENBQXNDLElBQXRDLEVBQTRDO0FBQ2pELE1BQUksb0JBQW9CLEdBQUcsSUFBM0I7QUFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FBcEI7QUFFQSxJQUFBLG9CQUFvQixHQUFHLFdBQXZCLENBSG9CLENBR2lCO0FBQ3RDOztBQUVELFNBQU8sb0JBQVA7QUFDRDs7QUFFTSxTQUFTLGlDQUFULENBQTJDLElBQTNDLEVBQWlEO0FBQ3RELE1BQUkseUJBQXlCLEdBQUcsSUFBaEM7QUFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLG1CQUFYLENBQWhCOztBQUVBLE1BQUksT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FBcEI7QUFFQSxJQUFBLHlCQUF5QixHQUFHLFdBQTVCLENBSG9CLENBR3FCO0FBQzFDOztBQUVELFNBQU8seUJBQVA7QUFDRDs7QUFFTSxTQUFTLHVDQUFULENBQWlELElBQWpELEVBQXVEO0FBQzVELE1BQUksK0JBQStCLEdBQUcsSUFBdEM7QUFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sV0FBVyxHQUFHLG1CQUFPLE9BQVAsQ0FBcEI7QUFFQSxJQUFBLCtCQUErQixHQUFHLFdBQWxDO0FBQ0Q7O0FBRUQsU0FBTywrQkFBUDtBQUNEOztlQUVjO0FBQ2IsRUFBQSxVQUFVLEVBQVYsVUFEYTtBQUViLEVBQUEsaUJBQWlCLEVBQWpCLGlCQUZhO0FBR2IsRUFBQSxrQkFBa0IsRUFBbEIsa0JBSGE7QUFJYixFQUFBLGtCQUFrQixFQUFsQixrQkFKYTtBQUtiLEVBQUEsMkJBQTJCLEVBQTNCLDJCQUxhO0FBTWIsRUFBQSxZQUFZLEVBQVosWUFOYTtBQU9iLEVBQUEsZ0JBQWdCLEVBQWhCLGdCQVBhO0FBUWIsRUFBQSxzQkFBc0IsRUFBdEIsc0JBUmE7QUFTYixFQUFBLDRCQUE0QixFQUE1Qiw0QkFUYTtBQVViLEVBQUEsNEJBQTRCLEVBQTVCLDRCQVZhO0FBV2IsRUFBQSxpQ0FBaUMsRUFBakMsaUNBWGE7QUFZYixFQUFBLHVDQUF1QyxFQUF2QztBQVphLEM7Ozs7QUNoSmY7Ozs7Ozs7Ozs7QUFFQTs7QUFFTyxTQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIsSUFBN0IsRUFBbUMsS0FBbkMsRUFBMEM7QUFDL0MsTUFBTSxPQUFPLEdBQUcsMEJBQVMsUUFBVCxDQUFoQjtBQUFBLE1BQ00sYUFBYSxHQUFHLFlBQVksQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixLQUFoQixDQURsQztBQUdBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQixJQUEvQixFQUFxQyxLQUFyQyxFQUE0QztBQUNqRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBUixDQUFjLElBQWQsQ0FBZDtBQUFBLE1BQ00sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsQ0FEOUI7QUFBQSxNQUVNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBWixDQUFpQixJQUFqQixDQUZ0QjtBQUlBLFNBQU8sYUFBUDtBQUNEOztBQUVNLFNBQVMsU0FBVCxDQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUFxRDtBQUFBLE1BQXRCLEtBQXNCLHVFQUFkLFlBQWM7QUFDMUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkQsUUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBQTlCO0FBRUEsV0FBTyxXQUFQO0FBQ0QsR0FKa0IsQ0FBbkI7QUFNQSxTQUFPLFVBQVA7QUFDRDs7ZUFFYztBQUNiLEVBQUEsU0FBUyxFQUFULFNBRGE7QUFFYixFQUFBLFlBQVksRUFBWixZQUZhO0FBR2IsRUFBQSxTQUFTLEVBQVQ7QUFIYSxDOzs7QUFNZixTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUMsS0FBakMsRUFBd0M7QUFDdEMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxVQUFDLElBQUQsRUFBVTtBQUN0QyxRQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQTVCO0FBRUEsV0FBTyxVQUFQO0FBQ0QsR0FKbUIsQ0FBcEI7QUFNQSxTQUFPLFdBQVA7QUFDRDs7QUFFRCxTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFBaUM7QUFDL0IsTUFBSSxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsTUFBSSxJQUFJLENBQUMsY0FBTCxDQUFvQixLQUFwQixDQUFKLEVBQWdDO0FBQzlCLElBQUEsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFELENBQWxCO0FBQ0Q7O0FBRUQsU0FBTyxXQUFQO0FBQ0Q7Ozs7QUNyREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXBwbHlNYXRyaXggfSBmcm9tIFwiLi9taXhpbi9tYXRyaXhcIjtcbmltcG9ydCB7IGVuYWJsZUJsZW5kaW5nIH0gZnJvbSBcIi4vbWl4aW4vYmxlbmRpbmdcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0sIHVzZVByb2dyYW0gfSBmcm9tIFwiLi9taXhpbi9wcm9ncmFtXCI7XG5pbXBvcnQgeyBjbGVhckNvbG91ciwgY2xlYXJDb2xvdXJCdWZmZXIgfSBmcm9tIFwiLi9taXhpbi9jb2xvdXJcIjtcbmltcG9ydCB7IGNyZWF0ZVRleHR1cmUsIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nIH0gZnJvbSBcIi4vbWl4aW4vdGV4dHVyZVwiO1xuaW1wb3J0IHsgY2xlYXJEZXB0aCwgY2xlYXJEZXB0aEJ1ZmZlciwgZW5hYmxlRGVwdGhUZXN0aW5nIH0gZnJvbSBcIi4vbWl4aW4vZGVwdGhcIjtcbmltcG9ydCB7IGNyZWF0ZVNoYWRlciwgY3JlYXRlVmVydGV4U2hhZGVyLCBjcmVhdGVGcmFnbWVudFNoYWRlciB9IGZyb20gXCIuL21peGluL3NoYWRlclwiO1xuaW1wb3J0IHsgYmluZEJ1ZmZlciwgYmluZEVsZW1lbnRCdWZmZXIsIGNyZWF0ZUJ1ZmZlciwgY3JlYXRlRWxlbWVudEJ1ZmZlciB9IGZyb20gXCIuL21peGluL2J1ZmZlclwiO1xuaW1wb3J0IHsgZ2V0QXR0cmlidXRlTG9jYXRpb24sIGdldFVuaWZvcm1Mb2NhdGlvbiwgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIH0gZnJvbSBcIi4vbWl4aW4vbG9jYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgYXBwbHlNYXRyaXggPSBhcHBseU1hdHJpeDtcblxuICBlbmFibGVCbGVuZGluZyA9IGVuYWJsZUJsZW5kaW5nO1xuXG4gIHVzZVByb2dyYW0gPSB1c2VQcm9ncmFtO1xuICBjcmVhdGVQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbTtcblxuICBjbGVhckNvbG91ciA9IGNsZWFyQ29sb3VyO1xuICBjbGVhckNvbG91ckJ1ZmZlciA9IGNsZWFyQ29sb3VyQnVmZmVyO1xuXG4gIGNyZWF0ZVRleHR1cmUgPSBjcmVhdGVUZXh0dXJlO1xuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZyA9IGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nO1xuXG4gIGNsZWFyRGVwdGggPSBjbGVhckRlcHRoO1xuICBjbGVhckRlcHRoQnVmZmVyID0gY2xlYXJEZXB0aEJ1ZmZlcjtcbiAgZW5hYmxlRGVwdGhUZXN0aW5nID0gZW5hYmxlRGVwdGhUZXN0aW5nO1xuXG4gIGNyZWF0ZVNoYWRlciA9IGNyZWF0ZVNoYWRlcjtcbiAgY3JlYXRlVmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyO1xuICBjcmVhdGVGcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyO1xuXG4gIGJpbmRCdWZmZXIgPSBiaW5kQnVmZmVyO1xuICBjcmVhdGVCdWZmZXIgPSBjcmVhdGVCdWZmZXI7XG4gIGJpbmRFbGVtZW50QnVmZmVyID0gYmluZEVsZW1lbnRCdWZmZXI7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIgPSBjcmVhdGVFbGVtZW50QnVmZmVyO1xuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbiA9IGdldFVuaWZvcm1Mb2NhdGlvbjtcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24gPSBnZXRBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gXCJjYW52YXNcIikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG5cbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBNT1VTRV9VUCA9IFwiTU9VU0VfVVBcIjtcbmV4cG9ydCBjb25zdCBNT1VTRV9ET1dOID0gXCJNT1VTRV9ET1dOXCI7XG5leHBvcnQgY29uc3QgTU9VU0VfTU9WRSA9IFwiTU9VU0VfTU9WRVwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFX1dIRUVMID0gXCJNT1VTRV9XSEVFTFwiO1xuZXhwb3J0IGNvbnN0IERFTFRBX1NDQUxBUiA9IDEuMjU7XG5leHBvcnQgY29uc3QgSU5WRVJUX1NDQUxBUiA9IC0xO1xuZXhwb3J0IGNvbnN0IEFOR0xFU19TQ0FMQVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IE9GRlNFVF9TQ0FMQVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgVkVSVElDRVNfTEVOR1RIID0gMztcbmV4cG9ydCBjb25zdCBNSU5JTVVNX0RJU1RBTkNFID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBGSUVMRF9PRl9WSUVXID0gNDUgKiBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBcImZ1bmN0aW9uXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXRzID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxPZmZzZXRzID0gZGVmYXVsdEluaXRpYWxPZmZzZXRzLCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSBmYWxzZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrID0gbWFzaztcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCBtYXNrID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbiksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25DYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZnVuY3Rpb25FbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGdW5jdGlvbkNhbnZhc0VsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uRWxlbWVudDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IFRleHR1cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci9jb2xvdXJcIjtcbmltcG9ydCBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzXCI7XG5pbXBvcnQgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIgJiYgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRleHR1cmVSZW5kZXJlciAmJiB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCBzaW1wbGVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9tYXNraW5nXCI7XG5pbXBvcnQgcHlyYW1pZEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9weXJhbWlkXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgIDwvUGFydD5cbiAgICA8RGVzaWduQ2FtZXJhIC8+XG4gIDwvU2NlbmU+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgU21hbGxDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBzbWFsbEN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPFNtYWxsQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIE1lZGl1bUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFzaz17c21hbGxDdWJlTWFza30gLz5cblxuICAgICAgICAsXG4gICAgICAgIG1lZGl1bUN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPE1lZGl1bUN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIG1hc2s9e21lZGl1bUN1YmVNYXNrfSAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TGFyZ2VDdWJlIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5pbXBvcnQgY29uZmlndXJhdGlvbiBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uXCI7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IHtcbiAgICBjb25zdCB7IGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCB7IGltYWdlTWFwVVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXApO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICBtYXNrID1cblxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuXG4gICAgICA7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcykgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrPXttYXNrfSAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFwiLi94Z2xcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFzayB9IGZyb20gXCIuL2VsZW1lbnQvbWFza1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJ0IH0gZnJvbSBcIi4vZWxlbWVudC9wYXJ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjZW5lIH0gZnJvbSBcIi4vZWxlbWVudC9zY2VuZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9nYW1pbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZGVzaWduXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuICAgIHZlY3RvclsyXSAqIC0xLFxuICAgIHZlY3RvclszXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzNdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKyB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gLSB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFszXSAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzNdICogeSArIG1hdHJpeFs2XSAqIHosXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbN10gKiB6LFxuICAgIG1hdHJpeFsyXSAqIHggKyBtYXRyaXhbNV0gKiB5ICsgbWF0cml4WzhdICogeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4ICsgbWF0cml4WyA0XSAqIHkgKyBtYXRyaXhbIDhdICogeiArIG1hdHJpeFsxMl0gKiB3LFxuICAgIG1hdHJpeFsgMV0gKiB4ICsgbWF0cml4WyA1XSAqIHkgKyBtYXRyaXhbIDldICogeiArIG1hdHJpeFsxM10gKiB3LFxuICAgIG1hdHJpeFsgMl0gKiB4ICsgbWF0cml4WyA2XSAqIHkgKyBtYXRyaXhbMTBdICogeiArIG1hdHJpeFsxNF0gKiB3LFxuICAgIG1hdHJpeFsgM10gKiB4ICsgbWF0cml4WyA3XSAqIHkgKyBtYXRyaXhbMTFdICogeiArIG1hdHJpeFsxNV0gKiB3LFxuXG4gIF0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX187IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNISUZUX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VXaGVlbERlbHRhKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgbW91c2VVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZURvd25FdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VXaGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG5cbiAgICAgICAgICB0b3AgLSBjbGllbnRZLFxuXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX1NDQUxBUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX1NDQUxBUiksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBBTkdMRVNfU0NBTEFSLCBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArQU5HTEVTX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sIG1hdHJpeCksIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGZsaXBwZWQpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIikgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHB1c2gsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldFBvc2l0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzKHRoaXMudmVydGljZXMpOyAgLy8vXG5cbiAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgfVxuXG4gIHNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zID0gaW50ZXJzZWN0aW9ucy5tYXAoKGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCA9IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXggPSBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZW5kVmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCkge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91cikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Q29sb3VyXCJcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbHNNYXRyaXhOYW1lID0gXCJ1Tm9ybWFsc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhOb3JtYWxcIjtcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbHNNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsc01hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBsaWdodGluZ1NvdXJjZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gXCJ1T2Zmc2V0c01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9uTWF0cml4TmFtZSA9IFwidVBvc2l0aW9uTWF0cml4XCI7XG5leHBvcnQgY29uc3Qgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHByb2plY3Rpb25NYXRyaXhOYW1lID0gXCJ1UGVyc3BlY3RpdmVNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhQb3NpdGlvblwiO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmNsb25lKCkpO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgYXJlYSA9IGxlbmd0aDMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSAvIDI7XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsIEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cykge1xuICBsZXQgb2Zmc2V0c01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBvZmZzZXRzTWF0cml4ID0gdHJhbnNsYXRlNChvZmZzZXRzTWF0cml4LCBvZmZzZXRzKTtcblxuICByZXR1cm4gb2Zmc2V0c01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyID0gZmFsc2UpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLFxuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLFxuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIGNvbnN0IGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVywgIC8vL1xuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICB6TmVhciA9IFpfTkVBUiwgLy8vXG4gICAgICAgIHpGYXIgPSBaX0ZBUiwgLy8vXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyB8fCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzOyAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZWZsZWN0MywgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGNvbnN0IHJldmVyc2VPcmRlciA9IHRydWUsXG4gICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzLCByZXZlcnNlT3JkZXIpLFxuICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KGRpcmVjdGlvbnMsIHJvdGF0aW9uc01hdHJpeCkuc2xpY2UoMCwgMyk7IC8vL1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFswLCAuLi5wb3NpdGlvbl07IH0gIC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24pIHsgcmV0dXJuIGltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IH0gIC8vL1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgaW52ZXJ0MiwgaW52ZXJ0MyB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5pbXBvcnQgeyBhZGQyLCBtdWx0aXBseTIsIHRyYW5zZm9ybTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCB0ZW1wVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gdGVtcFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRWZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcm90YXRlZFZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiByb3RhdGVkVmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gcm90YXRlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0XCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcbiIsIiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVFJBQ0UgPSBcIlRSQUNFXCI7XG5leHBvcnQgY29uc3QgREVCVUcgPSBcIkRFQlVHXCI7XG5leHBvcnQgY29uc3QgSU5GTyA9IFwiSU5GT1wiO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkcgPSBcIldBUk5JTkdcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiRVJST1JcIjtcbmV4cG9ydCBjb25zdCBGQVRBTCA9IFwiRkFUQUxcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPR19MRVZFTCA9IFdBUk5JTkc7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0dfRElSRUNUT1JZX1BBVEggPSBudWxsO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTE9HX0ZJTEVfQkFTRV9OQU1FID0gXCJkZWZhdWx0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEY4X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCI7XG5cbmV4cG9ydCBjb25zdCBEQVRBX0VWRU5UID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgVVRGOF9FTkNPRElORyA9IFwidXRmOFwiO1xuXG5leHBvcnQgY29uc3QgQ1RSTF9DID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IExJTkVfRkVFRF9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTiA9IFwiXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRlbXBsYXRlVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3RlbXBsYXRlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pc2NlbGxhbmVvdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWlzY2VsbGFuZW91c1wiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheTEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheTIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFtlbGVtZW50T3JBcnJheTJdO1xuICBcbiAgcHVzaChhcnJheTEsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICB0YWlsLFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgc3BsaWNlLFxuICByZXBsYWNlLFxuICBmaWx0ZXIsXG4gIGZpbmQsXG4gIHBydW5lLFxuICBwYXRjaCxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrLCBpbmRleCkgPT4ge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IHsgVVRGOF9FTkNPRElORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGaWxlRXhpc3RzKGZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBlbnRyeVBhdGggPSBmaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RmlsZShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IFVURjhfRU5DT0RJTkcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRmlsZShmaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKGRpcmVjdG9yeVBhdGgpO1xuXG4gIGlmICgoZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gXCIuXCIpICYmIChkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBudWxsKSkge1xuICAgIGNvbnN0IHBhcmVudERpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lLCAgLy8vXG4gICAgICAgICAgcGFyZW50RGlyZWN0b3J5RXhpc3RzID0gY2hlY2tEaXJlY3RvcnlFeGlzdHMocGFyZW50RGlyZWN0b3J5UGF0aCk7XG5cbiAgICBpZiAoIXBhcmVudERpcmVjdG9yeUV4aXN0cykge1xuICAgICAgY3JlYXRlRGlyZWN0b3J5KHBhcmVudERpcmVjdG9yeVBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIGZzLm1rZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUZpbGUob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkRmlsZVBhdGgsIG5ld0ZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGZpbGVQYXRoKSB7XG4gIHJldHVybiBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hlY2tFbnRyeUV4aXN0cyxcbiAgY2hlY2tGaWxlRXhpc3RzLFxuICBjaGVja0RpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlLFxuICB3cml0ZUZpbGUsXG4gIGFwcGVuZFRvRmlsZSxcbiAgY3JlYXRlRGlyZWN0b3J5LFxuICByZW5hbWVGaWxlLFxuICBnZXRTdGF0c1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcmMgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9yY1wiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2xvZ1wiO1xuaW1wb3J0IG9uRVRYIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb25FVFhcIjtcbmltcG9ydCBwcm9tcHQgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9wcm9tcHRcIjtcblxuaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9hamF4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nLFxuICByYyxcbiAgZ2V0LFxuICBwb3N0LFxuICBvbkVUWCxcbiAgcHJvbXB0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9ELCBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGOF9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICAgIGlmIChzdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSByZXNwb25zZVRleHQ7IC8vL1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhqc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGOF9DT05URU5UX1RZUEU7XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBjb250ZW50VHlwZSk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgPyBcIiZcIiA6IFwiXCI7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycykge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycyksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gXCJcIikgP1xuICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbmNhdGVuYXRlUGF0aHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IGNoZWNrRmlsZUV4aXN0cywgcmVhZEZpbGUsIGFwcGVuZFRvRmlsZSwgcmVuYW1lRmlsZSwgZ2V0U3RhdHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcbmltcG9ydCB7IFRSQUNFLCBERUJVRywgSU5GTywgV0FSTklORywgRVJST1IsIEZBVEFMLCBERUZBVUxUX0xPR19MRVZFTCwgREVGQVVMVF9MT0dfRklMRV9CQVNFX05BTUUsIERFRkFVTFRfTE9HX0RJUkVDVE9SWV9QQVRIIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5sZXQgbG9nTGV2ZWwgPSBERUZBVUxUX0xPR19MRVZFTCxcbiAgICBsb2dGaWxlQmFzZU5hbWUgPSBERUZBVUxUX0xPR19GSUxFX0JBU0VfTkFNRSxcbiAgICBsb2dEaXJlY3RvcnlQYXRoID0gREVGQVVMVF9MT0dfRElSRUNUT1JZX1BBVEg7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlT3JFcnJvciwgbGV2ZWwgPSBcIlwiKSB7XG4gIGxldCBzYWxpZW50U3RhY2tNZXNzYWdlSW5kZXggPSAxO1xuXG4gIGNvbnN0IGxldmVscyA9IFtcbiAgICBUUkFDRSxcbiAgICBERUJVRyxcbiAgICBJTkZPLFxuICAgIFdBUk5JTkcsXG4gICAgRVJST1IsXG4gICAgRkFUQUwsXG4gIF07XG5cbiAgaWYgKGxldmVsICE9PSBcIlwiKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2FsaWVudFN0YWNrTWVzc2FnZUluZGV4ICs9IDE7XG5cbiAgICBsZXZlbCA9IGAke2xldmVsfSBgOyAgLy8vXG4gIH1cblxuICBsZXQgZXJyb3IsXG4gICAgICBtZXNzYWdlO1xuXG4gIGlmIChtZXNzYWdlT3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgZXJyb3IgPSBtZXNzYWdlT3JFcnJvcjsgLy8vXG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgeyBzdGFjayB9ID0gZXJyb3IsXG4gICAgICAgIHN0YWNrTWVzc2FnZXMgPSBzdGFja01lc3NhZ2VzRnJvbVN0YWNrKHN0YWNrKSxcbiAgICAgICAgcGVydGluZW50U3RhY2tNZXNzYWdlID0gc3RhY2tNZXNzYWdlc1tzYWxpZW50U3RhY2tNZXNzYWdlSW5kZXhdLFxuICAgICAgICBzdGFja01lc3NhZ2UgPSBwZXJ0aW5lbnRTdGFja01lc3NhZ2UsIC8vL1xuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSxcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbGluZU51bWJlciA9IGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxvZ01lc3NhZ2UgPSBgJHtsZXZlbH0ke2N1cnJlbnREYXRlQW5kVGltZVN0cmluZ30gJHtmaWxlUGF0aH0oJHtsaW5lTnVtYmVyfSkgJHttZXNzYWdlfWA7XG5cbiAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG5cbiAgaWYgKGxvZ0RpcmVjdG9yeVBhdGggIT09IG51bGwpIHtcbiAgICByb2xsT3ZlckxvZ0ZpbGUoKTtcblxuICAgIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgICBsb2dGaWxlQ29udGVudCA9IGAke2xvZ01lc3NhZ2V9XFxuYDtcblxuICAgIGFwcGVuZFRvRmlsZShsb2dGaWxlUGF0aCwgbG9nRmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ01lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIHRyYWNlKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBUUkFDRSk7IH1cblxuZnVuY3Rpb24gZGVidWcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIERFQlVHKTsgfVxuXG5mdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBJTkZPKTsgfVxuXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBXQVJOSU5HKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRVJST1IpOyB9XG5cbmZ1bmN0aW9uIGZhdGFsKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBGQVRBTCk7IH1cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHsgbG9nTGV2ZWwgPSBsZXZlbDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKSB7IGxvZ0ZpbGVCYXNlTmFtZSA9IGZpbGVCYXNlTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHsgbG9nRGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGg7IH1cblxuZnVuY3Rpb24gc2V0TG9nT3B0aW9ucyhsb2dPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGV2ZWwsIGZpbGVCYXNlTmFtZSwgZGlyZWN0b3J5UGF0aCB9ID0gbG9nT3B0aW9ucztcblxuICBzZXRMb2dMZXZlbChsZXZlbCk7XG5cbiAgc2V0TG9nRmlsZUJhc2VOYW1lKGZpbGVCYXNlTmFtZSk7XG5cbiAgc2V0TG9nRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSByZWFkRmlsZShsb2dGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVDb250ZW50O1xufVxuXG5PYmplY3QuYXNzaWduKGxvZywge1xuICBUUkFDRSxcbiAgREVCVUcsXG4gIElORk8sXG4gIFdBUk5JTkcsXG4gIEVSUk9SLFxuICBGQVRBTCxcbiAgdHJhY2UsXG4gIGRlYnVnLFxuICBpbmZvLFxuICB3YXJuaW5nLFxuICBlcnJvcixcbiAgZmF0YWwsXG4gIHNldExvZ0xldmVsLFxuICBzZXRMb2dGaWxlQmFzZU5hbWUsXG4gIHNldExvZ0RpcmVjdG9yeVBhdGgsXG4gIHNldExvZ09wdGlvbnMsXG4gIGdldExvZ0ZpbGVDb250ZW50XG59KTtcblxuZnVuY3Rpb24gZ2V0TG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS5sb2dgLFxuICAgICAgICBsb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgbG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiBsb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IGdldEN1cnJlbnREYXRlU3RyaW5nKCksXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0uJHtjdXJyZW50RGF0ZVN0cmluZ30ubG9nYCxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCByb2xsZWRPdmVyTG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiByb2xsZWRPdmVyTG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVTdGF0cyA9IGdldFN0YXRzKGxvZ0ZpbGVQYXRoKSxcbiAgICAgICAgeyBtdGltZSB9ID0gbG9nRmlsZVN0YXRzLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKG10aW1lKTsgIC8vL1xuXG4gIHJldHVybiBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbE92ZXJMb2dGaWxlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMobG9nRmlsZVBhdGgpO1xuXG4gIGlmICghbG9nRmlsZUV4aXN0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlID0gZ2V0TG9nRmlsZUxhc3RNb2RpZmllZERhdGUoKSxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSA9IGlzRGF0ZUN1cnJlbnREYXRlKGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKTtcblxuICBpZiAoIWxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUpIHtcbiAgICBjb25zdCByb2xsZWRPdmVyTG9nRmlsZVBhdGggPSBnZXRSb2xsZWRPdmVyTG9nRmlsZVBhdGgoKTtcblxuICAgIHJlbmFtZUZpbGUobG9nRmlsZVBhdGgsIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEYXRlQ3VycmVudERhdGUoZGF0ZSkge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBjdXJyZW50RGF0ZVN0cmluZyA9IGN1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICBkYXRlQ3VycmVudERhdGUgPSAoZGF0ZVN0cmluZyA9PT0gY3VycmVudERhdGVTdHJpbmcpO1xuXG4gIHJldHVybiBkYXRlQ3VycmVudERhdGU7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlU3RyaW5nKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF5ID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0RGF0ZSgpLCAyKSwgIC8vL1xuICAgICAgICBtb250aCA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSwgLy8vXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVBbmRUaW1lU3RyaW5nKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF5ID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0RGF0ZSgpLCAyKSwgIC8vL1xuICAgICAgICBtb250aCA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSwgLy8vXG4gICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGhvdXJzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0SG91cnMoKSwgMiksXG4gICAgICAgIG1pbnV0ZXMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaW51dGVzKCksIDIpLFxuICAgICAgICBzZWNvbmRzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9LiR7bWlsbGlzZWNvbmRzfWA7XG5cbiAgcmV0dXJuIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RhY2tNZXNzYWdlc0Zyb21TdGFjayhzdGFjaykge1xuICBjb25zdCBzdGFja01lc3NhZ2VzID0gW10sXG4gICAgICAgIHN0YWNrTGluZXMgPSBzdGFjay5zcGxpdCgvXFxyXFxufFxcbi8pO1xuXG4gIGxldCBzdGFja01lc3NhZ2UgPSBcIlwiO1xuXG4gIHN0YWNrTGluZXMuZm9yRWFjaCgoc3RhY2tMaW5lKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eXFxzKmF0LiovLnRlc3Qoc3RhY2tMaW5lKTtcblxuICAgIHN0YWNrTWVzc2FnZSA9IChzdGFja01lc3NhZ2UgPT09IFwiXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICBzdGFja0xpbmUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3RhY2tNZXNzYWdlfVxcbiR7c3RhY2tMaW5lfWA7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgc3RhY2tNZXNzYWdlcy5wdXNoKHN0YWNrTWVzc2FnZSk7XG5cbiAgICAgIHN0YWNrTWVzc2FnZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhY2tNZXNzYWdlcztcbn1cblxuZnVuY3Rpb24gZmlsZVBhdGhGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC8oXFwvLispOlxcZCs6XFxkKy9tKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGFic29sdXRlRmlsZVBhdGggPSBzZWNvbmRNYXRjaCwgIC8vL1xuICAgICAgICBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGggPSBwYXRoLnJlc29sdmUoXCIuXCIpLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoICsgMSwgIC8vL1xuICAgICAgICBmaWxlUGF0aCA9IGFic29sdXRlRmlsZVBhdGguc3Vic3RyKHN0YXJ0KTtcblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC86KFxcZCspL20pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgbGluZU51bWJlciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gbGluZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnRXaXRoWmVyb2VzKHN0cmluZywgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHBhZFN0cmluZyA9IFwiMFwiLFxuICAgICAgICBwYWRkZWRTdHJpbmcgPSBwYWRTdGFydChzdHJpbmcsIHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKTtcblxuICByZXR1cm4gcGFkZGVkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWRTdGFydChzdHJpbmcsIHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XG4gIGxldCBwYWRkaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFyZ2V0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcGFkZGluZyArPSBwYWRTdHJpbmc7XG4gIH1cblxuICBjb25zdCBwYWRkZWRTdHJpbmcgPSBgJHtwYWRkaW5nfSR7c3RyaW5nfWAuc3Vic3RyKC10YXJnZXRMZW5ndGgpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREFUQV9FVkVOVCwgRVRYX0NIQVJBQ1RFUiwgVVRGOF9FTkNPRElORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCBldmVudCA9IERBVEFfRVZFTlQ7XG5cbiAgaWYgKHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSkge1xuICAgIGNvbnN0IHJhd01vZGUgPSB0cnVlLFxuICAgICAgICAgIGVuY29kaW5nID0gVVRGOF9FTkNPRElORztcblxuICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcbiAgICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHByb2Nlc3Muc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBwcm9jZXNzLnN0ZGluLmFkZExpc3RlbmVyKGV2ZW50LCBkYXRhSGFuZGxlcik7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb25FVFggZnJvbSBcIi4vb25FVFhcIjtcblxuaW1wb3J0IHsgd2hpbHN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuaW1wb3J0IHsgQ1RSTF9DLCBEQVRBX0VWRU5ULCBCQUNLU1BBQ0VfQ0hBUkFDVEVSLCBMSU5FX0ZFRURfQ0hBUkFDVEVSLCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgdmFsdWUgPSBudWxsLFxuICAgICAgICB7IGF0dGVtcHRzID0gMyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBhdHRlbXB0cyxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFwidXRmOFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IFwiXCIsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiB9ID0gb3B0aW9ucztcblxuICBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2sodmFsdWUpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5wdXQoZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgZW5jb2RpbmcsIGhpZGRlbiwgY2FsbGJhY2spIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBldmVudCA9IERBVEFfRVZFTlQsXG4gICAgICAgIHJhd01vZGUgPSB0cnVlLFxuICAgICAgICBvZmZFVFggPSBvbkVUWCgoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coQ1RSTF9DKTtcblxuICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgICB9KTtcblxuICBwcm9jZXNzLnN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIGlmICghaGlkZGVuKSB7XG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodmFsdWUpO1xuICB9XG5cbiAgcHJvY2Vzcy5zdGRpbi5yZXN1bWUoKTtcblxuICBwcm9jZXNzLnN0ZGluLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoY2h1bmspIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBjaHVuay50b1N0cmluZyhlbmNvZGluZyk7XG5cbiAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgY2FzZSBMSU5FX0ZFRURfQ0hBUkFDVEVSIDpcbiAgICAgIGNhc2UgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA6XG4gICAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHByb2Nlc3Muc3RkaW4ucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgb2ZmRVRYKCk7XG5cbiAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbHVlICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHByb2Nlc3Muc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgICAgcHJvY2Vzcy5zdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxubGV0IHBhdGhSZXNvbHZlciA9IHBhdGgucmVzb2x2ZSxcbiAgICBiYXNlRXh0ZW5zaW9uID0gREVGQVVMVF9SQ19CQVNFX0VYVEVOU0lPTjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWUsXG4gICAgICBlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2ID0gKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndikge1xuICAgIGNvbnN0IGFyZ3YgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7IC8vL1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAgLy8vXG4gIH1cblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVJDRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBgXFx0YCk7XG5cbiAgd3JpdGVGaWxlKGFic29sdXRlUkNGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhhYnNvbHV0ZVJDRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5mdW5jdGlvbiBzZXRSQ1BhdGhSZXNvbHZlcihyY1BhdGhSZXNvbHZlcikgeyBwYXRoUmVzb2x2ZXIgPSByY1BhdGhSZXNvbHZlcjsgfVxuXG5PYmplY3QuYXNzaWduKHJjLCB7XG4gIHJlYWRSQ0ZpbGUsXG4gIHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGUsXG4gIGNoZWNrUkNGaWxlRXhpc3RzLFxuICBjcmVhdGVWYWN1b3VzUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb24sXG4gIHNldFJDUGF0aFJlc29sdmVyXG59KTtcblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndikge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBhcmd2LmZpbmQoKGFyZ3VtZW50KSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goLy0tZW52aXJvbm1lbnQ9KC4rKS8pLFxuICAgICAgICAgIGZvdW5kID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgZW52aXJvbm1lbnROYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnROYW1lO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gcGF0aFJlc29sdmVyKGZpbGVQYXRoKTtcblxuICByZXR1cm4gYWJzb2x1dGVSQ0ZpbGVQYXRoO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIik7ICAvLy9cblxuICBjb25zdCBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzLCByZWdleCkge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzLCByZWdleCkge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIiksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbihcIlxcblwiKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCA9IC9cXCR7KC4rPyl9L2cpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZShyZWdleCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmVcbn07XG5cbmZ1bmN0aW9uIHBhcnNlTGluZXMobGluZXMsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCk7XG5cbiAgICByZXR1cm4gcGFyc2VkTGluZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmVzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VuKHRva2VuLCBhcmdzKSB7XG4gIGxldCBwYXJzZWRUb2tlbiA9IFwiXCI7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
