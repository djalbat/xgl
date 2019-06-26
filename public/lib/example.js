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

},{"./lib/canvas":2,"./lib/element/camera":5,"./lib/element/camera/design":6,"./lib/element/camera/gaming":7,"./lib/element/canvas":8,"./lib/element/canvas/coloured":9,"./lib/element/canvas/textured":11,"./lib/element/mask":12,"./lib/element/part":13,"./lib/element/scene":14,"./lib/xgl":91}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var depthMixin = require('./mixin/depth'),
    colourMixin = require('./mixin/colour'),
    shaderMixin = require('./mixin/shader'),
    bufferMixin = require('./mixin/buffer'),
    matrixMixin = require('./mixin/matrix'),
    programMixin = require('./mixin/program'),
    textureMixin = require('./mixin/texture'),
    blendingMixin = require('./mixin/blending');

var Canvas = function () {
  function Canvas() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canvas';

    _classCallCheck(this, Canvas);

    var domElement = domElementFromSelector(selector),
        context = domElement.getContext('webgl');

    if (!context) {
      throw new Error('Unable to initialise the context.');
    }

    this.context = context;

    this.domElement = domElement;

    this.enableDepthTesting(); ///
  }

  _createClass(Canvas, [{
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.height;
    }
  }, {
    key: 'getClientWidth',
    value: function getClientWidth() {
      return this.domElement.clientWidth;
    }
  }, {
    key: 'getClientHeight',
    value: function getClientHeight() {
      return this.domElement.clientHeight;
    }
  }, {
    key: 'getUniformLocation',
    value: function getUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
  }, {
    key: 'getAttributeLocation',
    value: function getAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.setAttribute('width', width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.setAttribute('height', height);
    }
  }, {
    key: 'setViewport',
    value: function setViewport(x, y, width, height) {
      this.context.viewport(x, y, width, height);
    }
  }, {
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
      this.setViewport(0, 0, width, height);
    }
  }, {
    key: 'render',
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
    key: 'drawElements',
    value: function drawElements(start, finish) {
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
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

module.exports = Canvas;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

},{"./mixin/blending":37,"./mixin/buffer":38,"./mixin/colour":39,"./mixin/depth":40,"./mixin/matrix":41,"./mixin/program":42,"./mixin/shader":43,"./mixin/texture":44}],3:[function(require,module,exports){
'use strict';

var Z_FAR = 1000,
    Z_NEAR = 1,
    MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL',
    DELTA_SCALAR = 1.25,
    ANGLES_SCALAR = 0.01,
    OFFSET_SCALAR = 0.25,
    CTRL_KEY_CODE = 17,
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
  ANGLES_SCALAR: ANGLES_SCALAR,
  OFFSET_SCALAR: OFFSET_SCALAR,
  CTRL_KEY_CODE: CTRL_KEY_CODE,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  VERTICES_LENGTH: VERTICES_LENGTH,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEFAULT_MARGIN_OF_ERROR: DEFAULT_MARGIN_OF_ERROR,
  DEGREES_TO_RADIANS_SCALAR: DEGREES_TO_RADIANS_SCALAR,
  FIELD_OF_VIEW: FIELD_OF_VIEW
};

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
    }
  }, {
    key: 'setChildElements',
    value: function setChildElements(childElements) {
      this.childElements = childElements;
    }
  }, {
    key: 'assignContext',
    value: function assignContext(names, thenDelete) {
      var _this = this;

      var argumentsLength = arguments.length;

      if (argumentsLength === 1) {
        var firstArgument = first(arguments);

        if (typeof firstArgument === 'boolean') {
          names = Object.keys(this.context);

          thenDelete = firstArgument;
        } else {
          thenDelete = true;
        }
      }

      if (argumentsLength === 0) {
        names = Object.keys(this.context);

        thenDelete = true;
      }

      names.forEach(function (name) {
        var value = _this.context[name],
            propertyName = name,
            ///
        descriptor = {
          value: value
        };

        Object.defineProperty(_this, propertyName, descriptor);

        if (thenDelete) {
          delete _this.context[name];
        }
      });
    }
  }, {
    key: 'updateContext',
    value: function updateContext(childElement) {
      var context = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

      this.context = Object.assign({}, this.context, context);

      delete childElement.context;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))();

      applyProperties(element, properties);

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function applyProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements || [];

  element.setChildElements(childElements);

  childElements.forEach(function (childElement) {
    return element.updateContext(childElement);
  });
}

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    KeyEvents = require('../miscellaneous/keyEvents'),
    MouseEvents = require('../miscellaneous/mouseEvents');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(keyEvents, mouseEvents, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.keyEvents = keyEvents;

    _this.mouseEvents = mouseEvents;

    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getUpdateHandler',
    value: function getUpdateHandler() {
      return this.updateHandler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(canvas) {
      this.update(canvas);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          shiftKeyHandler = this.shiftKeyHandler.bind(this),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);

      this.keyEvents = keyEvents;

      this.mouseEvents = mouseEvents;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var onUpdate = this.onUpdate.bind(this),
          forceUpdate = this.forceUpdate.bind(this);

      return {
        onUpdate: onUpdate,
        forceUpdate: forceUpdate
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var keyEvents = null,
          ///
      mouseEvents = null,
          ///
      updateHandler = null,
          ///
      camera = Element.fromProperties.apply(Element, [Class, properties, keyEvents, mouseEvents, updateHandler].concat(remainingArguments));

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":4,"../miscellaneous/keyEvents":31,"../miscellaneous/mouseEvents":33}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Zoom = require('../../miscellaneous/zoom'),
    Camera = require('../camera'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    zero3 = vectorMaths.zero3,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromDistance = matrixUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialOffset = zero3(),
    defaultInitialDistance = 5;

var DesignCamera = function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(keyEvents, mouseEvents, updateHandler, pan, tilt, zoom) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, keyEvents, mouseEvents, updateHandler));

    _this.pan = pan;

    _this.tilt = tilt;

    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.pan.resetPreviousOffsets();

        this.pan.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousAngles();

        this.tilt.resetPreviousMouseCoordinates();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.pan.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      if (shiftKeyDown) {
        this.pan.resetPreviousOffsets();

        this.pan.resetPreviousMouseCoordinates();
      }

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.pan.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.pan.updateOffset(this.tilt);
        } else {
          this.tilt.updateAngles();
        }

        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.zoom.updateDistance(delta);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          angles = this.tilt.getAngles(),
          offsets = this.pan.getOffsets(),
          distance = this.zoom.getDistance(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromDistance(distance),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffset,
          initialOffset = _properties$initialOf === undefined ? defaultInitialOffset : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
          initialOffsets = initialOffset,
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

},{"../../maths/vector":29,"../../miscellaneous/pan":34,"../../miscellaneous/tilt":35,"../../miscellaneous/zoom":36,"../../utilities/matrix":83,"../camera":5}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    Location = require('../../miscellaneous/location'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera(keyEvents, mouseEvents, updateHandler, tilt, location) {
    _classCallCheck(this, GamingCamera);

    var _this = _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).call(this, keyEvents, mouseEvents, updateHandler));

    _this.tilt = tilt;

    _this.location = location;
    return _this;
  }

  _createClass(GamingCamera, [{
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      if (shiftKeyDown) {
        this.location.resetPreviousMouseCoordinates();
      } else {
        this.tilt.resetPreviousMouseCoordinates();

        this.tilt.resetPreviousAngles();
      }
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates, mouseDown, canvas) {
      this.tilt.resetPreviousAngles();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates, mouseDown, canvas) {
      this.location.resetPreviousMouseCoordinates();

      this.tilt.resetPreviousMouseCoordinates();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown();

      this.location.resetPreviousMouseCoordinates();

      this.location.setMouseCoordinates(mouseCoordinates);

      this.tilt.setMouseCoordinates(mouseCoordinates);

      if (mouseDown) {
        if (shiftKeyDown) {
          this.location.updateXYOffset(mouseCoordinates, this.tilt);
        } else {
          this.tilt.updateAngles();
        }

        this.update(canvas);
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta, canvas) {
      this.location.updateZOffset(delta, this.tilt);

      this.update(canvas);
    }
  }, {
    key: 'update',
    value: function update(canvas) {
      var width = canvas.getWidth(),
          height = canvas.getHeight(),
          offsets = this.location.getOffsets(),
          angles = this.tilt.getAngles(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix),
          updateHandler = this.getUpdateHandler();

      updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
          _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          flipped = true,
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          location = Location.fromInitialPosition(initialPosition),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, tilt, location);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;

},{"../../maths/vector":29,"../../miscellaneous/location":32,"../../miscellaneous/tilt":35,"../../utilities/matrix":83,"../camera":5}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    transformUtilities = require('../utilities/transform');

var composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask, hidden) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;

    _this.hidden = hidden;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getMask',
    value: function getMask() {
      return this.mask;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'applyMask',
    value: function applyMask(mask) {
      if (mask) {
        var element = this; ///

        mask.maskElement(element);
      }
    }
  }, {
    key: 'applyTransform',
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
    key: 'createFacets',
    value: function createFacets(hidden) {
      var childElements = this.getChildElements();

      hidden = hidden || this.hidden; ///

      childElements.forEach(function (childElement) {
        return childElement.createFacets(hidden);
      });

      return hidden;
    }
  }, {
    key: 'amendFacets',
    value: function amendFacets() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });

      this.applyTransform(this.transform);

      this.applyMask(this.mask);
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var _properties$scale = properties.scale,
          scale = _properties$scale === undefined ? null : _properties$scale,
          _properties$rotations = properties.rotations,
          rotations = _properties$rotations === undefined ? null : _properties$rotations,
          _properties$position = properties.position,
          position = _properties$position === undefined ? null : _properties$position,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          transform = composeTransform(scale, rotations, position),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":4,"../utilities/transform":89}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredFacet = require('../../primitive/facet/coloured'),
    CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform, facets, mask, hidden));

    _this.coordinates = coordinates;

    _this.indexes = indexes;

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'createFacets',
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'createFacets', this).call(this, hidden); ///

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
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      colourRenderer.addFacets(facets);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'addFacets', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, colour].concat(remainingArguments));
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/coloured":48}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var FunctionCanvasElement = function (_CanvasElement) {
  _inherits(FunctionCanvasElement, _CanvasElement);

  function FunctionCanvasElement() {
    _classCallCheck(this, FunctionCanvasElement);

    return _possibleConstructorReturn(this, (FunctionCanvasElement.__proto__ || Object.getPrototypeOf(FunctionCanvasElement)).apply(this, arguments));
  }

  _createClass(FunctionCanvasElement, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var functionElement = CanvasElement.fromProperties(FunctionCanvasElement, properties);

      return functionElement;
    }
  }]);

  return FunctionCanvasElement;
}(CanvasElement);

module.exports = FunctionCanvasElement;

},{"../../element/canvas":8}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../primitive/facet/textured'),
    CanvasElement = require('../../element/canvas');

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform, facets, mask, hidden));

    _this.coordinates = coordinates;

    _this.indexes = indexes;

    _this.imageName = imageName;

    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'createFacets',
    value: function createFacets(hidden) {
      var _this2 = this;

      hidden = _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'createFacets', this).call(this, hidden); ///

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
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var facets = this.getFacets();

      textureRenderer.addFacets(facets);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'addFacets', this).call(this, colourRenderer, textureRenderer);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      return CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, coordinates, indexes, imageName, textureCoordinates].concat(remainingArguments));
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":8,"../../primitive/facet/textured":49}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../primitive/maskingFacet'),
    arrayUtilities = require('../utilities/array');

var push = arrayUtilities.push;

var Mask = function (_Element) {
  _inherits(Mask, _Element);

  function Mask(hidden) {
    _classCallCheck(this, Mask);

    var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this));

    _this.hidden = hidden;
    return _this;
  }

  _createClass(Mask, [{
    key: 'retrieveMaskingFacets',
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
    key: 'maskElement',
    value: function maskElement(element) {
      var maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

      _maskElement(element, maskingFacets);

      childElements.forEach(function (childElement) {
        return _maskElement(childElement, maskingFacets);
      });
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
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

},{"../element":4,"../primitive/maskingFacet":50,"../utilities/array":80}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    ImagesTextureRenderer = require('../renderer/texture/images'),
    ImageMapTextureRenderer = require('../renderer/texture/imageMap');

var Part = function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

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
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$images = properties.images,
          images = _properties$images === undefined ? null : _properties$images,
          _properties$imageMap = properties.imageMap,
          imageMap = _properties$imageMap === undefined ? null : _properties$imageMap,
          _properties$imageName = properties.imageNames,
          imageNames = _properties$imageName === undefined ? null : _properties$imageName,
          _properties$imageTili = properties.imageTiling,
          imageTiling = _properties$imageTili === undefined ? false : _properties$imageTili,
          _properties$imageMapJ = properties.imageMapJSON,
          imageMapJSON = _properties$imageMapJ === undefined ? null : _properties$imageMapJ,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;

},{"../element":4,"../renderer/colour":59,"../renderer/texture/imageMap":76,"../renderer/texture/images":77}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Element = require('../element');

var asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach;

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'onResize',
    value: function onResize(resizeHandler) {
      window.onresize = resizeHandler;
    }
  }, {
    key: 'resizeHandler',
    value: function resizeHandler() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);

      this.forceUpdate(this.canvas);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }, {
    key: 'render',
    value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.childElements.forEach(function (childElement) {
        return childElement.render(_this2.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

      this.assignContext();

      this.onResize(resizeHandler);

      this.onUpdate(updateHandler);

      forEach(childElements, function (childElement, next, done, context, index) {
        var childElementsLength = childElements.length,
            progress = (index + 1) / childElementsLength;

        childElement.initialise(canvas);

        defer(function () {
          update && update(progress); ///

          next();
        });
      }, function () {
        _this3.resizeHandler(); ///

        done && done(); ///
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          update = properties.update,
          done = properties.done,
          scene = Element.fromProperties(Scene, properties, canvas);


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

},{"../element":4,"necessary":93}],15:[function(require,module,exports){
'use strict';

var cubeExample = require('./example/cube'),
    simpleExample = require('./example/simple'),
    maskingExample = require('./example/masking'),
    pyramidExample = require('./example/pyramid'),
    tilingExample = require('./example/tiling');

var example = window.location.search.substring(1); ///

switch (example) {
  case 'simple':
    simpleExample();
    break;

  case 'cube':
    cubeExample();
    break;

  case 'masking':
    maskingExample();
    break;

  case 'pyramid':
    pyramidExample();
    break;

  case 'tiling':
    tilingExample();
    break;
}

},{"./example/cube":16,"./example/masking":24,"./example/pyramid":25,"./example/simple":26,"./example/tiling":27}],16:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Cube = require('./element/cube');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;


var canvas = new Canvas();

var cubeExample = function cubeExample() {
	return React.createElement(
		Scene,
		{ canvas: canvas },
		React.createElement(
			Part,
			null,
			React.createElement(Cube, { colour: [0, 1, 0] })
		),
		React.createElement(DesignCamera, null)
	);
};

module.exports = cubeExample;

},{"../../index":1,"./element/cube":18}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xgl = require('../../../index'); ///

var ColouredCanvasElement = xgl.ColouredCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultColour = [1, 0, 0];

var ColouredSquare = function (_ColouredCanvasElemen) {
  _inherits(ColouredSquare, _ColouredCanvasElemen);

  function ColouredSquare() {
    _classCallCheck(this, ColouredSquare);

    return _possibleConstructorReturn(this, (ColouredSquare.__proto__ || Object.getPrototypeOf(ColouredSquare)).apply(this, arguments));
  }

  _createClass(ColouredSquare, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredSquare = ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);


      return colouredSquare;
    }
  }]);

  return ColouredSquare;
}(ColouredCanvasElement);

module.exports = ColouredSquare;

},{"../../../index":1}],18:[function(require,module,exports){
'use strict';

var Face = require('./face');

var defaultColour = [1, 1, 0];

var Cube = function Cube(properties) {
  var _properties$colour = properties.colour,
      colour = _properties$colour === undefined ? defaultColour : _properties$colour;


  return [React.createElement(Face, { colour: colour, rotations: [0, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [+90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, +90, 0] }), React.createElement(Face, { colour: colour, rotations: [180, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [-90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, -90, 0] })];
};

module.exports = Cube;

},{"./face":19}],19:[function(require,module,exports){
'use strict';

var ColouredSquare = require('./colouredSquare');

var Face = function Face(properties) {
  var colour = properties.colour;


  return React.createElement(ColouredSquare, { colour: colour, position: [-0.5, -0.5, +0.5] });
};

module.exports = Face;

},{"./colouredSquare":17}],20:[function(require,module,exports){
'use strict';

var Side = require('./side');

var Pyramid = function Pyramid(properties) {
  return [React.createElement(Side, null), React.createElement(Side, { rotations: [0, 90, 0] }), React.createElement(Side, { rotations: [0, 180, 0] }), React.createElement(Side, { rotations: [0, 270, 0] })];
};

module.exports = Pyramid;

},{"./side":21}],21:[function(require,module,exports){
'use strict';

var TexturedTriangle = require('./texturedTriangle');

var Side = function Side(properties) {
  return React.createElement(TexturedTriangle, { scale: [1, 1 / Math.sqrt(2), 1], position: [-0.5, 0, 0.5], rotations: [-45, 0, 0] });
};

module.exports = Side;

},{"./texturedTriangle":23}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xgl = require('../../../index'); ///

var TexturedCanvasElement = xgl.TexturedCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0]],
    indexes = [[0, 1, 3], [3, 2, 0]],
    defaultImageName = "plaster.jpg",
    defaultTextureCoordinates = [[[0, 0], [2, 0], [2, 2]], [[2, 2], [0, 2], [0, 0]]];

var TexturedQuadrangle = function (_TexturedCanvasElemen) {
  _inherits(TexturedQuadrangle, _TexturedCanvasElemen);

  function TexturedQuadrangle() {
    _classCallCheck(this, TexturedQuadrangle);

    return _possibleConstructorReturn(this, (TexturedQuadrangle.__proto__ || Object.getPrototypeOf(TexturedQuadrangle)).apply(this, arguments));
  }

  _createClass(TexturedQuadrangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === undefined ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);


      return texturedQuadrangle;
    }
  }]);

  return TexturedQuadrangle;
}(TexturedCanvasElement);

module.exports = TexturedQuadrangle;

},{"../../../index":1}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var xgl = require('../../../index'); ///

var TexturedCanvasElement = xgl.TexturedCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [0.5, 1, 0]],
    indexes = [[0, 1, 2]],
    defaultImageName = "stripes.jpg",
    defaultTextureCoordinates = [[[0, 0], [1, 0], [0.5, 1]]];

var TexturedTriangle = function (_TexturedCanvasElemen) {
  _inherits(TexturedTriangle, _TexturedCanvasElemen);

  function TexturedTriangle() {
    _classCallCheck(this, TexturedTriangle);

    return _possibleConstructorReturn(this, (TexturedTriangle.__proto__ || Object.getPrototypeOf(TexturedTriangle)).apply(this, arguments));
  }

  _createClass(TexturedTriangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === undefined ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);


      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(TexturedCanvasElement);

module.exports = TexturedTriangle;

},{"../../../index":1}],24:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Cube = require('./element/cube');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Mask = xgl.Mask,
    Part = xgl.Part,
    GamingCamera = xgl.GamingCamera;


var canvas = new Canvas();

var maskingExample = function maskingExample() {
  var SmallCube = function SmallCube(properties) {
    return React.createElement(Cube, { scale: [1 / 4, 1 / 4, 1 / 4] });
  },
      smallCubeMask = React.createElement(
    Mask,
    null,
    React.createElement(SmallCube, null)
  ),
      MediumCube = function MediumCube(properties) {
    return React.createElement(Cube, { scale: [1 / 2, 1 / 2, 1 / 2], mask: smallCubeMask });
  },
      mediumCubeMask = React.createElement(
    Mask,
    null,
    React.createElement(MediumCube, null)
  ),
      LargeCube = function LargeCube(properties) {
    return React.createElement(Cube, { mask: mediumCubeMask });
  };

  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(LargeCube, null)
    ),
    React.createElement(GamingCamera, null)
  );
};

module.exports = maskingExample;

},{"../../index":1,"./element/cube":18}],25:[function(require,module,exports){
'use strict';

var xgl = require('../../index'); ///

var Pyramid = require('./element/pyramid'),
    configuration = require('../miscellaneous/configuration');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;


var canvas = new Canvas();

var pyramidExample = function pyramidExample() {
  preloadImageMap(function (imageMap) {
    var imageMapJSON = configuration.imageMapJSON;


    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(
        Part,
        { imageMap: imageMap, imageMapJSON: imageMapJSON },
        React.createElement(Pyramid, null)
      ),
      React.createElement(DesignCamera, null)
    );
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
'use strict';

var xgl = require('../../index'); ///

var ColouredSquare = require('./element/colouredSquare');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    DesignCamera = xgl.DesignCamera;


var canvas = new Canvas();

var simpleExample = function simpleExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(ColouredSquare, { colour: [0, 0, 1] })
    ),
    React.createElement(DesignCamera, null)
  );
};

module.exports = simpleExample;

},{"../../index":1,"./element/colouredSquare":17}],27:[function(require,module,exports){
'use strict';

var xgl = require('../../index'),
    ///
necessary = require('necessary');

var configuration = require('../miscellaneous/configuration'),
    ColouredSquare = require('./element/colouredSquare'),
    TexturedQuadrangle = require('./element/texturedQuadrangle');

var Canvas = xgl.Canvas,
    Scene = xgl.Scene,
    Part = xgl.Part,
    Mask = xgl.Mask,
    DesignCamera = xgl.DesignCamera,
    asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach;


var canvas = new Canvas(),
    mask = React.createElement(
  Mask,
  null,
  React.createElement(ColouredSquare, { scale: [0.25, 0.25, 1], position: [0.125, 0.125, 0] })
);

var tilingExample = function tilingExample() {
  var imageNames = configuration.imageNames,
      imageDirectoryURI = configuration.imageDirectoryURI;


  preloadImages(imageNames, imageDirectoryURI, function (images) {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(
        Part,
        { images: images, imageNames: imageNames, imageTiling: true },
        React.createElement(TexturedQuadrangle, { position: [0, 0, 0], imageName: 'floorboards.jpg', mask: mask }),
        React.createElement(TexturedQuadrangle, { position: [-0.5, -0.5, -0.5], imageName: 'paving.jpg', mask: mask })
      ),
      React.createElement(DesignCamera, null)
    );
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
        src = imageDirectoryURI + '/' + imageName;

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

},{"../../index":1,"../miscellaneous/configuration":30,"./element/colouredSquare":17,"./element/texturedQuadrangle":22,"necessary":93}],28:[function(require,module,exports){
'use strict';

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
'use strict';

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
'use strict';

module.exports = window.__configuration__; ///

},{}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlersMap, ctrlKeyDown, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlersMap = handlersMap;
    this.ctrlKeyDown = ctrlKeyDown;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: 'isCtrlKeyDown',
    value: function isCtrlKeyDown() {
      return this.ctrlKeyDown;
    }
  }, {
    key: 'isShiftKeyDown',
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: 'keyUpEventListener',
    value: function keyUpEventListener(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyUpEventListener();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyUpEventListener();
          break;
      }
    }
  }, {
    key: 'keyDownEventListener',
    value: function keyDownEventListener(event) {
      var keyCode = event.keyCode;

      switch (keyCode) {
        case CTRL_KEY_CODE:
          this.ctrlKeyDownEventListener();
          break;

        case SHIFT_KEY_CODE:
          this.shiftKeyDownEventListener();
          break;
      }
    }
  }, {
    key: 'ctrlKeyUpEventListener',
    value: function ctrlKeyUpEventListener() {
      var _this = this;

      this.ctrlKeyDown = false;

      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(_this.ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyUpEventListener',
    value: function shiftKeyUpEventListener() {
      var _this2 = this;

      this.shiftKeyDown = false;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this2.shiftKeyDown);
      });
    }
  }, {
    key: 'ctrlKeyDownEventListener',
    value: function ctrlKeyDownEventListener() {
      var _this3 = this;

      this.ctrlKeyDown = true;

      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        return ctrlKeyHandler(_this3.ctrlKeyDown);
      });
    }
  }, {
    key: 'shiftKeyDownEventListener',
    value: function shiftKeyDownEventListener() {
      var _this4 = this;

      this.shiftKeyDown = true;

      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        return shiftKeyHandler(_this4.shiftKeyDown);
      });
    }
  }, {
    key: 'addCtrlKeyHandler',
    value: function addCtrlKeyHandler(ctrlKeyHandler) {
      var ctrlKeyHandlers = this.handlersMap[CTRL_KEY_CODE];

      ctrlKeyHandlers.push(ctrlKeyHandler);
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var shiftKeyHandlers = this.handlersMap[SHIFT_KEY_CODE];

      shiftKeyHandlers.push(shiftKeyHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {};

      handlersMap[CTRL_KEY_CODE] = [];
      handlersMap[SHIFT_KEY_CODE] = [];

      var ctrlKeyDown = false,
          ///
      shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlersMap, ctrlKeyDown, shiftKeyDown),
          keyUpEventListener = keyEvents.keyUpEventListener.bind(keyEvents),
          keyDownEventListener = keyEvents.keyDownEventListener.bind(keyEvents),
          documentDOMElement = document.documentElement; ///

      documentDOMElement.addEventListener('keyup', keyUpEventListener);
      documentDOMElement.addEventListener('keydown', keyDownEventListener);

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

module.exports = KeyEvents;

},{"../constants":3}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    scale3 = vectorMaths.scale3,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset,
    calculateZAngleOffset = offsetUtilities.calculateZAngleOffset;

var Location = function () {
  function Location(offsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Location);

    this.offsets = offsets;

    this.mouseCoordinates = mouseCoordinates;

    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Location, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'updateXYOffset',
    value: function updateXYOffset(mouseCoordinates, tilt) {
      var relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

      this.offsets = add3(add3(this.offsets, yAngleOffset), xAngleOffset);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = DELTA_SCALAR,
          ///
      thirdRelativeOffset = delta * scalar,
          zAngleOffset = calculateZAngleOffset(xAngle, yAngle, thirdRelativeOffset);

      this.offsets = add3(this.offsets, zAngleOffset);
    }
  }], [{
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var offsets = scale3(initialPosition, -1),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      location = new Location(offsets, mouseCoordinates, previousMouseCoordinates);

      return location;
    }
  }]);

  return Location;
}();

module.exports = Location;

},{"../constants":3,"../maths/vector":29,"../utilities/offset":85}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, mouseDown, canvas) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
    this.canvas = canvas;
  }

  _createClass(MouseEvents, [{
    key: 'mouseEventListener',
    value: function mouseEventListener(event, eventType) {
      var _this = this;

      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        return handler(mouseCoordinates, _this.mouseDown, _this.canvas);
      });

      event.preventDefault();
    }
  }, {
    key: 'mouseUpEventListener',
    value: function mouseUpEventListener(event) {
      this.mouseDown = false;

      this.mouseEventListener(event, MOUSE_UP);
    }
  }, {
    key: 'mouseDownEventListener',
    value: function mouseDownEventListener(event) {
      this.mouseDown = true;

      this.mouseEventListener(event, MOUSE_DOWN);
    }
  }, {
    key: 'mouseMoveEventListener',
    value: function mouseMoveEventListener(event) {
      this.mouseEventListener(event, MOUSE_MOVE);
    }
  }, {
    key: 'mouseWheelEventListener',
    value: function mouseWheelEventListener(event) {
      var _this2 = this;

      var delta = deltaFromEvent(event),
          handlers = this.handlersMap[MOUSE_WHEEL];

      handlers.forEach(function (handler) {
        return handler(delta, _this2.canvas);
      });

      event.preventDefault();
    }
  }, {
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      var mouseUpHandlers = this.handlersMap[MOUSE_UP];

      mouseUpHandlers.push(mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      var mouseDownHandlers = this.handlersMap[MOUSE_DOWN];

      mouseDownHandlers.push(mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      var mouseMoveHandlers = this.handlersMap[MOUSE_MOVE];

      mouseMoveHandlers.push(mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      var mouseWheelHandlers = this.handlersMap[MOUSE_WHEEL];

      mouseWheelHandlers.push(mouseWheelHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {};

      handlersMap[MOUSE_UP] = [];
      handlersMap[MOUSE_DOWN] = [];
      handlersMap[MOUSE_MOVE] = [];
      handlersMap[MOUSE_WHEEL] = [];

      var mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown, canvas),
          canvasDOMElement = canvas.getDOMElement(),
          mouseUpEventListener = mouseEvents.mouseUpEventListener.bind(mouseEvents),
          mouseDownEventListener = mouseEvents.mouseDownEventListener.bind(mouseEvents),
          mouseMoveEventListener = mouseEvents.mouseMoveEventListener.bind(mouseEvents),
          mouseWheelEventListener = mouseEvents.mouseWheelEventListener.bind(mouseEvents);

      canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);
      canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);
      canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);
      canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

function deltaFromEvent(event) {
  var delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

  return delta;
}

function mouseCoordinatesFromEvent(event) {
  var canvasDOMElement = event.target,
      ///
  domElementBoundingClientRect = canvasDOMElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}

},{"../constants":3}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetUtilities = require('../utilities/offset');

var OFFSET_SCALAR = constants.OFFSET_SCALAR,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    subtract2 = vectorMaths.subtract2,
    scale2 = vectorMaths.scale2,
    calculateXAngleOffset = offsetUtilities.calculateXAngleOffset,
    calculateYAngleOffset = offsetUtilities.calculateYAngleOffset;

var Pan = function () {
  function Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
    this.previousOffsets = previousOffsets;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'resetPreviousOffsets',
    value: function resetPreviousOffsets() {
      this.previousOffsets = this.offsets;
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(tilt) {
      var xAngle = tilt.getXAngle(),
          yAngle = tilt.getYAngle(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar),
          yAngleOffset = calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates),
          xAngleOffset = calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates);

      this.offsets = add3(add3(this.previousOffsets, yAngleOffset), xAngleOffset); ///
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      previousOffsets = offsets,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      pan = new Pan(offsets, previousOffsets, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

},{"../constants":3,"../maths/vector":29,"../utilities/offset":85}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    zero2 = vectorMaths.zero2,
    add2 = vectorMaths.add2,
    scale2 = vectorMaths.scale2,
    subtract2 = vectorMaths.subtract2,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR;

var Tilt = function () {
  function Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Tilt);

    this.flipped = flipped;
    this.angles = angles;
    this.previousAngles = previousAngles;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngle = second(this.angles),
          xAngle = this.flipped ? -secondAngle : secondAngle;

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngle = first(this.angles),
          yAngle = this.flipped ? firstAngle : -firstAngle;

      return yAngle;
    }
  }, {
    key: 'getZAngle',
    value: function getZAngle() {
      var zAngle = 0;

      return zAngle;
    }
  }, {
    key: 'getAngles',
    value: function getAngles() {
      ///
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
    }
  }, {
    key: 'setMouseCoordinates',
    value: function setMouseCoordinates(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'resetPreviousMouseCoordinates',
    value: function resetPreviousMouseCoordinates() {
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'resetPreviousAngles',
    value: function resetPreviousAngles() {
      this.previousAngles = this.angles;
    }
  }, {
    key: 'updateAngles',
    value: function updateAngles() {
      var scalar = ANGLES_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledRelativeMouseCoordinates = scale2(relativeMouseCoordinates, scalar);

      this.angles = add2(this.previousAngles, scaledRelativeMouseCoordinates);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? -DEGREES_TO_RADIANS_SCALAR : +DEGREES_TO_RADIANS_SCALAR,
          angles = scale2(initialAngles, scalar),
          previousAngles = angles,
          ///
      mouseCoordinates = zero2(),
          previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(flipped, angles, previousAngles, mouseCoordinates, previousMouseCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

module.exports = Tilt;

},{"../constants":3,"../maths/vector":29,"../utilities/array":80}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var DELTA_SCALAR = constants.DELTA_SCALAR,
    MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

var Zoom = function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: 'getDistance',
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: 'updateDistance',
    value: function updateDistance(delta) {
      this.distance -= delta * DELTA_SCALAR;

      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: 'fromInitialDistance',
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
'use strict';

function enableBlending() {
  var _context = this.context,
      BLEND = _context.BLEND,
      SRC_ALPHA = _context.SRC_ALPHA,
      ONE = _context.ONE,
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
'use strict';

function createElementBuffer(data) {
  var _context = this.context,
      ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _context.STATIC_DRAW,
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
  var _context2 = this.context,
      ARRAY_BUFFER = _context2.ARRAY_BUFFER,
      STATIC_DRAW = _context2.STATIC_DRAW,
      target = ARRAY_BUFFER,
      usage = STATIC_DRAW,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data);


  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var _context3 = this.context,
      ARRAY_BUFFER = _context3.ARRAY_BUFFER,
      FLOAT = _context3.FLOAT,
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
'use strict';

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
'use strict';

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
  var _context = this.context,
      DEPTH_TEST = _context.DEPTH_TEST,
      LEQUAL = _context.LEQUAL,
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
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],42:[function(require,module,exports){
'use strict';

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

},{}],43:[function(require,module,exports){
'use strict';

function createShader(type, shaderSource) {
  var COMPILE_STATUS = this.context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = this.context.createShader(type);


  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  var compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
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

},{}],44:[function(require,module,exports){
'use strict';

function createTexture(image, index, repeat) {
  var _context = this.context,
      RGBA = _context.RGBA,
      LINEAR = _context.LINEAR,
      UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
      TEXTURE0 = _context.TEXTURE0,
      TEXTURE_2D = _context.TEXTURE_2D,
      TEXTURE_WRAP_S = _context.TEXTURE_WRAP_S,
      TEXTURE_WRAP_T = _context.TEXTURE_WRAP_T,
      UNPACK_FLIP_Y_WEBGL = _context.UNPACK_FLIP_Y_WEBGL,
      CLAMP_TO_EDGE = _context.CLAMP_TO_EDGE,
      NEAREST = _context.NEAREST,
      REPEAT = _context.REPEAT,
      TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER,
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
  var extension = this.context.getExtension('EXT_texture_filter_anisotropic') || this.context.getExtension('MOZ_EXT_texture_filter_anisotropic') || this.context.getExtension('WEBKIT_EXT_texture_filter_anisotropic');

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

},{}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('../maths/vector');

var subtract3 = vectorMaths.subtract3;

var Edge = function () {
  function Edge(position, extent) {
    _classCallCheck(this, Edge);

    this.position = position;
    this.extent = extent;
  }

  _createClass(Edge, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var position = this.position.slice(),
          extent = this.extent.slice(),
          edge = new Edge(position, extent);

      return edge;
    }
  }], [{
    key: 'fromStartVertexAndEndVertex',
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

},{"../maths/vector":29}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    vectorMaths = require('../../maths/vector'),
    arrayUtilities = require('../../utilities/array'),
    midPointUtilities = require('../../utilities/midPoint');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    projectMidPointPositionOntoXYPlane = midPointUtilities.projectMidPointPositionOntoXYPlane;

var MaskingEdge = function (_Edge) {
      _inherits(MaskingEdge, _Edge);

      function MaskingEdge() {
            _classCallCheck(this, MaskingEdge);

            return _possibleConstructorReturn(this, (MaskingEdge.__proto__ || Object.getPrototypeOf(MaskingEdge)).apply(this, arguments));
      }

      _createClass(MaskingEdge, [{
            key: 'isMidPointPositionToTheLeft',
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
            key: 'isMidPointPositionToTheRight',
            value: function isMidPointPositionToTheRight(midPointPosition) {
                  var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
                      midPointPositionToTheRight = !midPointPositionToTheLeft;

                  return midPointPositionToTheRight;
            }
      }], [{
            key: 'fromStartVertexAndEndVertex',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
            }
      }]);

      return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;

},{"../../maths/vector":29,"../../utilities/array":80,"../../utilities/midPoint":84,"../edge":45}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = require('./edge'),
    Normal = require('./normal'),
    Vertex = require('./vertex'),
    constants = require('../constants'),
    facetUtilities = require('../utilities/facet'),
    arrayUtilities = require('../utilities/array'),
    midPointUtilities = require('../utilities/midPoint'),
    intersectionUtilities = require('../utilities/intersection');

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

var Facet = function () {
  function Facet(vertices, normal, edges) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
    this.edges = edges;
  }

  _createClass(Facet, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getNormal',
    value: function getNormal() {
      return this.normal;
    }
  }, {
    key: 'getEdges',
    value: function getEdges() {
      return this.edges;
    }
  }, {
    key: 'getVertexPositions',
    value: function getVertexPositions() {
      var vertexPositions = this.vertices.map(function (vertex) {
        return vertex.getPosition();
      });

      return vertexPositions;
    }
  }, {
    key: 'getVertexNormals',
    value: function getVertexNormals() {
      var normalExtent = this.normal.getExtent(),
          vertexNormal = normalExtent,
          ///
      vertexNormals = [vertexNormal, vertexNormal, vertexNormal];

      return vertexNormals;
    }
  }, {
    key: 'getVertexIndexes',
    value: function getVertexIndexes(index) {
      var vertexIndex = index * 3,
          vertexIndexes = [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2];

      return vertexIndexes;
    }
  }, {
    key: 'isMasked',
    value: function isMasked(maskingFacet) {
      var maskingEdges = maskingFacet.getMaskingEdges(),
          midPointPosition = calculateMidPointPosition(this.vertices),
          midPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges),
          masked = midPointPositionToOneSideOfMaskingEdges; ///

      return masked;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      this.vertices = _permute(this.vertices, places);

      this.normal = calculateNormal(this.vertices, Normal);

      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.vertices.forEach(function (vertex) {
        return vertex.rotate(rotationQuaternion);
      });

      this.normal = calculateNormal(this.vertices, Normal);

      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.vertices.forEach(function (vertex) {
        return vertex.applyTransform(transform);
      });

      this.normal = calculateNormal(this.vertices, Normal);

      this.edges = calculateEdges(this.vertices, Edge);
    }
  }, {
    key: 'splitWithIntersections',
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
    key: 'splitWithTwoNonNullIntersections',
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
    key: 'splitWithOneNonNullIntersection',
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
    key: 'splitWithNoNonNullIntersections',
    value: function splitWithNoNonNullIntersections(intersections, smallerFacets) {
      var smallerFacet = this.fromVertices(this.vertices); ///

      smallerFacets.push(smallerFacet);
    }
  }, {
    key: 'splitWithIndexTuplesAndIntersections',
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

},{"../constants":3,"../utilities/array":80,"../utilities/facet":81,"../utilities/intersection":82,"../utilities/midPoint":84,"./edge":45,"./normal":51,"./vertex":52}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    facetUtilities = require('../../utilities/facet'),
    verticesUtilities = require('../../utilities/vertices'),
    approximateUtilities = require('../../utilities/approximate');

var isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal, edges));

    _this.rgba = rgba;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: 'clone',
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
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.rgba,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }, {
    key: 'fromVertices',
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
    key: 'fromCoordinateTuplesIndexTupleAndColour',
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

},{"../../utilities/approximate":79,"../../utilities/facet":81,"../../utilities/vertices":90,"../edge":45,"../facet":47,"../normal":51,"../vertex":52}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    arrayUtilities = require('../../utilities/array'),
    facetUtilities = require('../../utilities/facet'),
    textureUtilities = require('../../utilities/texture'),
    verticesUtilities = require('../../utilities/vertices'),
    approximateUtilities = require('../../utilities/approximate');

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

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal, edges));

    _this.imageName = imageName;

    _this.textureCoordinateTuples = textureCoordinateTuples;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'clone',
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
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinateTuples',
    value: function getTextureCoordinateTuples() {
      return this.textureCoordinateTuples;
    }
  }, {
    key: 'getMappedTextureCoordinateTuples',
    value: function getMappedTextureCoordinateTuples(imageMapJSON) {
      var json = imageMapJSON[this.imageName],
          extent = json,
          ///
      mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);

      return mappedTextureCoordinateTuples;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinateTuples = _permute(this.textureCoordinateTuples, places);
    }
  }, {
    key: 'fromVertices',
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
    key: 'fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName',
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

},{"../../utilities/approximate":79,"../../utilities/array":80,"../../utilities/facet":81,"../../utilities/texture":88,"../../utilities/vertices":90,"../edge":45,"../facet":47,"../normal":51,"../vertex":52}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    MaskingEdge = require('./edge/masking'),
    VerticalLine = require('./verticalLine'),
    arrayUtilities = require('../utilities/array'),
    verticesUtilities = require('../utilities/vertices'),
    quaternionUtilities = require('../utilities/quaternion');

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    push = arrayUtilities.push,
    separate = arrayUtilities.separate,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateArbitraryRotationQuaternion = quaternionUtilities.calculateArbitraryRotationQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

var MaskingFacet = function () {
  function MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    this.maskingEdges = maskingEdges;
    this.verticalLines = verticalLines;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(MaskingFacet, [{
    key: 'getMaskingEdges',
    value: function getMaskingEdges() {
      return this.maskingEdges;
    }
  }, {
    key: 'getVerticalLines',
    value: function getVerticalLines() {
      return this.verticalLines;
    }
  }, {
    key: 'getForwardsRotationQuaternion',
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: 'getBackwardsRotationQuaternion',
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: 'maskFacet',
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
    key: 'splitFacet',
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
    key: 'fromFacet',
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

},{"../constants":3,"../utilities/array":80,"../utilities/quaternion":86,"../utilities/vertices":90,"./edge/masking":46,"./verticalLine":53}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    normalise3 = vectorMaths.normalise3,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var Normal = function () {
  function Normal(extent) {
    _classCallCheck(this, Normal);

    this.extent = extent;
  }

  _createClass(Normal, [{
    key: 'clone',
    value: function clone() {
      var extent = cloneExtent(this.extent),
          normal = new Normal(extent);

      return normal;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: 'fromVertices',
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

},{"../maths/vector":29,"../utilities/array":80}],52:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rotationUtilities = require('../utilities/rotation');

var rotatePosition = rotationUtilities.rotatePosition;

var Vertex = function () {
  function Vertex(position) {
    _classCallCheck(this, Vertex);

    this.position = position;
  }

  _createClass(Vertex, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var position = this.position.slice(),
          ///
      vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.position = rotatePosition(this.position, rotationQuaternion);
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.position = transform(this.position);
    }
  }], [{
    key: 'fromPosition',
    value: function fromPosition(position) {
      var vertex = new Vertex(position);

      return vertex;
    }
  }, {
    key: 'fromCoordinateTuple',
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

},{"../utilities/rotation":87}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    rotationUtilities = require('../utilities/rotation'),
    quaternionUtilities = require('../utilities/quaternion'),
    intersectionUtilities = require('../utilities/intersection');

var first = arrayUtilities.first,
    rotatePosition = rotationUtilities.rotatePosition,
    calculateIntersection = intersectionUtilities.calculateIntersection,
    calculateRotationAboutZAxisQuaternion = quaternionUtilities.calculateRotationAboutZAxisQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

var VerticalLine = function () {
  function VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, VerticalLine);

    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(VerticalLine, [{
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: 'getForwardsRotationQuaternion',
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: 'getBackwardsRotationQuaternion',
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: 'splitFacet',
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
    key: 'splitFacets',
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
    key: 'fromMaskingEdge',
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

},{"../utilities/array":80,"../utilities/intersection":82,"../utilities/quaternion":86,"../utilities/rotation":87}],54:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    arrayUtilities = require('./utilities/array'),
    FunctionCanvasElement = require('./element/canvas/function');

var flatten = arrayUtilities.flatten,
    guarantee = arrayUtilities.guarantee;


function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  properties = properties || {}; ///

  childElements = flatten(childElements); ///

  var element = void 0;

  if (isSubclassOf(firstArgument, Element)) {
    var Class = firstArgument; ///

    Object.assign(properties, {
      childElements: childElements
    });

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === 'function') {
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

},{"./element":4,"./element/canvas/function":10,"./utilities/array":80}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array');

var push = arrayUtilities.push;


var add = push; ///

var Renderer = function () {
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
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'getRendererData',
    value: function getRendererData() {
      return this.rendererData;
    }
  }, {
    key: 'getRendererBuffers',
    value: function getRendererBuffers() {
      return this.rendererBuffers;
    }
  }, {
    key: 'getUniformLocations',
    value: function getUniformLocations() {
      return this.uniformLocations;
    }
  }, {
    key: 'getAttributeLocations',
    value: function getAttributeLocations() {
      return this.attributeLocations;
    }
  }, {
    key: 'getCount',
    value: function getCount() {
      return this.rendererData.getCount();
    }
  }, {
    key: 'getOffsetsMatrixUniformLocation',
    value: function getOffsetsMatrixUniformLocation() {
      return this.uniformLocations.getOffsetsMatrixUniformLocation();
    }
  }, {
    key: 'getNormalsMatrixUniformLocation',
    value: function getNormalsMatrixUniformLocation() {
      return this.uniformLocations.getNormalsMatrixUniformLocation();
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: 'getRotationsMatrixUniformLocation',
    value: function getRotationsMatrixUniformLocation() {
      return this.uniformLocations.getRotationsMatrixUniformLocation();
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.attributeLocations.getVertexPositionAttributeLocation();
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.attributeLocations.getVertexNormalAttributeLocation();
    }
  }, {
    key: 'addFacets',
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

},{"./utilities/array":80}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vertexNormalComponents = 3,
    vertexPositionComponents = 3;

var RendererBuffers = function () {
  function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
    _classCallCheck(this, RendererBuffers);

    this.vertexPositionsBuffer = vertexPositionsBuffer;
    this.vertexNormalsBuffer = vertexNormalsBuffer;
    this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
  }

  _createClass(RendererBuffers, [{
    key: 'createVertexPositionsBuffer',
    value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
      this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
    }
  }, {
    key: 'createVertexNormalsBuffer',
    value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
      this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
    }
  }, {
    key: 'createVertexIndexesElementBuffer',
    value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
      this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
    }
  }, {
    key: 'bindVertexNormalsBuffer',
    value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionsBuffer',
    value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexIndexesElementBuffer',
    value: function bindVertexIndexesElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
      this.createVertexPositionsBuffer(vertexPositionsData, canvas);
      this.createVertexNormalsBuffer(vertexNormalsData, canvas);
      this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
      this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
      this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
      this.bindVertexIndexesElementBuffer(canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsBuffer = null,
          ///
      vertexNormalsBuffer = null,
          ///
      vertexIndexesElementBuffer = null,
          ///
      rendererBuffers = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer], remainingArguments)))();

      return rendererBuffers;
    }
  }]);

  return RendererBuffers;
}();

module.exports = RendererBuffers;

},{}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererBuffers = require('../../renderer/buffers');

var vertexColourComponents = 4;

var ColourRendererBuffers = function (_RendererBuffers) {
  _inherits(ColourRendererBuffers, _RendererBuffers);

  function ColourRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
    _classCallCheck(this, ColourRendererBuffers);

    var _this = _possibleConstructorReturn(this, (ColourRendererBuffers.__proto__ || Object.getPrototypeOf(ColourRendererBuffers)).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));

    _this.vertexColoursBuffer = vertexColoursBuffer;
    return _this;
  }

  _createClass(ColourRendererBuffers, [{
    key: 'createVertexColoursBuffer',
    value: function createVertexColoursBuffer(vertexColoursData, canvas) {
      this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
    }
  }, {
    key: 'bindVertexColoursBuffer',
    value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
      _get(ColourRendererBuffers.prototype.__proto__ || Object.getPrototypeOf(ColourRendererBuffers.prototype), 'createBuffers', this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createVertexColoursBuffer(vertexColoursData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
      _get(ColourRendererBuffers.prototype.__proto__ || Object.getPrototypeOf(ColourRendererBuffers.prototype), 'bindBuffers', this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
    }
  }], [{
    key: 'fromNothing',
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

},{"../../renderer/buffers":56}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererBuffers = require('../../renderer/buffers');

var textureCoordinateComponents = 2;

var TextureRendererBuffers = function (_RendererBuffers) {
  _inherits(TextureRendererBuffers, _RendererBuffers);

  function TextureRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
    _classCallCheck(this, TextureRendererBuffers);

    var _this = _possibleConstructorReturn(this, (TextureRendererBuffers.__proto__ || Object.getPrototypeOf(TextureRendererBuffers)).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));

    _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
    return _this;
  }

  _createClass(TextureRendererBuffers, [{
    key: 'createTextureCoordinatesBuffer',
    value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
      this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
    }
  }, {
    key: 'bindTextureCoordinatesBuffer',
    value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
      canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
      _get(TextureRendererBuffers.prototype.__proto__ || Object.getPrototypeOf(TextureRendererBuffers.prototype), 'createBuffers', this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
      _get(TextureRendererBuffers.prototype.__proto__ || Object.getPrototypeOf(TextureRendererBuffers.prototype), 'bindBuffers', this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
    }
  }], [{
    key: 'fromNothing',
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

},{"../../renderer/buffers":56}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    arrayUtilities = require('../utilities/array'),
    ColourRendererData = require('../renderer/data/colour'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourRendererBuffers = require('../renderer/buffers/colour'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var push = arrayUtilities.push,
    createProgram = Renderer.createProgram;


var add = push; ///

var ColourRenderer = function (_Renderer) {
      _inherits(ColourRenderer, _Renderer);

      function ColourRenderer() {
            _classCallCheck(this, ColourRenderer);

            return _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).apply(this, arguments));
      }

      _createClass(ColourRenderer, [{
            key: 'getVertexColourAttributeLocation',
            value: function getVertexColourAttributeLocation() {
                  var attributeLocations = this.getAttributeLocations(),
                      vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

                  return vertexColourAttributeLocation;
            }
      }, {
            key: 'createBuffers',
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
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      vertexColourAttributeLocation = this.getVertexColourAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
            }
      }, {
            key: 'render',
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
            key: 'fromNothing',
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

},{"../renderer":55,"../renderer/buffers/colour":57,"../renderer/data/colour":61,"../utilities/array":80,"./locations/colour/attribute":64,"./locations/colour/uniform":65,"./source/colour/fragmentShader":69,"./source/colour/vertexShader":70}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array');

var flatten = arrayUtilities.flatten,
    merge = arrayUtilities.merge,
    add = merge; ///

var RendererData = function () {
  function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
    _classCallCheck(this, RendererData);

    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
  }

  _createClass(RendererData, [{
    key: 'getCount',
    value: function getCount() {
      var vertexIndexesDataLength = this.vertexIndexesData.length,
          count = vertexIndexesDataLength; ///

      return count;
    }
  }, {
    key: 'getVertexPositionsData',
    value: function getVertexPositionsData() {
      return this.vertexPositionsData;
    }
  }, {
    key: 'getVertexNormalsData',
    value: function getVertexNormalsData() {
      return this.vertexNormalsData;
    }
  }, {
    key: 'getVertexIndexesData',
    value: function getVertexIndexesData() {
      return this.vertexIndexesData;
    }
  }, {
    key: 'addVertexPositions',
    value: function addVertexPositions(vertexPositions) {
      var vertexPositionsData = flatten(vertexPositions);

      add(this.vertexPositionsData, vertexPositionsData);
    }
  }, {
    key: 'addVertexNormals',
    value: function addVertexNormals(vertexNormals) {
      var vertexNormalsData = flatten(vertexNormals);

      add(this.vertexNormalsData, vertexNormalsData);
    }
  }, {
    key: 'addVertexIndexes',
    value: function addVertexIndexes(vertexIndexes) {
      var vertexIndexesData = vertexIndexes; ///

      add(this.vertexIndexesData, vertexIndexesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsData = [],
          vertexNormalsData = [],
          vertexIndexesData = [],
          rendererData = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionsData, vertexNormalsData, vertexIndexesData], remainingArguments)))();

      return rendererData;
    }
  }]);

  return RendererData;
}();

module.exports = RendererData;

},{"../utilities/array":80}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array');

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten;


var add = merge; ///

var ColourRendererData = function (_RendererData) {
  _inherits(ColourRendererData, _RendererData);

  function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
    _classCallCheck(this, ColourRendererData);

    var _this = _possibleConstructorReturn(this, (ColourRendererData.__proto__ || Object.getPrototypeOf(ColourRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));

    _this.vertexColoursData = vertexColoursData;
    return _this;
  }

  _createClass(ColourRendererData, [{
    key: 'getVertexColoursData',
    value: function getVertexColoursData() {
      return this.vertexColoursData;
    }
  }, {
    key: 'addVertexColours',
    value: function addVertexColours(vertexColours) {
      var vertexColoursData = flatten(vertexColours);

      add(this.vertexColoursData, vertexColoursData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var vertexColoursData = [],
          colourRendererData = RendererData.fromNothing(ColourRendererData, vertexColoursData);

      return colourRendererData;
    }
  }]);

  return ColourRendererData;
}(RendererData);

module.exports = ColourRendererData;

},{"../../renderer/data":60,"../../utilities/array":80}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array');

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten;


var add = merge; ///

var TextureRendererData = function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
    _classCallCheck(this, TextureRendererData);

    var _this = _possibleConstructorReturn(this, (TextureRendererData.__proto__ || Object.getPrototypeOf(TextureRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));

    _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: 'getVertexTextureCoordinatesData',
    value: function getVertexTextureCoordinatesData() {
      return this.vertexTextureCoordinatesData;
    }
  }, {
    key: 'addVertexTextureCoordinateTuples',
    value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
      var vertexTextureCoordinatesData = flatten(vertexTextureCoordinateTuples);

      add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var vertexTextureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, vertexTextureCoordinatesData);

      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(RendererData);

module.exports = TextureRendererData;

},{"../../renderer/data":60,"../../utilities/array":80}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lightingSource = require('../source/lighting'),
    positionSource = require('../source/position');

var vertexNormalAttributeName = lightingSource.vertexNormalAttributeName,
    vertexPositionAttributeName = positionSource.vertexPositionAttributeName;

var AttributeLocations = function () {
  function AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
    _classCallCheck(this, AttributeLocations);

    this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
    this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
  }

  _createClass(AttributeLocations, [{
    key: 'getVertexPositionAttributeLocation',
    value: function getVertexPositionAttributeLocation() {
      return this.vertexPositionAttributeLocation;
    }
  }, {
    key: 'getVertexNormalAttributeLocation',
    value: function getVertexNormalAttributeLocation() {
      return this.vertexNormalAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName),
          attributeLocations = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionAttributeLocation, vertexNormalAttributeLocation], remainingArguments)))();

      return attributeLocations;
    }
  }]);

  return AttributeLocations;
}();

module.exports = AttributeLocations;

},{"../source/lighting":71,"../source/position":72}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeLocations = require('../../locations/attribute'),
    vertexShaderSource = require('../../source/colour/vertexShader');

var vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName;

var ColourAttributeLocations = function (_AttributeLocations) {
  _inherits(ColourAttributeLocations, _AttributeLocations);

  function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
    _classCallCheck(this, ColourAttributeLocations);

    var _this = _possibleConstructorReturn(this, (ColourAttributeLocations.__proto__ || Object.getPrototypeOf(ColourAttributeLocations)).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
    return _this;
  }

  _createClass(ColourAttributeLocations, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      return this.vertexColourAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName),
          colourAttributeLocations = AttributeLocations.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);

      return colourAttributeLocations;
    }
  }]);

  return ColourAttributeLocations;
}(AttributeLocations);

module.exports = ColourAttributeLocations;

},{"../../locations/attribute":63,"../../source/colour/vertexShader":70}],65:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformLocations = require('../../locations/uniform');

var ColourUniformLocations = function (_UniformLocations) {
  _inherits(ColourUniformLocations, _UniformLocations);

  function ColourUniformLocations() {
    _classCallCheck(this, ColourUniformLocations);

    return _possibleConstructorReturn(this, (ColourUniformLocations.__proto__ || Object.getPrototypeOf(ColourUniformLocations)).apply(this, arguments));
  }

  _createClass(ColourUniformLocations, null, [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      return UniformLocations.fromProgram(ColourUniformLocations, program, canvas);
    }
  }]);

  return ColourUniformLocations;
}(UniformLocations);

module.exports = ColourUniformLocations;

},{"../../locations/uniform":68}],66:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributeLocations = require('../../locations/attribute'),
    vertexShaderSource = require('../../source/texture/vertexShader');

var textureCoordinateAttributeName = vertexShaderSource.textureCoordinateAttributeName;

var TextureAttributeLocations = function (_AttributeLocations) {
  _inherits(TextureAttributeLocations, _AttributeLocations);

  function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
    _classCallCheck(this, TextureAttributeLocations);

    var _this = _possibleConstructorReturn(this, (TextureAttributeLocations.__proto__ || Object.getPrototypeOf(TextureAttributeLocations)).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));

    _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
    return _this;
  }

  _createClass(TextureAttributeLocations, [{
    key: 'getTextureCoordinateAttributeLocation',
    value: function getTextureCoordinateAttributeLocation() {
      return this.textureCoordinateAttributeLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName),
          textureAttributeLocations = AttributeLocations.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);

      return textureAttributeLocations;
    }
  }]);

  return TextureAttributeLocations;
}(AttributeLocations);

module.exports = TextureAttributeLocations;

},{"../../locations/attribute":63,"../../source/texture/vertexShader":74}],67:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UniformLocations = require('../../locations/uniform'),
    fragmentShaderSource = require('../../source/texture/fragmentShader');

var samplerName = fragmentShaderSource.samplerName;

var TextureUniformLocations = function (_UniformLocations) {
  _inherits(TextureUniformLocations, _UniformLocations);

  function TextureUniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
    _classCallCheck(this, TextureUniformLocations);

    var _this = _possibleConstructorReturn(this, (TextureUniformLocations.__proto__ || Object.getPrototypeOf(TextureUniformLocations)).call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation));

    _this.samplerUniformLocation = samplerUniformLocation;
    return _this;
  }

  _createClass(TextureUniformLocations, [{
    key: 'getSamplerUniformLocation',
    value: function getSamplerUniformLocation() {
      return this.samplerUniformLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(program, canvas) {
      var samplerUniformLocation = canvas.getUniformLocation(program, samplerName),
          textureUniformLocations = UniformLocations.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);

      return textureUniformLocations;
    }
  }]);

  return TextureUniformLocations;
}(UniformLocations);

module.exports = TextureUniformLocations;

},{"../../locations/uniform":68,"../../source/texture/fragmentShader":73}],68:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lightingSource = require('../source/lighting'),
    positionSource = require('../source/position');

var normalsMatrixName = lightingSource.normalsMatrixName,
    offsetsMatrixName = positionSource.offsetsMatrixName,
    rotationsMatrixName = positionSource.rotationsMatrixName,
    positionMatrixName = positionSource.positionMatrixName,
    projectionMatrixName = positionSource.projectionMatrixName;

var UniformLocations = function () {
  function UniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
    _classCallCheck(this, UniformLocations);

    this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
    this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
  }

  _createClass(UniformLocations, [{
    key: 'getOffsetsMatrixUniformLocation',
    value: function getOffsetsMatrixUniformLocation() {
      return this.offsetsMatrixUniformLocation;
    }
  }, {
    key: 'getNormalsMatrixUniformLocation',
    value: function getNormalsMatrixUniformLocation() {
      return this.normalsMatrixUniformLocation;
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: 'getRotationsMatrixUniformLocation',
    value: function getRotationsMatrixUniformLocation() {
      return this.rotationsMatrixUniformLocation;
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, offsetsMatrixName),
          normalsMatrixUniformLocation = canvas.getUniformLocation(program, normalsMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          rotationsMatrixUniformLocation = canvas.getUniformLocation(program, rotationsMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          uniformLocations = new (Function.prototype.bind.apply(Class, [null].concat([offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation], remainingArguments)))();

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

module.exports = UniformLocations;

},{"../source/lighting":71,"../source/position":72}],69:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],70:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":71,"../../source/position":72}],71:[function(require,module,exports){
'use strict';

var normalsMatrixName = 'uNormalsMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalsMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalsMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalsMatrixName: normalsMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],72:[function(require,module,exports){
'use strict';

var offsetsMatrixName = 'uOffsetsMatrix',
    positionMatrixName = 'uPositionMatrix',
    rotationsMatrixName = 'uRotationsMatrix',
    projectionMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition';

var positionSource = new String('\n  \n        uniform mat4 ' + offsetsMatrixName + ',\n                     ' + rotationsMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationsMatrixName + ' * ' + offsetsMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ');

Object.assign(positionSource, {
  offsetsMatrixName: offsetsMatrixName,
  positionMatrixName: positionMatrixName,
  rotationsMatrixName: rotationsMatrixName,
  projectionMatrixName: projectionMatrixName,
  vertexPositionAttributeName: vertexPositionAttributeName
});

module.exports = positionSource;

},{}],73:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],74:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":71,"../../source/position":72}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    TextureRendererData = require('../renderer/data/texture'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = function (_Renderer) {
      _inherits(TextureRenderer, _Renderer);

      function TextureRenderer() {
            _classCallCheck(this, TextureRenderer);

            return _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).apply(this, arguments));
      }

      _createClass(TextureRenderer, [{
            key: 'getTextureCoordinateAttributeLocation',
            value: function getTextureCoordinateAttributeLocation() {
                  var attributeLocations = this.getAttributeLocations(),
                      textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

                  return textureCoordinateAttributeLocation;
            }
      }, {
            key: 'createBuffers',
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
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
      }, {
            key: 'useTexture',
            value: function useTexture(index, canvas) {
                  var uniformLocations = this.getUniformLocations(),
                      samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
                      samplerUniformLocationIntegerValue = index; ///

                  canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
      }], [{
            key: 'fromNothing',
            value: function fromNothing(Class, canvas) {
                  for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
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
                  textureRenderer = new (Function.prototype.bind.apply(Class, [null].concat([facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations], remainingArguments)))();

                  canvas.enableAnisotropicFiltering(); ///

                  return textureRenderer;
            }
      }]);

      return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;

},{"../renderer":55,"../renderer/buffers/texture":58,"../renderer/data/texture":62,"./locations/texture/attribute":66,"./locations/texture/uniform":67,"./source/texture/fragmentShader":73,"./source/texture/vertexShader":74}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    TextureRenderer = require('../../renderer/texture');

var push = arrayUtilities.push;


var add = push; ///

var ImageMapTextureRenderer = function (_TextureRenderer) {
      _inherits(ImageMapTextureRenderer, _TextureRenderer);

      function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
            _classCallCheck(this, ImageMapTextureRenderer);

            var _this = _possibleConstructorReturn(this, (ImageMapTextureRenderer.__proto__ || Object.getPrototypeOf(ImageMapTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

            _this.imageMapJSON = imageMapJSON;
            return _this;
      }

      _createClass(ImageMapTextureRenderer, [{
            key: 'createBuffers',
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

                  _get(ImageMapTextureRenderer.prototype.__proto__ || Object.getPrototypeOf(ImageMapTextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
            }
      }, {
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
      }, {
            key: 'useTexture',
            value: function useTexture(index, canvas) {
                  var uniformLocations = this.getUniformLocations(),
                      samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
                      samplerUniformLocationIntegerValue = index; ///

                  canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
      }, {
            key: 'render',
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
            key: 'fromImageMapAndImageMapJSON',
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

},{"../../renderer/texture":75,"../../utilities/array":80}],77:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    TextureRenderer = require('../../renderer/texture');

var push = arrayUtilities.push,
    first = arrayUtilities.first;


var add = push; ///

var ImagesTextureRenderer = function (_TextureRenderer) {
  _inherits(ImagesTextureRenderer, _TextureRenderer);

  function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
    _classCallCheck(this, ImagesTextureRenderer);

    var _this = _possibleConstructorReturn(this, (ImagesTextureRenderer.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer)).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));

    _this.imageNames = imageNames;

    _this.facetsMap = facetsMap;

    _this.offsets = offsets;
    return _this;
  }

  _createClass(ImagesTextureRenderer, [{
    key: 'addFacets',
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
    key: 'createBuffers',
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

      _get(ImagesTextureRenderer.prototype.__proto__ || Object.getPrototypeOf(ImagesTextureRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this3 = this;

      var program = this.getProgram();

      canvas.useProgram(program);

      this.bindBuffers(canvas);

      var renderer = this; ///

      canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);

      var start = void 0,
          finish = 0; ///

      this.offsets.forEach(function (offset, index) {
        start = finish; ///

        finish = offset; ///

        _this3.useTexture(index, canvas);

        canvas.drawElements(start, finish);
      });
    }
  }], [{
    key: 'fromImagesImageNamesAndImageTiling',
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

},{"../../renderer/texture":75,"../../utilities/array":80}],78:[function(require,module,exports){
'use strict';

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

},{}],79:[function(require,module,exports){
'use strict';

var constants = require('../constants');

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

},{"../constants":3}],80:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var necessary = require('necessary');

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

},{"necessary":93}],81:[function(require,module,exports){
'use strict';

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

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

},{"../constants":3,"../maths/vector":29,"../utilities/array":80}],82:[function(require,module,exports){
'use strict';

var vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array'),
    approximateUtilities = require('../utilities/approximate');

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

},{"../maths/vector":29,"../utilities/approximate":79,"../utilities/array":80}],83:[function(require,module,exports){
'use strict';

var constants = require('../constants'),
    matrixMaths = require('../maths/matrix'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

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

  rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);
  rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);
  rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);

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

},{"../constants":3,"../maths/matrix":28,"../maths/vector":29,"../utilities/array":80}],84:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vectorMaths = require('../maths/vector');

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

},{"../maths/vector":29}],85:[function(require,module,exports){
'use strict';

var arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second;


function calculateXAngleOffset(xAngle, yAngle, scaledRelativeMouseCoordinates) {
  var secondScaledRelativeMouseCoordinate = second(scaledRelativeMouseCoordinates),
      xAngleOffset = [-Math.sin(yAngle) * Math.sin(xAngle) * secondScaledRelativeMouseCoordinate, -Math.cos(xAngle) * secondScaledRelativeMouseCoordinate, +Math.cos(yAngle) * Math.sin(xAngle) * secondScaledRelativeMouseCoordinate];

  return xAngleOffset;
}

function calculateYAngleOffset(yAngle, scaledRelativeMouseCoordinates) {
  var firstScaledRelativeMouseCoordinate = first(scaledRelativeMouseCoordinates),
      yAngleOffset = [-Math.cos(yAngle) * firstScaledRelativeMouseCoordinate, +0, -Math.sin(yAngle) * firstScaledRelativeMouseCoordinate];

  return yAngleOffset;
}

function calculateZAngleOffset(xAngle, yAngle, thirdScaledRelativeMouseCoordinate) {
  var zAngleOffset = [-Math.sin(yAngle) * Math.cos(xAngle) * thirdScaledRelativeMouseCoordinate, Math.sin(xAngle) * thirdScaledRelativeMouseCoordinate, +Math.cos(yAngle) * Math.cos(xAngle) * thirdScaledRelativeMouseCoordinate];

  return zAngleOffset;
}

module.exports = {
  calculateXAngleOffset: calculateXAngleOffset,
  calculateYAngleOffset: calculateYAngleOffset,
  calculateZAngleOffset: calculateZAngleOffset
};

},{"../utilities/array":80}],86:[function(require,module,exports){
'use strict';

var vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array'),
    angleUtilities = require('../utilities/angle'),
    approximateUtilities = require('../utilities/approximate');

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

},{"../maths/vector":29,"../utilities/angle":78,"../utilities/approximate":79,"../utilities/array":80}],87:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var quaternionUtilities = require('../utilities/quaternion');

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

},{"../utilities/quaternion":86}],88:[function(require,module,exports){
'use strict';

var matrixMaths = require('../maths/matrix'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array'),
    verticesUtilities = require('../utilities/vertices'),
    quaternionUtilities = require('../utilities/quaternion');

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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/array":80,"../utilities/quaternion":86,"../utilities/vertices":90}],89:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vectorMaths = require('../maths/vector'),
    matrixMaths = require('../maths/matrix'),
    matrixUtilities = require('../utilities/matrix');

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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/matrix":83}],90:[function(require,module,exports){
'use strict';

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

},{}],91:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

},{"./react":54}],92:[function(require,module,exports){

},{}],93:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  templateUtilities: require('./lib/utilities/template'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous'),
  miscellaneousUtilities: require('./lib/utilities/miscellaneous')
};

},{"./lib/utilities/array":94,"./lib/utilities/asynchronous":95,"./lib/utilities/fileSystem":96,"./lib/utilities/miscellaneous":97,"./lib/utilities/path":103,"./lib/utilities/template":104}],94:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

function concat(array1, array2) {
  if (!(array2 instanceof Array)) {
    array2 = [array2];
  }

  var start = 0,
      deleteCount = 0;

  splice(array1, start, deleteCount, array2);
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
  var start = array2.length,
      ///
  deleteCount = 0;

  splice(array1, start, deleteCount, array2);
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

    if (passed) {
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

module.exports = {
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
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],95:[function(require,module,exports){
'use strict';

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

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],96:[function(require,module,exports){
'use strict';

var fs = require('fs');

function doesEntryExist(absolutePath) {
  var entryExists = fs.existsSync(absolutePath);

  return entryExists;
}

function doesFileExist(absoluteFilePath) {
  var fileExists = false;

  var absolutePath = absoluteFilePath,
      ///
  entryExists = doesEntryExist(absolutePath);

  if (entryExists) {
    var entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function doesDirectoryExist(absoluteDirectoryPath) {
  var directoryExists = false;

  var absolutePath = absoluteDirectoryPath,
      ///
  entryExists = doesEntryExist(absolutePath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryFile(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function isEntryDirectory(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  var subEntryNames = readDirectory(absoluteDirectoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;

  return directoryEmpty;
}

function readDirectory(absoluteDirectoryPath) {
  var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function readFile(absoluteFilePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

function appendToFile(absoluteFilePath, content) {
  fs.appendFileSync(absoluteFilePath, content);
}

function renameFile(oldAbsoluteFilePath, newAbsoluteFilePath) {
  fs.renameSync(oldAbsoluteFilePath, newAbsoluteFilePath);
}

function getStats(absoluteFilePath) {
  return fs.statSync(absoluteFilePath);
}

module.exports = {
  doesEntryExist: doesEntryExist,
  doesFileExist: doesFileExist,
  doesDirectoryExist: doesDirectoryExist,
  isEntryFile: isEntryFile,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile,
  appendToFile: appendToFile,
  renameFile: renameFile,
  getStats: getStats
};

},{"fs":92}],97:[function(require,module,exports){
'use strict';

var rc = require('./miscellaneous/rc'),
    log = require('./miscellaneous/log'),
    ajax = require('./miscellaneous/ajax'),
    onETX = require('./miscellaneous/onETX'),
    prompt = require('./miscellaneous/prompt');

var get = ajax.get,
    post = ajax.post;


module.exports = {
  log: log,
  rc: rc,
  get: get,
  post: post,
  onETX: onETX,
  prompt: prompt
};

},{"./miscellaneous/ajax":98,"./miscellaneous/log":99,"./miscellaneous/onETX":100,"./miscellaneous/prompt":101,"./miscellaneous/rc":102}],98:[function(require,module,exports){
'use strict';

var GET_METHOD = 'GET',
    POST_METHOD = 'POST';

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

module.exports = {
  get: get,
  post: post
};

function request(host, uri, parameters, method, body, callback) {
  var url = urlFromHostURIAndParameters(host, uri, parameters),
      xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    var readyState = xmlHttpRequest.readyState,
        status = xmlHttpRequest.status,
        responseText = xmlHttpRequest.responseText;


    if (readyState == 4) {
      if (status == 200) {
        var jsonString = responseText,
            ///
        json = JSON.parse(jsonString);

        callback(json);
      } else {
        callback(null);
      }
    }
  };

  xmlHttpRequest.open(method, url, true);

  xmlHttpRequest.send(body);
}

function urlFromHostURIAndParameters(host, uri, parameters) {
  var queryString = queryStringFromParameters(parameters),
      url = queryString === '' ? host + '/' + uri : host + '/' + uri + '?' + queryString;

  return url;
}

function queryStringFromParameters(parameters) {
  var names = Object.keys(parameters),
      namesLength = names.length,
      lastIndex = namesLength - 1,
      queryString = names.reduce(function (queryString, name, index) {
    var value = parameters[name],
        encodedName = encodeURIComponent(name),
        encodedValue = encodeURIComponent(value),
        ampersandOrNothing = index !== lastIndex ? '&' : '';

    queryString += encodedName + '=' + encodedValue + ampersandOrNothing;

    return queryString;
  }, '');

  return queryString;
}

},{}],99:[function(require,module,exports){
'use strict';

var path = require('path');

var pathUtilities = require('../../utilities/path'),
    arrayUtilities = require('../../utilities/array'),
    fileSystemUtilities = require('../../utilities/fileSystem');

var second = arrayUtilities.second,
    concatenatePaths = pathUtilities.concatenatePaths,
    doesFileExist = fileSystemUtilities.doesFileExist,
    readFile = fileSystemUtilities.readFile,
    appendToFile = fileSystemUtilities.appendToFile,
    renameFile = fileSystemUtilities.renameFile,
    getStats = fileSystemUtilities.getStats;


var TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    FATAL = 'FATAL';

var logLevel = WARNING,
    logFileBaseName = 'default',
    logDirectoryPath = null;

function log(message) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var pertinentStackMessageIndex = 2;

  var levels = [TRACE, DEBUG, INFO, WARNING, ERROR, FATAL];

  if (level) {
    ///
    var levelIndex = levels.indexOf(level),
        logLevelIndex = levels.indexOf(logLevel);

    if (levelIndex < logLevelIndex) {
      return;
    }

    pertinentStackMessageIndex += 1;

    level = level + ' '; ///
  }

  var error = new Error(),
      stack = error.stack,
      stackMessages = stack.split(/\r\n|\n/),
      pertinentStackMessage = stackMessages[pertinentStackMessageIndex],
      currentDateAndTimeString = getCurrentDateAndTimeString(),
      filePath = filePathFromStackMessage(pertinentStackMessage),
      lineNumber = lineNumberFromStackMessage(pertinentStackMessage),
      logMessage = '' + level + currentDateAndTimeString + ' ' + filePath + '(' + lineNumber + ') ' + message;


  console.log(logMessage);

  if (logDirectoryPath !== null) {
    rollOverLogFile();

    var logFilePath = getLogFilePath(),
        logFileContent = logMessage + '\n';

    appendToFile(logFilePath, logFileContent);
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

function getLogFileContent() {
  var logFilePath = getLogFilePath(),
      logFileContent = readFile(logFilePath);

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
  getLogFileContent: getLogFileContent
});

module.exports = log;

function getLogFilePath() {
  var logFileName = logFileBaseName + '.log',
      logFilePath = concatenatePaths(logDirectoryPath, logFileName);

  return logFilePath;
}

function getRolledOverLogFilePath() {
  var currentDateString = getCurrentDateString(),
      rolledOverLogFileName = logFileBaseName + '.' + currentDateString + '.log',
      rolledOverLogFilePath = concatenatePaths(logDirectoryPath, rolledOverLogFileName);

  return rolledOverLogFilePath;
}

function getLogFileLastModifiedDate() {
  var logFilePath = getLogFilePath(),
      logFileStats = getStats(logFilePath),
      mtime = logFileStats.mtime,
      logFileLastModifiedDate = new Date(mtime); ///

  return logFileLastModifiedDate;
}

function rollOverLogFile() {
  var logFilePath = getLogFilePath(),
      logFileExists = doesFileExist(logFilePath);

  if (!logFileExists) {
    return;
  }

  var logFileLastModifiedDate = getLogFileLastModifiedDate(),
      logFileLastModifiedDateCurrentDate = isDateCurrentDate(logFileLastModifiedDate);

  if (!logFileLastModifiedDateCurrentDate) {
    var rolledOverLogFilePath = getRolledOverLogFilePath();

    renameFile(logFilePath, rolledOverLogFilePath);
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
      currentDateAndTimeString = day + '-' + month + '-' + year;

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
      currentDateAndTimeString = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

  return currentDateAndTimeString;
}

function filePathFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/(\/.+)\:\d+\:\d+/),
      secondMatch = second(matches),
      absoluteFilePath = secondMatch,
      ///
  currentWorkingDirectoryPath = path.resolve('.'),
      ///
  currentWorkingDirectoryPathLength = currentWorkingDirectoryPath.length,
      start = currentWorkingDirectoryPathLength + 1,
      ///
  filePath = absoluteFilePath.substr(start);

  return filePath;
}

function lineNumberFromStackMessage(stackMessage) {
  var matches = stackMessage.match(/\:(\d+)/),
      secondMatch = second(matches),
      lineNumber = secondMatch; ///

  return lineNumber;
}

function padStartWithZeroes(string, targetLength) {
  var padString = '0',
      paddedString = padStart(string, targetLength, padString);

  return paddedString;
}

function padStart(string, targetLength, padString) {
  var padding = '';

  for (var index = 0; index < targetLength; index++) {
    padding += padString;
  }

  var paddedString = ('' + padding + string).substr(-targetLength);

  return paddedString;
}

},{"../../utilities/array":94,"../../utilities/fileSystem":96,"../../utilities/path":103,"path":105}],100:[function(require,module,exports){
(function (process){
'use strict';

var ETX_CHARACTER = '\x03';

function onETX(handler) {
  var _process = process,
      stdin = _process.stdin,
      setRawMode = stdin.setRawMode;


  if (setRawMode) {
    var rawMode = true,
        encoding = 'utf8';

    stdin.setRawMode(rawMode);
    stdin.setEncoding(encoding);

    stdin.resume();

    stdin.addListener('data', dataHandler);

    return offExt;
  }

  function offExt() {
    stdin.removeListener('data', dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

module.exports = onETX;

}).call(this,require('_process'))

},{"_process":106}],101:[function(require,module,exports){
(function (process){
'use strict';

var onETX = require('./onETX'),
    asynchronousUtilities = require('../../utilities/asynchronous');

var _process = process,
    stdin = _process.stdin,
    stdout = _process.stdout,
    whilst = asynchronousUtilities.whilst,
    _process2 = process,
    exit = _process2.exit;


var BACKSPACE_CHARACTER = String.fromCharCode(127),
    LINE_FEED_CHARACTER = '\n',
    CARRIAGE_RETURN_CHARACTER = '\r';

function prompt(options, callback) {
  var value = null,
      _options$attempts = options.attempts,
      attempts = _options$attempts === undefined ? 3 : _options$attempts,
      context = {
    value: value,
    attempts: attempts,
    options: options
  };


  whilst(attempt, function () {
    var value = context.value;


    callback(value);
  }, context);
}

module.exports = prompt;

function attempt(next, done, context) {
  var attempts = context.attempts;


  var terminate = attempts-- === 0;

  if (terminate) {
    done();

    return;
  }

  var options = context.options,
      description = options.description,
      errorMessage = options.errorMessage,
      validationPattern = options.validationPattern,
      validationFunction = options.validationFunction,
      _options$encoding = options.encoding,
      encoding = _options$encoding === undefined ? 'utf8' : _options$encoding,
      _options$hidden = options.hidden,
      hidden = _options$hidden === undefined ? false : _options$hidden;


  hidden ? hiddenInput(description, encoding, callback) : visibleInput(description, encoding, callback);

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

function visibleInput(description, encoding, callback) {
  var rawMode = false;

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  var value = void 0;

  var listener = function listener(chunk) {
    value = chunk.trim();

    stdin.removeListener('data', listener);

    stdin.pause();

    callback(value);
  };

  stdin.on('data', listener);
}

function hiddenInput(description, encoding, callback) {
  var rawMode = true,
      offETX = onETX(function () {
    console.log('^C');

    exit();
  });

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  var value = '';

  var listener = function listener(chunk) {
    var character = chunk.toString(encoding);

    switch (character) {
      case LINE_FEED_CHARACTER:
      case CARRIAGE_RETURN_CHARACTER:
        stdout.write(LINE_FEED_CHARACTER);

        stdin.removeListener('data', listener);

        stdin.pause();

        offETX();

        callback(value);
        break;

      case BACKSPACE_CHARACTER:
        value = truncate(value);

        stdout.clearLine();

        stdout.cursorTo(0);

        stdout.write(description);
        break;

      default:
        value += character;
        break;
    }
  };

  stdin.on('data', listener);
}

function truncate(value) {
  return value.slice(0, value.length - 1);
}

}).call(this,require('_process'))

},{"../../utilities/asynchronous":95,"./onETX":100,"_process":106}],102:[function(require,module,exports){
'use strict';

var path = require('path');

var arrayUtilities = require('../../utilities/array'),
    fileSystemUtilities = require('../../utilities/fileSystem');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    readFile = fileSystemUtilities.readFile,
    writeFile = fileSystemUtilities.writeFile;


var rcBaseExtension = '';

function rc() {
  var environmentNameOrArgv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var environment = void 0,
      environmentName = void 0;

  if (environmentNameOrArgv instanceof Array) {
    var argv = environmentNameOrArgv;

    environmentName = environmentNameFromArgv(argv);
  } else {
    environmentName = environmentNameOrArgv;
  }

  var json = readRCFile(),
      environments = json.environments;


  if (environmentName === null) {
    var firstEnvironment = first(environments);

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
  var filePath = './.' + rcBaseExtension + 'rc',
      absoluteFilePath = path.resolve(filePath),
      fileContent = readFile(absoluteFilePath),
      json = JSON.parse(fileContent);

  return json;
}

function writeRCFile(json) {
  var filePath = './.' + rcBaseExtension + 'rc',
      absoluteFilePath = path.resolve(filePath),
      fileContent = JSON.stringify(json, null, '\t');

  writeFile(absoluteFilePath, fileContent);
}

function updateRCFile(addedPropperties) {
  var json = readRCFile();

  if (addedPropperties) {
    Object.assign(json, addedPropperties);
  }

  for (var _len = arguments.length, deletedPropertyNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    deletedPropertyNames[_key - 1] = arguments[_key];
  }

  deletedPropertyNames.forEach(function (deletedPropertyName) {
    delete json[deletedPropertyName];
  });

  writeRCFile(json);
}

function setRCBaseExtension(baseExtension) {
  rcBaseExtension = baseExtension;
}

Object.assign(rc, {
  readRCFile: readRCFile,
  writeRCFile: writeRCFile,
  updateRCFile: updateRCFile,
  setRCBaseExtension: setRCBaseExtension
});

module.exports = rc;

function environmentNameFromArgv(argv) {
  var environmentName = null;

  argv.find(function (argument) {
    ///
    var matches = argument.match(/\-\-environment=(.+)/),
        found = matches !== null;

    if (found) {
      var secondMatch = second(matches);

      environmentName = secondMatch;
    }

    return found;
  });

  return environmentName;
}

},{"../../utilities/array":94,"../../utilities/fileSystem":96,"path":105}],103:[function(require,module,exports){
'use strict';

var array = require('./array');

var first = array.first,
    second = array.second,
    last = array.last;


function isPathRelativePath(path) {
  var position = path.search(/^\.{1,2}\//),
      pathRelativePath = position !== -1;

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathRelativePath = isPathRelativePath(path),
      pathAbsolutePath = !pathRelativePath; ///

  return pathAbsolutePath;
}

function isPathTopmostDirectoryName(path) {
  var position = path.search(/^[^\/]+\/?$/),
      pathTopmostDirectoryName = position !== -1;

  return pathTopmostDirectoryName;
}

function isTopmostDirectoryNameContainedInPath(topmostDirectoryName, path) {
  topmostDirectoryName = topmostDirectoryName.replace(/\/$/, ''); ///

  var regExp = new RegExp('^' + topmostDirectoryName + '(?:\\/.+)?$'),
      position = path.search(regExp),
      topmostDirectoryNameContainedInFilePath = position !== -1;

  return topmostDirectoryNameContainedInFilePath;
}

function combinePaths(directoryPath, relativePath) {
  var absolutePath = null;

  var directoryPathSubEntryNames = directoryPath.split('/'),
      relativeFilePathSubEntryNames = relativePath.split('/');

  var firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames),
      lastDirectoryPathSubEntryName = void 0;

  if (firstRelativeFilePathSubEntryName === '.') {
    relativeFilePathSubEntryNames.shift();
  }

  firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
  lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);

  while (firstRelativeFilePathSubEntryName === '..' && lastDirectoryPathSubEntryName !== undefined) {
    relativeFilePathSubEntryNames.shift();
    directoryPathSubEntryNames.pop();

    firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
    lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);
  }

  if (lastDirectoryPathSubEntryName !== undefined) {
    var absoluteFilePathSubEntryNames = [].concat(directoryPathSubEntryNames).concat(relativeFilePathSubEntryNames);

    absolutePath = absoluteFilePathSubEntryNames.join('/');
  }

  return absolutePath;
}

function concatenatePaths(path1, path2) {
  path1 = path1.replace(/\/$/, ''); ///

  var combinedPath = path1 + '/' + path2;

  return combinedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;

  var matches = path.match(/^.+\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = second(matches),
      directoryPath = secondMatch; ///

  return directoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;

  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;

  var matches = path.match(/(^.+)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;

  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  isTopmostDirectoryNameContainedInPath: isTopmostDirectoryNameContainedInPath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

},{"./array":94}],104:[function(require,module,exports){
'use strict';

var fileSystemUtilities = require('../utilities/fileSystem');

var readFile = fileSystemUtilities.readFile;


function parseFile(filePath, args) {
  var content = readFile(filePath),
      parsedContent = parseContent(content, args);

  return parsedContent;
}

function parseContent(content, args) {
  var lines = content.split('\n'),
      parsedLines = parseLines(lines, args),
      parsedContent = parsedLines.join('\n');

  return parsedContent;
}

function parseLine(line, args) {
  var parsedLine = line.replace(/\$\{(.+?)\}/g, function (match, token) {
    var parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

module.exports = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};

function parseLines(lines, args) {
  var parsedLines = lines.map(function (line) {
    var parsedLine = parseLine(line, args);

    return parsedLine;
  });

  return parsedLines;
}

function parseToken(token, args) {
  var parsedToken = '';

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

},{"../utilities/fileSystem":96}],105:[function(require,module,exports){
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

},{"_process":106}],106:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImVzNi9jYW52YXMuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImVzNi9lbGVtZW50L21hc2suanMiLCJlczYvZWxlbWVudC9wYXJ0LmpzIiwiZXM2L2VsZW1lbnQvc2NlbmUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9leGFtcGxlL2N1YmUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCJlczYvZXhhbXBsZS9tYXNraW5nLmpzIiwiZXM2L2V4YW1wbGUvcHlyYW1pZC5qcyIsImVzNi9leGFtcGxlL3NpbXBsZS5qcyIsImVzNi9leGFtcGxlL3RpbGluZy5qcyIsImVzNi9tYXRocy9tYXRyaXguanMiLCJlczYvbWF0aHMvdmVjdG9yLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbi5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCJlczYvbWlzY2VsbGFuZW91cy9wYW4uanMiLCJlczYvbWlzY2VsbGFuZW91cy90aWx0LmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvem9vbS5qcyIsImVzNi9taXhpbi9ibGVuZGluZy5qcyIsImVzNi9taXhpbi9idWZmZXIuanMiLCJlczYvbWl4aW4vY29sb3VyLmpzIiwiZXM2L21peGluL2RlcHRoLmpzIiwiZXM2L21peGluL21hdHJpeC5qcyIsImVzNi9taXhpbi9wcm9ncmFtLmpzIiwiZXM2L21peGluL3NoYWRlci5qcyIsImVzNi9taXhpbi90ZXh0dXJlLmpzIiwiZXM2L3ByaW1pdGl2ZS9lZGdlLmpzIiwiZXM2L3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCJlczYvcHJpbWl0aXZlL2ZhY2V0LmpzIiwiZXM2L3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZC5qcyIsImVzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCJlczYvcHJpbWl0aXZlL21hc2tpbmdGYWNldC5qcyIsImVzNi9wcmltaXRpdmUvbm9ybWFsLmpzIiwiZXM2L3ByaW1pdGl2ZS92ZXJ0ZXguanMiLCJlczYvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZW5kZXJlci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsImVzNi9yZW5kZXJlci9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS5qcyIsImVzNi9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXMuanMiLCJlczYvdXRpbGl0aWVzL2FuZ2xlLmpzIiwiZXM2L3V0aWxpdGllcy9hcHByb3hpbWF0ZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2ZhY2V0LmpzIiwiZXM2L3V0aWxpdGllcy9pbnRlcnNlY3Rpb24uanMiLCJlczYvdXRpbGl0aWVzL21hdHJpeC5qcyIsImVzNi91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCJlczYvdXRpbGl0aWVzL29mZnNldC5qcyIsImVzNi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImVzNi91dGlsaXRpZXMvcm90YXRpb24uanMiLCJlczYvdXRpbGl0aWVzL3RleHR1cmUuanMiLCJlczYvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsImVzNi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJlczYveGdsLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2FqYXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9sb2cuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9ub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9vbkVUWC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL25vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3Byb21wdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL3JjLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3BhdGguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvdGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9saWIveGdsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDYW52YXM6IHJlcXVpcmUoJy4vbGliL2NhbnZhcycpLFxuICBNYXNrOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L21hc2snKSxcbiAgUGFydDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9wYXJ0JyksXG4gIFNjZW5lOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NjZW5lJyksXG4gIENhbWVyYTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW1lcmEnKSxcbiAgR2FtaW5nQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcnKSxcbiAgRGVzaWduQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9kZXNpZ24nKSxcbiAgQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMnKSxcbiAgQ29sb3VyZWRDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpLFxuICBUZXh0dXJlZENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgYmxlbmRpbmdNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYmxlbmRpbmcnKTtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBaX0ZBUiA9IDEwMDAsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCcsXG4gICAgICBERUxUQV9TQ0FMQVIgPSAxLjI1LFxuICAgICAgQU5HTEVTX1NDQUxBUiA9IDAuMDEsXG4gICAgICBPRkZTRVRfU0NBTEFSID0gMC4yNSxcbiAgICAgIENUUkxfS0VZX0NPREUgPSAxNyxcbiAgICAgIFNISUZUX0tFWV9DT0RFID0gMTYsXG4gICAgICBWRVJUSUNFU19MRU5HVEggPSAzLFxuICAgICAgTUlOSU1VTV9ESVNUQU5DRSA9IDEsXG4gICAgICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMSxcbiAgICAgIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgRklFTERfT0ZfVklFVyA9IDQ1ICogREVHUkVFU19UT19SQURJQU5TX1NDQUxBUjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFpfRkFSLFxuICBaX05FQVIsXG4gIE1PVVNFX1VQLFxuICBNT1VTRV9ET1dOLFxuICBNT1VTRV9NT1ZFLFxuICBNT1VTRV9XSEVFTCxcbiAgREVMVEFfU0NBTEFSLFxuICBBTkdMRVNfU0NBTEFSLFxuICBPRkZTRVRfU0NBTEFSLFxuICBDVFJMX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgVkVSVElDRVNfTEVOR1RILFxuICBNSU5JTVVNX0RJU1RBTkNFLFxuICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUixcbiAgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgRklFTERfT0ZfVklFV1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBLZXlFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuXG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIGdldFVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKGNhbnZhcykge1xuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IG9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZSxcbiAgICAgIGZvcmNlVXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qga2V5RXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBudWxsLCAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy96b29tJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIsIHplcm8zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxPZmZzZXQgPSB6ZXJvMygpLFxuICAgICAgZGVmYXVsdEluaXRpYWxEaXN0YW5jZSA9IDU7XG5cbmNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHBhbiwgdGlsdCwgem9vbSkge1xuICAgIHN1cGVyKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzT2Zmc2V0cygpO1xuXG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuXG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucGFuLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzT2Zmc2V0cygpO1xuXG4gICAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH1cblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLnBhbi5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy50aWx0LnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldCh0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLmdldFVwZGF0ZUhhbmRsZXIoKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0ID0gZGVmYXVsdEluaXRpYWxPZmZzZXQsIGluaXRpYWxEaXN0YW5jZSA9IGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBMb2NhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvbG9jYXRpb24nKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgemVybzIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsUG9zaXRpb24gPSBbIDAsIDAsIDUgXTtcblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgdGlsdCwgbG9jYXRpb24pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG5cbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5sb2NhdGlvbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKTtcblxuICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMubG9jYXRpb24uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVhZT2Zmc2V0KG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMudGlsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEsIGNhbnZhcykge1xuICAgIHRoaXMubG9jYXRpb24udXBkYXRlWk9mZnNldChkZWx0YSwgdGhpcy50aWx0KTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMubG9jYXRpb24uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24sIGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gdHJ1ZSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgbG9jYXRpb24gPSBMb2NhdGlvbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgdGlsdCwgbG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGhpZGRlbiA9IGhpZGRlbiB8fCB0aGlzLmhpZGRlbjsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhoaWRkZW4pKTtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBhbWVuZEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2spO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIEltYWdlc1RleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzJyksXG4gICAgICBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAnKTtcblxuY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIgJiYgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRleHR1cmVSZW5kZXJlciAmJiB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVIYW5kbGVyO1xuICB9XG5cbiAgcmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZShyZXNpemVIYW5kbGVyKTtcblxuICAgIHRoaXMub25VcGRhdGUodXBkYXRlSGFuZGxlcik7XG5cbiAgICBmb3JFYWNoKGNoaWxkRWxlbWVudHMsIChjaGlsZEVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzTGVuZ3RoID0gY2hpbGRFbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBjaGlsZEVsZW1lbnRzTGVuZ3RoO1xuXG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIHVwZGF0ZSwgZG9uZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ViZUV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvY3ViZScpLFxuICAgICAgc2ltcGxlRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS9zaW1wbGUnKSxcbiAgICAgIG1hc2tpbmdFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL21hc2tpbmcnKSxcbiAgICAgIHB5cmFtaWRFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL3B5cmFtaWQnKSxcbiAgICAgIHRpbGluZ0V4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvdGlsaW5nJyk7XG5cbmNvbnN0IGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSAnc2ltcGxlJzpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSAnY3ViZSc6XG4gICAgY3ViZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICdtYXNraW5nJzpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgJ3B5cmFtaWQnOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSAndGlsaW5nJzpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBDdWJlID0gcmVxdWlyZSgnLi9lbGVtZW50L2N1YmUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+XG5cblx0PFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cblx0XHQ8UGFydD5cblx0XHRcdDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG5cdFx0PC9QYXJ0PlxuXHRcdDxEZXNpZ25DYW1lcmEgLz5cblx0PC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmVFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpOyAgLy8vXG5cbmNvbnN0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0Q29sb3VyID0gWyAxLCAwLCAwIF07XG5cbmNsYXNzIENvbG91cmVkU3F1YXJlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgXHRjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG5cdFx0XHQgICAgY29sb3VyZWRTcXVhcmUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRTcXVhcmUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gIFx0cmV0dXJuIGNvbG91cmVkU3F1YXJlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRTcXVhcmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2UgPSByZXF1aXJlKCcuL2ZhY2UnKTtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKCcuL2NvbG91cmVkU3F1YXJlJyk7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lkZSA9IHJlcXVpcmUoJy4vc2lkZScpO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQeXJhbWlkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi90ZXh0dXJlZFRyaWFuZ2xlJyk7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW5kZXgnKTsgIC8vL1xuXG5jb25zdCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9ID0geGdsO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5jbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkUXVhZHJhbmdsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW5kZXgnKTsgIC8vL1xuXG5jb25zdCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9ID0geGdsO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkVHJpYW5nbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBDdWJlID0gcmVxdWlyZSgnLi9lbGVtZW50L2N1YmUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBHYW1pbmdDYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgU21hbGxDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBzbWFsbEN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPFNtYWxsQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIE1lZGl1bUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFzaz17c21hbGxDdWJlTWFza30gLz5cblxuICAgICAgICAsXG4gICAgICAgIG1lZGl1bUN1YmVNYXNrID1cblxuICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgPE1lZGl1bUN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBMYXJnZUN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIG1hc2s9e21lZGl1bUN1YmVNYXNrfSAvPlxuXG4gICAgICAgIDtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TGFyZ2VDdWJlIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8R2FtaW5nQ2FtZXJhIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXNraW5nRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IFB5cmFtaWQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcHlyYW1pZCcpLFxuICAgICAgY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbicpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZCAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHlyYW1pZEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCB7IGltYWdlTWFwVVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIHNyYyA9IGltYWdlTWFwVVJJOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXApO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICA8L1BhcnQ+XG4gICAgPERlc2lnbkNhbWVyYSAvPlxuICA8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltcGxlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSwgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbicpLFxuICAgICAgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUnKSxcbiAgICAgIFRleHR1cmVkUXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEgfSA9IHhnbCxcbiAgICAgIHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgbWFzayA9XG5cbiAgICAgICAgPE1hc2s+XG4gICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwIF19IC8+XG4gICAgICAgIDwvTWFzaz5cblxuICAgICAgO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCB7IGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIChpbWFnZXMpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9eydmbG9vcmJvYXJkcy5qcGcnfSBtYXNrPXttYXNrfSAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9eydwYXZpbmcuanBnJ30gbWFzaz17bWFza30gLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhIC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbGluZ0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaWRlbnRpdHkyKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsXG4gICAgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuXG4gICAgICAgIGIwID0gbWF0cml4QlswXSxcbiAgICAgICAgYjEgPSBtYXRyaXhCWzFdLFxuICAgICAgICBiMiA9IG1hdHJpeEJbMl0sXG4gICAgICAgIGIzID0gbWF0cml4QlszXTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMiAqIGIxLFxuICAgIGExICogYjAgKyBhMyAqIGIxLFxuXG4gICAgYTAgKiBiMiArIGEyICogYjMsXG4gICAgYTEgKiBiMiArIGEzICogYjMsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIGEwID0gbWF0cml4QVsgMF0sXG4gICAgICAgICBhMSA9IG1hdHJpeEFbIDFdLFxuICAgICAgICAgYTIgPSBtYXRyaXhBWyAyXSxcbiAgICAgICAgIGEzID0gbWF0cml4QVsgM10sXG4gICAgICAgICBhNCA9IG1hdHJpeEFbIDRdLFxuICAgICAgICAgYTUgPSBtYXRyaXhBWyA1XSxcbiAgICAgICAgIGE2ID0gbWF0cml4QVsgNl0sXG4gICAgICAgICBhNyA9IG1hdHJpeEFbIDddLFxuICAgICAgICAgYTggPSBtYXRyaXhBWyA4XSxcbiAgICAgICAgIGE5ID0gbWF0cml4QVsgOV0sXG4gICAgICAgIGExMCA9IG1hdHJpeEFbMTBdLFxuICAgICAgICBhMTEgPSBtYXRyaXhBWzExXSxcbiAgICAgICAgYTEyID0gbWF0cml4QVsxMl0sXG4gICAgICAgIGExMyA9IG1hdHJpeEFbMTNdLFxuICAgICAgICBhMTQgPSBtYXRyaXhBWzE0XSxcbiAgICAgICAgYTE1ID0gbWF0cml4QVsxNV0sXG5cbiAgICAgICAgIGIwID0gbWF0cml4QlsgMF0sXG4gICAgICAgICBiMSA9IG1hdHJpeEJbIDFdLFxuICAgICAgICAgYjIgPSBtYXRyaXhCWyAyXSxcbiAgICAgICAgIGIzID0gbWF0cml4QlsgM10sXG4gICAgICAgICBiNCA9IG1hdHJpeEJbIDRdLFxuICAgICAgICAgYjUgPSBtYXRyaXhCWyA1XSxcbiAgICAgICAgIGI2ID0gbWF0cml4QlsgNl0sXG4gICAgICAgICBiNyA9IG1hdHJpeEJbIDddLFxuICAgICAgICAgYjggPSBtYXRyaXhCWyA4XSxcbiAgICAgICAgIGI5ID0gbWF0cml4QlsgOV0sXG4gICAgICAgIGIxMCA9IG1hdHJpeEJbMTBdLFxuICAgICAgICBiMTEgPSBtYXRyaXhCWzExXSxcbiAgICAgICAgYjEyID0gbWF0cml4QlsxMl0sXG4gICAgICAgIGIxMyA9IG1hdHJpeEJbMTNdLFxuICAgICAgICBiMTQgPSBtYXRyaXhCWzE0XSxcbiAgICAgICAgYjE1ID0gbWF0cml4QlsxNV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaW52ZXJ0MihtYXRyaXgpIHtcbiAgY29uc3QgbTAgPSBtYXRyaXhbMF0sXG4gICAgICAgIG0xID0gbWF0cml4WzFdLFxuICAgICAgICBtMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTMgPSBtYXRyaXhbM10sXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMCAqIG0zIC0gbTIgKiBtMTtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgK20zIC8gZGV0ZXJtaW5hbnQsIC1tMSAvIGRldGVybWluYW50LFxuICAgICAgLW0yIC8gZGV0ZXJtaW5hbnQsICttMCAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbIDBdLCBtMDEgPSBtYXRyaXhbIDFdLCBtMDIgPSBtYXRyaXhbIDJdLCBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLCBtMTEgPSBtYXRyaXhbIDVdLCBtMTIgPSBtYXRyaXhbIDZdLCBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLCBtMjEgPSBtYXRyaXhbIDldLCBtMjIgPSBtYXRyaXhbMTBdLCBtMjMgPSBtYXRyaXhbMTFdLFxuICAgICAgICBtMzAgPSBtYXRyaXhbMTJdLCBtMzEgPSBtYXRyaXhbMTNdLCBtMzIgPSBtYXRyaXhbMTRdLCBtMzMgPSBtYXRyaXhbMTVdLFxuXG4gICAgICAgIGIwMCA9IG0wMCAqIG0xMSAtIG0wMSAqIG0xMCxcbiAgICAgICAgYjAxID0gbTAwICogbTEyIC0gbTAyICogbTEwLFxuICAgICAgICBiMDIgPSBtMDAgKiBtMTMgLSBtMDMgKiBtMTAsXG4gICAgICAgIGIwMyA9IG0wMSAqIG0xMiAtIG0wMiAqIG0xMSxcbiAgICAgICAgYjA0ID0gbTAxICogbTEzIC0gbTAzICogbTExLFxuICAgICAgICBiMDUgPSBtMDIgKiBtMTMgLSBtMDMgKiBtMTIsXG4gICAgICAgIGIwNiA9IG0yMCAqIG0zMSAtIG0yMSAqIG0zMCxcbiAgICAgICAgYjA3ID0gbTIwICogbTMyIC0gbTIyICogbTMwLFxuICAgICAgICBiMDggPSBtMjAgKiBtMzMgLSBtMjMgKiBtMzAsXG4gICAgICAgIGIwOSA9IG0yMSAqIG0zMiAtIG0yMiAqIG0zMSxcbiAgICAgICAgYjEwID0gbTIxICogbTMzIC0gbTIzICogbTMxLFxuICAgICAgICBiMTEgPSBtMjIgKiBtMzMgLSBtMjMgKiBtMzIsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIChtMTEgKiBiMTEgLSBtMTIgKiBiMTAgKyBtMTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMDIgKiBiMTAgLSBtMDEgKiBiMTEgLSBtMDMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDUgLSBtMzIgKiBiMDQgKyBtMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMjIgKiBiMDQgLSBtMjEgKiBiMDUgLSBtMjMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEyICogYjA4IC0gbTEwICogYjExIC0gbTEzICogYjA3KSAvIGRldGVybWluYW50LCAobTAwICogYjExIC0gbTAyICogYjA4ICsgbTAzICogYjA3KSAvIGRldGVybWluYW50LCAobTMyICogYjAyIC0gbTMwICogYjA1IC0gbTMzICogYjAxKSAvIGRldGVybWluYW50LCAobTIwICogYjA1IC0gbTIyICogYjAyICsgbTIzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMCAqIGIxMCAtIG0xMSAqIGIwOCArIG0xMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMSAqIGIwOCAtIG0wMCAqIGIxMCAtIG0wMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMCAqIGIwNCAtIG0zMSAqIGIwMiArIG0zMyAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMSAqIGIwMiAtIG0yMCAqIGIwNCAtIG0yMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTEgKiBiMDcgLSBtMTAgKiBiMDkgLSBtMTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMDkgLSBtMDEgKiBiMDcgKyBtMDIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDEgLSBtMzAgKiBiMDMgLSBtMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDMgLSBtMjEgKiBiMDEgKyBtMjIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzJdLFxuICAgIG1hdHJpeFsxXSwgbWF0cml4WzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0sIG1hdHJpeFsgNF0sIG1hdHJpeFsgOF0sIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WyAxXSwgbWF0cml4WyA1XSwgbWF0cml4WyA5XSwgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbIDJdLCBtYXRyaXhbIDZdLCBtYXRyaXhbMTBdLCBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsgM10sIG1hdHJpeFsgN10sIG1hdHJpeFsxMV0sIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHgsIG1hdHJpeFsgMV0gKiB4LCBtYXRyaXhbIDJdICogeCwgbWF0cml4WyAzXSAqIHgsXG4gICAgbWF0cml4WyA0XSAqIHksIG1hdHJpeFsgNV0gKiB5LCBtYXRyaXhbIDZdICogeSwgbWF0cml4WyA3XSAqIHksXG4gICAgbWF0cml4WyA4XSAqIHosIG1hdHJpeFsgOV0gKiB6LCBtYXRyaXhbMTBdICogeiwgbWF0cml4WzExXSAqIHosXG4gICAgbWF0cml4WzEyXSAqIDEsIG1hdHJpeFsxM10gKiAxLCBtYXRyaXhbMTRdICogMSwgbWF0cml4WzE1XSAqIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuXG4gICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgIG0yMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMyxcbiAgICBtMDAgKiB4ICsgbTEwICogeSArIG0yMCAqIHogKyBtYXRyaXhbMTJdLCBtMDEgKiB4ICsgbTExICogeSArIG0yMSAqIHogKyBtYXRyaXhbMTNdLCBtMDIgKiB4ICsgbTEyICogeSArIG0yMiAqIHogKyBtYXRyaXhbMTRdLCBtMDMgKiB4ICsgbTEzICogeSArIG0yMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gemVybzMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbmZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSk7IH1cblxuZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdICsgdmVjdG9yQVszXSAqIHZlY3RvckJbM10pOyB9XG5cbmZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzNdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKyB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gLSB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuICAgIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFszXSAqIHkgKyBtYXRyaXhbNl0gKiB6LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzddICogeixcbiAgICBtYXRyaXhbMl0gKiB4ICsgbWF0cml4WzVdICogeSArIG1hdHJpeFs4XSAqIHosXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4ICsgbWF0cml4WyA0XSAqIHkgKyBtYXRyaXhbIDhdICogeiArIG1hdHJpeFsxMl0gKiB3LFxuICAgIG1hdHJpeFsgMV0gKiB4ICsgbWF0cml4WyA1XSAqIHkgKyBtYXRyaXhbIDldICogeiArIG1hdHJpeFsxM10gKiB3LFxuICAgIG1hdHJpeFsgMl0gKiB4ICsgbWF0cml4WyA2XSAqIHkgKyBtYXRyaXhbMTBdICogeiArIG1hdHJpeFsxNF0gKiB3LFxuICAgIG1hdHJpeFsgM10gKiB4ICsgbWF0cml4WyA3XSAqIHkgKyBtYXRyaXhbMTFdICogeiArIG1hdHJpeFsxNV0gKiB3LFxuXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgemVybzIsXG4gIHplcm8zLFxuICB6ZXJvNCxcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5fX2NvbmZpZ3VyYXRpb25fXzsgLy8vXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IENUUkxfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBjdHJsS2V5RG93biwgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMuY3RybEtleURvd24gPSBjdHJsS2V5RG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzQ3RybEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3RybEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBDVFJMX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5jdHJsS2V5VXBFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNISUZUX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5zaGlmdEtleVVwRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIENUUkxfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLmN0cmxLZXlEb3duRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTSElGVF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuc2hpZnRLZXlEb3duRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIGN0cmxLZXlVcEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jdHJsS2V5RG93biA9IGZhbHNlO1xuXG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKChjdHJsS2V5SGFuZGxlcikgPT4gY3RybEtleUhhbmRsZXIodGhpcy5jdHJsS2V5RG93bikpO1xuICB9XG5cbiAgc2hpZnRLZXlVcEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGN0cmxLZXlEb3duRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLmN0cmxLZXlEb3duID0gdHJ1ZTtcblxuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKHRoaXMuY3RybEtleURvd24pKTtcbiAgfVxuXG4gIHNoaWZ0S2V5RG93bkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKChzaGlmdEtleUhhbmRsZXIpID0+IHNoaWZ0S2V5SGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkQ3RybEtleUhhbmRsZXIoY3RybEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBDVFJMX0tFWV9DT0RFIF07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuICAgIFxuICAgIGhhbmRsZXJzTWFwWyBDVFJMX0tFWV9DT0RFIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgU0hJRlRfS0VZX0NPREUgXSA9IFtdO1xuXG4gICAgY29uc3QgY3RybEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVyc01hcCwgY3RybEtleURvd24sIHNoaWZ0S2V5RG93biksXG4gICAgICAgICAga2V5VXBFdmVudExpc3RlbmVyID0ga2V5RXZlbnRzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKGtleUV2ZW50cyksXG4gICAgICAgICAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSBrZXlFdmVudHMua2V5RG93bkV2ZW50TGlzdGVuZXIuYmluZChrZXlFdmVudHMpLFxuICAgICAgICAgIGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBFdmVudExpc3RlbmVyKTtcbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25FdmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG9mZnNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9vZmZzZXQnKTtcblxuY29uc3QgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiwgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgREVMVEFfU0NBTEFSLCBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGNhbGN1bGF0ZVhBbmdsZU9mZnNldCwgY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0LCBjYWxjdWxhdGVaQW5nbGVPZmZzZXQgfSA9IG9mZnNldFV0aWxpdGllcztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgdXBkYXRlWFlPZmZzZXQobW91c2VDb29yZGluYXRlcywgdGlsdCkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgeEFuZ2xlID0gdGlsdC5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aWx0LmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKGFkZDModGhpcy5vZmZzZXRzLCB5QW5nbGVPZmZzZXQpLCB4QW5nbGVPZmZzZXQpO1xuICB9XG5cbiAgdXBkYXRlWk9mZnNldChkZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IHRpbHQuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gdGlsdC5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBERUxUQV9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHRoaXJkUmVsYXRpdmVPZmZzZXQgPSBkZWx0YSAqIHNjYWxhcixcbiAgICAgICAgICB6QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVaQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHRoaXJkUmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHpBbmdsZU9mZnNldCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgLTEpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKG9mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9jYXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24sIHRoaXMuY2FudmFzKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX1VQKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfRE9XTik7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFX01PVkUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKGRlbHRhLCB0aGlzLmNhbnZhcykpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9O1xuXG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfRE9XTiBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdID0gW107XG5cbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24sIGNhbnZhcyksXG4gICAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG5cdFx0XHRcdFx0bW91c2VVcEV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZURvd25FdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKG1vdXNlRXZlbnRzKSxcblx0XHRcdFx0XHRtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlV2hlZWxFdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBvZmZzZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0Jyk7XG5cbmNvbnN0IHsgT0ZGU0VUX1NDQUxBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB6ZXJvMiwgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBjYWxjdWxhdGVYQW5nbGVPZmZzZXQsIGNhbGN1bGF0ZVlBbmdsZU9mZnNldCB9ID0gb2Zmc2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSBwcmV2aW91c09mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNPZmZzZXRzKCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aWx0LmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRpbHQuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgeUFuZ2xlT2Zmc2V0ID0gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGVPZmZzZXQgPSBjYWxjdWxhdGVYQW5nbGVPZmZzZXQoeEFuZ2xlLCB5QW5nbGUsIHNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKGFkZDModGhpcy5wcmV2aW91c09mZnNldHMsIHlBbmdsZU9mZnNldCksIHhBbmdsZU9mZnNldCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0cyA9IG9mZnNldHMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDIsIHNjYWxlMiwgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeEFuZ2xlID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLXNlY29uZEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRBbmdsZTtcblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICBmaXJzdEFuZ2xlIDpcbiAgICAgICAgICAgICAgICAgICAgICAtZmlyc3RBbmdsZTtcblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHsgLy8vXG4gICAgY29uc3QgeEFuZ2xlID0gdGhpcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IHRoaXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgYW5nbGVzID0gW1xuICAgICAgICAgICAgeEFuZ2xlLFxuICAgICAgICAgICAgeUFuZ2xlLFxuICAgICAgICAgICAgekFuZ2xlXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG4gIFxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzQW5nbGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNBbmdsZXMgPSB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRVNfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMih0aGlzLnByZXZpb3VzQW5nbGVzLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICArREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgICAgICAgICBhbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgc2NhbGFyKSxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlcyA9IGFuZ2xlcywgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGlsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVMVEFfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UoZGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IGRlbHRhICogREVMVEFfU0NBTEFSO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KE1JTklNVU1fRElTVEFOQ0UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmFibGVCbGVuZGluZ1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgXG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KSB7XG5cdGNvbnN0IHsgUkdCQSwgTElORUFSLCBVTlNJR05FRF9CWVRFLCBURVhUVVJFMCwgVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBVTlBBQ0tfRkxJUF9ZX1dFQkdMLCBDTEFNUF9UT19FREdFLCBORUFSRVNULCBSRVBFQVQsIFRFWFRVUkVfTUlOX0ZJTFRFUiB9ID0gdGhpcy5jb250ZXh0LFxuXHRcdFx0XHR0YXJnZXQgPSBURVhUVVJFMCArIGluZGV4LFxuXHRcdFx0XHRsZXZlbCA9IDAsXG5cdFx0XHRcdGludGVybmFsRm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0Zm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0dHlwZSA9IFVOU0lHTkVEX0JZVEUsXG5cdFx0XHRcdHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC5waXhlbFN0b3JlaShVTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIGlmIChyZXBlYXQpIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgUkVQRUFUKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgUkVQRUFUKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIENMQU1QX1RPX0VER0UpO1xuICB9XG5cblx0dGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xuXG5cdHJldHVybiB0ZXh0dXJlO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbignTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbignV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVRleHR1cmUsXG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHN1YnRyYWN0MyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4O1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzcztcbiAgICAgIENsYXNzID0gRWRnZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBtaWRQb2ludFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9taWRQb2ludCcpO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gPSBtaWRQb2ludFV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0VkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL3ZlcnRleCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIG1pZFBvaW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21pZFBvaW50JyksXG4gICAgICBpbnRlcnNlY3Rpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uJyk7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHB1c2gsIHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSA9IG1pZFBvaW50VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiwgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCwgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4IH0gPSBpbnRlcnNlY3Rpb25VdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4gdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXModGhpcy52ZXJ0aWNlcyk7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCk7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91cikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWy4uLmNvbG91ciwgMV07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIE1hc2tpbmdFZGdlID0gcmVxdWlyZSgnLi9lZGdlL21hc2tpbmcnKSxcbiAgICAgIFZlcnRpY2FsTGluZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IFZFUlRJQ0VTX0xFTkdUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0KSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKSxcbiAgICAgIGludGVyc2VjdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24nKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gPSBpbnRlcnNlY3Rpb25VdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2J1ZmZlcnMnKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvYnVmZmVycycpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91cicpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtJyksXG4gICAgICBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJEYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9kYXRhJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IG1lcmdlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpO1xuXG5jbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyk7XG5cbmNvbnN0IHsgc2FtcGxlck5hbWUgfSA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleENvbG91cicsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSAndU5vcm1hbHNNYXRyaXgnLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbHNNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsc01hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGxpZ2h0aW5nU291cmNlLCB7XG4gIG5vcm1hbHNNYXRyaXhOYW1lLFxuICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaWdodGluZ1NvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSAndU9mZnNldHNNYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICByb3RhdGlvbnNNYXRyaXhOYW1lID0gJ3VSb3RhdGlvbnNNYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHBvc2l0aW9uU291cmNlLCB7XG4gIG9mZnNldHNNYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uc01hdHJpeE5hbWUsXG4gIHByb2plY3Rpb25NYXRyaXhOYW1lLFxuICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWVcbn0pO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGZyYWdtZW50U2hhZGVyU291cmNlLCB7XG4gIHNhbXBsZXJOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9ICdhVGV4dHVyZUNvb3JkaW5hdGUnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybScpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IHRleHR1cmVSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBDbGFzcyhmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSxcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9ID0gY29uc3RhbnRzO1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lLFxuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVyb1xufTtcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZUEsIHZhbHVlQiwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZUEgLSB2YWx1ZUIsXG4gICAgICAgIGFic29sdXRlRGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpLFxuICAgICAgICBhcHByb3hpbWF0ZWx5RXF1YWwgPSAoYWJzb2x1dGVEaWZmZXJlbmNlIDwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIGFwcHJveGltYXRlbHlFcXVhbDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHNdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIHBlcm11dGUsXG4gIGZsYXR0ZW4sXG4gIGd1YXJhbnRlZVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSA9IHZlY3Rvck1hdGhzO1xuXG5mdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiBlZGdlLmNsb25lKCkpO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xvbmUoKSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSkge1xuICBjb25zdCBlZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lRWRnZXMsXG4gIGNsb25lTm9ybWFsLFxuICBjbG9uZVZlcnRpY2VzLFxuICBjYWxjdWxhdGVFZGdlcyxcbiAgY2FsY3VsYXRlTm9ybWFsLFxuICBjYWxjdWxhdGVBcmVhXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb24sXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25cbn07XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgbWF0cml4TWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy9tYXRyaXgnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiwgRklFTERfT0ZfVklFVywgWl9ORUFSLCBaX0ZBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gPSBtYXRyaXhNYXRocztcblxuZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLFxuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLFxuXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLCAgLy8vXG4gICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgIHpOZWFyID0gWl9ORUFSLCAvLy9cbiAgICAgICAgekZhciA9IFpfRkFSLCAvLy9cbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNjYWxlTWF0cml4RnJvbVNjYWxlLFxuICBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbixcbiAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyxcbiAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgYWRkMywgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sXG4gIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUsXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzXG59O1xuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0KHhBbmdsZSwgeUFuZ2xlLCBzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgY29uc3Qgc2Vjb25kU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGUgPSBzZWNvbmQoc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgeEFuZ2xlT2Zmc2V0ID0gW1xuICAgICAgICAgIC1NYXRoLnNpbih5QW5nbGUpICogTWF0aC5zaW4oeEFuZ2xlKSAqIHNlY29uZFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gTWF0aC5jb3MoeEFuZ2xlKSAqIHNlY29uZFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlLFxuICAgICAgICAgICtNYXRoLmNvcyh5QW5nbGUpICogTWF0aC5zaW4oeEFuZ2xlKSAqIHNlY29uZFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHhBbmdsZU9mZnNldDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlWUFuZ2xlT2Zmc2V0KHlBbmdsZSwgc2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGZpcnN0U2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGUgPSBmaXJzdChzY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICB5QW5nbGVPZmZzZXQgPSBbXG4gICAgICAgICAgLU1hdGguY29zKHlBbmdsZSkgKiBmaXJzdFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlLFxuICAgICAgICAgICswLFxuICAgICAgICAgIC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZVxuICAgICAgICBdO1xuXG4gIHJldHVybiB5QW5nbGVPZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVpBbmdsZU9mZnNldCh4QW5nbGUsIHlBbmdsZSwgdGhpcmRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZSkge1xuICBjb25zdCB6QW5nbGVPZmZzZXQgPSBbXG4gICAgICAgICAgLU1hdGguc2luKHlBbmdsZSkgKiBNYXRoLmNvcyh4QW5nbGUpICogdGhpcmRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc2luKHhBbmdsZSkgKiB0aGlyZFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlLFxuICAgICAgICAgICtNYXRoLmNvcyh5QW5nbGUpICogTWF0aC5jb3MoeEFuZ2xlKSAqIHRoaXJkU2NhbGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVcbiAgICAgICAgXTtcblxuICByZXR1cm4gekFuZ2xlT2Zmc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlWEFuZ2xlT2Zmc2V0LFxuICBjYWxjdWxhdGVZQW5nbGVPZmZzZXQsXG4gIGNhbGN1bGF0ZVpBbmdsZU9mZnNldFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBhbmdsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hbmdsZScpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBkb3QzLCBjcm9zczMsIG5vcm1hbGlzZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSwgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSB9ID0gYW5nbGVVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb24sICAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmaXJzdChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gc2Vjb25kKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmb3VydGgocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLWZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBleHRlbnQgPSBub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXROb3JtYWwgPSBleHRlbnQsICAvLy9cbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgICAgZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gZG90Myh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gY3Jvc3MzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLCAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSksXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb25cbn07XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uJyk7XG5cbmNvbnN0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcztcblxuZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlUG9zaXRpb25cbn07XG5cbmZ1bmN0aW9uIGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFswLCAuLi5wb3NpdGlvbl07IH0gIC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24pIHsgcmV0dXJuIGltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IH0gIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXRyaXhNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL21hdHJpeCcpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uJyk7XG5cbmNvbnN0IHsgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBpbnZlcnQyLCBpbnZlcnQzIH0gPSBtYXRyaXhNYXRocyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXMsXG4gICAgICB7IGFkZDIsIG11bHRpcGx5MiwgdHJhbnNmb3JtMiwgdHJhbnNmb3JtMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmZ1bmN0aW9uIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHRleHR1cmVDb29yZGluYXRlVHVwbGUuc2xpY2UoKSk7ICAvLy9cblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pKTsgLy8vXG5cbiAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCB0ZW1wVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gdGVtcFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLFxuICBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyxcbiAgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeE1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0cml4JyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgbXVsdGlwbHk0IH0gPSBtYXRyaXhNYXRocyxcbiAgICAgIHsgdHJhbnNmb3JtNCB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsuLi52ZWN0b3IsIDFdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBvc2VUcmFuc2Zvcm1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVWZXJ0aWNlcyxcbiAgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGhVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9wYXRoJyksXG4gIGFycmF5VXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXJyYXknKSxcbiAgdGVtcGxhdGVVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy90ZW1wbGF0ZScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKSxcbiAgbWlzY2VsbGFuZW91c1V0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBhcnJheTIpIHtcbiAgaWYgKCEoYXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgYXJyYXkyID0gW2FycmF5Ml07XG4gIH1cblxuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gYXJyYXkyLmxlbmd0aCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjb25jYXQ6IGNvbmNhdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnk6IGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5OiBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBkb2VzRW50cnlFeGlzdChhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBkb2VzRmlsZUV4aXN0KGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGRvZXNFbnRyeUV4aXN0KGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGRvZXNEaXJlY3RvcnlFeGlzdChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZG9lc0VudHJ5RXhpc3QoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLmFwcGVuZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5hbWVGaWxlKG9sZEFic29sdXRlRmlsZVBhdGgsIG5ld0Fic29sdXRlRmlsZVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRBYnNvbHV0ZUZpbGVQYXRoLCBuZXdBYnNvbHV0ZUZpbGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHMoYWJzb2x1dGVGaWxlUGF0aCkge1xuICByZXR1cm4gZnMuc3RhdFN5bmMoYWJzb2x1dGVGaWxlUGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb2VzRW50cnlFeGlzdDogZG9lc0VudHJ5RXhpc3QsXG4gIGRvZXNGaWxlRXhpc3Q6IGRvZXNGaWxlRXhpc3QsXG4gIGRvZXNEaXJlY3RvcnlFeGlzdDogZG9lc0RpcmVjdG9yeUV4aXN0LFxuICBpc0VudHJ5RmlsZTogaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGUsXG4gIGFwcGVuZFRvRmlsZTogYXBwZW5kVG9GaWxlLFxuICByZW5hbWVGaWxlOiByZW5hbWVGaWxlLFxuICBnZXRTdGF0czogZ2V0U3RhdHNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJjID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL3JjJyksXG4gICAgICBsb2cgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvbG9nJyksXG4gICAgICBhamF4ID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL2FqYXgnKSxcbiAgICAgIG9uRVRYID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL29uRVRYJyksXG4gICAgICBwcm9tcHQgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvcHJvbXB0Jyk7XG5cbmNvbnN0IHsgZ2V0LCBwb3N0IH0gPSBhamF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nOiBsb2csXG4gIHJjOiByYyxcbiAgZ2V0OiBnZXQsXG4gIHBvc3Q6IHBvc3QsXG4gIG9uRVRYOiBvbkVUWCxcbiAgcHJvbXB0OiBwcm9tcHRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEdFVF9NRVRIT0QgPSAnR0VUJyxcbiAgICAgIFBPU1RfTUVUSE9EID0gJ1BPU1QnO1xuXG5mdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBqc29uLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6IGdldCxcbiAgcG9zdDogcG9zdFxufTtcblxuZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycyksXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBpZiAoc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gcmVzcG9uc2VUZXh0LCAvLy9cbiAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgY2FsbGJhY2soanNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KTtcbn1cblxuZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycykge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycyksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gJycpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fS8ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9LyR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/ICcmJyA6ICcnO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCAnJyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBwYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3BhdGgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBkb2VzRmlsZUV4aXN0LCByZWFkRmlsZSwgYXBwZW5kVG9GaWxlLCByZW5hbWVGaWxlLCBnZXRTdGF0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY29uc3QgVFJBQ0UgPSAnVFJBQ0UnLFxuICAgICAgREVCVUcgPSAnREVCVUcnLFxuICAgICAgSU5GTyA9ICdJTkZPJyxcbiAgICAgIFdBUk5JTkcgPSAnV0FSTklORycsXG4gICAgICBFUlJPUiA9ICdFUlJPUicsXG4gICAgICBGQVRBTCA9ICdGQVRBTCc7XG5cbmxldCBsb2dMZXZlbCA9IFdBUk5JTkcsXG4gICAgbG9nRmlsZUJhc2VOYW1lID0gJ2RlZmF1bHQnLFxuICAgIGxvZ0RpcmVjdG9yeVBhdGggPSBudWxsO1xuXG5mdW5jdGlvbiBsb2cobWVzc2FnZSwgbGV2ZWwgPSAnJykge1xuICBsZXQgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggPSAyO1xuXG4gIGNvbnN0IGxldmVscyA9IFtcbiAgICBUUkFDRSxcbiAgICBERUJVRyxcbiAgICBJTkZPLFxuICAgIFdBUk5JTkcsXG4gICAgRVJST1IsXG4gICAgRkFUQUxcbiAgXTtcblxuICBpZiAobGV2ZWwpIHsgLy8vXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggKz0gMTtcblxuICAgIGxldmVsID0gYCR7bGV2ZWx9IGA7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCksXG4gICAgICAgIHsgc3RhY2sgfSA9IGVycm9yLFxuICAgICAgICBzdGFja01lc3NhZ2VzID0gc3RhY2suc3BsaXQoL1xcclxcbnxcXG4vKSxcbiAgICAgICAgcGVydGluZW50U3RhY2tNZXNzYWdlID0gc3RhY2tNZXNzYWdlc1twZXJ0aW5lbnRTdGFja01lc3NhZ2VJbmRleF0sXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpLFxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShwZXJ0aW5lbnRTdGFja01lc3NhZ2UpLFxuICAgICAgICBsaW5lTnVtYmVyID0gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2UocGVydGluZW50U3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbG9nTWVzc2FnZSA9IGAke2xldmVsfSR7Y3VycmVudERhdGVBbmRUaW1lU3RyaW5nfSAke2ZpbGVQYXRofSgke2xpbmVOdW1iZXJ9KSAke21lc3NhZ2V9YDtcblxuICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcblxuICBpZiAobG9nRGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHJvbGxPdmVyTG9nRmlsZSgpO1xuXG4gICAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gYCR7bG9nTWVzc2FnZX1cXG5gO1xuXG4gICAgYXBwZW5kVG9GaWxlKGxvZ0ZpbGVQYXRoLCBsb2dGaWxlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbG9nTWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gdHJhY2UobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFRSQUNFKTsgfVxuXG5mdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgREVCVUcpOyB9XG5cbmZ1bmN0aW9uIGluZm8obWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIElORk8pOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFdBUk5JTkcpOyB9XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBFUlJPUik7IH1cblxuZnVuY3Rpb24gZmF0YWwobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEZBVEFMKTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkgeyBsb2dMZXZlbCA9IGxldmVsOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpIHsgbG9nRmlsZUJhc2VOYW1lID0gZmlsZUJhc2VOYW1lOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkgeyBsb2dEaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aDsgfVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlQ29udGVudCgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlQ29udGVudCA9IHJlYWRGaWxlKGxvZ0ZpbGVQYXRoKTtcblxuICByZXR1cm4gbG9nRmlsZUNvbnRlbnQ7XG59XG5cbk9iamVjdC5hc3NpZ24obG9nLCB7XG4gIFRSQUNFOiBUUkFDRSxcbiAgREVCVUc6IERFQlVHLFxuICBJTkZPOiBJTkZPLFxuICBXQVJOSU5HOiBXQVJOSU5HLFxuICBFUlJPUjogRVJST1IsXG4gIEZBVEFMOiBGQVRBTCxcbiAgdHJhY2U6IHRyYWNlLFxuICBkZWJ1ZzogZGVidWcsXG4gIGluZm86IGluZm8sXG4gIHdhcm5pbmc6IHdhcm5pbmcsXG4gIGVycm9yOiBlcnJvcixcbiAgZmF0YWw6IGZhdGFsLFxuICBzZXRMb2dMZXZlbDogc2V0TG9nTGV2ZWwsXG4gIHNldExvZ0ZpbGVCYXNlTmFtZTogc2V0TG9nRmlsZUJhc2VOYW1lLFxuICBzZXRMb2dEaXJlY3RvcnlQYXRoOiBzZXRMb2dEaXJlY3RvcnlQYXRoLFxuICBnZXRMb2dGaWxlQ29udGVudDogZ2V0TG9nRmlsZUNvbnRlbnRcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZztcblxuZnVuY3Rpb24gZ2V0TG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS5sb2dgLFxuICAgICAgICBsb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgbG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiBsb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IGdldEN1cnJlbnREYXRlU3RyaW5nKCksXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0uJHtjdXJyZW50RGF0ZVN0cmluZ30ubG9nYCxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCByb2xsZWRPdmVyTG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiByb2xsZWRPdmVyTG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVTdGF0cyA9IGdldFN0YXRzKGxvZ0ZpbGVQYXRoKSxcbiAgICAgICAgeyBtdGltZSB9ID0gbG9nRmlsZVN0YXRzLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKG10aW1lKTsgIC8vL1xuXG4gIHJldHVybiBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbE92ZXJMb2dGaWxlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVFeGlzdHMgPSBkb2VzRmlsZUV4aXN0KGxvZ0ZpbGVQYXRoKTtcblxuICBpZiAoIWxvZ0ZpbGVFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCksXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUgPSBpc0RhdGVDdXJyZW50RGF0ZShsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSk7XG5cbiAgaWYgKCFsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlKSB7XG4gICAgY29uc3Qgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCk7XG5cbiAgICByZW5hbWVGaWxlKGxvZ0ZpbGVQYXRoLCByb2xsZWRPdmVyTG9nRmlsZVBhdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUN1cnJlbnREYXRlKGRhdGUpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgZGF0ZUN1cnJlbnREYXRlID0gKGRhdGVTdHJpbmcgPT09IGN1cnJlbnREYXRlU3RyaW5nKTtcblxuICByZXR1cm4gZGF0ZUN1cnJlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBob3VycyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgICAgICBtaW51dGVzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldFNlY29uZHMoKSwgMiksXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfS4ke21pbGxpc2Vjb25kc31gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvKFxcLy4rKVxcOlxcZCtcXDpcXGQrLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlKCcuJyksICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggKyAxLCAgLy8vXG4gICAgICAgIGZpbGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aC5zdWJzdHIoc3RhcnQpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goL1xcOihcXGQrKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgbGluZU51bWJlciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gbGluZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnRXaXRoWmVyb2VzKHN0cmluZywgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHBhZFN0cmluZyA9ICcwJyxcbiAgICAgICAgcGFkZGVkU3RyaW5nID0gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZyk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YXJnZXRMZW5ndGg7IGluZGV4KyspIHtcbiAgICBwYWRkaW5nICs9IHBhZFN0cmluZztcbiAgfVxuXG4gIGNvbnN0IHBhZGRlZFN0cmluZyA9IGAke3BhZGRpbmd9JHtzdHJpbmd9YC5zdWJzdHIoLXRhcmdldExlbmd0aCk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFVFhfQ0hBUkFDVEVSID0gJ1xcdTAwMDMnO1xuXG5mdW5jdGlvbiBvbkVUWChoYW5kbGVyKSB7XG4gIGNvbnN0IHsgc3RkaW4gfSA9IHByb2Nlc3MsXG4gICAgICAgIHsgc2V0UmF3TW9kZSB9ID0gc3RkaW47XG5cbiAgaWYgKHNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9ICd1dGY4JztcblxuICAgIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBzdGRpbi5hZGRMaXN0ZW5lcignZGF0YScsIGRhdGFIYW5kbGVyKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb25FVFg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9uRVRYID0gcmVxdWlyZSgnLi9vbkVUWCcpLFxuICAgICAgYXN5bmNocm9ub3VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91cycpO1xuXG5jb25zdCB7IHN0ZGluLCBzdGRvdXQgfSA9IHByb2Nlc3MsXG4gICAgICB7IHdoaWxzdCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBleGl0IH0gPSBwcm9jZXNzO1xuXG5jb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpLFxuICAgICAgTElORV9GRUVEX0NIQVJBQ1RFUiA9ICdcXG4nLFxuICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9ICdcXHInO1xuXG5mdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgdmFsdWUgPSBudWxsLFxuICAgICAgICB7IGF0dGVtcHRzID0gMyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayh2YWx1ZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb21wdDtcblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24sXG4gICAgICAgICAgZW5jb2RpbmcgPSAndXRmOCcsXG4gICAgICAgICAgaGlkZGVuID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cbiAgaGlkZGVuID8gXG4gICAgaGlkZGVuSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykgOlxuICAgICAgdmlzaWJsZUlucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0aW9uRnVuY3Rpb24gPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QodmFsdWUpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCByYXdNb2RlID0gZmFsc2U7XG5cbiAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBzdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBzdGRpbi5yZXN1bWUoKTtcblxuICBsZXQgdmFsdWU7XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIHZhbHVlID0gY2h1bmsudHJpbSgpO1xuXG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBsaXN0ZW5lcik7XG5cbiAgICBzdGRpbi5wYXVzZSgpO1xuXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9O1xuXG4gIHN0ZGluLm9uKCdkYXRhJywgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBoaWRkZW5JbnB1dChkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJhd01vZGUgPSB0cnVlLFxuICAgICAgICBvZmZFVFggPSBvbkVUWChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXkMnKTtcblxuICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBzdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBzdGRpbi5yZXN1bWUoKTtcblxuICBsZXQgdmFsdWUgPSAnJztcblxuICBjb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gY2h1bmsudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTElORV9GRUVEX0NIQVJBQ1RFUiA6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgOlxuICAgICAgICBzdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICB2YWx1ZSA9IHRydW5jYXRlKHZhbHVlKTtcblxuICAgICAgICBzdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBzdGRpbi5vbignZGF0YScsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGUodmFsdWUpIHsgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxubGV0IHJjQmFzZUV4dGVuc2lvbiA9ICcnO1xuXG5mdW5jdGlvbiByYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25zdCBhcmd2ID0gZW52aXJvbm1lbnROYW1lT3JBcmd2O1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2O1xuICB9XG5cbiAgY29uc3QganNvbiA9IHJlYWRSQ0ZpbGUoKSxcbiAgICAgICAgeyBlbnZpcm9ubWVudHMgfSA9IGpzb247XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0RW52aXJvbm1lbnQgPSBmaXJzdChlbnZpcm9ubWVudHMpO1xuXG4gICAgZW52aXJvbm1lbnQgPSBmaXJzdEVudmlyb25tZW50OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50cy5maW5kKGZ1bmN0aW9uKGVudmlyb25tZW50KSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtyY0Jhc2VFeHRlbnNpb259cmNgLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoKSxcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7cmNCYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgYFxcdGApO1xuXG4gIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BwZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wcGVydGllcyk7XG4gIH1cblxuICBkZWxldGVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihiYXNlRXh0ZW5zaW9uKSB7IHJjQmFzZUV4dGVuc2lvbiA9IGJhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihyYywge1xuICByZWFkUkNGaWxlOiByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZTogd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZTogdXBkYXRlUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb246IHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmM7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKGZ1bmN0aW9uKGFyZ3VtZW50KSB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goL1xcLVxcLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzKSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncyksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKCdcXG4nKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgZnVuY3Rpb24obWF0Y2gsIHRva2VuKSB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZUZpbGU6IHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50OiBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZTogcGFyc2VMaW5lXG59O1xuXG5mdW5jdGlvbiBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpO1xuXG4gICAgcmV0dXJuIHBhcnNlZExpbmU7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lcztcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbih0b2tlbiwgYXJncykge1xuICBsZXQgcGFyc2VkVG9rZW4gPSAnJztcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
