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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var depthMixin = require("./mixin/depth"),
    colourMixin = require("./mixin/colour"),
    shaderMixin = require("./mixin/shader"),
    bufferMixin = require("./mixin/buffer"),
    matrixMixin = require("./mixin/matrix"),
    programMixin = require("./mixin/program"),
    textureMixin = require("./mixin/texture"),
    blendingMixin = require("./mixin/blending"),
    locationMixin = require("./mixin/location");

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

Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, blendingMixin);
Object.assign(Canvas.prototype, locationMixin);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element");

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

      return Element.fromProperties.apply(Element, [Class, properties].concat(remainingArguments));
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":4}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pan = require("../../miscellaneous/pan"),
    Tilt = require("../../miscellaneous/tilt"),
    Zoom = require("../../miscellaneous/zoom"),
    Camera = require("../camera"),
    vectorMaths = require("../../maths/vector"),
    matrixUtilities = require("../../utilities/matrix");

var zero2 = vectorMaths.zero2,
    zero3 = vectorMaths.zero3,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromDistance = matrixUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;
var defaultInitialAngles = zero2(),
    defaultInitialOffsets = zero3(),
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
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
          pan = Pan.fromInitialOffsets(initialOffsets),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          zoom = Zoom.fromInitialDistance(initialDistance),
          designCamera = Camera.fromProperties(DesignCamera, properties, pan, tilt, zoom);
      return designCamera;
    }
  }]);

  return DesignCamera;
}(Camera);

module.exports = DesignCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../miscellaneous/zoom":36,"../../utilities/matrix":84,"../camera":5}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pan = require("../../miscellaneous/pan"),
    Tilt = require("../../miscellaneous/tilt"),
    Camera = require("../camera"),
    vectorMaths = require("../../maths/vector"),
    matrixUtilities = require("../../utilities/matrix");

var zero2 = vectorMaths.zero2,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;
var defaultInitialAngles = zero2(),
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
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
          pan = Pan.fromInitialPosition(initialPosition),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);
      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../utilities/matrix":84,"../camera":5}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element"),
    transformUtilities = require("../utilities/transform");

var composeTransform = transformUtilities.composeTransform;

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
          transform = composeTransform(scale, rotations, position),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));
      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":4,"../utilities/transform":90}],9:[function(require,module,exports){
"use strict";

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

var ColouredFacet = require("../../primitive/facet/coloured"),
    CanvasElement = require("../../element/canvas");

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
          colouredFacet = ColouredFacet.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, _this2.colour),
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

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, colour].concat(remainingArguments));
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/coloured":49}],10:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CanvasElement = require("../../element/canvas");

var FunctionCanvasElement = /*#__PURE__*/function (_CanvasElement) {
  _inherits(FunctionCanvasElement, _CanvasElement);

  function FunctionCanvasElement() {
    _classCallCheck(this, FunctionCanvasElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(FunctionCanvasElement).apply(this, arguments));
  }

  _createClass(FunctionCanvasElement, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var functionElement = CanvasElement.fromProperties(FunctionCanvasElement, properties);
      return functionElement;
    }
  }]);

  return FunctionCanvasElement;
}(CanvasElement);

module.exports = FunctionCanvasElement;

},{"../../element/canvas":8}],11:[function(require,module,exports){
"use strict";

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

var CanvasElement = require("../../element/canvas"),
    TexturedFacet = require("../../primitive/facet/textured");

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
          texturedFacet = TexturedFacet.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this2.imageName),
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

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/textured":50}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element"),
    MaskingFacet = require("../primitive/maskingFacet"),
    arrayUtilities = require("../utilities/array");

var push = arrayUtilities.push;

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
        var maskingFacet = MaskingFacet.fromFacet(facet);
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
          mask = Element.fromProperties(Mask, properties, hidden);
      mask.initialise();
      return mask;
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;

function retrieveFacets(childElements) {
  var facets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  childElements.forEach(function (childElement) {
    var element = childElement,
        ///
    elementFacets = element.getFacets(),
        childElements = element.getChildElements();
    push(facets, elementFacets);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element"),
    ColourRenderer = require("../renderer/colour"),
    ImagesTextureRenderer = require("../renderer/texture/images"),
    ImageMapTextureRenderer = require("../renderer/texture/imageMap");

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
      var colourRenderer = ColourRenderer.fromNothing(canvas);

      if (this.images) {
        var imagesTextureRenderer = ImagesTextureRenderer.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
        textureRenderer = imagesTextureRenderer; ///
      }

      if (this.imageMap) {
        var imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
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
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;

},{"../element":4,"../renderer/colour":60,"../renderer/texture/imageMap":77,"../renderer/texture/images":78}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var necessary = require("necessary");

var Part = require("../element/part"),
    Camera = require("../element/camera"),
    Element = require("../element"),
    UserInput = require("../miscellaneous/userInput"),
    vectorMaths = require("../maths/vector");

var asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach,
    zero2 = vectorMaths.zero2;

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
      var relativeMouseCoordinates = zero2(),
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

      var userInput = UserInput.fromNothing(),
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
          scene = Element.fromProperties(Scene, properties, parts, camera, canvas);
      scene.initialise(canvas, update, done);
      return scene;
    }
  }]);

  return Scene;
}(Element);

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
    if (childElement instanceof Part) {
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
      if (childElement instanceof Camera) {
        camera = childElement; ///
      }
    }

    return camera;
  }, null);
  return camera;
}

},{"../element":4,"../element/camera":5,"../element/part":13,"../maths/vector":29,"../miscellaneous/userInput":35,"necessary":94}],15:[function(require,module,exports){
"use strict";

var cubeExample = require("./example/cube"),
    simpleExample = require("./example/simple"),
    maskingExample = require("./example/masking"),
    pyramidExample = require("./example/pyramid"),
    tilingExample = require("./example/tiling");

var example = window.location.search.substring(1); ///

switch (example) {
  case "simple":
    simpleExample();
    break;

  case "cube":
    cubeExample();
    break;

  case "masking":
    maskingExample();
    break;

  case "pyramid":
    pyramidExample();
    break;

  case "tiling":
    tilingExample();
    break;
}

},{"./example/cube":16,"./example/masking":24,"./example/pyramid":25,"./example/simple":26,"./example/tiling":27}],16:[function(require,module,exports){
"use strict";

var xgl = require("../../index"); ///


var Cube = require("./element/cube");

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;
var canvas = new Canvas();

var cubeExample = function cubeExample() {
  return React.createElement(Scene, {
    canvas: canvas
  }, React.createElement(Part, null, React.createElement(Cube, {
    colour: [0, 1, 0]
  })), React.createElement(DesignCamera, null));
};

module.exports = cubeExample;

},{"../../index":1,"./element/cube":18}],17:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var xgl = require("../../../index"); ///


var ColouredCanvasElement = xgl.ColouredCanvasElement;
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
          colouredSquare = ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);
      return colouredSquare;
    }
  }]);

  return ColouredSquare;
}(ColouredCanvasElement);

module.exports = ColouredSquare;

},{"../../../index":1}],18:[function(require,module,exports){
"use strict";

var Face = require("./face");

var defaultColour = [1, 1, 0];

var Cube = function Cube(properties) {
  var _properties$colour = properties.colour,
      colour = _properties$colour === void 0 ? defaultColour : _properties$colour;
  return [React.createElement(Face, {
    colour: colour,
    rotations: [0, 0, 0]
  }), React.createElement(Face, {
    colour: colour,
    rotations: [+90, 0, 0]
  }), React.createElement(Face, {
    colour: colour,
    rotations: [0, +90, 0]
  }), React.createElement(Face, {
    colour: colour,
    rotations: [180, 0, 0]
  }), React.createElement(Face, {
    colour: colour,
    rotations: [-90, 0, 0]
  }), React.createElement(Face, {
    colour: colour,
    rotations: [0, -90, 0]
  })];
};

module.exports = Cube;

},{"./face":19}],19:[function(require,module,exports){
"use strict";

var ColouredSquare = require("./colouredSquare");

var Face = function Face(properties) {
  var colour = properties.colour;
  return React.createElement(ColouredSquare, {
    colour: colour,
    position: [-0.5, -0.5, +0.5]
  });
};

module.exports = Face;

},{"./colouredSquare":17}],20:[function(require,module,exports){
"use strict";

var Side = require("./side");

var Pyramid = function Pyramid(properties) {
  return [React.createElement(Side, null), React.createElement(Side, {
    rotations: [0, 90, 0]
  }), React.createElement(Side, {
    rotations: [0, 180, 0]
  }), React.createElement(Side, {
    rotations: [0, 270, 0]
  })];
};

module.exports = Pyramid;

},{"./side":21}],21:[function(require,module,exports){
"use strict";

var TexturedTriangle = require("./texturedTriangle");

var Side = function Side(properties) {
  return React.createElement(TexturedTriangle, {
    scale: [1, 1 / Math.sqrt(2), 1],
    position: [-0.5, 0, 0.5],
    rotations: [-45, 0, 0]
  });
};

module.exports = Side;

},{"./texturedTriangle":23}],22:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var xgl = require("../../../index"); ///


var TexturedCanvasElement = xgl.TexturedCanvasElement;
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
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);
      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(TexturedCanvasElement);

module.exports = TexturedQuadrangle;

},{"../../../index":1}],23:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var xgl = require("../../../index"); ///


var TexturedCanvasElement = xgl.TexturedCanvasElement;
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
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);
      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(TexturedCanvasElement);

module.exports = TexturedTriangle;

},{"../../../index":1}],24:[function(require,module,exports){
"use strict";

var xgl = require("../../index"); ///


var Cube = require("./element/cube");

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Mask = xgl.Mask,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;
var canvas = new Canvas();

var maskingExample = function maskingExample() {
  var SmallCube = function SmallCube(properties) {
    return React.createElement(Cube, {
      scale: [1 / 4, 1 / 4, 1 / 4]
    });
  },
      smallCubeMask = React.createElement(Mask, null, React.createElement(SmallCube, null)),
      MediumCube = function MediumCube(properties) {
    return React.createElement(Cube, {
      scale: [1 / 2, 1 / 2, 1 / 2],
      mask: smallCubeMask
    });
  },
      mediumCubeMask = React.createElement(Mask, null, React.createElement(MediumCube, null)),
      LargeCube = function LargeCube(properties) {
    return React.createElement(Cube, {
      mask: mediumCubeMask
    });
  };

  return React.createElement(Scene, {
    canvas: canvas
  }, React.createElement(Part, null, React.createElement(LargeCube, null)), React.createElement(DesignCamera, null));
};

module.exports = maskingExample;

},{"../../index":1,"./element/cube":18}],25:[function(require,module,exports){
"use strict";

var xgl = require("../../index"); ///


var Pyramid = require("./element/pyramid"),
    configuration = require("../miscellaneous/configuration");

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    GamingCamera = xgl.GamingCamera;
var canvas = new Canvas();

var pyramidExample = function pyramidExample() {
  preloadImageMap(function (imageMap) {
    var imageMapJSON = configuration.imageMapJSON;
    return React.createElement(Scene, {
      canvas: canvas
    }, React.createElement(Part, {
      imageMap: imageMap,
      imageMapJSON: imageMapJSON
    }, React.createElement(Pyramid, null)), React.createElement(GamingCamera, null));
  });
};

module.exports = pyramidExample;

function preloadImageMap(callback) {
  var imageMapURI = configuration.imageMapURI,
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

var xgl = require("../../index"); ///


var ColouredSquare = require("./element/colouredSquare");

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;
var canvas = new Canvas();

var simpleExample = function simpleExample() {
  return React.createElement(Scene, {
    canvas: canvas
  }, React.createElement(Part, null, React.createElement(ColouredSquare, {
    colour: [0, 0, 1]
  })), React.createElement(DesignCamera, null));
};

module.exports = simpleExample;

},{"../../index":1,"./element/colouredSquare":17}],27:[function(require,module,exports){
"use strict";

var xgl = require("../../index"),
    ///
necessary = require("necessary");

var configuration = require("../miscellaneous/configuration"),
    ColouredSquare = require("./element/colouredSquare"),
    TexturedQuadrangle = require("./element/texturedQuadrangle");

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    Mask = xgl.Mask,
    DesignCamera = xgl.DesignCamera,
    asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach;
var canvas = new Canvas(),
    mask = React.createElement(Mask, null, React.createElement(ColouredSquare, {
  scale: [0.25, 0.25, 1],
  position: [0.125, 0.125, 0]
}));

var tilingExample = function tilingExample() {
  var imageNames = configuration.imageNames,
      imageDirectoryURI = configuration.imageDirectoryURI;
  preloadImages(imageNames, imageDirectoryURI, function (images) {
    return React.createElement(Scene, {
      canvas: canvas
    }, React.createElement(Part, {
      images: images,
      imageNames: imageNames,
      imageTiling: true
    }, React.createElement(TexturedQuadrangle, {
      position: [0, 0, 0],
      imageName: "floorboards.jpg",
      mask: mask
    }), React.createElement(TexturedQuadrangle, {
      position: [-0.5, -0.5, -0.5],
      imageName: "paving.jpg",
      mask: mask
    })), React.createElement(DesignCamera, null));
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants");

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

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

      if (keyCode === SHIFT_KEY_CODE) {
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

      if (keyCode === SHIFT_KEY_CODE) {
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants");

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

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
      this.mouseEventListener(event, MOUSE_UP);
    }
  }, {
    key: "mouseDownEventListener",
    value: function mouseDownEventListener(event) {
      this.mouseDown = true;
      this.mouseEventListener(event, MOUSE_DOWN);
    }
  }, {
    key: "mouseMoveEventListener",
    value: function mouseMoveEventListener(event) {
      this.mouseEventListener(event, MOUSE_MOVE);
    }
  }, {
    key: "mouseWheelEventListener",
    value: function mouseWheelEventListener(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);
      handlers.forEach(function (handler) {
        return handler(mouseWheelDelta);
      });
      event.preventDefault();
    }
  }, {
    key: "addMouseUpHandler",
    value: function addMouseUpHandler(mouseUpHandler) {
      var mouseUpHandlers = this.handlersMap[MOUSE_UP];
      mouseUpHandlers.push(mouseUpHandler);
    }
  }, {
    key: "addMouseDownHandler",
    value: function addMouseDownHandler(mouseDownHandler) {
      var mouseDownHandlers = this.handlersMap[MOUSE_DOWN];
      mouseDownHandlers.push(mouseDownHandler);
    }
  }, {
    key: "addMouseMoveHandler",
    value: function addMouseMoveHandler(mouseMoveHandler) {
      var mouseMoveHandlers = this.handlersMap[MOUSE_MOVE];
      mouseMoveHandlers.push(mouseMoveHandler);
    }
  }, {
    key: "addMouseWheelHandler",
    value: function addMouseWheelHandler(mouseWheelHandler) {
      var mouseWheelHandlers = this.handlersMap[MOUSE_WHEEL];
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
      this.handlersMap[MOUSE_UP] = [];
      this.handlersMap[MOUSE_DOWN] = [];
      this.handlersMap[MOUSE_MOVE] = [];
      this.handlersMap[MOUSE_WHEEL] = [];
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants"),
    vectorMaths = require("../maths/vector"),
    offsetsUtilities = require("../utilities/offsets");

var add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR;

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
          scaledMouseWheelDelta = mouseWheelDelta * DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);
      this.offsets = add3(this.offsets, relativeOffsets);
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
      var offsets = scale3(initialPosition, INVERT_SCALAR),
          pan = new Pan(offsets);
      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

},{"../constants":3,"../maths/vector":29,"../utilities/offsets":86}],34:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants"),
    vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    transform3 = vectorMaths.transform3,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR;

var Tilt = /*#__PURE__*/function () {
  function Tilt(angles, flipped) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.flipped = flipped;
  }

  _createClass(Tilt, [{
    key: "getXAngle",
    value: function getXAngle() {
      var firstAngle = first(this.angles),
          xAngle = firstAngle; ///

      return xAngle;
    }
  }, {
    key: "getYAngle",
    value: function getYAngle() {
      var secondAngle = second(this.angles),
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
      var scalar = this.flipped ? +ANGLES_SCALAR : -ANGLES_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.angles, relativeAngles);
    }
  }], [{
    key: "fromInitialAnglesAndFlipped",
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? +DEGREES_TO_RADIANS_SCALAR : -DEGREES_TO_RADIANS_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          angles = transform3([].concat(_toConsumableArray(initialAngles), [0]), matrix),
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyEvents = require("./keyEvents"),
    MouseEvents = require("./mouseEvents"),
    vectorMaths = require("../maths/vector");

var zero2 = vectorMaths.zero2,
    subtract2 = vectorMaths.subtract2;

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
            relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
        this.handlers.forEach(function (handler) {
          return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
    }
  }, {
    key: "mouseWheelHandler",
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = zero2();
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
          keyEvents = KeyEvents.fromNothing(),
          mouseEvents = MouseEvents.fromNothing(),
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants");

var DELTA_SCALAR = constants.DELTA_SCALAR,
    MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

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
      this.distance -= mouseWheelDelta * DELTA_SCALAR;
      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vectorMaths = require("../maths/vector");

var subtract3 = vectorMaths.subtract3;

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
      extent = subtract3(endPosition, startPosition),
          edge = new Class(position, extent);
      return edge;
    }
  }]);

  return Edge;
}();

module.exports = Edge;

},{"../maths/vector":29}],47:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge = require("../edge"),
    vectorMaths = require("../../maths/vector"),
    arrayUtilities = require("../../utilities/array"),
    midPointUtilities = require("../../utilities/midPoint");

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    projectMidPointPositionOntoXYPlane = midPointUtilities.projectMidPointPositionOntoXYPlane;

var MaskingEdge = /*#__PURE__*/function (_Edge) {
  _inherits(MaskingEdge, _Edge);

  function MaskingEdge() {
    _classCallCheck(this, MaskingEdge);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge).apply(this, arguments));
  }

  _createClass(MaskingEdge, [{
    key: "isMidPointPositionToTheLeft",
    value: function isMidPointPositionToTheLeft(midPointPosition) {
      midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition); ///

      var extent = this.getExtent(),
          position = this.getPosition(),
          midPointRelativePosition = subtract3(midPointPosition, position),
          crossProductComponents = cross3(extent, midPointRelativePosition),
          ///
      thirdCrossProductComponent = third(crossProductComponents),
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
      return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
    }
  }]);

  return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;

},{"../../maths/vector":29,"../../utilities/array":81,"../../utilities/midPoint":85,"../edge":46}],48:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Edge = require("./edge"),
    Normal = require("./normal"),
    Vertex = require("./vertex"),
    constants = require("../constants"),
    facetUtilities = require("../utilities/facet"),
    arrayUtilities = require("../utilities/array"),
    midPointUtilities = require("../utilities/midPoint"),
    intersectionUtilities = require("../utilities/intersection");

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    push = arrayUtilities.push,
    _permute = arrayUtilities.permute,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    calculateMidPointPosition = midPointUtilities.calculateMidPointPosition,
    isMidPointPositionToOneSideOfMaskingEdges = midPointUtilities.isMidPointPositionToOneSideOfMaskingEdges,
    calculateIntermediateVertexPosition = intersectionUtilities.calculateIntermediateVertexPosition,
    calculateNonNullIntersections = intersectionUtilities.calculateNonNullIntersections,
    calculateNullIntersectionIndex = intersectionUtilities.calculateNullIntersectionIndex,
    calculateNonNullIntersectionIndex = intersectionUtilities.calculateNonNullIntersectionIndex;

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
          midPointPosition = calculateMidPointPosition(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges; ///

      return masked;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      this.vertices = _permute(this.vertices, places);
      this.normal = calculateNormal(this.vertices, Normal);
      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: "rotate",
    value: function rotate(rotationQuaternion) {
      this.vertices.forEach(function (vertex) {
        return vertex.rotate(rotationQuaternion);
      });
      this.normal = calculateNormal(this.vertices, Normal);
      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      this.vertices.forEach(function (vertex) {
        return vertex.applyTransform(transform);
      });
      this.normal = calculateNormal(this.vertices, Normal);
      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: "splitWithIntersections",
    value: function splitWithIntersections(intersections, smallerFacets) {
      var nonNullIntersections = calculateNonNullIntersections(intersections),
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
      var nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nullIntersectionIndex) % VERTICES_LENGTH;
      intersections = _permute(intersections, places);
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
      var nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;
      intersections = _permute(intersections, places);
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
            intermediateVertexPosition = calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
        return intermediateVertexPosition;
      });
      push(vertexPositions, intermediateVertexPositions);
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

    var vertex = Vertex.fromPosition(position);
    return vertex;
  }),
      smallerFacet = facet.fromVertices(vertices);
  return smallerFacet;
}

},{"../constants":3,"../utilities/array":81,"../utilities/facet":82,"../utilities/intersection":83,"../utilities/midPoint":85,"./edge":46,"./normal":52,"./vertex":53}],49:[function(require,module,exports){
"use strict";

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

var Edge = require("../edge"),
    Facet = require("../facet"),
    Normal = require("../normal"),
    Vertex = require("../vertex"),
    facetUtilities = require("../../utilities/facet"),
    verticesUtilities = require("../../utilities/vertices"),
    approximateUtilities = require("../../utilities/approximate");

var isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

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
      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);
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
      var area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var rgba = this.rgba,
            normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);
        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }], [{
    key: "fromCoordinateTuplesIndexTupleAndColour",
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var colouredFacet = null;
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [].concat(_toConsumableArray(colour), [1]); ///

        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;

},{"../../utilities/approximate":80,"../../utilities/facet":82,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],50:[function(require,module,exports){
"use strict";

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

var Edge = require("../edge"),
    Facet = require("../facet"),
    Normal = require("../normal"),
    Vertex = require("../vertex"),
    arrayUtilities = require("../../utilities/array"),
    facetUtilities = require("../../utilities/facet"),
    textureUtilities = require("../../utilities/texture"),
    verticesUtilities = require("../../utilities/vertices"),
    approximateUtilities = require("../../utilities/approximate");

var _permute = arrayUtilities.permute,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    cloneTextureCoordinateTuples = textureUtilities.cloneTextureCoordinateTuples,
    calculateMappedTextureCoordinateTuples = textureUtilities.calculateMappedTextureCoordinateTuples,
    calculateAdjustedTextureCoordinateTuples = textureUtilities.calculateAdjustedTextureCoordinateTuples;

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
      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);
      var imageName = this.imageName,
          ///
      textureCoordinateTuples = cloneTextureCoordinateTuples(this.textureCoordinateTuples),
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
      mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
      return mappedTextureCoordinateTuples;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);

      this.textureCoordinateTuples = _permute(this.textureCoordinateTuples, places);
    }
  }, {
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var texturedFacet = null;
      var area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            parentVertices = this.vertices,
            ///
        adjustedTextureCoordinateTuple = calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples),
            edges = calculateEdges(vertices, Edge),
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
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);
        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;

},{"../../utilities/approximate":80,"../../utilities/array":81,"../../utilities/facet":82,"../../utilities/texture":89,"../../utilities/vertices":91,"../edge":46,"../facet":48,"../normal":52,"../vertex":53}],51:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = require("../constants"),
    MaskingEdge = require("./edge/masking"),
    VerticalLine = require("./verticalLine"),
    arrayUtilities = require("../utilities/array"),
    verticesUtilities = require("../utilities/vertices"),
    quaternionUtilities = require("../utilities/quaternion");

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    push = arrayUtilities.push,
    separate = arrayUtilities.separate,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateArbitraryRotationQuaternion = quaternionUtilities.calculateArbitraryRotationQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

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
      separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function (smallerFacet) {
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
        push(unmaskedFacets, unmaskedSmallerFacets);
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
      arbitraryRotationQuaternion = calculateArbitraryRotationQuaternion(normal),
          rotationQuaternion = arbitraryRotationQuaternion,
          ///
      vertices = rotateVertices(facetVertices, rotationQuaternion),
          maskingEdges = calculateMaskingEdges(vertices),
          verticalLines = maskingEdges.map(function (maskingEdge) {
        var verticalLine = VerticalLine.fromMaskingEdge(maskingEdge);
        return verticalLine;
      }),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
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
        endIndex = (startIndex + 1) % VERTICES_LENGTH,
        startVertex = vertices[startIndex],
        endVertex = vertices[endIndex],
        maskingEdge = MaskingEdge.fromStartVertexAndEndVertex(startVertex, endVertex);
    return maskingEdge;
  });
  return maskingEdges;
}

},{"../constants":3,"../utilities/array":81,"../utilities/quaternion":87,"../utilities/vertices":91,"./edge/masking":47,"./verticalLine":54}],52:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    normalise3 = vectorMaths.normalise3,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

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
      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = subtract3(secondPosition, firstPosition),
          secondExtent = subtract3(thirdPosition, firstPosition),
          extent = normalise3(cross3(firstExtent, secondExtent)),
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rotationUtilities = require("../utilities/rotation");

var rotatePosition = rotationUtilities.rotatePosition;

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
      this.position = rotatePosition(this.position, rotationQuaternion);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("../utilities/array"),
    rotationUtilities = require("../utilities/rotation"),
    quaternionUtilities = require("../utilities/quaternion"),
    intersectionUtilities = require("../utilities/intersection");

var first = arrayUtilities.first,
    rotatePosition = rotationUtilities.rotatePosition,
    calculateIntersection = intersectionUtilities.calculateIntersection,
    calculateRotationAboutZAxisQuaternion = quaternionUtilities.calculateRotationAboutZAxisQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

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
        var intersection = calculateIntersection(edge, _this.firstPositionComponent);
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
          rotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion(maskingEdge),
          rotationQuaternion = rotationAboutZAxisQuaternion,
          ///
      forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          position = rotatePosition(maskingEdgePosition, rotationQuaternion),
          positionComponents = position,
          ///
      firstPositionComponent = first(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
      return verticalLine;
    }
  }]);

  return VerticalLine;
}();

module.exports = VerticalLine;

},{"../utilities/array":81,"../utilities/intersection":83,"../utilities/quaternion":87,"../utilities/rotation":88}],55:[function(require,module,exports){
"use strict";

var Element = require("./element"),
    arrayUtilities = require("./utilities/array"),
    FunctionCanvasElement = require("./element/canvas/function");

var flatten = arrayUtilities.flatten,
    guarantee = arrayUtilities.guarantee;

function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  properties = properties || {}; ///

  childElements = flatten(childElements); ///

  var element;

  if (isSubclassOf(firstArgument, Element)) {
    var Class = firstArgument; ///

    Object.assign(properties, {
      childElements: childElements
    });
    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === "function") {
    var func = firstArgument,
        ///
    _childElements = guarantee(func(properties));

    Object.assign(properties, {
      childElements: _childElements
    });
    element = FunctionCanvasElement.fromProperties(properties);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("./utilities/array");

var push = arrayUtilities.push;
var add = push; ///

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

var RendererBuffers = require("../../renderer/buffers");

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
      colourRendererBuffers = RendererBuffers.fromNothing(ColourRendererBuffers, vertexColoursBuffer);
      return colourRendererBuffers;
    }
  }]);

  return ColourRendererBuffers;
}(RendererBuffers);

module.exports = ColourRendererBuffers;

},{"../../renderer/buffers":57}],59:[function(require,module,exports){
"use strict";

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

var RendererBuffers = require("../../renderer/buffers");

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
      textureRendererBuffers = RendererBuffers.fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);
      return textureRendererBuffers;
    }
  }]);

  return TextureRendererBuffers;
}(RendererBuffers);

module.exports = TextureRendererBuffers;

},{"../../renderer/buffers":57}],60:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Renderer = require("../renderer"),
    arrayUtilities = require("../utilities/array"),
    ColourRendererData = require("../renderer/data/colour"),
    vertexShaderSource = require("./source/colour/vertexShader"),
    fragmentShaderSource = require("./source/colour/fragmentShader"),
    ColourRendererBuffers = require("../renderer/buffers/colour"),
    ColourUniformLocations = require("./locations/colour/uniform"),
    ColourAttributeLocations = require("./locations/colour/attribute");

var push = arrayUtilities.push,
    createProgram = Renderer.createProgram;
var add = push; ///

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
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          colourRendererData = ColourRendererData.fromNothing(),
          colourRendererBuffers = ColourRendererBuffers.fromNothing(),
          colourUniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          colourAttributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
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
}(Renderer);

module.exports = ColourRenderer;

},{"../renderer":56,"../renderer/buffers/colour":58,"../renderer/data/colour":62,"../utilities/array":81,"./locations/colour/attribute":65,"./locations/colour/uniform":66,"./source/colour/fragmentShader":70,"./source/colour/vertexShader":71}],61:[function(require,module,exports){
"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var arrayUtilities = require("../utilities/array");

var flatten = arrayUtilities.flatten,
    merge = arrayUtilities.merge,
    add = merge; ///

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
      var vertexPositionsData = flatten(vertexPositions);
      add(this.vertexPositionsData, vertexPositionsData);
    }
  }, {
    key: "addVertexNormals",
    value: function addVertexNormals(vertexNormals) {
      var vertexNormalsData = flatten(vertexNormals);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RendererData = require("../../renderer/data"),
    arrayUtilities = require("../../utilities/array");

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten;
var add = merge; ///

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
      var vertexColoursData = flatten(vertexColours);
      add(this.vertexColoursData, vertexColoursData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexColoursData = [],
          colourRendererData = RendererData.fromNothing(ColourRendererData, vertexColoursData);
      return colourRendererData;
    }
  }]);

  return ColourRendererData;
}(RendererData);

module.exports = ColourRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],63:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RendererData = require("../../renderer/data"),
    arrayUtilities = require("../../utilities/array");

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten;
var add = merge; ///

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
      var vertexTextureCoordinatesData = flatten(vertexTextureCoordinateTuples);
      add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(RendererData);

module.exports = TextureRendererData;

},{"../../renderer/data":61,"../../utilities/array":81}],64:[function(require,module,exports){
"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lightingSource = require("../source/lighting"),
    positionSource = require("../source/position");

var vertexNormalAttributeName = lightingSource.vertexNormalAttributeName,
    vertexPositionAttributeName = positionSource.vertexPositionAttributeName;

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

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = _construct(Class, [vertexPositionAttributeLocation, vertexNormalAttributeLocation].concat(remainingArguments));

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

module.exports = AttributeLocations;

},{"../source/lighting":72,"../source/position":73}],65:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AttributeLocations = require("../../locations/attribute"),
    vertexShaderSource = require("../../source/colour/vertexShader");

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName;

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
      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourAttributeLocations = AttributeLocations.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);
      return colourAttributeLocations;
    }
  }]);

  return ColourAttributeLocations;
}(AttributeLocations);

module.exports = ColourAttributeLocations;

},{"../../locations/attribute":64,"../../source/colour/vertexShader":71}],66:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UniformLocations = require("../../locations/uniform");

var ColourUniformLocations = /*#__PURE__*/function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  function ColourUniformLocations() {
    _classCallCheck(this, ColourUniformLocations);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColourUniformLocations).apply(this, arguments));
  }

  _createClass(ColourUniformLocations, null, [{
    key: "fromProgram",
    value: function fromProgram(program, canvas) {
      return UniformLocations.fromProgram(ColourUniformLocations, program, canvas);
    }
  }]);

  return ColourUniformLocations;
}(UniformLocations);

module.exports = ColourUniformLocations;

},{"../../locations/uniform":69}],67:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AttributeLocations = require("../../locations/attribute"),
    vertexShaderSource = require("../../source/texture/vertexShader");

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName;

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
      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureAttributeLocations = AttributeLocations.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);
      return textureAttributeLocations;
    }
  }]);

  return TextureAttributeLocations;
}(AttributeLocations);

module.exports = TextureAttributeLocations;

},{"../../locations/attribute":64,"../../source/texture/vertexShader":75}],68:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UniformLocations = require("../../locations/uniform"),
    fragmentShaderSource = require("../../source/texture/fragmentShader");

var samplerName = fragmentShaderSource.samplerName;

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
      var samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureUniformLocations = UniformLocations.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);
      return textureUniformLocations;
    }
  }]);

  return TextureUniformLocations;
}(UniformLocations);

module.exports = TextureUniformLocations;

},{"../../locations/uniform":69,"../../source/texture/fragmentShader":74}],69:[function(require,module,exports){
"use strict";

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lightingSource = require("../source/lighting"),
    positionSource = require("../source/position");

var normalsMatrixName = lightingSource.normalsMatrixName,
    offsetsMatrixName = positionSource.offsetsMatrixName,
    rotationsMatrixName = positionSource.rotationsMatrixName,
    positionMatrixName = positionSource.positionMatrixName,
    projectionMatrixName = positionSource.projectionMatrixName;

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

      var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, offsetsMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
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

var lightingSource = require("../../source/lighting"),
    positionSource = require("../../source/position");

var vertexColourAttributeName = "aVertexColour",
    vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(lightingSource, "\n      \n        ").concat(positionSource, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
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

var lightingSource = require("../../source/lighting"),
    positionSource = require("../../source/position");

var textureCoordinateAttributeName = "aTextureCoordinate",
    vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(lightingSource, "\n      \n        ").concat(positionSource, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});
module.exports = vertexShaderSource;

},{"../../source/lighting":72,"../../source/position":73}],76:[function(require,module,exports){
"use strict";

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

var Renderer = require("../renderer"),
    vertexShaderSource = require("./source/texture/vertexShader"),
    TextureRendererData = require("../renderer/data/texture"),
    fragmentShaderSource = require("./source/texture/fragmentShader"),
    TextureRendererBuffers = require("../renderer/buffers/texture"),
    TextureUniformLocations = require("./locations/texture/uniform"),
    TextureAttributeLocations = require("./locations/texture/attribute");

var createProgram = Renderer.createProgram;

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
          program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
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
}(Renderer);

module.exports = TextureRenderer;

},{"../renderer":56,"../renderer/buffers/texture":59,"../renderer/data/texture":63,"./locations/texture/attribute":67,"./locations/texture/uniform":68,"./source/texture/fragmentShader":74,"./source/texture/vertexShader":75}],77:[function(require,module,exports){
"use strict";

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

var arrayUtilities = require("../../utilities/array"),
    TextureRenderer = require("../../renderer/texture");

var push = arrayUtilities.push;
var add = push; ///

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
      var imageMapTextureRenderer = TextureRenderer.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);
      return imageMapTextureRenderer;
    }
  }]);

  return ImageMapTextureRenderer;
}(TextureRenderer);

module.exports = ImageMapTextureRenderer;

},{"../../renderer/texture":76,"../../utilities/array":81}],78:[function(require,module,exports){
"use strict";

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

var arrayUtilities = require("../../utilities/array"),
    TextureRenderer = require("../../renderer/texture");

var push = arrayUtilities.push,
    first = arrayUtilities.first;
var add = push; ///

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
        var firstTexturedFacet = first(texturedFacets),
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
      var imagesTextureRenderer = TextureRenderer.fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);
      return imagesTextureRenderer;
    }
  }]);

  return ImagesTextureRenderer;
}(TextureRenderer);

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

var constants = require("../constants");

var DEFAULT_MARGIN_OF_ERROR = constants.DEFAULT_MARGIN_OF_ERROR;

function isApproximatelyEqualToOne(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 1, marginOfError);
}

function isApproximatelyEqualToZero(value) {
  var marginOfError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MARGIN_OF_ERROR;
  return isApproximatelyEqualTo(value, 0, marginOfError);
}

module.exports = {
  isApproximatelyEqualToOne: isApproximatelyEqualToOne,
  isApproximatelyEqualToZero: isApproximatelyEqualToZero
};

function isApproximatelyEqualTo(valueA, valueB) {
  var marginOfError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_MARGIN_OF_ERROR;
  var difference = valueA - valueB,
      absoluteDifference = Math.abs(difference),
      approximatelyEqual = absoluteDifference < marginOfError;
  return approximatelyEqual;
}

},{"../constants":3}],81:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var necessary = require("necessary");

var arrayUtilities = necessary.arrayUtilities;

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

module.exports = Object.assign(arrayUtilities, {
  permute: permute,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":94}],82:[function(require,module,exports){
"use strict";

var constants = require("../constants"),
    vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    length3 = vectorMaths.length3;

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
    endIndex = (startIndex + 1) % VERTICES_LENGTH,
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
  var firstVertex = first(vertices),
      secondVertex = second(vertices),
      thirdVertex = third(vertices),
      firstVertexPosition = firstVertex.getPosition(),
      secondVertexPosition = secondVertex.getPosition(),
      thirdVertexPosition = thirdVertex.getPosition(),
      firstExtent = subtract3(secondVertexPosition, firstVertexPosition),
      secondExtent = subtract3(thirdVertexPosition, firstVertexPosition),
      area = length3(cross3(firstExtent, secondExtent)) / 2;
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

var vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array"),
    approximateUtilities = require("../utilities/approximate");

var add3 = vectorMaths.add3,
    subtract3 = vectorMaths.subtract3,
    scale3 = vectorMaths.scale3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero;

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
  var extent = subtract3(endVertexPosition, startVertexPosition),
      offset = scale3(extent, intersection),
      intermediateVertexPosition = add3(startVertexPosition, offset);
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
  firstEdgeExtentComponent = first(edgeExtentComponents),
      secondEdgeExtentComponent = second(edgeExtentComponents),
      edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent,
      edgeAngleTangentApproximatelyEqualToZero = isApproximatelyEqualToZero(edgeAngleTangent),
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
  firstEdgeExtentComponent = first(edgeExtentComponents),
      firstEdgePositionComponent = first(edgePositionComponents),
      edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
  return edgeIntersection;
}

},{"../maths/vector":29,"../utilities/approximate":80,"../utilities/array":81}],84:[function(require,module,exports){
"use strict";

var constants = require("../constants"),
    matrixMaths = require("../maths/matrix"),
    vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array");

var scale3 = vectorMaths.scale3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR,
    identity4 = matrixMaths.identity4,
    scale4 = matrixMaths.scale4,
    invert4 = matrixMaths.invert4,
    rotate4 = matrixMaths.rotate4,
    translate4 = matrixMaths.translate4,
    transpose4 = matrixMaths.transpose4,
    perspective4 = matrixMaths.perspective4;

function scaleMatrixFromScale(scale) {
  var scaleMatrix = identity4();
  scaleMatrix = scale4(scaleMatrix, scale);
  return scaleMatrix;
}

function offsetsMatrixFromOffsets(offsets) {
  var offsetsMatrix = identity4(); ///

  offsetsMatrix = translate4(offsetsMatrix, offsets);
  return offsetsMatrix;
}

function positionMatrixFromNothing() {
  var positionMatrix = identity4(); ///

  return positionMatrix;
}

function positionMatrixFromDistance(distance) {
  var positionMatrix = identity4(); ///

  var x = 0,
      y = 0,
      z = -distance;
  positionMatrix = translate4(positionMatrix, [x, y, z]);
  return positionMatrix;
}

function positionMatrixFromPosition(position) {
  var positionMatrix = identity4(); ///

  positionMatrix = translate4(positionMatrix, position);
  return positionMatrix;
}

function rotationsMatrixFromAngles(angles) {
  var reverseOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var rotationsMatrix = identity4(); ///

  var firstAngle = first(angles),
      secondAngle = second(angles),
      thirdAngle = third(angles),
      xAngle = firstAngle,
      yAngle = secondAngle,
      zAngle = thirdAngle,
      xAxis = [1, 0, 0],
      yAxis = [0, 1, 0],
      zAxis = [0, 0, 1];

  if (reverseOrder) {
    rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);
    rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);
    rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);
  } else {
    rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);
    rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);
    rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);
  }

  return rotationsMatrix;
}

function rotationsMatrixFromRotations(rotations) {
  var scalar = DEGREES_TO_RADIANS_SCALAR,
      angles = scale3(rotations, scalar),
      rotationsMatrix = rotationsMatrixFromAngles(angles);
  return rotationsMatrix;
}

function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
  var normalsMatrix = invert4(rotationsMatrix);
  normalsMatrix = transpose4(normalsMatrix);
  return normalsMatrix;
}

function projectionMatrixFromWidthAndHeight(width, height) {
  var fieldOfView = FIELD_OF_VIEW,
      ///
  aspectRatio = width / height,
      zNear = Z_NEAR,
      ///
  zFar = Z_FAR,
      ///
  projectionMatrix = perspective4(fieldOfView, aspectRatio, zNear, zFar);
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var vectorMaths = require("../maths/vector");

var add3 = vectorMaths.add3,
    scale3 = vectorMaths.scale3;

function calculateMidPointPosition(vertices) {
  var midPointPosition = vertices.reduce(function (midPointPosition, vertex) {
    var vertexPosition = vertex.getPosition(),
        scaledVertexPosition = scale3(vertexPosition, 1 / 3);
    midPointPosition = add3(midPointPosition, scaledVertexPosition);
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

var vectorMaths = require("../maths/vector"),
    matrixUtilities = require("../utilities/matrix");

var reflect3 = vectorMaths.reflect3,
    transform4 = vectorMaths.transform4,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles;

function relativeOffsetsFromAnglesAndDirections(angles, directions) {
  var reverseOrder = true,
      reflectedAngles = reflect3(angles),
      rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles, reverseOrder),
      relativeOffsets = transform4(directions, rotationsMatrix).slice(0, 3); ///

  return relativeOffsets;
}

module.exports = {
  relativeOffsetsFromAnglesAndDirections: relativeOffsetsFromAnglesAndDirections
};

},{"../maths/vector":29,"../utilities/matrix":84}],87:[function(require,module,exports){
"use strict";

var vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array"),
    angleUtilities = require("../utilities/angle"),
    approximateUtilities = require("../utilities/approximate");

var dot3 = vectorMaths.dot3,
    cross3 = vectorMaths.cross3,
    normalise3 = vectorMaths.normalise3,
    isApproximatelyEqualToOne = approximateUtilities.isApproximatelyEqualToOne,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    calculateHalfAngleCosine = angleUtilities.calculateHalfAngleCosine,
    calculateHalfAngleSine = angleUtilities.calculateHalfAngleSine;

function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
  return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
}

function calculateInverseRotationQuaternion(rotationQuaternion) {
  var rotationQuaternionComponents = rotationQuaternion,
      ///
  firstRotationQuaternionComponent = first(rotationQuaternionComponents),
      secondRotationQuaternionComponent = second(rotationQuaternionComponents),
      thirdRotationQuaternionComponent = third(rotationQuaternionComponents),
      fourthRotationQuaternionComponent = fourth(rotationQuaternionComponents),
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
      dotProductOfUnitNormalAndZAxis = dot3(unitNormal, zAxis),
      crossProductOfUnitNormalAndZAxis = cross3(unitNormal, zAxis),
      angleOfRotationCosine = dotProductOfUnitNormalAndZAxis,
      ///
  angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine),
      angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = isApproximatelyEqualToOne(angleOfRotationCosineAbsoluteValue),
      axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [1, 0, 0] : ///
  crossProductOfUnitNormalAndZAxis,
      unitAxisOfRotation = normalise3(axisOfRotation),
      halfAngleOfRotationCosine = calculateHalfAngleCosine(angleOfRotationCosine),
      halfAngleOfRotationSine = calculateHalfAngleSine(angleOfRotationCosine),
      unitAxisOfRotationComponents = unitAxisOfRotation,
      ///
  firstAxisOfRotationComponent = first(unitAxisOfRotationComponents),
      secondAxisOfRotationComponent = second(unitAxisOfRotationComponents),
      thirdAxisOfRotationComponent = third(unitAxisOfRotationComponents),
      arbitraryRotationQuaternion = [halfAngleOfRotationCosine, firstAxisOfRotationComponent * halfAngleOfRotationSine, secondAxisOfRotationComponent * halfAngleOfRotationSine, thirdAxisOfRotationComponent * halfAngleOfRotationSine];
  return arbitraryRotationQuaternion;
}

function calculateRotationAboutZAxisQuaternion(maskingEdge) {
  var maskingEdgeExtent = maskingEdge.getExtent(),
      unitMaskingEdgeExtent = normalise3(maskingEdgeExtent),
      unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent,
      ///
  firstUnitMaskingEdgeExtentComponent = first(unitMaskingEdgeExtentComponents),
      secondUnitMaskingEdgeExtentComponent = second(unitMaskingEdgeExtentComponents),
      angleOfRotationSine = firstUnitMaskingEdgeExtentComponent,
      ///
  angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent,
      ///
  halfAngleOfRotationCosine = calculateHalfAngleCosine(angleOfRotationCosine),
      halfAngleOfRotationSine = angleOfRotationSine > 0 ? +calculateHalfAngleSine(angleOfRotationCosine) : -calculateHalfAngleSine(angleOfRotationCosine),
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var quaternionUtilities = require("../utilities/quaternion");

var rotateImaginaryQuaternion = quaternionUtilities.rotateImaginaryQuaternion,
    calculateInverseRotationQuaternion = quaternionUtilities.calculateInverseRotationQuaternion;

function rotatePosition(position, rotationQuaternion) {
  var imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
      inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
      rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
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

var matrixMaths = require("../maths/matrix"),
    vectorMaths = require("../maths/vector"),
    arrayUtilities = require("../utilities/array"),
    verticesUtilities = require("../utilities/vertices"),
    quaternionUtilities = require("../utilities/quaternion");

var rotateVertices = verticesUtilities.rotateVertices,
    invert2 = matrixMaths.invert2,
    invert3 = matrixMaths.invert3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    calculateArbitraryRotationQuaternion = quaternionUtilities.calculateArbitraryRotationQuaternion,
    add2 = vectorMaths.add2,
    multiply2 = vectorMaths.multiply2,
    transform2 = vectorMaths.transform2,
    transform3 = vectorMaths.transform3;

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
    return add2(multiply2(textureCoordinateTuple, [width, height]), [left, bottom]);
  }); ///

  return mappedTextureCoordinateTuples;
}

function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
  var arbitraryRotationQuaternion = calculateArbitraryRotationQuaternion(normal),
      rotationQuaternion = arbitraryRotationQuaternion; ///

  var tempVertices = rotateVertices(vertices, rotationQuaternion);
  parentVertices = rotateVertices(parentVertices, rotationQuaternion);
  vertices = tempVertices; ///

  var firstVertex = first(vertices),
      secondVertex = second(vertices),
      thirdVertex = third(vertices),
      firstParentVertex = first(parentVertices),
      secondParentVertex = second(parentVertices),
      thirdParentVertex = third(parentVertices),
      firstTextureCoordinateTuple = first(textureCoordinateTuples),
      secondTextureCoordinateTuple = second(textureCoordinateTuples),
      thirdTextureCoordinateTuple = third(textureCoordinateTuples),
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
  textureCoordinatesMatrix = invert3([1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v]),
      firstTransformedParentVerticesComponent = transform3([P1x, P2x, P3x], textureCoordinatesMatrix),
      secondTransformedParentVerticesComponent = transform3([P1y, P2y, P3y], textureCoordinatesMatrix),
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
  transformedParentVerticesMatrix = invert2([Ux, Uy, Vx, Vy]),
      firstAdjustedTextureCoordinate = transform2([R1x - Ox, R1y - Oy], transformedParentVerticesMatrix),
      secondAdjustedTextureCoordinate = transform2([R2x - Ox, R2y - Oy], transformedParentVerticesMatrix),
      thirdAdjustedTextureCoordinate = transform2([R3x - Ox, R3y - Oy], transformedParentVerticesMatrix),
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var vectorMaths = require("../maths/vector"),
    matrixMaths = require("../maths/matrix"),
    matrixUtilities = require("../utilities/matrix");

var multiply4 = matrixMaths.multiply4,
    transform4 = vectorMaths.transform4,
    scaleMatrixFromScale = matrixUtilities.scaleMatrixFromScale,
    positionMatrixFromPosition = matrixUtilities.positionMatrixFromPosition,
    rotationsMatrixFromRotations = matrixUtilities.rotationsMatrixFromRotations;

function composeTransform(scale, rotations, position) {
  var matrix = null;

  if (scale !== null) {
    var scaleMatrix = scaleMatrixFromScale(scale);
    matrix = matrix === null ? scaleMatrix : multiply4(scaleMatrix, matrix);
  }

  if (rotations !== null) {
    var rotationsMatrix = rotationsMatrixFromRotations(rotations);
    matrix = matrix === null ? rotationsMatrix : multiply4(rotationsMatrix, matrix);
  }

  if (position !== null) {
    var positionMatrix = positionMatrixFromPosition(position);
    matrix = matrix === null ? positionMatrix : multiply4(positionMatrix, matrix);
  }

  var transform = matrix === null ? function (vector) {
    return vector;
  } : function (vector) {
    return transform4([].concat(_toConsumableArray(vector), [1]), matrix).slice(0, 3);
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

var React = require("./react");

Object.defineProperty(window, "React", {
  get: function get() {
    return React;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9jYW52YXMuanMiLCJsaWIvY29uc3RhbnRzLmpzIiwibGliL2VsZW1lbnQuanMiLCJsaWIvZWxlbWVudC9jYW1lcmEuanMiLCJsaWIvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwibGliL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsImxpYi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImxpYi9lbGVtZW50L21hc2suanMiLCJsaWIvZWxlbWVudC9wYXJ0LmpzIiwibGliL2VsZW1lbnQvc2NlbmUuanMiLCJsaWIvZXhhbXBsZS5qcyIsImxpYi9leGFtcGxlL2N1YmUuanMiLCJsaWIvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwibGliL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCJsaWIvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCJsaWIvZXhhbXBsZS9tYXNraW5nLmpzIiwibGliL2V4YW1wbGUvcHlyYW1pZC5qcyIsImxpYi9leGFtcGxlL3NpbXBsZS5qcyIsImxpYi9leGFtcGxlL3RpbGluZy5qcyIsImxpYi9tYXRocy9tYXRyaXguanMiLCJsaWIvbWF0aHMvdmVjdG9yLmpzIiwibGliL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbi5qcyIsImxpYi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsImxpYi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwibGliL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwibGliL21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsImxpYi9taXNjZWxsYW5lb3VzL3pvb20uanMiLCJsaWIvbWl4aW4vYmxlbmRpbmcuanMiLCJsaWIvbWl4aW4vYnVmZmVyLmpzIiwibGliL21peGluL2NvbG91ci5qcyIsImxpYi9taXhpbi9kZXB0aC5qcyIsImxpYi9taXhpbi9sb2NhdGlvbi5qcyIsImxpYi9taXhpbi9tYXRyaXguanMiLCJsaWIvbWl4aW4vcHJvZ3JhbS5qcyIsImxpYi9taXhpbi9zaGFkZXIuanMiLCJsaWIvbWl4aW4vdGV4dHVyZS5qcyIsImxpYi9wcmltaXRpdmUvZWRnZS5qcyIsImxpYi9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwibGliL3ByaW1pdGl2ZS9mYWNldC5qcyIsImxpYi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCJsaWIvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwibGliL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCJsaWIvcHJpbWl0aXZlL25vcm1hbC5qcyIsImxpYi9wcmltaXRpdmUvdmVydGV4LmpzIiwibGliL3ByaW1pdGl2ZS92ZXJ0aWNhbExpbmUuanMiLCJsaWIvcmVhY3QuanMiLCJsaWIvcmVuZGVyZXIuanMiLCJsaWIvcmVuZGVyZXIvYnVmZmVycy5qcyIsImxpYi9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsImxpYi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCJsaWIvcmVuZGVyZXIvY29sb3VyLmpzIiwibGliL3JlbmRlcmVyL2RhdGEuanMiLCJsaWIvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCJsaWIvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJsaWIvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImxpYi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwibGliL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImxpYi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJsaWIvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImxpYi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwibGliL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwibGliL3V0aWxpdGllcy9hbmdsZS5qcyIsImxpYi91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCJsaWIvdXRpbGl0aWVzL2FycmF5LmpzIiwibGliL3V0aWxpdGllcy9mYWNldC5qcyIsImxpYi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwibGliL3V0aWxpdGllcy9tYXRyaXguanMiLCJsaWIvdXRpbGl0aWVzL21pZFBvaW50LmpzIiwibGliL3V0aWxpdGllcy9vZmZzZXRzLmpzIiwibGliL3V0aWxpdGllcy9xdWF0ZXJuaW9uLmpzIiwibGliL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsImxpYi91dGlsaXRpZXMvdGV4dHVyZS5qcyIsImxpYi91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwibGliL3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsImxpYi94Z2wuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2FqYXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9sb2cuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9vbkVUWC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3Byb21wdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3JjLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL3BhdGguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvdGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9saWIveGdsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDYW52YXM6IHJlcXVpcmUoJy4vbGliL2NhbnZhcycpLFxuICBNYXNrOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L21hc2snKSxcbiAgUGFydDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9wYXJ0JyksXG4gIFNjZW5lOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NjZW5lJyksXG4gIENhbWVyYTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW1lcmEnKSxcbiAgR2FtaW5nQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcnKSxcbiAgRGVzaWduQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9kZXNpZ24nKSxcbiAgQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMnKSxcbiAgQ29sb3VyZWRDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpLFxuICBUZXh0dXJlZENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJylcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZGVwdGhNaXhpbiA9IHJlcXVpcmUoXCIuL21peGluL2RlcHRoXCIpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9jb2xvdXJcIiksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoXCIuL21peGluL3NoYWRlclwiKSxcbiAgICAgIGJ1ZmZlck1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vYnVmZmVyXCIpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9tYXRyaXhcIiksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9wcm9ncmFtXCIpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZShcIi4vbWl4aW4vdGV4dHVyZVwiKSxcbiAgICAgIGJsZW5kaW5nTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9ibGVuZGluZ1wiKSxcbiAgICAgIGxvY2F0aW9uTWl4aW4gPSByZXF1aXJlKFwiLi9taXhpbi9sb2NhdGlvblwiKTtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBcImNhbnZhc1wiKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcblxuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcblxuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuXG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbG9jYXRpb25NaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBnZXQgdGhlIFdlYkdMIGNvbnRleHQuYCk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBaX0ZBUiA9IDEwMDAsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgTU9VU0VfVVAgPSBcIk1PVVNFX1VQXCIsXG4gICAgICBNT1VTRV9ET1dOID0gXCJNT1VTRV9ET1dOXCIsXG4gICAgICBNT1VTRV9NT1ZFID0gXCJNT1VTRV9NT1ZFXCIsXG4gICAgICBNT1VTRV9XSEVFTCA9IFwiTU9VU0VfV0hFRUxcIixcbiAgICAgIERFTFRBX1NDQUxBUiA9IDEuMjUsXG4gICAgICBJTlZFUlRfU0NBTEFSID0gLTEsXG4gICAgICBBTkdMRVNfU0NBTEFSID0gMC4wMSxcbiAgICAgIE9GRlNFVF9TQ0FMQVIgPSAwLjI1LFxuICAgICAgU0hJRlRfS0VZX0NPREUgPSAxNixcbiAgICAgIFZFUlRJQ0VTX0xFTkdUSCA9IDMsXG4gICAgICBNSU5JTVVNX0RJU1RBTkNFID0gMSxcbiAgICAgIERFRkFVTFRfTUFSR0lOX09GX0VSUk9SID0gMC4wMDAwMDAxLFxuICAgICAgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiA9IE1hdGguUEkgLyAxODAsXG4gICAgICBGSUVMRF9PRl9WSUVXID0gNDUgKiBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgWl9GQVIsXG4gIFpfTkVBUixcbiAgTU9VU0VfVVAsXG4gIE1PVVNFX0RPV04sXG4gIE1PVVNFX01PVkUsXG4gIE1PVVNFX1dIRUVMLFxuICBERUxUQV9TQ0FMQVIsXG4gIElOVkVSVF9TQ0FMQVIsXG4gIEFOR0xFU19TQ0FMQVIsXG4gIE9GRlNFVF9TQ0FMQVIsXG4gIFNISUZUX0tFWV9DT0RFLFxuICBWRVJUSUNFU19MRU5HVEgsXG4gIE1JTklNVU1fRElTVEFOQ0UsXG4gIERFRkFVTFRfTUFSR0lOX09GX0VSUk9SLFxuICBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICBGSUVMRF9PRl9WSUVXXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBcImZ1bmN0aW9uXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUGFuID0gcmVxdWlyZShcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCIpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIiksXG4gICAgICBab29tID0gcmVxdWlyZShcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoXCIuLi9jYW1lcmFcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi8uLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiKTtcblxuY29uc3QgeyB6ZXJvMiwgemVybzMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbE9mZnNldHMgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKHBhbiwgdGlsdCk7XG5cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIGNhbGxiYWNrKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldHMgPSBkZWZhdWx0SW5pdGlhbE9mZnNldHMsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUGFuID0gcmVxdWlyZShcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCIpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIiksXG5cbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoXCIuLi9jYW1lcmFcIiksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi8uLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiKTtcblxuY29uc3QgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG5cblxuXG5cblxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcblxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgY2FsbGJhY2sob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIik7XG5cbmNvbnN0IHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrID0gbWFzaztcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCBtYXNrID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbiksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIiksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZShcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCIpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiKTtcblxuY2xhc3MgRnVuY3Rpb25DYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZnVuY3Rpb25FbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGdW5jdGlvbkNhbnZhc0VsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uQ2FudmFzRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZShcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCIpLFxuICAgICAgVGV4dHVyZWRGYWNldCA9IHJlcXVpcmUoXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWRcIik7XG5cbmNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50XCIpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZShcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIik7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIiksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlci9jb2xvdXJcIiksXG4gICAgICBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIiksXG4gICAgICBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCIpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKFwibmVjZXNzYXJ5XCIpO1xuXG5jb25zdCBQYXJ0ID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvcGFydFwiKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50L2NhbWVyYVwiKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKSxcbiAgICAgIFVzZXJJbnB1dCA9IHJlcXVpcmUoXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL3ZlY3RvclwiKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG5cbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodCwgIC8vL1xuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2FsbGJhY2sgPSByZW5kZXI7ICAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBpbml0aWFsaXNlUGFydHModGhpcy5wYXJ0cywgdXBkYXRlLCBjYW52YXMsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgdXBkYXRlLCBjYW52YXMsIGRvbmUpIHtcbiAgZm9yRWFjaChwYXJ0cywgKHBhcnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gcGFydHNMZW5ndGg7XG5cbiAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gcmVxdWlyZShcIi4vZXhhbXBsZS9jdWJlXCIpLFxuICAgICAgc2ltcGxlRXhhbXBsZSA9IHJlcXVpcmUoXCIuL2V4YW1wbGUvc2ltcGxlXCIpLFxuICAgICAgbWFza2luZ0V4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlL21hc2tpbmdcIiksXG4gICAgICBweXJhbWlkRXhhbXBsZSA9IHJlcXVpcmUoXCIuL2V4YW1wbGUvcHlyYW1pZFwiKSxcbiAgICAgIHRpbGluZ0V4YW1wbGUgPSByZXF1aXJlKFwiLi9leGFtcGxlL3RpbGluZ1wiKTtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoXCIuLi8uLi9pbmRleFwiKTsgLy8vXG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKFwiLi9lbGVtZW50L2N1YmVcIik7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PlxuXG5cdDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG5cdFx0PFBhcnQ+XG5cdFx0XHQ8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuXHRcdDwvUGFydD5cblx0XHQ8RGVzaWduQ2FtZXJhIC8+XG5cdDwvU2NlbmU+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBjdWJlRXhhbXBsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7ICAvLy9cblxuY29uc3QgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFNxdWFyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBGYWNlID0gcmVxdWlyZShcIi4vZmFjZVwiKTtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoXCIuL2NvbG91cmVkU3F1YXJlXCIpO1xuXG5jb25zdCBGYWNlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgKzAuNSBdfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgU2lkZSA9IHJlcXVpcmUoXCIuL3NpZGVcIik7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgVGV4dHVyZWRUcmlhbmdsZSA9IHJlcXVpcmUoXCIuL3RleHR1cmVkVHJpYW5nbGVcIik7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKFwiLi4vLi4vLi4vaW5kZXhcIik7ICAvLy9cblxuY29uc3QgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFF1YWRyYW5nbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeGdsID0gcmVxdWlyZShcIi4uLy4uLy4uL2luZGV4XCIpOyAgLy8vXG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRUcmlhbmdsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKFwiLi4vLi4vaW5kZXhcIik7IC8vL1xuXG5jb25zdCBDdWJlID0gcmVxdWlyZShcIi4vZWxlbWVudC9jdWJlXCIpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoXCIuLi8uLi9pbmRleFwiKTsgLy8vXG5cbmNvbnN0IFB5cmFtaWQgPSByZXF1aXJlKFwiLi9lbGVtZW50L3B5cmFtaWRcIiksXG4gICAgICBjb25maWd1cmF0aW9uID0gcmVxdWlyZShcIi4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvblwiKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBHYW1pbmdDYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhIC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB5cmFtaWRFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgeyBpbWFnZU1hcFVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBzcmMgPSBpbWFnZU1hcFVSSTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoXCIuLi8uLi9pbmRleFwiKTsgLy8vXG5cbmNvbnN0IENvbG91cmVkU3F1YXJlID0gcmVxdWlyZShcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUV4YW1wbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgeGdsID0gcmVxdWlyZShcIi4uLy4uL2luZGV4XCIpLCAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoXCJuZWNlc3NhcnlcIik7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKFwiLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uXCIpLFxuICAgICAgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCIpLFxuICAgICAgVGV4dHVyZWRRdWFkcmFuZ2xlID0gcmVxdWlyZShcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIik7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gPSB4Z2wsXG4gICAgICB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aWxpbmdFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIHNyYyA9IGAke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gaWRlbnRpdHkyKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsXG4gICAgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuXG4gICAgICAgIGIwID0gbWF0cml4QlswXSxcbiAgICAgICAgYjEgPSBtYXRyaXhCWzFdLFxuICAgICAgICBiMiA9IG1hdHJpeEJbMl0sXG4gICAgICAgIGIzID0gbWF0cml4QlszXTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMiAqIGIxLFxuICAgIGExICogYjAgKyBhMyAqIGIxLFxuXG4gICAgYTAgKiBiMiArIGEyICogYjMsXG4gICAgYTEgKiBiMiArIGEzICogYjMsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIGEwID0gbWF0cml4QVsgMF0sXG4gICAgICAgICBhMSA9IG1hdHJpeEFbIDFdLFxuICAgICAgICAgYTIgPSBtYXRyaXhBWyAyXSxcbiAgICAgICAgIGEzID0gbWF0cml4QVsgM10sXG4gICAgICAgICBhNCA9IG1hdHJpeEFbIDRdLFxuICAgICAgICAgYTUgPSBtYXRyaXhBWyA1XSxcbiAgICAgICAgIGE2ID0gbWF0cml4QVsgNl0sXG4gICAgICAgICBhNyA9IG1hdHJpeEFbIDddLFxuICAgICAgICAgYTggPSBtYXRyaXhBWyA4XSxcbiAgICAgICAgIGE5ID0gbWF0cml4QVsgOV0sXG4gICAgICAgIGExMCA9IG1hdHJpeEFbMTBdLFxuICAgICAgICBhMTEgPSBtYXRyaXhBWzExXSxcbiAgICAgICAgYTEyID0gbWF0cml4QVsxMl0sXG4gICAgICAgIGExMyA9IG1hdHJpeEFbMTNdLFxuICAgICAgICBhMTQgPSBtYXRyaXhBWzE0XSxcbiAgICAgICAgYTE1ID0gbWF0cml4QVsxNV0sXG5cbiAgICAgICAgIGIwID0gbWF0cml4QlsgMF0sXG4gICAgICAgICBiMSA9IG1hdHJpeEJbIDFdLFxuICAgICAgICAgYjIgPSBtYXRyaXhCWyAyXSxcbiAgICAgICAgIGIzID0gbWF0cml4QlsgM10sXG4gICAgICAgICBiNCA9IG1hdHJpeEJbIDRdLFxuICAgICAgICAgYjUgPSBtYXRyaXhCWyA1XSxcbiAgICAgICAgIGI2ID0gbWF0cml4QlsgNl0sXG4gICAgICAgICBiNyA9IG1hdHJpeEJbIDddLFxuICAgICAgICAgYjggPSBtYXRyaXhCWyA4XSxcbiAgICAgICAgIGI5ID0gbWF0cml4QlsgOV0sXG4gICAgICAgIGIxMCA9IG1hdHJpeEJbMTBdLFxuICAgICAgICBiMTEgPSBtYXRyaXhCWzExXSxcbiAgICAgICAgYjEyID0gbWF0cml4QlsxMl0sXG4gICAgICAgIGIxMyA9IG1hdHJpeEJbMTNdLFxuICAgICAgICBiMTQgPSBtYXRyaXhCWzE0XSxcbiAgICAgICAgYjE1ID0gbWF0cml4QlsxNV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaW52ZXJ0MihtYXRyaXgpIHtcbiAgY29uc3QgbTAgPSBtYXRyaXhbMF0sXG4gICAgICAgIG0xID0gbWF0cml4WzFdLFxuICAgICAgICBtMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTMgPSBtYXRyaXhbM10sXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMCAqIG0zIC0gbTIgKiBtMTtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgK20zIC8gZGV0ZXJtaW5hbnQsIC1tMSAvIGRldGVybWluYW50LFxuICAgICAgLW0yIC8gZGV0ZXJtaW5hbnQsICttMCAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbIDBdLCBtMDEgPSBtYXRyaXhbIDFdLCBtMDIgPSBtYXRyaXhbIDJdLCBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLCBtMTEgPSBtYXRyaXhbIDVdLCBtMTIgPSBtYXRyaXhbIDZdLCBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLCBtMjEgPSBtYXRyaXhbIDldLCBtMjIgPSBtYXRyaXhbMTBdLCBtMjMgPSBtYXRyaXhbMTFdLFxuICAgICAgICBtMzAgPSBtYXRyaXhbMTJdLCBtMzEgPSBtYXRyaXhbMTNdLCBtMzIgPSBtYXRyaXhbMTRdLCBtMzMgPSBtYXRyaXhbMTVdLFxuXG4gICAgICAgIGIwMCA9IG0wMCAqIG0xMSAtIG0wMSAqIG0xMCxcbiAgICAgICAgYjAxID0gbTAwICogbTEyIC0gbTAyICogbTEwLFxuICAgICAgICBiMDIgPSBtMDAgKiBtMTMgLSBtMDMgKiBtMTAsXG4gICAgICAgIGIwMyA9IG0wMSAqIG0xMiAtIG0wMiAqIG0xMSxcbiAgICAgICAgYjA0ID0gbTAxICogbTEzIC0gbTAzICogbTExLFxuICAgICAgICBiMDUgPSBtMDIgKiBtMTMgLSBtMDMgKiBtMTIsXG4gICAgICAgIGIwNiA9IG0yMCAqIG0zMSAtIG0yMSAqIG0zMCxcbiAgICAgICAgYjA3ID0gbTIwICogbTMyIC0gbTIyICogbTMwLFxuICAgICAgICBiMDggPSBtMjAgKiBtMzMgLSBtMjMgKiBtMzAsXG4gICAgICAgIGIwOSA9IG0yMSAqIG0zMiAtIG0yMiAqIG0zMSxcbiAgICAgICAgYjEwID0gbTIxICogbTMzIC0gbTIzICogbTMxLFxuICAgICAgICBiMTEgPSBtMjIgKiBtMzMgLSBtMjMgKiBtMzIsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIChtMTEgKiBiMTEgLSBtMTIgKiBiMTAgKyBtMTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMDIgKiBiMTAgLSBtMDEgKiBiMTEgLSBtMDMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDUgLSBtMzIgKiBiMDQgKyBtMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMjIgKiBiMDQgLSBtMjEgKiBiMDUgLSBtMjMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEyICogYjA4IC0gbTEwICogYjExIC0gbTEzICogYjA3KSAvIGRldGVybWluYW50LCAobTAwICogYjExIC0gbTAyICogYjA4ICsgbTAzICogYjA3KSAvIGRldGVybWluYW50LCAobTMyICogYjAyIC0gbTMwICogYjA1IC0gbTMzICogYjAxKSAvIGRldGVybWluYW50LCAobTIwICogYjA1IC0gbTIyICogYjAyICsgbTIzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMCAqIGIxMCAtIG0xMSAqIGIwOCArIG0xMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMSAqIGIwOCAtIG0wMCAqIGIxMCAtIG0wMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMCAqIGIwNCAtIG0zMSAqIGIwMiArIG0zMyAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMSAqIGIwMiAtIG0yMCAqIGIwNCAtIG0yMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTEgKiBiMDcgLSBtMTAgKiBiMDkgLSBtMTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMDkgLSBtMDEgKiBiMDcgKyBtMDIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDEgLSBtMzAgKiBiMDMgLSBtMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDMgLSBtMjEgKiBiMDEgKyBtMjIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzJdLFxuICAgIG1hdHJpeFsxXSwgbWF0cml4WzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0sIG1hdHJpeFsgNF0sIG1hdHJpeFsgOF0sIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WyAxXSwgbWF0cml4WyA1XSwgbWF0cml4WyA5XSwgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbIDJdLCBtYXRyaXhbIDZdLCBtYXRyaXhbMTBdLCBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsgM10sIG1hdHJpeFsgN10sIG1hdHJpeFsxMV0sIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHgsIG1hdHJpeFsgMV0gKiB4LCBtYXRyaXhbIDJdICogeCwgbWF0cml4WyAzXSAqIHgsXG4gICAgbWF0cml4WyA0XSAqIHksIG1hdHJpeFsgNV0gKiB5LCBtYXRyaXhbIDZdICogeSwgbWF0cml4WyA3XSAqIHksXG4gICAgbWF0cml4WyA4XSAqIHosIG1hdHJpeFsgOV0gKiB6LCBtYXRyaXhbMTBdICogeiwgbWF0cml4WzExXSAqIHosXG4gICAgbWF0cml4WzEyXSAqIDEsIG1hdHJpeFsxM10gKiAxLCBtYXRyaXhbMTRdICogMSwgbWF0cml4WzE1XSAqIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuXG4gICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgIG0yMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMyxcbiAgICBtMDAgKiB4ICsgbTEwICogeSArIG0yMCAqIHogKyBtYXRyaXhbMTJdLCBtMDEgKiB4ICsgbTExICogeSArIG0yMSAqIHogKyBtYXRyaXhbMTNdLCBtMDIgKiB4ICsgbTEyICogeSArIG0yMiAqIHogKyBtYXRyaXhbMTRdLCBtMDMgKiB4ICsgbTEzICogeSArIG0yMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aDModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xufVxuXG5mdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSk7IH1cblxuZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdKTsgfVxuXG5mdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgYXggPSB2ZWN0b3JBWzBdLCBheSA9IHZlY3RvckFbMV0sIGF6ID0gdmVjdG9yQVsyXSxcbiAgICAgICAgYnggPSB2ZWN0b3JCWzBdLCBieSA9IHZlY3RvckJbMV0sIGJ6ID0gdmVjdG9yQlsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIGF5ICogYnogLSBheiAqIGJ5LFxuICAgIGF6ICogYnggLSBheCAqIGJ6LFxuICAgIGF4ICogYnkgLSBheSAqIGJ4LFxuXG4gIF0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuICAgICAgdyAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QyKHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG4gICAgdmVjdG9yWzJdICogLTEsXG4gICAgdmVjdG9yWzNdICogLTEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzNdICogeSArIG1hdHJpeFs2XSAqIHosXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbN10gKiB6LFxuICAgIG1hdHJpeFsyXSAqIHggKyBtYXRyaXhbNV0gKiB5ICsgbWF0cml4WzhdICogeixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX187IC8vL1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmNvbnN0IHsgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VXaGVlbERlbHRhKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgbW91c2VVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZURvd25FdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZURvd25FdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VXaGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG5cbiAgICAgICAgICB0b3AgLSBjbGllbnRZLFxuXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL3ZlY3RvclwiKSxcbiAgICAgIG9mZnNldHNVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIik7XG5cbmNvbnN0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSA9IG9mZnNldHNVdGlsaXRpZXMsXG4gICAgICB7IERFTFRBX1NDQUxBUiwgSU5WRVJUX1NDQUxBUiwgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxlZE1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfU0NBTEFSKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsZWRNb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzKGluaXRpYWxPZmZzZXRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfU0NBTEFSKSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL3ZlY3RvclwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgdHJhbnNmb3JtMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IEFOR0xFU19TQ0FMQVIsIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgZmxpcHBlZCkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuZmxpcHBlZCA9IGZsaXBwZWQ7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlOyAgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGUgPSBzZWNvbmQodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlOyAvLy9cblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBzY2FsYXIgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0FOR0xFU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAtQU5HTEVTX1NDQUxBUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLCBtYXRyaXgpLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBmbGlwcGVkKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBLZXlFdmVudHMgPSByZXF1aXJlKFwiLi9rZXlFdmVudHNcIiksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoXCIuL21vdXNlRXZlbnRzXCIpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpO1xuXG5jb25zdCB7IHplcm8yLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuY29uc3QgeyBERUxUQV9TQ0FMQVIsIE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmFibGVCbGVuZGluZ1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgXG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRVbmlmb3JtTG9jYXRpb24sXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uLFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihcIldFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIilcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpO1xuXG5jb25zdCB7IHN1YnRyYWN0MyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKFwiLi4vZWRnZVwiKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uLy4uL21hdGhzL3ZlY3RvclwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIG1pZFBvaW50VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9ID0gbWlkUG9pbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKFwiLi9lZGdlXCIpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZShcIi4vbm9ybWFsXCIpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZShcIi4vdmVydGV4XCIpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9mYWNldFwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIG1pZFBvaW50VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiKSxcbiAgICAgIGludGVyc2VjdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCIpO1xuXG5jb25zdCB7IFZFUlRJQ0VTX0xFTkdUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwdXNoLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gPSBtaWRQb2ludFV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24sIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLCBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCB9ID0gaW50ZXJzZWN0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldFBvc2l0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzKHRoaXMudmVydGljZXMpOyAgLy8vXG5cbiAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgfVxuXG4gIHNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zID0gaW50ZXJzZWN0aW9ucy5tYXAoKGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCA9IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXggPSBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZW5kVmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXQ7XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCkge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoXCIuLi9lZGdlXCIpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKFwiLi4vZmFjZXRcIiksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKFwiLi4vbm9ybWFsXCIpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZShcIi4uL3ZlcnRleFwiKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiKTtcblxuY29uc3QgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKFwiLi4vZWRnZVwiKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZShcIi4uL2ZhY2V0XCIpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZShcIi4uL25vcm1hbFwiKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoXCIuLi92ZXJ0ZXhcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIiksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy90ZXh0dXJlXCIpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCIpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCIpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIiksXG4gICAgICBNYXNraW5nRWRnZSA9IHJlcXVpcmUoXCIuL2VkZ2UvbWFza2luZ1wiKSxcbiAgICAgIFZlcnRpY2FsTGluZSA9IHJlcXVpcmUoXCIuL3ZlcnRpY2FsTGluZVwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIik7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCIpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIiksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCIpLFxuICAgICAgaW50ZXJzZWN0aW9uVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIik7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVQb3NpdGlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9ID0gaW50ZXJzZWN0aW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBmYWNldC5zcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cyk7XG4gICAgfSk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goKHNtYWxsZXJGYWNldCkgPT4gc21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsTGluZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudFwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgRnVuY3Rpb25DYW52YXNFbGVtZW50ID0gcmVxdWlyZShcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIik7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuL3V0aWxpdGllcy9hcnJheVwiKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlclwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlci9kYXRhL2NvbG91clwiKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCIpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCIpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyXCIpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCIpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKTtcblxuY29uc3QgeyBmbGF0dGVuLCBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlczsgIC8vL1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckRhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZShcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIik7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoXCIuLi8uLi9yZW5kZXJlci9kYXRhXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IG1lcmdlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZShcIi4uL3NvdXJjZS9saWdodGluZ1wiKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZShcIi4uL3NvdXJjZS9wb3NpdGlvblwiKTtcblxuY29uc3QgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gPSBwb3NpdGlvblNvdXJjZTtcblxuY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZShcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIiksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIik7XG5cbmNvbnN0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZShcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCIpO1xuXG5jbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZShcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIiksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi4vLi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCIpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZShcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCIpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIik7XG5cbmNvbnN0IHsgc2FtcGxlck5hbWUgfSA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKFwiLi4vc291cmNlL2xpZ2h0aW5nXCIpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKFwiLi4vc291cmNlL3Bvc2l0aW9uXCIpO1xuXG5jb25zdCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtTG9jYXRpb25zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZShcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZShcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCIsXG4gICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxzTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCIsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiLFxuICAgICAgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRzTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lLFxuICByb3RhdGlvbnNNYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCIsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24oZnJhZ21lbnRTaGFkZXJTb3VyY2UsIHtcbiAgc2FtcGxlck5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZShcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZShcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIixcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlclwiKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckRhdGEgPSByZXF1aXJlKFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCIpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKFwiLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCIpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCIpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoXCIuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZVwiKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCIpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiKTtcblxuY29uc3QgeyBwdXNoLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUsXG4gIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5jb25zdCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gPSBjb25zdGFudHM7XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8odmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMCwgbWFyZ2luT2ZFcnJvcik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUsXG4gIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvXG59O1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoXCJuZWNlc3NhcnlcIik7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgcGVybXV0ZSxcbiAgZmxhdHRlbixcbiAgZ3VhcmFudGVlXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpO1xuXG5jb25zdCB7IFZFUlRJQ0VTX0xFTkdUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzLCBsZW5ndGgzIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2xvbmVFZGdlcyhlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4gZWRnZS5jbG9uZSgpKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9ybWFsKG5vcm1hbCkge1xuICBub3JtYWwgPSBub3JtYWwuY2xvbmUoKTtcbiAgXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmNsb25lKCkpO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCkge1xuICBjb25zdCBub3JtYWwgPSBOb3JtYWwuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgYXJlYSA9IGxlbmd0aDMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSAvIDI7XG5cbiAgcmV0dXJuIGFyZWE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbG9uZUVkZ2VzLFxuICBjbG9uZU5vcm1hbCxcbiAgY2xvbmVWZXJ0aWNlcyxcbiAgY2FsY3VsYXRlRWRnZXMsXG4gIGNhbGN1bGF0ZU5vcm1hbCxcbiAgY2FsY3VsYXRlQXJlYVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIik7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb24sXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25cbn07XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKSxcbiAgICAgIG1hdHJpeE1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL21hdHJpeFwiKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL3ZlY3RvclwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uL3V0aWxpdGllcy9hcnJheVwiKTtcblxuY29uc3QgeyBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsIEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9ID0gbWF0cml4TWF0aHM7XG5cbmZ1bmN0aW9uIHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKSB7XG4gIGxldCBzY2FsZU1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHNjYWxlTWF0cml4ID0gc2NhbGU0KHNjYWxlTWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIHNjYWxlTWF0cml4O1xufVxuXG5mdW5jdGlvbiBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cykge1xuICBsZXQgb2Zmc2V0c01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBvZmZzZXRzTWF0cml4ID0gdHJhbnNsYXRlNChvZmZzZXRzTWF0cml4LCBvZmZzZXRzKTtcblxuICByZXR1cm4gb2Zmc2V0c01hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSxcbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgaWYgKHJldmVyc2VPcmRlcikge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG5cbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gIH1cblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLCAgLy8vXG4gICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgIHpOZWFyID0gWl9ORUFSLCAvLy9cbiAgICAgICAgekZhciA9IFpfRkFSLCAvLy9cbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNjYWxlTWF0cml4RnJvbVNjYWxlLFxuICBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbixcbiAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyxcbiAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpO1xuXG5jb25zdCB7IGFkZDMsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sXG4gIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUsXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzXG59O1xuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiKTtcblxuY29uc3QgeyByZWZsZWN0MywgdHJhbnNmb3JtNCB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGNvbnN0IHJldmVyc2VPcmRlciA9IHRydWUsXG4gICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzLCByZXZlcnNlT3JkZXIpLFxuICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KGRpcmVjdGlvbnMsIHJvdGF0aW9uc01hdHJpeCkuc2xpY2UoMCwgMyk7IC8vL1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9uc1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoXCIuLi9tYXRocy92ZWN0b3JcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBhbmdsZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYW5nbGVcIiksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIik7XG5cbmNvbnN0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSA9IGFuZ2xlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSkge1xuICBjb25zdCBtYXNraW5nRWRnZUV4dGVudCA9IG1hc2tpbmdFZGdlLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnQgPSBub3JtYWxpc2UzKG1hc2tpbmdFZGdlRXh0ZW50KSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyA9IHVuaXRNYXNraW5nRWRnZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IChhbmdsZU9mUm90YXRpb25TaW5lID4gMCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2NhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLWNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbixcbiAgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uXG59O1xuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IGExID0gcXVhdGVybmlvbkFbMF0sXG4gICAgICAgIGIxID0gcXVhdGVybmlvbkFbMV0sXG4gICAgICAgIGMxID0gcXVhdGVybmlvbkFbMl0sXG4gICAgICAgIGQxID0gcXVhdGVybmlvbkFbM10sXG4gICAgICAgIGEyID0gcXVhdGVybmlvbkJbMF0sXG4gICAgICAgIGIyID0gcXVhdGVybmlvbkJbMV0sXG4gICAgICAgIGMyID0gcXVhdGVybmlvbkJbMl0sXG4gICAgICAgIGQyID0gcXVhdGVybmlvbkJbM10sXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiKTtcblxuY29uc3QgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbWF0cml4TWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvbWF0cml4XCIpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKFwiLi4vbWF0aHMvdmVjdG9yXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCIpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiKTtcblxuY29uc3QgeyByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGludmVydDIsIGludmVydDMgfSA9IG1hdHJpeE1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHRlbXBWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSB0ZW1wVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLFxuICBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL3ZlY3RvclwiKSxcbiAgICAgIG1hdHJpeE1hdGhzID0gcmVxdWlyZShcIi4uL21hdGhzL21hdHJpeFwiKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvbWF0cml4XCIpO1xuXG5jb25zdCB7IG11bHRpcGx5NCB9ID0gbWF0cml4TWF0aHMsXG4gICAgICB7IHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBvc2VUcmFuc2Zvcm1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRWZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcm90YXRlZFZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiByb3RhdGVkVmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gcm90YXRlZFZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpIHsgIC8vL1xuICBjb25zdCBpbmRleGVzID0gaW5kZXhUdXBsZSwgLy8vXG4gICAgICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlID0gY29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZVZlcnRpY2VzLFxuICB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCIuL3JlYWN0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBcIlJlYWN0XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuIiwiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRlbXBsYXRlVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3RlbXBsYXRlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZmlsZVN5c3RlbVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1pc2NlbGxhbmVvdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvbWlzY2VsbGFuZW91c1wiO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcblx0bGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG5cdGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0dmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuXHR9KTtcblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcblx0bGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG5cdGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcblx0fSk7XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGxhc3QsXG4gIHRhaWwsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcblx0Zm9yd2FyZHNSZWR1Y2UsXG5cdGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2ssIGluZGV4KSA9PiB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5pbXBvcnQgeyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKSB7XG4gIGNvbnN0IGVudHJ5RXhpc3RzID0gZnMuZXhpc3RzU3luYyhlbnRyeVBhdGgpO1xuXG4gIHJldHVybiBlbnRyeUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRmlsZUV4aXN0cyhmaWxlUGF0aCkge1xuICBsZXQgZmlsZUV4aXN0cyA9IGZhbHNlO1xuICBcbiAgY29uc3QgZW50cnlQYXRoID0gZmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcbiAgXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGVudHJ5UGF0aCk7XG4gICAgXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgZmlsZUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmlsZUV4aXN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGlyZWN0b3J5RXhpc3RzKGRpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGVudHJ5UGF0aCA9IGRpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGNoZWNrRW50cnlFeGlzdHMoZW50cnlQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoZW50cnlQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbnRyeUZpbGUoZW50cnlQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhlbnRyeVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGVudHJ5UGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZW50cnlQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZShmaWxlUGF0aCwgZW5jb2RpbmcgPSBcInV0ZjhcIikge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9GaWxlKGZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLmFwcGVuZEZpbGVTeW5jKGZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgoZGlyZWN0b3J5UGF0aCk7XG5cbiAgaWYgKChkaXJlY3RvcnlQYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lICE9PSBcIi5cIikgJiYgKGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgcGFyZW50RGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnREaXJlY3RvcnlFeGlzdHMgPSBjaGVja0RpcmVjdG9yeUV4aXN0cyhwYXJlbnREaXJlY3RvcnlQYXRoKTtcblxuICAgIGlmICghcGFyZW50RGlyZWN0b3J5RXhpc3RzKSB7XG4gICAgICBjcmVhdGVEaXJlY3RvcnkocGFyZW50RGlyZWN0b3J5UGF0aCk7XG4gICAgfVxuICB9XG5cbiAgZnMubWtkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRmlsZShvbGRGaWxlUGF0aCwgbmV3RmlsZVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRGaWxlUGF0aCwgbmV3RmlsZVBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja0VudHJ5RXhpc3RzLFxuICBjaGVja0ZpbGVFeGlzdHMsXG4gIGNoZWNrRGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RmlsZSxcbiAgaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGUsXG4gIHdyaXRlRmlsZSxcbiAgYXBwZW5kVG9GaWxlLFxuICBjcmVhdGVEaXJlY3RvcnksXG4gIHJlbmFtZUZpbGUsXG4gIGdldFN0YXRzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByYyBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL3JjXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvbG9nXCI7XG5pbXBvcnQgb25FVFggZnJvbSBcIi4vbWlzY2VsbGFuZW91cy9vbkVUWFwiO1xuaW1wb3J0IHByb21wdCBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL3Byb21wdFwiO1xuXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2FqYXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2csXG4gIHJjLFxuICBnZXQsXG4gIHBvc3QsXG4gIG9uRVRYLFxuICBwcm9tcHRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgR0VUX01FVEhPRCA9IFwiR0VUXCIsXG4gICAgICBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIGpzb24sIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBwYXJhbWV0ZXJzOyAvLy9cbiAgICBwYXJhbWV0ZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycyksXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgICBpZiAoc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gcmVzcG9uc2VUZXh0OyAvLy9cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soanNvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIik7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgPyBcIiZcIiA6IFwiXCI7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIFwiXCIpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycykge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycyksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gXCJcIikgP1xuICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbmNhdGVuYXRlUGF0aHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3BhdGhcIjtcbmltcG9ydCB7IGNoZWNrRmlsZUV4aXN0cywgcmVhZEZpbGUsIGFwcGVuZFRvRmlsZSwgcmVuYW1lRmlsZSwgZ2V0U3RhdHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuY29uc3QgVFJBQ0UgPSBcIlRSQUNFXCIsXG4gICAgICBERUJVRyA9IFwiREVCVUdcIixcbiAgICAgIElORk8gPSBcIklORk9cIixcbiAgICAgIFdBUk5JTkcgPSBcIldBUk5JTkdcIixcbiAgICAgIEVSUk9SID0gXCJFUlJPUlwiLFxuICAgICAgRkFUQUwgPSBcIkZBVEFMXCI7XG5cbmxldCBsb2dMZXZlbCA9IFdBUk5JTkcsXG4gICAgbG9nRmlsZUJhc2VOYW1lID0gXCJkZWZhdWx0XCIsXG4gICAgbG9nRGlyZWN0b3J5UGF0aCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlT3JFcnJvciwgbGV2ZWwgPSBcIlwiKSB7XG4gIGxldCBwZXJ0aW5lbnRTdGFja01lc3NhZ2VJbmRleCA9IDE7XG5cbiAgY29uc3QgbGV2ZWxzID0gW1xuICAgIFRSQUNFLFxuICAgIERFQlVHLFxuICAgIElORk8sXG4gICAgV0FSTklORyxcbiAgICBFUlJPUixcbiAgICBGQVRBTFxuICBdO1xuXG4gIGlmIChsZXZlbCAhPT0gXCJcIikge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsZXZlbCksXG4gICAgICAgICAgbG9nTGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ICs9IDE7XG5cbiAgICBsZXZlbCA9IGAke2xldmVsfSBgOyAgLy8vXG4gIH1cblxuICBsZXQgZXJyb3IsXG4gICAgICBtZXNzYWdlO1xuXG4gIGlmIChtZXNzYWdlT3JFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgZXJyb3IgPSBtZXNzYWdlT3JFcnJvcjsgLy8vXG5cbiAgICAoeyBtZXNzYWdlIH0gPSBlcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2VPckVycm9yOyAvLy9cblxuICAgIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgY29uc3QgeyBzdGFjayB9ID0gZXJyb3IsXG4gICAgICAgIHN0YWNrTWVzc2FnZXMgPSBzdGFja01lc3NhZ2VzRnJvbVN0YWNrKHN0YWNrKSxcbiAgICAgICAgcGVydGluZW50U3RhY2tNZXNzYWdlID0gc3RhY2tNZXNzYWdlc1twZXJ0aW5lbnRTdGFja01lc3NhZ2VJbmRleF0sXG4gICAgICAgIHN0YWNrTWVzc2FnZSA9IHBlcnRpbmVudFN0YWNrTWVzc2FnZSwgLy8vXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpLFxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpLFxuICAgICAgICBsaW5lTnVtYmVyID0gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbG9nTWVzc2FnZSA9IGAke2xldmVsfSR7Y3VycmVudERhdGVBbmRUaW1lU3RyaW5nfSAke2ZpbGVQYXRofSgke2xpbmVOdW1iZXJ9KSAke21lc3NhZ2V9YDtcblxuICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcblxuICBpZiAobG9nRGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHJvbGxPdmVyTG9nRmlsZSgpO1xuXG4gICAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gYCR7bG9nTWVzc2FnZX1cXG5gO1xuXG4gICAgYXBwZW5kVG9GaWxlKGxvZ0ZpbGVQYXRoLCBsb2dGaWxlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbG9nTWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gdHJhY2UobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFRSQUNFKTsgfVxuXG5mdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgREVCVUcpOyB9XG5cbmZ1bmN0aW9uIGluZm8obWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIElORk8pOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFdBUk5JTkcpOyB9XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBFUlJPUik7IH1cblxuZnVuY3Rpb24gZmF0YWwobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEZBVEFMKTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkgeyBsb2dMZXZlbCA9IGxldmVsOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpIHsgbG9nRmlsZUJhc2VOYW1lID0gZmlsZUJhc2VOYW1lOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkgeyBsb2dEaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dPcHRpb25zKGxvZ09wdGlvbnMpIHtcbiAgY29uc3QgeyBsZXZlbCwgZmlsZUJhc2VOYW1lLCBkaXJlY3RvcnlQYXRoIH0gPSBsb2dPcHRpb25zO1xuXG4gIHNldExvZ0xldmVsKGxldmVsKTtcblxuICBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKTtcblxuICBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlQ29udGVudCgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlQ29udGVudCA9IHJlYWRGaWxlKGxvZ0ZpbGVQYXRoKTtcblxuICByZXR1cm4gbG9nRmlsZUNvbnRlbnQ7XG59XG5cbk9iamVjdC5hc3NpZ24obG9nLCB7XG4gIFRSQUNFLFxuICBERUJVRyxcbiAgSU5GTyxcbiAgV0FSTklORyxcbiAgRVJST1IsXG4gIEZBVEFMLFxuICB0cmFjZSxcbiAgZGVidWcsXG4gIGluZm8sXG4gIHdhcm5pbmcsXG4gIGVycm9yLFxuICBmYXRhbCxcbiAgc2V0TG9nTGV2ZWwsXG4gIHNldExvZ0ZpbGVCYXNlTmFtZSxcbiAgc2V0TG9nRGlyZWN0b3J5UGF0aCxcbiAgc2V0TG9nT3B0aW9ucyxcbiAgZ2V0TG9nRmlsZUNvbnRlbnRcbn0pO1xuXG5mdW5jdGlvbiBnZXRMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgbG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LmxvZ2AsXG4gICAgICAgIGxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCBsb2dGaWxlTmFtZSk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRSb2xsZWRPdmVyTG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlU3RyaW5nID0gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS4ke2N1cnJlbnREYXRlU3RyaW5nfS5sb2dgLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJvbGxlZE92ZXJMb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUxhc3RNb2RpZmllZERhdGUoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZVN0YXRzID0gZ2V0U3RhdHMobG9nRmlsZVBhdGgpLFxuICAgICAgICB7IG10aW1lIH0gPSBsb2dGaWxlU3RhdHMsXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUobXRpbWUpOyAgLy8vXG5cbiAgcmV0dXJuIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlO1xufVxuXG5mdW5jdGlvbiByb2xsT3ZlckxvZ0ZpbGUoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhsb2dGaWxlUGF0aCk7XG5cbiAgaWYgKCFsb2dGaWxlRXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlID0gaXNEYXRlQ3VycmVudERhdGUobG9nRmlsZUxhc3RNb2RpZmllZERhdGUpO1xuXG4gIGlmICghbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSkge1xuICAgIGNvbnN0IHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpO1xuXG4gICAgcmVuYW1lRmlsZShsb2dGaWxlUGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RhdGVDdXJyZW50RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGN1cnJlbnREYXRlU3RyaW5nID0gY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGRhdGVDdXJyZW50RGF0ZSA9IChkYXRlU3RyaW5nID09PSBjdXJyZW50RGF0ZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGVDdXJyZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgaG91cnMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgbWludXRlcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgICAgIHNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRTZWNvbmRzKCksIDIpLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMyksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc30uJHttaWxsaXNlY29uZHN9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGFja01lc3NhZ2VzRnJvbVN0YWNrKHN0YWNrKSB7XG4gIGNvbnN0IHN0YWNrTWVzc2FnZXMgPSBbXSxcbiAgICAgICAgc3RhY2tMaW5lcyA9IHN0YWNrLnNwbGl0KC9cXHJcXG58XFxuLyk7XG5cbiAgbGV0IHN0YWNrTWVzc2FnZSA9IFwiXCI7XG5cbiAgc3RhY2tMaW5lcy5mb3JFYWNoKChzdGFja0xpbmUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gL15cXHMqYXQuKi8udGVzdChzdGFja0xpbmUpO1xuXG4gICAgc3RhY2tNZXNzYWdlID0gKHN0YWNrTWVzc2FnZSA9PT0gXCJcIikgP1xuICAgICAgICAgICAgICAgICAgICAgIHN0YWNrTGluZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtzdGFja01lc3NhZ2V9XFxuJHtzdGFja0xpbmV9YDtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBzdGFja01lc3NhZ2VzLnB1c2goc3RhY2tNZXNzYWdlKTtcblxuICAgICAgc3RhY2tNZXNzYWdlID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdGFja01lc3NhZ2VzO1xufVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLyhcXC8uKyk6XFxkKzpcXGQrL20pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aCA9IHBhdGgucmVzb2x2ZShcIi5cIiksICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggKyAxLCAgLy8vXG4gICAgICAgIGZpbGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aC5zdWJzdHIoc3RhcnQpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLzooXFxkKykvbSksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBsaW5lTnVtYmVyID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBsaW5lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwYWRTdGFydFdpdGhaZXJvZXMoc3RyaW5nLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3QgcGFkU3RyaW5nID0gXCIwXCIsXG4gICAgICAgIHBhZGRlZFN0cmluZyA9IHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgbGV0IHBhZGRpbmcgPSBcIlwiO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YXJnZXRMZW5ndGg7IGluZGV4KyspIHtcbiAgICBwYWRkaW5nICs9IHBhZFN0cmluZztcbiAgfVxuXG4gIGNvbnN0IHBhZGRlZFN0cmluZyA9IGAke3BhZGRpbmd9JHtzdHJpbmd9YC5zdWJzdHIoLXRhcmdldExlbmd0aCk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uRVRYKGhhbmRsZXIpIHtcbiAgY29uc3QgeyBzdGRpbiB9ID0gcHJvY2VzcyxcbiAgICAgICAgeyBzZXRSYXdNb2RlIH0gPSBzdGRpbjtcblxuICBpZiAoc2V0UmF3TW9kZSkge1xuICAgIGNvbnN0IHJhd01vZGUgPSB0cnVlLFxuICAgICAgICAgIGVuY29kaW5nID0gXCJ1dGY4XCI7XG5cbiAgICBzdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuICAgIHN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHN0ZGluLnJlc3VtZSgpO1xuXG4gICAgc3RkaW4uYWRkTGlzdGVuZXIoXCJkYXRhXCIsIGRhdGFIYW5kbGVyKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoXCJkYXRhXCIsIGRhdGFIYW5kbGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGNoYXJhY3Rlcikge1xuICAgIGlmIChjaGFyYWN0ZXIgPT09IEVUWF9DSEFSQUNURVIpIHtcbiAgICAgIGhhbmRsZXIoKTtcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb25FVFggZnJvbSBcIi4vb25FVFhcIjtcblxuaW1wb3J0IHsgd2hpbHN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuY29uc3QgeyBzdGRpbiwgc3Rkb3V0LCBleGl0IH0gPSBwcm9jZXNzO1xuXG5jb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpLFxuICAgICAgTElORV9GRUVEX0NIQVJBQ1RFUiA9IFwiXFxuXCIsXG4gICAgICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvbXB0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZhbHVlID0gbnVsbCxcbiAgICAgICAgeyBhdHRlbXB0cyA9IDMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgYXR0ZW1wdHMsXG4gICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9O1xuXG4gIHdoaWxzdChhdHRlbXB0LCAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayh2YWx1ZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhdHRlbXB0KG5leHQsIGRvbmUsIGNvbnRleHQpIHtcbiAgbGV0IHsgYXR0ZW1wdHMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgdGVybWluYXRlID0gKGF0dGVtcHRzLS0gPT09IDApO1xuICBcbiAgaWYgKHRlcm1pbmF0ZSkge1xuICAgIGRvbmUoKTtcbiAgICBcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IG9wdGlvbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHsgaGlkZGVuID0gZmFsc2UsXG4gICAgICAgICAgZW5jb2RpbmcgPSBcInV0ZjhcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBpbml0aWFsVmFsdWUgPSBcIlwiLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24gfSA9IG9wdGlvbnM7XG5cbiAgaW5wdXQoZGVzY3JpcHRpb24sIGluaXRpYWxWYWx1ZSwgZW5jb2RpbmcsIGhpZGRlbiwgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0aW9uRnVuY3Rpb24gPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QodmFsdWUpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHNcbiAgICAgIH0pO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlucHV0KGRlc2NyaXB0aW9uLCBpbml0aWFsVmFsdWUsIGVuY29kaW5nLCBoaWRkZW4sIGNhbGxiYWNrKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgIG9mZkVUWCA9IG9uRVRYKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIl5DXCIpO1xuXG4gICAgICAgICAgZXhpdCgpO1xuICAgICAgICB9KTtcblxuICBzdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBzdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gIGlmICghaGlkZGVuKSB7XG4gICAgc3Rkb3V0LndyaXRlKHZhbHVlKTtcbiAgfVxuXG4gIHN0ZGluLnJlc3VtZSgpO1xuXG4gIHN0ZGluLm9uKFwiZGF0YVwiLCBsaXN0ZW5lcik7XG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoY2h1bmspIHtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBjaHVuay50b1N0cmluZyhlbmNvZGluZyk7XG5cbiAgICBzd2l0Y2ggKGNoYXJhY3Rlcikge1xuICAgICAgY2FzZSBMSU5FX0ZFRURfQ0hBUkFDVEVSIDpcbiAgICAgIGNhc2UgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA6XG4gICAgICAgIHN0ZG91dC53cml0ZShMSU5FX0ZFRURfQ0hBUkFDVEVSKTtcblxuICAgICAgICBzdGRpbi5yZW1vdmVMaXN0ZW5lcihcImRhdGFcIiwgbGlzdGVuZXIpO1xuXG4gICAgICAgIHN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgb2ZmRVRYKCk7XG5cbiAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTtcblxuICAgICAgICBzdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzdGRvdXQud3JpdGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YWx1ZSArPSBjaGFyYWN0ZXI7XG5cbiAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICBzdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgICBzdGRvdXQuY3Vyc29yVG8oMCk7XG5cbiAgICAgICAgICBzdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgc3Rkb3V0LndyaXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHdyaXRlRmlsZSwgY2hlY2tGaWxlRXhpc3RzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtXCI7XG5cbmxldCBwYXRoUmVzb2x2ZXIgPSBwYXRoLnJlc29sdmUsXG4gICAgYmFzZUV4dGVuc2lvbiA9IFwiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJjKGVudmlyb25tZW50TmFtZU9yQXJndiA9IG51bGwpIHtcbiAgbGV0IGVudmlyb25tZW50LFxuICAgICAgZW52aXJvbm1lbnROYW1lLFxuICAgICAgZW52aXJvbm1lbnROYW1lT3JBcmd2QXJndiA9IChlbnZpcm9ubWVudE5hbWVPckFyZ3YgaW5zdGFuY2VvZiBBcnJheSk7XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZU9yQXJndkFyZ3YpIHtcbiAgICBjb25zdCBhcmd2ID0gZW52aXJvbm1lbnROYW1lT3JBcmd2OyAvLy9cblxuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpO1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZU9yQXJndjsgIC8vL1xuICB9XG5cbiAgY29uc3QganNvbiA9IHJlYWRSQ0ZpbGUoKSxcbiAgICAgICAgeyBlbnZpcm9ubWVudHMgfSA9IGpzb247XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0RW52aXJvbm1lbnQgPSBmaXJzdChlbnZpcm9ubWVudHMpO1xuXG4gICAgZW52aXJvbm1lbnQgPSBmaXJzdEVudmlyb25tZW50OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50cy5maW5kKChlbnZpcm9ubWVudCkgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIGZvdW5kID0gKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSk7XG5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRSQ0ZpbGUoKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVSQ0ZpbGVQYXRoKSxcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IGFic29sdXRlUkNGaWxlUGF0aCA9IGFic29sdXRlUkNGaWxlUGF0aEZyb21Ob3RoaW5nKCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgYFxcdGApO1xuXG4gIHdyaXRlRmlsZShhYnNvbHV0ZVJDRmlsZVBhdGgsIGZpbGVDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUkNGaWxlKGFkZGVkUHJvcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIGRlbGV0ZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpID0+IHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrUkNGaWxlRXhpc3RzKCkge1xuICBjb25zdCBhYnNvbHV0ZVJDRmlsZVBhdGggPSBhYnNvbHV0ZVJDRmlsZVBhdGhGcm9tTm90aGluZygpLFxuICAgICAgICByY0ZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoYWJzb2x1dGVSQ0ZpbGVQYXRoKTtcblxuICByZXR1cm4gcmNGaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWN1b3VzUkNGaWxlKCkge1xuICBjb25zdCBqc29uID0ge1xuICAgIFwiZW52aXJvbm1lbnRzXCI6IFtcbiAgICAgIHt9XG4gICAgXVxuICB9O1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pO1xufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24ocmNCYXNlRXh0ZW5zaW9uKSB7IGJhc2VFeHRlbnNpb24gPSByY0Jhc2VFeHRlbnNpb247IH1cblxuZnVuY3Rpb24gc2V0UkNQYXRoUmVzb2x2ZXIocmNQYXRoUmVzb2x2ZXIpIHsgcGF0aFJlc29sdmVyID0gcmNQYXRoUmVzb2x2ZXI7IH1cblxuT2JqZWN0LmFzc2lnbihyYywge1xuICByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZSxcbiAgdXBkYXRlUkNGaWxlLFxuICBjaGVja1JDRmlsZUV4aXN0cyxcbiAgY3JlYXRlVmFjdW91c1JDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uLFxuICBzZXRSQ1BhdGhSZXNvbHZlclxufSk7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKChhcmd1bWVudCkgPT4geyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC8tLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cblxuZnVuY3Rpb24gYWJzb2x1dGVSQ0ZpbGVQYXRoRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7YmFzZUV4dGVuc2lvbn1yY2AsXG4gICAgICAgIGFic29sdXRlUkNGaWxlUGF0aCA9IHBhdGhSZXNvbHZlcihmaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGFic29sdXRlUkNGaWxlUGF0aDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLFwiXCIpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoXCIvXCIpLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVhZEZpbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmlsZShmaWxlUGF0aCwgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgcGFyc2VkQ29udGVudCA9IHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzLCByZWdleCk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncywgcmVnZXgpIHtcbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpLFxuICAgICAgICBwYXJzZWRMaW5lcyA9IHBhcnNlTGluZXMobGluZXMsIGFyZ3MsIHJlZ2V4KSxcbiAgICAgICAgcGFyc2VkQ29udGVudCA9IHBhcnNlZExpbmVzLmpvaW4oXCJcXG5cIik7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmUobGluZSwgYXJncywgcmVnZXggPSAvXFwkeyguKz8pfS9nKSB7XG4gIGNvbnN0IHBhcnNlZExpbmUgPSBsaW5lLnJlcGxhY2UocmVnZXgsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCBwYXJzZWRUb2tlbiA9IHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpO1xuXG4gICAgcmV0dXJuIHBhcnNlZFRva2VuO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwYXJzZUZpbGUsXG4gIHBhcnNlQ29udGVudCxcbiAgcGFyc2VMaW5lXG59O1xuXG5mdW5jdGlvbiBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzLCByZWdleCkge1xuICBjb25zdCBwYXJzZWRMaW5lcyA9IGxpbmVzLm1hcCgobGluZSkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZExpbmUgPSBwYXJzZUxpbmUobGluZSwgYXJncywgcmVnZXgpO1xuXG4gICAgcmV0dXJuIHBhcnNlZExpbmU7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lcztcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbih0b2tlbiwgYXJncykge1xuICBsZXQgcGFyc2VkVG9rZW4gPSBcIlwiO1xuXG4gIGlmIChhcmdzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgIHBhcnNlZFRva2VuID0gYXJnc1t0b2tlbl07XG4gIH1cblxuICByZXR1cm4gcGFyc2VkVG9rZW47XG59XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdfQ==
