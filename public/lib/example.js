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

    _defineProperty(this, "createProgram", _program.createProgram);

    _defineProperty(this, "useProgram", _program.useProgram);

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

    _defineProperty(this, "createElementBuffer", _buffer.createElementBuffer);

    _defineProperty(this, "bindElementBuffer", _buffer.bindElementBuffer);

    _defineProperty(this, "createBuffer", _buffer.createBuffer);

    _defineProperty(this, "bindBuffer", _buffer.bindBuffer);

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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Camera = /*#__PURE__*/function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, tilt) {
    var _this;

    _classCallCheck(this, Camera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialOffsets = (0, _vector.zero3)(),
    defaultInitialDistance = 5;

var DesignCamera = /*#__PURE__*/function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(pan, tilt, zoom) {
    var _this;

    _classCallCheck(this, DesignCamera);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera).call(this, pan, tilt));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultInitialAngles = (0, _vector.zero2)(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = /*#__PURE__*/function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CanvasElement = /*#__PURE__*/function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask, hidden) {
    var _this;

    _classCallCheck(this, CanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColouredCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
    var _this;

    _classCallCheck(this, ColouredCanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredCanvasElement).call(this, transform, facets, mask, hidden));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FunctionCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(FunctionCanvasElement, _CanvasElement);

  function FunctionCanvasElement() {
    _classCallCheck(this, FunctionCanvasElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(FunctionCanvasElement).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TexturedCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    var _this;

    _classCallCheck(this, TexturedCanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedCanvasElement).call(this, transform, facets, mask, hidden));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Mask = /*#__PURE__*/function (_Element) {
  _inherits(Mask, _Element);

  function Mask(hidden) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Part = /*#__PURE__*/function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    var _this;

    _classCallCheck(this, Part);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Part).call(this));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var forEach = _necessary.asynchronousUtilities.forEach;

var Scene = /*#__PURE__*/function (_Element) {
  _inherits(Scene, _Element);

  function Scene(parts, camera, canvas) {
    var _this;

    _classCallCheck(this, Scene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
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

},{"../element":3,"../element/camera":4,"../element/part":12,"../maths/vector":29,"../miscellaneous/userInput":35,"necessary":94}],14:[function(require,module,exports){
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
  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(_cube["default"], {
    colour: [0, 1, 0]
  })), React.createElement(_index.DesignCamera, null));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultColour = [1, 0, 0];

var ColouredSquare = /*#__PURE__*/function (_ColouredCanvasElemen) {
  _inherits(ColouredSquare, _ColouredCanvasElemen);

  function ColouredSquare() {
    _classCallCheck(this, ColouredSquare);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColouredSquare).apply(this, arguments));
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
  return [React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [+90, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [0, +90, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [180, 0, 0]
  }), React.createElement(_face["default"], {
    colour: colour,
    rotations: [-90, 0, 0]
  }), React.createElement(_face["default"], {
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
  return React.createElement(_colouredSquare["default"], {
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
  return [React.createElement(_side["default"], null), React.createElement(_side["default"], {
    rotations: [0, 90, 0]
  }), React.createElement(_side["default"], {
    rotations: [0, 180, 0]
  }), React.createElement(_side["default"], {
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
  return React.createElement(_texturedTriangle["default"], {
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultImageName = "plaster.jpg",
    defaultTextureCoordinates = [[[0, 0], [2, 0], [2, 2]], [[2, 2], [0, 2], [0, 0]]];

var TexturedQuadrangle = /*#__PURE__*/function (_TexturedCanvasElemen) {
  _inherits(TexturedQuadrangle, _TexturedCanvasElemen);

  function TexturedQuadrangle() {
    _classCallCheck(this, TexturedQuadrangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(TexturedQuadrangle).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

///
var coordinates = [[0, 0, 0], [1, 0, 0], [0.5, 1, 0]],
    indexes = [[0, 1, 2]],
    defaultImageName = "stripes.jpg",
    defaultTextureCoordinates = [[[0, 0], [1, 0], [0.5, 1]]];

var TexturedTriangle = /*#__PURE__*/function (_TexturedCanvasElemen) {
  _inherits(TexturedTriangle, _TexturedCanvasElemen);

  function TexturedTriangle() {
    _classCallCheck(this, TexturedTriangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(TexturedTriangle).apply(this, arguments));
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
    return React.createElement(_cube["default"], {
      scale: [1 / 4, 1 / 4, 1 / 4]
    });
  },
      smallCubeMask = React.createElement(_index.Mask, null, React.createElement(SmallCube, null)),
      MediumCube = function MediumCube(properties) {
    return React.createElement(_cube["default"], {
      scale: [1 / 2, 1 / 2, 1 / 2],
      mask: smallCubeMask
    });
  },
      mediumCubeMask = React.createElement(_index.Mask, null, React.createElement(MediumCube, null)),
      LargeCube = function LargeCube(properties) {
    return React.createElement(_cube["default"], {
      mask: mediumCubeMask
    });
  };

  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(LargeCube, null)), React.createElement(_index.DesignCamera, null));
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
    return React.createElement(_index.Scene, {
      canvas: canvas
    }, React.createElement(_index.Part, {
      imageMap: imageMap,
      imageMapJSON: imageMapJSON
    }, React.createElement(_pyramid["default"], null)), React.createElement(_index.GamingCamera, null));
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
  return React.createElement(_index.Scene, {
    canvas: canvas
  }, React.createElement(_index.Part, null, React.createElement(_colouredSquare["default"], {
    colour: [0, 0, 1]
  })), React.createElement(_index.DesignCamera, null));
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
    mask = React.createElement(_index.Mask, null, React.createElement(_colouredSquare["default"], {
  scale: [0.25, 0.25, 1],
  position: [0.125, 0.125, 0]
}));

var tilingExample = function tilingExample() {
  var imageNames = _configuration["default"].imageNames,
      imageDirectoryURI = _configuration["default"].imageDirectoryURI;
  preloadImages(imageNames, imageDirectoryURI, function (images) {
    return React.createElement(_index.Scene, {
      canvas: canvas
    }, React.createElement(_index.Part, {
      images: images,
      imageNames: imageNames,
      imageTiling: true
    }, React.createElement(_texturedQuadrangle["default"], {
      position: [0, 0, 0],
      imageName: "floorboards.jpg",
      mask: mask
    }), React.createElement(_texturedQuadrangle["default"], {
      position: [-0.5, -0.5, -0.5],
      imageName: "paving.jpg",
      mask: mask
    })), React.createElement(_index.DesignCamera, null));
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

},{"../index":27,"../miscellaneous/configuration":30,"./element/colouredSquare":16,"./element/texturedQuadrangle":21,"necessary":94}],27:[function(require,module,exports){
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MaskingEdge = /*#__PURE__*/function (_Edge) {
  _inherits(MaskingEdge, _Edge);

  function MaskingEdge() {
    _classCallCheck(this, MaskingEdge);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge).apply(this, arguments));
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColouredFacet = /*#__PURE__*/function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    var _this;

    _classCallCheck(this, ColouredFacet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet).call(this, vertices, normal, edges));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TexturedFacet = /*#__PURE__*/function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    var _this;

    _classCallCheck(this, TexturedFacet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedFacet).call(this, vertices, normal, edges));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var vertexColourComponents = 4;

var ColourRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(ColourRendererBuffers, _RendererBuffers);

  function ColourRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
    var _this;

    _classCallCheck(this, ColourRendererBuffers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererBuffers).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var textureCoordinateComponents = 2;

var TextureRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(TextureRendererBuffers, _RendererBuffers);

  function TextureRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
    var _this;

    _classCallCheck(this, TextureRendererBuffers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererBuffers).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.push; ///

var ColourRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer() {
    _classCallCheck(this, ColourRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColourRenderer).apply(this, arguments));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.merge; ///

var ColourRendererData = /*#__PURE__*/function (_RendererData) {
  _inherits(ColourRendererData, _RendererData);

  function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
    var _this;

    _classCallCheck(this, ColourRendererData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererData).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.merge; ///

var TextureRendererData = /*#__PURE__*/function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
    var _this;

    _classCallCheck(this, TextureRendererData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererData).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColourAttributeLocations = /*#__PURE__*/function (_AttributeLocations) {
  _inherits(ColourAttributeLocations, _AttributeLocations);

  function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    var _this;

    _classCallCheck(this, ColourAttributeLocations);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourAttributeLocations).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ColourUniformLocations = /*#__PURE__*/function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  function ColourUniformLocations() {
    _classCallCheck(this, ColourUniformLocations);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColourUniformLocations).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextureAttributeLocations = /*#__PURE__*/function (_AttributeLocations) {
  _inherits(TextureAttributeLocations, _AttributeLocations);

  function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    var _this;

    _classCallCheck(this, TextureAttributeLocations);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureAttributeLocations).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextureUniformLocations = /*#__PURE__*/function (_UniformLocations) {
  _inherits(TextureUniformLocations, _UniformLocations);

  function TextureUniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
    var _this;

    _classCallCheck(this, TextureUniformLocations);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureUniformLocations).call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextureRenderer = /*#__PURE__*/function (_Renderer) {
  _inherits(TextureRenderer, _Renderer);

  function TextureRenderer() {
    _classCallCheck(this, TextureRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextureRenderer).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.push; ///

var ImageMapTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImageMapTextureRenderer, _TextureRenderer);

  function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
    var _this;

    _classCallCheck(this, ImageMapTextureRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageMapTextureRenderer).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var add = _array.push; ///

var ImagesTextureRenderer = /*#__PURE__*/function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    var _this;

    _classCallCheck(this, ImagesTextureRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImagesTextureRenderer).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

},{"necessary":94}],82:[function(require,module,exports){
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

},{"./utilities/array":95,"./utilities/asynchronous":96,"./utilities/fileSystem":97,"./utilities/miscellaneous":98,"./utilities/path":104,"./utilities/template":105}],95:[function(require,module,exports){
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

},{}],96:[function(require,module,exports){
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

},{}],97:[function(require,module,exports){
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
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "utf8";

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

},{"../utilities/path":104,"fs":93}],98:[function(require,module,exports){
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

},{"./miscellaneous/ajax":99,"./miscellaneous/log":100,"./miscellaneous/onETX":101,"./miscellaneous/prompt":102,"./miscellaneous/rc":103}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
var GET_METHOD = "GET",
    POST_METHOD = "POST";

function get(host, uri, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = GET_METHOD,
      body = undefined;
  request(host, uri, parameters, method, body, callback);
}

function post(host, uri, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///

    parameters = {};
  }

  var method = POST_METHOD,
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

  xmlHttpRequest.open(method, url, true);
  xmlHttpRequest.setRequestHeader("content-type", "application/json;charset=UTF-8");
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

},{}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = log;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _path2 = require("../../utilities/path");

var _fileSystem = require("../../utilities/fileSystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TRACE = "TRACE",
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    FATAL = "FATAL";
var logLevel = WARNING,
    logFileBaseName = "default",
    logDirectoryPath = null;

function log(messageOrError) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var pertinentStackMessageIndex = 1;
  var levels = [TRACE, DEBUG, INFO, WARNING, ERROR, FATAL];

  if (level !== "") {
    var levelIndex = levels.indexOf(level),
        logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    pertinentStackMessageIndex += 1;
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
      pertinentStackMessage = stackMessages[pertinentStackMessageIndex],
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
  return log(message, TRACE);
}

function debug(message) {
  return log(message, DEBUG);
}

function info(message) {
  return log(message, INFO);
}

function warning(message) {
  return log(message, WARNING);
}

function error(message) {
  return log(message, ERROR);
}

function fatal(message) {
  return log(message, FATAL);
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
  TRACE: TRACE,
  DEBUG: DEBUG,
  INFO: INFO,
  WARNING: WARNING,
  ERROR: ERROR,
  FATAL: FATAL,
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

},{"../../utilities/array":95,"../../utilities/fileSystem":97,"../../utilities/path":104,"path":106}],101:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onETX;
var ETX_CHARACTER = "\x03";

function onETX(handler) {
  var _process = process,
      stdin = _process.stdin,
      setRawMode = stdin.setRawMode;

  if (setRawMode) {
    var rawMode = true,
        encoding = "utf8";
    stdin.setRawMode(rawMode);
    stdin.setEncoding(encoding);
    stdin.resume();
    stdin.addListener("data", dataHandler);
    return offExt;
  }

  function offExt() {
    stdin.removeListener("data", dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

}).call(this,require('_process'))

},{"_process":107}],102:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = prompt;

var _onETX = _interopRequireDefault(require("./onETX"));

var _asynchronous = require("../../utilities/asynchronous");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process = process,
    stdin = _process.stdin,
    stdout = _process.stdout,
    exit = _process.exit;
var BACKSPACE_CHARACTER = String.fromCharCode(127),
    LINE_FEED_CHARACTER = "\n",
    CARRIAGE_RETURN_CHARACTER = "\r";

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

  var rawMode = true,
      offETX = (0, _onETX["default"])(function () {
    console.log("^C");
    exit();
  });
  stdin.setEncoding(encoding);
  stdin.setRawMode(rawMode);
  stdout.write(description);

  if (!hidden) {
    stdout.write(value);
  }

  stdin.resume();
  stdin.on("data", listener);

  function listener(chunk) {
    var character = chunk.toString(encoding);

    switch (character) {
      case LINE_FEED_CHARACTER:
      case CARRIAGE_RETURN_CHARACTER:
        stdout.write(LINE_FEED_CHARACTER);
        stdin.removeListener("data", listener);
        stdin.pause();
        offETX();
        callback(value);
        break;

      case BACKSPACE_CHARACTER:
        value = value.slice(0, value.length - 1);
        stdout.clearLine();
        stdout.cursorTo(0);
        stdout.write(description);

        if (!hidden) {
          stdout.write(value);
        }

        break;

      default:
        value += character;

        if (!hidden) {
          stdout.clearLine();
          stdout.cursorTo(0);
          stdout.write(description);
          stdout.write(value);
        }

        break;
    }
  }
}

}).call(this,require('_process'))

},{"../../utilities/asynchronous":96,"./onETX":101,"_process":107}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rc;

var _path = _interopRequireDefault(require("path"));

var _array = require("../../utilities/array");

var _fileSystem = require("../../utilities/fileSystem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pathResolver = _path["default"].resolve,
    baseExtension = "";

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

},{"../../utilities/array":95,"../../utilities/fileSystem":97,"path":106}],104:[function(require,module,exports){
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
  var pathNames = path.split("/"),
      relativePathNames = relativePath.split("/");
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

},{"../utilities/array":95}],105:[function(require,module,exports){
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

},{"../utilities/fileSystem":97}],106:[function(require,module,exports){
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

},{"_process":107}],107:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY2FudmFzLmpzIiwibGliL2NvbnN0YW50cy5qcyIsImxpYi9lbGVtZW50LmpzIiwibGliL2VsZW1lbnQvY2FtZXJhLmpzIiwibGliL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsImxpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCJsaWIvZWxlbWVudC9jYW52YXMuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJsaWIvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCJsaWIvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCJsaWIvZWxlbWVudC9tYXNrLmpzIiwibGliL2VsZW1lbnQvcGFydC5qcyIsImxpYi9lbGVtZW50L3NjZW5lLmpzIiwibGliL2V4YW1wbGUuanMiLCJsaWIvZXhhbXBsZS9jdWJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsImxpYi9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwibGliL2V4YW1wbGUvbWFza2luZy5qcyIsImxpYi9leGFtcGxlL3B5cmFtaWQuanMiLCJsaWIvZXhhbXBsZS9zaW1wbGUuanMiLCJsaWIvZXhhbXBsZS90aWxpbmcuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvbWF0aHMvbWF0cml4LmpzIiwibGliL21hdGhzL3ZlY3Rvci5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24uanMiLCJsaWIvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCJsaWIvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy91c2VySW5wdXQuanMiLCJsaWIvbWlzY2VsbGFuZW91cy96b29tLmpzIiwibGliL21peGluL2JsZW5kaW5nLmpzIiwibGliL21peGluL2J1ZmZlci5qcyIsImxpYi9taXhpbi9jb2xvdXIuanMiLCJsaWIvbWl4aW4vZGVwdGguanMiLCJsaWIvbWl4aW4vbG9jYXRpb24uanMiLCJsaWIvbWl4aW4vbWF0cml4LmpzIiwibGliL21peGluL3Byb2dyYW0uanMiLCJsaWIvbWl4aW4vc2hhZGVyLmpzIiwibGliL21peGluL3RleHR1cmUuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UuanMiLCJsaWIvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsImxpYi9wcmltaXRpdmUvZmFjZXQuanMiLCJsaWIvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwibGliL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsImxpYi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwibGliL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCJsaWIvcHJpbWl0aXZlL3ZlcnRleC5qcyIsImxpYi9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwibGliL3JlYWN0LmpzIiwibGliL3JlbmRlcmVyLmpzIiwibGliL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwibGliL3JlbmRlcmVyL2NvbG91ci5qcyIsImxpYi9yZW5kZXJlci9kYXRhLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwibGliL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwibGliL3JlbmRlcmVyL3RleHR1cmUuanMiLCJsaWIvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsImxpYi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsImxpYi91dGlsaXRpZXMvYW5nbGUuanMiLCJsaWIvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwibGliL3V0aWxpdGllcy9hcnJheS5qcyIsImxpYi91dGlsaXRpZXMvZmFjZXQuanMiLCJsaWIvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsImxpYi91dGlsaXRpZXMvbWF0cml4LmpzIiwibGliL3V0aWxpdGllcy9taWRQb2ludC5qcyIsImxpYi91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsImxpYi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImxpYi91dGlsaXRpZXMvcm90YXRpb24uanMiLCJsaWIvdXRpbGl0aWVzL3RleHR1cmUuanMiLCJsaWIvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsImxpYi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJsaWIveGdsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9hamF4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbG9nLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvb25FVFguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9wcm9tcHQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9yYy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcHBseU1hdHJpeCB9IGZyb20gXCIuL21peGluL21hdHJpeFwiO1xuaW1wb3J0IHsgZW5hYmxlQmxlbmRpbmcgfSBmcm9tIFwiLi9taXhpbi9ibGVuZGluZ1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSwgdXNlUHJvZ3JhbSB9IGZyb20gXCIuL21peGluL3Byb2dyYW1cIjtcbmltcG9ydCB7IGNsZWFyQ29sb3VyLCBjbGVhckNvbG91ckJ1ZmZlciB9IGZyb20gXCIuL21peGluL2NvbG91clwiO1xuaW1wb3J0IHsgY3JlYXRlVGV4dHVyZSwgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcgfSBmcm9tIFwiLi9taXhpbi90ZXh0dXJlXCI7XG5pbXBvcnQgeyBjbGVhckRlcHRoLCBjbGVhckRlcHRoQnVmZmVyLCBlbmFibGVEZXB0aFRlc3RpbmcgfSBmcm9tIFwiLi9taXhpbi9kZXB0aFwiO1xuaW1wb3J0IHsgY3JlYXRlU2hhZGVyLCBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyIH0gZnJvbSBcIi4vbWl4aW4vc2hhZGVyXCI7XG5pbXBvcnQgeyBiaW5kQnVmZmVyLCBiaW5kRWxlbWVudEJ1ZmZlciwgY3JlYXRlQnVmZmVyLCBjcmVhdGVFbGVtZW50QnVmZmVyIH0gZnJvbSBcIi4vbWl4aW4vYnVmZmVyXCI7XG5pbXBvcnQgeyBnZXRBdHRyaWJ1dGVMb2NhdGlvbiwgZ2V0VW5pZm9ybUxvY2F0aW9uLCBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgfSBmcm9tIFwiLi9taXhpbi9sb2NhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBhcHBseU1hdHJpeCA9IGFwcGx5TWF0cml4O1xuXG4gIGVuYWJsZUJsZW5kaW5nID0gZW5hYmxlQmxlbmRpbmc7XG5cbiAgY3JlYXRlUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW07XG4gIHVzZVByb2dyYW0gPSB1c2VQcm9ncmFtO1xuXG4gIGNsZWFyQ29sb3VyID0gY2xlYXJDb2xvdXI7XG4gIGNsZWFyQ29sb3VyQnVmZmVyID0gY2xlYXJDb2xvdXJCdWZmZXI7XG5cbiAgY3JlYXRlVGV4dHVyZSA9IGNyZWF0ZVRleHR1cmU7XG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nID0gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmc7XG5cbiAgY2xlYXJEZXB0aCA9IGNsZWFyRGVwdGg7XG4gIGNsZWFyRGVwdGhCdWZmZXIgPSBjbGVhckRlcHRoQnVmZmVyO1xuICBlbmFibGVEZXB0aFRlc3RpbmcgPSBlbmFibGVEZXB0aFRlc3Rpbmc7XG5cbiAgY3JlYXRlU2hhZGVyID0gY3JlYXRlU2hhZGVyO1xuICBjcmVhdGVWZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXI7XG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXI7XG5cbiAgY3JlYXRlRWxlbWVudEJ1ZmZlciA9IGNyZWF0ZUVsZW1lbnRCdWZmZXI7XG4gIGJpbmRFbGVtZW50QnVmZmVyID0gYmluZEVsZW1lbnRCdWZmZXI7XG4gIGNyZWF0ZUJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcjtcbiAgYmluZEJ1ZmZlciA9IGJpbmRCdWZmZXI7XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uID0gZ2V0VW5pZm9ybUxvY2F0aW9uO1xuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbiA9IGdldEF0dHJpYnV0ZUxvY2F0aW9uO1xuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWU7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBcImNhbnZhc1wiKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcblxuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LmApO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpfRkFSID0gMTAwMDtcbmV4cG9ydCBjb25zdCBaX05FQVIgPSAxO1xuZXhwb3J0IGNvbnN0IE1PVVNFX1VQID0gXCJNT1VTRV9VUFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFX0RPV04gPSBcIk1PVVNFX0RPV05cIjtcbmV4cG9ydCBjb25zdCBNT1VTRV9NT1ZFID0gXCJNT1VTRV9NT1ZFXCI7XG5leHBvcnQgY29uc3QgTU9VU0VfV0hFRUwgPSBcIk1PVVNFX1dIRUVMXCI7XG5leHBvcnQgY29uc3QgREVMVEFfU0NBTEFSID0gMS4yNTtcbmV4cG9ydCBjb25zdCBJTlZFUlRfU0NBTEFSID0gLTE7XG5leHBvcnQgY29uc3QgQU5HTEVTX1NDQUxBUiA9IDAuMDE7XG5leHBvcnQgY29uc3QgT0ZGU0VUX1NDQUxBUiA9IDAuMjU7XG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBWRVJUSUNFU19MRU5HVEggPSAzO1xuZXhwb3J0IGNvbnN0IE1JTklNVU1fRElTVEFOQ0UgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SID0gMC4wMDAwMDAxO1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IEZJRUxEX09GX1ZJRVcgPSA0NSAqIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcbmltcG9ydCBab29tIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3pvb21cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsUG9zaXRpb24gPSBbIDAsIDAsIDUgXTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuXG5cblxuXG5cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG5cbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbFBvc2l0aW9uID0gZGVmYXVsdEluaXRpYWxQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gdHJ1ZSxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcblxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGhpZGRlbiA9IGhpZGRlbiB8fCB0aGlzLmhpZGRlbjsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhoaWRkZW4pKTtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBhbWVuZEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2spO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkVsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25FbGVtZW50O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IE1hc2tpbmdGYWNldCBmcm9tIFwiLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMsIGhpZGRlbik7XG5cbiAgICBtYXNrLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcblxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGluaXRpYWxpc2VQYXJ0cyh0aGlzLnBhcnRzLCB1cGRhdGUsIGNhbnZhcywgKCkgPT4ge1xuICAgICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgZG9uZSwgdXBkYXRlLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBjYW1lcmEgPSBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZVBhcnRzKHBhcnRzLCB1cGRhdGUsIGNhbnZhcywgZG9uZSkge1xuICBmb3JFYWNoKHBhcnRzLCAocGFydCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aCxcbiAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBwYXJ0c0xlbmd0aDtcblxuICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgcGFydHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgocGFydHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBQYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZnVuY3Rpb24gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBjYW1lcmEgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoY2FtZXJhLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2FtZXJhID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2FtZXJhKSB7XG4gICAgICAgIGNhbWVyYSA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBjYW1lcmE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGN1YmVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvY3ViZVwiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvdGlsaW5nXCI7XG5cbmNvbnN0IGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcIm1hc2tpbmdcIjpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+XG5cbiAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICA8UGFydD5cbiAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0Q29sb3VyID0gWyAxLCAwLCAwIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkU3F1YXJlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgXHRjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG5cdFx0XHQgICAgY29sb3VyZWRTcXVhcmUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRTcXVhcmUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gIFx0cmV0dXJuIGNvbG91cmVkU3F1YXJlO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lkZSBmcm9tIFwiLi9zaWRlXCI7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQeXJhbWlkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUHlyYW1pZCBmcm9tIFwiLi9lbGVtZW50L3B5cmFtaWRcIjtcbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb25cIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhIC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgc3JjID0gaW1hZ2VNYXBVUkk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZFxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBzcmMgPSBgJHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YDtcblxuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MihtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTIgKiBiMSxcbiAgICBhMSAqIGIwICsgYTMgKiBiMSxcblxuICAgIGEwICogYjIgKyBhMiAqIGIzLFxuICAgIGExICogYjIgKyBhMyAqIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuICAgICAgICBhNCA9IG1hdHJpeEFbNF0sXG4gICAgICAgIGE1ID0gbWF0cml4QVs1XSxcbiAgICAgICAgYTYgPSBtYXRyaXhBWzZdLFxuICAgICAgICBhNyA9IG1hdHJpeEFbN10sXG4gICAgICAgIGE4ID0gbWF0cml4QVs4XSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM10sXG4gICAgICAgIGI0ID0gbWF0cml4Qls0XSxcbiAgICAgICAgYjUgPSBtYXRyaXhCWzVdLFxuICAgICAgICBiNiA9IG1hdHJpeEJbNl0sXG4gICAgICAgIGI3ID0gbWF0cml4Qls3XSxcbiAgICAgICAgYjggPSBtYXRyaXhCWzhdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIGEwID0gbWF0cml4QVsgMF0sXG4gICAgICAgICBhMSA9IG1hdHJpeEFbIDFdLFxuICAgICAgICAgYTIgPSBtYXRyaXhBWyAyXSxcbiAgICAgICAgIGEzID0gbWF0cml4QVsgM10sXG4gICAgICAgICBhNCA9IG1hdHJpeEFbIDRdLFxuICAgICAgICAgYTUgPSBtYXRyaXhBWyA1XSxcbiAgICAgICAgIGE2ID0gbWF0cml4QVsgNl0sXG4gICAgICAgICBhNyA9IG1hdHJpeEFbIDddLFxuICAgICAgICAgYTggPSBtYXRyaXhBWyA4XSxcbiAgICAgICAgIGE5ID0gbWF0cml4QVsgOV0sXG4gICAgICAgIGExMCA9IG1hdHJpeEFbMTBdLFxuICAgICAgICBhMTEgPSBtYXRyaXhBWzExXSxcbiAgICAgICAgYTEyID0gbWF0cml4QVsxMl0sXG4gICAgICAgIGExMyA9IG1hdHJpeEFbMTNdLFxuICAgICAgICBhMTQgPSBtYXRyaXhBWzE0XSxcbiAgICAgICAgYTE1ID0gbWF0cml4QVsxNV0sXG5cbiAgICAgICAgIGIwID0gbWF0cml4QlsgMF0sXG4gICAgICAgICBiMSA9IG1hdHJpeEJbIDFdLFxuICAgICAgICAgYjIgPSBtYXRyaXhCWyAyXSxcbiAgICAgICAgIGIzID0gbWF0cml4QlsgM10sXG4gICAgICAgICBiNCA9IG1hdHJpeEJbIDRdLFxuICAgICAgICAgYjUgPSBtYXRyaXhCWyA1XSxcbiAgICAgICAgIGI2ID0gbWF0cml4QlsgNl0sXG4gICAgICAgICBiNyA9IG1hdHJpeEJbIDddLFxuICAgICAgICAgYjggPSBtYXRyaXhCWyA4XSxcbiAgICAgICAgIGI5ID0gbWF0cml4QlsgOV0sXG4gICAgICAgIGIxMCA9IG1hdHJpeEJbMTBdLFxuICAgICAgICBiMTEgPSBtYXRyaXhCWzExXSxcbiAgICAgICAgYjEyID0gbWF0cml4QlsxMl0sXG4gICAgICAgIGIxMyA9IG1hdHJpeEJbMTNdLFxuICAgICAgICBiMTQgPSBtYXRyaXhCWzE0XSxcbiAgICAgICAgYjE1ID0gbWF0cml4QlsxNV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IG0wID0gbWF0cml4WzBdLFxuICAgICAgICBtMSA9IG1hdHJpeFsxXSxcbiAgICAgICAgbTIgPSBtYXRyaXhbMl0sXG4gICAgICAgIG0zID0gbWF0cml4WzNdLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAgKiBtMyAtIG0yICogbTE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAgIC1tMiAvIGRldGVybWluYW50LCArbTAgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbMF0sIG0wMSA9IG1hdHJpeFsxXSwgbTAyID0gbWF0cml4WzJdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbM10sIG0xMSA9IG1hdHJpeFs0XSwgbTEyID0gbWF0cml4WzVdLFxuICAgICAgICBtMjAgPSBtYXRyaXhbNl0sIG0yMSA9IG1hdHJpeFs3XSwgbTIyID0gbWF0cml4WzhdLFxuXG4gICAgICAgIGIwMSA9ICBtMjIgKiBtMTEgLSBtMTIgKiBtMjEsXG4gICAgICAgIGIxMSA9IC1tMjIgKiBtMTAgKyBtMTIgKiBtMjAsXG4gICAgICAgIGIyMSA9ICBtMjEgKiBtMTAgLSBtMTEgKiBtMjAsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMDAgKiBiMDEgKyBtMDEgKiBiMTEgKyBtMDIgKiBiMjE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIGIwMSAvIGRldGVybWluYW50LCAoLW0yMiAqIG0wMSArIG0wMiAqIG0yMSkgLyBkZXRlcm1pbmFudCwgKCBtMTIgKiBtMDEgLSBtMDIgKiBtMTEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtMjIgKiBtMDAgLSBtMDIgKiBtMjApIC8gZGV0ZXJtaW5hbnQsICgtbTEyICogbTAwICsgbTAyICogbTEwKSAvIGRldGVybWluYW50LFxuICAgICAgYjIxIC8gZGV0ZXJtaW5hbnQsICgtbTIxICogbTAwICsgbTAxICogbTIwKSAvIGRldGVybWluYW50LCAoIG0xMSAqIG0wMCAtIG0wMSAqIG0xMCkgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbIDBdLCBtMDEgPSBtYXRyaXhbIDFdLCBtMDIgPSBtYXRyaXhbIDJdLCBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLCBtMTEgPSBtYXRyaXhbIDVdLCBtMTIgPSBtYXRyaXhbIDZdLCBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLCBtMjEgPSBtYXRyaXhbIDldLCBtMjIgPSBtYXRyaXhbMTBdLCBtMjMgPSBtYXRyaXhbMTFdLFxuICAgICAgICBtMzAgPSBtYXRyaXhbMTJdLCBtMzEgPSBtYXRyaXhbMTNdLCBtMzIgPSBtYXRyaXhbMTRdLCBtMzMgPSBtYXRyaXhbMTVdLFxuXG4gICAgICAgIGIwMCA9IG0wMCAqIG0xMSAtIG0wMSAqIG0xMCxcbiAgICAgICAgYjAxID0gbTAwICogbTEyIC0gbTAyICogbTEwLFxuICAgICAgICBiMDIgPSBtMDAgKiBtMTMgLSBtMDMgKiBtMTAsXG4gICAgICAgIGIwMyA9IG0wMSAqIG0xMiAtIG0wMiAqIG0xMSxcbiAgICAgICAgYjA0ID0gbTAxICogbTEzIC0gbTAzICogbTExLFxuICAgICAgICBiMDUgPSBtMDIgKiBtMTMgLSBtMDMgKiBtMTIsXG4gICAgICAgIGIwNiA9IG0yMCAqIG0zMSAtIG0yMSAqIG0zMCxcbiAgICAgICAgYjA3ID0gbTIwICogbTMyIC0gbTIyICogbTMwLFxuICAgICAgICBiMDggPSBtMjAgKiBtMzMgLSBtMjMgKiBtMzAsXG4gICAgICAgIGIwOSA9IG0yMSAqIG0zMiAtIG0yMiAqIG0zMSxcbiAgICAgICAgYjEwID0gbTIxICogbTMzIC0gbTIzICogbTMxLFxuICAgICAgICBiMTEgPSBtMjIgKiBtMzMgLSBtMjMgKiBtMzIsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIChtMTEgKiBiMTEgLSBtMTIgKiBiMTAgKyBtMTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMDIgKiBiMTAgLSBtMDEgKiBiMTEgLSBtMDMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDUgLSBtMzIgKiBiMDQgKyBtMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMjIgKiBiMDQgLSBtMjEgKiBiMDUgLSBtMjMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEyICogYjA4IC0gbTEwICogYjExIC0gbTEzICogYjA3KSAvIGRldGVybWluYW50LCAobTAwICogYjExIC0gbTAyICogYjA4ICsgbTAzICogYjA3KSAvIGRldGVybWluYW50LCAobTMyICogYjAyIC0gbTMwICogYjA1IC0gbTMzICogYjAxKSAvIGRldGVybWluYW50LCAobTIwICogYjA1IC0gbTIyICogYjAyICsgbTIzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMCAqIGIxMCAtIG0xMSAqIGIwOCArIG0xMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMSAqIGIwOCAtIG0wMCAqIGIxMCAtIG0wMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMCAqIGIwNCAtIG0zMSAqIGIwMiArIG0zMyAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMSAqIGIwMiAtIG0yMCAqIGIwNCAtIG0yMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTEgKiBiMDcgLSBtMTAgKiBiMDkgLSBtMTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMDkgLSBtMDEgKiBiMDcgKyBtMDIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDEgLSBtMzAgKiBiMDMgLSBtMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDMgLSBtMjEgKiBiMDEgKyBtMjIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFsyXSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTMobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbM10sIG1hdHJpeFs2XSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzddLFxuICAgIG1hdHJpeFsyXSwgbWF0cml4WzVdLCBtYXRyaXhbOF0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0sIG1hdHJpeFsgNF0sIG1hdHJpeFsgOF0sIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WyAxXSwgbWF0cml4WyA1XSwgbWF0cml4WyA5XSwgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbIDJdLCBtYXRyaXhbIDZdLCBtYXRyaXhbMTBdLCBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsgM10sIG1hdHJpeFsgN10sIG1hdHJpeFsxMV0sIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4LCBtYXRyaXhbIDFdICogeCwgbWF0cml4WyAyXSAqIHgsIG1hdHJpeFsgM10gKiB4LFxuICAgIG1hdHJpeFsgNF0gKiB5LCBtYXRyaXhbIDVdICogeSwgbWF0cml4WyA2XSAqIHksIG1hdHJpeFsgN10gKiB5LFxuICAgIG1hdHJpeFsgOF0gKiB6LCBtYXRyaXhbIDldICogeiwgbWF0cml4WzEwXSAqIHosIG1hdHJpeFsxMV0gKiB6LFxuICAgIG1hdHJpeFsxMl0gKiAxLCBtYXRyaXhbMTNdICogMSwgbWF0cml4WzE0XSAqIDEsIG1hdHJpeFsxNV0gKiAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHtcbiAgbGV0IHggPSB2ZWN0b3JbMF0sXG4gICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgeiA9IHZlY3RvclsyXTtcblxuICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgeCAvPSBsZW5ndGg7XG4gICAgeSAvPSBsZW5ndGg7XG4gICAgeiAvPSBsZW5ndGg7XG5cbiAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgdCA9IDEgLSBjLFxuXG4gICAgICAgICAgbTAwID0gbWF0cml4WyAwXSxcbiAgICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgICAgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgICAgbTEyID0gbWF0cml4WyA2XSxcbiAgICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgICAgbTIxID0gbWF0cml4WyA5XSxcbiAgICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICAgIG0yMyA9IG1hdHJpeFsxMV0sXG5cbiAgICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICBtMDAgKiBiMDAgKyBtMTAgKiBiMDEgKyBtMjAgKiBiMDIsIG0wMSAqIGIwMCArIG0xMSAqIGIwMSArIG0yMSAqIGIwMiwgbTAyICogYjAwICsgbTEyICogYjAxICsgbTIyICogYjAyLCBtMDMgKiBiMDAgKyBtMTMgKiBiMDEgKyBtMjMgKiBiMDIsXG4gICAgICBtMDAgKiBiMTAgKyBtMTAgKiBiMTEgKyBtMjAgKiBiMTIsIG0wMSAqIGIxMCArIG0xMSAqIGIxMSArIG0yMSAqIGIxMiwgbTAyICogYjEwICsgbTEyICogYjExICsgbTIyICogYjEyLCBtMDMgKiBiMTAgKyBtMTMgKiBiMTEgKyBtMjMgKiBiMTIsXG4gICAgICBtMDAgKiBiMjAgKyBtMTAgKiBiMjEgKyBtMjAgKiBiMjIsIG0wMSAqIGIyMCArIG0xMSAqIGIyMSArIG0yMSAqIGIyMiwgbTAyICogYjIwICsgbTEyICogYjIxICsgbTIyICogYjIyLCBtMDMgKiBiMjAgKyBtMTMgKiBiMjEgKyBtMjMgKiBiMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxMl0sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzEzXSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTRdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxNV0sXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuXG4gICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgIG0yMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMyxcbiAgICBtMDAgKiB4ICsgbTEwICogeSArIG0yMCAqIHogKyBtYXRyaXhbMTJdLCBtMDEgKiB4ICsgbTExICogeSArIG0yMSAqIHogKyBtYXRyaXhbMTNdLCBtMDIgKiB4ICsgbTEyICogeSArIG0yMiAqIHogKyBtYXRyaXhbMTRdLCBtMDMgKiB4ICsgbTEzICogeSArIG0yMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpIHtcbiAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3IC8gMiksXG4gICAgICAgIG5mID0gMSAvICh6TmVhciAtIHpGYXIpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgZiAvIGFzcGVjdFJhdGlvLCAwLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIGYsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKHpGYXIgKyB6TmVhcikgKiBuZiwgICAgLTEsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoMiAqIHpGYXIgKiB6TmVhcikgKiBuZiwgMCxcblxuICBdKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvNCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSArIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgYXggPSB2ZWN0b3JBWzBdLCBheSA9IHZlY3RvckFbMV0sIGF6ID0gdmVjdG9yQVsyXSxcbiAgICAgICAgYnggPSB2ZWN0b3JCWzBdLCBieSA9IHZlY3RvckJbMV0sIGJ6ID0gdmVjdG9yQlsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIGF5ICogYnogLSBheiAqIGJ5LFxuICAgIGF6ICogYnggLSBheCAqIGJ6LFxuICAgIGF4ICogYnkgLSBheSAqIGJ4LFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcbiAgICAgIHogLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuICAgICAgdyAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuICAgIHZlY3RvclsyXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG4gICAgdmVjdG9yWzJdICogLTEsXG4gICAgdmVjdG9yWzNdICogLTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbM10gKiB5ICsgbWF0cml4WzZdICogeixcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs3XSAqIHosXG4gICAgbWF0cml4WzJdICogeCArIG1hdHJpeFs1XSAqIHkgKyBtYXRyaXhbOF0gKiB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXzsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hJRlRfS0VZX0NPREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAgLy8vXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0gdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24pKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfVVApO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9ET1dOKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfTU9WRSk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZVdoZWVsRGVsdGEpKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gbW91c2VXaGVlbERlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudCxcbiAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IHRhcmdldCwgIC8vL1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wLFxuICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcblxuICAgICAgICAgIHRvcCAtIGNsaWVudFksXG5cbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuaW1wb3J0IHsgREVMVEFfU0NBTEFSLCBJTlZFUlRfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfU0NBTEFSKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsZWRNb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfU0NBTEFSKSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IEFOR0xFU19TQ0FMQVIsIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGZsaXBwZWQpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmZsaXBwZWQgPSBmbGlwcGVkO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlID0gc2Vjb25kKHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG4gIFxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtBTkdMRVNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLUFOR0xFU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCkge1xuICAgIGNvbnN0IHNjYWxhciA9IGZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0RFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgbWF0cml4KSwgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgZmxpcHBlZCk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4va2V5RXZlbnRzXCI7XG5pbXBvcnQgTW91c2VFdmVudHMgZnJvbSBcIi4vbW91c2VFdmVudHNcIjtcblxuaW1wb3J0IHsgemVybzIsIHN1YnRyYWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmtleUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdXNlcklucHV0O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVMVEFfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIHRoaXMuZGlzdGFuY2UgLT0gbW91c2VXaGVlbERlbHRhICogREVMVEFfU0NBTEFSO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KE1JTklNVU1fRElTVEFOQ0UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCbGVuZGluZygpIHtcbiAgY29uc3QgeyBCTEVORCwgU1JDX0FMUEhBLCBPTkUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBCTEVORCxcbiAgICAgICAgc291cmNlRmFjdG9yID0gU1JDX0FMUEhBLFxuICAgICAgICBkZXN0aW5hdGlvbkZhY3RvciA9IE9ORTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHNvdXJjZUZhY3RvciwgZGVzdGluYXRpb25GYWN0b3IpO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gZGVmYXVsdERlcHRoKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IERFUFRIX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihcIldFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIilcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1YnRyYWN0MyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBFZGdlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlcyh0aGlzLnZlcnRpY2VzKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0O1xuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkRmFjZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2tpbmdFZGdlIGZyb20gXCIuL2VkZ2UvbWFza2luZ1wiO1xuaW1wb3J0IFZlcnRpY2FsTGluZSBmcm9tIFwiLi92ZXJ0aWNhbExpbmVcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBwdXNoLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5jbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0KSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbk9iamVjdC5hc3NpZ24oUmVuZGVyZXIsIHtcbiAgY3JlYXRlUHJvZ3JhbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJCdWZmZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuXG5jbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCIsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxzTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCIsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiLFxuICAgICAgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRzTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lLFxuICByb3RhdGlvbnNNYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCIsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24oZnJhZ21lbnRTaGFkZXJTb3VyY2UsIHtcbiAgc2FtcGxlck5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2gsIGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lLFxuICBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8odmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMCwgbWFyZ2luT2ZFcnJvcik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUsXG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvXG59O1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5mdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBwZXJtdXRlLFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWVcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5mdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5jbG9uZSgpKTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVFZGdlcyxcbiAgY2xvbmVOb3JtYWwsXG4gIGNsb25lVmVydGljZXMsXG4gIGNhbGN1bGF0ZUVkZ2VzLFxuICBjYWxjdWxhdGVOb3JtYWwsXG4gIGNhbGN1bGF0ZUFyZWFcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbixcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsIEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuXG5mdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyID0gZmFsc2UpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLFxuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLFxuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTtcblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIGNvbnN0IGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVywgIC8vL1xuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICB6TmVhciA9IFpfTkVBUiwgLy8vXG4gICAgICAgIHpGYXIgPSBaX0ZBUiwgLy8vXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzY2FsZU1hdHJpeEZyb21TY2FsZSxcbiAgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSxcbiAgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sXG4gIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMsXG4gIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbixcbiAgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSxcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXNcbn07XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlZmxlY3QzLCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucykge1xuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKHJlZmxlY3RlZEFuZ2xlcywgcmV2ZXJzZU9yZGVyKSxcbiAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb24sICAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmaXJzdChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gc2Vjb25kKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmb3VydGgocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLWZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBleHRlbnQgPSBub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXROb3JtYWwgPSBleHRlbnQsICAvLy9cbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgICAgZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gZG90Myh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gY3Jvc3MzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLCAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSksXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb25cbn07XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZVBvc2l0aW9uXG59O1xuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGludmVydDIsIGludmVydDMgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuaW1wb3J0IHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5mdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KSB7XG4gIGNvbnN0IHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKSk7IC8vL1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3QgdGVtcFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHRlbXBWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyxcbiAgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVWZXJ0aWNlcyxcbiAgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiUmVhY3RcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG4iLCIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGVVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdGVtcGxhdGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWlzY2VsbGFuZW91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7XG4gIHJldHVybiBhcnJheVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuXHRsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cblx0Zm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHR2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG5cdH0pO1xuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuXHRsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cblx0YmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0dmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuXHR9KTtcblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgbGFzdCxcbiAgdGFpbCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuXHRmb3J3YXJkc1JlZHVjZSxcblx0YmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmltcG9ydCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGaWxlRXhpc3RzKGZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBlbnRyeVBhdGggPSBmaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RmlsZShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IFwidXRmOFwiKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0ZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMuYXBwZW5kRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICBpZiAoKGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IFwiLlwiKSAmJiAoZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkpIHtcbiAgICBjb25zdCBwYXJlbnREaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudERpcmVjdG9yeUV4aXN0cyA9IGNoZWNrRGlyZWN0b3J5RXhpc3RzKHBhcmVudERpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeShwYXJlbnREaXJlY3RvcnlQYXRoKTtcbiAgICB9XG4gIH1cblxuICBmcy5ta2RpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVGaWxlKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCkge1xuICBmcy5yZW5hbWVTeW5jKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0cyhmaWxlUGF0aCkge1xuICByZXR1cm4gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrRW50cnlFeGlzdHMsXG4gIGNoZWNrRmlsZUV4aXN0cyxcbiAgY2hlY2tEaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgcmVuYW1lRmlsZSxcbiAgZ2V0U3RhdHNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJjIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvcmNcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9sb2dcIjtcbmltcG9ydCBvbkVUWCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29uRVRYXCI7XG5pbXBvcnQgcHJvbXB0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvcHJvbXB0XCI7XG5cbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYWpheFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvZyxcbiAgcmMsXG4gIGdldCxcbiAgcG9zdCxcbiAgb25FVFgsXG4gIHByb21wdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIixcbiAgICAgIFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICAgIGlmIChzdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSByZXNwb25zZVRleHQ7IC8vL1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhqc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcblxuICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpO1xufVxuXG5mdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/IFwiJlwiIDogXCJcIjtcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgXCJcIik7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY29uY2F0ZW5hdGVQYXRocyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgY2hlY2tGaWxlRXhpc3RzLCByZWFkRmlsZSwgYXBwZW5kVG9GaWxlLCByZW5hbWVGaWxlLCBnZXRTdGF0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5jb25zdCBUUkFDRSA9IFwiVFJBQ0VcIixcbiAgICAgIERFQlVHID0gXCJERUJVR1wiLFxuICAgICAgSU5GTyA9IFwiSU5GT1wiLFxuICAgICAgV0FSTklORyA9IFwiV0FSTklOR1wiLFxuICAgICAgRVJST1IgPSBcIkVSUk9SXCIsXG4gICAgICBGQVRBTCA9IFwiRkFUQUxcIjtcblxubGV0IGxvZ0xldmVsID0gV0FSTklORyxcbiAgICBsb2dGaWxlQmFzZU5hbWUgPSBcImRlZmF1bHRcIixcbiAgICBsb2dEaXJlY3RvcnlQYXRoID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKG1lc3NhZ2VPckVycm9yLCBsZXZlbCA9IFwiXCIpIHtcbiAgbGV0IHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ID0gMTtcblxuICBjb25zdCBsZXZlbHMgPSBbXG4gICAgVFJBQ0UsXG4gICAgREVCVUcsXG4gICAgSU5GTyxcbiAgICBXQVJOSU5HLFxuICAgIEVSUk9SLFxuICAgIEZBVEFMXG4gIF07XG5cbiAgaWYgKGxldmVsICE9PSBcIlwiKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggKz0gMTtcblxuICAgIGxldmVsID0gYCR7bGV2ZWx9IGA7ICAvLy9cbiAgfVxuXG4gIGxldCBlcnJvcixcbiAgICAgIG1lc3NhZ2U7XG5cbiAgaWYgKG1lc3NhZ2VPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBlcnJvciA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gbWVzc2FnZU9yRXJyb3I7IC8vL1xuXG4gICAgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCB7IHN0YWNrIH0gPSBlcnJvcixcbiAgICAgICAgc3RhY2tNZXNzYWdlcyA9IHN0YWNrTWVzc2FnZXNGcm9tU3RhY2soc3RhY2spLFxuICAgICAgICBwZXJ0aW5lbnRTdGFja01lc3NhZ2UgPSBzdGFja01lc3NhZ2VzW3BlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4XSxcbiAgICAgICAgc3RhY2tNZXNzYWdlID0gcGVydGluZW50U3RhY2tNZXNzYWdlLCAvLy9cbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gZ2V0Q3VycmVudERhdGVBbmRUaW1lU3RyaW5nKCksXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lTnVtYmVyRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpLFxuICAgICAgICBsb2dNZXNzYWdlID0gYCR7bGV2ZWx9JHtjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmd9ICR7ZmlsZVBhdGh9KCR7bGluZU51bWJlcn0pICR7bWVzc2FnZX1gO1xuXG4gIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UpO1xuXG4gIGlmIChsb2dEaXJlY3RvcnlQYXRoICE9PSBudWxsKSB7XG4gICAgcm9sbE92ZXJMb2dGaWxlKCk7XG5cbiAgICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSBgJHtsb2dNZXNzYWdlfVxcbmA7XG5cbiAgICBhcHBlbmRUb0ZpbGUobG9nRmlsZVBhdGgsIGxvZ0ZpbGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBsb2dNZXNzYWdlO1xufVxuXG5mdW5jdGlvbiB0cmFjZShtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgVFJBQ0UpOyB9XG5cbmZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBERUJVRyk7IH1cblxuZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgSU5GTyk7IH1cblxuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgV0FSTklORyk7IH1cblxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEVSUk9SKTsgfVxuXG5mdW5jdGlvbiBmYXRhbChtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRkFUQUwpOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7IGxvZ0xldmVsID0gbGV2ZWw7IH1cblxuZnVuY3Rpb24gc2V0TG9nRmlsZUJhc2VOYW1lKGZpbGVCYXNlTmFtZSkgeyBsb2dGaWxlQmFzZU5hbWUgPSBmaWxlQmFzZU5hbWU7IH1cblxuZnVuY3Rpb24gc2V0TG9nRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKSB7IGxvZ0RpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoOyB9XG5cbmZ1bmN0aW9uIHNldExvZ09wdGlvbnMobG9nT3B0aW9ucykge1xuICBjb25zdCB7IGxldmVsLCBmaWxlQmFzZU5hbWUsIGRpcmVjdG9yeVBhdGggfSA9IGxvZ09wdGlvbnM7XG5cbiAgc2V0TG9nTGV2ZWwobGV2ZWwpO1xuXG4gIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpO1xuXG4gIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVDb250ZW50KCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gcmVhZEZpbGUobG9nRmlsZVBhdGgpO1xuXG4gIHJldHVybiBsb2dGaWxlQ29udGVudDtcbn1cblxuT2JqZWN0LmFzc2lnbihsb2csIHtcbiAgVFJBQ0UsXG4gIERFQlVHLFxuICBJTkZPLFxuICBXQVJOSU5HLFxuICBFUlJPUixcbiAgRkFUQUwsXG4gIHRyYWNlLFxuICBkZWJ1ZyxcbiAgaW5mbyxcbiAgd2FybmluZyxcbiAgZXJyb3IsXG4gIGZhdGFsLFxuICBzZXRMb2dMZXZlbCxcbiAgc2V0TG9nRmlsZUJhc2VOYW1lLFxuICBzZXRMb2dEaXJlY3RvcnlQYXRoLFxuICBzZXRMb2dPcHRpb25zLFxuICBnZXRMb2dGaWxlQ29udGVudFxufSk7XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBsb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0ubG9nYCxcbiAgICAgICAgbG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIGxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gbG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZVN0cmluZygpLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LiR7Y3VycmVudERhdGVTdHJpbmd9LmxvZ2AsXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlU3RhdHMgPSBnZXRTdGF0cyhsb2dGaWxlUGF0aCksXG4gICAgICAgIHsgbXRpbWUgfSA9IGxvZ0ZpbGVTdGF0cyxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShtdGltZSk7ICAvLy9cblxuICByZXR1cm4gbG9nRmlsZUxhc3RNb2RpZmllZERhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGxPdmVyTG9nRmlsZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxvZ0ZpbGVQYXRoKTtcblxuICBpZiAoIWxvZ0ZpbGVFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCksXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUgPSBpc0RhdGVDdXJyZW50RGF0ZShsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSk7XG5cbiAgaWYgKCFsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlKSB7XG4gICAgY29uc3Qgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCk7XG5cbiAgICByZW5hbWVGaWxlKGxvZ0ZpbGVQYXRoLCByb2xsZWRPdmVyTG9nRmlsZVBhdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUN1cnJlbnREYXRlKGRhdGUpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgZGF0ZUN1cnJlbnREYXRlID0gKGRhdGVTdHJpbmcgPT09IGN1cnJlbnREYXRlU3RyaW5nKTtcblxuICByZXR1cm4gZGF0ZUN1cnJlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBob3VycyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgICAgICBtaW51dGVzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldFNlY29uZHMoKSwgMiksXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfS4ke21pbGxpc2Vjb25kc31gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YWNrTWVzc2FnZXNGcm9tU3RhY2soc3RhY2spIHtcbiAgY29uc3Qgc3RhY2tNZXNzYWdlcyA9IFtdLFxuICAgICAgICBzdGFja0xpbmVzID0gc3RhY2suc3BsaXQoL1xcclxcbnxcXG4vKTtcblxuICBsZXQgc3RhY2tNZXNzYWdlID0gXCJcIjtcblxuICBzdGFja0xpbmVzLmZvckVhY2goKHN0YWNrTGluZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAvXlxccyphdC4qLy50ZXN0KHN0YWNrTGluZSk7XG5cbiAgICBzdGFja01lc3NhZ2UgPSAoc3RhY2tNZXNzYWdlID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgc3RhY2tMaW5lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0YWNrTWVzc2FnZX1cXG4ke3N0YWNrTGluZX1gO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHN0YWNrTWVzc2FnZXMucHVzaChzdGFja01lc3NhZ2UpO1xuXG4gICAgICBzdGFja01lc3NhZ2UgPSBcIlwiO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN0YWNrTWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvKFxcLy4rKTpcXGQrOlxcZCsvbSksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlKFwiLlwiKSwgIC8vL1xuICAgICAgICBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGgubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCArIDEsICAvLy9cbiAgICAgICAgZmlsZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLnN1YnN0cihzdGFydCk7XG5cbiAgcmV0dXJuIGZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBsaW5lTnVtYmVyRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvOihcXGQrKS9tKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0V2l0aFplcm9lcyhzdHJpbmcsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBwYWRTdHJpbmcgPSBcIjBcIixcbiAgICAgICAgcGFkZGVkU3RyaW5nID0gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZyk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhcmdldExlbmd0aDsgaW5kZXgrKykge1xuICAgIHBhZGRpbmcgKz0gcGFkU3RyaW5nO1xuICB9XG5cbiAgY29uc3QgcGFkZGVkU3RyaW5nID0gYCR7cGFkZGluZ30ke3N0cmluZ31gLnN1YnN0cigtdGFyZ2V0TGVuZ3RoKTtcblxuICByZXR1cm4gcGFkZGVkU3RyaW5nO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCB7IHN0ZGluIH0gPSBwcm9jZXNzLFxuICAgICAgICB7IHNldFJhd01vZGUgfSA9IHN0ZGluO1xuXG4gIGlmIChzZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBcInV0ZjhcIjtcblxuICAgIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBzdGRpbi5hZGRMaXN0ZW5lcihcImRhdGFcIiwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG9mZkV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZkV4dCgpIHtcbiAgICBzdGRpbi5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgZGF0YUhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUhhbmRsZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbkVUWCBmcm9tIFwiLi9vbkVUWFwiO1xuXG5pbXBvcnQgeyB3aGlsc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5jb25zdCB7IHN0ZGluLCBzdGRvdXQsIGV4aXQgfSA9IHByb2Nlc3M7XG5cbmNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyksXG4gICAgICBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIixcbiAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgdmFsdWUgPSBudWxsLFxuICAgICAgICB7IGF0dGVtcHRzID0gMyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBhdHRlbXB0cyxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFwidXRmOFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IFwiXCIsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiB9ID0gb3B0aW9ucztcblxuICBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2sodmFsdWUpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5wdXQoZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgZW5jb2RpbmcsIGhpZGRlbiwgY2FsbGJhY2spIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgb2ZmRVRYID0gb25FVFgoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiXkNcIik7XG5cbiAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBzdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgaWYgKCFoaWRkZW4pIHtcbiAgICBzdGRvdXQud3JpdGUodmFsdWUpO1xuICB9XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgc3RkaW4ub24oXCJkYXRhXCIsIGxpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICBzdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbHVlICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICAgIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICBzdGRvdXQud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxubGV0IHBhdGhSZXNvbHZlciA9IHBhdGgucmVzb2x2ZSxcbiAgICBiYXNlRXh0ZW5zaW9uID0gXCJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWUsXG4gICAgICBlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2ID0gKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndikge1xuICAgIGNvbnN0IGFyZ3YgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7IC8vL1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAgLy8vXG4gIH1cblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVJDRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBgXFx0YCk7XG5cbiAgd3JpdGVGaWxlKGFic29sdXRlUkNGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhhYnNvbHV0ZVJDRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5mdW5jdGlvbiBzZXRSQ1BhdGhSZXNvbHZlcihyY1BhdGhSZXNvbHZlcikgeyBwYXRoUmVzb2x2ZXIgPSByY1BhdGhSZXNvbHZlcjsgfVxuXG5PYmplY3QuYXNzaWduKHJjLCB7XG4gIHJlYWRSQ0ZpbGUsXG4gIHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGUsXG4gIGNoZWNrUkNGaWxlRXhpc3RzLFxuICBjcmVhdGVWYWN1b3VzUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb24sXG4gIHNldFJDUGF0aFJlc29sdmVyXG59KTtcblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndikge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBhcmd2LmZpbmQoKGFyZ3VtZW50KSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goLy0tZW52aXJvbm1lbnQ9KC4rKS8pLFxuICAgICAgICAgIGZvdW5kID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgZW52aXJvbm1lbnROYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnROYW1lO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gcGF0aFJlc29sdmVyKGZpbGVQYXRoKTtcblxuICByZXR1cm4gYWJzb2x1dGVSQ0ZpbGVQYXRoO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdChcIi9cIiksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIik7ICAvLy9cblxuICBjb25zdCBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzLCByZWdleCkge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzLCByZWdleCkge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIiksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbihcIlxcblwiKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCA9IC9cXCR7KC4rPyl9L2cpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZShyZWdleCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmVcbn07XG5cbmZ1bmN0aW9uIHBhcnNlTGluZXMobGluZXMsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCk7XG5cbiAgICByZXR1cm4gcGFyc2VkTGluZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmVzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VuKHRva2VuLCBhcmdzKSB7XG4gIGxldCBwYXJzZWRUb2tlbiA9IFwiXCI7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
