(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    bufferMixin = require('./mixin/buffer'),
    shaderMixin = require('./mixin/shader'),
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

    this.CLAMP_TO_EDGE_PARAM = this.context.CLAMP_TO_EDGE; ///
    this.LINEAR_PARAM = this.context.LINEAR; ///
    this.RGBA_FORMAT = this.context.RGBA; ///
    this.DEPTH_TEST_CAP = this.context.DEPTH_TEST; ///
    this.LEQUAL_FUNCTION = this.context.LEQUAL; ///
    this.STATIC_DRAW_USAGE = this.context.STATIC_DRAW; ///
    this.LINK_STATUS_PNAME = this.context.LINK_STATUS; ///
    this.COMPILE_STATUS_PNAME = this.context.COMPILE_STATUS; ///
    this.TEXTURE_WRAP_S_PNAME = this.context.TEXTURE_WRAP_S; ///
    this.TEXTURE_WRAP_T_PNAME = this.context.TEXTURE_WRAP_T; ///
    this.TEXTURE_MIN_FILTER_PNAME = this.context.TEXTURE_MIN_FILTER; ///
    this.TRIANGLE_STRIP_MODE = this.context.TRIANGLE_STRIP; ///
    this.TRIANGLES_MODE = this.context.TRIANGLES; ///
    this.FLOAT_TYPE = this.context.FLOAT; ///
    this.UNSIGNED_BYTE_TYPE = this.context.UNSIGNED_BYTE; ///
    this.VERTEX_SHADER_TYPE = this.context.VERTEX_SHADER; ///
    this.UNSIGNED_SHORT_TYPE = this.context.UNSIGNED_SHORT; ///
    this.FRAGMENT_SHADER_TYPE = this.context.FRAGMENT_SHADER; ///
    this.COLOR_BUFFER_BIT_MASK = this.context.COLOR_BUFFER_BIT; ///
    this.DEPTH_BUFFER_BIT_MASK = this.context.DEPTH_BUFFER_BIT; ///
    this.TEXTURE_2D_TARGET = this.context.TEXTURE_2D; ///
    this.ARRAY_BUFFER_TARGET = this.context.ARRAY_BUFFER; ///
    this.ELEMENT_ARRAY_BUFFER_TARGET = this.context.ELEMENT_ARRAY_BUFFER; ///
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
    key: 'useProgram',
    value: function useProgram(program) {
      this.context.useProgram(program);
    }
  }, {
    key: 'render',
    value: function render(rotation, position, perspective, shaderProgram) {
      var rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          rotationMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uRotationMatrix'),
          positionMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPositionMatrix'),
          perspectiveMatrixUniformLocation = this.getUniformLocation(shaderProgram, 'uPerspectiveMatrix');

      this.clearDepth();
      this.clearColour();
      this.clearDepthBuffer();
      this.clearColourBuffer();

      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(count) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;

      var mode = this.TRIANGLES_MODE,
          type = this.UNSIGNED_SHORT_TYPE;

      this.context.drawElements(mode, count, type, offset);
    }
  }]);

  return Canvas;
}();

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);

module.exports = Canvas;

},{"./mixin/buffer":8,"./mixin/colour":9,"./mixin/depth":10,"./mixin/matrix":11,"./mixin/shader":12,"./mixin/texture":13,"./utilities/dom":17,"gl-mat4":27}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasElement = function CanvasElement() {
  _classCallCheck(this, CanvasElement);
};

module.exports = CanvasElement;

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  webGLDemo: require('./examples/webGLDemo'),
  intermediate: require('./examples/intermediate'),
  containerHouse: require('./examples/containerHouse'),
  schoonerCecilie: require('./examples/schoonerCecilie')
};

},{"./examples/containerHouse":4,"./examples/intermediate":5,"./examples/schoonerCecilie":6,"./examples/webGLDemo":7}],4:[function(require,module,exports){
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

},{"../canvas":1,"../perspective":14,"../position":15}],5:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    Rotation = require('../rotation'),
    Position = require('../position'),
    Perspective = require('../perspective');

var intermediate = function intermediate() {
  var canvas = new Canvas(),
      context = canvas.getContext();

  if (!context) {
    return;
  }

  // attribute vec4 aVertexColour;
  // varying lowp vec4 vColour;
  // vColour = aVertexColour;

  // varying lowp vec4 vColour;

  var vertexShaderSource = '\n  \n          attribute vec4 aVertexPosition;\n          attribute vec2 aTextureCoordinate;\n          \n          uniform mat4 uRotationMatrix;\n          uniform mat4 uPositionMatrix;\n          uniform mat4 uPerspectiveMatrix;\n          \n          varying highp vec2 vTextureCoordinate;\n      \n          void main() {\n            gl_Position = uPerspectiveMatrix * uPositionMatrix * uRotationMatrix * aVertexPosition;\n            vTextureCoordinate = aTextureCoordinate;\n          }\n          \n        ',
      fragmentShaderSource = '\n        \n          varying highp vec2 vTextureCoordinate;\n          \n          uniform sampler2D uSampler;\n\n          void main() {\n            gl_FragColor = texture2D(uSampler, vTextureCoordinate);\n          }\n          \n        ',
      shaderProgram = canvas.createShaderProgram(vertexShaderSource, fragmentShaderSource),
      clientWidth = canvas.getClientWidth(),
      clientHeight = canvas.getClientHeight(),
      position = new Position(),
      perspective = new Perspective(clientWidth, clientHeight);

  createAndBindVertexPositionBuffer(canvas, shaderProgram);

  // createAndBindVertexColourBuffer(canvas, shaderProgram);

  createAndBindTextureCoordinateBuffer(canvas, shaderProgram);

  var count = createVertexIndexElementBuffer(canvas);

  canvas.useProgram(shaderProgram);

  canvas.enableDepthTesting();
  canvas.enableDepthFunction();

  var initialTime = null;

  var image = new Image();

  image.onload = function () {
    var gl = canvas.getContext();

    var texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);

    var internalFormat = gl.RGBA;
    var level = 0;
    var srcFormat = gl.RGBA;
    var srcType = gl.UNSIGNED_BYTE;

    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    gl.activeTexture(gl.TEXTURE0);

    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.uniform1i(canvas.getUniformLocation(shaderProgram, 'uSampler'), 0);

    requestAnimationFrame(render);
  };

  image.src = 'texture/cubetexture.png';

  function render(time) {
    if (initialTime === null) {
      initialTime = time;
    }

    var elapsedTime = time - initialTime,
        xAngle = elapsedTime / 1000,
        yAngle = elapsedTime / 1000,
        rotation = new Rotation(xAngle, yAngle);

    canvas.render(rotation, position, perspective, shaderProgram);

    canvas.drawElements(count);

    requestAnimationFrame(render);
  }
};

module.exports = intermediate;

function createAndBindVertexPositionBuffer(canvas, shaderProgram) {
  var vertexPositionData = [+1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, -1.0, -1.0, +1.0, +1.0, +1.0, -1.0, +1.0, +1.0, +1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, -1.0, -1.0, -1.0, -1.0, -1.0],
      vertexPositionBuffer = canvas.createBuffer(vertexPositionData),
      vertexPositionAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexPosition'),
      vertexPositionComponents = 3;

  canvas.bindBuffer(vertexPositionBuffer, vertexPositionAttributeLocation, vertexPositionComponents);

  var vertexPositionDataLength = vertexPositionData.length,
      count = vertexPositionDataLength / vertexPositionComponents;

  return count;
}

function createAndBindVertexColourBuffer(canvas, shaderProgram) {
  var vertexColourData = [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0],
      vertexColourBuffer = canvas.createBuffer(vertexColourData),
      vertexColourAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aVertexColour'),
      vertexColourComponents = 4;

  canvas.bindBuffer(vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);
}

function createAndBindTextureCoordinateBuffer(canvas, shaderProgram) {
  var textureCoordinateData = [0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0],
      textureCoordinateBuffer = canvas.createBuffer(textureCoordinateData),
      textureCoordinateAttributeLocation = canvas.getAttributeLocation(shaderProgram, 'aTextureCoordinate'),
      textureCoordinateComponents = 2;

  canvas.bindBuffer(textureCoordinateBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
}

function createVertexIndexElementBuffer(canvas) {
  var vertexIndexData = [0, 1, 2, 1, 2, 3, 4, 5, 6, 5, 6, 7, 8, 9, 10, 9, 10, 11, 12, 13, 14, 13, 14, 15, 16, 17, 18, 17, 18, 19, 20, 21, 22, 21, 22, 23],
      vertexIndexElementBuffer = canvas.createElementBuffer(vertexIndexData),
      vertexIndexDataLength = vertexIndexData.length,
      count = vertexIndexDataLength; ///

  canvas.bindElementBuffer(vertexIndexElementBuffer);

  return count;
}

},{"../canvas":1,"../perspective":14,"../position":15,"../rotation":16}],6:[function(require,module,exports){
'use strict';

var Canvas = require('../canvas'),
    CanvasElement = require('../canvasElement');

var schoonerCecilie = function schoonerCecilie() {};

module.exports = schoonerCecilie;

},{"../canvas":1,"../canvasElement":2}],7:[function(require,module,exports){
'use strict';

var mat4 = require('gl-mat4');

var webGLDemo = function webGLDemo() {
  var canvas = document.querySelector('canvas');
  var gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  var vsSource = '\n    attribute vec4 aVertexPosition;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n\n    void main() {\n      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n    }\n  ';

  var fsSource = '\n    void main() {\n      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n    }\n  ';

  var shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  var programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition')
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')
    }
  };

  var buffers = initBuffers(gl);

  drawScene(gl, programInfo, buffers);
};

module.exports = webGLDemo;

function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  var fieldOfView = 45 * Math.PI / 180; // in radians
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 0.1;
  var zFar = 100.0;
  var projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  var modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix, // destination matrix
  modelViewMatrix, // matrix to translate
  [-0.0, 0.0, -6.0]); // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    var numComponents = 2;
    var type = gl.FLOAT;
    var normalize = false;
    var stride = 0;
    var offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

  {
    var _offset = 0;
    var vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, _offset, vertexCount);
  }
}

function initShaderProgram(gl, vsSource, fsSource) {
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

function loadShader(gl, type, source) {
  var shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function initBuffers(gl) {

  var positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return {
    position: positionBuffer
  };
}

},{"gl-mat4":27}],8:[function(require,module,exports){
'use strict';

function createBuffer(data) {
  var target = this.ARRAY_BUFFER_TARGET,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data),
      usage = this.STATIC_DRAW_USAGE;

  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var target = this.ARRAY_BUFFER_TARGET,
      type = this.FLOAT_TYPE,
      normalize = false,
      stride = 0,
      offset = 0;

  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);

  this.context.enableVertexAttribArray(attributeLocation);
}

function createElementBuffer(data) {
  var target = this.ELEMENT_ARRAY_BUFFER_TARGET,
      elementBuffer = this.context.createBuffer(),
      uint16Array = new Uint16Array(data),
      usage = this.STATIC_DRAW_USAGE;

  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  var target = this.ELEMENT_ARRAY_BUFFER_TARGET;

  this.context.bindBuffer(target, elementBuffer);
}

var bufferMixin = {
  createBuffer: createBuffer,
  bindBuffer: bindBuffer,
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer
};

module.exports = bufferMixin;

},{}],9:[function(require,module,exports){
'use strict';

var defaultRed = 0.0,
    defaultBlue = 0.0,
    defaultGreen = 0.0,
    defaultAlpha = 1.0;

function clearColour() {
  var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRed;
  var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGreen;
  var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBlue;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAlpha;
  this.context.clearColor(red, green, blue, alpha);
}

function clearColourBuffer() {
  var mask = this.COLOR_BUFFER_BIT_MASK;

  this.context.clear(mask);
}

var colourMixin = {
  clearColour: clearColour,
  clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;

},{}],10:[function(require,module,exports){
'use strict';

var defaultDepth = 1.0;

function clearDepth() {
  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDepth;
  this.context.clearDepth(depth);
}

function clearDepthBuffer() {
  var mask = this.DEPTH_BUFFER_BIT_MASK;

  this.context.clear(mask);
}

function enableDepthTesting() {
  var cap = this.DEPTH_TEST_CAP;

  this.context.enable(cap);
}

function enableDepthFunction() {
  var func = this.LEQUAL_FUNCTION;

  this.context.depthFunc(func);
}

var depthMixin = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

module.exports = depthMixin;

},{}],11:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

var bufferMixin = {
  applyMatrix: applyMatrix
};

module.exports = bufferMixin;

},{}],12:[function(require,module,exports){
'use strict';

function createShader(type, shaderSource) {
  var shader = this.context.createShader(type),
      pname = this.COMPILE_STATUS_PNAME;

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  var compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
  }

  return shader;
}

function createVertexShader(vertexShaderSource) {
  var type = this.VERTEX_SHADER_TYPE,
      vertexShader = this.createShader(type, vertexShaderSource);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource) {
  var type = this.FRAGMENT_SHADER_TYPE,
      vertexShader = this.createShader(type, fragmentShaderSource);

  return vertexShader;
}

function createShaderProgram(vertexShaderSource, fragmentShaderSource) {
  var shaderProgram = this.context.createProgram(),
      vertexShader = this.createVertexShader(vertexShaderSource),
      fragmentShader = this.createFragmentShader(fragmentShaderSource),
      pname = this.LINK_STATUS_PNAME;

  this.context.attachShader(shaderProgram, vertexShader);
  this.context.attachShader(shaderProgram, fragmentShader);

  this.context.linkProgram(shaderProgram);

  var linkStatus = this.context.getProgramParameter(shaderProgram, pname);

  if (!linkStatus) {
    var message = this.context.getProgramInfoLog(shaderProgram); ///

    throw new Error('Unable to create the shader program, \'' + message + '\'.');
  }

  return shaderProgram;
}

var shaderMixin = {
  createShader: createShader,
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader,
  createShaderProgram: createShaderProgram
};

module.exports = shaderMixin;

},{}],13:[function(require,module,exports){
'use strict';

function createTexture(image) {
  var target = this.TEXTURE_2D_TARGET,
      texture = this.context.createTexture(),
      level = 1,
      internalFormat = this.RGBA_FORMAT,
      format = this.RGBA_FORMAT,
      type = this.UNSIGNED_BYTE_TYPE;

  this.context.bindTexture(target, texture);

  this.context.texImage2D(target, level, internalFormat, format, type, image);

  // this.context.texParameteri(target, this.TEXTURE_WRAP_S_PNAME, this.CLAMP_TO_EDGE_PARAM);
  // this.context.texParameteri(target, this.TEXTURE_WRAP_T_PNAME, this.CLAMP_TO_EDGE_PARAM);
  // this.context.texParameteri(target, this.TEXTURE_MIN_FILTER_PNAME, this.LINEAR_PARAM);

  return texture;
}

var textureMixin = {
  createTexture: createTexture
};

module.exports = textureMixin;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 0.1,
    defaultZFar = 100.0;

var Perspective = function () {
  function Perspective(clientWidth, clientHeight) {
    var fieldOfView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFieldOfView;
    var zNear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultZNear;
    var zFar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultZFar;

    _classCallCheck(this, Perspective);

    var aspectRatio = clientWidth / clientHeight;

    this.matrix = mat4.create();

    mat4.perspective(this.matrix, fieldOfView, aspectRatio, zNear, zFar);
  }

  _createClass(Perspective, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;

},{"gl-mat4":27}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXOffset = +0.0,
    defaultYOffset = +0.0,
    defaultZOffset = -6.0;

var Position = function () {
  function Position() {
    var xOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXOffset;
    var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYOffset;
    var zOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZOffset;

    _classCallCheck(this, Position);

    this.matrix = mat4.create();

    var offsetVector = [xOffset, yOffset, zOffset];

    mat4.translate(this.matrix, this.matrix, offsetVector);
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Position;
}();

module.exports = Position;

},{"gl-mat4":27}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 6.0;

var Rotation = function () {
  function Rotation() {
    var xAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXAngle;
    var yAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYAngle;
    var zAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZAngle;

    _classCallCheck(this, Rotation);

    this.matrix = mat4.create();

    var xAxisVectorArray = [1, 0, 0],
        yAxisVectorArray = [0, 1, 0],
        zAxisVectorArray = [0, 0, 1];

    mat4.rotate(this.matrix, this.matrix, xAngle, xAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, yAngle, yAxisVectorArray);
    mat4.rotate(this.matrix, this.matrix, zAngle, zAxisVectorArray);
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;

},{"gl-mat4":27}],17:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{"./adjoint":18,"./clone":19,"./copy":20,"./create":21,"./determinant":22,"./fromQuat":23,"./fromRotationTranslation":24,"./frustum":25,"./identity":26,"./invert":28,"./lookAt":29,"./multiply":30,"./ortho":31,"./perspective":32,"./perspectiveFromFieldOfView":33,"./rotate":34,"./rotateX":35,"./rotateY":36,"./rotateZ":37,"./scale":38,"./str":39,"./translate":40,"./transpose":41}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
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
},{"./identity":26}],30:[function(require,module,exports){
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
},{}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
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
},{}],33:[function(require,module,exports){
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


},{}],34:[function(require,module,exports){
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
},{}],35:[function(require,module,exports){
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
},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{}],39:[function(require,module,exports){
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
},{}],40:[function(require,module,exports){
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
},{}],41:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY2FudmFzLmpzIiwiZXM2L2NhbnZhc0VsZW1lbnQuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UuanMiLCJlczYvZXhhbXBsZXMvaW50ZXJtZWRpYXRlLmpzIiwiZXM2L2V4YW1wbGVzL3NjaG9vbmVyQ2VjaWxpZS5qcyIsImVzNi9leGFtcGxlcy93ZWJHTERlbW8uanMiLCJlczYvbWl4aW4vYnVmZmVyLmpzIiwiZXM2L21peGluL2NvbG91ci5qcyIsImVzNi9taXhpbi9kZXB0aC5qcyIsImVzNi9taXhpbi9tYXRyaXguanMiLCJlczYvbWl4aW4vc2hhZGVyLmpzIiwiZXM2L21peGluL3RleHR1cmUuanMiLCJlczYvcGVyc3BlY3RpdmUuanMiLCJlczYvcG9zaXRpb24uanMiLCJlczYvcm90YXRpb24uanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Fkam9pbnQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NvcHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9kZXRlcm1pbmFudC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Zyb21RdWF0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcnVzdHVtLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ludmVydC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2xvb2tBdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvb3J0aG8uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9wZXJzcGVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zdHIuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc2xhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC90cmFuc3Bvc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7O0FBRUEsSUFBTSxPQUFPLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU0sZUFBZSxRQUFRLGlCQUFSLENBQXJCO0FBQUEsSUFDTSxlQUFlLFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNLGNBQWMsUUFBUSxnQkFBUixDQUZwQjtBQUFBLElBR00sY0FBYyxRQUFRLGdCQUFSLENBSHBCO0FBQUEsSUFJTSxjQUFjLFFBQVEsZ0JBQVIsQ0FKcEI7QUFBQSxJQUtNLGNBQWMsUUFBUSxnQkFBUixDQUxwQjtBQUFBLElBTU0sYUFBYSxRQUFRLGVBQVIsQ0FObkI7O0lBUVEsc0IsR0FBMkIsWSxDQUEzQixzQjs7O0FBRVIsSUFBTSxnQkFBZ0IsQ0FBdEI7O0lBRU0sTTtBQUNKLG9CQUFpQztBQUFBLFFBQXJCLFFBQXFCLHVFQUFWLFFBQVU7O0FBQUE7O0FBQy9CLFFBQU0sYUFBYSx1QkFBdUIsUUFBdkIsQ0FBbkI7QUFBQSxRQUNNLFVBQVUsV0FBVyxVQUFYLENBQXNCLE9BQXRCLENBRGhCOztBQUdBLFFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpO1xuXG5jb25zdCB7IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3IgfSA9IGRvbVV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdE9mZnNldCA9IDA7XG5cbmNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2NhbnZhcycpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gaW5pdGlhbGlzZSB0aGUgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuQ0xBTVBfVE9fRURHRV9QQVJBTSA9IHRoaXMuY29udGV4dC5DTEFNUF9UT19FREdFOyAgLy8vXG4gICAgdGhpcy5MSU5FQVJfUEFSQU0gPSB0aGlzLmNvbnRleHQuTElORUFSOyAgLy8vXG4gICAgdGhpcy5SR0JBX0ZPUk1BVCA9IHRoaXMuY29udGV4dC5SR0JBOyAgLy8vXG4gICAgdGhpcy5ERVBUSF9URVNUX0NBUCA9IHRoaXMuY29udGV4dC5ERVBUSF9URVNUOyAgLy8vXG4gICAgdGhpcy5MRVFVQUxfRlVOQ1RJT04gPSB0aGlzLmNvbnRleHQuTEVRVUFMOyAvLy9cbiAgICB0aGlzLlNUQVRJQ19EUkFXX1VTQUdFID0gdGhpcy5jb250ZXh0LlNUQVRJQ19EUkFXOyAvLy9cbiAgICB0aGlzLkxJTktfU1RBVFVTX1BOQU1FID0gdGhpcy5jb250ZXh0LkxJTktfU1RBVFVTOyAgLy8vXG4gICAgdGhpcy5DT01QSUxFX1NUQVRVU19QTkFNRSA9IHRoaXMuY29udGV4dC5DT01QSUxFX1NUQVRVUzsgIC8vL1xuICAgIHRoaXMuVEVYVFVSRV9XUkFQX1NfUE5BTUUgPSB0aGlzLmNvbnRleHQuVEVYVFVSRV9XUkFQX1M7ICAvLy9cbiAgICB0aGlzLlRFWFRVUkVfV1JBUF9UX1BOQU1FID0gdGhpcy5jb250ZXh0LlRFWFRVUkVfV1JBUF9UOyAgLy8vXG4gICAgdGhpcy5URVhUVVJFX01JTl9GSUxURVJfUE5BTUUgPSB0aGlzLmNvbnRleHQuVEVYVFVSRV9NSU5fRklMVEVSOyAgLy8vXG4gICAgdGhpcy5UUklBTkdMRV9TVFJJUF9NT0RFID0gdGhpcy5jb250ZXh0LlRSSUFOR0xFX1NUUklQOyAgLy8vXG4gICAgdGhpcy5UUklBTkdMRVNfTU9ERSA9IHRoaXMuY29udGV4dC5UUklBTkdMRVM7ICAvLy9cbiAgICB0aGlzLkZMT0FUX1RZUEUgPSB0aGlzLmNvbnRleHQuRkxPQVQ7ICAvLy9cbiAgICB0aGlzLlVOU0lHTkVEX0JZVEVfVFlQRSA9IHRoaXMuY29udGV4dC5VTlNJR05FRF9CWVRFOyAvLy9cbiAgICB0aGlzLlZFUlRFWF9TSEFERVJfVFlQRSA9IHRoaXMuY29udGV4dC5WRVJURVhfU0hBREVSOyAvLy9cbiAgICB0aGlzLlVOU0lHTkVEX1NIT1JUX1RZUEUgPSB0aGlzLmNvbnRleHQuVU5TSUdORURfU0hPUlQ7ICAvLy9cbiAgICB0aGlzLkZSQUdNRU5UX1NIQURFUl9UWVBFID0gdGhpcy5jb250ZXh0LkZSQUdNRU5UX1NIQURFUjsgLy8vXG4gICAgdGhpcy5DT0xPUl9CVUZGRVJfQklUX01BU0sgPSB0aGlzLmNvbnRleHQuQ09MT1JfQlVGRkVSX0JJVDsgLy8vXG4gICAgdGhpcy5ERVBUSF9CVUZGRVJfQklUX01BU0sgPSB0aGlzLmNvbnRleHQuREVQVEhfQlVGRkVSX0JJVDsgLy8vXG4gICAgdGhpcy5URVhUVVJFXzJEX1RBUkdFVCA9IHRoaXMuY29udGV4dC5URVhUVVJFXzJEOyAvLy9cbiAgICB0aGlzLkFSUkFZX0JVRkZFUl9UQVJHRVQgPSB0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSOyAgLy8vXG4gICAgdGhpcy5FTEVNRU5UX0FSUkFZX0JVRkZFUl9UQVJHRVQgPSB0aGlzLmNvbnRleHQuRUxFTUVOVF9BUlJBWV9CVUZGRVI7ICAvLy9cbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgdXNlUHJvZ3JhbShwcm9ncmFtKSB7IHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pOyB9XG4gIFxuICByZW5kZXIocm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgc2hhZGVyUHJvZ3JhbSkge1xuICAgIGNvbnN0IHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VSb3RhdGlvbk1hdHJpeCcpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VQb3NpdGlvbk1hdHJpeCcpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VQZXJzcGVjdGl2ZU1hdHJpeCcpO1xuXG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcGVyc3BlY3RpdmVNYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMuVFJJQU5HTEVTX01PREUsXG4gICAgICAgICAgdHlwZSA9IHRoaXMuVU5TSUdORURfU0hPUlRfVFlQRTtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IHtcbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdlYkdMRGVtbzogcmVxdWlyZSgnLi9leGFtcGxlcy93ZWJHTERlbW8nKSxcbiAgaW50ZXJtZWRpYXRlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2ludGVybWVkaWF0ZScpLFxuICBjb250YWluZXJIb3VzZTogcmVxdWlyZSgnLi9leGFtcGxlcy9jb250YWluZXJIb3VzZScpLFxuICBzY2hvb25lckNlY2lsaWU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvc2Nob29uZXJDZWNpbGllJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTW9kZWxWaWV3ID0gcmVxdWlyZSgnLi4vcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi4vcGVyc3BlY3RpdmUnKTtcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgc2hhZGVyUHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVTaGFkZXJQcm9ncmFtKCksXG4gICAgICAgIHBvc2l0aW9ucyA9IFtcbiAgICAgICAgICArMS4wLCArMS4wLFxuICAgICAgICAgIC0xLjAsICsxLjAsXG4gICAgICAgICAgKzEuMCwgLTEuMCxcbiAgICAgICAgICAtMS4wLCAtMS4wXG4gICAgICAgIF0sXG4gICAgICAgIHBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIocG9zaXRpb25zKSxcbiAgICAgICAgY2xpZW50V2lkdGggPSBjYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgY2xpZW50SGVpZ2h0ID0gY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICBtb2RlbFZpZXcgPSBuZXcgTW9kZWxWaWV3KCksXG4gICAgICAgIHBlcnNwZWN0aXZlID0gbmV3IFBlcnNwZWN0aXZlKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpLFxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkxvY2F0aW9uID0gY2FudmFzLmdldFByb2dyYW1BdHRyaWJ1dGVMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyksXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXhMb2NhdGlvbiA9IGNhbnZhcy5nZXRQcm9ncmFtVW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UHJvamVjdGlvbk1hdHJpeCcpLFxuICAgICAgICBtb2RlbFZpZXdNYXRyaXhMb2NhdGlvbiA9IGNhbnZhcy5nZXRQcm9ncmFtVW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1TW9kZWxWaWV3TWF0cml4Jyk7XG5cbiAgY2FudmFzLmNsZWFyRGVwdGgoKTtcbiAgY2FudmFzLmNsZWFyQ29sb3VyKCk7XG4gIGNhbnZhcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gIGNhbnZhcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuXG4gIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICBjYW52YXMudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgY2FudmFzLnVzZVBlcnNwZWN0aXZlKHByb2plY3Rpb25NYXRyaXhMb2NhdGlvbiwgcGVyc3BlY3RpdmUpOyAvLy9cbiAgY2FudmFzLnVzZU1vZGVsVmlldyhtb2RlbFZpZXdNYXRyaXhMb2NhdGlvbiwgbW9kZWxWaWV3KTtcbiAgXG4gIGNhbnZhcy51c2VCdWZmZXIodmVydGV4UG9zaXRpb25Mb2NhdGlvbiwgcG9zaXRpb25zQnVmZmVyKTsgLy8vXG5cbiAgY29uc3Qgb2Zmc2V0ID0gMCxcbiAgICAgICAgdmVydGV4Q291bnQgPSA0O1xuXG4gIGNhbnZhcy5yZW5kZXIob2Zmc2V0LCB2ZXJ0ZXhDb3VudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi4vcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi4vcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi4vcGVyc3BlY3RpdmUnKTtcblxuY29uc3QgaW50ZXJtZWRpYXRlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhDb2xvdXI7XG4gIC8vIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gIC8vIHZDb2xvdXIgPSBhVmVydGV4Q29sb3VyO1xuXG4gIC8vIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG5cbiAgY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICBcbiAgICAgICAgICBhdHRyaWJ1dGUgdmVjNCBhVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgIHVuaWZvcm0gbWF0NCB1Um90YXRpb25NYXRyaXg7XG4gICAgICAgICAgdW5pZm9ybSBtYXQ0IHVQb3NpdGlvbk1hdHJpeDtcbiAgICAgICAgICB1bmlmb3JtIG1hdDQgdVBlcnNwZWN0aXZlTWF0cml4O1xuICAgICAgICAgIFxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICBcbiAgICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHVQZXJzcGVjdGl2ZU1hdHJpeCAqIHVQb3NpdGlvbk1hdHJpeCAqIHVSb3RhdGlvbk1hdHJpeCAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9IGFUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGAsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xuXG4gICAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYCxcbiAgICAgICAgc2hhZGVyUHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVTaGFkZXJQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBjbGllbnRXaWR0aCA9IGNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICBjbGllbnRIZWlnaHQgPSBjYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKCksXG4gICAgICAgIHBlcnNwZWN0aXZlID0gbmV3IFBlcnNwZWN0aXZlKGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQpO1xuXG4gIGNyZWF0ZUFuZEJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMsIHNoYWRlclByb2dyYW0pO1xuXG4gIC8vIGNyZWF0ZUFuZEJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzLCBzaGFkZXJQcm9ncmFtKTtcblxuICBjcmVhdGVBbmRCaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzLCBzaGFkZXJQcm9ncmFtKTtcblxuICBjb25zdCBjb3VudCA9IGNyZWF0ZVZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuXG4gIGNhbnZhcy51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICBsZXQgaW5pdGlhbFRpbWUgPSBudWxsO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcblxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBnbC5SR0JBO1xuICAgIGNvbnN0IGxldmVsID0gMDtcbiAgICBjb25zdCBzcmNGb3JtYXQgPSBnbC5SR0JBO1xuICAgIGNvbnN0IHNyY1R5cGUgPSBnbC5VTlNJR05FRF9CWVRFO1xuXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHNyY0Zvcm1hdCwgc3JjVHlwZSwgaW1hZ2UpO1xuXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcblxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gICAgZ2wudW5pZm9ybTFpKGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VTYW1wbGVyJyksIDApO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgfTtcblxuICBpbWFnZS5zcmMgPSAndGV4dHVyZS9jdWJldGV4dHVyZS5wbmcnO1xuXG4gIGZ1bmN0aW9uIHJlbmRlcih0aW1lKSB7XG4gICAgaWYgKGluaXRpYWxUaW1lID09PSBudWxsKSB7XG4gICAgICBpbml0aWFsVGltZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSB0aW1lIC0gaW5pdGlhbFRpbWUsXG4gICAgICAgICAgeEFuZ2xlID0gZWxhcHNlZFRpbWUgLyAxMDAwLFxuICAgICAgICAgIHlBbmdsZSA9IGVsYXBzZWRUaW1lIC8gMTAwMCxcbiAgICAgICAgICByb3RhdGlvbiA9IG5ldyBSb3RhdGlvbih4QW5nbGUsIHlBbmdsZSk7XG5cbiAgICBjYW52YXMucmVuZGVyKHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIHNoYWRlclByb2dyYW0pO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhjb3VudCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcm1lZGlhdGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMsIHNoYWRlclByb2dyYW0pIHtcbiAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gW1xuICAgICAgICAgICsxLjAsICsxLjAsICsxLjAsXG4gICAgICAgICAgLTEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgICArMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAgIC0xLjAsIC0xLjAsICsxLjAsXG5cbiAgICAgICAgICArMS4wLCArMS4wLCAtMS4wLFxuICAgICAgICAgIC0xLjAsICsxLjAsIC0xLjAsXG4gICAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcbiAgICAgICAgICAtMS4wLCAtMS4wLCAtMS4wLFxuXG4gICAgICAgICAgKzEuMCwgKzEuMCwgKzEuMCxcbiAgICAgICAgICArMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAgICsxLjAsICsxLjAsIC0xLjAsXG4gICAgICAgICAgKzEuMCwgLTEuMCwgLTEuMCxcblxuICAgICAgICAgIC0xLjAsICsxLjAsICsxLjAsXG4gICAgICAgICAgLTEuMCwgLTEuMCwgKzEuMCxcbiAgICAgICAgICAtMS4wLCArMS4wLCAtMS4wLFxuICAgICAgICAgIC0xLjAsIC0xLjAsIC0xLjAsXG5cbiAgICAgICAgICArMS4wLCArMS4wLCArMS4wLFxuICAgICAgICAgIC0xLjAsICsxLjAsICsxLjAsXG4gICAgICAgICAgKzEuMCwgKzEuMCwgLTEuMCxcbiAgICAgICAgICAtMS4wLCArMS4wLCAtMS4wLFxuXG4gICAgICAgICAgKzEuMCwgLTEuMCwgKzEuMCxcbiAgICAgICAgICAtMS4wLCAtMS4wLCArMS4wLFxuICAgICAgICAgICsxLjAsIC0xLjAsIC0xLjAsXG4gICAgICAgICAgLTEuMCwgLTEuMCwgLTEuMFxuICAgICAgICBdLFxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyksXG4gICAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbiAgY2FudmFzLmJpbmRCdWZmZXIodmVydGV4UG9zaXRpb25CdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG5cbiAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoID0gdmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgY291bnQgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggLyB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHM7XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRCaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcywgc2hhZGVyUHJvZ3JhbSkge1xuICBjb25zdCB2ZXJ0ZXhDb2xvdXJEYXRhID0gW1xuICAgICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgICAxLjAsICAwLjAsICAwLjAsICAxLjAsXG4gICAgICAgICAgMS4wLCAgMC4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAgIDEuMCwgIDAuMCwgIDAuMCwgIDEuMCxcblxuICAgICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgICAwLjAsICAxLjAsICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAgIDAuMCwgIDEuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgICAwLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAgIDAuMCwgIDEuMCwgIDAuMCwgIDEuMCxcblxuICAgICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgICAxLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgICAgMS4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAgIDEuMCwgIDAuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcbiAgICAgICAgICAwLjAsICAwLjAsICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMC4wLCAgMS4wLCAgMS4wLFxuICAgICAgICAgIDAuMCwgIDAuMCwgIDEuMCwgIDEuMCxcblxuICAgICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMCxcbiAgICAgICAgICAxLjAsICAxLjAsICAwLjAsICAxLjAsXG4gICAgICAgICAgMS4wLCAgMS4wLCAgMC4wLCAgMS4wLFxuICAgICAgICAgIDEuMCwgIDEuMCwgIDAuMCwgIDEuMFxuICAgICAgICBdLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91ckRhdGEpLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihzaGFkZXJQcm9ncmFtLCAnYVZlcnRleENvbG91cicpLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICBjYW52YXMuYmluZEJ1ZmZlcih2ZXJ0ZXhDb2xvdXJCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQmluZFRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcywgc2hhZGVyUHJvZ3JhbSkge1xuICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSBbXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wLFxuXG4gICAgICAgICAgMC4wLCAgMC4wLFxuICAgICAgICAgIDEuMCwgIDAuMCxcbiAgICAgICAgICAxLjAsICAxLjAsXG4gICAgICAgICAgMC4wLCAgMS4wXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpLFxuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhVGV4dHVyZUNvb3JkaW5hdGUnKSxcbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICBjYW52YXMuYmluZEJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhJbmRleERhdGEgPSBbXG4gICAgICAgICAgMCwgIDEsICAyLFxuICAgICAgICAgIDEsICAyLCAgMyxcbiAgICAgICAgICA0LCAgNSwgIDYsXG4gICAgICAgICAgNSwgIDYsICA3LFxuICAgICAgICAgIDgsICA5LCAxMCxcbiAgICAgICAgICA5LCAxMCwgMTEsXG4gICAgICAgICAgMTIsIDEzLCAxNCxcbiAgICAgICAgICAxMywgMTQsIDE1LFxuICAgICAgICAgIDE2LCAxNywgMTgsXG4gICAgICAgICAgMTcsIDE4LCAxOSxcbiAgICAgICAgICAyMCwgMjEsIDIyLFxuICAgICAgICAgIDIxLCAyMiwgMjNcbiAgICAgICAgXSxcbiAgICAgICAgdmVydGV4SW5kZXhFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhEYXRhKSxcbiAgICAgICAgdmVydGV4SW5kZXhEYXRhTGVuZ3RoID0gdmVydGV4SW5kZXhEYXRhLmxlbmd0aCxcbiAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleERhdGFMZW5ndGg7ICAvLy9cblxuICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKTtcblxuICByZXR1cm4gY291bnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uL2NhbnZhc0VsZW1lbnQnKTtcblxuY29uc3Qgc2Nob29uZXJDZWNpbGllID0gKCkgPT4ge1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjaG9vbmVyQ2VjaWxpZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxuY29uc3Qgd2ViR0xEZW1vID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICBpZiAoIWdsKSB7XG4gICAgYWxlcnQoJ1VuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMLiBZb3VyIGJyb3dzZXIgb3IgbWFjaGluZSBtYXkgbm90IHN1cHBvcnQgaXQuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdnNTb3VyY2UgPSBgXG4gICAgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuXG4gICAgdW5pZm9ybSBtYXQ0IHVNb2RlbFZpZXdNYXRyaXg7XG4gICAgdW5pZm9ybSBtYXQ0IHVQcm9qZWN0aW9uTWF0cml4O1xuXG4gICAgdm9pZCBtYWluKCkge1xuICAgICAgZ2xfUG9zaXRpb24gPSB1UHJvamVjdGlvbk1hdHJpeCAqIHVNb2RlbFZpZXdNYXRyaXggKiBhVmVydGV4UG9zaXRpb247XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IGZzU291cmNlID0gYFxuICAgIHZvaWQgbWFpbigpIHtcbiAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMS4wKTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IGluaXRTaGFkZXJQcm9ncmFtKGdsLCB2c1NvdXJjZSwgZnNTb3VyY2UpO1xuXG4gIGNvbnN0IHByb2dyYW1JbmZvID0ge1xuICAgIHByb2dyYW06IHNoYWRlclByb2dyYW0sXG4gICAgYXR0cmliTG9jYXRpb25zOiB7XG4gICAgICB2ZXJ0ZXhQb3NpdGlvbjogZ2wuZ2V0QXR0cmliTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpLFxuICAgIH0sXG4gICAgdW5pZm9ybUxvY2F0aW9uczoge1xuICAgICAgcHJvamVjdGlvbk1hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UHJvamVjdGlvbk1hdHJpeCcpLFxuICAgICAgbW9kZWxWaWV3TWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VNb2RlbFZpZXdNYXRyaXgnKSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGJ1ZmZlcnMgPSBpbml0QnVmZmVycyhnbCk7XG5cbiAgZHJhd1NjZW5lKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycyk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gd2ViR0xEZW1vO1xuXG5mdW5jdGlvbiBkcmF3U2NlbmUoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJzKSB7XG4gIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTsgIC8vIENsZWFyIHRvIGJsYWNrLCBmdWxseSBvcGFxdWVcbiAgZ2wuY2xlYXJEZXB0aCgxLjApOyAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXZlcnl0aGluZ1xuICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7ICAgICAgICAgICAvLyBFbmFibGUgZGVwdGggdGVzdGluZ1xuICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTsgICAgICAgICAgICAvLyBOZWFyIHRoaW5ncyBvYnNjdXJlIGZhciB0aGluZ3NcblxuICAvLyBDbGVhciB0aGUgY2FudmFzIGJlZm9yZSB3ZSBzdGFydCBkcmF3aW5nIG9uIGl0LlxuXG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcblxuICAvLyBDcmVhdGUgYSBwZXJzcGVjdGl2ZSBtYXRyaXgsIGEgc3BlY2lhbCBtYXRyaXggdGhhdCBpc1xuICAvLyB1c2VkIHRvIHNpbXVsYXRlIHRoZSBkaXN0b3J0aW9uIG9mIHBlcnNwZWN0aXZlIGluIGEgY2FtZXJhLlxuICAvLyBPdXIgZmllbGQgb2YgdmlldyBpcyA0NSBkZWdyZWVzLCB3aXRoIGEgd2lkdGgvaGVpZ2h0XG4gIC8vIHJhdGlvIHRoYXQgbWF0Y2hlcyB0aGUgZGlzcGxheSBzaXplIG9mIHRoZSBjYW52YXNcbiAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzZWUgb2JqZWN0cyBiZXR3ZWVuIDAuMSB1bml0c1xuICAvLyBhbmQgMTAwIHVuaXRzIGF3YXkgZnJvbSB0aGUgY2FtZXJhLlxuXG4gIGNvbnN0IGZpZWxkT2ZWaWV3ID0gNDUgKiBNYXRoLlBJIC8gMTgwOyAgIC8vIGluIHJhZGlhbnNcbiAgY29uc3QgYXNwZWN0ID0gZ2wuY2FudmFzLmNsaWVudFdpZHRoIC8gZ2wuY2FudmFzLmNsaWVudEhlaWdodDtcbiAgY29uc3Qgek5lYXIgPSAwLjE7XG4gIGNvbnN0IHpGYXIgPSAxMDAuMDtcbiAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgLy8gbm90ZTogZ2xtYXRyaXguanMgYWx3YXlzIGhhcyB0aGUgZmlyc3QgYXJndW1lbnRcbiAgLy8gYXMgdGhlIGRlc3RpbmF0aW9uIHRvIHJlY2VpdmUgdGhlIHJlc3VsdC5cbiAgbWF0NC5wZXJzcGVjdGl2ZShwcm9qZWN0aW9uTWF0cml4LFxuICAgICAgZmllbGRPZlZpZXcsXG4gICAgICBhc3BlY3QsXG4gICAgICB6TmVhcixcbiAgICAgIHpGYXIpO1xuXG4gIC8vIFNldCB0aGUgZHJhd2luZyBwb3NpdGlvbiB0byB0aGUgXCJpZGVudGl0eVwiIHBvaW50LCB3aGljaCBpc1xuICAvLyB0aGUgY2VudGVyIG9mIHRoZSBzY2VuZS5cbiAgY29uc3QgbW9kZWxWaWV3TWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAvLyBOb3cgbW92ZSB0aGUgZHJhd2luZyBwb3NpdGlvbiBhIGJpdCB0byB3aGVyZSB3ZSB3YW50IHRvXG4gIC8vIHN0YXJ0IGRyYXdpbmcgdGhlIHNxdWFyZS5cblxuICBtYXQ0LnRyYW5zbGF0ZShtb2RlbFZpZXdNYXRyaXgsICAgICAvLyBkZXN0aW5hdGlvbiBtYXRyaXhcbiAgICAgIG1vZGVsVmlld01hdHJpeCwgICAgIC8vIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAgICAgIFstMC4wLCAwLjAsIC02LjBdKTsgIC8vIGFtb3VudCB0byB0cmFuc2xhdGVcblxuICAvLyBUZWxsIFdlYkdMIGhvdyB0byBwdWxsIG91dCB0aGUgcG9zaXRpb25zIGZyb20gdGhlIHBvc2l0aW9uXG4gIC8vIGJ1ZmZlciBpbnRvIHRoZSB2ZXJ0ZXhQb3NpdGlvbiBhdHRyaWJ1dGUuXG4gIHtcbiAgICBjb25zdCBudW1Db21wb25lbnRzID0gMjtcbiAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7XG4gICAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2U7XG4gICAgY29uc3Qgc3RyaWRlID0gMDtcbiAgICBjb25zdCBvZmZzZXQgPSAwO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJzLnBvc2l0aW9uKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudmVydGV4UG9zaXRpb24sXG4gICAgICAgIG51bUNvbXBvbmVudHMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIG5vcm1hbGl6ZSxcbiAgICAgICAgc3RyaWRlLFxuICAgICAgICBvZmZzZXQpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KFxuICAgICAgICBwcm9ncmFtSW5mby5hdHRyaWJMb2NhdGlvbnMudmVydGV4UG9zaXRpb24pO1xuICB9XG5cbiAgLy8gVGVsbCBXZWJHTCB0byB1c2Ugb3VyIHByb2dyYW0gd2hlbiBkcmF3aW5nXG5cbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcblxuICAvLyBTZXQgdGhlIHNoYWRlciB1bmlmb3Jtc1xuXG4gIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXG4gICAgICBwcm9ncmFtSW5mby51bmlmb3JtTG9jYXRpb25zLnByb2plY3Rpb25NYXRyaXgsXG4gICAgICBmYWxzZSxcbiAgICAgIHByb2plY3Rpb25NYXRyaXgpO1xuICBnbC51bmlmb3JtTWF0cml4NGZ2KFxuICAgICAgcHJvZ3JhbUluZm8udW5pZm9ybUxvY2F0aW9ucy5tb2RlbFZpZXdNYXRyaXgsXG4gICAgICBmYWxzZSxcbiAgICAgIG1vZGVsVmlld01hdHJpeCk7XG5cbiAge1xuICAgIGNvbnN0IG9mZnNldCA9IDA7XG4gICAgY29uc3QgdmVydGV4Q291bnQgPSA0O1xuICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIG9mZnNldCwgdmVydGV4Q291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRTaGFkZXJQcm9ncmFtKGdsLCB2c1NvdXJjZSwgZnNTb3VyY2UpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNTb3VyY2UpO1xuICBjb25zdCBmcmFnbWVudFNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNTb3VyY2UpO1xuXG4gIGNvbnN0IHNoYWRlclByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcblxuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgYWxlcnQoJ1VuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzaGFkZXIgcHJvZ3JhbTogJyArIGdsLmdldFByb2dyYW1JbmZvTG9nKHNoYWRlclByb2dyYW0pKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXJQcm9ncmFtO1xufVxuXG5mdW5jdGlvbiBsb2FkU2hhZGVyKGdsLCB0eXBlLCBzb3VyY2UpIHtcbiAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XG5cbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyczogJyArIGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBpbml0QnVmZmVycyhnbCkge1xuXG4gIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG5cbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcblxuICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgMS4wLCAgMS4wLFxuICAgIC0xLjAsICAxLjAsXG4gICAgMS4wLCAtMS4wLFxuICAgIC0xLjAsIC0xLjAsXG4gIF07XG5cbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KHBvc2l0aW9ucyksXG4gICAgICBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25CdWZmZXIsXG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXMuQVJSQVlfQlVGRkVSX1RBUkdFVCxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpLFxuICAgICAgICB1c2FnZSA9IHRoaXMuU1RBVElDX0RSQVdfVVNBR0U7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXMuQVJSQVlfQlVGRkVSX1RBUkdFVCxcbiAgICAgICAgdHlwZSA9IHRoaXMuRkxPQVRfVFlQRSxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcy5FTEVNRU5UX0FSUkFZX0JVRkZFUl9UQVJHRVQsXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICB1c2FnZSA9IHRoaXMuU1RBVElDX0RSQVdfVVNBR0U7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdGhpcy5FTEVNRU5UX0FSUkFZX0JVRkZFUl9UQVJHRVQ7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW4gPSB7XG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyLFxuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSZWQgPSAwLjAsXG4gICAgICBkZWZhdWx0Qmx1ZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRHcmVlbiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBbHBoYSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIocmVkID0gZGVmYXVsdFJlZCwgZ3JlZW4gPSBkZWZhdWx0R3JlZW4sIGJsdWUgPSBkZWZhdWx0Qmx1ZSwgYWxwaGEgPSBkZWZhdWx0QWxwaGEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCBtYXNrID0gdGhpcy5DT0xPUl9CVUZGRVJfQklUX01BU0s7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbiA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29sb3VyTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IH1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgbWFzayA9IHRoaXMuREVQVEhfQlVGRkVSX0JJVF9NQVNLO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCBjYXAgPSB0aGlzLkRFUFRIX1RFU1RfQ0FQO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhGdW5jdGlvbigpIHtcbiAgY29uc3QgZnVuYyA9IHRoaXMuTEVRVUFMX0ZVTkNUSU9OO1xuICBcbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhmdW5jKTsgXG59XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSB7XG4gIGNsZWFyRGVwdGg6IGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXI6IGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZzogZW5hYmxlRGVwdGhUZXN0aW5nLFxuICBlbmFibGVEZXB0aEZ1bmN0aW9uOiBlbmFibGVEZXB0aEZ1bmN0aW9uXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcHRoTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbmNvbnN0IGJ1ZmZlck1peGluID0ge1xuICBhcHBseU1hdHJpeDogYXBwbHlNYXRyaXhcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3Qgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKSxcbiAgICAgICAgcG5hbWUgPSB0aGlzLkNPTVBJTEVfU1RBVFVTX1BOQU1FO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuYCk7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHR5cGUgPSB0aGlzLlZFUlRFWF9TSEFERVJfVFlQRSxcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICBjb25zdCB0eXBlID0gdGhpcy5GUkFHTUVOVF9TSEFERVJfVFlQRSxcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlclByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSkge1xuICBjb25zdCBzaGFkZXJQcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKSxcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcG5hbWUgPSB0aGlzLkxJTktfU1RBVFVTX1BOQU1FO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIoc2hhZGVyUHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuXG4gIGNvbnN0IGxpbmtTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbVBhcmFtZXRlcihzaGFkZXJQcm9ncmFtLCBwbmFtZSk7XG5cbiAgaWYgKCFsaW5rU3RhdHVzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKTsgIC8vL1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIgcHJvZ3JhbSwgJyR7bWVzc2FnZX0nLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlclByb2dyYW07XG59XG5cbmNvbnN0IHNoYWRlck1peGluID0ge1xuICBjcmVhdGVTaGFkZXI6IGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyOiBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyOiBjcmVhdGVGcmFnbWVudFNoYWRlcixcbiAgY3JlYXRlU2hhZGVyUHJvZ3JhbTogY3JlYXRlU2hhZGVyUHJvZ3JhbVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFkZXJNaXhpbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSkge1xuICBjb25zdCB0YXJnZXQgPSB0aGlzLlRFWFRVUkVfMkRfVEFSR0VULFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKSxcbiAgICAgICAgbGV2ZWwgPSAxLFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IHRoaXMuUkdCQV9GT1JNQVQsXG4gICAgICAgIGZvcm1hdCA9IHRoaXMuUkdCQV9GT1JNQVQsXG4gICAgICAgIHR5cGUgPSB0aGlzLlVOU0lHTkVEX0JZVEVfVFlQRTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgLy8gdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkodGFyZ2V0LCB0aGlzLlRFWFRVUkVfV1JBUF9TX1BOQU1FLCB0aGlzLkNMQU1QX1RPX0VER0VfUEFSQU0pO1xuICAvLyB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0YXJnZXQsIHRoaXMuVEVYVFVSRV9XUkFQX1RfUE5BTUUsIHRoaXMuQ0xBTVBfVE9fRURHRV9QQVJBTSk7XG4gIC8vIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgdGhpcy5URVhUVVJFX01JTl9GSUxURVJfUE5BTUUsIHRoaXMuTElORUFSX1BBUkFNKTtcbiAgXG4gIHJldHVybiB0ZXh0dXJlO1xufVxuXG5jb25zdCB0ZXh0dXJlTWl4aW4gPSB7XG4gIGNyZWF0ZVRleHR1cmU6IGNyZWF0ZVRleHR1cmVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGV4dHVyZU1peGluO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IGRlZmF1bHRGaWVsZE9mVmlldyA9IDQ1ICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIGRlZmF1bHRaTmVhciA9IDAuMSxcbiAgICAgIGRlZmF1bHRaRmFyID0gMTAwLjA7XG5cbmNsYXNzIFBlcnNwZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCwgZmllbGRPZlZpZXcgPSBkZWZhdWx0RmllbGRPZlZpZXcsIHpOZWFyID0gZGVmYXVsdFpOZWFyLCB6RmFyID0gZGVmYXVsdFpGYXIpIHtcbiAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGNsaWVudFdpZHRoIC8gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgbWF0NC5wZXJzcGVjdGl2ZSh0aGlzLm1hdHJpeCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzcGVjdGl2ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WE9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0WU9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0Wk9mZnNldCA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoeE9mZnNldCA9IGRlZmF1bHRYT2Zmc2V0LCB5T2Zmc2V0ID0gZGVmYXVsdFlPZmZzZXQsIHpPZmZzZXQgPSBkZWZhdWx0Wk9mZnNldCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIGNvbnN0IG9mZnNldFZlY3RvciA9IFtcbiAgICAgIHhPZmZzZXQsXG4gICAgICB5T2Zmc2V0LFxuICAgICAgek9mZnNldFxuICAgIF07XG5cbiAgICBtYXQ0LnRyYW5zbGF0ZSh0aGlzLm1hdHJpeCwgdGhpcy5tYXRyaXgsIG9mZnNldFZlY3Rvcik7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSA2LjA7XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IoeEFuZ2xlID0gZGVmYXVsdFhBbmdsZSwgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSwgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIGNvbnN0IHhBeGlzVmVjdG9yQXJyYXkgPSBbMSwgMCwgMF0sXG4gICAgICAgICAgeUF4aXNWZWN0b3JBcnJheSA9IFswLCAxLCAwXSxcbiAgICAgICAgICB6QXhpc1ZlY3RvckFycmF5ID0gWzAsIDAsIDFdO1xuXG4gICAgbWF0NC5yb3RhdGUodGhpcy5tYXRyaXgsIHRoaXMubWF0cml4LCB4QW5nbGUsIHhBeGlzVmVjdG9yQXJyYXkpO1xuICAgIG1hdDQucm90YXRlKHRoaXMubWF0cml4LCB0aGlzLm1hdHJpeCwgeUFuZ2xlLCB5QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZSh0aGlzLm1hdHJpeCwgdGhpcy5tYXRyaXgsIHpBbmdsZSwgekF4aXNWZWN0b3JBcnJheSk7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Jcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgb3V0WzBdICA9ICAoYTExICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbMV0gID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFsyXSAgPSAgKGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzNdICA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbNF0gID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFs1XSAgPSAgKGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzZdICA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbN10gID0gIChhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs4XSAgPSAgKGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSk7XG4gICAgb3V0WzldICA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgICBvdXRbMTBdID0gIChhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMV0gPSAtKGEwMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgICBvdXRbMTNdID0gIChhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkpO1xuICAgIG91dFsxNF0gPSAtKGEwMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgb3V0WzE1XSA9ICAoYTAwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGRldGVybWluYW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21RdWF0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeXggPSB5ICogeDIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB6eCA9IHogKiB4MixcbiAgICAgICAgenkgPSB6ICogeTIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbMl0gPSB6eCAtIHd5O1xuICAgIG91dFszXSA9IDA7XG5cbiAgICBvdXRbNF0gPSB5eCAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICAgIG91dFs2XSA9IHp5ICsgd3g7XG4gICAgb3V0WzddID0gMDtcblxuICAgIG91dFs4XSA9IHp4ICsgd3k7XG4gICAgb3V0WzldID0genkgLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gICAgb3V0WzExXSA9IDA7XG5cbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb247XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIHZhciBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBxLCB2KSB7XG4gICAgLy8gUXVhdGVybmlvbiBtYXRoXG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB4eSA9IHggKiB5MixcbiAgICAgICAgeHogPSB4ICogejIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB5eiA9IHkgKiB6MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0gKHl5ICsgenopO1xuICAgIG91dFsxXSA9IHh5ICsgd3o7XG4gICAgb3V0WzJdID0geHogLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHh5IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgICBvdXRbNl0gPSB5eiArIHd4O1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geHogKyB3eTtcbiAgICBvdXRbOV0gPSB5eiAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSB2WzBdO1xuICAgIG91dFsxM10gPSB2WzFdO1xuICAgIG91dFsxNF0gPSB2WzJdO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJ1c3R1bTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpLFxuICAgICAgICB0YiA9IDEgLyAodG9wIC0gYm90dG9tKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IChuZWFyICogMikgKiBybDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IChuZWFyICogMikgKiB0YjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyICogMikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIGlkZW50aXR5OiByZXF1aXJlKCcuL2lkZW50aXR5JylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbiAgLCBpbnZlcnQ6IHJlcXVpcmUoJy4vaW52ZXJ0JylcbiAgLCBhZGpvaW50OiByZXF1aXJlKCcuL2Fkam9pbnQnKVxuICAsIGRldGVybWluYW50OiByZXF1aXJlKCcuL2RldGVybWluYW50JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgdHJhbnNsYXRlOiByZXF1aXJlKCcuL3RyYW5zbGF0ZScpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHJvdGF0ZTogcmVxdWlyZSgnLi9yb3RhdGUnKVxuICAsIHJvdGF0ZVg6IHJlcXVpcmUoJy4vcm90YXRlWCcpXG4gICwgcm90YXRlWTogcmVxdWlyZSgnLi9yb3RhdGVZJylcbiAgLCByb3RhdGVaOiByZXF1aXJlKCcuL3JvdGF0ZVonKVxuICAsIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uOiByZXF1aXJlKCcuL2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uJylcbiAgLCBmcm9tUXVhdDogcmVxdWlyZSgnLi9mcm9tUXVhdCcpXG4gICwgZnJ1c3R1bTogcmVxdWlyZSgnLi9mcnVzdHVtJylcbiAgLCBwZXJzcGVjdGl2ZTogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZScpXG4gICwgcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXc6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcnKVxuICAsIG9ydGhvOiByZXF1aXJlKCcuL29ydGhvJylcbiAgLCBsb29rQXQ6IHJlcXVpcmUoJy4vbG9va0F0JylcbiAgLCBzdHI6IHJlcXVpcmUoJy4vc3RyJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVydDtcblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzIsXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkgeyBcbiAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICAgIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb29rQXQ7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge3ZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXG4gKiBAcGFyYW0ge3ZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7dmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuLFxuICAgICAgICBleWV4ID0gZXllWzBdLFxuICAgICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgICB1cHggPSB1cFswXSxcbiAgICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICAgIHVweiA9IHVwWzJdLFxuICAgICAgICBjZW50ZXJ4ID0gY2VudGVyWzBdLFxuICAgICAgICBjZW50ZXJ5ID0gY2VudGVyWzFdLFxuICAgICAgICBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gICAgaWYgKE1hdGguYWJzKGV5ZXggLSBjZW50ZXJ4KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IDAuMDAwMDAxKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICAgIH1cblxuICAgIHowID0gZXlleCAtIGNlbnRlcng7XG4gICAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG4gICAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICAgIHowICo9IGxlbjtcbiAgICB6MSAqPSBsZW47XG4gICAgejIgKj0gbGVuO1xuXG4gICAgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxO1xuICAgIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gICAgbGVuID0gTWF0aC5zcXJ0KHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeDAgPSAwO1xuICAgICAgICB4MSA9IDA7XG4gICAgICAgIHgyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB4MCAqPSBsZW47XG4gICAgICAgIHgxICo9IGxlbjtcbiAgICAgICAgeDIgKj0gbGVuO1xuICAgIH1cblxuICAgIHkwID0gejEgKiB4MiAtIHoyICogeDE7XG4gICAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgICB5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuXG4gICAgbGVuID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeTAgPSAwO1xuICAgICAgICB5MSA9IDA7XG4gICAgICAgIHkyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB5MCAqPSBsZW47XG4gICAgICAgIHkxICo9IGxlbjtcbiAgICAgICAgeTIgKj0gbGVuO1xuICAgIH1cblxuICAgIG91dFswXSA9IHgwO1xuICAgIG91dFsxXSA9IHkwO1xuICAgIG91dFsyXSA9IHowO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geDE7XG4gICAgb3V0WzVdID0geTE7XG4gICAgb3V0WzZdID0gejE7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4MjtcbiAgICBvdXRbOV0gPSB5MjtcbiAgICBvdXRbMTBdID0gejI7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IC0oeDAgKiBleWV4ICsgeDEgKiBleWV5ICsgeDIgKiBleWV6KTtcbiAgICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICAgIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgICB2YXIgYjAgID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTsgIFxuICAgIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzJdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls0XTsgYjEgPSBiWzVdOyBiMiA9IGJbNl07IGIzID0gYls3XTtcbiAgICBvdXRbNF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFs2XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbN10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzldID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzExXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMTNdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxNF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9ydGhvO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCksXG4gICAgICAgIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gLTIgKiBscjtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IC0yICogYnQ7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMiAqIG5mO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICAgIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICAgIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSBmO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKDIgKiBmYXIgKiBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cbiAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyBwcm9qZWN0aW9uIG1hdHJpY2VzIHRvIGJlIHVzZWRcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbiksXG4gICAgICAgIHlTY2FsZSA9IDIuMCAvICh1cFRhbiArIGRvd25UYW4pO1xuXG4gICAgb3V0WzBdID0geFNjYWxlO1xuICAgIG91dFsxXSA9IDAuMDtcbiAgICBvdXRbMl0gPSAwLjA7XG4gICAgb3V0WzNdID0gMC4wO1xuICAgIG91dFs0XSA9IDAuMDtcbiAgICBvdXRbNV0gPSB5U2NhbGU7XG4gICAgb3V0WzZdID0gMC4wO1xuICAgIG91dFs3XSA9IDAuMDtcbiAgICBvdXRbOF0gPSAtKChsZWZ0VGFuIC0gcmlnaHRUYW4pICogeFNjYWxlICogMC41KTtcbiAgICBvdXRbOV0gPSAoKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjUpO1xuICAgIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzExXSA9IC0xLjA7XG4gICAgb3V0WzEyXSA9IDAuMDtcbiAgICBvdXRbMTNdID0gMC4wO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhcikgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzE1XSA9IDAuMDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkLCBheGlzKSB7XG4gICAgdmFyIHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl0sXG4gICAgICAgIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopLFxuICAgICAgICBzLCBjLCB0LFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzLFxuICAgICAgICBiMDAsIGIwMSwgYjAyLFxuICAgICAgICBiMTAsIGIxMSwgYjEyLFxuICAgICAgICBiMjAsIGIyMSwgYjIyO1xuXG4gICAgaWYgKE1hdGguYWJzKGxlbikgPCAwLjAwMDAwMSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIFxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzOyBiMTEgPSB5ICogeSAqIHQgKyBjOyBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbMF0gID0gYVswXTtcbiAgICAgICAgb3V0WzFdICA9IGFbMV07XG4gICAgICAgIG91dFsyXSAgPSBhWzJdO1xuICAgICAgICBvdXRbM10gID0gYVszXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjICsgYTIyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgICBvdXRbOV0gPSBhMjEgKiBjIC0gYTExICogcztcbiAgICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gICAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzRdICA9IGFbNF07XG4gICAgICAgIG91dFs1XSAgPSBhWzVdO1xuICAgICAgICBvdXRbNl0gID0gYVs2XTtcbiAgICAgICAgb3V0WzddICA9IGFbN107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyAtIGEyMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTAwICogcyArIGEyMCAqIGM7XG4gICAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gICAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICAgIG91dFsxMV0gPSBhMDMgKiBzICsgYTIzICogYztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVo7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzhdICA9IGFbOF07XG4gICAgICAgIG91dFs5XSAgPSBhWzldO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjM1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdO1xuXG4gICAgb3V0WzBdID0gYVswXSAqIHg7XG4gICAgb3V0WzFdID0gYVsxXSAqIHg7XG4gICAgb3V0WzJdID0gYVsyXSAqIHg7XG4gICAgb3V0WzNdID0gYVszXSAqIHg7XG4gICAgb3V0WzRdID0gYVs0XSAqIHk7XG4gICAgb3V0WzVdID0gYVs1XSAqIHk7XG4gICAgb3V0WzZdID0gYVs2XSAqIHk7XG4gICAgb3V0WzddID0gYVs3XSAqIHk7XG4gICAgb3V0WzhdID0gYVs4XSAqIHo7XG4gICAgb3V0WzldID0gYVs5XSAqIHo7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHN0cjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdtYXQ0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArIFxuICAgICAgICAgICAgICAgICAgICBhWzEyXSArICcsICcgKyBhWzEzXSArICcsICcgKyBhWzE0XSArICcsICcgKyBhWzE1XSArICcpJztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGU7XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0NCBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdLFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDsgb3V0WzldID0gYTIxOyBvdXRbMTBdID0gYTIyOyBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zcG9zZTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICB2YXIgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgICAgIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiXX0=
