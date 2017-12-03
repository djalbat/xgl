(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const IMAGE_SIZE = 128,
      IMAGE_MAP_URL_PATH = '/imageMap',
      INDEX_PAGE_URL_PATH = '/',
      SHAPES_PAGE_URL_PATH = '/shapes',
      SHAPES_PAGE_FILE_NAME = 'shapes.html',
      MASKING_PAGE_URL_PATH = '/masking',
      MASKING_PAGE_FILE_NAME = 'masking.html',
      CONTAINER_HOUSE_PAGE_URL_PATH = '/containerHouse',
      CONTAINER_HOUSE_PAGE_FILE_NAME = 'containerHouse.html',
      TIMBER_FRAMED_HOUSE_PAGE_URL_PATH = '/timberFramedHouse',
      TIMBER_FRAMED_HOUSE_PAGE_FILE_NAME = 'timberFramedHouse.html';

module.exports = {
  IMAGE_SIZE: IMAGE_SIZE,
  IMAGE_MAP_URL_PATH: IMAGE_MAP_URL_PATH,
  INDEX_PAGE_URL_PATH: INDEX_PAGE_URL_PATH,
  SHAPES_PAGE_URL_PATH: SHAPES_PAGE_URL_PATH,
  SHAPES_PAGE_FILE_NAME: SHAPES_PAGE_FILE_NAME,
  MASKING_PAGE_URL_PATH: MASKING_PAGE_URL_PATH,
  MASKING_PAGE_FILE_NAME: MASKING_PAGE_FILE_NAME,
  CONTAINER_HOUSE_PAGE_URL_PATH: CONTAINER_HOUSE_PAGE_URL_PATH,
  CONTAINER_HOUSE_PAGE_FILE_NAME: CONTAINER_HOUSE_PAGE_FILE_NAME,
  TIMBER_FRAMED_HOUSE_PAGE_URL_PATH: TIMBER_FRAMED_HOUSE_PAGE_URL_PATH,
  TIMBER_FRAMED_HOUSE_PAGE_FILE_NAME: TIMBER_FRAMED_HOUSE_PAGE_FILE_NAME
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

},{"./canvas/mixin/blending":3,"./canvas/mixin/buffer":4,"./canvas/mixin/colour":5,"./canvas/mixin/depth":6,"./canvas/mixin/matrix":7,"./canvas/mixin/program":8,"./canvas/mixin/shader":9,"./canvas/mixin/texture":10,"./utilities/dom":110}],3:[function(require,module,exports){
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

var vectorUtilities = require('./utilities/vector');

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

},{"./utilities/vector":116}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('./edge'),
    arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex');

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
            value: function fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertexInXYPlane, endVertexInXYPlane) {
                  var position = startVertexInXYPlane.slice(),
                      ///
                  extent = subtract3(endVertexInXYPlane, startVertexInXYPlane),
                      edgeInXYPlane = new EdgeInXYPlane(position, extent);

                  return edgeInXYPlane;
            }
      }]);

      return EdgeInXYPlane;
}(Edge);

module.exports = EdgeInXYPlane;

},{"./edge":12,"./utilities/array":108,"./utilities/vector":116,"./utilities/vertex":117}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"../element":14,"../utilities/camera":109,"./camera/keyEvents":16,"./camera/mouseEvents":17,"./camera/pan":18,"./camera/tilt":19,"./camera/zoom":20}],16:[function(require,module,exports){
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

},{"../../constants":11}],17:[function(require,module,exports){
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

},{"../../constants":11}],18:[function(require,module,exports){
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

},{"../../constants":11,"../../utilities/array":108,"../../utilities/vector":116}],19:[function(require,module,exports){
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

},{"../../constants":11,"../../utilities/array":108,"../../utilities/vector":116}],20:[function(require,module,exports){
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

},{"../../constants":11}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Mask = require('../element/mask'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
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
    value: function create(colourRenderer, textureRenderer, transforms, masked) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        var masked = false; ///

        childElement.create(colourRenderer, textureRenderer, transforms, masked);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));

      if (!masked) {
        this.render(colourRenderer, textureRenderer);
      }
    }
  }, {
    key: 'getVertexPositions',
    value: function getVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var facetVertexPositions = facet.getVertexPositions();

        push(vertexPositions, facetVertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'getVertexNormals',
    value: function getVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var facetVertexNormals = facet.getVertexNormals();

        push(vertexNormals, facetVertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'getVertexIndexes',
    value: function getVertexIndexes() {
      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet, index) {
        var facetVertexIndexes = facet.getVertexIndexes(index);

        push(vertexIndexes, facetVertexIndexes);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, facets) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;

},{"../element":14,"../element/mask":24,"../utilities/array":108,"../utilities/transform":115}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredFacet = require('../../facet/coloured'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var push = arrayUtilities.push;

var ColouredCanvasElement = function (_CanvasElement) {
  _inherits(ColouredCanvasElement, _CanvasElement);

  function ColouredCanvasElement() {
    _classCallCheck(this, ColouredCanvasElement);

    return _possibleConstructorReturn(this, (ColouredCanvasElement.__proto__ || Object.getPrototypeOf(ColouredCanvasElement)).apply(this, arguments));
  }

  _createClass(ColouredCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexColours = this.getVertexColours();

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var facets = this.getFacets(),
          vertexColours = facets.reduce(function (vertexColours, facet) {
        var colouredFacet = facet,
            ///
        colouredFacetVertexColours = colouredFacet.getVertexColours();

        push(vertexColours, colouredFacetVertexColours);

        return vertexColours;
      }, []);

      return vertexColours;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes, colour) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        remainingArguments[_key - 5] = arguments[_key];
      }

      var colouredFacets = indexes.map(function (indexes) {
        ///
        var colouredFacet = ColouredFacet.fromVerticesIndexesAndColour(vertices, indexes, colour);

        return colouredFacet;
      }),
          facets = colouredFacets,
          ///
      colouredCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments));

      return colouredCanvasElement;
    }
  }]);

  return ColouredCanvasElement;
}(CanvasElement);

module.exports = ColouredCanvasElement;

},{"../../element/canvas":21,"../../facet/coloured":80,"../../utilities/array":108}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TexturedFacet = require('../../facet/textured'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array');

var push = arrayUtilities.push;

var TexturedCanvasElement = function (_CanvasElement) {
  _inherits(TexturedCanvasElement, _CanvasElement);

  function TexturedCanvasElement() {
    _classCallCheck(this, TexturedCanvasElement);

    return _possibleConstructorReturn(this, (TexturedCanvasElement.__proto__ || Object.getPrototypeOf(TexturedCanvasElement)).apply(this, arguments));
  }

  _createClass(TexturedCanvasElement, [{
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var vertexPositions = this.getVertexPositions(),
          vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates();

      textureRenderer.addVertexPositions(vertexPositions);
      textureRenderer.addVertexIndexes(vertexIndexes);
      textureRenderer.addVertexNormals(vertexNormals);
      textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates() {
      var facets = this.getFacets(),
          vertexTextureCoordinates = facets.reduce(function (vertexTextureCoordinates, facet) {
        var texturedFacet = facet,
            ///
        texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates();

        push(vertexTextureCoordinates, texturedFacetVertexTextureCoordinates);

        return vertexTextureCoordinates;
      }, []);

      return vertexTextureCoordinates;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes, imageName, textureCoordinates) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      var texturedFacets = indexes.map(function (indexes, index) {
        ///
        var texturedFacet = TexturedFacet.fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index);

        return texturedFacet;
      }),
          facets = texturedFacets,
          ///
      texturedCanvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, facets].concat(remainingArguments));

      return texturedCanvasElement;
    }
  }]);

  return TexturedCanvasElement;
}(CanvasElement);

module.exports = TexturedCanvasElement;

},{"../../element/canvas":21,"../../facet/textured":81,"../../utilities/array":108}],24:[function(require,module,exports){
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
          masked = true; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masked);
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

},{"../element":14,"../maskingFacet":83,"../utilities/array":108}],25:[function(require,module,exports){
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

},{"../element":14,"../renderer/colour":89,"../renderer/texture":105}],26:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  masking: require('./examples/masking'),
  containerHouse: require('./examples/containerHouse'),
  timberFramedHouse: require('./examples/timberFramedHouse')
};

},{"./examples/containerHouse":35,"./examples/masking":74,"./examples/shapes":75,"./examples/timberFramedHouse":76}],27:[function(require,module,exports){
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
          colour = properties.colour,
          colouredCuboid = ColouredCanvasElement.fromProperties(ColouredCuboid, properties, vertices, indexes, colour);


      return colouredCuboid;
    }
  }]);

  return ColouredCuboid;
}(ColouredCanvasElement);

module.exports = ColouredCuboid;

},{"../../../element/canvas/coloured":22,"../cuboid":30}],28:[function(require,module,exports){
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
          colour = properties.colour,
          colouredCylinder = ColouredCanvasElement.fromProperties(ColouredCylinder, properties, vertices, indexes, colour);


      return colouredCylinder;
    }
  }]);

  return ColouredCylinder;
}(ColouredCanvasElement);

module.exports = ColouredCylinder;

},{"../../../element/canvas/coloured":22,"../cylinder":31}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = triangle.defaultVertices,
    defaultIndexes = triangle.defaultIndexes;

var ColouredTriangle = function (_ColouredCanvasElemen) {
  _inherits(ColouredTriangle, _ColouredCanvasElemen);

  function ColouredTriangle() {
    _classCallCheck(this, ColouredTriangle);

    return _possibleConstructorReturn(this, (ColouredTriangle.__proto__ || Object.getPrototypeOf(ColouredTriangle)).apply(this, arguments));
  }

  _createClass(ColouredTriangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          colour = properties.colour,
          colouredTriangle = ColouredCanvasElement.fromProperties(ColouredTriangle, properties, vertices, indexes, colour);


      return colouredTriangle;
    }
  }]);

  return ColouredTriangle;
}(ColouredCanvasElement);

module.exports = ColouredTriangle;

},{"../../../element/canvas/coloured":22,"../triangle":34}],30:[function(require,module,exports){
'use strict';

var defaultVertices = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]],
    defaultIndexes = [[1, 0, 3], [3, 2, 1], [4, 5, 6], [6, 7, 4], [0, 4, 7], [7, 3, 0], [5, 1, 2], [2, 6, 5], [7, 6, 2], [2, 3, 7], [4, 0, 1], [1, 5, 4]],
    defaultTextureCoordinates = [[0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0], [0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0], [0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0], [0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0], [0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0], [0, 0], [1, 0], [1, 1], [1, 1], [0, 1], [0, 0]];

module.exports = {
      defaultVertices: defaultVertices,
      defaultIndexes: defaultIndexes,
      defaultTextureCoordinates: defaultTextureCoordinates
};

},{}],31:[function(require,module,exports){
'use strict';

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array');

var CYLINDER_SIDES = constants.CYLINDER_SIDES,
    push = arrayUtilities.push;


var defaultIndexes = calculateDefaultIndexes(),
    defaultVertices = calculateDefaultVertices(),
    defaultTextureCoordinates = calculateDefaultTextureCoordinates();

module.exports = {
      defaultIndexes: defaultIndexes,
      defaultVertices: defaultVertices,
      defaultTextureCoordinates: defaultTextureCoordinates
};

function calculateDefaultIndexes() {
      var defaultIndexes = [],
          sides = CYLINDER_SIDES,
          defaultIndexCount = sides * 2;

      for (var count = 0; count < sides; count++) {
            var defaultIndex = count * 2,
                firstDefaultIndexes = [(defaultIndex + 1) % defaultIndexCount, (defaultIndex + 0) % defaultIndexCount, (defaultIndex + 2) % defaultIndexCount],
                secondDefaultIndexes = [(defaultIndex + 2) % defaultIndexCount, (defaultIndex + 3) % defaultIndexCount, (defaultIndex + 1) % defaultIndexCount];

            defaultIndexes.push(firstDefaultIndexes);
            defaultIndexes.push(secondDefaultIndexes);
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

function calculateDefaultTextureCoordinates() {
      var defaultTextureCoordinates = [],
          sides = CYLINDER_SIDES,
          step = 1 / sides;

      for (var count = 0; count < sides; count++) {
            var offset = step * count,
                firstDefaultTextureCoordinates = [[offset, 0], [offset, 1], [offset + step, 1]],
                secondDefaultTextureCoordinates = [[offset + step, 1], [offset + step, 0], [offset, 0]];

            push(defaultTextureCoordinates, firstDefaultTextureCoordinates);
            push(defaultTextureCoordinates, secondDefaultTextureCoordinates);
      }

      return defaultTextureCoordinates;
}

},{"../../constants":11,"../../utilities/array":108}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertices = cuboid.defaultVertices,
    defaultIndexes = cuboid.defaultIndexes,
    defaultTextureCoordinates = cuboid.defaultTextureCoordinates;

var TexturedCuboid = function (_TexturedCanvasElemen) {
  _inherits(TexturedCuboid, _TexturedCanvasElemen);

  function TexturedCuboid() {
    _classCallCheck(this, TexturedCuboid);

    return _possibleConstructorReturn(this, (TexturedCuboid.__proto__ || Object.getPrototypeOf(TexturedCuboid)).apply(this, arguments));
  }

  _createClass(TexturedCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          imageName = properties.imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedCuboid = TexturedCanvasElement.fromProperties(TexturedCuboid, properties, vertices, indexes, imageName, textureCoordinates);


      return texturedCuboid;
    }
  }]);

  return TexturedCuboid;
}(TexturedCanvasElement);

module.exports = TexturedCuboid;

},{"../../../element/canvas/textured":23,"../cuboid":30}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var triangle = require('../triangle'),
    TexturedCanvasElement = require('../../../element/canvas/textured');

var defaultVertices = triangle.defaultVertices,
    defaultIndexes = triangle.defaultIndexes,
    defaultTextureCoordinates = triangle.defaultTextureCoordinates;

var TexturedTriangle = function (_TexturedCanvasElemen) {
  _inherits(TexturedTriangle, _TexturedCanvasElemen);

  function TexturedTriangle() {
    _classCallCheck(this, TexturedTriangle);

    return _possibleConstructorReturn(this, (TexturedTriangle.__proto__ || Object.getPrototypeOf(TexturedTriangle)).apply(this, arguments));
  }

  _createClass(TexturedTriangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          imageName = properties.imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, vertices, indexes, imageName, textureCoordinates);


      return texturedTriangle;
    }
  }]);

  return TexturedTriangle;
}(TexturedCanvasElement);

module.exports = TexturedTriangle;

},{"../../../element/canvas/textured":23,"../triangle":34}],34:[function(require,module,exports){
'use strict';

var defaultVertices = [[0, 0, 0], [1, 0, 0], [1, 1, 0]],
    defaultIndexes = [[0, 1, 2]],
    defaultTextureCoordinates = [[0, 0], [1, 0], [1, 1]];

module.exports = {
  defaultVertices: defaultVertices,
  defaultIndexes: defaultIndexes,
  defaultTextureCoordinates: defaultTextureCoordinates
};

},{}],35:[function(require,module,exports){
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

},{"../canvas":2,"../element/camera":15,"../element/scene":25,"../jiggle":82,"../utilities/imageMap":112,"./containerHouse/balcony/bedroom":36,"./containerHouse/balcony/lower":37,"./containerHouse/balcony/main":38,"./containerHouse/floor/first":66,"./containerHouse/floor/second":67,"./containerHouse/floor/third":68,"./containerHouse/foundations":69,"./containerHouse/frame":71,"./containerHouse/roofGarden":73}],36:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../balcony/railing":39,"../balcony/section":43}],37:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../balcony/railing":39}],38:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../balcony/railing":39,"../balcony/section":43}],39:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./railing/topRail":40,"./railing/uprights":42}],40:[function(require,module,exports){
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

},{"../../../common/coloured/cuboid":27}],41:[function(require,module,exports){
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

},{"../../../common/coloured/cylinder":28}],42:[function(require,module,exports){
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

},{"../../../../element/canvas":21,"./upright":41}],43:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./section/edge":44,"./section/edge/long":45,"./section/edge/short":46,"./section/openMesh":47}],44:[function(require,module,exports){
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

},{"../../../common/textured/cuboid":32}],45:[function(require,module,exports){
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

},{"../edge":44}],46:[function(require,module,exports){
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

},{"../edge":44}],47:[function(require,module,exports){
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

},{"../../../../element/canvas":21,"../../../common/coloured/cuboid":27,"../../../common/coloured/cylinder":28}],48:[function(require,module,exports){
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

},{"../../element/canvas":21,"./container/bottomRails":50,"./container/cornerFittings":52,"./container/cornerPosts":54,"./container/panel/back":57,"./container/panel/front":59,"./container/panel/sideA":60,"./container/panel/sideB":61,"./container/roof":62,"./container/topRails":64}],49:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../../common/coloured/cuboid":27}],50:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./bottomRail":49}],51:[function(require,module,exports){
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

},{"../../common/coloured/cuboid":27}],52:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./cornerFitting":51}],53:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../../common/coloured/cuboid":27}],54:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./cornerPost":53}],55:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 40 });
};

module.exports = FortyFootContainer;

},{"../container":48}],56:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./panel/colouredRidge":58}],57:[function(require,module,exports){
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

},{"../panel":56}],58:[function(require,module,exports){
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

},{"../../../../element/canvas/coloured":22}],59:[function(require,module,exports){
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

},{"../panel":56}],60:[function(require,module,exports){
'use strict';

var Panel = require('../panel');

var SidePanelA = function SidePanelA(properties) {
  var length = properties.length,
      overallWidth = properties.overallWidth,
      overallHeight = properties.overallHeight;


  return React.createElement(Panel, { length: length, overallHeight: overallHeight });
};

module.exports = SidePanelA;

},{"../panel":56}],61:[function(require,module,exports){
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

},{"../panel":56}],62:[function(require,module,exports){
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

},{}],63:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../../common/coloured/cuboid":27}],64:[function(require,module,exports){
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

},{"../../../element/canvas":21,"./topRail":63}],65:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var position = properties.position,
      rotations = properties.rotations;


  return React.createElement(Container, { position: position, rotations: rotations, length: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":48}],66:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../container/fortyFoot":55,"../container/twentyFoot":65}],67:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../container/fortyFoot":55,"../container/twentyFoot":65}],68:[function(require,module,exports){
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

},{"../../../element/canvas":21,"../container/twentyFoot":65}],69:[function(require,module,exports){
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

},{"../../element/canvas":21,"./foundations/concreteSlab":70}],70:[function(require,module,exports){
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

},{"../../common/textured/cuboid":32}],71:[function(require,module,exports){
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

},{"../../element/canvas":21,"./frame/steelSection":72}],72:[function(require,module,exports){
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

},{"../../common/textured/cuboid":32}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('./common/coloured/cuboid'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredTriangle = require('../examples/common/coloured/triangle'),
    TexturedTriangle = require('../examples/common/textured/triangle'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var masking = function masking() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 5, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        TexturedTriangle,
        { imageName: 'graffiti.jpg' },
        React.createElement(
          Mask,
          null,
          React.createElement(ColouredTriangle, { position: [0.25, 0.125, 1], width: 0.5, height: 0.5 })
        )
      )
    );
  });
};

module.exports = masking;

/*
 <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
 </Mask>
 </ColouredCuboid>
 </Mask>
 </ColouredCuboid>
 <ColouredTriangle colour={[ 1, 0, 1, 1 ]} >
 <Mask>
 <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
 </Mask>
 </ColouredTriangle>
*/

},{"../canvas":2,"../element/camera":15,"../element/mask":24,"../element/scene":25,"../examples/common/coloured/triangle":29,"../examples/common/textured/triangle":33,"../jiggle":82,"../utilities/imageMap":112,"./common/coloured/cuboid":27,"./common/textured/cuboid":32}],75:[function(require,module,exports){
'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('./common/coloured/cuboid'),
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
      React.createElement(ColouredCuboid, { colour: [1, 0, 0, 1], position: [-0.5, -0.5, -0.5] }),
      React.createElement(ColouredCylinder, { colour: [0, 1, 0, 1], position: [1, 1, 1] })
    );
  });
};

module.exports = shapes;

},{"../canvas":2,"../element/camera":15,"../element/scene":25,"../jiggle":82,"../utilities/imageMap":112,"./common/coloured/cuboid":27,"./common/coloured/cylinder":28}],76:[function(require,module,exports){
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

},{"../canvas":2,"../element/camera":15,"../element/scene":25,"../jiggle":82,"../utilities/imageMap":112,"./timberFramedHouse/frame":77}],77:[function(require,module,exports){
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

},{"../../element/canvas":21,"./frame/steelSection":78}],78:[function(require,module,exports){
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

},{"../../common/textured/cuboid":32}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = require('./edge'),
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
    _permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    add3 = vectorUtilities.add3,
    subtract3 = vectorUtilities.subtract3,
    scale3 = vectorUtilities.scale3,
    length3 = vectorUtilities.length3,
    normalise3 = vectorUtilities.normalise3;

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
    key: 'getVertexPositions',
    value: function getVertexPositions() {
      var vertexPositions = this.vertices.map(function (vertex) {
        var vertexPosition = vertex.slice(); ///

        return vertexPosition;
      });

      return vertexPositions;
    }
  }, {
    key: 'getVertexNormals',
    value: function getVertexNormals() {
      var vertexNormal = normalise3(this.normal),
          vertexNormals = [vertexNormal, vertexNormal, vertexNormal];

      return vertexNormals;
    }
  }, {
    key: 'getVertexIndexes',
    value: function getVertexIndexes(index) {
      ///
      var vertexIndex = index * 3,
          vertexIndexes = [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2];

      return vertexIndexes;
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
    key: 'permute',
    value: function permute(places) {
      this.vertices = _permute(this.vertices, places);
    }
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, facet) {
      var nullIntersectionIndex = calculateNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nullIntersectionIndex) % VERTICES_LENGTH;

      intersections = _permute(intersections, places);

      intersections = intersections.slice(1); ///

      this.permute(places);

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
          firstFacet = facet.fromVertices(firstVertices),
          secondFacet = facet.fromVertices(secondVertices),
          thirdFacet = facet.fromVertices(thirdVertices),
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
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, facet) {
      var nonNullIntersectionIndex = calculateNonNullIntersectionIndex(intersections),
          places = (VERTICES_LENGTH - nonNullIntersectionIndex) % VERTICES_LENGTH;

      intersections = _permute(intersections, places);

      this.permute(places);

      var firstVertex = first(this.vertices),
          secondVertex = second(this.vertices),
          thirdVertex = third(this.vertices),
          firstIntersection = first(intersections),
          intermediateVertex = calculateIntermediateVertex(firstVertex, secondVertex, firstIntersection),
          firstVertices = [firstVertex, intermediateVertex, thirdVertex],
          secondVertices = [intermediateVertex, secondVertex, thirdVertex],
          parentVertices = this.vertices,
          firstFacet = facet.fromVertices(firstVertices),
          secondFacet = facet.fromVertices(secondVertices),
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

},{"./constants":11,"./edge":12,"./utilities/approximate":107,"./utilities/array":108,"./utilities/vector":116,"./utilities/vertex":117,"./utilities/vertices":118}],80:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    verticesUtilities = require('../utilities/vertices');

var calculateNormal = verticesUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, colour) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal();

      vertices = vertices.map(function (vertex) {
        vertex = vertex.slice(); ///

        return vertex;
      });

      normal = normal.slice(); ///

      var colour = this.colour.slice(),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
    }
  }, {
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.colour,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithTwoNonNullIntersections', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var colour = this.colour,
          normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
    }
  }], [{
    key: 'fromVerticesIndexesAndColour',
    value: function fromVerticesIndexesAndColour(vertices, indexes, colour) {
      vertices = indexes.map(function (index) {
        var vertex = vertices[index];

        return vertex;
      });

      var normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;

},{"../facet":79,"../utilities/vertices":118}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    arrayUtilities = require('../utilities/array'),
    matrixUtilities = require('../utilities/matrix'),
    vectorUtilities = require('../utilities/vector'),
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap'),
    rotationUtilities = require('../utilities/rotation');

var invert2 = matrixUtilities.invert2,
    invert3 = matrixUtilities.invert3,
    getImageDetails = imageMapUtilities.getImageDetails,
    calculateRotationQuaternion = rotationUtilities.calculateRotationQuaternion,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    _permute = arrayUtilities.permute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    transform2 = vectorUtilities.transform2,
    transform3 = vectorUtilities.transform3;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal));

    _this.imageName = imageName;
    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal();

      vertices = vertices.map(function (vertex) {
        vertex = vertex.slice(); ///

        return vertex;
      });

      normal = normal.slice(); ///

      var imageName = this.imageName,
          textureCoordinates = this.textureCoordinates.map(function (textureCoordinates) {
        textureCoordinates = textureCoordinates.slice(); ///

        return textureCoordinates;
      }),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinates',
    value: function getTextureCoordinates() {
      return this.textureCoordinates;
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
          vertexTextureCoordinates = translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height);


      return vertexTextureCoordinates;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinates = _permute(this.textureCoordinates, places);
    }
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'splitWithTwoNonNullIntersections', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          imageName = this.imageName,
          parentVertices = this.vertices,
          ///
      textureCoordinates = textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }], [{
    key: 'fromVerticesIndexesImageNameAndTextureCoordinates',
    value: function fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
      vertices = indexes.map(function (index) {
        return vertices[index];
      }); ///

      textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3); ///

      var normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height) {
  textureCoordinates = textureCoordinates.map(function (textureCoordinates) {
    ///
    textureCoordinates = add2(multiply2(textureCoordinates, [width, height]), [left, bottom]);

    return textureCoordinates;
  });

  return textureCoordinates;
}

function textureCoordinatesFromVerticesParentVerticesAndTextureCoordinates(vertices, parentVertices, textureCoordinates) {
  var normal = calculateNormal(vertices),
      rotationQuaternion = calculateRotationQuaternion(normal),
      verticesInXYPlane = rotateVertices(vertices, rotationQuaternion),
      parentVerticesInXYPlane = rotateVertices(parentVertices, rotationQuaternion),
      firstVertexInXYPlane = first(verticesInXYPlane),
      secondVertexInXYPlane = second(verticesInXYPlane),
      thirdVertexInXYPlane = third(verticesInXYPlane),
      firstParentVertexInXYPlane = first(parentVerticesInXYPlane),
      secondParentVertexInXYPlane = second(parentVerticesInXYPlane),
      thirdParentVertexInXYPlane = third(parentVerticesInXYPlane),
      P1x = firstParentVertexInXYPlane[0],
      ///
  P1y = firstParentVertexInXYPlane[1],
      ///
  P2x = secondParentVertexInXYPlane[0],
      ///
  P2y = secondParentVertexInXYPlane[1],
      ///
  P3x = thirdParentVertexInXYPlane[0],
      ///
  P3y = thirdParentVertexInXYPlane[1],
      ///
  changeOfBasisMatrix = calculateChangeOfBasisMatrix(textureCoordinates),
      xVector = transform3([P1x, P2x, P3x], changeOfBasisMatrix),
      yVector = transform3([P1y, P2y, P3y], changeOfBasisMatrix),
      Ox = xVector[0],
      ///
  Oy = yVector[0],
      ///
  Ux = xVector[1],
      ///
  Uy = yVector[1],
      ///
  Vx = xVector[2],
      ///
  Vy = yVector[2],
      ///
  R1x = firstVertexInXYPlane[0],
      ///
  R1y = firstVertexInXYPlane[1],
      ///
  R2x = secondVertexInXYPlane[0],
      ///
  R2y = secondVertexInXYPlane[1],
      ///
  R3x = thirdVertexInXYPlane[0],
      ///
  R3y = thirdVertexInXYPlane[1],
      ///
  matrix = invert2([Ux, Uy, Vx, Vy]),
      firstTextureCoordinates = transform2([R1x - Ox, R1y - Oy], matrix),
      secondTextureCoordinates = transform2([R2x - Ox, R2y - Oy], matrix),
      thirdTextureCoordinates = transform2([R3x - Ox, R3y - Oy], matrix);

  textureCoordinates = [firstTextureCoordinates, secondTextureCoordinates, thirdTextureCoordinates];

  return textureCoordinates;
}

function calculateChangeOfBasisMatrix(textureCoordinates) {
  var firstTextureCoordinate = first(textureCoordinates),
      secondTextureCoordinate = second(textureCoordinates),
      thirdTextureCoordinate = third(textureCoordinates),
      P1u = firstTextureCoordinate[0],
      ///
  P1v = firstTextureCoordinate[1],
      ///
  P2u = secondTextureCoordinate[0],
      ///
  P2v = secondTextureCoordinate[1],
      ///
  P3u = thirdTextureCoordinate[0],
      ///
  P3v = thirdTextureCoordinate[1],
      ///
  changeOfBasisMatrix = invert3([1, 1, 1, P1u, P2u, P3u, P1v, P2v, P3v]);

  return changeOfBasisMatrix;
}

},{"../facet":79,"../utilities/array":108,"../utilities/imageMap":112,"../utilities/matrix":113,"../utilities/rotation":114,"../utilities/vector":116,"../utilities/vertices":118}],82:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":84}],83:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('./constants'),
    EdgeInXYPlane = require('./edgeInXYPlane'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    rotationUtilities = require('./utilities/rotation');

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

},{"./constants":11,"./edgeInXYPlane":13,"./utilities/array":108,"./utilities/rotation":114,"./utilities/vertices":118,"./verticalLineInXYPlane":119}],84:[function(require,module,exports){
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

},{"./element":14}],85:[function(require,module,exports){
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

},{}],86:[function(require,module,exports){
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

},{}],87:[function(require,module,exports){
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

},{"../../renderer/buffers":86}],88:[function(require,module,exports){
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

},{"../../renderer/buffers":86}],89:[function(require,module,exports){
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

},{"../renderer":85,"../renderer/buffers/colour":87,"../renderer/data/colour":91,"./locations/colour/attribute":94,"./locations/colour/uniform":95,"./source/colour/fragmentShader":99,"./source/colour/vertexShader":100}],90:[function(require,module,exports){
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

},{"../utilities/array":108}],91:[function(require,module,exports){
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

},{"../../renderer/data":90,"../../utilities/array":108}],92:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RendererData = require('../../renderer/data'),
    arrayUtilities = require('../../utilities/array'),
    vectorUtilities = require('../../utilities/vector');

var add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    merge = arrayUtilities.merge,
    flatten = arrayUtilities.flatten,
    add = merge; ///

var TextureRendererData = function (_RendererData) {
  _inherits(TextureRendererData, _RendererData);

  function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex, vertexTextureCoordinatesData) {
    _classCallCheck(this, TextureRendererData);

    var _this = _possibleConstructorReturn(this, (TextureRendererData.__proto__ || Object.getPrototypeOf(TextureRendererData)).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, maximumVertexIndex));

    _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
    return _this;
  }

  _createClass(TextureRendererData, [{
    key: 'getVertexTextureCoordinatesData',
    value: function getVertexTextureCoordinatesData() {
      return this.vertexTextureCoordinatesData;
    }
  }, {
    key: 'addVertexTextureCoordinates',
    value: function addVertexTextureCoordinates(vertexTextureCoordinates) {
      vertexTextureCoordinates = vertexTextureCoordinates.map(function (vertexTextureCoordinates) {
        ///
        vertexTextureCoordinates = verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates);

        return vertexTextureCoordinates;
      });

      var vertexTextureCoordinatesData = flatten(vertexTextureCoordinates);

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

function verticallyFlipVertexTextureCoordinates(vertexTextureCoordinates) {
  return add2(multiply2(vertexTextureCoordinates, [1, -1]), [0, 1]);
} ///

},{"../../renderer/data":90,"../../utilities/array":108,"../../utilities/vector":116}],93:[function(require,module,exports){
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

},{"../source/lighting":101,"../source/position":102}],94:[function(require,module,exports){
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

},{"../../locations/attribute":93,"../../source/colour/vertexShader":100}],95:[function(require,module,exports){
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

},{"../../locations/uniform":98}],96:[function(require,module,exports){
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

},{"../../locations/attribute":93,"../../source/texture/vertexShader":104}],97:[function(require,module,exports){
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

},{"../../locations/uniform":98,"../../source/texture/fragmentShader":103}],98:[function(require,module,exports){
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

},{"../source/lighting":101,"../source/position":102}],99:[function(require,module,exports){
'use strict';

var fragmentShaderSource = new String('\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ');

module.exports = fragmentShaderSource;

},{}],100:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = new String('\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + lightingSource + '\n      \n        ' + positionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  vertexColourAttributeName: vertexColourAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":101,"../../source/position":102}],101:[function(require,module,exports){
'use strict';

var normalMatrixName = 'uNormalMatrix',
    vertexNormalAttributeName = 'aVertexNormal';

var lightingSource = new String('\n  \n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ');

Object.assign(lightingSource, {
  normalMatrixName: normalMatrixName,
  vertexNormalAttributeName: vertexNormalAttributeName
});

module.exports = lightingSource;

},{}],102:[function(require,module,exports){
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

},{}],103:[function(require,module,exports){
'use strict';

var samplerName = 'uSampler',
    fragmentShaderSource = new String('\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ');

Object.assign(fragmentShaderSource, {
  samplerName: samplerName
});

module.exports = fragmentShaderSource;

},{}],104:[function(require,module,exports){
'use strict';

var lightingSource = require('../../source/lighting'),
    positionSource = require('../../source/position');

var textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = new String('\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + lightingSource + '\n      \n        ' + positionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ');

Object.assign(vertexShaderSource, {
  textureCoordinateAttributeName: textureCoordinateAttributeName
});

module.exports = vertexShaderSource;

},{"../../source/lighting":101,"../../source/position":102}],105:[function(require,module,exports){
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
    key: 'addVertexTextureCoordinates',
    value: function addVertexTextureCoordinates(vertexTextureCoordinates) {
      this.rendererData.addVertexTextureCoordinates(vertexTextureCoordinates);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      var rendererData = this.getRendererData(),
          rendererBuffers = this.getRendererBuffers(),
          vertexPositionsData = rendererData.getVertexPositionsData(),
          vertexNormalsData = rendererData.getVertexNormalsData(),
          vertexIndexesData = rendererData.getVertexIndexesData(),
          textureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

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

},{"../renderer":85,"../renderer/buffers/texture":88,"../renderer/data/texture":92,"./locations/texture/attribute":96,"./locations/texture/uniform":97,"./source/texture/fragmentShader":103,"./source/texture/vertexShader":104}],106:[function(require,module,exports){
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

},{}],107:[function(require,module,exports){
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

},{"../constants":11}],108:[function(require,module,exports){
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

},{"necessary":265}],109:[function(require,module,exports){
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

},{"../constants":11,"../utilities/array":108,"../utilities/matrix":113}],110:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],111:[function(require,module,exports){
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

},{"necessary":265}],112:[function(require,module,exports){
'use strict';

var constants = require('../../bin/constants'),
    ///
imageUtilities = require('../utilities/image');

var IMAGE_MAP_URL_PATH = constants.IMAGE_MAP_URL_PATH,
    preloadImage = imageUtilities.preloadImage;


function preloadImageMap(callback) {
  var path = IMAGE_MAP_URL_PATH;

  preloadImage(path, callback);
}

function getImageDetails(imageName) {
  var _runtimeConfiguration = runtimeConfiguration,
      imageMapJSON = _runtimeConfiguration.imageMapJSON,
      imageDetails = imageMapJSON[imageName];


  return imageDetails;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  getImageDetails: getImageDetails
};

},{"../../bin/constants":1,"../utilities/image":111}],113:[function(require,module,exports){
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

},{"gl-mat2":127,"gl-mat3":144,"gl-mat4":162}],114:[function(require,module,exports){
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

},{"../utilities/angle":106,"../utilities/approximate":107,"../utilities/array":108,"../utilities/vector":116}],115:[function(require,module,exports){
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

},{"../constants":11,"../utilities/array":108,"../utilities/matrix":113,"../utilities/vector":116}],116:[function(require,module,exports){
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

function multiply2(vectorA, vectorB) {
  return vec2.multiply([], vectorA, vectorB);
}

function multiply3(vectorA, vectorB) {
  return vec3.multiply([], vectorA, vectorB);
}

function multiply4(vectorA, vectorB) {
  return vec4.multiply([], vectorA, vectorB);
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
  multiply2: multiply2,
  multiply3: multiply3,
  multiply4: multiply4,
  transform2: transform2,
  transform3: transform3,
  transform4: transform4
};

},{"gl-vec2":187,"gl-vec3":217,"gl-vec4":247}],117:[function(require,module,exports){
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

},{"../utilities/vector":116}],118:[function(require,module,exports){
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

},{"../utilities/array":108,"../utilities/rotation":114,"../utilities/vector":116}],119:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array'),
    vectorUtilities = require('./utilities/vector'),
    vertexUtilities = require('./utilities/vertex'),
    rotationUtilities = require('./utilities/rotation'),
    approximateUtilities = require('./utilities/approximate');

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

},{"./utilities/approximate":107,"./utilities/array":108,"./utilities/rotation":114,"./utilities/vector":116,"./utilities/vertex":117}],120:[function(require,module,exports){

},{}],121:[function(require,module,exports){
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

},{}],122:[function(require,module,exports){
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

},{}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
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

},{}],127:[function(require,module,exports){
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

},{"./adjoint":121,"./copy":122,"./create":123,"./determinant":124,"./frob":125,"./identity":126,"./invert":128,"./ldu":129,"./multiply":130,"./rotate":131,"./scale":132,"./transpose":133}],128:[function(require,module,exports){
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

},{}],129:[function(require,module,exports){
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

},{}],130:[function(require,module,exports){
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

},{}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
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

},{}],133:[function(require,module,exports){
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

},{}],134:[function(require,module,exports){
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

},{}],135:[function(require,module,exports){
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

},{}],136:[function(require,module,exports){
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

},{}],137:[function(require,module,exports){
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

},{}],138:[function(require,module,exports){
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

},{}],139:[function(require,module,exports){
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

},{}],140:[function(require,module,exports){
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

},{}],141:[function(require,module,exports){
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

},{}],142:[function(require,module,exports){
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

},{}],143:[function(require,module,exports){
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

},{}],144:[function(require,module,exports){
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

},{"./adjoint":134,"./clone":135,"./copy":136,"./create":137,"./determinant":138,"./frob":139,"./from-mat2":140,"./from-mat4":141,"./from-quat":142,"./identity":143,"./invert":145,"./multiply":146,"./normal-from-mat4":147,"./rotate":148,"./scale":149,"./str":150,"./translate":151,"./transpose":152}],145:[function(require,module,exports){
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

},{}],146:[function(require,module,exports){
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

},{}],147:[function(require,module,exports){
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

},{}],148:[function(require,module,exports){
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

},{}],149:[function(require,module,exports){
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

},{}],150:[function(require,module,exports){
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

},{}],151:[function(require,module,exports){
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

},{}],152:[function(require,module,exports){
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

},{}],153:[function(require,module,exports){
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
},{}],154:[function(require,module,exports){
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
},{}],155:[function(require,module,exports){
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
},{}],156:[function(require,module,exports){
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
},{}],157:[function(require,module,exports){
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
},{}],158:[function(require,module,exports){
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
},{}],159:[function(require,module,exports){
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
},{}],160:[function(require,module,exports){
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
},{}],161:[function(require,module,exports){
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
},{}],162:[function(require,module,exports){
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
},{"./adjoint":153,"./clone":154,"./copy":155,"./create":156,"./determinant":157,"./fromQuat":158,"./fromRotationTranslation":159,"./frustum":160,"./identity":161,"./invert":163,"./lookAt":164,"./multiply":165,"./ortho":166,"./perspective":167,"./perspectiveFromFieldOfView":168,"./rotate":169,"./rotateX":170,"./rotateY":171,"./rotateZ":172,"./scale":173,"./str":174,"./translate":175,"./transpose":176}],163:[function(require,module,exports){
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
},{}],164:[function(require,module,exports){
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
},{"./identity":161}],165:[function(require,module,exports){
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
},{}],166:[function(require,module,exports){
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
},{}],167:[function(require,module,exports){
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
},{}],168:[function(require,module,exports){
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


},{}],169:[function(require,module,exports){
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
},{}],170:[function(require,module,exports){
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
},{}],171:[function(require,module,exports){
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
},{}],172:[function(require,module,exports){
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
},{}],173:[function(require,module,exports){
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
},{}],174:[function(require,module,exports){
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
},{}],175:[function(require,module,exports){
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
},{}],176:[function(require,module,exports){
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
},{}],177:[function(require,module,exports){
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
},{}],178:[function(require,module,exports){
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
},{}],179:[function(require,module,exports){
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
},{}],180:[function(require,module,exports){
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
},{}],181:[function(require,module,exports){
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
},{}],182:[function(require,module,exports){
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
},{}],183:[function(require,module,exports){
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
},{}],184:[function(require,module,exports){
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
},{}],185:[function(require,module,exports){
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
},{"./create":180}],186:[function(require,module,exports){
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
},{}],187:[function(require,module,exports){
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
},{"./add":177,"./clone":178,"./copy":179,"./create":180,"./cross":181,"./distance":182,"./divide":183,"./dot":184,"./forEach":185,"./fromValues":186,"./length":188,"./lerp":189,"./max":190,"./min":191,"./multiply":192,"./negate":193,"./normalize":194,"./random":195,"./scale":196,"./scaleAndAdd":197,"./set":198,"./squaredDistance":199,"./squaredLength":200,"./subtract":201,"./transformMat2":202,"./transformMat2d":203,"./transformMat3":204,"./transformMat4":205}],188:[function(require,module,exports){
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
},{}],189:[function(require,module,exports){
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
},{}],190:[function(require,module,exports){
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
},{}],191:[function(require,module,exports){
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
},{}],192:[function(require,module,exports){
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
},{}],193:[function(require,module,exports){
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
},{}],194:[function(require,module,exports){
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
},{}],195:[function(require,module,exports){
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
},{}],196:[function(require,module,exports){
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
},{}],197:[function(require,module,exports){
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
},{}],198:[function(require,module,exports){
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
},{}],199:[function(require,module,exports){
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
},{}],200:[function(require,module,exports){
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
},{}],201:[function(require,module,exports){
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
},{}],202:[function(require,module,exports){
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
},{}],203:[function(require,module,exports){
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
},{}],204:[function(require,module,exports){
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
},{}],205:[function(require,module,exports){
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
},{}],206:[function(require,module,exports){
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
},{}],207:[function(require,module,exports){
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

},{"./dot":214,"./fromValues":216,"./normalize":225}],208:[function(require,module,exports){
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
},{}],209:[function(require,module,exports){
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
},{}],210:[function(require,module,exports){
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
},{}],211:[function(require,module,exports){
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
},{}],212:[function(require,module,exports){
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
},{}],213:[function(require,module,exports){
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
},{}],214:[function(require,module,exports){
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
},{}],215:[function(require,module,exports){
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
},{"./create":210}],216:[function(require,module,exports){
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
},{}],217:[function(require,module,exports){
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
},{"./add":206,"./angle":207,"./clone":208,"./copy":209,"./create":210,"./cross":211,"./distance":212,"./divide":213,"./dot":214,"./forEach":215,"./fromValues":216,"./inverse":218,"./length":219,"./lerp":220,"./max":221,"./min":222,"./multiply":223,"./negate":224,"./normalize":225,"./random":226,"./rotateX":227,"./rotateY":228,"./rotateZ":229,"./scale":230,"./scaleAndAdd":231,"./set":232,"./squaredDistance":233,"./squaredLength":234,"./subtract":235,"./transformMat3":236,"./transformMat4":237,"./transformQuat":238}],218:[function(require,module,exports){
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
},{}],219:[function(require,module,exports){
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
},{}],220:[function(require,module,exports){
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
},{}],221:[function(require,module,exports){
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
},{}],222:[function(require,module,exports){
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
},{}],223:[function(require,module,exports){
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
},{}],224:[function(require,module,exports){
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
},{}],225:[function(require,module,exports){
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
},{}],226:[function(require,module,exports){
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
},{}],227:[function(require,module,exports){
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
},{}],228:[function(require,module,exports){
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
},{}],229:[function(require,module,exports){
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
},{}],230:[function(require,module,exports){
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
},{}],231:[function(require,module,exports){
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
},{}],232:[function(require,module,exports){
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
},{}],233:[function(require,module,exports){
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
},{}],234:[function(require,module,exports){
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
},{}],235:[function(require,module,exports){
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
},{}],236:[function(require,module,exports){
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
},{}],237:[function(require,module,exports){
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
},{}],238:[function(require,module,exports){
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
},{}],239:[function(require,module,exports){
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

},{}],240:[function(require,module,exports){
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

},{}],241:[function(require,module,exports){
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

},{}],242:[function(require,module,exports){
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

},{}],243:[function(require,module,exports){
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

},{}],244:[function(require,module,exports){
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

},{}],245:[function(require,module,exports){
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

},{}],246:[function(require,module,exports){
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

},{}],247:[function(require,module,exports){
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

},{"./add":239,"./clone":240,"./copy":241,"./create":242,"./distance":243,"./divide":244,"./dot":245,"./fromValues":246,"./inverse":248,"./length":249,"./lerp":250,"./max":251,"./min":252,"./multiply":253,"./negate":254,"./normalize":255,"./random":256,"./scale":257,"./scaleAndAdd":258,"./set":259,"./squaredDistance":260,"./squaredLength":261,"./subtract":262,"./transformMat4":263,"./transformQuat":264}],248:[function(require,module,exports){
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

},{}],249:[function(require,module,exports){
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

},{}],250:[function(require,module,exports){
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

},{}],251:[function(require,module,exports){
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

},{}],252:[function(require,module,exports){
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

},{}],253:[function(require,module,exports){
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

},{}],254:[function(require,module,exports){
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

},{}],255:[function(require,module,exports){
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

},{}],256:[function(require,module,exports){
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

},{"./normalize":255,"./scale":257}],257:[function(require,module,exports){
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

},{}],258:[function(require,module,exports){
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

},{}],259:[function(require,module,exports){
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

},{}],260:[function(require,module,exports){
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

},{}],261:[function(require,module,exports){
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

},{}],262:[function(require,module,exports){
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

},{}],263:[function(require,module,exports){
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

},{}],264:[function(require,module,exports){
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

},{}],265:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":266,"./lib/utilities/asynchronous":267,"./lib/utilities/fileSystem":268,"./lib/utilities/path":269}],266:[function(require,module,exports){
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

},{}],267:[function(require,module,exports){
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

},{}],268:[function(require,module,exports){
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

},{"fs":120}],269:[function(require,module,exports){
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

},{"./array":266}]},{},[26])(26)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbnZhcy5qcyIsImVzNi9jYW52YXMvbWl4aW4vYmxlbmRpbmcuanMiLCJlczYvY2FudmFzL21peGluL2J1ZmZlci5qcyIsImVzNi9jYW52YXMvbWl4aW4vY29sb3VyLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9kZXB0aC5qcyIsImVzNi9jYW52YXMvbWl4aW4vbWF0cml4LmpzIiwiZXM2L2NhbnZhcy9taXhpbi9wcm9ncmFtLmpzIiwiZXM2L2NhbnZhcy9taXhpbi9zaGFkZXIuanMiLCJlczYvY2FudmFzL21peGluL3RleHR1cmUuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VkZ2UuanMiLCJlczYvZWRnZUluWFlQbGFuZS5qcyIsImVzNi9lbGVtZW50LmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL2tleUV2ZW50cy5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS9tb3VzZUV2ZW50cy5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS9wYW4uanMiLCJlczYvZWxlbWVudC9jYW1lcmEvdGlsdC5qcyIsImVzNi9lbGVtZW50L2NhbWVyYS96b29tLmpzIiwiZXM2L2VsZW1lbnQvY2FudmFzLmpzIiwiZXM2L2VsZW1lbnQvY2FudmFzL2NvbG91cmVkLmpzIiwiZXM2L2VsZW1lbnQvY2FudmFzL3RleHR1cmVkLmpzIiwiZXM2L2VsZW1lbnQvbWFzay5qcyIsImVzNi9lbGVtZW50L3NjZW5lLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N5bGluZGVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC90cmlhbmdsZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jeWxpbmRlci5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi90ZXh0dXJlZC90cmlhbmdsZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vdHJpYW5nbGUuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9iZWRyb29tLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbG93ZXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvcmFpbGluZy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdG9wUmFpbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL2xvbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL2VkZ2Uvc2hvcnQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9zZWN0aW9uL29wZW5NZXNoLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvYm90dG9tUmFpbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvYm90dG9tUmFpbHMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2Nvcm5lckZpdHRpbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2Nvcm5lckZpdHRpbmdzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9jb3JuZXJQb3N0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9jb3JuZXJQb3N0cy5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvZm9ydHlGb290LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvYmFjay5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvY29sb3VyZWRSaWRnZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvZnJvbnQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3BhbmVsL3NpZGVBLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9wYW5lbC9zaWRlQi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcm9vZi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvdG9wUmFpbC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvdG9wUmFpbHMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3R3ZW50eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zL2NvbmNyZXRlU2xhYi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mcmFtZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mcmFtZS9zdGVlbFNlY3Rpb24uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2Uvcm9vZkdhcmRlbi5qcyIsImVzNi9leGFtcGxlcy9tYXNraW5nLmpzIiwiZXM2L2V4YW1wbGVzL3NoYXBlcy5qcyIsImVzNi9leGFtcGxlcy90aW1iZXJGcmFtZWRIb3VzZS5qcyIsImVzNi9leGFtcGxlcy90aW1iZXJGcmFtZWRIb3VzZS9mcmFtZS5qcyIsImVzNi9leGFtcGxlcy90aW1iZXJGcmFtZWRIb3VzZS9mcmFtZS9zdGVlbFNlY3Rpb24uanMiLCJlczYvZmFjZXQuanMiLCJlczYvZmFjZXQvY29sb3VyZWQuanMiLCJlczYvZmFjZXQvdGV4dHVyZWQuanMiLCJlczYvamlnZ2xlLmpzIiwiZXM2L21hc2tpbmdGYWNldC5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZW5kZXJlci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsImVzNi9yZW5kZXJlci9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS5qcyIsImVzNi9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci90ZXh0dXJlLmpzIiwiZXM2L3V0aWxpdGllcy9hbmdsZS5qcyIsImVzNi91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCJlczYvdXRpbGl0aWVzL2FycmF5LmpzIiwiZXM2L3V0aWxpdGllcy9jYW1lcmEuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2UuanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlTWFwLmpzIiwiZXM2L3V0aWxpdGllcy9tYXRyaXguanMiLCJlczYvdXRpbGl0aWVzL3JvdGF0aW9uLmpzIiwiZXM2L3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCJlczYvdXRpbGl0aWVzL3ZlY3Rvci5qcyIsImVzNi91dGlsaXRpZXMvdmVydGV4LmpzIiwiZXM2L3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsImVzNi92ZXJ0aWNhbExpbmVJblhZUGxhbmUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2Zyb2IuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbGR1LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0Mi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQyL3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2Fkam9pbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2Zyb2IuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLW1hdDIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLW1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9mcm9tLXF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9ub3JtYWwtZnJvbS1tYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDMvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0My90cmFuc3Bvc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9hZGpvaW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZGV0ZXJtaW5hbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJ1c3R1bS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9sb29rQXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L29ydGhvLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVguanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVZLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc3RyLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNsYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvdHJhbnNwb3NlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvYWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMi9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0Mi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDJkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzIvdHJhbnNmb3JtTWF0My5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMyL3RyYW5zZm9ybU1hdDQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9hZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9hbmdsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2Nyb3NzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXZpZGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kb3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9mb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvaW52ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVZLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtTWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9hZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Zyb21WYWx1ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2ludmVyc2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9sZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9sZXJwLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbWF4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbWluLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9uZWdhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9ub3JtYWxpemUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9yYW5kb20uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NjYWxlQW5kQWRkLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3F1YXJlZERpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3F1YXJlZExlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3N1YnRyYWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvdHJhbnNmb3JtTWF0NC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3RyYW5zZm9ybVF1YXQuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3BhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7Ozs7OztBQUVBLElB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Q0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBLE1BQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjs7QUFFQSxNQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTSxjQUFjLE9BQU8sT0FBUCxDQUFwQjs7QUFFQSxnQ0FBNEIsV0FBNUIsQ0FIb0IsQ0FHcUI7QUFDMUM7O0FBRUQsU0FBTyx5QkFBUDtBQUNEOztBQUVELFNBQVMsdUNBQVQsQ0FBaUQsSUFBakQsRUFBdUQ7QUFDckQsTUFBSSxrQ0FBa0MsSUFBdEM7O0FBRUEsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNLGNBQWMsT0FBTyxPQUFQLENBQXBCOztBQUVBLHNDQUFrQyxXQUFsQztBQUNEOztBQUVELFNBQU8sK0JBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixzQkFBb0Isa0JBREw7QUFFZixzQkFBb0Isa0JBRkw7QUFHZiw4QkFBNEIsMEJBSGI7QUFJZix5Q0FBdUMscUNBSnhCO0FBS2YsZ0JBQWMsWUFMQztBQU1mLG9CQUFrQixnQkFOSDtBQU9mLDBCQUF3QixzQkFQVDtBQVFmLGdDQUE4Qiw0QkFSZjtBQVNmLGdDQUE4Qiw0QkFUZjtBQVVmLHFDQUFtQyxpQ0FWcEI7QUFXZiwyQ0FBeUM7QUFYMUIsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJTUFHRV9TSVpFID0gMTI4LFxuICAgICAgSU1BR0VfTUFQX1VSTF9QQVRIID0gJy9pbWFnZU1hcCcsXG4gICAgICBJTkRFWF9QQUdFX1VSTF9QQVRIID0gJy8nLFxuICAgICAgU0hBUEVTX1BBR0VfVVJMX1BBVEggPSAnL3NoYXBlcycsXG4gICAgICBTSEFQRVNfUEFHRV9GSUxFX05BTUUgPSAnc2hhcGVzLmh0bWwnLFxuICAgICAgTUFTS0lOR19QQUdFX1VSTF9QQVRIID0gJy9tYXNraW5nJyxcbiAgICAgIE1BU0tJTkdfUEFHRV9GSUxFX05BTUUgPSAnbWFza2luZy5odG1sJyxcbiAgICAgIENPTlRBSU5FUl9IT1VTRV9QQUdFX1VSTF9QQVRIID0gJy9jb250YWluZXJIb3VzZScsXG4gICAgICBDT05UQUlORVJfSE9VU0VfUEFHRV9GSUxFX05BTUUgPSAnY29udGFpbmVySG91c2UuaHRtbCcsXG4gICAgICBUSU1CRVJfRlJBTUVEX0hPVVNFX1BBR0VfVVJMX1BBVEggPSAnL3RpbWJlckZyYW1lZEhvdXNlJyxcbiAgICAgIFRJTUJFUl9GUkFNRURfSE9VU0VfUEFHRV9GSUxFX05BTUUgPSAndGltYmVyRnJhbWVkSG91c2UuaHRtbCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJTUFHRV9TSVpFOiBJTUFHRV9TSVpFLFxuICBJTUFHRV9NQVBfVVJMX1BBVEg6IElNQUdFX01BUF9VUkxfUEFUSCxcbiAgSU5ERVhfUEFHRV9VUkxfUEFUSDogSU5ERVhfUEFHRV9VUkxfUEFUSCxcbiAgU0hBUEVTX1BBR0VfVVJMX1BBVEg6IFNIQVBFU19QQUdFX1VSTF9QQVRILFxuICBTSEFQRVNfUEFHRV9GSUxFX05BTUU6IFNIQVBFU19QQUdFX0ZJTEVfTkFNRSxcbiAgTUFTS0lOR19QQUdFX1VSTF9QQVRIOiBNQVNLSU5HX1BBR0VfVVJMX1BBVEgsXG4gIE1BU0tJTkdfUEFHRV9GSUxFX05BTUU6IE1BU0tJTkdfUEFHRV9GSUxFX05BTUUsXG4gIENPTlRBSU5FUl9IT1VTRV9QQUdFX1VSTF9QQVRIOiBDT05UQUlORVJfSE9VU0VfUEFHRV9VUkxfUEFUSCxcbiAgQ09OVEFJTkVSX0hPVVNFX1BBR0VfRklMRV9OQU1FOiBDT05UQUlORVJfSE9VU0VfUEFHRV9GSUxFX05BTUUsXG4gIFRJTUJFUl9GUkFNRURfSE9VU0VfUEFHRV9VUkxfUEFUSDogVElNQkVSX0ZSQU1FRF9IT1VTRV9QQUdFX1VSTF9QQVRILFxuICBUSU1CRVJfRlJBTUVEX0hPVVNFX1BBR0VfRklMRV9OQU1FOiBUSU1CRVJfRlJBTUVEX0hPVVNFX1BBR0VfRklMRV9OQU1FXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibGVuZGluZ01peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vYmxlbmRpbmcnKSxcbiAgICAgIHByb2dyYW1NaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3RleHR1cmUnKSxcbiAgICAgIGNvbG91ck1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vY2FudmFzL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL2NhbnZhcy9taXhpbi9idWZmZXInKSxcbiAgICAgIG1hdHJpeE1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9jYW52YXMvbWl4aW4vZGVwdGgnKSxcbiAgICAgIGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpOyB9XG5cbiAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgeyB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7IH1cblxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHsgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoc2hhZGVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0TWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IFNSQ19BTFBIQSwgT05FLCBCTEVORCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoQkxFTkQpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoU1JDX0FMUEhBLCBPTkUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5hYmxlQmxlbmRpbmc6IGVuYWJsZUJsZW5kaW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXI6IGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyOiBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyOiBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXI6IGJpbmRCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gZGVmYXVsdFIsIGcgPSBkZWZhdWx0RywgYiA9IGRlZmF1bHRCLCBhID0gZGVmYXVsdEEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckNvbG91cjogY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyOiBjbGVhckNvbG91ckJ1ZmZlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gZGVmYXVsdERlcHRoKSB7IFxuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5mdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIoREVQVEhfQlVGRkVSX0JJVCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKERFUFRIX1RFU1QpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoTEVRVUFMKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGg6IGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXI6IGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZzogZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXg6IGFwcGx5TWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVQcm9ncmFtOiBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtOiB1c2VQcm9ncmFtXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU2hhZGVyOiBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcjogY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlcjogY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UpIHtcbiAgY29uc3QgeyBURVhUVVJFXzJELCBSR0JBLCBVTlNJR05FRF9CWVRFIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGxldmVsID0gMCxcbiAgICAgICAgaW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuICAgICAgICBmb3JtYXQgPSBSR0JBLFxuICAgICAgICB0eXBlID0gVU5TSUdORURfQllURSxcbiAgICAgICAgdGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgdGhpcy5jb250ZXh0LmdlbmVyYXRlTWlwbWFwKFRFWFRVUkVfMkQpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRleHR1cmUodGFyZ2V0KSB7IHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVRleHR1cmU6IGNyZWF0ZVRleHR1cmUsXG4gIGFjdGl2YXRlVGV4dHVyZTogYWN0aXZhdGVUZXh0dXJlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWRVJUSUNFU19MRU5HVEggPSAzLFxuICAgICAgQ1lMSU5ERVJfU0lERVMgPSA2NCxcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxLFxuICAgICAgREVHUkVFU19UT19SQURJQU5TID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgIEZJRUxEX09GX1ZJRVcgPSA0NSAqIERFR1JFRVNfVE9fUkFESUFOUyxcbiAgICAgIFpfTkVBUiA9IDEsXG4gICAgICBaX0ZBUiA9IDEwMDAsXG4gICAgICBNT1VTRV9VUCA9ICdNT1VTRV9VUCcsXG4gICAgICBNT1VTRV9ET1dOID0gJ01PVVNFX0RPV04nLFxuICAgICAgTU9VU0VfTU9WRSA9ICdNT1VTRV9NT1ZFJyxcbiAgICAgIE1PVVNFX1dIRUVMID0gJ01PVVNFX1dIRUVMJyxcbiAgICAgIENUUkxfS0VZX0NPREUgPSAxNyxcbiAgICAgIFNISUZUX0tFWV9DT0RFID0gMTYsXG4gICAgICBPRkZTRVRfU0NBTEFSID0gMC4yNSxcbiAgICAgIERJU1RBTkNFX1NDQUxBUiA9IDEuMjUsXG4gICAgICBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIgPSAwLjAxLFxuICAgICAgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyA9IFsgMCwgMCBdLFxuICAgICAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyA9IFsgMCwgMCBdLFxuICAgICAgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBaX0ZBUjogWl9GQVIsXG4gIFpfTkVBUjogWl9ORUFSLFxuICBNT1VTRV9VUDogTU9VU0VfVVAsXG4gIE1PVVNFX0RPV046IE1PVVNFX0RPV04sXG4gIE1PVVNFX01PVkU6IE1PVVNFX01PVkUsXG4gIE1PVVNFX1dIRUVMOiBNT1VTRV9XSEVFTCxcbiAgQ1RSTF9LRVlfQ09ERTogQ1RSTF9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREU6IFNISUZUX0tFWV9DT0RFLFxuICBGSUVMRF9PRl9WSUVXOiBGSUVMRF9PRl9WSUVXLFxuICBWRVJUSUNFU19MRU5HVEg6IFZFUlRJQ0VTX0xFTkdUSCxcbiAgQ1lMSU5ERVJfU0lERVM6IENZTElOREVSX1NJREVTLFxuICBNSU5JTVVNX0RJU1RBTkNFOiBNSU5JTVVNX0RJU1RBTkNFLFxuICBERUdSRUVTX1RPX1JBRElBTlM6IERFR1JFRVNfVE9fUkFESUFOUyxcbiAgT0ZGU0VUX1NDQUxBUjogT0ZGU0VUX1NDQUxBUixcbiAgRElTVEFOQ0VfU0NBTEFSOiBESVNUQU5DRV9TQ0FMQVIsXG4gIEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUjogQU5HTEVfQ09PUkRJTkFURVNfU0NBTEFSLFxuICBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTOiBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTOiBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUjogREVGQVVMVF9NQVJHSU5fT0ZfRVJST1Jcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHN1YnRyYWN0MyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IHByb2plY3RPbnRvWFlQbGFuZSB9ID0gdmVydGV4VXRpbGl0aWVzO1xuXG5jbGFzcyBFZGdlSW5YWVBsYW5lIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpIHtcbiAgICBtaWRQb2ludCA9IHByb2plY3RPbnRvWFlQbGFuZShtaWRQb2ludCk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIG1pZFBvaW50RGlyZWN0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50LCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnREaXJlY3Rpb24pLCAvLy9cbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3NQcm9kdWN0LCAgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50VG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50VG9UaGVSaWdodChtaWRQb2ludCkge1xuICAgIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50VG9UaGVMZWZ0KG1pZFBvaW50KSxcbiAgICAgICAgICBtaWRQb2ludFRvVGhlUmlnaHQgPSAhbWlkUG9pbnRUb1RoZUxlZnQ7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4SW5YWVBsYW5lQW5kRW5kVmVydGV4SW5YWVBsYW5lKHN0YXJ0VmVydGV4SW5YWVBsYW5lLCBlbmRWZXJ0ZXhJblhZUGxhbmUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4SW5YWVBsYW5lLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhJblhZUGxhbmUsIHN0YXJ0VmVydGV4SW5YWVBsYW5lKSxcbiAgICAgICAgICBlZGdlSW5YWVBsYW5lID0gbmV3IEVkZ2VJblhZUGxhbmUocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZUluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2VJblhZUGxhbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cbiAgXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIC8vL1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRPclByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50T3JQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0aWx0ID0gcmVxdWlyZSgnLi9jYW1lcmEvdGlsdCcpLFxuICAgICAgUGFuID0gcmVxdWlyZSgnLi9jYW1lcmEvcGFuJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9jYW1lcmEvem9vbScpLFxuICAgICAga2V5RXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEva2V5RXZlbnRzJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vY2FtZXJhL21vdXNlRXZlbnRzJyksXG4gICAgICBjYW1lcmFVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvY2FtZXJhJyk7XG5cbmNvbnN0IHsgb2Zmc2V0TWF0cml4RnJvbU9mZnNldCwgcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSwgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4IH0gPSBjYW1lcmFVdGlsaXRpZXM7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0aWx0LCBwYW4sIHpvb20sIGhhbmRsZXIsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy50aWx0Lm1vdXNlVXBIYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZVVwSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIFxuICAgIHRoaXMudGlsdC5tb3VzZURvd25IYW5kbGVyKCk7XG5cbiAgICB0aGlzLnBhbi5tb3VzZURvd25IYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnRpbHQubW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucGFuLm1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy50aWx0KTtcblxuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy50aWx0LnNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pO1xuXG4gICAgdGhpcy5wYW4uc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICBhZGRLZXlFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHNoaWZ0S2V5SGFuZGxlciA9IHRoaXMuc2hpZnRLZXlIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBrZXlFdmVudHMuYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcik7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBvblVwZGF0ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuICBcbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0ID0gdGhpcy5wYW4uZ2V0T2Zmc2V0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0TWF0cml4RnJvbU9mZnNldChvZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMuaGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZEtleUV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxEaXN0YW5jZSwgaW5pdGlhbE9mZnNldCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgaGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhKHRpbHQsIHBhbiwgem9vbSwgaGFuZGxlciwgbW91c2VEb3duLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBDVFJMX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgfVxuICBcbiAgb25DdHJsS2V5VXAoKSB7XG4gICAgY29uc3QgY3RybEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBjdHJsS2V5SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW0NUUkxfS0VZX0NPREVdO1xuXG4gICAgY3RybEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY3RybEtleUhhbmRsZXIpIHtcbiAgICAgIGN0cmxLZXlIYW5kbGVyKGN0cmxLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2hpZnRLZXlVcCgpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3RybEtleURvd24oKSB7XG4gICAgY29uc3QgY3RybEtleURvd24gPSB0cnVlLFxuICAgICAgICAgIGN0cmxLZXlIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbQ1RSTF9LRVlfQ09ERV07XG5cbiAgICBjdHJsS2V5SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihjdHJsS2V5SGFuZGxlcikge1xuICAgICAgY3RybEtleUhhbmRsZXIoY3RybEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaGlmdEtleURvd24oKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdHJ1ZSxcbiAgICAgICAgICBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgICBzaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEN0cmxLZXlIYW5kbGVyKGN0cmxLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgY3RybEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tDVFJMX0tFWV9DT0RFXTtcblxuICAgIGN0cmxLZXlIYW5kbGVycy5wdXNoKGN0cmxLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBzaGlmdEtleUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tTSElGVF9LRVlfQ09ERV07XG5cbiAgICBzaGlmdEtleUhhbmRsZXJzLnB1c2goc2hpZnRLZXlIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHt9LFxuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMpO1xuICAgIFxuICAgIGhhbmRsZXJzW0NUUkxfS0VZX0NPREVdID0gW107XG4gICAgaGFuZGxlcnNbU0hJRlRfS0VZX0NPREVdID0gW107XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG5cbmNvbnN0IGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleUV2ZW50cztcblxuY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5kb2N1bWVudERPTUVsZW1lbnQub25rZXl1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gQ1RSTF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vbkN0cmxLZXlVcCgpO1xuICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uU2hpZnRLZXlVcCgpO1xuICB9XG59O1xuXG5kb2N1bWVudERPTUVsZW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBDVFJMX0tFWV9DT0RFKSB7XG4gICAga2V5RXZlbnRzLm9uQ3RybEtleURvd24oKTtcbiAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgIGtleUV2ZW50cy5vblNoaWZ0S2V5RG93bigpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBNT1VTRV9VUCwgTU9VU0VfRE9XTiwgTU9VU0VfTU9WRSwgTU9VU0VfV0hFRUwgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCkge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRIYW5kbGVyKE1PVVNFX1VQLCBtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIHRoaXMuYWRkSGFuZGxlcihNT1VTRV9XSEVFTCwgbW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQoZXZlbnRUeXBlLCBldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmNhbnZhcyk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtNT1VTRV9XSEVFTF0sXG4gICAgICAgICAgZGVsdGEgPSBkZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge1xuICAgICAgICAgICAgTU9VU0VfVVA6IFtdLFxuICAgICAgICAgICAgTU9VU0VfRE9XTjogW10sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFOiBbXSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXApLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNldXAnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfVVAsIGV2ZW50KTsgfSk7XG4gICAgYWRkTW91c2VFdmVudEhhbmRsZXIoZG9tRWxlbWVudCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VFdmVudChNT1VTRV9ET1dOLCBldmVudCk7IH0pO1xuICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyKGRvbUVsZW1lbnQsICdtb3VzZW1vdmUnLCBmdW5jdGlvbihldmVudCkgeyBtb3VzZUV2ZW50cy5vbk1vdXNlRXZlbnQoTU9VU0VfTU9WRSwgZXZlbnQpOyB9KTtcbiAgICBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCAnbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IG1vdXNlRXZlbnRzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KTsgfSk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcblxuZnVuY3Rpb24gZGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZXZlbnQud2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gZGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGV2ZW50LnRhcmdldCwgIC8vL1xuICAgICAgICBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQpLFxuICAgICAgICAgIC0oZXZlbnQuY2xpZW50WSAtIGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QudG9wKVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuXG5mdW5jdGlvbiBhZGRNb3VzZUV2ZW50SGFuZGxlcihkb21FbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XG4gIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgIGhhbmRsZXIoZXZlbnQpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYWRkMywgc3VidHJhY3QyLCBzY2FsZTIgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgT0ZGU0VUX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3Rvcihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgb2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5wcmV2aW91c09mZnNldCA9IHByZXZpb3VzT2Zmc2V0O1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNPZmZzZXQgPSB0aGlzLm9mZnNldDtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmIHRoaXMuc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9mZnNldChhbmdsZXMpO1xuICAgIH1cbiAgfVxuXG4gIHNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcblxuICAgIGlmICh0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgICB0aGlzLnByZXZpb3VzT2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT2Zmc2V0KGFuZ2xlcykge1xuICAgIGNvbnN0IHhBbmdsZSA9IGFuZ2xlcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSBhbmdsZXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgc2NhbGFyID0gT0ZGU0VUX1NDQUxBUixcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyksXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXQgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBzY2FsYXIpLFxuICAgICAgICAgIGZpcnN0UmVsYXRpdmVPZmZzZXQgPSBmaXJzdChyZWxhdGl2ZU9mZnNldCksXG4gICAgICAgICAgc2Vjb25kUmVsYXRpdmVPZmZzZXQgPSBzZWNvbmQocmVsYXRpdmVPZmZzZXQpO1xuXG4gICAgbGV0IG9mZnNldCA9IHRoaXMucHJldmlvdXNPZmZzZXQuc2xpY2UoKTsgLy8vXG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB4ID0gLU1hdGguY29zKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgICB6ID0gLU1hdGguc2luKHlBbmdsZSkgKiBmaXJzdFJlbGF0aXZlT2Zmc2V0O1xuXG4gICAgICBvZmZzZXQgPSBhZGQzKG9mZnNldCwgW3gsIHksIHpdKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeCA9IC1NYXRoLnNpbih4QW5nbGUpICogTWF0aC5zaW4oeUFuZ2xlKSAqIHNlY29uZFJlbGF0aXZlT2Zmc2V0LFxuICAgICAgICAgICAgeSA9IC1NYXRoLmNvcyh4QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQsXG4gICAgICAgICAgICB6ID0gK01hdGguc2luKHhBbmdsZSkgKiBNYXRoLmNvcyh5QW5nbGUpICogc2Vjb25kUmVsYXRpdmVPZmZzZXQ7XG5cbiAgICAgIG9mZnNldCA9IGFkZDMob2Zmc2V0LCBbeCwgeSwgel0pO1xuICAgIH0pKCk7XG5cbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5pdGlhbE9mZnNldCxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSxcbiAgICAgICAgICBwcmV2aW91c09mZnNldCA9IG9mZnNldCwgIC8vL1xuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihtb3VzZURvd24sIHNoaWZ0S2V5RG93biwgb2Zmc2V0LCBwcmV2aW91c09mZnNldCwgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IEFOR0xFX0NPT1JESU5BVEVTX1NDQUxBUiwgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUywgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBzaGlmdEtleURvd24sIG1vdXNlQ29vcmRpbmF0ZXMsIGFuZ2xlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEFuZ2xlKCkge1xuICAgIGNvbnN0IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZSA9IHNlY29uZCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IHNlY29uZEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZUNvb3JkaW5hdGUgPSBmaXJzdCh0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IC1maXJzdEFuZ2xlQ29vcmRpbmF0ZTsgLy8vXG5cbiAgICByZXR1cm4geUFuZ2xlO1xuICB9XG5cbiAgZ2V0WkFuZ2xlKCkge1xuICAgIGNvbnN0IHpBbmdsZSA9IDA7XG5cbiAgICByZXR1cm4gekFuZ2xlO1xuICB9XG4gIFxuICBnZXRBbmdsZXMoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gdGhpcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSB0aGlzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IHRoaXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgYW5nbGVzID0gW1xuICAgICAgICAgICAgeEFuZ2xlLFxuICAgICAgICAgICAgeUFuZ2xlLFxuICAgICAgICAgICAgekFuZ2xlXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gYW5nbGVzO1xuICB9XG4gIFxuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duICYmICF0aGlzLnNoaWZ0S2V5RG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuXG4gICAgaWYgKCFzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzO1xuICAgICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBBTkdMRV9DT09SRElOQVRFU19TQ0FMQVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QzKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHNjYWxlMyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHNjYWxhcik7XG5cbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhZGQzKHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLCByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG1vdXNlRG93biA9IGZhbHNlLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX01PVVNFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIGFuZ2xlQ29vcmRpbmF0ZXMgPSBJTklUSUFMX0FOR0xFX0NPT1JESU5BVEVTLFxuICAgICAgICAgIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KG1vdXNlRG93biwgc2hpZnRLZXlEb3duLCBtb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzQW5nbGVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuXG5jb25zdCB0aWx0ID0gVGlsdC5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IERJU1RBTkNFX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzOyBcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgY29uc3Qgc2NhbGFyID0gRElTVEFOQ0VfU0NBTEFSO1xuICAgIFxuICAgIHRoaXMuZGlzdGFuY2UgLT0gZGVsdGEgKiBzY2FsYXI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBab29tO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIFxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY29uc3QgbWFza2VkID0gZmFsc2U7IC8vL1xuICAgICAgXG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIGlmICghbWFza2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpO1xuICAgICAgXG4gICAgICBwdXNoKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgZ2V0VmVydGV4SW5kZXhlcygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0LCBpbmRleCkge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldC9jb2xvdXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgZmFjZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0cyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4ZXMpIHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbVZlcnRpY2VzSW5kZXhlc0FuZENvbG91cih2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmYWNldHMgPSBjb2xvdXJlZEZhY2V0cywgIC8vL1xuICAgICAgICAgIGNvbG91cmVkQ2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldC90ZXh0dXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmdldFZlcnRleEluZGV4ZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gdGhpcy5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcyk7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFRleHR1cmVDb29yZGluYXRlcywgZmFjZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKCk7XG4gIFxuICAgICAgICAgICAgcHVzaCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4ZXMsIGluZGV4KSB7ICAvLy9cbiAgICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVmVydGljZXNJbmRleGVzSW1hZ2VOYW1lQW5kVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgaW5kZXgpO1xuICBcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZhY2V0cyA9IHRleHR1cmVkRmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRDYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0RmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSAgY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudEZhY2V0cyA9IGNoaWxkRWxlbWVudC5nZXRGYWNldHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHVzaChmYWNldHMsIGNoaWxkRWxlbWVudEZhY2V0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuICBcbiAgZ2V0TWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNrZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcbiAgICBcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5nZXRNYXNraW5nRmFjZXRzKCk7XG5cbiAgICBtYXNraW5nRmFjZXRzLmZvckVhY2goZnVuY3Rpb24obWFza2luZ0ZhY2V0KSB7XG4gICAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cyk7XG4gICAgICB9KTtcblxuICAgICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgICB9KTtcbiAgICBcbiAgICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGltYWdlTWFwLCBjYW52YXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgY2FudmFzKSxcbiAgICAgICAgICB0cmFuc2Zvcm1zID0gW107XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hhcGVzOiByZXF1aXJlKCcuL2V4YW1wbGVzL3NoYXBlcycpLFxuICBtYXNraW5nOiByZXF1aXJlKCcuL2V4YW1wbGVzL21hc2tpbmcnKSxcbiAgY29udGFpbmVySG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvY29udGFpbmVySG91c2UnKSxcbiAgdGltYmVyRnJhbWVkSG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvdGltYmVyRnJhbWVkSG91c2UnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyZWRDdWJvaWQgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGljZXMgPSBkZWZhdWx0VmVydGljZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91cmVkQ3Vib2lkID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEN1Ym9pZDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ3Vib2lkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMgfSA9IGN5bGluZGVyO1xuXG5jbGFzcyBDb2xvdXJlZEN5bGluZGVyIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZEN5bGluZGVyID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkQ3lsaW5kZXIsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEN5bGluZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0cmlhbmdsZSA9IHJlcXVpcmUoJy4uL3RyaWFuZ2xlJyksXG4gICAgICBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMgfSA9IHRyaWFuZ2xlO1xuXG5jbGFzcyBDb2xvdXJlZFRyaWFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMsIGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJlZFRyaWFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkVHJpYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFRyaWFuZ2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0VmVydGljZXMgPSBbXG4gIFxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcblxuICAgICAgICBbIDAsIDAsIDEgXSxcbiAgICAgICAgWyAxLCAwLCAxIF0sXG4gICAgICAgIFsgMSwgMSwgMSBdLFxuICAgICAgICBbIDAsIDEsIDEgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbmRleGVzID0gW1xuICBcbiAgICAgICAgWyAxLCAwLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMSBdLFxuICBcbiAgICAgICAgWyA0LCA1LCA2IF0sXG4gICAgICAgIFsgNiwgNywgNCBdLFxuICBcbiAgICAgICAgWyAwLCA0LCA3IF0sXG4gICAgICAgIFsgNywgMywgMCBdLFxuICBcbiAgICAgICAgWyA1LCAxLCAyIF0sXG4gICAgICAgIFsgMiwgNiwgNSBdLFxuICBcbiAgICAgICAgWyA3LCA2LCAyIF0sXG4gICAgICAgIFsgMiwgMywgNyBdLFxuICBcbiAgICAgICAgWyA0LCAwLCAxIF0sXG4gICAgICAgIFsgMSwgNSwgNCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMSwgMSBdLFxuICAgICAgICBbIDEsIDEgXSwgWyAwLCAxIF0sIFsgMCwgMCBdLFxuXG4gICAgICAgIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAxLCAxIF0sXG4gICAgICAgIFsgMSwgMSBdLCBbIDAsIDEgXSwgWyAwLCAwIF0sXG5cbiAgICAgICAgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDEsIDEgXSxcbiAgICAgICAgWyAxLCAxIF0sIFsgMCwgMSBdLCBbIDAsIDAgXSxcblxuICAgICAgICBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMSwgMSBdLFxuICAgICAgICBbIDEsIDEgXSwgWyAwLCAxIF0sIFsgMCwgMCBdLFxuXG4gICAgICAgIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAxLCAxIF0sXG4gICAgICAgIFsgMSwgMSBdLCBbIDAsIDEgXSwgWyAwLCAwIF0sXG5cbiAgICAgICAgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDEsIDEgXSxcbiAgICAgICAgWyAxLCAxIF0sIFsgMCwgMSBdLCBbIDAsIDAgXSxcblxuICAgICAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRWZXJ0aWNlczogZGVmYXVsdFZlcnRpY2VzLFxuICBkZWZhdWx0SW5kZXhlczogZGVmYXVsdEluZGV4ZXMsXG4gIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXM6IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBDWUxJTkRFUl9TSURFUyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluZGV4ZXMgPSBjYWxjdWxhdGVEZWZhdWx0SW5kZXhlcygpLFxuICAgICAgZGVmYXVsdFZlcnRpY2VzID0gY2FsY3VsYXRlRGVmYXVsdFZlcnRpY2VzKCksXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gY2FsY3VsYXRlRGVmYXVsdFRleHR1cmVDb29yZGluYXRlcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVmYXVsdEluZGV4ZXM6IGRlZmF1bHRJbmRleGVzLFxuICBkZWZhdWx0VmVydGljZXM6IGRlZmF1bHRWZXJ0aWNlcyxcbiAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlczogZGVmYXVsdFRleHR1cmVDb29yZGluYXRlc1xufTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRGVmYXVsdEluZGV4ZXMoKSB7XG4gIGNvbnN0IGRlZmF1bHRJbmRleGVzID0gW10sXG4gICAgICAgIHNpZGVzID0gQ1lMSU5ERVJfU0lERVMsXG4gICAgICAgIGRlZmF1bHRJbmRleENvdW50ID0gc2lkZXMgKiAyO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaWRlczsgY291bnQrKykge1xuICAgIGNvbnN0IGRlZmF1bHRJbmRleCA9IGNvdW50ICogMixcbiAgICAgICAgICBmaXJzdERlZmF1bHRJbmRleGVzID0gWyAoZGVmYXVsdEluZGV4ICsgMSkgJSBkZWZhdWx0SW5kZXhDb3VudCwgKGRlZmF1bHRJbmRleCArIDApICUgZGVmYXVsdEluZGV4Q291bnQsIChkZWZhdWx0SW5kZXggKyAyKSAlIGRlZmF1bHRJbmRleENvdW50IF0sXG4gICAgICAgICAgc2Vjb25kRGVmYXVsdEluZGV4ZXMgPSBbIChkZWZhdWx0SW5kZXggKyAyKSAlIGRlZmF1bHRJbmRleENvdW50LCAoZGVmYXVsdEluZGV4ICsgMykgJSBkZWZhdWx0SW5kZXhDb3VudCwgKGRlZmF1bHRJbmRleCArIDEpICUgZGVmYXVsdEluZGV4Q291bnQgXTtcblxuICAgIGRlZmF1bHRJbmRleGVzLnB1c2goZmlyc3REZWZhdWx0SW5kZXhlcyk7XG4gICAgZGVmYXVsdEluZGV4ZXMucHVzaChzZWNvbmREZWZhdWx0SW5kZXhlcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdEluZGV4ZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURlZmF1bHRWZXJ0aWNlcygpIHtcbiAgY29uc3QgZGVmYXVsdFZlcnRpY2VzID0gW10sXG4gICAgICAgIHNpZGVzID0gQ1lMSU5ERVJfU0lERVMsXG4gICAgICAgIHN0ZXAgPSAyICogTWF0aC5QSSAvIHNpZGVzO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaWRlczsgY291bnQrKykge1xuICAgIGNvbnN0IGFuZ2xlID0gc3RlcCAqIGNvdW50LFxuICAgICAgICAgIGFuZ2xlQ29zaW5lID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIGFuZ2xlU2luZSA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICB0b3BEZWZhdWx0VmVydGV4ID0gW1xuICAgICAgICAgICAgKCBhbmdsZUNvc2luZSArIDEgKSAvIDIsXG4gICAgICAgICAgICAoIGFuZ2xlU2luZSArIDEgKSAvIDIsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBib3R0b21EZWZhdWx0VmVydGV4ID0gW1xuICAgICAgICAgICAgKCBhbmdsZUNvc2luZSArIDEgKSAvIDIsXG4gICAgICAgICAgICAoIGFuZ2xlU2luZSArIDEgKSAvIDIsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXTtcblxuICAgIGRlZmF1bHRWZXJ0aWNlcy5wdXNoKHRvcERlZmF1bHRWZXJ0ZXgpO1xuICAgIGRlZmF1bHRWZXJ0aWNlcy5wdXNoKGJvdHRvbURlZmF1bHRWZXJ0ZXgpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRGVmYXVsdFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgY29uc3QgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtdLFxuICAgICAgICBzaWRlcyA9IENZTElOREVSX1NJREVTLFxuICAgICAgICBzdGVwID0gMSAvIHNpZGVzO1xuXG4gIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaWRlczsgY291bnQrKykge1xuICAgIGNvbnN0IG9mZnNldCA9IHN0ZXAgKiBjb3VudCxcbiAgICAgICAgICBmaXJzdERlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbIFsgb2Zmc2V0LCAwIF0sIFsgb2Zmc2V0LCAxIF0sIFsgb2Zmc2V0ICsgc3RlcCwgMSBdIF0sXG4gICAgICAgICAgc2Vjb25kRGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFsgWyBvZmZzZXQgKyBzdGVwLCAxIF0sIFsgb2Zmc2V0ICsgc3RlcCwgMCBdLCBbIG9mZnNldCwgMCBdIF07XG5cbiAgICBwdXNoKGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMsIGZpcnN0RGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyk7XG4gICAgcHVzaChkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzLCBzZWNvbmREZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vib2lkID0gcmVxdWlyZSgnLi4vY3Vib2lkJyksXG4gICAgICBUZXh0dXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZCcpO1xuXG5jb25zdCB7IGRlZmF1bHRWZXJ0aWNlcywgZGVmYXVsdEluZGV4ZXMsIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IGN1Ym9pZDtcblxuY2xhc3MgVGV4dHVyZWRDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGljZXMgPSBkZWZhdWx0VmVydGljZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkQ3Vib2lkID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDdWJvaWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vdHJpYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRpY2VzLCBkZWZhdWx0SW5kZXhlcywgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gdHJpYW5nbGU7XG5cbmNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGljZXMgPSBkZWZhdWx0VmVydGljZXMsIGluZGV4ZXMgPSBkZWZhdWx0SW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRUcmlhbmdsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdFZlcnRpY2VzID0gW1xuICAgICAgICBcbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcbiAgICAgICAgICBcbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW5kZXhlcyA9IFtcbiAgXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuICBcbiAgICAgIF0sXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgIFxuICAgICAgICBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMSwgMSBdLFxuICAgICAgICAgIFxuICAgICAgXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlZmF1bHRWZXJ0aWNlczogZGVmYXVsdFZlcnRpY2VzLFxuICBkZWZhdWx0SW5kZXhlczogZGVmYXVsdEluZGV4ZXMsXG4gIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXM6IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mcmFtZScpLFxuICAgICAgUm9vZkdhcmRlbiA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2Uvcm9vZkdhcmRlbicpLFxuICAgICAgRmlyc3RGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QnKSxcbiAgICAgIFRoaXJkRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkJyksXG4gICAgICBTZWNvbmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kJyksXG4gICAgICBGb3VuZGF0aW9ucyA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMnKSxcbiAgICAgIE1haW5CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L21haW4nKSxcbiAgICAgIExvd2VyQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9sb3dlcicpLFxuICAgICAgQmVkcm9vbUJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvYmVkcm9vbScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBjb250YWluZXJIb3VzZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPEZvdW5kYXRpb25zIC8+XG4gICAgICA8Rmlyc3RGbG9vciAvPlxuICAgICAgPFNlY29uZEZsb29yIC8+XG4gICAgICA8VGhpcmRGbG9vciAvPlxuICAgICAgPFJvb2ZHYXJkZW4gLz5cbiAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgPExvd2VyQmFsY29ueSAvPlxuICAgICAgPEJlZHJvb21CYWxjb255IC8+XG4gICAgICA8RnJhbWUgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEJhbGNvbnlTZWN0aW9uID0gcmVxdWlyZSgnLi4vYmFsY29ueS9zZWN0aW9uJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBCZWRyb29tQmFsY29ueSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMCwgMTksIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNCwgMTksIDAgXX0gLz4sXG5cbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbICAgICAgICAgMCwgMTksIDAgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMTksIDAgXX0gbGVuZ3RoPXsxNn0gcm90YXRpb25zPXtbIDAsIC05MCwgMCBdfS8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCZWRyb29tQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCZWRyb29tQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBSYWlsaW5nO1xuXG5jbGFzcyBMb3dlckJhbGNvbnkgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDAsIDkuNSwgMTYgICAgICAgICAgIF19IGxlbmd0aD17OH0gLz4sXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyA0MCwgOS41LCAzMi10aGlja25lc3MgXX0gbGVuZ3RoPXs4fSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDQ4LCA5LjUsIDE2ICAgICAgICAgICBdfSByb3RhdGlvbnM9e1sgMCwgLTkwLCAwXX0gbGVuZ3RoPXsxNn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExvd2VyQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb3dlckJhbGNvbnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKSxcbiAgICAgIFJhaWxpbmcgPSByZXF1aXJlKCcuLi9iYWxjb255L3JhaWxpbmcnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFJhaWxpbmc7XG5cbmNsYXNzIE1haW5CYWxjb255IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0MCwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDQ0LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgMzYsIDE5LCAgMCBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyAzMiwgMTksICAwIF19IC8+LFxuICAgICAgPEJhbGNvbnlTZWN0aW9uIHBvc2l0aW9uPXtbIDI4LCAxOSwgIDAgXX0gLz4sXG4gICAgICA8QmFsY29ueVNlY3Rpb24gcG9zaXRpb249e1sgNDAsIDE5LCAxNiBdfSAvPixcbiAgICAgIDxCYWxjb255U2VjdGlvbiBwb3NpdGlvbj17WyA0NCwgMTksIDE2IF19IC8+LFxuXG4gICAgICA8UmFpbGluZyBwb3NpdGlvbj17WyAyOCwgMTksICAgICAgICAgICAgMCBdfSBsZW5ndGg9ezIwfSAvPixcbiAgICAgIDxSYWlsaW5nIHBvc2l0aW9uPXtbIDIwLCAxOSwgMzItdGhpY2tuZXNzIF19IGxlbmd0aD17Mjh9IC8+LFxuICAgICAgPFJhaWxpbmcgcG9zaXRpb249e1sgNDgsIDE5LCAwICAgICAgICAgICAgXX0gcm90YXRpb25zPXtbIDAsIC05MCwgMF19IGxlbmd0aD17MzJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYWluQmFsY29ueSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYWluQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVG9wUmFpbCA9IHJlcXVpcmUoJy4vcmFpbGluZy90b3BSYWlsJyksXG4gICAgICBVcHJpZ2h0cyA9IHJlcXVpcmUoJy4vcmFpbGluZy91cHJpZ2h0cycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBUb3BSYWlsLFxuICAgICAgb3ZlcmFsbEhlaWdodCA9IDM7XG5cbmNsYXNzIFJhaWxpbmcgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IC8+LFxuXG4gICAgICA8VXByaWdodHMgb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IHRoaWNrbmVzcz17dGhpY2tuZXNzfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhSYWlsaW5nLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJhaWxpbmcsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhaWxpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjEsXG4gICAgICB0aGlja25lc3MgPSAwLjQsXG4gICAgICBjb2xvdXIgPSBbIDAuNSwgMC41LCAwLjUsIDFdO1xuXG5jb25zdCBUb3BSYWlsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgZGVwdGggPSB0aGlja25lc3MsIC8vL1xuICAgICAgICBwb3NpdGlvbiA9IFsgMCwgb3ZlcmFsbEhlaWdodCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSAvPlxuXG4gICk7XG59O1xuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKTtcblxuY29uc3QgZGlhbWV0ZXIgPSAwLjEyNSxcbiAgICAgIHJhZGl1cyA9IGRpYW1ldGVyIC8gMixcbiAgICAgIGNvbG91ciA9IFsgMC41LCAwLjUsIDAuNSwgMV07XG5cbmNvbnN0IFVwcmlnaHQgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IGRpYW1ldGVyLCAvLy9cbiAgICAgICAgaGVpZ2h0ID0gZGlhbWV0ZXIsIC8vL1xuICAgICAgICBkZXB0aCA9IG92ZXJhbGxIZWlnaHQ7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkQ3lsaW5kZXIgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e1sgLTkwLCAwLCAwIF19IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oVXByaWdodCwge1xuICByYWRpdXM6IHJhZGl1c1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVXByaWdodCA9IHJlcXVpcmUoJy4vdXByaWdodCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgcmFkaXVzIH0gPSBVcHJpZ2h0O1xuXG5jbGFzcyBVcHJpZ2h0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG92ZXJhbGxIZWlnaHQsIGxlbmd0aCwgdGhpY2tuZXNzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0ZXAgPSAwLjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW3N0ZXAgKiBpbmRleCAtIHJhZGl1cywgMCwgdGhpY2tuZXNzIC8gMiArIHJhZGl1c107XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgICAgPFVwcmlnaHQgcG9zaXRpb249e3Bvc2l0aW9ufSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPlxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVXByaWdodHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXByaWdodHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgT3Blbk1lc2ggPSByZXF1aXJlKCcuL3NlY3Rpb24vb3Blbk1lc2gnKSxcbiAgICAgIExvbmdFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UvbG9uZycpLFxuICAgICAgU2hvcnRFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2Uvc2hvcnQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IGhlaWdodCwgdGhpY2tuZXNzIH0gPSBFZGdlLFxuICAgICAgd2lkdGggPSA0LFxuICAgICAgZGVwdGggPSAxNjtcblxuY2xhc3MgQmFsY29ueVNlY3Rpb24gZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxMb25nRWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgIDAsIC1oZWlnaHQsICAgICAgICAgICAgMCBdfSBkZXB0aD17ZGVwdGh9Lz4sXG4gICAgICA8TG9uZ0VkZ2UgcG9zaXRpb249e1sgd2lkdGgtdGhpY2tuZXNzLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gZGVwdGg9e2RlcHRofS8+LFxuXG4gICAgICA8U2hvcnRFZGdlIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAwLCAtaGVpZ2h0LCAgICAgICAgICAgIDAgXX0gd2lkdGg9e3dpZHRofS8+LFxuICAgICAgPFNob3J0RWRnZSBwb3NpdGlvbj17WyAgICAgICAgICAgICAgMCwgLWhlaWdodCwgMTYtdGhpY2tuZXNzIF19IHdpZHRoPXt3aWR0aH0vPixcblxuICAgICAgPE9wZW5NZXNoIHBvc2l0aW9uPXtbIHRoaWNrbmVzcywgMCwgdGhpY2tuZXNzIF19IG92ZXJhbGxXaWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBvdmVyYWxsRGVwdGg9e2RlcHRoIC0gMiAqIHRoaWNrbmVzc30gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQmFsY29ueVNlY3Rpb24sIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFsY29ueVNlY3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjI1LFxuICAgICAgdGhpY2tuZXNzID0gMC4xO1xuXG5jb25zdCBFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgd2lkdGgsIGRlcHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZWRDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBwb3NpdGlvbj17cG9zaXRpb259IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cblxuICApO1xufTtcblxuT2JqZWN0LmFzc2lnbihFZGdlLCB7XG4gIGhlaWdodDogaGVpZ2h0LFxuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IExvbmdFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgZGVwdGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxFZGdlIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9uZ0VkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBFZGdlO1xuXG5jb25zdCBTaG9ydEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgZGVwdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2UgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG9ydEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyk7XG5cbmNvbnN0IG92ZXJhbGxIZWlnaHQgPSAwLjI1LFxuICAgICAgb3ZlcmFsbFRoaWNrbmVzcyA9IDAuMDI1LFxuICAgICAgd2lkdGh3aXNlQ291bnQgPSAxMCxcbiAgICAgIGRlcHRod2lzZUNvdW50ID0gNSxcbiAgICAgIGNvbG91ciA9IFsgMC42LCAwLjYsIDAuNiwgMTAgXTtcblxuY2xhc3MgT3Blbk1lc2ggZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsV2lkdGgsIG92ZXJhbGxEZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHdpZHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBzdGVwID0gb3ZlcmFsbFdpZHRoIC8gd2lkdGh3aXNlQ291bnQsXG4gICAgICAgICAgICB3aWR0aCA9IG92ZXJhbGxUaGlja25lc3MsICAvLy9cbiAgICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQsXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxEZXB0aDtcblxuICAgICAgZWxlbWVudHMucHVzaChcblxuICAgICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbc3RlcCAqIGluZGV4LCAtaGVpZ2h0LCAwXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofS8+XG5cbiAgICAgIClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgZGVwdGh3aXNlQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBvdmVyYWxsRGVwdGggLyBkZXB0aHdpc2VDb3VudCxcbiAgICAgICAgICAgIGRpYW1ldGVyID0gb3ZlcmFsbEhlaWdodCAvIDIsIC8vL1xuICAgICAgICAgICAgd2lkdGggPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBoZWlnaHQgPSBkaWFtZXRlciwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IG92ZXJhbGxXaWR0aDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZEN5bGluZGVyIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAwLCAtMyAqIGRpYW1ldGVyIC8gMiwgc3RlcCAqIGluZGV4IF19IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19Lz5cblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE9wZW5NZXNoLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5NZXNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIFJvb2YgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9yb29mJyksXG4gICAgICBCYWNrUGFuZWwgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9iYWNrJyksXG4gICAgICBGcm9udFBhbmVsID0gcmVxdWlyZSgnLi9jb250YWluZXIvcGFuZWwvZnJvbnQnKSxcbiAgICAgIFNpZGVQYW5lbEEgPSByZXF1aXJlKCcuL2NvbnRhaW5lci9wYW5lbC9zaWRlQScpLFxuICAgICAgU2lkZVBhbmVsQiA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3BhbmVsL3NpZGVCJyksXG4gICAgICBUb3BSYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL3RvcFJhaWxzJyksXG4gICAgICBCb3R0b21SYWlscyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2JvdHRvbVJhaWxzJyksXG4gICAgICBDb3JuZXJQb3N0cyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lclBvc3RzJyksXG4gICAgICBDb3JuZXJGaXR0aW5ncyA9IHJlcXVpcmUoJy4vY29udGFpbmVyL2Nvcm5lckZpdHRpbmdzJyk7XG5cbmNvbnN0IG92ZXJhbGxXaWR0aCA9IDgsXG4gICAgICBvdmVyYWxsSGVpZ2h0ID0gOS41O1xuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFJvb2YgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxGcm9udFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8QmFja1BhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8U2lkZVBhbmVsQSBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPFNpZGVQYW5lbEIgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxUb3BSYWlscyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuICAgICAgPEJvdHRvbVJhaWxzIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsV2lkdGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz4sXG4gICAgICA8Q29ybmVyUG9zdHMgbGVuZ3RoPXtsZW5ndGh9IG92ZXJhbGxXaWR0aD17b3ZlcmFsbFdpZHRofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5ncyBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbFdpZHRoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250YWluZXIsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHRoaWNrbmVzcyA9IDgvMTIsXG4gICAgICBpbmRlbnQgPSAxLzEyO1xuXG5jbGFzcyBCb3R0b21SYWlsIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgICBkZXB0aCA9IHRoaWNrbmVzcyAtIDIqaW5kZW50LFxuICAgICAgICAgIGhlaWdodCA9IHRoaWNrbmVzcyxcbiAgICAgICAgICBwb3NpdGlvbiA9IFsgMCwgMCwgaW5kZW50IF07XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aH0gcG9zaXRpb249e3Bvc2l0aW9ufSBjb2xvdXI9e2NvbG91cn0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJvdHRvbVJhaWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQm90dG9tUmFpbCwge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm90dG9tUmFpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQm90dG9tUmFpbCA9IHJlcXVpcmUoJy4vYm90dG9tUmFpbCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBCb3R0b21SYWlsO1xuXG5jbGFzcyBCb3R0b21SYWlscyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Qm90dG9tUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgICAwIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxCb3R0b21SYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIGxlbmd0aC10aGlja25lc3MgXX0gbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPEJvdHRvbVJhaWwgcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLXRoaWNrbmVzcywgMCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb3R0b21SYWlscywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3R0b21SYWlscztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgd2lkdGggPSA5LzEyLFxuICAgICAgaGVpZ2h0ID0gOS8xMixcbiAgICAgIGRlcHRoID0gOS8xMjtcblxuY29uc3QgQ29ybmVyRml0dGluZyA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgcG9zaXRpb24gfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyRml0dGluZywge1xuICB3aWR0aDogd2lkdGgsXG4gIGhlaWdodDogaGVpZ2h0LFxuICBkZXB0aDogZGVwdGhcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvcm5lckZpdHRpbmcgPSByZXF1aXJlKCcuL2Nvcm5lckZpdHRpbmcnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHdpZHRoLCBkZXB0aCwgaGVpZ2h0IH0gPSBDb3JuZXJGaXR0aW5nO1xuXG5jbGFzcyBDb3JuZXJGaXR0aW5ncyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAgICAgICAgICAgICAgICAgICAgICAwLCAwIF19IC8+LFxuICAgICAgPENvcm5lckZpdHRpbmcgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQgLSBoZWlnaHQsIDAgXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgMCBdfSAvPixcbiAgICAgIDxDb3JuZXJGaXR0aW5nIHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCBvdmVyYWxsSGVpZ2h0IC0gaGVpZ2h0LCAwIF19IC8+LFxuXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgICAgICAgICAgICAgICAgICAgICAgMCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG4gICAgICA8Q29ybmVyRml0dGluZyBwb3NpdGlvbj17WyBvdmVyYWxsV2lkdGggLSB3aWR0aCwgb3ZlcmFsbEhlaWdodCAtIGhlaWdodCwgbGVuZ3RoIC0gZGVwdGggXX0gLz4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lckZpdHRpbmdzLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvcm5lckZpdHRpbmdzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBjb2xvdXIgPSBbIDEsIDEsIDEsIDEgXSxcbiAgICAgIHdpZHRoID0gOC8xMixcbiAgICAgIGRlcHRoID0gOC8xMixcbiAgICAgIGluZGVudCA9IDEvMTI7XG5cbmNsYXNzIENvcm5lclBvc3QgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBvc2l0aW9uID0gWyBpbmRlbnQsIDAsIGluZGVudCBdLFxuICAgICAgICAgIGhlaWdodCA9IG92ZXJhbGxIZWlnaHQ7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGggLSAyKmluZGVudH0gaGVpZ2h0PXtoZWlnaHR9IGRlcHRoPXtkZXB0aCAtIDIqaW5kZW50fSBwb3NpdGlvbj17cG9zaXRpb259IGNvbG91cj17Y29sb3VyfSAvPiwgLy8vXG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvcm5lclBvc3QsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ29ybmVyUG9zdCwge1xuICB3aWR0aDogd2lkdGgsXG4gIGRlcHRoOiBkZXB0aFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29ybmVyUG9zdCA9IHJlcXVpcmUoJy4vY29ybmVyUG9zdCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNvbnN0IHsgd2lkdGgsIGRlcHRoIH0gPSBDb3JuZXJQb3N0O1xuXG5jbGFzcyBDb3JuZXJQb3N0cyBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCAgICAgICAgICAgICAgMCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAwLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcbiAgICAgIDxDb3JuZXJQb3N0IHBvc2l0aW9uPXtbIG92ZXJhbGxXaWR0aCAtIHdpZHRoLCAwLCBsZW5ndGggLSBkZXB0aCBdfSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29ybmVyUG9zdHMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29ybmVyUG9zdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXs0MH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3J0eUZvb3RDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRSaWRnZSA9IHJlcXVpcmUoJy4vcGFuZWwvY29sb3VyZWRSaWRnZScpO1xuXG5jbGFzcyBQYW5lbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IDAuMjUsXG4gICAgICAgICAgaGVpZ2h0ID0gb3ZlcmFsbEhlaWdodCwgLy8vXG4gICAgICAgICAgZGVwdGggPSAwLjEyNSxcbiAgICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdLFxuICAgICAgICAgIHN0ZXAgPSAxLFxuICAgICAgICAgIGluZGVudCA9IDAuMjUsXG4gICAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwLFxuICAgICAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQgLSAxOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtkZXB0aCtpbmRlbnQsIDAsIHN0ZXAqaW5kZXggKyBzdGVwLzIsIDBdO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICAgIDxDb2xvdXJlZFJpZGdlIGNvbG91cj17Y29sb3VyfSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+LFxuXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFuZWwsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgQmFja1BhbmVsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgcG9zaXRpb24gPSBbIG92ZXJhbGxXaWR0aCwgMCwgMCBdLFxuICAgICAgICByb3RhdGlvbnMgPSBbIDAsIC05MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8UGFuZWwgbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IG92ZXJhbGxIZWlnaHQ9e292ZXJhbGxIZWlnaHR9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+ICAvLy9cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrUGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSBbXG5cbiAgICAgICAgWyAwLjAsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMC41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDAuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAwLjAsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAwLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgMS41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDEuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAwLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgICAgWyAxLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMi41LCAwLjAsIDEuMCBdLFxuICAgICAgICBbIDIuNSwgMS4wLCAxLjAgXSxcbiAgICAgICAgWyAxLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAyLjUsIDAuMCwgMS4wIF0sXG4gICAgICAgIFsgMy41LCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDMuNSwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAyLjUsIDEuMCwgMS4wIF0sXG5cbiAgICAgICAgWyAzLjUsIDAuMCwgMC4wIF0sXG4gICAgICAgIFsgNC4wLCAwLjAsIDAuMCBdLFxuICAgICAgICBbIDQuMCwgMS4wLCAwLjAgXSxcbiAgICAgICAgWyAzLjUsIDEuMCwgMC4wIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIENvbG91cmVkUmlkZ2UgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFJpZGdlLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUmlkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgRnJvbnRQYW5lbCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCA5MCwgMCBdO1xuXG4gIHJldHVybiAoXG5cbiAgICAgIDxQYW5lbCBsZW5ndGg9e292ZXJhbGxXaWR0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz4gIC8vL1xuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb250UGFuZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbmVsID0gcmVxdWlyZSgnLi4vcGFuZWwnKTtcblxuY29uc3QgU2lkZVBhbmVsQSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxQYW5lbCBsZW5ndGg9e2xlbmd0aH0gb3ZlcmFsbEhlaWdodD17b3ZlcmFsbEhlaWdodH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlUGFuZWxBO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW5lbCA9IHJlcXVpcmUoJy4uL3BhbmVsJyk7XG5cbmNvbnN0IFNpZGVQYW5lbEIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBwb3NpdGlvbiA9IFsgb3ZlcmFsbFdpZHRoLCAwLCBsZW5ndGggXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAwLCAxODAsIDAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPFBhbmVsIGxlbmd0aD17bGVuZ3RofSBvdmVyYWxsSGVpZ2h0PXtvdmVyYWxsSGVpZ2h0fSBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZGVQYW5lbEI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGNvbnN0IENvbG91cmVkUGxhbmUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvcGxhbmUnKTtcblxuY29uc3QgaW5kZW50ID0gMS8xMjtcblxuY29uc3QgUm9vZiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgbGVuZ3RoLCBvdmVyYWxsV2lkdGgsIG92ZXJhbGxIZWlnaHQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHdpZHRoID0gb3ZlcmFsbFdpZHRoIC0gMippbmRlbnQsXG4gICAgICAgIGhlaWdodCA9IGxlbmd0aCAtIDIqaW5kZW50LFxuICAgICAgICBwb3NpdGlvbiA9IFsgaW5kZW50LCBvdmVyYWxsSGVpZ2h0IC0gaW5kZW50LCBsZW5ndGggLSBpbmRlbnQgXSxcbiAgICAgICAgcm90YXRpb25zID0gWyAtOTAsIDAsIDAgXSxcbiAgICAgICAgY29sb3VyID0gWyAxLCAxLCAxLCAxIF07XG5cbiAgLy8gcmV0dXJuIChcbiAgLy9cbiAgLy8gICA8Q29sb3VyZWRQbGFuZSBjb2xvdXI9e2NvbG91cn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gLz5cbiAgLy9cbiAgLy8gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vZjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKTtcblxuY29uc3QgY29sb3VyID0gWyAxLCAxLCAxLCAxIF0sXG4gICAgICB0aGlja25lc3MgPSA4LzEyLFxuICAgICAgaW5kZW50ID0gMS8xMjtcblxuY2xhc3MgVG9wUmFpbCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB3aWR0aCA9IGxlbmd0aCwgLy8vXG4gICAgICAgICAgZGVwdGggPSB0aGlja25lc3MgLSAyKmluZGVudCxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlja25lc3MsXG4gICAgICAgICAgcG9zaXRpb24gPSBbIDAsIC1oZWlnaHQsIGluZGVudCBdO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IHBvc2l0aW9uPXtwb3NpdGlvbn0gY29sb3VyPXtjb2xvdXJ9IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUb3BSYWlsLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFRvcFJhaWwsIHtcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcFJhaWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRvcFJhaWwgPSByZXF1aXJlKCcuL3RvcFJhaWwnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gVG9wUmFpbDtcblxuY2xhc3MgVG9wUmFpbHMgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGgsIG92ZXJhbGxXaWR0aCwgb3ZlcmFsbEhlaWdodCB9ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8VG9wUmFpbCBwb3NpdGlvbj17WyAgICAgICAgICAgICAgICAgICAgICAwLCBvdmVyYWxsSGVpZ2h0LCAgICAgICAgICAgICAgICAwIF19IGxlbmd0aD17b3ZlcmFsbFdpZHRofSAvPixcbiAgICAgIDxUb3BSYWlsIHBvc2l0aW9uPXtbICAgICAgICAgICAgICAgICAgICAgIDAsIG92ZXJhbGxIZWlnaHQsIGxlbmd0aC10aGlja25lc3MgXX0gbGVuZ3RoPXtvdmVyYWxsV2lkdGh9IC8+LFxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e1sgICAgICAgICAgICAgICAgICAgICAgMCwgb3ZlcmFsbEhlaWdodCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e1sgb3ZlcmFsbFdpZHRoLXRoaWNrbmVzcywgb3ZlcmFsbEhlaWdodCwgICAgICAgICAgIGxlbmd0aCBdfSBsZW5ndGg9e2xlbmd0aH0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUb3BSYWlscywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb3BSYWlscztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyJyk7XG5cbmNvbnN0IFR3ZW50eUZvb3RDb250YWluZXIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXsyMH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VudHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBGaXJzdEZsb29yIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDgsIDAsIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDgsIDAsIDI0IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDAsIDE2IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDgsIDAsICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRmlyc3RGbG9vciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaXJzdEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jbGFzcyBTZWNvbmRGbG9vciBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Rm9ydHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbICAwLCA5LjUsIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxGb3J0eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgIDAsIDkuNSwgMjQgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgOS41LCAxNiBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCA5LjUsICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2Vjb25kRmxvb3IsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vjb25kRmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgVHdlbnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci90d2VudHlGb290Jyk7XG5cbmNsYXNzIFRoaXJkRmxvb3IgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgMCwgMTksIDMyIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcbiAgICAgIDxUd2VudHlGb290Q29udGFpbmVyIHBvc2l0aW9uPXtbIDAsIDE5LCAyNCBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDAgXX0gLz4sXG4gICAgICA8VHdlbnR5Rm9vdENvbnRhaW5lciBwb3NpdGlvbj17WyA4LCAxOSwgMTYgXX0gcm90YXRpb25zPXtbIDAsIDkwLCAwIF19IC8+LFxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcG9zaXRpb249e1sgOCwgMTksICA4IF19IHJvdGF0aW9ucz17WyAwLCA5MCwgMCBdfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGhpcmRGbG9vciwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaGlyZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIENvbmNyZXRlU2xhYiA9IHJlcXVpcmUoJy4vZm91bmRhdGlvbnMvY29uY3JldGVTbGFiJyk7XG5cbmNsYXNzIEZvdW5kYXRpb25zIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgLTAuNSwgLTEsIC0wLjUgXX0gd2lkdGg9ezEyLjV9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcbiAgICAgIDxDb25jcmV0ZVNsYWIgcG9zaXRpb249e1sgICAyNCwgLTEsIC0wLjUgXX0gd2lkdGg9ezI0LjR9IGhlaWdodD17MX0gZGVwdGg9ezMzfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRm91bmRhdGlvbnMsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm91bmRhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBDb25jcmV0ZVNsYWIgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cImNvbmNyZXRlLmpwZ1wiIHBvc2l0aW9uPXtwb3NpdGlvbn0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmNyZXRlU2xhYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9mcmFtZS9zdGVlbFNlY3Rpb24nKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGcmFtZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgICAgaGVpZ2h0ID0gMjksXG4gICAgICAgICAgZGVwdGggPSAzMjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG5cbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbICAgICAgLTAuNSwgaGVpZ2h0LTEsIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXtkZXB0aH0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAtMC41LCBoZWlnaHQtMSwgICAgICAtMC41IF0gfSB3aWR0aD17d2lkdGh9IGhlaWdodD17MX0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsIGRlcHRoLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnJhbWUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlZWxTZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBjb25zdCBUZXh0dXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyk7XG5cbmNvbnN0IFJvb2ZHYXJkZW4gPSAocHJvcGVydGllcykgPT4ge1xuICAvLyByZXR1cm4gKFxuICAvL1xuICAvLyAgIDxUZXh0dXJlZFBsYW5lIHdpZHRoPXsyMH0gaGVpZ2h0PXsxNn0gZGVwdGg9ezB9IHBvc2l0aW9uPXtbIDIwLCAxOS4wMSwgMzIgXX0gcm90YXRpb25zPXtbIC05MCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgLz5cbiAgLy9cbiAgLy8gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vZkdhcmRlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3RyaWFuZ2xlJyksXG4gICAgICBUZXh0dXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL3RyaWFuZ2xlJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IG1hc2tpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxUZXh0dXJlZFRyaWFuZ2xlIGltYWdlTmFtZT1cImdyYWZmaXRpLmpwZ1wiPlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRUcmlhbmdsZSBwb3NpdGlvbj17WyAwLjI1LCAwLjEyNSwgMSBdfSB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9UZXh0dXJlZFRyaWFuZ2xlPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFza2luZztcblxuLypcbiA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfT5cbiA8TWFzaz5cbiA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gPE1hc2s+XG4gPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4gPENvbG91cmVkVHJpYW5nbGUgY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gPlxuIDxNYXNrPlxuIDxDb2xvdXJlZFRyaWFuZ2xlIHBvc2l0aW9uPXtbIDAuMzc1LCAwLjEyNSwgMC41IF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSAvPlxuIDwvTWFzaz5cbiA8L0NvbG91cmVkVHJpYW5nbGU+XG4qL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IHNoYXBlcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTB9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMCwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IC8+XG4gICAgICA8Q29sb3VyZWRDeWxpbmRlciBjb2xvdXI9e1sgMCwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAxLCAxLCAxIF19IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEZyYW1lID0gcmVxdWlyZSgnLi90aW1iZXJGcmFtZWRIb3VzZS9mcmFtZScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCB0aW1iZXJGcmFtZWRIb3VzZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPEZyYW1lIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aW1iZXJGcmFtZWRIb3VzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3RlZWxTZWN0aW9uID0gcmVxdWlyZSgnLi9mcmFtZS9zdGVlbFNlY3Rpb24nKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBGcmFtZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgICAgaGVpZ2h0ID0gMjksXG4gICAgICAgICAgZGVwdGggPSAzMjtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAgICAgIC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsIGRlcHRoLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIDAsICAgICAgLTAuNSBdIH0gd2lkdGg9ezF9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17MX0gLz4sXG5cbiAgICAgIDxTdGVlbFNlY3Rpb24gcG9zaXRpb249eyBbICAgICAgLTAuNSwgaGVpZ2h0LTEsIC0wLjUgXSB9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXtkZXB0aH0gLz4sXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyB3aWR0aC0wLjUsIGhlaWdodC0xLCAtMC41IF0gfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17ZGVwdGh9IC8+LFxuXG4gICAgICA8U3RlZWxTZWN0aW9uIHBvc2l0aW9uPXsgWyAtMC41LCBoZWlnaHQtMSwgICAgICAtMC41IF0gfSB3aWR0aD17d2lkdGh9IGhlaWdodD17MX0gZGVwdGg9ezF9IC8+LFxuICAgICAgPFN0ZWVsU2VjdGlvbiBwb3NpdGlvbj17IFsgLTAuNSwgaGVpZ2h0LTEsIGRlcHRoLTAuNSBdIH0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnJhbWUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IHBvc2l0aW9uLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVkQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgcG9zaXRpb249e3Bvc2l0aW9ufSB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBkZXB0aD17ZGVwdGh9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlZWxTZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi9lZGdlJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzLCBsZW5ndGgzLCBub3JtYWxpc2UzIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIGNvbnN0IGVkZ2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBlZGdlcztcbiAgfVxuICBcbiAgZ2V0TWlkUG9pbnQoKSB7XG4gICAgY29uc3QgbWlkUG9pbnQgPSB0aGlzLnZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludCwgdmVydGV4KSB7XG4gICAgICBjb25zdCBzY2FsZWRWZXJ0ZXggPSBzY2FsZTModmVydGV4LCAxLzMpO1xuICAgICAgXG4gICAgICBtaWRQb2ludCA9IGFkZDMobWlkUG9pbnQsIHNjYWxlZFZlcnRleCk7XG4gICAgICBcbiAgICAgIHJldHVybiBtaWRQb2ludDtcbiAgICB9LCBbIDAsIDAsIDAgXSk7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5zbGljZSgpOyAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlMyh0aGlzLm5vcm1hbCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7IC8vL1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuICBcbiAgaXNUb29TbWFsbCgpIHtcbiAgICBjb25zdCBub3JtYWxMZW5ndGggPSBsZW5ndGgzKHRoaXMubm9ybWFsKSxcbiAgICAgICAgICBub3JtYWxMZW5ndGhBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhub3JtYWxMZW5ndGgpLFxuICAgICAgICAgIHRvb1NtYWxsID0gbm9ybWFsTGVuZ3RoQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHRvb1NtYWxsO1xuICB9XG4gIFxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBlZGdlc0luWFlQbGFuZSA9IG1hc2tpbmdGYWNldC5nZXRFZGdlc0luWFlQbGFuZSgpLFxuICAgICAgICAgIG1pZFBvaW50ID0gdGhpcy5nZXRNaWRQb2ludCgpLFxuICAgICAgICAgIG1pZFBvaW50VG9PbmVTaWRlT2ZFZGdlc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb09uZVNpZGVPZkVkZ2VzSW5YWVBsYW5lKG1pZFBvaW50LCBlZGdlc0luWFlQbGFuZSksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRUb09uZVNpZGVPZkVkZ2VzSW5YWVBsYW5lOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuICBcbiAgYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB0cmFuc2Zvcm1zLmZvckVhY2goZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gICAgICAgIHZlcnRleCA9IHRyYW5zZm9ybSh2ZXJ0ZXgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuICBcbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh0aGlzLnZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG5cbiAgcm90YXRlQWJvdXRaQXhpcyhyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB2ZXJ0ZXggPSByb3RhdGVBYm91dFpBeGlzKHZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMpO1xuICB9XG4gIFxuICBzcGxpdChpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFplcm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBmYWNldCkge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG4gICAgXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJzZWN0aW9uID0gZmlyc3QoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgc2Vjb25kSW50ZXJzZWN0aW9uID0gc2Vjb25kKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHNlY29uZFZlcnRleCwgdGhpcmRWZXJ0ZXgsIGZpcnN0SW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBzZWNvbmRJbnRlcm1lZGlhdGVWZXJ0ZXggPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXgodGhpcmRWZXJ0ZXgsIGZpcnN0VmVydGV4LCBzZWNvbmRJbnRlcnNlY3Rpb24pLFxuICAgICAgICAgIGZpcnN0VmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdFZlcnRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleCxcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzZWNvbmRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICAgIGZpcnN0SW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4LFxuICAgICAgICAgICAgZmlyc3RWZXJ0ZXhcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRoaXJkVmVydGljZXMgPSBbXG4gICAgICAgICAgICBmaXJzdEludGVybWVkaWF0ZVZlcnRleCxcbiAgICAgICAgICAgIHRoaXJkVmVydGV4LFxuICAgICAgICAgICAgc2Vjb25kSW50ZXJtZWRpYXRlVmVydGV4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKGZpcnN0VmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZEZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHNlY29uZFZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZEZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHRoaXJkVmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0RmFjZXRUb29TbWFsbCA9IGZpcnN0RmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHNlY29uZEZhY2V0VG9vU21hbGwgPSBzZWNvbmRGYWNldC5pc1Rvb1NtYWxsKCksXG4gICAgICAgICAgdGhpcmRGYWNldFRvb1NtYWxsID0gdGhpcmRGYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICBpZiAoIWZpcnN0RmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKGZpcnN0RmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghc2Vjb25kRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNlY29uZEZhY2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXJkRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHRoaXJkRmFjZXQpO1xuICAgIH1cbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgZmFjZXQpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0SW50ZXJzZWN0aW9uID0gZmlyc3QoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4ID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KGZpcnN0VmVydGV4LCBzZWNvbmRWZXJ0ZXgsIGZpcnN0SW50ZXJzZWN0aW9uKSxcbiAgICAgICAgICBmaXJzdFZlcnRpY2VzID0gW1xuICAgICAgICAgICAgZmlyc3RWZXJ0ZXgsXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2Vjb25kVmVydGljZXMgPSBbXG4gICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXgsXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXgsXG4gICAgICAgICAgICB0aGlyZFZlcnRleFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLFxuICAgICAgICAgIGZpcnN0RmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXMoZmlyc3RWZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXMoc2Vjb25kVmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0RmFjZXRUb29TbWFsbCA9IGZpcnN0RmFjZXQuaXNUb29TbWFsbCgpLFxuICAgICAgICAgIHNlY29uZEZhY2V0VG9vU21hbGwgPSBzZWNvbmRGYWNldC5pc1Rvb1NtYWxsKCk7XG5cbiAgICBpZiAoIWZpcnN0RmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKGZpcnN0RmFjZXQpO1xuICAgIH1cblxuICAgIGlmICghc2Vjb25kRmFjZXRUb29TbWFsbCkge1xuICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNlY29uZEZhY2V0KTtcbiAgICB9XG4gIH1cblxuICBzcGxpdFdpdGhaZXJvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXM7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBlZGdlLmNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgsIGludGVyc2VjdGlvbikge1xuICBjb25zdCBkaXJlY3Rpb24gPSBzdWJ0cmFjdDMoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhkaXJlY3Rpb24sIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleCA9IGFkZDMoc3RhcnRWZXJ0ZXgsIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pIHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50VG9PbmVTaWRlT2ZFZGdlc0luWFlQbGFuZShtaWRQb2ludCwgZWRnZXNJblhZUGxhbmUpIHtcbiAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lID0gaXNNaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSxcbiAgICAgICAgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZSA9IGlzTWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZShtaWRQb2ludCwgZWRnZXNJblhZUGxhbmUpLFxuICAgICAgICBtaWRQb2ludFRvT25lU2lkZU9mRWRnZXNJblhZUGxhbmUgPSBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUgfHwgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZTsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50VG9PbmVTaWRlT2ZFZGdlc0luWFlQbGFuZTtcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUobWlkUG9pbnQsIGVkZ2VzSW5YWVBsYW5lKSB7XG4gIGNvbnN0IG1pZFBvaW50VG9UaGVMZWZ0T2ZFZGdlc0luWFlQbGFuZSA9IGVkZ2VzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmUsIGVkZ2VJblhZUGxhbmUpIHtcbiAgICBpZiAobWlkUG9pbnRUb1RoZUxlZnRPZkVkZ2VzSW5YWVBsYW5lKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZUluWFlQbGFuZSA9IGVkZ2VJblhZUGxhbmUuaXNNaWRQb2ludFRvVGhlTGVmdChtaWRQb2ludCk7XG5cbiAgICAgIG1pZFBvaW50VG9UaGVMZWZ0T2ZFZGdlc0luWFlQbGFuZSA9IG1pZFBvaW50VG9UaGVMZWZ0T2ZFZGdlSW5YWVBsYW5lO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmU7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFRvVGhlTGVmdE9mRWRnZXNJblhZUGxhbmU7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZShtaWRQb2ludCwgZWRnZXNJblhZUGxhbmUpIHtcbiAgY29uc3QgbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZSA9IGVkZ2VzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbihtaWRQb2ludFRvVGhlUmlnaHRPZkVkZ2VzSW5YWVBsYW5lLCBlZGdlSW5YWVBsYW5lKSB7XG4gICAgaWYgKG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZXNJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50VG9UaGVSaWdodE9mRWRnZUluWFlQbGFuZSA9IGVkZ2VJblhZUGxhbmUuaXNNaWRQb2ludFRvVGhlUmlnaHQobWlkUG9pbnQpO1xuXG4gICAgICBtaWRQb2ludFRvVGhlUmlnaHRPZkVkZ2VzSW5YWVBsYW5lID0gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlSW5YWVBsYW5lO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlUmlnaHRPZkVkZ2VzSW5YWVBsYW5lO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRUb1RoZVJpZ2h0T2ZFZGdlc0luWFlQbGFuZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVOb3JtYWwgfSA9IHZlcnRpY2VzVXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKTtcblxuICAgIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgdmVydGV4ID0gdmVydGV4LnNsaWNlKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIG5vcm1hbCA9IG5vcm1hbC5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91ci5zbGljZSgpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbiAgXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIEZhY2V0KSB7IHN1cGVyLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlc0luZGV4ZXNBbmRDb2xvdXIodmVydGljZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGNvbG91cik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpO1xuXG5jb25zdCB7IGludmVydDIsIGludmVydDMgfSA9IG1hdHJpeFV0aWxpdGllcyxcbiAgICAgIHsgZ2V0SW1hZ2VEZXRhaWxzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKTtcblxuICAgIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgdmVydGV4ID0gdmVydGV4LnNsaWNlKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIG5vcm1hbCA9IG5vcm1hbC5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuc2xpY2UoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IGltYWdlRGV0YWlscyA9IGdldEltYWdlRGV0YWlscyh0aGlzLmltYWdlTmFtZSksXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGltYWdlRGV0YWlscyxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSB0cmFuc2xhdGVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIHBsYWNlcyk7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgRmFjZXQpIHsgc3VwZXIuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNGcm9tVmVydGljZXNQYXJlbnRWZXJ0aWNlc0FuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzSW5kZXhlc0ltYWdlTmFtZUFuZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIGluZGV4KSB7XG4gICAgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gdmVydGljZXNbaW5kZXhdOyB9KTsgIC8vL1xuXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLnNsaWNlKGluZGV4ICogMywgaW5kZXggKiAzICsgMyk7ICAvLy9cblxuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcblxuZnVuY3Rpb24gdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRleHR1cmVDb29yZGluYXRlcywgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0ICkge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMubWFwKGZ1bmN0aW9uKHRleHR1cmVDb29yZGluYXRlcykgeyAgLy8vXG4gICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVzLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVDb29yZGluYXRlc0Zyb21WZXJ0aWNlc1BhcmVudFZlcnRpY2VzQW5kVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICB2ZXJ0aWNlc0luWFlQbGFuZSA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBwYXJlbnRWZXJ0aWNlc0luWFlQbGFuZSA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBmaXJzdFZlcnRleEluWFlQbGFuZSA9IGZpcnN0KHZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgc2Vjb25kVmVydGV4SW5YWVBsYW5lID0gc2Vjb25kKHZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhJblhZUGxhbmUgPSB0aGlyZCh2ZXJ0aWNlc0luWFlQbGFuZSksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4SW5YWVBsYW5lID0gZmlyc3QocGFyZW50VmVydGljZXNJblhZUGxhbmUpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhJblhZUGxhbmUgPSBzZWNvbmQocGFyZW50VmVydGljZXNJblhZUGxhbmUpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleEluWFlQbGFuZSA9IHRoaXJkKHBhcmVudFZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhJblhZUGxhbmVbMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleEluWFlQbGFuZVsxXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleEluWFlQbGFuZVswXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleEluWFlQbGFuZVsxXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4SW5YWVBsYW5lWzBdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhJblhZUGxhbmVbMV0sIC8vL1xuICAgICAgICBjaGFuZ2VPZkJhc2lzTWF0cml4ID0gY2FsY3VsYXRlQ2hhbmdlT2ZCYXNpc01hdHJpeCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICB4VmVjdG9yID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgY2hhbmdlT2ZCYXNpc01hdHJpeCksXG4gICAgICAgIHlWZWN0b3IgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCBjaGFuZ2VPZkJhc2lzTWF0cml4KSxcbiAgICAgICAgT3ggPSB4VmVjdG9yWzBdLCAgLy8vXG4gICAgICAgIE95ID0geVZlY3RvclswXSwgIC8vL1xuICAgICAgICBVeCA9IHhWZWN0b3JbMV0sICAvLy9cbiAgICAgICAgVXkgPSB5VmVjdG9yWzFdLCAgLy8vXG4gICAgICAgIFZ4ID0geFZlY3RvclsyXSwgIC8vL1xuICAgICAgICBWeSA9IHlWZWN0b3JbMl0sICAvLy9cbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhJblhZUGxhbmVbMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhJblhZUGxhbmVbMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4SW5YWVBsYW5lWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4SW5YWVBsYW5lWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhJblhZUGxhbmVbMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhJblhZUGxhbmVbMV0sICAvLy9cbiAgICAgICAgbWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlcyA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgbWF0cml4KSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVzID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCBtYXRyaXgpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlcyA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgbWF0cml4KTtcblxuICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG4gICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZXMsXG4gICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVzLFxuICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVzLFxuICBdO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNoYW5nZU9mQmFzaXNNYXRyaXgodGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVbMV0sIC8vL1xuICAgICAgICBjaGFuZ2VPZkJhc2lzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSk7XG5cbiAgcmV0dXJuIGNoYW5nZU9mQmFzaXNNYXRyaXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIEVkZ2VJblhZUGxhbmUgPSByZXF1aXJlKCcuL2VkZ2VJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihlZGdlc0luWFlQbGFuZSwgdmVydGljYWxMaW5lc0luWFlQbGFuZSwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZWRnZXNJblhZUGxhbmUgPSBlZGdlc0luWFlQbGFuZTtcbiAgICB0aGlzLnZlcnRpY2FsTGluZXNJblhZUGxhbmUgPSB2ZXJ0aWNhbExpbmVzSW5YWVBsYW5lO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEVkZ2VzSW5YWVBsYW5lKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzSW5YWVBsYW5lO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lc0luWFlQbGFuZSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzSW5YWVBsYW5lO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpO1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgZnVuY3Rpb24oc21hbGxlckZhY2V0KSB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaChmdW5jdGlvbih1bm1hc2tlZFNtYWxsZXJGYWNldCkge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzSW5YWVBsYW5lLmZvckVhY2goZnVuY3Rpb24odmVydGljYWxMaW5lSW5YWVBsYW5lKSB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24oZmFjZXROb3JtYWwpLFxuICAgICAgICAgIHZlcnRpY2VzSW5YWVBsYW5lID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBlZGdlc0luWFlQbGFuZSA9IGNhbGN1bGF0ZUVkZ2VzSW5YWVBsYW5lKHZlcnRpY2VzSW5YWVBsYW5lKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzSW5YWVBsYW5lID0gZWRnZXNJblhZUGxhbmUubWFwKGZ1bmN0aW9uKGVkZ2VJblhZUGxhbmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tRWRnZUluWFlQbGFuZShlZGdlSW5YWVBsYW5lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZUluWFlQbGFuZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChlZGdlc0luWFlQbGFuZSwgdmVydGljYWxMaW5lc0luWFlQbGFuZSwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0ZhY2V0O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlc0luWFlQbGFuZSh2ZXJ0aWNlc0luWFlQbGFuZSkge1xuICBjb25zdCBlZGdlc0luWFlQbGFuZSA9IHZlcnRpY2VzSW5YWVBsYW5lLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleEluWFlQbGFuZSA9IHZlcnRpY2VzSW5YWVBsYW5lW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleEluWFlQbGFuZSA9IHZlcnRpY2VzSW5YWVBsYW5lW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBlZGdlSW5YWVBsYW5lID0gRWRnZUluWFlQbGFuZS5mcm9tU3RhcnRWZXJ0ZXhJblhZUGxhbmVBbmRFbmRWZXJ0ZXhJblhZUGxhbmUoc3RhcnRWZXJ0ZXhJblhZUGxhbmUsIGVuZFZlcnRleEluWFlQbGFuZSk7XG5cbiAgICAgICAgICByZXR1cm4gZWRnZUluWFlQbGFuZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICByZXR1cm4gZWRnZXNJblhZUGxhbmU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50O1xuXG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gIH0sIHByb3BlcnRpZXMpO1xuXG4gIGlmIChmYWxzZSkge1xuXG4gIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgZWxlbWVudCA9IGZ1bmMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykgeyB0aGlzLnJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTsgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykgeyB0aGlzLnJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpOyB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7IH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5PYmplY3QuYXNzaWduKFJlbmRlcmVyLCB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2J1ZmZlcnMnKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzQnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvYnVmZmVycycpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cbiAgXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cbiAgXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvY29sb3VyJyksXG4gICAgICBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91cicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlcicpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybScpLFxuICAgICAgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7IH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmbGF0dGVuLCBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIG1heGltdW1WZXJ0ZXhJbmRleCkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IG1heGltdW1WZXJ0ZXhJbmRleDtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggKyAxO1xuXG4gICAgdmVydGV4SW5kZXhlcyA9IHZlcnRleEluZGV4ZXMubWFwKGZ1bmN0aW9uKHZlcnRleEluZGV4KSB7XG4gICAgICByZXR1cm4gdmVydGV4SW5kZXggKyBvZmZzZXQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IE1hdGgubWF4KHRoaXMubWF4aW11bVZlcnRleEluZGV4LCAuLi52ZXJ0ZXhJbmRleGVzKTtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlcztcblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICBtYXhpbXVtVmVydGV4SW5kZXggPSAtMSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIG1heGltdW1WZXJ0ZXhJbmRleCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJEYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9kYXRhJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IG1lcmdlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4LCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgbWF4aW11bVZlcnRleEluZGV4KTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJEYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9kYXRhJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlY3RvcicpO1xuXG5jb25zdCB7IGFkZDIsIG11bHRpcGx5MiB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBtYXhpbXVtVmVydGV4SW5kZXgsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIG1heGltdW1WZXJ0ZXhJbmRleCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKSB7ICAvLy9cbiAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9ICB2ZXJ0aWNhbGx5RmxpcFZlcnRleFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckRhdGE7XG5cbmZ1bmN0aW9uIHZlcnRpY2FsbHlGbGlwVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlcykgeyByZXR1cm4gYWRkMihtdWx0aXBseTIodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzLCBbIDEsIC0xIF0pLCBbIDAsIDEgXSk7IH0gIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gPSBsaWdodGluZ1NvdXJjZSxcbiAgICAgIHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gPSBwb3NpdGlvblNvdXJjZTtcblxuY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGUnKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyk7XG5cbmNvbnN0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9ID0gdmVydGV4U2hhZGVyU291cmNlO1xuXG5jbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL2xvY2F0aW9ucy91bmlmb3JtJyk7XG5cbmNsYXNzIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykgeyByZXR1cm4gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyk7XG5cbmNvbnN0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL3VuaWZvcm0nKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKTtcblxuY29uc3QgeyBzYW1wbGVyTmFtZSB9ID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pIHtcbiAgICBzdXBlcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvbGlnaHRpbmcnKSxcbiAgICAgIHBvc2l0aW9uU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHsgbm9ybWFsTWF0cml4TmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IG9mZnNldE1hdHJpeE5hbWUsIHJvdGF0aW9uTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9ID0gcG9zaXRpb25Tb3VyY2U7XG5cbmNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjsgICAgXG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0TWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaWZvcm1Mb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIHtcbiAgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZTogdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Tm9ybWFsJztcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbE1hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxNYXRyaXhOYW1lOiBub3JtYWxNYXRyaXhOYW1lLFxuICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaWdodGluZ1NvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb2Zmc2V0TWF0cml4TmFtZSA9ICd1T2Zmc2V0TWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwcm9qZWN0aW9uTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhQb3NpdGlvbic7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbk1hdHJpeE5hbWV9ICogJHtvZmZzZXRNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRNYXRyaXhOYW1lOiBvZmZzZXRNYXRyaXhOYW1lLFxuICByb3RhdGlvbk1hdHJpeE5hbWU6IHJvdGF0aW9uTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lOiBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHByb2plY3Rpb25NYXRyaXhOYW1lOiBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lOiB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWVcbn0pO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKGZyYWdtZW50U2hhZGVyU291cmNlLCB7XG4gIHNhbXBsZXJOYW1lOiBzYW1wbGVyTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWU6IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmVydGV4U2hhZGVyU291cmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlcicpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybScpLFxuICAgICAgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlJyk7XG5cbmNvbnN0IHsgY3JlYXRlUHJvZ3JhbSB9ID0gUmVuZGVyZXI7XG5cbmNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKSB7IHRoaXMucmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMpOyB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMDtcblxuICAgIGNhbnZhcy5hY3RpdmF0ZVRleHR1cmUodGFyZ2V0KTtcblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IHRleHR1cmVSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IFRleHR1cmVSZW5kZXJlcihwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHtcbiAgY29uc3QgaGFsZkFuZ2xlU2luZSA9IE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpO1xuXG4gIHJldHVybiBoYWxmQW5nbGVTaW5lO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHtcbiAgY29uc3QgaGFsZkFuZ2xlQ29zaW5lID0gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7XG5cbiAgcmV0dXJuIGhhbGZBbmdsZUNvc2luZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmU6IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUsXG4gIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZTogY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9ID0gY29uc3RhbnRzO1xuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lOiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lLFxuICBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybzogaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm9cbn07XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNwbGljZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNob3AoZWxlbWVudHMsIGFycmF5TGVuZ3RoKSB7XG4gIGNvbnN0IGFycmF5cyA9IFtdLFxuICAgICAgICBlbGVtZW50c0xlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgYXJyYXlzTGVuZ3RoID0gZWxlbWVudHNMZW5ndGggLyBhcnJheUxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGFycmF5TGVuZ3RoOyBvZmZzZXQrKykge1xuICAgICAgYXJyYXlbb2Zmc2V0XSA9IGVsZW1lbnRzW2luZGV4ICogYXJyYXlMZW5ndGggKyBvZmZzZXRdO1xuICAgIH1cblxuICAgIGFycmF5c1tpbmRleF0gPSBhcnJheTtcbiAgfVxuXG4gIHJldHVybiBhcnJheXM7XG59XG5cbmZ1bmN0aW9uIGRpbHV0ZShlbGVtZW50cywgYXJyYXksIHRlc3QpIHtcbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwZXJtdXRlKGVsZW1lbnRzLCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGVsZW1lbnRzLnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShjdXQpO1xuXG4gIGVsZW1lbnRzID0gWy4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50c107XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgYXJyYXkpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcbiAgfSwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgY2hvcDogY2hvcCxcbiAgZGlsdXRlOiBkaWx1dGUsXG4gIHBlcm11dGU6IHBlcm11dGUsXG4gIGZsYXR0ZW46IGZsYXR0ZW4gIFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaWRlbnRpdHk0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuZnVuY3Rpb24gb2Zmc2V0TWF0cml4RnJvbU9mZnNldChvZmZzZXQpIHtcbiAgbGV0IG9mZnNldE1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIG9mZnNldE1hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0TWF0cml4LCBvZmZzZXQpO1xuXG4gIHJldHVybiBvZmZzZXRNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpIHtcbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLFxuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSxcbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZTtcblxuICBsZXQgcm90YXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25NYXRyaXgsIHhBbmdsZSwgWzEsIDAsIDBdKTtcbiAgcm90YXRpb25NYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uTWF0cml4LCB5QW5nbGUsIFswLCAxLCAwXSk7XG4gIHJvdGF0aW9uTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbk1hdHJpeCwgekFuZ2xlLCBbMCwgMCwgMV0pO1xuXG4gIHJldHVybiByb3RhdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gIGNvbnN0IGZpZWxkT2ZWaWV3ID0gRklFTERfT0ZfVklFVyxcbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgek5lYXIgPSBaX05FQVIsXG4gICAgICAgIHpGYXIgPSBaX0ZBUixcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KSB7XG4gIGxldCBub3JtYWxNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uTWF0cml4KTtcblxuICBub3JtYWxNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbE1hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbE1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9mZnNldE1hdHJpeEZyb21PZmZzZXQ6IG9mZnNldE1hdHJpeEZyb21PZmZzZXQsXG4gIHJvdGF0aW9uTWF0cml4RnJvbUFuZ2xlczogcm90YXRpb25NYXRyaXhGcm9tQW5nbGVzLFxuICBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZTogcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQ6IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsXG4gIG5vcm1hbE1hdHJpeEZyb21Sb3RhdGlvbk1hdHJpeDogbm9ybWFsTWF0cml4RnJvbVJvdGF0aW9uTWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG9tRWxlbWVudEZyb21TZWxlY3RvcjogZG9tRWxlbWVudEZyb21TZWxlY3RvclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlcGVhdGVkbHkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlKHBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY2FsbGJhY2soaW1hZ2UpO1xuICB9O1xuXG4gIGltYWdlLnNyYyA9IHBhdGg7ICAvLy9cbn1cblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhwYXRocywgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IHBhdGhzLmxlbmd0aCwgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXG4gICAgICAgICAgcGF0aHM6IHBhdGhzXG4gICAgICAgIH07XG5cbiAgcmVwZWF0ZWRseShwcmVsb2FkSW1hZ2VDYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWxvYWRJbWFnZTogcHJlbG9hZEltYWdlLFxuICBwcmVsb2FkSW1hZ2VzOiBwcmVsb2FkSW1hZ2VzXG59O1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VDYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkge1xuICBjb25zdCB7IGltYWdlcywgcGF0aHMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBhdGggPSBwYXRoc1tpbmRleF0sXG4gICAgICAgIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgaW1hZ2VzW2luZGV4XSA9IGltYWdlO1xuXG4gIGltYWdlLm9ubG9hZCA9IG5leHQ7ICAvLy9cblxuICBpbWFnZS5zcmMgPSBwYXRoOyAgLy8vXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2Jpbi9jb25zdGFudHMnKSwgLy8vXG4gICAgICBpbWFnZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZScpO1xuXG5jb25zdCB7IElNQUdFX01BUF9VUkxfUEFUSCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBwcmVsb2FkSW1hZ2UgfSA9IGltYWdlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgcGF0aCA9IElNQUdFX01BUF9VUkxfUEFUSDtcblxuICBwcmVsb2FkSW1hZ2UocGF0aCwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZURldGFpbHMoaW1hZ2VOYW1lKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBKU09OIH0gPSBydW50aW1lQ29uZmlndXJhdGlvbixcbiAgICAgICAgaW1hZ2VEZXRhaWxzID0gaW1hZ2VNYXBKU09OW2ltYWdlTmFtZV07XG5cbiAgcmV0dXJuIGltYWdlRGV0YWlscztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZWxvYWRJbWFnZU1hcDogcHJlbG9hZEltYWdlTWFwLFxuICBnZXRJbWFnZURldGFpbHM6IGdldEltYWdlRGV0YWlsc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0MiA9IHJlcXVpcmUoJ2dsLW1hdDInKTtcbmNvbnN0IG1hdDMgPSByZXF1aXJlKCdnbC1tYXQzJyk7XG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpO1xuXG5mdW5jdGlvbiBpZGVudGl0eTIoKSB7IHJldHVybiBtYXQyLmNyZWF0ZSgpOyB9ICAvLy9cblxuZnVuY3Rpb24gaWRlbnRpdHkzKCkgeyByZXR1cm4gbWF0My5jcmVhdGUoKTsgfSAgLy8vXG5cbmZ1bmN0aW9uIGlkZW50aXR5NCgpIHsgcmV0dXJuIG1hdDQuY3JlYXRlKCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkgeyByZXR1cm4gbWF0Mi5pbnZlcnQoW10sIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHsgcmV0dXJuIG1hdDMuaW52ZXJ0KFtdLCBtYXRyaXgpOyB9XG5cbmZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7IHJldHVybiBtYXQ0LmludmVydChbXSwgbWF0cml4KTsgfVxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkgeyByZXR1cm4gbWF0Mi50cmFuc3Bvc2UoW10sIG1hdHJpeCk7IH1cblxuZnVuY3Rpb24gdHJhbnNwb3NlMyhtYXRyaXgpIHsgcmV0dXJuIG1hdDMudHJhbnNwb3NlKFtdLCBtYXRyaXgpOyB9XG5cbmZ1bmN0aW9uIHRyYW5zcG9zZTQobWF0cml4KSB7IHJldHVybiBtYXQ0LnRyYW5zcG9zZShbXSwgbWF0cml4KTsgfVxuXG5mdW5jdGlvbiBzY2FsZTIobWF0cml4LCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDIuc2NhbGUoW10sIG1hdHJpeCwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBzY2FsZTMobWF0cml4LCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDMuc2NhbGUoW10sIG1hdHJpeCwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDQuc2NhbGUoW10sIG1hdHJpeCwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiB0cmFuc2xhdGUyKG1hdHJpeCwgdmVjdG9yKSB7IHJldHVybiBtYXQyLnRyYW5zbGF0ZShbXSwgbWF0cml4LCB2ZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZTMobWF0cml4LCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDMudHJhbnNsYXRlKFtdLCBtYXRyaXgsIHZlY3Rvcik7IH1cblxuZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3RvcikgeyByZXR1cm4gbWF0NC50cmFuc2xhdGUoW10sIG1hdHJpeCwgdmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikgeyByZXR1cm4gbWF0NC5wZXJzcGVjdGl2ZShbXSwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7IH1cblxuZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHsgcmV0dXJuIG1hdDQucm90YXRlKFtdLCBtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpOyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpZGVudGl0eTI6IGlkZW50aXR5MixcbiAgaWRlbnRpdHkzOiBpZGVudGl0eTMsXG4gIGlkZW50aXR5NDogaWRlbnRpdHk0LFxuICBpbnZlcnQyOiBpbnZlcnQyLFxuICBpbnZlcnQzOiBpbnZlcnQzLFxuICBpbnZlcnQ0OiBpbnZlcnQ0LFxuICBzY2FsZTI6IHNjYWxlMixcbiAgc2NhbGUzOiBzY2FsZTMsXG4gIHNjYWxlNDogc2NhbGU0LFxuICB0cmFuc3Bvc2UyOiB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzOiB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0OiB0cmFuc3Bvc2U0LFxuICB0cmFuc2xhdGUyOiB0cmFuc2xhdGUyLFxuICB0cmFuc2xhdGUzOiB0cmFuc2xhdGUzLFxuICB0cmFuc2xhdGU0OiB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTQ6IHBlcnNwZWN0aXZlNCxcbiAgcm90YXRlNDogcm90YXRlNFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFuZ2xlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FuZ2xlJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSwgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSB9ID0gYW5nbGVVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgdW5pdE5vcm1hbCA9IG5vcm1hbGlzZTMobm9ybWFsKSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDFdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcblxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeChyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7IC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICBjb25zdCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4LCAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQgPSBmaXJzdChyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeENvbXBvbmVudHMpLFxuICAgICAgICBjID0gZmlyc3RSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXhDb21wb25lbnQsIC8vL1xuICAgICAgICBzID0gZm91cnRoUm90YXRpb25BYm91dFpBeGlzTWF0cml4Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IFsgYywgK3MsIDAsIC1zLCBjLCAwLCAwLCAwLCAxIF07XG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb246IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbjogY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjogY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjogY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDogY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgsXG4gIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDogY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4XG59O1xuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IHF1YXRlcm5pb25BQ29tcG9uZW50cyA9IHF1YXRlcm5pb25BLCAgLy8vXG4gICAgICAgIHF1YXRlcm5pb25CQ29tcG9uZW50cyA9IHF1YXRlcm5pb25CLCAgLy8vXG4gICAgICAgIGZpcnN0UXVhdGVybmlvbkFDb21wb25lbnQgPSBmaXJzdChxdWF0ZXJuaW9uQUNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRRdWF0ZXJuaW9uQUNvbXBvbmVudCA9IHNlY29uZChxdWF0ZXJuaW9uQUNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFF1YXRlcm5pb25BQ29tcG9uZW50ID0gdGhpcmQocXVhdGVybmlvbkFDb21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUXVhdGVybmlvbkFDb21wb25lbnQgPSBmb3VydGgocXVhdGVybmlvbkFDb21wb25lbnRzKSxcbiAgICAgICAgZmlyc3RRdWF0ZXJuaW9uQkNvbXBvbmVudCA9IGZpcnN0KHF1YXRlcm5pb25CQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFF1YXRlcm5pb25CQ29tcG9uZW50ID0gc2Vjb25kKHF1YXRlcm5pb25CQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUXVhdGVybmlvbkJDb21wb25lbnQgPSB0aGlyZChxdWF0ZXJuaW9uQkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhRdWF0ZXJuaW9uQkNvbXBvbmVudCA9IGZvdXJ0aChxdWF0ZXJuaW9uQkNvbXBvbmVudHMpLFxuICAgICAgICBhMSA9IGZpcnN0UXVhdGVybmlvbkFDb21wb25lbnQsIC8vL1xuICAgICAgICBiMSA9IHNlY29uZFF1YXRlcm5pb25BQ29tcG9uZW50LCAgLy8vXG4gICAgICAgIGMxID0gdGhpcmRRdWF0ZXJuaW9uQUNvbXBvbmVudCwgLy8vXG4gICAgICAgIGQxID0gZm91cnRoUXVhdGVybmlvbkFDb21wb25lbnQsICAvLy9cbiAgICAgICAgYTIgPSBmaXJzdFF1YXRlcm5pb25CQ29tcG9uZW50LCAvLy9cbiAgICAgICAgYjIgPSBzZWNvbmRRdWF0ZXJuaW9uQkNvbXBvbmVudCwgIC8vL1xuICAgICAgICBjMiA9IHRoaXJkUXVhdGVybmlvbkJDb21wb25lbnQsIC8vL1xuICAgICAgICBkMiA9IGZvdXJ0aFF1YXRlcm5pb25CQ29tcG9uZW50LCAgLy8vXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBERUdSRUVTX1RPX1JBRElBTlMgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdHJhbnNmb3JtNCB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlkZW50aXR5NCwgc2NhbGU0LCByb3RhdGU0LCB0cmFuc2xhdGU0IH0gPSBtYXRyaXhVdGlsaXRpZXMsXG4gICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICBkZWZhdWx0V2lkdGggPSAxLFxuICAgICAgZGVmYXVsdERlcHRoID0gMSxcbiAgICAgIGRlZmF1bHRIZWlnaHQgPSAxLFxuICAgICAgZGVmYXVsdFBvc2l0aW9uID0gWyAwLCAwLCAwIF0sXG4gICAgICBkZWZhdWx0Um90YXRpb25zID0gWyAwLCAwLCAwIF07XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGUgPSBjb21wb3NlU2NhbGUod2lkdGgsIGhlaWdodCwgZGVwdGgpLFxuICAgICAgICByb3RhdGUgPSBjb21wb3NlUm90YXRlKHJvdGF0aW9ucyksXG4gICAgICAgIHRyYW5zbGF0ZSA9IGNvbXBvc2VUcmFuc2xhdGUocG9zaXRpb24pO1xuXG4gIHJldHVybiBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlKHJvdGF0ZShzY2FsZSh2ZWN0b3IpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBvc2VUcmFuc2Zvcm06IGNvbXBvc2VUcmFuc2Zvcm1cbn07XG5cbmZ1bmN0aW9uIGNvbXBvc2UobWF0cml4KSB7XG4gIHJldHVybiBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtNChbLi4udmVjdG9yLCAxXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZVNjYWxlKHdpZHRoID0gZGVmYXVsdFdpZHRoLCBoZWlnaHQgPSBkZWZhdWx0SGVpZ2h0LCBkZXB0aCA9IGRlZmF1bHREZXB0aCkge1xuICBsZXQgbWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgbWF0cml4ID0gc2NhbGU0KG1hdHJpeCwgWyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCBdKTtcblxuICByZXR1cm4gY29tcG9zZShtYXRyaXgpO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlUm90YXRlKHJvdGF0aW9ucyA9IGRlZmF1bHRSb3RhdGlvbnMpIHtcbiAgY29uc3QgZmlyc3RSb3RhdGlvbiA9IGZpcnN0KHJvdGF0aW9ucyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uID0gc2Vjb25kKHJvdGF0aW9ucyksXG4gICAgICAgIHRoaXJkUm90YXRpb24gPSB0aGlyZChyb3RhdGlvbnMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TLCAgLy8vXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZFJvdGF0aW9uICogREVHUkVFU19UT19SQURJQU5TLCAvLy9cbiAgICAgICAgekFuZ2xlID0gdGhpcmRSb3RhdGlvbiAqIERFR1JFRVNfVE9fUkFESUFOUzsgIC8vL1xuXG4gIGxldCBtYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBtYXRyaXggPSByb3RhdGU0KG1hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIG1hdHJpeCA9IHJvdGF0ZTQobWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgbWF0cml4ID0gcm90YXRlNChtYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuXG4gIHJldHVybiBjb21wb3NlKG1hdHJpeCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VUcmFuc2xhdGUocG9zaXRpb24gPSBkZWZhdWx0UG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIG1hdHJpeCA9IHRyYW5zbGF0ZTQobWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIGNvbXBvc2UobWF0cml4KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMiA9IHJlcXVpcmUoJ2dsLXZlYzInKTtcbmNvbnN0IHZlYzMgPSByZXF1aXJlKCdnbC12ZWMzJyk7XG5jb25zdCB2ZWM0ID0gcmVxdWlyZSgnZ2wtdmVjNCcpO1xuXG5mdW5jdGlvbiBsZW5ndGgyKHZlY3RvcikgeyByZXR1cm4gdmVjMi5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBsZW5ndGgzKHZlY3RvcikgeyByZXR1cm4gdmVjMy5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBsZW5ndGg0KHZlY3RvcikgeyByZXR1cm4gdmVjNC5sZW5ndGgodmVjdG9yKTsgfVxuXG5mdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIuZG90KHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMy5kb3QodmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWM0LmRvdCh2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjMy5jcm9zcyhbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHsgcmV0dXJuIHZlYzIubm9ybWFsaXplKFtdLCB2ZWN0b3IpOyB9ICAvLy9cblxuZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHsgcmV0dXJuIHZlYzMubm9ybWFsaXplKFtdLCB2ZWN0b3IpOyB9ICAvLy9cblxuZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHsgcmV0dXJuIHZlYzQubm9ybWFsaXplKFtdLCB2ZWN0b3IpOyB9ICAvLy9cblxuZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWMyLnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWMzLnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7IHJldHVybiB2ZWM0LnNjYWxlKFtdLCB2ZWN0b3IsIHNjYWxhcik7IH1cblxuZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMyLmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWM0LmFkZChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIuc3VidHJhY3QoW10sIHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLnN1YnRyYWN0KFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjNC5zdWJ0cmFjdChbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gbXVsdGlwbHkyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuIHZlYzIubXVsdGlwbHkoW10sIHZlY3RvckEsIHZlY3RvckIpOyB9XG5cbmZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiB2ZWMzLm11bHRpcGx5KFtdLCB2ZWN0b3JBLCB2ZWN0b3JCKTsgfVxuXG5mdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gdmVjNC5tdWx0aXBseShbXSwgdmVjdG9yQSwgdmVjdG9yQik7IH1cblxuZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkgeyByZXR1cm4gdmVjMi50cmFuc2Zvcm1NYXQyKFtdLCB2ZWN0b3IsIG1hdHJpeCk7IH0gIC8vL1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7IHJldHVybiB2ZWMzLnRyYW5zZm9ybU1hdDMoW10sIHZlY3RvciwgbWF0cml4KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHsgcmV0dXJuIHZlYzQudHJhbnNmb3JtTWF0NChbXSwgdmVjdG9yLCBtYXRyaXgpOyB9ICAvLy9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxlbmd0aDI6IGxlbmd0aDIsXG4gIGxlbmd0aDM6IGxlbmd0aDMsXG4gIGxlbmd0aDQ6IGxlbmd0aDQsXG4gIGRvdDI6IGRvdDIsXG4gIGRvdDM6IGRvdDMsXG4gIGRvdDQ6IGRvdDQsXG4gIGNyb3NzMzogY3Jvc3MzLFxuICBub3JtYWxpc2UyOiBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzOiBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0OiBub3JtYWxpc2U0LFxuICBzY2FsZTI6IHNjYWxlMixcbiAgc2NhbGUzOiBzY2FsZTMsXG4gIHNjYWxlNDogc2NhbGU0LFxuICBhZGQyOiBhZGQyLFxuICBhZGQzOiBhZGQzLFxuICBhZGQ0OiBhZGQ0LFxuICBzdWJ0cmFjdDI6IHN1YnRyYWN0MixcbiAgc3VidHJhY3QzOiBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NDogc3VidHJhY3Q0LFxuICBtdWx0aXBseTI6IG11bHRpcGx5MixcbiAgbXVsdGlwbHkzOiBtdWx0aXBseTMsXG4gIG11bHRpcGx5NDogbXVsdGlwbHk0LFxuICB0cmFuc2Zvcm0yOiB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zOiB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00OiB0cmFuc2Zvcm00XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgdHJhbnNmb3JtMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVBYm91dFpBeGlzKHZlcnRleCwgcm90YXRpb25BYm91dFpBeGlzTWF0cml4KSB7XG4gIGNvbnN0IG1hdHJpeCA9IHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDsgIC8vL1xuXG4gIHZlcnRleCA9IHRyYW5zZm9ybTModmVydGV4LCBtYXRyaXgpO1xuXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RPbnRvWFlQbGFuZSh2ZXJ0ZXgpIHtcbiAgdmVydGV4ID0gWy4uLnZlcnRleC5zbGljZSgwLCAyKSwgMF07ICAvLy9cbiAgXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVBYm91dFpBeGlzOiByb3RhdGVBYm91dFpBeGlzLFxuICBwcm9qZWN0T250b1hZUGxhbmU6IHByb2plY3RPbnRvWFlQbGFuZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3JvdGF0aW9uJyk7XG5cbmNvbnN0IHsgc3VidHJhY3QzLCBjcm9zczMgfSA9IHZlY3RvclV0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uLCByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RFZGdlID0gc3VidHJhY3QzKHNlY29uZFZlcnRleCwgZmlyc3RWZXJ0ZXgpLFxuICAgICAgICBzZWNvbmRFZGdlID0gc3VidHJhY3QzKHRoaXJkVmVydGV4LCBmaXJzdFZlcnRleCksXG4gICAgICAgIG5vcm1hbCA9IGNyb3NzMyhmaXJzdEVkZ2UsIHNlY29uZEVkZ2UpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICB2ZXJ0ZXggPSByb3RhdGVWZXJ0ZXgodmVydGV4LCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfSk7XG4gIFxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVOb3JtYWw6IGNhbGN1bGF0ZU5vcm1hbCxcbiAgcm90YXRlVmVydGljZXM6IHJvdGF0ZVZlcnRpY2VzXG59O1xuXG5mdW5jdGlvbiByb3RhdGVWZXJ0ZXgodmVydGV4LCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IFswLCAuLi52ZXJ0ZXhdLCAvLy9cbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGV4ID0gcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IC8vL1xuXG4gIHJldHVybiB2ZXJ0ZXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGV4JyksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3JvdGF0aW9uJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlQWJvdXRaQXhpcyB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4LCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggfSA9IHJvdGF0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmVJblhZUGxhbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gcm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4O1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgodGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCh0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgXG4gICAgZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgIGZhY2V0LnJvdGF0ZUFib3V0WkF4aXMoZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHNtYWxsZXJGYWNldCkge1xuICAgICAgc21hbGxlckZhY2V0LnJvdGF0ZUFib3V0WkF4aXMoYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzOyAgICBcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5jYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aEZhY2V0KGZhY2V0KTtcblxuICAgIGZhY2V0LnNwbGl0KGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldChmYWNldCkge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IHRoaXMuY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuICBcbiAgY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UpIHtcbiAgICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gICAgaWYgKGVkZ2VOb25QYXJhbGxlbCkge1xuICAgICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IHRoaXMuY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlKSxcbiAgICAgICAgICAgIGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gaXNJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKGVkZ2VJbnRlcnNlY3Rpb24pO1xuXG4gICAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gIH1cblxuICBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UpIHtcbiAgICBjb25zdCBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgZWRnZVBvc2l0aW9uQ29tcG9uZW50cyA9IGVkZ2VQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcbiAgICBcbiAgICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWRnZUluWFlQbGFuZShlZGdlSW5YWVBsYW5lKSB7XG4gICAgY29uc3QgZWRnZUluWFlQbGFuZVBvc2l0aW9uID0gZWRnZUluWFlQbGFuZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeChlZGdlSW5YWVBsYW5lKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZUFib3V0WkF4aXMoZWRnZUluWFlQbGFuZVBvc2l0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBuZXcgVmVydGljYWxMaW5lSW5YWVBsYW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lSW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lSW5YWVBsYW5lO1xuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGludGVyc2VjdGlvbiA+IDAgKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoZWRnZUluWFlQbGFuZSkge1xuICBjb25zdCBlZGdlSW5YWVBsYW5lRXh0ZW50ID0gZWRnZUluWFlQbGFuZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdEVkZ2VJblhZUGxhbmVFeHRlbnQgPSBub3JtYWxpc2UzKGVkZ2VJblhZUGxhbmVFeHRlbnQpLFxuICAgICAgICB1bml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudHMgPSB1bml0RWRnZUluWFlQbGFuZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdEVkZ2VJblhZUGxhbmVFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gK3NlY29uZFVuaXRFZGdlSW5YWVBsYW5lRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAtZmlyc3RVbml0RWRnZUluWFlQbGFuZUV4dGVudENvbXBvbmVudCwgLy8vXG4gICAgICAgIGMgPSBhbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgIHMgPSBhbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBbIGMsIC1zLCAwLCArcywgYywgMCwgMCwgMCwgMSBdOyAgLy8vXG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeDtcbn1cbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmFkam9pbnRcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgLy8gQ2FjaGluZyB0aGlzIHZhbHVlIGlzIG5lc3NlY2FyeSBpZiBvdXQgPT0gYVxuICB2YXIgYTAgPSAgYVswXVxuICBvdXRbMF0gPSAgYVszXVxuICBvdXRbMV0gPSAtYVsxXVxuICBvdXRbMl0gPSAtYVsyXVxuICBvdXRbM10gPSAgYTBcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MiB0byBhbm90aGVyXG4gKlxuICogQGFsaWFzIG1hdDIuY29weVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQyXG4gKlxuICogQGFsaWFzIG1hdDIuY3JlYXRlXG4gKiBAcmV0dXJucyB7bWF0Mn0gYSBuZXcgMngyIG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IDFcbiAgb3V0WzFdID0gMFxuICBvdXRbMl0gPSAwXG4gIG91dFszXSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmRldGVybWluYW50XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICByZXR1cm4gYVswXSAqIGFbM10gLSBhWzJdICogYVsxXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9iXG5cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJcbiAqXG4gKiBAYWxpYXMgbWF0Mi5mcm9iXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXG4gKi9cbmZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgIE1hdGgucG93KGFbMF0sIDIpICtcbiAgICBNYXRoLnBvdyhhWzFdLCAyKSArXG4gICAgTWF0aC5wb3coYVsyXSwgMikgK1xuICAgIE1hdGgucG93KGFbM10sIDIpXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHlcblxuLyoqXG4gKiBTZXQgYSBtYXQyIHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAYWxpYXMgbWF0Mi5pZGVudGl0eVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDFcbiAgb3V0WzFdID0gMFxuICBvdXRbMl0gPSAwXG4gIG91dFszXSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCBpbnZlcnQ6IHJlcXVpcmUoJy4vaW52ZXJ0JylcbiAgLCBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBmcm9iOiByZXF1aXJlKCcuL2Zyb2InKVxuICAsIGxkdTogcmVxdWlyZSgnLi9sZHUnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnRcblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLmludmVydFxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMCA9IGFbMF1cbiAgdmFyIGExID0gYVsxXVxuICB2YXIgYTIgPSBhWzJdXG4gIHZhciBhMyA9IGFbM11cbiAgdmFyIGRldCA9IGEwICogYTMgLSBhMiAqIGExXG5cbiAgaWYgKCFkZXQpIHJldHVybiBudWxsXG4gIGRldCA9IDEuMCAvIGRldFxuXG4gIG91dFswXSA9ICBhMyAqIGRldFxuICBvdXRbMV0gPSAtYTEgKiBkZXRcbiAgb3V0WzJdID0gLWEyICogZGV0XG4gIG91dFszXSA9ICBhMCAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGR1XG5cbi8qKlxuICogUmV0dXJucyBMLCBEIGFuZCBVIG1hdHJpY2VzIChMb3dlciB0cmlhbmd1bGFyLCBEaWFnb25hbCBhbmQgVXBwZXIgdHJpYW5ndWxhcikgYnkgZmFjdG9yaXppbmcgdGhlIGlucHV0IG1hdHJpeFxuICpcbiAqIEBhbGlhcyBtYXQyLmxkdVxuICogQHBhcmFtIHttYXQyfSBMIHRoZSBsb3dlciB0cmlhbmd1bGFyIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBEIHRoZSBkaWFnb25hbCBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gVSB0aGUgdXBwZXIgdHJpYW5ndWxhciBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgaW5wdXQgbWF0cml4IHRvIGZhY3Rvcml6ZVxuICovXG5mdW5jdGlvbiBsZHUoTCwgRCwgVSwgYSkge1xuICBMWzJdID0gYVsyXS9hWzBdXG4gIFVbMF0gPSBhWzBdXG4gIFVbMV0gPSBhWzFdXG4gIFVbM10gPSBhWzNdIC0gTFsyXSAqIFVbMV1cbiAgcmV0dXJuIFtMLCBELCBVXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDInc1xuICpcbiAqIEBhbGlhcyBtYXQyLm11bHRpcGx5XG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdXG4gIHZhciBiMCA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM11cbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjFcbiAgb3V0WzFdID0gYTEgKiBiMCArIGEzICogYjFcbiAgb3V0WzJdID0gYTAgKiBiMiArIGEyICogYjNcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjNcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0MiBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAYWxpYXMgbWF0Mi5yb3RhdGVcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAgPSBhWzBdLCBhMSA9IGFbMV0sIGEyID0gYVsyXSwgYTMgPSBhWzNdXG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKVxuICB2YXIgYyA9IE1hdGguY29zKHJhZClcbiAgb3V0WzBdID0gYTAgKiAgYyArIGEyICogc1xuICBvdXRbMV0gPSBhMSAqICBjICsgYTMgKiBzXG4gIG91dFsyXSA9IGEwICogLXMgKyBhMiAqIGNcbiAgb3V0WzNdID0gYTEgKiAtcyArIGEzICogY1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQyIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXG4gKlxuICogQGFsaWFzIG1hdDIuc2NhbGVcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwID0gYVswXSwgYTEgPSBhWzFdLCBhMiA9IGFbMl0sIGEzID0gYVszXVxuICB2YXIgdjAgPSB2WzBdLCB2MSA9IHZbMV1cbiAgb3V0WzBdID0gYTAgKiB2MFxuICBvdXRbMV0gPSBhMSAqIHYwXG4gIG91dFsyXSA9IGEyICogdjFcbiAgb3V0WzNdID0gYTMgKiB2MVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zcG9zZVxuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0MlxuICpcbiAqIEBhbGlhcyBtYXQyLnRyYW5zcG9zZVxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMSA9IGFbMV1cbiAgICBvdXRbMV0gPSBhWzJdXG4gICAgb3V0WzJdID0gYTFcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsyXVxuICAgIG91dFsyXSA9IGFbMV1cbiAgICBvdXRbM10gPSBhWzNdXG4gIH1cblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnRcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5hZGpvaW50XG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdXG4gIHZhciBhMTAgPSBhWzNdLCBhMTEgPSBhWzRdLCBhMTIgPSBhWzVdXG4gIHZhciBhMjAgPSBhWzZdLCBhMjEgPSBhWzddLCBhMjIgPSBhWzhdXG5cbiAgb3V0WzBdID0gKGExMSAqIGEyMiAtIGExMiAqIGEyMSlcbiAgb3V0WzFdID0gKGEwMiAqIGEyMSAtIGEwMSAqIGEyMilcbiAgb3V0WzJdID0gKGEwMSAqIGExMiAtIGEwMiAqIGExMSlcbiAgb3V0WzNdID0gKGExMiAqIGEyMCAtIGExMCAqIGEyMilcbiAgb3V0WzRdID0gKGEwMCAqIGEyMiAtIGEwMiAqIGEyMClcbiAgb3V0WzVdID0gKGEwMiAqIGExMCAtIGEwMCAqIGExMilcbiAgb3V0WzZdID0gKGExMCAqIGEyMSAtIGExMSAqIGEyMClcbiAgb3V0WzddID0gKGEwMSAqIGEyMCAtIGEwMCAqIGEyMSlcbiAgb3V0WzhdID0gKGEwMCAqIGExMSAtIGEwMSAqIGExMClcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQGFsaWFzIG1hdDMuY2xvbmVcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICBvdXRbNF0gPSBhWzRdXG4gIG91dFs1XSA9IGFbNV1cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDMgdG8gYW5vdGhlclxuICpcbiAqIEBhbGlhcyBtYXQzLmNvcHlcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICBvdXRbNF0gPSBhWzRdXG4gIG91dFs1XSA9IGFbNV1cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5jcmVhdGVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoOSlcbiAgb3V0WzBdID0gMVxuICBvdXRbMV0gPSAwXG4gIG91dFsyXSA9IDBcbiAgb3V0WzNdID0gMFxuICBvdXRbNF0gPSAxXG4gIG91dFs1XSA9IDBcbiAgb3V0WzZdID0gMFxuICBvdXRbN10gPSAwXG4gIG91dFs4XSA9IDFcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBhbGlhcyBtYXQzLmRldGVybWluYW50XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXVxuICB2YXIgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XVxuICB2YXIgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XVxuXG4gIHJldHVybiBhMDAgKiAoYTIyICogYTExIC0gYTEyICogYTIxKVxuICAgICAgICsgYTAxICogKGExMiAqIGEyMCAtIGEyMiAqIGExMClcbiAgICAgICArIGEwMiAqIChhMjEgKiBhMTAgLSBhMTEgKiBhMjApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb2JcblxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0M1xuICpcbiAqIEBhbGlhcyBtYXQzLmZyb2JcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBhWzBdKmFbMF1cbiAgICArIGFbMV0qYVsxXVxuICAgICsgYVsyXSphWzJdXG4gICAgKyBhWzNdKmFbM11cbiAgICArIGFbNF0qYVs0XVxuICAgICsgYVs1XSphWzVdXG4gICAgKyBhWzZdKmFbNl1cbiAgICArIGFbN10qYVs3XVxuICAgICsgYVs4XSphWzhdXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnJvbU1hdDJkXG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMuZnJvbU1hdDJkXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cbmZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IDBcblxuICBvdXRbM10gPSBhWzJdXG4gIG91dFs0XSA9IGFbM11cbiAgb3V0WzVdID0gMFxuXG4gIG91dFs2XSA9IGFbNF1cbiAgb3V0WzddID0gYVs1XVxuICBvdXRbOF0gPSAxXG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tTWF0NFxuXG4vKipcbiAqIENvcGllcyB0aGUgdXBwZXItbGVmdCAzeDMgdmFsdWVzIGludG8gdGhlIGdpdmVuIG1hdDMuXG4gKlxuICogQGFsaWFzIG1hdDMuZnJvbU1hdDRcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21NYXQ0KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzRdXG4gIG91dFs0XSA9IGFbNV1cbiAgb3V0WzVdID0gYVs2XVxuICBvdXRbNl0gPSBhWzhdXG4gIG91dFs3XSA9IGFbOV1cbiAgb3V0WzhdID0gYVsxMF1cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdFxuXG4vKipcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuKlxuKiBAYWxpYXMgbWF0My5mcm9tUXVhdFxuKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXVxuICB2YXIgeSA9IHFbMV1cbiAgdmFyIHogPSBxWzJdXG4gIHZhciB3ID0gcVszXVxuXG4gIHZhciB4MiA9IHggKyB4XG4gIHZhciB5MiA9IHkgKyB5XG4gIHZhciB6MiA9IHogKyB6XG5cbiAgdmFyIHh4ID0geCAqIHgyXG4gIHZhciB5eCA9IHkgKiB4MlxuICB2YXIgeXkgPSB5ICogeTJcbiAgdmFyIHp4ID0geiAqIHgyXG4gIHZhciB6eSA9IHogKiB5MlxuICB2YXIgenogPSB6ICogejJcbiAgdmFyIHd4ID0gdyAqIHgyXG4gIHZhciB3eSA9IHcgKiB5MlxuICB2YXIgd3ogPSB3ICogejJcblxuICBvdXRbMF0gPSAxIC0geXkgLSB6elxuICBvdXRbM10gPSB5eCAtIHd6XG4gIG91dFs2XSA9IHp4ICsgd3lcblxuICBvdXRbMV0gPSB5eCArIHd6XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6XG4gIG91dFs3XSA9IHp5IC0gd3hcblxuICBvdXRbMl0gPSB6eCAtIHd5XG4gIG91dFs1XSA9IHp5ICsgd3hcbiAgb3V0WzhdID0gMSAtIHh4IC0geXlcblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5XG5cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQGFsaWFzIG1hdDMuaWRlbnRpdHlcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxXG4gIG91dFsxXSA9IDBcbiAgb3V0WzJdID0gMFxuICBvdXRbM10gPSAwXG4gIG91dFs0XSA9IDFcbiAgb3V0WzVdID0gMFxuICBvdXRbNl0gPSAwXG4gIG91dFs3XSA9IDBcbiAgb3V0WzhdID0gMVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgZnJvYjogcmVxdWlyZSgnLi9mcm9iJylcbiAgLCBmcm9tTWF0MjogcmVxdWlyZSgnLi9mcm9tLW1hdDInKVxuICAsIGZyb21NYXQ0OiByZXF1aXJlKCcuL2Zyb20tbWF0NCcpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbS1xdWF0JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIG5vcm1hbEZyb21NYXQ0OiByZXF1aXJlKCcuL25vcm1hbC1mcm9tLW1hdDQnKVxuICAsIHJvdGF0ZTogcmVxdWlyZSgnLi9yb3RhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCBzdHI6IHJlcXVpcmUoJy4vc3RyJylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAYWxpYXMgbWF0My5pbnZlcnRcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXVxuICB2YXIgYTEwID0gYVszXSwgYTExID0gYVs0XSwgYTEyID0gYVs1XVxuICB2YXIgYTIwID0gYVs2XSwgYTIxID0gYVs3XSwgYTIyID0gYVs4XVxuXG4gIHZhciBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjFcbiAgdmFyIGIxMSA9IC1hMjIgKiBhMTAgKyBhMTIgKiBhMjBcbiAgdmFyIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMFxuXG4gIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgdmFyIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMVxuXG4gIGlmICghZGV0KSByZXR1cm4gbnVsbFxuICBkZXQgPSAxLjAgLyBkZXRcblxuICBvdXRbMF0gPSBiMDEgKiBkZXRcbiAgb3V0WzFdID0gKC1hMjIgKiBhMDEgKyBhMDIgKiBhMjEpICogZGV0XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0XG4gIG91dFszXSA9IGIxMSAqIGRldFxuICBvdXRbNF0gPSAoYTIyICogYTAwIC0gYTAyICogYTIwKSAqIGRldFxuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXRcbiAgb3V0WzZdID0gYjIxICogZGV0XG4gIG91dFs3XSA9ICgtYTIxICogYTAwICsgYTAxICogYTIwKSAqIGRldFxuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcbiAqXG4gKiBAYWxpYXMgbWF0My5tdWx0aXBseVxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cblxuICB2YXIgYjAwID0gYlswXSwgYjAxID0gYlsxXSwgYjAyID0gYlsyXVxuICB2YXIgYjEwID0gYlszXSwgYjExID0gYls0XSwgYjEyID0gYls1XVxuICB2YXIgYjIwID0gYls2XSwgYjIxID0gYls3XSwgYjIyID0gYls4XVxuXG4gIG91dFswXSA9IGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMFxuICBvdXRbMV0gPSBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjFcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyXG5cbiAgb3V0WzNdID0gYjEwICogYTAwICsgYjExICogYTEwICsgYjEyICogYTIwXG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMVxuICBvdXRbNV0gPSBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjJcblxuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjBcbiAgb3V0WzddID0gYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxXG4gIG91dFs4XSA9IGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMlxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsRnJvbU1hdDRcblxuLyoqXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcbipcbiogQGFsaWFzIG1hdDMubm9ybWFsRnJvbU1hdDRcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuKlxuKiBAcmV0dXJucyB7bWF0M30gb3V0XG4qL1xuZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdXG4gIHZhciBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddXG4gIHZhciBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV1cbiAgdmFyIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdXG5cbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMFxuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwXG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTBcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMVxuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExXG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTJcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMFxuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwXG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzBcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMVxuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxXG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzJcblxuICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gIHZhciBkZXQgPSBiMDAgKiBiMTFcbiAgICAgICAgICAtIGIwMSAqIGIxMFxuICAgICAgICAgICsgYjAyICogYjA5XG4gICAgICAgICAgKyBiMDMgKiBiMDhcbiAgICAgICAgICAtIGIwNCAqIGIwN1xuICAgICAgICAgICsgYjA1ICogYjA2XG5cbiAgaWYgKCFkZXQpIHJldHVybiBudWxsXG4gIGRldCA9IDEuMCAvIGRldFxuXG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0XG4gIG91dFsxXSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0XG5cbiAgb3V0WzNdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXRcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXRcbiAgb3V0WzVdID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXRcblxuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldFxuICBvdXRbN10gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldFxuICBvdXRbOF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldFxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlXG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQGFsaWFzIG1hdDMucm90YXRlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cblxuICB2YXIgcyA9IE1hdGguc2luKHJhZClcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpXG5cbiAgb3V0WzBdID0gYyAqIGEwMCArIHMgKiBhMTBcbiAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTFcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTJcblxuICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMFxuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMVxuICBvdXRbNV0gPSBjICogYTEyIC0gcyAqIGEwMlxuXG4gIG91dFs2XSA9IGEyMFxuICBvdXRbN10gPSBhMjFcbiAgb3V0WzhdID0gYTIyXG5cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZVxuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBhbGlhcyBtYXQzLnNjYWxlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXVxuICB2YXIgeSA9IHZbMV1cblxuICBvdXRbMF0gPSB4ICogYVswXVxuICBvdXRbMV0gPSB4ICogYVsxXVxuICBvdXRbMl0gPSB4ICogYVsyXVxuXG4gIG91dFszXSA9IHkgKiBhWzNdXG4gIG91dFs0XSA9IHkgKiBhWzRdXG4gIG91dFs1XSA9IHkgKiBhWzVdXG5cbiAgb3V0WzZdID0gYVs2XVxuICBvdXRbN10gPSBhWzddXG4gIG91dFs4XSA9IGFbOF1cblxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN0clxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMuc3RyXG4gKiBAcGFyYW0ge21hdDN9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgYVszXSArICcsICcgKyBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICsgYVs4XSArICcpJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGVcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAYWxpYXMgbWF0My50cmFuc2xhdGVcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjMn0gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl1cbiAgdmFyIGExMCA9IGFbM10sIGExMSA9IGFbNF0sIGExMiA9IGFbNV1cbiAgdmFyIGEyMCA9IGFbNl0sIGEyMSA9IGFbN10sIGEyMiA9IGFbOF1cbiAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXVxuXG4gIG91dFswXSA9IGEwMFxuICBvdXRbMV0gPSBhMDFcbiAgb3V0WzJdID0gYTAyXG5cbiAgb3V0WzNdID0gYTEwXG4gIG91dFs0XSA9IGExMVxuICBvdXRbNV0gPSBhMTJcblxuICBvdXRbNl0gPSB4ICogYTAwICsgeSAqIGExMCArIGEyMFxuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMVxuICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMlxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlXG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXG4gKlxuICogQGFsaWFzIG1hdDMudHJhbnNwb3NlXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGExMiA9IGFbNV1cbiAgICBvdXRbMV0gPSBhWzNdXG4gICAgb3V0WzJdID0gYVs2XVxuICAgIG91dFszXSA9IGEwMVxuICAgIG91dFs1XSA9IGFbN11cbiAgICBvdXRbNl0gPSBhMDJcbiAgICBvdXRbN10gPSBhMTJcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVszXVxuICAgIG91dFsyXSA9IGFbNl1cbiAgICBvdXRbM10gPSBhWzFdXG4gICAgb3V0WzRdID0gYVs0XVxuICAgIG91dFs1XSA9IGFbN11cbiAgICBvdXRbNl0gPSBhWzJdXG4gICAgb3V0WzddID0gYVs1XVxuICAgIG91dFs4XSA9IGFbOF1cbiAgfVxuXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gYWRqb2ludDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICBvdXRbMF0gID0gIChhMTEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFsxXSAgPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzJdICA9ICAoYTAxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbM10gID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs0XSAgPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzVdICA9ICAoYTAwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbNl0gID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs3XSAgPSAgKGEwMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTEwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzhdICA9ICAoYTEwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpKTtcbiAgICBvdXRbOV0gID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICAgIG91dFsxMF0gPSAgKGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICAgIG91dFsxM10gPSAgKGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSk7XG4gICAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICBvdXRbMTVdID0gIChhMDAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5hbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgIHJldHVybiBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVF1YXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB5eCA9IHkgKiB4MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHp4ID0geiAqIHgyLFxuICAgICAgICB6eSA9IHogKiB5MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgICBvdXRbMV0gPSB5eCArIHd6O1xuICAgIG91dFsyXSA9IHp4IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcblxuICAgIG91dFs0XSA9IHl4IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtIHh4IC0geno7XG4gICAgb3V0WzZdID0genkgKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuXG4gICAgb3V0WzhdID0genggKyB3eTtcbiAgICBvdXRbOV0gPSB6eSAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICBvdXRbMTFdID0gMDtcblxuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgdmFyIHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHt2ZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHh5ID0geCAqIHkyLFxuICAgICAgICB4eiA9IHggKiB6MixcbiAgICAgICAgeXkgPSB5ICogeTIsXG4gICAgICAgIHl6ID0geSAqIHoyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSAoeXkgKyB6eik7XG4gICAgb3V0WzFdID0geHkgKyB3ejtcbiAgICBvdXRbMl0gPSB4eiAtIHd5O1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geHkgLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICAgIG91dFs2XSA9IHl6ICsgd3g7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4eiArIHd5O1xuICAgIG91dFs5XSA9IHl6IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IHZbMF07XG4gICAgb3V0WzEzXSA9IHZbMV07XG4gICAgb3V0WzE0XSA9IHZbMl07XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcnVzdHVtO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgcmwgPSAxIC8gKHJpZ2h0IC0gbGVmdCksXG4gICAgICAgIHRiID0gMSAvICh0b3AgLSBib3R0b20pLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gKG5lYXIgKiAyKSAqIHJsO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gKG5lYXIgKiAyKSAqIHRiO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAocmlnaHQgKyBsZWZ0KSAqIHJsO1xuICAgIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIgKiAyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgaWRlbnRpdHk6IHJlcXVpcmUoJy4vaWRlbnRpdHknKVxuICAsIHRyYW5zcG9zZTogcmVxdWlyZSgnLi90cmFuc3Bvc2UnKVxuICAsIGludmVydDogcmVxdWlyZSgnLi9pbnZlcnQnKVxuICAsIGFkam9pbnQ6IHJlcXVpcmUoJy4vYWRqb2ludCcpXG4gICwgZGV0ZXJtaW5hbnQ6IHJlcXVpcmUoJy4vZGV0ZXJtaW5hbnQnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCB0cmFuc2xhdGU6IHJlcXVpcmUoJy4vdHJhbnNsYXRlJylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgcm90YXRlOiByZXF1aXJlKCcuL3JvdGF0ZScpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb246IHJlcXVpcmUoJy4vZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24nKVxuICAsIGZyb21RdWF0OiByZXF1aXJlKCcuL2Zyb21RdWF0JylcbiAgLCBmcnVzdHVtOiByZXF1aXJlKCcuL2ZydXN0dW0nKVxuICAsIHBlcnNwZWN0aXZlOiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlJylcbiAgLCBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldzogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldycpXG4gICwgb3J0aG86IHJlcXVpcmUoJy4vb3J0aG8nKVxuICAsIGxvb2tBdDogcmVxdWlyZSgnLi9sb29rQXQnKVxuICAsIHN0cjogcmVxdWlyZSgnLi9zdHInKVxufSIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJ0O1xuXG4vKipcbiAqIEludmVydHMgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMixcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgICAgIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICAgIGlmICghZGV0KSB7IFxuICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgfVxuICAgIGRldCA9IDEuMCAvIGRldDtcblxuICAgIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICAgIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICAgIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICAgIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICAgIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICAgIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICAgIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICAgIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICAgIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICAgIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICAgIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvb2tBdDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxuICogQHBhcmFtIHt2ZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICAgIHZhciB4MCwgeDEsIHgyLCB5MCwgeTEsIHkyLCB6MCwgejEsIHoyLCBsZW4sXG4gICAgICAgIGV5ZXggPSBleWVbMF0sXG4gICAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICAgIGV5ZXogPSBleWVbMl0sXG4gICAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgICB1cHkgPSB1cFsxXSxcbiAgICAgICAgdXB6ID0gdXBbMl0sXG4gICAgICAgIGNlbnRlcnggPSBjZW50ZXJbMF0sXG4gICAgICAgIGNlbnRlcnkgPSBjZW50ZXJbMV0sXG4gICAgICAgIGNlbnRlcnogPSBjZW50ZXJbMl07XG5cbiAgICBpZiAoTWF0aC5hYnMoZXlleCAtIGNlbnRlcngpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleSAtIGNlbnRlcnkpIDwgMC4wMDAwMDEgJiZcbiAgICAgICAgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5KG91dCk7XG4gICAgfVxuXG4gICAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgICB6MSA9IGV5ZXkgLSBjZW50ZXJ5O1xuICAgIHoyID0gZXlleiAtIGNlbnRlcno7XG5cbiAgICBsZW4gPSAxIC8gTWF0aC5zcXJ0KHowICogejAgKyB6MSAqIHoxICsgejIgKiB6Mik7XG4gICAgejAgKj0gbGVuO1xuICAgIHoxICo9IGxlbjtcbiAgICB6MiAqPSBsZW47XG5cbiAgICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gICAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB4MCA9IDA7XG4gICAgICAgIHgxID0gMDtcbiAgICAgICAgeDIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHgwICo9IGxlbjtcbiAgICAgICAgeDEgKj0gbGVuO1xuICAgICAgICB4MiAqPSBsZW47XG4gICAgfVxuXG4gICAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICAgIHkyID0gejAgKiB4MSAtIHoxICogeDA7XG5cbiAgICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcbiAgICBpZiAoIWxlbikge1xuICAgICAgICB5MCA9IDA7XG4gICAgICAgIHkxID0gMDtcbiAgICAgICAgeTIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbiA9IDEgLyBsZW47XG4gICAgICAgIHkwICo9IGxlbjtcbiAgICAgICAgeTEgKj0gbGVuO1xuICAgICAgICB5MiAqPSBsZW47XG4gICAgfVxuXG4gICAgb3V0WzBdID0geDA7XG4gICAgb3V0WzFdID0geTA7XG4gICAgb3V0WzJdID0gejA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4MTtcbiAgICBvdXRbNV0gPSB5MTtcbiAgICBvdXRbNl0gPSB6MTtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHgyO1xuICAgIG91dFs5XSA9IHkyO1xuICAgIG91dFsxMF0gPSB6MjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gLSh4MCAqIGV5ZXggKyB4MSAqIGV5ZXkgKyB4MiAqIGV5ZXopO1xuICAgIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gICAgb3V0WzE0XSA9IC0oejAgKiBleWV4ICsgejEgKiBleWV5ICsgejIgKiBleWV6KTtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gb3J0aG87XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KSxcbiAgICAgICAgYnQgPSAxIC8gKGJvdHRvbSAtIHRvcCksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAtMiAqIGxyO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gLTIgKiBidDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAyICogbmY7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gICAgb3V0WzEzXSA9ICh0b3AgKyBib3R0b20pICogYnQ7XG4gICAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmU7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdnkgVmVydGljYWwgZmllbGQgb2YgdmlldyBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICAgIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gZiAvIGFzcGVjdDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IGY7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoMiAqIGZhciAqIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxuICogVGhpcyBpcyBwcmltYXJpbHkgdXNlZnVsIGZvciBnZW5lcmF0aW5nIHByb2plY3Rpb24gbWF0cmljZXMgdG8gYmUgdXNlZFxuICogd2l0aCB0aGUgc3RpbGwgZXhwZXJpZW1lbnRhbCBXZWJWUiBBUEkuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGZvdiBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIHZhbHVlczogdXBEZWdyZWVzLCBkb3duRGVncmVlcywgbGVmdERlZ3JlZXMsIHJpZ2h0RGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICAgIHZhciB1cFRhbiA9IE1hdGgudGFuKGZvdi51cERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgZG93blRhbiA9IE1hdGgudGFuKGZvdi5kb3duRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBsZWZ0VGFuID0gTWF0aC50YW4oZm92LmxlZnREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHJpZ2h0VGFuID0gTWF0aC50YW4oZm92LnJpZ2h0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICB4U2NhbGUgPSAyLjAgLyAobGVmdFRhbiArIHJpZ2h0VGFuKSxcbiAgICAgICAgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG5cbiAgICBvdXRbMF0gPSB4U2NhbGU7XG4gICAgb3V0WzFdID0gMC4wO1xuICAgIG91dFsyXSA9IDAuMDtcbiAgICBvdXRbM10gPSAwLjA7XG4gICAgb3V0WzRdID0gMC4wO1xuICAgIG91dFs1XSA9IHlTY2FsZTtcbiAgICBvdXRbNl0gPSAwLjA7XG4gICAgb3V0WzddID0gMC4wO1xuICAgIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICAgIG91dFs5XSA9ICgodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTFdID0gLTEuMDtcbiAgICBvdXRbMTJdID0gMC4wO1xuICAgIG91dFsxM10gPSAwLjA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTVdID0gMC4wO1xuICAgIHJldHVybiBvdXQ7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXQ0IGJ5IHRoZSBnaXZlbiBhbmdsZVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgICB2YXIgeCA9IGF4aXNbMF0sIHkgPSBheGlzWzFdLCB6ID0gYXhpc1syXSxcbiAgICAgICAgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiksXG4gICAgICAgIHMsIGMsIHQsXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjMsXG4gICAgICAgIGIwMCwgYjAxLCBiMDIsXG4gICAgICAgIGIxMCwgYjExLCBiMTIsXG4gICAgICAgIGIyMCwgYjIxLCBiMjI7XG5cbiAgICBpZiAoTWF0aC5hYnMobGVuKSA8IDAuMDAwMDAxKSB7IHJldHVybiBudWxsOyB9XG4gICAgXG4gICAgbGVuID0gMSAvIGxlbjtcbiAgICB4ICo9IGxlbjtcbiAgICB5ICo9IGxlbjtcbiAgICB6ICo9IGxlbjtcblxuICAgIHMgPSBNYXRoLnNpbihyYWQpO1xuICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICAgIHQgPSAxIC0gYztcblxuICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcbiAgICBiMDAgPSB4ICogeCAqIHQgKyBjOyBiMDEgPSB5ICogeCAqIHQgKyB6ICogczsgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHM7IGIxMSA9IHkgKiB5ICogdCArIGM7IGIxMiA9IHogKiB5ICogdCArIHggKiBzO1xuICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzOyBiMjEgPSB5ICogeiAqIHQgLSB4ICogczsgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgIG91dFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gICAgb3V0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyO1xuICAgIG91dFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMjtcbiAgICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgb3V0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgIG91dFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMjtcbiAgICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgb3V0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyO1xuICAgIG91dFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVg7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFswXSAgPSBhWzBdO1xuICAgICAgICBvdXRbMV0gID0gYVsxXTtcbiAgICAgICAgb3V0WzJdICA9IGFbMl07XG4gICAgICAgIG91dFszXSAgPSBhWzNdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgKyBhMjEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEyMCAqIGMgLSBhMTAgKiBzO1xuICAgIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICAgIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgICBvdXRbMTFdID0gYTIzICogYyAtIGExMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbNF0gID0gYVs0XTtcbiAgICAgICAgb3V0WzVdICA9IGFbNV07XG4gICAgICAgIG91dFs2XSAgPSBhWzZdO1xuICAgICAgICBvdXRbN10gID0gYVs3XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjIC0gYTIwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjIC0gYTIzICogcztcbiAgICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgICBvdXRbMTBdID0gYTAyICogcyArIGEyMiAqIGM7XG4gICAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVoob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbOF0gID0gYVs4XTtcbiAgICAgICAgb3V0WzldICA9IGFbOV07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgKyBhMTEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgKyBhMTIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICAgIG91dFs0XSA9IGExMCAqIGMgLSBhMDAgKiBzO1xuICAgIG91dFs1XSA9IGExMSAqIGMgLSBhMDEgKiBzO1xuICAgIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICAgIG91dFs3XSA9IGExMyAqIGMgLSBhMDMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc3RyO1xuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBtYXQgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gc3RyKGEpIHtcbiAgICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgXG4gICAgICAgICAgICAgICAgICAgIGFbMTJdICsgJywgJyArIGFbMTNdICsgJywgJyArIGFbMTRdICsgJywgJyArIGFbMTVdICsgJyknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNwb3NlO1xuXG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAgIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgICBpZiAob3V0ID09PSBhKSB7XG4gICAgICAgIHZhciBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICAgICAgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhMDE7XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhMDI7XG4gICAgICAgIG91dFs5XSA9IGExMjtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYTAzO1xuICAgICAgICBvdXRbMTNdID0gYTEzO1xuICAgICAgICBvdXRbMTRdID0gYTIzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dFswXSA9IGFbMF07XG4gICAgICAgIG91dFsxXSA9IGFbNF07XG4gICAgICAgIG91dFsyXSA9IGFbOF07XG4gICAgICAgIG91dFszXSA9IGFbMTJdO1xuICAgICAgICBvdXRbNF0gPSBhWzFdO1xuICAgICAgICBvdXRbNV0gPSBhWzVdO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYVsyXTtcbiAgICAgICAgb3V0WzldID0gYVs2XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhWzNdO1xuICAgICAgICBvdXRbMTNdID0gYVs3XTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMilcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMiB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMlxuICpcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDIpXG4gICAgb3V0WzBdID0gMFxuICAgIG91dFsxXSA9IDBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcm9zc1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqIE5vdGUgdGhhdCB0aGUgY3Jvc3MgcHJvZHVjdCBtdXN0IGJ5IGRlZmluaXRpb24gcHJvZHVjZSBhIDNEIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gY3Jvc3Mob3V0LCBhLCBiKSB7XG4gICAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdXG4gICAgb3V0WzBdID0gb3V0WzFdID0gMFxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGVcblxuLyoqXG4gKiBEaXZpZGVzIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLyBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZG90IHByb2R1Y3Qgb2YgYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkb3QoYSwgYikge1xuICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoXG5cbnZhciB2ZWMgPSByZXF1aXJlKCcuL2NyZWF0ZScpKClcblxuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjMnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMi4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzJzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsXG4gICAgaWYoIXN0cmlkZSkge1xuICAgICAgICBzdHJpZGUgPSAyXG4gICAgfVxuXG4gICAgaWYoIW9mZnNldCkge1xuICAgICAgICBvZmZzZXQgPSAwXG4gICAgfVxuICAgIFxuICAgIGlmKGNvdW50KSB7XG4gICAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgICBsID0gYS5sZW5ndGhcbiAgICB9XG5cbiAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgIHZlY1swXSA9IGFbaV1cbiAgICAgICAgdmVjWzFdID0gYVtpKzFdXG4gICAgICAgIGZuKHZlYywgdmVjLCBhcmcpXG4gICAgICAgIGFbaV0gPSB2ZWNbMF1cbiAgICAgICAgYVtpKzFdID0gdmVjWzFdXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHkpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgyKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgZnJvbVZhbHVlczogcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIHNldDogcmVxdWlyZSgnLi9zZXQnKVxuICAsIGFkZDogcmVxdWlyZSgnLi9hZGQnKVxuICAsIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgZGl2aWRlOiByZXF1aXJlKCcuL2RpdmlkZScpXG4gICwgbWluOiByZXF1aXJlKCcuL21pbicpXG4gICwgbWF4OiByZXF1aXJlKCcuL21heCcpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJylcbiAgLCBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpXG4gICwgc3F1YXJlZERpc3RhbmNlOiByZXF1aXJlKCcuL3NxdWFyZWREaXN0YW5jZScpXG4gICwgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpXG4gICwgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJylcbiAgLCBuZWdhdGU6IHJlcXVpcmUoJy4vbmVnYXRlJylcbiAgLCBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbiAgLCBkb3Q6IHJlcXVpcmUoJy4vZG90JylcbiAgLCBjcm9zczogcmVxdWlyZSgnLi9jcm9zcycpXG4gICwgbGVycDogcmVxdWlyZSgnLi9sZXJwJylcbiAgLCByYW5kb206IHJlcXVpcmUoJy4vcmFuZG9tJylcbiAgLCB0cmFuc2Zvcm1NYXQyOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDInKVxuICAsIHRyYW5zZm9ybU1hdDJkOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDJkJylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KVxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVycFxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXVxuICAgIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gICAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXhcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gdmVjMidzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICogYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKiBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlXG5cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICAgIG91dFswXSA9IC1hWzBdXG4gICAgb3V0WzFdID0gLWFbMV1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gbm9ybWFsaXplXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeVxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICB9XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcmFuZG9tXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDIuMCAqIE1hdGguUElcbiAgICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiBzY2FsZVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMiBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZFxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2V0XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzZXQob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2VcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdXG4gICAgcmV0dXJuIHgqeCArIHkqeVxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICByZXR1cm4geCp4ICsgeSp5XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MlxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDJ9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDIob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHlcbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0MmRcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyZFxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0M1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDNcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQzfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFkZDtcblxuLyoqXG4gKiBBZGRzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICAgIG91dFsxXSA9IGFbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSArIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBhbmdsZVxuXG52YXIgZnJvbVZhbHVlcyA9IHJlcXVpcmUoJy4vZnJvbVZhbHVlcycpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIGRvdCA9IHJlcXVpcmUoJy4vZG90JylcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICAgIHZhciB0ZW1wQSA9IGZyb21WYWx1ZXMoYVswXSwgYVsxXSwgYVsyXSlcbiAgICB2YXIgdGVtcEIgPSBmcm9tVmFsdWVzKGJbMF0sIGJbMV0sIGJbMl0pXG4gXG4gICAgbm9ybWFsaXplKHRlbXBBLCB0ZW1wQSlcbiAgICBub3JtYWxpemUodGVtcEIsIHRlbXBCKVxuIFxuICAgIHZhciBjb3NpbmUgPSBkb3QodGVtcEEsIHRlbXBCKVxuXG4gICAgaWYoY29zaW5lID4gMS4wKXtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc2luZSlcbiAgICB9ICAgICBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSBhWzBdXG4gICAgb3V0WzFdID0gYVsxXVxuICAgIG91dFsyXSA9IGFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMzIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IDBcbiAgICBvdXRbMV0gPSAwXG4gICAgb3V0WzJdID0gMFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyb3NzO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICAgIHZhciBheCA9IGFbMF0sIGF5ID0gYVsxXSwgYXogPSBhWzJdLFxuICAgICAgICBieCA9IGJbMF0sIGJ5ID0gYlsxXSwgYnogPSBiWzJdXG5cbiAgICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieVxuICAgIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6XG4gICAgb3V0WzJdID0gYXggKiBieSAtIGF5ICogYnhcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59IiwibW9kdWxlLmV4cG9ydHMgPSBkaXZpZGU7XG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAvIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gLyBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZG90O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuXG52YXIgdmVjID0gcmVxdWlyZSgnLi9jcmVhdGUnKSgpXG5cbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzNzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzMuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMzcyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICAgICAgdmFyIGksIGxcbiAgICAgICAgaWYoIXN0cmlkZSkge1xuICAgICAgICAgICAgc3RyaWRlID0gM1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW9mZnNldCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjb3VudCkge1xuICAgICAgICAgICAgbCA9IE1hdGgubWluKChjb3VudCAqIHN0cmlkZSkgKyBvZmZzZXQsIGEubGVuZ3RoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbCA9IGEubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBmb3IoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICAgICAgICB2ZWNbMF0gPSBhW2ldIFxuICAgICAgICAgICAgdmVjWzFdID0gYVtpKzFdIFxuICAgICAgICAgICAgdmVjWzJdID0gYVtpKzJdXG4gICAgICAgICAgICBmbih2ZWMsIHZlYywgYXJnKVxuICAgICAgICAgICAgYVtpXSA9IHZlY1swXSBcbiAgICAgICAgICAgIGFbaSsxXSA9IHZlY1sxXSBcbiAgICAgICAgICAgIGFbaSsyXSA9IHZlY1syXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVZhbHVlcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgzKVxuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpXG4gICwgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKVxuICAsIGFuZ2xlOiByZXF1aXJlKCcuL2FuZ2xlJylcbiAgLCBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxuICAsIGNvcHk6IHJlcXVpcmUoJy4vY29weScpXG4gICwgc2V0OiByZXF1aXJlKCcuL3NldCcpXG4gICwgYWRkOiByZXF1aXJlKCcuL2FkZCcpXG4gICwgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKVxuICAsIG11bHRpcGx5OiByZXF1aXJlKCcuL211bHRpcGx5JylcbiAgLCBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJylcbiAgLCBtaW46IHJlcXVpcmUoJy4vbWluJylcbiAgLCBtYXg6IHJlcXVpcmUoJy4vbWF4JylcbiAgLCBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpXG4gICwgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKVxuICAsIGRpc3RhbmNlOiByZXF1aXJlKCcuL2Rpc3RhbmNlJylcbiAgLCBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJylcbiAgLCBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJylcbiAgLCBzcXVhcmVkTGVuZ3RoOiByZXF1aXJlKCcuL3NxdWFyZWRMZW5ndGgnKVxuICAsIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKVxuICAsIGludmVyc2U6IHJlcXVpcmUoJy4vaW52ZXJzZScpXG4gICwgbm9ybWFsaXplOiByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG4gICwgZG90OiByZXF1aXJlKCcuL2RvdCcpXG4gICwgY3Jvc3M6IHJlcXVpcmUoJy4vY3Jvc3MnKVxuICAsIGxlcnA6IHJlcXVpcmUoJy4vbGVycCcpXG4gICwgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpXG4gICwgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JylcbiAgLCB0cmFuc2Zvcm1NYXQzOiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDMnKVxuICAsIHRyYW5zZm9ybVF1YXQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtUXVhdCcpXG4gICwgcm90YXRlWDogcmVxdWlyZSgnLi9yb3RhdGVYJylcbiAgLCByb3RhdGVZOiByZXF1aXJlKCcuL3JvdGF0ZVknKVxuICAsIHJvdGF0ZVo6IHJlcXVpcmUoJy4vcm90YXRlWicpXG4gICwgZm9yRWFjaDogcmVxdWlyZSgnLi9mb3JFYWNoJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVyc2U7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBpbnZlcnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXVxuICBvdXRbMV0gPSAxLjAgLyBhWzFdXG4gIG91dFsyXSA9IDEuMCAvIGFbMl1cbiAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeilcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlcnA7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gICAgdmFyIGF4ID0gYVswXSxcbiAgICAgICAgYXkgPSBhWzFdLFxuICAgICAgICBheiA9IGFbMl1cbiAgICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KVxuICAgIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gICAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheilcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtYXg7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSlcbiAgICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICAgIG91dFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWluO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKiBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbmVnYXRlO1xuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSAtYVswXVxuICAgIG91dFsxXSA9IC1hWzFdXG4gICAgb3V0WzJdID0gLWFbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemU7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gICAgdmFyIHggPSBhWzBdLFxuICAgICAgICB5ID0gYVsxXSxcbiAgICAgICAgeiA9IGFbMl1cbiAgICB2YXIgbGVuID0geCp4ICsgeSp5ICsgeip6XG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgLy9UT0RPOiBldmFsdWF0ZSB1c2Ugb2YgZ2xtX2ludnNxcnQgaGVyZT9cbiAgICAgICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgICAgIG91dFswXSA9IGFbMF0gKiBsZW5cbiAgICAgICAgb3V0WzFdID0gYVsxXSAqIGxlblxuICAgICAgICBvdXRbMl0gPSBhWzJdICogbGVuXG4gICAgfVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICAgIHNjYWxlID0gc2NhbGUgfHwgMS4wXG5cbiAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAyLjAgKiBNYXRoLlBJXG4gICAgdmFyIHogPSAoTWF0aC5yYW5kb20oKSAqIDIuMCkgLSAxLjBcbiAgICB2YXIgelNjYWxlID0gTWF0aC5zcXJ0KDEuMC16KnopICogc2NhbGVcblxuICAgIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlXG4gICAgb3V0WzFdID0gTWF0aC5zaW4ocikgKiB6U2NhbGVcbiAgICBvdXRbMl0gPSB6ICogc2NhbGVcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cblxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdXG4gICAgclsxXSA9IHBbMV0qTWF0aC5jb3MoYykgLSBwWzJdKk1hdGguc2luKGMpXG4gICAgclsyXSA9IHBbMV0qTWF0aC5zaW4oYykgKyBwWzJdKk1hdGguY29zKGMpXG5cbiAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgb3V0WzBdID0gclswXSArIGJbMF1cbiAgICBvdXRbMV0gPSByWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IHJbMl0gKyBiWzJdXG5cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVZO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMl0qTWF0aC5zaW4oYykgKyBwWzBdKk1hdGguY29zKGMpXG4gICAgclsxXSA9IHBbMV1cbiAgICByWzJdID0gcFsyXSpNYXRoLmNvcyhjKSAtIHBbMF0qTWF0aC5zaW4oYylcbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge3ZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgYyl7XG4gICAgdmFyIHAgPSBbXSwgcj1bXVxuICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICBwWzBdID0gYVswXSAtIGJbMF1cbiAgICBwWzFdID0gYVsxXSAtIGJbMV1cbiAgICBwWzJdID0gYVsyXSAtIGJbMl1cbiAgXG4gICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgclswXSA9IHBbMF0qTWF0aC5jb3MoYykgLSBwWzFdKk1hdGguc2luKGMpXG4gICAgclsxXSA9IHBbMF0qTWF0aC5zaW4oYykgKyBwWzFdKk1hdGguY29zKGMpXG4gICAgclsyXSA9IHBbMl1cbiAgXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuICBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMzIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSAqIGJcbiAgICBvdXRbMV0gPSBhWzFdICogYlxuICAgIG91dFsyXSA9IGFbMl0gKiBiXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbmRBZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgICBvdXRbMl0gPSBhWzJdICsgKGJbMl0gKiBzY2FsZSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gICAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgICAgICB6ID0gYlsyXSAtIGFbMl1cbiAgICByZXR1cm4geCp4ICsgeSp5ICsgeip6XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkTGVuZ3RoO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufSIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3Q7XG5cbi8qKlxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAtIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDM7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge21hdDR9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0MyhvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXVxuICAgIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XVxuICAgIG91dFsxXSA9IHggKiBtWzFdICsgeSAqIG1bNF0gKyB6ICogbVs3XVxuICAgIG91dFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNV0gKyB6ICogbVs4XVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cbiAqIDR0aCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdXG4gICAgdyA9IHcgfHwgMS4wXG4gICAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHdcbiAgICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gd1xuICAgIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gd1xuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybVF1YXQ7XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gICAgLy8gYmVuY2htYXJrczogaHR0cDovL2pzcGVyZi5jb20vcXVhdGVybmlvbi10cmFuc2Zvcm0tdmVjMy1pbXBsZW1lbnRhdGlvbnNcblxuICAgIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgICAgICBxeCA9IHFbMF0sIHF5ID0gcVsxXSwgcXogPSBxWzJdLCBxdyA9IHFbM10sXG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICAgICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgICAgIGl5ID0gcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6LFxuICAgICAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICAgICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6XG5cbiAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeVxuICAgIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXpcbiAgICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gYWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBhZGQgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXVxuICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICBvdXRbMl0gPSBhWzJdICsgYlsyXVxuICBvdXRbM10gPSBhWzNdICsgYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBjbG9uZVxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBjbG9uZSAoYSkge1xuICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSg0KVxuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY29weVxuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkgKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdXG4gIG91dFsxXSA9IGFbMV1cbiAgb3V0WzJdID0gYVsyXVxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjNFxuICpcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY3JlYXRlICgpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0gMFxuICBvdXRbMV0gPSAwXG4gIG91dFsyXSA9IDBcbiAgb3V0WzNdID0gMFxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlIChhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICB3ID0gYlszXSAtIGFbM11cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZGl2aWRlXG5cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBkaXZpZGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXVxuICBvdXRbMV0gPSBhWzFdIC8gYlsxXVxuICBvdXRbMl0gPSBhWzJdIC8gYlsyXVxuICBvdXRbM10gPSBhWzNdIC8gYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRvdFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gZG90IChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tVmFsdWVzXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWM0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGZyb21WYWx1ZXMgKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0geFxuICBvdXRbMV0gPSB5XG4gIG91dFsyXSA9IHpcbiAgb3V0WzNdID0gd1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiByZXF1aXJlKCcuL2NyZWF0ZScpLFxuICBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpLFxuICBmcm9tVmFsdWVzOiByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKSxcbiAgY29weTogcmVxdWlyZSgnLi9jb3B5JyksXG4gIHNldDogcmVxdWlyZSgnLi9zZXQnKSxcbiAgYWRkOiByZXF1aXJlKCcuL2FkZCcpLFxuICBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zdWJ0cmFjdCcpLFxuICBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpLFxuICBkaXZpZGU6IHJlcXVpcmUoJy4vZGl2aWRlJyksXG4gIG1pbjogcmVxdWlyZSgnLi9taW4nKSxcbiAgbWF4OiByZXF1aXJlKCcuL21heCcpLFxuICBzY2FsZTogcmVxdWlyZSgnLi9zY2FsZScpLFxuICBzY2FsZUFuZEFkZDogcmVxdWlyZSgnLi9zY2FsZUFuZEFkZCcpLFxuICBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpLFxuICBzcXVhcmVkRGlzdGFuY2U6IHJlcXVpcmUoJy4vc3F1YXJlZERpc3RhbmNlJyksXG4gIGxlbmd0aDogcmVxdWlyZSgnLi9sZW5ndGgnKSxcbiAgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJyksXG4gIG5lZ2F0ZTogcmVxdWlyZSgnLi9uZWdhdGUnKSxcbiAgaW52ZXJzZTogcmVxdWlyZSgnLi9pbnZlcnNlJyksXG4gIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKSxcbiAgZG90OiByZXF1aXJlKCcuL2RvdCcpLFxuICBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKSxcbiAgcmFuZG9tOiByZXF1aXJlKCcuL3JhbmRvbScpLFxuICB0cmFuc2Zvcm1NYXQ0OiByZXF1aXJlKCcuL3RyYW5zZm9ybU1hdDQnKSxcbiAgdHJhbnNmb3JtUXVhdDogcmVxdWlyZSgnLi90cmFuc2Zvcm1RdWF0Jylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW52ZXJzZVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVyc2UgKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdXG4gIG91dFsxXSA9IDEuMCAvIGFbMV1cbiAgb3V0WzJdID0gMS4wIC8gYVsyXVxuICBvdXRbM10gPSAxLjAgLyBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGVuZ3RoXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwXG5cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGxlcnAgKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdLFxuICAgIGF5ID0gYVsxXSxcbiAgICBheiA9IGFbMl0sXG4gICAgYXcgPSBhWzNdXG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpXG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpXG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopXG4gIG91dFszXSA9IGF3ICsgdCAqIChiWzNdIC0gYXcpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWF4XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBtYXggKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKVxuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKVxuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKVxuICBvdXRbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pblxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbWluIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSlcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSlcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSlcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXVxuICBvdXRbMV0gPSBhWzFdICogYlsxXVxuICBvdXRbMl0gPSBhWzJdICogYlsyXVxuICBvdXRbM10gPSBhWzNdICogYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5lZ2F0ZVxuXG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gbmVnYXRlXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG5lZ2F0ZSAob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdXG4gIG91dFsxXSA9IC1hWzFdXG4gIG91dFsyXSA9IC1hWzJdXG4gIG91dFszXSA9IC1hWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBub3JtYWxpemUgKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pXG4gICAgb3V0WzBdID0geCAqIGxlblxuICAgIG91dFsxXSA9IHkgKiBsZW5cbiAgICBvdXRbMl0gPSB6ICogbGVuXG4gICAgb3V0WzNdID0gdyAqIGxlblxuICB9XG4gIHJldHVybiBvdXRcbn1cbiIsInZhciB2ZWNOb3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgdmVjU2NhbGUgPSByZXF1aXJlKCcuL3NjYWxlJylcblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb21cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiByYW5kb20gKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjBcblxuICAvLyBUT0RPOiBUaGlzIGlzIGEgcHJldHR5IGF3ZnVsIHdheSBvZiBkb2luZyB0aGlzLiBGaW5kIHNvbWV0aGluZyBiZXR0ZXIuXG4gIG91dFswXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzFdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbMl0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFszXSA9IE1hdGgucmFuZG9tKClcbiAgdmVjTm9ybWFsaXplKG91dCwgb3V0KVxuICB2ZWNTY2FsZShvdXQsIG91dCwgc2NhbGUpXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGVcblxuLyoqXG4gKiBTY2FsZXMgYSB2ZWM0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2NhbGUgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlxuICBvdXRbMV0gPSBhWzFdICogYlxuICBvdXRbMl0gPSBhWzJdICogYlxuICBvdXRbM10gPSBhWzNdICogYlxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkXG5cbi8qKlxuICogQWRkcyB0d28gdmVjNCdzIGFmdGVyIHNjYWxpbmcgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkIChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyAoYlswXSAqIHNjYWxlKVxuICBvdXRbMV0gPSBhWzFdICsgKGJbMV0gKiBzY2FsZSlcbiAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gIG91dFszXSA9IGFbM10gKyAoYlszXSAqIHNjYWxlKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNldFxuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzZXQgKG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4XG4gIG91dFsxXSA9IHlcbiAgb3V0WzJdID0gelxuICBvdXRbM10gPSB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZERpc3RhbmNlXG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UgKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgeiA9IGJbMl0gLSBhWzJdLFxuICAgIHcgPSBiWzNdIC0gYVszXVxuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIHNxdWFyZWRMZW5ndGggKGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzdWJ0cmFjdFxuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdCAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdXG4gIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdXG4gIG91dFszXSA9IGFbM10gLSBiWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtTWF0NFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIG1hdDQuXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0IChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sIHcgPSBhWzNdXG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogd1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHdcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogd1xuICBvdXRbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3XG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtUXVhdFxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWF0IChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl0sXG4gICAgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdLFxuXG4gICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcbiAgICBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeSxcbiAgICBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogeixcbiAgICBpeiA9IHF3ICogeiArIHF4ICogeSAtIHF5ICogeCxcbiAgICBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHpcblxuICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXlcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xelxuICBvdXRbMl0gPSBpeiAqIHF3ICsgaXcgKiAtcXogKyBpeCAqIC1xeSAtIGl5ICogLXF4XG4gIG91dFszXSA9IGFbM11cbiAgcmV0dXJuIG91dFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aFV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL3BhdGgnKSxcbiAgYXJyYXlVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hcnJheScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IGFycmF5Mi5sZW5ndGgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydCA9IC0xO1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmaXJzdDogZmlyc3QsXG4gIHNlY29uZDogc2Vjb25kLFxuICB0aGlyZDogdGhpcmQsXG4gIGZvdXJ0aDogZm91cnRoLFxuICBmaWZ0aDogZmlmdGgsXG4gIGZpZnRoTGFzdDogZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0OiBmb3VydGhMYXN0LFxuICB0aGlyZExhc3Q6IHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdDogc2Vjb25kTGFzdCxcbiAgbGFzdDogbGFzdCxcbiAgdGFpbDogdGFpbCxcbiAgcHVzaDogcHVzaCxcbiAgdW5zaGlmdDogdW5zaGlmdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VxdWVuY2UoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrc1tpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaywgaW5kZXgpIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwZWF0ZWRseShjYWxsYmFjaywgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICB3aGlsc3Q6IHdoaWxzdCxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5OiBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHk6IHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcblxuZnVuY3Rpb24gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKSB7XG4gIHJldHVybiBmcy5leGlzdHNTeW5jKGFic29sdXRlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGZpbGVFeGlzdHMoYWJzb2x1dGVGaWxlUGF0aCkge1xuICBsZXQgZmlsZUV4aXN0cyA9IGZhbHNlO1xuICBcbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcbiAgXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RmlsZSA9IGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCk7XG4gICAgXG4gICAgaWYgKGVudHJ5RmlsZSkge1xuICAgICAgZmlsZUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZmlsZUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCksXG4gICAgICBlbnRyeUZpbGUgPSAhZW50cnlEaXJlY3Rvcnk7XG5cbiAgcmV0dXJuIGVudHJ5RmlsZTtcbn1cblxuZnVuY3Rpb24gZGlyZWN0b3J5RXhpc3RzKGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBsZXQgZGlyZWN0b3J5RXhpc3RzID0gZmFsc2U7XG5cbiAgY29uc3QgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVEaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuXG4gIGlmIChlbnRyeUV4aXN0cykge1xuICAgIGNvbnN0IGVudHJ5RGlyZWN0b3J5ID0gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpO1xuXG4gICAgaWYgKGVudHJ5RGlyZWN0b3J5KSB7XG4gICAgICBkaXJlY3RvcnlFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXJlY3RvcnlFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHN0YXQgPSBmcy5zdGF0U3luYyhhYnNvbHV0ZVBhdGgpLFxuICAgICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKTtcblxuICByZXR1cm4gZW50cnlEaXJlY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3J5RW1wdHkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCksXG4gICAgICAgIHN1YkVudHJ5TmFtZXNMZW5ndGggPSBzdWJFbnRyeU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGlyZWN0b3J5RW1wdHkgPSAoc3ViRW50cnlOYW1lc0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUVtcHR5O1xufVxuXG5mdW5jdGlvbiByZWFkRGlyZWN0b3J5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKTtcblxuICByZXR1cm4gc3ViRW50cnlOYW1lcztcbn1cblxuZnVuY3Rpb24gcmVhZEZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBvcHRpb25zKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGaWxlKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpIHtcbiAgZnMud3JpdGVGaWxlU3luYyhhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5RXhpc3RzOiBlbnRyeUV4aXN0cyxcbiAgZmlsZUV4aXN0czogZmlsZUV4aXN0cyxcbiAgaXNFbnRyeUZpbGU6IGlzRW50cnlGaWxlLFxuICBkaXJlY3RvcnlFeGlzdHM6IGRpcmVjdG9yeUV4aXN0cyxcbiAgaXNFbnRyeURpcmVjdG9yeTogaXNFbnRyeURpcmVjdG9yeSxcbiAgaXNEaXJlY3RvcnlFbXB0eTogaXNEaXJlY3RvcnlFbXB0eSxcbiAgcmVhZERpcmVjdG9yeTogcmVhZERpcmVjdG9yeSxcbiAgcmVhZEZpbGU6IHJlYWRGaWxlLFxuICB3cml0ZUZpbGU6IHdyaXRlRmlsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIl19
