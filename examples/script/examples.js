(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    bufferMixin = require('./mixin/buffer'),
    colourMixin = require('./mixin/colour'),
    matrixMixin = require('./mixin/matrix'),
    depthMixin = require('./mixin/depth');

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
    key: 'setUniformLocationIntegerValue',
    value: function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  }, {
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'render',
    value: function render(normal, rotation, position, perspective, shader) {
      var normalMatrix = normal.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          shaderProgram = shader.getProgram(),
          normalMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uNormalMatrix'),
          rotationMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uRotationMatrix'),
          positionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPositionMatrix'),
          perspectiveMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPerspectiveMatrix');

      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();

      this.applyMatrix(normalMatrixUniformLocation, normalMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);
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

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;

},{"./mixin/buffer":7,"./mixin/colour":8,"./mixin/depth":9,"./mixin/matrix":10,"./mixin/texture":11,"./utilities/dom":19}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasElement = function CanvasElement() {
  _classCallCheck(this, CanvasElement);
};

module.exports = CanvasElement;

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  intermediate: require('./examples/intermediate'),
  containerHouse: require('./examples/containerHouse'),
  schoonerCecilie: require('./examples/schoonerCecilie')
};

},{"./examples/containerHouse":4,"./examples/intermediate":5,"./examples/schoonerCecilie":6}],4:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    ModelView = require('../position'),
    Perspective = require('../perspective');

var containerHouse = function containerHouse() {
      var canvas = new Canvas(),
          shaderProgram = canvas.createShaderProgram(),
          positions = [+1.0, +1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0],
          positionsBuffer = canvas.createBuffer(positions),
          clientWidth = canvas.getClientWidth(),
          clientHeight = canvas.getClientHeight(),
          modelView = new ModelView(),
          perspective = new Perspective(clientWidth, clientHeight),
          vertexPositionLocation = canvas.getProgramAttributeLocation(shaderProgram, 'aVertexPosition'),
          projectionMatrixLocation = canvas.getProgramUniformLocation(shaderProgram, 'uProjectionMatrix'),
          modelViewMatrixLocation = canvas.getProgramUniformLocation(shaderProgram, 'uModelViewMatrix');

      canvas.clearDepth();
      canvas.clearColour();
      canvas.clearDepthBuffer();
      canvas.clearColourBuffer();

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      canvas.useProgram(shaderProgram);
      canvas.usePerspective(projectionMatrixLocation, perspective); ///
      canvas.useModelView(modelViewMatrixLocation, modelView);

      canvas.useBuffer(vertexPositionLocation, positionsBuffer); ///

      var offset = 0,
          vertexCount = 4;

      canvas.render(offset, vertexCount);
};

module.exports = containerHouse;

},{"../canvas":1,"../perspective":13,"../position":14}],5:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    Normal = require('../normal'),
    Rotation = require('../rotation'),
    Position = require('../position'),
    Perspective = require('../perspective'),
    ColourShader = require('../shader/colour'),
    TextureShader = require('../shader/texture');

var vertexColourData = [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0],
    textureCoordinateData = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
    vertexPositionData = [-1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, -1.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0];

var intermediate = function intermediate() {
  var canvas = new Canvas(),
      context = canvas.getContext();

  if (!context) {
    return;
  }

  var /*textureShader = TextureShader.fromNothing(canvas),*/
  colourShader = ColourShader.fromNothing(canvas),
      shader = colourShader,
      ///
  shaderProgram = shader.getProgram(),
      clientWidth = canvas.getClientWidth(),
      clientHeight = canvas.getClientHeight(),
      zCoordinate = -5,
      ///
  position = Position.fromZCoordinate(zCoordinate),
      perspective = Perspective.fromClientWidthAndClientHeight(clientWidth, clientHeight);

  colourShader.createAndBindVertexPositionBuffer(vertexPositionData, canvas);

  colourShader.createAndBindVertexColourBuffer(vertexColourData, canvas);

  //textureShader.createAndBindTextureCoordinateBuffer(textureCoordinateData, canvas);

  colourShader.createAndBindVertexNormalBuffer(vertexNormalData, canvas);

  var count = createVertexIndexElementBuffer(canvas);

  canvas.useProgram(shaderProgram);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  var initialTime = null;

  var image = new Image();

  image.onload = function () {
    var context = canvas.getContext(),
        TEXTURE0 = context.TEXTURE0,
        target = TEXTURE0,
        uSamplerUniformLocationIntegerValue = 0,
        uSamplerUniformLocation = canvas.getUniformLocation(shaderProgram, 'uSampler');


    canvas.createTexture(image);

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(uSamplerUniformLocation, uSamplerUniformLocationIntegerValue);

    requestAnimationFrame(render);
  };

  image.src = 'texture/bricks.jpg';

  function render(time) {
    if (initialTime === null) {
      initialTime = time;
    }

    var elapsedTime = time - initialTime,
        xAngle = elapsedTime / 1000,
        yAngle = elapsedTime / 1000,
        rotation = Rotation.fromXAngleAndYAngle(xAngle, yAngle),
        normal = Normal.fromRotation(rotation);

    canvas.render(normal, rotation, position, perspective, shader);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  }
};

module.exports = intermediate;

function createVertexIndexElementBuffer(canvas) {
  var vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23],
      vertexIndexElementBuffer = canvas.createElementBuffer(vertexIndexData),
      vertexIndexDataLength = vertexIndexData.length,
      count = vertexIndexDataLength; ///

  canvas.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}

},{"../canvas":1,"../normal":12,"../perspective":13,"../position":14,"../rotation":15,"../shader/colour":17,"../shader/texture":18}],6:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    CanvasElement = require('../canvasElement');

var schoonerCecilie = function schoonerCecilie() {};

module.exports = schoonerCecilie;

},{"../canvas":1,"../canvasElement":2}],7:[function(require,module,exports){
'use strict';

function createBuffer(data) {
  var _context = this.context,
      ARRAY_BUFFER = _context.ARRAY_BUFFER,
      STATIC_DRAW = _context.STATIC_DRAW,
      target = ARRAY_BUFFER,
      usage = STATIC_DRAW,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data);


  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var _context2 = this.context,
      ARRAY_BUFFER = _context2.ARRAY_BUFFER,
      FLOAT = _context2.FLOAT,
      target = ARRAY_BUFFER,
      type = FLOAT,
      normalize = false,
      stride = 0,
      offset = 0;


  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);

  this.context.enableVertexAttribArray(attributeLocation);
}

function createElementBuffer(data) {
  var _context3 = this.context,
      ELEMENT_ARRAY_BUFFER = _context3.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _context3.STATIC_DRAW,
      target = ELEMENT_ARRAY_BUFFER,
      usage = STATIC_DRAW,
      elementBuffer = this.context.createBuffer(),
      uint16Array = new Uint16Array(data);


  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER,
      target = ELEMENT_ARRAY_BUFFER;


  this.context.bindBuffer(target, elementBuffer);
}

var bufferMixin = {
  createBuffer: createBuffer,
  bindBuffer: bindBuffer,
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer
};

module.exports = bufferMixin;

},{}],8:[function(require,module,exports){
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

var colourMixin = {
      clearColour: clearColour,
      clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;

},{}],9:[function(require,module,exports){
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
  var DEPTH_TEST = this.context.DEPTH_TEST,
      cap = DEPTH_TEST;


  this.context.enable(cap);
}

function enableDepthFunction() {
  var LEQUAL = this.context.LEQUAL,
      func = LEQUAL;


  this.context.depthFunc(func);
}

var depthMixin = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

module.exports = depthMixin;

},{}],10:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

var bufferMixin = {
  applyMatrix: applyMatrix
};

module.exports = bufferMixin;

},{}],11:[function(require,module,exports){
'use strict';

function createTexture(image) {
  var _context = this.context,
      TEXTURE_2D = _context.TEXTURE_2D,
      RGBA = _context.RGBA,
      UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
      TEXTURE_WRAP_S = _context.TEXTURE_WRAP_S,
      TEXTURE_WRAP_T = _context.TEXTURE_WRAP_T,
      CLAMP_TO_EDGE = _context.CLAMP_TO_EDGE,
      TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER,
      LINEAR = _context.LINEAR,
      target = TEXTURE_2D,
      internalFormat = RGBA,
      format = RGBA,
      type = UNSIGNED_BYTE,
      texture = this.context.createTexture(),
      level = 0;


  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  this.context.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  this.context.texParameteri(target, TEXTURE_MIN_FILTER, LINEAR);
}

function activateTexture(target) {
  this.context.activeTexture(target);
}

var textureMixin = {
  createTexture: createTexture,
  activateTexture: activateTexture
};

module.exports = textureMixin;

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var Normal = function () {
  function Normal(matrix) {
    _classCallCheck(this, Normal);

    this.matrix = matrix;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var matrix = mat4.create(),
          rotationMatrix = rotation.getMatrix();

      mat4.invert(matrix, rotationMatrix);
      mat4.transpose(matrix, matrix);

      var normal = new Normal(matrix);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

},{"gl-mat4":29}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Perspective = function () {
  function Perspective(matrix) {
    _classCallCheck(this, Perspective);

    this.matrix = matrix;
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromClientWidthAndClientHeight',
    value: function fromClientWidthAndClientHeight(clientWidth, clientHeight) {
      var aspectRatio = clientWidth / clientHeight,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create();

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      var perspective = new Perspective(matrix);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;

},{"gl-mat4":29}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

var Position = function () {
  function Position(matrix) {
    _classCallCheck(this, Position);

    this.matrix = matrix;
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromZCoordinate',
    value: function fromZCoordinate(zCoordinate) {
      var xCoordinate = defaultXCoordinate,
          yCoordinate = defaultYCoordinate,
          coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create();

      mat4.translate(matrix, matrix, coordinateVector);

      var position = new Position(matrix);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;

},{"gl-mat4":29}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 6.0,
    xAxisVectorArray = [1, 0, 0],
    yAxisVectorArray = [0, 1, 0],
    zAxisVectorArray = [0, 0, 1];

var Rotation = function () {
  function Rotation(matrix) {
    _classCallCheck(this, Rotation);

    this.matrix = matrix;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromXAngleAndYAngle',
    value: function fromXAngleAndYAngle(xAngle, yAngle) {
      var zAngle = defaultZAngle,
          matrix = mat4.create();

      mat4.rotate(matrix, matrix, xAngle, xAxisVectorArray);
      mat4.rotate(matrix, matrix, yAngle, yAxisVectorArray);
      mat4.rotate(matrix, matrix, zAngle, zAxisVectorArray);

      var rotation = new Rotation(matrix);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;

},{"gl-mat4":29}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var normalMatrixName = 'uNormalMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    perspectiveMatrixName = 'uPerspectiveMatrix',
    calculateLightingSource = '\n\n        attribute vec3 aVertexNormal;\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        vec3 calculateLighting() {\n          vec3 lighting,\n               ambientLight = vec3(0.3, 0.3, 0.3),\n               directionalLightColour = vec3(1, 1, 1),\n               directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(aVertexNormal, 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        attribute vec4 aVertexPosition;\n\n        uniform mat4 ' + rotationMatrixName + ';\n        uniform mat4 ' + positionMatrixName + ';\n        uniform mat4 ' + perspectiveMatrixName + ';\n        \n        vec4 calculatePosition() {\n          vec4 position;\n          \n          position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * aVertexPosition;\n          \n          return position;\n        }\n        \n      ';

var Shader = function () {
  function Shader(program) {
    _classCallCheck(this, Shader);

    this.program = program;
  }

  _createClass(Shader, [{
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: 'createAndBindVertexPositionBuffer',
    value: function createAndBindVertexPositionBuffer(data, canvas) {
      var vertexPositionBuffer = canvas.createBuffer(data),
          vertexPositionAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexPosition'),
          vertexPositionComponents = 3;

      canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

      var dataLength = data.length,
          count = dataLength / vertexPositionComponents;

      return count;
    }
  }, {
    key: 'createAndBindVertexNormalBuffer',
    value: function createAndBindVertexNormalBuffer(data, canvas) {
      var vertexNormalBuffer = canvas.createBuffer(data),
          vertexNormalAttributeLocation = canvas.getAttributeLocation(this.program, 'aVertexNormal'),
          vertexNormalComponents = 3;

      canvas.bindBuffer(vertexNormalBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }], [{
    key: 'fromVertexShaderSourceAndFragmentShaderSource',
    value: function fromVertexShaderSourceAndFragmentShaderSource(Class, vertexShaderSource, fragmentShaderSource, canvas) {
      var context = canvas.getContext(),
          LINK_STATUS = context.LINK_STATUS,
          pname = LINK_STATUS,
          program = context.createProgram(),
          vertexShader = createVertexShader(vertexShaderSource, context),
          fragmentShader = createFragmentShader(fragmentShaderSource, context);


      context.attachShader(program, vertexShader);
      context.attachShader(program, fragmentShader);

      context.linkProgram(program);

      var linkStatus = context.getProgramParameter(program, pname);

      if (!linkStatus) {
        var message = context.getProgramInfoLog(program); ///

        throw new Error('Unable to create the colour shader program, \'' + message + '\'.');
      }

      var shader = new Class(program);

      return shader;
    }
  }]);

  return Shader;
}();

Object.assign(Shader, {
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createVertexShader(vertexShaderSource, context) {
  var VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, context);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, context) {
  var FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, context);


  return vertexShader;
}

function createShader(type, shaderSource, context) {
  var COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    var shaderInfoLog = context.getShaderInfoLog(shader);

    throw new Error('Unable to create the shader.');
  }

  return shader;
}

},{}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexShaderSource = '\n    \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        attribute vec4 aVertexColour;\n\n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = aVertexColour;                    \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader() {
    _classCallCheck(this, ColourShader);

    return _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).apply(this, arguments));
  }

  _createClass(ColourShader, [{
    key: 'createAndBindVertexColourBuffer',
    value: function createAndBindVertexColourBuffer(data, canvas) {
      var program = this.getProgram(),
          vertexColourBuffer = canvas.createBuffer(data),
          vertexColourAttributeLocation = canvas.getAttributeLocation(program, 'aVertexColour'),
          vertexColourComponents = 4;

      canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      return Shader.fromVertexShaderSourceAndFragmentShaderSource(ColourShader, vertexShaderSource, fragmentShaderSource, canvas);
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;

},{"../shader":16}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shader = require('../shader');

var calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource;


var vertexShaderSource = '\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        attribute vec2 aTextureCoordinate;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = aTextureCoordinate;\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        varying highp vec3 vLighting;\n                   \n        uniform sampler2D uSampler;\n\n        void main() {\n          highp vec4 texelColour = texture2D(uSampler, vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader() {
    _classCallCheck(this, TextureShader);

    return _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).apply(this, arguments));
  }

  _createClass(TextureShader, [{
    key: 'createAndBindTextureCoordinateBuffer',
    value: function createAndBindTextureCoordinateBuffer(data, canvas) {
      var program = this.getProgram(),
          textureCoordinateBuffer = canvas.createBuffer(data),
          textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, 'aTextureCoordinate'),
          textureCoordinateComponents = 2;

      canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      return Shader.fromVertexShaderSourceAndFragmentShaderSource(TextureShader, vertexShaderSource, fragmentShaderSource, canvas);
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;

},{"../shader":16}],19:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{"./adjoint":20,"./clone":21,"./copy":22,"./create":23,"./determinant":24,"./fromQuat":25,"./fromRotationTranslation":26,"./frustum":27,"./identity":28,"./invert":30,"./lookAt":31,"./multiply":32,"./ortho":33,"./perspective":34,"./perspectiveFromFieldOfView":35,"./rotate":36,"./rotateX":37,"./rotateY":38,"./rotateZ":39,"./scale":40,"./str":41,"./translate":42,"./transpose":43}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{"./identity":28}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
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
},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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


},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
},{}],42:[function(require,module,exports){
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
},{}],43:[function(require,module,exports){
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
},{}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY2FudmFzLmpzIiwiZXM2L2NhbnZhc0VsZW1lbnQuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UuanMiLCJlczYvZXhhbXBsZXMvaW50ZXJtZWRpYXRlLmpzIiwiZXM2L2V4YW1wbGVzL3NjaG9vbmVyQ2VjaWxpZS5qcyIsImVzNi9taXhpbi9idWZmZXIuanMiLCJlczYvbWl4aW4vY29sb3VyLmpzIiwiZXM2L21peGluL2RlcHRoLmpzIiwiZXM2L21peGluL21hdHJpeC5qcyIsImVzNi9taXhpbi90ZXh0dXJlLmpzIiwiZXM2L25vcm1hbC5qcyIsImVzNi9wZXJzcGVjdGl2ZS5qcyIsImVzNi9wb3NpdGlvbi5qcyIsImVzNi9yb3RhdGlvbi5qcyIsImVzNi9zaGFkZXIuanMiLCJlczYvc2hhZGVyL2NvbG91ci5qcyIsImVzNi9zaGFkZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3N0ci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zcG9zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUFFQSxJQUFNLGVBQWUsUUFBUSxpQkFBUixDQUFyQjtBQUFBLElBQ00sZUFBZSxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTSxjQUFjLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNLGNBQWMsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU0sY0FBYyxRQUFRLGdCQUFSLENBSnBCO0FBQUEsSUFLTSxhQUFhLFFBQVEsZUFBUixDQUxuQjs7SUFPUSxzQixHQUEyQixZLENBQTNCLHNCOzs7QUFFUixJQUFNLGdCQUFnQixDQUF0Qjs7SUFFTSxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckIsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTSxhQUFhLHVCQUF1QixRQUF2QixDQUFuQjtBQUFBLFFBQ00sVUFBVSxXQUFXLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSSxLQUFKLHFDQUFO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OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2J1ZmZlcicpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NvbG91cicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZGVwdGgnKTtcblxuY29uc3QgeyBkb21FbGVtZW50RnJvbVNlbGVjdG9yIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRPZmZzZXQgPSAwO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTsgfVxuICBcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgdXNlUHJvZ3JhbShwcm9ncmFtKSB7IHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pOyB9XG4gIFxuICByZW5kZXIobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBzaGFkZXIpIHtcbiAgICBjb25zdCBub3JtYWxNYXRyaXggPSBub3JtYWwuZ2V0TWF0cml4KCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4ID0gcGVyc3BlY3RpdmUuZ2V0TWF0cml4KCksXG4gICAgICAgICAgc2hhZGVyUHJvZ3JhbSA9IHNoYWRlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VOb3JtYWxNYXRyaXgnKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1Um90YXRpb25NYXRyaXgnKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UG9zaXRpb25NYXRyaXgnKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UGVyc3BlY3RpdmVNYXRyaXgnKTtcblxuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBlcnNwZWN0aXZlTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhjb3VudCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JUO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IHtcbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGludGVybWVkaWF0ZTogcmVxdWlyZSgnLi9leGFtcGxlcy9pbnRlcm1lZGlhdGUnKSxcbiAgY29udGFpbmVySG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvY29udGFpbmVySG91c2UnKSxcbiAgc2Nob29uZXJDZWNpbGllOiByZXF1aXJlKCcuL2V4YW1wbGVzL3NjaG9vbmVyQ2VjaWxpZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIE1vZGVsVmlldyA9IHJlcXVpcmUoJy4uL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4uL3BlcnNwZWN0aXZlJyk7XG5cbmNvbnN0IGNvbnRhaW5lckhvdXNlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgIHNoYWRlclByb2dyYW0gPSBjYW52YXMuY3JlYXRlU2hhZGVyUHJvZ3JhbSgpLFxuICAgICAgICBwb3NpdGlvbnMgPSBbXG4gICAgICAgICAgKzEuMCwgKzEuMCxcbiAgICAgICAgICAtMS4wLCArMS4wLFxuICAgICAgICAgICsxLjAsIC0xLjAsXG4gICAgICAgICAgLTEuMCwgLTEuMFxuICAgICAgICBdLFxuICAgICAgICBwb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHBvc2l0aW9ucyksXG4gICAgICAgIGNsaWVudFdpZHRoID0gY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgIGNsaWVudEhlaWdodCA9IGNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgbW9kZWxWaWV3ID0gbmV3IE1vZGVsVmlldygpLFxuICAgICAgICBwZXJzcGVjdGl2ZSA9IG5ldyBQZXJzcGVjdGl2ZShjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0KSxcbiAgICAgICAgdmVydGV4UG9zaXRpb25Mb2NhdGlvbiA9IGNhbnZhcy5nZXRQcm9ncmFtQXR0cmlidXRlTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4TG9jYXRpb24gPSBjYW52YXMuZ2V0UHJvZ3JhbVVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndVByb2plY3Rpb25NYXRyaXgnKSxcbiAgICAgICAgbW9kZWxWaWV3TWF0cml4TG9jYXRpb24gPSBjYW52YXMuZ2V0UHJvZ3JhbVVuaWZvcm1Mb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAndU1vZGVsVmlld01hdHJpeCcpO1xuXG4gIGNhbnZhcy5jbGVhckRlcHRoKCk7XG4gIGNhbnZhcy5jbGVhckNvbG91cigpO1xuICBjYW52YXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICBjYW52YXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcblxuICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgY2FudmFzLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG4gIGNhbnZhcy51c2VQZXJzcGVjdGl2ZShwcm9qZWN0aW9uTWF0cml4TG9jYXRpb24sIHBlcnNwZWN0aXZlKTsgLy8vXG4gIGNhbnZhcy51c2VNb2RlbFZpZXcobW9kZWxWaWV3TWF0cml4TG9jYXRpb24sIG1vZGVsVmlldyk7XG4gIFxuICBjYW52YXMudXNlQnVmZmVyKHZlcnRleFBvc2l0aW9uTG9jYXRpb24sIHBvc2l0aW9uc0J1ZmZlcik7IC8vL1xuXG4gIGNvbnN0IG9mZnNldCA9IDAsXG4gICAgICAgIHZlcnRleENvdW50ID0gNDtcblxuICBjYW52YXMucmVuZGVyKG9mZnNldCwgdmVydGV4Q291bnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJIb3VzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi4vcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi4vcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi4vcGVyc3BlY3RpdmUnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXIvdGV4dHVyZScpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gW1xuICAgICAgICAxLjAsICAwLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAwLjAsICAxLjAsXG5cbiAgICAgICAgMC4wLCAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMS4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcblxuICAgICAgICAxLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAxLjAsICAwLjAsICAxLjAsICAxLjAsXG5cbiAgICAgICAgMC4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuXG4gICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgMS4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAxLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMFxuICAgICAgXSxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IFtcbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjAsXG5cbiAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAxLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDEuMCxcbiAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMC4wLFxuICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgIDAuMCwgIDEuMCxcblxuICAgICAgICAwLjAsICAwLjAsXG4gICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgMS4wLCAgMS4wLFxuICAgICAgICAwLjAsICAxLjBcbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG4gICAgICAgIC0xLjAsIC0xLjAsICsxLjAsXG4gICAgICAgICsxLjAsIC0xLjAsICsxLjAsXG4gICAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICAgIC0xLjAsICsxLjAsICsxLjAsXG5cbiAgICAgICAgLTEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgLTEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcblxuICAgICAgICAtMS4wLCArMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCArMS4wLFxuICAgICAgICArMS4wLCArMS4wLCArMS4wLFxuICAgICAgICArMS4wLCArMS4wLCAtMS4wLFxuXG4gICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICsxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICsxLjAsIC0xLjAsICsxLjAsXG4gICAgICAgIC0xLjAsIC0xLjAsICsxLjAsXG5cbiAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgKzEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgKzEuMCwgLTEuMCwgKzEuMCxcblxuICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuICAgICAgICAtMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCArMS4wLFxuICAgICAgICAtMS4wLCArMS4wLCAtMS4wXG4gICAgICBdLFxuICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IFtcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcblxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG5cbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG5cbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMFxuICAgICAgXTtcblxuY29uc3QgaW50ZXJtZWRpYXRlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IC8qdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSwqL1xuICAgICAgICBjb2xvdXJTaGFkZXIgPSBDb2xvdXJTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgc2hhZGVyID0gY29sb3VyU2hhZGVyLCAgLy8vXG4gICAgICAgIHNoYWRlclByb2dyYW0gPSBzaGFkZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICBjbGllbnRXaWR0aCA9IGNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICBjbGllbnRIZWlnaHQgPSBjYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgIHpDb29yZGluYXRlID0gLTUsIC8vL1xuICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbUNsaWVudFdpZHRoQW5kQ2xpZW50SGVpZ2h0KGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuXG4gIGNvbG91clNoYWRlci5jcmVhdGVBbmRCaW5kVmVydGV4UG9zaXRpb25CdWZmZXIodmVydGV4UG9zaXRpb25EYXRhLCBjYW52YXMpO1xuXG4gIGNvbG91clNoYWRlci5jcmVhdGVBbmRCaW5kVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcyk7XG5cbiAgLy90ZXh0dXJlU2hhZGVyLmNyZWF0ZUFuZEJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZURhdGEsIGNhbnZhcyk7XG4gIFxuICBjb2xvdXJTaGFkZXIuY3JlYXRlQW5kQmluZFZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpO1xuXG4gIGNvbnN0IGNvdW50ID0gY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG5cbiAgY2FudmFzLnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG5cbiAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gIGxldCBpbml0aWFsVGltZSA9IG51bGw7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IFRFWFRVUkUwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHRhcmdldCA9IFRFWFRVUkUwLFxuICAgICAgICAgIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gMCxcbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VTYW1wbGVyJyk7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSk7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfTtcblxuICBpbWFnZS5zcmMgPSAndGV4dHVyZS9icmlja3MuanBnJztcblxuICBmdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgIGlmIChpbml0aWFsVGltZSA9PT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFRpbWUgPSB0aW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gdGltZSAtIGluaXRpYWxUaW1lLFxuICAgICAgICAgIHhBbmdsZSA9IGVsYXBzZWRUaW1lIC8gMTAwMCxcbiAgICAgICAgICB5QW5nbGUgPSBlbGFwc2VkVGltZSAvIDEwMDAsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWUFuZ2xlKHhBbmdsZSwgeUFuZ2xlKSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgIGNhbnZhcy5yZW5kZXIobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBzaGFkZXIpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhjb3VudCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcm1lZGlhdGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gW1xuICAgICAgICAgICAwLCAgMSwgIDIsXG4gICAgICAgICAgIDAsICAyLCAgMyxcblxuICAgICAgICAgICA0LCAgNSwgIDYsXG4gICAgICAgICAgIDQsICA2LCAgNyxcblxuICAgICAgICAgICA4LCAgOSwgMTAsXG4gICAgICAgICAgIDgsIDEwLCAxMSxcblxuICAgICAgICAgIDEyLCAxMywgMTQsXG4gICAgICAgICAgMTIsIDE0LCAxNSxcblxuICAgICAgICAgIDE2LCAxNywgMTgsXG4gICAgICAgICAgMTYsIDE4LCAxOSxcblxuICAgICAgICAgIDIwLCAyMSwgMjIsXG4gICAgICAgICAgMjAsIDIyLCAyM1xuICAgICAgICBdLFxuICAgICAgICB2ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleERhdGEpLFxuICAgICAgICB2ZXJ0ZXhJbmRleERhdGFMZW5ndGggPSB2ZXJ0ZXhJbmRleERhdGEubGVuZ3RoLFxuICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4RGF0YUxlbmd0aDsgIC8vL1xuXG4gIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIpO1xuXG4gIHJldHVybiBjb3VudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vY2FudmFzRWxlbWVudCcpO1xuXG5jb25zdCBzY2hvb25lckNlY2lsaWUgPSAoKSA9PiB7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nob29uZXJDZWNpbGllO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW4gPSB7XG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyLFxuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gZGVmYXVsdFIsIGcgPSBkZWZhdWx0RywgYiA9IGRlZmF1bHRCLCBhID0gZGVmYXVsdEEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmNvbnN0IGNvbG91ck1peGluID0ge1xuICBjbGVhckNvbG91cjogY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyOiBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb2xvdXJNaXhpbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdERlcHRoID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gZGVmYXVsdERlcHRoKSB7IHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgfVxuXG5mdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IERFUFRIX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aFRlc3RpbmcoKSB7XG4gIGNvbnN0IHsgREVQVEhfVEVTVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXAgPSBERVBUSF9URVNUO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhGdW5jdGlvbigpIHtcbiAgY29uc3QgeyBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgZnVuYyA9IExFUVVBTDtcbiAgXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZnVuYyk7IFxufVxuXG5jb25zdCBkZXB0aE1peGluID0ge1xuICBjbGVhckRlcHRoOiBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyOiBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmc6IGVuYWJsZURlcHRoVGVzdGluZyxcbiAgZW5hYmxlRGVwdGhGdW5jdGlvbjogZW5hYmxlRGVwdGhGdW5jdGlvblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZXB0aE1peGluO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5jb25zdCBidWZmZXJNaXhpbiA9IHtcbiAgYXBwbHlNYXRyaXg6IGFwcGx5TWF0cml4XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlck1peGluO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlKSB7XG4gIGNvbnN0IHsgVEVYVFVSRV8yRCwgUkdCQSwgVU5TSUdORURfQllURSwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFLCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBURVhUVVJFXzJELFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKSxcbiAgICAgICAgbGV2ZWwgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRleHR1cmUodGFyZ2V0KSB7IHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7IH1cblxuY29uc3QgdGV4dHVyZU1peGluID0ge1xuICBjcmVhdGVUZXh0dXJlOiBjcmVhdGVUZXh0dXJlLFxuICBhY3RpdmF0ZVRleHR1cmU6IGFjdGl2YXRlVGV4dHVyZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0dXJlTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUm90YXRpb24ocm90YXRpb24pIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCk7XG5cbiAgICBtYXQ0LmludmVydChtYXRyaXgsIHJvdGF0aW9uTWF0cml4KTsgICAgXG4gICAgbWF0NC50cmFuc3Bvc2UobWF0cml4LCBtYXRyaXgpO1xuICAgIFxuICAgIGNvbnN0IG5vcm1hbCA9IG5ldyBOb3JtYWwobWF0cml4KTtcbiAgICBcbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IGRlZmF1bHRGaWVsZE9mVmlldyA9IDQ1ICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIGRlZmF1bHRaTmVhciA9IDAuMSxcbiAgICAgIGRlZmF1bHRaRmFyID0gMTAwLjA7XG5cbmNsYXNzIFBlcnNwZWN0aXZlIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsaWVudFdpZHRoQW5kQ2xpZW50SGVpZ2h0KGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpIHtcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGNsaWVudFdpZHRoIC8gY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGZpZWxkT2ZWaWV3ID0gZGVmYXVsdEZpZWxkT2ZWaWV3LFxuICAgICAgICAgIHpOZWFyID0gZGVmYXVsdFpOZWFyLFxuICAgICAgICAgIHpGYXIgPSBkZWZhdWx0WkZhcixcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgbWF0NC5wZXJzcGVjdGl2ZShtYXRyaXgsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgY29uc3QgcGVyc3BlY3RpdmUgPSBuZXcgUGVyc3BlY3RpdmUobWF0cml4KTtcblxuICAgIHJldHVybiBwZXJzcGVjdGl2ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNwZWN0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IGRlZmF1bHRYQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WUNvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFpDb29yZGluYXRlID0gLTYuMDtcblxuY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IGRlZmF1bHRYQ29vcmRpbmF0ZSxcbiAgICAgICAgICB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSxcbiAgICAgICAgICBjb29yZGluYXRlVmVjdG9yID0gW1xuICAgICAgICAgICAgeENvb3JkaW5hdGUsXG4gICAgICAgICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHpDb29yZGluYXRlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgbWF0NC50cmFuc2xhdGUobWF0cml4LCBtYXRyaXgsIGNvb3JkaW5hdGVWZWN0b3IpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24obWF0cml4KTtcbiAgICBcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSA2LjAsXG4gICAgICB4QXhpc1ZlY3RvckFycmF5ID0gWzEsIDAsIDBdLFxuICAgICAgeUF4aXNWZWN0b3JBcnJheSA9IFswLCAxLCAwXSxcbiAgICAgIHpBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMCwgMV07XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZUFuZFlBbmdsZSh4QW5nbGUsIHlBbmdsZSkge1xuICAgIGNvbnN0IHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUsXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIG1hdDQucm90YXRlKG1hdHJpeCwgbWF0cml4LCB4QW5nbGUsIHhBeGlzVmVjdG9yQXJyYXkpO1xuICAgIG1hdDQucm90YXRlKG1hdHJpeCwgbWF0cml4LCB5QW5nbGUsIHlBeGlzVmVjdG9yQXJyYXkpO1xuICAgIG1hdDQucm90YXRlKG1hdHJpeCwgbWF0cml4LCB6QW5nbGUsIHpBeGlzVmVjdG9yQXJyYXkpO1xuXG4gICAgY29uc3Qgcm90YXRpb24gPSBuZXcgUm90YXRpb24obWF0cml4KTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdGF0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub3JtYWxNYXRyaXhOYW1lID0gJ3VOb3JtYWxNYXRyaXgnLFxuICAgICAgcm90YXRpb25NYXRyaXhOYW1lID0gJ3VSb3RhdGlvbk1hdHJpeCcsXG4gICAgICBwb3NpdGlvbk1hdHJpeE5hbWUgPSAndVBvc2l0aW9uTWF0cml4JyxcbiAgICAgIHBlcnNwZWN0aXZlTWF0cml4TmFtZSA9ICd1UGVyc3BlY3RpdmVNYXRyaXgnLFxuICAgICAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UgPSBgXG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgYVZlcnRleE5vcm1hbDtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzMgbGlnaHRpbmcsXG4gICAgICAgICAgICAgICBhbWJpZW50TGlnaHQgPSB2ZWMzKDAuMywgMC4zLCAwLjMpLFxuICAgICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNChhVmVydGV4Tm9ybWFsLCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIGxpZ2h0aW5nID0gYW1iaWVudExpZ2h0ICsgKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGAsXG4gICAgICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSA9IGBcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cm90YXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cG9zaXRpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbjtcbiAgICAgICAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuXG5jbGFzcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuXG4gIGNyZWF0ZUFuZEJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihkYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIoZGF0YSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbih0aGlzLnByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4UG9zaXRpb25CdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSBkYXRhTGVuZ3RoIC8gdmVydGV4UG9zaXRpb25Db21wb25lbnRzO1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgY3JlYXRlQW5kQmluZFZlcnRleE5vcm1hbEJ1ZmZlcihkYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKGRhdGEpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FWZXJ0ZXhOb3JtYWwnKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHZlcnRleE5vcm1hbEJ1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZShDbGFzcywgdmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgeyBMSU5LX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgICBwbmFtZSA9IExJTktfU1RBVFVTLFxuICAgICAgICAgIHByb2dyYW0gPSBjb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcbiAgXG4gICAgY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICBjb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICAgIGNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICAgIGNvbnN0IGxpbmtTdGF0dXMgPSBjb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgcG5hbWUpO1xuICBcbiAgICBpZiAoIWxpbmtTdGF0dXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pOyAgLy8vXG4gIFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBjb2xvdXIgc2hhZGVyIHByb2dyYW0sICcke21lc3NhZ2V9Jy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgQ2xhc3MocHJvZ3JhbSk7XG4gIFxuICAgIHJldHVybiBzaGFkZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IGNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IGNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICBjb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgY29uc3Qgc2hhZGVySW5mb0xvZyA9IGNvbnRleHQuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleENvbG91cjtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykgeyByZXR1cm4gU2hhZGVyLmZyb21WZXJ0ZXhTaGFkZXJTb3VyY2VBbmRGcmFnbWVudFNoYWRlclNvdXJjZShDb2xvdXJTaGFkZXIsIHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7IH1cblxuICBjcmVhdGVBbmRCaW5kVmVydGV4Q29sb3VyQnVmZmVyKGRhdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKGRhdGEpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4Q29sb3VyJyksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih2ZXJ0ZXhDb2xvdXJCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gYVRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgVGV4dHVyZVNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHsgcmV0dXJuIFNoYWRlci5mcm9tVmVydGV4U2hhZGVyU291cmNlQW5kRnJhZ21lbnRTaGFkZXJTb3VyY2UoVGV4dHVyZVNoYWRlciwgdmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKTsgfVxuXG4gIGNyZWF0ZUFuZEJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihkYXRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKGRhdGEpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgJ2FUZXh0dXJlQ29vcmRpbmF0ZScpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb21FbGVtZW50RnJvbVNlbGVjdG9yOiBkb21FbGVtZW50RnJvbVNlbGVjdG9yXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhZGpvaW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHl4ID0geSAqIHgyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgenggPSB6ICogeDIsXG4gICAgICAgIHp5ID0geiAqIHkyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgICBvdXRbMV0gPSB4eSArIHd6O1xuICAgIG91dFsyXSA9IHh6IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4eSAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gICAgb3V0WzZdID0geXogKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHh6ICsgd3k7XG4gICAgb3V0WzldID0geXogLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZydXN0dW07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgdHJhbnNwb3NlOiByZXF1aXJlKCcuL3RyYW5zcG9zZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIHRyYW5zbGF0ZTogcmVxdWlyZSgnLi90cmFuc2xhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjogcmVxdWlyZSgnLi9mcm9tUm90YXRpb25UcmFuc2xhdGlvbicpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbVF1YXQnKVxuICAsIGZydXN0dW06IHJlcXVpcmUoJy4vZnJ1c3R1bScpXG4gICwgcGVyc3BlY3RpdmU6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmUnKVxuICAsIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3OiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3JylcbiAgLCBvcnRobzogcmVxdWlyZSgnLi9vcnRobycpXG4gICwgbG9va0F0OiByZXF1aXJlKCcuL2xvb2tBdCcpXG4gICwgc3RyOiByZXF1aXJlKCcuL3N0cicpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnQ7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgICAgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHsgXG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9va0F0O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KG91dCwgZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbixcbiAgICAgICAgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXSxcbiAgICAgICAgY2VudGVyeCA9IGNlbnRlclswXSxcbiAgICAgICAgY2VudGVyeSA9IGNlbnRlclsxXSxcbiAgICAgICAgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICAgIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgICB9XG5cbiAgICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICAgIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gICAgejIgPSBleWV6IC0gY2VudGVyejtcblxuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcblxuICAgIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICAgIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHgwID0gMDtcbiAgICAgICAgeDEgPSAwO1xuICAgICAgICB4MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeDAgKj0gbGVuO1xuICAgICAgICB4MSAqPSBsZW47XG4gICAgICAgIHgyICo9IGxlbjtcbiAgICB9XG5cbiAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICAgIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHkwID0gMDtcbiAgICAgICAgeTEgPSAwO1xuICAgICAgICB5MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeTAgKj0gbGVuO1xuICAgICAgICB5MSAqPSBsZW47XG4gICAgICAgIHkyICo9IGxlbjtcbiAgICB9XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB5MDtcbiAgICBvdXRbMl0gPSB6MDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHgxO1xuICAgIG91dFs1XSA9IHkxO1xuICAgIG91dFs2XSA9IHoxO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geDI7XG4gICAgb3V0WzldID0geTI7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gICAgb3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcbiAgICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgdmFyIGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107ICBcbiAgICBvdXRbMF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbM10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs1XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTBdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxNV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvcnRobztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpLFxuICAgICAgICBidCA9IDEgLyAoYm90dG9tIC0gdG9wKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pLFxuICAgICAgICB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcblxuICAgIG91dFswXSA9IHhTY2FsZTtcbiAgICBvdXRbMV0gPSAwLjA7XG4gICAgb3V0WzJdID0gMC4wO1xuICAgIG91dFszXSA9IDAuMDtcbiAgICBvdXRbNF0gPSAwLjA7XG4gICAgb3V0WzVdID0geVNjYWxlO1xuICAgIG91dFs2XSA9IDAuMDtcbiAgICBvdXRbN10gPSAwLjA7XG4gICAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzldID0gKCh1cFRhbiAtIGRvd25UYW4pICogeVNjYWxlICogMC41KTtcbiAgICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMV0gPSAtMS4wO1xuICAgIG91dFsxMl0gPSAwLjA7XG4gICAgb3V0WzEzXSA9IDAuMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxNV0gPSAwLjA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGU7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdCxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMyxcbiAgICAgICAgYjAwLCBiMDEsIGIwMixcbiAgICAgICAgYjEwLCBiMTEsIGIxMixcbiAgICAgICAgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgMC4wMDAwMDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7IGIyMSA9IHkgKiB6ICogdCAtIHggKiBzOyBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzBdICA9IGFbMF07XG4gICAgICAgIG91dFsxXSAgPSBhWzFdO1xuICAgICAgICBvdXRbMl0gID0gYVsyXTtcbiAgICAgICAgb3V0WzNdICA9IGFbM107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gICAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFs4XSAgPSBhWzhdO1xuICAgICAgICBvdXRbOV0gID0gYVs5XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gICAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzdHI7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbOF0gKyAnLCAnICsgYVs5XSArICcsICcgKyBhWzEwXSArICcsICcgKyBhWzExXSArICcsICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2U7XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGEwMTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGEwMjtcbiAgICAgICAgb3V0WzldID0gYTEyO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhMDM7XG4gICAgICAgIG91dFsxM10gPSBhMTM7XG4gICAgICAgIG91dFsxNF0gPSBhMjM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGFbMV07XG4gICAgICAgIG91dFs1XSA9IGFbNV07XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhWzJdO1xuICAgICAgICBvdXRbOV0gPSBhWzZdO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbM107XG4gICAgICAgIG91dFsxM10gPSBhWzddO1xuICAgICAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07Il19
