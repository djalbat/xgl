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

},{"./lib/canvas":2,"./lib/element/camera":5,"./lib/element/camera/design":6,"./lib/element/camera/gaming":7,"./lib/element/canvas":8,"./lib/element/canvas/coloured":9,"./lib/element/canvas/textured":11,"./lib/element/mask":12,"./lib/element/part":13,"./lib/element/scene":14,"./lib/xgl":90}],2:[function(require,module,exports){
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
    INVERT_SCALAR = -1,
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
  INVERT_SCALAR: INVERT_SCALAR,
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

},{"../element":4,"../utilities/transform":88}],9:[function(require,module,exports){
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

},{"../element":4,"necessary":92}],15:[function(require,module,exports){
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

},{"../../index":1,"../miscellaneous/configuration":30,"./element/colouredSquare":17,"./element/texturedQuadrangle":22,"necessary":92}],28:[function(require,module,exports){
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    matrixUtilities = require('../utilities/matrix');

var rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    reflect3 = vectorMaths.reflect3,
    subtract2 = vectorMaths.subtract2,
    transform4 = vectorMaths.transform4;

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
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(mouseCoordinates, this.previousMouseCoordinates),
          reflectedScaledRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([].concat(_toConsumableArray(reflectedScaledRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }, {
    key: 'updateZOffset',
    value: function updateZOffset(delta, tilt) {
      var angles = tilt.getAngles(),
          scalar = DELTA_SCALAR,
          ///
      scaledDelta = delta * scalar,
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([0, 0, scaledDelta, 0], rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var scalar = INVERT_SCALAR,
          ///
      offsets = scale3(initialPosition, scalar),
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

},{"../constants":3,"../maths/vector":29,"../utilities/matrix":83}],33:[function(require,module,exports){
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    matrixUtilities = require('../utilities/matrix');

var OFFSET_SCALAR = constants.OFFSET_SCALAR,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    reflect3 = vectorMaths.reflect3,
    subtract2 = vectorMaths.subtract2,
    transform4 = vectorMaths.transform4;

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
      var angles = tilt.getAngles(),
          scalar = OFFSET_SCALAR,
          ///
      relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, scalar)),
          reflectedAngles = reflect3(angles),
          rotationsMatrix = rotationsMatrixFromAngles(reflectedAngles),
          relativeOffsets = transform4([].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [0, 0]), rotationsMatrix).slice(0, 3); ///

      this.offsets = add3(this.previousOffsets, relativeOffsets);
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

},{"../constants":3,"../maths/vector":29,"../utilities/matrix":83}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    zero2 = vectorMaths.zero2,
    add3 = vectorMaths.add3,
    transform3 = vectorMaths.transform3,
    scale3 = vectorMaths.scale3,
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
      var firstAngle = first(this.angles),
          xAngle = firstAngle; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var secondAngle = second(this.angles),
          yAngle = secondAngle; ///

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
      return this.angles;
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
      var scalar = this.flipped ? ANGLES_SCALAR : -ANGLES_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.previousAngles, relativeAngles);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
    value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
      var scalar = flipped ? -DEGREES_TO_RADIANS_SCALAR : +DEGREES_TO_RADIANS_SCALAR,
          angles = scale3([].concat(_toConsumableArray(initialAngles), [0]), scalar),
          ///
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

},{"../../utilities/approximate":79,"../../utilities/facet":81,"../../utilities/vertices":89,"../edge":45,"../facet":47,"../normal":51,"../vertex":52}],49:[function(require,module,exports){
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

},{"../../utilities/approximate":79,"../../utilities/array":80,"../../utilities/facet":81,"../../utilities/texture":87,"../../utilities/vertices":89,"../edge":45,"../facet":47,"../normal":51,"../vertex":52}],50:[function(require,module,exports){
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

},{"../constants":3,"../utilities/array":80,"../utilities/quaternion":85,"../utilities/vertices":89,"./edge/masking":46,"./verticalLine":53}],51:[function(require,module,exports){
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

},{"../utilities/rotation":86}],53:[function(require,module,exports){
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

},{"../utilities/array":80,"../utilities/intersection":82,"../utilities/quaternion":85,"../utilities/rotation":86}],54:[function(require,module,exports){
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

},{"necessary":92}],81:[function(require,module,exports){
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

  rotationsMatrix = rotate4(rotationsMatrix, zAngle, zAxis);

  rotationsMatrix = rotate4(rotationsMatrix, yAngle, yAxis);

  rotationsMatrix = rotate4(rotationsMatrix, xAngle, xAxis);

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

},{"../maths/vector":29,"../utilities/angle":78,"../utilities/approximate":79,"../utilities/array":80}],86:[function(require,module,exports){
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

},{"../utilities/quaternion":85}],87:[function(require,module,exports){
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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/array":80,"../utilities/quaternion":85,"../utilities/vertices":89}],88:[function(require,module,exports){
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

},{"../maths/matrix":28,"../maths/vector":29,"../utilities/matrix":83}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

},{"./react":54}],91:[function(require,module,exports){

},{}],92:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  templateUtilities: require('./lib/utilities/template'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous'),
  miscellaneousUtilities: require('./lib/utilities/miscellaneous')
};

},{"./lib/utilities/array":93,"./lib/utilities/asynchronous":94,"./lib/utilities/fileSystem":95,"./lib/utilities/miscellaneous":96,"./lib/utilities/path":102,"./lib/utilities/template":103}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
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

},{"fs":91}],96:[function(require,module,exports){
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

},{"./miscellaneous/ajax":97,"./miscellaneous/log":98,"./miscellaneous/onETX":99,"./miscellaneous/prompt":100,"./miscellaneous/rc":101}],97:[function(require,module,exports){
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

},{}],98:[function(require,module,exports){
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

},{"../../utilities/array":93,"../../utilities/fileSystem":95,"../../utilities/path":102,"path":104}],99:[function(require,module,exports){
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

},{"_process":105}],100:[function(require,module,exports){
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

},{"../../utilities/asynchronous":94,"./onETX":99,"_process":105}],101:[function(require,module,exports){
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

},{"../../utilities/array":93,"../../utilities/fileSystem":95,"path":104}],102:[function(require,module,exports){
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

},{"./array":93}],103:[function(require,module,exports){
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

},{"../utilities/fileSystem":95}],104:[function(require,module,exports){
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

},{"_process":105}],105:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImVzNi9jYW52YXMuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImVzNi9lbGVtZW50L21hc2suanMiLCJlczYvZWxlbWVudC9wYXJ0LmpzIiwiZXM2L2VsZW1lbnQvc2NlbmUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9leGFtcGxlL2N1YmUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCJlczYvZXhhbXBsZS9tYXNraW5nLmpzIiwiZXM2L2V4YW1wbGUvcHlyYW1pZC5qcyIsImVzNi9leGFtcGxlL3NpbXBsZS5qcyIsImVzNi9leGFtcGxlL3RpbGluZy5qcyIsImVzNi9tYXRocy9tYXRyaXguanMiLCJlczYvbWF0aHMvdmVjdG9yLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbi5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCJlczYvbWlzY2VsbGFuZW91cy9wYW4uanMiLCJlczYvbWlzY2VsbGFuZW91cy90aWx0LmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvem9vbS5qcyIsImVzNi9taXhpbi9ibGVuZGluZy5qcyIsImVzNi9taXhpbi9idWZmZXIuanMiLCJlczYvbWl4aW4vY29sb3VyLmpzIiwiZXM2L21peGluL2RlcHRoLmpzIiwiZXM2L21peGluL21hdHJpeC5qcyIsImVzNi9taXhpbi9wcm9ncmFtLmpzIiwiZXM2L21peGluL3NoYWRlci5qcyIsImVzNi9taXhpbi90ZXh0dXJlLmpzIiwiZXM2L3ByaW1pdGl2ZS9lZGdlLmpzIiwiZXM2L3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCJlczYvcHJpbWl0aXZlL2ZhY2V0LmpzIiwiZXM2L3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZC5qcyIsImVzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCJlczYvcHJpbWl0aXZlL21hc2tpbmdGYWNldC5qcyIsImVzNi9wcmltaXRpdmUvbm9ybWFsLmpzIiwiZXM2L3ByaW1pdGl2ZS92ZXJ0ZXguanMiLCJlczYvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZW5kZXJlci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsImVzNi9yZW5kZXJlci9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS5qcyIsImVzNi9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXMuanMiLCJlczYvdXRpbGl0aWVzL2FuZ2xlLmpzIiwiZXM2L3V0aWxpdGllcy9hcHByb3hpbWF0ZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2ZhY2V0LmpzIiwiZXM2L3V0aWxpdGllcy9pbnRlcnNlY3Rpb24uanMiLCJlczYvdXRpbGl0aWVzL21hdHJpeC5qcyIsImVzNi91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCJlczYvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCJlczYvdXRpbGl0aWVzL3JvdGF0aW9uLmpzIiwiZXM2L3V0aWxpdGllcy90ZXh0dXJlLmpzIiwiZXM2L3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCJlczYvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwiZXM2L3hnbC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L2xpYi9fZW1wdHkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9hamF4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbG9nLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvb25FVFguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2xpYi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9ub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9wcm9tcHQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy9yYy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vbGliL3hnbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2FudmFzOiByZXF1aXJlKCcuL2xpYi9jYW52YXMnKSxcbiAgTWFzazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9tYXNrJyksXG4gIFBhcnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvcGFydCcpLFxuICBTY2VuZTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zY2VuZScpLFxuICBDYW1lcmE6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FtZXJhJyksXG4gIEdhbWluZ0NhbWVyYTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW1lcmEvZ2FtaW5nJyksXG4gIERlc2lnbkNhbWVyYTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW1lcmEvZGVzaWduJyksXG4gIENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzJyksXG4gIENvbG91cmVkQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKSxcbiAgVGV4dHVyZWRDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL21hdHJpeCcpLFxuICAgICAgcHJvZ3JhbU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9wcm9ncmFtJyksXG4gICAgICB0ZXh0dXJlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3RleHR1cmUnKSxcbiAgICAgIGJsZW5kaW5nTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2JsZW5kaW5nJyk7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgWl9GQVIgPSAxMDAwLFxuICAgICAgWl9ORUFSID0gMSxcbiAgICAgIE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnLFxuICAgICAgREVMVEFfU0NBTEFSID0gMS4yNSxcbiAgICAgIElOVkVSVF9TQ0FMQVIgPSAtMSxcbiAgICAgIEFOR0xFU19TQ0FMQVIgPSAwLjAxLFxuICAgICAgT0ZGU0VUX1NDQUxBUiA9IDAuMjUsXG4gICAgICBDVFJMX0tFWV9DT0RFID0gMTcsXG4gICAgICBTSElGVF9LRVlfQ09ERSA9IDE2LFxuICAgICAgVkVSVElDRVNfTEVOR1RIID0gMyxcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxLFxuICAgICAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDEsXG4gICAgICBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgIEZJRUxEX09GX1ZJRVcgPSA0NSAqIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBaX0ZBUixcbiAgWl9ORUFSLFxuICBNT1VTRV9VUCxcbiAgTU9VU0VfRE9XTixcbiAgTU9VU0VfTU9WRSxcbiAgTU9VU0VfV0hFRUwsXG4gIERFTFRBX1NDQUxBUixcbiAgSU5WRVJUX1NDQUxBUixcbiAgQU5HTEVTX1NDQUxBUixcbiAgT0ZGU0VUX1NDQUxBUixcbiAgQ1RSTF9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIFZFUlRJQ0VTX0xFTkdUSCxcbiAgTUlOSU1VTV9ESVNUQU5DRSxcbiAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IsXG4gIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gIEZJRUxEX09GX1ZJRVdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgS2V5RXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcblxuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcblxuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBnZXRVcGRhdGVIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBmb3JjZVVwZGF0ZShjYW52YXMpIHtcbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXIgPSB0aGlzLnNoaWZ0S2V5SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcblxuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBvblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGUsXG4gICAgICBmb3JjZVVwZGF0ZVxuICAgIH0pO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGtleUV2ZW50cyA9IG51bGwsIC8vL1xuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbnVsbCwgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0ID0gemVybzMoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsRGlzdGFuY2UgPSA1O1xuXG5jbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3RvcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyLCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcihrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcblxuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnBhbi5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuXG4gICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNBbmdsZXMoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c09mZnNldHMoKTtcblxuICAgICAgdGhpcy5wYW4ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpO1xuXG4gICAgdGhpcy5wYW4uc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMudGlsdC5zZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXQodGhpcy50aWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGUoY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy5nZXRVcGRhdGVIYW5kbGVyKCk7XG5cbiAgICB1cGRhdGVIYW5kbGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBkZWZhdWx0SW5pdGlhbEFuZ2xlcywgaW5pdGlhbE9mZnNldCA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0LCBpbml0aWFsRGlzdGFuY2UgPSBkZWZhdWx0SW5pdGlhbERpc3RhbmNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGluaXRpYWxPZmZzZXRzID0gaW5pdGlhbE9mZnNldCwgLy8vXG4gICAgICAgICAgZmxpcHBlZCA9IGZhbHNlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpLFxuICAgICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kRmxpcHBlZChpbml0aWFsQW5nbGVzLCBmbGlwcGVkKSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXNpZ25DYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgTG9jYXRpb24gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL2xvY2F0aW9uJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKGtleUV2ZW50cywgbW91c2VFdmVudHMsIHVwZGF0ZUhhbmRsZXIsIHRpbHQsIGxvY2F0aW9uKSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzQW5nbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnRpbHQucmVzZXRQcmV2aW91c0FuZ2xlcygpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMubG9jYXRpb24ucmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRoaXMudGlsdC5yZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCk7XG5cbiAgICB0aGlzLmxvY2F0aW9uLnJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCk7XG5cbiAgICB0aGlzLmxvY2F0aW9uLnNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnRpbHQuc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi51cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnVwZGF0ZVpPZmZzZXQoZGVsdGEsIHRoaXMudGlsdCk7XG5cbiAgICB0aGlzLnVwZGF0ZShjYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLmxvY2F0aW9uLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMuZ2V0VXBkYXRlSGFuZGxlcigpO1xuXG4gICAgdXBkYXRlSGFuZGxlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uLCBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIGxvY2F0aW9uID0gTG9jYXRpb24uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHRpbHQsIGxvY2F0aW9uKTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrID0gbWFzaztcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFzaykge1xuICAgIGlmIChtYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCBtYXNrID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbiksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4pOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLm1hcCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkVsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25FbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25DYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2tpbmdGYWNldCA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcycpLFxuICAgICAgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwJyk7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGNvbG91clJlbmRlcmVyICYmIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIgJiYgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSGFuZGxlcjtcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25SZXNpemUocmVzaXplSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgZm9yRWFjaChjaGlsZEVsZW1lbnRzLCAoY2hpbGRFbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50c0xlbmd0aCA9IGNoaWxkRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gY2hpbGRFbGVtZW50c0xlbmd0aDtcblxuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgICAgZGVmZXIoKCkgPT4ge1xuICAgICAgICB1cGRhdGUgJiYgdXBkYXRlKHByb2dyZXNzKTsgLy8vXG5cbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgICBkb25lICYmIGRvbmUoKTsgLy8vXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCB1cGRhdGUsIGRvbmUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBjYW52YXMpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcblxuZnVuY3Rpb24gZGVmZXIoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL2N1YmUnKSxcbiAgICAgIHNpbXBsZUV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvc2ltcGxlJyksXG4gICAgICBtYXNraW5nRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS9tYXNraW5nJyksXG4gICAgICBweXJhbWlkRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS9weXJhbWlkJyksXG4gICAgICB0aWxpbmdFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL3RpbGluZycpO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgJ3NpbXBsZSc6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgJ2N1YmUnOlxuICAgIGN1YmVFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSAnbWFza2luZyc6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICdweXJhbWlkJzpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgJ3RpbGluZyc6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpOyAvLy9cblxuY29uc3QgQ3ViZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jdWJlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PlxuXG5cdDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG5cdFx0PFBhcnQ+XG5cdFx0XHQ8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuXHRcdDwvUGFydD5cblx0XHQ8RGVzaWduQ2FtZXJhIC8+XG5cdDwvU2NlbmU+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBjdWJlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW5kZXgnKTsgIC8vL1xuXG5jb25zdCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9ID0geGdsO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5jbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkU3F1YXJlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNlID0gcmVxdWlyZSgnLi9mYWNlJyk7XG5cbmNvbnN0IGRlZmF1bHRDb2xvdXIgPSBbIDEsIDEsIDAgXTtcblxuY29uc3QgQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cbiAgXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1YmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkU3F1YXJlID0gcmVxdWlyZSgnLi9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCBGYWNlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgKzAuNSBdfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZGUgPSByZXF1aXJlKCcuL3NpZGUnKTtcblxuY29uc3QgUHlyYW1pZCA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFNpZGUgLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAgOTAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAxODAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAyNzAsIDAgXX0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gUHlyYW1pZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGV4dHVyZWRUcmlhbmdsZSA9IHJlcXVpcmUoJy4vdGV4dHVyZWRUcmlhbmdsZScpO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7ICAvLy9cblxuY29uc3QgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFF1YWRyYW5nbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7ICAvLy9cblxuY29uc3QgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5jbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFRyaWFuZ2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpOyAvLy9cblxuY29uc3QgQ3ViZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jdWJlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgR2FtaW5nQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFNtYWxsQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgc21hbGxDdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxTbWFsbEN1YmUgLz5cbiAgICAgICAgICA8L01hc2s+XG5cbiAgICAgICAgLFxuICAgICAgICBNZWRpdW1DdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2s9e3NtYWxsQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgLFxuICAgICAgICBtZWRpdW1DdWJlTWFzayA9XG5cbiAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgIDxNZWRpdW1DdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTGFyZ2VDdWJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgICAgICAgICA8Q3ViZSBtYXNrPXttZWRpdW1DdWJlTWFza30gLz5cblxuICAgICAgICA7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPExhcmdlQ3ViZSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPEdhbWluZ0NhbWVyYSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFza2luZ0V4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7IC8vL1xuXG5jb25zdCBQeXJhbWlkID0gcmVxdWlyZSgnLi9lbGVtZW50L3B5cmFtaWQnKSxcbiAgICAgIGNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24nKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhIC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB5cmFtaWRFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgeyBpbWFnZU1hcFVSSSB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBzcmMgPSBpbWFnZU1hcFVSSTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpOyAvLy9cblxuY29uc3QgQ29sb3VyZWRTcXVhcmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSA9IHhnbDtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUV4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb24nKSxcbiAgICAgIENvbG91cmVkU3F1YXJlID0gcmVxdWlyZSgnLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlJyksXG4gICAgICBUZXh0dXJlZFF1YWRyYW5nbGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhIH0gPSB4Z2wsXG4gICAgICB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgIG1hc2sgPVxuXG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG5cbiAgICAgIDtcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gY29uZmlndXJhdGlvbjtcblxuICBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPXsnZmxvb3Jib2FyZHMuanBnJ30gbWFzaz17bWFza30gLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPXsncGF2aW5nLmpwZyd9IG1hc2s9e21hc2t9IC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aWxpbmdFeGFtcGxlO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIHNyYyA9IGAke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gO1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5MygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLFxuICAgIDAsIDEsIDAsXG4gICAgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5MihtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTIgKiBiMSxcbiAgICBhMSAqIGIwICsgYTMgKiBiMSxcblxuICAgIGEwICogYjIgKyBhMiAqIGIzLFxuICAgIGExICogYjIgKyBhMyAqIGIzLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTMobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG4gICAgICAgIGE0ID0gbWF0cml4QVs0XSxcbiAgICAgICAgYTUgPSBtYXRyaXhBWzVdLFxuICAgICAgICBhNiA9IG1hdHJpeEFbNl0sXG4gICAgICAgIGE3ID0gbWF0cml4QVs3XSxcbiAgICAgICAgYTggPSBtYXRyaXhBWzhdLFxuXG4gICAgICAgIGIwID0gbWF0cml4QlswXSxcbiAgICAgICAgYjEgPSBtYXRyaXhCWzFdLFxuICAgICAgICBiMiA9IG1hdHJpeEJbMl0sXG4gICAgICAgIGIzID0gbWF0cml4QlszXSxcbiAgICAgICAgYjQgPSBtYXRyaXhCWzRdLFxuICAgICAgICBiNSA9IG1hdHJpeEJbNV0sXG4gICAgICAgIGI2ID0gbWF0cml4Qls2XSxcbiAgICAgICAgYjcgPSBtYXRyaXhCWzddLFxuICAgICAgICBiOCA9IG1hdHJpeEJbOF07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTMgKiBiMSArIGE2ICogYjIsXG4gICAgYTEgKiBiMCArIGE0ICogYjEgKyBhNyAqIGIyLFxuICAgIGEyICogYjAgKyBhNSAqIGIxICsgYTggKiBiMixcblxuICAgIGEwICogYjMgKyBhMyAqIGI0ICsgYTYgKiBiNSxcbiAgICBhMSAqIGIzICsgYTQgKiBiNCArIGE3ICogYjUsXG4gICAgYTIgKiBiMyArIGE1ICogYjQgKyBhOCAqIGI1LFxuXG4gICAgYTAgKiBiNiArIGEzICogYjcgKyBhNiAqIGI4LFxuICAgIGExICogYjYgKyBhNCAqIGI3ICsgYTcgKiBiOCxcbiAgICBhMiAqIGI2ICsgYTUgKiBiNyArIGE4ICogYjgsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IG0wID0gbWF0cml4WzBdLFxuICAgICAgICBtMSA9IG1hdHJpeFsxXSxcbiAgICAgICAgbTIgPSBtYXRyaXhbMl0sXG4gICAgICAgIG0zID0gbWF0cml4WzNdLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAgKiBtMyAtIG0yICogbTE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAgIC1tMiAvIGRldGVybWluYW50LCArbTAgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludmVydDMobWF0cml4KSB7XG4gIGNvbnN0IG0wMCA9IG1hdHJpeFswXSwgbTAxID0gbWF0cml4WzFdLCBtMDIgPSBtYXRyaXhbMl0sXG4gICAgICAgIG0xMCA9IG1hdHJpeFszXSwgbTExID0gbWF0cml4WzRdLCBtMTIgPSBtYXRyaXhbNV0sXG4gICAgICAgIG0yMCA9IG1hdHJpeFs2XSwgbTIxID0gbWF0cml4WzddLCBtMjIgPSBtYXRyaXhbOF0sXG5cbiAgICAgICAgYjAxID0gIG0yMiAqIG0xMSAtIG0xMiAqIG0yMSxcbiAgICAgICAgYjExID0gLW0yMiAqIG0xMCArIG0xMiAqIG0yMCxcbiAgICAgICAgYjIxID0gIG0yMSAqIG0xMCAtIG0xMSAqIG0yMCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wMCAqIGIwMSArIG0wMSAqIGIxMSArIG0wMiAqIGIyMTtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgYjAxIC8gZGV0ZXJtaW5hbnQsICgtbTIyICogbTAxICsgbTAyICogbTIxKSAvIGRldGVybWluYW50LCAoIG0xMiAqIG0wMSAtIG0wMiAqIG0xMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIxMSAvIGRldGVybWluYW50LCAoIG0yMiAqIG0wMCAtIG0wMiAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKC1tMTIgKiBtMDAgKyBtMDIgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICBiMjEgLyBkZXRlcm1pbmFudCwgKC1tMjEgKiBtMDAgKyBtMDEgKiBtMjApIC8gZGV0ZXJtaW5hbnQsICggbTExICogbTAwIC0gbTAxICogbTEwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFsyXSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFszXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlMyhtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFszXSwgbWF0cml4WzZdLFxuICAgIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbN10sXG4gICAgbWF0cml4WzJdLCBtYXRyaXhbNV0sIG1hdHJpeFs4XSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4LCBtYXRyaXhbIDFdICogeCwgbWF0cml4WyAyXSAqIHgsIG1hdHJpeFsgM10gKiB4LFxuICAgIG1hdHJpeFsgNF0gKiB5LCBtYXRyaXhbIDVdICogeSwgbWF0cml4WyA2XSAqIHksIG1hdHJpeFsgN10gKiB5LFxuICAgIG1hdHJpeFsgOF0gKiB6LCBtYXRyaXhbIDldICogeiwgbWF0cml4WzEwXSAqIHosIG1hdHJpeFsxMV0gKiB6LFxuICAgIG1hdHJpeFsxMl0gKiAxLCBtYXRyaXhbMTNdICogMSwgbWF0cml4WzE0XSAqIDEsIG1hdHJpeFsxNV0gKiAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByb3RhdGU0KG1hdHJpeCwgYW5nbGUsIHZlY3Rvcikge1xuICBsZXQgeCA9IHZlY3RvclswXSxcbiAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuXG4gIGlmIChsZW5ndGggIT09IDApIHtcbiAgICB4IC89IGxlbmd0aDtcbiAgICB5IC89IGxlbmd0aDtcbiAgICB6IC89IGxlbmd0aDtcblxuICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgYyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICB0ID0gMSAtIGMsXG5cbiAgICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgICAgbTAyID0gbWF0cml4WyAyXSxcbiAgICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgICAgbTExID0gbWF0cml4WyA1XSxcbiAgICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgICAgbTIwID0gbWF0cml4WyA4XSxcbiAgICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgICAgbTIzID0gbWF0cml4WzExXSxcblxuICAgICAgICAgIGIwMCA9IHggKiB4ICogdCArIGMsXG4gICAgICAgICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsXG4gICAgICAgICAgYjAyID0geiAqIHggKiB0IC0geSAqIHMsXG4gICAgICAgICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHMsXG4gICAgICAgICAgYjExID0geSAqIHkgKiB0ICsgYyxcbiAgICAgICAgICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcyxcbiAgICAgICAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcyxcbiAgICAgICAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcyxcbiAgICAgICAgICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIG0wMCAqIGIwMCArIG0xMCAqIGIwMSArIG0yMCAqIGIwMiwgbTAxICogYjAwICsgbTExICogYjAxICsgbTIxICogYjAyLCBtMDIgKiBiMDAgKyBtMTIgKiBiMDEgKyBtMjIgKiBiMDIsIG0wMyAqIGIwMCArIG0xMyAqIGIwMSArIG0yMyAqIGIwMixcbiAgICAgIG0wMCAqIGIxMCArIG0xMCAqIGIxMSArIG0yMCAqIGIxMiwgbTAxICogYjEwICsgbTExICogYjExICsgbTIxICogYjEyLCBtMDIgKiBiMTAgKyBtMTIgKiBiMTEgKyBtMjIgKiBiMTIsIG0wMyAqIGIxMCArIG0xMyAqIGIxMSArIG0yMyAqIGIxMixcbiAgICAgIG0wMCAqIGIyMCArIG0xMCAqIGIyMSArIG0yMCAqIGIyMiwgbTAxICogYjIwICsgbTExICogYjIxICsgbTIxICogYjIyLCBtMDIgKiBiMjAgKyBtMTIgKiBiMjEgKyBtMjIgKiBiMjIsIG0wMyAqIGIyMCArIG0xMyAqIGIyMSArIG0yMyAqIGIyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzEyXSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTNdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxNF0sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE1XSxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpIHtcbiAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3IC8gMiksXG4gICAgICAgIG5mID0gMSAvICh6TmVhciAtIHpGYXIpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgZiAvIGFzcGVjdFJhdGlvLCAwLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIGYsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKHpGYXIgKyB6TmVhcikgKiBuZiwgICAgLTEsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoMiAqIHpGYXIgKiB6TmVhcikgKiBuZiwgMCxcblxuICBdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlkZW50aXR5MixcbiAgaWRlbnRpdHkzLFxuICBpZGVudGl0eTQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGludmVydDIsXG4gIGludmVydDMsXG4gIGludmVydDQsXG4gIHNjYWxlNCxcbiAgcm90YXRlNCxcbiAgdHJhbnNwb3NlMixcbiAgdHJhbnNwb3NlMyxcbiAgdHJhbnNwb3NlNCxcbiAgdHJhbnNsYXRlNCxcbiAgcGVyc3BlY3RpdmU0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB6ZXJvNCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aDQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xufVxuXG5mdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdKTsgfVxuXG5mdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSArIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdKTsgfVxuXG5mdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBheCA9IHZlY3RvckFbMF0sIGF5ID0gdmVjdG9yQVsxXSwgYXogPSB2ZWN0b3JBWzJdLFxuICAgICAgICBieCA9IHZlY3RvckJbMF0sIGJ5ID0gdmVjdG9yQlsxXSwgYnogPSB2ZWN0b3JCWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYXkgKiBieiAtIGF6ICogYnksXG4gICAgYXogKiBieCAtIGF4ICogYnosXG4gICAgYXggKiBieSAtIGF5ICogYngsXG5cbiAgXSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcbiAgICAgIHogLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpc2U0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcbiAgICAgIHogLyBsZW5ndGgsXG4gICAgICB3IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuICAgIHZlY3RvclsyXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0NCh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcbiAgICB2ZWN0b3JbM10gKiAtMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuICAgIHZlY3RvclszXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICsgdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdIC0gdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFsyXSAqIHksXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFszXSAqIHksXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbM10gKiB5ICsgbWF0cml4WzZdICogeixcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs3XSAqIHosXG4gICAgbWF0cml4WzJdICogeCArIG1hdHJpeFs1XSAqIHkgKyBtYXRyaXhbOF0gKiB6LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCArIG1hdHJpeFsgNF0gKiB5ICsgbWF0cml4WyA4XSAqIHogKyBtYXRyaXhbMTJdICogdyxcbiAgICBtYXRyaXhbIDFdICogeCArIG1hdHJpeFsgNV0gKiB5ICsgbWF0cml4WyA5XSAqIHogKyBtYXRyaXhbMTNdICogdyxcbiAgICBtYXRyaXhbIDJdICogeCArIG1hdHJpeFsgNl0gKiB5ICsgbWF0cml4WzEwXSAqIHogKyBtYXRyaXhbMTRdICogdyxcbiAgICBtYXRyaXhbIDNdICogeCArIG1hdHJpeFsgN10gKiB5ICsgbWF0cml4WzExXSAqIHogKyBtYXRyaXhbMTVdICogdyxcblxuICBdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgc2NhbGUyLFxuICBzY2FsZTMsXG4gIHNjYWxlNCxcbiAgYWRkMixcbiAgYWRkMyxcbiAgYWRkNCxcbiAgc3VidHJhY3QyLFxuICBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgdHJhbnNmb3JtMixcbiAgdHJhbnNmb3JtMyxcbiAgdHJhbnNmb3JtNFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX187IC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBDVFJMX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgY3RybEtleURvd24sIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLmN0cmxLZXlEb3duID0gY3RybEtleURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc0N0cmxLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLmN0cmxLZXlEb3duO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgQ1RSTF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuY3RybEtleVVwRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTSElGVF9LRVlfQ09ERSA6XG4gICAgICAgIHRoaXMuc2hpZnRLZXlVcEV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBDVFJMX0tFWV9DT0RFIDpcbiAgICAgICAgdGhpcy5jdHJsS2V5RG93bkV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU0hJRlRfS0VZX0NPREUgOlxuICAgICAgICB0aGlzLnNoaWZ0S2V5RG93bkV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBjdHJsS2V5VXBFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuY3RybEtleURvd24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaCgoY3RybEtleUhhbmRsZXIpID0+IGN0cmxLZXlIYW5kbGVyKHRoaXMuY3RybEtleURvd24pKTtcbiAgfVxuXG4gIHNoaWZ0S2V5VXBFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goKHNoaWZ0S2V5SGFuZGxlcikgPT4gc2hpZnRLZXlIYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBjdHJsS2V5RG93bkV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy5jdHJsS2V5RG93biA9IHRydWU7XG5cbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goKGN0cmxLZXlIYW5kbGVyKSA9PiBjdHJsS2V5SGFuZGxlcih0aGlzLmN0cmxLZXlEb3duKSk7XG4gIH1cblxuICBzaGlmdEtleURvd25FdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaCgoc2hpZnRLZXlIYW5kbGVyKSA9PiBzaGlmdEtleUhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZEN0cmxLZXlIYW5kbGVyKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgQ1RSTF9LRVlfQ09ERSBdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLnB1c2goY3RybEtleUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBTSElGVF9LRVlfQ09ERSBdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fTtcbiAgICBcbiAgICBoYW5kbGVyc01hcFsgQ1RSTF9LRVlfQ09ERSBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIFNISUZUX0tFWV9DT0RFIF0gPSBbXTtcblxuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnNNYXAsIGN0cmxLZXlEb3duLCBzaGlmdEtleURvd24pLFxuICAgICAgICAgIGtleVVwRXZlbnRMaXN0ZW5lciA9IGtleUV2ZW50cy5rZXlVcEV2ZW50TGlzdGVuZXIuYmluZChrZXlFdmVudHMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0ga2V5RXZlbnRzLmtleURvd25FdmVudExpc3RlbmVyLmJpbmQoa2V5RXZlbnRzKSxcbiAgICAgICAgICBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwRXZlbnRMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2V5RXZlbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9ID0gbWF0cml4VXRpbGl0aWVzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIElOVkVSVF9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgYWRkMywgc2NhbGUyLCByZWZsZWN0Miwgc2NhbGUzLCByZWZsZWN0Mywgc3VidHJhY3QyLCB0cmFuc2Zvcm00IH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBzZXRNb3VzZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMoKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICB1cGRhdGVYWU9mZnNldChtb3VzZUNvb3JkaW5hdGVzLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLCAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIobW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlZmxlY3RlZFNjYWxlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcikpLFxuICAgICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhyZWZsZWN0ZWRBbmdsZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoWyAuLi5yZWZsZWN0ZWRTY2FsZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAsIDBdLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgdXBkYXRlWk9mZnNldChkZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgc2NhbGFyID0gREVMVEFfU0NBTEFSLCAvLy9cbiAgICAgICAgICBzY2FsZWREZWx0YSA9IGRlbHRhICogc2NhbGFyLFxuICAgICAgICAgIHJlZmxlY3RlZEFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhyZWZsZWN0ZWRBbmdsZXMpLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoWyAwLCAwLCBzY2FsZWREZWx0YSwgMCBdLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gSU5WRVJUX1NDQUxBUiwgLy8vXG4gICAgICAgICAgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIHNjYWxhciksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24ob2Zmc2V0cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93biwgdGhpcy5jYW52YXMpKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfVVApO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9ET1dOKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfTU9WRSk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIoZGVsdGEsIHRoaXMuY2FudmFzKSk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9VUCBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9NT1ZFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRV9XSEVFTCBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge307XG5cbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfVVAgXSA9IFtdO1xuICAgIGhhbmRsZXJzTWFwWyBNT1VTRV9ET1dOIF0gPSBbXTtcbiAgICBoYW5kbGVyc01hcFsgTU9VU0VfTU9WRSBdID0gW107XG4gICAgaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0gPSBbXTtcblxuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93biwgY2FudmFzKSxcbiAgICAgICAgICBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKSxcblx0XHRcdFx0XHRtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IG1vdXNlRXZlbnRzLm1vdXNlVXBFdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZURvd25FdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSBtb3VzZUV2ZW50cy5tb3VzZU1vdmVFdmVudExpc3RlbmVyLmJpbmQobW91c2VFdmVudHMpLFxuXHRcdFx0XHRcdG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gbW91c2VFdmVudHMubW91c2VXaGVlbEV2ZW50TGlzdGVuZXIuYmluZChtb3VzZUV2ZW50cyk7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25FdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuXG5mdW5jdGlvbiBkZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBkZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gZXZlbnQudGFyZ2V0LCAgLy8vXG4gICAgICAgIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICsoZXZlbnQuY2xpZW50WCAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QubGVmdCksXG4gICAgICAgICAgLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3ApXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBPRkZTRVRfU0NBTEFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHJlZmxlY3QzLCBzdWJ0cmFjdDIsIHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldHMgPSBwcmV2aW91c09mZnNldHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIHNldE1vdXNlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICByZXNldFByZXZpb3VzTW91c2VDb29yZGluYXRlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNPZmZzZXRzKCkge1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXRzID0gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KHRpbHQpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpKSxcbiAgICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMocmVmbGVjdGVkQW5nbGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwLCAwIF0sIHJvdGF0aW9uc01hdHJpeCkuc2xpY2UoMCwgMyk7IC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLnByZXZpb3VzT2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHMoaW5pdGlhbE9mZnNldHMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0cyA9IG9mZnNldHMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBwcmV2aW91c09mZnNldHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgemVybzIsIGFkZDMsIHRyYW5zZm9ybTMsIHNjYWxlMywgc3VidHJhY3QyIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoZmxpcHBlZCwgYW5nbGVzLCBwcmV2aW91c0FuZ2xlcywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gcHJldmlvdXNBbmdsZXM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgc2V0TW91c2VDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIHJlc2V0UHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKCkge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcmVzZXRQcmV2aW91c0FuZ2xlcygpIHtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVzID0gdGhpcy5hbmdsZXM7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gdGhpcy5mbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgIEFOR0xFU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLnByZXZpb3VzQW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgOlxuICAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgc2NhbGFyKSwgLy8vXG4gICAgICAgICAgcHJldmlvdXNBbmdsZXMgPSBhbmdsZXMsICAvLy9cbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGZsaXBwZWQsIGFuZ2xlcywgcHJldmlvdXNBbmdsZXMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IERFTFRBX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKGRlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSAtPSBkZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBlbmFibGVCbGVuZGluZygpIHtcbiAgY29uc3QgeyBCTEVORCwgU1JDX0FMUEhBLCBPTkUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBCTEVORCxcbiAgICAgICAgc291cmNlRmFjdG9yID0gU1JDX0FMUEhBLFxuICAgICAgICBkZXN0aW5hdGlvbkZhY3RvciA9IE9ORTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHNvdXJjZUZhY3RvciwgZGVzdGluYXRpb25GYWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5hYmxlQmxlbmRpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gZGVmYXVsdERlcHRoKSB7IFxuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5mdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IERFUFRIX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aFRlc3RpbmcoKSB7XG4gIGNvbnN0IHsgREVQVEhfVEVTVCwgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gREVQVEhfVEVTVCxcbiAgICAgICAgZGVwdGhDb21wYXJpc29uRnVuY3Rpb24gPSBMRVFVQUw7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhkZXB0aENvbXBhcmlzb25GdW5jdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBseU1hdHJpeFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oJ01PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oJ1dFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVUZXh0dXJlLFxuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZ1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IEVkZ2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWlkUG9pbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnQnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9ID0gbWlkUG9pbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi9lZGdlJyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi92ZXJ0ZXgnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBtaWRQb2ludFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9taWRQb2ludCcpLFxuICAgICAgaW50ZXJzZWN0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvbicpO1xuXG5jb25zdCB7IFZFUlRJQ0VTX0xFTkdUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwdXNoLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gPSBtaWRQb2ludFV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24sIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLCBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCB9ID0gaW50ZXJzZWN0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldFBvc2l0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzKHRoaXMudmVydGljZXMpOyAgLy8vXG5cbiAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgfVxuXG4gIHNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zID0gaW50ZXJzZWN0aW9ucy5tYXAoKGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCA9IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXggPSBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZW5kVmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXQ7XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzQW5kRmFjZXQocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCkge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvZmFjZXQnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXM7XG5cbmNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIE1hc2tpbmdFZGdlID0gcmVxdWlyZSgnLi9lZGdlL21hc2tpbmcnKSxcbiAgICAgIFZlcnRpY2FsTGluZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IFZFUlRJQ0VTX0xFTkdUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0KSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKSxcbiAgICAgIGludGVyc2VjdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24nKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJvdGF0ZVBvc2l0aW9uIH0gPSByb3RhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gPSBpbnRlcnNlY3Rpb25VdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uJyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2J1ZmZlcnMnKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvYnVmZmVycycpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91cicpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtJyksXG4gICAgICBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJEYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9kYXRhJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IG1lcmdlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpO1xuXG5jbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyk7XG5cbmNvbnN0IHsgc2FtcGxlck5hbWUgfSA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleENvbG91cicsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSAndU5vcm1hbHNNYXRyaXgnLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbHNNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsc01hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGxpZ2h0aW5nU291cmNlLCB7XG4gIG5vcm1hbHNNYXRyaXhOYW1lLFxuICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaWdodGluZ1NvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSAndU9mZnNldHNNYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICByb3RhdGlvbnNNYXRyaXhOYW1lID0gJ3VSb3RhdGlvbnNNYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHBvc2l0aW9uU291cmNlLCB7XG4gIG9mZnNldHNNYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uc01hdHJpeE5hbWUsXG4gIHByb2plY3Rpb25NYXRyaXhOYW1lLFxuICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWVcbn0pO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGZyYWdtZW50U2hhZGVyU291cmNlLCB7XG4gIHNhbXBsZXJOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9ICdhVGV4dHVyZUNvb3JkaW5hdGUnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybScpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IHRleHR1cmVSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBDbGFzcyhmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSxcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9ID0gY29uc3RhbnRzO1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lLFxuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVyb1xufTtcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZUEsIHZhbHVlQiwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZUEgLSB2YWx1ZUIsXG4gICAgICAgIGFic29sdXRlRGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpLFxuICAgICAgICBhcHByb3hpbWF0ZWx5RXF1YWwgPSAoYWJzb2x1dGVEaWZmZXJlbmNlIDwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIGFwcHJveGltYXRlbHlFcXVhbDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgcGVybXV0ZSxcbiAgZmxhdHRlbixcbiAgZ3VhcmFudGVlXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5mdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5jbG9uZSgpKTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVFZGdlcyxcbiAgY2xvbmVOb3JtYWwsXG4gIGNsb25lVmVydGljZXMsXG4gIGNhbGN1bGF0ZUVkZ2VzLFxuICBjYWxjdWxhdGVOb3JtYWwsXG4gIGNhbGN1bGF0ZUFyZWFcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbixcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBtYXRyaXhNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL21hdHJpeCcpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLCBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSA9IG1hdHJpeE1hdGhzO1xuXG5mdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcykge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSxcbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsXG5cbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSLFxuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgY29uc3QgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLCAgLy8vXG4gICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgIHpOZWFyID0gWl9ORUFSLCAvLy9cbiAgICAgICAgekZhciA9IFpfRkFSLCAvLy9cbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNjYWxlTWF0cml4RnJvbVNjYWxlLFxuICBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbixcbiAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyxcbiAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgYWRkMywgc2NhbGUzIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbixcbiAgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSxcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXNcbn07XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFuZ2xlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FuZ2xlJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gPSBhbmdsZVV0aWxpdGllcztcblxuZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHsgcmV0dXJuIGhhbWlsdG9uUHJvZHVjdChoYW1pbHRvblByb2R1Y3Qocm90YXRpb25RdWF0ZXJuaW9uLCBpbWFnaW5hcnlRdWF0ZXJuaW9uKSwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcblxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VFeHRlbnQgPSBtYXNraW5nRWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50ID0gbm9ybWFsaXNlMyhtYXNraW5nRWRnZUV4dGVudCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMgPSB1bml0TWFza2luZ0VkZ2VFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAoYW5nbGVPZlJvdGF0aW9uU2luZSA+IDAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1jYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvblxufTtcblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBhMSA9IHF1YXRlcm5pb25BWzBdLFxuICAgICAgICBiMSA9IHF1YXRlcm5pb25BWzFdLFxuICAgICAgICBjMSA9IHF1YXRlcm5pb25BWzJdLFxuICAgICAgICBkMSA9IHF1YXRlcm5pb25BWzNdLFxuICAgICAgICBhMiA9IHF1YXRlcm5pb25CWzBdLFxuICAgICAgICBiMiA9IHF1YXRlcm5pb25CWzFdLFxuICAgICAgICBjMiA9IHF1YXRlcm5pb25CWzJdLFxuICAgICAgICBkMiA9IHF1YXRlcm5pb25CWzNdLFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVQb3NpdGlvblxufTtcblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdHJpeE1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0cml4JyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGludmVydDIsIGludmVydDMgfSA9IG1hdHJpeE1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JNYXRocztcblxuZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHRlbXBWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSB0ZW1wVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLFxuICBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4TWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy9tYXRyaXgnKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBtdWx0aXBseTQgfSA9IG1hdHJpeE1hdGhzLFxuICAgICAgeyB0cmFuc2Zvcm00IH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlVmVydGljZXMsXG4gIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJy4vcmVhY3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG4iLCIiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIHRlbXBsYXRlVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvdGVtcGxhdGUnKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJyksXG4gIG1pc2NlbGxhbmVvdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgYXJyYXkyKSB7XG4gIGlmICghKGFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIGFycmF5MiA9IFthcnJheTJdO1xuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY29uY2F0OiBjb25jYXQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5OiBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeTogYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaW5kZXgpIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5OiBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHk6IHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZnVuY3Rpb24gZG9lc0VudHJ5RXhpc3QoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IGVudHJ5RXhpc3RzID0gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBlbnRyeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gZG9lc0ZpbGVFeGlzdChhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBkb2VzRW50cnlFeGlzdChhYnNvbHV0ZVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBkb2VzRGlyZWN0b3J5RXhpc3QoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZURpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGRvZXNFbnRyeUV4aXN0KGFic29sdXRlUGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb0ZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy5hcHBlbmRGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuYW1lRmlsZShvbGRBYnNvbHV0ZUZpbGVQYXRoLCBuZXdBYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGZzLnJlbmFtZVN5bmMob2xkQWJzb2x1dGVGaWxlUGF0aCwgbmV3QWJzb2x1dGVGaWxlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLnN0YXRTeW5jKGFic29sdXRlRmlsZVBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9lc0VudHJ5RXhpc3Q6IGRvZXNFbnRyeUV4aXN0LFxuICBkb2VzRmlsZUV4aXN0OiBkb2VzRmlsZUV4aXN0LFxuICBkb2VzRGlyZWN0b3J5RXhpc3Q6IGRvZXNEaXJlY3RvcnlFeGlzdCxcbiAgaXNFbnRyeUZpbGU6IGlzRW50cnlGaWxlLFxuICBpc0VudHJ5RGlyZWN0b3J5OiBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5OiBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHdyaXRlRmlsZTogd3JpdGVGaWxlLFxuICBhcHBlbmRUb0ZpbGU6IGFwcGVuZFRvRmlsZSxcbiAgcmVuYW1lRmlsZTogcmVuYW1lRmlsZSxcbiAgZ2V0U3RhdHM6IGdldFN0YXRzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByYyA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9yYycpLFxuICAgICAgbG9nID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL2xvZycpLFxuICAgICAgYWpheCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9hamF4JyksXG4gICAgICBvbkVUWCA9IHJlcXVpcmUoJy4vbWlzY2VsbGFuZW91cy9vbkVUWCcpLFxuICAgICAgcHJvbXB0ID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL3Byb21wdCcpO1xuXG5jb25zdCB7IGdldCwgcG9zdCB9ID0gYWpheDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZzogbG9nLFxuICByYzogcmMsXG4gIGdldDogZ2V0LFxuICBwb3N0OiBwb3N0LFxuICBvbkVUWDogb25FVFgsXG4gIHByb21wdDogcHJvbXB0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBHRVRfTUVUSE9EID0gJ0dFVCcsXG4gICAgICBQT1NUX01FVEhPRCA9ICdQT1NUJztcblxuZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0OiBnZXQsXG4gIHBvc3Q6IHBvc3Rcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvblN0cmluZyA9IHJlc3BvbnNlVGV4dCwgLy8vXG4gICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgIGNhbGxiYWNrKGpzb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuXG4gIHhtbEh0dHBSZXF1ZXN0LnNlbmQoYm9keSk7XG59XG5cbmZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0vJHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fS8ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycykge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZShmdW5jdGlvbihxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgPyAnJicgOiAnJztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgJycpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgcGF0aFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9wYXRoJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29uY2F0ZW5hdGVQYXRocyB9ID0gcGF0aFV0aWxpdGllcyxcbiAgICAgIHsgZG9lc0ZpbGVFeGlzdCwgcmVhZEZpbGUsIGFwcGVuZFRvRmlsZSwgcmVuYW1lRmlsZSwgZ2V0U3RhdHMgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNvbnN0IFRSQUNFID0gJ1RSQUNFJyxcbiAgICAgIERFQlVHID0gJ0RFQlVHJyxcbiAgICAgIElORk8gPSAnSU5GTycsXG4gICAgICBXQVJOSU5HID0gJ1dBUk5JTkcnLFxuICAgICAgRVJST1IgPSAnRVJST1InLFxuICAgICAgRkFUQUwgPSAnRkFUQUwnO1xuXG5sZXQgbG9nTGV2ZWwgPSBXQVJOSU5HLFxuICAgIGxvZ0ZpbGVCYXNlTmFtZSA9ICdkZWZhdWx0JyxcbiAgICBsb2dEaXJlY3RvcnlQYXRoID0gbnVsbDtcblxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UsIGxldmVsID0gJycpIHtcbiAgbGV0IHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ID0gMjtcblxuICBjb25zdCBsZXZlbHMgPSBbXG4gICAgVFJBQ0UsXG4gICAgREVCVUcsXG4gICAgSU5GTyxcbiAgICBXQVJOSU5HLFxuICAgIEVSUk9SLFxuICAgIEZBVEFMXG4gIF07XG5cbiAgaWYgKGxldmVsKSB7IC8vL1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbHMuaW5kZXhPZihsZXZlbCksXG4gICAgICAgICAgbG9nTGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxvZ0xldmVsKTtcblxuICAgIGlmIChsZXZlbEluZGV4IDwgbG9nTGV2ZWxJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnRpbmVudFN0YWNrTWVzc2FnZUluZGV4ICs9IDE7XG5cbiAgICBsZXZlbCA9IGAke2xldmVsfSBgOyAgLy8vXG4gIH1cblxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcigpLFxuICAgICAgICB7IHN0YWNrIH0gPSBlcnJvcixcbiAgICAgICAgc3RhY2tNZXNzYWdlcyA9IHN0YWNrLnNwbGl0KC9cXHJcXG58XFxuLyksXG4gICAgICAgIHBlcnRpbmVudFN0YWNrTWVzc2FnZSA9IHN0YWNrTWVzc2FnZXNbcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXhdLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSxcbiAgICAgICAgZmlsZVBhdGggPSBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2UocGVydGluZW50U3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbGluZU51bWJlciA9IGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHBlcnRpbmVudFN0YWNrTWVzc2FnZSksXG4gICAgICAgIGxvZ01lc3NhZ2UgPSBgJHtsZXZlbH0ke2N1cnJlbnREYXRlQW5kVGltZVN0cmluZ30gJHtmaWxlUGF0aH0oJHtsaW5lTnVtYmVyfSkgJHttZXNzYWdlfWA7XG5cbiAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG5cbiAgaWYgKGxvZ0RpcmVjdG9yeVBhdGggIT09IG51bGwpIHtcbiAgICByb2xsT3ZlckxvZ0ZpbGUoKTtcblxuICAgIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgICBsb2dGaWxlQ29udGVudCA9IGAke2xvZ01lc3NhZ2V9XFxuYDtcblxuICAgIGFwcGVuZFRvRmlsZShsb2dGaWxlUGF0aCwgbG9nRmlsZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIGxvZ01lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIHRyYWNlKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBUUkFDRSk7IH1cblxuZnVuY3Rpb24gZGVidWcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIERFQlVHKTsgfVxuXG5mdW5jdGlvbiBpbmZvKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBJTkZPKTsgfVxuXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBXQVJOSU5HKTsgfVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgRVJST1IpOyB9XG5cbmZ1bmN0aW9uIGZhdGFsKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBGQVRBTCk7IH1cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHsgbG9nTGV2ZWwgPSBsZXZlbDsgfVxuXG5mdW5jdGlvbiBzZXRMb2dGaWxlQmFzZU5hbWUoZmlsZUJhc2VOYW1lKSB7IGxvZ0ZpbGVCYXNlTmFtZSA9IGZpbGVCYXNlTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dEaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHsgbG9nRGlyZWN0b3J5UGF0aCA9IGRpcmVjdG9yeVBhdGg7IH1cblxuZnVuY3Rpb24gZ2V0TG9nRmlsZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVQYXRoID0gZ2V0TG9nRmlsZVBhdGgoKSxcbiAgICAgICAgbG9nRmlsZUNvbnRlbnQgPSByZWFkRmlsZShsb2dGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIGxvZ0ZpbGVDb250ZW50O1xufVxuXG5PYmplY3QuYXNzaWduKGxvZywge1xuICBUUkFDRTogVFJBQ0UsXG4gIERFQlVHOiBERUJVRyxcbiAgSU5GTzogSU5GTyxcbiAgV0FSTklORzogV0FSTklORyxcbiAgRVJST1I6IEVSUk9SLFxuICBGQVRBTDogRkFUQUwsXG4gIHRyYWNlOiB0cmFjZSxcbiAgZGVidWc6IGRlYnVnLFxuICBpbmZvOiBpbmZvLFxuICB3YXJuaW5nOiB3YXJuaW5nLFxuICBlcnJvcjogZXJyb3IsXG4gIGZhdGFsOiBmYXRhbCxcbiAgc2V0TG9nTGV2ZWw6IHNldExvZ0xldmVsLFxuICBzZXRMb2dGaWxlQmFzZU5hbWU6IHNldExvZ0ZpbGVCYXNlTmFtZSxcbiAgc2V0TG9nRGlyZWN0b3J5UGF0aDogc2V0TG9nRGlyZWN0b3J5UGF0aCxcbiAgZ2V0TG9nRmlsZUNvbnRlbnQ6IGdldExvZ0ZpbGVDb250ZW50XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2c7XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBsb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0ubG9nYCxcbiAgICAgICAgbG9nRmlsZVBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKGxvZ0RpcmVjdG9yeVBhdGgsIGxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gbG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpIHtcbiAgY29uc3QgY3VycmVudERhdGVTdHJpbmcgPSBnZXRDdXJyZW50RGF0ZVN0cmluZygpLFxuICAgICAgICByb2xsZWRPdmVyTG9nRmlsZU5hbWUgPSBgJHtsb2dGaWxlQmFzZU5hbWV9LiR7Y3VycmVudERhdGVTdHJpbmd9LmxvZ2AsXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVOYW1lKTtcblxuICByZXR1cm4gcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlU3RhdHMgPSBnZXRTdGF0cyhsb2dGaWxlUGF0aCksXG4gICAgICAgIHsgbXRpbWUgfSA9IGxvZ0ZpbGVTdGF0cyxcbiAgICAgICAgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShtdGltZSk7ICAvLy9cblxuICByZXR1cm4gbG9nRmlsZUxhc3RNb2RpZmllZERhdGU7XG59XG5cbmZ1bmN0aW9uIHJvbGxPdmVyTG9nRmlsZSgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlRXhpc3RzID0gZG9lc0ZpbGVFeGlzdChsb2dGaWxlUGF0aCk7XG5cbiAgaWYgKCFsb2dGaWxlRXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbG9nRmlsZUxhc3RNb2RpZmllZERhdGUgPSBnZXRMb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSgpLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlID0gaXNEYXRlQ3VycmVudERhdGUobG9nRmlsZUxhc3RNb2RpZmllZERhdGUpO1xuXG4gIGlmICghbG9nRmlsZUxhc3RNb2RpZmllZERhdGVDdXJyZW50RGF0ZSkge1xuICAgIGNvbnN0IHJvbGxlZE92ZXJMb2dGaWxlUGF0aCA9IGdldFJvbGxlZE92ZXJMb2dGaWxlUGF0aCgpO1xuXG4gICAgcmVuYW1lRmlsZShsb2dGaWxlUGF0aCwgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RhdGVDdXJyZW50RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGN1cnJlbnREYXRlU3RyaW5nID0gY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCksXG4gICAgICAgIGRhdGVDdXJyZW50RGF0ZSA9IChkYXRlU3RyaW5nID09PSBjdXJyZW50RGF0ZVN0cmluZyk7XG5cbiAgcmV0dXJuIGRhdGVDdXJyZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXkgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXREYXRlKCksIDIpLCAgLy8vXG4gICAgICAgIG1vbnRoID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpLCAvLy9cbiAgICAgICAgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgaG91cnMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRIb3VycygpLCAyKSxcbiAgICAgICAgbWludXRlcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbnV0ZXMoKSwgMiksXG4gICAgICAgIHNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRTZWNvbmRzKCksIDIpLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMyksXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc30uJHttaWxsaXNlY29uZHN9YDtcblxuICByZXR1cm4gY3VycmVudERhdGVBbmRUaW1lU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBmaWxlUGF0aEZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goLyhcXC8uKylcXDpcXGQrXFw6XFxkKy8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aCA9IHBhdGgucmVzb2x2ZSgnLicpLCAgLy8vXG4gICAgICAgIGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aExlbmd0aCA9IGN1cnJlbnRXb3JraW5nRGlyZWN0b3J5UGF0aC5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoICsgMSwgIC8vL1xuICAgICAgICBmaWxlUGF0aCA9IGFic29sdXRlRmlsZVBhdGguc3Vic3RyKHN0YXJ0KTtcblxuICByZXR1cm4gZmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGxpbmVOdW1iZXJGcm9tU3RhY2tNZXNzYWdlKHN0YWNrTWVzc2FnZSkge1xuICBjb25zdCBtYXRjaGVzID0gc3RhY2tNZXNzYWdlLm1hdGNoKC9cXDooXFxkKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGxpbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0V2l0aFplcm9lcyhzdHJpbmcsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBwYWRTdHJpbmcgPSAnMCcsXG4gICAgICAgIHBhZGRlZFN0cmluZyA9IHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgdGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFyZ2V0TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgcGFkZGluZyArPSBwYWRTdHJpbmc7XG4gIH1cblxuICBjb25zdCBwYWRkZWRTdHJpbmcgPSBgJHtwYWRkaW5nfSR7c3RyaW5nfWAuc3Vic3RyKC10YXJnZXRMZW5ndGgpO1xuXG4gIHJldHVybiBwYWRkZWRTdHJpbmc7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRVRYX0NIQVJBQ1RFUiA9ICdcXHUwMDAzJztcblxuZnVuY3Rpb24gb25FVFgoaGFuZGxlcikge1xuICBjb25zdCB7IHN0ZGluIH0gPSBwcm9jZXNzLFxuICAgICAgICB7IHNldFJhd01vZGUgfSA9IHN0ZGluO1xuXG4gIGlmIChzZXRSYXdNb2RlKSB7XG4gICAgY29uc3QgcmF3TW9kZSA9IHRydWUsXG4gICAgICAgICAgZW5jb2RpbmcgPSAndXRmOCc7XG5cbiAgICBzdGRpbi5zZXRSYXdNb2RlKHJhd01vZGUpO1xuICAgIHN0ZGluLnNldEVuY29kaW5nKGVuY29kaW5nKTtcblxuICAgIHN0ZGluLnJlc3VtZSgpO1xuXG4gICAgc3RkaW4uYWRkTGlzdGVuZXIoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG5cbiAgICByZXR1cm4gb2ZmRXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gb2ZmRXh0KCkge1xuICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgZGF0YUhhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGF0YUhhbmRsZXIoY2hhcmFjdGVyKSB7XG4gICAgaWYgKGNoYXJhY3RlciA9PT0gRVRYX0NIQVJBQ1RFUikge1xuICAgICAgaGFuZGxlcigpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9uRVRYO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBvbkVUWCA9IHJlcXVpcmUoJy4vb25FVFgnKSxcbiAgICAgIGFzeW5jaHJvbm91c1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKTtcblxuY29uc3QgeyBzdGRpbiwgc3Rkb3V0IH0gPSBwcm9jZXNzLFxuICAgICAgeyB3aGlsc3QgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgZXhpdCB9ID0gcHJvY2VzcztcblxuY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KSxcbiAgICAgIExJTkVfRkVFRF9DSEFSQUNURVIgPSAnXFxuJyxcbiAgICAgIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSAnXFxyJztcblxuZnVuY3Rpb24gcHJvbXB0KG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHZhbHVlID0gbnVsbCxcbiAgICAgICAgeyBhdHRlbXB0cyA9IDMgfSA9IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0cyxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgd2hpbHN0KGF0dGVtcHQsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGNvbnRleHQ7XG4gICAgXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9LCBjb250ZXh0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9tcHQ7XG5cbmZ1bmN0aW9uIGF0dGVtcHQobmV4dCwgZG9uZSwgY29udGV4dCkge1xuICBsZXQgeyBhdHRlbXB0cyB9ID0gY29udGV4dDtcblxuICBjb25zdCB0ZXJtaW5hdGUgPSAoYXR0ZW1wdHMtLSA9PT0gMCk7XG4gIFxuICBpZiAodGVybWluYXRlKSB7XG4gICAgZG9uZSgpO1xuICAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgeyBkZXNjcmlwdGlvbixcbiAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgdmFsaWRhdGlvbkZ1bmN0aW9uLFxuICAgICAgICAgIGVuY29kaW5nID0gJ3V0ZjgnLFxuICAgICAgICAgIGhpZGRlbiA9IGZhbHNlIH0gPSBvcHRpb25zO1xuXG4gIGhpZGRlbiA/IFxuICAgIGhpZGRlbklucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIDpcbiAgICAgIHZpc2libGVJbnB1dChkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcblxuICBmdW5jdGlvbiBjYWxsYmFjayh2YWx1ZSkge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGlvbkZ1bmN0aW9uID8gIC8vL1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24odmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybi50ZXN0KHZhbHVlKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgIGF0dGVtcHRzOiBhdHRlbXB0c1xuICAgICAgfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlzaWJsZUlucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3QgcmF3TW9kZSA9IGZhbHNlO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgbGV0IHZhbHVlO1xuXG4gIGNvbnN0IGxpc3RlbmVyID0gZnVuY3Rpb24oY2h1bmspIHtcbiAgICB2YWx1ZSA9IGNodW5rLnRyaW0oKTtcblxuICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgbGlzdGVuZXIpO1xuXG4gICAgc3RkaW4ucGF1c2UoKTtcblxuICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgfTtcblxuICBzdGRpbi5vbignZGF0YScsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gaGlkZGVuSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgb2ZmRVRYID0gb25FVFgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ15DJyk7XG5cbiAgICAgICAgICBleGl0KCk7XG4gICAgICAgIH0pO1xuXG4gIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG5cbiAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG5cbiAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgbGV0IHZhbHVlID0gJyc7XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNodW5rLnRvU3RyaW5nKGVuY29kaW5nKTtcblxuICAgIHN3aXRjaCAoY2hhcmFjdGVyKSB7XG4gICAgICBjYXNlIExJTkVfRkVFRF9DSEFSQUNURVIgOlxuICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSIDpcbiAgICAgICAgc3Rkb3V0LndyaXRlKExJTkVfRkVFRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIHN0ZGluLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgbGlzdGVuZXIpO1xuXG4gICAgICAgIHN0ZGluLnBhdXNlKCk7XG5cbiAgICAgICAgb2ZmRVRYKCk7XG5cbiAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfQ0hBUkFDVEVSIDpcbiAgICAgICAgdmFsdWUgPSB0cnVuY2F0ZSh2YWx1ZSk7XG5cbiAgICAgICAgc3Rkb3V0LmNsZWFyTGluZSgpO1xuXG4gICAgICAgIHN0ZG91dC5jdXJzb3JUbygwKTtcblxuICAgICAgICBzdGRvdXQud3JpdGUoZGVzY3JpcHRpb24pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgc3RkaW4ub24oJ2RhdGEnLCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIHRydW5jYXRlKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJlYWRGaWxlLCB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmxldCByY0Jhc2VFeHRlbnNpb24gPSAnJztcblxuZnVuY3Rpb24gcmMoZW52aXJvbm1lbnROYW1lT3JBcmd2ID0gbnVsbCkge1xuICBsZXQgZW52aXJvbm1lbnQsXG4gICAgICBlbnZpcm9ubWVudE5hbWU7XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZU9yQXJndiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgYXJndiA9IGVudmlyb25tZW50TmFtZU9yQXJndjtcblxuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpO1xuICB9IGVsc2Uge1xuICAgIGVudmlyb25tZW50TmFtZSA9IGVudmlyb25tZW50TmFtZU9yQXJndjtcbiAgfVxuXG4gIGNvbnN0IGpzb24gPSByZWFkUkNGaWxlKCksXG4gICAgICAgIHsgZW52aXJvbm1lbnRzIH0gPSBqc29uO1xuXG4gIGlmIChlbnZpcm9ubWVudE5hbWUgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaXJzdEVudmlyb25tZW50ID0gZmlyc3QoZW52aXJvbm1lbnRzKTtcblxuICAgIGVudmlyb25tZW50ID0gZmlyc3RFbnZpcm9ubWVudDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudHMuZmluZChmdW5jdGlvbihlbnZpcm9ubWVudCkge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBlbnZpcm9ubWVudCxcbiAgICAgICAgICAgIGZvdW5kID0gKG5hbWUgPT09IGVudmlyb25tZW50TmFtZSk7XG5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZSBlbnZpcm9ubWVudC5uYW1lO1xuXG4gIE9iamVjdC5hc3NpZ24ocmMsIGVudmlyb25tZW50KTtcblxuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRSQ0ZpbGUoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7cmNCYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gcmVhZEZpbGUoYWJzb2x1dGVGaWxlUGF0aCksXG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4ganNvbjsgICAgICBcbn1cblxuZnVuY3Rpb24gd3JpdGVSQ0ZpbGUoanNvbikge1xuICBjb25zdCBmaWxlUGF0aCA9IGAuLy4ke3JjQmFzZUV4dGVuc2lvbn1yY2AsXG4gICAgICAgIGFic29sdXRlRmlsZVBhdGggPSBwYXRoLnJlc29sdmUoZmlsZVBhdGgpLFxuICAgICAgICBmaWxlQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIGBcXHRgKTtcblxuICB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgZmlsZUNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVSQ0ZpbGUoYWRkZWRQcm9wcGVydGllcywgLi4uZGVsZXRlZFByb3BlcnR5TmFtZXMpIHtcbiAgbGV0IGpzb24gPSByZWFkUkNGaWxlKCk7XG5cbiAgaWYgKGFkZGVkUHJvcHBlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKGpzb24sIGFkZGVkUHJvcHBlcnRpZXMpO1xuICB9XG5cbiAgZGVsZXRlZFByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihkZWxldGVkUHJvcGVydHlOYW1lKSB7XG4gICAgZGVsZXRlIGpzb25bZGVsZXRlZFByb3BlcnR5TmFtZV07XG4gIH0pO1xuXG4gIHdyaXRlUkNGaWxlKGpzb24pOyAgICAgIFxufVxuXG5mdW5jdGlvbiBzZXRSQ0Jhc2VFeHRlbnNpb24oYmFzZUV4dGVuc2lvbikgeyByY0Jhc2VFeHRlbnNpb24gPSBiYXNlRXh0ZW5zaW9uOyB9XG5cbk9iamVjdC5hc3NpZ24ocmMsIHtcbiAgcmVhZFJDRmlsZTogcmVhZFJDRmlsZSxcbiAgd3JpdGVSQ0ZpbGU6IHdyaXRlUkNGaWxlLFxuICB1cGRhdGVSQ0ZpbGU6IHVwZGF0ZVJDRmlsZSxcbiAgc2V0UkNCYXNlRXh0ZW5zaW9uOiBzZXRSQ0Jhc2VFeHRlbnNpb25cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJjO1xuXG5mdW5jdGlvbiBlbnZpcm9ubWVudE5hbWVGcm9tQXJndihhcmd2KSB7XG4gIGxldCBlbnZpcm9ubWVudE5hbWUgPSBudWxsO1xuXG4gIGFyZ3YuZmluZChmdW5jdGlvbihhcmd1bWVudCkgeyAgLy8vXG4gICAgY29uc3QgbWF0Y2hlcyA9IGFyZ3VtZW50Lm1hdGNoKC9cXC1cXC1lbnZpcm9ubWVudD0oLispLyksXG4gICAgICAgICAgZm91bmQgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBlbnZpcm9ubWVudE5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudE5hbWU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSA9IGFycmF5O1xuXG5mdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eXFwuezEsMn1cXC8vKSxcbiAgICAgICAgcGF0aFJlbGF0aXZlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gIXBhdGhSZWxhdGl2ZVBhdGg7IC8vL1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcGF0aCkge1xuICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7IC8vL1xuXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3REaXJlY3RvcnlOYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgcG9zaXRpb24gPSBwYXRoLnNlYXJjaChyZWdFeHApLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUGF0aHMoZGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBhYnNvbHV0ZVBhdGggPSBudWxsO1xuXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzID0gZGlyZWN0b3J5UGF0aC5zcGxpdCgnLycpLFxuICAgICAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpO1xuXG4gIGxldCBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyksXG4gICAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLicpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLi4nKSAmJiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICAgIGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gW10uY29uY2F0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKS5jb25jYXQocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gICAgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuam9pbignLycpO1xuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoMSwgcGF0aDIpIHtcbiAgcGF0aDEgPSBwYXRoMS5yZXBsYWNlKC9cXC8kLywgJycpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7cGF0aDF9LyR7cGF0aDJ9YDtcblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4rXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RvcnlQYXRoO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKylcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhSZWxhdGl2ZVBhdGg6IGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoOiBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lOiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSxcbiAgaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aDogaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCxcbiAgY29tYmluZVBhdGhzOiBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHM6IGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZmlsZVN5c3RlbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9maWxlU3lzdGVtJyk7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHBhcnNlRmlsZShmaWxlUGF0aCwgYXJncykge1xuICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VDb250ZW50KGNvbnRlbnQsIGFyZ3MpO1xuXG4gIHJldHVybiBwYXJzZWRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncykge1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpLFxuICAgICAgICBwYXJzZWRMaW5lcyA9IHBhcnNlTGluZXMobGluZXMsIGFyZ3MpLFxuICAgICAgICBwYXJzZWRDb250ZW50ID0gcGFyc2VkTGluZXMuam9pbignXFxuJyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZShsaW5lLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmUgPSBsaW5lLnJlcGxhY2UoL1xcJFxceyguKz8pXFx9L2csIGZ1bmN0aW9uKG1hdGNoLCB0b2tlbikge1xuICAgIGNvbnN0IHBhcnNlZFRva2VuID0gcGFyc2VUb2tlbih0b2tlbiwgYXJncyk7XG5cbiAgICByZXR1cm4gcGFyc2VkVG9rZW47XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFyc2VGaWxlOiBwYXJzZUZpbGUsXG4gIHBhcnNlQ29udGVudDogcGFyc2VDb250ZW50LFxuICBwYXJzZUxpbmU6IHBhcnNlTGluZVxufTtcblxuZnVuY3Rpb24gcGFyc2VMaW5lcyhsaW5lcywgYXJncykge1xuICBjb25zdCBwYXJzZWRMaW5lcyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgY29uc3QgcGFyc2VkTGluZSA9IHBhcnNlTGluZShsaW5lLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRMaW5lO1xuICB9KTtcblxuICByZXR1cm4gcGFyc2VkTGluZXM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW4odG9rZW4sIGFyZ3MpIHtcbiAgbGV0IHBhcnNlZFRva2VuID0gJyc7XG5cbiAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcGFyc2VkVG9rZW4gPSBhcmdzW3Rva2VuXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWRUb2tlbjtcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl19
