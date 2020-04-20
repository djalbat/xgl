(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./lib/xgl');

module.exports = {
  Canvas: require('./lib/canvas'),
  Mask: require('./lib/element/mask'),
  Part: require('./lib/element/part'),
  Scene: require('./lib/element/scene'),
  Camera: require('./lib/element/camera'),
  GamingCamera: require('./lib/element/camera/gaming'),
  DesignCamera: require('./lib/element/camera/design'),
  CanvasElement: require('./lib/element/canvas'),
  ColouredCanvasElement: require('./lib/element/canvas/coloured'),
  TexturedCanvasElement: require('./lib/element/canvas/textured')
};

},{"./lib/canvas":2,"./lib/element/camera":5,"./lib/element/camera/design":6,"./lib/element/camera/gaming":7,"./lib/element/canvas":8,"./lib/element/canvas/coloured":9,"./lib/element/canvas/textured":11,"./lib/element/mask":12,"./lib/element/part":13,"./lib/element/scene":14,"./lib/xgl":92}],2:[function(require,module,exports){
"use strict";

var _depth = _interopRequireDefault(require("./mixin/depth"));

var _colour = _interopRequireDefault(require("./mixin/colour"));

var _shader = _interopRequireDefault(require("./mixin/shader"));

var _buffer = _interopRequireDefault(require("./mixin/buffer"));

var _matrix = _interopRequireDefault(require("./mixin/matrix"));

var _program = _interopRequireDefault(require("./mixin/program"));

var _texture = _interopRequireDefault(require("./mixin/texture"));

var _blending = _interopRequireDefault(require("./mixin/blending"));

var _location = _interopRequireDefault(require("./mixin/location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "canvas";

    _classCallCheck(this, Canvas);

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

Object.assign(Canvas.prototype, _depth["default"]);
Object.assign(Canvas.prototype, _colour["default"]);
Object.assign(Canvas.prototype, _shader["default"]);
Object.assign(Canvas.prototype, _buffer["default"]);
Object.assign(Canvas.prototype, _matrix["default"]);
Object.assign(Canvas.prototype, _program["default"]);
Object.assign(Canvas.prototype, _texture["default"]);
Object.assign(Canvas.prototype, _blending["default"]);
Object.assign(Canvas.prototype, _location["default"]);
module.exports = Canvas;

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

},{"./mixin/blending":37,"./mixin/buffer":38,"./mixin/colour":39,"./mixin/depth":40,"./mixin/location":41,"./mixin/matrix":42,"./mixin/program":43,"./mixin/shader":44,"./mixin/texture":45}],3:[function(require,module,exports){
"use strict";

var Z_FAR = 1000,
    Z_NEAR = 1,
    MOUSE_UP = "MOUSE_UP",
    MOUSE_DOWN = "MOUSE_DOWN",
    MOUSE_MOVE = "MOUSE_MOVE",
    MOUSE_WHEEL = "MOUSE_WHEEL",
    DELTA_SCALAR = 1.25,
    INVERT_SCALAR = -1,
    ANGLES_SCALAR = 0.01,
    OFFSET_SCALAR = 0.25,
    SHIFT_KEY_CODE = 16,
    VERTICES_LENGTH = 3,
    MINIMUM_DISTANCE = 1,
    DEFAULT_MARGIN_OF_ERROR = 0.0000001,
    DEGREES_TO_RADIANS_SCALAR = Math.PI / 180,
    FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS_SCALAR;
module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  MOUSE_UP: MOUSE_UP,
  MOUSE_DOWN: MOUSE_DOWN,
  MOUSE_MOVE: MOUSE_MOVE,
  MOUSE_WHEEL: MOUSE_WHEEL,
  DELTA_SCALAR: DELTA_SCALAR,
  INVERT_SCALAR: INVERT_SCALAR,
  ANGLES_SCALAR: ANGLES_SCALAR,
  OFFSET_SCALAR: OFFSET_SCALAR,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  VERTICES_LENGTH: VERTICES_LENGTH,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEFAULT_MARGIN_OF_ERROR: DEFAULT_MARGIN_OF_ERROR,
  DEGREES_TO_RADIANS_SCALAR: DEGREES_TO_RADIANS_SCALAR,
  FIELD_OF_VIEW: FIELD_OF_VIEW
};

},{}],4:[function(require,module,exports){
"use strict";

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

module.exports = Element;

},{}],5:[function(require,module,exports){
"use strict";

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

module.exports = Camera;

},{"../element":4}],6:[function(require,module,exports){
"use strict";

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

module.exports = DesignCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../miscellaneous/zoom":36,"../../utilities/matrix":84,"../camera":5}],7:[function(require,module,exports){
"use strict";

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

module.exports = GamingCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../utilities/matrix":84,"../camera":5}],8:[function(require,module,exports){
"use strict";

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

module.exports = CanvasElement;

},{"../element":4,"../utilities/transform":90}],9:[function(require,module,exports){
"use strict";

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

module.exports = ColouredCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/coloured":49}],10:[function(require,module,exports){
"use strict";

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

module.exports = FunctionCanvasElement;

},{"../../element/canvas":8}],11:[function(require,module,exports){
"use strict";

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

module.exports = TexturedCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/textured":50}],12:[function(require,module,exports){
"use strict";

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

module.exports = Mask;

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

},{"../element":4,"../primitive/maskingFacet":51,"../utilities/array":81}],13:[function(require,module,exports){
"use strict";

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

module.exports = Part;

},{"../element":4,"../renderer/colour":60,"../renderer/texture/imageMap":77,"../renderer/texture/images":78}],14:[function(require,module,exports){
"use strict";

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

module.exports = Scene;

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

},{"../element":4,"../element/camera":5,"../element/part":13,"../maths/vector":29,"../miscellaneous/userInput":35,"necessary":94}],15:[function(require,module,exports){
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

},{"./example/cube":16,"./example/masking":24,"./example/pyramid":25,"./example/simple":26,"./example/tiling":27}],16:[function(require,module,exports){
"use strict";

var _index = require("../../index");

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

module.exports = cubeExample;

},{"../../index":1,"./element/cube":18}],17:[function(require,module,exports){
"use strict";

var _index = require("../../../index");

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

module.exports = ColouredSquare;

},{"../../../index":1}],18:[function(require,module,exports){
"use strict";

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

module.exports = Cube;

},{"./face":19}],19:[function(require,module,exports){
"use strict";

var _colouredSquare = _interopRequireDefault(require("./colouredSquare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Face = function Face(properties) {
  var colour = properties.colour;
  return React.createElement(_colouredSquare["default"], {
    colour: colour,
    position: [-0.5, -0.5, +0.5]
  });
};

module.exports = Face;

},{"./colouredSquare":17}],20:[function(require,module,exports){
"use strict";

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

module.exports = Pyramid;

},{"./side":21}],21:[function(require,module,exports){
"use strict";

var _texturedTriangle = _interopRequireDefault(require("./texturedTriangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Side = function Side(properties) {
  return React.createElement(_texturedTriangle["default"], {
    scale: [1, 1 / Math.sqrt(2), 1],
    position: [-0.5, 0, 0.5],
    rotations: [-45, 0, 0]
  });
};

module.exports = Side;

},{"./texturedTriangle":23}],22:[function(require,module,exports){
"use strict";

var _index = require("../../../index");

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

module.exports = TexturedQuadrangle;

},{"../../../index":1}],23:[function(require,module,exports){
"use strict";

var _index = require("../../../index");

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

module.exports = TexturedTriangle;

},{"../../../index":1}],24:[function(require,module,exports){
"use strict";

var _index = require("../../index");

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

module.exports = maskingExample;

},{"../../index":1,"./element/cube":18}],25:[function(require,module,exports){
"use strict";

var _index = require("../../index");

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

module.exports = pyramidExample;

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

},{"../../index":1,"../miscellaneous/configuration":30,"./element/pyramid":20}],26:[function(require,module,exports){
"use strict";

var _index = require("../../index");

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

module.exports = simpleExample;

},{"../../index":1,"./element/colouredSquare":17}],27:[function(require,module,exports){
"use strict";

var _necessary = require("necessary");

var _index = require("../../index");

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

module.exports = tilingExample;

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

},{"../../index":1,"../miscellaneous/configuration":30,"./element/colouredSquare":17,"./element/texturedQuadrangle":22,"necessary":94}],28:[function(require,module,exports){
"use strict";

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

module.exports = {
  identity2: identity2,
  identity3: identity3,
  identity4: identity4,
  multiply2: multiply2,
  multiply3: multiply3,
  multiply4: multiply4,
  invert2: invert2,
  invert3: invert3,
  invert4: invert4,
  scale4: scale4,
  rotate4: rotate4,
  transpose2: transpose2,
  transpose3: transpose3,
  transpose4: transpose4,
  translate4: translate4,
  perspective4: perspective4
};

},{}],29:[function(require,module,exports){
"use strict";

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

module.exports = {
  zero2: zero2,
  zero3: zero3,
  zero4: zero4,
  length2: length2,
  length3: length3,
  length4: length4,
  dot2: dot2,
  dot3: dot3,
  dot4: dot4,
  cross3: cross3,
  normalise2: normalise2,
  normalise3: normalise3,
  normalise4: normalise4,
  reflect2: reflect2,
  reflect3: reflect3,
  reflect4: reflect4,
  scale2: scale2,
  scale3: scale3,
  scale4: scale4,
  add2: add2,
  add3: add3,
  add4: add4,
  subtract2: subtract2,
  subtract3: subtract3,
  subtract4: subtract4,
  multiply2: multiply2,
  multiply3: multiply3,
  multiply4: multiply4,
  transform2: transform2,
  transform3: transform3,
  transform4: transform4
};

},{}],30:[function(require,module,exports){
"use strict";

module.exports = window.__configuration__; ///

},{}],31:[function(require,module,exports){
"use strict";

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

module.exports = KeyEvents;

},{"../constants":3}],32:[function(require,module,exports){
"use strict";

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

module.exports = MouseEvents;

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

},{"../constants":3}],33:[function(require,module,exports){
"use strict";

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

module.exports = Pan;

},{"../constants":3,"../maths/vector":29,"../utilities/offsets":86}],34:[function(require,module,exports){
"use strict";

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

module.exports = Tilt;

},{"../constants":3,"../maths/vector":29,"../utilities/array":81}],35:[function(require,module,exports){
"use strict";

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

module.exports = UserInput;

},{"../maths/vector":29,"./keyEvents":31,"./mouseEvents":32}],36:[function(require,module,exports){
"use strict";

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

module.exports = Zoom;

},{"../constants":3}],37:[function(require,module,exports){
"use strict";

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

module.exports = {
  enableBlending: enableBlending
};

},{}],38:[function(require,module,exports){
"use strict";

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

module.exports = {
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer,
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};

},{}],39:[function(require,module,exports){
"use strict";

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

module.exports = {
  clearColour: clearColour,
  clearColourBuffer: clearColourBuffer
};

},{}],40:[function(require,module,exports){
"use strict";

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

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting
};

},{}],41:[function(require,module,exports){
"use strict";

function getUniformLocation(program, name) {
  return this.context.getUniformLocation(program, name);
}

function getAttributeLocation(program, name) {
  return this.context.getAttribLocation(program, name);
}

function setUniformLocationIntegerValue(uniformLocation, integerValue) {
  this.context.uniform1i(uniformLocation, integerValue);
}

module.exports = {
  getUniformLocation: getUniformLocation,
  getAttributeLocation: getAttributeLocation,
  setUniformLocationIntegerValue: setUniformLocationIntegerValue
};

},{}],42:[function(require,module,exports){
"use strict";

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],43:[function(require,module,exports){
"use strict";

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

module.exports = {
  createProgram: createProgram,
  useProgram: useProgram
};

},{}],44:[function(require,module,exports){
"use strict";

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

module.exports = {
  createShader: createShader,
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader
};

},{}],45:[function(require,module,exports){
"use strict";

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

module.exports = {
  createTexture: createTexture,
  enableAnisotropicFiltering: enableAnisotropicFiltering
};

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

},{"../constants":3,"../utilities/array":81,"../utilities/facet":82,"../utilities/intersection":83,"../utilities/midPoint":85,"./edge":46,"./normal":52,"./vertex":53}],49:[function(require,module,exports){
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

},{"../constants":3,"../utilities/array":81,"../utilities/quaternion":87,"../utilities/vertices":91,"./edge/masking":47,"./verticalLine":54}],52:[function(require,module,exports){
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

var React = {
  createElement: createElement
};
module.exports = React;

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

},{"./element":4,"./element/canvas/function":10,"./utilities/array":81}],56:[function(require,module,exports){
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

},{"../constants":3}],81:[function(require,module,exports){
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

},{"../constants":3,"../maths/vector":29,"../utilities/array":81}],83:[function(require,module,exports){
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

},{"../constants":3,"../maths/matrix":28,"../maths/vector":29,"../utilities/array":81}],85:[function(require,module,exports){
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

},{}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9jYW52YXMuanMiLCJsaWIvY29uc3RhbnRzLmpzIiwibGliL2VsZW1lbnQuanMiLCJsaWIvZWxlbWVudC9jYW1lcmEuanMiLCJsaWIvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwibGliL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImxpYi9lbGVtZW50L21hc2suanMiLCJsaWIvZWxlbWVudC9wYXJ0LmpzIiwibGliL2VsZW1lbnQvc2NlbmUuanMiLCJsaWIvZXhhbXBsZS5qcyIsImxpYi9leGFtcGxlL2N1YmUuanMiLCJsaWIvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCJsaWIvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCJsaWIvZXhhbXBsZS9tYXNraW5nLmpzIiwibGliL2V4YW1wbGUvcHlyYW1pZC5qcyIsImxpYi9leGFtcGxlL3NpbXBsZS5qcyIsImxpYi9leGFtcGxlL3RpbGluZy5qcyIsImxpYi9tYXRocy9tYXRyaXguanMiLCJsaWIvbWF0aHMvdmVjdG9yLmpzIiwibGliL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbi5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwibGliL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwibGliL21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3pvb20uanMiLCJsaWIvbWl4aW4vYmxlbmRpbmcuanMiLCJsaWIvbWl4aW4vYnVmZmVyLmpzIiwibGliL21peGluL2NvbG91ci5qcyIsImxpYi9taXhpbi9kZXB0aC5qcyIsImxpYi9taXhpbi9sb2NhdGlvbi5qcyIsImxpYi9taXhpbi9tYXRyaXguanMiLCJsaWIvbWl4aW4vcHJvZ3JhbS5qcyIsImxpYi9taXhpbi9zaGFkZXIuanMiLCJsaWIvbWl4aW4vdGV4dHVyZS5qcyIsImxpYi9wcmltaXRpdmUvZWRnZS5qcyIsImxpYi9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwibGliL3ByaW1pdGl2ZS9mYWNldC5qcyIsImxpYi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCJsaWIvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwibGliL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCJsaWIvcHJpbWl0aXZlL25vcm1hbC5qcyIsImxpYi9wcmltaXRpdmUvdmVydGV4LmpzIiwibGliL3ByaW1pdGl2ZS92ZXJ0aWNhbExpbmUuanMiLCJsaWIvcmVhY3QuanMiLCJsaWIvcmVuZGVyZXIuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy5qcyIsImxpYi9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsImxpYi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCJsaWIvcmVuZGVyZXIvY29sb3VyLmpzIiwibGliL3JlbmRlcmVyL2RhdGEuanMiLCJsaWIvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCJsaWIvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImxpYi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwibGliL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwibGliL3V0aWxpdGllcy9hbmdsZS5qcyIsImxpYi91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCJsaWIvdXRpbGl0aWVzL2FycmF5LmpzIiwibGliL3V0aWxpdGllcy9mYWNldC5qcyIsImxpYi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwibGliL3V0aWxpdGllcy9tYXRyaXguanMiLCJsaWIvdXRpbGl0aWVzL21pZFBvaW50LmpzIiwibGliL3V0aWxpdGllcy9vZmZzZXRzLmpzIiwibGliL3V0aWxpdGllcy9xdWF0ZXJuaW9uLmpzIiwibGliL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsImxpYi91dGlsaXRpZXMvdGV4dHVyZS5qcyIsImxpYi91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwibGliL3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsImxpYi94Z2wuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2FqYXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9sb2cuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9vbkVUWC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3Byb21wdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3JjLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL3BhdGguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvdGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2xpYi94Z2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENhbnZhczogcmVxdWlyZSgnLi9saWIvY2FudmFzJyksXG4gIE1hc2s6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvbWFzaycpLFxuICBQYXJ0OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3BhcnQnKSxcbiAgU2NlbmU6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc2NlbmUnKSxcbiAgQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYScpLFxuICBHYW1pbmdDYW1lcmE6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FtZXJhL2dhbWluZycpLFxuICBEZXNpZ25DYW1lcmE6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbicpLFxuICBDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcycpLFxuICBDb2xvdXJlZENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyksXG4gIFRleHR1cmVkQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQnKVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZGVwdGhNaXhpbiBmcm9tIFwiLi9taXhpbi9kZXB0aFwiO1xuaW1wb3J0IGNvbG91ck1peGluIGZyb20gXCIuL21peGluL2NvbG91clwiO1xuaW1wb3J0IHNoYWRlck1peGluIGZyb20gXCIuL21peGluL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGluIGZyb20gXCIuL21peGluL2J1ZmZlclwiO1xuaW1wb3J0IG1hdHJpeE1peGluIGZyb20gXCIuL21peGluL21hdHJpeFwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbiBmcm9tIFwiLi9taXhpbi9wcm9ncmFtXCI7XG5pbXBvcnQgdGV4dHVyZU1peGluIGZyb20gXCIuL21peGluL3RleHR1cmVcIjtcbmltcG9ydCBibGVuZGluZ01peGluIGZyb20gXCIuL21peGluL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbiBmcm9tIFwiLi9taXhpbi9sb2NhdGlvblwiO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IFwiY2FudmFzXCIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuXG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5gKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFpfRkFSID0gMTAwMCxcbiAgICAgIFpfTkVBUiA9IDEsXG4gICAgICBNT1VTRV9VUCA9IFwiTU9VU0VfVVBcIixcbiAgICAgIE1PVVNFX0RPV04gPSBcIk1PVVNFX0RPV05cIixcbiAgICAgIE1PVVNFX01PVkUgPSBcIk1PVVNFX01PVkVcIixcbiAgICAgIE1PVVNFX1dIRUVMID0gXCJNT1VTRV9XSEVFTFwiLFxuICAgICAgREVMVEFfU0NBTEFSID0gMS4yNSxcbiAgICAgIElOVkVSVF9TQ0FMQVIgPSAtMSxcbiAgICAgIEFOR0xFU19TQ0FMQVIgPSAwLjAxLFxuICAgICAgT0ZGU0VUX1NDQUxBUiA9IDAuMjUsXG4gICAgICBTSElGVF9LRVlfQ09ERSA9IDE2LFxuICAgICAgVkVSVElDRVNfTEVOR1RIID0gMyxcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxLFxuICAgICAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDEsXG4gICAgICBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgIEZJRUxEX09GX1ZJRVcgPSA0NSAqIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBaX0ZBUixcbiAgWl9ORUFSLFxuICBNT1VTRV9VUCxcbiAgTU9VU0VfRE9XTixcbiAgTU9VU0VfTU9WRSxcbiAgTU9VU0VfV0hFRUwsXG4gIERFTFRBX1NDQUxBUixcbiAgSU5WRVJUX1NDQUxBUixcbiAgQU5HTEVTX1NDQUxBUixcbiAgT0ZGU0VUX1NDQUxBUixcbiAgU0hJRlRfS0VZX0NPREUsXG4gIFZFUlRJQ0VTX0xFTkdUSCxcbiAgTUlOSU1VTV9ESVNUQU5DRSxcbiAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IsXG4gIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gIEZJRUxEX09GX1ZJRVdcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IFwiZnVuY3Rpb25cIikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcbmltcG9ydCBab29tIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3pvb21cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2spIHtcbiAgICBpZiAobWFzaykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgaGlkZGVuID0gaGlkZGVuIHx8IHRoaXMuaGlkZGVuOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKGhpZGRlbikpO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIGFtZW5kRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFzayk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBzY2FsZSA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgbWFzayA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5cbmNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQsICAvLy9cbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNhbGxiYWNrID0gcmVuZGVyOyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNhbGxiYWNrID0gcmVuZGVyOyAgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcih0aGlzLmNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSkge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHVzZXJJbnB1dEhhbmRsZXIgPSB0aGlzLnVzZXJJbnB1dEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB3aW5kb3dSZXNpemVIYW5kbGVyID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgaW5pdGlhbGlzZVBhcnRzKHRoaXMucGFydHMsIHVwZGF0ZSwgY2FudmFzLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub25yZXNpemUgPSB3aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKTtcblxuICAgICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgICBkb25lICYmIGRvbmUoKTsgLy8vXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBkb25lLCB1cGRhdGUsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIGNhbWVyYSA9IGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG5cbmZ1bmN0aW9uIGRlZmVyKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlUGFydHMocGFydHMsIHVwZGF0ZSwgY2FudmFzLCBkb25lKSB7XG4gIGZvckVhY2gocGFydHMsIChwYXJ0LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoLFxuICAgICAgICAgIHByb2dyZXNzID0gKCBpbmRleCArIDEgKSAvIHBhcnRzTGVuZ3RoO1xuXG4gICAgcGFydC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICB1cGRhdGUgJiYgdXBkYXRlKHByb2dyZXNzKTsgLy8vXG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBwYXJ0cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChwYXJ0cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIFBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IGNhbWVyYSA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChjYW1lcmEsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjYW1lcmEgPT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDYW1lcmEpIHtcbiAgICAgICAgY2FtZXJhID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT5cblxuXHQ8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuXHRcdDxQYXJ0PlxuXHRcdFx0PEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cblx0XHQ8L1BhcnQ+XG5cdFx0PERlc2lnbkNhbWVyYSAvPlxuXHQ8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5jbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkU3F1YXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGYWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWRlIGZyb20gXCIuL3NpZGVcIjtcblxuY29uc3QgUHlyYW1pZCA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFNpZGUgLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAgOTAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAxODAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAyNzAsIDAgXX0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRRdWFkcmFuZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5jbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFRyaWFuZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZCAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHlyYW1pZEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCB7IGltYWdlTWFwVVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXApO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aWxpbmdFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIHNyYyA9IGAke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaWRlbnRpdHkyKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsXG4gICAgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuXG4gICAgICAgIGIwID0gbWF0cml4QlswXSxcbiAgICAgICAgYjEgPSBtYXRyaXhCWzFdLFxuICAgICAgICBiMiA9IG1hdHJpeEJbMl0sXG4gICAgICAgIGIzID0gbWF0cml4QlszXTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMiAqIGIxLFxuICAgIGExICogYjAgKyBhMyAqIGIxLFxuXG4gICAgYTAgKiBiMiArIGEyICogYjMsXG4gICAgYTEgKiBiMiArIGEzICogYjMsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIGEwID0gbWF0cml4QVsgMF0sXG4gICAgICAgICBhMSA9IG1hdHJpeEFbIDFdLFxuICAgICAgICAgYTIgPSBtYXRyaXhBWyAyXSxcbiAgICAgICAgIGEzID0gbWF0cml4QVsgM10sXG4gICAgICAgICBhNCA9IG1hdHJpeEFbIDRdLFxuICAgICAgICAgYTUgPSBtYXRyaXhBWyA1XSxcbiAgICAgICAgIGE2ID0gbWF0cml4QVsgNl0sXG4gICAgICAgICBhNyA9IG1hdHJpeEFbIDddLFxuICAgICAgICAgYTggPSBtYXRyaXhBWyA4XSxcbiAgICAgICAgIGE5ID0gbWF0cml4QVsgOV0sXG4gICAgICAgIGExMCA9IG1hdHJpeEFbMTBdLFxuICAgICAgICBhMTEgPSBtYXRyaXhBWzExXSxcbiAgICAgICAgYTEyID0gbWF0cml4QVsxMl0sXG4gICAgICAgIGExMyA9IG1hdHJpeEFbMTNdLFxuICAgICAgICBhMTQgPSBtYXRyaXhBWzE0XSxcbiAgICAgICAgYTE1ID0gbWF0cml4QVsxNV0sXG5cbiAgICAgICAgIGIwID0gbWF0cml4QlsgMF0sXG4gICAgICAgICBiMSA9IG1hdHJpeEJbIDFdLFxuICAgICAgICAgYjIgPSBtYXRyaXhCWyAyXSxcbiAgICAgICAgIGIzID0gbWF0cml4QlsgM10sXG4gICAgICAgICBiNCA9IG1hdHJpeEJbIDRdLFxuICAgICAgICAgYjUgPSBtYXRyaXhCWyA1XSxcbiAgICAgICAgIGI2ID0gbWF0cml4QlsgNl0sXG4gICAgICAgICBiNyA9IG1hdHJpeEJbIDddLFxuICAgICAgICAgYjggPSBtYXRyaXhCWyA4XSxcbiAgICAgICAgIGI5ID0gbWF0cml4QlsgOV0sXG4gICAgICAgIGIxMCA9IG1hdHJpeEJbMTBdLFxuICAgICAgICBiMTEgPSBtYXRyaXhCWzExXSxcbiAgICAgICAgYjEyID0gbWF0cml4QlsxMl0sXG4gICAgICAgIGIxMyA9IG1hdHJpeEJbMTNdLFxuICAgICAgICBiMTQgPSBtYXRyaXhCWzE0XSxcbiAgICAgICAgYjE1ID0gbWF0cml4QlsxNV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaW52ZXJ0MihtYXRyaXgpIHtcbiAgY29uc3QgbTAgPSBtYXRyaXhbMF0sXG4gICAgICAgIG0xID0gbWF0cml4WzFdLFxuICAgICAgICBtMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTMgPSBtYXRyaXhbM10sXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMCAqIG0zIC0gbTIgKiBtMTtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgK20zIC8gZGV0ZXJtaW5hbnQsIC1tMSAvIGRldGVybWluYW50LFxuICAgICAgLW0yIC8gZGV0ZXJtaW5hbnQsICttMCAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbIDBdLCBtMDEgPSBtYXRyaXhbIDFdLCBtMDIgPSBtYXRyaXhbIDJdLCBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLCBtMTEgPSBtYXRyaXhbIDVdLCBtMTIgPSBtYXRyaXhbIDZdLCBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLCBtMjEgPSBtYXRyaXhbIDldLCBtMjIgPSBtYXRyaXhbMTBdLCBtMjMgPSBtYXRyaXhbMTFdLFxuICAgICAgICBtMzAgPSBtYXRyaXhbMTJdLCBtMzEgPSBtYXRyaXhbMTNdLCBtMzIgPSBtYXRyaXhbMTRdLCBtMzMgPSBtYXRyaXhbMTVdLFxuXG4gICAgICAgIGIwMCA9IG0wMCAqIG0xMSAtIG0wMSAqIG0xMCxcbiAgICAgICAgYjAxID0gbTAwICogbTEyIC0gbTAyICogbTEwLFxuICAgICAgICBiMDIgPSBtMDAgKiBtMTMgLSBtMDMgKiBtMTAsXG4gICAgICAgIGIwMyA9IG0wMSAqIG0xMiAtIG0wMiAqIG0xMSxcbiAgICAgICAgYjA0ID0gbTAxICogbTEzIC0gbTAzICogbTExLFxuICAgICAgICBiMDUgPSBtMDIgKiBtMTMgLSBtMDMgKiBtMTIsXG4gICAgICAgIGIwNiA9IG0yMCAqIG0zMSAtIG0yMSAqIG0zMCxcbiAgICAgICAgYjA3ID0gbTIwICogbTMyIC0gbTIyICogbTMwLFxuICAgICAgICBiMDggPSBtMjAgKiBtMzMgLSBtMjMgKiBtMzAsXG4gICAgICAgIGIwOSA9IG0yMSAqIG0zMiAtIG0yMiAqIG0zMSxcbiAgICAgICAgYjEwID0gbTIxICogbTMzIC0gbTIzICogbTMxLFxuICAgICAgICBiMTEgPSBtMjIgKiBtMzMgLSBtMjMgKiBtMzIsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIChtMTEgKiBiMTEgLSBtMTIgKiBiMTAgKyBtMTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMDIgKiBiMTAgLSBtMDEgKiBiMTEgLSBtMDMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDUgLSBtMzIgKiBiMDQgKyBtMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMjIgKiBiMDQgLSBtMjEgKiBiMDUgLSBtMjMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEyICogYjA4IC0gbTEwICogYjExIC0gbTEzICogYjA3KSAvIGRldGVybWluYW50LCAobTAwICogYjExIC0gbTAyICogYjA4ICsgbTAzICogYjA3KSAvIGRldGVybWluYW50LCAobTMyICogYjAyIC0gbTMwICogYjA1IC0gbTMzICogYjAxKSAvIGRldGVybWluYW50LCAobTIwICogYjA1IC0gbTIyICogYjAyICsgbTIzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMCAqIGIxMCAtIG0xMSAqIGIwOCArIG0xMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMSAqIGIwOCAtIG0wMCAqIGIxMCAtIG0wMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMCAqIGIwNCAtIG0zMSAqIGIwMiArIG0zMyAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMSAqIGIwMiAtIG0yMCAqIGIwNCAtIG0yMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTEgKiBiMDcgLSBtMTAgKiBiMDkgLSBtMTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMDkgLSBtMDEgKiBiMDcgKyBtMDIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDEgLSBtMzAgKiBiMDMgLSBtMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDMgLSBtMjEgKiBiMDEgKyBtMjIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzJdLFxuICAgIG1hdHJpeFsxXSwgbWF0cml4WzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0sIG1hdHJpeFsgNF0sIG1hdHJpeFsgOF0sIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WyAxXSwgbWF0cml4WyA1XSwgbWF0cml4WyA5XSwgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbIDJdLCBtYXRyaXhbIDZdLCBtYXRyaXhbMTBdLCBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsgM10sIG1hdHJpeFsgN10sIG1hdHJpeFsxMV0sIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHgsIG1hdHJpeFsgMV0gKiB4LCBtYXRyaXhbIDJdICogeCwgbWF0cml4WyAzXSAqIHgsXG4gICAgbWF0cml4WyA0XSAqIHksIG1hdHJpeFsgNV0gKiB5LCBtYXRyaXhbIDZdICogeSwgbWF0cml4WyA3XSAqIHksXG4gICAgbWF0cml4WyA4XSAqIHosIG1hdHJpeFsgOV0gKiB6LCBtYXRyaXhbMTBdICogeiwgbWF0cml4WzExXSAqIHosXG4gICAgbWF0cml4WzEyXSAqIDEsIG1hdHJpeFsxM10gKiAxLCBtYXRyaXhbMTRdICogMSwgbWF0cml4WzE1XSAqIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuXG4gICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgIG0yMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMyxcbiAgICBtMDAgKiB4ICsgbTEwICogeSArIG0yMCAqIHogKyBtYXRyaXhbMTJdLCBtMDEgKiB4ICsgbTExICogeSArIG0yMSAqIHogKyBtYXRyaXhbMTNdLCBtMDIgKiB4ICsgbTEyICogeSArIG0yMiAqIHogKyBtYXRyaXhbMTRdLCBtMDMgKiB4ICsgbTEzICogeSArIG0yMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aDModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xufVxuXG5mdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSk7IH1cblxuZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdKTsgfVxuXG5mdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgYXggPSB2ZWN0b3JBWzBdLCBheSA9IHZlY3RvckFbMV0sIGF6ID0gdmVjdG9yQVsyXSxcbiAgICAgICAgYnggPSB2ZWN0b3JCWzBdLCBieSA9IHZlY3RvckJbMV0sIGJ6ID0gdmVjdG9yQlsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIGF5ICogYnogLSBheiAqIGJ5LFxuICAgIGF6ICogYnggLSBheCAqIGJ6LFxuICAgIGF4ICogYnkgLSBheSAqIGJ4LFxuXG4gIF0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuICAgICAgdyAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QyKHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG4gICAgdmVjdG9yWzJdICogLTEsXG4gICAgdmVjdG9yWzNdICogLTEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzNdICogeSArIG1hdHJpeFs2XSAqIHosXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbN10gKiB6LFxuICAgIG1hdHJpeFsyXSAqIHggKyBtYXRyaXhbNV0gKiB5ICsgbWF0cml4WzhdICogeixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX187IC8vL1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNISUZUX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgIC8vL1xuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMua2V5VXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUV2ZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9VUCk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX0RPV04pO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9NT1ZFKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcblxuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuXG4gICAgICAgICAgdG9wIC0gY2xpZW50WSxcblxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBERUxUQV9TQ0FMQVIsIElOVkVSVF9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgc2NhbGVkTW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogREVMVEFfU0NBTEFSLFxuICAgICAgICAgIHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIE9GRlNFVF9TQ0FMQVIpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9TQ0FMQVIpLFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IEFOR0xFU19TQ0FMQVIsIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGZsaXBwZWQpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmZsaXBwZWQgPSBmbGlwcGVkO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlID0gc2Vjb25kKHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG4gIFxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtBTkdMRVNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLUFOR0xFU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCkge1xuICAgIGNvbnN0IHNjYWxhciA9IGZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0RFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgbWF0cml4KSwgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgZmxpcHBlZCk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5jbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVMVEFfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIHRoaXMuZGlzdGFuY2UgLT0gbW91c2VXaGVlbERlbHRhICogREVMVEFfU0NBTEFSO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KE1JTklNVU1fRElTVEFOQ0UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyBcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldFVuaWZvcm1Mb2NhdGlvbixcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24sXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXhcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFwiRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIikgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFwiV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUZXh0dXJlLFxuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZ1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5cbmltcG9ydCB7IHRoaXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuXG5jbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcHVzaCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXModGhpcy52ZXJ0aWNlcyk7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCk7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0ZhY2V0O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbk9iamVjdC5hc3NpZ24oUmVuZGVyZXIsIHtcbiAgY3JlYXRlUHJvZ3JhbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJCdWZmZXJzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuXG5jbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCIsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxzTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCIsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiLFxuICAgICAgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRzTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lLFxuICByb3RhdGlvbnNNYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCIsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24oZnJhZ21lbnRTaGFkZXJTb3VyY2UsIHtcbiAgc2FtcGxlck5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2gsIGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lLFxuICBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8odmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMCwgbWFyZ2luT2ZFcnJvcik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUsXG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvXG59O1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5mdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBwZXJtdXRlLFxuICBmbGF0dGVuLFxuICBndWFyYW50ZWVcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5mdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5jbG9uZSgpKTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVFZGdlcyxcbiAgY2xvbmVOb3JtYWwsXG4gIGNsb25lVmVydGljZXMsXG4gIGNhbGN1bGF0ZUVkZ2VzLFxuICBjYWxjdWxhdGVOb3JtYWwsXG4gIGNhbGN1bGF0ZUFyZWFcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbixcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsIEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuXG5mdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyID0gZmFsc2UpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLFxuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLFxuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTtcblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIGNvbnN0IGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVywgIC8vL1xuICAgICAgICBhc3BlY3RSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0LFxuICAgICAgICB6TmVhciA9IFpfTkVBUiwgLy8vXG4gICAgICAgIHpGYXIgPSBaX0ZBUiwgLy8vXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzY2FsZU1hdHJpeEZyb21TY2FsZSxcbiAgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSxcbiAgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sXG4gIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMsXG4gIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbixcbiAgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSxcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXNcbn07XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlZmxlY3QzLCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucykge1xuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKHJlZmxlY3RlZEFuZ2xlcywgcmV2ZXJzZU9yZGVyKSxcbiAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb24sICAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmaXJzdChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gc2Vjb25kKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmb3VydGgocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLWZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBleHRlbnQgPSBub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXROb3JtYWwgPSBleHRlbnQsICAvLy9cbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgICAgZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gZG90Myh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gY3Jvc3MzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLCAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSksXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb25cbn07XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZVBvc2l0aW9uXG59O1xuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGludmVydDIsIGludmVydDMgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuaW1wb3J0IHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5mdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KSB7XG4gIGNvbnN0IHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKSk7IC8vL1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3QgdGVtcFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHRlbXBWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyxcbiAgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVWZXJ0aWNlcyxcbiAgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiUmVhY3RcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG4iLCIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGVtcGxhdGVVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdGVtcGxhdGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWlzY2VsbGFuZW91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzXCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7XG4gIHJldHVybiBhcnJheVswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuXHRsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cblx0Zm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHR2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG5cdH0pO1xuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuXHRsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cblx0YmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0dmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuXHR9KTtcblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgbGFzdCxcbiAgdGFpbCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuXHRmb3J3YXJkc1JlZHVjZSxcblx0YmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmltcG9ydCB7IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGVudHJ5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGaWxlRXhpc3RzKGZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBlbnRyeVBhdGggPSBmaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoZW50cnlQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgZW50cnlQYXRoID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gY2hlY2tFbnRyeUV4aXN0cyhlbnRyeVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShlbnRyeVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RmlsZShlbnRyeVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGVudHJ5UGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9IFwidXRmOFwiKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0ZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMuYXBwZW5kRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChkaXJlY3RvcnlQYXRoKTtcblxuICBpZiAoKGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IFwiLlwiKSAmJiAoZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSAhPT0gbnVsbCkpIHtcbiAgICBjb25zdCBwYXJlbnREaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudERpcmVjdG9yeUV4aXN0cyA9IGNoZWNrRGlyZWN0b3J5RXhpc3RzKHBhcmVudERpcmVjdG9yeVBhdGgpO1xuXG4gICAgaWYgKCFwYXJlbnREaXJlY3RvcnlFeGlzdHMpIHtcbiAgICAgIGNyZWF0ZURpcmVjdG9yeShwYXJlbnREaXJlY3RvcnlQYXRoKTtcbiAgICB9XG4gIH1cblxuICBmcy5ta2RpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVGaWxlKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCkge1xuICBmcy5yZW5hbWVTeW5jKG9sZEZpbGVQYXRoLCBuZXdGaWxlUGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0cyhmaWxlUGF0aCkge1xuICByZXR1cm4gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrRW50cnlFeGlzdHMsXG4gIGNoZWNrRmlsZUV4aXN0cyxcbiAgY2hlY2tEaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZSxcbiAgd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGUsXG4gIGNyZWF0ZURpcmVjdG9yeSxcbiAgcmVuYW1lRmlsZSxcbiAgZ2V0U3RhdHNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJjIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvcmNcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9sb2dcIjtcbmltcG9ydCBvbkVUWCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29uRVRYXCI7XG5pbXBvcnQgcHJvbXB0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvcHJvbXB0XCI7XG5cbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYWpheFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvZyxcbiAgcmMsXG4gIGdldCxcbiAgcG9zdCxcbiAgb25FVFgsXG4gIHByb21wdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIixcbiAgICAgIFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICAgIGlmIChzdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSByZXNwb25zZVRleHQ7IC8vL1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhqc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcblxuICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpO1xufVxuXG5mdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/IFwiJlwiIDogXCJcIjtcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgXCJcIik7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY29uY2F0ZW5hdGVQYXRocyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGF0aFwiO1xuaW1wb3J0IHsgY2hlY2tGaWxlRXhpc3RzLCByZWFkRmlsZSwgYXBwZW5kVG9GaWxlLCByZW5hbWVGaWxlLCBnZXRTdGF0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5jb25zdCBUUkFDRSA9IFwiVFJBQ0VcIixcbiAgICAgIERFQlVHID0gXCJERUJVR1wiLFxuICAgICAgSU5GTyA9IFwiSU5GT1wiLFxuICAgICAgV0FSTklORyA9IFwiV0FSTklOR1wiLFxuICAgICAgRVJST1IgPSBcIkVSUk9SXCIsXG4gICAgICBGQVRBTCA9IFwiRkFUQUxcIjtcblxubGV0IGxvZ0xldmVsID0gV0FSTklORyxcbiAgICBsb2dGaWxlQmFzZU5hbWUgPSBcImRlZmF1bHRcIixcbiAgICBsb2dEaXJlY3RvcnlQYXRoID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKG1lc3NhZ2VPckVycm9yLCBsZXZlbCA9IFwiXCIpIHtcbiAgbGV0IHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ID0gMTtcblxuICBjb25zdCBsZXZlbHMgPSBbXG4gICAgVFJBQ0UsXG4gICAgREVCVUcsXG4gICAgSU5GTyxcbiAgICBXQVJOSU5HLFxuICAgIEVSUk9SLFxuICAgIEZBVEFMXG4gIF07XG5cbiAgaWYgKGxldmVsICE9PSBcIlwiKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggKz0gMTtcblxuICAgIGxldmVsID0gYCR7bGV2ZWx9IGA7ICAvLy9cbiAgfVxuXG4gIGxldCBlcnJvcixcbiAgICAgIG1lc3NhZ2U7XG5cbiAgaWYgKG1lc3NhZ2VPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBlcnJvciA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgICh7IG1lc3NhZ2UgfSA9IGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gbWVzc2FnZU9yRXJyb3I7IC8vL1xuXG4gICAgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCB7IHN0YWNrIH0gPSBlcnJvcixcbiAgICAgICAgc3RhY2tNZXNzYWdlcyA9IHN0YWNrTWVzc2FnZXNGcm9tU3RhY2soc3RhY2spLFxuICAgICAgICBwZXJ0aW5lbnRTdGFja01lc3NhZ2UgPSBzdGFja01lc3NhZ2VzW3BlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4XSxcbiAgICAgICAgc3RhY2tNZXNzYWdlID0gcGVydGluZW50U3RhY2tNZXNzYWdlLCAvLy9cbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gZ2V0Q3VycmVudERhdGVBbmRUaW1lU3RyaW5nKCksXG4gICAgICAgIGZpbGVQYXRoID0gZmlsZVBhdGhGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lTnVtYmVyRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpLFxuICAgICAgICBsb2dNZXNzYWdlID0gYCR7bGV2ZWx9JHtjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmd9ICR7ZmlsZVBhdGh9KCR7bGluZU51bWJlcn0pICR7bWVzc2FnZX1gO1xuXG4gIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UpO1xuXG4gIGlmIChsb2dEaXJlY3RvcnlQYXRoICE9PSBudWxsKSB7XG4gICAgcm9sbE92ZXJMb2dGaWxlKCk7XG5cbiAgICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSBgJHtsb2dNZXNzYWdlfVxcbmA7XG5cbiAgICBhcHBlbmRUb0ZpbGUobG9nRmlsZVBhdGgsIGxvZ0ZpbGVDb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiBsb2dNZXNzYWdlO1xufVxuXG5mdW5jdGlvbiB0cmFjZShtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgVFJBQ0UpOyB9XG5cbmZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBERUJVRyk7IH1cblxuZnVuY3Rpb24gaW5mbyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgSU5GTyk7IH1cblxuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgV0FSTklORyk7IH1cblxuZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEVSUk9SKTsgfVxuXG5mdW5jdGlvbiBmYXRhbChtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRkFUQUwpOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7IGxvZ0xldmVsID0gbGV2ZWw7IH1cblxuZnVuY3Rpb24gc2V0TG9nRmlsZUJhc2VOYW1lKGZpbGVCYXNlTmFtZSkgeyBsb2dGaWxlQmFzZU5hbWUgPSBmaWxlQmFzZU5hbWU7IH1cblxuZnVuY3Rpb24gc2V0TG9nRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKSB7IGxvZ0RpcmVjdG9yeVBhdGggPSBkaXJlY3RvcnlQYXRoOyB9XG5cbmZ1bmN0aW9uIHNldExvZ09wdGlvbnMobG9nT3B0aW9ucykge1xuICBjb25zdCB7IGxldmVsLCBmaWxlQmFzZU5hbWUsIGRpcmVjdG9yeVBhdGggfSA9IGxvZ09wdGlvbnM7XG5cbiAgc2V0TG9nTGV2ZWwobGV2ZWwpO1xuXG4gIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpO1xuXG4gIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVDb250ZW50KCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gcmVhZEZpbGUobG9nRmlsZVBhdGgpO1xuXG4gIHJldHVybiBsb2dGaWxlQ29udGVudDtcbn1cblxuT2JqZWN0LmFzc2lnbihsb2csIHtcbiAgVFJBQ0UsXG4gIERFQlVHLFxuICBJTkZPLFxuICBXQVJOSU5HLFxuICBFUlJPUixcbiAgRkFUQUwsXG4gIHRyYWNlLFxuICBkZWJ1ZyxcbiAgaW5mbyxcbiAgd2FybmluZyxcbiAgZXJyb3IsXG4gIGZhdGFsLFxuICBzZXRMb2dMZXZlbCxcbiAgc2V0TG9nRmlsZUJhc2VOYW1lLFxuICBzZXRMb2dEaXJlY3RvcnlQYXRoLFxuICBzZXRMb2dPcHRpb25zLFxuICBnZXRMb2dGaWxlQ29udGVudFxufSk7XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBsb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0ubG9nYCxcbiAgICAgICAgbG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIGxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gbG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZVN0cmluZygpLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LiR7Y3VycmVudERhdGVTdHJpbmd9LmxvZ2AsXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlU3RhdHMgPSBnZXRTdGF0cyhsb2dGaWxlUGF0aCksXG4gICAgICAgIHsgbXRpbWUgfSA9IGxvZ0ZpbGVTdGF0cyxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShtdGltZSk7ICAvLy9cblxuICByZXR1cm4gbG9nRmlsZUxhc3RNb2RpZmllZERhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGxPdmVyTG9nRmlsZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxvZ0ZpbGVQYXRoKTtcblxuICBpZiAoIWxvZ0ZpbGVFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCksXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUgPSBpc0RhdGVDdXJyZW50RGF0ZShsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSk7XG5cbiAgaWYgKCFsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlKSB7XG4gICAgY29uc3Qgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCk7XG5cbiAgICByZW5hbWVGaWxlKGxvZ0ZpbGVQYXRoLCByb2xsZWRPdmVyTG9nRmlsZVBhdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUN1cnJlbnREYXRlKGRhdGUpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgZGF0ZUN1cnJlbnREYXRlID0gKGRhdGVTdHJpbmcgPT09IGN1cnJlbnREYXRlU3RyaW5nKTtcblxuICByZXR1cm4gZGF0ZUN1cnJlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBob3VycyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgICAgICBtaW51dGVzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldFNlY29uZHMoKSwgMiksXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfS4ke21pbGxpc2Vjb25kc31gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0YWNrTWVzc2FnZXNGcm9tU3RhY2soc3RhY2spIHtcbiAgY29uc3Qgc3RhY2tNZXNzYWdlcyA9IFtdLFxuICAgICAgICBzdGFja0xpbmVzID0gc3RhY2suc3BsaXQoL1xcclxcbnxcXG4vKTtcblxuICBsZXQgc3RhY2tNZXNzYWdlID0gXCJcIjtcblxuICBzdGFja0xpbmVzLmZvckVhY2goKHN0YWNrTGluZSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAvXlxccyphdC4qLy50ZXN0KHN0YWNrTGluZSk7XG5cbiAgICBzdGFja01lc3NhZ2UgPSAoc3RhY2tNZXNzYWdlID09PSBcIlwiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgc3RhY2tMaW5lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0YWNrTWVzc2FnZX1cXG4ke3N0YWNrTGluZX1gO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIHN0YWNrTWVzc2FnZXMucHVzaChzdGFja01lc3NhZ2UpO1xuXG4gICAgICBzdGFja01lc3NhZ2UgPSBcIlwiO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN0YWNrTWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvKFxcLy4rKTpcXGQrOlxcZCsvbSksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlKFwiLlwiKSwgIC8vL1xuICAgICAgICBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGgubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCArIDEsICAvLy9cbiAgICAgICAgZmlsZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLnN1YnN0cihzdGFydCk7XG5cbiAgcmV0dXJuIGZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBsaW5lTnVtYmVyRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvOihcXGQrKS9tKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0V2l0aFplcm9lcyhzdHJpbmcsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBwYWRTdHJpbmcgPSBcIjBcIixcbiAgICAgICAgcGFkZGVkU3RyaW5nID0gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZyk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhcmdldExlbmd0aDsgaW5kZXgrKykge1xuICAgIHBhZGRpbmcgKz0gcGFkU3RyaW5nO1xuICB9XG5cbiAgY29uc3QgcGFkZGVkU3RyaW5nID0gYCR7cGFkZGluZ30ke3N0cmluZ31gLnN1YnN0cigtdGFyZ2V0TGVuZ3RoKTtcblxuICByZXR1cm4gcGFkZGVkU3RyaW5nO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCB7IHN0ZGluIH0gPSBwcm9jZXNzLFxuICAgICAgICB7IHNldFJhd01vZGUgfSA9IHN0ZGluO1xuXG4gIGlmIChzZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSBcInV0ZjhcIjtcblxuICAgIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBzdGRpbi5hZGRMaXN0ZW5lcihcImRhdGFcIiwgZGF0YUhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIG9mZkV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZkV4dCgpIHtcbiAgICBzdGRpbi5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgZGF0YUhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUhhbmRsZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbkVUWCBmcm9tIFwiLi9vbkVUWFwiO1xuXG5pbXBvcnQgeyB3aGlsc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5jb25zdCB7IHN0ZGluLCBzdGRvdXQsIGV4aXQgfSA9IHByb2Nlc3M7XG5cbmNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyksXG4gICAgICBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIixcbiAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgdmFsdWUgPSBudWxsLFxuICAgICAgICB7IGF0dGVtcHRzID0gMyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBhdHRlbXB0cyxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjb250ZXh0O1xuICAgIFxuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfSwgY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBoaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgICBlbmNvZGluZyA9IFwidXRmOFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IFwiXCIsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbiB9ID0gb3B0aW9ucztcblxuICBpbnB1dChkZXNjcmlwdGlvbiwgaW5pdGlhbFZhbHVlLCBlbmNvZGluZywgaGlkZGVuLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2sodmFsdWUpIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRpb25GdW5jdGlvbiA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uKHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4udGVzdCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5wdXQoZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgZW5jb2RpbmcsIGhpZGRlbiwgY2FsbGJhY2spIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgb2ZmRVRYID0gb25FVFgoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiXkNcIik7XG5cbiAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICBzdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgaWYgKCFoaWRkZW4pIHtcbiAgICBzdGRvdXQud3JpdGUodmFsdWUpO1xuICB9XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgc3RkaW4ub24oXCJkYXRhXCIsIGxpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBsaXN0ZW5lcihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgIHN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICBzdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHN0ZG91dC53cml0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbHVlICs9IGNoYXJhY3RlcjtcblxuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHN0ZG91dC5jbGVhckxpbmUoKTtcblxuICAgICAgICAgIHN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICAgIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICBzdGRvdXQud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZWFkRmlsZSwgd3JpdGVGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxubGV0IHBhdGhSZXNvbHZlciA9IHBhdGgucmVzb2x2ZSxcbiAgICBiYXNlRXh0ZW5zaW9uID0gXCJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWUsXG4gICAgICBlbnZpcm9ubWVudE5hbWVPckFyZ3ZBcmd2ID0gKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndikge1xuICAgIGNvbnN0IGFyZ3YgPSBlbnZpcm9ubWVudE5hbWVPckFyZ3Y7IC8vL1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAgLy8vXG4gIH1cblxuICBjb25zdCBqc29uID0gcmVhZFJDRmlsZSgpLFxuICAgICAgICB7IGVudmlyb25tZW50cyB9ID0ganNvbjtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlyc3RFbnZpcm9ubWVudCA9IGZpcnN0KGVudmlyb25tZW50cyk7XG5cbiAgICBlbnZpcm9ubWVudCA9IGZpcnN0RW52aXJvbm1lbnQ7IC8vL1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzLmZpbmQoKGVudmlyb25tZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZVJDRmlsZVBhdGgpLFxuICAgICAgICBqc29uID0gSlNPTi5wYXJzZShmaWxlQ29udGVudCk7XG5cbiAgcmV0dXJuIGpzb247ICAgICAgXG59XG5cbmZ1bmN0aW9uIHdyaXRlUkNGaWxlKGpzb24pIHtcbiAgY29uc3QgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBgXFx0YCk7XG5cbiAgd3JpdGVGaWxlKGFic29sdXRlUkNGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wZXJ0aWVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihqc29uLCBhZGRlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaCgoZGVsZXRlZFByb3BlcnR5TmFtZSkgPT4ge1xuICAgIGRlbGV0ZSBqc29uW2RlbGV0ZWRQcm9wZXJ0eU5hbWVdO1xuICB9KTtcblxuICB3cml0ZVJDRmlsZShqc29uKTsgICAgICBcbn1cblxuZnVuY3Rpb24gY2hlY2tSQ0ZpbGVFeGlzdHMoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJjRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhhYnNvbHV0ZVJDRmlsZVBhdGgpO1xuXG4gIHJldHVybiByY0ZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhY3VvdXNSQ0ZpbGUoKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJlbnZpcm9ubWVudHNcIjogW1xuICAgICAge31cbiAgICBdXG4gIH07XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7XG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihyY0Jhc2VFeHRlbnNpb24pIHsgYmFzZUV4dGVuc2lvbiA9IHJjQmFzZUV4dGVuc2lvbjsgfVxuXG5mdW5jdGlvbiBzZXRSQ1BhdGhSZXNvbHZlcihyY1BhdGhSZXNvbHZlcikgeyBwYXRoUmVzb2x2ZXIgPSByY1BhdGhSZXNvbHZlcjsgfVxuXG5PYmplY3QuYXNzaWduKHJjLCB7XG4gIHJlYWRSQ0ZpbGUsXG4gIHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGUsXG4gIGNoZWNrUkNGaWxlRXhpc3RzLFxuICBjcmVhdGVWYWN1b3VzUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb24sXG4gIHNldFJDUGF0aFJlc29sdmVyXG59KTtcblxuZnVuY3Rpb24gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndikge1xuICBsZXQgZW52aXJvbm1lbnROYW1lID0gbnVsbDtcblxuICBhcmd2LmZpbmQoKGFyZ3VtZW50KSA9PiB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goLy0tZW52aXJvbm1lbnQ9KC4rKS8pLFxuICAgICAgICAgIGZvdW5kID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgZW52aXJvbm1lbnROYW1lID0gc2Vjb25kTWF0Y2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnROYW1lO1xufVxuXG5mdW5jdGlvbiBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtiYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVSQ0ZpbGVQYXRoID0gcGF0aFJlc29sdmVyKGZpbGVQYXRoKTtcblxuICByZXR1cm4gYWJzb2x1dGVSQ0ZpbGVQYXRoO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdChcIi9cIiksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgXCJcIik7ICAvLy9cblxuICBjb25zdCBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzLCByZWdleCkge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MsIHJlZ2V4KTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzLCByZWdleCkge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIiksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncywgcmVnZXgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbihcIlxcblwiKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCA9IC9cXCR7KC4rPyl9L2cpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZShyZWdleCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmVcbn07XG5cbmZ1bmN0aW9uIHBhcnNlTGluZXMobGluZXMsIGFyZ3MsIHJlZ2V4KSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKChsaW5lKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzLCByZWdleCk7XG5cbiAgICByZXR1cm4gcGFyc2VkTGluZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmVzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRva2VuKHRva2VuLCBhcmdzKSB7XG4gIGxldCBwYXJzZWRUb2tlbiA9IFwiXCI7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
