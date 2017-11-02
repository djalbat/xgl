(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const IMAGE_SIZE = 128,
      IMAGE_MAP_PATH = '/imageMap',
      INDEX_PAGE_PATH = '/',
      FACETS_PAGE_PATH = '/facets',
      SHAPES_PAGE_PATH = '/shapes',
      CONTAINER_HOUSE_PAGE_PATH = '/containerHouse';

module.exports = {
  IMAGE_SIZE: IMAGE_SIZE,
  IMAGE_MAP_PATH: IMAGE_MAP_PATH,
  INDEX_PAGE_PATH: INDEX_PAGE_PATH,
  FACETS_PAGE_PATH: FACETS_PAGE_PATH,
  SHAPES_PAGE_PATH: SHAPES_PAGE_PATH,
  CONTAINER_HOUSE_PAGE_PATH: CONTAINER_HOUSE_PAGE_PATH
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
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation(),
          canvas = this; ///

      offsetMatrix.apply(offsetMatrixUniformLocation, canvas);
      rotationMatrix.apply(rotationMatrixUniformLocation, canvas);
      positionMatrix.apply(positionMatrixUniformLocation, canvas);
      projectionMatrix.apply(projectionMatrixUniformLocation, canvas);
      normalMatrix.apply(normalMatrixUniformLocation, canvas);

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

},{"./canvas/mixin/blending":3,"./canvas/mixin/buffer":4,"./canvas/mixin/colour":5,"./canvas/mixin/depth":6,"./canvas/mixin/matrix":7,"./canvas/mixin/program":8,"./canvas/mixin/shader":9,"./canvas/mixin/texture":10,"./utilities/dom":115}],3:[function(require,module,exports){
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

var CYLINDER_FACES = 16,
    MINIMUM_DISTANCE = 10,
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
    INITIAL_ANGLE_COORDINATES = [0, 0];

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
  CYLINDER_FACES: CYLINDER_FACES,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE,
  DEGREES_TO_RADIANS: DEGREES_TO_RADIANS,
  OFFSET_SCALAR: OFFSET_SCALAR,
  DISTANCE_SCALAR: DISTANCE_SCALAR,
  ANGLE_COORDINATES_SCALAR: ANGLE_COORDINATES_SCALAR,
  INITIAL_MOUSE_COORDINATES: INITIAL_MOUSE_COORDINATES,
  INITIAL_ANGLE_COORDINATES: INITIAL_ANGLE_COORDINATES
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
    value: function create(colourRenderer, textureRenderer, transforms) {}
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
      }.bind(this), []);
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
    Pan = require('./camera/pan'),
    Zoom = require('./camera/zoom'),
    tilt = require('./camera/tilt'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    OffsetMatrix = require('../matrix/offset'),
    NormalMatrix = require('../matrix/normal'),
    RotationMatrix = require('../matrix/rotation'),
    PositionMatrix = require('../matrix/position'),
    ProjectionMatrix = require('../matrix/projection');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, zoom, handler, mouseDown, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

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

      tilt.mouseUpHandler();

      this.pan.mouseUpHandler();
    }
  }, {
    key: 'mouseDownHandler',
    value: function mouseDownHandler(mouseCoordinates) {
      this.mouseDown = true;

      tilt.mouseDownHandler();

      this.pan.mouseDownHandler();
    }
  }, {
    key: 'mouseMoveHandler',
    value: function mouseMoveHandler(mouseCoordinates) {
      tilt.mouseMoveHandler(mouseCoordinates);

      this.pan.mouseMoveHandler(mouseCoordinates, tilt);

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
      tilt.shiftKeyHandler(shiftKeyDown);

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
          distance = this.zoom.getDistance(),
          offsetMatrix = OffsetMatrix.fromOffset(offset),
          rotationMatrix = RotationMatrix.fromAngles(tilt),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

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
          camera = new Camera(pan, zoom, handler, mouseDown, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":12,"../matrix/normal":86,"../matrix/offset":87,"../matrix/position":88,"../matrix/projection":89,"../matrix/rotation":90,"./camera/keyEvents":14,"./camera/mouseEvents":15,"./camera/pan":16,"./camera/tilt":17,"./camera/zoom":18}],14:[function(require,module,exports){
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

var vec2 = require('../../maths/vec2'),
    vec3 = require('../../maths/vec3'),
    constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec3.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
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
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeOffset = scale(relativeMouseCoordinates, scalar),
          firstRelativeOffset = first(relativeOffset),
          secondRelativeOffset = second(relativeOffset);

      var offset = this.previousOffset.slice();

      (function () {
        var x = -Math.cos(yAngle) * firstRelativeOffset,
            y = 0,
            z = -Math.sin(yAngle) * firstRelativeOffset;

        offset = add(offset, [x, y, z]);
      })();

      (function () {
        var x = -Math.sin(xAngle) * Math.sin(yAngle) * secondRelativeOffset,
            y = -Math.cos(xAngle) * secondRelativeOffset,
            z = +Math.sin(xAngle) * Math.cos(yAngle) * secondRelativeOffset;

        offset = add(offset, [x, y, z]);
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

},{"../../constants":11,"../../maths/vec2":82,"../../maths/vec3":83,"../../utilities/array":114}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec2 = require('../../maths/vec2'),
    constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add = vec2.add,
    subtract = vec2.subtract,
    scale = vec2.scale,
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
          relativeMouseCoordinates = subtract(this.mouseCoordinates, this.previousMouseCoordinates),
          relativeAngleCoordinates = scale(relativeMouseCoordinates, scalar);

      this.angleCoordinates = add(this.previousAngleCoordinates, relativeAngleCoordinates);
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

},{"../../constants":11,"../../maths/vec2":82,"../../utilities/array":114}],18:[function(require,module,exports){
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
    vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var chop = arrayUtilities.chop,
    composeTransform = transformUtilities.composeTransform,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var initialVertexPositions = this.getInitialVertexPositions(),
          vertexPositions = initialVertexPositions.map(function (initialVertexPosition) {
        var vertexPosition = initialVertexPosition;

        transforms.forEach(function (transform) {
          vertexPosition = transform(vertexPosition);
        });

        return vertexPosition;
      });

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var faces = chop(vertexPositions, 4),
          ///
      vertexNormals = faces.reduce(function (vertexNormals, face) {
        var vertexPositions = face; ///

        for (var index = 0; index < 4; index++) {
          var firstVertexIndex = index,
              secondVertexIndex = (index + 1) % 4,
              thirdVertexIndex = (index + 3) % 4,
              firstVertexPosition = vertexPositions[firstVertexIndex],
              secondVertexPosition = vertexPositions[secondVertexIndex],
              thirdVertexPosition = vertexPositions[thirdVertexIndex],
              firstVector = subtract(secondVertexPosition, firstVertexPosition),
              secondVector = subtract(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise(cross(firstVector, secondVector));

          vertexNormals.push(vertexNormal);
        }

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes(vertexPositions) {
      var vertexIndexes = [],
          vertexPositionsLength = vertexPositions.length,
          facesLength = vertexPositionsLength / 4; ///

      for (var index = 0; index < facesLength; index++) {
        var offset = index * 4;

        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 1);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 3);
      }

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":12,"../maths/vec3":83,"../utilities/array":114,"../utilities/transform":120}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement(transform, colour) {
    _classCallCheck(this, ColouredCanvasElement);

    var _this = _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).call(this, transform));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredCanvasElement, [{
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexPositionsLength = vertexPositions.length,
          vertexColoursLength = vertexPositionsLength,
          ///
      vertexColour = this.colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
        vertexColours.push(vertexColour);
      }

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);

      _get(ColouredCanvasElement.prototype.__proto__ || Object.getPrototypeOf(ColouredCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var colour = properties.colour,
          colouredCanvasElement = CanvasElement.fromProperties(Class, properties, colour);


      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":19}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../element/canvas');

var initialVertexPositions = [[0.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 1.0], [0.0, 0.0, 1.0]];

var Mask = function (_CanvasElement) {
  _inherits(Mask, _CanvasElement);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Mask, properties);
    }
  }]);

  return Mask;
}(CanvasElement);

module.exports = Mask;

},{"../../element/canvas":19}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mask = require('../../element/canvas/mask'),
    CanvasElement = require('../../element/canvas'),
    maskUtilities = require('../../utilities/mask'),
    imageMapUtilities = require('../../utilities/imageMap');

var calculateIntersectionOfPlanes = maskUtilities.calculateIntersectionOfPlanes,
    textureCoordinatesFromImageNames = imageMapUtilities.textureCoordinatesFromImageNames;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement(transform, imageName) {
    _classCallCheck(this, TexturedCanvasElement);

    var _this = _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).call(this, transform));

    _this.imageName = imageName;
    return _this;
  }

  _createClass(TexturedCanvasElement, [{
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
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms);

      var childElements = this.getChildElements(),
          mask = childElements.find(function (childElement) {
        var childElementMask = childElement instanceof Mask;

        return childElementMask;
      });

      if (mask !== undefined) {
        transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

        var maskVertexPositions = mask.calculateVertexPositions(transforms),
            intersection = calculateIntersectionOfPlanes(vertexPositions, maskVertexPositions);
      }

      var vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          textureCoordinates = this.calculateTextureCoordinates(vertexPositions);

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addTextureCoordinates(textureCoordinates);

      _get(TexturedCanvasElement.prototype.__proto__ || Object.getPrototypeOf(TexturedCanvasElement.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
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

},{"../../element/canvas":19,"../../element/canvas/mask":21,"../../utilities/imageMap":117,"../../utilities/mask":118}],23:[function(require,module,exports){
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

},{"../element":12,"../renderer/colour":96,"../renderer/texture":112}],24:[function(require,module,exports){
'use strict';

module.exports = {
  facets: require('./examples/facets'),
  shapes: require('./examples/shapes'),
  containerHouse: require('./examples/containerHouse')
};

},{"./examples/containerHouse":34,"./examples/facets":73,"./examples/shapes":74}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositions = cuboid.initialVertexPositions;

var ColouredCuboid = function (_ColouredCanvasElemen) {
  _inherits(ColouredCuboid, _ColouredCanvasElemen);

  function ColouredCuboid() {
    _classCallCheck(this, ColouredCuboid);

    return _possibleConstructorReturn(this, (ColouredCuboid.__proto__ || Object.getPrototypeOf(ColouredCuboid)).apply(this, arguments));
  }

  _createClass(ColouredCuboid, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredCuboid, properties);
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;

},{"../../../element/canvas/coloured":20,"../cuboid":28}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositions = cylinder.initialVertexPositions;

var ColouredCylinder = function (_ColouredCanvasElemen) {
  _inherits(ColouredCylinder, _ColouredCanvasElemen);

  function ColouredCylinder() {
    _classCallCheck(this, ColouredCylinder);

    return _possibleConstructorReturn(this, (ColouredCylinder.__proto__ || Object.getPrototypeOf(ColouredCylinder)).apply(this, arguments));
  }

  _createClass(ColouredCylinder, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredCylinder, properties);
    }
  }]);

  return ColouredCylinder;
}(ColouredCanvasElement);

module.exports = ColouredCylinder;

},{"../../../element/canvas/coloured":20,"../cylinder":29}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var initialVertexPositions = plane.initialVertexPositions;

var ColouredPlane = function (_ColouredCanvasElemen) {
  _inherits(ColouredPlane, _ColouredCanvasElemen);

  function ColouredPlane() {
    _classCallCheck(this, ColouredPlane);

    return _possibleConstructorReturn(this, (ColouredPlane.__proto__ || Object.getPrototypeOf(ColouredPlane)).apply(this, arguments));
  }

  _createClass(ColouredPlane, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(ColouredPlane, properties);
    }
  }]);

  return ColouredPlane;
}(ColouredCanvasElement);

module.exports = ColouredPlane;

},{"../../../element/canvas/coloured":20,"../plane":30}],28:[function(require,module,exports){
'use strict';

var initialVertexPositions = [[0.0, 0.0, 1.0], [1.0, 0.0, 1.0], [1.0, 1.0, 1.0], [0.0, 1.0, 1.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0], [1.0, 1.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 1.0, 0.0], [0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 0.0, 1.0], [0.0, 0.0, 1.0], [1.0, 0.0, 0.0], [1.0, 1.0, 0.0], [1.0, 1.0, 1.0], [1.0, 0.0, 1.0], [0.0, 0.0, 0.0], [0.0, 0.0, 1.0], [0.0, 1.0, 1.0], [0.0, 1.0, 0.0]];

module.exports = {
  initialVertexPositions: initialVertexPositions
};

},{}],29:[function(require,module,exports){
'use strict';

var constants = require('../../constants');

var CYLINDER_FACES = constants.CYLINDER_FACES;


var initialVertexPositions = calculateInitialVertexPositions();

module.exports = {
  initialVertexPositions: initialVertexPositions
};

function calculateInitialVertexPositions() {
  var initialVertexPositions = [],
      faces = CYLINDER_FACES,
      step = 2 * Math.PI / faces;

  for (var count = 0; count < faces; count++) {
    var angle = step * count,
        firstX = (Math.cos(angle) + 1) / 2,
        firstY = (Math.sin(angle) + 1) / 2,
        secondX = (Math.cos(angle + step) + 1) / 2,
        secondY = (Math.sin(angle + step) + 1) / 2,
        firstZ = 0,
        secondZ = 1;

    initialVertexPositions.push([firstX, firstY, firstZ]);
    initialVertexPositions.push([secondX, secondY, firstZ]);
    initialVertexPositions.push([secondX, secondY, secondZ]);
    initialVertexPositions.push([firstX, firstY, secondZ]);
  }

  return initialVertexPositions;
}

},{"../../constants":11}],30:[function(require,module,exports){
'use strict';

var initialVertexPositions = [[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 1.0, 0.0], [0.0, 1.0, 0.0]];

module.exports = {
  initialVertexPositions: initialVertexPositions
};

},{}],31:[function(require,module,exports){
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

},{"../../../element/canvas/textured":22,"../cuboid":28}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositions = cylinder.initialVertexPositions;

var TexturedCylinder = function (_TexturedCanvasElemen) {
  _inherits(TexturedCylinder, _TexturedCanvasElemen);

  function TexturedCylinder() {
    _classCallCheck(this, TexturedCylinder);

    return _possibleConstructorReturn(this, (TexturedCylinder.__proto__ || Object.getPrototypeOf(TexturedCylinder)).apply(this, arguments));
  }

  _createClass(TexturedCylinder, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedCylinder, properties);
    }
  }]);

  return TexturedCylinder;
}(TexturedCanvasElement);

module.exports = TexturedCylinder;

},{"../../../element/canvas/textured":22,"../cylinder":29}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var initialVertexPositions = plane.initialVertexPositions;

var TexturedPlane = function (_TexturedCanvasElemen) {
  _inherits(TexturedPlane, _TexturedCanvasElemen);

  function TexturedPlane() {
    _classCallCheck(this, TexturedPlane);

    return _possibleConstructorReturn(this, (TexturedPlane.__proto__ || Object.getPrototypeOf(TexturedPlane)).apply(this, arguments));
  }

  _createClass(TexturedPlane, [{
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      return initialVertexPositions;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TexturedCanvasElement.fromProperties(TexturedPlane, properties);
    }
  }]);

  return TexturedPlane;
}(TexturedCanvasElement);

module.exports = TexturedPlane;

},{"../../../element/canvas/textured":22,"../plane":30}],34:[function(require,module,exports){
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

},{"../canvas":2,"../element/camera":13,"../element/scene":23,"../jiggle":77,"../utilities/imageMap":117,"./containerHouse/balcony/bedroom":35,"./containerHouse/balcony/lower":36,"./containerHouse/balcony/main":37,"./containerHouse/floor/first":65,"./containerHouse/floor/second":66,"./containerHouse/floor/third":67,"./containerHouse/foundations":68,"./containerHouse/frame":70,"./containerHouse/roofGarden":72}],35:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../balcony/railing":38,"../balcony/section":42}],36:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../balcony/railing":38}],37:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../balcony/railing":38,"../balcony/section":42}],38:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./railing/topRail":39,"./railing/uprights":41}],39:[function(require,module,exports){
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

},{"../../../common/coloured/cuboid":25}],40:[function(require,module,exports){
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

},{"../../../common/coloured/cylinder":26}],41:[function(require,module,exports){
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

},{"../../../../element/canvas":19,"./upright":40}],42:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./section/edge":43,"./section/edge/long":44,"./section/edge/short":45,"./section/openMesh":46}],43:[function(require,module,exports){
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

},{"../../../common/textured/cuboid":31}],44:[function(require,module,exports){
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

},{"../edge":43}],45:[function(require,module,exports){
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

},{"../edge":43}],46:[function(require,module,exports){
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

},{"../../../../element/canvas":19,"../../../common/coloured/cuboid":25,"../../../common/coloured/cylinder":26}],47:[function(require,module,exports){
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

},{"../../element/canvas":19,"./container/bottomRails":49,"./container/cornerFittings":51,"./container/cornerPosts":53,"./container/panel/back":56,"./container/panel/front":58,"./container/panel/sideA":59,"./container/panel/sideB":60,"./container/roof":61,"./container/topRails":63}],48:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],49:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./bottomRail":48}],50:[function(require,module,exports){
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

},{"../../common/coloured/cuboid":25}],51:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./cornerFitting":50}],52:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],53:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./cornerPost":52}],54:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 40 });
};

module.exports = FortyFootContainer;

},{"../container":47}],55:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./panel/colouredRidge":57}],56:[function(require,module,exports){
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

},{"../panel":55}],57:[function(require,module,exports){
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

},{"../../../../element/canvas/coloured":20}],58:[function(require,module,exports){
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

},{"../panel":55}],59:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var SidePanelA = function SidePanelA(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight;


  return React.createElement(Panel, { length: length, overallHeight: overallHeight });
};

module.exports = SidePanelA;

},{"../panel":55}],60:[function(require,module,exports){
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

},{"../panel":55}],61:[function(require,module,exports){
'use strict';

var ColouredPlane = require('../../common/coloured/plane');

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


  return React.createElement(ColouredPlane, { colour: colour, width: width, height: height, position: position, rotations: rotations });
};

module.exports = Roof;

},{"../../common/coloured/plane":27}],62:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../../common/coloured/cuboid":25}],63:[function(require,module,exports){
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

},{"../../../element/canvas":19,"./topRail":62}],64:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":47}],65:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../container/fortyFoot":54,"../container/twentyFoot":64}],66:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../container/fortyFoot":54,"../container/twentyFoot":64}],67:[function(require,module,exports){
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

},{"../../../element/canvas":19,"../container/twentyFoot":64}],68:[function(require,module,exports){
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

},{"../../element/canvas":19,"./foundations/concreteSlab":69}],69:[function(require,module,exports){
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

},{"../../common/textured/cuboid":31}],70:[function(require,module,exports){
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

},{"../../element/canvas":19,"./frame/steelSection":71}],71:[function(require,module,exports){
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

},{"../../common/textured/cuboid":31}],72:[function(require,module,exports){
'use strict';

var TexturedPlane = require('../common/textured/plane');

var RoofGarden = function RoofGarden(properties) {
  return React.createElement(TexturedPlane, { width: 20, height: 16, depth: 0, position: [20, 19.01, 32], rotations: [-90, 0, 0], imageName: 'gravel.jpg' });
};

module.exports = RoofGarden;

},{"../common/textured/plane":33}],73:[function(require,module,exports){
'use strict';

require('../jiggle');

var Facet = require('../facet'),
    FacetInXYPlane = require('../facetInXYPlane'),
    VerticalLineInXYPlane = require('../verticalLineInXYPlane');

var facets = function facets() {
      var facetVertices = [[0, 0, 0], ///[ 0, 0, 2 ],
      [2, 0, 0], ///[ 1, 0, 1 ],
      [0, 2, 0]],
          maskFacetVertices = [[0, 0, 1], ///[ 0.5, 0, 1 ],
      [1, 0, 0], ///[ 0.5, 0, 2 ],
      [0, 1, 0]],
          facet = Facet.fromVertices(facetVertices),
          maskFacet = Facet.fromVertices(maskFacetVertices),
          facetInXYPlane = FacetInXYPlane.fromFacet(facet);

      var rotationQuaternion = facetInXYPlane.getRotationQuaternion(),
          translation = facetInXYPlane.getTranslation();

      maskFacet.rotate(rotationQuaternion);
      maskFacet.translate(translation);

      var lineInXYPlane = maskFacet.getLineInXYPlane(),
          verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
          rotationMatrix = verticalLineInXYPlane.getRotationMatrix();

      facetInXYPlane.rotate(rotationMatrix);

      facetInXYPlane.split(verticalLineInXYPlane);
};

module.exports = facets;

},{"../facet":75,"../facetInXYPlane":76,"../jiggle":77,"../verticalLineInXYPlane":122}],74:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Mask = require('../element/canvas/mask'),
    TexturedPlane = require('./common/textured/plane'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredCylinder = require('./common/coloured/cylinder'),
    TexturedCylinder = require('./common/textured/cylinder'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 10, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        TexturedPlane,
        { width: 1, height: 1, imageName: 'gravel.jpg' },
        React.createElement(Mask, { rotations: [0, 0, 0] })
      )
    );
  });
};

module.exports = shapes;

/*

 <TexturedCuboid width={1} height={1} depth={1} position={[ 0, 2, 0 ]} imageName="bricks.jpg" />
 <ColouredCylinder width={1} height={1} depth={1} position={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
 <TexturedCylinder width={1} height={1} depth={1} position={[ 0, 1, -1 ]} rotations={[ 0, 90, 90 ]} imageName="grass.jpg" />

*/

},{"../canvas":2,"../element/camera":13,"../element/canvas/mask":21,"../element/scene":23,"../jiggle":77,"../utilities/imageMap":117,"./common/coloured/cylinder":26,"./common/textured/cuboid":31,"./common/textured/cylinder":32,"./common/textured/plane":33}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices');

var dot = vec3.dot,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    translateVertices = verticesUtilities.translateVertices;

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
    key: 'getLineInXYPlane',
    value: function getLineInXYPlane() {
      var normalComponents = this.normal,
          ///
      firstVertex = first(this.vertices),
          firstNormalComponent = first(normalComponents),
          secondNormalComponent = second(normalComponents),
          a = firstNormalComponent,
          ///
      b = secondNormalComponent,
          ///
      c = -dot(firstVertex, this.normal),
          ///
      lineInXYPlane = LineInXYPlane.fromEquation(a, b, c);

      return lineInXYPlane;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.vertices = rotateVertices(this.vertices, rotationQuaternion);

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'translate',
    value: function translate(translation) {
      this.vertices = translateVertices(this.vertices, translation);
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }]);

  return Facet;
}();

module.exports = Facet;

},{"./lineInXYPlane":78,"./maths/vec3":83,"./utilities/array":114,"./utilities/vertices":121}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    vec2 = require('./maths/vec2'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var transform = vec2.transform,
    first = arrayUtilities.first,
    third = arrayUtilities.third,
    calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    translateVertices = verticesUtilities.translateVertices;

var FacetInXYPlane = function (_Facet) {
  _inherits(FacetInXYPlane, _Facet);

  function FacetInXYPlane(vertices, normal, rotationQuaternion, translation) {
    _classCallCheck(this, FacetInXYPlane);

    var _this = _possibleConstructorReturn(this, (FacetInXYPlane.__proto__ || Object.getPrototypeOf(FacetInXYPlane)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;

    _this.translation = translation;
    return _this;
  }

  _createClass(FacetInXYPlane, [{
    key: 'getRotationQuaternion',
    value: function getRotationQuaternion() {
      return this.rotationQuaternion;
    }
  }, {
    key: 'getTranslation',
    value: function getTranslation() {
      return this.translation;
    }
  }, {
    key: 'getEdgeLinesInXYPlane',
    value: function getEdgeLinesInXYPlane() {
      var edgeLinesInXYPlane = [],
          verticesLength = this.vertices.length;

      for (var index = 0; index < verticesLength; index++) {
        var startIndex = index,
            endIndex = (index + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edgeLineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

        edgeLinesInXYPlane.push(edgeLineInXYPlane);
      }

      return edgeLinesInXYPlane;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationMatrix) {
      var mat2 = rotationMatrix; ///

      this.vertices = this.vertices.map(function (vertex) {
        var vec = vertex;

        vec = transform(vec, mat2);

        vertex = vec;

        return vertex;
      });
    }
  }, {
    key: 'split',
    value: function split(verticalLineInXYPlane) {
      var intersections = this.calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane),
          intersectionsIncludesNull = intersections.includes(null),
          facetsInXYPlane = intersectionsIncludesNull ? this.splitWithNullIntersection(intersections) : this.splitWithoutNullIntersection(intersections);

      return facetsInXYPlane;
    }
  }, {
    key: 'splitWithNullIntersection',
    value: function splitWithNullIntersection(intersections) {
      debugger;
    }
  }, {
    key: 'splitWithoutNullIntersection',
    value: function splitWithoutNullIntersection(intersections) {}
  }, {
    key: 'calculateIntersectionsWithVerticalLineInXYPlane',
    value: function calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var edgeLinesInXYPlane = this.getEdgeLinesInXYPlane(),
          intersections = edgeLinesInXYPlane.map(function (edgeLineInXYPlane) {
        var intersection = edgeLineInXYPlane.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

        return intersection;
      });

      return intersections;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      var translation = calculateTranslation(vertices);

      vertices = translateVertices(vertices, translation);

      normal = calculateNormal(vertices);

      var facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion, translation);

      return facetInXYPlane;
    }
  }]);

  return FacetInXYPlane;
}(Facet);

module.exports = FacetInXYPlane;

function calculateTranslation(vertices) {
  var firstVertex = first(vertices),
      vertex = firstVertex,
      ///
  vertexComponents = vertex,
      ///
  thirdVertexComponent = third(vertexComponents),
      z = thirdVertexComponent,
      ///
  translation = [0, 0, -z];

  return translation;
}

},{"./facet":75,"./lineInXYPlane":78,"./maths/vec2":82,"./utilities/array":114,"./utilities/quaternion":119,"./utilities/vertices":121}],77:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":91}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    arrayUtilities = require('./utilities/array');

var subtract = vec3.subtract,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var LineInXYPlane = function () {
  function LineInXYPlane(position, direction) {
    _classCallCheck(this, LineInXYPlane);

    this.position = position;
    this.direction = direction;
  }

  _createClass(LineInXYPlane, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: 'calculateIntersectionWithVerticalLineInXYPlane',
    value: function calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var intersection = void 0;

      var positionComponents = this.position,
          ///
      directionComponents = this.direction,
          ///
      firstPositionComponent = first(positionComponents),
          secondPositionComponent = second(positionComponents),
          firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents);

      if (firstDirectionComponent === 0) {
        intersection = null;
      } else {
        var a = +secondDirectionComponent,
            ///
        b = -firstDirectionComponent,
            c = firstPositionComponent * secondDirectionComponent - secondPositionComponent * firstDirectionComponent,
            x = verticalLineInXYPlane.getX(),
            y = (c - a * x) / b,
            y1 = secondPositionComponent,
            y2 = secondPositionComponent + secondDirectionComponent;

        intersection = (y - y1) / (y2 - y1);
      }

      return intersection;
    }
  }], [{
    key: 'fromEquation',
    value: function fromEquation(a, b, c) {
      var startVertex = b !== 0 ? [-1, (a - c) / b, 0] : [(b - c) / a, -1, 0],
          endVertex = b !== 0 ? [+1, (-a - c) / b, 0] : [(-b - c) / a, +1, 0],
          position = startVertex,
          ///
      direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

      return lineInXYPlane;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(startVertex, endVertex) {
      var position = startVertex.slice(),
          direction = subtract(endVertex, startVertex),
          lineInXYPlane = new LineInXYPlane(position, direction);

      return lineInXYPlane;
    }
  }]);

  return LineInXYPlane;
}();

module.exports = LineInXYPlane;

},{"./maths/vec3":83,"./utilities/array":114}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec2 = require('./vec2'),
    mat2 = require('./mat2'),
    arrayUtilities = require('../utilities/array');

var invert = mat2.invert,
    subtract = vec2.subtract,
    transform = vec2.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var Line = function () {
  function Line(position, direction) {
    _classCallCheck(this, Line);

    this.position = position;
    this.direction = direction;
  }

  _createClass(Line, [{
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      return this.direction;
    }
  }, {
    key: 'calculateIntersection',
    value: function calculateIntersection(line) {
      var intersection = void 0;

      var linePosition = line.getPosition(),
          lineDirection = line.getDirection(),
          directionComponents = this.direction,
          ///
      lineDirectionComponents = lineDirection,
          ///
      firstDirectionComponent = first(directionComponents),
          secondDirectionComponent = second(directionComponents),
          firstLineDirectionComponent = first(lineDirectionComponents),
          secondLineDirectionComponent = second(lineDirectionComponents),
          mat = invert([+firstDirectionComponent, ///
      +secondDirectionComponent, ///
      -firstLineDirectionComponent, ///
      -secondLineDirectionComponent ///
      ]); ///

      if (mat === null) {
        intersection = null;
      } else {
        var relativePosition = subtract(linePosition, this.position),
            intersections = transform(relativePosition, mat),
            firstIntersection = first(intersections);

        intersection = firstIntersection; ///
      }

      return intersection;
    }
  }], [{
    key: 'fromEquation',
    value: function fromEquation(a, b, c) {
      var firstPosition = b !== 0 ? [-1, (c + a) / b] : [(c + b) / a, -1],
          secondPosition = b !== 0 ? [+1, (c - a) / b] : [(c - b) / a, +1],
          position = firstPosition,
          ///
      direction = subtract(secondPosition, firstPosition),
          line = new Line(position, direction);

      return line;
    }
  }, {
    key: 'fromVertexPositions',
    value: function fromVertexPositions(vertexPositionA, vertexPositionB) {
      var position = vertexPositionA.slice(0, 2),
          direction = subtract(vertexPositionB, vertexPositionA),
          line = new Line(position, direction);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;

},{"../utilities/array":114,"./mat2":80,"./vec2":82}],80:[function(require,module,exports){
'use strict';

var mat2 = require('gl-mat2');

function invert(mat) {
  var out = [];

  out = mat2.invert(out, mat);

  return out;
}

module.exports = {
  invert: invert
};

},{"gl-mat2":130}],81:[function(require,module,exports){
'use strict';

var mat4 = require('gl-mat4');

module.exports = mat4;

},{"gl-mat4":146}],82:[function(require,module,exports){
'use strict';

var vec2 = require('gl-vec2');

function add(vecA, vecB) {
  var out = [];

  vec2.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  var out = [];

  vec2.subtract(out, vecA, vecB);

  return out;
}

function scale(vecA, scalar) {
  var out = [];

  vec2.scale(out, vecA, scalar);

  return out;
}

function normalise(vec) {
  var out = [];

  vec2.normalize(out, vec);

  return out;
}

function transform(vec, mat2) {
  var out = [];

  vec2.transformMat2(out, vec, mat2);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  scale: scale,
  normalise: normalise,
  transform: transform
};

},{"gl-vec2":171}],83:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3');

function add(vecA, vecB) {
  var out = [];

  vec3.add(out, vecA, vecB);

  return out;
}

function subtract(vecA, vecB) {
  var out = [];

  vec3.subtract(out, vecA, vecB);

  return out;
}

function dot(vecA, vecB) {
  var out = vec3.dot(vecA, vecB);

  return out;
}

function cross(vecA, vecB) {
  var out = [];

  vec3.cross(out, vecA, vecB);

  return out;
}

function normalise(vec) {
  var out = [];

  vec3.normalize(out, vec);

  return out;
}

function transform(vec, mat3) {
  var out = [];

  vec3.transformMat3(out, vec, mat3);

  return out;
}

module.exports = {
  add: add,
  subtract: subtract,
  dot: dot,
  cross: cross,
  normalise: normalise,
  transform: transform
};

},{"gl-vec3":201}],84:[function(require,module,exports){
'use strict';

var vec4 = require('gl-vec4');

function transform(vec, mat4) {
  var out = [];

  vec4.transformMat4(out, vec, mat4);

  return out;
}

module.exports = {
  transform: transform
};

},{"gl-vec4":231}],85:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
  function Matrix(mat4) {
    _classCallCheck(this, Matrix);

    this.mat4 = mat4;
  }

  _createClass(Matrix, [{
    key: 'getMat4',
    value: function getMat4() {
      return this.mat4;
    }
  }, {
    key: 'apply',
    value: function apply(uniformLocation, canvas) {
      canvas.applyMatrix(uniformLocation, this.mat4);
    }
  }]);

  return Matrix;
}();

module.exports = Matrix;

},{}],86:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var NormalMatrix = function (_Matrix) {
      _inherits(NormalMatrix, _Matrix);

      function NormalMatrix() {
            _classCallCheck(this, NormalMatrix);

            return _possibleConstructorReturn(this, (NormalMatrix.__proto__ || Object.getPrototypeOf(NormalMatrix)).apply(this, arguments));
      }

      _createClass(NormalMatrix, null, [{
            key: 'fromRotationMatrix',
            value: function fromRotationMatrix(rotationMatrix) {
                  var mat4 = create(),
                      rotationMat4 = rotationMatrix.getMat4(),
                      normalMatrix = new NormalMatrix(mat4);

                  invert(mat4, rotationMat4);

                  transpose(mat4, mat4);

                  return normalMatrix;
            }
      }]);

      return NormalMatrix;
}(Matrix);

module.exports = NormalMatrix;

},{"../maths/mat4":81,"../matrix":85}],87:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    translate = mat4.translate;

var OffsetMatrix = function (_Matrix) {
  _inherits(OffsetMatrix, _Matrix);

  function OffsetMatrix() {
    _classCallCheck(this, OffsetMatrix);

    return _possibleConstructorReturn(this, (OffsetMatrix.__proto__ || Object.getPrototypeOf(OffsetMatrix)).apply(this, arguments));
  }

  _createClass(OffsetMatrix, null, [{
    key: 'fromOffset',
    value: function fromOffset(offset) {
      var mat4 = create(),
          offsetMatrix = new OffsetMatrix(mat4);

      translate(mat4, mat4, offset);

      return offsetMatrix;
    }
  }]);

  return OffsetMatrix;
}(Matrix);

module.exports = OffsetMatrix;

},{"../maths/mat4":81,"../matrix":85}],88:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    translate = mat4.translate;

var PositionMatrix = function (_Matrix) {
      _inherits(PositionMatrix, _Matrix);

      function PositionMatrix() {
            _classCallCheck(this, PositionMatrix);

            return _possibleConstructorReturn(this, (PositionMatrix.__proto__ || Object.getPrototypeOf(PositionMatrix)).apply(this, arguments));
      }

      _createClass(PositionMatrix, null, [{
            key: 'fromDistance',
            value: function fromDistance(distance) {
                  var x = 0,
                      y = 0,
                      z = -distance,
                      ///
                  positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

                  return positionMatrix;
            }
      }, {
            key: 'fromCoordinates',
            value: function fromCoordinates(x, y, z) {
                  var mat4 = create(),
                      positionMatrix = new PositionMatrix(mat4);

                  translate(mat4, mat4, [x, y, z]);

                  return positionMatrix;
            }
      }]);

      return PositionMatrix;
}(Matrix);

module.exports = PositionMatrix;

},{"../maths/mat4":81,"../matrix":85}],89:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix'),
    constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var ProjectionMatrix = function (_Matrix) {
      _inherits(ProjectionMatrix, _Matrix);

      function ProjectionMatrix() {
            _classCallCheck(this, ProjectionMatrix);

            return _possibleConstructorReturn(this, (ProjectionMatrix.__proto__ || Object.getPrototypeOf(ProjectionMatrix)).apply(this, arguments));
      }

      _createClass(ProjectionMatrix, null, [{
            key: 'fromWidthAndHeight',
            value: function fromWidthAndHeight(width, height) {
                  var mat4 = create(),
                      fieldOfView = FIELD_OF_VIEW,
                      aspectRatio = width / height,
                      zNear = Z_NEAR,
                      zFar = Z_FAR,
                      projectionMatrix = new ProjectionMatrix(mat4);

                  perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

                  return projectionMatrix;
            }
      }]);

      return ProjectionMatrix;
}(Matrix);

module.exports = ProjectionMatrix;

},{"../constants":11,"../maths/mat4":81,"../matrix":85}],90:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix');

var create = mat4.create,
    rotate = mat4.rotate;

var RotationMatrix = function (_Matrix) {
      _inherits(RotationMatrix, _Matrix);

      function RotationMatrix() {
            _classCallCheck(this, RotationMatrix);

            return _possibleConstructorReturn(this, (RotationMatrix.__proto__ || Object.getPrototypeOf(RotationMatrix)).apply(this, arguments));
      }

      _createClass(RotationMatrix, null, [{
            key: 'fromAngles',
            value: function fromAngles(angles) {
                  var xAngle = angles.getXAngle(),
                      yAngle = angles.getYAngle(),
                      zAngle = angles.getZAngle(),
                      rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

                  return rotationMatrix;
            }
      }, {
            key: 'fromXAngleYAngleAndZAngle',
            value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
                  var mat4 = create(),
                      rotationMatrix = new RotationMatrix(mat4);

                  rotate(mat4, mat4, xAngle, [1, 0, 0]);
                  rotate(mat4, mat4, yAngle, [0, 1, 0]);
                  rotate(mat4, mat4, zAngle, [0, 0, 1]);

                  return rotationMatrix;
            }
      }]);

      return RotationMatrix;
}(Matrix);

module.exports = RotationMatrix;

},{"../maths/mat4":81,"../matrix":85}],91:[function(require,module,exports){
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

},{"./element":12}],92:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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

},{"../../renderer/buffers":93}],95:[function(require,module,exports){
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

},{"../../renderer/buffers":93}],96:[function(require,module,exports){
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

},{"../renderer":92,"../renderer/buffers/colour":94,"../renderer/data/colour":98,"./locations/colour/attribute":101,"./locations/colour/uniform":102,"./source/colour/fragmentShader":106,"./source/colour/vertexShader":107}],97:[function(require,module,exports){
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

},{"../utilities/array":114}],98:[function(require,module,exports){
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

},{"../../renderer/data":97,"../../utilities/array":114}],99:[function(require,module,exports){
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

},{"../../renderer/data":97,"../../utilities/array":114}],100:[function(require,module,exports){
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

},{"../source/lighting":108,"../source/position":109}],101:[function(require,module,exports){
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

},{"../../locations/attribute":100,"../../source/colour/vertexShader":107}],102:[function(require,module,exports){
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

},{"../../locations/uniform":105}],103:[function(require,module,exports){
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

},{"../../locations/attribute":100,"../../source/texture/vertexShader":111}],104:[function(require,module,exports){
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

},{"../../locations/uniform":105,"../../source/texture/fragmentShader":110}],105:[function(require,module,exports){
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

},{"../source/lighting":108,"../source/position":109}],106:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],107:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":108,"../../source/position":109}],108:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],111:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":108,"../../source/position":109}],112:[function(require,module,exports){
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

},{"../renderer":92,"../renderer/buffers/texture":95,"../renderer/data/texture":99,"./locations/texture/attribute":103,"./locations/texture/uniform":104,"./source/texture/fragmentShader":110,"./source/texture/vertexShader":111}],113:[function(require,module,exports){
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

},{}],114:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


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

function flatten(arrays) {
  return arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);
}

function guarantee(arrayOrElement) {
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

module.exports = Object.assign(arrayUtilities, {
  chop: chop,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":249}],115:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],116:[function(require,module,exports){
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

},{"necessary":249}],117:[function(require,module,exports){
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

},{"../../bin/constants":1,"../utilities/image":116}],118:[function(require,module,exports){
'use strict';

var vec3 = require('../maths/vec3'),
    Line = require('../maths/line'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    subtract = vec3.subtract,
    dot = vec3.dot,
    cross = vec3.cross,
    normalise = vec3.normalise;


function calculateNormal(vertexPositions) {
      var firstVertexPosition = first(vertexPositions),
          secondVertexPosition = second(vertexPositions),
          fourthVertexPosition = fourth(vertexPositions),
          firstVector = subtract(secondVertexPosition, firstVertexPosition),
          secondVector = subtract(fourthVertexPosition, firstVertexPosition),
          normal = normalise(cross(firstVector, secondVector));

      return normal;
}

function calculateIntersectionOfPlanes(vertexPositionsA, vertexPositionsB) {
      var normalA = calculateNormal(vertexPositionsA),
          rotationQuaternion = calculateRotationQuaternion(normalA),
          rotatedVertexPositionsA = rotatePositions(vertexPositionsA, rotationQuaternion),
          rotatedVertexPositionsB = rotatePositions(vertexPositionsB, rotationQuaternion),
          firstRotatedVertexPositionA = first(rotatedVertexPositionsA),
          rotatedVertexPositionA = firstRotatedVertexPositionA,
          ///
      rotatedVertexPositionComponents = rotatedVertexPositionA,
          ///
      thirdRotatedVertexPositionComponent = third(rotatedVertexPositionComponents),
          z = thirdRotatedVertexPositionComponent,
          ///
      normalB = calculateNormal(rotatedVertexPositionsB),
          normalBComponents = normalB,
          ///
      firstNormalBComponent = first(normalBComponents),
          secondNormalBComponent = second(normalBComponents),
          thirdNormalBComponent = third(normalBComponents),
          a = firstNormalBComponent,
          ///
      b = secondNormalBComponent,
          ///
      c = dot(rotatedVertexPositionA, normalB) - thirdNormalBComponent * z,
          intersectionLine = Line.fromEquation(a, b, c),
          lines = linesFromVertexPositions(rotatedVertexPositionsA),
          intersections = lines.map(function (line) {
            var intersection = line.calculateIntersection(intersectionLine);

            return intersection;
      });

      debugger;
}

function linesFromVertexPositions(vertexPositions) {
      var lines = [],
          vertexPositionsLength = vertexPositions.length;

      for (var index = 0; index < vertexPositionsLength; index++) {
            var firstIndex = index,
                secondIndex = (index + 1) % vertexPositionsLength,
                firstVertexPosition = vertexPositions[firstIndex],
                secondVertexPosition = vertexPositions[secondIndex],
                line = Line.fromVertexPositions(firstVertexPosition, secondVertexPosition);

            lines.push(line);
      }

      return lines;
}

module.exports = {
      calculateIntersectionOfPlanes: calculateIntersectionOfPlanes
};

},{"../maths/line":79,"../maths/vec3":83,"../utilities/array":114}],119:[function(require,module,exports){
'use strict';

var vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    angleUtilities = require('../utilities/angle');

var normalise = vec3.normalise,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    calculateHalfAngleCosine = angleUtilities.calculateHalfAngleCosine,
    calculateHalfAngleSine = angleUtilities.calculateHalfAngleSine;


function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
  var rotatedImaginaryQuaternion = hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);

  return rotatedImaginaryQuaternion;
}

function calculateRotationQuaternion(normal) {
  var angleCosineBetweenNormalAndZAxis = calculateAngleCosineBetweenNormalAndZAxis(normal),
      crossProductOfNormalWithZAxis = calculateCrossProductOfNormalWithZAxis(normal),
      angleOfRotationCosine = angleCosineBetweenNormalAndZAxis,
      axisOfRotation = angleOfRotationCosine === 1 ? [0, 0, 1] : ///
  crossProductOfNormalWithZAxis,
      unitAxisOfRotation = normalise(axisOfRotation),
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

module.exports = {
  rotateImaginaryQuaternion: rotateImaginaryQuaternion,
  calculateRotationQuaternion: calculateRotationQuaternion,
  calculateInverseRotationQuaternion: calculateInverseRotationQuaternion
};

function calculateAngleCosineBetweenNormalAndZAxis(normal) {
  var unitNormal = normalise(normal),
      unitNormalComponents = unitNormal,
      ///
  thirdUnitNormalComponent = third(unitNormalComponents),
      angleCosineBetweenNormalAndZAxis = thirdUnitNormalComponent; ///

  return angleCosineBetweenNormalAndZAxis;
}

function calculateCrossProductOfNormalWithZAxis(normal) {
  var normalComponents = normal,
      ///
  firstNormalComponent = first(normalComponents),
      secondNormalComponent = second(normalComponents),
      crossProductOfNormalWithZAxis = [+secondNormalComponent, -firstNormalComponent, 0];

  return crossProductOfNormalWithZAxis;
}

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
      b1 = secondQuaternionAComponent,
      c1 = thirdQuaternionAComponent,
      d1 = fourthQuaternionAComponent,
      a2 = firstQuaternionBComponent,
      b2 = secondQuaternionBComponent,
      c2 = thirdQuaternionBComponent,
      d2 = fourthQuaternionBComponent,
      a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2,
      b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2,
      c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2,
      d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2,
      quaternion = [a, b, c, d];

  return quaternion;
}

},{"../maths/vec3":83,"../utilities/angle":113,"../utilities/array":114}],120:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mat4 = require('../maths/mat4'),
    vec4 = require('../maths/vec4'),
    constants = require('../constants'),
    arrayUtilities = require('../utilities/array');

var DEGREES_TO_RADIANS = constants.DEGREES_TO_RADIANS,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    create = mat4.create,
    scale = mat4.scale,
    rotate = mat4.rotate,
    translate = mat4.translate,
    transform = vec4.transform,
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

  return function (vec) {
    return translate(rotate(scale(vec)));
  };
}

module.exports = module.exports = {
  composeTransform: composeTransform
};

function compose(mat4) {
  return function (vec) {
    return transform([].concat(_toConsumableArray(vec), [1]), mat4).slice(0, 3);
  };
}

function composeScale() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWidth;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHeight;
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDepth;

  var mat4 = create();

  scale(mat4, mat4, [width, height, depth]);

  return compose(mat4);
}

function composeRotate() {
  var rotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRotations;

  var mat4 = create(),
      firstRotation = first(rotations),
      secondRotation = second(rotations),
      thirdRotation = third(rotations),
      xAngle = firstRotation * DEGREES_TO_RADIANS,
      ///
  yAngle = secondRotation * DEGREES_TO_RADIANS,
      ///
  zAngle = thirdRotation * DEGREES_TO_RADIANS; ///

  rotate(mat4, mat4, xAngle, xAxis);
  rotate(mat4, mat4, yAngle, yAxis);
  rotate(mat4, mat4, zAngle, zAxis);

  return compose(mat4);
}

function composeTranslate() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPosition;

  var mat4 = create();

  translate(mat4, mat4, position);

  return compose(mat4);
}

},{"../constants":11,"../maths/mat4":81,"../maths/vec4":84,"../utilities/array":114}],121:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vec3 = require('../maths/vec3'),
    arrayUtilities = require('../utilities/array'),
    quaternionUtilities = require('../utilities/quaternion');

var add = vec3.add,
    subtract = vec3.subtract,
    cross = vec3.cross,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    calculateInverseRotationQuaternion = quaternionUtilities.calculateInverseRotationQuaternion,
    rotateImaginaryQuaternion = quaternionUtilities.rotateImaginaryQuaternion;


function calculateNormal(vertices) {
  var firstVertex = first(vertices),
      secondVertex = second(vertices),
      thirdVertex = third(vertices),
      firstEdge = subtract(secondVertex, firstVertex),
      secondEdge = subtract(thirdVertex, firstVertex),
      normal = cross(firstEdge, secondEdge);

  return normal;
}

function translateVertices(vertices, translation) {
  vertices = vertices.map(function (vertex) {
    vertex = translateVertex(vertex, translation);

    return vertex;
  });

  return vertices;
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
  rotateVertices: rotateVertices,
  translateVertices: translateVertices
};

function translateVertex(vertex, translation) {
  vertex = add(vertex, translation);

  return vertex;
}

function rotateVertex(vertex, rotationQuaternion, inverseRotationQuaternion) {
  var imaginaryQuaternion = [0].concat(_toConsumableArray(vertex)),
      ///
  rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  vertex = rotatedImaginaryQuaternion.slice(1); ///

  return vertex;
}

},{"../maths/vec3":83,"../utilities/array":114,"../utilities/quaternion":119}],122:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array');

var add = vec3.add,
    subtract = vec3.subtract,
    normalise = vec3.normalise,
    transform = vec3.transform,
    first = arrayUtilities.first,
    second = arrayUtilities.second;

var VerticalLineInXYPlane = function (_LineInXYPlane) {
  _inherits(VerticalLineInXYPlane, _LineInXYPlane);

  function VerticalLineInXYPlane(position, direction, rotationMatrix) {
    _classCallCheck(this, VerticalLineInXYPlane);

    var _this = _possibleConstructorReturn(this, (VerticalLineInXYPlane.__proto__ || Object.getPrototypeOf(VerticalLineInXYPlane)).call(this, position, direction));

    _this.rotationMatrix = rotationMatrix;
    return _this;
  }

  _createClass(VerticalLineInXYPlane, [{
    key: 'getRotationMatrix',
    value: function getRotationMatrix() {
      return this.rotationMatrix;
    }
  }, {
    key: 'getX',
    value: function getX() {
      var positionComponents = this.position,
          ///
      firstPositionComponent = first(positionComponents),
          x = firstPositionComponent; ///

      return x;
    }
  }], [{
    key: 'fromLineInXYPlane',
    value: function fromLineInXYPlane(lineInXYPlane) {
      var position = lineInXYPlane.getPosition(),
          direction = lineInXYPlane.getDirection();

      var unitDirection = normalise(direction),
          unitDirectionComponents = unitDirection,
          ///
      firstUnitDirectionComponent = first(unitDirectionComponents),
          secondUnitDirectionComponent = second(unitDirectionComponents),
          angleOfRotationCosine = +secondUnitDirectionComponent,
          ///
      angleOfRotationSine = -firstUnitDirectionComponent,
          ///
      c = angleOfRotationCosine,
          s = angleOfRotationSine,
          rotationMatrix = [c, -s, 0, +s, c, 0, 0, 0, 0]; ///

      var startVertex = position.slice(),
          endVertex = add(position, direction);

      startVertex = rotateVertex(startVertex, rotationMatrix);
      endVertex = rotateVertex(endVertex, rotationMatrix);

      position = startVertex;
      direction = subtract(endVertex, startVertex);

      var verticalLineInXYPlane = new VerticalLineInXYPlane(position, direction, rotationMatrix);

      return verticalLineInXYPlane;
    }
  }]);

  return VerticalLineInXYPlane;
}(LineInXYPlane);

module.exports = VerticalLineInXYPlane;

function rotateVertex(vertex, rotationMatrix) {
  var vec = vertex; ///

  var mat3 = rotationMatrix; ///

  vec = transform(vec, mat3);

  vertex = vec; ///

  return vertex;
}

},{"./lineInXYPlane":78,"./maths/vec3":83,"./utilities/array":114}],123:[function(require,module,exports){

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
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

},{}],127:[function(require,module,exports){
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

},{}],128:[function(require,module,exports){
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

},{}],129:[function(require,module,exports){
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

},{}],130:[function(require,module,exports){
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

},{"./adjoint":124,"./copy":125,"./create":126,"./determinant":127,"./frob":128,"./identity":129,"./invert":131,"./ldu":132,"./multiply":133,"./rotate":134,"./scale":135,"./transpose":136}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
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

},{}],133:[function(require,module,exports){
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

},{}],134:[function(require,module,exports){
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

},{}],135:[function(require,module,exports){
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

},{}],136:[function(require,module,exports){
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

},{}],137:[function(require,module,exports){
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
},{}],138:[function(require,module,exports){
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
},{}],139:[function(require,module,exports){
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
},{}],140:[function(require,module,exports){
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
},{}],141:[function(require,module,exports){
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
},{}],142:[function(require,module,exports){
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
},{}],143:[function(require,module,exports){
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
},{}],144:[function(require,module,exports){
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
},{}],145:[function(require,module,exports){
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
},{}],146:[function(require,module,exports){
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
},{"./adjoint":137,"./clone":138,"./copy":139,"./create":140,"./determinant":141,"./fromQuat":142,"./fromRotationTranslation":143,"./frustum":144,"./identity":145,"./invert":147,"./lookAt":148,"./multiply":149,"./ortho":150,"./perspective":151,"./perspectiveFromFieldOfView":152,"./rotate":153,"./rotateX":154,"./rotateY":155,"./rotateZ":156,"./scale":157,"./str":158,"./translate":159,"./transpose":160}],147:[function(require,module,exports){
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
},{}],148:[function(require,module,exports){
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
},{"./identity":145}],149:[function(require,module,exports){
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
},{}],150:[function(require,module,exports){
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
},{}],151:[function(require,module,exports){
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
},{}],152:[function(require,module,exports){
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


},{}],153:[function(require,module,exports){
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
},{}],154:[function(require,module,exports){
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
},{}],155:[function(require,module,exports){
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
},{}],156:[function(require,module,exports){
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
},{}],157:[function(require,module,exports){
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
},{}],158:[function(require,module,exports){
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
},{}],159:[function(require,module,exports){
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
},{}],160:[function(require,module,exports){
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
},{}],161:[function(require,module,exports){
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
},{}],162:[function(require,module,exports){
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
},{}],163:[function(require,module,exports){
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
},{}],164:[function(require,module,exports){
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
},{}],165:[function(require,module,exports){
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
},{}],166:[function(require,module,exports){
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
},{}],167:[function(require,module,exports){
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
},{}],168:[function(require,module,exports){
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
},{}],169:[function(require,module,exports){
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
},{"./create":164}],170:[function(require,module,exports){
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
},{}],171:[function(require,module,exports){
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
},{"./add":161,"./clone":162,"./copy":163,"./create":164,"./cross":165,"./distance":166,"./divide":167,"./dot":168,"./forEach":169,"./fromValues":170,"./length":172,"./lerp":173,"./max":174,"./min":175,"./multiply":176,"./negate":177,"./normalize":178,"./random":179,"./scale":180,"./scaleAndAdd":181,"./set":182,"./squaredDistance":183,"./squaredLength":184,"./subtract":185,"./transformMat2":186,"./transformMat2d":187,"./transformMat3":188,"./transformMat4":189}],172:[function(require,module,exports){
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
},{}],173:[function(require,module,exports){
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
},{}],174:[function(require,module,exports){
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
},{}],175:[function(require,module,exports){
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
},{}],176:[function(require,module,exports){
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
},{}],177:[function(require,module,exports){
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
},{}],178:[function(require,module,exports){
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
},{}],179:[function(require,module,exports){
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
},{}],180:[function(require,module,exports){
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
},{}],181:[function(require,module,exports){
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
},{}],182:[function(require,module,exports){
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
},{}],183:[function(require,module,exports){
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
},{}],184:[function(require,module,exports){
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
},{}],185:[function(require,module,exports){
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
},{}],186:[function(require,module,exports){
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
},{}],187:[function(require,module,exports){
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
},{}],188:[function(require,module,exports){
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
},{}],189:[function(require,module,exports){
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
},{}],190:[function(require,module,exports){
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
},{}],191:[function(require,module,exports){
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

},{"./dot":198,"./fromValues":200,"./normalize":209}],192:[function(require,module,exports){
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
},{}],193:[function(require,module,exports){
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
},{}],194:[function(require,module,exports){
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
},{}],195:[function(require,module,exports){
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
},{}],196:[function(require,module,exports){
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
},{}],197:[function(require,module,exports){
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
},{}],198:[function(require,module,exports){
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
},{}],199:[function(require,module,exports){
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
},{"./create":194}],200:[function(require,module,exports){
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
},{}],201:[function(require,module,exports){
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
},{"./add":190,"./angle":191,"./clone":192,"./copy":193,"./create":194,"./cross":195,"./distance":196,"./divide":197,"./dot":198,"./forEach":199,"./fromValues":200,"./inverse":202,"./length":203,"./lerp":204,"./max":205,"./min":206,"./multiply":207,"./negate":208,"./normalize":209,"./random":210,"./rotateX":211,"./rotateY":212,"./rotateZ":213,"./scale":214,"./scaleAndAdd":215,"./set":216,"./squaredDistance":217,"./squaredLength":218,"./subtract":219,"./transformMat3":220,"./transformMat4":221,"./transformQuat":222}],202:[function(require,module,exports){
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
},{}],203:[function(require,module,exports){
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
},{}],204:[function(require,module,exports){
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
},{}],205:[function(require,module,exports){
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
},{}],206:[function(require,module,exports){
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
},{}],207:[function(require,module,exports){
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
},{}],208:[function(require,module,exports){
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
},{}],209:[function(require,module,exports){
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
},{}],210:[function(require,module,exports){
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
},{}],211:[function(require,module,exports){
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
},{}],212:[function(require,module,exports){
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
},{}],213:[function(require,module,exports){
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
},{}],214:[function(require,module,exports){
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
},{}],215:[function(require,module,exports){
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
},{}],216:[function(require,module,exports){
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
},{}],217:[function(require,module,exports){
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
},{}],218:[function(require,module,exports){
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
},{}],219:[function(require,module,exports){
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
},{}],220:[function(require,module,exports){
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
},{}],221:[function(require,module,exports){
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
},{}],222:[function(require,module,exports){
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
},{}],223:[function(require,module,exports){
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

},{}],224:[function(require,module,exports){
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

},{}],225:[function(require,module,exports){
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

},{}],226:[function(require,module,exports){
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

},{}],227:[function(require,module,exports){
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

},{}],228:[function(require,module,exports){
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

},{}],229:[function(require,module,exports){
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

},{}],230:[function(require,module,exports){
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

},{}],231:[function(require,module,exports){
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

},{"./add":223,"./clone":224,"./copy":225,"./create":226,"./distance":227,"./divide":228,"./dot":229,"./fromValues":230,"./inverse":232,"./length":233,"./lerp":234,"./max":235,"./min":236,"./multiply":237,"./negate":238,"./normalize":239,"./random":240,"./scale":241,"./scaleAndAdd":242,"./set":243,"./squaredDistance":244,"./squaredLength":245,"./subtract":246,"./transformMat4":247,"./transformQuat":248}],232:[function(require,module,exports){
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

},{}],233:[function(require,module,exports){
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

},{}],234:[function(require,module,exports){
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

},{}],235:[function(require,module,exports){
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

},{}],236:[function(require,module,exports){
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

},{}],237:[function(require,module,exports){
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

},{}],238:[function(require,module,exports){
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

},{}],239:[function(require,module,exports){
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

},{}],240:[function(require,module,exports){
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

},{"./normalize":239,"./scale":241}],241:[function(require,module,exports){
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

},{}],242:[function(require,module,exports){
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

},{}],243:[function(require,module,exports){
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

},{}],244:[function(require,module,exports){
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

},{}],245:[function(require,module,exports){
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

},{}],246:[function(require,module,exports){
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

},{}],247:[function(require,module,exports){
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

},{}],248:[function(require,module,exports){
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

},{}],249:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":250,"./lib/utilities/asynchronous":251,"./lib/utilities/fileSystem":252,"./lib/utilities/path":253}],250:[function(require,module,exports){
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

},{}],251:[function(require,module,exports){
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

},{}],252:[function(require,module,exports){
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

},{"fs":123}],253:[function(require,module,exports){
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

},{"./array":250}]},{},[24])(24)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbnZhcy5qcyIsImVzNi9jYW52YXMvbWl4aW4vYmxlbmRpbmcuanMiLCJlczYvY2FudmFzL21peGluL2J1ZmZlci5qcyIsImVzNi9jYW52YXMvbWl4aW4vY29sb3VyLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9kZXB0aC5qcyIsImVzNi9jYW52YXMvbWl4aW4vbWF0cml4LmpzIiwiZXM2L2NhbnZhcy9taXhpbi9wcm9ncmFtLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9zaGFkZXIuanMiLCJlczYvY2FudmFzL21peGluL3RleHR1cmUuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW1lcmEva2V5RXZlbnRzLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL21vdXNlRXZlbnRzLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL3Bhbi5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS90aWx0LmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL3pvb20uanMiLCJlczYvZWxlbWVudC9jYW52YXMuanMiLCJlczYvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCJlczYvZWxlbWVudC9jYW52YXMvbWFzay5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImVzNi9lbGVtZW50L3NjZW5lLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N5bGluZGVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC9wbGFuZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jeWxpbmRlci5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vcGxhbmUuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL3BsYW5lLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvYmVkcm9vbS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L2xvd2VyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3RvcFJhaWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHRzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS9sb25nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL3Nob3J0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9vcGVuTWVzaC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2JvdHRvbVJhaWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2JvdHRvbVJhaWxzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9jb3JuZXJGaXR0aW5nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9jb3JuZXJGaXR0aW5ncy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvY29ybmVyUG9zdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvY29ybmVyUG9zdHMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2ZvcnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsL2JhY2suanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsL2NvbG91cmVkUmlkZ2UuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsL2Zyb250LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC9zaWRlQS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvc2lkZUIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3Jvb2YuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3RvcFJhaWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3RvcFJhaWxzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci90d2VudHlGb290LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci90aGlyZC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucy9jb25jcmV0ZVNsYWIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZnJhbWUuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZnJhbWUvc3RlZWxTZWN0aW9uLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4uanMiLCJlczYvZXhhbXBsZXMvZmFjZXRzLmpzIiwiZXM2L2V4YW1wbGVzL3NoYXBlcy5qcyIsImVzNi9mYWNldC5qcyIsImVzNi9mYWNldEluWFlQbGFuZS5qcyIsImVzNi9qaWdnbGUuanMiLCJlczYvbGluZUluWFlQbGFuZS5qcyIsImVzNi9tYXRocy9saW5lLmpzIiwiZXM2L21hdGhzL21hdDIuanMiLCJlczYvbWF0aHMvbWF0NC5qcyIsImVzNi9tYXRocy92ZWMyLmpzIiwiZXM2L21hdGhzL3ZlYzMuanMiLCJlczYvbWF0aHMvdmVjNC5qcyIsImVzNi9tYXRyaXguanMiLCJlczYvbWF0cml4L25vcm1hbC5qcyIsImVzNi9tYXRyaXgvb2Zmc2V0LmpzIiwiZXM2L21hdHJpeC9wb3NpdGlvbi5qcyIsImVzNi9tYXRyaXgvcHJvamVjdGlvbi5qcyIsImVzNi9tYXRyaXgvcm90YXRpb24uanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVuZGVyZXIuanMiLCJlczYvcmVuZGVyZXIvYnVmZmVycy5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2RhdGEuanMiLCJlczYvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYW5nbGUuanMiLCJlczYvdXRpbGl0aWVzL2FycmF5LmpzIiwiZXM2L3V0aWxpdGllcy9kb20uanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlLmpzIiwiZXM2L3V0aWxpdGllcy9pbWFnZU1hcC5qcyIsImVzNi91dGlsaXRpZXMvbWFzay5qcyIsImVzNi91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsImVzNi91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwiZXM2L3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsImVzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2Zyb2IuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbGR1LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Fkam9pbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Zyb21RdWF0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcnVzdHVtLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ludmVydC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2xvb2tBdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9wZXJzcGVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9hZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jcm9zcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2Rpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvZGl2aWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvZG90LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2Zyb21WYWx1ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi90cmFuc2Zvcm1NYXQyLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0MmQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi90cmFuc2Zvcm1NYXQzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FuZ2xlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9pbnZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVycC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21heC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21pbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbmVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcmFuZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZUFuZEFkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWREaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zdWJ0cmFjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybU1hdDMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Rpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZGl2aWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZG90LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvaW52ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEseUJBQVIsQ0FBdEI7QUFBQSxJQUNNLGVBQWUsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU0sZUFBZSxRQUFRLHdCQUFSLENBRnJCO0FBQUEsSUFHTSxjQUFjLFFBQVEsdUJBQVIsQ0FIcEI7QUFBQSxJQUlNLGNBQWMsUUFBUSx1QkFBUixDQUpwQjtBQUFBLElBS00sY0FBYyxRQUFRLHVCQUFSLENBTHBCO0FBQUEsSUFNTSxjQUFjLFFBQVEsdUJBQVIsQ0FOcEI7QUFBQSxJQU9NLGFBQWEsUUFBUSxzQkFBUixDQVBuQjtBQUFBLElBUU0sZUFBZSxRQUFRLGlCQUFSLENBUnJCOztJQVVRLHNCLEdBQTJCLFksQ0FBM0Isc0I7OztBQUVSLElBQU0sZ0JBQWdCLENBQXRCOztJQUVNLE07QUFDSixvQkFBaUM7QUFBQSxRQUFyQixRQUFxQix1RUFBVixRQUFVOztBQUFBOztBQUMvQixRQUFNLGFBQWEsdUJBQXVCLFFBQXZCLENBQW5CO0FBQUEsUUFDTSxVQUFVLFdBQVcsVUFBWCxDQUFzQixPQUF0QixDQURoQjs7QUFHQSxRQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1osWUFBTSxJQUFJLEtBQUoscUNBQU47QUFDRDs7QUFFRCxTQUFLLE9BQUwsR0FBZSxPQUFmOztBQUVBLFNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLLE9BQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLLFVBQVo7QUFDRDs7OytCQUVVO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBdkI7QUFBK0I7OztnQ0FFaEM7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QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUdmLDhCQUE0QiwwQkFIYjtBQUlmLHlDQUF1QyxxQ0FKeEI7QUFLZixnQkFBYyxZQUxDO0FBTWYsb0JBQWtCLGdCQU5IO0FBT2YsMEJBQXdCLHNCQVBUO0FBUWYsZ0NBQThCLDRCQVJmO0FBU2YsZ0NBQThCLDRCQVRmO0FBVWYscUNBQW1DLGlDQVZwQjtBQVdmLDJDQUF5QztBQVgxQixDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElNQUdFX1NJWkUgPSAxMjgsXG4gICAgICBJTUFHRV9NQVBfUEFUSCA9ICcvaW1hZ2VNYXAnLFxuICAgICAgSU5ERVhfUEFHRV9QQVRIID0gJy8nLFxuICAgICAgRkFDRVRTX1BBR0VfUEFUSCA9ICcvZmFjZXRzJyxcbiAgICAgIFNIQVBFU19QQUdFX1BBVEggPSAnL3NoYXBlcycsXG4gICAgICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIID0gJy9jb250YWluZXJIb3VzZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJTUFHRV9TSVpFOiBJTUFHRV9TSVpFLFxuICBJTUFHRV9NQVBfUEFUSDogSU1BR0VfTUFQX1BBVEgsXG4gIElOREVYX1BBR0VfUEFUSDogSU5ERVhfUEFHRV9QQVRILFxuICBGQUNFVFNfUEFHRV9QQVRIOiBGQUNFVFNfUEFHRV9QQVRILFxuICBTSEFQRVNfUEFHRV9QQVRIOiBTSEFQRVNfUEFHRV9QQVRILFxuICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIOiBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibGVuZGluZ01peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYmxlbmRpbmcnKSxcbiAgICAgIHByb2dyYW1NaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3RleHR1cmUnKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9idWZmZXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vZGVwdGgnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgY2FudmFzID0gdGhpczsgIC8vL1xuXG4gICAgb2Zmc2V0TWF0cml4LmFwcGx5KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICByb3RhdGlvbk1hdHJpeC5hcHBseShyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICBwb3NpdGlvbk1hdHJpeC5hcHBseShwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcbiAgICBwcm9qZWN0aW9uTWF0cml4LmFwcGx5KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgbm9ybWFsTWF0cml4LmFwcGx5KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIGNvbnN0IGNvdW50ID0gc2hhZGVyLmdldENvdW50KCk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhjb3VudCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgU1JDX0FMUEhBLCBPTkUsIEJMRU5EIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShCTEVORCk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhTUkNfQUxQSEEsIE9ORSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmFibGVCbGVuZGluZzogZW5hYmxlQmxlbmRpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcjogY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXI6IGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXI6IGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlcjogYmluZEJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFIgPSAwLjAsXG4gICAgICBkZWZhdWx0RyA9IDAuMCxcbiAgICAgIGRlZmF1bHRCID0gMC4wLFxuICAgICAgZGVmYXVsdEEgPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBkZWZhdWx0UiwgZyA9IGRlZmF1bHRHLCBiID0gZGVmYXVsdEIsIGEgPSBkZWZhdWx0QSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyQ29sb3VyOiBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXI6IGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0RGVwdGggPSAxLjA7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBkZWZhdWx0RGVwdGgpIHsgXG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihERVBUSF9CVUZGRVJfQklUKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoREVQVEhfVEVTVCk7XG5cbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhMRVFVQUwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZXB0aDogY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcjogY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nOiBlbmFibGVEZXB0aFRlc3Rpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBseU1hdHJpeDogYXBwbHlNYXRyaXhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW06IHVzZVByb2dyYW1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGFkZXI6IGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyOiBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyOiBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSkge1xuICBjb25zdCB7IFRFWFRVUkVfMkQsIFJHQkEsIFVOU0lHTkVEX0JZVEUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbGV2ZWwgPSAwLFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVNaXBtYXAoVEVYVFVSRV8yRCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpIHsgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZTogY3JlYXRlVGV4dHVyZSxcbiAgYWN0aXZhdGVUZXh0dXJlOiBhY3RpdmF0ZVRleHR1cmVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENZTElOREVSX0ZBQ0VTID0gMTYsXG4gICAgICBNSU5JTVVNX0RJU1RBTkNFID0gMTAsXG4gICAgICBERUdSRUVTX1RPX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgRklFTERfT0ZfVklFVyA9IDQ1ICogREVHUkVFU19UT19SQURJQU5TLFxuICAgICAgWl9ORUFSID0gMSxcbiAgICAgIFpfRkFSID0gMTAwMCxcbiAgICAgIE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnLFxuICAgICAgQ1RSTF9LRVlfQ09ERSA9IDE3LFxuICAgICAgU0hJRlRfS0VZX0NPREUgPSAxNixcbiAgICAgIE9GRlNFVF9TQ0FMQVIgPSAwLjI1LFxuICAgICAgRElTVEFOQ0VfU0NBTEFSID0gMS4yNSxcbiAgICAgIEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiA9IDAuMDEsXG4gICAgICBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTID0gWyAwLCAwIF0sXG4gICAgICBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTID0gWyAwLCAwIF07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBaX0ZBUjogWl9GQVIsXG4gIFpfTkVBUjogWl9ORUFSLFxuICBNT1VTRV9VUDogTU9VU0VfVVAsXG4gIE1PVVNFX0RPV046IE1PVVNFX0RPV04sXG4gIE1PVVNFX01PVkU6IE1PVVNFX01PVkUsXG4gIE1PVVNFX1dIRUVMOiBNT1VTRV9XSEVFTCxcbiAgQ1RSTF9LRVlfQ09ERTogQ1RSTF9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREU6IFNISUZUX0tFWV9DT0RFLFxuICBGSUVMRF9PRl9WSUVXOiBGSUVMRF9PRl9WSUVXLFxuICBDWUxJTkRFUl9GQUNFUzogQ1lMSU5ERVJfRkFDRVMsXG4gIE1JTklNVU1fRElTVEFOQ0U6IE1JTklNVU1fRElTVEFOQ0UsXG4gIERFR1JFRVNfVE9fUkFESUFOUzogREVHUkVFU19UT19SQURJQU5TLFxuICBPRkZTRVRfU0NBTEFSOiBPRkZTRVRfU0NBTEFSLFxuICBESVNUQU5DRV9TQ0FMQVI6IERJU1RBTkNFX1NDQUxBUixcbiAgQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSOiBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVM6IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVM6IElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHt9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50T3JQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudE9yUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi9jYW1lcmEvcGFuJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9jYW1lcmEvem9vbScpLFxuICAgICAgdGlsdCA9IHJlcXVpcmUoJy4vY2FtZXJhL3RpbHQnKSxcbiAgICAgIGtleUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgT2Zmc2V0TWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4L29mZnNldCcpLFxuICAgICAgTm9ybWFsTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4L25vcm1hbCcpLFxuICAgICAgUm90YXRpb25NYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4L3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4L3Byb2plY3Rpb24nKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGlsdC5tb3VzZVVwSGFuZGxlcigpO1xuXG4gICAgdGhpcy5wYW4ubW91c2VVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICBcbiAgICB0aWx0Lm1vdXNlRG93bkhhbmRsZXIoKTtcblxuICAgIHRoaXMucGFuLm1vdXNlRG93bkhhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGlsdCk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRpbHQuc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG5cbiAgICB0aGlzLnBhbi5zaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIGFkZEtleUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVyID0gdGhpcy5zaGlmdEtleUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIG9uVXBkYXRlKGhhbmRsZXIpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBvZmZzZXQgPSB0aGlzLnBhbi5nZXRPZmZzZXQoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IE9mZnNldE1hdHJpeC5mcm9tT2Zmc2V0KG9mZnNldCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSBSb3RhdGlvbk1hdHJpeC5mcm9tQW5nbGVzKHRpbHQpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gUG9zaXRpb25NYXRyaXguZnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gUHJvamVjdGlvbk1hdHJpeC5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gTm9ybWFsTWF0cml4LmZyb21Sb3RhdGlvbk1hdHJpeChyb3RhdGlvbk1hdHJpeCk7XG4gICAgXG4gICAgaWYgKHRoaXMuaGFuZGxlcikgeyAgLy8vXG4gICAgICB0aGlzLmhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRLZXlFdmVudEhhbmRsZXJzKCk7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsRGlzdGFuY2UsIGluaXRpYWxPZmZzZXQsIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXQoaW5pdGlhbE9mZnNldCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYShwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKTtcbiAgICBcbiAgICBjYW1lcmEuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQ1RSTF9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIH1cbiAgXG4gIG9uQ3RybEtleVVwKCkge1xuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgICBjdHJsS2V5SGFuZGxlcihjdHJsS2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvblNoaWZ0S2V5VXAoKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gZmFsc2UsXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgICAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBvbkN0cmxLZXlEb3duKCkge1xuICAgIGNvbnN0IGN0cmxLZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY3RybEtleUhhbmRsZXIpIHtcbiAgICAgIGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2hpZnRLZXlEb3duKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRydWUsXG4gICAgICAgICAgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgICAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDdHJsS2V5SGFuZGxlcihjdHJsS2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMucHVzaChjdHJsS2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdO1xuXG4gICAgc2hpZnRLZXlIYW5kbGVycy5wdXNoKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB7fSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzKTtcbiAgICBcbiAgICBoYW5kbGVyc1tDVFJMX0tFWV9DT0RFXSA9IFtdO1xuICAgIGhhbmRsZXJzW1NISUZUX0tFWV9DT0RFXSA9IFtdO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuXG5jb25zdCBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlFdmVudHM7XG5cbmNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5dXAgPSBmdW5jdGlvbihldmVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IENUUkxfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25DdHJsS2V5VXAoKTtcbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vblNoaWZ0S2V5VXAoKTtcbiAgfVxufTtcblxuZG9jdW1lbnRET01FbGVtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlEb3duKCk7XG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICBrZXlFdmVudHMub25TaGlmdEtleURvd24oKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTU9VU0VfVVAsIE1PVVNFX0RPV04sIE1PVVNFX01PVkUsIE1PVVNFX1dIRUVMIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXApIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX0RPV04sIG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZUV2ZW50KGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCwgdGhpcy5jYW52YXMpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbTU9VU0VfV0hFRUxdLFxuICAgICAgICAgIGRlbHRhID0gZGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHtcbiAgICAgICAgICAgIE1PVVNFX1VQOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX0RPV046IFtdLFxuICAgICAgICAgICAgTU9VU0VfTU9WRTogW10sXG4gICAgICAgICAgICBNT1VTRV9XSEVFTDogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgbW91c2VFdmVudHMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlV2hlZWxFdmVudChldmVudCk7IH0pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VFdmVudHM7XG5cbmZ1bmN0aW9uIGRlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIGRlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBldmVudC50YXJnZXQsICAvLy9cbiAgICAgICAgZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgKyhldmVudC5jbGllbnRYIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0KSxcbiAgICAgICAgICAtKGV2ZW50LmNsaWVudFkgLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LnRvcClcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICBkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBoYW5kbGVyKGV2ZW50KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjMicpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkIH0gPSB2ZWMzLFxuICAgICAgeyBzdWJ0cmFjdCwgc2NhbGUgfSA9IHZlYzIsXG4gICAgICB7IE9GRlNFVF9TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG9mZnNldCwgcHJldmlvdXNPZmZzZXQsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSBwcmV2aW91c09mZnNldDtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgYW5nbGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiB0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVPZmZzZXQoYW5nbGVzKTtcbiAgICB9XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG5cbiAgICBpZiAodGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU9mZnNldChhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHNjYWxhciA9IE9GRlNFVF9TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXQgPSBzY2FsZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhciksXG4gICAgICAgICAgZmlyc3RSZWxhdGl2ZU9mZnNldCA9IGZpcnN0KHJlbGF0aXZlT2Zmc2V0KSxcbiAgICAgICAgICBzZWNvbmRSZWxhdGl2ZU9mZnNldCA9IHNlY29uZChyZWxhdGl2ZU9mZnNldCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5wcmV2aW91c09mZnNldC5zbGljZSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLmNvcyh5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldCxcbiAgICAgICAgICAgIHkgPSAwLFxuICAgICAgICAgICAgeiA9IC1NYXRoLnNpbih5QW5nbGUpICogZmlyc3RSZWxhdGl2ZU9mZnNldDtcblxuICAgICAgb2Zmc2V0ID0gYWRkKG9mZnNldCwgW3gsIHksIHpdKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLnNpbih4QW5nbGUpICogTWF0aC5zaW4oeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeSA9IC1NYXRoLmNvcyh4QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB6ID0gK01hdGguc2luKHhBbmdsZSkgKiBNYXRoLmNvcyh5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZChvZmZzZXQsIFt4LCB5LCB6XSk7XG4gICAgfSkoKTtcblxuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0KGluaXRpYWxPZmZzZXQpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcyxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBvZmZzZXQsIHByZXZpb3VzT2Zmc2V0LCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzIgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWMyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZCwgc3VidHJhY3QsIHNjYWxlIH0gPSB2ZWMyLFxuICAgICAgeyBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsIElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5hbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHByZXZpb3VzQW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZUNvb3JkaW5hdGUgPSBzZWNvbmQodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBzZWNvbmRBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHhBbmdsZTtcbiAgfVxuICBcbiAgZ2V0WUFuZ2xlKCkge1xuICAgIGNvbnN0IGZpcnN0QW5nbGVDb29yZGluYXRlID0gZmlyc3QodGhpcy5hbmdsZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB5QW5nbGUgPSAtZmlyc3RBbmdsZUNvb3JkaW5hdGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiAhdGhpcy5zaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMudXBkYXRlQW5nbGVDb29yZGluYXRlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICghc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0KHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGFyKTtcblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFkZCh0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcywgcmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgbW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cblxuY29uc3QgdGlsdCA9IFRpbHQuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aWx0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBESVNUQU5DRV9TQ0FMQVIsIE1JTklNVU1fRElTVEFOQ0UgfSA9IGNvbnN0YW50czsgXG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIGNvbnN0IHNjYWxhciA9IERJU1RBTkNFX1NDQUxBUjtcbiAgICBcbiAgICB0aGlzLmRpc3RhbmNlIC09IGRlbHRhICogc2NhbGFyO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KE1JTklNVU1fRElTVEFOQ0UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWm9vbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IGNob3AgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0LCBjcm9zcywgbm9ybWFsaXNlIH0gPSB2ZWMzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBpbml0aWFsVmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbiA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbjtcblxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHRyYW5zZm9ybSh2ZXJ0ZXhQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgZmFjZXMgPSBjaG9wKHZlcnRleFBvc2l0aW9ucywgNCksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGZhY2U7IC8vL1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMykgJSA0LFxuICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2ZpcnN0VmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbdGhpcmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VmVjdG9yID0gc3VidHJhY3Qoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRWZWN0b3IgPSBzdWJ0cmFjdCh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlKGNyb3NzKGZpcnN0VmVjdG9yLCBzZWNvbmRWZWN0b3IpKTtcblxuICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGZhY2VzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zTGVuZ3RoIC8gNDsgLy8vXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmFjZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogNDtcblxuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDEpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDMpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBjb2xvdXIpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uc0xlbmd0aCwgIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRDYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IFtcblxuICAgICAgICBbIDAuMCwgMC4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMC4wIF0sXG4gICAgICAgIFsgMC4wLCAxLjAsIDEuMCBdLFxuICAgICAgICBbIDAuMCwgMC4wLCAxLjAgXSxcbiAgICAgIFxuICAgICAgXTtcblxuY2xhc3MgTWFzayBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNYXNrID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMvbWFzaycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBtYXNrVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hc2snKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uT2ZQbGFuZXMgfSA9IG1hc2tVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgaW1hZ2VOYW1lKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICB9XG5cbiAgY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgaW1hZ2VOYW1lc0xlbmd0aCA9IHZlcnRleFBvc2l0aW9uc0xlbmd0aCAvIDQsICAvLy9cbiAgICAgICAgICBpbWFnZU5hbWVzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1hZ2VOYW1lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaW1hZ2VOYW1lcy5wdXNoKHRoaXMuaW1hZ2VOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIG1hc2sgPSBjaGlsZEVsZW1lbnRzLmZpbmQoZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRNYXNrID0gKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIE1hc2spO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRFbGVtZW50TWFzaztcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChtYXNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgICAgY29uc3QgbWFza1ZlcnRleFBvc2l0aW9ucyA9IG1hc2suY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgICAgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uT2ZQbGFuZXModmVydGV4UG9zaXRpb25zLCBtYXNrVmVydGV4UG9zaXRpb25zKTtcbiAgICAgIFxuICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLmNhbGN1bGF0ZVRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIFxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGltYWdlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcyksXG4gICAgICAgICAgdHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZhY2V0czogcmVxdWlyZSgnLi9leGFtcGxlcy9mYWNldHMnKSxcbiAgc2hhcGVzOiByZXF1aXJlKCcuL2V4YW1wbGVzL3NoYXBlcycpLFxuICBjb250YWluZXJIb3VzZTogcmVxdWlyZSgnLi9leGFtcGxlcy9jb250YWluZXJIb3VzZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyB9ID0gY3Vib2lkO1xuXG5jbGFzcyBDb2xvdXJlZEN1Ym9pZCBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ3Vib2lkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBDb2xvdXJlZEN5bGluZGVyIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRDeWxpbmRlciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN5bGluZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgfSA9IHBsYW5lO1xuXG5jbGFzcyBDb2xvdXJlZFBsYW5lIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRQbGFuZSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFBsYW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gW1xuXG4gICAgICAgIFsgMC4wLCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDEuMCwgMC4wLCAxLjAgXSxcbiAgICAgICAgWyAxLjAsIDEuMCwgMS4wIF0sXG4gICAgICAgIFsgMC4wLCAxLjAsIDEuMCBdLFxuXG4gICAgICAgIFsgMC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAxLjAsIDEuMCwgMC4wIF0sXG4gICAgICAgIFsgMS4wLCAwLjAsIDAuMCBdLFxuXG4gICAgICAgIFsgMC4wLCAxLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAxLjAsIDEuMCwgMS4wIF0sXG4gICAgICAgIFsgMS4wLCAxLjAsIDAuMCBdLFxuXG4gICAgICAgIFsgMC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDEuMCwgMC4wLCAwLjAgXSxcbiAgICAgICAgWyAxLjAsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMC4wLCAwLjAsIDEuMCBdLFxuXG4gICAgICAgIFsgMS4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDEuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAxLjAsIDEuMCwgMS4wIF0sXG4gICAgICAgIFsgMS4wLCAwLjAsIDEuMCBdLFxuXG4gICAgICAgIFsgMC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMC4wLCAxLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMS4wIF0sXG4gICAgICAgIFsgMC4wLCAxLjAsIDAuMCBdLFxuXG4gICAgICBdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdGlhbFZlcnRleFBvc2l0aW9uczogaW5pdGlhbFZlcnRleFBvc2l0aW9uc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQ1lMSU5ERVJfRkFDRVMgfSA9IGNvbnN0YW50cztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM6IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnNcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgZmFjZXMgPSBDWUxJTkRFUl9GQUNFUyxcbiAgICAgICAgc3RlcCA9IDIgKiBNYXRoLlBJIC8gZmFjZXM7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGZhY2VzOyBjb3VudCsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBzdGVwICogY291bnQsXG4gICAgICAgICAgZmlyc3RYID0gKE1hdGguY29zKGFuZ2xlKSArIDEgKS8gMixcbiAgICAgICAgICBmaXJzdFkgPSAoTWF0aC5zaW4oYW5nbGUpICsgMSApLyAyLFxuICAgICAgICAgIHNlY29uZFggPSAoTWF0aC5jb3MoYW5nbGUgKyBzdGVwKSArIDEgKS8gMixcbiAgICAgICAgICBzZWNvbmRZID0gKE1hdGguc2luKGFuZ2xlICsgc3RlcCkgKyAxICkvIDIsXG4gICAgICAgICAgZmlyc3RaID0gMCxcbiAgICAgICAgICBzZWNvbmRaID0gMTtcblxuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChbIGZpcnN0WCwgZmlyc3RZLCBmaXJzdFogXSk7XG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5wdXNoKFsgc2Vjb25kWCwgc2Vjb25kWSwgZmlyc3RaIF0pO1xuICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChbIHNlY29uZFgsIHNlY29uZFksIHNlY29uZFogXSk7XG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5wdXNoKFsgZmlyc3RYLCBmaXJzdFksIHNlY29uZFogXSk7XG4gIH1cblxuICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IFtcblxuICAgICAgICBbIDAuMCwgMC4wLCAwLjAgXSxcbiAgICAgICAgWyAxLjAsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMS4wLCAxLjAsIDAuMCBdLFxuICAgICAgICBbIDAuMCwgMS4wLCAwLjAgXSxcbiAgICBcbiAgICAgIF07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0aWFsVmVydGV4UG9zaXRpb25zOiBpbml0aWFsVmVydGV4UG9zaXRpb25zXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyB9ID0gY3Vib2lkO1xuXG5jbGFzcyBUZXh0dXJlZEN1Ym9pZCBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkQ3Vib2lkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBUZXh0dXJlZEN5bGluZGVyIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRDeWxpbmRlciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEN5bGluZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgfSA9IHBsYW5lO1xuXG5jbGFzcyBUZXh0dXJlZFBsYW5lIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRQbGFuZSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZFBsYW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZnJhbWUnKSxcbiAgICAgIFJvb2ZHYXJkZW4gPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4nKSxcbiAgICAgIEZpcnN0Rmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0JyksXG4gICAgICBUaGlyZEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci90aGlyZCcpLFxuICAgICAgU2Vjb25kRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZCcpLFxuICAgICAgRm91bmRhdGlvbnMgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zJyksXG4gICAgICBNYWluQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluJyksXG4gICAgICBMb3dlckJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbG93ZXInKSxcbiAgICAgIEJlZHJvb21CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20nKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPEZvdW5kYXRpb25zIC8+XG4gICAgICA8Rmlyc3RGbG9vciAvPlxuICAgICAgPFNlY29uZEZsb29yIC8+XG4gICAgICA8VGhpcmRGbG9vciAvPlxuICAgICAgPFJvb2ZHYXJkZW4gLz5cbiAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgPExvd2VyQmFsY29ueSAvPlxuICAgICAgPEJlZHJvb21CYWxjb255IC8+XG4gICAgICA8RnJhbWUgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEJhbGNvbnlTZWN0aW9uID0gcmVxdWlyZSgnLi4vYmFsY29ueS9zZWN0aW9uJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBCZWRyb29tQmFsY29ueSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMCwgMTksIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNCwgMTksIDAgXX0gLz4sXG5cbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbICAgICAgICAgMCwgMTksIDAgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMTksIDAgXX0gbGVuZ3RoPXsxNn0gcm90YXRpb25zPXtbIDAsIC05MCwgMCBdfS8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCZWRyb29tQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCZWRyb29tQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBMb3dlckJhbGNvbnkgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDAsIDkuNSwgMTYgICAgICAgICAgIF19IGxlbmd0aD17OH0gLz4sXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyA0MCwgOS41LCAzMi10aGlja25lc3MgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDQ4LCA5LjUsIDE2ICAgICAgICAgICBdfSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwXX0gbGVuZ3RoPXsxNn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExvd2VyQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb3dlckJhbGNvbnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKSxcbiAgICAgIFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFJhaWxpbmc7XG5cbmNsYXNzIE1haW5CYWxjb255IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0MCwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQ0LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMzYsIDE5LCAgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAzMiwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDI4LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNDAsIDE5LCAxNiBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0NCwgMTksIDE2IF19IC8+LFxuXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyAyOCwgMTksICAgICAgICAgICAgMCBdfSBsZW5ndGg9ezIwfSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDIwLCAxOSwgMzItdGhpY2tuZXNzIF19IGxlbmd0aD17Mjh9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDgsIDE5LCAwICAgICAgICAgICAgXX0gcm90YXRpb25zPXtbIDAsIC05MCwgMF19IGxlbmd0aD17MzJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYWluQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYWluQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9wUmFpbCA9IHJlcXVpcmUoJy4vcmFpbGluZy90b3BSYWlsJyksXG4gICAgICBVcHJpZ2h0cyA9IHJlcXVpcmUoJy4vcmFpbGluZy91cHJpZ2h0cycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBUb3BSYWlsLFxuICAgICAgb3ZlcmFsbEhlaWdodCA9IDM7XG5cbmNsYXNzIFJhaWxpbmcgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IC8+LFxuXG4gICAgICA8VXByaWdodHMgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IHRoaWNrbmVzcz17dGhpY2tuZXNzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhSYWlsaW5nLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJhaWxpbmcsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjEsXG4gICAgICB0aGlja25lc3MgPSAwLjQsXG4gICAgICBjb2xvdXIgPSBbIDAuNSwgMC41LCAwLjUsIDFdO1xuXG5jb25zdCBUb3BSYWlsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgZGVwdGggPSB0aGlja25lc3MsIC8vL1xuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgb3ZlcmFsbEhlaWdodCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3QgZGlhbWV0ZXIgPSAwLjEyNSxcbiAgICAgIHJhZGl1cyA9IGRpYW1ldGVyIC8gMixcbiAgICAgIGNvbG91ciA9IFsgMC41LCAwLjUsIDAuNSwgMV07XG5cbmNvbnN0IFVwcmlnaHQgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgaGVpZ2h0ID0gZGlhbWV0ZXIsIC8vL1xuICAgICAgICBkZXB0aCA9IG92ZXJhbGxIZWlnaHQ7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e1sgLTkwLCAwLCAwIF19IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oVXByaWdodCwge1xuICByYWRpdXM6IHJhZGl1c1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVXByaWdodCA9IHJlcXVpcmUoJy4vdXByaWdodCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgcmFkaXVzIH0gPSBVcHJpZ2h0O1xuXG5jbGFzcyBVcHJpZ2h0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxIZWlnaHQsIGxlbmd0aCwgdGhpY2tuZXNzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0ZXAgPSAwLjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW3N0ZXAgKiBpbmRleCAtIHJhZGl1cywgMCwgdGhpY2tuZXNzIC8gMiArIHJhZGl1c107XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPFVwcmlnaHQgcG9zaXRpb249e3Bvc2l0aW9ufSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVXByaWdodHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgT3Blbk1lc2ggPSByZXF1aXJlKCcuL3NlY3Rpb24vb3Blbk1lc2gnKSxcbiAgICAgIExvbmdFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UvbG9uZycpLFxuICAgICAgU2hvcnRFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2Uvc2hvcnQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IGhlaWdodCwgdGhpY2tuZXNzIH0gPSBFZGdlLFxuICAgICAgd2lkdGggPSA0LFxuICAgICAgZGVwdGggPSAxNjtcblxuY2xhc3MgQmFsY29ueVNlY3Rpb24gZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxMb25nRWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgIDAsIC1oZWlnaHQsICAgICAgICAgICAgMCBdfSBkZXB0aD17ZGVwdGh9Lz4sXG4gICAgICA8TG9uZ0VkZ2UgcG9zaXRpb249e1sgd2lkdGgtdGhpY2tuZXNzLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gZGVwdGg9e2RlcHRofS8+LFxuXG4gICAgICA8U2hvcnRFZGdlIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAwLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gd2lkdGg9e3dpZHRofS8+LFxuICAgICAgPFNob3J0RWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgMCwgLWhlaWdodCwgMTYtdGhpY2tuZXNzIF19IHdpZHRoPXt3aWR0aH0vPixcblxuICAgICAgPE9wZW5NZXNoIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMCwgdGhpY2tuZXNzIF19IG92ZXJhbGxXaWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBvdmVyYWxsRGVwdGg9e2RlcHRoIC0gMiAqIHRoaWNrbmVzc30gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQmFsY29ueVNlY3Rpb24sIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFsY29ueVNlY3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjI1LFxuICAgICAgdGhpY2tuZXNzID0gMC4xO1xuXG5jb25zdCBFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgd2lkdGgsIGRlcHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZWRDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBwb3NpdGlvbj17cG9zaXRpb259IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cblxuICApO1xufTtcblxuT2JqZWN0LmFzc2lnbihFZGdlLCB7XG4gIGhlaWdodDogaGVpZ2h0LFxuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IExvbmdFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgZGVwdGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxFZGdlIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9uZ0VkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBFZGdlO1xuXG5jb25zdCBTaG9ydEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgZGVwdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2UgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG9ydEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyk7XG5cbmNvbnN0IG92ZXJhbGxIZWlnaHQgPSAwLjI1LFxuICAgICAgb3ZlcmFsbFRoaWNrbmVzcyA9IDAuMDI1LFxuICAgICAgd2lkdGh3aXNlQ291bnQgPSAxMCxcbiAgICAgIGRlcHRod2lzZUNvdW50ID0gNSxcbiAgICAgIGNvbG91ciA9IFsgMC42LCAwLjYsIDAuNiwgMTAgXTtcblxuY2xhc3MgT3Blbk1lc2ggZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsV2lkdGgsIG92ZXJhbGxEZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHdpZHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzdGVwID0gb3ZlcmFsbFdpZHRoIC8gd2lkdGh3aXNlQ291bnQsXG4gICAgICAgICAgICB3aWR0aCA9IG92ZXJhbGxUaGlja25lc3MsICAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxEZXB0aDtcblxuICAgICAgZWxlbWVudHMucHVzaChcblxuICAgICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbc3RlcCAqIGluZGV4LCAtaGVpZ2h0LCAwXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofS8+XG5cbiAgICAgIClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgZGVwdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsRGVwdGggLyBkZXB0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gb3ZlcmFsbEhlaWdodCAvIDIsIC8vL1xuICAgICAgICAgICAgd2lkdGggPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBoZWlnaHQgPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxXaWR0aDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN5bGluZGVyIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAwLCAtMyAqIGRpYW1ldGVyIC8gMiwgc3RlcCAqIGluZGV4IF19IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE9wZW5NZXNoLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5NZXNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFJvb2YgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9yb29mJyksXG4gICAgICBCYWNrUGFuZWwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9iYWNrJyksXG4gICAgICBGcm9udFBhbmVsID0gcmVxdWlyZSgnLi9jb250YWluZXIvcGFuZWwvZnJvbnQnKSxcbiAgICAgIFNpZGVQYW5lbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9zaWRlQScpLFxuICAgICAgU2lkZVBhbmVsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3BhbmVsL3NpZGVCJyksXG4gICAgICBUb3BSYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3RvcFJhaWxzJyksXG4gICAgICBCb3R0b21SYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2JvdHRvbVJhaWxzJyksXG4gICAgICBDb3JuZXJQb3N0cyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lclBvc3RzJyksXG4gICAgICBDb3JuZXJGaXR0aW5ncyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lckZpdHRpbmdzJyk7XG5cbmNvbnN0IG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gOS41O1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxGcm9udFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8QmFja1BhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8U2lkZVBhbmVsQSBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPFNpZGVQYW5lbEIgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxUb3BSYWlscyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPEJvdHRvbVJhaWxzIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8Q29ybmVyUG9zdHMgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5ncyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHRoaWNrbmVzcyA9IDgvMTIsXG4gICAgICBpbmRlbnQgPSAxLzEyO1xuXG5jbGFzcyBCb3R0b21SYWlsIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgICBkZXB0aCA9IHRoaWNrbmVzcyAtIDIqaW5kZW50LFxuICAgICAgICAgIGhlaWdodCA9IHRoaWNrbmVzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgaW5kZW50IF07XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSBjb2xvdXI9e2NvbG91cn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJvdHRvbVJhaWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQm90dG9tUmFpbCwge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm90dG9tUmFpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQm90dG9tUmFpbCA9IHJlcXVpcmUoJy4vYm90dG9tUmFpbCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBCb3R0b21SYWlsO1xuXG5jbGFzcyBCb3R0b21SYWlscyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Qm90dG9tUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgICAwIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxCb3R0b21SYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIGxlbmd0aC10aGlja25lc3MgXX0gbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLXRoaWNrbmVzcywgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb3R0b21SYWlscywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3R0b21SYWlscztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgd2lkdGggPSA5LzEyLFxuICAgICAgaGVpZ2h0ID0gOS8xMixcbiAgICAgIGRlcHRoID0gOS8xMjtcblxuY29uc3QgQ29ybmVyRml0dGluZyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgcG9zaXRpb24gfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyRml0dGluZywge1xuICB3aWR0aDogd2lkdGgsXG4gIGhlaWdodDogaGVpZ2h0LFxuICBkZXB0aDogZGVwdGhcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvcm5lckZpdHRpbmcgPSByZXF1aXJlKCcuL2Nvcm5lckZpdHRpbmcnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0IH0gPSBDb3JuZXJGaXR0aW5nO1xuXG5jbGFzcyBDb3JuZXJGaXR0aW5ncyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAwLCAwIF19IC8+LFxuICAgICAgPENvcm5lckZpdHRpbmcgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQgLSBoZWlnaHQsIDAgXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgMCBdfSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCBvdmVyYWxsSGVpZ2h0IC0gaGVpZ2h0LCAwIF19IC8+LFxuXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lckZpdHRpbmdzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmdzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHdpZHRoID0gOC8xMixcbiAgICAgIGRlcHRoID0gOC8xMixcbiAgICAgIGluZGVudCA9IDEvMTI7XG5cbmNsYXNzIENvcm5lclBvc3QgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBvc2l0aW9uID0gWyBpbmRlbnQsIDAsIGluZGVudCBdLFxuICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQ7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGggLSAyKmluZGVudH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aCAtIDIqaW5kZW50fSBwb3NpdGlvbj17cG9zaXRpb259IGNvbG91cj17Y29sb3VyfSAvPiwgLy8vXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lclBvc3QsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyUG9zdCwge1xuICB3aWR0aDogd2lkdGgsXG4gIGRlcHRoOiBkZXB0aFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29ybmVyUG9zdCA9IHJlcXVpcmUoJy4vY29ybmVyUG9zdCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgd2lkdGgsIGRlcHRoIH0gPSBDb3JuZXJQb3N0O1xuXG5jbGFzcyBDb3JuZXJQb3N0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29ybmVyUG9zdHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXs0MH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3J0eUZvb3RDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRSaWRnZSA9IHJlcXVpcmUoJy4vcGFuZWwvY29sb3VyZWRSaWRnZScpO1xuXG5jbGFzcyBQYW5lbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IDAuMjUsXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCwgLy8vXG4gICAgICAgICAgZGVwdGggPSAwLjEyNSxcbiAgICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdLFxuICAgICAgICAgIHN0ZXAgPSAxLFxuICAgICAgICAgIGluZGVudCA9IDAuMjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQgLSAxOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtkZXB0aCtpbmRlbnQsIDAsIHN0ZXAqaW5kZXggKyBzdGVwLzIsIDBdO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZFJpZGdlIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+LFxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFuZWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgQmFja1BhbmVsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8UGFuZWwgbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+ICAvLy9cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBbXG5cbiAgICAgICAgWyAwLjAsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMC41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAwLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMS41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDEuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAwLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAxLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMi41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDIuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAxLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAyLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMy41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDMuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAyLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAzLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgNC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDQuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAzLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIENvbG91cmVkUmlkZ2UgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFJpZGdlLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUmlkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgRnJvbnRQYW5lbCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCA5MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICAgIDxQYW5lbCBsZW5ndGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz4gIC8vL1xuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb250UGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgU2lkZVBhbmVsQSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxQYW5lbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlUGFuZWxBO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW5lbCA9IHJlcXVpcmUoJy4uL3BhbmVsJyk7XG5cbmNvbnN0IFNpZGVQYW5lbEIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBwb3NpdGlvbiA9IFsgb3ZlcmFsbFdpZHRoLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCAxODAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVQYW5lbEI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3QgaW5kZW50ID0gMS8xMjtcblxuY29uc3QgUm9vZiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gb3ZlcmFsbFdpZHRoIC0gMippbmRlbnQsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCAtIDIqaW5kZW50LFxuICAgICAgICBwb3NpdGlvbiA9IFsgaW5kZW50LCBvdmVyYWxsSGVpZ2h0IC0gaW5kZW50LCBsZW5ndGggLSBpbmRlbnQgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAtOTAsIDAsIDAgXSxcbiAgICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAxIF07XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFBsYW5lIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb2Y7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgdGhpY2tuZXNzID0gOC8xMixcbiAgICAgIGluZGVudCA9IDEvMTI7XG5cbmNsYXNzIFRvcFJhaWwgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgd2lkdGggPSBsZW5ndGgsIC8vL1xuICAgICAgICAgIGRlcHRoID0gdGhpY2tuZXNzIC0gMippbmRlbnQsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpY2tuZXNzLFxuICAgICAgICAgIHBvc2l0aW9uID0gWyAwLCAtaGVpZ2h0LCBpbmRlbnQgXTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IGNvbG91cj17Y29sb3VyfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVG9wUmFpbCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihUb3BSYWlsLCB7XG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb3BSYWlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUb3BSYWlsID0gcmVxdWlyZSgnLi90b3BSYWlsJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFRvcFJhaWw7XG5cbmNsYXNzIFRvcFJhaWxzIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCwgICAgICAgICAgICAgICAgMCBdfSBsZW5ndGg9e292ZXJhbGxXaWR0aH0gLz4sXG4gICAgICA8VG9wUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCBvdmVyYWxsSGVpZ2h0LCBsZW5ndGgtdGhpY2tuZXNzIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxUb3BSYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQsICAgICAgICAgICBsZW5ndGggXX0gbGVuZ3RoPXtsZW5ndGh9IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUb3BSYWlsIHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aC10aGlja25lc3MsIG92ZXJhbGxIZWlnaHQsICAgICAgICAgICBsZW5ndGggXX0gbGVuZ3RoPXtsZW5ndGh9IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVG9wUmFpbHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wUmFpbHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBUd2VudHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IGxlbmd0aD17MjB9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlbnR5Rm9vdENvbnRhaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBGb3J0eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvZm9ydHlGb290JyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY2xhc3MgRmlyc3RGbG9vciBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICA4LCAwLCAzMiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICA4LCAwLCAyNCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAwLCAxNiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAwLCAgOCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZpcnN0Rmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlyc3RGbG9vcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgRm9ydHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL2ZvcnR5Rm9vdCcpLFxuICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBTZWNvbmRGbG9vciBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICAwLCA5LjUsIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDAsIDkuNSwgMjQgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgOS41LCAxNiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCA5LjUsICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2Vjb25kRmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vjb25kRmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgVHdlbnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci90d2VudHlGb290Jyk7XG5cbmNsYXNzIFRoaXJkRmxvb3IgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgMCwgMTksIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDAsIDE5LCAyNCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAxOSwgMTYgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMTksICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGhpcmRGbG9vciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaGlyZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbmNyZXRlU2xhYiA9IHJlcXVpcmUoJy4vZm91bmRhdGlvbnMvY29uY3JldGVTbGFiJyk7XG5cbmNsYXNzIEZvdW5kYXRpb25zIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgLTAuNSwgLTEsIC0wLjUgXX0gd2lkdGg9ezEyLjV9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgICAyNCwgLTEsIC0wLjUgXX0gd2lkdGg9ezI0LjR9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRm91bmRhdGlvbnMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm91bmRhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBDb25jcmV0ZVNsYWIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cImNvbmNyZXRlLmpwZ1wiIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmNyZXRlU2xhYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9mcmFtZS9zdGVlbFNlY3Rpb24nKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGcmFtZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgICAgaGVpZ2h0ID0gMjksXG4gICAgICAgICAgZGVwdGggPSAzMjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG5cbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbICAgICAgLTAuNSwgaGVpZ2h0LTEsIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXtkZXB0aH0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAtMC41LCBoZWlnaHQtMSwgICAgICAtMC41IF0gfSB3aWR0aD17d2lkdGh9IGhlaWdodD17MX0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsIGRlcHRoLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnJhbWUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlZWxTZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyk7XG5cbmNvbnN0IFJvb2ZHYXJkZW4gPSAocHJvcGVydGllcykgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkUGxhbmUgd2lkdGg9ezIwfSBoZWlnaHQ9ezE2fSBkZXB0aD17MH0gcG9zaXRpb249e1sgMjAsIDE5LjAxLCAzMiBdfSByb3RhdGlvbnM9e1sgLTkwLCAwLCAwIF19IGltYWdlTmFtZT1cImdyYXZlbC5qcGdcIiAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb2ZHYXJkZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBGYWNldEluWFlQbGFuZSA9IHJlcXVpcmUoJy4uL2ZhY2V0SW5YWVBsYW5lJyksXG4gICAgICBWZXJ0aWNhbExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuLi92ZXJ0aWNhbExpbmVJblhZUGxhbmUnKTtcblxuY29uc3QgZmFjZXRzID0gKCkgPT4ge1xuICBjb25zdCBmYWNldFZlcnRpY2VzID0gW1xuICAgICAgICAgIFsgMCwgMCwgMCBdLCAvLy9bIDAsIDAsIDIgXSxcbiAgICAgICAgICBbIDIsIDAsIDAgXSwgLy8vWyAxLCAwLCAxIF0sXG4gICAgICAgICAgWyAwLCAyLCAwIF0sIC8vL1sgMCwgMSwgMSBdLFxuICAgICAgICBdLFxuICAgICAgICBtYXNrRmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIDAsIDAsIDEgXSwgIC8vL1sgMC41LCAwLCAxIF0sXG4gICAgICAgICAgWyAxLCAwLCAwIF0sICAvLy9bIDAuNSwgMCwgMiBdLFxuICAgICAgICAgIFsgMCwgMSwgMCBdLCAgLy8vWyAwLjUsIDEsIDEgXSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIG1hc2tGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhtYXNrRmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIGZhY2V0SW5YWVBsYW5lID0gRmFjZXRJblhZUGxhbmUuZnJvbUZhY2V0KGZhY2V0KTtcblxuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBmYWNldEluWFlQbGFuZS5nZXRSb3RhdGlvblF1YXRlcm5pb24oKSxcbiAgICAgICAgdHJhbnNsYXRpb24gPSBmYWNldEluWFlQbGFuZS5nZXRUcmFuc2xhdGlvbigpO1xuXG4gIG1hc2tGYWNldC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgbWFza0ZhY2V0LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbik7XG5cbiAgY29uc3QgbGluZUluWFlQbGFuZSA9IG1hc2tGYWNldC5nZXRMaW5lSW5YWVBsYW5lKCksXG4gICAgICAgIHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSxcbiAgICAgICAgcm90YXRpb25NYXRyaXggPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuZ2V0Um90YXRpb25NYXRyaXgoKTtcblxuICBmYWNldEluWFlQbGFuZS5yb3RhdGUocm90YXRpb25NYXRyaXgpO1xuXG4gIGZhY2V0SW5YWVBsYW5lLnNwbGl0KHZlcnRpY2FsTGluZUluWFlQbGFuZSk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjZXRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW52YXMvbWFzaycpLFxuICAgICAgVGV4dHVyZWRQbGFuZSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyksXG4gICAgICBUZXh0dXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXInKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3Qgc2hhcGVzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezEwfSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8VGV4dHVyZWRQbGFuZSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgPlxuICAgICAgICA8TWFzayByb3RhdGlvbnM9e1sgMCwgMCwgMCBdfSAvPlxuICAgICAgPC9UZXh0dXJlZFBsYW5lPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcGVzO1xuXG4vKlxuXG4gPFRleHR1cmVkQ3Vib2lkIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAyLCAwIF19IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuIDxDb2xvdXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAtMSwgMSBdfSByb3RhdGlvbnM9e1sgMCwgMCwgMCBdfSBjb2xvdXI9e1sgMSwgMCwgMCwgMSBdfSAvPlxuIDxUZXh0dXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAxLCAtMSBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDkwIF19IGltYWdlTmFtZT1cImdyYXNzLmpwZ1wiIC8+XG5cbiovXG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpO1xuXG5jb25zdCB7IGRvdCB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZU5vcm1hbCwgcm90YXRlVmVydGljZXMsIHRyYW5zbGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcztcblxuY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0TGluZUluWFlQbGFuZSgpIHtcbiAgICBjb25zdCBub3JtYWxDb21wb25lbnRzID0gdGhpcy5ub3JtYWwsIC8vL1xuICAgICAgICAgIGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3ROb3JtYWxDb21wb25lbnQgPSBmaXJzdChub3JtYWxDb21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmROb3JtYWxDb21wb25lbnQgPSBzZWNvbmQobm9ybWFsQ29tcG9uZW50cyksXG4gICAgICAgICAgYSA9IGZpcnN0Tm9ybWFsQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYiA9IHNlY29uZE5vcm1hbENvbXBvbmVudCwgLy8vXG4gICAgICAgICAgYyA9IC1kb3QoZmlyc3RWZXJ0ZXgsIHRoaXMubm9ybWFsKSwgLy8vXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbUVxdWF0aW9uKGEsIGIsIGMpO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbiAgXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcm90YXRlVmVydGljZXModGhpcy52ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuICBcbiAgdHJhbnNsYXRlKHRyYW5zbGF0aW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHRyYW5zbGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0ID0gbmV3IEZhY2V0KHZlcnRpY2VzLCBub3JtYWwpO1xuXG4gICAgcmV0dXJuIGZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi9mYWNldCcpLFxuICAgICAgdmVjMiA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMicpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyB0cmFuc2Zvcm0gfSA9IHZlYzIsXG4gICAgICB7IGZpcnN0LCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcywgdHJhbnNsYXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzO1xuXG5jbGFzcyBGYWNldEluWFlQbGFuZSBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uLCB0cmFuc2xhdGlvbikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwpO1xuICAgIFxuICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uO1xuXG4gICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uO1xuICB9XG5cbiAgZ2V0RWRnZUxpbmVzSW5YWVBsYW5lKCkge1xuICAgIGNvbnN0IGVkZ2VMaW5lc0luWFlQbGFuZSA9IFtdLFxuICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgIGVuZEluZGV4ID0gKGluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgZWRnZUxpbmVJblhZUGxhbmUgPSBMaW5lSW5YWVBsYW5lLmZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgZWRnZUxpbmVzSW5YWVBsYW5lLnB1c2goZWRnZUxpbmVJblhZUGxhbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBlZGdlTGluZXNJblhZUGxhbmU7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25NYXRyaXgpIHtcbiAgICBjb25zdCBtYXQyID0gcm90YXRpb25NYXRyaXg7ICAvLy9cblxuICAgIHRoaXMudmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGxldCB2ZWMgPSB2ZXJ0ZXg7XG5cbiAgICAgIHZlYyA9IHRyYW5zZm9ybSh2ZWMsIG1hdDIpO1xuXG4gICAgICB2ZXJ0ZXggPSB2ZWM7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgfSk7XG4gIH1cblxuICBzcGxpdCh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnNJbmNsdWRlc051bGwgPSBpbnRlcnNlY3Rpb25zLmluY2x1ZGVzKG51bGwpLFxuICAgICAgICAgIGZhY2V0c0luWFlQbGFuZSA9IGludGVyc2VjdGlvbnNJbmNsdWRlc051bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZhY2V0c0luWFlQbGFuZTtcbiAgfVxuXG4gIHNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzcGxpdFdpdGhvdXROdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMpIHtcblxuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZUxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRFZGdlTGluZXNJblhZUGxhbmUoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZUxpbmVzSW5YWVBsYW5lLm1hcChmdW5jdGlvbihlZGdlTGluZUluWFlQbGFuZSkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gZWRnZUxpbmVJblhZUGxhbmUuY2FsY3VsYXRlSW50ZXJzZWN0aW9uV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpO1xuICAgIFxuICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcbiAgICBcbiAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gY2FsY3VsYXRlVHJhbnNsYXRpb24odmVydGljZXMpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gdHJhbnNsYXRlVmVydGljZXModmVydGljZXMsIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgXG4gICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKTtcbiAgICBcbiAgICBjb25zdCBmYWNldEluWFlQbGFuZSA9IG5ldyBGYWNldEluWFlQbGFuZSh2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKTtcblxuICAgIHJldHVybiBmYWNldEluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0SW5YWVBsYW5lO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmFuc2xhdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgdmVydGV4ID0gZmlyc3RWZXJ0ZXgsIC8vL1xuICAgICAgICB2ZXJ0ZXhDb21wb25lbnRzID0gdmVydGV4LCAgLy8vXG4gICAgICAgIHRoaXJkVmVydGV4Q29tcG9uZW50ID0gdGhpcmQodmVydGV4Q29tcG9uZW50cyksXG4gICAgICAgIHogPSB0aGlyZFZlcnRleENvbXBvbmVudCwgLy8vXG4gICAgICAgIHRyYW5zbGF0aW9uID0gWzAsIDAsIC16XTtcblxuICByZXR1cm4gdHJhbnNsYXRpb247XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHN1YnRyYWN0IH0gPSB2ZWMzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTGluZUluWFlQbGFuZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGxldCBpbnRlcnNlY3Rpb247XG5cbiAgICBjb25zdCBwb3NpdGlvbkNvbXBvbmVudHMgPSB0aGlzLnBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBkaXJlY3Rpb25Db21wb25lbnRzID0gdGhpcy5kaXJlY3Rpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPSBmaXJzdChkaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmREaXJlY3Rpb25Db21wb25lbnQgPSBzZWNvbmQoZGlyZWN0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBpZiAoZmlyc3REaXJlY3Rpb25Db21wb25lbnQgPT09IDApIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGEgPSArc2Vjb25kRGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICAgIGIgPSAtZmlyc3REaXJlY3Rpb25Db21wb25lbnQsXG4gICAgICAgICAgICBjID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAqIHNlY29uZERpcmVjdGlvbkNvbXBvbmVudCAtIHNlY29uZFBvc2l0aW9uQ29tcG9uZW50ICogZmlyc3REaXJlY3Rpb25Db21wb25lbnQsXG4gICAgICAgICAgICB4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldFgoKSxcbiAgICAgICAgICAgIHkgPSAoYyAtIGEqeCkgLyBiLFxuICAgICAgICAgICAgeTEgPSBzZWNvbmRQb3NpdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIHkyID0gc2Vjb25kUG9zaXRpb25Db21wb25lbnQgKyBzZWNvbmREaXJlY3Rpb25Db21wb25lbnQ7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9ICh5IC0geTEpIC8gKHkyIC0geTEpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWF0aW9uKGEsIGIsIGMpIHtcbiAgICBjb25zdCBzdGFydFZlcnRleCA9IChiICE9PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgLTEsIChhIC0gYykvYiwgMCBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIChiIC0gYykvYSwgLTEsIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSAoYiAhPT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgWyArMSwgKC1hIC0gYykvYiwgMCBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAoLWIgLSBjKS9hLCArMSwgMCBdLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXgsIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBuZXcgTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbGluZUluWFlQbGFuZTsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksXG4gICAgICAgICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IG5ldyBMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lSW5YWVBsYW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnLi92ZWMyJyksXG4gICAgICBtYXQyID0gcmVxdWlyZSgnLi9tYXQyJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGludmVydCB9ID0gbWF0MixcbiAgICAgIHsgc3VidHJhY3QsIHRyYW5zZm9ybSB9ID0gdmVjMixcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGxpbmUpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uO1xuXG4gICAgY29uc3QgbGluZVBvc2l0aW9uID0gbGluZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGxpbmVEaXJlY3Rpb24gPSBsaW5lLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIGRpcmVjdGlvbkNvbXBvbmVudHMgPSB0aGlzLmRpcmVjdGlvbiwgIC8vL1xuICAgICAgICAgIGxpbmVEaXJlY3Rpb25Db21wb25lbnRzID0gbGluZURpcmVjdGlvbiwgIC8vL1xuICAgICAgICAgIGZpcnN0RGlyZWN0aW9uQ29tcG9uZW50ID0gZmlyc3QoZGlyZWN0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgc2Vjb25kRGlyZWN0aW9uQ29tcG9uZW50ID0gc2Vjb25kKGRpcmVjdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGZpcnN0TGluZURpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KGxpbmVEaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmRMaW5lRGlyZWN0aW9uQ29tcG9uZW50ID0gc2Vjb25kKGxpbmVEaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBtYXQgPSBpbnZlcnQoW1xuICAgICAgICAgICAgK2ZpcnN0RGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICAgICtzZWNvbmREaXJlY3Rpb25Db21wb25lbnQsICAvLy9cbiAgICAgICAgICAgIC1maXJzdExpbmVEaXJlY3Rpb25Db21wb25lbnQsIC8vL1xuICAgICAgICAgICAgLXNlY29uZExpbmVEaXJlY3Rpb25Db21wb25lbnQgIC8vL1xuICAgICAgICAgIF0pOyAgLy8vXG5cbiAgICBpZiAobWF0ID09PSBudWxsKSB7XG4gICAgICBpbnRlcnNlY3Rpb24gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QobGluZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGludGVyc2VjdGlvbnMgPSB0cmFuc2Zvcm0ocmVsYXRpdmVQb3NpdGlvbiwgbWF0KSxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJzZWN0aW9uID0gZmlyc3QoaW50ZXJzZWN0aW9ucyk7XG5cbiAgICAgIGludGVyc2VjdGlvbiA9IGZpcnN0SW50ZXJzZWN0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVxdWF0aW9uKGEsIGIsIGMpIHtcbiAgICBjb25zdCBmaXJzdFBvc2l0aW9uID0gKGIgIT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIC0xLCAoYyArIGEpL2IgXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIChjICsgYikvYSwgLTEgXSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IChiICE9PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgKzEsIChjIC0gYSkvYiBdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIChjIC0gYikvYSwgKzEgXSxcbiAgICAgICAgICBwb3NpdGlvbiA9IGZpcnN0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBsaW5lID0gbmV3IExpbmUocG9zaXRpb24sIGRpcmVjdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7ICAgIFxuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25BLCB2ZXJ0ZXhQb3NpdGlvbkIpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uQS5zbGljZSgwLCAyKSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBzdWJ0cmFjdCh2ZXJ0ZXhQb3NpdGlvbkIsIHZlcnRleFBvc2l0aW9uQSksXG4gICAgICAgICAgbGluZSA9IG5ldyBMaW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lOyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0MiA9IHJlcXVpcmUoJ2dsLW1hdDInKTtcblxuZnVuY3Rpb24gaW52ZXJ0KG1hdCkge1xuICBsZXQgb3V0ID0gW107XG5cbiAgb3V0ID0gbWF0Mi5pbnZlcnQob3V0LCBtYXQpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnZlcnQ6IGludmVydFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXQ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMyID0gcmVxdWlyZSgnZ2wtdmVjMicpO1xuXG5mdW5jdGlvbiBhZGQodmVjQSwgdmVjQikge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB2ZWMyLmFkZChvdXQsIHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0KHZlY0EsIHZlY0IpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMi5zdWJ0cmFjdChvdXQsIHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHNjYWxlKHZlY0EsIHNjYWxhcikge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB2ZWMyLnNjYWxlKG91dCwgdmVjQSwgc2NhbGFyKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpc2UodmVjKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzIubm9ybWFsaXplKG91dCwgdmVjKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odmVjLCBtYXQyKSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzIudHJhbnNmb3JtTWF0MihvdXQsIHZlYywgbWF0Mik7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkLFxuICBzdWJ0cmFjdDogc3VidHJhY3QsXG4gIHNjYWxlOiBzY2FsZSxcbiAgbm9ybWFsaXNlOiBub3JtYWxpc2UsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpO1xuXG5mdW5jdGlvbiBhZGQodmVjQSwgdmVjQikge1xuICBjb25zdCBvdXQgPSBbXTtcblxuICB2ZWMzLmFkZChvdXQsIHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0KHZlY0EsIHZlY0IpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMy5zdWJ0cmFjdChvdXQsIHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGRvdCh2ZWNBLCB2ZWNCKSB7XG4gIGNvbnN0IG91dCA9IHZlYzMuZG90KHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGNyb3NzKHZlY0EsIHZlY0IpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMy5jcm9zcyhvdXQsIHZlY0EsIHZlY0IpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZSh2ZWMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMy5ub3JtYWxpemUob3V0LCB2ZWMpO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh2ZWMsIG1hdDMpIHtcbiAgY29uc3Qgb3V0ID0gW107XG5cbiAgdmVjMy50cmFuc2Zvcm1NYXQzKG91dCwgdmVjLCBtYXQzKTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRkOiBhZGQsXG4gIHN1YnRyYWN0OiBzdWJ0cmFjdCxcbiAgZG90OiBkb3QsXG4gIGNyb3NzOiBjcm9zcyxcbiAgbm9ybWFsaXNlOiBub3JtYWxpc2UsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWM0ID0gcmVxdWlyZSgnZ2wtdmVjNCcpO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odmVjLCBtYXQ0KSB7XG4gIGNvbnN0IG91dCA9IFtdO1xuXG4gIHZlYzQudHJhbnNmb3JtTWF0NChvdXQsIHZlYywgbWF0NCk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0NCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXQ0O1xuICB9XG4gIFxuICBhcHBseSh1bmlmb3JtTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5hcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIHRoaXMubWF0NCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKTtcblxuY29uc3QgeyBjcmVhdGUsIGludmVydCwgdHJhbnNwb3NlIH0gPSBtYXQ0O1xuXG5jbGFzcyBOb3JtYWxNYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0NCA9IHJvdGF0aW9uTWF0cml4LmdldE1hdDQoKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBuZXcgTm9ybWFsTWF0cml4KG1hdDQpO1xuXG4gICAgaW52ZXJ0KG1hdDQsIHJvdGF0aW9uTWF0NCk7XG4gICAgXG4gICAgdHJhbnNwb3NlKG1hdDQsIG1hdDQpO1xuICAgIFxuICAgIHJldHVybiBub3JtYWxNYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWxNYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKTtcblxuY29uc3QgeyBjcmVhdGUsIHRyYW5zbGF0ZSB9ID0gbWF0NDtcblxuY2xhc3MgT2Zmc2V0TWF0cml4IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGZyb21PZmZzZXQob2Zmc2V0KSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeCA9IG5ldyBPZmZzZXRNYXRyaXgobWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgb2Zmc2V0KTtcblxuICAgIHJldHVybiBvZmZzZXRNYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPZmZzZXRNYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKTtcblxuY29uc3QgeyBjcmVhdGUsIHRyYW5zbGF0ZSB9ID0gbWF0NDtcblxuY2xhc3MgUG9zaXRpb25NYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgeiA9IC1kaXN0YW5jZSwgLy8vXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tQ29vcmRpbmF0ZXMoeCwgeSwgeik7XG5cbiAgICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHgsIHksIHopIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBuZXcgUG9zaXRpb25NYXRyaXgobWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgWyB4LCB5LCB6IF0pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9zaXRpb25NYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGNyZWF0ZSwgcGVyc3BlY3RpdmUgfSA9IG1hdDQsXG4gICAgICB7IEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUHJvamVjdGlvbk1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsXG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICB6TmVhciA9IFpfTkVBUixcbiAgICAgICAgICB6RmFyID0gWl9GQVIsXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IG5ldyBQcm9qZWN0aW9uTWF0cml4KG1hdDQpO1xuXG4gICAgcGVyc3BlY3RpdmUobWF0NCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Rpb25NYXRyaXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKTtcblxuY29uc3QgeyBjcmVhdGUsIHJvdGF0ZSB9ID0gbWF0NDtcblxuY2xhc3MgUm90YXRpb25NYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbUFuZ2xlcyhhbmdsZXMpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IGFuZ2xlcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IFJvdGF0aW9uTWF0cml4LmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSk7XG5cbiAgICByZXR1cm4gcm90YXRpb25NYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gbmV3IFJvdGF0aW9uTWF0cml4KG1hdDQpO1xuXG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHhBbmdsZSwgWzEsIDAsIDBdKTtcbiAgICByb3RhdGUobWF0NCwgbWF0NCwgeUFuZ2xlLCBbMCwgMSwgMF0pO1xuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB6QW5nbGUsIFswLCAwLCAxXSk7XG5cbiAgICByZXR1cm4gcm90YXRpb25NYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbk1hdHJpeDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQ7XG5cbiAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgfSwgcHJvcGVydGllcyk7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBlbGVtZW50ID0gZnVuYyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpOyB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7IH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTsgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbk9iamVjdC5hc3NpZ24oUmVuZGVyZXIsIHtcbiAgY3JlYXRlUHJvZ3JhbTogY3JlYXRlUHJvZ3JhbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvYnVmZmVycycpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnNCdWZmZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9idWZmZXJzJyk7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuICBcbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuICBcbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXInKSxcbiAgICAgIENvbG91clJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtJyksXG4gICAgICBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHsgdGhpcy5yZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4KSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gbWF4aW11bVZlcnRleEluZGV4O1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCArIDE7XG5cbiAgICB2ZXJ0ZXhJbmRleGVzID0gdmVydGV4SW5kZXhlcy5tYXAoZnVuY3Rpb24odmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleCArIG9mZnNldDtcbiAgICB9KTtcblxuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhpbXVtVmVydGV4SW5kZXgsIC4uLnZlcnRleEluZGV4ZXMpO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzO1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIG1heGltdW1WZXJ0ZXhJbmRleCA9IC0xLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFRleHR1cmVDb29yZGluYXRlcyh0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpO1xuXG5jbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpO1xuXG5jb25zdCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyk7XG5cbmNvbnN0IHsgc2FtcGxlck5hbWUgfSA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuXG5jbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IG5vcm1hbE1hdHJpeE5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyBvZmZzZXRNYXRyaXhOYW1lLCByb3RhdGlvbk1hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb247ICAgIFxuICB9XG4gIFxuICBnZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleENvbG91cicsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24odmVydGV4U2hhZGVyU291cmNlLCB7XG4gIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWU6IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9ybWFsTWF0cml4TmFtZSA9ICd1Tm9ybWFsTWF0cml4JyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24obGlnaHRpbmdTb3VyY2UsIHtcbiAgbm9ybWFsTWF0cml4TmFtZTogbm9ybWFsTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZTogdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9mZnNldE1hdHJpeE5hbWUgPSAndU9mZnNldE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0TWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7b2Zmc2V0TWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbk9iamVjdC5hc3NpZ24ocG9zaXRpb25Tb3VyY2UsIHtcbiAgb2Zmc2V0TWF0cml4TmFtZTogb2Zmc2V0TWF0cml4TmFtZSxcbiAgcm90YXRpb25NYXRyaXhOYW1lOiByb3RhdGlvbk1hdHJpeE5hbWUsXG4gIHBvc2l0aW9uTWF0cml4TmFtZTogcG9zaXRpb25NYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZTogcHJvamVjdGlvbk1hdHJpeE5hbWUsXG4gIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZTogdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihmcmFnbWVudFNoYWRlclNvdXJjZSwge1xuICBzYW1wbGVyTmFtZTogc2FtcGxlck5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gJ2FUZXh0dXJlQ29vcmRpbmF0ZScsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lOiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcykgeyB0aGlzLnJlbmRlcmVyRGF0YS5hZGRUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzKTsgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGNhbnZhcykge1xuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IFRFWFRVUkUwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHRhcmdldCA9IFRFWFRVUkUwLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBUZXh0dXJlUmVuZGVyZXIocHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7XG4gIGNvbnN0IGhhbGZBbmdsZVNpbmUgPSBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTtcblxuICByZXR1cm4gaGFsZkFuZ2xlU2luZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7XG4gIGNvbnN0IGhhbGZBbmdsZUNvc2luZSA9IE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpO1xuXG4gIHJldHVybiBoYWxmQW5nbGVDb3NpbmU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lOiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lLFxuICBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmU6IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeTtcblxuZnVuY3Rpb24gY2hvcChlbGVtZW50cywgYXJyYXlMZW5ndGgpIHtcbiAgY29uc3QgYXJyYXlzID0gW10sXG4gICAgICAgIGVsZW1lbnRzTGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICBhcnJheXNMZW5ndGggPSBlbGVtZW50c0xlbmd0aCAvIGFycmF5TGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYXJyYXlMZW5ndGg7IG9mZnNldCsrKSB7XG4gICAgICBhcnJheVtvZmZzZXRdID0gZWxlbWVudHNbaW5kZXggKiBhcnJheUxlbmd0aCArIG9mZnNldF07XG4gICAgfVxuXG4gICAgYXJyYXlzW2luZGV4XSA9IGFycmF5O1xuICB9XG5cbiAgcmV0dXJuIGFycmF5cztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoZnVuY3Rpb24oZWxlbWVudHMsIGFycmF5KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbihhcnJheVV0aWxpdGllcywge1xuICBjaG9wOiBjaG9wLFxuICBmbGF0dGVuOiBmbGF0dGVuLFxuICBndWFyYW50ZWU6IGd1YXJhbnRlZVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21FbGVtZW50RnJvbVNlbGVjdG9yOiBkb21FbGVtZW50RnJvbVNlbGVjdG9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVwZWF0ZWRseSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2UocGF0aCwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjayhpbWFnZSk7XG4gIH07XG5cbiAgaW1hZ2Uuc3JjID0gcGF0aDsgIC8vL1xufVxuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKHBhdGhzLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gcGF0aHMubGVuZ3RoLCAvLy9cbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXM6IGltYWdlcyxcbiAgICAgICAgICBwYXRoczogcGF0aHNcbiAgICAgICAgfTtcblxuICByZXBlYXRlZGx5KHByZWxvYWRJbWFnZUNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlbG9hZEltYWdlOiBwcmVsb2FkSW1hZ2UsXG4gIHByZWxvYWRJbWFnZXM6IHByZWxvYWRJbWFnZXNcbn07XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZUNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSB7XG4gIGNvbnN0IHsgaW1hZ2VzLCBwYXRocyB9ID0gY29udGV4dCxcbiAgICAgICAgcGF0aCA9IHBhdGhzW2luZGV4XSxcbiAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICBpbWFnZXNbaW5kZXhdID0gaW1hZ2U7XG5cbiAgaW1hZ2Uub25sb2FkID0gbmV4dDsgIC8vL1xuXG4gIGltYWdlLnNyYyA9IHBhdGg7ICAvLy9cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vYmluL2NvbnN0YW50cycpLCAvLy9cbiAgICAgIGltYWdlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlJyk7XG5cbmNvbnN0IHsgSU1BR0VfTUFQX1BBVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHJlbG9hZEltYWdlIH0gPSBpbWFnZVV0aWxpdGllcztcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhdGggPSBJTUFHRV9NQVBfUEFUSDtcblxuICBwcmVsb2FkSW1hZ2UocGF0aCwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBydW50aW1lQ29uZmlndXJhdGlvbiwgIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBpbWFnZU5hbWVzLnJlZHVjZShmdW5jdGlvbih0ZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVOYW1lKSB7XG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLmNvbmNhdChpbWFnZU1hcEpTT05bdGV4dHVyZU5hbWVdKTtcblxuICAgICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJlbG9hZEltYWdlTWFwOiBwcmVsb2FkSW1hZ2VNYXAsXG4gIHRleHR1cmVDb29yZGluYXRlc0Zyb21JbWFnZU5hbWVzOiB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tSW1hZ2VOYW1lc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIExpbmUgPSByZXF1aXJlKCcuLi9tYXRocy9saW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdCwgZG90LCBjcm9zcywgbm9ybWFsaXNlIH0gPSB2ZWMzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGV4UG9zaXRpb25zKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdCh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZCh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICBmb3VydGhWZXJ0ZXhQb3NpdGlvbiA9IGZvdXJ0aCh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFZlY3RvciA9IHN1YnRyYWN0KHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kVmVjdG9yID0gc3VidHJhY3QoZm91cnRoVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBub3JtYWwgPSBub3JtYWxpc2UoY3Jvc3MoZmlyc3RWZWN0b3IsIHNlY29uZFZlY3RvcikpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbk9mUGxhbmVzKHZlcnRleFBvc2l0aW9uc0EsIHZlcnRleFBvc2l0aW9uc0IpIHtcbiAgY29uc3Qgbm9ybWFsQSA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0ZXhQb3NpdGlvbnNBKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbEEpLFxuICAgICAgICByb3RhdGVkVmVydGV4UG9zaXRpb25zQSA9IHJvdGF0ZVBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnNBLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkVmVydGV4UG9zaXRpb25zQiA9IHJvdGF0ZVBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnNCLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBmaXJzdFJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkEgPSBmaXJzdChyb3RhdGVkVmVydGV4UG9zaXRpb25zQSksXG4gICAgICAgIHJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkEgPSBmaXJzdFJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkEsIC8vL1xuICAgICAgICByb3RhdGVkVmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gcm90YXRlZFZlcnRleFBvc2l0aW9uQSwgIC8vL1xuICAgICAgICB0aGlyZFJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB6ID0gdGhpcmRSb3RhdGVkVmVydGV4UG9zaXRpb25Db21wb25lbnQsICAvLy9cbiAgICAgICAgbm9ybWFsQiA9IGNhbGN1bGF0ZU5vcm1hbChyb3RhdGVkVmVydGV4UG9zaXRpb25zQiksXG4gICAgICAgIG5vcm1hbEJDb21wb25lbnRzID0gbm9ybWFsQiwgIC8vL1xuICAgICAgICBmaXJzdE5vcm1hbEJDb21wb25lbnQgPSBmaXJzdChub3JtYWxCQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZE5vcm1hbEJDb21wb25lbnQgPSBzZWNvbmQobm9ybWFsQkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZE5vcm1hbEJDb21wb25lbnQgPSB0aGlyZChub3JtYWxCQ29tcG9uZW50cyksXG4gICAgICAgIGEgPSBmaXJzdE5vcm1hbEJDb21wb25lbnQsICAvLy9cbiAgICAgICAgYiA9IHNlY29uZE5vcm1hbEJDb21wb25lbnQsIC8vL1xuICAgICAgICBjID0gZG90KHJvdGF0ZWRWZXJ0ZXhQb3NpdGlvbkEsIG5vcm1hbEIpIC0gdGhpcmROb3JtYWxCQ29tcG9uZW50ICogeixcbiAgICAgICAgaW50ZXJzZWN0aW9uTGluZSA9IExpbmUuZnJvbUVxdWF0aW9uKGEsIGIsIGMpLFxuICAgICAgICBsaW5lcyA9IGxpbmVzRnJvbVZlcnRleFBvc2l0aW9ucyhyb3RhdGVkVmVydGV4UG9zaXRpb25zQSksXG4gICAgICAgIGludGVyc2VjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGxpbmUuY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbkxpbmUpO1xuXG4gICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgZGVidWdnZXJcbn1cblxuZnVuY3Rpb24gbGluZXNGcm9tVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICBjb25zdCBsaW5lcyA9IFtdLFxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGg7IGluZGV4KysgKSB7XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGluZGV4LFxuICAgICAgICAgIHNlY29uZEluZGV4ID0gKGluZGV4ICsgMSkgJSB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGgsXG4gICAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tmaXJzdEluZGV4XSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRJbmRleF0sXG4gICAgICAgICAgbGluZSA9IExpbmUuZnJvbVZlcnRleFBvc2l0aW9ucyhmaXJzdFZlcnRleFBvc2l0aW9uLCBzZWNvbmRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uT2ZQbGFuZXM6IGNhbGN1bGF0ZUludGVyc2VjdGlvbk9mUGxhbmVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjMycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFuZ2xlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FuZ2xlJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlIH0gPSB2ZWMzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gPSBhbmdsZVV0aWxpdGllcztcblxuZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHJldHVybiByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBhbmdsZUNvc2luZUJldHdlZW5Ob3JtYWxBbmRaQXhpcyA9IGNhbGN1bGF0ZUFuZ2xlQ29zaW5lQmV0d2Vlbk5vcm1hbEFuZFpBeGlzKG5vcm1hbCksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mTm9ybWFsV2l0aFpBeGlzID0gY2FsY3VsYXRlQ3Jvc3NQcm9kdWN0T2ZOb3JtYWxXaXRoWkF4aXMobm9ybWFsKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gYW5nbGVDb3NpbmVCZXR3ZWVuTm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9PT0gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgWzAsIDAsIDFdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mTm9ybWFsV2l0aFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uOiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb246IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjogY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvblxufTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlQW5nbGVDb3NpbmVCZXR3ZWVuTm9ybWFsQW5kWkF4aXMobm9ybWFsKSB7XG4gIGNvbnN0IHVuaXROb3JtYWwgPSBub3JtYWxpc2Uobm9ybWFsKSxcbiAgICAgICAgdW5pdE5vcm1hbENvbXBvbmVudHMgPSB1bml0Tm9ybWFsLCAgLy8vXG4gICAgICAgIHRoaXJkVW5pdE5vcm1hbENvbXBvbmVudCA9IHRoaXJkKHVuaXROb3JtYWxDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVDb3NpbmVCZXR3ZWVuTm9ybWFsQW5kWkF4aXMgPSB0aGlyZFVuaXROb3JtYWxDb21wb25lbnQ7ICAvLy9cblxuICByZXR1cm4gYW5nbGVDb3NpbmVCZXR3ZWVuTm9ybWFsQW5kWkF4aXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNyb3NzUHJvZHVjdE9mTm9ybWFsV2l0aFpBeGlzKG5vcm1hbCkge1xuICBjb25zdCBub3JtYWxDb21wb25lbnRzID0gbm9ybWFsLCAgLy8vXG4gICAgICAgIGZpcnN0Tm9ybWFsQ29tcG9uZW50ID0gZmlyc3Qobm9ybWFsQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZE5vcm1hbENvbXBvbmVudCA9IHNlY29uZChub3JtYWxDb21wb25lbnRzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZOb3JtYWxXaXRoWkF4aXMgPSBbXG4gICAgICAgICAgK3NlY29uZE5vcm1hbENvbXBvbmVudCxcbiAgICAgICAgICAtZmlyc3ROb3JtYWxDb21wb25lbnQsXG4gICAgICAgICAgMFxuICAgICAgICBdO1xuXG4gIHJldHVybiBjcm9zc1Byb2R1Y3RPZk5vcm1hbFdpdGhaQXhpcztcbn1cblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBxdWF0ZXJuaW9uQUNvbXBvbmVudHMgPSBxdWF0ZXJuaW9uQSwgIC8vL1xuICAgICAgICBxdWF0ZXJuaW9uQkNvbXBvbmVudHMgPSBxdWF0ZXJuaW9uQiwgIC8vL1xuICAgICAgICBmaXJzdFF1YXRlcm5pb25BQ29tcG9uZW50ID0gZmlyc3QocXVhdGVybmlvbkFDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUXVhdGVybmlvbkFDb21wb25lbnQgPSBzZWNvbmQocXVhdGVybmlvbkFDb21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRRdWF0ZXJuaW9uQUNvbXBvbmVudCA9IHRoaXJkKHF1YXRlcm5pb25BQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFF1YXRlcm5pb25BQ29tcG9uZW50ID0gZm91cnRoKHF1YXRlcm5pb25BQ29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0UXVhdGVybmlvbkJDb21wb25lbnQgPSBmaXJzdChxdWF0ZXJuaW9uQkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRRdWF0ZXJuaW9uQkNvbXBvbmVudCA9IHNlY29uZChxdWF0ZXJuaW9uQkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFF1YXRlcm5pb25CQ29tcG9uZW50ID0gdGhpcmQocXVhdGVybmlvbkJDb21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUXVhdGVybmlvbkJDb21wb25lbnQgPSBmb3VydGgocXVhdGVybmlvbkJDb21wb25lbnRzKSxcbiAgICAgICAgYTEgPSBmaXJzdFF1YXRlcm5pb25BQ29tcG9uZW50LFxuICAgICAgICBiMSA9IHNlY29uZFF1YXRlcm5pb25BQ29tcG9uZW50LFxuICAgICAgICBjMSA9IHRoaXJkUXVhdGVybmlvbkFDb21wb25lbnQsXG4gICAgICAgIGQxID0gZm91cnRoUXVhdGVybmlvbkFDb21wb25lbnQsXG4gICAgICAgIGEyID0gZmlyc3RRdWF0ZXJuaW9uQkNvbXBvbmVudCxcbiAgICAgICAgYjIgPSBzZWNvbmRRdWF0ZXJuaW9uQkNvbXBvbmVudCxcbiAgICAgICAgYzIgPSB0aGlyZFF1YXRlcm5pb25CQ29tcG9uZW50LFxuICAgICAgICBkMiA9IGZvdXJ0aFF1YXRlcm5pb25CQ29tcG9uZW50LFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnLi4vbWF0aHMvbWF0NCcpLFxuICAgICAgdmVjNCA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzQnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBERUdSRUVTX1RPX1JBRElBTlMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGUsIHNjYWxlLCByb3RhdGUsIHRyYW5zbGF0ZSB9ID0gbWF0NCxcbiAgICAgIHsgdHJhbnNmb3JtIH0gPSB2ZWM0LFxuICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgZGVmYXVsdFdpZHRoID0gMSxcbiAgICAgIGRlZmF1bHREZXB0aCA9IDEsXG4gICAgICBkZWZhdWx0SGVpZ2h0ID0gMSxcbiAgICAgIGRlZmF1bHRQb3NpdGlvbiA9IFsgMCwgMCwgMCBdLFxuICAgICAgZGVmYXVsdFJvdGF0aW9ucyA9IFsgMCwgMCwgMCBdO1xuXG5mdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxlID0gY29tcG9zZVNjYWxlKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSxcbiAgICAgICAgcm90YXRlID0gY29tcG9zZVJvdGF0ZShyb3RhdGlvbnMpLFxuICAgICAgICB0cmFuc2xhdGUgPSBjb21wb3NlVHJhbnNsYXRlKHBvc2l0aW9uKTtcblxuICByZXR1cm4gZnVuY3Rpb24odmVjKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZShyb3RhdGUoc2NhbGUodmVjKSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wb3NlVHJhbnNmb3JtOiBjb21wb3NlVHJhbnNmb3JtXG59O1xuXG5mdW5jdGlvbiBjb21wb3NlKG1hdDQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZlYykge1xuICAgIHJldHVybiB0cmFuc2Zvcm0oWy4uLnZlYywgMV0sIG1hdDQpLnNsaWNlKDAsIDMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb3NlU2NhbGUod2lkdGggPSBkZWZhdWx0V2lkdGgsIGhlaWdodCA9IGRlZmF1bHRIZWlnaHQsIGRlcHRoID0gZGVmYXVsdERlcHRoKSB7XG4gIGNvbnN0IG1hdDQgPSBjcmVhdGUoKTtcblxuICBzY2FsZShtYXQ0LCBtYXQ0LCBbIHdpZHRoLCBoZWlnaHQsIGRlcHRoIF0pO1xuXG4gIHJldHVybiBjb21wb3NlKG1hdDQpO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlUm90YXRlKHJvdGF0aW9ucyA9IGRlZmF1bHRSb3RhdGlvbnMpIHtcbiAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICBmaXJzdFJvdGF0aW9uID0gZmlyc3Qocm90YXRpb25zKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb24gPSBzZWNvbmQocm90YXRpb25zKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvbiA9IHRoaXJkKHJvdGF0aW9ucyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0Um90YXRpb24gKiBERUdSRUVTX1RPX1JBRElBTlMsICAvLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kUm90YXRpb24gKiBERUdSRUVTX1RPX1JBRElBTlMsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TOyAgLy8vXG5cbiAgcm90YXRlKG1hdDQsIG1hdDQsIHhBbmdsZSwgeEF4aXMpO1xuICByb3RhdGUobWF0NCwgbWF0NCwgeUFuZ2xlLCB5QXhpcyk7XG4gIHJvdGF0ZShtYXQ0LCBtYXQ0LCB6QW5nbGUsIHpBeGlzKTtcblxuICByZXR1cm4gY29tcG9zZShtYXQ0KTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zbGF0ZShwb3NpdGlvbiA9IGRlZmF1bHRQb3NpdGlvbikge1xuICBjb25zdCBtYXQ0ID0gY3JlYXRlKCk7XG5cbiAgdHJhbnNsYXRlKG1hdDQsIG1hdDQsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gY29tcG9zZShtYXQ0KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyBhZGQsIHN1YnRyYWN0LCBjcm9zcyB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLCByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdEVkZ2UgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXgsIGZpcnN0VmVydGV4KSxcbiAgICAgICAgc2Vjb25kRWRnZSA9IHN1YnRyYWN0KHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCksXG4gICAgICAgIG5vcm1hbCA9IGNyb3NzKGZpcnN0RWRnZSwgc2Vjb25kRWRnZSk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlVmVydGljZXModmVydGljZXMsIHRyYW5zbGF0aW9uKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgIHZlcnRleCA9IHRyYW5zbGF0ZVZlcnRleCh2ZXJ0ZXgsIHRyYW5zbGF0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgdmVydGV4ID0gcm90YXRlVmVydGV4KHZlcnRleCwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlTm9ybWFsOiBjYWxjdWxhdGVOb3JtYWwsXG4gIHJvdGF0ZVZlcnRpY2VzOiByb3RhdGVWZXJ0aWNlcyxcbiAgdHJhbnNsYXRlVmVydGljZXM6IHRyYW5zbGF0ZVZlcnRpY2VzXG59O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVWZXJ0ZXgodmVydGV4LCB0cmFuc2xhdGlvbikge1xuICB2ZXJ0ZXggPSBhZGQodmVydGV4LCB0cmFuc2xhdGlvbik7XG5cbiAgcmV0dXJuIHZlcnRleDtcbn1cblxuZnVuY3Rpb24gcm90YXRlVmVydGV4KHZlcnRleCwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBbMCwgLi4udmVydGV4XSwgLy8vXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRleCA9IHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyAvLy9cblxuICByZXR1cm4gdmVydGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi9tYXRocy92ZWMzJyksXG4gICAgICBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgYWRkLCBzdWJ0cmFjdCwgbm9ybWFsaXNlLCB0cmFuc2Zvcm0gfSA9IHZlYzMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUgZXh0ZW5kcyBMaW5lSW5YWVBsYW5lIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGRpcmVjdGlvbiwgcm90YXRpb25NYXRyaXgpIHtcbiAgICBzdXBlcihwb3NpdGlvbiwgZGlyZWN0aW9uKTtcblxuICAgIHRoaXMucm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeDtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4O1xuICB9XG4gIFxuICBnZXRYKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50cyA9IHRoaXMucG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHggPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4geDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gbGluZUluWFlQbGFuZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBkaXJlY3Rpb24gPSBsaW5lSW5YWVBsYW5lLmdldERpcmVjdGlvbigpO1xuXG4gICAgY29uc3QgdW5pdERpcmVjdGlvbiA9IG5vcm1hbGlzZShkaXJlY3Rpb24pLFxuICAgICAgICAgIHVuaXREaXJlY3Rpb25Db21wb25lbnRzID0gdW5pdERpcmVjdGlvbiwgIC8vL1xuICAgICAgICAgIGZpcnN0VW5pdERpcmVjdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmRVbml0RGlyZWN0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXREaXJlY3Rpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSArc2Vjb25kVW5pdERpcmVjdGlvbkNvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAtZmlyc3RVbml0RGlyZWN0aW9uQ29tcG9uZW50LCAvLy9cbiAgICAgICAgICBjID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIHMgPSBhbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gWyBjLCAtcywgMCwgK3MsIGMsIDAsIDAsIDAsIDAgXTsgIC8vL1xuXG4gICAgbGV0IHN0YXJ0VmVydGV4ID0gcG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgZW5kVmVydGV4ID0gYWRkKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgc3RhcnRWZXJ0ZXggPSByb3RhdGVWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIHJvdGF0aW9uTWF0cml4KTtcbiAgICBlbmRWZXJ0ZXggPSByb3RhdGVWZXJ0ZXgoZW5kVmVydGV4LCByb3RhdGlvbk1hdHJpeCk7XG5cbiAgICBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4O1xuICAgIGRpcmVjdGlvbiA9IHN1YnRyYWN0KGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpO1xuXG4gICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gbmV3IFZlcnRpY2FsTGluZUluWFlQbGFuZShwb3NpdGlvbiwgZGlyZWN0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lSW5YWVBsYW5lO1xuXG5mdW5jdGlvbiByb3RhdGVWZXJ0ZXgodmVydGV4LCByb3RhdGlvbk1hdHJpeCkge1xuICBsZXQgdmVjID0gdmVydGV4OyAvLy9cblxuICBjb25zdCBtYXQzID0gcm90YXRpb25NYXRyaXg7ICAvLy9cblxuICB2ZWMgPSB0cmFuc2Zvcm0odmVjLCBtYXQzKTtcblxuICB2ZXJ0ZXggPSB2ZWM7IC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnRcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi5hZGpvaW50XG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIC8vIENhY2hpbmcgdGhpcyB2YWx1ZSBpcyBuZXNzZWNhcnkgaWYgb3V0ID09IGFcbiAgdmFyIGEwID0gIGFbMF1cbiAgb3V0WzBdID0gIGFbM11cbiAgb3V0WzFdID0gLWFbMV1cbiAgb3V0WzJdID0gLWFbMl1cbiAgb3V0WzNdID0gIGEwXG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDIgdG8gYW5vdGhlclxuICpcbiAqIEBhbGlhcyBtYXQyLmNvcHlcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmNyZWF0ZVxuICogQHJldHVybnMge21hdDJ9IGEgbmV3IDJ4MiBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSAxXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAxXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnRcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi5kZXRlcm1pbmFudFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgcmV0dXJuIGFbMF0gKiBhWzNdIC0gYVsyXSAqIGFbMV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnJvYlxuXG4vKipcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQyXG4gKlxuICogQGFsaWFzIG1hdDIuZnJvYlxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5mdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguc3FydChcbiAgICBNYXRoLnBvdyhhWzBdLCAyKSArXG4gICAgTWF0aC5wb3coYVsxXSwgMikgK1xuICAgIE1hdGgucG93KGFbMl0sIDIpICtcbiAgICBNYXRoLnBvdyhhWzNdLCAyKVxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5XG5cbi8qKlxuICogU2V0IGEgbWF0MiB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQGFsaWFzIG1hdDIuaWRlbnRpdHlcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAxXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRldGVybWluYW50OiByZXF1aXJlKCcuL2RldGVybWluYW50JylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgZnJvYjogcmVxdWlyZSgnLi9mcm9iJylcbiAgLCBsZHU6IHJlcXVpcmUoJy4vbGR1Jylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi5pbnZlcnRcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAgPSBhWzBdXG4gIHZhciBhMSA9IGFbMV1cbiAgdmFyIGEyID0gYVsyXVxuICB2YXIgYTMgPSBhWzNdXG4gIHZhciBkZXQgPSBhMCAqIGEzIC0gYTIgKiBhMVxuXG4gIGlmICghZGV0KSByZXR1cm4gbnVsbFxuICBkZXQgPSAxLjAgLyBkZXRcblxuICBvdXRbMF0gPSAgYTMgKiBkZXRcbiAgb3V0WzFdID0gLWExICogZGV0XG4gIG91dFsyXSA9IC1hMiAqIGRldFxuICBvdXRbM10gPSAgYTAgKiBkZXRcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxkdVxuXG4vKipcbiAqIFJldHVybnMgTCwgRCBhbmQgVSBtYXRyaWNlcyAoTG93ZXIgdHJpYW5ndWxhciwgRGlhZ29uYWwgYW5kIFVwcGVyIHRyaWFuZ3VsYXIpIGJ5IGZhY3Rvcml6aW5nIHRoZSBpbnB1dCBtYXRyaXhcbiAqXG4gKiBAYWxpYXMgbWF0Mi5sZHVcbiAqIEBwYXJhbSB7bWF0Mn0gTCB0aGUgbG93ZXIgdHJpYW5ndWxhciBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gRCB0aGUgZGlhZ29uYWwgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IFUgdGhlIHVwcGVyIHRyaWFuZ3VsYXIgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGlucHV0IG1hdHJpeCB0byBmYWN0b3JpemVcbiAqL1xuZnVuY3Rpb24gbGR1KEwsIEQsIFUsIGEpIHtcbiAgTFsyXSA9IGFbMl0vYVswXVxuICBVWzBdID0gYVswXVxuICBVWzFdID0gYVsxXVxuICBVWzNdID0gYVszXSAtIExbMl0gKiBVWzFdXG4gIHJldHVybiBbTCwgRCwgVV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQyJ3NcbiAqXG4gKiBAYWxpYXMgbWF0Mi5tdWx0aXBseVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXVxuICB2YXIgYjAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdXG4gIG91dFswXSA9IGEwICogYjAgKyBhMiAqIGIxXG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxXG4gIG91dFsyXSA9IGEwICogYjIgKyBhMiAqIGIzXG4gIG91dFszXSA9IGExICogYjIgKyBhMyAqIGIzXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlXG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDIgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQGFsaWFzIG1hdDIucm90YXRlXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXVxuICB2YXIgcyA9IE1hdGguc2luKHJhZClcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpXG4gIG91dFswXSA9IGEwICogIGMgKyBhMiAqIHNcbiAgb3V0WzFdID0gYTEgKiAgYyArIGEzICogc1xuICBvdXRbMl0gPSBhMCAqIC1zICsgYTIgKiBjXG4gIG91dFszXSA9IGExICogLXMgKyBhMyAqIGNcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MiBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBhbGlhcyBtYXQyLnNjYWxlXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDJ9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciBhMCA9IGFbMF0sIGExID0gYVsxXSwgYTIgPSBhWzJdLCBhMyA9IGFbM11cbiAgdmFyIHYwID0gdlswXSwgdjEgPSB2WzFdXG4gIG91dFswXSA9IGEwICogdjBcbiAgb3V0WzFdID0gYTEgKiB2MFxuICBvdXRbMl0gPSBhMiAqIHYxXG4gIG91dFszXSA9IGEzICogdjFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2VcblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi50cmFuc3Bvc2VcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICB2YXIgYTEgPSBhWzFdXG4gICAgb3V0WzFdID0gYVsyXVxuICAgIG91dFsyXSA9IGExXG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMl1cbiAgICBvdXRbMl0gPSBhWzFdXG4gICAgb3V0WzNdID0gYVszXVxuICB9XG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBhZGpvaW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHl4ID0geSAqIHgyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgenggPSB6ICogeDIsXG4gICAgICAgIHp5ID0geiAqIHkyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgICBvdXRbMV0gPSB4eSArIHd6O1xuICAgIG91dFsyXSA9IHh6IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4eSAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gICAgb3V0WzZdID0geXogKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHh6ICsgd3k7XG4gICAgb3V0WzldID0geXogLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZydXN0dW07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgdHJhbnNwb3NlOiByZXF1aXJlKCcuL3RyYW5zcG9zZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIHRyYW5zbGF0ZTogcmVxdWlyZSgnLi90cmFuc2xhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjogcmVxdWlyZSgnLi9mcm9tUm90YXRpb25UcmFuc2xhdGlvbicpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbVF1YXQnKVxuICAsIGZydXN0dW06IHJlcXVpcmUoJy4vZnJ1c3R1bScpXG4gICwgcGVyc3BlY3RpdmU6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmUnKVxuICAsIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3OiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3JylcbiAgLCBvcnRobzogcmVxdWlyZSgnLi9vcnRobycpXG4gICwgbG9va0F0OiByZXF1aXJlKCcuL2xvb2tBdCcpXG4gICwgc3RyOiByZXF1aXJlKCcuL3N0cicpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnQ7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgICAgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHsgXG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9va0F0O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KG91dCwgZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbixcbiAgICAgICAgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXSxcbiAgICAgICAgY2VudGVyeCA9IGNlbnRlclswXSxcbiAgICAgICAgY2VudGVyeSA9IGNlbnRlclsxXSxcbiAgICAgICAgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICAgIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgICB9XG5cbiAgICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICAgIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gICAgejIgPSBleWV6IC0gY2VudGVyejtcblxuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcblxuICAgIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICAgIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHgwID0gMDtcbiAgICAgICAgeDEgPSAwO1xuICAgICAgICB4MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeDAgKj0gbGVuO1xuICAgICAgICB4MSAqPSBsZW47XG4gICAgICAgIHgyICo9IGxlbjtcbiAgICB9XG5cbiAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICAgIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHkwID0gMDtcbiAgICAgICAgeTEgPSAwO1xuICAgICAgICB5MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeTAgKj0gbGVuO1xuICAgICAgICB5MSAqPSBsZW47XG4gICAgICAgIHkyICo9IGxlbjtcbiAgICB9XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB5MDtcbiAgICBvdXRbMl0gPSB6MDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHgxO1xuICAgIG91dFs1XSA9IHkxO1xuICAgIG91dFs2XSA9IHoxO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geDI7XG4gICAgb3V0WzldID0geTI7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gICAgb3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcbiAgICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgdmFyIGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107ICBcbiAgICBvdXRbMF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbM10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs1XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTBdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxNV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvcnRobztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpLFxuICAgICAgICBidCA9IDEgLyAoYm90dG9tIC0gdG9wKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pLFxuICAgICAgICB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcblxuICAgIG91dFswXSA9IHhTY2FsZTtcbiAgICBvdXRbMV0gPSAwLjA7XG4gICAgb3V0WzJdID0gMC4wO1xuICAgIG91dFszXSA9IDAuMDtcbiAgICBvdXRbNF0gPSAwLjA7XG4gICAgb3V0WzVdID0geVNjYWxlO1xuICAgIG91dFs2XSA9IDAuMDtcbiAgICBvdXRbN10gPSAwLjA7XG4gICAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzldID0gKCh1cFRhbiAtIGRvd25UYW4pICogeVNjYWxlICogMC41KTtcbiAgICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMV0gPSAtMS4wO1xuICAgIG91dFsxMl0gPSAwLjA7XG4gICAgb3V0WzEzXSA9IDAuMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxNV0gPSAwLjA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGU7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdCxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMyxcbiAgICAgICAgYjAwLCBiMDEsIGIwMixcbiAgICAgICAgYjEwLCBiMTEsIGIxMixcbiAgICAgICAgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgMC4wMDAwMDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7IGIyMSA9IHkgKiB6ICogdCAtIHggKiBzOyBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzBdICA9IGFbMF07XG4gICAgICAgIG91dFsxXSAgPSBhWzFdO1xuICAgICAgICBvdXRbMl0gID0gYVsyXTtcbiAgICAgICAgb3V0WzNdICA9IGFbM107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gICAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFs4XSAgPSBhWzhdO1xuICAgICAgICBvdXRbOV0gID0gYVs5XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gICAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzdHI7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbOF0gKyAnLCAnICsgYVs5XSArICcsICcgKyBhWzEwXSArICcsICcgKyBhWzExXSArICcsICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2U7XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGEwMTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGEwMjtcbiAgICAgICAgb3V0WzldID0gYTEyO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhMDM7XG4gICAgICAgIG91dFsxM10gPSBhMTM7XG4gICAgICAgIG91dFsxNF0gPSBhMjM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGFbMV07XG4gICAgICAgIG91dFs1XSA9IGFbNV07XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhWzJdO1xuICAgICAgICBvdXRbOV0gPSBhWzZdO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbM107XG4gICAgICAgIG91dFsxM10gPSBhWzddO1xuICAgICAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBhZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY29weVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMyXG4gKlxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMilcbiAgICBvdXRbMF0gPSAwXG4gICAgb3V0WzFdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzXG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICogTm90ZSB0aGF0IHRoZSBjcm9zcyBwcm9kdWN0IG11c3QgYnkgZGVmaW5pdGlvbiBwcm9kdWNlIGEgM0QgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF1cbiAgICBvdXRbMF0gPSBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSlcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpdmlkZVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAvIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkb3RcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHZlYyA9IHJlcXVpcmUoJy4vY3JlYXRlJykoKVxuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMyLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgdmFyIGksIGxcbiAgICBpZighc3RyaWRlKSB7XG4gICAgICAgIHN0cmlkZSA9IDJcbiAgICB9XG5cbiAgICBpZighb2Zmc2V0KSB7XG4gICAgICAgIG9mZnNldCA9IDBcbiAgICB9XG4gICAgXG4gICAgaWYoY291bnQpIHtcbiAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBhLmxlbmd0aFxuICAgIH1cblxuICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgdmVjWzBdID0gYVtpXVxuICAgICAgICB2ZWNbMV0gPSBhW2krMV1cbiAgICAgICAgZm4odmVjLCB2ZWMsIGFyZylcbiAgICAgICAgYVtpXSA9IHZlY1swXVxuICAgICAgICBhW2krMV0gPSB2ZWNbMV1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21WYWx1ZXNcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxuICAsIGRvdDogcmVxdWlyZSgnLi9kb3QnKVxuICAsIGNyb3NzOiByZXF1aXJlKCcuL2Nyb3NzJylcbiAgLCBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKVxuICAsIHJhbmRvbTogcmVxdWlyZSgnLi9yYW5kb20nKVxuICAsIHRyYW5zZm9ybU1hdDI6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MicpXG4gICwgdHJhbnNmb3JtTWF0MmQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MmQnKVxuICAsIHRyYW5zZm9ybU1hdDM6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MycpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwXG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdXG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1heFxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtaW5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAqIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBuZWdhdGVcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF1cbiAgICBvdXRbMV0gPSAtYVsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICB2YXIgbGVuID0geCp4ICsgeSp5XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgICAgIG91dFswXSA9IGFbMF0gKiBsZW5cbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlblxuICAgIH1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByYW5kb21cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wXG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMi4wICogTWF0aC5QSVxuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGVcbiAgICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHNjYWxlXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzZXRcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldChvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV1cbiAgICByZXR1cm4geCp4ICsgeSp5XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIHJldHVybiB4KnggKyB5Knlcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRyYWN0XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQyXG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0Mn0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MihvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQyZFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQyZH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MmQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzNdICogeSArIG1bNV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQzXG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0M1xuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVszXSAqIHkgKyBtWzZdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzRdICogeSArIG1bN11cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQ0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0NFxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgXG4gICAgICAgIHkgPSBhWzFdXG4gICAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bMTJdXG4gICAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bMTNdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gYWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ2xlXG5cbnZhciBmcm9tVmFsdWVzID0gcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgZG90ID0gcmVxdWlyZSgnLi9kb3QnKVxuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gM0QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5mdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgdmFyIHRlbXBBID0gZnJvbVZhbHVlcyhhWzBdLCBhWzFdLCBhWzJdKVxuICAgIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSlcbiBcbiAgICBub3JtYWxpemUodGVtcEEsIHRlbXBBKVxuICAgIG5vcm1hbGl6ZSh0ZW1wQiwgdGVtcEIpXG4gXG4gICAgdmFyIGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpXG5cbiAgICBpZihjb3NpbmUgPiAxLjApe1xuICAgICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKVxuICAgIH0gICAgIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgb3V0WzJdID0gYVsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjM1xuICpcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICBvdXRbMl0gPSAwXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3Jvc3M7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIGF4ID0gYVswXSwgYXkgPSBhWzFdLCBheiA9IGFbMl0sXG4gICAgICAgIGJ4ID0gYlswXSwgYnkgPSBiWzFdLCBieiA9IGJbMl1cblxuICAgIG91dFswXSA9IGF5ICogYnogLSBheiAqIGJ5XG4gICAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYnpcbiAgICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRpdmlkZTtcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSAvIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkb3Q7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgICAgICB2YXIgaSwgbFxuICAgICAgICBpZighc3RyaWRlKSB7XG4gICAgICAgICAgICBzdHJpZGUgPSAzXG4gICAgICAgIH1cblxuICAgICAgICBpZighb2Zmc2V0KSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAwXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNvdW50KSB7XG4gICAgICAgICAgICBsID0gTWF0aC5taW4oKGNvdW50ICogc3RyaWRlKSArIG9mZnNldCwgYS5sZW5ndGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gYS5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihpID0gb2Zmc2V0OyBpIDwgbDsgaSArPSBzdHJpZGUpIHtcbiAgICAgICAgICAgIHZlY1swXSA9IGFbaV0gXG4gICAgICAgICAgICB2ZWNbMV0gPSBhW2krMV0gXG4gICAgICAgICAgICB2ZWNbMl0gPSBhW2krMl1cbiAgICAgICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgICAgICBhW2ldID0gdmVjWzBdIFxuICAgICAgICAgICAgYVtpKzFdID0gdmVjWzFdIFxuICAgICAgICAgICAgYVtpKzJdID0gdmVjWzJdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgYW5nbGU6IHJlcXVpcmUoJy4vYW5nbGUnKVxuICAsIGZyb21WYWx1ZXM6IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBzZXQ6IHJlcXVpcmUoJy4vc2V0JylcbiAgLCBhZGQ6IHJlcXVpcmUoJy4vYWRkJylcbiAgLCBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zdWJ0cmFjdCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIGRpdmlkZTogcmVxdWlyZSgnLi9kaXZpZGUnKVxuICAsIG1pbjogcmVxdWlyZSgnLi9taW4nKVxuICAsIG1heDogcmVxdWlyZSgnLi9tYXgnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCBzY2FsZUFuZEFkZDogcmVxdWlyZSgnLi9zY2FsZUFuZEFkZCcpXG4gICwgZGlzdGFuY2U6IHJlcXVpcmUoJy4vZGlzdGFuY2UnKVxuICAsIHNxdWFyZWREaXN0YW5jZTogcmVxdWlyZSgnLi9zcXVhcmVkRGlzdGFuY2UnKVxuICAsIGxlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGgnKVxuICAsIHNxdWFyZWRMZW5ndGg6IHJlcXVpcmUoJy4vc3F1YXJlZExlbmd0aCcpXG4gICwgbmVnYXRlOiByZXF1aXJlKCcuL25lZ2F0ZScpXG4gICwgaW52ZXJzZTogcmVxdWlyZSgnLi9pbnZlcnNlJylcbiAgLCBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbiAgLCBkb3Q6IHJlcXVpcmUoJy4vZG90JylcbiAgLCBjcm9zczogcmVxdWlyZSgnLi9jcm9zcycpXG4gICwgbGVycDogcmVxdWlyZSgnLi9sZXJwJylcbiAgLCByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJylcbiAgLCB0cmFuc2Zvcm1NYXQ0OiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDQnKVxuICAsIHRyYW5zZm9ybU1hdDM6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0MycpXG4gICwgdHJhbnNmb3JtUXVhdDogcmVxdWlyZSgnLi90cmFuc2Zvcm1RdWF0JylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJzZTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdXG4gIG91dFsxXSA9IDEuMCAvIGFbMV1cbiAgb3V0WzJdID0gMS4wIC8gYVsyXVxuICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVycDtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgICB2YXIgYXggPSBhWzBdLFxuICAgICAgICBheSA9IGFbMV0sXG4gICAgICAgIGF6ID0gYVsyXVxuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1heDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gICAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtaW47XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSAqIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBuZWdhdGU7XG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdXG4gICAgb3V0WzFdID0gLWFbMV1cbiAgICBvdXRbMl0gPSAtYVsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHZhciBsZW4gPSB4KnggKyB5KnkgKyB6KnpcbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgICAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICAgICAgb3V0WzBdID0gYVswXSAqIGxlblxuICAgICAgICBvdXRbMV0gPSBhWzFdICogbGVuXG4gICAgICAgIG91dFsyXSA9IGFbMl0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gICAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICB2YXIgeiA9IChNYXRoLnJhbmRvbSgpICogMi4wKSAtIDEuMFxuICAgIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wLXoqeikgKiBzY2FsZVxuXG4gICAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGVcbiAgICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZVxuICAgIG91dFsyXSA9IHogKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMF1cbiAgICByWzFdID0gcFsxXSpNYXRoLmNvcyhjKSAtIHBbMl0qTWF0aC5zaW4oYylcbiAgICByWzJdID0gcFsxXSpNYXRoLnNpbihjKSArIHBbMl0qTWF0aC5jb3MoYylcblxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cblxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuICBcbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFsyXSpNYXRoLnNpbihjKSArIHBbMF0qTWF0aC5jb3MoYylcbiAgICByWzFdID0gcFsxXVxuICAgIHJbMl0gPSBwWzJdKk1hdGguY29zKGMpIC0gcFswXSpNYXRoLnNpbihjKVxuICBcbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG4gIFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVo7XG5cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGMgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCBiLCBjKXtcbiAgICB2YXIgcCA9IFtdLCByPVtdXG4gICAgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgIHBbMF0gPSBhWzBdIC0gYlswXVxuICAgIHBbMV0gPSBhWzFdIC0gYlsxXVxuICAgIHBbMl0gPSBhWzJdIC0gYlsyXVxuICBcbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXSpNYXRoLmNvcyhjKSAtIHBbMV0qTWF0aC5zaW4oYylcbiAgICByWzFdID0gcFswXSpNYXRoLnNpbihjKSArIHBbMV0qTWF0aC5jb3MoYylcbiAgICByWzJdID0gcFsyXVxuICBcbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG4gIFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzMgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlxuICAgIG91dFsxXSA9IGFbMV0gKiBiXG4gICAgb3V0WzJdID0gYVsyXSAqIGJcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICAgIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICAgIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKVxuICAgIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNldDtcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzIHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWRMZW5ndGg7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdDtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAtIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC0gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQzLlxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSB0aGUgM3gzIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdXG4gICAgb3V0WzBdID0geCAqIG1bMF0gKyB5ICogbVszXSArIHogKiBtWzZdXG4gICAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddXG4gICAgb3V0WzJdID0geCAqIG1bMl0gKyB5ICogbVs1XSArIHogKiBtWzhdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NDtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgICAgIHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV1cbiAgICB3ID0gdyB8fCAxLjBcbiAgICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gd1xuICAgIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3XG4gICAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtUXVhdDtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgICAvLyBiZW5jaG1hcmtzOiBodHRwOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9uc1xuXG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgICAgIHF4ID0gcVswXSwgcXkgPSBxWzFdLCBxeiA9IHFbMl0sIHF3ID0gcVszXSxcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICAgICAgICBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcbiAgICAgICAgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHosXG4gICAgICAgIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4LFxuICAgICAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHpcblxuICAgIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgICBvdXRbMF0gPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5XG4gICAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xelxuICAgIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdXG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdXG4gIG91dFszXSA9IGFbM10gKyBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNsb25lIChhKSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IGFbMF1cbiAgb3V0WzFdID0gYVsxXVxuICBvdXRbMl0gPSBhWzJdXG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weSAob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF1cbiAgb3V0WzFdID0gYVsxXVxuICBvdXRbMl0gPSBhWzJdXG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWM0XG4gKlxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBjcmVhdGUgKCkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSAwXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAwXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UgKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgeiA9IGJbMl0gLSBhWzJdLFxuICAgIHcgPSBiWzNdIC0gYVszXVxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGVcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdXG4gIG91dFszXSA9IGFbM10gLyBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZG90XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QgKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21WYWx1ZXNcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gZnJvbVZhbHVlcyAoeCwgeSwgeiwgdykge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSB4XG4gIG91dFsxXSA9IHlcbiAgb3V0WzJdID0gelxuICBvdXRbM10gPSB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJyksXG4gIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJyksXG4gIGZyb21WYWx1ZXM6IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpLFxuICBjb3B5OiByZXF1aXJlKCcuL2NvcHknKSxcbiAgc2V0OiByZXF1aXJlKCcuL3NldCcpLFxuICBhZGQ6IHJlcXVpcmUoJy4vYWRkJyksXG4gIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JyksXG4gIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JyksXG4gIGRpdmlkZTogcmVxdWlyZSgnLi9kaXZpZGUnKSxcbiAgbWluOiByZXF1aXJlKCcuL21pbicpLFxuICBtYXg6IHJlcXVpcmUoJy4vbWF4JyksXG4gIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJyksXG4gIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJyksXG4gIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJyksXG4gIHNxdWFyZWREaXN0YW5jZTogcmVxdWlyZSgnLi9zcXVhcmVkRGlzdGFuY2UnKSxcbiAgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpLFxuICBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKSxcbiAgbmVnYXRlOiByZXF1aXJlKCcuL25lZ2F0ZScpLFxuICBpbnZlcnNlOiByZXF1aXJlKCcuL2ludmVyc2UnKSxcbiAgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpLFxuICBkb3Q6IHJlcXVpcmUoJy4vZG90JyksXG4gIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpLFxuICByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJyksXG4gIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpLFxuICB0cmFuc2Zvcm1RdWF0OiByZXF1aXJlKCcuL3RyYW5zZm9ybVF1YXQnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnNlXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZSAob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF1cbiAgb3V0WzFdID0gMS4wIC8gYVsxXVxuICBvdXRbMl0gPSAxLjAgLyBhWzJdXG4gIG91dFszXSA9IDEuMCAvIGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsZW5ndGhcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBsZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxlcnBcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50IGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbGVycCAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgYXkgPSBhWzFdLFxuICAgIGF6ID0gYVsyXSxcbiAgICBhdyA9IGFbM11cbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheilcbiAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdylcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtYXhcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pXG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gIG91dFszXSA9IE1hdGgubWF4KGFbM10sIGJbM10pXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWluXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtaW4gKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKVxuICBvdXRbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdXG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gIG91dFszXSA9IGFbM10gKiBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlXG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlIChvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF1cbiAgb3V0WzFdID0gLWFbMV1cbiAgb3V0WzJdID0gLWFbMl1cbiAgb3V0WzNdID0gLWFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICB2YXIgbGVuID0geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbiAgaWYgKGxlbiA+IDApIHtcbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KGxlbilcbiAgICBvdXRbMF0gPSB4ICogbGVuXG4gICAgb3V0WzFdID0geSAqIGxlblxuICAgIG91dFsyXSA9IHogKiBsZW5cbiAgICBvdXRbM10gPSB3ICogbGVuXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuIiwidmFyIHZlY05vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbnZhciB2ZWNTY2FsZSA9IHJlcXVpcmUoJy4vc2NhbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbSAob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuXG4gIC8vIFRPRE86IFRoaXMgaXMgYSBwcmV0dHkgYXdmdWwgd2F5IG9mIGRvaW5nIHRoaXMuIEZpbmQgc29tZXRoaW5nIGJldHRlci5cbiAgb3V0WzBdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbMV0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFsyXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzNdID0gTWF0aC5yYW5kb20oKVxuICB2ZWNOb3JtYWxpemUob3V0LCBvdXQpXG4gIHZlY1NjYWxlKG91dCwgb3V0LCBzY2FsZSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZVxuXG4vKipcbiAqIFNjYWxlcyBhIHZlYzQgYnkgYSBzY2FsYXIgbnVtYmVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZSAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiXG4gIG91dFsxXSA9IGFbMV0gKiBiXG4gIG91dFsyXSA9IGFbMl0gKiBiXG4gIG91dFszXSA9IGFbM10gKiBiXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGRcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbmRBZGQgKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gIG91dFsxXSA9IGFbMV0gKyAoYlsxXSAqIHNjYWxlKVxuICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgb3V0WzNdID0gYVszXSArIChiWzNdICogc2NhbGUpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldCAob3V0LCB4LCB5LCB6LCB3KSB7XG4gIG91dFswXSA9IHhcbiAgb3V0WzFdID0geVxuICBvdXRbMl0gPSB6XG4gIG91dFszXSA9IHdcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZSAoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICB6ID0gYlsyXSAtIGFbMl0sXG4gICAgdyA9IGJbM10gLSBhWzNdXG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZExlbmd0aCAoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRyYWN0XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0IChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAtIGJbMF1cbiAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgb3V0WzJdID0gYVsyXSAtIGJbMl1cbiAgb3V0WzNdID0gYVszXSAtIGJbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQ0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgbWF0NC5cbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQgKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSwgdyA9IGFbM11cbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0gKiB3XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogd1xuICBvdXRbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3XG4gIG91dFszXSA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XSAqIHdcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1RdWF0XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjNCB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQgKG91dCwgYSwgcSkge1xuICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY1xuICAgIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5LFxuICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4LFxuICAgIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogelxuXG4gIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICBvdXRbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6XG4gIG91dFsyXSA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXhcbiAgb3V0WzNdID0gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIGZpbGVTeXN0ZW1VdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9maWxlU3lzdGVtJyksXG4gIGFzeW5jaHJvbm91c1V0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5mdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5mdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gYXJyYXkyLmxlbmd0aCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjbGVhcjogY2xlYXIsXG4gIGNvcHk6IGNvcHksXG4gIG1lcmdlOiBtZXJnZSxcbiAgc3BsaWNlOiBzcGxpY2UsXG4gIHJlcGxhY2U6IHJlcGxhY2UsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBmaW5kOiBmaW5kLFxuICBwcnVuZTogcHJ1bmUsXG4gIHBhdGNoOiBwYXRjaCxcbiAgYXVnbWVudDogYXVnbWVudCxcbiAgc2VwYXJhdGU6IHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWU6IGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZTogYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpIHtcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoYWJzb2x1dGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZmlsZUV4aXN0cyhhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RvcnlFeGlzdHMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZURpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnlFeGlzdHM6IGVudHJ5RXhpc3RzLFxuICBmaWxlRXhpc3RzOiBmaWxlRXhpc3RzLFxuICBpc0VudHJ5RmlsZTogaXNFbnRyeUZpbGUsXG4gIGRpcmVjdG9yeUV4aXN0czogZGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RGlyZWN0b3J5OiBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5OiBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHdyaXRlRmlsZTogd3JpdGVGaWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheSA9IHJlcXVpcmUoJy4vYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gPSBhcnJheTtcblxuZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlxcLnsxLDJ9XFwvLyksXG4gICAgICAgIHBhdGhSZWxhdGl2ZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9IGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9ICFwYXRoUmVsYXRpdmVQYXRoOyAvLy9cblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgodG9wbW9zdERpcmVjdG9yeU5hbWUsIHBhdGgpIHtcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZS5yZXBsYWNlKC9cXC8kLywgJycpOyAvLy9cblxuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0RGlyZWN0b3J5TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHBvc2l0aW9uID0gcGF0aC5zZWFyY2gocmVnRXhwKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29tYmluZVBhdGhzKGRpcmVjdG9yeVBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgYWJzb2x1dGVQYXRoID0gbnVsbDtcblxuICBjb25zdCBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyA9IGRpcmVjdG9yeVBhdGguc3BsaXQoJy8nKSxcbiAgICAgICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKTtcblxuICBsZXQgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpLFxuICAgICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWU7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4nKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4uJykgJiYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgICBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IFtdLmNvbmNhdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcykuY29uY2F0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICAgIGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLmpvaW4oJy8nKTtcbiAgfVxuXG4gIHJldHVybiBhYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aDEsIHBhdGgyKSB7XG4gIHBhdGgxID0gcGF0aDEucmVwbGFjZSgvXFwvJC8sICcnKTsgIC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkUGF0aCA9IGAke3BhdGgxfS8ke3BhdGgyfWA7XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uK1xcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goLyheLispXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNQYXRoUmVsYXRpdmVQYXRoOiBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aDogaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTogaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUsXG4gIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGg6IGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgsXG4gIGNvbWJpbmVQYXRoczogY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzOiBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoOiBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iXX0=
