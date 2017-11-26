(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const IMAGE_SIZE = 128,
      IMAGE_MAP_PATH = '/imageMap',
      INDEX_PAGE_PATH = '/',
      SHAPES_PAGE_PATH = '/shapes',
      MASKING_PAGE_PATH = '/masking',
      CONTAINER_HOUSE_PAGE_PATH = '/containerHouse',
      TIMBER_FRAMED_HOUSE_PAGE_PATH = '/timberFramedHouse';

module.exports = {
  IMAGE_SIZE: IMAGE_SIZE,
  IMAGE_MAP_PATH: IMAGE_MAP_PATH,
  INDEX_PAGE_PATH: INDEX_PAGE_PATH,
  MASKING_PAGE_PATH: MASKING_PAGE_PATH,
  SHAPES_PAGE_PATH: SHAPES_PAGE_PATH,
  CONTAINER_HOUSE_PAGE_PATH: CONTAINER_HOUSE_PAGE_PATH,
  TIMBER_FRAMED_HOUSE_PAGE_PATH: TIMBER_FRAMED_HOUSE_PAGE_PATH
};

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var blendingMixin = require('./canvas/mixin/blending'),
    programMixin = require('./canvas/mixin/program'),
    textureMixin = require('./canvas/mixin/texture'),
    colourMixin = require('./canvas/mixin/colour'),
    shaderMixin = require('./canvas/mixin/shader'),
    bufferMixin = require('./canvas/mixin/buffer'),
    matrixMixin = require('./canvas/mixin/matrix'),
    depthMixin = require('./canvas/mixin/depth'),
    domUtilities = require('./utilities/dom');

var domElementFromSelector = domUtilities.domElementFromSelector;


var defaultOffset = 0;

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
    value: function render(shader, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getProjectionMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);

      var count = shader.getCount();

      this.drawElements(count);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(count) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
      var _context = this.context,
          TRIANGLES = _context.TRIANGLES,
          UNSIGNED_SHORT = _context.UNSIGNED_SHORT,
          mode = TRIANGLES,
          type = UNSIGNED_SHORT;


      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, blendingMixin);
Object.assign(Canvas.prototype, programMixin);
Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;

},{"./canvas/mixin/blending":3,"./canvas/mixin/buffer":4,"./canvas/mixin/colour":5,"./canvas/mixin/depth":6,"./canvas/mixin/matrix":7,"./canvas/mixin/program":8,"./canvas/mixin/shader":9,"./canvas/mixin/texture":10,"./utilities/dom":106}],3:[function(require,module,exports){
'use strict';

function enableBlending() {
  var _context = this.context,
      SRC_ALPHA = _context.SRC_ALPHA,
      ONE = _context.ONE,
      BLEND = _context.BLEND;


  this.context.enable(BLEND);

  this.context.blendFunc(SRC_ALPHA, ONE);
}

module.exports = {
  enableBlending: enableBlending
};

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

var defaultDepth = 1.0;

function clearDepth() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDepth;

  this.context.clearDepth(depth);
}

function clearDepthBuffer() {
  var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT;


  this.context.clear(DEPTH_BUFFER_BIT);
}

function enableDepthTesting() {
  var _context = this.context,
      DEPTH_TEST = _context.DEPTH_TEST,
      LEQUAL = _context.LEQUAL;


  this.context.enable(DEPTH_TEST);

  this.context.depthFunc(LEQUAL);
}

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting
};

},{}],7:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
      vertexShader = this.createShader(type, fragmentShaderSource);


  return vertexShader;
}

module.exports = {
  createShader: createShader,
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader
};

},{}],10:[function(require,module,exports){
'use strict';

function createTexture(image) {
  var _context = this.context,
      TEXTURE_2D = _context.TEXTURE_2D,
      RGBA = _context.RGBA,
      UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
      level = 0,
      internalFormat = RGBA,
      format = RGBA,
      type = UNSIGNED_BYTE,
      texture = this.context.createTexture();


  this.context.bindTexture(TEXTURE_2D, texture);

  this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);

  this.context.generateMipmap(TEXTURE_2D);
}

function activateTexture(target) {
  this.context.activeTexture(target);
}

module.exports = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

},{}],11:[function(require,module,exports){
'use strict';

var VERTICES_LENGTH = 3,
    CYLINDER_SIDES = 64,
    MINIMUM_DISTANCE = 1,
    DEGREES_TO_RADIANS = Math.PI / 180,
    FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS,
    Z_NEAR = 1,
    Z_FAR = 1000,
    MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL',
    CTRL_KEY_CODE = 17,
    SHIFT_KEY_CODE = 16,
    OFFSET_SCALAR = 0.25,
    DISTANCE_SCALAR = 1.25,
    ANGLE_COORDINATES_SCALAR = 0.01,
    INITIAL_MOUSE_COORDINATES = [0, 0],
    INITIAL_ANGLE_COORDINATES = [0, 0],
    DEFAULT_MARGIN_OF_ERROR = 0.0000001;

module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  MOUSE_UP: MOUSE_UP,
  MOUSE_DOWN: MOUSE_DOWN,
  MOUSE_MOVE: MOUSE_MOVE,
  MOUSE_WHEEL: MOUSE_WHEEL,
  CTRL_KEY_CODE: CTRL_KEY_CODE,
  SHIFT_KEY_CODE: SHIFT_KEY_CODE,
  FIELD_OF_VIEW: FIELD_OF_VIEW,
  VERTICES_LENGTH: VERTICES_LENGTH,
  CYLINDER_SIDES: CYLINDER_SIDES,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEGREES_TO_RADIANS: DEGREES_TO_RADIANS,
  OFFSET_SCALAR: OFFSET_SCALAR,
  DISTANCE_SCALAR: DISTANCE_SCALAR,
  ANGLE_COORDINATES_SCALAR: ANGLE_COORDINATES_SCALAR,
  INITIAL_MOUSE_COORDINATES: INITIAL_MOUSE_COORDINATES,
  INITIAL_ANGLE_COORDINATES: INITIAL_ANGLE_COORDINATES,
  DEFAULT_MARGIN_OF_ERROR: DEFAULT_MARGIN_OF_ERROR
};

},{}],12:[function(require,module,exports){
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
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      ///
    }
  }, {
    key: 'assignContext',
    value: function assignContext(names, thenDelete) {
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
        var value = this.context[name],
            propertyName = name,
            ///
        descriptor = {
          value: value
        };

        Object.defineProperty(this, propertyName, descriptor);

        if (thenDelete) {
          delete this.context[name];
        }
      }.bind(this));
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

      var element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))(),
          childElements = childElementsFromElementOrProperties(element, properties);

      element.setChildElements(childElements);

      childElements.forEach(function (childElement) {
        element.updateContext(childElement);
      });

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function childElementsFromElementOrProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements || [];

  return childElements;
}

},{}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    tilt = require('./camera/tilt'),
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    cameraUtilities = require('../utilities/camera');

var offsetMatrixFromOffset = cameraUtilities.offsetMatrixFromOffset,
    rotationMatrixFromAngles = cameraUtilities.rotationMatrixFromAngles,
    positionMatrixFromDistance = cameraUtilities.positionMatrixFromDistance,
    projectionMatrixFromWidthAndHeight = cameraUtilities.projectionMatrixFromWidthAndHeight,
    normalMatrixFromRotationMatrix = cameraUtilities.normalMatrixFromRotationMatrix;

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(tilt, pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.tilt = tilt;
    _this.pan = pan;
    _this.zoom = zoom;
    _this.handler = handler;
    _this.mouseDown = mouseDown;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'mouseUpHandler',
    value: function mouseUpHandler(mouseCoordinates) {
      this.mouseDown = false;

      this.tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      this.tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, this.tilt);

      if (this.mouseDown) {
        this.update();
      }
    }
  }, {
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(delta) {
      this.zoom.mouseWheelEventHandler(delta);

      this.update();
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.tilt.shiftKeyHandler(shiftKeyDown);

      this.pan.shiftKeyHandler(shiftKeyDown);
    }
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      var shiftKeyHandler = this.shiftKeyHandler.bind(this);

      keyEvents.addShiftKeyHandler(shiftKeyHandler);
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      mouseEvents.addMouseUpHandler(mouseUpHandler);
      mouseEvents.addMouseDownHandler(mouseDownHandler);
      mouseEvents.addMouseMoveHandler(mouseMoveHandler);
      mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(handler) {
      this.handler = handler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offset = this.pan.getOffset(),
          angles = this.tilt.getAngles(),
          distance = this.zoom.getDistance(),
          offsetMatrix = offsetMatrixFromOffset(offset),
          rotationMatrix = rotationMatrixFromAngles(angles),
          positionMatrix = positionMatrixFromDistance(distance),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalMatrix = normalMatrixFromRotationMatrix(rotationMatrix);

      if (this.handler) {
        ///
        this.handler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        onUpdate: this.onUpdate.bind(this),
        forceUpdate: this.forceUpdate.bind(this)
      };
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.addKeyEventHandlers();
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialDistance = properties.initialDistance,
          initialOffset = properties.initialOffset,
          canvas = properties.canvas,
          pan = Pan.fromInitialOffset(initialOffset),
          zoom = Zoom.fromInitialDistance(initialDistance),
          handler = null,
          mouseDown = false,
          camera = new Camera(tilt, pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":12,"../utilities/camera":105,"./camera/keyEvents":14,"./camera/mouseEvents":15,"./camera/pan":16,"./camera/tilt":17,"./camera/zoom":18}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var CTRL_KEY_CODE = constants.CTRL_KEY_CODE,
    SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlers) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
  }

  _createClass(KeyEvents, [{
    key: 'onCtrlKeyUp',
    value: function onCtrlKeyUp() {
      var ctrlKeyDown = false,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyUp',
    value: function onShiftKeyUp() {
      var shiftKeyDown = false,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'onCtrlKeyDown',
    value: function onCtrlKeyDown() {
      var ctrlKeyDown = true,
          ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.forEach(function (ctrlKeyHandler) {
        ctrlKeyHandler(ctrlKeyDown);
      });
    }
  }, {
    key: 'onShiftKeyDown',
    value: function onShiftKeyDown() {
      var shiftKeyDown = true,
          shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.forEach(function (shiftKeyHandler) {
        shiftKeyHandler(shiftKeyDown);
      });
    }
  }, {
    key: 'addCtrlKeyHandler',
    value: function addCtrlKeyHandler(ctrlKeyHandler) {
      var ctrlKeyHandlers = this.handlers[CTRL_KEY_CODE];

      ctrlKeyHandlers.push(ctrlKeyHandler);
    }
  }, {
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var shiftKeyHandlers = this.handlers[SHIFT_KEY_CODE];

      shiftKeyHandlers.push(shiftKeyHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var handlers = {},
          keyEvents = new KeyEvents(handlers);

      handlers[CTRL_KEY_CODE] = [];
      handlers[SHIFT_KEY_CODE] = [];

      return keyEvents;
    }
  }]);

  return KeyEvents;
}();

var keyEvents = KeyEvents.fromNothing();

module.exports = keyEvents;

var documentDOMElement = document.documentElement;

documentDOMElement.onkeyup = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyUp();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyUp();
  }
};

documentDOMElement.onkeydown = function (event) {
  var keyCode = event.keyCode;

  if (false) {} else if (keyCode === CTRL_KEY_CODE) {
    keyEvents.onCtrlKeyDown();
  } else if (keyCode === SHIFT_KEY_CODE) {
    keyEvents.onShiftKeyDown();
  }
};

},{"../../constants":11}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpHandler',
    value: function addMouseUpHandler(mouseUpHandler) {
      this.addHandler(MOUSE_UP, mouseUpHandler);
    }
  }, {
    key: 'addMouseDownHandler',
    value: function addMouseDownHandler(mouseDownHandler) {
      this.addHandler(MOUSE_DOWN, mouseDownHandler);
    }
  }, {
    key: 'addMouseMoveHandler',
    value: function addMouseMoveHandler(mouseMoveHandler) {
      this.addHandler(MOUSE_MOVE, mouseMoveHandler);
    }
  }, {
    key: 'addMouseWheelHandler',
    value: function addMouseWheelHandler(mouseWheelHandler) {
      this.addHandler(MOUSE_WHEEL, mouseWheelHandler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(eventType, handler) {
      var handlers = this.handlersMap[eventType];

      handlers.push(handler);
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(eventType, event) {
      var handlers = this.handlersMap[eventType],
          mouseCoordinates = mouseCoordinatesFromEvent(event, this.canvas);

      handlers.forEach(function (handler) {
        handler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var handlers = this.handlersMap[MOUSE_WHEEL],
          delta = deltaFromEvent(event);

      handlers.forEach(function (handler) {
        handler(delta);
      });
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {
        MOUSE_UP: [],
        MOUSE_DOWN: [],
        MOUSE_MOVE: [],
        MOUSE_WHEEL: []
      },
          mouseEvents = new MouseEvents(handlersMap),
          domElement = canvas.getDOMElement();

      addMouseEventHandler(domElement, 'mouseup', function (event) {
        mouseEvents.onMouseEvent(MOUSE_UP, event);
      });
      addMouseEventHandler(domElement, 'mousedown', function (event) {
        mouseEvents.onMouseEvent(MOUSE_DOWN, event);
      });
      addMouseEventHandler(domElement, 'mousemove', function (event) {
        mouseEvents.onMouseEvent(MOUSE_MOVE, event);
      });
      addMouseEventHandler(domElement, 'mousewheel', function (event) {
        mouseEvents.onMouseWheelEvent(event);
      });

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
  var domElement = event.target,
      ///
  domElementBoundingClientRect = domElement.getBoundingClientRect(),
      mouseCoordinates = [+(event.clientX - domElementBoundingClientRect.left), -(event.clientY - domElementBoundingClientRect.top)];

  return mouseCoordinates;
}

function addMouseEventHandler(domElement, type, handler) {
  domElement.addEventListener(type, function (event) {
    handler(event);

    event.preventDefault();
  });
}

},{"../../constants":11}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorUtilities.add3,
    subtract2 = vectorUtilities.subtract2,
    scale2 = vectorUtilities.scale2,
    OFFSET_SCALAR = constants.OFFSET_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES;

var Pan = function () {
  function Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, Pan);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.offset = offset;
    this.previousOffset = previousOffset;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(Pan, [{
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.mouseDown = false;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousOffset = this.offset;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates, angles) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && this.shiftKeyDown) {
        this.updateOffset(angles);
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (this.shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousOffset = this.offset;
      }
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(angles) {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          scalar = OFFSET_SCALAR,
          relativeMouseCoordinates = subtract2(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale2(relativeMouseCoordinates, scalar),
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

      var offset = this.previousOffset.slice(); ///

      (function () {
        var x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

        offset = add3(offset, [x, y, z]);
      })();

      (function () {
        var x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

        offset = add3(offset, [x, y, z]);
      })();

      this.offset = offset;
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          mouseDown = false,
          shiftKeyDown = false,
          previousOffset = offset,
          ///
      mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          previousMouseCoordinates = mouseCoordinates,
          pan = new Pan(mouseDown, shiftKeyDown, offset, previousOffset, mouseCoordinates, previousMouseCoordinates);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

},{"../../constants":11,"../../utilities/array":104,"../../utilities/vector":112}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    scale3 = vectorUtilities.scale3,
    ANGLE_COORDINATES_SCALAR = constants.ANGLE_COORDINATES_SCALAR,
    INITIAL_MOUSE_COORDINATES = constants.INITIAL_MOUSE_COORDINATES,
    INITIAL_ANGLE_COORDINATES = constants.INITIAL_ANGLE_COORDINATES;

var Tilt = function () {
  function Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Tilt);

    this.mouseDown = mouseDown;
    this.shiftKeyDown = shiftKeyDown;
    this.mouseCoordinates = mouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Tilt, [{
    key: 'getXAngle',
    value: function getXAngle() {
      var secondAngleCoordinate = second(this.angleCoordinates),
          xAngle = secondAngleCoordinate; ///

      return xAngle;
    }
  }, {
    key: 'getYAngle',
    value: function getYAngle() {
      var firstAngleCoordinate = first(this.angleCoordinates),
          yAngle = -firstAngleCoordinate; ///

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
      var xAngle = this.getXAngle(),
          yAngle = this.getYAngle(),
          zAngle = this.getZAngle(),
          angles = [xAngle, yAngle, zAngle];

      return angles;
    }
  }, {
    key: 'mouseUpHandler',
    value: function mouseUpHandler() {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler() {
      this.mouseDown = true;
      this.previousMouseCoordinates = this.mouseCoordinates;
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      this.mouseCoordinates = mouseCoordinates;

      if (this.mouseDown && !this.shiftKeyDown) {
        this.updateAngleCoordinates();
      }
    }
  }, {
    key: 'shiftKeyHandler',
    value: function shiftKeyHandler(shiftKeyDown) {
      this.shiftKeyDown = shiftKeyDown;

      if (!shiftKeyDown) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.previousAngleCoordinates = this.angleCoordinates;
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates() {
      var scalar = ANGLE_COORDINATES_SCALAR,
          relativeMouseCoordinates = subtract3(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale3(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add3(this.previousAngleCoordinates, relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          shiftKeyDown = false,
          mouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          ///
      previousMouseCoordinates = mouseCoordinates,
          ///
      tilt = new Tilt(mouseDown, shiftKeyDown, mouseCoordinates, angleCoordinates, previousMouseCoordinates, previousAngleCoordinates);

      return tilt;
    }
  }]);

  return Tilt;
}();

var tilt = Tilt.fromNothing();

module.exports = tilt;

},{"../../constants":11,"../../utilities/array":104,"../../utilities/vector":112}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../../constants');

var DISTANCE_SCALAR = constants.DISTANCE_SCALAR,
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
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      var scalar = DISTANCE_SCALAR;

      this.distance -= delta * scalar;

      this.distance = Math.max(MINIMUM_DISTANCE, this.distance);
    }
  }], [{
    key: 'fromInitialDistance',
    value: function fromInitialDistance(initialDistance) {
      var distance = initialDistance,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

module.exports = Zoom;

},{"../../constants":11}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Facet = require('../facet'),
    Mask = require('../element/mask'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var normalise3 = vectorUtilities.normalise3,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(facets, transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.facets = facets;

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements(),
          masking = false; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masking);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var vertices = facet.getVertices();

        vertexPositions = vertices.reduce(function (vertexPositions, vertex) {
          var vertexPosition = vertex.slice(); ///

          vertexPositions.push(vertexPosition);

          return vertexPositions;
        }, vertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes() {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          facets = indexes.map(function (indexes) {
        ///
        var facet = Facet.fromVerticesAndIndexes(vertices, indexes);

        return facet;
      }),
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":12,"../element/mask":22,"../facet":74,"../utilities/transform":111,"../utilities/vector":112}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(facets, transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, facets, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms, masking) {
      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!masking) {
        this.render(colourRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(colourRenderer) {
      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(),
          vertexNormals = this.calculateVertexNormals(),
          vertexColours = this.calculateVertexColours();

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours() {
      var facets = this.getFacets(),
          vertexColour = this.colour,
          vertexColours = facets.reduce(function (vertexColours, facet) {
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);

        return vertexColours;
      }, []);

      return vertexColours;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, vertices, indexes, colour].concat(remainingArguments));


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":19}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    imageMapUtilities = require('../../utilities/imageMap');

var textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, imageName) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

    _this.imageName = imageName;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms, masking) {
      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);

      if (!masking) {
        this.render(textureRenderer);
      }
    }
  }, {
    key: 'render',
    value: function render(textureRenderer) {
      var vertexPositions = this.calculateVertexPositions(),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);
    }
  }, {
    key: 'calculateTextureCoordinates',
    value: function calculateTextureCoordinates(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          imageNamesLength = vertexPositionsLength / 4,
          ///
      imageNames = [];

      for (var index = 0; index < imageNamesLength; index++) {
        imageNames.push(this.imageName);
      }

      var textureCoordinates = textureCoordinatesFromImageNames(imageNames);

      return textureCoordinates;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var imageName = properties.imageName,
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);


      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":19,"../../utilities/imageMap":108}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../maskingFacet'),
    arrayUtilities = require('../utilities/array');

var push = arrayUtilities.push;

var Mask = function (_Element) {
  _inherits(Mask, _Element);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'getFacets',
    value: function getFacets() {
      var childElements = this.getChildElements(),
          facets = childElements.reduce(function (facets, childElement) {
        var childElementFacets = childElement.getFacets();

        push(facets, childElementFacets);

        return facets;
      }, []);

      return facets;
    }
  }, {
    key: 'getMaskingFacets',
    value: function getMaskingFacets() {
      var facets = this.getFacets(),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = MaskingFacet.fromFacet(facet);

        return maskingFacet;
      });

      return maskingFacets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var childElements = this.getChildElements(),
          masking = true; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masking);
      });
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var facets = element.getFacets();

      var maskingFacets = this.getMaskingFacets();

      maskingFacets.forEach(function (maskingFacet) {
        var unmaskedFacets = [];

        facets.forEach(function (facet) {
          maskingFacet.maskFacet(facet, unmaskedFacets);
        });

        facets = unmaskedFacets; ///
      });

      element.setFacets(facets);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Mask, properties);
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;

},{"../element":12,"../maskingFacet":79,"../utilities/array":104}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(colourRenderer, textureRenderer, canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourRenderer',
    value: function getColourRenderer() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureRenderer',
    value: function getTextureRenderer() {
      return this.textureRenderer;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = function () {
        this.resize();

        this.forceUpdate();
      }.bind(this);

      this.resize();

      this.forceUpdate();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas),
          transforms = [];


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });

      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      colourRenderer.createBuffers(canvas);
      textureRenderer.createBuffers(canvas);

      canvas.enableDepthTesting();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

},{"../element":12,"../renderer/colour":85,"../renderer/texture":101}],24:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  masking: require('./examples/masking'),
  containerHouse: require('./examples/containerHouse'),
  timberFramedHouse: require('./examples/timberFramedHouse')
};

},{"./examples/containerHouse":30,"./examples/masking":69,"./examples/shapes":70,"./examples/timberFramedHouse":71}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = cuboid.defaultVertices,
    defaultIndexes = cuboid.defaultIndexes;

var ColouredCuboid = function (_ColouredCanvasElemen) {
  _inherits(ColouredCuboid, _ColouredCanvasElemen);

  function ColouredCuboid() {
    _classCallCheck(this, ColouredCuboid);

    return _possibleConstructorReturn(this, (ColouredCuboid.__proto__ || Object.getPrototypeOf(ColouredCuboid)).apply(this, arguments));
  }

  _createClass(ColouredCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes);


      return colouredCuboid;
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;

},{"../../../element/canvas/coloured":20,"../cuboid":27}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = cylinder.defaultVertices,
    defaultIndexes = cylinder.defaultIndexes;

var ColouredCylinder = function (_ColouredCanvasElemen) {
  _inherits(ColouredCylinder, _ColouredCanvasElemen);

  function ColouredCylinder() {
    _classCallCheck(this, ColouredCylinder);

    return _possibleConstructorReturn(this, (ColouredCylinder.__proto__ || Object.getPrototypeOf(ColouredCylinder)).apply(this, arguments));
  }

  _createClass(ColouredCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          colouredCylinder = ColouredCanvasElement.fromProperties(ColouredCylinder, properties, vertices, indexes);


      return colouredCylinder;
    }
  }]);

  return ColouredCylinder;
}(ColouredCanvasElement);

module.exports = ColouredCylinder;

},{"../../../element/canvas/coloured":20,"../cylinder":28}],27:[function(require,module,exports){
'use strict';

var defaultVertices = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]],
    defaultIndexes = [[0, 3, 1], [2, 1, 3], [4, 5, 6], [6, 7, 4], [0, 4, 7], [7, 3, 0], [5, 1, 6], [2, 6, 1], [3, 7, 6], [6, 2, 3], [0, 5, 4], [5, 0, 1]];

module.exports = {
      defaultVertices: defaultVertices,
      defaultIndexes: defaultIndexes
};

},{}],28:[function(require,module,exports){
'use strict';

var constants = require('../../constants');

var CYLINDER_SIDES = constants.CYLINDER_SIDES;


var defaultIndexes = calculateDefaultIndexes(),
    defaultVertices = calculateDefaultVertices();

module.exports = {
  defaultIndexes: defaultIndexes,
  defaultVertices: defaultVertices
};

function calculateDefaultIndexes() {
  var defaultIndexes = [],
      sides = CYLINDER_SIDES,
      defaultIndexCount = sides * 2;

  for (var count = 0; count < sides; count++) {
    var defaultIndex = count * 2;

    defaultIndexes.push([(defaultIndex + 1) % defaultIndexCount, (defaultIndex + 0) % defaultIndexCount, (defaultIndex + 2) % defaultIndexCount]);
    defaultIndexes.push([(defaultIndex + 2) % defaultIndexCount, (defaultIndex + 3) % defaultIndexCount, (defaultIndex + 1) % defaultIndexCount]);
  }

  return defaultIndexes;
}

function calculateDefaultVertices() {
  var defaultVertices = [],
      sides = CYLINDER_SIDES,
      step = 2 * Math.PI / sides;

  for (var count = 0; count < sides; count++) {
    var angle = step * count,
        angleCosine = Math.cos(angle),
        angleSine = Math.sin(angle),
        topDefaultVertex = [(angleCosine + 1) / 2, (angleSine + 1) / 2, 0],
        bottomDefaultVertex = [(angleCosine + 1) / 2, (angleSine + 1) / 2, 1];

    defaultVertices.push(topDefaultVertex);
    defaultVertices.push(bottomDefaultVertex);
  }

  return defaultVertices;
}

},{"../../constants":11}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositions = cuboid.initialVertexPositions;

var TexturedCuboid = function (_TexturedCanvasElemen) {
  _inherits(TexturedCuboid, _TexturedCanvasElemen);

  function TexturedCuboid() {
    _classCallCheck(this, TexturedCuboid);

    return _possibleConstructorReturn(this, (TexturedCuboid.__proto__ || Object.getPrototypeOf(TexturedCuboid)).apply(this, arguments));
  }

  _createClass(TexturedCuboid, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedCuboid, properties);
    }
  }]);

  return TexturedCuboid;
}(TexturedCanvasElement);

module.exports = TexturedCuboid;

},{"../../../element/canvas/textured":21,"../cuboid":27}],30:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./containerHouse/frame'),
    RoofGarden = require('./containerHouse/roofGarden'),
    FirstFloor = require('./containerHouse/floor/first'),
    ThirdFloor = require('./containerHouse/floor/third'),
    SecondFloor = require('./containerHouse/floor/second'),
    Foundations = require('./containerHouse/foundations'),
    MainBalcony = require('./containerHouse/balcony/main'),
    LowerBalcony = require('./containerHouse/balcony/lower'),
    BedroomBalcony = require('./containerHouse/balcony/bedroom'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 100, initialOffset: [-18, 0, -16], canvas: canvas }),
      React.createElement(Foundations, null),
      React.createElement(FirstFloor, null),
      React.createElement(SecondFloor, null),
      React.createElement(ThirdFloor, null),
      React.createElement(RoofGarden, null),
      React.createElement(MainBalcony, null),
      React.createElement(LowerBalcony, null),
      React.createElement(BedroomBalcony, null),
      React.createElement(Frame, null)
    );
  });
};

module.exports = containerHouse;

},{"../canvas":2,"../element/camera":13,"../element/scene":23,"../jiggle":78,"../utilities/imageMap":108,"./containerHouse/balcony/bedroom":31,"./containerHouse/balcony/lower":32,"./containerHouse/balcony/main":33,"./containerHouse/floor/first":61,"./containerHouse/floor/second":62,"./containerHouse/floor/third":63,"./containerHouse/foundations":64,"./containerHouse/frame":66,"./containerHouse/roofGarden":68}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    BalconySection = require('../balcony/section'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var BedroomBalcony = function (_CanvasElement) {
  _inherits(BedroomBalcony, _CanvasElement);

  function BedroomBalcony() {
    _classCallCheck(this, BedroomBalcony);

    return _possibleConstructorReturn(this, (BedroomBalcony.__proto__ || Object.getPrototypeOf(BedroomBalcony)).apply(this, arguments));
  }

  _createClass(BedroomBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(BalconySection, { position: [0, 19, 0] }), React.createElement(BalconySection, { position: [4, 19, 0] }), React.createElement(Railing, { position: [0, 19, 0], length: 8 }), React.createElement(Railing, { position: [thickness, 19, 0], length: 16, rotations: [0, -90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BedroomBalcony, properties);
    }
  }]);

  return BedroomBalcony;
}(CanvasElement);

module.exports = BedroomBalcony;

},{"../../../element/canvas":19,"../balcony/railing":34,"../balcony/section":38}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var LowerBalcony = function (_CanvasElement) {
  _inherits(LowerBalcony, _CanvasElement);

  function LowerBalcony() {
    _classCallCheck(this, LowerBalcony);

    return _possibleConstructorReturn(this, (LowerBalcony.__proto__ || Object.getPrototypeOf(LowerBalcony)).apply(this, arguments));
  }

  _createClass(LowerBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(Railing, { position: [40, 9.5, 16], length: 8 }), React.createElement(Railing, { position: [40, 9.5, 32 - thickness], length: 8 }), React.createElement(Railing, { position: [48, 9.5, 16], rotations: [0, -90, 0], length: 16 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(LowerBalcony, properties);
    }
  }]);

  return LowerBalcony;
}(CanvasElement);

module.exports = LowerBalcony;

},{"../../../element/canvas":19,"../balcony/railing":34}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    BalconySection = require('../balcony/section'),
    Railing = require('../balcony/railing');

var thickness = Railing.thickness;

var MainBalcony = function (_CanvasElement) {
  _inherits(MainBalcony, _CanvasElement);

  function MainBalcony() {
    _classCallCheck(this, MainBalcony);

    return _possibleConstructorReturn(this, (MainBalcony.__proto__ || Object.getPrototypeOf(MainBalcony)).apply(this, arguments));
  }

  _createClass(MainBalcony, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(BalconySection, { position: [40, 19, 0] }), React.createElement(BalconySection, { position: [44, 19, 0] }), React.createElement(BalconySection, { position: [36, 19, 0] }), React.createElement(BalconySection, { position: [32, 19, 0] }), React.createElement(BalconySection, { position: [28, 19, 0] }), React.createElement(BalconySection, { position: [40, 19, 16] }), React.createElement(BalconySection, { position: [44, 19, 16] }), React.createElement(Railing, { position: [28, 19, 0], length: 20 }), React.createElement(Railing, { position: [20, 19, 32 - thickness], length: 28 }), React.createElement(Railing, { position: [48, 19, 0], rotations: [0, -90, 0], length: 32 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(MainBalcony, properties);
    }
  }]);

  return MainBalcony;
}(CanvasElement);

module.exports = MainBalcony;

},{"../../../element/canvas":19,"../balcony/railing":34,"../balcony/section":38}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights'),
    CanvasElement = require('../../../element/canvas');

var thickness = TopRail.thickness,
    overallHeight = 3;

var Railing = function (_CanvasElement) {
  _inherits(Railing, _CanvasElement);

  function Railing() {
    _classCallCheck(this, Railing);

    return _possibleConstructorReturn(this, (Railing.__proto__ || Object.getPrototypeOf(Railing)).apply(this, arguments));
  }

  _createClass(Railing, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length;


      return [React.createElement(TopRail, { overallHeight: overallHeight, length: length }), React.createElement(Uprights, { overallHeight: overallHeight, length: length, thickness: thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Railing, properties);
    }
  }]);

  return Railing;
}(CanvasElement);

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;

},{"../../../element/canvas":19,"./railing/topRail":35,"./railing/uprights":37}],35:[function(require,module,exports){
'use strict';

var ColouredCuboid = require('../../../common/coloured/cuboid');

var height = 0.1,
    thickness = 0.4,
    colour = [0.5, 0.5, 0.5, 1];

var TopRail = function TopRail(properties) {
  var length = properties.length,
      overallHeight = properties.overallHeight,
      width = length,
      depth = thickness,
      position = [0, overallHeight, 0];


  return React.createElement(ColouredCuboid, { colour: colour, width: width, height: height, depth: depth, position: position });
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;

},{"../../../common/coloured/cuboid":25}],36:[function(require,module,exports){
'use strict';

var ColouredCylinder = require('../../../common/coloured/cylinder');

var diameter = 0.125,
    radius = diameter / 2,
    colour = [0.5, 0.5, 0.5, 1];

var Upright = function Upright(properties) {
  var position = properties.position,
      overallHeight = properties.overallHeight,
      width = diameter,
      height = diameter,
      depth = overallHeight; ///

  return React.createElement(ColouredCylinder, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: [-90, 0, 0] });
};

Object.assign(Upright, {
  radius: radius
});

module.exports = Upright;

},{"../../../common/coloured/cylinder":26}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upright = require('./upright'),
    CanvasElement = require('../../../../element/canvas');

var radius = Upright.radius;

var Uprights = function (_CanvasElement) {
  _inherits(Uprights, _CanvasElement);

  function Uprights() {
    _classCallCheck(this, Uprights);

    return _possibleConstructorReturn(this, (Uprights.__proto__ || Object.getPrototypeOf(Uprights)).apply(this, arguments));
  }

  _createClass(Uprights, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallHeight = properties.overallHeight,
          length = properties.length,
          thickness = properties.thickness,
          step = 0.5,
          count = length / step,
          elements = [];


      for (var index = 1; index < count; index++) {
        var position = [step * index - radius, 0, thickness / 2 + radius];

        elements.push(React.createElement(Upright, { position: position, overallHeight: overallHeight }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Uprights, properties);
    }
  }]);

  return Uprights;
}(CanvasElement);

module.exports = Uprights;

},{"../../../../element/canvas":19,"./upright":36}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./section/edge'),
    OpenMesh = require('./section/openMesh'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short'),
    CanvasElement = require('../../../element/canvas');

var height = Edge.height,
    thickness = Edge.thickness,
    width = 4,
    depth = 16;

var BalconySection = function (_CanvasElement) {
  _inherits(BalconySection, _CanvasElement);

  function BalconySection() {
    _classCallCheck(this, BalconySection);

    return _possibleConstructorReturn(this, (BalconySection.__proto__ || Object.getPrototypeOf(BalconySection)).apply(this, arguments));
  }

  _createClass(BalconySection, [{
    key: 'childElements',
    value: function childElements(properties) {
      return [React.createElement(LongEdge, { position: [0, -height, 0], depth: depth }), React.createElement(LongEdge, { position: [width - thickness, -height, 0], depth: depth }), React.createElement(ShortEdge, { position: [0, -height, 0], width: width }), React.createElement(ShortEdge, { position: [0, -height, 16 - thickness], width: width }), React.createElement(OpenMesh, { position: [thickness, 0, thickness], overallWidth: width - 2 * thickness, overallDepth: depth - 2 * thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BalconySection, properties);
    }
  }]);

  return BalconySection;
}(CanvasElement);

module.exports = BalconySection;

},{"../../../element/canvas":19,"./section/edge":39,"./section/edge/long":40,"./section/edge/short":41,"./section/openMesh":42}],39:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../../common/textured/cuboid');

var height = 0.25,
    thickness = 0.1;

var Edge = function Edge(properties) {
  var position = properties.position,
      width = properties.width,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'rustySteel.jpg', position: position, width: width, depth: depth, height: height });
};

Object.assign(Edge, {
  height: height,
  thickness: thickness
});

module.exports = Edge;

},{"../../../common/textured/cuboid":29}],40:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var LongEdge = function LongEdge(properties) {
  var position = properties.position,
      depth = properties.depth,
      width = thickness; ///

  return React.createElement(Edge, { position: position, width: width, depth: depth });
};

module.exports = LongEdge;

},{"../edge":39}],41:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var ShortEdge = function ShortEdge(properties) {
  var position = properties.position,
      width = properties.width,
      depth = thickness; ///

  return React.createElement(Edge, { position: position, width: width, depth: depth });
};

module.exports = ShortEdge;

},{"../edge":39}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../../element/canvas'),
    ColouredCuboid = require('../../../common/coloured/cuboid'),
    ColouredCylinder = require('../../../common/coloured/cylinder');

var overallHeight = 0.25,
    overallThickness = 0.025,
    widthwiseCount = 10,
    depthwiseCount = 5,
    colour = [0.6, 0.6, 0.6, 10];

var OpenMesh = function (_CanvasElement) {
  _inherits(OpenMesh, _CanvasElement);

  function OpenMesh() {
    _classCallCheck(this, OpenMesh);

    return _possibleConstructorReturn(this, (OpenMesh.__proto__ || Object.getPrototypeOf(OpenMesh)).apply(this, arguments));
  }

  _createClass(OpenMesh, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallWidth = properties.overallWidth,
          overallDepth = properties.overallDepth,
          elements = [];


      for (var index = 1; index < widthwiseCount; index++) {
        var step = overallWidth / widthwiseCount,
            width = overallThickness,
            ///
        height = overallHeight,
            depth = overallDepth;

        elements.push(React.createElement(ColouredCuboid, { colour: colour, position: [step * index, -height, 0], width: width, height: height, depth: depth }));
      }

      for (var _index = 1; _index < depthwiseCount; _index++) {
        var _step = overallDepth / depthwiseCount,
            diameter = overallHeight / 2,
            ///
        _width = diameter,
            ///
        _height = diameter,
            ///
        _depth = overallWidth; ///

        elements.push(React.createElement(ColouredCylinder, { colour: colour, position: [0, -3 * diameter / 2, _step * _index], width: _width, height: _height, depth: _depth, rotations: [0, 90, 0] }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(OpenMesh, properties);
    }
  }]);

  return OpenMesh;
}(CanvasElement);

module.exports = OpenMesh;

},{"../../../../element/canvas":19,"../../../common/coloured/cuboid":25,"../../../common/coloured/cylinder":26}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    Roof = require('./container/roof'),
    BackPanel = require('./container/panel/back'),
    FrontPanel = require('./container/panel/front'),
    SidePanelA = require('./container/panel/sideA'),
    SidePanelB = require('./container/panel/sideB'),
    TopRails = require('./container/topRails'),
    BottomRails = require('./container/bottomRails'),
    CornerPosts = require('./container/cornerPosts'),
    CornerFittings = require('./container/cornerFittings');

var overallWidth = 8,
    overallHeight = 9.5;

var Container = function (_CanvasElement) {
  _inherits(Container, _CanvasElement);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length;


      return [React.createElement(Roof, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(FrontPanel, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(BackPanel, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(SidePanelA, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(SidePanelB, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(TopRails, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(BottomRails, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(CornerPosts, { length: length, overallWidth: overallWidth, overallHeight: overallHeight }), React.createElement(CornerFittings, { length: length, overallWidth: overallWidth, overallHeight: overallHeight })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Container, properties);
    }
  }]);

  return Container;
}(CanvasElement);

module.exports = Container;

},{"../../element/canvas":19,"./container/bottomRails":45,"./container/cornerFittings":47,"./container/cornerPosts":49,"./container/panel/back":52,"./container/panel/front":54,"./container/panel/sideA":55,"./container/panel/sideB":56,"./container/roof":57,"./container/topRails":59}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    thickness = 8 / 12,
    indent = 1 / 12;

var BottomRail = function (_CanvasElement) {
  _inherits(BottomRail, _CanvasElement);

  function BottomRail() {
    _classCallCheck(this, BottomRail);

    return _possibleConstructorReturn(this, (BottomRail.__proto__ || Object.getPrototypeOf(BottomRail)).apply(this, arguments));
  }

  _createClass(BottomRail, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          width = length,
          depth = thickness - 2 * indent,
          height = thickness,
          position = [0, 0, indent];


      return [React.createElement(ColouredCuboid, { width: width, height: height, depth: depth, position: position, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BottomRail, properties);
    }
  }]);

  return BottomRail;
}(CanvasElement);

Object.assign(BottomRail, {
  thickness: thickness
});

module.exports = BottomRail;

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomRail = require('./bottomRail'),
    CanvasElement = require('../../../element/canvas');

var thickness = BottomRail.thickness;

var BottomRails = function (_CanvasElement) {
  _inherits(BottomRails, _CanvasElement);

  function BottomRails() {
    _classCallCheck(this, BottomRails);

    return _possibleConstructorReturn(this, (BottomRails.__proto__ || Object.getPrototypeOf(BottomRails)).apply(this, arguments));
  }

  _createClass(BottomRails, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth;


      return [React.createElement(BottomRail, { position: [0, 0, 0], length: overallWidth }), React.createElement(BottomRail, { position: [0, 0, length - thickness], length: overallWidth }), React.createElement(BottomRail, { position: [0, 0, length], length: length, rotations: [0, 90, 0] }), React.createElement(BottomRail, { position: [overallWidth - thickness, 0, length], length: length, rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BottomRails, properties);
    }
  }]);

  return BottomRails;
}(CanvasElement);

module.exports = BottomRails;

},{"../../../element/canvas":19,"./bottomRail":44}],46:[function(require,module,exports){
'use strict';

var ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    width = 9 / 12,
    height = 9 / 12,
    depth = 9 / 12;

var CornerFitting = function CornerFitting(properties) {
  var position = properties.position;


  return React.createElement(ColouredCuboid, { width: width, height: height, depth: depth, position: position, colour: colour });
};

Object.assign(CornerFitting, {
  width: width,
  height: height,
  depth: depth
});

module.exports = CornerFitting;

},{"../../common/coloured/cuboid":25}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CornerFitting = require('./cornerFitting'),
    CanvasElement = require('../../../element/canvas');

var width = CornerFitting.width,
    depth = CornerFitting.depth,
    height = CornerFitting.height;

var CornerFittings = function (_CanvasElement) {
  _inherits(CornerFittings, _CanvasElement);

  function CornerFittings() {
    _classCallCheck(this, CornerFittings);

    return _possibleConstructorReturn(this, (CornerFittings.__proto__ || Object.getPrototypeOf(CornerFittings)).apply(this, arguments));
  }

  _createClass(CornerFittings, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight;


      return [React.createElement(CornerFitting, { position: [0, 0, 0] }), React.createElement(CornerFitting, { position: [0, overallHeight - height, 0] }), React.createElement(CornerFitting, { position: [overallWidth - width, 0, 0] }), React.createElement(CornerFitting, { position: [overallWidth - width, overallHeight - height, 0] }), React.createElement(CornerFitting, { position: [0, 0, length - depth] }), React.createElement(CornerFitting, { position: [0, overallHeight - height, length - depth] }), React.createElement(CornerFitting, { position: [overallWidth - width, 0, length - depth] }), React.createElement(CornerFitting, { position: [overallWidth - width, overallHeight - height, length - depth] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CornerFittings, properties);
    }
  }]);

  return CornerFittings;
}(CanvasElement);

module.exports = CornerFittings;

},{"../../../element/canvas":19,"./cornerFitting":46}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    width = 8 / 12,
    depth = 8 / 12,
    indent = 1 / 12;

var CornerPost = function (_CanvasElement) {
  _inherits(CornerPost, _CanvasElement);

  function CornerPost() {
    _classCallCheck(this, CornerPost);

    return _possibleConstructorReturn(this, (CornerPost.__proto__ || Object.getPrototypeOf(CornerPost)).apply(this, arguments));
  }

  _createClass(CornerPost, [{
    key: 'childElements',
    value: function childElements(properties) {
      var overallHeight = properties.overallHeight,
          position = [indent, 0, indent],
          height = overallHeight; ///

      return [React.createElement(ColouredCuboid, { width: width - 2 * indent, height: height, depth: depth - 2 * indent, position: position, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CornerPost, properties);
    }
  }]);

  return CornerPost;
}(CanvasElement);

Object.assign(CornerPost, {
  width: width,
  depth: depth
});

module.exports = CornerPost;

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CornerPost = require('./cornerPost'),
    CanvasElement = require('../../../element/canvas');

var width = CornerPost.width,
    depth = CornerPost.depth;

var CornerPosts = function (_CanvasElement) {
  _inherits(CornerPosts, _CanvasElement);

  function CornerPosts() {
    _classCallCheck(this, CornerPosts);

    return _possibleConstructorReturn(this, (CornerPosts.__proto__ || Object.getPrototypeOf(CornerPosts)).apply(this, arguments));
  }

  _createClass(CornerPosts, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight;


      return [React.createElement(CornerPost, { position: [0, 0, 0], overallHeight: overallHeight }), React.createElement(CornerPost, { position: [overallWidth - width, 0, 0], overallHeight: overallHeight }), React.createElement(CornerPost, { position: [0, 0, length - depth], overallHeight: overallHeight }), React.createElement(CornerPost, { position: [overallWidth - width, 0, length - depth], overallHeight: overallHeight })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(CornerPosts, properties);
    }
  }]);

  return CornerPosts;
}(CanvasElement);

module.exports = CornerPosts;

},{"../../../element/canvas":19,"./cornerPost":48}],50:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 40 });
};

module.exports = FortyFootContainer;

},{"../container":43}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredRidge = require('./panel/colouredRidge');

var Panel = function (_CanvasElement) {
  _inherits(Panel, _CanvasElement);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallHeight = properties.overallHeight,
          width = 0.25,
          height = overallHeight,
          depth = 0.125,
          rotations = [0, -90, 0],
          step = 1,
          indent = 0.25,
          count = length / step,
          colour = [1, 1, 1, 1],
          elements = [];


      for (var index = 0; index < count - 1; index++) {
        var position = [depth + indent, 0, step * index + step / 2, 0];

        elements.push(React.createElement(ColouredRidge, { colour: colour, width: width, height: height, depth: depth, position: position, rotations: rotations }));
      }

      return elements;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Panel, properties);
    }
  }]);

  return Panel;
}(CanvasElement);

module.exports = Panel;

},{"../../../element/canvas":19,"./panel/colouredRidge":53}],52:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var BackPanel = function BackPanel(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      position = [overallWidth, 0, 0],
      rotations = [0, -90, 0];


  return React.createElement(Panel, { length: overallWidth, overallHeight: overallHeight, position: position, rotations: rotations }) ///

  ;
};

module.exports = BackPanel;

},{"../panel":51}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredCanvasElement = require('../../../../element/canvas/coloured');

var initialVertexPositions = [[0.0, 0.0, 0.0], [0.5, 0.0, 0.0], [0.5, 1.0, 0.0], [0.0, 1.0, 0.0], [0.5, 0.0, 0.0], [1.5, 0.0, 1.0], [1.5, 1.0, 1.0], [0.5, 1.0, 0.0], [1.5, 0.0, 1.0], [2.5, 0.0, 1.0], [2.5, 1.0, 1.0], [1.5, 1.0, 1.0], [2.5, 0.0, 1.0], [3.5, 0.0, 0.0], [3.5, 1.0, 0.0], [2.5, 1.0, 1.0], [3.5, 0.0, 0.0], [4.0, 0.0, 0.0], [4.0, 1.0, 0.0], [3.5, 1.0, 0.0]];

var ColouredRidge = function (_ColouredCanvasElemen) {
  _inherits(ColouredRidge, _ColouredCanvasElemen);

  function ColouredRidge() {
    _classCallCheck(this, ColouredRidge);

    return _possibleConstructorReturn(this, (ColouredRidge.__proto__ || Object.getPrototypeOf(ColouredRidge)).apply(this, arguments));
  }

  _createClass(ColouredRidge, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredRidge, properties);
    }
  }]);

  return ColouredRidge;
}(ColouredCanvasElement);

module.exports = ColouredRidge;

},{"../../../../element/canvas/coloured":20}],54:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var FrontPanel = function FrontPanel(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight,
          position = [0, 0, length],
          rotations = [0, 90, 0];


      return React.createElement(Panel, { length: overallWidth, overallHeight: overallHeight, position: position, rotations: rotations }) ///

      ;
};

module.exports = FrontPanel;

},{"../panel":51}],55:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var SidePanelA = function SidePanelA(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight;


  return React.createElement(Panel, { length: length, overallHeight: overallHeight });
};

module.exports = SidePanelA;

},{"../panel":51}],56:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var SidePanelB = function SidePanelB(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight,
      position = [overallWidth, 0, length],
      rotations = [0, 180, 0];


  return React.createElement(Panel, { length: length, overallHeight: overallHeight, position: position, rotations: rotations });
};

module.exports = SidePanelB;

},{"../panel":51}],57:[function(require,module,exports){
'use strict';

// const ColouredPlane = require('../../common/coloured/plane');

var indent = 1 / 12;

var Roof = function Roof(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight,
          width = overallWidth - 2 * indent,
          height = length - 2 * indent,
          position = [indent, overallHeight - indent, length - indent],
          rotations = [-90, 0, 0],
          colour = [1, 1, 1, 1];

      // return (
      //
      //   <ColouredPlane colour={colour} width={width} height={height} position={position} rotations={rotations} />
      //
      // );
};

module.exports = Roof;

},{}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    thickness = 8 / 12,
    indent = 1 / 12;

var TopRail = function (_CanvasElement) {
  _inherits(TopRail, _CanvasElement);

  function TopRail() {
    _classCallCheck(this, TopRail);

    return _possibleConstructorReturn(this, (TopRail.__proto__ || Object.getPrototypeOf(TopRail)).apply(this, arguments));
  }

  _createClass(TopRail, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          width = length,
          depth = thickness - 2 * indent,
          height = thickness,
          position = [0, -height, indent];


      return [React.createElement(ColouredCuboid, { width: width, height: height, depth: depth, position: position, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(TopRail, properties);
    }
  }]);

  return TopRail;
}(CanvasElement);

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopRail = require('./topRail'),
    CanvasElement = require('../../../element/canvas');

var thickness = TopRail.thickness;

var TopRails = function (_CanvasElement) {
  _inherits(TopRails, _CanvasElement);

  function TopRails() {
    _classCallCheck(this, TopRails);

    return _possibleConstructorReturn(this, (TopRails.__proto__ || Object.getPrototypeOf(TopRails)).apply(this, arguments));
  }

  _createClass(TopRails, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight;


      return [React.createElement(TopRail, { position: [0, overallHeight, 0], length: overallWidth }), React.createElement(TopRail, { position: [0, overallHeight, length - thickness], length: overallWidth }), React.createElement(TopRail, { position: [0, overallHeight, length], length: length, rotations: [0, 90, 0] }), React.createElement(TopRail, { position: [overallWidth - thickness, overallHeight, length], length: length, rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(TopRails, properties);
    }
  }]);

  return TopRails;
}(CanvasElement);

module.exports = TopRails;

},{"../../../element/canvas":19,"./topRail":58}],60:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":43}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function (_CanvasElement) {
  _inherits(FirstFloor, _CanvasElement);

  function FirstFloor() {
    _classCallCheck(this, FirstFloor);

    return _possibleConstructorReturn(this, (FirstFloor.__proto__ || Object.getPrototypeOf(FirstFloor)).apply(this, arguments));
  }

  _createClass(FirstFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(FortyFootContainer, { position: [8, 0, 32], rotations: [0, 90, 0] }), React.createElement(FortyFootContainer, { position: [8, 0, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 0, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(FirstFloor, properties);
    }
  }]);

  return FirstFloor;
}(CanvasElement);

module.exports = FirstFloor;

},{"../../../element/canvas":19,"../container/fortyFoot":50,"../container/twentyFoot":60}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var SecondFloor = function (_CanvasElement) {
  _inherits(SecondFloor, _CanvasElement);

  function SecondFloor() {
    _classCallCheck(this, SecondFloor);

    return _possibleConstructorReturn(this, (SecondFloor.__proto__ || Object.getPrototypeOf(SecondFloor)).apply(this, arguments));
  }

  _createClass(SecondFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(FortyFootContainer, { position: [0, 9.5, 32], rotations: [0, 90, 0] }), React.createElement(FortyFootContainer, { position: [0, 9.5, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 9.5, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 9.5, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(SecondFloor, properties);
    }
  }]);

  return SecondFloor;
}(CanvasElement);

module.exports = SecondFloor;

},{"../../../element/canvas":19,"../container/fortyFoot":50,"../container/twentyFoot":60}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    TwentyFootContainer = require('../container/twentyFoot');

var ThirdFloor = function (_CanvasElement) {
  _inherits(ThirdFloor, _CanvasElement);

  function ThirdFloor() {
    _classCallCheck(this, ThirdFloor);

    return _possibleConstructorReturn(this, (ThirdFloor.__proto__ || Object.getPrototypeOf(ThirdFloor)).apply(this, arguments));
  }

  _createClass(ThirdFloor, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(TwentyFootContainer, { position: [0, 19, 32], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [0, 19, 24], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 19, 16], rotations: [0, 90, 0] }), React.createElement(TwentyFootContainer, { position: [8, 19, 8], rotations: [0, 90, 0] })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(ThirdFloor, properties);
    }
  }]);

  return ThirdFloor;
}(CanvasElement);

module.exports = ThirdFloor;

},{"../../../element/canvas":19,"../container/twentyFoot":60}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas'),
    ConcreteSlab = require('./foundations/concreteSlab');

var Foundations = function (_CanvasElement) {
  _inherits(Foundations, _CanvasElement);

  function Foundations() {
    _classCallCheck(this, Foundations);

    return _possibleConstructorReturn(this, (Foundations.__proto__ || Object.getPrototypeOf(Foundations)).apply(this, arguments));
  }

  _createClass(Foundations, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return [React.createElement(ConcreteSlab, { position: [-0.5, -1, -0.5], width: 12.5, height: 1, depth: 33 }), React.createElement(ConcreteSlab, { position: [24, -1, -0.5], width: 24.4, height: 1, depth: 33 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Foundations, properties);
    }
  }]);

  return Foundations;
}(CanvasElement);

module.exports = Foundations;

},{"../../element/canvas":19,"./foundations/concreteSlab":65}],65:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../common/textured/cuboid');

var ConcreteSlab = function ConcreteSlab(properties) {
  var position = properties.position,
      width = properties.width,
      height = properties.height,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'concrete.jpg', position: position, width: width, height: height, depth: depth });
};

module.exports = ConcreteSlab;

},{"../../common/textured/cuboid":29}],66:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SteelSection = require('./frame/steelSection'),
    CanvasElement = require('../../element/canvas');

var Frame = function (_CanvasElement) {
  _inherits(Frame, _CanvasElement);

  function Frame() {
    _classCallCheck(this, Frame);

    return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).apply(this, arguments));
  }

  _createClass(Frame, [{
    key: 'childElements',
    value: function childElements() {
      var width = 48,
          height = 29,
          depth = 32;

      return [React.createElement(SteelSection, { position: [-0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [width - 0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: width, height: 1, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, depth - 0.5], width: width, height: 1, depth: 1 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Frame, properties);
    }
  }]);

  return Frame;
}(CanvasElement);

module.exports = Frame;

},{"../../element/canvas":19,"./frame/steelSection":67}],67:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../common/textured/cuboid');

var SteelSection = function SteelSection(properties) {
  var position = properties.position,
      width = properties.width,
      height = properties.height,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'rustySteel.jpg', position: position, width: width, height: height, depth: depth });
};

module.exports = SteelSection;

},{"../../common/textured/cuboid":29}],68:[function(require,module,exports){
'use strict';

// const TexturedPlane = require('../common/textured/plane');

var RoofGarden = function RoofGarden(properties) {
  // return (
  //
  //   <TexturedPlane width={20} height={16} depth={0} position={[ 20, 19.01, 32 ]} rotations={[ -90, 0, 0 ]} imageName="gravel.jpg" />
  //
  // );
};

module.exports = RoofGarden;

},{}],69:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('../examples/common/coloured/cuboid');

var masking = function masking() {
  var canvas = new Canvas();

  (function () {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(Camera, { initialDistance: 5, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        ColouredCuboid,
        { colour: [1, 1, 0, 1], position: [-0.5, -0.5, -0.5] },
        React.createElement(
          Mask,
          null,
          React.createElement(
            ColouredCuboid,
            { colour: [1, 1, 0, 1], width: 0.5, height: 0.5, depth: 0.5, position: [0.25, 0.25, 0.25] },
            React.createElement(
              Mask,
              null,
              React.createElement(ColouredCuboid, { colour: [1, 0, 1, 1], width: 0.5, height: 0.5, depth: 0.5, position: [0.25, 0.25, 0.25] })
            )
          )
        )
      )
    );
  })();
};

module.exports = masking;

},{"../canvas":2,"../element/camera":13,"../element/mask":22,"../element/scene":23,"../examples/common/coloured/cuboid":25,"../jiggle":78}],70:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredCylinder = require('./common/coloured/cylinder'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 10, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(ColouredCylinder, { colour: [1, 0, 0, 1] })
    );
  });
};

module.exports = shapes;

/*
 <TexturedCuboid colour={[ 0, 1, 1, 1 ]} position={[ 0, 0, -1 ]} imageName="bricks.jpg" />
 */

},{"../canvas":2,"../element/camera":13,"../element/scene":23,"../jiggle":78,"../utilities/imageMap":108,"./common/coloured/cylinder":26,"./common/textured/cuboid":29}],71:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./timberFramedHouse/frame'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var timberFramedHouse = function timberFramedHouse() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 100, initialOffset: [-18, 0, -16], canvas: canvas }),
      React.createElement(Frame, null)
    );
  });
};

module.exports = timberFramedHouse;

},{"../canvas":2,"../element/camera":13,"../element/scene":23,"../jiggle":78,"../utilities/imageMap":108,"./timberFramedHouse/frame":72}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SteelSection = require('./frame/steelSection'),
    CanvasElement = require('../../element/canvas');

var Frame = function (_CanvasElement) {
  _inherits(Frame, _CanvasElement);

  function Frame() {
    _classCallCheck(this, Frame);

    return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).apply(this, arguments));
  }

  _createClass(Frame, [{
    key: 'childElements',
    value: function childElements() {
      var width = 48,
          height = 29,
          depth = 32;

      return [React.createElement(SteelSection, { position: [-0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, depth - 0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [width - 0.5, 0, -0.5], width: 1, height: height, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [width - 0.5, height - 1, -0.5], width: 1, height: 1, depth: depth }), React.createElement(SteelSection, { position: [-0.5, height - 1, -0.5], width: width, height: 1, depth: 1 }), React.createElement(SteelSection, { position: [-0.5, height - 1, depth - 0.5], width: width, height: 1, depth: 1 })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Frame, properties);
    }
  }]);

  return Frame;
}(CanvasElement);

module.exports = Frame;

},{"../../element/canvas":19,"./frame/steelSection":73}],73:[function(require,module,exports){
'use strict';

var TexturedCuboid = require('../../common/textured/cuboid');

var SteelSection = function SteelSection(properties) {
  var position = properties.position,
      width = properties.width,
      height = properties.height,
      depth = properties.depth;


  return React.createElement(TexturedCuboid, { imageName: 'rustySteel.jpg', position: position, width: width, height: height, depth: depth });
};

module.exports = SteelSection;

},{"../../common/textured/cuboid":29}],74:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = require('./facet/edge'),
    constants = require('./constants'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    verticesUtilities = require('./utilities/vertices'),
    approximateUtilities = require('./utilities/approximate');

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    _rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    scale3 = vectorUtilities.scale3,
    length3 = vectorUtilities.length3;

var Facet = function () {
  function Facet(vertices, normal) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
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
      var edges = this.vertices.map(function (vertex, index) {
        var startIndex = index,
            endIndex = (startIndex + 1) % VERTICES_LENGTH,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edge = Edge.fromVertices(startVertex, endVertex);

        return edge;
      }.bind(this));

      return edges;
    }
  }, {
    key: 'getMidPoint',
    value: function getMidPoint() {
      var midPoint = this.vertices.reduce(function (midPoint, vertex) {
        var scaledVertex = scale3(vertex, 1 / 3);

        midPoint = add3(midPoint, scaledVertex);

        return midPoint;
      }, [0, 0, 0]);

      return midPoint;
    }
  }, {
    key: 'isTooSmall',
    value: function isTooSmall() {
      var normalLength = length3(this.normal),
          normalLengthApproximatelyEqualToZero = isApproximatelyEqualToZero(normalLength),
          tooSmall = normalLengthApproximatelyEqualToZero; ///

      return tooSmall;
    }
  }, {
    key: 'isMasked',
    value: function isMasked(maskingFacet) {
      var edgesInXYPlane = maskingFacet.getEdgesInXYPlane(),
          midPoint = this.getMidPoint(),
          midPointToOneSideOfEdgesInXYPlane = isMidPointToOneSideOfEdgesInXYPlane(midPoint, edgesInXYPlane),
          masked = midPointToOneSideOfEdgesInXYPlane; ///

      return masked;
    }
  }, {
    key: 'applyTransforms',
    value: function applyTransforms(transforms) {
      this.vertices = this.vertices.map(function (vertex) {
        transforms.forEach(function (transform) {
          vertex = transform(vertex);
        });

        return vertex;
      });

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.vertices = rotateVertices(this.vertices, rotationQuaternion);

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'rotateAboutZAxis',
    value: function rotateAboutZAxis(rotationAboutZAxisMatrix) {
      this.vertices = this.vertices.map(function (vertex) {
        vertex = _rotateAboutZAxis(vertex, rotationAboutZAxisMatrix);

        return vertex;
      });

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'split',
    value: function split(intersections, smallerFacets) {
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
          this.splitWithZeroNonNullIntersections(intersections, smallerFacets);
          break;
      }
    }
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets) {
      var nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nullIntersectionIndex) % VERTICES_LENGTH;

      intersections = permute(intersections, places);

      intersections = intersections.slice(1); ///

      this.vertices = permute(this.vertices, places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          secondIntersection = second(intersections),
          firstIntermediateVertex = calculateIntermediateVertex(secondVertex, thirdVertex, firstIntersection),
          secondIntermediateVertex = calculateIntermediateVertex(thirdVertex, firstVertex, secondIntersection),
          firstVertices = [firstVertex, secondVertex, firstIntermediateVertex],
          secondVertices = [firstIntermediateVertex, secondIntermediateVertex, firstVertex],
          thirdVertices = [firstIntermediateVertex, thirdVertex, secondIntermediateVertex],
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          thirdFacet = Facet.fromVertices(thirdVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall(),
          thirdFacetTooSmall = thirdFacet.isTooSmall();

      if (!firstFacetTooSmall) {
        smallerFacets.push(firstFacet);
      }

      if (!secondFacetTooSmall) {
        smallerFacets.push(secondFacet);
      }

      if (!thirdFacetTooSmall) {
        smallerFacets.push(thirdFacet);
      }
    }
  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets) {
      var nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;

      intersections = permute(intersections, places);

      this.vertices = permute(this.vertices, places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, firstIntersection),
          firstVertices = [firstVertex, intermediateVertex, thirdVertex],
          secondVertices = [intermediateVertex, secondVertex, thirdVertex],
          firstFacet = Facet.fromVertices(firstVertices),
          secondFacet = Facet.fromVertices(secondVertices),
          firstFacetTooSmall = firstFacet.isTooSmall(),
          secondFacetTooSmall = secondFacet.isTooSmall();

      if (!firstFacetTooSmall) {
        smallerFacets.push(firstFacet);
      }

      if (!secondFacetTooSmall) {
        smallerFacets.push(secondFacet);
      }
    }
  }, {
    key: 'splitWithZeroNonNullIntersections',
    value: function splitWithZeroNonNullIntersections(intersections, smallerFacets) {
      var smallerFacet = this; ///

      smallerFacets.push(smallerFacet);
    }
  }, {
    key: 'calculateIntersectionsWithVerticalLineInXYPlane',
    value: function calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var edges = this.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = edge.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

        return intersection;
      });

      return intersections;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var vertices = this.vertices.map(function (vertex) {
        return vertex.slice();
      }),
          normal = this.normal.slice(),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }, {
    key: 'fromVerticesAndIndexes',
    value: function fromVerticesAndIndexes(vertices, indexes) {
      vertices = indexes.map(function (index) {
        var vertex = vertices[index];

        return vertex;
      });

      var facet = Facet.fromVertices(vertices);

      return facet;
    }
  }]);

  return Facet;
}();

module.exports = Facet;

function calculateIntermediateVertex(startVertex, endVertex, intersection) {
  var direction = subtract3(endVertex, startVertex),
      offset = scale3(direction, intersection),
      intermediateVertex = add3(startVertex, offset);

  return intermediateVertex;
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

function isMidPointToOneSideOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  var midPointToTheLeftOfEdgesInXYPlane = isMidPointToTheLeftOfEdgesInXYPlane(midPoint, edgesInXYPlane),
      midPointToTheRightOfEdgesInXYPlane = isMidPointToTheRightOfEdgesInXYPlane(midPoint, edgesInXYPlane),
      midPointToOneSideOfEdgesInXYPlane = midPointToTheLeftOfEdgesInXYPlane || midPointToTheRightOfEdgesInXYPlane; ///

  return midPointToOneSideOfEdgesInXYPlane;
}

function isMidPointToTheLeftOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  var midPointToTheLeftOfEdgesInXYPlane = edgesInXYPlane.reduce(function (midPointToTheLeftOfEdgesInXYPlane, edgeInXYPlane) {
    if (midPointToTheLeftOfEdgesInXYPlane) {
      var midPointToTheLeftOfEdgeInXYPlane = edgeInXYPlane.isMidPointToTheLeft(midPoint);

      midPointToTheLeftOfEdgesInXYPlane = midPointToTheLeftOfEdgeInXYPlane;
    }

    return midPointToTheLeftOfEdgesInXYPlane;
  }, true);

  return midPointToTheLeftOfEdgesInXYPlane;
}

function isMidPointToTheRightOfEdgesInXYPlane(midPoint, edgesInXYPlane) {
  var midPointToTheRightOfEdgesInXYPlane = edgesInXYPlane.reduce(function (midPointToTheRightOfEdgesInXYPlane, edgeInXYPlane) {
    if (midPointToTheRightOfEdgesInXYPlane) {
      var midPointToTheRightOfEdgeInXYPlane = edgeInXYPlane.isMidPointToTheRight(midPoint);

      midPointToTheRightOfEdgesInXYPlane = midPointToTheRightOfEdgeInXYPlane;
    }

    return midPointToTheRightOfEdgesInXYPlane;
  }, true);

  return midPointToTheRightOfEdgesInXYPlane;
}

},{"./constants":11,"./facet/edge":75,"./utilities/approximate":103,"./utilities/array":104,"./utilities/vector":112,"./utilities/vertex":113,"./utilities/vertices":114}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorUtilities = require('../utilities/vector');

var subtract3 = vectorUtilities.subtract3;

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
  }], [{
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          ///
      extent = subtract3(endVertex, startVertex),
          edge = new Edge(position, extent);

      return edge;
    }
  }]);

  return Edge;
}();

module.exports = Edge;

},{"../utilities/vector":112}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./edge'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    vertexUtilities = require('../utilities/vertex');

var third = arrayUtilities.third,
    subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
    projectOntoXYPlane = vertexUtilities.projectOntoXYPlane;

var EdgeInXYPlane = function (_Edge) {
      _inherits(EdgeInXYPlane, _Edge);

      function EdgeInXYPlane() {
            _classCallCheck(this, EdgeInXYPlane);

            return _possibleConstructorReturn(this, (EdgeInXYPlane.__proto__ || Object.getPrototypeOf(EdgeInXYPlane)).apply(this, arguments));
      }

      _createClass(EdgeInXYPlane, [{
            key: 'isMidPointToTheLeft',
            value: function isMidPointToTheLeft(midPoint) {
                  midPoint = projectOntoXYPlane(midPoint);

                  var position = this.getPosition(),
                      extent = this.getExtent(),
                      midPointDirection = subtract3(midPoint, position),
                      crossProduct = cross3(extent, midPointDirection),
                      ///
                  crossProductComponents = crossProduct,
                      ///
                  thirdCrossProductComponent = third(crossProductComponents),
                      midPointToTheLeft = thirdCrossProductComponent > 0;

                  return midPointToTheLeft;
            }
      }, {
            key: 'isMidPointToTheRight',
            value: function isMidPointToTheRight(midPoint) {
                  var midPointToTheLeft = this.isMidPointToTheLeft(midPoint),
                      midPointToTheRight = !midPointToTheLeft; ///

                  return midPointToTheRight;
            }
      }], [{
            key: 'fromStartVertexInXYPlaneAndEndVertexInXYPlane',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      ///
                  extent = subtract3(endVertex, startVertex),
                      edgeInXYPlane = new EdgeInXYPlane(position, extent);

                  return edgeInXYPlane;
            }
      }]);

      return EdgeInXYPlane;
}(Edge);

module.exports = EdgeInXYPlane;

},{"../utilities/array":104,"../utilities/vector":112,"../utilities/vertex":113,"./edge":75}],77:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    vertexUtilities = require('../utilities/vertex'),
    rotationUtilities = require('../utilities/rotation'),
    approximateUtilities = require('../utilities/approximate');

var normalise3 = vectorUtilities.normalise3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    rotateAboutZAxis = vertexUtilities.rotateAboutZAxis,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    calculateForwardsRotationAboutZAxisMatrix = rotationUtilities.calculateForwardsRotationAboutZAxisMatrix,
    calculateBackwardsRotationAboutZAxisMatrix = rotationUtilities.calculateBackwardsRotationAboutZAxisMatrix;

var VerticalLineInXYPlane = function () {
  function VerticalLineInXYPlane(firstPositionComponent, rotationAboutZAxisMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    this.firstPositionComponent = firstPositionComponent;
    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: 'getRotationAboutZAxisMatrix',
    value: function getRotationAboutZAxisMatrix() {
      return this.rotationAboutZAxisMatrix;
    }
  }, {
    key: 'splitFacets',
    value: function splitFacets(facets) {
      var smallerFacets = [],
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix);

      facets.forEach(function (facet) {
        facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

        this.splitFacet(facet, smallerFacets);
      }.bind(this));

      smallerFacets.forEach(function (smallerFacet) {
        smallerFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      return smallerFacets;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet, smallerFacets) {
      var intersections = this.calculateIntersectionsWithFacet(facet);

      facet.split(intersections, smallerFacets);
    }
  }, {
    key: 'calculateIntersectionsWithFacet',
    value: function calculateIntersectionsWithFacet(facet) {
      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = this.calculateIntersection(edge);

        return intersection;
      }.bind(this));

      return intersections;
    }
  }, {
    key: 'calculateIntersection',
    value: function calculateIntersection(edge) {
      var intersection = null;

      var edgeNonParallel = isEdgeNonParallel(edge);

      if (edgeNonParallel) {
        var edgeIntersection = this.calculateEdgeIntersection(edge),
            edgeIntersectionNonTrivial = isIntersectionNonTrivial(edgeIntersection);

        if (edgeIntersectionNonTrivial) {
          intersection = edgeIntersection; ///
        }
      }

      return intersection;
    }
  }, {
    key: 'calculateEdgeIntersection',
    value: function calculateEdgeIntersection(edge) {
      var edgePosition = edge.getPosition(),
          edgeExtent = edge.getExtent(),
          edgePositionComponents = edgePosition,
          ///
      edgeExtentComponents = edgeExtent,
          ///
      firstEdgePositionComponent = first(edgePositionComponents),
          firstEdgeExtentComponent = first(edgeExtentComponents),
          edgeIntersection = (this.firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;

      return edgeIntersection;
    }
  }], [{
    key: 'fromEdgeInXYPlane',
    value: function fromEdgeInXYPlane(edgeInXYPlane) {
      var edgeInXYPlanePosition = edgeInXYPlane.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(edgeInXYPlane),
          position = rotateAboutZAxis(edgeInXYPlanePosition, rotationAboutZAxisMatrix),
          positionComponents = position,
          ///
      firstPositionComponent = first(positionComponents),
          verticalLineInXYPlane = new VerticalLineInXYPlane(firstPositionComponent, rotationAboutZAxisMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}();

module.exports = VerticalLineInXYPlane;

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

function isIntersectionNonTrivial(intersection) {
  var intersectionNonTrivial = intersection > 0 && intersection < 1;

  return intersectionNonTrivial;
}

function calculateRotationAboutZAxisMatrix(edgeInXYPlane) {
  var edgeInXYPlaneExtent = edgeInXYPlane.getExtent(),
      unitEdgeInXYPlaneExtent = normalise3(edgeInXYPlaneExtent),
      unitEdgeInXYPlaneExtentComponents = unitEdgeInXYPlaneExtent,
      ///
  firstUnitEdgeInXYPlaneExtentComponent = first(unitEdgeInXYPlaneExtentComponents),
      secondUnitEdgeInXYPlaneExtentComponent = second(unitEdgeInXYPlaneExtentComponents),
      angleOfRotationCosine = +secondUnitEdgeInXYPlaneExtentComponent,
      ///
  angleOfRotationSine = -firstUnitEdgeInXYPlaneExtentComponent,
      ///
  c = angleOfRotationCosine,
      s = angleOfRotationSine,
      rotationAboutZAxisMatrix = [c, -s, 0, +s, c, 0, 0, 0, 1]; ///

  return rotationAboutZAxisMatrix;
}

},{"../utilities/approximate":103,"../utilities/array":104,"../utilities/rotation":110,"../utilities/vector":112,"../utilities/vertex":113}],78:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":80}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('./constants'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    rotationUtilities = require('./utilities/rotation'),
    EdgeInXYPlane = require('./facet/edgeInXYPlane'),
    VerticalLineInXYPlane = require('./facet/verticalLineInXYPlane');

var VERTICES_LENGTH = constants.VERTICES_LENGTH,
    push = arrayUtilities.push,
    separate = arrayUtilities.separate,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateRotationQuaternion = rotationUtilities.calculateRotationQuaternion,
    calculateForwardsRotationQuaternion = rotationUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = rotationUtilities.calculateBackwardsRotationQuaternion;

var MaskingFacet = function () {
  function MaskingFacet(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    this.edgesInXYPlane = edgesInXYPlane;
    this.verticalLinesInXYPlane = verticalLinesInXYPlane;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(MaskingFacet, [{
    key: 'getEdgesInXYPlane',
    value: function getEdgesInXYPlane() {
      return this.edgesInXYPlane;
    }
  }, {
    key: 'getVerticalLinesInXYPlane',
    value: function getVerticalLinesInXYPlane() {
      return this.verticalLinesInXYPlane;
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
      var unmaskedFacet = facet.clone();

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
          unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
        }.bind(this));

        push(unmaskedFacets, unmaskedSmallerFacets);
      }
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var facets = [facet],
          smallerFacets = facets; ///

      this.verticalLinesInXYPlane.forEach(function (verticalLineInXYPlane) {
        smallerFacets = verticalLineInXYPlane.splitFacets(facets);

        facets = smallerFacets; ///
      });

      return smallerFacets;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          rotationQuaternion = calculateRotationQuaternion(facetNormal),
          verticesInXYPlane = rotateVertices(facetVertices, rotationQuaternion),
          edgesInXYPlane = calculateEdgesInXYPlane(verticesInXYPlane),
          verticalLinesInXYPlane = edgesInXYPlane.map(function (edgeInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromEdgeInXYPlane(edgeInXYPlane);

        return verticalLineInXYPlane;
      }),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          maskingFacet = new MaskingFacet(edgesInXYPlane, verticalLinesInXYPlane, forwardsRotationQuaternion, backwardsRotationQuaternion);

      return maskingFacet;
    }
  }]);

  return MaskingFacet;
}();

module.exports = MaskingFacet;

function calculateEdgesInXYPlane(verticesInXYPlane) {
  var edgesInXYPlane = verticesInXYPlane.map(function (vertex, index) {
    var startIndex = index,
        endIndex = (startIndex + 1) % VERTICES_LENGTH,
        startVertexInXYPlane = verticesInXYPlane[startIndex],
        endVertexInXYPlane = verticesInXYPlane[endIndex],
        edgeInXYPlane = EdgeInXYPlane.fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertexInXYPlane, endVertexInXYPlane);

    return edgeInXYPlane;
  }.bind(this));

  return edgesInXYPlane;
}

},{"./constants":11,"./facet/edgeInXYPlane":76,"./facet/verticalLineInXYPlane":77,"./utilities/array":104,"./utilities/rotation":110,"./utilities/vertices":114}],80:[function(require,module,exports){
'use strict';

var Element = require('./element');

function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  var element = void 0;

  properties = Object.assign({
    childElements: childElements
  }, properties);

  if (false) {} else if (isSubclassOf(firstArgument, Element)) {
    var Class = firstArgument; ///

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === 'function') {
    var func = firstArgument; ///

    element = func(properties);
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

},{"./element":12}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.program = program;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
  }

  _createClass(Renderer, [{
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
    key: 'getOffsetMatrixUniformLocation',
    value: function getOffsetMatrixUniformLocation() {
      return this.uniformLocations.getOffsetMatrixUniformLocation();
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.uniformLocations.getRotationMatrixUniformLocation();
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.uniformLocations.getNormalMatrixUniformLocation();
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
    key: 'addVertexPositions',
    value: function addVertexPositions(vertexPositions) {
      this.rendererData.addVertexPositions(vertexPositions);
    }
  }, {
    key: 'addVertexNormals',
    value: function addVertexNormals(vertexNormals) {
      this.rendererData.addVertexNormals(vertexNormals);
    }
  }, {
    key: 'addVertexIndexes',
    value: function addVertexIndexes(vertexIndexes) {
      this.rendererData.addVertexIndexes(vertexIndexes);
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

},{}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){
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
    key: 'getVertexColoursBuffer',
    value: function getVertexColoursBuffer() {
      return this.vertexColoursBuffer;
    }
  }, {
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

},{"../../renderer/buffers":82}],84:[function(require,module,exports){
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
    key: 'getTextureCoordinatesBuffer',
    value: function getTextureCoordinatesBuffer() {
      return this.textureCoordinatesBuffer;
    }
  }, {
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

},{"../../renderer/buffers":82}],85:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    ColourRendererData = require('../renderer/data/colour'),
    ColourRendererBuffers = require('../renderer/buffers/colour'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram;

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
            key: 'addVertexColours',
            value: function addVertexColours(vertexColours) {
                  this.rendererData.addVertexColours(vertexColours);
            }
      }, {
            key: 'createBuffers',
            value: function createBuffers(canvas) {
                  var rendererData = this.getRendererData(),
                      rendererBuffers = this.getRendererBuffers(),
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
      }], [{
            key: 'fromNothing',
            value: function fromNothing(canvas) {
                  var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
                      colourRendererData = ColourRendererData.fromNothing(),
                      colourRendererBuffers = ColourRendererBuffers.fromNothing(),
                      rendererData = colourRendererData,
                      ///
                  rendererBuffers = colourRendererBuffers,
                      ///
                  uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
                      attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
                      colourRenderer = new ColourRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

                  return colourRenderer;
            }
      }]);

      return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;

},{"../renderer":81,"../renderer/buffers/colour":83,"../renderer/data/colour":87,"./locations/colour/attribute":90,"./locations/colour/uniform":91,"./source/colour/fragmentShader":95,"./source/colour/vertexShader":96}],86:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array');

var flatten = arrayUtilities.flatten,
    merge = arrayUtilities.merge,
    add = merge; ///

var RendererData = function () {
  function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex) {
    _classCallCheck(this, RendererData);

    this.vertexPositionsData = vertexPositionsData;
    this.vertexNormalsData = vertexNormalsData;
    this.vertexIndexesData = vertexIndexesData;
    this.maximumVertexIndex = maximumVertexIndex;
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
      var offset = this.maximumVertexIndex + 1;

      vertexIndexes = vertexIndexes.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      this.maximumVertexIndex = Math.max.apply(Math, [this.maximumVertexIndex].concat(_toConsumableArray(vertexIndexes)));

      var vertexIndexesData = vertexIndexes;

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
          maximumVertexIndex = -1,
          ///
      rendererData = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex], remainingArguments)))();

      return rendererData;
    }
  }]);

  return RendererData;
}();

module.exports = RendererData;

},{"../utilities/array":104}],87:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array');

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten,
    add = merge; ///

var ColourRendererData = function (_RendererData) {
  _inherits(ColourRendererData, _RendererData);

  function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexColoursData) {
    _classCallCheck(this, ColourRendererData);

    var _this = _possibleConstructorReturn(this, (ColourRendererData.__proto__ || Object.getPrototypeOf(ColourRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex));

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

},{"../../renderer/data":86,"../../utilities/array":104}],88:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array');

var merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten,
    add = merge; ///

var TextureRendererData = function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, textureCoordinatesData) {
    _classCallCheck(this, TextureRendererData);

    var _this = _possibleConstructorReturn(this, (TextureRendererData.__proto__ || Object.getPrototypeOf(TextureRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex));

    _this.textureCoordinatesData = textureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: 'getTextureCoordinatesData',
    value: function getTextureCoordinatesData() {
      return this.textureCoordinatesData;
    }
  }, {
    key: 'addTextureCoordinates',
    value: function addTextureCoordinates(textureCoordinates) {
      var textureCoordinatesData = flatten(textureCoordinates);

      add(this.textureCoordinatesData, textureCoordinatesData);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var textureCoordinatesData = [],
          textureRendererData = RendererData.fromNothing(TextureRendererData, textureCoordinatesData);

      return textureRendererData;
    }
  }]);

  return TextureRendererData;
}(RendererData);

module.exports = TextureRendererData;

},{"../../renderer/data":86,"../../utilities/array":104}],89:[function(require,module,exports){
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

},{"../source/lighting":97,"../source/position":98}],90:[function(require,module,exports){
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

},{"../../locations/attribute":89,"../../source/colour/vertexShader":96}],91:[function(require,module,exports){
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

},{"../../locations/uniform":94}],92:[function(require,module,exports){
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

},{"../../locations/attribute":89,"../../source/texture/vertexShader":100}],93:[function(require,module,exports){
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

  function TextureUniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation, samplerUniformLocation) {
    _classCallCheck(this, TextureUniformLocations);

    var _this = _possibleConstructorReturn(this, (TextureUniformLocations.__proto__ || Object.getPrototypeOf(TextureUniformLocations)).call(this, offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation));

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

},{"../../locations/uniform":94,"../../source/texture/fragmentShader":99}],94:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lightingSource = require('../source/lighting'),
    positionSource = require('../source/position');

var normalMatrixName = lightingSource.normalMatrixName,
    offsetMatrixName = positionSource.offsetMatrixName,
    rotationMatrixName = positionSource.rotationMatrixName,
    positionMatrixName = positionSource.positionMatrixName,
    projectionMatrixName = positionSource.projectionMatrixName;

var UniformLocations = function () {
  function UniformLocations(offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation) {
    _classCallCheck(this, UniformLocations);

    this.offsetMatrixUniformLocation = offsetMatrixUniformLocation;
    this.rotationMatrixUniformLocation = rotationMatrixUniformLocation;
    this.positionMatrixUniformLocation = positionMatrixUniformLocation;
    this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    this.normalMatrixUniformLocation = normalMatrixUniformLocation;
  }

  _createClass(UniformLocations, [{
    key: 'getOffsetMatrixUniformLocation',
    value: function getOffsetMatrixUniformLocation() {
      return this.offsetMatrixUniformLocation;
    }
  }, {
    key: 'getRotationMatrixUniformLocation',
    value: function getRotationMatrixUniformLocation() {
      return this.rotationMatrixUniformLocation;
    }
  }, {
    key: 'getPositionMatrixUniformLocation',
    value: function getPositionMatrixUniformLocation() {
      return this.positionMatrixUniformLocation;
    }
  }, {
    key: 'getProjectionMatrixUniformLocation',
    value: function getProjectionMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.normalMatrixUniformLocation;
    }
  }], [{
    key: 'fromProgram',
    value: function fromProgram(Class, program, canvas) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName),
          rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName),
          positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName),
          projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName),
          normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName),
          uniformLocations = new (Function.prototype.bind.apply(Class, [null].concat([offsetMatrixUniformLocation, rotationMatrixUniformLocation, positionMatrixUniformLocation, projectionMatrixUniformLocation, normalMatrixUniformLocation], remainingArguments)))();

      return uniformLocations;
    }
  }]);

  return UniformLocations;
}();

module.exports = UniformLocations;

},{"../source/lighting":97,"../source/position":98}],95:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],96:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":97,"../../source/position":98}],97:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],98:[function(require,module,exports){
'use strict';

var offsetMatrixName = 'uOffsetMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    projectionMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition';

var positionSource = new String('\n  \n        uniform mat4 ' + offsetMatrixName + ',\n                     ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + offsetMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ');

Object.assign(positionSource, {
  offsetMatrixName: offsetMatrixName,
  rotationMatrixName: rotationMatrixName,
  positionMatrixName: positionMatrixName,
  projectionMatrixName: projectionMatrixName,
  vertexPositionAttributeName: vertexPositionAttributeName
});

module.exports = positionSource;

},{}],99:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],100:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":97,"../../source/position":98}],101:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureRendererData = require('../renderer/data/texture'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
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
    key: 'addTextureCoordinates',
    value: function addTextureCoordinates(textureCoordinates) {
      this.rendererData.addTextureCoordinates(textureCoordinates);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          textureCoordinatesData = rendererData.getTextureCoordinatesData();

      rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas);
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
    key: 'createTexture',
    value: function createTexture(image, canvas) {
      canvas.createTexture(image);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {
      var context = canvas.getContext(),
          TEXTURE0 = context.TEXTURE0,
          target = TEXTURE0,
          uniformLocations = this.getUniformLocations(),
          samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          textureRendererData = TextureRendererData.fromNothing(),
          textureRendererBuffers = TextureRendererBuffers.fromNothing(),
          rendererData = textureRendererData,
          ///
      rendererBuffers = textureRendererBuffers,
          ///
      uniformLocations = TextureUniformLocations.fromProgram(program, canvas),
          attributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
          textureRenderer = new TextureRenderer(program, rendererData, rendererBuffers, uniformLocations, attributeLocations);

      return textureRenderer;
    }
  }]);

  return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;

},{"../renderer":81,"../renderer/buffers/texture":84,"../renderer/data/texture":88,"./locations/texture/attribute":92,"./locations/texture/uniform":93,"./source/texture/fragmentShader":99,"./source/texture/vertexShader":100}],102:[function(require,module,exports){
'use strict';

function calculateHalfAngleSine(angleCosine) {
  var halfAngleSine = Math.sqrt((1 - angleCosine) / 2);

  return halfAngleSine;
}

function calculateHalfAngleCosine(angleCosine) {
  var halfAngleCosine = Math.sqrt((1 + angleCosine) / 2);

  return halfAngleCosine;
}

module.exports = {
  calculateHalfAngleSine: calculateHalfAngleSine,
  calculateHalfAngleCosine: calculateHalfAngleCosine
};

},{}],103:[function(require,module,exports){
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

},{"../constants":11}],104:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    splice = arrayUtilities.splice;


function chop(elements, arrayLength) {
  var arrays = [],
      elementsLength = elements.length,
      arraysLength = elementsLength / arrayLength;

  for (var index = 0; index < arraysLength; index++) {
    var array = [];

    for (var offset = 0; offset < arrayLength; offset++) {
      array[offset] = elements[index * arrayLength + offset];
    }

    arrays[index] = array;
  }

  return arrays;
}

function dilute(elements, array, test) {
  elements.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array.push(element);
    }
  });
}

function permute(elements, places) {
  var length = elements.length,
      cut = length - places,
      leadingElements = elements.slice(0, cut),
      trailingElements = elements.slice(cut);

  elements = [].concat(_toConsumableArray(trailingElements), _toConsumableArray(leadingElements));

  return elements;
}

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

module.exports = Object.assign(arrayUtilities, {
  chop: chop,
  dilute: dilute,
  permute: permute,
  flatten: flatten
});

},{"necessary":260}],105:[function(require,module,exports){
'use strict';

var constants = require('../constants'),
    arrayUtilities = require('../utilities/array'),
    matrixUtilities = require('../utilities/matrix');

var FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    identity4 = matrixUtilities.identity4,
    invert4 = matrixUtilities.invert4,
    rotate4 = matrixUtilities.rotate4,
    translate4 = matrixUtilities.translate4,
    transpose4 = matrixUtilities.transpose4,
    perspective4 = matrixUtilities.perspective4;


function offsetMatrixFromOffset(offset) {
  var offsetMatrix = identity4();

  offsetMatrix = translate4(offsetMatrix, offset);

  return offsetMatrix;
}

function rotationMatrixFromAngles(angles) {
  var firstAngle = first(angles),
      secondAngle = second(angles),
      thirdAngle = third(angles),
      xAngle = firstAngle,
      yAngle = secondAngle,
      zAngle = thirdAngle;

  var rotationMatrix = identity4();

  rotationMatrix = rotate4(rotationMatrix, xAngle, [1, 0, 0]);
  rotationMatrix = rotate4(rotationMatrix, yAngle, [0, 1, 0]);
  rotationMatrix = rotate4(rotationMatrix, zAngle, [0, 0, 1]);

  return rotationMatrix;
}

function positionMatrixFromDistance(distance) {
  var x = 0,
      y = 0,
      z = -distance;

  var positionMatrix = identity4();

  positionMatrix = translate4(positionMatrix, [x, y, z]);

  return positionMatrix;
}

function projectionMatrixFromWidthAndHeight(width, height) {
  var fieldOfView = FIELD_OF_VIEW,
      aspectRatio = width / height,
      zNear = Z_NEAR,
      zFar = Z_FAR,
      projectionMatrix = perspective4(fieldOfView, aspectRatio, zNear, zFar);

  return projectionMatrix;
}

function normalMatrixFromRotationMatrix(rotationMatrix) {
  var normalMatrix = invert4(rotationMatrix);

  normalMatrix = transpose4(normalMatrix);

  return normalMatrix;
}

module.exports = {
  offsetMatrixFromOffset: offsetMatrixFromOffset,
  rotationMatrixFromAngles: rotationMatrixFromAngles,
  positionMatrixFromDistance: positionMatrixFromDistance,
  projectionMatrixFromWidthAndHeight: projectionMatrixFromWidthAndHeight,
  normalMatrixFromRotationMatrix: normalMatrixFromRotationMatrix
};

},{"../constants":11,"../utilities/array":104,"../utilities/matrix":109}],106:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],107:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var asynchronousUtilities = necessary.asynchronousUtilities,
    repeatedly = asynchronousUtilities.repeatedly;


function preloadImage(path, callback) {
  var image = new Image();

  image.onload = function () {
    callback(image);
  };

  image.src = path; ///
}

function preloadImages(paths, callback) {
  var images = [],
      length = paths.length,
      ///
  context = {
    images: images,
    paths: paths
  };

  repeatedly(preloadImageCallback, length, done, context);

  function done() {
    callback(images);
  }
}

module.exports = {
  preloadImage: preloadImage,
  preloadImages: preloadImages
};

function preloadImageCallback(next, done, context, index) {
  var images = context.images,
      paths = context.paths,
      path = paths[index],
      image = new Image();


  images[index] = image;

  image.onload = next; ///

  image.src = path; ///
}

},{"necessary":260}],108:[function(require,module,exports){
'use strict';

var constants = require('../../bin/constants'),
    ///
imageUtilities = require('../utilities/image');

var IMAGE_MAP_PATH = constants.IMAGE_MAP_PATH,
    preloadImage = imageUtilities.preloadImage;


function preloadImageMap(callback) {
  var path = IMAGE_MAP_PATH;

  preloadImage(path, callback);
}

function textureCoordinatesFromImageNames(imageNames) {
  var _runtimeConfiguration = runtimeConfiguration,
      imageMapJSON = _runtimeConfiguration.imageMapJSON,
      textureCoordinates = imageNames.reduce(function (textureCoordinates, textureName) {
    textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

    return textureCoordinates;
  }, []);


  return textureCoordinates;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  textureCoordinatesFromImageNames: textureCoordinatesFromImageNames
};

},{"../../bin/constants":1,"../utilities/image":107}],109:[function(require,module,exports){
'use strict';

var mat2 = require('gl-mat2');
var mat3 = require('gl-mat3');
var mat4 = require('gl-mat4');

function identity2() {
  return mat2.create();
} ///

function identity3() {
  return mat3.create();
} ///

function identity4() {
  return mat4.create();
} ///

function invert2(matrix) {
  return mat2.invert([], matrix);
}

function invert3(matrix) {
  return mat3.invert([], matrix);
}

function invert4(matrix) {
  return mat4.invert([], matrix);
}

function transpose2(matrix) {
  return mat2.transpose([], matrix);
}

function transpose3(matrix) {
  return mat3.transpose([], matrix);
}

function transpose4(matrix) {
  return mat4.transpose([], matrix);
}

function scale2(matrix, vector) {
  return mat2.scale([], matrix, vector);
}

function scale3(matrix, vector) {
  return mat3.scale([], matrix, vector);
}

function scale4(matrix, vector) {
  return mat4.scale([], matrix, vector);
}

function translate2(matrix, vector) {
  return mat2.translate([], matrix, vector);
}

function translate3(matrix, vector) {
  return mat3.translate([], matrix, vector);
}

function translate4(matrix, vector) {
  return mat4.translate([], matrix, vector);
}

function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
  return mat4.perspective([], fieldOfView, aspectRatio, zNear, zFar);
}

function rotate4(matrix, angle, vector) {
  return mat4.rotate([], matrix, angle, vector);
}

module.exports = {
  identity2: identity2,
  identity3: identity3,
  identity4: identity4,
  invert2: invert2,
  invert3: invert3,
  invert4: invert4,
  scale2: scale2,
  scale3: scale3,
  scale4: scale4,
  transpose2: transpose2,
  transpose3: transpose3,
  transpose4: transpose4,
  translate2: translate2,
  translate3: translate3,
  translate4: translate4,
  perspective4: perspective4,
  rotate4: rotate4
};

},{"gl-mat2":122,"gl-mat3":139,"gl-mat4":157}],110:[function(require,module,exports){
'use strict';

var arrayUtilities = require('../utilities/array'),
    angleUtilities = require('../utilities/angle'),
    vectorUtilities = require('../utilities/vector'),
    approximateUtilities = require('../utilities/approximate');

var dot3 = vectorUtilities.dot3,
    cross3 = vectorUtilities.cross3,
    normalise3 = vectorUtilities.normalise3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    isApproximatelyEqualToOne = approximateUtilities.isApproximatelyEqualToOne,
    calculateHalfAngleCosine = angleUtilities.calculateHalfAngleCosine,
    calculateHalfAngleSine = angleUtilities.calculateHalfAngleSine;


function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
  return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
}

function calculateRotationQuaternion(normal) {
  var unitNormal = normalise3(normal),
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
      rotationQuaternion = [halfAngleOfRotationCosine, firstAxisOfRotationComponent * halfAngleOfRotationSine, secondAxisOfRotationComponent * halfAngleOfRotationSine, thirdAxisOfRotationComponent * halfAngleOfRotationSine];

  return rotationQuaternion;
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

function calculateForwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix) {
  var forwardsRotationAboutZAxisMatrix = rotationAboutZAxisMatrix; ///

  return forwardsRotationAboutZAxisMatrix;
}

function calculateBackwardsRotationAboutZAxisMatrix(rotationAboutZAxisMatrix) {
  var rotationAboutZAxisMatrixComponents = rotationAboutZAxisMatrix,
      ///
  firstRotationAboutZAxisMatrixComponent = first(rotationAboutZAxisMatrixComponents),
      fourthRotationAboutZAxisMatrixComponent = fourth(rotationAboutZAxisMatrixComponents),
      c = firstRotationAboutZAxisMatrixComponent,
      ///
  s = fourthRotationAboutZAxisMatrixComponent,
      ///
  backwardsRotationAboutZAxisMatrix = [c, +s, 0, -s, c, 0, 0, 0, 1];

  return backwardsRotationAboutZAxisMatrix;
}

module.exports = {
  rotateImaginaryQuaternion: rotateImaginaryQuaternion,
  calculateRotationQuaternion: calculateRotationQuaternion,
  calculateInverseRotationQuaternion: calculateInverseRotationQuaternion,
  calculateForwardsRotationQuaternion: calculateForwardsRotationQuaternion,
  calculateBackwardsRotationQuaternion: calculateBackwardsRotationQuaternion,
  calculateForwardsRotationAboutZAxisMatrix: calculateForwardsRotationAboutZAxisMatrix,
  calculateBackwardsRotationAboutZAxisMatrix: calculateBackwardsRotationAboutZAxisMatrix
};

function hamiltonProduct(quaternionA, quaternionB) {
  var quaternionAComponents = quaternionA,
      ///
  quaternionBComponents = quaternionB,
      ///
  firstQuaternionAComponent = first(quaternionAComponents),
      secondQuaternionAComponent = second(quaternionAComponents),
      thirdQuaternionAComponent = third(quaternionAComponents),
      fourthQuaternionAComponent = fourth(quaternionAComponents),
      firstQuaternionBComponent = first(quaternionBComponents),
      secondQuaternionBComponent = second(quaternionBComponents),
      thirdQuaternionBComponent = third(quaternionBComponents),
      fourthQuaternionBComponent = fourth(quaternionBComponents),
      a1 = firstQuaternionAComponent,
      ///
  b1 = secondQuaternionAComponent,
      ///
  c1 = thirdQuaternionAComponent,
      ///
  d1 = fourthQuaternionAComponent,
      ///
  a2 = firstQuaternionBComponent,
      ///
  b2 = secondQuaternionBComponent,
      ///
  c2 = thirdQuaternionBComponent,
      ///
  d2 = fourthQuaternionBComponent,
      ///
  a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
      b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
      c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
      d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
      quaternion = [a, b, c, d];

  return quaternion;
}

},{"../utilities/angle":102,"../utilities/approximate":103,"../utilities/array":104,"../utilities/vector":112}],111:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constants = require('../constants'),
    arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    matrixUtilities = require('../utilities/matrix');

var DEGREES_TO_RADIANS = constants.DEGREES_TO_RADIANS,
    transform4 = vectorUtilities.transform4,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    identity4 = matrixUtilities.identity4,
    scale4 = matrixUtilities.scale4,
    rotate4 = matrixUtilities.rotate4,
    translate4 = matrixUtilities.translate4,
    xAxis = [1, 0, 0],
    yAxis = [0, 1, 0],
    zAxis = [0, 0, 1],
    defaultWidth = 1,
    defaultDepth = 1,
    defaultHeight = 1,
    defaultPosition = [0, 0, 0],
    defaultRotations = [0, 0, 0];


function composeTransform(width, height, depth, position, rotations) {
  var scale = composeScale(width, height, depth),
      rotate = composeRotate(rotations),
      translate = composeTranslate(position);

  return function (vector) {
    return translate(rotate(scale(vector)));
  };
}

module.exports = module.exports = {
  composeTransform: composeTransform
};

function compose(matrix) {
  return function (vector) {
    return transform4([].concat(_toConsumableArray(vector), [1]), matrix).slice(0, 3);
  };
}

function composeScale() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWidth;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHeight;
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDepth;

  var matrix = identity4();

  matrix = scale4(matrix, [width, height, depth]);

  return compose(matrix);
}

function composeRotate() {
  var rotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRotations;

  var firstRotation = first(rotations),
      secondRotation = second(rotations),
      thirdRotation = third(rotations),
      xAngle = firstRotation * DEGREES_TO_RADIANS,
      ///
  yAngle = secondRotation * DEGREES_TO_RADIANS,
      ///
  zAngle = thirdRotation * DEGREES_TO_RADIANS; ///

  var matrix = identity4();

  matrix = rotate4(matrix, xAngle, xAxis);
  matrix = rotate4(matrix, yAngle, yAxis);
  matrix = rotate4(matrix, zAngle, zAxis);

  return compose(matrix);
}

function composeTranslate() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPosition;

  var matrix = identity4();

  matrix = translate4(matrix, position);

  return compose(matrix);
}

},{"../constants":11,"../utilities/array":104,"../utilities/matrix":109,"../utilities/vector":112}],112:[function(require,module,exports){
'use strict';

var vec2 = require('gl-vec2');
var vec3 = require('gl-vec3');
var vec4 = require('gl-vec4');

function length2(vector) {
  return vec2.length(vector);
}

function length3(vector) {
  return vec3.length(vector);
}

function length4(vector) {
  return vec4.length(vector);
}

function dot2(vectorA, vectorB) {
  return vec2.dot(vectorA, vectorB);
}

function dot3(vectorA, vectorB) {
  return vec3.dot(vectorA, vectorB);
}

function dot4(vectorA, vectorB) {
  return vec4.dot(vectorA, vectorB);
}

function cross3(vectorA, vectorB) {
  return vec3.cross([], vectorA, vectorB);
}

function normalise2(vector) {
  return vec2.normalize([], vector);
} ///

function normalise3(vector) {
  return vec3.normalize([], vector);
} ///

function normalise4(vector) {
  return vec4.normalize([], vector);
} ///

function scale2(vector, scalar) {
  return vec2.scale([], vector, scalar);
}

function scale3(vector, scalar) {
  return vec3.scale([], vector, scalar);
}

function scale4(vector, scalar) {
  return vec4.scale([], vector, scalar);
}

function add2(vectorA, vectorB) {
  return vec2.add([], vectorA, vectorB);
}

function add3(vectorA, vectorB) {
  return vec3.add([], vectorA, vectorB);
}

function add4(vectorA, vectorB) {
  return vec4.add([], vectorA, vectorB);
}

function subtract2(vectorA, vectorB) {
  return vec2.subtract([], vectorA, vectorB);
}

function subtract3(vectorA, vectorB) {
  return vec3.subtract([], vectorA, vectorB);
}

function subtract4(vectorA, vectorB) {
  return vec4.subtract([], vectorA, vectorB);
}

function transform2(vector, matrix) {
  return vec2.transformMat2([], vector, matrix);
} ///

function transform3(vector, matrix) {
  return vec3.transformMat3([], vector, matrix);
} ///

function transform4(vector, matrix) {
  return vec4.transformMat4([], vector, matrix);
} ///

module.exports = {
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
  transform2: transform2,
  transform3: transform3,
  transform4: transform4
};

},{"gl-vec2":182,"gl-vec3":212,"gl-vec4":242}],113:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vectorUtilities = require('../utilities/vector');

var transform3 = vectorUtilities.transform3;


function rotateAboutZAxis(vertex, rotationAboutZAxisMatrix) {
  var matrix = rotationAboutZAxisMatrix; ///

  vertex = transform3(vertex, matrix);

  return vertex;
}

function projectOntoXYPlane(vertex) {
  vertex = [].concat(_toConsumableArray(vertex.slice(0, 2)), [0]); ///

  return vertex;
}

module.exports = {
  rotateAboutZAxis: rotateAboutZAxis,
  projectOntoXYPlane: projectOntoXYPlane
};

},{"../utilities/vector":112}],114:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var arrayUtilities = require('../utilities/array'),
    vectorUtilities = require('../utilities/vector'),
    rotationUtilities = require('../utilities/rotation');

var subtract3 = vectorUtilities.subtract3,
    cross3 = vectorUtilities.cross3,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    calculateInverseRotationQuaternion = rotationUtilities.calculateInverseRotationQuaternion,
    rotateImaginaryQuaternion = rotationUtilities.rotateImaginaryQuaternion;


function calculateNormal(vertices) {
  var firstVertex = first(vertices),
      secondVertex = second(vertices),
      thirdVertex = third(vertices),
      firstEdge = subtract3(secondVertex, firstVertex),
      secondEdge = subtract3(thirdVertex, firstVertex),
      normal = cross3(firstEdge, secondEdge);

  return normal;
}

function rotateVertices(vertices, rotationQuaternion) {
  var inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion);

  vertices = vertices.map(function (vertex) {
    vertex = rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion);

    return vertex;
  });

  return vertices;
}

module.exports = {
  calculateNormal: calculateNormal,
  rotateVertices: rotateVertices
};

function rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion) {
  var imaginaryQuaternion = [0].concat(_toConsumableArray(vertex)),
      ///
  rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  vertex = rotatedImaginaryQuaternion.slice(1); ///

  return vertex;
}

},{"../utilities/array":104,"../utilities/rotation":110,"../utilities/vector":112}],115:[function(require,module,exports){

},{}],116:[function(require,module,exports){
module.exports = adjoint

/**
 * Calculates the adjugate of a mat2
 *
 * @alias mat2.adjoint
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 =  a[0]
  out[0] =  a[3]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] =  a0

  return out
}

},{}],117:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one mat2 to another
 *
 * @alias mat2.copy
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}

},{}],118:[function(require,module,exports){
module.exports = create

/**
 * Creates a new identity mat2
 *
 * @alias mat2.create
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new Float32Array(4)
  out[0] = 1
  out[1] = 0
  out[2] = 0
  out[3] = 1
  return out
}

},{}],119:[function(require,module,exports){
module.exports = determinant

/**
 * Calculates the determinant of a mat2
 *
 * @alias mat2.determinant
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1]
}

},{}],120:[function(require,module,exports){
module.exports = frob

/**
 * Returns Frobenius norm of a mat2
 *
 * @alias mat2.frob
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(
    Math.pow(a[0], 2) +
    Math.pow(a[1], 2) +
    Math.pow(a[2], 2) +
    Math.pow(a[3], 2)
  )
}

},{}],121:[function(require,module,exports){
module.exports = identity

/**
 * Set a mat2 to the identity matrix
 *
 * @alias mat2.identity
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1
  out[1] = 0
  out[2] = 0
  out[3] = 1
  return out
}

},{}],122:[function(require,module,exports){
module.exports = {
    determinant: require('./determinant')
  , transpose: require('./transpose')
  , multiply: require('./multiply')
  , identity: require('./identity')
  , adjoint: require('./adjoint')
  , rotate: require('./rotate')
  , invert: require('./invert')
  , create: require('./create')
  , scale: require('./scale')
  , copy: require('./copy')
  , frob: require('./frob')
  , ldu: require('./ldu')
}

},{"./adjoint":116,"./copy":117,"./create":118,"./determinant":119,"./frob":120,"./identity":121,"./invert":123,"./ldu":124,"./multiply":125,"./rotate":126,"./scale":127,"./transpose":128}],123:[function(require,module,exports){
module.exports = invert

/**
 * Inverts a mat2
 *
 * @alias mat2.invert
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0]
  var a1 = a[1]
  var a2 = a[2]
  var a3 = a[3]
  var det = a0 * a3 - a2 * a1

  if (!det) return null
  det = 1.0 / det

  out[0] =  a3 * det
  out[1] = -a1 * det
  out[2] = -a2 * det
  out[3] =  a0 * det

  return out
}

},{}],124:[function(require,module,exports){
module.exports = ldu

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 *
 * @alias mat2.ldu
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */
function ldu(L, D, U, a) {
  L[2] = a[2]/a[0]
  U[0] = a[0]
  U[1] = a[1]
  U[3] = a[3] - L[2] * U[1]
  return [L, D, U]
}

},{}],125:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two mat2's
 *
 * @alias mat2.multiply
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3]
  out[0] = a0 * b0 + a2 * b1
  out[1] = a1 * b0 + a3 * b1
  out[2] = a0 * b2 + a2 * b3
  out[3] = a1 * b2 + a3 * b3
  return out
}

},{}],126:[function(require,module,exports){
module.exports = rotate

/**
 * Rotates a mat2 by the given angle
 *
 * @alias mat2.rotate
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]
  var s = Math.sin(rad)
  var c = Math.cos(rad)
  out[0] = a0 *  c + a2 * s
  out[1] = a1 *  c + a3 * s
  out[2] = a0 * -s + a2 * c
  out[3] = a1 * -s + a3 * c
  return out
}

},{}],127:[function(require,module,exports){
module.exports = scale

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @alias mat2.scale
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]
  var v0 = v[0], v1 = v[1]
  out[0] = a0 * v0
  out[1] = a1 * v0
  out[2] = a2 * v1
  out[3] = a3 * v1
  return out
}

},{}],128:[function(require,module,exports){
module.exports = transpose

/**
 * Transpose the values of a mat2
 *
 * @alias mat2.transpose
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a1 = a[1]
    out[1] = a[2]
    out[2] = a1
  } else {
    out[0] = a[0]
    out[1] = a[2]
    out[2] = a[1]
    out[3] = a[3]
  }

  return out
}

},{}],129:[function(require,module,exports){
module.exports = adjoint

/**
 * Calculates the adjugate of a mat3
 *
 * @alias mat3.adjoint
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  out[0] = (a11 * a22 - a12 * a21)
  out[1] = (a02 * a21 - a01 * a22)
  out[2] = (a01 * a12 - a02 * a11)
  out[3] = (a12 * a20 - a10 * a22)
  out[4] = (a00 * a22 - a02 * a20)
  out[5] = (a02 * a10 - a00 * a12)
  out[6] = (a10 * a21 - a11 * a20)
  out[7] = (a01 * a20 - a00 * a21)
  out[8] = (a00 * a11 - a01 * a10)

  return out
}

},{}],130:[function(require,module,exports){
module.exports = clone

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @alias mat3.clone
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new Float32Array(9)
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  out[4] = a[4]
  out[5] = a[5]
  out[6] = a[6]
  out[7] = a[7]
  out[8] = a[8]
  return out
}

},{}],131:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one mat3 to another
 *
 * @alias mat3.copy
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  out[4] = a[4]
  out[5] = a[5]
  out[6] = a[6]
  out[7] = a[7]
  out[8] = a[8]
  return out
}

},{}],132:[function(require,module,exports){
module.exports = create

/**
 * Creates a new identity mat3
 *
 * @alias mat3.create
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new Float32Array(9)
  out[0] = 1
  out[1] = 0
  out[2] = 0
  out[3] = 0
  out[4] = 1
  out[5] = 0
  out[6] = 0
  out[7] = 0
  out[8] = 1
  return out
}

},{}],133:[function(require,module,exports){
module.exports = determinant

/**
 * Calculates the determinant of a mat3
 *
 * @alias mat3.determinant
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  return a00 * (a22 * a11 - a12 * a21)
       + a01 * (a12 * a20 - a22 * a10)
       + a02 * (a21 * a10 - a11 * a20)
}

},{}],134:[function(require,module,exports){
module.exports = frob

/**
 * Returns Frobenius norm of a mat3
 *
 * @alias mat3.frob
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(
      a[0]*a[0]
    + a[1]*a[1]
    + a[2]*a[2]
    + a[3]*a[3]
    + a[4]*a[4]
    + a[5]*a[5]
    + a[6]*a[6]
    + a[7]*a[7]
    + a[8]*a[8]
  )
}

},{}],135:[function(require,module,exports){
module.exports = fromMat2d

/**
 * Copies the values from a mat2d into a mat3
 *
 * @alias mat3.fromMat2d
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = 0

  out[3] = a[2]
  out[4] = a[3]
  out[5] = 0

  out[6] = a[4]
  out[7] = a[5]
  out[8] = 1

  return out
}

},{}],136:[function(require,module,exports){
module.exports = fromMat4

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @alias mat3.fromMat4
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[4]
  out[4] = a[5]
  out[5] = a[6]
  out[6] = a[8]
  out[7] = a[9]
  out[8] = a[10]
  return out
}

},{}],137:[function(require,module,exports){
module.exports = fromQuat

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @alias mat3.fromQuat
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  var x = q[0]
  var y = q[1]
  var z = q[2]
  var w = q[3]

  var x2 = x + x
  var y2 = y + y
  var z2 = z + z

  var xx = x * x2
  var yx = y * x2
  var yy = y * y2
  var zx = z * x2
  var zy = z * y2
  var zz = z * z2
  var wx = w * x2
  var wy = w * y2
  var wz = w * z2

  out[0] = 1 - yy - zz
  out[3] = yx - wz
  out[6] = zx + wy

  out[1] = yx + wz
  out[4] = 1 - xx - zz
  out[7] = zy - wx

  out[2] = zx - wy
  out[5] = zy + wx
  out[8] = 1 - xx - yy

  return out
}

},{}],138:[function(require,module,exports){
module.exports = identity

/**
 * Set a mat3 to the identity matrix
 *
 * @alias mat3.identity
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1
  out[1] = 0
  out[2] = 0
  out[3] = 0
  out[4] = 1
  out[5] = 0
  out[6] = 0
  out[7] = 0
  out[8] = 1
  return out
}

},{}],139:[function(require,module,exports){
module.exports = {
  adjoint: require('./adjoint')
  , clone: require('./clone')
  , copy: require('./copy')
  , create: require('./create')
  , determinant: require('./determinant')
  , frob: require('./frob')
  , fromMat2: require('./from-mat2')
  , fromMat4: require('./from-mat4')
  , fromQuat: require('./from-quat')
  , identity: require('./identity')
  , invert: require('./invert')
  , multiply: require('./multiply')
  , normalFromMat4: require('./normal-from-mat4')
  , rotate: require('./rotate')
  , scale: require('./scale')
  , str: require('./str')
  , translate: require('./translate')
  , transpose: require('./transpose')
}

},{"./adjoint":129,"./clone":130,"./copy":131,"./create":132,"./determinant":133,"./frob":134,"./from-mat2":135,"./from-mat4":136,"./from-quat":137,"./identity":138,"./invert":140,"./multiply":141,"./normal-from-mat4":142,"./rotate":143,"./scale":144,"./str":145,"./translate":146,"./transpose":147}],140:[function(require,module,exports){
module.exports = invert

/**
 * Inverts a mat3
 *
 * @alias mat3.invert
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  var b01 = a22 * a11 - a12 * a21
  var b11 = -a22 * a10 + a12 * a20
  var b21 = a21 * a10 - a11 * a20

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21

  if (!det) return null
  det = 1.0 / det

  out[0] = b01 * det
  out[1] = (-a22 * a01 + a02 * a21) * det
  out[2] = (a12 * a01 - a02 * a11) * det
  out[3] = b11 * det
  out[4] = (a22 * a00 - a02 * a20) * det
  out[5] = (-a12 * a00 + a02 * a10) * det
  out[6] = b21 * det
  out[7] = (-a21 * a00 + a01 * a20) * det
  out[8] = (a11 * a00 - a01 * a10) * det

  return out
}

},{}],141:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two mat3's
 *
 * @alias mat3.multiply
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  var b00 = b[0], b01 = b[1], b02 = b[2]
  var b10 = b[3], b11 = b[4], b12 = b[5]
  var b20 = b[6], b21 = b[7], b22 = b[8]

  out[0] = b00 * a00 + b01 * a10 + b02 * a20
  out[1] = b00 * a01 + b01 * a11 + b02 * a21
  out[2] = b00 * a02 + b01 * a12 + b02 * a22

  out[3] = b10 * a00 + b11 * a10 + b12 * a20
  out[4] = b10 * a01 + b11 * a11 + b12 * a21
  out[5] = b10 * a02 + b11 * a12 + b12 * a22

  out[6] = b20 * a00 + b21 * a10 + b22 * a20
  out[7] = b20 * a01 + b21 * a11 + b22 * a21
  out[8] = b20 * a02 + b21 * a12 + b22 * a22

  return out
}

},{}],142:[function(require,module,exports){
module.exports = normalFromMat4

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @alias mat3.normalFromMat4
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3]
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7]
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11]
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]

  var b00 = a00 * a11 - a01 * a10
  var b01 = a00 * a12 - a02 * a10
  var b02 = a00 * a13 - a03 * a10
  var b03 = a01 * a12 - a02 * a11
  var b04 = a01 * a13 - a03 * a11
  var b05 = a02 * a13 - a03 * a12
  var b06 = a20 * a31 - a21 * a30
  var b07 = a20 * a32 - a22 * a30
  var b08 = a20 * a33 - a23 * a30
  var b09 = a21 * a32 - a22 * a31
  var b10 = a21 * a33 - a23 * a31
  var b11 = a22 * a33 - a23 * a32

  // Calculate the determinant
  var det = b00 * b11
          - b01 * b10
          + b02 * b09
          + b03 * b08
          - b04 * b07
          + b05 * b06

  if (!det) return null
  det = 1.0 / det

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det

  return out
}

},{}],143:[function(require,module,exports){
module.exports = rotate

/**
 * Rotates a mat3 by the given angle
 *
 * @alias mat3.rotate
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  var s = Math.sin(rad)
  var c = Math.cos(rad)

  out[0] = c * a00 + s * a10
  out[1] = c * a01 + s * a11
  out[2] = c * a02 + s * a12

  out[3] = c * a10 - s * a00
  out[4] = c * a11 - s * a01
  out[5] = c * a12 - s * a02

  out[6] = a20
  out[7] = a21
  out[8] = a22

  return out
}

},{}],144:[function(require,module,exports){
module.exports = scale

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @alias mat3.scale
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0]
  var y = v[1]

  out[0] = x * a[0]
  out[1] = x * a[1]
  out[2] = x * a[2]

  out[3] = y * a[3]
  out[4] = y * a[4]
  out[5] = y * a[5]

  out[6] = a[6]
  out[7] = a[7]
  out[8] = a[8]

  return out
}

},{}],145:[function(require,module,exports){
module.exports = str

/**
 * Returns a string representation of a mat3
 *
 * @alias mat3.str
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
                   a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
                   a[6] + ', ' + a[7] + ', ' + a[8] + ')'
}

},{}],146:[function(require,module,exports){
module.exports = translate

/**
 * Translate a mat3 by the given vector
 *
 * @alias mat3.translate
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]
  var x = v[0], y = v[1]

  out[0] = a00
  out[1] = a01
  out[2] = a02

  out[3] = a10
  out[4] = a11
  out[5] = a12

  out[6] = x * a00 + y * a10 + a20
  out[7] = x * a01 + y * a11 + a21
  out[8] = x * a02 + y * a12 + a22

  return out
}

},{}],147:[function(require,module,exports){
module.exports = transpose

/**
 * Transpose the values of a mat3
 *
 * @alias mat3.transpose
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1], a02 = a[2], a12 = a[5]
    out[1] = a[3]
    out[2] = a[6]
    out[3] = a01
    out[5] = a[7]
    out[6] = a02
    out[7] = a12
  } else {
    out[0] = a[0]
    out[1] = a[3]
    out[2] = a[6]
    out[3] = a[1]
    out[4] = a[4]
    out[5] = a[7]
    out[6] = a[2]
    out[7] = a[5]
    out[8] = a[8]
  }

  return out
}

},{}],148:[function(require,module,exports){
module.exports = adjoint;

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};
},{}],149:[function(require,module,exports){
module.exports = clone;

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],150:[function(require,module,exports){
module.exports = copy;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],151:[function(require,module,exports){
module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],152:[function(require,module,exports){
module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};
},{}],153:[function(require,module,exports){
module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};
},{}],154:[function(require,module,exports){
module.exports = fromRotationTranslation;

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};
},{}],155:[function(require,module,exports){
module.exports = frustum;

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};
},{}],156:[function(require,module,exports){
module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],157:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , copy: require('./copy')
  , identity: require('./identity')
  , transpose: require('./transpose')
  , invert: require('./invert')
  , adjoint: require('./adjoint')
  , determinant: require('./determinant')
  , multiply: require('./multiply')
  , translate: require('./translate')
  , scale: require('./scale')
  , rotate: require('./rotate')
  , rotateX: require('./rotateX')
  , rotateY: require('./rotateY')
  , rotateZ: require('./rotateZ')
  , fromRotationTranslation: require('./fromRotationTranslation')
  , fromQuat: require('./fromQuat')
  , frustum: require('./frustum')
  , perspective: require('./perspective')
  , perspectiveFromFieldOfView: require('./perspectiveFromFieldOfView')
  , ortho: require('./ortho')
  , lookAt: require('./lookAt')
  , str: require('./str')
}
},{"./adjoint":148,"./clone":149,"./copy":150,"./create":151,"./determinant":152,"./fromQuat":153,"./fromRotationTranslation":154,"./frustum":155,"./identity":156,"./invert":158,"./lookAt":159,"./multiply":160,"./ortho":161,"./perspective":162,"./perspectiveFromFieldOfView":163,"./rotate":164,"./rotateX":165,"./rotateY":166,"./rotateZ":167,"./scale":168,"./str":169,"./translate":170,"./transpose":171}],158:[function(require,module,exports){
module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};
},{}],159:[function(require,module,exports){
var identity = require('./identity');

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};
},{"./identity":156}],160:[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};
},{}],161:[function(require,module,exports){
module.exports = ortho;

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};
},{}],162:[function(require,module,exports){
module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};
},{}],163:[function(require,module,exports){
module.exports = perspectiveFromFieldOfView;

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);

    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = (far * near) / (near - far);
    out[15] = 0.0;
    return out;
}


},{}],164:[function(require,module,exports){
module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};
},{}],165:[function(require,module,exports){
module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};
},{}],166:[function(require,module,exports){
module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};
},{}],167:[function(require,module,exports){
module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};
},{}],168:[function(require,module,exports){
module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],169:[function(require,module,exports){
module.exports = str;

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};
},{}],170:[function(require,module,exports){
module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};
},{}],171:[function(require,module,exports){
module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};
},{}],172:[function(require,module,exports){
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],173:[function(require,module,exports){
module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],174:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],175:[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
},{}],176:[function(require,module,exports){
module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}
},{}],177:[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],178:[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
},{}],179:[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
},{}],180:[function(require,module,exports){
module.exports = forEach

var vec = require('./create')()

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l
    if(!stride) {
        stride = 2
    }

    if(!offset) {
        offset = 0
    }
    
    if(count) {
        l = Math.min((count * stride) + offset, a.length)
    } else {
        l = a.length
    }

    for(i = offset; i < l; i += stride) {
        vec[0] = a[i]
        vec[1] = a[i+1]
        fn(vec, vec, arg)
        a[i] = vec[0]
        a[i+1] = vec[1]
    }
    
    return a
}
},{"./create":175}],181:[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
},{}],182:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , add: require('./add')
  , subtract: require('./subtract')
  , multiply: require('./multiply')
  , divide: require('./divide')
  , min: require('./min')
  , max: require('./max')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , squaredDistance: require('./squaredDistance')
  , length: require('./length')
  , squaredLength: require('./squaredLength')
  , negate: require('./negate')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat2: require('./transformMat2')
  , transformMat2d: require('./transformMat2d')
  , transformMat3: require('./transformMat3')
  , transformMat4: require('./transformMat4')
  , forEach: require('./forEach')
}
},{"./add":172,"./clone":173,"./copy":174,"./create":175,"./cross":176,"./distance":177,"./divide":178,"./dot":179,"./forEach":180,"./fromValues":181,"./length":183,"./lerp":184,"./max":185,"./min":186,"./multiply":187,"./negate":188,"./normalize":189,"./random":190,"./scale":191,"./scaleAndAdd":192,"./set":193,"./squaredDistance":194,"./squaredLength":195,"./subtract":196,"./transformMat2":197,"./transformMat2d":198,"./transformMat3":199,"./transformMat4":200}],183:[function(require,module,exports){
module.exports = length

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],184:[function(require,module,exports){
module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}
},{}],185:[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
},{}],186:[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
},{}],187:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],188:[function(require,module,exports){
module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}
},{}],189:[function(require,module,exports){
module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}
},{}],190:[function(require,module,exports){
module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0
    var r = Math.random() * 2.0 * Math.PI
    out[0] = Math.cos(r) * scale
    out[1] = Math.sin(r) * scale
    return out
}
},{}],191:[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
},{}],192:[function(require,module,exports){
module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}
},{}],193:[function(require,module,exports){
module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}
},{}],194:[function(require,module,exports){
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return x*x + y*y
}
},{}],195:[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
},{}],196:[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],197:[function(require,module,exports){
module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}
},{}],198:[function(require,module,exports){
module.exports = transformMat2d

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y + m[4]
    out[1] = m[1] * x + m[3] * y + m[5]
    return out
}
},{}],199:[function(require,module,exports){
module.exports = transformMat3

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[3] * y + m[6]
    out[1] = m[1] * x + m[4] * y + m[7]
    return out
}
},{}],200:[function(require,module,exports){
module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{}],201:[function(require,module,exports){
module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}
},{}],202:[function(require,module,exports){
module.exports = angle

var fromValues = require('./fromValues')
var normalize = require('./normalize')
var dot = require('./dot')

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2])
    var tempB = fromValues(b[0], b[1], b[2])
 
    normalize(tempA, tempA)
    normalize(tempB, tempB)
 
    var cosine = dot(tempA, tempB)

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}

},{"./dot":209,"./fromValues":211,"./normalize":220}],203:[function(require,module,exports){
module.exports = clone;

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new Float32Array(3)
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}
},{}],204:[function(require,module,exports){
module.exports = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}
},{}],205:[function(require,module,exports){
module.exports = create;

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new Float32Array(3)
    out[0] = 0
    out[1] = 0
    out[2] = 0
    return out
}
},{}],206:[function(require,module,exports){
module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}
},{}],207:[function(require,module,exports){
module.exports = distance;

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return Math.sqrt(x*x + y*y + z*z)
}
},{}],208:[function(require,module,exports){
module.exports = divide;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out
}
},{}],209:[function(require,module,exports){
module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
},{}],210:[function(require,module,exports){
module.exports = forEach;

var vec = require('./create')()

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
        var i, l
        if(!stride) {
            stride = 3
        }

        if(!offset) {
            offset = 0
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length)
        } else {
            l = a.length
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i] 
            vec[1] = a[i+1] 
            vec[2] = a[i+2]
            fn(vec, vec, arg)
            a[i] = vec[0] 
            a[i+1] = vec[1] 
            a[i+2] = vec[2]
        }
        
        return a
}
},{"./create":205}],211:[function(require,module,exports){
module.exports = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3)
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}
},{}],212:[function(require,module,exports){
module.exports = {
  create: require('./create')
  , clone: require('./clone')
  , angle: require('./angle')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , add: require('./add')
  , subtract: require('./subtract')
  , multiply: require('./multiply')
  , divide: require('./divide')
  , min: require('./min')
  , max: require('./max')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , squaredDistance: require('./squaredDistance')
  , length: require('./length')
  , squaredLength: require('./squaredLength')
  , negate: require('./negate')
  , inverse: require('./inverse')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat4: require('./transformMat4')
  , transformMat3: require('./transformMat3')
  , transformQuat: require('./transformQuat')
  , rotateX: require('./rotateX')
  , rotateY: require('./rotateY')
  , rotateZ: require('./rotateZ')
  , forEach: require('./forEach')
}
},{"./add":201,"./angle":202,"./clone":203,"./copy":204,"./create":205,"./cross":206,"./distance":207,"./divide":208,"./dot":209,"./forEach":210,"./fromValues":211,"./inverse":213,"./length":214,"./lerp":215,"./max":216,"./min":217,"./multiply":218,"./negate":219,"./normalize":220,"./random":221,"./rotateX":222,"./rotateY":223,"./rotateZ":224,"./scale":225,"./scaleAndAdd":226,"./set":227,"./squaredDistance":228,"./squaredLength":229,"./subtract":230,"./transformMat3":231,"./transformMat4":232,"./transformQuat":233}],213:[function(require,module,exports){
module.exports = inverse;

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  return out
}
},{}],214:[function(require,module,exports){
module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}
},{}],215:[function(require,module,exports){
module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}
},{}],216:[function(require,module,exports){
module.exports = max;

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    out[2] = Math.max(a[2], b[2])
    return out
}
},{}],217:[function(require,module,exports){
module.exports = min;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    out[2] = Math.min(a[2], b[2])
    return out
}
},{}],218:[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out
}
},{}],219:[function(require,module,exports){
module.exports = negate;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    return out
}
},{}],220:[function(require,module,exports){
module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}
},{}],221:[function(require,module,exports){
module.exports = random;

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0

    var r = Math.random() * 2.0 * Math.PI
    var z = (Math.random() * 2.0) - 1.0
    var zScale = Math.sqrt(1.0-z*z) * scale

    out[0] = Math.cos(r) * zScale
    out[1] = Math.sin(r) * zScale
    out[2] = z * scale
    return out
}
},{}],222:[function(require,module,exports){
module.exports = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]

    //perform rotation
    r[0] = p[0]
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c)
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c)

    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]

    return out
}
},{}],223:[function(require,module,exports){
module.exports = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c)
    r[1] = p[1]
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c)
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}
},{}],224:[function(require,module,exports){
module.exports = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c)
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c)
    r[2] = p[2]
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}
},{}],225:[function(require,module,exports){
module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}
},{}],226:[function(require,module,exports){
module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}
},{}],227:[function(require,module,exports){
module.exports = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}
},{}],228:[function(require,module,exports){
module.exports = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return x*x + y*y + z*z
}
},{}],229:[function(require,module,exports){
module.exports = squaredLength;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return x*x + y*y + z*z
}
},{}],230:[function(require,module,exports){
module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}
},{}],231:[function(require,module,exports){
module.exports = transformMat3;

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2]
    out[0] = x * m[0] + y * m[3] + z * m[6]
    out[1] = x * m[1] + y * m[4] + z * m[7]
    out[2] = x * m[2] + y * m[5] + z * m[8]
    return out
}
},{}],232:[function(require,module,exports){
module.exports = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15]
    w = w || 1.0
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    return out
}
},{}],233:[function(require,module,exports){
module.exports = transformQuat;

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
    return out
}
},{}],234:[function(require,module,exports){
module.exports = add

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add (out, a, b) {
  out[0] = a[0] + b[0]
  out[1] = a[1] + b[1]
  out[2] = a[2] + b[2]
  out[3] = a[3] + b[3]
  return out
}

},{}],235:[function(require,module,exports){
module.exports = clone

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone (a) {
  var out = new Float32Array(4)
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}

},{}],236:[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy (out, a) {
  out[0] = a[0]
  out[1] = a[1]
  out[2] = a[2]
  out[3] = a[3]
  return out
}

},{}],237:[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create () {
  var out = new Float32Array(4)
  out[0] = 0
  out[1] = 0
  out[2] = 0
  out[3] = 0
  return out
}

},{}],238:[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance (a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1],
    z = b[2] - a[2],
    w = b[3] - a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}

},{}],239:[function(require,module,exports){
module.exports = divide

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide (out, a, b) {
  out[0] = a[0] / b[0]
  out[1] = a[1] / b[1]
  out[2] = a[2] / b[2]
  out[3] = a[3] / b[3]
  return out
}

},{}],240:[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}

},{}],241:[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues (x, y, z, w) {
  var out = new Float32Array(4)
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}

},{}],242:[function(require,module,exports){
module.exports = {
  create: require('./create'),
  clone: require('./clone'),
  fromValues: require('./fromValues'),
  copy: require('./copy'),
  set: require('./set'),
  add: require('./add'),
  subtract: require('./subtract'),
  multiply: require('./multiply'),
  divide: require('./divide'),
  min: require('./min'),
  max: require('./max'),
  scale: require('./scale'),
  scaleAndAdd: require('./scaleAndAdd'),
  distance: require('./distance'),
  squaredDistance: require('./squaredDistance'),
  length: require('./length'),
  squaredLength: require('./squaredLength'),
  negate: require('./negate'),
  inverse: require('./inverse'),
  normalize: require('./normalize'),
  dot: require('./dot'),
  lerp: require('./lerp'),
  random: require('./random'),
  transformMat4: require('./transformMat4'),
  transformQuat: require('./transformQuat')
}

},{"./add":234,"./clone":235,"./copy":236,"./create":237,"./distance":238,"./divide":239,"./dot":240,"./fromValues":241,"./inverse":243,"./length":244,"./lerp":245,"./max":246,"./min":247,"./multiply":248,"./negate":249,"./normalize":250,"./random":251,"./scale":252,"./scaleAndAdd":253,"./set":254,"./squaredDistance":255,"./squaredLength":256,"./subtract":257,"./transformMat4":258,"./transformQuat":259}],243:[function(require,module,exports){
module.exports = inverse

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse (out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  out[3] = 1.0 / a[3]
  return out
}

},{}],244:[function(require,module,exports){
module.exports = length

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}

},{}],245:[function(require,module,exports){
module.exports = lerp

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp (out, a, b, t) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3]
  out[0] = ax + t * (b[0] - ax)
  out[1] = ay + t * (b[1] - ay)
  out[2] = az + t * (b[2] - az)
  out[3] = aw + t * (b[3] - aw)
  return out
}

},{}],246:[function(require,module,exports){
module.exports = max

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max (out, a, b) {
  out[0] = Math.max(a[0], b[0])
  out[1] = Math.max(a[1], b[1])
  out[2] = Math.max(a[2], b[2])
  out[3] = Math.max(a[3], b[3])
  return out
}

},{}],247:[function(require,module,exports){
module.exports = min

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min (out, a, b) {
  out[0] = Math.min(a[0], b[0])
  out[1] = Math.min(a[1], b[1])
  out[2] = Math.min(a[2], b[2])
  out[3] = Math.min(a[3], b[3])
  return out
}

},{}],248:[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply (out, a, b) {
  out[0] = a[0] * b[0]
  out[1] = a[1] * b[1]
  out[2] = a[2] * b[2]
  out[3] = a[3] * b[3]
  return out
}

},{}],249:[function(require,module,exports){
module.exports = negate

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate (out, a) {
  out[0] = -a[0]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] = -a[3]
  return out
}

},{}],250:[function(require,module,exports){
module.exports = normalize

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize (out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  var len = x * x + y * y + z * z + w * w
  if (len > 0) {
    len = 1 / Math.sqrt(len)
    out[0] = x * len
    out[1] = y * len
    out[2] = z * len
    out[3] = w * len
  }
  return out
}

},{}],251:[function(require,module,exports){
var vecNormalize = require('./normalize')
var vecScale = require('./scale')

module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random (out, scale) {
  scale = scale || 1.0

  // TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = Math.random()
  out[1] = Math.random()
  out[2] = Math.random()
  out[3] = Math.random()
  vecNormalize(out, out)
  vecScale(out, out, scale)
  return out
}

},{"./normalize":250,"./scale":252}],252:[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale (out, a, b) {
  out[0] = a[0] * b
  out[1] = a[1] * b
  out[2] = a[2] * b
  out[3] = a[3] * b
  return out
}

},{}],253:[function(require,module,exports){
module.exports = scaleAndAdd

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd (out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale)
  out[1] = a[1] + (b[1] * scale)
  out[2] = a[2] + (b[2] * scale)
  out[3] = a[3] + (b[3] * scale)
  return out
}

},{}],254:[function(require,module,exports){
module.exports = set

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set (out, x, y, z, w) {
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}

},{}],255:[function(require,module,exports){
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance (a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1],
    z = b[2] - a[2],
    w = b[3] - a[3]
  return x * x + y * y + z * z + w * w
}

},{}],256:[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return x * x + y * y + z * z + w * w
}

},{}],257:[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract (out, a, b) {
  out[0] = a[0] - b[0]
  out[1] = a[1] - b[1]
  out[2] = a[2] - b[2]
  out[3] = a[3] - b[3]
  return out
}

},{}],258:[function(require,module,exports){
module.exports = transformMat4

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4 (out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3]
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w
  return out
}

},{}],259:[function(require,module,exports){
module.exports = transformQuat

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat (out, a, q) {
  var x = a[0], y = a[1], z = a[2],
    qx = q[0], qy = q[1], qz = q[2], qw = q[3],

    // calculate quat * vec
    ix = qw * x + qy * z - qz * y,
    iy = qw * y + qz * x - qx * z,
    iz = qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
  out[3] = a[3]
  return out
}

},{}],260:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":261,"./lib/utilities/asynchronous":262,"./lib/utilities/fileSystem":263,"./lib/utilities/path":264}],261:[function(require,module,exports){
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

function splice(array1, start, deleteCount) {
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
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],262:[function(require,module,exports){
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

},{}],263:[function(require,module,exports){
'use strict';

var fs = require('fs');

function entryExists(absolutePath) {
  return fs.existsSync(absolutePath);
}

function fileExists(absoluteFilePath) {
  var fileExists = false;

  var absolutePath = absoluteFilePath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function isEntryFile(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function directoryExists(absoluteDirectoryPath) {
  var directoryExists = false;

  var absolutePath = absoluteDirectoryPath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
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

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryFile: isEntryFile,
  directoryExists: directoryExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

},{"fs":115}],264:[function(require,module,exports){
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

},{"./array":261}]},{},[24])(24)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbnZhcy5qcyIsImVzNi9jYW52YXMvbWl4aW4vYmxlbmRpbmcuanMiLCJlczYvY2FudmFzL21peGluL2J1ZmZlci5qcyIsImVzNi9jYW52YXMvbWl4aW4vY29sb3VyLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9kZXB0aC5qcyIsImVzNi9jYW52YXMvbWl4aW4vbWF0cml4LmpzIiwiZXM2L2NhbnZhcy9taXhpbi9wcm9ncmFtLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9zaGFkZXIuanMiLCJlczYvY2FudmFzL21peGluL3RleHR1cmUuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW1lcmEva2V5RXZlbnRzLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL21vdXNlRXZlbnRzLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL3Bhbi5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS90aWx0LmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL3pvb20uanMiLCJlczYvZWxlbWVudC9jYW52YXMuanMiLCJlczYvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJlczYvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCJlczYvZWxlbWVudC9tYXNrLmpzIiwiZXM2L2VsZW1lbnQvc2NlbmUuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9sb3dlci5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L21haW4uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvcmFpbGluZy90b3BSYWlsLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvcmFpbGluZy91cHJpZ2h0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvcmFpbGluZy91cHJpZ2h0cy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL2VkZ2UuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL2VkZ2UvbG9uZy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS9zaG9ydC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vb3Blbk1lc2guanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9ib3R0b21SYWlsLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9ib3R0b21SYWlscy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvY29ybmVyRml0dGluZy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvY29ybmVyRml0dGluZ3MuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2Nvcm5lclBvc3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2Nvcm5lclBvc3RzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9mb3J0eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC9iYWNrLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC9jb2xvdXJlZFJpZGdlLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC9mcm9udC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvc2lkZUEuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsL3NpZGVCLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9yb29mLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci90b3BSYWlsLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci90b3BSYWlscy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvdHdlbnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9zZWNvbmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMvY29uY3JldGVTbGFiLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZyYW1lLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZyYW1lL3N0ZWVsU2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9yb29mR2FyZGVuLmpzIiwiZXM2L2V4YW1wbGVzL21hc2tpbmcuanMiLCJlczYvZXhhbXBsZXMvc2hhcGVzLmpzIiwiZXM2L2V4YW1wbGVzL3RpbWJlckZyYW1lZEhvdXNlLmpzIiwiZXM2L2V4YW1wbGVzL3RpbWJlckZyYW1lZEhvdXNlL2ZyYW1lLmpzIiwiZXM2L2V4YW1wbGVzL3RpbWJlckZyYW1lZEhvdXNlL2ZyYW1lL3N0ZWVsU2VjdGlvbi5qcyIsImVzNi9mYWNldC5qcyIsImVzNi9mYWNldC9lZGdlLmpzIiwiZXM2L2ZhY2V0L2VkZ2VJblhZUGxhbmUuanMiLCJlczYvZmFjZXQvdmVydGljYWxMaW5lSW5YWVBsYW5lLmpzIiwiZXM2L2ppZ2dsZS5qcyIsImVzNi9tYXNraW5nRmFjZXQuanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVuZGVyZXIuanMiLCJlczYvcmVuZGVyZXIvYnVmZmVycy5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2RhdGEuanMiLCJlczYvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYW5nbGUuanMiLCJlczYvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwiZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsImVzNi91dGlsaXRpZXMvY2FtZXJhLmpzIiwiZXM2L3V0aWxpdGllcy9kb20uanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlLmpzIiwiZXM2L3V0aWxpdGllcy9pbWFnZU1hcC5qcyIsImVzNi91dGlsaXRpZXMvbWF0cml4LmpzIiwiZXM2L3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsImVzNi91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwiZXM2L3V0aWxpdGllcy92ZWN0b3IuanMiLCJlczYvdXRpbGl0aWVzL3ZlcnRleC5qcyIsImVzNi91dGlsaXRpZXMvdmVydGljZXMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2Zyb2IuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbGR1LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2Fkam9pbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2Zyb2IuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLW1hdDIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLW1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLXF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9ub3JtYWwtZnJvbS1tYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9hZGpvaW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZGV0ZXJtaW5hbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJ1c3R1bS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9sb29rQXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L29ydGhvLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVZLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc3RyLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNsYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNwb3NlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvYWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0Mi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDJkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0My5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9hbmdsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Nyb3NzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXZpZGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kb3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9mb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvaW52ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVZLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtTWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9hZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Zyb21WYWx1ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2ludmVyc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvdHJhbnNmb3JtTWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3RyYW5zZm9ybVF1YXQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3BhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsUUFBUSx5QkFBUixDQUF0QjtBQUFBLElBQ00sZUFBZSxRQUFRLHdCQUFSLENBRHJCO0FBQUEsSUFFTSxlQUFlLFFBQVEsd0JBQVIsQ0FGckI7QUFBQSxJQUdNLGNBQWMsUUFBUSx1QkFBUixDQUhwQjtBQUFBLElBSU0sY0FBYyxRQUFRLHVCQUFSLENBSnBCO0FBQUEsSUFLTSxjQUFjLFFBQVEsdUJBQVIsQ0FMcEI7QUFB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QUFQO0FBQ0Q7OztBQzdDRDs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUEsMkJBQXVCLFdBQXZCLENBSG9CLENBR2lCO0FBQ3RDOztBQUVELFNBQU8sb0JBQVA7QUFDRDs7QUFFRCxTQUFTLGlDQUFULENBQTJDLElBQTNDLEVBQWlEO0FBQy9DLE1BQUksNEJBQTRCLElBQWhDOztBQUVBLE1BQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjs7QUFFQSxNQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTSxjQUFjLE9BQU8sT0FBUCxDQUFwQjs7QUFFQSxnQ0FBNEIsV0FBNUIsQ0FIb0IsQ0FHcUI7QUFDMUM7O0FBRUQsU0FBTyx5QkFBUDtBQUNEOztBQUVELFNBQVMsdUNBQVQsQ0FBaUQsSUFBakQsRUFBdUQ7QUFDckQsTUFBSSxrQ0FBa0MsSUFBdEM7O0FBRUEsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNLGNBQWMsT0FBTyxPQUFQLENBQXBCOztBQUVBLHNDQUFrQyxXQUFsQztBQUNEOztBQUVELFNBQU8sK0JBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixzQkFBb0Isa0JBREw7QUFFZixzQkFBb0Isa0JBRkw7QUFHZiw4QkFBNEIsMEJBSGI7QUFJZix5Q0FBdUMscUNBSnhCO0FBS2YsZ0JBQWMsWUFMQztBQU1mLG9CQUFrQixnQkFOSDtBQU9mLDBCQUF3QixzQkFQVDtBQVFmLGdDQUE4Qiw0QkFSZjtBQVNmLGdDQUE4Qiw0QkFUZjtBQVVmLHFDQUFtQyxpQ0FWcEI7QUFXZiwyQ0FBeUM7QUFYMUIsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJTUFHRV9TSVpFID0gMTI4LFxuICAgICAgSU1BR0VfTUFQX1BBVEggPSAnL2ltYWdlTWFwJyxcbiAgICAgIElOREVYX1BBR0VfUEFUSCA9ICcvJyxcbiAgICAgIFNIQVBFU19QQUdFX1BBVEggPSAnL3NoYXBlcycsXG4gICAgICBNQVNLSU5HX1BBR0VfUEFUSCA9ICcvbWFza2luZycsXG4gICAgICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIID0gJy9jb250YWluZXJIb3VzZScsXG4gICAgICBUSU1CRVJfRlJBTUVEX0hPVVNFX1BBR0VfUEFUSCA9ICcvdGltYmVyRnJhbWVkSG91c2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSU1BR0VfU0laRTogSU1BR0VfU0laRSxcbiAgSU1BR0VfTUFQX1BBVEg6IElNQUdFX01BUF9QQVRILFxuICBJTkRFWF9QQUdFX1BBVEg6IElOREVYX1BBR0VfUEFUSCxcbiAgTUFTS0lOR19QQUdFX1BBVEg6IE1BU0tJTkdfUEFHRV9QQVRILFxuICBTSEFQRVNfUEFHRV9QQVRIOiBTSEFQRVNfUEFHRV9QQVRILFxuICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIOiBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRILFxuICBUSU1CRVJfRlJBTUVEX0hPVVNFX1BBR0VfUEFUSDogVElNQkVSX0ZSQU1FRF9IT1VTRV9QQUdFX1BBVEhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJsZW5kaW5nTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9ibGVuZGluZycpLFxuICAgICAgcHJvZ3JhbU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vcHJvZ3JhbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vdGV4dHVyZScpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9jb2xvdXInKSxcbiAgICAgIHNoYWRlck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9tYXRyaXgnKSxcbiAgICAgIGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9kZXB0aCcpLFxuICAgICAgZG9tVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvZG9tJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzaGFkZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gc2hhZGVyLmdldENvdW50KCk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhjb3VudCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgU1JDX0FMUEhBLCBPTkUsIEJMRU5EIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShCTEVORCk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhTUkNfQUxQSEEsIE9ORSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmFibGVCbGVuZGluZzogZW5hYmxlQmxlbmRpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcjogY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXI6IGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXI6IGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlcjogYmluZEJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgXG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihERVBUSF9CVUZGRVJfQklUKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoREVQVEhfVEVTVCk7XG5cbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhMRVFVQUwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZXB0aDogY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcjogY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nOiBlbmFibGVEZXB0aFRlc3Rpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBseU1hdHJpeDogYXBwbHlNYXRyaXhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW06IHVzZVByb2dyYW1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGFkZXI6IGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyOiBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyOiBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSkge1xuICBjb25zdCB7IFRFWFRVUkVfMkQsIFJHQkEsIFVOU0lHTkVEX0JZVEUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbGV2ZWwgPSAwLFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVNaXBtYXAoVEVYVFVSRV8yRCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpIHsgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZTogY3JlYXRlVGV4dHVyZSxcbiAgYWN0aXZhdGVUZXh0dXJlOiBhY3RpdmF0ZVRleHR1cmVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZFUlRJQ0VTX0xFTkdUSCA9IDMsXG4gICAgICBDWUxJTkRFUl9TSURFUyA9IDY0LFxuICAgICAgTUlOSU1VTV9ESVNUQU5DRSA9IDEsXG4gICAgICBERUdSRUVTX1RPX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgRklFTERfT0ZfVklFVyA9IDQ1ICogREVHUkVFU19UT19SQURJQU5TLFxuICAgICAgWl9ORUFSID0gMSxcbiAgICAgIFpfRkFSID0gMTAwMCxcbiAgICAgIE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnLFxuICAgICAgQ1RSTF9LRVlfQ09ERSA9IDE3LFxuICAgICAgU0hJRlRfS0VZX0NPREUgPSAxNixcbiAgICAgIE9GRlNFVF9TQ0FMQVIgPSAwLjI1LFxuICAgICAgRElTVEFOQ0VfU0NBTEFSID0gMS4yNSxcbiAgICAgIEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiA9IDAuMDEsXG4gICAgICBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTID0gWyAwLCAwIF0sXG4gICAgICBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTID0gWyAwLCAwIF0sXG4gICAgICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFpfRkFSOiBaX0ZBUixcbiAgWl9ORUFSOiBaX05FQVIsXG4gIE1PVVNFX1VQOiBNT1VTRV9VUCxcbiAgTU9VU0VfRE9XTjogTU9VU0VfRE9XTixcbiAgTU9VU0VfTU9WRTogTU9VU0VfTU9WRSxcbiAgTU9VU0VfV0hFRUw6IE1PVVNFX1dIRUVMLFxuICBDVFJMX0tFWV9DT0RFOiBDVFJMX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERTogU0hJRlRfS0VZX0NPREUsXG4gIEZJRUxEX09GX1ZJRVc6IEZJRUxEX09GX1ZJRVcsXG4gIFZFUlRJQ0VTX0xFTkdUSDogVkVSVElDRVNfTEVOR1RILFxuICBDWUxJTkRFUl9TSURFUzogQ1lMSU5ERVJfU0lERVMsXG4gIE1JTklNVU1fRElTVEFOQ0U6IE1JTklNVU1fRElTVEFOQ0UsXG4gIERFR1JFRVNfVE9fUkFESUFOUzogREVHUkVFU19UT19SQURJQU5TLFxuICBPRkZTRVRfU0NBTEFSOiBPRkZTRVRfU0NBTEFSLFxuICBESVNUQU5DRV9TQ0FMQVI6IERJU1RBTkNFX1NDQUxBUixcbiAgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSOiBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVM6IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVM6IElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMsXG4gIERFRkFVTFRfTUFSR0lOX09GX0VSUk9SOiBERUZBVUxUX01BUkdJTl9PRl9FUlJPUlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuICBcbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgLy8vXG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudE9yUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQudXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRPclByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHRpbHQgPSByZXF1aXJlKCcuL2NhbWVyYS90aWx0JyksXG4gICAgICBQYW4gPSByZXF1aXJlKCcuL2NhbWVyYS9wYW4nKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIGNhbWVyYVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9jYW1lcmEnKTtcblxuY29uc3QgeyBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0LCByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMsIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXggfSA9IGNhbWVyYVV0aWxpdGllcztcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnRpbHQubW91c2VVcEhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlVXBIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMudGlsdC5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnRpbHQpO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXggPSBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy5oYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbERpc3RhbmNlLCBpbml0aWFsT2Zmc2V0LCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBoYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEodGlsdCwgcGFuLCB6b29tLCBoYW5kbGVyLCBtb3VzZURvd24sIGNhbnZhcyk7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IENUUkxfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICB9XG4gIFxuICBvbkN0cmxLZXlVcCgpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihjdHJsS2V5SGFuZGxlcikge1xuICAgICAgY3RybEtleUhhbmRsZXIoY3RybEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaGlmdEtleVVwKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICAgIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25DdHJsS2V5RG93bigpIHtcbiAgICBjb25zdCBjdHJsS2V5RG93biA9IHRydWUsXG4gICAgICAgICAgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgICBjdHJsS2V5SGFuZGxlcihjdHJsS2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvblNoaWZ0S2V5RG93bigpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICAgIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ3RybEtleUhhbmRsZXIoY3RybEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLnB1c2goY3RybEtleUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXTtcblxuICAgIHNoaWZ0S2V5SGFuZGxlcnMucHVzaChzaGlmdEtleUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0ge30sXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycyk7XG4gICAgXG4gICAgaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV0gPSBbXTtcbiAgICBoYW5kbGVyc1tTSElGVF9LRVlfQ09ERV0gPSBbXTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxuY29uc3Qga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5RXZlbnRzO1xuXG5jb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbmRvY3VtZW50RE9NRWxlbWVudC5vbmtleXVwID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBDVFJMX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uQ3RybEtleVVwKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleVVwKCk7XG4gIH1cbn07XG5cbmRvY3VtZW50RE9NRWxlbWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IENUUkxfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25DdHJsS2V5RG93bigpO1xuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uU2hpZnRLZXlEb3duKCk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9NT1ZFLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBhZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIG9uTW91c2VFdmVudChldmVudFR5cGUsIGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQsIHRoaXMuY2FudmFzKTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW01PVVNFX1dIRUVMXSxcbiAgICAgICAgICBkZWx0YSA9IGRlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihkZWx0YSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7XG4gICAgICAgICAgICBNT1VTRV9VUDogW10sXG4gICAgICAgICAgICBNT1VTRV9ET1dOOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX01PVkU6IFtdLFxuICAgICAgICAgICAgTU9VU0VfV0hFRUw6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VFdmVudChNT1VTRV9VUCwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX0RPV04sIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VFdmVudChNT1VTRV9NT1ZFLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpOyB9KTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuXG5mdW5jdGlvbiBkZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBkZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZXZlbnQudGFyZ2V0LCAgLy8vXG4gICAgICAgIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgICsoZXZlbnQuY2xpZW50WCAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QubGVmdCksXG4gICAgICAgICAgLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3ApXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaGFuZGxlcihldmVudCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlY3RvcicpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCBzdWJ0cmFjdDIsIHNjYWxlMiB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBPRkZTRVRfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gcHJldmlvdXNPZmZzZXQ7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlT2Zmc2V0KGFuZ2xlcyk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVPZmZzZXQoYW5nbGVzKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICBzY2FsYXIgPSBPRkZTRVRfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldCA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgZmlyc3RSZWxhdGl2ZU9mZnNldCA9IGZpcnN0KHJlbGF0aXZlT2Zmc2V0KSxcbiAgICAgICAgICBzZWNvbmRSZWxhdGl2ZU9mZnNldCA9IHNlY29uZChyZWxhdGl2ZU9mZnNldCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5wcmV2aW91c09mZnNldC5zbGljZSgpOyAvLy9cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5jb3MoeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gMCxcbiAgICAgICAgICAgIHogPSAtTWF0aC5zaW4oeUFuZ2xlKSAqIGZpcnN0UmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZDMob2Zmc2V0LCBbeCwgeSwgel0pO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB4ID0gLU1hdGguc2luKHhBbmdsZSkgKiBNYXRoLnNpbih5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB5ID0gLU1hdGguY29zKHhBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHogPSArTWF0aC5zaW4oeEFuZ2xlKSAqIE1hdGguY29zKHlBbmdsZSkgKiBzZWNvbmRSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkMyhvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLCBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLCBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgbW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGVDb29yZGluYXRlID0gc2Vjb25kKHRoaXMuYW5nbGVDb29yZGluYXRlcyksXG4gICAgICAgICAgeEFuZ2xlID0gc2Vjb25kQW5nbGVDb29yZGluYXRlOyAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlQ29vcmRpbmF0ZSA9IGZpcnN0KHRoaXMuYW5nbGVDb29yZGluYXRlcyksXG4gICAgICAgICAgeUFuZ2xlID0gLWZpcnN0QW5nbGVDb29yZGluYXRlOyAvLy9cblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHtcbiAgICBjb25zdCB4QW5nbGUgPSB0aGlzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IHRoaXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgekFuZ2xlID0gdGhpcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICBhbmdsZXMgPSBbXG4gICAgICAgICAgICB4QW5nbGUsXG4gICAgICAgICAgICB5QW5nbGUsXG4gICAgICAgICAgICB6QW5nbGVcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbiAgXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgIXRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG5cbiAgICBpZiAoIXNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVBbmdsZUNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHNjYWxhciA9IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDModGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzID0gc2NhbGUzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZDModGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMsIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgYW5nbGVDb29yZGluYXRlcyA9IElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG5cbmNvbnN0IHRpbHQgPSBUaWx0LmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGlsdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgRElTVEFOQ0VfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gPSBjb25zdGFudHM7IFxuXG5jbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBESVNUQU5DRV9TQ0FMQVI7XG4gICAgXG4gICAgdGhpcy5kaXN0YW5jZSAtPSBkZWx0YSAqIHNjYWxhcjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9tYXNrJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza2luZyA9IGZhbHNlOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZyk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguc2xpY2UoKTsgLy8vXG5cbiAgICAgICAgdmVydGV4UG9zaXRpb25zLnB1c2godmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgICB9LCB2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlMyhub3JtYWwpO1xuXG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpIHtcbiAgICBsZXQgdmVydGV4SW5kZXggPSAwO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCkge1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXhlcykgeyAgLy8vXG4gICAgICAgICAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlc0FuZEluZGV4ZXModmVydGljZXMsIGluZGV4ZXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtLCBjb2xvdXIpIHtcbiAgICBzdXBlcihmYWNldHMsIHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykge1xuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgIGlmICghbWFza2luZykge1xuICAgICAgdGhpcy5yZW5kZXIoY29sb3VyUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cixcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCkge1xuICAgICAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBpbWFnZU5hbWUpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykge1xuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICBcbiAgICBpZiAoIW1hc2tpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyKHRleHR1cmVSZW5kZXJlcik7XG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIodGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRoaXMuY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgaW1hZ2VOYW1lc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uc0xlbmd0aCAvIDQsICAvLy9cbiAgICAgICAgICBpbWFnZU5hbWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1hZ2VOYW1lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaW1hZ2VOYW1lcy5wdXNoKHRoaXMuaW1hZ2VOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZENhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBpbWFnZU5hbWUpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0RmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSAgY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudEZhY2V0cyA9IGNoaWxkRWxlbWVudC5nZXRGYWNldHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHVzaChmYWNldHMsIGNoaWxkRWxlbWVudEZhY2V0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuICBcbiAgZ2V0TWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNraW5nID0gdHJ1ZTsgIC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNraW5nKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLmdldE1hc2tpbmdGYWNldHMoKTtcblxuICAgIG1hc2tpbmdGYWNldHMuZm9yRWFjaChmdW5jdGlvbihtYXNraW5nRmFjZXQpIHtcbiAgICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICAgIG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKTtcbiAgICAgIH0pO1xuXG4gICAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICAgIH0pO1xuICAgIFxuICAgIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMuY29sb3VyUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbShjb2xvdXJSZW5kZXJlclByb2dyYW0pO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKHRleHR1cmVSZW5kZXJlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLnJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcblxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBjYW52YXMpLFxuICAgICAgICAgIHRyYW5zZm9ybXMgPSBbXTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaGFwZXM6IHJlcXVpcmUoJy4vZXhhbXBsZXMvc2hhcGVzJyksXG4gIG1hc2tpbmc6IHJlcXVpcmUoJy4vZXhhbXBsZXMvbWFza2luZycpLFxuICBjb250YWluZXJIb3VzZTogcmVxdWlyZSgnLi9leGFtcGxlcy9jb250YWluZXJIb3VzZScpLFxuICB0aW1iZXJGcmFtZWRIb3VzZTogcmVxdWlyZSgnLi9leGFtcGxlcy90aW1iZXJGcmFtZWRIb3VzZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRpY2VzLCBkZWZhdWx0SW5kZXhlcyB9ID0gY3Vib2lkO1xuXG5jbGFzcyBDb2xvdXJlZEN1Ym9pZCBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyA9IGRlZmF1bHRWZXJ0aWNlcywgaW5kZXhlcyA9IGRlZmF1bHRJbmRleGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ3Vib2lkID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcyk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN1Ym9pZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3lsaW5kZXIgPSByZXF1aXJlKCcuLi9jeWxpbmRlcicpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgeyBkZWZhdWx0VmVydGljZXMsIGRlZmF1bHRJbmRleGVzIH0gPSBjeWxpbmRlcjtcblxuY2xhc3MgQ29sb3VyZWRDeWxpbmRlciBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyA9IGRlZmF1bHRWZXJ0aWNlcywgaW5kZXhlcyA9IGRlZmF1bHRJbmRleGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ3lsaW5kZXIgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRDeWxpbmRlciwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN5bGluZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0VmVydGljZXMgPSBbXG4gIFxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcblxuICAgICAgICBbIDAsIDAsIDEgXSxcbiAgICAgICAgWyAxLCAwLCAxIF0sXG4gICAgICAgIFsgMSwgMSwgMSBdLFxuICAgICAgICBbIDAsIDEsIDEgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbmRleGVzID0gW1xuICBcbiAgICAgICAgWyAwLCAzLCAxIF0sXG4gICAgICAgIFsgMiwgMSwgMyBdLFxuICBcbiAgICAgICAgWyA0LCA1LCA2IF0sXG4gICAgICAgIFsgNiwgNywgNCBdLFxuICBcbiAgICAgICAgWyAwLCA0LCA3IF0sXG4gICAgICAgIFsgNywgMywgMCBdLFxuICBcbiAgICAgICAgWyA1LCAxLCA2IF0sXG4gICAgICAgIFsgMiwgNiwgMSBdLFxuICBcbiAgICAgICAgWyAzLCA3LCA2IF0sXG4gICAgICAgIFsgNiwgMiwgMyBdLFxuICBcbiAgICAgICAgWyAwLCA1LCA0IF0sXG4gICAgICAgIFsgNSwgMCwgMSBdLFxuICBcbiAgICAgIF07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWZhdWx0VmVydGljZXM6IGRlZmF1bHRWZXJ0aWNlcyxcbiAgZGVmYXVsdEluZGV4ZXM6IGRlZmF1bHRJbmRleGVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBDWUxJTkRFUl9TSURFUyB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBkZWZhdWx0SW5kZXhlcyA9IGNhbGN1bGF0ZURlZmF1bHRJbmRleGVzKCksXG4gICAgICBkZWZhdWx0VmVydGljZXMgPSBjYWxjdWxhdGVEZWZhdWx0VmVydGljZXMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRJbmRleGVzOiBkZWZhdWx0SW5kZXhlcyxcbiAgZGVmYXVsdFZlcnRpY2VzOiBkZWZhdWx0VmVydGljZXNcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURlZmF1bHRJbmRleGVzKCkge1xuICBjb25zdCBkZWZhdWx0SW5kZXhlcyA9IFtdLFxuICAgICAgICBzaWRlcyA9IENZTElOREVSX1NJREVTLFxuICAgICAgICBkZWZhdWx0SW5kZXhDb3VudCA9IHNpZGVzICogMjtcblxuICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgc2lkZXM7IGNvdW50KyspIHtcbiAgICBjb25zdCBkZWZhdWx0SW5kZXggPSBjb3VudCAqIDI7XG5cbiAgICBkZWZhdWx0SW5kZXhlcy5wdXNoKFsgKGRlZmF1bHRJbmRleCArIDEpICUgZGVmYXVsdEluZGV4Q291bnQsIChkZWZhdWx0SW5kZXggKyAwKSAlIGRlZmF1bHRJbmRleENvdW50LCAoZGVmYXVsdEluZGV4ICsgMikgJSBkZWZhdWx0SW5kZXhDb3VudCBdKTtcbiAgICBkZWZhdWx0SW5kZXhlcy5wdXNoKFsgKGRlZmF1bHRJbmRleCArIDIpICUgZGVmYXVsdEluZGV4Q291bnQsIChkZWZhdWx0SW5kZXggKyAzKSAlIGRlZmF1bHRJbmRleENvdW50LCAoZGVmYXVsdEluZGV4ICsgMSkgJSBkZWZhdWx0SW5kZXhDb3VudCBdKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0SW5kZXhlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGVmYXVsdFZlcnRpY2VzKCkge1xuICBjb25zdCBkZWZhdWx0VmVydGljZXMgPSBbXSxcbiAgICAgICAgc2lkZXMgPSBDWUxJTkRFUl9TSURFUyxcbiAgICAgICAgc3RlcCA9IDIgKiBNYXRoLlBJIC8gc2lkZXM7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IHNpZGVzOyBjb3VudCsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBzdGVwICogY291bnQsXG4gICAgICAgICAgYW5nbGVDb3NpbmUgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgYW5nbGVTaW5lID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgIHRvcERlZmF1bHRWZXJ0ZXggPSBbXG4gICAgICAgICAgICAoIGFuZ2xlQ29zaW5lICsgMSApIC8gMixcbiAgICAgICAgICAgICggYW5nbGVTaW5lICsgMSApIC8gMixcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdLFxuICAgICAgICAgIGJvdHRvbURlZmF1bHRWZXJ0ZXggPSBbXG4gICAgICAgICAgICAoIGFuZ2xlQ29zaW5lICsgMSApIC8gMixcbiAgICAgICAgICAgICggYW5nbGVTaW5lICsgMSApIC8gMixcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdO1xuXG4gICAgZGVmYXVsdFZlcnRpY2VzLnB1c2godG9wRGVmYXVsdFZlcnRleCk7XG4gICAgZGVmYXVsdFZlcnRpY2VzLnB1c2goYm90dG9tRGVmYXVsdFZlcnRleCk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZlcnRpY2VzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyB9ID0gY3Vib2lkO1xuXG5jbGFzcyBUZXh0dXJlZEN1Ym9pZCBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ3Vib2lkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZnJhbWUnKSxcbiAgICAgIFJvb2ZHYXJkZW4gPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4nKSxcbiAgICAgIEZpcnN0Rmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0JyksXG4gICAgICBUaGlyZEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci90aGlyZCcpLFxuICAgICAgU2Vjb25kRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZCcpLFxuICAgICAgRm91bmRhdGlvbnMgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zJyksXG4gICAgICBNYWluQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluJyksXG4gICAgICBMb3dlckJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbG93ZXInKSxcbiAgICAgIEJlZHJvb21CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20nKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPEZvdW5kYXRpb25zIC8+XG4gICAgICA8Rmlyc3RGbG9vciAvPlxuICAgICAgPFNlY29uZEZsb29yIC8+XG4gICAgICA8VGhpcmRGbG9vciAvPlxuICAgICAgPFJvb2ZHYXJkZW4gLz5cbiAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgPExvd2VyQmFsY29ueSAvPlxuICAgICAgPEJlZHJvb21CYWxjb255IC8+XG4gICAgICA8RnJhbWUgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEJhbGNvbnlTZWN0aW9uID0gcmVxdWlyZSgnLi4vYmFsY29ueS9zZWN0aW9uJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBCZWRyb29tQmFsY29ueSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMCwgMTksIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNCwgMTksIDAgXX0gLz4sXG5cbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbICAgICAgICAgMCwgMTksIDAgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMTksIDAgXX0gbGVuZ3RoPXsxNn0gcm90YXRpb25zPXtbIDAsIC05MCwgMCBdfS8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCZWRyb29tQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCZWRyb29tQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBMb3dlckJhbGNvbnkgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDAsIDkuNSwgMTYgICAgICAgICAgIF19IGxlbmd0aD17OH0gLz4sXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyA0MCwgOS41LCAzMi10aGlja25lc3MgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDQ4LCA5LjUsIDE2ICAgICAgICAgICBdfSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwXX0gbGVuZ3RoPXsxNn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExvd2VyQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb3dlckJhbGNvbnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKSxcbiAgICAgIFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFJhaWxpbmc7XG5cbmNsYXNzIE1haW5CYWxjb255IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0MCwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQ0LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMzYsIDE5LCAgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAzMiwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDI4LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNDAsIDE5LCAxNiBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0NCwgMTksIDE2IF19IC8+LFxuXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyAyOCwgMTksICAgICAgICAgICAgMCBdfSBsZW5ndGg9ezIwfSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDIwLCAxOSwgMzItdGhpY2tuZXNzIF19IGxlbmd0aD17Mjh9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDgsIDE5LCAwICAgICAgICAgICAgXX0gcm90YXRpb25zPXtbIDAsIC05MCwgMF19IGxlbmd0aD17MzJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYWluQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYWluQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9wUmFpbCA9IHJlcXVpcmUoJy4vcmFpbGluZy90b3BSYWlsJyksXG4gICAgICBVcHJpZ2h0cyA9IHJlcXVpcmUoJy4vcmFpbGluZy91cHJpZ2h0cycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBUb3BSYWlsLFxuICAgICAgb3ZlcmFsbEhlaWdodCA9IDM7XG5cbmNsYXNzIFJhaWxpbmcgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IC8+LFxuXG4gICAgICA8VXByaWdodHMgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IHRoaWNrbmVzcz17dGhpY2tuZXNzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhSYWlsaW5nLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJhaWxpbmcsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjEsXG4gICAgICB0aGlja25lc3MgPSAwLjQsXG4gICAgICBjb2xvdXIgPSBbIDAuNSwgMC41LCAwLjUsIDFdO1xuXG5jb25zdCBUb3BSYWlsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgZGVwdGggPSB0aGlja25lc3MsIC8vL1xuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgb3ZlcmFsbEhlaWdodCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3QgZGlhbWV0ZXIgPSAwLjEyNSxcbiAgICAgIHJhZGl1cyA9IGRpYW1ldGVyIC8gMixcbiAgICAgIGNvbG91ciA9IFsgMC41LCAwLjUsIDAuNSwgMV07XG5cbmNvbnN0IFVwcmlnaHQgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgaGVpZ2h0ID0gZGlhbWV0ZXIsIC8vL1xuICAgICAgICBkZXB0aCA9IG92ZXJhbGxIZWlnaHQ7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e1sgLTkwLCAwLCAwIF19IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oVXByaWdodCwge1xuICByYWRpdXM6IHJhZGl1c1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVXByaWdodCA9IHJlcXVpcmUoJy4vdXByaWdodCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgcmFkaXVzIH0gPSBVcHJpZ2h0O1xuXG5jbGFzcyBVcHJpZ2h0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxIZWlnaHQsIGxlbmd0aCwgdGhpY2tuZXNzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0ZXAgPSAwLjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW3N0ZXAgKiBpbmRleCAtIHJhZGl1cywgMCwgdGhpY2tuZXNzIC8gMiArIHJhZGl1c107XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPFVwcmlnaHQgcG9zaXRpb249e3Bvc2l0aW9ufSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVXByaWdodHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgT3Blbk1lc2ggPSByZXF1aXJlKCcuL3NlY3Rpb24vb3Blbk1lc2gnKSxcbiAgICAgIExvbmdFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UvbG9uZycpLFxuICAgICAgU2hvcnRFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2Uvc2hvcnQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IGhlaWdodCwgdGhpY2tuZXNzIH0gPSBFZGdlLFxuICAgICAgd2lkdGggPSA0LFxuICAgICAgZGVwdGggPSAxNjtcblxuY2xhc3MgQmFsY29ueVNlY3Rpb24gZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxMb25nRWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgIDAsIC1oZWlnaHQsICAgICAgICAgICAgMCBdfSBkZXB0aD17ZGVwdGh9Lz4sXG4gICAgICA8TG9uZ0VkZ2UgcG9zaXRpb249e1sgd2lkdGgtdGhpY2tuZXNzLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gZGVwdGg9e2RlcHRofS8+LFxuXG4gICAgICA8U2hvcnRFZGdlIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAwLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gd2lkdGg9e3dpZHRofS8+LFxuICAgICAgPFNob3J0RWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgMCwgLWhlaWdodCwgMTYtdGhpY2tuZXNzIF19IHdpZHRoPXt3aWR0aH0vPixcblxuICAgICAgPE9wZW5NZXNoIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMCwgdGhpY2tuZXNzIF19IG92ZXJhbGxXaWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBvdmVyYWxsRGVwdGg9e2RlcHRoIC0gMiAqIHRoaWNrbmVzc30gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQmFsY29ueVNlY3Rpb24sIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFsY29ueVNlY3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjI1LFxuICAgICAgdGhpY2tuZXNzID0gMC4xO1xuXG5jb25zdCBFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgd2lkdGgsIGRlcHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZWRDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBwb3NpdGlvbj17cG9zaXRpb259IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cblxuICApO1xufTtcblxuT2JqZWN0LmFzc2lnbihFZGdlLCB7XG4gIGhlaWdodDogaGVpZ2h0LFxuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IExvbmdFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgZGVwdGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxFZGdlIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9uZ0VkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBFZGdlO1xuXG5jb25zdCBTaG9ydEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgZGVwdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2UgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG9ydEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyk7XG5cbmNvbnN0IG92ZXJhbGxIZWlnaHQgPSAwLjI1LFxuICAgICAgb3ZlcmFsbFRoaWNrbmVzcyA9IDAuMDI1LFxuICAgICAgd2lkdGh3aXNlQ291bnQgPSAxMCxcbiAgICAgIGRlcHRod2lzZUNvdW50ID0gNSxcbiAgICAgIGNvbG91ciA9IFsgMC42LCAwLjYsIDAuNiwgMTAgXTtcblxuY2xhc3MgT3Blbk1lc2ggZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsV2lkdGgsIG92ZXJhbGxEZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHdpZHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzdGVwID0gb3ZlcmFsbFdpZHRoIC8gd2lkdGh3aXNlQ291bnQsXG4gICAgICAgICAgICB3aWR0aCA9IG92ZXJhbGxUaGlja25lc3MsICAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxEZXB0aDtcblxuICAgICAgZWxlbWVudHMucHVzaChcblxuICAgICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbc3RlcCAqIGluZGV4LCAtaGVpZ2h0LCAwXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofS8+XG5cbiAgICAgIClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgZGVwdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsRGVwdGggLyBkZXB0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gb3ZlcmFsbEhlaWdodCAvIDIsIC8vL1xuICAgICAgICAgICAgd2lkdGggPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBoZWlnaHQgPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxXaWR0aDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN5bGluZGVyIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAwLCAtMyAqIGRpYW1ldGVyIC8gMiwgc3RlcCAqIGluZGV4IF19IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE9wZW5NZXNoLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5NZXNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFJvb2YgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9yb29mJyksXG4gICAgICBCYWNrUGFuZWwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9iYWNrJyksXG4gICAgICBGcm9udFBhbmVsID0gcmVxdWlyZSgnLi9jb250YWluZXIvcGFuZWwvZnJvbnQnKSxcbiAgICAgIFNpZGVQYW5lbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9zaWRlQScpLFxuICAgICAgU2lkZVBhbmVsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3BhbmVsL3NpZGVCJyksXG4gICAgICBUb3BSYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3RvcFJhaWxzJyksXG4gICAgICBCb3R0b21SYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2JvdHRvbVJhaWxzJyksXG4gICAgICBDb3JuZXJQb3N0cyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lclBvc3RzJyksXG4gICAgICBDb3JuZXJGaXR0aW5ncyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lckZpdHRpbmdzJyk7XG5cbmNvbnN0IG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gOS41O1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxGcm9udFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8QmFja1BhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8U2lkZVBhbmVsQSBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPFNpZGVQYW5lbEIgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxUb3BSYWlscyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPEJvdHRvbVJhaWxzIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8Q29ybmVyUG9zdHMgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5ncyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHRoaWNrbmVzcyA9IDgvMTIsXG4gICAgICBpbmRlbnQgPSAxLzEyO1xuXG5jbGFzcyBCb3R0b21SYWlsIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgICBkZXB0aCA9IHRoaWNrbmVzcyAtIDIqaW5kZW50LFxuICAgICAgICAgIGhlaWdodCA9IHRoaWNrbmVzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgaW5kZW50IF07XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSBjb2xvdXI9e2NvbG91cn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJvdHRvbVJhaWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQm90dG9tUmFpbCwge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm90dG9tUmFpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQm90dG9tUmFpbCA9IHJlcXVpcmUoJy4vYm90dG9tUmFpbCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBCb3R0b21SYWlsO1xuXG5jbGFzcyBCb3R0b21SYWlscyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Qm90dG9tUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgICAwIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxCb3R0b21SYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIGxlbmd0aC10aGlja25lc3MgXX0gbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLXRoaWNrbmVzcywgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb3R0b21SYWlscywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3R0b21SYWlscztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgd2lkdGggPSA5LzEyLFxuICAgICAgaGVpZ2h0ID0gOS8xMixcbiAgICAgIGRlcHRoID0gOS8xMjtcblxuY29uc3QgQ29ybmVyRml0dGluZyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgcG9zaXRpb24gfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyRml0dGluZywge1xuICB3aWR0aDogd2lkdGgsXG4gIGhlaWdodDogaGVpZ2h0LFxuICBkZXB0aDogZGVwdGhcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvcm5lckZpdHRpbmcgPSByZXF1aXJlKCcuL2Nvcm5lckZpdHRpbmcnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0IH0gPSBDb3JuZXJGaXR0aW5nO1xuXG5jbGFzcyBDb3JuZXJGaXR0aW5ncyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAwLCAwIF19IC8+LFxuICAgICAgPENvcm5lckZpdHRpbmcgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQgLSBoZWlnaHQsIDAgXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgMCBdfSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCBvdmVyYWxsSGVpZ2h0IC0gaGVpZ2h0LCAwIF19IC8+LFxuXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lckZpdHRpbmdzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmdzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHdpZHRoID0gOC8xMixcbiAgICAgIGRlcHRoID0gOC8xMixcbiAgICAgIGluZGVudCA9IDEvMTI7XG5cbmNsYXNzIENvcm5lclBvc3QgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBvc2l0aW9uID0gWyBpbmRlbnQsIDAsIGluZGVudCBdLFxuICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQ7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGggLSAyKmluZGVudH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aCAtIDIqaW5kZW50fSBwb3NpdGlvbj17cG9zaXRpb259IGNvbG91cj17Y29sb3VyfSAvPiwgLy8vXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lclBvc3QsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyUG9zdCwge1xuICB3aWR0aDogd2lkdGgsXG4gIGRlcHRoOiBkZXB0aFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29ybmVyUG9zdCA9IHJlcXVpcmUoJy4vY29ybmVyUG9zdCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgd2lkdGgsIGRlcHRoIH0gPSBDb3JuZXJQb3N0O1xuXG5jbGFzcyBDb3JuZXJQb3N0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29ybmVyUG9zdHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXs0MH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3J0eUZvb3RDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRSaWRnZSA9IHJlcXVpcmUoJy4vcGFuZWwvY29sb3VyZWRSaWRnZScpO1xuXG5jbGFzcyBQYW5lbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IDAuMjUsXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCwgLy8vXG4gICAgICAgICAgZGVwdGggPSAwLjEyNSxcbiAgICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdLFxuICAgICAgICAgIHN0ZXAgPSAxLFxuICAgICAgICAgIGluZGVudCA9IDAuMjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQgLSAxOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtkZXB0aCtpbmRlbnQsIDAsIHN0ZXAqaW5kZXggKyBzdGVwLzIsIDBdO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZFJpZGdlIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+LFxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFuZWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgQmFja1BhbmVsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8UGFuZWwgbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+ICAvLy9cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBbXG5cbiAgICAgICAgWyAwLjAsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMC41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAwLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMS41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDEuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAwLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAxLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMi41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDIuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAxLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAyLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMy41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDMuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAyLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAzLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgNC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDQuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAzLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIENvbG91cmVkUmlkZ2UgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFJpZGdlLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUmlkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgRnJvbnRQYW5lbCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCA5MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICAgIDxQYW5lbCBsZW5ndGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz4gIC8vL1xuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb250UGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgU2lkZVBhbmVsQSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxQYW5lbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlUGFuZWxBO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW5lbCA9IHJlcXVpcmUoJy4uL3BhbmVsJyk7XG5cbmNvbnN0IFNpZGVQYW5lbEIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBwb3NpdGlvbiA9IFsgb3ZlcmFsbFdpZHRoLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCAxODAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVQYW5lbEI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGNvbnN0IENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3QgaW5kZW50ID0gMS8xMjtcblxuY29uc3QgUm9vZiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gb3ZlcmFsbFdpZHRoIC0gMippbmRlbnQsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCAtIDIqaW5kZW50LFxuICAgICAgICBwb3NpdGlvbiA9IFsgaW5kZW50LCBvdmVyYWxsSGVpZ2h0IC0gaW5kZW50LCBsZW5ndGggLSBpbmRlbnQgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAtOTAsIDAsIDAgXSxcbiAgICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAxIF07XG5cbiAgLy8gcmV0dXJuIChcbiAgLy9cbiAgLy8gICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cbiAgLy9cbiAgLy8gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vZjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKTtcblxuY29uc3QgY29sb3VyID0gWyAxLCAxLCAxLCAxIF0sXG4gICAgICB0aGlja25lc3MgPSA4LzEyLFxuICAgICAgaW5kZW50ID0gMS8xMjtcblxuY2xhc3MgVG9wUmFpbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IGxlbmd0aCwgLy8vXG4gICAgICAgICAgZGVwdGggPSB0aGlja25lc3MgLSAyKmluZGVudCxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlja25lc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBbIDAsIC1oZWlnaHQsIGluZGVudCBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUb3BSYWlsLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRvcFJhaWwgPSByZXF1aXJlKCcuL3RvcFJhaWwnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gVG9wUmFpbDtcblxuY2xhc3MgVG9wUmFpbHMgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9wUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCBvdmVyYWxsSGVpZ2h0LCAgICAgICAgICAgICAgICAwIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxUb3BSYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQsIGxlbmd0aC10aGlja25lc3MgXX0gbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IC8+LFxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLXRoaWNrbmVzcywgb3ZlcmFsbEhlaWdodCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUb3BSYWlscywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb3BSYWlscztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbmNvbnN0IFR3ZW50eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXsyMH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VudHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBGaXJzdEZsb29yIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDgsIDAsIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDgsIDAsIDI0IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDAsIDE2IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDAsICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRmlyc3RGbG9vciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaXJzdEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBTZWNvbmRGbG9vciBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICAwLCA5LjUsIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDAsIDkuNSwgMjQgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgOS41LCAxNiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCA5LjUsICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2Vjb25kRmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vjb25kRmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgVHdlbnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci90d2VudHlGb290Jyk7XG5cbmNsYXNzIFRoaXJkRmxvb3IgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgMCwgMTksIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDAsIDE5LCAyNCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAxOSwgMTYgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMTksICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGhpcmRGbG9vciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaGlyZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbmNyZXRlU2xhYiA9IHJlcXVpcmUoJy4vZm91bmRhdGlvbnMvY29uY3JldGVTbGFiJyk7XG5cbmNsYXNzIEZvdW5kYXRpb25zIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgLTAuNSwgLTEsIC0wLjUgXX0gd2lkdGg9ezEyLjV9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgICAyNCwgLTEsIC0wLjUgXX0gd2lkdGg9ezI0LjR9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRm91bmRhdGlvbnMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm91bmRhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBDb25jcmV0ZVNsYWIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cImNvbmNyZXRlLmpwZ1wiIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmNyZXRlU2xhYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9mcmFtZS9zdGVlbFNlY3Rpb24nKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGcmFtZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgICAgaGVpZ2h0ID0gMjksXG4gICAgICAgICAgZGVwdGggPSAzMjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG5cbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbICAgICAgLTAuNSwgaGVpZ2h0LTEsIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXtkZXB0aH0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAtMC41LCBoZWlnaHQtMSwgICAgICAtMC41IF0gfSB3aWR0aD17d2lkdGh9IGhlaWdodD17MX0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsIGRlcHRoLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnJhbWUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlZWxTZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBjb25zdCBUZXh0dXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyk7XG5cbmNvbnN0IFJvb2ZHYXJkZW4gPSAocHJvcGVydGllcykgPT4ge1xuICAvLyByZXR1cm4gKFxuICAvL1xuICAvLyAgIDxUZXh0dXJlZFBsYW5lIHdpZHRoPXsyMH0gaGVpZ2h0PXsxNn0gZGVwdGg9ezB9IHBvc2l0aW9uPXtbIDIwLCAxOS4wMSwgMzIgXX0gcm90YXRpb25zPXtbIC05MCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgLz5cbiAgLy9cbiAgLy8gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vZkdhcmRlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IG1hc2tpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAoKCkgPT4gXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gICAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAwLCAxLCAxIF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1NjZW5lPlxuXG4gICkoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFza2luZztcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgVGV4dHVyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuL2NvbW1vbi9jb2xvdXJlZC9jeWxpbmRlcicpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBzaGFwZXMgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTB9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxDb2xvdXJlZEN5bGluZGVyIGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG5cbi8qXG4gPFRleHR1cmVkQ3Vib2lkIGNvbG91cj17WyAwLCAxLCAxLCAxIF19IHBvc2l0aW9uPXtbIDAsIDAsIC0xIF19IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuICovIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vdGltYmVyRnJhbWVkSG91c2UvZnJhbWUnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgdGltYmVyRnJhbWVkSG91c2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPEZyYW1lIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aW1iZXJGcmFtZWRIb3VzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9mcmFtZS9zdGVlbFNlY3Rpb24nKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGcmFtZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgICAgaGVpZ2h0ID0gMjksXG4gICAgICAgICAgZGVwdGggPSAzMjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG5cbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbICAgICAgLTAuNSwgaGVpZ2h0LTEsIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXtkZXB0aH0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAtMC41LCBoZWlnaHQtMSwgICAgICAtMC41IF0gfSB3aWR0aD17d2lkdGh9IGhlaWdodD17MX0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsIGRlcHRoLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnJhbWUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlZWxTZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi9mYWNldC9lZGdlJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuICBcbiAgZ2V0TWlkUG9pbnQoKSB7XG4gICAgY29uc3QgbWlkUG9pbnQgPSB0aGlzLnZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludCwgdmVydGV4KSB7XG4gICAgICBjb25zdCBzY2FsZWRWZXJ0ZXggPSBzY2FsZTModmVydGV4LCAxLzMpO1xuICAgICAgXG4gICAgICBtaWRQb2ludCA9IGFkZDMobWlkUG9pbnQsIHNjYWxlZFZlcnRleCk7XG4gICAgICBcbiAgICAgIHJldHVybiBtaWRQb2ludDtcbiAgICB9LCBbIDAsIDAsIDAgXSk7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50O1xuICB9XG4gIFxuICBpc1Rvb1NtYWxsKCkge1xuICAgIGNvbnN0IG5vcm1hbExlbmd0aCA9IGxlbmd0aDModGhpcy5ub3JtYWwpLFxuICAgICAgICAgIG5vcm1hbExlbmd0aEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKG5vcm1hbExlbmd0aCksXG4gICAgICAgICAgdG9vU21hbGwgPSBub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cbiAgICBcbiAgICByZXR1cm4gdG9vU21hbGw7XG4gIH1cbiAgXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IGVkZ2VzSW5YWVBsYW5lID0gbWFza2luZ0ZhY2V0LmdldEVkZ2VzSW5YWVBsYW5lKCksXG4gICAgICAgICAgbWlkUG9pbnQgPSB0aGlzLmdldE1pZFBvaW50KCksXG4gICAgICAgICAgbWlkUG9pbnRUb09uZVNpZGVPZkVkZ2VzSW5YWVBsYW5lID0gaXNNaWRQb2ludFRvT25lU2lkZU9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFRvT25lU2lkZU9mRWRnZXNJblhZUGxhbmU7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG4gIFxuICBhcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcykge1xuICAgIHRoaXMudmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIHRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgICAgICAgdmVydGV4ID0gdHJhbnNmb3JtKHZlcnRleCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG4gIFxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cblxuICByb3RhdGVBYm91dFpBeGlzKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMudmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIHZlcnRleCA9IHJvdGF0ZUFib3V0WkF4aXModmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cbiAgXG4gIHNwbGl0KGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoWmVyb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJzZWN0aW9uID0gZmlyc3QoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgc2Vjb25kSW50ZXJzZWN0aW9uID0gc2Vjb25kKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0SW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgodGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4LCBzZWNvbmRJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKHRoaXJkVmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0RmFjZXRUb29TbWFsbCA9IGZpcnN0RmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHNlY29uZEZhY2V0VG9vU21hbGwgPSBzZWNvbmRGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgdGhpcmRGYWNldFRvb1NtYWxsID0gdGhpcmRGYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICBpZiAoIWZpcnN0RmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKGZpcnN0RmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghc2Vjb25kRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNlY29uZEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXJkRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHRoaXJkRmFjZXQpO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdEludGVyc2VjdGlvbiA9IGZpcnN0KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChmaXJzdFZlcnRleCwgc2Vjb25kVmVydGV4LCBmaXJzdEludGVyc2VjdGlvbiksXG4gICAgICAgICAgZmlyc3RWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0VmVydGV4LFxuICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHNlY29uZFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kVmVydGV4LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZpcnN0RmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0RmFjZXRUb29TbWFsbCA9IGZpcnN0RmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHNlY29uZEZhY2V0VG9vU21hbGwgPSBzZWNvbmRGYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICBpZiAoIWZpcnN0RmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKGZpcnN0RmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghc2Vjb25kRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNlY29uZEZhY2V0KTtcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhaZXJvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXM7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBlZGdlLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRleC5zbGljZSgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5vcm1hbCA9IHRoaXMubm9ybWFsLnNsaWNlKCksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBmYWNldCA9IG5ldyBGYWNldCh2ZXJ0aWNlcywgbm9ybWFsKTtcblxuICAgIHJldHVybiBmYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXNBbmRJbmRleGVzKHZlcnRpY2VzLCBpbmRleGVzKSB7XG4gICAgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4LCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZGlyZWN0aW9uID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZGlyZWN0aW9uLCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXggPSBhZGQzKHN0YXJ0VmVydGV4LCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZShmdW5jdGlvbihudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFRvT25lU2lkZU9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0T2ZFZGdlc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lKG1pZFBvaW50LCBlZGdlc0luWFlQbGFuZSksXG4gICAgICAgIG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmUgPSBpc01pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSxcbiAgICAgICAgbWlkUG9pbnRUb09uZVNpZGVPZkVkZ2VzSW5YWVBsYW5lID0gbWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lIHx8IG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmU7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFRvT25lU2lkZU9mRWRnZXNJblhZUGxhbmU7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lKG1pZFBvaW50LCBlZGdlc0luWFlQbGFuZSkge1xuICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUgPSBlZGdlc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lLCBlZGdlSW5YWVBsYW5lKSB7XG4gICAgaWYgKG1pZFBvaW50VG9UaGVMZWZ0T2ZFZGdlc0luWFlQbGFuZSkge1xuICAgICAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VJblhZUGxhbmUgPSBlZGdlSW5YWVBsYW5lLmlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpO1xuXG4gICAgICBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZUluWFlQbGFuZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmUgPSBlZGdlc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24obWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZSwgZWRnZUluWFlQbGFuZSkge1xuICAgIGlmIChtaWRQb2ludFRvVGhlUmlnaHRPZkVkZ2VzSW5YWVBsYW5lKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFRvVGhlUmlnaHRPZkVkZ2VJblhZUGxhbmUgPSBlZGdlSW5YWVBsYW5lLmlzTWlkUG9pbnRUb1RoZVJpZ2h0KG1pZFBvaW50KTtcblxuICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZSA9IG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZUluWFlQbGFuZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZTtcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMgfSA9IHZlY3RvclV0aWxpdGllcztcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXgsIHN0YXJ0VmVydGV4KSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL2VkZ2UnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBwcm9qZWN0T250b1hZUGxhbmUgfSA9IHZlcnRleFV0aWxpdGllcztcblxuY2xhc3MgRWRnZUluWFlQbGFuZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSB7XG4gICAgbWlkUG9pbnQgPSBwcm9qZWN0T250b1hZUGxhbmUobWlkUG9pbnQpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBtaWRQb2ludERpcmVjdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludCwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdCA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50RGlyZWN0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzUHJvZHVjdCwgIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRUb1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFRvVGhlUmlnaHQobWlkUG9pbnQpIHtcbiAgICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCksXG4gICAgICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0ID0gIW1pZFBvaW50VG9UaGVMZWZ0OyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGFydFZlcnRleC5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgZWRnZUluWFlQbGFuZSA9IG5ldyBFZGdlSW5YWVBsYW5lKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2VJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFZGdlSW5YWVBsYW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRleCcpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4LCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgodGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCh0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgXG4gICAgZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgIGZhY2V0LnJvdGF0ZUFib3V0WkF4aXMoZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHNtYWxsZXJGYWNldCkge1xuICAgICAgc21hbGxlckZhY2V0LnJvdGF0ZUFib3V0WkF4aXMoYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzOyAgICBcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KTtcblxuICAgIGZhY2V0LnNwbGl0KGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuICBcbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gICAgaWYgKGVkZ2VOb25QYXJhbGxlbCkge1xuICAgICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IHRoaXMuY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlKSxcbiAgICAgICAgICAgIGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGVkZ2VJbnRlcnNlY3Rpb24pO1xuXG4gICAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UpIHtcbiAgICBjb25zdCBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgZWRnZVBvc2l0aW9uQ29tcG9uZW50cyA9IGVkZ2VQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcbiAgICBcbiAgICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZUluWFlQbGFuZShlZGdlSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZUluWFlQbGFuZVBvc2l0aW9uID0gZWRnZUluWFlQbGFuZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeChlZGdlSW5YWVBsYW5lKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZUFib3V0WkF4aXMoZWRnZUluWFlQbGFuZVBvc2l0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lSW5YWVBsYW5lO1xuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGludGVyc2VjdGlvbiA+IDAgKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoZWRnZUluWFlQbGFuZSkge1xuICBjb25zdCBlZGdlSW5YWVBsYW5lRXh0ZW50ID0gZWRnZUluWFlQbGFuZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdEVkZ2VJblhZUGxhbmVFeHRlbnQgPSBub3JtYWxpc2UzKGVkZ2VJblhZUGxhbmVFeHRlbnQpLFxuICAgICAgICB1bml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudHMgPSB1bml0RWRnZUluWFlQbGFuZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gK3NlY29uZFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAtZmlyc3RVbml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudCwgLy8vXG4gICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgIHMgPSBhbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuL3JlYWN0Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdSZWFjdCcsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpLFxuICAgICAgRWRnZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vZmFjZXQvZWRnZUluWFlQbGFuZScpLFxuICAgICAgVmVydGljYWxMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9mYWNldC92ZXJ0aWNhbExpbmVJblhZUGxhbmUnKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzSW5YWVBsYW5lLCB2ZXJ0aWNhbExpbmVzSW5YWVBsYW5lLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5lZGdlc0luWFlQbGFuZSA9IGVkZ2VzSW5YWVBsYW5lO1xuICAgIHRoaXMudmVydGljYWxMaW5lc0luWFlQbGFuZSA9IHZlcnRpY2FsTGluZXNJblhZUGxhbmU7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0RWRnZXNJblhZUGxhbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXNJblhZUGxhbmU7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzSW5YWVBsYW5lKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXNJblhZUGxhbmU7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7XG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCBmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHVubWFza2VkU21hbGxlckZhY2V0KSB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXNJblhZUGxhbmUuZm9yRWFjaChmdW5jdGlvbih2ZXJ0aWNhbExpbmVJblhZUGxhbmUpIHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuc3BsaXRGYWNldHMoZmFjZXRzKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihmYWNldE5vcm1hbCksXG4gICAgICAgICAgdmVydGljZXNJblhZUGxhbmUgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGVkZ2VzSW5YWVBsYW5lID0gY2FsY3VsYXRlRWRnZXNJblhZUGxhbmUodmVydGljZXNJblhZUGxhbmUpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXNJblhZUGxhbmUgPSBlZGdlc0luWFlQbGFuZS5tYXAoZnVuY3Rpb24oZWRnZUluWFlQbGFuZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21FZGdlSW5YWVBsYW5lKGVkZ2VJblhZUGxhbmUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KGVkZ2VzSW5YWVBsYW5lLCB2ZXJ0aWNhbExpbmVzSW5YWVBsYW5lLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzSW5YWVBsYW5lKHZlcnRpY2VzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IGVkZ2VzSW5YWVBsYW5lID0gdmVydGljZXNJblhZUGxhbmUubWFwKGZ1bmN0aW9uKHZlcnRleCwgaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4SW5YWVBsYW5lID0gdmVydGljZXNJblhZUGxhbmVbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4SW5YWVBsYW5lID0gdmVydGljZXNJblhZUGxhbmVbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIGVkZ2VJblhZUGxhbmUgPSBFZGdlSW5YWVBsYW5lLmZyb21TdGFydFZlcnRleEluWFlQbGFuZUFuZEVuZFZlcnRleEluWFlQbGFuZShzdGFydFZlcnRleEluWFlQbGFuZSwgZW5kVmVydGV4SW5YWVBsYW5lKTtcblxuICAgICAgICAgIHJldHVybiBlZGdlSW5YWVBsYW5lO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gIHJldHVybiBlZGdlc0luWFlQbGFuZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQ7XG5cbiAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgfSwgcHJvcGVydGllcyk7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBlbGVtZW50ID0gZnVuYyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpOyB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7IH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTsgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbk9iamVjdC5hc3NpZ24oUmVuZGVyZXIsIHtcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvYnVmZmVycycpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnNCdWZmZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9idWZmZXJzJyk7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuICBcbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuICBcbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXInKSxcbiAgICAgIENvbG91clJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtJyksXG4gICAgICBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gbWF4aW11bVZlcnRleEluZGV4O1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCArIDE7XG5cbiAgICB2ZXJ0ZXhJbmRleGVzID0gdmVydGV4SW5kZXhlcy5tYXAoZnVuY3Rpb24odmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleCArIG9mZnNldDtcbiAgICB9KTtcblxuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhpbXVtVmVydGV4SW5kZXgsIC4uLnZlcnRleEluZGV4ZXMpO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzO1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIG1heGltdW1WZXJ0ZXhJbmRleCA9IC0xLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpO1xuXG5jbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyk7XG5cbmNvbnN0IHsgc2FtcGxlck5hbWUgfSA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IG5vcm1hbE1hdHJpeE5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyBvZmZzZXRNYXRyaXhOYW1lLCByb3RhdGlvbk1hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb247ICAgIFxuICB9XG4gIFxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleENvbG91cicsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWU6IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24obGlnaHRpbmdTb3VyY2UsIHtcbiAgbm9ybWFsTWF0cml4TmFtZTogbm9ybWFsTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZTogdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9mZnNldE1hdHJpeE5hbWUgPSAndU9mZnNldE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0TWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7b2Zmc2V0TWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24ocG9zaXRpb25Tb3VyY2UsIHtcbiAgb2Zmc2V0TWF0cml4TmFtZTogb2Zmc2V0TWF0cml4TmFtZSxcbiAgcm90YXRpb25NYXRyaXhOYW1lOiByb3RhdGlvbk1hdHJpeE5hbWUsXG4gIHBvc2l0aW9uTWF0cml4TmFtZTogcG9zaXRpb25NYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZTogcHJvamVjdGlvbk1hdHJpeE5hbWUsXG4gIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZTogdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihmcmFnbWVudFNoYWRlclNvdXJjZSwge1xuICBzYW1wbGVyTmFtZTogc2FtcGxlck5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gJ2FUZXh0dXJlQ29vcmRpbmF0ZScsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lOiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcykgeyB0aGlzLnJlbmRlcmVyRGF0YS5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGNhbnZhcykge1xuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IFRFWFRVUkUwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHRhcmdldCA9IFRFWFRVUkUwLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIocHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7XG4gIGNvbnN0IGhhbGZBbmdsZVNpbmUgPSBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTtcblxuICByZXR1cm4gaGFsZkFuZ2xlU2luZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7XG4gIGNvbnN0IGhhbGZBbmdsZUNvc2luZSA9IE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpO1xuXG4gIHJldHVybiBoYWxmQW5nbGVDb3NpbmU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lOiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lLFxuICBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmU6IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSA9IGNvbnN0YW50cztcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAxLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZTogaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSxcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm86IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvXG59O1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBzcGxpY2UgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjaG9wKGVsZW1lbnRzLCBhcnJheUxlbmd0aCkge1xuICBjb25zdCBhcnJheXMgPSBbXSxcbiAgICAgICAgZWxlbWVudHNMZW5ndGggPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgIGFycmF5c0xlbmd0aCA9IGVsZW1lbnRzTGVuZ3RoIC8gYXJyYXlMZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5c0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBhcnJheUxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgIGFycmF5W29mZnNldF0gPSBlbGVtZW50c1tpbmRleCAqIGFycmF5TGVuZ3RoICsgb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBhcnJheXNbaW5kZXhdID0gYXJyYXk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuXG5mdW5jdGlvbiBkaWx1dGUoZWxlbWVudHMsIGFycmF5LCB0ZXN0KSB7XG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGVybXV0ZShlbGVtZW50cywgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBlbGVtZW50cy5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gZWxlbWVudHMuc2xpY2UoY3V0KTtcblxuICBlbGVtZW50cyA9IFsuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHNdO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoZnVuY3Rpb24oZWxlbWVudHMsIGFycmF5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG4gIH0sIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIGNob3A6IGNob3AsXG4gIGRpbHV0ZTogZGlsdXRlLFxuICBwZXJtdXRlOiBwZXJtdXRlLFxuICBmbGF0dGVuOiBmbGF0dGVuICBcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgRklFTERfT0ZfVklFVywgWl9ORUFSLCBaX0ZBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlkZW50aXR5NCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIG9mZnNldE1hdHJpeEZyb21PZmZzZXQob2Zmc2V0KSB7XG4gIGxldCBvZmZzZXRNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBvZmZzZXRNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldE1hdHJpeCwgb2Zmc2V0KTtcblxuICByZXR1cm4gb2Zmc2V0TWF0cml4O1xufVxuXG5mdW5jdGlvbiByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSB7XG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSxcbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGU7XG5cbiAgbGV0IHJvdGF0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgcm90YXRpb25NYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uTWF0cml4LCB4QW5nbGUsIFsxLCAwLCAwXSk7XG4gIHJvdGF0aW9uTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbk1hdHJpeCwgeUFuZ2xlLCBbMCwgMSwgMF0pO1xuICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25NYXRyaXgsIHpBbmdsZSwgWzAsIDAsIDFdKTtcblxuICByZXR1cm4gcm90YXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsXG4gICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgIHpOZWFyID0gWl9ORUFSLFxuICAgICAgICB6RmFyID0gWl9GQVIsXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCkge1xuICBsZXQgbm9ybWFsTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbk1hdHJpeCk7XG5cbiAgbm9ybWFsTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxNYXRyaXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0OiBvZmZzZXRNYXRyaXhGcm9tT2Zmc2V0LFxuICByb3RhdGlvbk1hdHJpeEZyb21BbmdsZXM6IHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyxcbiAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2U6IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0OiBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LFxuICBub3JtYWxNYXRyaXhGcm9tUm90YXRpb25NYXRyaXg6IG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Jcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZXBlYXRlZGx5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNhbGxiYWNrKGltYWdlKTtcbiAgfTtcblxuICBpbWFnZS5zcmMgPSBwYXRoOyAgLy8vXG59XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMocGF0aHMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSBwYXRocy5sZW5ndGgsIC8vL1xuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxuICAgICAgICAgIHBhdGhzOiBwYXRoc1xuICAgICAgICB9O1xuXG4gIHJlcGVhdGVkbHkocHJlbG9hZEltYWdlQ2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2U6IHByZWxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlc1xufTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlQ2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBpbWFnZXMsIHBhdGhzIH0gPSBjb250ZXh0LFxuICAgICAgICBwYXRoID0gcGF0aHNbaW5kZXhdLFxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlc1tpbmRleF0gPSBpbWFnZTtcblxuICBpbWFnZS5vbmxvYWQgPSBuZXh0OyAgLy8vXG5cbiAgaW1hZ2Uuc3JjID0gcGF0aDsgIC8vL1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9iaW4vY29uc3RhbnRzJyksIC8vL1xuICAgICAgaW1hZ2VVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2UnKTtcblxuY29uc3QgeyBJTUFHRV9NQVBfUEFUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwcmVsb2FkSW1hZ2UgfSA9IGltYWdlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgcGF0aCA9IElNQUdFX01BUF9QQVRIO1xuXG4gIHByZWxvYWRJbWFnZShwYXRoLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpIHtcbiAgY29uc3QgeyBpbWFnZU1hcEpTT04gfSA9IHJ1bnRpbWVDb25maWd1cmF0aW9uLCAgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGltYWdlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcywgdGV4dHVyZU5hbWUpIHtcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuY29uY2F0KGltYWdlTWFwSlNPTlt0ZXh0dXJlTmFtZV0pO1xuXG4gICAgICAgICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2VNYXA6IHByZWxvYWRJbWFnZU1hcCxcbiAgdGV4dHVyZUNvb3JkaW5hdGVzRnJvbUltYWdlTmFtZXM6IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQyID0gcmVxdWlyZSgnZ2wtbWF0MicpO1xuY29uc3QgbWF0MyA9IHJlcXVpcmUoJ2dsLW1hdDMnKTtcbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7XG5cbmZ1bmN0aW9uIGlkZW50aXR5MigpIHsgcmV0dXJuIG1hdDIuY3JlYXRlKCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpZGVudGl0eTMoKSB7IHJldHVybiBtYXQzLmNyZWF0ZSgpOyB9ICAvLy9cblxuZnVuY3Rpb24gaWRlbnRpdHk0KCkgeyByZXR1cm4gbWF0NC5jcmVhdGUoKTsgfSAgLy8vXG5cbmZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7IHJldHVybiBtYXQyLmludmVydChbXSwgbWF0cml4KTsgfVxuXG5mdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkgeyByZXR1cm4gbWF0My5pbnZlcnQoW10sIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHsgcmV0dXJuIG1hdDQuaW52ZXJ0KFtdLCBtYXRyaXgpOyB9XG5cbmZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7IHJldHVybiBtYXQyLnRyYW5zcG9zZShbXSwgbWF0cml4KTsgfVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkgeyByZXR1cm4gbWF0My50cmFuc3Bvc2UoW10sIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHsgcmV0dXJuIG1hdDQudHJhbnNwb3NlKFtdLCBtYXRyaXgpOyB9XG5cbmZ1bmN0aW9uIHNjYWxlMihtYXRyaXgsIHZlY3RvcikgeyByZXR1cm4gbWF0Mi5zY2FsZShbXSwgbWF0cml4LCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHNjYWxlMyhtYXRyaXgsIHZlY3RvcikgeyByZXR1cm4gbWF0My5zY2FsZShbXSwgbWF0cml4LCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3RvcikgeyByZXR1cm4gbWF0NC5zY2FsZShbXSwgbWF0cml4LCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZTIobWF0cml4LCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDIudHJhbnNsYXRlKFtdLCBtYXRyaXgsIHZlY3Rvcik7IH1cblxuZnVuY3Rpb24gdHJhbnNsYXRlMyhtYXRyaXgsIHZlY3RvcikgeyByZXR1cm4gbWF0My50cmFuc2xhdGUoW10sIG1hdHJpeCwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiB0cmFuc2xhdGU0KG1hdHJpeCwgdmVjdG9yKSB7IHJldHVybiBtYXQ0LnRyYW5zbGF0ZShbXSwgbWF0cml4LCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7IHJldHVybiBtYXQ0LnBlcnNwZWN0aXZlKFtdLCBmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTsgfVxuXG5mdW5jdGlvbiByb3RhdGU0KG1hdHJpeCwgYW5nbGUsIHZlY3RvcikgeyByZXR1cm4gbWF0NC5yb3RhdGUoW10sIG1hdHJpeCwgYW5nbGUsIHZlY3Rvcik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlkZW50aXR5MjogaWRlbnRpdHkyLFxuICBpZGVudGl0eTM6IGlkZW50aXR5MyxcbiAgaWRlbnRpdHk0OiBpZGVudGl0eTQsXG4gIGludmVydDI6IGludmVydDIsXG4gIGludmVydDM6IGludmVydDMsXG4gIGludmVydDQ6IGludmVydDQsXG4gIHNjYWxlMjogc2NhbGUyLFxuICBzY2FsZTM6IHNjYWxlMyxcbiAgc2NhbGU0OiBzY2FsZTQsXG4gIHRyYW5zcG9zZTI6IHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTM6IHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQ6IHRyYW5zcG9zZTQsXG4gIHRyYW5zbGF0ZTI6IHRyYW5zbGF0ZTIsXG4gIHRyYW5zbGF0ZTM6IHRyYW5zbGF0ZTMsXG4gIHRyYW5zbGF0ZTQ6IHRyYW5zbGF0ZTQsXG4gIHBlcnNwZWN0aXZlNDogcGVyc3BlY3RpdmU0LFxuICByb3RhdGU0OiByb3RhdGU0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgYW5nbGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYW5nbGUnKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gPSBhbmdsZVV0aWxpdGllcztcblxuZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHsgcmV0dXJuIGhhbWlsdG9uUHJvZHVjdChoYW1pbHRvblByb2R1Y3Qocm90YXRpb25RdWF0ZXJuaW9uLCBpbWFnaW5hcnlRdWF0ZXJuaW9uKSwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCB1bml0Tm9ybWFsID0gbm9ybWFsaXNlMyhub3JtYWwpLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMV0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDsgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgocm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gIGNvbnN0IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMgPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgsIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmb3VydGgocm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50cyksXG4gICAgICAgIGMgPSBmaXJzdFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudCwgLy8vXG4gICAgICAgIHMgPSBmb3VydGhSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQsICAvLy9cbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gWyBjLCArcywgMCwgLXMsIGMsIDAsIDAsIDAsIDEgXTtcblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbjogcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbixcbiAgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uOiBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb246IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uOiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uOiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4OiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCxcbiAgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4OiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhcbn07XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgcXVhdGVybmlvbkFDb21wb25lbnRzID0gcXVhdGVybmlvbkEsICAvLy9cbiAgICAgICAgcXVhdGVybmlvbkJDb21wb25lbnRzID0gcXVhdGVybmlvbkIsICAvLy9cbiAgICAgICAgZmlyc3RRdWF0ZXJuaW9uQUNvbXBvbmVudCA9IGZpcnN0KHF1YXRlcm5pb25BQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFF1YXRlcm5pb25BQ29tcG9uZW50ID0gc2Vjb25kKHF1YXRlcm5pb25BQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUXVhdGVybmlvbkFDb21wb25lbnQgPSB0aGlyZChxdWF0ZXJuaW9uQUNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhRdWF0ZXJuaW9uQUNvbXBvbmVudCA9IGZvdXJ0aChxdWF0ZXJuaW9uQUNvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdFF1YXRlcm5pb25CQ29tcG9uZW50ID0gZmlyc3QocXVhdGVybmlvbkJDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUXVhdGVybmlvbkJDb21wb25lbnQgPSBzZWNvbmQocXVhdGVybmlvbkJDb21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRRdWF0ZXJuaW9uQkNvbXBvbmVudCA9IHRoaXJkKHF1YXRlcm5pb25CQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFF1YXRlcm5pb25CQ29tcG9uZW50ID0gZm91cnRoKHF1YXRlcm5pb25CQ29tcG9uZW50cyksXG4gICAgICAgIGExID0gZmlyc3RRdWF0ZXJuaW9uQUNvbXBvbmVudCwgLy8vXG4gICAgICAgIGIxID0gc2Vjb25kUXVhdGVybmlvbkFDb21wb25lbnQsICAvLy9cbiAgICAgICAgYzEgPSB0aGlyZFF1YXRlcm5pb25BQ29tcG9uZW50LCAvLy9cbiAgICAgICAgZDEgPSBmb3VydGhRdWF0ZXJuaW9uQUNvbXBvbmVudCwgIC8vL1xuICAgICAgICBhMiA9IGZpcnN0UXVhdGVybmlvbkJDb21wb25lbnQsIC8vL1xuICAgICAgICBiMiA9IHNlY29uZFF1YXRlcm5pb25CQ29tcG9uZW50LCAgLy8vXG4gICAgICAgIGMyID0gdGhpcmRRdWF0ZXJuaW9uQkNvbXBvbmVudCwgLy8vXG4gICAgICAgIGQyID0gZm91cnRoUXVhdGVybmlvbkJDb21wb25lbnQsICAvLy9cbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IERFR1JFRVNfVE9fUkFESUFOUyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB0cmFuc2Zvcm00IH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaWRlbnRpdHk0LCBzY2FsZTQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgIGRlZmF1bHRXaWR0aCA9IDEsXG4gICAgICBkZWZhdWx0RGVwdGggPSAxLFxuICAgICAgZGVmYXVsdEhlaWdodCA9IDEsXG4gICAgICBkZWZhdWx0UG9zaXRpb24gPSBbIDAsIDAsIDAgXSxcbiAgICAgIGRlZmF1bHRSb3RhdGlvbnMgPSBbIDAsIDAsIDAgXTtcblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsZSA9IGNvbXBvc2VTY2FsZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCksXG4gICAgICAgIHJvdGF0ZSA9IGNvbXBvc2VSb3RhdGUocm90YXRpb25zKSxcbiAgICAgICAgdHJhbnNsYXRlID0gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgIHJldHVybiB0cmFuc2xhdGUocm90YXRlKHNjYWxlKHZlY3RvcikpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcG9zZVRyYW5zZm9ybTogY29tcG9zZVRyYW5zZm9ybVxufTtcblxuZnVuY3Rpb24gY29tcG9zZShtYXRyaXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgIHJldHVybiB0cmFuc2Zvcm00KFsuLi52ZWN0b3IsIDFdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb3NlU2NhbGUod2lkdGggPSBkZWZhdWx0V2lkdGgsIGhlaWdodCA9IGRlZmF1bHRIZWlnaHQsIGRlcHRoID0gZGVmYXVsdERlcHRoKSB7XG4gIGxldCBtYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBtYXRyaXggPSBzY2FsZTQobWF0cml4LCBbIHdpZHRoLCBoZWlnaHQsIGRlcHRoIF0pO1xuXG4gIHJldHVybiBjb21wb3NlKG1hdHJpeCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VSb3RhdGUocm90YXRpb25zID0gZGVmYXVsdFJvdGF0aW9ucykge1xuICBjb25zdCBmaXJzdFJvdGF0aW9uID0gZmlyc3Qocm90YXRpb25zKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb24gPSBzZWNvbmQocm90YXRpb25zKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvbiA9IHRoaXJkKHJvdGF0aW9ucyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0Um90YXRpb24gKiBERUdSRUVTX1RPX1JBRElBTlMsICAvLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kUm90YXRpb24gKiBERUdSRUVTX1RPX1JBRElBTlMsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TOyAgLy8vXG5cbiAgbGV0IG1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIG1hdHJpeCA9IHJvdGF0ZTQobWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgbWF0cml4ID0gcm90YXRlNChtYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICBtYXRyaXggPSByb3RhdGU0KG1hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG5cbiAgcmV0dXJuIGNvbXBvc2UobWF0cml4KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbiA9IGRlZmF1bHRQb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgbWF0cml4ID0gdHJhbnNsYXRlNChtYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gY29tcG9zZShtYXRyaXgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnZ2wtdmVjMicpO1xuY29uc3QgdmVjMyA9IHJlcXVpcmUoJ2dsLXZlYzMnKTtcbmNvbnN0IHZlYzQgPSByZXF1aXJlKCdnbC12ZWM0Jyk7XG5cbmZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7IHJldHVybiB2ZWMyLmxlbmd0aCh2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGxlbmd0aDModmVjdG9yKSB7IHJldHVybiB2ZWMzLmxlbmd0aCh2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGxlbmd0aDQodmVjdG9yKSB7IHJldHVybiB2ZWM0Lmxlbmd0aCh2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMi5kb3QodmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLmRvdCh2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzQuZG90KHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLmNyb3NzKFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBub3JtYWxpc2UyKHZlY3RvcikgeyByZXR1cm4gdmVjMi5ub3JtYWxpemUoW10sIHZlY3Rvcik7IH0gIC8vL1xuXG5mdW5jdGlvbiBub3JtYWxpc2UzKHZlY3RvcikgeyByZXR1cm4gdmVjMy5ub3JtYWxpemUoW10sIHZlY3Rvcik7IH0gIC8vL1xuXG5mdW5jdGlvbiBub3JtYWxpc2U0KHZlY3RvcikgeyByZXR1cm4gdmVjNC5ub3JtYWxpemUoW10sIHZlY3Rvcik7IH0gIC8vL1xuXG5mdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHsgcmV0dXJuIHZlYzIuc2NhbGUoW10sIHZlY3Rvciwgc2NhbGFyKTsgfVxuXG5mdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHsgcmV0dXJuIHZlYzMuc2NhbGUoW10sIHZlY3Rvciwgc2NhbGFyKTsgfVxuXG5mdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHsgcmV0dXJuIHZlYzQuc2NhbGUoW10sIHZlY3Rvciwgc2NhbGFyKTsgfVxuXG5mdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIuYWRkKFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzMuYWRkKFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzQuYWRkKFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMi5zdWJ0cmFjdChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzMuc3VidHJhY3QoW10sIHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWM0LnN1YnRyYWN0KFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7IHJldHVybiB2ZWMyLnRyYW5zZm9ybU1hdDIoW10sIHZlY3RvciwgbWF0cml4KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHsgcmV0dXJuIHZlYzMudHJhbnNmb3JtTWF0MyhbXSwgdmVjdG9yLCBtYXRyaXgpOyB9ICAvLy9cblxuZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkgeyByZXR1cm4gdmVjNC50cmFuc2Zvcm1NYXQ0KFtdLCB2ZWN0b3IsIG1hdHJpeCk7IH0gIC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGVuZ3RoMjogbGVuZ3RoMixcbiAgbGVuZ3RoMzogbGVuZ3RoMyxcbiAgbGVuZ3RoNDogbGVuZ3RoNCxcbiAgZG90MjogZG90MixcbiAgZG90MzogZG90MyxcbiAgZG90NDogZG90NCxcbiAgY3Jvc3MzOiBjcm9zczMsXG4gIG5vcm1hbGlzZTI6IG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTM6IG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQ6IG5vcm1hbGlzZTQsXG4gIHNjYWxlMjogc2NhbGUyLFxuICBzY2FsZTM6IHNjYWxlMyxcbiAgc2NhbGU0OiBzY2FsZTQsXG4gIGFkZDI6IGFkZDIsXG4gIGFkZDM6IGFkZDMsXG4gIGFkZDQ6IGFkZDQsXG4gIHN1YnRyYWN0Mjogc3VidHJhY3QyLFxuICBzdWJ0cmFjdDM6IHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0OiBzdWJ0cmFjdDQsXG4gIHRyYW5zZm9ybTI6IHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTM6IHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTQ6IHRyYW5zZm9ybTRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJvdGF0ZUFib3V0WkF4aXModmVydGV4LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgY29uc3QgbWF0cml4ID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4OyAgLy8vXG5cbiAgdmVydGV4ID0gdHJhbnNmb3JtMyh2ZXJ0ZXgsIG1hdHJpeCk7XG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdE9udG9YWVBsYW5lKHZlcnRleCkge1xuICB2ZXJ0ZXggPSBbLi4udmVydGV4LnNsaWNlKDAsIDIpLCAwXTsgIC8vL1xuICBcbiAgcmV0dXJuIHZlcnRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZUFib3V0WkF4aXM6IHJvdGF0ZUFib3V0WkF4aXMsXG4gIHByb2plY3RPbnRvWFlQbGFuZTogcHJvamVjdE9udG9YWVBsYW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24sIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdEVkZ2UgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4LCBmaXJzdFZlcnRleCksXG4gICAgICAgIHNlY29uZEVkZ2UgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4KSxcbiAgICAgICAgbm9ybWFsID0gY3Jvc3MzKGZpcnN0RWRnZSwgc2Vjb25kRWRnZSk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgIHZlcnRleCA9IHJvdGF0ZVZlcnRleCh2ZXJ0ZXgsIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9KTtcbiAgXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZU5vcm1hbDogY2FsY3VsYXRlTm9ybWFsLFxuICByb3RhdGVWZXJ0aWNlczogcm90YXRlVmVydGljZXNcbn07XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRleCh2ZXJ0ZXgsIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gWzAsIC4uLnZlcnRleF0sIC8vL1xuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0ZXggPSByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgLy8vXG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmFkam9pbnRcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgLy8gQ2FjaGluZyB0aGlzIHZhbHVlIGlzIG5lc3NlY2FyeSBpZiBvdXQgPT0gYVxuICB2YXIgYTAgPSAgYVswXVxuICBvdXRbMF0gPSAgYVszXVxuICBvdXRbMV0gPSAtYVsxXVxuICBvdXRbMl0gPSAtYVsyXVxuICBvdXRbM10gPSAgYTBcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MiB0byBhbm90aGVyXG4gKlxuICogQGFsaWFzIG1hdDIuY29weVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQyXG4gKlxuICogQGFsaWFzIG1hdDIuY3JlYXRlXG4gKiBAcmV0dXJucyB7bWF0Mn0gYSBuZXcgMngyIG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IDFcbiAgb3V0WzFdID0gMFxuICBvdXRbMl0gPSAwXG4gIG91dFszXSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmRldGVybWluYW50XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICByZXR1cm4gYVswXSAqIGFbM10gLSBhWzJdICogYVsxXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9iXG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi5mcm9iXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgIE1hdGgucG93KGFbMF0sIDIpICtcbiAgICBNYXRoLnBvdyhhWzFdLCAyKSArXG4gICAgTWF0aC5wb3coYVsyXSwgMikgK1xuICAgIE1hdGgucG93KGFbM10sIDIpXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHlcblxuLyoqXG4gKiBTZXQgYSBtYXQyIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAYWxpYXMgbWF0Mi5pZGVudGl0eVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDFcbiAgb3V0WzFdID0gMFxuICBvdXRbMl0gPSAwXG4gIG91dFszXSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCBpbnZlcnQ6IHJlcXVpcmUoJy4vaW52ZXJ0JylcbiAgLCBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBmcm9iOiByZXF1aXJlKCcuL2Zyb2InKVxuICAsIGxkdTogcmVxdWlyZSgnLi9sZHUnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnRcblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmludmVydFxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMCA9IGFbMF1cbiAgdmFyIGExID0gYVsxXVxuICB2YXIgYTIgPSBhWzJdXG4gIHZhciBhMyA9IGFbM11cbiAgdmFyIGRldCA9IGEwICogYTMgLSBhMiAqIGExXG5cbiAgaWYgKCFkZXQpIHJldHVybiBudWxsXG4gIGRldCA9IDEuMCAvIGRldFxuXG4gIG91dFswXSA9ICBhMyAqIGRldFxuICBvdXRbMV0gPSAtYTEgKiBkZXRcbiAgb3V0WzJdID0gLWEyICogZGV0XG4gIG91dFszXSA9ICBhMCAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGR1XG5cbi8qKlxuICogUmV0dXJucyBMLCBEIGFuZCBVIG1hdHJpY2VzIChMb3dlciB0cmlhbmd1bGFyLCBEaWFnb25hbCBhbmQgVXBwZXIgdHJpYW5ndWxhcikgYnkgZmFjdG9yaXppbmcgdGhlIGlucHV0IG1hdHJpeFxuICpcbiAqIEBhbGlhcyBtYXQyLmxkdVxuICogQHBhcmFtIHttYXQyfSBMIHRoZSBsb3dlciB0cmlhbmd1bGFyIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBEIHRoZSBkaWFnb25hbCBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gVSB0aGUgdXBwZXIgdHJpYW5ndWxhciBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgaW5wdXQgbWF0cml4IHRvIGZhY3Rvcml6ZVxuICovXG5mdW5jdGlvbiBsZHUoTCwgRCwgVSwgYSkge1xuICBMWzJdID0gYVsyXS9hWzBdXG4gIFVbMF0gPSBhWzBdXG4gIFVbMV0gPSBhWzFdXG4gIFVbM10gPSBhWzNdIC0gTFsyXSAqIFVbMV1cbiAgcmV0dXJuIFtMLCBELCBVXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDInc1xuICpcbiAqIEBhbGlhcyBtYXQyLm11bHRpcGx5XG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdXG4gIHZhciBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM11cbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjFcbiAgb3V0WzFdID0gYTEgKiBiMCArIGEzICogYjFcbiAgb3V0WzJdID0gYTAgKiBiMiArIGEyICogYjNcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjNcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MiBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAYWxpYXMgbWF0Mi5yb3RhdGVcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdXG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKVxuICB2YXIgYyA9IE1hdGguY29zKHJhZClcbiAgb3V0WzBdID0gYTAgKiAgYyArIGEyICogc1xuICBvdXRbMV0gPSBhMSAqICBjICsgYTMgKiBzXG4gIG91dFsyXSA9IGEwICogLXMgKyBhMiAqIGNcbiAgb3V0WzNdID0gYTEgKiAtcyArIGEzICogY1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQyIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQGFsaWFzIG1hdDIuc2NhbGVcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXVxuICB2YXIgdjAgPSB2WzBdLCB2MSA9IHZbMV1cbiAgb3V0WzBdID0gYTAgKiB2MFxuICBvdXRbMV0gPSBhMSAqIHYwXG4gIG91dFsyXSA9IGEyICogdjFcbiAgb3V0WzNdID0gYTMgKiB2MVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zcG9zZVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLnRyYW5zcG9zZVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMSA9IGFbMV1cbiAgICBvdXRbMV0gPSBhWzJdXG4gICAgb3V0WzJdID0gYTFcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsyXVxuICAgIG91dFsyXSA9IGFbMV1cbiAgICBvdXRbM10gPSBhWzNdXG4gIH1cblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnRcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5hZGpvaW50XG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdXG4gIHZhciBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdXG4gIHZhciBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdXG5cbiAgb3V0WzBdID0gKGExMSAqIGEyMiAtIGExMiAqIGEyMSlcbiAgb3V0WzFdID0gKGEwMiAqIGEyMSAtIGEwMSAqIGEyMilcbiAgb3V0WzJdID0gKGEwMSAqIGExMiAtIGEwMiAqIGExMSlcbiAgb3V0WzNdID0gKGExMiAqIGEyMCAtIGExMCAqIGEyMilcbiAgb3V0WzRdID0gKGEwMCAqIGEyMiAtIGEwMiAqIGEyMClcbiAgb3V0WzVdID0gKGEwMiAqIGExMCAtIGEwMCAqIGExMilcbiAgb3V0WzZdID0gKGExMCAqIGEyMSAtIGExMSAqIGEyMClcbiAgb3V0WzddID0gKGEwMSAqIGEyMCAtIGEwMCAqIGEyMSlcbiAgb3V0WzhdID0gKGEwMCAqIGExMSAtIGEwMSAqIGExMClcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQGFsaWFzIG1hdDMuY2xvbmVcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICBvdXRbNF0gPSBhWzRdXG4gIG91dFs1XSA9IGFbNV1cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBhbGlhcyBtYXQzLmNvcHlcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICBvdXRbNF0gPSBhWzRdXG4gIG91dFs1XSA9IGFbNV1cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5jcmVhdGVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgb3V0WzBdID0gMVxuICBvdXRbMV0gPSAwXG4gIG91dFsyXSA9IDBcbiAgb3V0WzNdID0gMFxuICBvdXRbNF0gPSAxXG4gIG91dFs1XSA9IDBcbiAgb3V0WzZdID0gMFxuICBvdXRbN10gPSAwXG4gIG91dFs4XSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBhbGlhcyBtYXQzLmRldGVybWluYW50XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXVxuICB2YXIgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XVxuICB2YXIgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XVxuXG4gIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKVxuICAgICAgICsgYTAxICogKGExMiAqIGEyMCAtIGEyMiAqIGExMClcbiAgICAgICArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb2JcblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0M1xuICpcbiAqIEBhbGlhcyBtYXQzLmZyb2JcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBhWzBdKmFbMF1cbiAgICArIGFbMV0qYVsxXVxuICAgICsgYVsyXSphWzJdXG4gICAgKyBhWzNdKmFbM11cbiAgICArIGFbNF0qYVs0XVxuICAgICsgYVs1XSphWzVdXG4gICAgKyBhWzZdKmFbNl1cbiAgICArIGFbN10qYVs3XVxuICAgICsgYVs4XSphWzhdXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnJvbU1hdDJkXG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMuZnJvbU1hdDJkXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IDBcblxuICBvdXRbM10gPSBhWzJdXG4gIG91dFs0XSA9IGFbM11cbiAgb3V0WzVdID0gMFxuXG4gIG91dFs2XSA9IGFbNF1cbiAgb3V0WzddID0gYVs1XVxuICBvdXRbOF0gPSAxXG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tTWF0NFxuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQGFsaWFzIG1hdDMuZnJvbU1hdDRcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzRdXG4gIG91dFs0XSA9IGFbNV1cbiAgb3V0WzVdID0gYVs2XVxuICBvdXRbNl0gPSBhWzhdXG4gIG91dFs3XSA9IGFbOV1cbiAgb3V0WzhdID0gYVsxMF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdFxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuKlxuKiBAYWxpYXMgbWF0My5mcm9tUXVhdFxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXVxuICB2YXIgeSA9IHFbMV1cbiAgdmFyIHogPSBxWzJdXG4gIHZhciB3ID0gcVszXVxuXG4gIHZhciB4MiA9IHggKyB4XG4gIHZhciB5MiA9IHkgKyB5XG4gIHZhciB6MiA9IHogKyB6XG5cbiAgdmFyIHh4ID0geCAqIHgyXG4gIHZhciB5eCA9IHkgKiB4MlxuICB2YXIgeXkgPSB5ICogeTJcbiAgdmFyIHp4ID0geiAqIHgyXG4gIHZhciB6eSA9IHogKiB5MlxuICB2YXIgenogPSB6ICogejJcbiAgdmFyIHd4ID0gdyAqIHgyXG4gIHZhciB3eSA9IHcgKiB5MlxuICB2YXIgd3ogPSB3ICogejJcblxuICBvdXRbMF0gPSAxIC0geXkgLSB6elxuICBvdXRbM10gPSB5eCAtIHd6XG4gIG91dFs2XSA9IHp4ICsgd3lcblxuICBvdXRbMV0gPSB5eCArIHd6XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6XG4gIG91dFs3XSA9IHp5IC0gd3hcblxuICBvdXRbMl0gPSB6eCAtIHd5XG4gIG91dFs1XSA9IHp5ICsgd3hcbiAgb3V0WzhdID0gMSAtIHh4IC0geXlcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQGFsaWFzIG1hdDMuaWRlbnRpdHlcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAwXG4gIG91dFs0XSA9IDFcbiAgb3V0WzVdID0gMFxuICBvdXRbNl0gPSAwXG4gIG91dFs3XSA9IDBcbiAgb3V0WzhdID0gMVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgZnJvYjogcmVxdWlyZSgnLi9mcm9iJylcbiAgLCBmcm9tTWF0MjogcmVxdWlyZSgnLi9mcm9tLW1hdDInKVxuICAsIGZyb21NYXQ0OiByZXF1aXJlKCcuL2Zyb20tbWF0NCcpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbS1xdWF0JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIG5vcm1hbEZyb21NYXQ0OiByZXF1aXJlKCcuL25vcm1hbC1mcm9tLW1hdDQnKVxuICAsIHJvdGF0ZTogcmVxdWlyZSgnLi9yb3RhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCBzdHI6IHJlcXVpcmUoJy4vc3RyJylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5pbnZlcnRcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXVxuICB2YXIgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XVxuICB2YXIgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XVxuXG4gIHZhciBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjFcbiAgdmFyIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjBcbiAgdmFyIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMFxuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgdmFyIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMVxuXG4gIGlmICghZGV0KSByZXR1cm4gbnVsbFxuICBkZXQgPSAxLjAgLyBkZXRcblxuICBvdXRbMF0gPSBiMDEgKiBkZXRcbiAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0XG4gIG91dFszXSA9IGIxMSAqIGRldFxuICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldFxuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXRcbiAgb3V0WzZdID0gYjIxICogZGV0XG4gIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldFxuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcbiAqXG4gKiBAYWxpYXMgbWF0My5tdWx0aXBseVxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cblxuICB2YXIgYjAwID0gYlswXSwgYjAxID0gYlsxXSwgYjAyID0gYlsyXVxuICB2YXIgYjEwID0gYlszXSwgYjExID0gYls0XSwgYjEyID0gYls1XVxuICB2YXIgYjIwID0gYls2XSwgYjIxID0gYls3XSwgYjIyID0gYls4XVxuXG4gIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMFxuICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjFcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyXG5cbiAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwXG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMVxuICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjJcblxuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjBcbiAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxXG4gIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMlxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsRnJvbU1hdDRcblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbipcbiogQGFsaWFzIG1hdDMubm9ybWFsRnJvbU1hdDRcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdXG4gIHZhciBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddXG4gIHZhciBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV1cbiAgdmFyIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdXG5cbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMFxuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwXG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTBcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMVxuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExXG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTJcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMFxuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwXG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzBcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMVxuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxXG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzJcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIHZhciBkZXQgPSBiMDAgKiBiMTFcbiAgICAgICAgICAtIGIwMSAqIGIxMFxuICAgICAgICAgICsgYjAyICogYjA5XG4gICAgICAgICAgKyBiMDMgKiBiMDhcbiAgICAgICAgICAtIGIwNCAqIGIwN1xuICAgICAgICAgICsgYjA1ICogYjA2XG5cbiAgaWYgKCFkZXQpIHJldHVybiBudWxsXG4gIGRldCA9IDEuMCAvIGRldFxuXG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0XG4gIG91dFsxXSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0XG5cbiAgb3V0WzNdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXRcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXRcbiAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXRcblxuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldFxuICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldFxuICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlXG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQGFsaWFzIG1hdDMucm90YXRlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cblxuICB2YXIgcyA9IE1hdGguc2luKHJhZClcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpXG5cbiAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTBcbiAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTFcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTJcblxuICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMFxuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMVxuICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMlxuXG4gIG91dFs2XSA9IGEyMFxuICBvdXRbN10gPSBhMjFcbiAgb3V0WzhdID0gYTIyXG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBhbGlhcyBtYXQzLnNjYWxlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXVxuICB2YXIgeSA9IHZbMV1cblxuICBvdXRbMF0gPSB4ICogYVswXVxuICBvdXRbMV0gPSB4ICogYVsxXVxuICBvdXRbMl0gPSB4ICogYVsyXVxuXG4gIG91dFszXSA9IHkgKiBhWzNdXG4gIG91dFs0XSA9IHkgKiBhWzRdXG4gIG91dFs1XSA9IHkgKiBhWzVdXG5cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN0clxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMuc3RyXG4gKiBAcGFyYW0ge21hdDN9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgYVszXSArICcsICcgKyBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICsgYVs4XSArICcpJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGVcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAYWxpYXMgbWF0My50cmFuc2xhdGVcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cbiAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXVxuXG4gIG91dFswXSA9IGEwMFxuICBvdXRbMV0gPSBhMDFcbiAgb3V0WzJdID0gYTAyXG5cbiAgb3V0WzNdID0gYTEwXG4gIG91dFs0XSA9IGExMVxuICBvdXRbNV0gPSBhMTJcblxuICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMFxuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMVxuICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMlxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlXG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMudHJhbnNwb3NlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGExMiA9IGFbNV1cbiAgICBvdXRbMV0gPSBhWzNdXG4gICAgb3V0WzJdID0gYVs2XVxuICAgIG91dFszXSA9IGEwMVxuICAgIG91dFs1XSA9IGFbN11cbiAgICBvdXRbNl0gPSBhMDJcbiAgICBvdXRbN10gPSBhMTJcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVszXVxuICAgIG91dFsyXSA9IGFbNl1cbiAgICBvdXRbM10gPSBhWzFdXG4gICAgb3V0WzRdID0gYVs0XVxuICAgIG91dFs1XSA9IGFbN11cbiAgICBvdXRbNl0gPSBhWzJdXG4gICAgb3V0WzddID0gYVs1XVxuICAgIG91dFs4XSA9IGFbOF1cbiAgfVxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzJdICA9ICAoYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzVdICA9ICAoYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzhdICA9ICAoYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpKTtcbiAgICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICAgIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICAgIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gICAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVF1YXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcnVzdHVtO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCksXG4gICAgICAgIHRiID0gMSAvICh0b3AgLSBib3R0b20pLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gKG5lYXIgKiAyKSAqIHJsO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICAgIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIGludmVydDogcmVxdWlyZSgnLi9pbnZlcnQnKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb246IHJlcXVpcmUoJy4vZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24nKVxuICAsIGZyb21RdWF0OiByZXF1aXJlKCcuL2Zyb21RdWF0JylcbiAgLCBmcnVzdHVtOiByZXF1aXJlKCcuL2ZydXN0dW0nKVxuICAsIHBlcnNwZWN0aXZlOiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlJylcbiAgLCBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldzogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldycpXG4gICwgb3J0aG86IHJlcXVpcmUoJy4vb3J0aG8nKVxuICAsIGxvb2tBdDogcmVxdWlyZSgnLi9sb29rQXQnKVxuICAsIHN0cjogcmVxdWlyZSgnLi9zdHInKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0O1xuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7IFxuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvb2tBdDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gb3J0aG87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KSxcbiAgICAgICAgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmU7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICAgIHZhciB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAoTWF0aC5hYnMobGVuKSA8IDAuMDAwMDAxKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgICBiMDAgPSB4ICogeCAqIHQgKyBjOyBiMDEgPSB5ICogeCAqIHQgKyB6ICogczsgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gICAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICAgIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICAgIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbNF0gID0gYVs0XTtcbiAgICAgICAgb3V0WzVdICA9IGFbNV07XG4gICAgICAgIG91dFs2XSAgPSBhWzZdO1xuICAgICAgICBvdXRbN10gID0gYVs3XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbOF0gID0gYVs4XTtcbiAgICAgICAgb3V0WzldICA9IGFbOV07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc3RyO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBtYXQgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlO1xuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICAgICAgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMilcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMiB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMlxuICpcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcm9zc1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdXG4gICAgb3V0WzBdID0gb3V0WzFdID0gMFxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGVcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoXG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjMnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMi4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzJzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsXG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgICBzdHJpZGUgPSAyXG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSAwXG4gICAgfVxuICAgIFxuICAgIGlmKGNvdW50KSB7XG4gICAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGhcbiAgICB9XG5cbiAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgIHZlY1swXSA9IGFbaV1cbiAgICAgICAgdmVjWzFdID0gYVtpKzFdXG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgIGFbaV0gPSB2ZWNbMF1cbiAgICAgICAgYVtpKzFdID0gdmVjWzFdXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHkpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgZnJvbVZhbHVlczogcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIHNldDogcmVxdWlyZSgnLi9zZXQnKVxuICAsIGFkZDogcmVxdWlyZSgnLi9hZGQnKVxuICAsIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgZGl2aWRlOiByZXF1aXJlKCcuL2RpdmlkZScpXG4gICwgbWluOiByZXF1aXJlKCcuL21pbicpXG4gICwgbWF4OiByZXF1aXJlKCcuL21heCcpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJylcbiAgLCBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpXG4gICwgc3F1YXJlZERpc3RhbmNlOiByZXF1aXJlKCcuL3NxdWFyZWREaXN0YW5jZScpXG4gICwgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpXG4gICwgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJylcbiAgLCBuZWdhdGU6IHJlcXVpcmUoJy4vbmVnYXRlJylcbiAgLCBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbiAgLCBkb3Q6IHJlcXVpcmUoJy4vZG90JylcbiAgLCBjcm9zczogcmVxdWlyZSgnLi9jcm9zcycpXG4gICwgbGVycDogcmVxdWlyZSgnLi9sZXJwJylcbiAgLCByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJylcbiAgLCB0cmFuc2Zvcm1NYXQyOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDInKVxuICAsIHRyYW5zZm9ybU1hdDJkOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDJkJylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVycFxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXVxuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXhcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlXG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdXG4gICAgb3V0WzFdID0gLWFbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeVxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMiBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZFxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzZXQob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIHgqeCArIHkqeVxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICByZXR1cm4geCp4ICsgeSp5XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MlxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHlcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MmRcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0M1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhbmdsZVxuXG52YXIgZnJvbVZhbHVlcyA9IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIGRvdCA9IHJlcXVpcmUoJy4vZG90JylcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICAgIHZhciB0ZW1wQSA9IGZyb21WYWx1ZXMoYVswXSwgYVsxXSwgYVsyXSlcbiAgICB2YXIgdGVtcEIgPSBmcm9tVmFsdWVzKGJbMF0sIGJbMV0sIGJbMl0pXG4gXG4gICAgbm9ybWFsaXplKHRlbXBBLCB0ZW1wQSlcbiAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKVxuIFxuICAgIHZhciBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKVxuXG4gICAgaWYoY29zaW5lID4gMS4wKXtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc2luZSlcbiAgICB9ICAgICBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IDBcbiAgICBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdXG5cbiAgICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieVxuICAgIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYnhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGU7XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAvIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuXG52YXIgdmVjID0gcmVxdWlyZSgnLi9jcmVhdGUnKSgpXG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICAgICAgdmFyIGksIGxcbiAgICAgICAgaWYoIXN0cmlkZSkge1xuICAgICAgICAgICAgc3RyaWRlID0gM1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjb3VudCkge1xuICAgICAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbCA9IGEubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgICAgICB2ZWNbMF0gPSBhW2ldIFxuICAgICAgICAgICAgdmVjWzFdID0gYVtpKzFdIFxuICAgICAgICAgICAgdmVjWzJdID0gYVtpKzJdXG4gICAgICAgICAgICBmbih2ZWMsIHZlYywgYXJnKVxuICAgICAgICAgICAgYVtpXSA9IHZlY1swXSBcbiAgICAgICAgICAgIGFbaSsxXSA9IHZlY1sxXSBcbiAgICAgICAgICAgIGFbaSsyXSA9IHZlY1syXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVZhbHVlcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGFuZ2xlOiByZXF1aXJlKCcuL2FuZ2xlJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIGludmVyc2U6IHJlcXVpcmUoJy4vaW52ZXJzZScpXG4gICwgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG4gICwgZG90OiByZXF1aXJlKCcuL2RvdCcpXG4gICwgY3Jvc3M6IHJlcXVpcmUoJy4vY3Jvc3MnKVxuICAsIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpXG4gICwgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybVF1YXQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtUXVhdCcpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVyc2U7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXVxuICBvdXRbMV0gPSAxLjAgLyBhWzFdXG4gIG91dFsyXSA9IDEuMCAvIGFbMl1cbiAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlcnA7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl1cbiAgICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KVxuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheilcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlO1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXVxuICAgIG91dFsxXSA9IC1hWzFdXG4gICAgb3V0WzJdID0gLWFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemU7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICB2YXIgbGVuID0geCp4ICsgeSp5ICsgeip6XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgICAgIG91dFswXSA9IGFbMF0gKiBsZW5cbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlblxuICAgICAgICBvdXRbMl0gPSBhWzJdICogbGVuXG4gICAgfVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wXG5cbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgdmFyIHogPSAoTWF0aC5yYW5kb20oKSAqIDIuMCkgLSAxLjBcbiAgICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMC16KnopICogc2NhbGVcblxuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGVcbiAgICBvdXRbMl0gPSB6ICogc2NhbGVcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cblxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdXG4gICAgclsxXSA9IHBbMV0qTWF0aC5jb3MoYykgLSBwWzJdKk1hdGguc2luKGMpXG4gICAgclsyXSA9IHBbMV0qTWF0aC5zaW4oYykgKyBwWzJdKk1hdGguY29zKGMpXG5cbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG5cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMl0qTWF0aC5zaW4oYykgKyBwWzBdKk1hdGguY29zKGMpXG4gICAgclsxXSA9IHBbMV1cbiAgICByWzJdID0gcFsyXSpNYXRoLmNvcyhjKSAtIHBbMF0qTWF0aC5zaW4oYylcbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMF0qTWF0aC5jb3MoYykgLSBwWzFdKk1hdGguc2luKGMpXG4gICAgclsxXSA9IHBbMF0qTWF0aC5zaW4oYykgKyBwWzFdKk1hdGguY29zKGMpXG4gICAgclsyXSA9IHBbMl1cbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIG91dFsyXSA9IGFbMl0gKiBiXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufSIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDM7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXVxuICAgIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XVxuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XVxuICAgIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdXG4gICAgdyA9IHcgfHwgMS4wXG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHdcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gd1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gd1xuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybVF1YXQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6XG5cbiAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICAgIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXpcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBhZGQgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICBvdXRbM10gPSBhWzNdICsgYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZSAoYSkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY29weVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkgKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjNFxuICpcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlICgpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0gMFxuICBvdXRbMV0gPSAwXG4gIG91dFsyXSA9IDBcbiAgb3V0WzNdID0gMFxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlIChhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICB3ID0gYlszXSAtIGFbM11cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGl2aWRlXG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICBvdXRbMl0gPSBhWzJdIC8gYlsyXVxuICBvdXRbM10gPSBhWzNdIC8gYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRvdFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90IChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMgKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0geFxuICBvdXRbMV0gPSB5XG4gIG91dFsyXSA9IHpcbiAgb3V0WzNdID0gd1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpLFxuICBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpLFxuICBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKSxcbiAgY29weTogcmVxdWlyZSgnLi9jb3B5JyksXG4gIHNldDogcmVxdWlyZSgnLi9zZXQnKSxcbiAgYWRkOiByZXF1aXJlKCcuL2FkZCcpLFxuICBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zdWJ0cmFjdCcpLFxuICBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpLFxuICBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJyksXG4gIG1pbjogcmVxdWlyZSgnLi9taW4nKSxcbiAgbWF4OiByZXF1aXJlKCcuL21heCcpLFxuICBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpLFxuICBzY2FsZUFuZEFkZDogcmVxdWlyZSgnLi9zY2FsZUFuZEFkZCcpLFxuICBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpLFxuICBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJyksXG4gIGxlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGgnKSxcbiAgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJyksXG4gIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKSxcbiAgaW52ZXJzZTogcmVxdWlyZSgnLi9pbnZlcnNlJyksXG4gIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKSxcbiAgZG90OiByZXF1aXJlKCcuL2RvdCcpLFxuICBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKSxcbiAgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpLFxuICB0cmFuc2Zvcm1NYXQ0OiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDQnKSxcbiAgdHJhbnNmb3JtUXVhdDogcmVxdWlyZSgnLi90cmFuc2Zvcm1RdWF0Jylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJzZVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVyc2UgKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdXG4gIG91dFsxXSA9IDEuMCAvIGFbMV1cbiAgb3V0WzJdID0gMS4wIC8gYVsyXVxuICBvdXRbM10gPSAxLjAgLyBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwXG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAgKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdXG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopXG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWF4XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtYXggKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKVxuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSlcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXVxuICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICBvdXRbMl0gPSBhWzJdICogYlsyXVxuICBvdXRbM10gPSBhWzNdICogYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5lZ2F0ZVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZSAob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdXG4gIG91dFsxXSA9IC1hWzFdXG4gIG91dFsyXSA9IC1hWzJdXG4gIG91dFszXSA9IC1hWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUgKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgb3V0WzBdID0geCAqIGxlblxuICAgIG91dFsxXSA9IHkgKiBsZW5cbiAgICBvdXRbMl0gPSB6ICogbGVuXG4gICAgb3V0WzNdID0gdyAqIGxlblxuICB9XG4gIHJldHVybiBvdXRcbn1cbiIsInZhciB2ZWNOb3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgdmVjU2NhbGUgPSByZXF1aXJlKCcuL3NjYWxlJylcblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20gKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAvLyBUT0RPOiBUaGlzIGlzIGEgcHJldHR5IGF3ZnVsIHdheSBvZiBkb2luZyB0aGlzLiBGaW5kIHNvbWV0aGluZyBiZXR0ZXIuXG4gIG91dFswXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzFdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbMl0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFszXSA9IE1hdGgucmFuZG9tKClcbiAgdmVjTm9ybWFsaXplKG91dCwgb3V0KVxuICB2ZWNTY2FsZShvdXQsIG91dCwgc2NhbGUpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlxuICBvdXRbMV0gPSBhWzFdICogYlxuICBvdXRbMl0gPSBhWzJdICogYlxuICBvdXRbM10gPSBhWzNdICogYlxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkIChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gIG91dFszXSA9IGFbM10gKyAoYlszXSAqIHNjYWxlKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNldFxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzZXQgKG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4XG4gIG91dFsxXSA9IHlcbiAgb3V0WzJdID0gelxuICBvdXRbM10gPSB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UgKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgeiA9IGJbMl0gLSBhWzJdLFxuICAgIHcgPSBiWzNdIC0gYVszXVxuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gIG91dFszXSA9IGFbM10gLSBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0IChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdXG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogd1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHdcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogd1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtUXVhdFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWF0IChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdLFxuXG4gICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcbiAgICBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogeixcbiAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHpcblxuICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXlcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xelxuICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aFV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL3BhdGgnKSxcbiAgYXJyYXlVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hcnJheScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaW5kZXgpIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5OiBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHk6IHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZnVuY3Rpb24gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKSB7XG4gIHJldHVybiBmcy5leGlzdHNTeW5jKGFic29sdXRlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGZpbGVFeGlzdHMoYWJzb2x1dGVGaWxlUGF0aCkge1xuICBsZXQgZmlsZUV4aXN0cyA9IGZhbHNlO1xuICBcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcbiAgXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgZmlsZUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0b3J5RXhpc3RzKGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVEaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5mdW5jdGlvbiByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZnVuY3Rpb24gcmVhZEZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGaWxlKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5RXhpc3RzOiBlbnRyeUV4aXN0cyxcbiAgZmlsZUV4aXN0czogZmlsZUV4aXN0cyxcbiAgaXNFbnRyeUZpbGU6IGlzRW50cnlGaWxlLFxuICBkaXJlY3RvcnlFeGlzdHM6IGRpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeURpcmVjdG9yeTogaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eTogaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGU6IHJlYWRGaWxlLFxuICB3cml0ZUZpbGU6IHdyaXRlRmlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIl19
