(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const IMAGE_SIZE = 128,
      IMAGE_MAP_PATH = '/imageMap',
      INDEX_PAGE_PATH = '/',
      SHAPES_PAGE_PATH = '/shapes',
      CONTAINER_HOUSE_PAGE_PATH = '/containerHouse';

module.exports = {
  IMAGE_SIZE: IMAGE_SIZE,
  IMAGE_MAP_PATH: IMAGE_MAP_PATH,
  INDEX_PAGE_PATH: INDEX_PAGE_PATH,
  SHAPES_PAGE_PATH: SHAPES_PAGE_PATH,
  CONTAINER_HOUSE_PAGE_PATH: CONTAINER_HOUSE_PAGE_PATH
};

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    Zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Projection = require('./scene/projection'),
    MouseEvents = require('./scene/mouseEvents');

var Camera = function () {
  function Camera(zoom, canvas, callback) {
    _classCallCheck(this, Camera);

    this.zoom = zoom;
    this.canvas = canvas;
    this.callback = callback;
  }

  _createClass(Camera, [{
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getCallback',
    value: function getCallback() {
      return this.callback;
    }
  }, {
    key: 'setCallback',
    value: function setCallback(callback) {
      this.callback = callback;
    }
  }, {
    key: 'registerCallback',
    value: function registerCallback(callback) {
      this.setCallback(callback);
    }
  }, {
    key: 'create',
    value: function create() {}
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.update();
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
        this.zoom.mouseWheelEventHandler(delta);

        this.update();
      }.bind(this));
    }
  }, {
    key: 'update',
    value: function update() {
      var xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      yAngle = undefined,
          ///
      zAngle = yAxisAngle,
          ///
      zCoordinate = -distance,
          ///
      rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          projection = Projection.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      if (this.callback) {
        ///
        this.callback(rotation, position, projection, normal);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        registerCallback: this.registerCallback.bind(this),
        addMouseEventHandlers: this.addMouseEventHandlers.bind(this)
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialPosition = properties.initialPosition,
          initialDistance = -initialPosition[2],
          zoom = Zoom.fromInitialDistance(initialDistance),
          canvas = new Canvas(),
          callback = null,
          camera = new Camera(zoom, canvas, callback);


      return camera;
    }
  }]);

  return Camera;
}();

module.exports = Camera;

},{"./canvas":3,"./scene/angles":49,"./scene/mouseEvents":52,"./scene/normal":53,"./scene/position":55,"./scene/projection":56,"./scene/rotation":57,"./scene/zoom":58}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domUtilities = require('./utilities/dom'),
    textureMixin = require('./mixin/texture'),
    colourMixin = require('./mixin/colour'),
    shaderMixin = require('./mixin/shader'),
    bufferMixin = require('./mixin/buffer'),
    matrixMixin = require('./mixin/matrix'),
    depthMixin = require('./mixin/depth'),
    mouseMixin = require('./mixin/mouse');

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
    value: function render(shader, offset, rotation, position, projection, normal) {
      var offsetMatrix = offset.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          projectionMatrix = projection.getMatrix(),
          normalMatrix = normal.getMatrix(),
          offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          projectionMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation(),
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

Object.assign(Canvas.prototype, textureMixin);
Object.assign(Canvas.prototype, colourMixin);
Object.assign(Canvas.prototype, shaderMixin);
Object.assign(Canvas.prototype, bufferMixin);
Object.assign(Canvas.prototype, matrixMixin);
Object.assign(Canvas.prototype, depthMixin);
Object.assign(Canvas.prototype, mouseMixin);

module.exports = Canvas;

},{"./mixin/buffer":39,"./mixin/colour":40,"./mixin/depth":41,"./mixin/matrix":42,"./mixin/mouse":43,"./mixin/shader":44,"./mixin/texture":45,"./utilities/dom":63}],4:[function(require,module,exports){
'use strict';

var CYLINDER_FACES = 16,
    MINIMUM_DISTANCE = 10,
    FIELD_OF_VIEW = 45 * Math.PI / 180,
    Z_NEAR = 1,
    Z_FAR = 1000;

module.exports = {
  Z_FAR: Z_FAR,
  Z_NEAR: Z_NEAR,
  FIELD_OF_VIEW: FIELD_OF_VIEW,
  CYLINDER_FACES: CYLINDER_FACES,
  MINIMUM_DISTANCE: MINIMUM_DISTANCE
};

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coordinates2D = function () {
  function Coordinates2D(x, y) {
    _classCallCheck(this, Coordinates2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Coordinates2D, [{
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
    }
  }, {
    key: 'plus',
    value: function plus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x + x;
      y = this.y + y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x - x;
      y = this.y - y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'dividedBy',
    value: function dividedBy(scalar) {
      var x = this.x / scalar,
          y = this.y / scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var x = this.getX(),
          y = this.getY(),
          string = x + ',' + y;

      return string;
    }
  }]);

  return Coordinates2D;
}();

module.exports = Coordinates2D;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(vertexPositionData, vertexNormalData, vertexIndexData) {
    _classCallCheck(this, Element);

    this.vertexPositionData = vertexPositionData;
    this.vertexNormalData = vertexNormalData;
    this.vertexIndexData = vertexIndexData;
  }

  _createClass(Element, [{
    key: 'getVertexPositionData',
    value: function getVertexPositionData() {
      return this.vertexPositionData;
    }
  }, {
    key: 'getVertexNormalData',
    value: function getVertexNormalData() {
      return this.vertexNormalData;
    }
  }, {
    key: 'getVertexIndexData',
    value: function getVertexIndexData() {
      return this.vertexIndexData;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var ColourElement = function (_Element) {
  _inherits(ColourElement, _Element);

  function ColourElement(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourElement);

    var _this = _possibleConstructorReturn(this, (ColourElement.__proto__ || Object.getPrototypeOf(ColourElement)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourElement, [{
    key: 'getVertexColourData',
    value: function getVertexColourData() {
      return this.vertexColourData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

      colourShader.addVertexPositionData(vertexPositionData);
      colourShader.addVertexNormalData(vertexNormalData);
      colourShader.addVertexIndexData(vertexIndexData);

      colourShader.addVertexColourData(this.vertexColourData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      ///
      var colourElement = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData], remainingArguments)))();

      return colourElement;
    }
  }]);

  return ColourElement;
}(Element);

module.exports = ColourElement;

},{"../element":6}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var TextureElement = function (_Element) {
  _inherits(TextureElement, _Element);

  function TextureElement(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    _classCallCheck(this, TextureElement);

    var _this = _possibleConstructorReturn(this, (TextureElement.__proto__ || Object.getPrototypeOf(TextureElement)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureElement, [{
    key: 'getTextureCoordinateData',
    value: function getTextureCoordinateData() {
      return this.textureCoordinateData;
    }
  }, {
    key: 'create',
    value: function create(colourShader, textureShader) {
      var vertexPositionData = this.getVertexPositionData(),
          vertexNormalData = this.getVertexNormalData(),
          vertexIndexData = this.getVertexIndexData();

      textureShader.addVertexPositionData(vertexPositionData);
      textureShader.addVertexNormalData(vertexNormalData);
      textureShader.addVertexIndexData(vertexIndexData);

      textureShader.addTextureCoordinateData(this.textureCoordinateData);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        remainingArguments[_key - 6] = arguments[_key];
      }

      /// 
      var textureElement = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData], remainingArguments)))();

      return textureElement;
    }
  }]);

  return TextureElement;
}(Element);

module.exports = TextureElement;

},{"../element":6}],9:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  containerHouse: require('./examples/containerHouse')
};

},{"./examples/containerHouse":15,"./examples/shapes":37}],10:[function(require,module,exports){
'use strict';

var vertexUtilities = require('../../utilities/vertex');

var calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData;


var initialVertexPositionData = [0.0, 0.0, 1.0, 1, 1.0, 0.0, 1.0, 1, 1.0, 1.0, 1.0, 1, 0.0, 1.0, 1.0, 1, 0.0, 0.0, 0.0, 1, 0.0, 1.0, 0.0, 1, 1.0, 1.0, 0.0, 1, 1.0, 0.0, 0.0, 1, 0.0, 1.0, 0.0, 1, 0.0, 1.0, 1.0, 1, 1.0, 1.0, 1.0, 1, 1.0, 1.0, 0.0, 1, 0.0, 0.0, 0.0, 1, 1.0, 0.0, 0.0, 1, 1.0, 0.0, 1.0, 1, 0.0, 0.0, 1.0, 1, 1.0, 0.0, 0.0, 1, 1.0, 1.0, 0.0, 1, 1.0, 1.0, 1.0, 1, 1.0, 0.0, 1.0, 1, 0.0, 0.0, 0.0, 1, 0.0, 0.0, 1.0, 1, 0.0, 1.0, 1.0, 1, 0.0, 1.0, 0.0, 1],
    vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
    vertexNormalData = calculateVertexNormalData(initialVertexPositionData);

module.exports = {
  vertexIndexData: vertexIndexData,
  vertexNormalData: vertexNormalData,
  initialVertexPositionData: initialVertexPositionData
};

},{"../../utilities/vertex":66}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    ColourElement = require('../../../element/colour'),
    vertexUtilities = require('../../../utilities/vertex');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
    initialVertexPositionData = cuboid.initialVertexPositionData;

var ColourCuboid = function (_ColourElement) {
  _inherits(ColourCuboid, _ColourElement);

  function ColourCuboid() {
    _classCallCheck(this, ColourCuboid);

    return _possibleConstructorReturn(this, (ColourCuboid.__proto__ || Object.getPrototypeOf(ColourCuboid)).apply(this, arguments));
  }

  _createClass(ColourCuboid, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var width = properties.width,
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          colour = properties.colour,
          vertexColourData = calculateVertexColourData(colour),
          vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
          colourCuboid = ColourElement.fromProperties(ColourCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


      return colourCuboid;
    }
  }]);

  return ColourCuboid;
}(ColourElement);

module.exports = ColourCuboid;

function calculateVertexColourData(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}

},{"../../../element/colour":7,"../../../utilities/vertex":66,"../cuboid":10}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cuboid = require('../cuboid'),
    TextureElement = require('../../../element/texture'),
    vertexUtilities = require('../../../utilities/vertex'),
    imageMapUtilities = require('../../../utilities/imageMap');

var calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    textureCoordinateDataFromImageNames = imageMapUtilities.textureCoordinateDataFromImageNames,
    vertexIndexData = cuboid.vertexIndexData,
    vertexNormalData = cuboid.vertexNormalData,
    initialVertexPositionData = cuboid.initialVertexPositionData;

var TextureCuboid = function (_TextureElement) {
      _inherits(TextureCuboid, _TextureElement);

      function TextureCuboid() {
            _classCallCheck(this, TextureCuboid);

            return _possibleConstructorReturn(this, (TextureCuboid.__proto__ || Object.getPrototypeOf(TextureCuboid)).apply(this, arguments));
      }

      _createClass(TextureCuboid, null, [{
            key: 'fromProperties',
            value: function fromProperties(properties) {
                  var width = properties.width,
                      depth = properties.depth,
                      height = properties.height,
                      offset = properties.offset,
                      imageName = properties.imageName,
                      textureCoordinateData = calculateTextureCoordinateData(imageName),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
                      textureCuboid = TextureElement.fromProperties(TextureCuboid, properties, vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData);


                  return textureCuboid;
            }
      }]);

      return TextureCuboid;
}(TextureElement);

module.exports = TextureCuboid;

function calculateTextureCoordinateData(imageName) {
      var imageNames = [imageName, imageName, imageName, imageName, imageName, imageName],
          textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

      return textureCoordinateData;
}

},{"../../../element/texture":8,"../../../utilities/imageMap":65,"../../../utilities/vertex":66,"../cuboid":10}],13:[function(require,module,exports){
'use strict';

var constants = require('../../constants'),
    arrayUtilities = require('../../utilities/array'),
    vertexUtilities = require('../../utilities/vertex');

var CYLINDER_FACES = constants.CYLINDER_FACES,
    flatten = arrayUtilities.flatten,
    calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData;


var initialVertexPositionData = calculateInitialVertexPositionData(),
    vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
    vertexNormalData = calculateVertexNormalData(initialVertexPositionData);

module.exports = {
      vertexIndexData: vertexIndexData,
      vertexNormalData: vertexNormalData,
      initialVertexPositionData: initialVertexPositionData
};

function calculateInitialVertexPositionData() {
      var initialVertexPositionVectors = [],
          faces = CYLINDER_FACES,
          step = 2 * Math.PI / faces;

      for (var count = 0; count < faces; count++) {
            var angle = step * count,
                firstX = Math.cos(angle),
                firstY = Math.sin(angle),
                secondX = Math.cos(angle + step),
                secondY = Math.sin(angle + step),
                firstZ = 0,
                secondZ = 1;

            initialVertexPositionVectors.push([firstX, firstY, firstZ, 1]);
            initialVertexPositionVectors.push([secondX, secondY, firstZ, 1]);
            initialVertexPositionVectors.push([secondX, secondY, secondZ, 1]);
            initialVertexPositionVectors.push([firstX, firstY, secondZ, 1]);
      }

      var initialVertexPositionData = flatten(initialVertexPositionVectors); ///

      return initialVertexPositionData;
}

},{"../../constants":4,"../../utilities/array":62,"../../utilities/vertex":66}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColourElement = require('../../../element/colour'),
    arrayUtilities = require('../../../utilities/array'),
    vertexUtilities = require('../../../utilities/vertex');

var flatten = arrayUtilities.flatten,
    calculateVertexPositionData = vertexUtilities.calculateVertexPositionData,
    vertexIndexData = cylinder.vertexIndexData,
    vertexNormalData = cylinder.vertexNormalData,
    initialVertexPositionData = cylinder.initialVertexPositionData;

var ColourCylinder = function (_ColourElement) {
      _inherits(ColourCylinder, _ColourElement);

      function ColourCylinder() {
            _classCallCheck(this, ColourCylinder);

            return _possibleConstructorReturn(this, (ColourCylinder.__proto__ || Object.getPrototypeOf(ColourCylinder)).apply(this, arguments));
      }

      _createClass(ColourCylinder, null, [{
            key: 'fromProperties',
            value: function fromProperties(properties) {
                  var width = properties.width,
                      depth = properties.depth,
                      height = properties.height,
                      offset = properties.offset,
                      colour = properties.colour,
                      vertexColourData = calculateVertexColourData(initialVertexPositionData, colour),
                      vertexPositionData = calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset),
                      colourCylinder = ColourElement.fromProperties(ColourCylinder, properties, vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData);


                  return colourCylinder;
            }
      }]);

      return ColourCylinder;
}(ColourElement);

module.exports = ColourCylinder;

function calculateVertexColourData(initialVertexPositionData, colour) {
      var initialVertexPositionDataLength = initialVertexPositionData.length,
          vertexColoursLength = initialVertexPositionDataLength / 4,
          ///
      vertexColour = colour,
          vertexColours = [];

      for (var index = 0; index < vertexColoursLength; index++) {
            vertexColours.push(vertexColour);
      }

      var vertexColourData = flatten(vertexColours); ///

      return vertexColourData;
}

},{"../../../element/colour":7,"../../../utilities/array":62,"../../../utilities/vertex":66,"../cylinder":13}],15:[function(require,module,exports){
'use strict';

require('../jiggle');

var Scene = require('../scene'),
    Camera = require('../camera'),
    Frame = require('./containerHouse/frame'),
    FirstFloor = require('./containerHouse/floor/first'),
    ThirdFloor = require('./containerHouse/floor/third'),
    SecondFloor = require('./containerHouse/floor/second'),
    Foundations = require('./containerHouse/foundations'),
    MainBalcony = require('./containerHouse/balcony/main'),
    BedroomBalcony = require('./containerHouse/balcony/bedroom'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, offset: [-18, -16, 0] },
      React.createElement(Camera, { initialPosition: [0, 0, -150] }),
      React.createElement(Foundations, null),
      React.createElement(FirstFloor, null),
      React.createElement(SecondFloor, null),
      React.createElement(ThirdFloor, null),
      React.createElement(MainBalcony, null),
      React.createElement(BedroomBalcony, null),
      React.createElement(Frame, null)
    );
  });
};

module.exports = containerHouse;

},{"../camera":2,"../jiggle":38,"../scene":48,"../utilities/imageMap":65,"./containerHouse/balcony/bedroom":16,"./containerHouse/balcony/main":17,"./containerHouse/floor/first":31,"./containerHouse/floor/second":32,"./containerHouse/floor/third":33,"./containerHouse/foundations":34,"./containerHouse/frame":35}],16:[function(require,module,exports){
'use strict';

var Railing = require('../balcony/railing'),
    BalconySection = require('../balcony/section');

var thickness = Railing.thickness;


var BedroomBalcony = function BedroomBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [0, 16, 19] }), React.createElement(BalconySection, { offset: [4, 16, 19] }), React.createElement(Railing, { offset: [0, 32 - thickness, 19], length: 8 })];
};

module.exports = BedroomBalcony;

},{"../balcony/railing":18,"../balcony/section":22}],17:[function(require,module,exports){
'use strict';

var Railing = require('../balcony/railing'),
    BalconySection = require('../balcony/section');

var thickness = Railing.thickness;


var MainBalcony = function MainBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [40, 0, 19] }), React.createElement(BalconySection, { offset: [44, 0, 19] }), React.createElement(BalconySection, { offset: [40, 16, 19] }), React.createElement(BalconySection, { offset: [44, 16, 19] }), React.createElement(BalconySection, { offset: [36, 16, 19] }), React.createElement(BalconySection, { offset: [32, 16, 19] }), React.createElement(BalconySection, { offset: [28, 16, 19] }), React.createElement(Railing, { offset: [20, 0, 19], length: 28 }), React.createElement(Railing, { offset: [28, 32 - thickness, 19], length: 20 })];
};

module.exports = MainBalcony;

},{"../balcony/railing":18,"../balcony/section":22}],18:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3'); ///

var TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights');

var thickness = TopRail.thickness,
    height = 3;


var Railing = function Railing(properties) {
  var offset = properties.offset,
      length = properties.length;


  return [React.createElement(TopRail, { offset: add(offset, [0, 0, height]), length: length }), React.createElement(Uprights, { offset: offset, height: height, length: length })];
};

module.exports = Railing;

Object.assign(Railing, {
  thickness: thickness
});

function add(vec1, vec2) {
  var vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

},{"./railing/topRail":19,"./railing/uprights":21,"gl-vec3":103}],19:[function(require,module,exports){
'use strict';

var ColourCuboid = require('../../../common/cuboid/colour');

var height = 0.1,
    thickness = 0.4,
    colour = [0.5, 0.5, 0.5, 1];

var TopRail = function TopRail(properties) {
  var offset = properties.offset,
      length = properties.length,
      width = length,
      depth = thickness; ///

  return React.createElement(ColourCuboid, { colour: colour, offset: offset, width: width, depth: depth, height: height });
};

Object.assign(TopRail, {
  thickness: thickness
});

module.exports = TopRail;

},{"../../../common/cuboid/colour":11}],20:[function(require,module,exports){
'use strict';

var ColourCuboid = require('../../../common/cuboid/colour');

var thickness = 0.125,
    colour = [0.5, 0.5, 0.5, 1];

var Upright = function Upright(properties) {
      var offset = properties.offset,
          height = properties.height,
          width = thickness,
          depth = thickness; ///

      return React.createElement(ColourCuboid, { colour: colour, offset: offset, width: width, depth: depth, height: height });
};

module.exports = Upright;

},{"../../../common/cuboid/colour":11}],21:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3'); ///

var Upright = require('./upright');

var Uprights = function Uprights(properties) {
  var offset = properties.offset,
      height = properties.height,
      length = properties.length,
      elements = [],
      step = 0.5,
      count = length / step;


  for (var index = 1; index < count; index++) {
    elements.push(React.createElement(Upright, { offset: add(offset, [step * index, 0, 0]), height: height }));
  }

  return elements;
};

module.exports = Uprights;

function add(vec1, vec2) {
  var vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

},{"./upright":20,"gl-vec3":103}],22:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3'); ///

var Edge = require('./section/edge'),
    OpenMesh = require('./section/openMesh'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short');

var width = 4,
    depth = 16;

var height = Edge.height,
    thickness = Edge.thickness;


var BalconySection = function BalconySection(properties) {
  var offset = properties.offset;


  return [React.createElement(LongEdge, { offset: add(offset, [0, 0, -height]), depth: depth }), React.createElement(LongEdge, { offset: add(offset, [width - thickness, 0, -height]), depth: depth }), React.createElement(ShortEdge, { offset: add(offset, [0, 0, -height]), width: width }), React.createElement(ShortEdge, { offset: add(offset, [0, 16 - thickness, -height]), width: width }), React.createElement(OpenMesh, { offset: add(offset, [thickness, thickness, 0]), width: width - 2 * thickness, depth: depth - 2 * thickness })];
};

module.exports = BalconySection;

function add(vec1, vec2) {
  var vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

},{"./section/edge":23,"./section/edge/long":24,"./section/edge/short":25,"./section/openMesh":26,"gl-vec3":103}],23:[function(require,module,exports){
'use strict';

var TextureCuboid = require('../../../common/cuboid/texture');

var height = 0.25,
    thickness = 0.1;

var Edge = function Edge(properties) {
  var offset = properties.offset,
      width = properties.width,
      depth = properties.depth;


  return React.createElement(TextureCuboid, { imageName: 'rustySteel.jpg', offset: offset, width: width, depth: depth, height: height });
};

Object.assign(Edge, {
  height: height,
  thickness: thickness
});

module.exports = Edge;

},{"../../../common/cuboid/texture":12}],24:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var LongEdge = function LongEdge(properties) {
  var offset = properties.offset,
      depth = properties.depth,
      width = thickness; ///

  return React.createElement(Edge, { offset: offset, width: width, depth: depth });
};

module.exports = LongEdge;

},{"../edge":23}],25:[function(require,module,exports){
'use strict';

var Edge = require('../edge');

var thickness = Edge.thickness;


var ShortEdge = function ShortEdge(properties) {
  var offset = properties.offset,
      width = properties.width,
      depth = thickness; ///

  return React.createElement(Edge, { offset: offset, width: width, depth: depth });
};

module.exports = ShortEdge;

},{"../edge":23}],26:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3'); ///

var ColourCuboid = require('../../../common/cuboid/colour');

var height = 0.25,
    thickness = 0.025,
    widthwiseCount = 10,
    depthwiseCount = 5,
    colour = [0.6, 0.6, 0.6, 10];

var OpenMesh = function OpenMesh(properties) {
  var offset = properties.offset,
      width = properties.width,
      depth = properties.depth,
      overallWidth = width,
      overallDepth = depth,
      elements = [];


  for (var index = 1; index < widthwiseCount; index++) {
    var step = overallWidth / widthwiseCount,
        _width = thickness; ///

    elements.push(React.createElement(ColourCuboid, { colour: colour, offset: add(offset, [step * index, 0, -height]), width: _width, depth: overallDepth, height: height }));
  }

  for (var _index = 1; _index < depthwiseCount; _index++) {
    var _step = overallDepth / depthwiseCount,
        _depth = thickness; //;

    elements.push(React.createElement(ColourCuboid, { colour: colour, offset: add(offset, [0, _step * _index, -height]), width: overallWidth, depth: _depth, height: height }));
  }

  return elements;
};

Object.assign(OpenMesh, {
  height: height,
  thickness: thickness
});

module.exports = OpenMesh;

function add(vec1, vec2) {
  var vec = [];

  vec3.add(vec, vec1, vec2);

  return vec;
}

},{"../../../common/cuboid/colour":11,"gl-vec3":103}],27:[function(require,module,exports){
'use strict';

var TextureCuboid = require('../common/cuboid/texture');

var ConcreteSlab = function ConcreteSlab(properties) {
  var offset = properties.offset,
      width = properties.width,
      depth = properties.depth,
      height = properties.height;


  return React.createElement(TextureCuboid, { imageName: 'concrete.jpg', offset: offset, width: width, depth: depth, height: height });
};

module.exports = ConcreteSlab;

},{"../common/cuboid/texture":12}],28:[function(require,module,exports){
'use strict';

var ColourCuboid = require('../common/cuboid/colour');

var Container = function Container(properties) {
  var offset = properties.offset,
      width = properties.width;


  return React.createElement(ColourCuboid, { colour: [1, 1, 1, 1], offset: offset, width: width, depth: 8, height: 9.5 });
};

module.exports = Container;

},{"../common/cuboid/colour":11}],29:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 40 });
};

module.exports = FortyFootContainer;

},{"../container":28}],30:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":28}],31:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function FirstFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [8, 0, 0] }), React.createElement(FortyFootContainer, { offset: [8, 8, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 0] })];
};

module.exports = FirstFloor;

},{"../container/fortyFoot":29,"../container/twentyFoot":30}],32:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var SecondFloor = function SecondFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [0, 0, 9.5] }), React.createElement(FortyFootContainer, { offset: [0, 8, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 9.5] })];
};

module.exports = SecondFloor;

},{"../container/fortyFoot":29,"../container/twentyFoot":30}],33:[function(require,module,exports){
'use strict';

var TwentyFootContainer = require('../container/twentyFoot');

var ThirdFloor = function ThirdFloor(properties) {
  return [React.createElement(TwentyFootContainer, { offset: [0, 0, 19] }), React.createElement(TwentyFootContainer, { offset: [0, 8, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 19] })];
};

module.exports = ThirdFloor;

},{"../container/twentyFoot":30}],34:[function(require,module,exports){
'use strict';

var ConcreteSlab = require('./concreteSlab');

var Foundations = function Foundations(properties) {
  return [React.createElement(ConcreteSlab, { offset: [-0.5, -0.5, -1], width: 12.5, depth: 33, height: 1 }), React.createElement(ConcreteSlab, { offset: [24, -0.5, -1], width: 24.4, depth: 33, height: 1 })];
};

module.exports = Foundations;

},{"./concreteSlab":27}],35:[function(require,module,exports){
'use strict';

var SteelSection = require('./steelSection');

var Frame = function Frame(properties) {
  var width = 48,
      depth = 32,
      height = 29;

  return [React.createElement(SteelSection, { offset: [-0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: width, depth: 1, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, height - 1], width: width, depth: 1, height: 1 })];
};

module.exports = Frame;

},{"./steelSection":36}],36:[function(require,module,exports){
'use strict';

var TextureCuboid = require('../common/cuboid/texture');

var SteelSection = function SteelSection(properties) {
  var offset = properties.offset,
      width = properties.width,
      depth = properties.depth,
      height = properties.height;


  return React.createElement(TextureCuboid, { imageName: 'rustySteel.jpg', offset: offset, width: width, depth: depth, height: height });
};

module.exports = SteelSection;

},{"../common/cuboid/texture":12}],37:[function(require,module,exports){
'use strict';

require('../jiggle');

var Scene = require('../scene'),
    Camera = require('../camera'),
    TextureCuboid = require('./common/cuboid/texture'),
    ColourCylinder = require('./common/cylinder/colour'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, offset: [0, 0, 0] },
      React.createElement(Camera, { initialPosition: [0, 0, -20] }),
      React.createElement(TextureCuboid, { offset: [+1, +2, +3], width: 3, depth: 2, height: 1, imageName: 'bricks.jpg' }),
      React.createElement(ColourCylinder, { offset: [-3, -2, -1], width: 1, depth: 1, height: 5, colour: [1, 0, 0, 1] })
    );
  });
};

module.exports = shapes;

},{"../camera":2,"../jiggle":38,"../scene":48,"../utilities/imageMap":65,"./common/cuboid/texture":12,"./common/cylinder/colour":14}],38:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":47}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

},{}],42:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],43:[function(require,module,exports){
'use strict';

var MouseCoordinates = require('../mouseCoordinates');

var horizontalOffset = 512,
    ///
verticalOffset = 320; ///

function mouseCoordinatesFromEvent(event) {
  var domElementBoundingClientRect = this.domElement.getBoundingClientRect(),
      x = +(event.clientX - domElementBoundingClientRect.left - horizontalOffset),
      ///
  y = -(event.clientY - domElementBoundingClientRect.top - verticalOffset),
      ///
  mouseCoordinates = new MouseCoordinates(x, y);

  return mouseCoordinates;
}

module.exports = {
  mouseCoordinatesFromEvent: mouseCoordinatesFromEvent
};

},{"../mouseCoordinates":46}],44:[function(require,module,exports){
'use strict';

function createShader(Class, vertexShader, fragmentShader) {
  var program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);
  this.context.linkProgram(program);

  var shader = new Class(program, this); ///

  return shader;
}

function useShader(shader) {
  var shaderProgram = shader.getProgram();

  this.context.useProgram(shaderProgram);
}

module.exports = {
  createShader: createShader,
  useShader: useShader
};

},{}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coordinates2D = require('./coordinates2D');

var MouseCoordinates = function (_Coordinates2D) {
  _inherits(MouseCoordinates, _Coordinates2D);

  function MouseCoordinates() {
    _classCallCheck(this, MouseCoordinates);

    return _possibleConstructorReturn(this, (MouseCoordinates.__proto__ || Object.getPrototypeOf(MouseCoordinates)).apply(this, arguments));
  }

  return MouseCoordinates;
}(Coordinates2D);

module.exports = MouseCoordinates;

},{"./coordinates2D":5}],47:[function(require,module,exports){
'use strict';

var Scene = require('./scene'),
    Camera = require('./camera'),
    Element = require('./element'),
    arrayUtilities = require('./utilities/array');

var flatten = arrayUtilities.flatten,
    guarantee = arrayUtilities.guarantee;


function createElement(firstArgument, properties) {
  for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childElements[_key - 2] = arguments[_key];
  }

  var elementOrElements = void 0;

  if (firstArgument !== undefined) {
    childElements = flatten(childElements);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {} else if (firstArgument === Scene) {
      var scene = Scene.fromProperties(properties);

      elementOrElements = scene; ///
    } else if (firstArgument === Camera) {
      var camera = Camera.fromProperties(properties);

      elementOrElements = camera; ///
    } else if (isSubclassOf(firstArgument, Element)) {
      var Class = firstArgument; ///

      elementOrElements = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      var func = firstArgument; ///

      elementOrElements = func(properties);
    }
  }

  var elements = flatten(guarantee(elementOrElements)); ///

  return elements;
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

},{"./camera":2,"./element":6,"./scene":48,"./utilities/array":62}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    Offset = require('./scene/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function () {
  function Scene(offsetVec3, canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }

  _createClass(Scene, [{
    key: 'getOffsetVec3',
    value: function getOffsetVec3() {
      return this.offsetVec3;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourShader',
    value: function getColourShader() {
      return this.colourShader;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
      return this.textureShader;
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
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, projection, normal) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, projection, normal);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      assignContext.call(this);

      this.registerCallback(function (rotation, position, projection, normal) {
        var offset = Offset.fromVec3(this.offsetVec3);

        this.resize();

        this.drawElements(offset, rotation, position, projection, normal);
      }.bind(this));

      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          offset = properties.offset,
          offsetVec3 = offset,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(offsetVec3, canvas, colourShader, textureShader);


      var parentElement = scene; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);

        updateParentContext(childElement, parentElement); ///
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      textureShader.createBuffers(canvas);
      colourShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      // window.onresize = function() {
      //   scene.resize();
      //   scene.render();
      // };

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}();

module.exports = Scene;

function updateParentContext(childElement, parentElement) {
  var parentContext = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

  parentElement.context = Object.assign({}, parentElement.context, parentContext);

  delete childElement.context;
}

function assignContext(names, thenDelete) {
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

},{"./canvas":3,"./scene/offset":54,"./shader/colour":60,"./shader/texture":61}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = require('./coordinates2D'),
    ///
MouseCoordinates = require('./mouseCoordinates');

var INITIAL_MOUSE_COORDINATES = new MouseCoordinates(0, 0),
    INITIAL_ANGLE_COORDINATES = new AngleCoordinates(0, Math.PI / 2);

var Angles = function () {
  function Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates) {
    _classCallCheck(this, Angles);

    this.mouseDown = mouseDown;
    this.offsetMouseCoordinates = offsetMouseCoordinates;
    this.angleCoordinates = angleCoordinates;
    this.previousAngleCoordinates = previousAngleCoordinates;
  }

  _createClass(Angles, [{
    key: 'getXAxisAngle',
    value: function getXAxisAngle() {
      var xAxisAngle = -this.angleCoordinates.getY(); ///

      return xAxisAngle;
    }
  }, {
    key: 'getYAxisAngle',
    value: function getYAxisAngle() {
      var yAxisAngle = +this.angleCoordinates.getX(); ///

      return yAxisAngle;
    }
  }, {
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      this.mouseDown = false;
      this.previousAngleCoordinates = this.angleCoordinates;
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      this.mouseDown = true;
      this.offsetMouseCoordinates = mouseCoordinates;
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      if (this.mouseDown) {
        this.updateAngleCoordinates(mouseCoordinates);
      }
    }
  }, {
    key: 'updateAngleCoordinates',
    value: function updateAngleCoordinates(mouseCoordinates) {
      var relativeMouseCoordinates = mouseCoordinates.minus(this.offsetMouseCoordinates),
          relativeAngleCoordinates = relativeMouseCoordinates.multipliedBy(Math.PI / 180); ///

      this.angleCoordinates = this.previousAngleCoordinates.plus(relativeAngleCoordinates);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var mouseDown = false,
          offsetMouseCoordinates = INITIAL_MOUSE_COORDINATES,
          angleCoordinates = INITIAL_ANGLE_COORDINATES,
          previousAngleCoordinates = angleCoordinates,
          angles = new Angles(mouseDown, offsetMouseCoordinates, angleCoordinates, previousAngleCoordinates);

      return angles;
    }
  }]);

  return Angles;
}();

var angles = Angles.fromNothing();

module.exports = angles;

},{"./coordinates2D":50,"./mouseCoordinates":51}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coordinates2D = function () {
  function Coordinates2D(x, y) {
    _classCallCheck(this, Coordinates2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Coordinates2D, [{
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
    }
  }, {
    key: 'plus',
    value: function plus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x + x;
      y = this.y + y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x - x;
      y = this.y - y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'dividedBy',
    value: function dividedBy(scalar) {
      var x = this.x / scalar,
          y = this.y / scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var x = this.getX(),
          y = this.getY(),
          string = x + ',' + y;

      return string;
    }
  }]);

  return Coordinates2D;
}();

module.exports = Coordinates2D;

},{}],51:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coordinates2D = require('./coordinates2D');

var MouseCoordinates = function (_Coordinates2D) {
  _inherits(MouseCoordinates, _Coordinates2D);

  function MouseCoordinates() {
    _classCallCheck(this, MouseCoordinates);

    return _possibleConstructorReturn(this, (MouseCoordinates.__proto__ || Object.getPrototypeOf(MouseCoordinates)).apply(this, arguments));
  }

  return MouseCoordinates;
}(Coordinates2D);

module.exports = MouseCoordinates;

},{"./coordinates2D":50}],52:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MOUSE_UP = 'MOUSE_UP',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_MOVE = 'MOUSE_MOVE',
    MOUSE_WHEEL = 'MOUSE_WHEEL';

var MouseEvents = function () {
  function MouseEvents(canvas) {
    _classCallCheck(this, MouseEvents);

    this.canvas = canvas;

    this.handlers = {};

    var mouseEventTypes = [MOUSE_UP, MOUSE_DOWN, MOUSE_MOVE, MOUSE_WHEEL];

    mouseEventTypes.forEach(function (mouseEventType) {
      this.handlers[mouseEventType] = [];
    }.bind(this));

    this.addEventHandler(canvas, 'mouseup', function (event) {
      this.onMouseEvent(MOUSE_UP, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousedown', function (event) {
      this.onMouseEvent(MOUSE_DOWN, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousemove', function (event) {
      this.onMouseEvent(MOUSE_MOVE, event);
    }.bind(this));
    this.addEventHandler(canvas, 'mousewheel', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
    this.addEventHandler(canvas, 'DOMMouseScroll', function (event) {
      this.onMouseWheelEvent(event);
    }.bind(this));
  }

  _createClass(MouseEvents, [{
    key: 'addMouseUpEventHandler',
    value: function addMouseUpEventHandler(mouseUpEventHandler) {
      this.addMouseEventHandler(MOUSE_UP, mouseUpEventHandler);
    }
  }, {
    key: 'addMouseDownEventHandler',
    value: function addMouseDownEventHandler(mouseDownEventHandler) {
      this.addMouseEventHandler(MOUSE_DOWN, mouseDownEventHandler);
    }
  }, {
    key: 'addMouseMoveEventHandler',
    value: function addMouseMoveEventHandler(mouseMoveEventHandler) {
      this.addMouseEventHandler(MOUSE_MOVE, mouseMoveEventHandler);
    }
  }, {
    key: 'addMouseWheelEventHandler',
    value: function addMouseWheelEventHandler(mouseWheelEventHandler) {
      this.addMouseEventHandler(MOUSE_WHEEL, mouseWheelEventHandler);
    }
  }, {
    key: 'addEventHandler',
    value: function addEventHandler(canvas, type, handler) {
      var domElement = canvas.getDOMElement();

      domElement.addEventListener(type, function (event) {
        event.preventDefault();

        handler(event);
      });
    }
  }, {
    key: 'onMouseEvent',
    value: function onMouseEvent(mouseEventType, event) {
      var mouseEventHandlers = this.handlers[mouseEventType],
          mouseCoordinates = this.canvas.mouseCoordinatesFromEvent(event);

      mouseEventHandlers.forEach(function (mouseEventHandler) {
        mouseEventHandler(mouseCoordinates);
      });
    }
  }, {
    key: 'onMouseWheelEvent',
    value: function onMouseWheelEvent(event) {
      var mouseWheelEventType = MOUSE_WHEEL,
          mouseWheelEventHandlers = this.handlers[mouseWheelEventType],
          delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail)); ///

      mouseWheelEventHandlers.forEach(function (mouseWheelEventHandler) {
        mouseWheelEventHandler(delta);
      });
    }
  }, {
    key: 'addMouseEventHandler',
    value: function addMouseEventHandler(mouseEventType, mouseEventHandler) {
      var mouseEventHandlers = this.handlers[mouseEventType];

      mouseEventHandlers.push(mouseEventHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var mouseEvents = new MouseEvents(canvas);

      return mouseEvents;
    }
  }]);

  return MouseEvents;
}();

module.exports = MouseEvents;

},{}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var Normal = function () {
  function Normal(mat4) {
    _classCallCheck(this, Normal);

    this.mat4 = mat4;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var mat4 = create(),
          rotationMatrix = rotation.getMatrix(),
          normal = new Normal(mat4);

      invert(mat4, rotationMatrix);

      transpose(mat4, mat4);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

},{"gl-mat4":77}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    translate = mat4.translate;

var Offset = function () {
  function Offset(mat4) {
    _classCallCheck(this, Offset);

    this.mat4 = mat4;
  }

  _createClass(Offset, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromVec3',
    value: function fromVec3(vec3) {
      var mat4 = create(),
          offset = new Offset(mat4);

      translate(mat4, mat4, vec3);

      return offset;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{"gl-mat4":77}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    translate = mat4.translate;


var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = -6.0;

var Position = function () {
  function Position(mat4) {
    _classCallCheck(this, Position);

    this.mat4 = mat4;
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromZCoordinate',
    value: function fromZCoordinate(zCoordinate) {
      return Position.fromCoordinates(undefined, undefined, zCoordinate);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var mat4 = create(),
          position = new Position(mat4);

      translate(mat4, mat4, [xCoordinate, yCoordinate, zCoordinate]);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;

},{"gl-mat4":77}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var Projection = function () {
  function Projection(mat4) {
    _classCallCheck(this, Projection);

    this.mat4 = mat4;
  }

  _createClass(Projection, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var mat4 = create(),
          fieldOfView = FIELD_OF_VIEW,
          aspectRatio = width / height,
          zNear = Z_NEAR,
          zFar = Z_FAR,
          projection = new Projection(mat4);

      perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

      return projection;
    }
  }]);

  return Projection;
}();

module.exports = Projection;

},{"../constants":4,"gl-mat4":77}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    rotate = mat4.rotate;


var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 0.0;

var Rotation = function () {
  function Rotation(mat4) {
    _classCallCheck(this, Rotation);

    this.mat4 = mat4;
  }

  _createClass(Rotation, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle() {
      var xAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXAngle;
      var yAngle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYAngle;
      var zAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZAngle;

      var mat4 = create(),
          rotation = new Rotation(mat4);

      rotate(mat4, mat4, xAngle, [1, 0, 0]);
      rotate(mat4, mat4, yAngle, [0, 1, 0]);
      rotate(mat4, mat4, zAngle, [0, 0, 1]);

      return rotation;
    }
  }]);

  return Rotation;
}();

module.exports = Rotation;

},{"gl-mat4":77}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants');

var MINIMUM_DISTANCE = constants.MINIMUM_DISTANCE;

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
      this.distance += delta * 5; ///

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

},{"../constants":4}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var offsetMatrixName = 'uOffsetMatrix',
    rotationMatrixName = 'uRotationMatrix',
    positionMatrixName = 'uPositionMatrix',
    projectionMatrixName = 'uPerspectiveMatrix',
    normalMatrixName = 'uNormalMatrix',
    vertexPositionAttributeName = 'aVertexPosition',
    vertexNormalAttributeName = 'aVertexNormal',
    calculateLightingSource = '\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        uniform mat4 ' + offsetMatrixName + ',\n                     ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + offsetMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ',
    vertexPositionComponents = 3,
    vertexNormalComponents = 3;

var Shader = function () {
  function Shader(program, canvas) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.projectionMatrixUniformLocation = canvas.getUniformLocation(program, projectionMatrixName);
    this.normalMatrixUniformLocation = canvas.getUniformLocation(program, normalMatrixName);

    this.vertexPositionAttributeLocation = canvas.getAttributeLocation(program, vertexPositionAttributeName);
    this.vertexNormalAttributeLocation = canvas.getAttributeLocation(program, vertexNormalAttributeName);

    this.vertexPositionData = [];
    this.vertexNormalData = [];
    this.vertexIndexData = [];
    this.maximumVertexIndex = -1; ///
  }

  _createClass(Shader, [{
    key: 'getCount',
    value: function getCount() {
      var vertexIndexDataLength = this.vertexIndexData.length,
          count = vertexIndexDataLength; ///

      return count;
    }
  }, {
    key: 'getProgram',
    value: function getProgram() {
      return this.program;
    }
  }, {
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
    key: 'getPerspectiveMatrixUniformLocation',
    value: function getPerspectiveMatrixUniformLocation() {
      return this.projectionMatrixUniformLocation;
    }
  }, {
    key: 'getNormalMatrixUniformLocation',
    value: function getNormalMatrixUniformLocation() {
      return this.normalMatrixUniformLocation;
    }
  }, {
    key: 'addVertexPositionData',
    value: function addVertexPositionData(vertexPositionData) {
      add(this.vertexPositionData, vertexPositionData);
    }
  }, {
    key: 'addVertexNormalData',
    value: function addVertexNormalData(vertexNormalData) {
      add(this.vertexNormalData, vertexNormalData);
    }
  }, {
    key: 'addVertexIndexData',
    value: function addVertexIndexData(vertexIndexData) {
      var offset = this.maximumVertexIndex + 1;

      vertexIndexData = vertexIndexData.map(function (vertexIndex) {
        return vertexIndex + offset;
      });

      add(this.vertexIndexData, vertexIndexData);

      this.maximumVertexIndex = Math.max.apply(Math, [this.maximumVertexIndex].concat(_toConsumableArray(vertexIndexData)));
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexPositionBuffer(canvas);
      this.createVertexNormalBuffer(canvas);
      this.createVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexNormalBuffer(canvas);
      this.bindVertexPositionBuffer(canvas);
      this.bindVertexIndexElementBuffer(canvas);
    }
  }, {
    key: 'createVertexPositionBuffer',
    value: function createVertexPositionBuffer(canvas) {
      this.vertexPositionBuffer = canvas.createBuffer(this.vertexPositionData);
    }
  }, {
    key: 'createVertexNormalBuffer',
    value: function createVertexNormalBuffer(canvas) {
      this.vertexNormalBuffer = canvas.createBuffer(this.vertexNormalData);
    }
  }, {
    key: 'createVertexIndexElementBuffer',
    value: function createVertexIndexElementBuffer(canvas) {
      this.vertexIndexElementBuffer = canvas.createElementBuffer(this.vertexIndexData);
    }
  }, {
    key: 'bindVertexNormalBuffer',
    value: function bindVertexNormalBuffer(canvas) {
      canvas.bindBuffer(this.vertexNormalBuffer, this.vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionBuffer',
    value: function bindVertexPositionBuffer(canvas) {
      canvas.bindBuffer(this.vertexPositionBuffer, this.vertexPositionAttributeLocation, vertexPositionComponents);4;
    }
  }, {
    key: 'bindVertexIndexElementBuffer',
    value: function bindVertexIndexElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexElementBuffer);
    }
  }]);

  return Shader;
}();

function createVertexShader(vertexShaderSource, canvas) {
  var context = canvas.getContext(),
      VERTEX_SHADER = context.VERTEX_SHADER,
      type = VERTEX_SHADER,
      vertexShader = createShader(type, vertexShaderSource, canvas);


  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  var context = canvas.getContext(),
      FRAGMENT_SHADER = context.FRAGMENT_SHADER,
      type = FRAGMENT_SHADER,
      vertexShader = createShader(type, fragmentShaderSource, canvas);


  return vertexShader;
}

Object.assign(Shader, {
  createVertexShader: createVertexShader,
  createFragmentShader: createFragmentShader,
  calculateLightingSource: calculateLightingSource,
  calculatePositionSource: calculatePositionSource
});

module.exports = Shader;

function createShader(type, shaderSource, canvas) {
  var context = canvas.getContext(),
      COMPILE_STATUS = context.COMPILE_STATUS,
      pname = COMPILE_STATUS,
      shader = context.createShader(type);


  context.shaderSource(shader, shaderSource);

  context.compileShader(shader);

  var compileStatus = context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error('Unable to create the shader.');
  }

  return shader;
}

},{"necessary":151}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var vertexColourAttributeName = 'aVertexColour',
    vertexShaderSource = '\n    \n        attribute vec4 ' + vertexColourAttributeName + ';\n\n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ' + vertexColourAttributeName + ';                    \n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ';

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, canvas) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, canvas));

    _this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);

    _this.vertexColourData = [];
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createVertexColourBuffer',
    value: function createVertexColourBuffer(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          colourShader = canvas.createShader(ColourShader, vertexShader, fragmentShader);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;

},{"../shader":59,"necessary":151}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    calculateLightingSource = Shader.calculateLightingSource,
    calculatePositionSource = Shader.calculatePositionSource,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var samplerName = 'uSampler',
    textureCoordinateAttributeName = 'aTextureCoordinate',
    vertexShaderSource = '\n        \n        attribute vec2 ' + textureCoordinateAttributeName + ';\n        \n        ' + calculateLightingSource + '\n      \n        ' + calculatePositionSource + '\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ' + textureCoordinateAttributeName + ';\n        }\n        \n      ',
    fragmentShaderSource = '\n        \n        uniform sampler2D ' + samplerName + ';\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(' + samplerName + ', vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      ';

var TextureShader = function (_Shader) {
  _inherits(TextureShader, _Shader);

  function TextureShader(program, canvas) {
    _classCallCheck(this, TextureShader);

    var _this = _possibleConstructorReturn(this, (TextureShader.__proto__ || Object.getPrototypeOf(TextureShader)).call(this, program, canvas));

    _this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);
    _this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);

    _this.textureCoordinateData = [];
    return _this;
  }

  _createClass(TextureShader, [{
    key: 'addTextureCoordinateData',
    value: function addTextureCoordinateData(textureCoordinateData) {
      add(this.textureCoordinateData, textureCoordinateData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createTextureCoordinateBuffer',
    value: function createTextureCoordinateBuffer(canvas) {
      this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindTextureCoordinateBuffer(canvas);

      _get(TextureShader.prototype.__proto__ || Object.getPrototypeOf(TextureShader.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindTextureCoordinateBuffer',
    value: function bindTextureCoordinateBuffer(canvas) {
      var textureCoordinateComponents = 2;

      canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
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
          uSamplerUniformLocationIntegerValue = 0;


      canvas.activateTexture(target);

      canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          colourShader = canvas.createShader(TextureShader, vertexShader, fragmentShader);

      return colourShader;
    }
  }]);

  return TextureShader;
}(Shader);

module.exports = TextureShader;

},{"../shader":59,"necessary":151}],62:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


function dice(elements, arrayLength) {
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
  dice: dice,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":151}],63:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],64:[function(require,module,exports){
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

},{"necessary":151}],65:[function(require,module,exports){
'use strict';

var constants = require('../../bin/constants'),
    ///
arrayUtilities = require('../utilities/array'),
    imageUtilities = require('../utilities/image');

var IMAGE_MAP_PATH = constants.IMAGE_MAP_PATH,
    flatten = arrayUtilities.flatten,
    preloadImage = imageUtilities.preloadImage,
    _runtimeConfiguration = runtimeConfiguration,
    imageMapJSON = _runtimeConfiguration.imageMapJSON;


function preloadImageMap(callback) {
  var path = IMAGE_MAP_PATH;

  preloadImage(path, callback);
}

function textureCoordinateDataFromImageNames(imageNames) {
  var textureCoordinates = imageNames.reduce(function (textureCoordinates, textureName) {
    textureCoordinates = textureCoordinates.concat(imageMapJSON[textureName]);

    return textureCoordinates;
  }, []),
      textureCoordinateData = flatten(textureCoordinates);

  return textureCoordinateData;
}

module.exports = {
  preloadImageMap: preloadImageMap,
  textureCoordinateDataFromImageNames: textureCoordinateDataFromImageNames
};

},{"../../bin/constants":1,"../utilities/array":62,"../utilities/image":64}],66:[function(require,module,exports){
'use strict';

var vec3 = require('gl-vec3'),
    ///
vec4 = require('gl-vec4'),
    ///
mat4 = require('gl-mat4'); ///

var arrayUtilities = require('../utilities/array');

var dice = arrayUtilities.dice,
    flatten = arrayUtilities.flatten;


function calculateVertexPositionData(initialVertexPositionData, width, depth, height, offset) {
  var matrix = mat4.create();

  mat4.translate(matrix, matrix, offset);
  mat4.scale(matrix, matrix, [width, depth, height]);

  var vertexPositions = dice(initialVertexPositionData, 4); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    return vec4.transformMat4(vertexPosition, vertexPosition, matrix);
  });

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    return vertexPosition.slice(0, 3);
  });

  var vertexPositionData = flatten(vertexPositions);

  return vertexPositionData;
}

function calculateVertexNormalData(initialVertexPositionData) {
  var vertexNormalVectors = [],
      faces = dice(initialVertexPositionData, 16);

  faces.forEach(function (face) {
    var vertexPositions = dice(face, 4);

    for (var index = 0; index < 4; index++) {
      var firstVertexIndex = index,
          secondVertexIndex = (index + 1) % 4,
          thirdVertexIndex = (index + 3) % 4,
          firstVertexPosition = vertexPositions[firstVertexIndex],
          secondVertexPosition = vertexPositions[secondVertexIndex],
          thirdVertexPosition = vertexPositions[thirdVertexIndex],
          firstVector = subtract(secondVertexPosition, firstVertexPosition),
          ///
      secondVector = subtract(thirdVertexPosition, firstVertexPosition),
          ///
      vertexNormalVector = cross(firstVector, secondVector);

      vertexNormalVectors.push(vertexNormalVector);
    }
  });

  var vertexNormalData = flatten(vertexNormalVectors); ///

  return vertexNormalData;
}

function calculateVertexIndexData(initialVertexPositionData) {
  var vertexIndexData = [],
      initialVertexPositionDataLength = initialVertexPositionData.length,
      facesLength = initialVertexPositionDataLength / 16;

  for (var index = 0; index < facesLength; index++) {
    var offset = index * 4;

    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 1);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 0);
    vertexIndexData.push(offset + 2);
    vertexIndexData.push(offset + 3);
  }

  return vertexIndexData;
}

module.exports = {
  calculateVertexPositionData: calculateVertexPositionData,
  calculateVertexNormalData: calculateVertexNormalData,
  calculateVertexIndexData: calculateVertexIndexData
};

function subtract(vec1, vec2) {
  var vec = [];

  vec3.subtract(vec, vec1, vec2);

  return vec;
}

function cross(vec1, vec2) {
  var vec = [];

  vec3.cross(vec, vec1, vec2);

  return vec;
}

},{"../utilities/array":62,"gl-mat4":77,"gl-vec3":103,"gl-vec4":133}],67:[function(require,module,exports){

},{}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{}],70:[function(require,module,exports){
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
},{}],71:[function(require,module,exports){
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
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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
},{}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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
},{}],77:[function(require,module,exports){
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
},{"./adjoint":68,"./clone":69,"./copy":70,"./create":71,"./determinant":72,"./fromQuat":73,"./fromRotationTranslation":74,"./frustum":75,"./identity":76,"./invert":78,"./lookAt":79,"./multiply":80,"./ortho":81,"./perspective":82,"./perspectiveFromFieldOfView":83,"./rotate":84,"./rotateX":85,"./rotateY":86,"./rotateZ":87,"./scale":88,"./str":89,"./translate":90,"./transpose":91}],78:[function(require,module,exports){
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
},{}],79:[function(require,module,exports){
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
},{"./identity":76}],80:[function(require,module,exports){
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
},{}],81:[function(require,module,exports){
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
},{}],82:[function(require,module,exports){
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
},{}],83:[function(require,module,exports){
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


},{}],84:[function(require,module,exports){
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
},{}],85:[function(require,module,exports){
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
},{}],86:[function(require,module,exports){
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
},{}],87:[function(require,module,exports){
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
},{}],88:[function(require,module,exports){
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
},{}],89:[function(require,module,exports){
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
},{}],90:[function(require,module,exports){
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
},{}],91:[function(require,module,exports){
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
},{}],92:[function(require,module,exports){
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
},{}],93:[function(require,module,exports){
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

},{"./dot":100,"./fromValues":102,"./normalize":111}],94:[function(require,module,exports){
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
},{}],95:[function(require,module,exports){
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
},{}],96:[function(require,module,exports){
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
},{}],97:[function(require,module,exports){
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
},{}],98:[function(require,module,exports){
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
},{}],99:[function(require,module,exports){
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
},{}],100:[function(require,module,exports){
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
},{}],101:[function(require,module,exports){
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
},{"./create":96}],102:[function(require,module,exports){
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
},{}],103:[function(require,module,exports){
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
},{"./add":92,"./angle":93,"./clone":94,"./copy":95,"./create":96,"./cross":97,"./distance":98,"./divide":99,"./dot":100,"./forEach":101,"./fromValues":102,"./inverse":104,"./length":105,"./lerp":106,"./max":107,"./min":108,"./multiply":109,"./negate":110,"./normalize":111,"./random":112,"./rotateX":113,"./rotateY":114,"./rotateZ":115,"./scale":116,"./scaleAndAdd":117,"./set":118,"./squaredDistance":119,"./squaredLength":120,"./subtract":121,"./transformMat3":122,"./transformMat4":123,"./transformQuat":124}],104:[function(require,module,exports){
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
},{}],105:[function(require,module,exports){
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
},{}],106:[function(require,module,exports){
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
},{}],107:[function(require,module,exports){
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
},{}],108:[function(require,module,exports){
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
},{}],109:[function(require,module,exports){
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
},{}],110:[function(require,module,exports){
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
},{}],111:[function(require,module,exports){
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
},{}],112:[function(require,module,exports){
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
},{}],113:[function(require,module,exports){
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
},{}],114:[function(require,module,exports){
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
},{}],115:[function(require,module,exports){
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
},{}],116:[function(require,module,exports){
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
},{}],117:[function(require,module,exports){
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
},{}],118:[function(require,module,exports){
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
},{}],119:[function(require,module,exports){
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
},{}],120:[function(require,module,exports){
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
},{}],121:[function(require,module,exports){
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
},{}],122:[function(require,module,exports){
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
},{}],123:[function(require,module,exports){
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
},{}],124:[function(require,module,exports){
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
},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
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

},{}],127:[function(require,module,exports){
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

},{}],128:[function(require,module,exports){
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

},{}],129:[function(require,module,exports){
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

},{}],130:[function(require,module,exports){
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

},{}],131:[function(require,module,exports){
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

},{}],132:[function(require,module,exports){
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

},{}],133:[function(require,module,exports){
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

},{"./add":125,"./clone":126,"./copy":127,"./create":128,"./distance":129,"./divide":130,"./dot":131,"./fromValues":132,"./inverse":134,"./length":135,"./lerp":136,"./max":137,"./min":138,"./multiply":139,"./negate":140,"./normalize":141,"./random":142,"./scale":143,"./scaleAndAdd":144,"./set":145,"./squaredDistance":146,"./squaredLength":147,"./subtract":148,"./transformMat4":149,"./transformQuat":150}],134:[function(require,module,exports){
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

},{}],135:[function(require,module,exports){
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

},{}],136:[function(require,module,exports){
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

},{}],137:[function(require,module,exports){
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

},{}],138:[function(require,module,exports){
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

},{}],139:[function(require,module,exports){
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

},{}],140:[function(require,module,exports){
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

},{}],141:[function(require,module,exports){
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

},{}],142:[function(require,module,exports){
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

},{"./normalize":141,"./scale":143}],143:[function(require,module,exports){
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

},{}],144:[function(require,module,exports){
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

},{}],145:[function(require,module,exports){
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

},{}],146:[function(require,module,exports){
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

},{}],147:[function(require,module,exports){
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

},{}],148:[function(require,module,exports){
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

},{}],149:[function(require,module,exports){
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

},{}],150:[function(require,module,exports){
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

},{}],151:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":152,"./lib/utilities/asynchronous":153,"./lib/utilities/fileSystem":154,"./lib/utilities/path":155}],152:[function(require,module,exports){
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

},{}],153:[function(require,module,exports){
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

},{}],154:[function(require,module,exports){
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

},{"fs":67}],155:[function(require,module,exports){
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

},{"./array":152}]},{},[9])(9)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiaW4vY29uc3RhbnRzLmpzIiwiZXM2L2NhbWVyYS5qcyIsImVzNi9jYW52YXMuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2Nvb3JkaW5hdGVzMkQuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9lbGVtZW50L2NvbG91ci5qcyIsImVzNi9lbGVtZW50L3RleHR1cmUuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2N1Ym9pZC5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL2NvbG91ci5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkL3RleHR1cmUuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2N5bGluZGVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jeWxpbmRlci9jb2xvdXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9iZWRyb29tLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3RvcFJhaWwuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9yYWlsaW5nL3VwcmlnaHRzLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS9sb25nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL3Nob3J0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9vcGVuTWVzaC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb25jcmV0ZVNsYWIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbnRhaW5lci9mb3J0eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL3R3ZW50eUZvb3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2ZyYW1lLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL3N0ZWVsU2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9zaGFwZXMuanMiLCJlczYvamlnZ2xlLmpzIiwiZXM2L21peGluL2J1ZmZlci5qcyIsImVzNi9taXhpbi9jb2xvdXIuanMiLCJlczYvbWl4aW4vZGVwdGguanMiLCJlczYvbWl4aW4vbWF0cml4LmpzIiwiZXM2L21peGluL21vdXNlLmpzIiwiZXM2L21peGluL3NoYWRlci5qcyIsImVzNi9taXhpbi90ZXh0dXJlLmpzIiwiZXM2L21vdXNlQ29vcmRpbmF0ZXMuanMiLCJlczYvcmVhY3QuanMiLCJlczYvc2NlbmUuanMiLCJlczYvc2NlbmUvYW5nbGVzLmpzIiwiZXM2L3NjZW5lL2Nvb3JkaW5hdGVzMkQuanMiLCJlczYvc2NlbmUvbW91c2VDb29yZGluYXRlcy5qcyIsImVzNi9zY2VuZS9tb3VzZUV2ZW50cy5qcyIsImVzNi9zY2VuZS9ub3JtYWwuanMiLCJlczYvc2NlbmUvb2Zmc2V0LmpzIiwiZXM2L3NjZW5lL3Bvc2l0aW9uLmpzIiwiZXM2L3NjZW5lL3Byb2plY3Rpb24uanMiLCJlczYvc2NlbmUvcm90YXRpb24uanMiLCJlczYvc2NlbmUvem9vbS5qcyIsImVzNi9zaGFkZXIuanMiLCJlczYvc2hhZGVyL2NvbG91ci5qcyIsImVzNi9zaGFkZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2UuanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlTWFwLmpzIiwiZXM2L3V0aWxpdGllcy92ZXJ0ZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3N0ci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2FuZ2xlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9jb3B5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvY3Jvc3MuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9kaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2RvdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL2ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9mcm9tVmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9pbnZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbGVycC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21heC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL21pbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL211bHRpcGx5LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbmVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcmFuZG9tLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvcm90YXRlWC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3JvdGF0ZVkuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9yb3RhdGVaLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvc2NhbGUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zY2FsZUFuZEFkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWREaXN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3NxdWFyZWRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zdWJ0cmFjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWMzL3RyYW5zZm9ybU1hdDMuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzMvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2Rpc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZGl2aWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZG90LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvZnJvbVZhbHVlcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvaW52ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L2xlcnAuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tYXguanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9taW4uanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9tdWx0aXBseS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3JhbmRvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbC12ZWM0L3NjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc2NhbGVBbmRBZGQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkRGlzdGFuY2UuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC9zcXVhcmVkTGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjNC90cmFuc2Zvcm1NYXQ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLXZlYzQvdHJhbnNmb3JtUXVhdC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUE4Qiw0QkFUZjtBQVVmLHFDQUFtQyxpQ0FWcEI7QUFXZiwyQ0FBeUM7QUFYMUIsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJTUFHRV9TSVpFID0gMTI4LFxuICAgICAgSU1BR0VfTUFQX1BBVEggPSAnL2ltYWdlTWFwJyxcbiAgICAgIElOREVYX1BBR0VfUEFUSCA9ICcvJyxcbiAgICAgIFNIQVBFU19QQUdFX1BBVEggPSAnL3NoYXBlcycsXG4gICAgICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIID0gJy9jb250YWluZXJIb3VzZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJTUFHRV9TSVpFOiBJTUFHRV9TSVpFLFxuICBJTUFHRV9NQVBfUEFUSDogSU1BR0VfTUFQX1BBVEgsXG4gIElOREVYX1BBR0VfUEFUSDogSU5ERVhfUEFHRV9QQVRILFxuICBTSEFQRVNfUEFHRV9QQVRIOiBTSEFQRVNfUEFHRV9QQVRILFxuICBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIOiBDT05UQUlORVJfSE9VU0VfUEFHRV9QQVRIXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vc2NlbmUvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9zY2VuZS9hbmdsZXMnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vc2NlbmUvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcHJvamVjdGlvbicpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgY2FsbGJhY2spIHtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG4gIFxuICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuICBcbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgY3JlYXRlKCkge31cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHlBbmdsZSA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtZGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcHJvamVjdGlvbiA9IFByb2plY3Rpb24uZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuICAgIFxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7ICAvLy9cbiAgICAgIHRoaXMuY2FsbGJhY2socm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICByZWdpc3RlckNhbGxiYWNrOiB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2suYmluZCh0aGlzKSxcbiAgICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyczogdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBpbml0aWFsRGlzdGFuY2UgPSAtaW5pdGlhbFBvc2l0aW9uWzJdLCAvLy9cbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLCAgLy8vXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2RvbScpLFxuICAgICAgdGV4dHVyZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi90ZXh0dXJlJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBkZXB0aE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9kZXB0aCcpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKTtcblxuY29uc3QgeyBkb21FbGVtZW50RnJvbVNlbGVjdG9yIH0gPSBkb21VdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRPZmZzZXQgPSAwO1xuXG5jbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdjYW52YXMnKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGluaXRpYWxpc2UgdGhlIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTsgfVxuXG4gIHNldFZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHsgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpOyB9XG5cbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7IHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpOyB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgICB0aGlzLnNldFZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKHNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCkge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeCA9IG9mZnNldC5nZXRNYXRyaXgoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4ID0gbm9ybWFsLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRSb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gc2hhZGVyLmdldENvdW50KCk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhjb3VudCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoY291bnQsIG9mZnNldCA9IGRlZmF1bHRPZmZzZXQpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVDtcblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ1lMSU5ERVJfRkFDRVMgPSAxNixcbiAgICAgIE1JTklNVU1fRElTVEFOQ0UgPSAxMCxcbiAgICAgIEZJRUxEX09GX1ZJRVcgPSA0NSAqIE1hdGguUEkgLyAxODAsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgWl9GQVIgPSAxMDAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgWl9GQVI6IFpfRkFSLFxuICBaX05FQVI6IFpfTkVBUixcbiAgRklFTERfT0ZfVklFVzogRklFTERfT0ZfVklFVyxcbiAgQ1lMSU5ERVJfRkFDRVM6IENZTElOREVSX0ZBQ0VTLFxuICBNSU5JTVVNX0RJU1RBTkNFOiBNSU5JTVVNX0RJU1RBTkNFXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb29yZGluYXRlczJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBcbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuICBcbiAgc2V0WSh5KSB7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHBsdXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggKyB4O1xuICAgIHkgPSB0aGlzLnkgKyB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgbWludXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggLSB4O1xuICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG4gIFxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgZGl2aWRlZEJ5KHNjYWxhcikge1xuICAgIGNvbnN0IHggPSB0aGlzLnggLyBzY2FsYXIsXG4gICAgICAgICAgeSA9IHRoaXMueSAvIHNjYWxhcjtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKSxcbiAgICAgICAgICB5ID0gdGhpcy5nZXRZKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7eH0sJHt5fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29vcmRpbmF0ZXMyRDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ29sb3VyRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5nZXRWZXJ0ZXhJbmRleERhdGEoKTtcbiAgICBcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgIC8vL1xuICAgIGNvbnN0IGNvbG91ckVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleENvbG91ckRhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91ckVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0dXJlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIHRleHR1cmVTaGFkZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7ICAvLy8gXG4gICAgY29uc3QgdGV4dHVyZUVsZW1lbnQgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIHRleHR1cmVDb29yZGluYXRlRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoYXBlczogcmVxdWlyZSgnLi9leGFtcGxlcy9zaGFwZXMnKSxcbiAgY29udGFpbmVySG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvY29udGFpbmVySG91c2UnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YSwgY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YX0gPSB2ZXJ0ZXhVdGlsaXRpZXM7XG5cbmNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCwgMSxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCwgMSxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLCAxLFxuXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsIDEsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCwgMSxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCwgMSxcblxuICAgICAgICAxLjAsIDAuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLCAxLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLCAxLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsIDEsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsIDEsXG5cbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZlcnRleEluZGV4RGF0YTogdmVydGV4SW5kZXhEYXRhLFxuICB2ZXJ0ZXhOb3JtYWxEYXRhOiB2ZXJ0ZXhOb3JtYWxEYXRhLFxuICBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhOiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJvaWQgPSByZXF1aXJlKCcuLi9jdWJvaWQnKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgdmVydGV4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3ZlcnRleCcpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YSB9ID0gdmVydGV4VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0ZXhJbmRleERhdGEsIHZlcnRleE5vcm1hbERhdGEsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IGN1Ym9pZDtcblxuY2xhc3MgQ29sb3VyQ3Vib2lkIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3Vib2lkID0gQ29sb3VyRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJDdWJvaWQsIHByb3BlcnRpZXMsIHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQ3Vib2lkO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJEYXRhKGNvbG91cikge1xuICBsZXQgdmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhLmNvbmNhdChjb2xvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZUVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L3RleHR1cmUnKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzIH0gPSBpbWFnZU1hcFV0aWxpdGllcyxcbiAgICAgIHsgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBjdWJvaWQ7XG5cbmNsYXNzIFRleHR1cmVDdWJvaWQgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBpbWFnZU5hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGltYWdlTmFtZSksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25EYXRhID0gY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpLFxuICAgICAgICAgIHRleHR1cmVDdWJvaWQgPSBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ3Vib2lkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN1Ym9pZDtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVGV4dHVyZUNvb3JkaW5hdGVEYXRhKGltYWdlTmFtZSkge1xuICBjb25zdCBpbWFnZU5hbWVzID0gW1xuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBDWUxJTkRFUl9GQUNFUyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhfSA9IHZlcnRleFV0aWxpdGllcztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgIHZlcnRleEluZGV4RGF0YSA9IGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSxcbiAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmVydGV4SW5kZXhEYXRhOiB2ZXJ0ZXhJbmRleERhdGEsXG4gIHZlcnRleE5vcm1hbERhdGE6IHZlcnRleE5vcm1hbERhdGEsXG4gIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE6IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoKSB7XG4gIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMgPSBbXSxcbiAgICAgICAgZmFjZXMgPSBDWUxJTkRFUl9GQUNFUyxcbiAgICAgICAgc3RlcCA9IDIgKiBNYXRoLlBJIC8gZmFjZXM7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGZhY2VzOyBjb3VudCsrKSB7XG4gICAgY29uc3QgYW5nbGUgPSBzdGVwICogY291bnQsXG4gICAgICAgICAgZmlyc3RYID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIGZpcnN0WSA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBzZWNvbmRYID0gTWF0aC5jb3MoYW5nbGUgKyBzdGVwKSxcbiAgICAgICAgICBzZWNvbmRZID0gTWF0aC5zaW4oYW5nbGUgKyBzdGVwKSxcbiAgICAgICAgICBmaXJzdFogPSAwLFxuICAgICAgICAgIHNlY29uZFogPSAxO1xuXG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9uVmVjdG9ycy5wdXNoKFsgZmlyc3RYLCBmaXJzdFksIGZpcnN0WiwgMSBdKTtcbiAgICBpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzLnB1c2goWyBzZWNvbmRYLCBzZWNvbmRZLCBmaXJzdFosIDEgXSk7XG4gICAgaW5pdGlhbFZlcnRleFBvc2l0aW9uVmVjdG9ycy5wdXNoKFsgc2Vjb25kWCwgc2Vjb25kWSwgc2Vjb25kWiwgMSBdKTtcbiAgICBpbml0aWFsVmVydGV4UG9zaXRpb25WZWN0b3JzLnB1c2goWyBmaXJzdFgsIGZpcnN0WSwgc2Vjb25kWiwgMSBdKTtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgPSBmbGF0dGVuKGluaXRpYWxWZXJ0ZXhQb3NpdGlvblZlY3RvcnMpOyAgLy8vXG5cbiAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIENvbG91ckVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRleFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy92ZXJ0ZXgnKTtcblxuY29uc3QgeyBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhIH0gPSB2ZXJ0ZXhVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRleEluZGV4RGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91ckN5bGluZGVyIGV4dGVuZHMgQ29sb3VyRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0LCBjb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdmVydGV4Q29sb3VyRGF0YSA9IGNhbGN1bGF0ZVZlcnRleENvbG91ckRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgY29sb3VyKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSwgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCksXG4gICAgICAgICAgY29sb3VyQ3lsaW5kZXIgPSBDb2xvdXJFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91ckN5bGluZGVyLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG5cbiAgICByZXR1cm4gY29sb3VyQ3lsaW5kZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDeWxpbmRlcjtcblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4Q29sb3VyRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCBjb2xvdXIpIHtcbiAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEubGVuZ3RoLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJzTGVuZ3RoID0gaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YUxlbmd0aCAvIDQsICAvLy9cbiAgICAgICAgdmVydGV4Q29sb3VyID0gY29sb3VyLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRleENvbG91cnNMZW5ndGg7IGluZGV4KyspIHtcbiAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgfVxuXG4gIGNvbnN0IHZlcnRleENvbG91ckRhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpOyAgLy8vXG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBTY2VuZSA9IHJlcXVpcmUoJy4uL3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9jYW1lcmEnKSxcbiAgICAgIEZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mcmFtZScpLFxuICAgICAgRmlyc3RGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QnKSxcbiAgICAgIFRoaXJkRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkJyksXG4gICAgICBTZWNvbmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kJyksXG4gICAgICBGb3VuZGF0aW9ucyA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMnKSxcbiAgICAgIE1haW5CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L21haW4nKSxcbiAgICAgIEJlZHJvb21CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20nKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9IG9mZnNldD17WyAtMTgsIC0xNiwgMCBdfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbFBvc2l0aW9uPXtbIDAsIDAsIC0xNTAgXX0gLz5cbiAgICAgIDxGb3VuZGF0aW9ucyAvPlxuICAgICAgPEZpcnN0Rmxvb3IgLz5cbiAgICAgIDxTZWNvbmRGbG9vciAvPlxuICAgICAgPFRoaXJkRmxvb3IgLz5cbiAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgPEJlZHJvb21CYWxjb255IC8+XG4gICAgICA8RnJhbWUgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyksXG4gICAgICBCYWxjb255U2VjdGlvbiA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvc2VjdGlvbicpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gUmFpbGluZztcblxuY29uc3QgQmVkcm9vbUJhbGNvbnkgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgMCwgMTYsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDQsIDE2LCAxOSBdfSAvPixcblxuICA8UmFpbGluZyBvZmZzZXQ9e1swLCAzMiAtIHRoaWNrbmVzcywgMTldfSBsZW5ndGg9ezh9IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJlZHJvb21CYWxjb255O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSYWlsaW5nID0gcmVxdWlyZSgnLi4vYmFsY29ueS9yYWlsaW5nJyksXG4gICAgICBCYWxjb255U2VjdGlvbiA9IHJlcXVpcmUoJy4uL2JhbGNvbnkvc2VjdGlvbicpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gUmFpbGluZztcblxuY29uc3QgTWFpbkJhbGNvbnkgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNDAsICAwLCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyA0NCwgIDAsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDQwLCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNDQsIDE2LCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyAzNiwgMTYsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDMyLCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgMjgsIDE2LCAxOSBdfSAvPixcblxuICA8UmFpbGluZyBvZmZzZXQ9e1syMCwgMCwgMTldfSBsZW5ndGg9ezI4fSAvPixcbiAgPFJhaWxpbmcgb2Zmc2V0PXtbMjgsIDMyIC0gdGhpY2tuZXNzLCAxOV19IGxlbmd0aD17MjB9IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5CYWxjb255O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpOyAgLy8vXG5cbmNvbnN0IFRvcFJhaWwgPSByZXF1aXJlKCcuL3JhaWxpbmcvdG9wUmFpbCcpLFxuICAgICAgVXByaWdodHMgPSByZXF1aXJlKCcuL3JhaWxpbmcvdXByaWdodHMnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IFRvcFJhaWwsXG4gICAgICBoZWlnaHQgPSAzO1xuXG5jb25zdCBSYWlsaW5nID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGxlbmd0aCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxUb3BSYWlsIG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCAwLCBoZWlnaHQgXSl9IGxlbmd0aD17bGVuZ3RofSAvPixcbiAgICA8VXByaWdodHMgb2Zmc2V0PXtvZmZzZXR9IGhlaWdodD17aGVpZ2h0fSBsZW5ndGg9e2xlbmd0aH0gLz5cblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFpbGluZztcblxuT2JqZWN0LmFzc2lnbihSYWlsaW5nLCB7XG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcblxuZnVuY3Rpb24gYWRkKHZlYzEsIHZlYzIpIHtcbiAgY29uc3QgdmVjID0gW107XG5cbiAgdmVjMy5hZGQodmVjLCB2ZWMxLCB2ZWMyKTtcblxuICByZXR1cm4gdmVjO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY3Vib2lkL2NvbG91cicpO1xuXG5jb25zdCBoZWlnaHQgPSAwLjEsXG4gICAgICB0aGlja25lc3MgPSAwLjQsXG4gICAgICBjb2xvdXIgPSBbIDAuNSwgMC41LCAwLjUsIDFdO1xuXG5jb25zdCBUb3BSYWlsID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGxlbmd0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSBsZW5ndGgsIC8vL1xuICAgICAgICBkZXB0aCA9IHRoaWNrbmVzczsgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IG9mZnNldD17b2Zmc2V0fSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oVG9wUmFpbCwge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wUmFpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2N1Ym9pZC9jb2xvdXInKTtcblxuY29uc3QgdGhpY2tuZXNzID0gMC4xMjUsXG4gICAgICBjb2xvdXIgPSBbIDAuNSwgMC41LCAwLjUsIDFdO1xuXG5jb25zdCBVcHJpZ2h0ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGhlaWdodCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSB0aGlja25lc3MsIC8vL1xuICAgICAgICBkZXB0aCA9IHRoaWNrbmVzczsgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJDdWJvaWQgY29sb3VyPXtjb2xvdXJ9IG9mZnNldD17b2Zmc2V0fSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG5cbiAgKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBVcHJpZ2h0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpOyAgLy8vXG5cbmNvbnN0IFVwcmlnaHQgPSByZXF1aXJlKCcuL3VwcmlnaHQnKTtcblxuY29uc3QgVXByaWdodHMgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgaGVpZ2h0LCBsZW5ndGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHN0ZXAgPSAwLjUsXG4gICAgICAgIGNvdW50ID0gbGVuZ3RoIC8gc3RlcDtcblxuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4PCBjb3VudDsgaW5kZXgrKykge1xuICAgIGVsZW1lbnRzLnB1c2goXG5cbiAgICAgIDxVcHJpZ2h0IG9mZnNldD17YWRkKG9mZnNldCwgWyBzdGVwICogaW5kZXgsIDAsIDAgXSl9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVcHJpZ2h0cztcblxuZnVuY3Rpb24gYWRkKHZlYzEsIHZlYzIpIHtcbiAgY29uc3QgdmVjID0gW107XG5cbiAgdmVjMy5hZGQodmVjLCB2ZWMxLCB2ZWMyKTtcblxuICByZXR1cm4gdmVjO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpOyAgLy8vXG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgT3Blbk1lc2ggPSByZXF1aXJlKCcuL3NlY3Rpb24vb3Blbk1lc2gnKSxcbiAgICAgIExvbmdFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UvbG9uZycpLFxuICAgICAgU2hvcnRFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2Uvc2hvcnQnKTtcblxuY29uc3Qgd2lkdGggPSA0LFxuICAgICAgZGVwdGggPSAxNjtcblxuY29uc3QgeyBoZWlnaHQsIHRoaWNrbmVzcyB9ID0gRWRnZTtcblxuY29uc3QgQmFsY29ueVNlY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxMb25nRWRnZSBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgMCwgMCwgLWhlaWdodCBdKX0gZGVwdGg9e2RlcHRofSAvPixcbiAgICA8TG9uZ0VkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIHdpZHRoLXRoaWNrbmVzcywgMCwgLWhlaWdodCBdKX0gZGVwdGg9e2RlcHRofSAvPixcbiAgICA8U2hvcnRFZGdlIG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCAwLCAtaGVpZ2h0IF0pfSB3aWR0aD17d2lkdGh9IC8+LFxuICAgIDxTaG9ydEVkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIDAsIDE2LXRoaWNrbmVzcywgLWhlaWdodCBdKX0gd2lkdGg9e3dpZHRofSAvPixcbiAgICA8T3Blbk1lc2ggb2Zmc2V0PXthZGQob2Zmc2V0LCBbIHRoaWNrbmVzcywgdGhpY2tuZXNzLCAwIF0pfSB3aWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBkZXB0aD17ZGVwdGggLSAyICogdGhpY2tuZXNzfSAvPlxuXG4gIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYWxjb255U2VjdGlvbjtcblxuZnVuY3Rpb24gYWRkKHZlYzEsIHZlYzIpIHtcbiAgY29uc3QgdmVjID0gW107XG5cbiAgdmVjMy5hZGQodmVjLCB2ZWMxLCB2ZWMyKTtcblxuICByZXR1cm4gdmVjO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlQ3Vib2lkID0gcmVxdWlyZSgnLi4vLi4vLi4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyk7XG5cbmNvbnN0IGhlaWdodCA9IDAuMjUsXG4gICAgICB0aGlja25lc3MgPSAwLjE7XG5cbmNvbnN0IEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgd2lkdGgsIGRlcHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZUN1Ym9pZCBpbWFnZU5hbWU9XCJydXN0eVN0ZWVsLmpwZ1wiIG9mZnNldD17b2Zmc2V0fSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG5cbiAgKTtcbn07XG5cbk9iamVjdC5hc3NpZ24oRWRnZSwge1xuICBoZWlnaHQ6IGhlaWdodCxcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBFZGdlO1xuXG5jb25zdCBMb25nRWRnZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCBkZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgd2lkdGggPSB0aGlja25lc3M7ICAvLy9cblxuICByZXR1cm4gKFxuXG4gICAgPEVkZ2Ugb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSAvPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvbmdFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpO1xuXG5jb25zdCB7IHRoaWNrbmVzcyB9ID0gRWRnZTtcblxuY29uc3QgU2hvcnRFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBkZXB0aCA9IHRoaWNrbmVzczsgIC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8RWRnZSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hvcnRFZGdlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpOyAgLy8vXG5cbmNvbnN0IENvbG91ckN1Ym9pZCA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbW1vbi9jdWJvaWQvY29sb3VyJyk7XG5cbmNvbnN0IGhlaWdodCA9IDAuMjUsXG4gICAgICB0aGlja25lc3MgPSAwLjAyNSxcbiAgICAgIHdpZHRod2lzZUNvdW50ID0gMTAsXG4gICAgICBkZXB0aHdpc2VDb3VudCA9IDUsXG4gICAgICBjb2xvdXIgPSBbIDAuNiwgMC42LCAwLjYsIDEwIF07XG5cbmNvbnN0IE9wZW5NZXNoID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoLCBkZXB0aCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgb3ZlcmFsbFdpZHRoID0gd2lkdGgsIC8vL1xuICAgICAgICBvdmVyYWxsRGVwdGggPSBkZXB0aCwgLy8vXG4gICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHdpZHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxXaWR0aCAvIHdpZHRod2lzZUNvdW50LFxuICAgICAgICAgIHdpZHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17Y29sb3VyfSBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgc3RlcCAqIGluZGV4LCAwLCAtaGVpZ2h0IF0pfSB3aWR0aD17d2lkdGh9IGRlcHRoPXtvdmVyYWxsRGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICAgKVxuICB9XG5cbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGRlcHRod2lzZUNvdW50OyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc3RlcCA9IG92ZXJhbGxEZXB0aCAvIGRlcHRod2lzZUNvdW50LFxuICAgICAgICAgIGRlcHRoID0gdGhpY2tuZXNzOyAgLy87XG5cbiAgICBlbGVtZW50cy5wdXNoKFxuXG4gICAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17Y29sb3VyfSBvZmZzZXQ9e2FkZChvZmZzZXQsIFsgMCwgc3RlcCAqIGluZGV4LCAtaGVpZ2h0IF0pfSB3aWR0aD17b3ZlcmFsbFdpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuT2JqZWN0LmFzc2lnbihPcGVuTWVzaCwge1xuICBoZWlnaHQ6IGhlaWdodCxcbiAgdGhpY2tuZXNzOiB0aGlja25lc3Ncbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5NZXNoO1xuXG5mdW5jdGlvbiBhZGQodmVjMSwgdmVjMikge1xuICBjb25zdCB2ZWMgPSBbXTtcblxuICB2ZWMzLmFkZCh2ZWMsIHZlYzEsIHZlYzIpO1xuXG4gIHJldHVybiB2ZWM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVDdWJvaWQgPSByZXF1aXJlKCcuLi9jb21tb24vY3Vib2lkL3RleHR1cmUnKTtcblxuY29uc3QgQ29uY3JldGVTbGFiID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoLCBkZXB0aCwgaGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZUN1Ym9pZCBpbWFnZU5hbWU9XCJjb25jcmV0ZS5qcGdcIiBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmNyZXRlU2xhYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyQ3Vib2lkID0gcmVxdWlyZSgnLi4vY29tbW9uL2N1Ym9pZC9jb2xvdXInKTtcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17WzEsIDEsIDEsIDFdfSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17OH0gaGVpZ2h0PXs5LjV9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXInKTtcblxuY29uc3QgRm9ydHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXs0MH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3J0eUZvb3RDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBUd2VudHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXsyMH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VudHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvZm9ydHlGb290JyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY29uc3QgRmlyc3RGbG9vciA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAwLCAwXX0gLz4sXG4gIDxGb3J0eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgOCwgMF19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAxNiwgMF19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgMF19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpcnN0Rmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jb25zdCBTZWNvbmRGbG9vciA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCAwLCA5LjVdfSAvPixcbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCA4LCA5LjVdfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMTYsIDkuNV19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgOS41XX0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vjb25kRmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jb25zdCBUaGlyZEZsb29yID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCAgMCwgMTldfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbMCwgIDgsIDE5XX0gLz4sXG4gIDxUd2VudHlGb290Q29udGFpbmVyIG9mZnNldD17WzgsIDE2LCAxOV19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgMTldfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGlyZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25jcmV0ZVNsYWIgPSByZXF1aXJlKCcuL2NvbmNyZXRlU2xhYicpO1xuXG5jb25zdCBGb3VuZGF0aW9ucyA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPENvbmNyZXRlU2xhYiBvZmZzZXQ9eyBbIC0wLjUsIC0wLjUsIC0xXSB9IHdpZHRoPXsxMi41fSBkZXB0aD17MzN9IGhlaWdodD17MX0gLz4sXG4gIDxDb25jcmV0ZVNsYWIgb2Zmc2V0PXsgWyAgIDI0LCAtMC41LCAtMV0gfSB3aWR0aD17MjQuNH0gZGVwdGg9ezMzfSBoZWlnaHQ9ezF9IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvdW5kYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSByZXF1aXJlKCcuL3N0ZWVsU2VjdGlvbicpO1xuXG5jb25zdCBGcmFtZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgIGRlcHRoID0gMzIsXG4gICAgICAgIGhlaWdodCA9IDI5O1xuXG4gIHJldHVybiAoW1xuXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbICAgICAgLTAuNSwgICAgICAtMC41LCAwIF0gfSB3aWR0aD17MX0gZGVwdGg9ezF9IGhlaWdodD17aGVpZ2h0fSAvPixcbiAgICA8U3RlZWxTZWN0aW9uIG9mZnNldD17IFsgICAgICAtMC41LCBkZXB0aC0wLjUsIDAgXSB9IHdpZHRoPXsxfSBkZXB0aD17MX0gaGVpZ2h0PXtoZWlnaHR9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyB3aWR0aC0wLjUsIGRlcHRoLTAuNSwgMCBdIH0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gLz4sXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIHdpZHRoLTAuNSwgICAgICAtMC41LCAwIF0gfSB3aWR0aD17MX0gZGVwdGg9ezF9IGhlaWdodD17aGVpZ2h0fSAvPixcblxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyAgICAgIC0wLjUsIC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17MX0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9ezF9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyB3aWR0aC0wLjUsIC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17MX0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9ezF9IC8+LFxuXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIC0wLjUsICAgICAgLTAuNSwgaGVpZ2h0LTEgXSB9IHdpZHRoPXt3aWR0aH0gZGVwdGg9ezF9IGhlaWdodD17MX0gLz4sXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIC0wLjUsIGRlcHRoLTAuNSwgaGVpZ2h0LTEgXSB9IHdpZHRoPXt3aWR0aH0gZGVwdGg9ezF9IGhlaWdodD17MX0gLz4sXG5cbiAgXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlQ3Vib2lkID0gcmVxdWlyZSgnLi4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyk7XG5cbmNvbnN0IFN0ZWVsU2VjdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCwgZGVwdGgsIGhlaWdodCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZWVsU2VjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IFNjZW5lID0gcmVxdWlyZSgnLi4vc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgVGV4dHVyZUN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyksXG4gICAgICBDb2xvdXJDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2N5bGluZGVyL2NvbG91cicpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBzaGFwZXMgPSAoKSA9PiB7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9IG9mZnNldD17WyAwLCAwLCAwIF19PlxuICAgICAgPENhbWVyYSBpbml0aWFsUG9zaXRpb249e1sgMCwgMCwgLTIwIF19IC8+XG4gICAgICA8VGV4dHVyZUN1Ym9pZCBvZmZzZXQ9e1sgKzEsICsyLCArMyBdfSB3aWR0aD17M30gZGVwdGg9ezJ9IGhlaWdodD17MX0gaW1hZ2VOYW1lPVwiYnJpY2tzLmpwZ1wiIC8+XG4gICAgICA8Q29sb3VyQ3lsaW5kZXIgb2Zmc2V0PXtbIC0zLCAtMiwgLTEgXX0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9ezV9IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IH1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwID0gREVQVEhfVEVTVDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGZ1bmMgPSBMRVFVQUw7XG4gIFxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGZ1bmMpOyBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGg6IGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXI6IGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZzogZW5hYmxlRGVwdGhUZXN0aW5nLFxuICBlbmFibGVEZXB0aEZ1bmN0aW9uOiBlbmFibGVEZXB0aEZ1bmN0aW9uXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXg6IGFwcGx5TWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNb3VzZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vbW91c2VDb29yZGluYXRlcycpO1xuXG5sZXQgaG9yaXpvbnRhbE9mZnNldCA9IDUxMiwgLy8vXG4gICAgdmVydGljYWxPZmZzZXQgPSAzMjA7IC8vL1xuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHggPSArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQgLSBob3Jpem9udGFsT2Zmc2V0KSwgIC8vL1xuICAgICAgICB5ID0gLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3AgLSB2ZXJ0aWNhbE9mZnNldCksIC8vL1xuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50OiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoQ2xhc3MsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gIGNvbnN0IHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCB0aGlzKTsgIC8vL1xuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIHVzZVNoYWRlcihzaGFkZXIpIHtcbiAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHNoYWRlci5nZXRQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVNoYWRlcjogY3JlYXRlU2hhZGVyLFxuICB1c2VTaGFkZXI6IHVzZVNoYWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSkge1xuICBjb25zdCB7IFRFWFRVUkVfMkQsIFJHQkEsIFVOU0lHTkVEX0JZVEUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbGV2ZWwgPSAwLFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVNaXBtYXAoVEVYVFVSRV8yRCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpIHsgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZTogY3JlYXRlVGV4dHVyZSxcbiAgYWN0aXZhdGVUZXh0dXJlOiBhY3RpdmF0ZVRleHR1cmVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvb3JkaW5hdGVzMkQgPSByZXF1aXJlKCcuL2Nvb3JkaW5hdGVzMkQnKTtcblxuY2xhc3MgTW91c2VDb29yZGluYXRlcyBleHRlbmRzIENvb3JkaW5hdGVzMkQge31cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUNvb3JkaW5hdGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTY2VuZSA9IHJlcXVpcmUoJy4vc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4vY2FtZXJhJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50T3JFbGVtZW50cztcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCA9PT0gU2NlbmUpIHtcbiAgICAgIGNvbnN0IHNjZW5lID0gU2NlbmUuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICAgIGVsZW1lbnRPckVsZW1lbnRzID0gc2NlbmU7ICAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgPT09IENhbWVyYSkge1xuICAgICAgY29uc3QgY2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgICBlbGVtZW50T3JFbGVtZW50cyA9IGNhbWVyYTsgLy8vXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50T3JFbGVtZW50cyA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRPckVsZW1lbnRzID0gZnVuYyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IGZsYXR0ZW4oZ3VhcmFudGVlKGVsZW1lbnRPckVsZW1lbnRzKSk7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vc2NlbmUvb2Zmc2V0JyksXG4gICAgICBDb2xvdXJTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLm9mZnNldFZlYzMgPSBvZmZzZXRWZWMzO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gIH1cbiAgXG4gIGdldE9mZnNldFZlYzMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0VmVjMztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy5jb2xvdXJTaGFkZXIpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBhc3NpZ25Db250ZXh0LmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soZnVuY3Rpb24ocm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tVmVjMyh0aGlzLm9mZnNldFZlYzMpO1xuXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG9mZnNldFZlYzMgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gQ29sb3VyU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IG5ldyBTY2VuZShvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHNjZW5lOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICAgIFxuICAgICAgdXBkYXRlUGFyZW50Q29udGV4dChjaGlsZEVsZW1lbnQsIHBhcmVudEVsZW1lbnQpOyAvLy9cbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVNoYWRlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIGNvbG91clNoYWRlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIC8vIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgc2NlbmUucmVzaXplKCk7XG4gICAgLy8gICBzY2VuZS5yZW5kZXIoKTtcbiAgICAvLyB9O1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbnRleHQoY2hpbGRFbGVtZW50LCBwYXJlbnRFbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gIHBhcmVudEVsZW1lbnQuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudEVsZW1lbnQuY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG5cbiAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LmJpbmQodGhpcyksIFtdKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQW5nbGVDb29yZGluYXRlcyA9IHJlcXVpcmUoJy4vY29vcmRpbmF0ZXMyRCcpLCAgLy8vXG4gICAgICBNb3VzZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi9tb3VzZUNvb3JkaW5hdGVzJyk7XG5cbmNvbnN0IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMgPSBuZXcgTW91c2VDb29yZGluYXRlcygwLCAwKSxcbiAgICAgIElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMgPSBuZXcgQW5nbGVDb29yZGluYXRlcygwLCBNYXRoLlBJIC8gMik7XG5cbmNsYXNzIEFuZ2xlcyB7XG4gIGNvbnN0cnVjdG9yKG1vdXNlRG93biwgb2Zmc2V0TW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gb2Zmc2V0TW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0WEF4aXNBbmdsZSgpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gLXRoaXMuYW5nbGVDb29yZGluYXRlcy5nZXRZKCk7IC8vL1xuXG4gICAgcmV0dXJuIHhBeGlzQW5nbGU7XG4gIH1cblxuICBnZXRZQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHlBeGlzQW5nbGUgPSArdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFgoKTsgLy8vXG5cbiAgICByZXR1cm4geUF4aXNBbmdsZTtcbiAgfVxuICBcbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcyA9IHRoaXMuYW5nbGVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgIHRoaXMub2Zmc2V0TW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgdGhpcy51cGRhdGVBbmdsZUNvb3JkaW5hdGVzKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXMubWludXModGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlQ29vcmRpbmF0ZXMgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMubXVsdGlwbGllZEJ5KE1hdGguUEkgLyAxODApOyAgLy8vXG5cbiAgICB0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMgPSB0aGlzLnByZXZpb3VzQW5nbGVDb29yZGluYXRlcy5wbHVzKHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbW91c2VEb3duID0gZmFsc2UsXG4gICAgICAgICAgb2Zmc2V0TW91c2VDb29yZGluYXRlcyA9IElOSVRJQUxfTU9VU0VfQ09PUkRJTkFURVMsXG4gICAgICAgICAgYW5nbGVDb29yZGluYXRlcyA9IElOSVRJQUxfQU5HTEVfQ09PUkRJTkFURVMsXG4gICAgICAgICAgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gYW5nbGVDb29yZGluYXRlcyxcbiAgICAgICAgICBhbmdsZXMgPSBuZXcgQW5nbGVzKG1vdXNlRG93biwgb2Zmc2V0TW91c2VDb29yZGluYXRlcywgYW5nbGVDb29yZGluYXRlcywgcHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiBhbmdsZXM7XG4gIH1cbn1cblxuY29uc3QgYW5nbGVzID0gQW5nbGVzLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5nbGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb29yZGluYXRlczJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBcbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuICBcbiAgc2V0WSh5KSB7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHBsdXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggKyB4O1xuICAgIHkgPSB0aGlzLnkgKyB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgbWludXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggLSB4O1xuICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG4gIFxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgZGl2aWRlZEJ5KHNjYWxhcikge1xuICAgIGNvbnN0IHggPSB0aGlzLnggLyBzY2FsYXIsXG4gICAgICAgICAgeSA9IHRoaXMueSAvIHNjYWxhcjtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKSxcbiAgICAgICAgICB5ID0gdGhpcy5nZXRZKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7eH0sJHt5fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29vcmRpbmF0ZXMyRDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29vcmRpbmF0ZXMyRCA9IHJlcXVpcmUoJy4vY29vcmRpbmF0ZXMyRCcpO1xuXG5jbGFzcyBNb3VzZUNvb3JkaW5hdGVzIGV4dGVuZHMgQ29vcmRpbmF0ZXMyRCB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlQ29vcmRpbmF0ZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1PVVNFX1VQID0gJ01PVVNFX1VQJyxcbiAgICAgIE1PVVNFX0RPV04gPSAnTU9VU0VfRE9XTicsXG4gICAgICBNT1VTRV9NT1ZFID0gJ01PVVNFX01PVkUnLFxuICAgICAgTU9VU0VfV0hFRUwgPSAnTU9VU0VfV0hFRUwnO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuXG4gICAgY29uc3QgbW91c2VFdmVudFR5cGVzID0gW1xuICAgICAgICAgICAgTU9VU0VfVVAsXG4gICAgICAgICAgICBNT1VTRV9ET1dOLFxuICAgICAgICAgICAgTU9VU0VfTU9WRSxcbiAgICAgICAgICAgIE1PVVNFX1dIRUVMXG4gICAgICAgICAgXTtcblxuICAgIG1vdXNlRXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlRXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSA9IFtdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgXG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2V1cCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX1VQLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfRE9XTiwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZUV2ZW50KE1PVVNFX01PVkUsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlV2hlZWxFdmVudChldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VVcEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfVVAsIG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlRG93bkV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfRE9XTiwgbW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX01PVkUsIG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVyKE1PVVNFX1dIRUVMLCBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEV2ZW50SGFuZGxlcihjYW52YXMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlRXZlbnQobW91c2VFdmVudFR5cGUsIGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IHRoaXMuY2FudmFzLm1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsRXZlbnRUeXBlID0gTU9VU0VfV0hFRUwsXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlV2hlZWxFdmVudFR5cGVdLFxuICAgICAgICAgIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKSk7IC8vL1xuXG4gICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKSB7XG4gICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVyKG1vdXNlRXZlbnRUeXBlLCBtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdO1xuXG4gICAgbW91c2VFdmVudEhhbmRsZXJzLnB1c2gobW91c2VFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGNhbnZhcyk7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUV2ZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCB7IGNyZWF0ZSwgaW52ZXJ0LCB0cmFuc3Bvc2UgfSA9IG1hdDQ7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Sb3RhdGlvbihyb3RhdGlvbikge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwobWF0NCk7XG5cbiAgICBpbnZlcnQobWF0NCwgcm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIHRyYW5zcG9zZShtYXQ0LCBtYXQ0KTtcbiAgICBcbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9ybWFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVjMyh2ZWMzKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQobWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgdmVjMyk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNvbnN0IGRlZmF1bHRYQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WUNvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFpDb29yZGluYXRlID0gLTYuMDtcblxuY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSB7IHJldHVybiBQb3NpdGlvbi5mcm9tQ29vcmRpbmF0ZXModW5kZWZpbmVkLCB1bmRlZmluZWQsIHpDb29yZGluYXRlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZXMoeENvb3JkaW5hdGUgPSBkZWZhdWx0WENvb3JkaW5hdGUsIHlDb29yZGluYXRlID0gZGVmYXVsdFlDb29yZGluYXRlLCB6Q29vcmRpbmF0ZSA9IGRlZmF1bHRaQ29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihtYXQ0KTtcblxuICAgIHRyYW5zbGF0ZShtYXQ0LCBtYXQ0LCBbIHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgXSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBjcmVhdGUsIHBlcnNwZWN0aXZlIH0gPSBtYXQ0LFxuICAgICAgeyBGSUVMRF9PRl9WSUVXLCBaX05FQVIsIFpfRkFSIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFByb2plY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgZmllbGRPZlZpZXcgPSBGSUVMRF9PRl9WSUVXLFxuICAgICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgek5lYXIgPSBaX05FQVIsXG4gICAgICAgICAgekZhciA9IFpfRkFSLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBuZXcgUHJvamVjdGlvbihtYXQ0KTtcblxuICAgIHBlcnNwZWN0aXZlKG1hdDQsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgcmV0dXJuIHByb2plY3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCByb3RhdGUgfSA9IG1hdDQ7XG5cbmNvbnN0IGRlZmF1bHRYQW5nbGUgPSAwLjAsXG4gICAgICBkZWZhdWx0WUFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFpBbmdsZSA9IDAuMDtcblxuY2xhc3MgUm90YXRpb24ge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUgPSBkZWZhdWx0WEFuZ2xlLCB5QW5nbGUgPSBkZWZhdWx0WUFuZ2xlLCB6QW5nbGUgPSBkZWZhdWx0WkFuZ2xlKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIHJvdGF0aW9uID0gbmV3IFJvdGF0aW9uKG1hdDQpO1xuXG4gICAgcm90YXRlKG1hdDQsIG1hdDQsIHhBbmdsZSwgWzEsIDAsIDBdKTtcbiAgICByb3RhdGUobWF0NCwgbWF0NCwgeUFuZ2xlLCBbMCwgMSwgMF0pO1xuICAgIHJvdGF0ZShtYXQ0LCBtYXQ0LCB6QW5nbGUsIFswLCAwLCAxXSk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgTUlOSU1VTV9ESVNUQU5DRSB9ID0gY29uc3RhbnRzOyBcblxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSArPSBkZWx0YSAqIDU7ICAvLy9cblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFpvb207XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IG9mZnNldE1hdHJpeE5hbWUgPSAndU9mZnNldE1hdHJpeCcsXG4gICAgICByb3RhdGlvbk1hdHJpeE5hbWUgPSAndVJvdGF0aW9uTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldE1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uTWF0cml4TmFtZX0gKiAke29mZnNldE1hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5vZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldE1hdHJpeE5hbWUpO1xuICAgIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uTWF0cml4TmFtZSk7XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLm5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsTWF0cml4TmFtZSk7XG5cbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSBbXTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IFtdO1xuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gLTE7IC8vL1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleERhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cblxuICBnZXRPZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4UG9zaXRpb25EYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbERhdGEsIHZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhEYXRhKHZlcnRleEluZGV4RGF0YSkge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubWF4aW11bVZlcnRleEluZGV4ICsgMTtcblxuICAgIHZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YS5tYXAoZnVuY3Rpb24odmVydGV4SW5kZXgpIHtcbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleCArIG9mZnNldDtcbiAgICB9KTtcblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4RGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcblxuICAgIHRoaXMubWF4aW11bVZlcnRleEluZGV4ID0gTWF0aC5tYXgodGhpcy5tYXhpbXVtVmVydGV4SW5kZXgsIC4uLnZlcnRleEluZGV4RGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbERhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleERhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbEJ1ZmZlciwgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25CdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbkJ1ZmZlciwgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpOzR9XG5cbiAgYmluZFZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgeyBWRVJURVhfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICB7IEZSQUdNRU5UX1NIQURFUiB9ID0gY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2hhZGVyLCB7XG4gIGNyZWF0ZVZlcnRleFNoYWRlcjogY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlcjogY3JlYXRlRnJhZ21lbnRTaGFkZXIsXG4gIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlOiBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSxcbiAgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2U6IGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgeyBDT01QSUxFX1NUQVRVUyB9ID0gY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIGNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSBjb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyLCBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4Q29sb3VyJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgO1xuICBcbmNsYXNzIENvbG91clNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91ckJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckJ1ZmZlciwgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7fSAgLy8vXG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKENvbG91clNoYWRlciwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgICByZXR1cm4gY29sb3VyU2hhZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyU2hhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU2hhZGVyID0gcmVxdWlyZSgnLi4vc2hhZGVyJyk7XG5cbmNvbnN0IHsgY3JlYXRlVmVydGV4U2hhZGVyLCBjcmVhdGVGcmFnbWVudFNoYWRlciwgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2UsIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlIH0gPSBTaGFkZXIsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9ICdhVGV4dHVyZUNvb3JkaW5hdGUnLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVMaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZVBvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG5cbmNsYXNzIFRleHR1cmVTaGFkZXIgZXh0ZW5kcyBTaGFkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBzdXBlcihwcm9ncmFtLCBjYW52YXMpO1xuXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSk7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSA9IFtdO1xuICB9XG5cbiAgYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRleHR1cmVDb29yZGluYXRlRGF0YSkge1xuICAgIGFkZCh0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kVGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVCdWZmZXIsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGNhbnZhcykge1xuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB7IFRFWFRVUkUwIH0gPSBjb250ZXh0LFxuICAgICAgICAgIHRhcmdldCA9IFRFWFRVUkUwLCAgLy8vXG4gICAgICAgICAgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSAwO1xuXG4gICAgY2FudmFzLmFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpO1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHVTYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyID0gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gY2FudmFzLmNyZWF0ZVNoYWRlcihUZXh0dXJlU2hhZGVyLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcblxuICAgIHJldHVybiBjb2xvdXJTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlU2hhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5O1xuXG5mdW5jdGlvbiBkaWNlKGVsZW1lbnRzLCBhcnJheUxlbmd0aCkge1xuICBjb25zdCBhcnJheXMgPSBbXSxcbiAgICAgICAgZWxlbWVudHNMZW5ndGggPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgIGFycmF5c0xlbmd0aCA9IGVsZW1lbnRzTGVuZ3RoIC8gYXJyYXlMZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5c0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBhcnJheUxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgIGFycmF5W29mZnNldF0gPSBlbGVtZW50c1tpbmRleCAqIGFycmF5TGVuZ3RoICsgb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBhcnJheXNbaW5kZXhdID0gYXJyYXk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgYXJyYXkpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIGRpY2U6IGRpY2UsXG4gIGZsYXR0ZW46IGZsYXR0ZW4sXG4gIGd1YXJhbnRlZTogZ3VhcmFudGVlXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Jcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZXBlYXRlZGx5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNhbGxiYWNrKGltYWdlKTtcbiAgfTtcblxuICBpbWFnZS5zcmMgPSBwYXRoOyAgLy8vXG59XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMocGF0aHMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSBwYXRocy5sZW5ndGgsIC8vL1xuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxuICAgICAgICAgIHBhdGhzOiBwYXRoc1xuICAgICAgICB9O1xuXG4gIHJlcGVhdGVkbHkocHJlbG9hZEltYWdlQ2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2U6IHByZWxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlc1xufTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlQ2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBpbWFnZXMsIHBhdGhzIH0gPSBjb250ZXh0LFxuICAgICAgICBwYXRoID0gcGF0aHNbaW5kZXhdLFxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlc1tpbmRleF0gPSBpbWFnZTtcblxuICBpbWFnZS5vbmxvYWQgPSBuZXh0OyAgLy8vXG5cbiAgaW1hZ2Uuc3JjID0gcGF0aDsgIC8vL1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi9iaW4vY29uc3RhbnRzJyksIC8vL1xuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGltYWdlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlJyk7XG5cbmNvbnN0IHsgSU1BR0VfTUFQX1BBVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHByZWxvYWRJbWFnZSB9ID0gaW1hZ2VVdGlsaXRpZXMsXG4gICAgICB7IGltYWdlTWFwSlNPTiB9ID0gcnVudGltZUNvbmZpZ3VyYXRpb247XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChjYWxsYmFjaykge1xuICBjb25zdCBwYXRoID0gSU1BR0VfTUFQX1BBVEg7XG5cbiAgcHJlbG9hZEltYWdlKHBhdGgsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXMoaW1hZ2VOYW1lcykge1xuICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBpbWFnZU5hbWVzLnJlZHVjZShmdW5jdGlvbih0ZXh0dXJlQ29vcmRpbmF0ZXMsIHRleHR1cmVOYW1lKSB7XG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzLmNvbmNhdChpbWFnZU1hcEpTT05bdGV4dHVyZU5hbWVdKTtcblxuICAgICAgICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gICAgICAgIH0sIFtdKSxcbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gZmxhdHRlbih0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2VNYXA6IHByZWxvYWRJbWFnZU1hcCxcbiAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXM6IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnZ2wtdmVjMycpLCAgLy8vXG4gICAgICB2ZWM0ID0gcmVxdWlyZSgnZ2wtdmVjNCcpLCAgLy8vXG4gICAgICBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZGljZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9uRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLCB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KSB7XG4gIGNvbnN0IG1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgbWF0NC50cmFuc2xhdGUobWF0cml4LCBtYXRyaXgsIG9mZnNldCk7XG4gIG1hdDQuc2NhbGUobWF0cml4LCBtYXRyaXgsIFt3aWR0aCwgZGVwdGgsIGhlaWdodF0pO1xuXG4gIGxldCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaWNlKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIDQpOyAgLy8vXG5cbiAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgIHJldHVybiB2ZWM0LnRyYW5zZm9ybU1hdDQodmVydGV4UG9zaXRpb24sIHZlcnRleFBvc2l0aW9uLCBtYXRyaXgpO1xuICB9KTtcblxuICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMubWFwKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uLnNsaWNlKDAsIDMpO1xuICB9KTtcbiAgXG4gIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTsgXG5cbiAgcmV0dXJuIHZlcnRleFBvc2l0aW9uRGF0YTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKSB7XG4gIGNvbnN0IHZlcnRleE5vcm1hbFZlY3RvcnMgPSBbXSxcbiAgICAgICAgZmFjZXMgPSBkaWNlKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEsIDE2KTtcblxuICBmYWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSBkaWNlKGZhY2UsIDQpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGZpcnN0VmVydGV4SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgdGhpcmRWZXJ0ZXhJbmRleCA9IChpbmRleCArIDMpICUgNCxcbiAgICAgICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZmlyc3RWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3RoaXJkVmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgZmlyc3RWZWN0b3IgPSBzdWJ0cmFjdChzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksICAvLy9cbiAgICAgICAgICAgIHNlY29uZFZlY3RvciA9IHN1YnRyYWN0KHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLCAgLy8vXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxWZWN0b3IgPSBjcm9zcyhmaXJzdFZlY3Rvciwgc2Vjb25kVmVjdG9yKTtcblxuICAgICAgdmVydGV4Tm9ybWFsVmVjdG9ycy5wdXNoKHZlcnRleE5vcm1hbFZlY3Rvcik7XG4gICAgfVxuICB9KTtcbiAgXG4gIGNvbnN0IHZlcnRleE5vcm1hbERhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbFZlY3RvcnMpOyAvLy9cblxuICByZXR1cm4gdmVydGV4Tm9ybWFsRGF0YTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpIHtcbiAgY29uc3QgdmVydGV4SW5kZXhEYXRhID0gW10sXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGFMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhLmxlbmd0aCxcbiAgICAgICAgZmFjZXNMZW5ndGggPSBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhTGVuZ3RoIC8gMTY7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhY2VzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiA0O1xuXG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMSk7XG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMCk7XG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMik7XG4gICAgdmVydGV4SW5kZXhEYXRhLnB1c2gob2Zmc2V0ICsgMyk7XG4gIH1cblxuICByZXR1cm4gdmVydGV4SW5kZXhEYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25EYXRhOiBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbkRhdGEsXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGE6IGNhbGN1bGF0ZVZlcnRleE5vcm1hbERhdGEsXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4RGF0YTogY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhXG59O1xuXG5mdW5jdGlvbiBzdWJ0cmFjdCh2ZWMxLCB2ZWMyKSB7XG4gIGNvbnN0IHZlYyA9IFtdO1xuXG4gIHZlYzMuc3VidHJhY3QodmVjLCB2ZWMxLCB2ZWMyKTtcblxuICByZXR1cm4gdmVjO1xufVxuXG5mdW5jdGlvbiBjcm9zcyh2ZWMxLCB2ZWMyKSB7XG4gIGNvbnN0IHZlYyA9IFtdO1xuXG4gIHZlYzMuY3Jvc3ModmVjLCB2ZWMxLCB2ZWMyKTtcblxuICByZXR1cm4gdmVjO1xufVxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSBhZGpvaW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIG91dFswXSAgPSAgKGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gICAgb3V0WzFdICA9IC0oYTAxICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpKTtcbiAgICBvdXRbMl0gID0gIChhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFszXSAgPSAtKGEwMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpIC0gYTExICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikgKyBhMjEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzRdICA9IC0oYTEwICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMCAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbNV0gID0gIChhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFs2XSAgPSAtKGEwMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTEwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzddICA9ICAoYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbOF0gID0gIChhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkpO1xuICAgIG91dFs5XSAgPSAtKGEwMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSk7XG4gICAgb3V0WzEwXSA9ICAoYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMl0gPSAtKGExMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIyIC0gYTEyICogYTIxKSk7XG4gICAgb3V0WzEzXSA9ICAoYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpKTtcbiAgICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICAgIG91dFsxNV0gPSAgKGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjbG9uZShhKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICAgIG91dFs5XSA9IGFbOV07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBkZXRlcm1pbmFudDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG4gICAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmcm9tUXVhdDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgICB2YXIgeCA9IHFbMF0sIHkgPSBxWzFdLCB6ID0gcVsyXSwgdyA9IHFbM10sXG4gICAgICAgIHgyID0geCArIHgsXG4gICAgICAgIHkyID0geSArIHksXG4gICAgICAgIHoyID0geiArIHosXG5cbiAgICAgICAgeHggPSB4ICogeDIsXG4gICAgICAgIHl4ID0geSAqIHgyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgenggPSB6ICogeDIsXG4gICAgICAgIHp5ID0geiAqIHkyLFxuICAgICAgICB6eiA9IHogKiB6MixcbiAgICAgICAgd3ggPSB3ICogeDIsXG4gICAgICAgIHd5ID0gdyAqIHkyLFxuICAgICAgICB3eiA9IHcgKiB6MjtcblxuICAgIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICAgIG91dFsxXSA9IHl4ICsgd3o7XG4gICAgb3V0WzJdID0genggLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuXG4gICAgb3V0WzRdID0geXggLSB3ejtcbiAgICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgICBvdXRbNl0gPSB6eSArIHd4O1xuICAgIG91dFs3XSA9IDA7XG5cbiAgICBvdXRbOF0gPSB6eCArIHd5O1xuICAgIG91dFs5XSA9IHp5IC0gd3g7XG4gICAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgIG91dFsxMV0gPSAwO1xuXG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcbiAqICAgICB2YXIgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAgIC8vIFF1YXRlcm5pb24gbWF0aFxuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeHkgPSB4ICogeTIsXG4gICAgICAgIHh6ID0geCAqIHoyLFxuICAgICAgICB5eSA9IHkgKiB5MixcbiAgICAgICAgeXogPSB5ICogejIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgICBvdXRbMV0gPSB4eSArIHd6O1xuICAgIG91dFsyXSA9IHh6IC0gd3k7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSB4eSAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSAoeHggKyB6eik7XG4gICAgb3V0WzZdID0geXogKyB3eDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IHh6ICsgd3k7XG4gICAgb3V0WzldID0geXogLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gdlswXTtcbiAgICBvdXRbMTNdID0gdlsxXTtcbiAgICBvdXRbMTRdID0gdlsyXTtcbiAgICBvdXRbMTVdID0gMTtcbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZydXN0dW07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnJ1c3R1bSBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtOdW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZydXN0dW0ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIHZhciBybCA9IDEgLyAocmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSAobmVhciAqIDIpICogcmw7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAobmVhciAqIDIpICogdGI7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gICAgb3V0WzldID0gKHRvcCArIGJvdHRvbSkgKiB0YjtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzExXSA9IC0xO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhciAqIDIpICogbmY7XG4gICAgb3V0WzE1XSA9IDA7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IHJlcXVpcmUoJy4vY3JlYXRlJylcbiAgLCBjbG9uZTogcmVxdWlyZSgnLi9jbG9uZScpXG4gICwgY29weTogcmVxdWlyZSgnLi9jb3B5JylcbiAgLCBpZGVudGl0eTogcmVxdWlyZSgnLi9pZGVudGl0eScpXG4gICwgdHJhbnNwb3NlOiByZXF1aXJlKCcuL3RyYW5zcG9zZScpXG4gICwgaW52ZXJ0OiByZXF1aXJlKCcuL2ludmVydCcpXG4gICwgYWRqb2ludDogcmVxdWlyZSgnLi9hZGpvaW50JylcbiAgLCBkZXRlcm1pbmFudDogcmVxdWlyZSgnLi9kZXRlcm1pbmFudCcpXG4gICwgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKVxuICAsIHRyYW5zbGF0ZTogcmVxdWlyZSgnLi90cmFuc2xhdGUnKVxuICAsIHNjYWxlOiByZXF1aXJlKCcuL3NjYWxlJylcbiAgLCByb3RhdGU6IHJlcXVpcmUoJy4vcm90YXRlJylcbiAgLCByb3RhdGVYOiByZXF1aXJlKCcuL3JvdGF0ZVgnKVxuICAsIHJvdGF0ZVk6IHJlcXVpcmUoJy4vcm90YXRlWScpXG4gICwgcm90YXRlWjogcmVxdWlyZSgnLi9yb3RhdGVaJylcbiAgLCBmcm9tUm90YXRpb25UcmFuc2xhdGlvbjogcmVxdWlyZSgnLi9mcm9tUm90YXRpb25UcmFuc2xhdGlvbicpXG4gICwgZnJvbVF1YXQ6IHJlcXVpcmUoJy4vZnJvbVF1YXQnKVxuICAsIGZydXN0dW06IHJlcXVpcmUoJy4vZnJ1c3R1bScpXG4gICwgcGVyc3BlY3RpdmU6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmUnKVxuICAsIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3OiByZXF1aXJlKCcuL3BlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3JylcbiAgLCBvcnRobzogcmVxdWlyZSgnLi9vcnRobycpXG4gICwgbG9va0F0OiByZXF1aXJlKCcuL2xvb2tBdCcpXG4gICwgc3RyOiByZXF1aXJlKCcuL3N0cicpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnQ7XG5cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XSxcblxuICAgICAgICBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTAsXG4gICAgICAgIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMCxcbiAgICAgICAgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwLFxuICAgICAgICBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTEsXG4gICAgICAgIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMSxcbiAgICAgICAgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyLFxuICAgICAgICBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzAsXG4gICAgICAgIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMCxcbiAgICAgICAgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwLFxuICAgICAgICBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzEsXG4gICAgICAgIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMSxcbiAgICAgICAgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyLFxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgICAgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gICAgaWYgKCFkZXQpIHsgXG4gICAgICAgIHJldHVybiBudWxsOyBcbiAgICB9XG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gICAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gICAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gICAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gICAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICAgIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9va0F0O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGxvb2stYXQgbWF0cml4IHdpdGggdGhlIGdpdmVuIGV5ZSBwb3NpdGlvbiwgZm9jYWwgcG9pbnQsIGFuZCB1cCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHt2ZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbG9va0F0KG91dCwgZXllLCBjZW50ZXIsIHVwKSB7XG4gICAgdmFyIHgwLCB4MSwgeDIsIHkwLCB5MSwgeTIsIHowLCB6MSwgejIsIGxlbixcbiAgICAgICAgZXlleCA9IGV5ZVswXSxcbiAgICAgICAgZXlleSA9IGV5ZVsxXSxcbiAgICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICAgIHVweSA9IHVwWzFdLFxuICAgICAgICB1cHogPSB1cFsyXSxcbiAgICAgICAgY2VudGVyeCA9IGNlbnRlclswXSxcbiAgICAgICAgY2VudGVyeSA9IGNlbnRlclsxXSxcbiAgICAgICAgY2VudGVyeiA9IGNlbnRlclsyXTtcblxuICAgIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV5IC0gY2VudGVyeSkgPCAwLjAwMDAwMSAmJlxuICAgICAgICBNYXRoLmFicyhleWV6IC0gY2VudGVyeikgPCAwLjAwMDAwMSkge1xuICAgICAgICByZXR1cm4gaWRlbnRpdHkob3V0KTtcbiAgICB9XG5cbiAgICB6MCA9IGV5ZXggLSBjZW50ZXJ4O1xuICAgIHoxID0gZXlleSAtIGNlbnRlcnk7XG4gICAgejIgPSBleWV6IC0gY2VudGVyejtcblxuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQoejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcblxuICAgIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejI7XG4gICAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICAgIGxlbiA9IE1hdGguc3FydCh4MCAqIHgwICsgeDEgKiB4MSArIHgyICogeDIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHgwID0gMDtcbiAgICAgICAgeDEgPSAwO1xuICAgICAgICB4MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeDAgKj0gbGVuO1xuICAgICAgICB4MSAqPSBsZW47XG4gICAgICAgIHgyICo9IGxlbjtcbiAgICB9XG5cbiAgICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICAgIHkxID0gejIgKiB4MCAtIHowICogeDI7XG4gICAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcblxuICAgIGxlbiA9IE1hdGguc3FydCh5MCAqIHkwICsgeTEgKiB5MSArIHkyICogeTIpO1xuICAgIGlmICghbGVuKSB7XG4gICAgICAgIHkwID0gMDtcbiAgICAgICAgeTEgPSAwO1xuICAgICAgICB5MiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gMSAvIGxlbjtcbiAgICAgICAgeTAgKj0gbGVuO1xuICAgICAgICB5MSAqPSBsZW47XG4gICAgICAgIHkyICo9IGxlbjtcbiAgICB9XG5cbiAgICBvdXRbMF0gPSB4MDtcbiAgICBvdXRbMV0gPSB5MDtcbiAgICBvdXRbMl0gPSB6MDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHgxO1xuICAgIG91dFs1XSA9IHkxO1xuICAgIG91dFs2XSA9IHoxO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geDI7XG4gICAgb3V0WzldID0geTI7XG4gICAgb3V0WzEwXSA9IHoyO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gICAgb3V0WzEzXSA9IC0oeTAgKiBleWV4ICsgeTEgKiBleWV5ICsgeTIgKiBleWV6KTtcbiAgICBvdXRbMTRdID0gLSh6MCAqIGV5ZXggKyB6MSAqIGV5ZXkgKyB6MiAqIGV5ZXopO1xuICAgIG91dFsxNV0gPSAxO1xuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQ0J3NcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgLy8gQ2FjaGUgb25seSB0aGUgY3VycmVudCBsaW5lIG9mIHRoZSBzZWNvbmQgbWF0cml4XG4gICAgdmFyIGIwICA9IGJbMF0sIGIxID0gYlsxXSwgYjIgPSBiWzJdLCBiMyA9IGJbM107ICBcbiAgICBvdXRbMF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzFdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsyXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbM10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbNF07IGIxID0gYls1XTsgYjIgPSBiWzZdOyBiMyA9IGJbN107XG4gICAgb3V0WzRdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs1XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbNl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzddID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzhdOyBiMSA9IGJbOV07IGIyID0gYlsxMF07IGIzID0gYlsxMV07XG4gICAgb3V0WzhdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFs5XSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTBdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxMV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbMTJdOyBiMSA9IGJbMTNdOyBiMiA9IGJbMTRdOyBiMyA9IGJbMTVdO1xuICAgIG91dFsxMl0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzEzXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMTRdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFsxNV0gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvcnRobztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBvcnRobyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGxyID0gMSAvIChsZWZ0IC0gcmlnaHQpLFxuICAgICAgICBidCA9IDEgLyAoYm90dG9tIC0gdG9wKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IC0yICogbHI7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAtMiAqIGJ0O1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gKGxlZnQgKyByaWdodCkgKiBscjtcbiAgICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBwZXJzcGVjdGl2ZTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZShvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIGYgPSAxLjAgLyBNYXRoLnRhbihmb3Z5IC8gMiksXG4gICAgICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gZjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9ICgyICogZmFyICogbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGZpZWxkIG9mIHZpZXcuXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXG4gKiB3aXRoIHRoZSBzdGlsbCBleHBlcmllbWVudGFsIFdlYlZSIEFQSS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92IE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiB1cERlZ3JlZXMsIGRvd25EZWdyZWVzLCBsZWZ0RGVncmVlcywgcmlnaHREZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZUZyb21GaWVsZE9mVmlldyhvdXQsIGZvdiwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pLFxuICAgICAgICB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcblxuICAgIG91dFswXSA9IHhTY2FsZTtcbiAgICBvdXRbMV0gPSAwLjA7XG4gICAgb3V0WzJdID0gMC4wO1xuICAgIG91dFszXSA9IDAuMDtcbiAgICBvdXRbNF0gPSAwLjA7XG4gICAgb3V0WzVdID0geVNjYWxlO1xuICAgIG91dFs2XSA9IDAuMDtcbiAgICBvdXRbN10gPSAwLjA7XG4gICAgb3V0WzhdID0gLSgobGVmdFRhbiAtIHJpZ2h0VGFuKSAqIHhTY2FsZSAqIDAuNSk7XG4gICAgb3V0WzldID0gKCh1cFRhbiAtIGRvd25UYW4pICogeVNjYWxlICogMC41KTtcbiAgICBvdXRbMTBdID0gZmFyIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxMV0gPSAtMS4wO1xuICAgIG91dFsxMl0gPSAwLjA7XG4gICAgb3V0WzEzXSA9IDAuMDtcbiAgICBvdXRbMTRdID0gKGZhciAqIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFsxNV0gPSAwLjA7XG4gICAgcmV0dXJuIG91dDtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGU7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICAgIHZhciB4ID0gYXhpc1swXSwgeSA9IGF4aXNbMV0sIHogPSBheGlzWzJdLFxuICAgICAgICBsZW4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KSxcbiAgICAgICAgcywgYywgdCxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMyxcbiAgICAgICAgYjAwLCBiMDEsIGIwMixcbiAgICAgICAgYjEwLCBiMTEsIGIxMixcbiAgICAgICAgYjIwLCBiMjEsIGIyMjtcblxuICAgIGlmIChNYXRoLmFicyhsZW4pIDwgMC4wMDAwMDEpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHggKj0gbGVuO1xuICAgIHkgKj0gbGVuO1xuICAgIHogKj0gbGVuO1xuXG4gICAgcyA9IE1hdGguc2luKHJhZCk7XG4gICAgYyA9IE1hdGguY29zKHJhZCk7XG4gICAgdCA9IDEgLSBjO1xuXG4gICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgZWxlbWVudHMgb2YgdGhlIHJvdGF0aW9uIG1hdHJpeFxuICAgIGIwMCA9IHggKiB4ICogdCArIGM7IGIwMSA9IHkgKiB4ICogdCArIHogKiBzOyBiMDIgPSB6ICogeCAqIHQgLSB5ICogcztcbiAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogczsgYjExID0geSAqIHkgKiB0ICsgYzsgYjEyID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7IGIyMSA9IHkgKiB6ICogdCAtIHggKiBzOyBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gICAgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICAgIG91dFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICBvdXRbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDI7XG4gICAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgIG91dFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICBvdXRbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTI7XG4gICAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICAgIG91dFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMjtcbiAgICBvdXRbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICBvdXRbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCBsYXN0IHJvd1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMTAgPSBhWzRdLFxuICAgICAgICBhMTEgPSBhWzVdLFxuICAgICAgICBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzBdICA9IGFbMF07XG4gICAgICAgIG91dFsxXSAgPSBhWzFdO1xuICAgICAgICBvdXRbMl0gID0gYVsyXTtcbiAgICAgICAgb3V0WzNdICA9IGFbM107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzRdID0gYTEwICogYyArIGEyMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyArIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gICAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gICAgb3V0WzEwXSA9IGEyMiAqIGMgLSBhMTIgKiBzO1xuICAgIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVk7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTIwID0gYVs4XSxcbiAgICAgICAgYTIxID0gYVs5XSxcbiAgICAgICAgYTIyID0gYVsxMF0sXG4gICAgICAgIGEyMyA9IGFbMTFdO1xuXG4gICAgaWYgKGEgIT09IG91dCkgeyAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgICAgIG91dFs0XSAgPSBhWzRdO1xuICAgICAgICBvdXRbNV0gID0gYVs1XTtcbiAgICAgICAgb3V0WzZdICA9IGFbNl07XG4gICAgICAgIG91dFs3XSAgPSBhWzddO1xuICAgICAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICAgIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICAgIG91dFsyXSA9IGEwMiAqIGMgLSBhMjIgKiBzO1xuICAgIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICAgIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICAgIG91dFs5XSA9IGEwMSAqIHMgKyBhMjEgKiBjO1xuICAgIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVaO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGEwMCA9IGFbMF0sXG4gICAgICAgIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFs4XSAgPSBhWzhdO1xuICAgICAgICBvdXRbOV0gID0gYVs5XTtcbiAgICAgICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgICAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyArIGExMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyArIGExMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyArIGExMyAqIHM7XG4gICAgb3V0WzRdID0gYTEwICogYyAtIGEwMCAqIHM7XG4gICAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gICAgb3V0WzZdID0gYTEyICogYyAtIGEwMiAqIHM7XG4gICAgb3V0WzddID0gYTEzICogYyAtIGEwMyAqIHM7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZTtcblxuLyoqXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKiovXG5mdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXTtcblxuICAgIG91dFswXSA9IGFbMF0gKiB4O1xuICAgIG91dFsxXSA9IGFbMV0gKiB4O1xuICAgIG91dFsyXSA9IGFbMl0gKiB4O1xuICAgIG91dFszXSA9IGFbM10gKiB4O1xuICAgIG91dFs0XSA9IGFbNF0gKiB5O1xuICAgIG91dFs1XSA9IGFbNV0gKiB5O1xuICAgIG91dFs2XSA9IGFbNl0gKiB5O1xuICAgIG91dFs3XSA9IGFbN10gKiB5O1xuICAgIG91dFs4XSA9IGFbOF0gKiB6O1xuICAgIG91dFs5XSA9IGFbOV0gKiB6O1xuICAgIG91dFsxMF0gPSBhWzEwXSAqIHo7XG4gICAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBzdHI7XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzdHIoYSkge1xuICAgIHJldHVybiAnbWF0NCgnICsgYVswXSArICcsICcgKyBhWzFdICsgJywgJyArIGFbMl0gKyAnLCAnICsgYVszXSArICcsICcgK1xuICAgICAgICAgICAgICAgICAgICBhWzRdICsgJywgJyArIGFbNV0gKyAnLCAnICsgYVs2XSArICcsICcgKyBhWzddICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbOF0gKyAnLCAnICsgYVs5XSArICcsICcgKyBhWzEwXSArICcsICcgKyBhWzExXSArICcsICcgKyBcbiAgICAgICAgICAgICAgICAgICAgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc3Bvc2U7XG5cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gICAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICAgIGlmIChvdXQgPT09IGEpIHtcbiAgICAgICAgdmFyIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgICAgICBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGEwMTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGEwMjtcbiAgICAgICAgb3V0WzldID0gYTEyO1xuICAgICAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgICAgIG91dFsxMl0gPSBhMDM7XG4gICAgICAgIG91dFsxM10gPSBhMTM7XG4gICAgICAgIG91dFsxNF0gPSBhMjM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0WzBdID0gYVswXTtcbiAgICAgICAgb3V0WzFdID0gYVs0XTtcbiAgICAgICAgb3V0WzJdID0gYVs4XTtcbiAgICAgICAgb3V0WzNdID0gYVsxMl07XG4gICAgICAgIG91dFs0XSA9IGFbMV07XG4gICAgICAgIG91dFs1XSA9IGFbNV07XG4gICAgICAgIG91dFs2XSA9IGFbOV07XG4gICAgICAgIG91dFs3XSA9IGFbMTNdO1xuICAgICAgICBvdXRbOF0gPSBhWzJdO1xuICAgICAgICBvdXRbOV0gPSBhWzZdO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGFbM107XG4gICAgICAgIG91dFsxM10gPSBhWzddO1xuICAgICAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBhZGQ7XG5cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gICAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgICBvdXRbMV0gPSBhWzFdICsgYlsxXVxuICAgIG91dFsyXSA9IGFbMl0gKyBiWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gYW5nbGVcblxudmFyIGZyb21WYWx1ZXMgPSByZXF1aXJlKCcuL2Zyb21WYWx1ZXMnKVxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbnZhciBkb3QgPSByZXF1aXJlKCcuL2RvdCcpXG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgICB2YXIgdGVtcEEgPSBmcm9tVmFsdWVzKGFbMF0sIGFbMV0sIGFbMl0pXG4gICAgdmFyIHRlbXBCID0gZnJvbVZhbHVlcyhiWzBdLCBiWzFdLCBiWzJdKVxuIFxuICAgIG5vcm1hbGl6ZSh0ZW1wQSwgdGVtcEEpXG4gICAgbm9ybWFsaXplKHRlbXBCLCB0ZW1wQilcbiBcbiAgICB2YXIgY29zaW5lID0gZG90KHRlbXBBLCB0ZW1wQilcblxuICAgIGlmKGNvc2luZSA+IDEuMCl7XG4gICAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpXG4gICAgfSAgICAgXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY2xvbmUoYSkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDMpXG4gICAgb3V0WzBdID0gYVswXVxuICAgIG91dFsxXSA9IGFbMV1cbiAgICBvdXRbMl0gPSBhWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gY29weTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICAgIG91dFswXSA9IGFbMF1cbiAgICBvdXRbMV0gPSBhWzFdXG4gICAgb3V0WzJdID0gYVsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXG4gKlxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSAwXG4gICAgb3V0WzFdID0gMFxuICAgIG91dFsyXSA9IDBcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjcm9zcztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgICB2YXIgYXggPSBhWzBdLCBheSA9IGFbMV0sIGF6ID0gYVsyXSxcbiAgICAgICAgYnggPSBiWzBdLCBieSA9IGJbMV0sIGJ6ID0gYlsyXVxuXG4gICAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnlcbiAgICBvdXRbMV0gPSBheiAqIGJ4IC0gYXggKiBielxuICAgIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4XG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gZGlzdGFuY2U7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgICB5ID0gYlsxXSAtIGFbMV0sXG4gICAgICAgIHogPSBiWzJdIC0gYVsyXVxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KVxufSIsIm1vZHVsZS5leHBvcnRzID0gZGl2aWRlO1xuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gLyBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAvIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdIC8gYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGRvdDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXVxufSIsIm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcblxudmFyIHZlYyA9IHJlcXVpcmUoJy4vY3JlYXRlJykoKVxuXG4vKipcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNraXAgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjM3MgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnXSBhZGRpdGlvbmFsIGFyZ3VtZW50IHRvIHBhc3MgdG8gZm5cbiAqIEByZXR1cm5zIHtBcnJheX0gYVxuICogQGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goYSwgc3RyaWRlLCBvZmZzZXQsIGNvdW50LCBmbiwgYXJnKSB7XG4gICAgICAgIHZhciBpLCBsXG4gICAgICAgIGlmKCFzdHJpZGUpIHtcbiAgICAgICAgICAgIHN0cmlkZSA9IDNcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY291bnQpIHtcbiAgICAgICAgICAgIGwgPSBNYXRoLm1pbigoY291bnQgKiBzdHJpZGUpICsgb2Zmc2V0LCBhLmxlbmd0aClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGwgPSBhLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgICAgICAgdmVjWzBdID0gYVtpXSBcbiAgICAgICAgICAgIHZlY1sxXSA9IGFbaSsxXSBcbiAgICAgICAgICAgIHZlY1syXSA9IGFbaSsyXVxuICAgICAgICAgICAgZm4odmVjLCB2ZWMsIGFyZylcbiAgICAgICAgICAgIGFbaV0gPSB2ZWNbMF0gXG4gICAgICAgICAgICBhW2krMV0gPSB2ZWNbMV0gXG4gICAgICAgICAgICBhW2krMl0gPSB2ZWNbMl1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21WYWx1ZXM7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gZnJvbVZhbHVlcyh4LCB5LCB6KSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMylcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBhbmdsZTogcmVxdWlyZSgnLi9hbmdsZScpXG4gICwgZnJvbVZhbHVlczogcmVxdWlyZSgnLi9mcm9tVmFsdWVzJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIHNldDogcmVxdWlyZSgnLi9zZXQnKVxuICAsIGFkZDogcmVxdWlyZSgnLi9hZGQnKVxuICAsIHN1YnRyYWN0OiByZXF1aXJlKCcuL3N1YnRyYWN0JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgZGl2aWRlOiByZXF1aXJlKCcuL2RpdmlkZScpXG4gICwgbWluOiByZXF1aXJlKCcuL21pbicpXG4gICwgbWF4OiByZXF1aXJlKCcuL21heCcpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHNjYWxlQW5kQWRkOiByZXF1aXJlKCcuL3NjYWxlQW5kQWRkJylcbiAgLCBkaXN0YW5jZTogcmVxdWlyZSgnLi9kaXN0YW5jZScpXG4gICwgc3F1YXJlZERpc3RhbmNlOiByZXF1aXJlKCcuL3NxdWFyZWREaXN0YW5jZScpXG4gICwgbGVuZ3RoOiByZXF1aXJlKCcuL2xlbmd0aCcpXG4gICwgc3F1YXJlZExlbmd0aDogcmVxdWlyZSgnLi9zcXVhcmVkTGVuZ3RoJylcbiAgLCBuZWdhdGU6IHJlcXVpcmUoJy4vbmVnYXRlJylcbiAgLCBpbnZlcnNlOiByZXF1aXJlKCcuL2ludmVyc2UnKVxuICAsIG5vcm1hbGl6ZTogcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxuICAsIGRvdDogcmVxdWlyZSgnLi9kb3QnKVxuICAsIGNyb3NzOiByZXF1aXJlKCcuL2Nyb3NzJylcbiAgLCBsZXJwOiByZXF1aXJlKCcuL2xlcnAnKVxuICAsIHJhbmRvbTogcmVxdWlyZSgnLi9yYW5kb20nKVxuICAsIHRyYW5zZm9ybU1hdDQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtTWF0NCcpXG4gICwgdHJhbnNmb3JtTWF0MzogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQzJylcbiAgLCB0cmFuc2Zvcm1RdWF0OiByZXF1aXJlKCcuL3RyYW5zZm9ybVF1YXQnKVxuICAsIHJvdGF0ZVg6IHJlcXVpcmUoJy4vcm90YXRlWCcpXG4gICwgcm90YXRlWTogcmVxdWlyZSgnLi9yb3RhdGVZJylcbiAgLCByb3RhdGVaOiByZXF1aXJlKCcuL3JvdGF0ZVonKVxuICAsIGZvckVhY2g6IHJlcXVpcmUoJy4vZm9yRWFjaCcpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBpbnZlcnNlO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF1cbiAgb3V0WzFdID0gMS4wIC8gYVsxXVxuICBvdXRbMl0gPSAxLjAgLyBhWzJdXG4gIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBsZW5ndGgoYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXG59IiwibW9kdWxlLmV4cG9ydHMgPSBsZXJwO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICAgIHZhciBheCA9IGFbMF0sXG4gICAgICAgIGF5ID0gYVsxXSxcbiAgICAgICAgYXogPSBhWzJdXG4gICAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheClcbiAgICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KVxuICAgIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbWF4O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbWF4KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pXG4gICAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSlcbiAgICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG1pbjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKVxuICAgIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pXG4gICAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSlcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBtdWx0aXBseTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiWzBdXG4gICAgb3V0WzFdID0gYVsxXSAqIGJbMV1cbiAgICBvdXRbMl0gPSBhWzJdICogYlsyXVxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IG5lZ2F0ZTtcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gICAgb3V0WzBdID0gLWFbMF1cbiAgICBvdXRbMV0gPSAtYVsxXVxuICAgIG91dFsyXSA9IC1hWzJdXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICAgIHZhciB4ID0gYVswXSxcbiAgICAgICAgeSA9IGFbMV0sXG4gICAgICAgIHogPSBhWzJdXG4gICAgdmFyIGxlbiA9IHgqeCArIHkqeSArIHoqelxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgICAgICBvdXRbMF0gPSBhWzBdICogbGVuXG4gICAgICAgIG91dFsxXSA9IGFbMV0gKiBsZW5cbiAgICAgICAgb3V0WzJdID0gYVsyXSAqIGxlblxuICAgIH1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSByYW5kb207XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgICBzY2FsZSA9IHNjYWxlIHx8IDEuMFxuXG4gICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMi4wICogTWF0aC5QSVxuICAgIHZhciB6ID0gKE1hdGgucmFuZG9tKCkgKiAyLjApIC0gMS4wXG4gICAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAteip6KSAqIHNjYWxlXG5cbiAgICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHpTY2FsZVxuICAgIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlXG4gICAgb3V0WzJdID0geiAqIHNjYWxlXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWDtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG5cbiAgICAvL3BlcmZvcm0gcm90YXRpb25cbiAgICByWzBdID0gcFswXVxuICAgIHJbMV0gPSBwWzFdKk1hdGguY29zKGMpIC0gcFsyXSpNYXRoLnNpbihjKVxuICAgIHJbMl0gPSBwWzFdKk1hdGguc2luKGMpICsgcFsyXSpNYXRoLmNvcyhjKVxuXG4gICAgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgIG91dFswXSA9IHJbMF0gKyBiWzBdXG4gICAgb3V0WzFdID0gclsxXSArIGJbMV1cbiAgICBvdXRbMl0gPSByWzJdICsgYlsyXVxuXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWTtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG4gIFxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzJdKk1hdGguc2luKGMpICsgcFswXSpNYXRoLmNvcyhjKVxuICAgIHJbMV0gPSBwWzFdXG4gICAgclsyXSA9IHBbMl0qTWF0aC5jb3MoYykgLSBwWzBdKk1hdGguc2luKGMpXG4gIFxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cbiAgXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWjtcblxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYyBUaGUgYW5nbGUgb2Ygcm90YXRpb25cbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIGMpe1xuICAgIHZhciBwID0gW10sIHI9W11cbiAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgcFswXSA9IGFbMF0gLSBiWzBdXG4gICAgcFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgcFsyXSA9IGFbMl0gLSBiWzJdXG4gIFxuICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgIHJbMF0gPSBwWzBdKk1hdGguY29zKGMpIC0gcFsxXSpNYXRoLnNpbihjKVxuICAgIHJbMV0gPSBwWzBdKk1hdGguc2luKGMpICsgcFsxXSpNYXRoLmNvcyhjKVxuICAgIHJbMl0gPSBwWzJdXG4gIFxuICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICBvdXRbMF0gPSByWzBdICsgYlswXVxuICAgIG91dFsxXSA9IHJbMV0gKyBiWzFdXG4gICAgb3V0WzJdID0gclsyXSArIGJbMl1cbiAgXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICAgIG91dFswXSA9IGFbMF0gKiBiXG4gICAgb3V0WzFdID0gYVsxXSAqIGJcbiAgICBvdXRbMl0gPSBhWzJdICogYlxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlQW5kQWRkO1xuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gICAgb3V0WzBdID0gYVswXSArIChiWzBdICogc2NhbGUpXG4gICAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gICAgb3V0WzJdID0gYVsyXSArIChiWzJdICogc2NhbGUpXG4gICAgcmV0dXJuIG91dFxufSIsIm1vZHVsZS5leHBvcnRzID0gc2V0O1xuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBzcXVhcmVkRGlzdGFuY2U7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICAgIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICAgICAgeiA9IGJbMl0gLSBhWzJdXG4gICAgcmV0dXJuIHgqeCArIHkqeSArIHoqelxufSIsIm1vZHVsZS5leHBvcnRzID0gc3F1YXJlZExlbmd0aDtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgICB2YXIgeCA9IGFbMF0sXG4gICAgICAgIHkgPSBhWzFdLFxuICAgICAgICB6ID0gYVsyXVxuICAgIHJldHVybiB4KnggKyB5KnkgKyB6Knpcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRyYWN0O1xuXG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiBzdWJ0cmFjdChvdXQsIGEsIGIpIHtcbiAgICBvdXRbMF0gPSBhWzBdIC0gYlswXVxuICAgIG91dFsxXSA9IGFbMV0gLSBiWzFdXG4gICAgb3V0WzJdID0gYVsyXSAtIGJbMl1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQzO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDMuXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHttYXQ0fSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCB5ID0gYVsxXSwgeiA9IGFbMl1cbiAgICBvdXRbMF0gPSB4ICogbVswXSArIHkgKiBtWzNdICsgeiAqIG1bNl1cbiAgICBvdXRbMV0gPSB4ICogbVsxXSArIHkgKiBtWzRdICsgeiAqIG1bN11cbiAgICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF1cbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1NYXQ0O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDQuXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICAgICAgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XVxuICAgIHcgPSB3IHx8IDEuMFxuICAgIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSkgLyB3XG4gICAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHdcbiAgICBvdXRbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHdcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm1RdWF0O1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KG91dCwgYSwgcSkge1xuICAgIC8vIGJlbmNobWFya3M6IGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tdHJhbnNmb3JtLXZlYzMtaW1wbGVtZW50YXRpb25zXG5cbiAgICB2YXIgeCA9IGFbMF0sIHkgPSBhWzFdLCB6ID0gYVsyXSxcbiAgICAgICAgcXggPSBxWzBdLCBxeSA9IHFbMV0sIHF6ID0gcVsyXSwgcXcgPSBxWzNdLFxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG4gICAgICAgIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5LFxuICAgICAgICBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogeixcbiAgICAgICAgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHgsXG4gICAgICAgIGl3ID0gLXF4ICogeCAtIHF5ICogeSAtIHF6ICogelxuXG4gICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgIG91dFswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXlcbiAgICBvdXRbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6XG4gICAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeFxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGFkZFxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gYWRkIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF1cbiAgb3V0WzFdID0gYVsxXSArIGJbMV1cbiAgb3V0WzJdID0gYVsyXSArIGJbMl1cbiAgb3V0WzNdID0gYVszXSArIGJbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbG9uZVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuZnVuY3Rpb24gY2xvbmUgKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoNClcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHlcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgc291cmNlIHZlY3RvclxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBjb3B5IChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXVxuICBvdXRbMV0gPSBhWzFdXG4gIG91dFsyXSA9IGFbMl1cbiAgb3V0WzNdID0gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcbiAqXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSAoKSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IDBcbiAgb3V0WzFdID0gMFxuICBvdXRbMl0gPSAwXG4gIG91dFszXSA9IDBcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5mdW5jdGlvbiBkaXN0YW5jZSAoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgIHkgPSBiWzFdIC0gYVsxXSxcbiAgICB6ID0gYlsyXSAtIGFbMl0sXG4gICAgdyA9IGJbM10gLSBhWzNdXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGRpdmlkZVxuXG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZGl2aWRlIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF1cbiAgb3V0WzFdID0gYVsxXSAvIGJbMV1cbiAgb3V0WzJdID0gYVsyXSAvIGJbMl1cbiAgb3V0WzNdID0gYVszXSAvIGJbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBkb3RcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cbmZ1bmN0aW9uIGRvdCAoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdICsgYVszXSAqIGJbM11cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVZhbHVlc1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5mdW5jdGlvbiBmcm9tVmFsdWVzICh4LCB5LCB6LCB3KSB7XG4gIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDQpXG4gIG91dFswXSA9IHhcbiAgb3V0WzFdID0geVxuICBvdXRbMl0gPSB6XG4gIG91dFszXSA9IHdcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKSxcbiAgY2xvbmU6IHJlcXVpcmUoJy4vY2xvbmUnKSxcbiAgZnJvbVZhbHVlczogcmVxdWlyZSgnLi9mcm9tVmFsdWVzJyksXG4gIGNvcHk6IHJlcXVpcmUoJy4vY29weScpLFxuICBzZXQ6IHJlcXVpcmUoJy4vc2V0JyksXG4gIGFkZDogcmVxdWlyZSgnLi9hZGQnKSxcbiAgc3VidHJhY3Q6IHJlcXVpcmUoJy4vc3VidHJhY3QnKSxcbiAgbXVsdGlwbHk6IHJlcXVpcmUoJy4vbXVsdGlwbHknKSxcbiAgZGl2aWRlOiByZXF1aXJlKCcuL2RpdmlkZScpLFxuICBtaW46IHJlcXVpcmUoJy4vbWluJyksXG4gIG1heDogcmVxdWlyZSgnLi9tYXgnKSxcbiAgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKSxcbiAgc2NhbGVBbmRBZGQ6IHJlcXVpcmUoJy4vc2NhbGVBbmRBZGQnKSxcbiAgZGlzdGFuY2U6IHJlcXVpcmUoJy4vZGlzdGFuY2UnKSxcbiAgc3F1YXJlZERpc3RhbmNlOiByZXF1aXJlKCcuL3NxdWFyZWREaXN0YW5jZScpLFxuICBsZW5ndGg6IHJlcXVpcmUoJy4vbGVuZ3RoJyksXG4gIHNxdWFyZWRMZW5ndGg6IHJlcXVpcmUoJy4vc3F1YXJlZExlbmd0aCcpLFxuICBuZWdhdGU6IHJlcXVpcmUoJy4vbmVnYXRlJyksXG4gIGludmVyc2U6IHJlcXVpcmUoJy4vaW52ZXJzZScpLFxuICBub3JtYWxpemU6IHJlcXVpcmUoJy4vbm9ybWFsaXplJyksXG4gIGRvdDogcmVxdWlyZSgnLi9kb3QnKSxcbiAgbGVycDogcmVxdWlyZSgnLi9sZXJwJyksXG4gIHJhbmRvbTogcmVxdWlyZSgnLi9yYW5kb20nKSxcbiAgdHJhbnNmb3JtTWF0NDogcmVxdWlyZSgnLi90cmFuc2Zvcm1NYXQ0JyksXG4gIHRyYW5zZm9ybVF1YXQ6IHJlcXVpcmUoJy4vdHJhbnNmb3JtUXVhdCcpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVyc2VcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBpbnZlcnNlIChvdXQsIGEpIHtcbiAgb3V0WzBdID0gMS4wIC8gYVswXVxuICBvdXRbMV0gPSAxLjAgLyBhWzFdXG4gIG91dFsyXSA9IDEuMCAvIGFbMl1cbiAgb3V0WzNdID0gMS4wIC8gYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxlbmd0aFxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aCAoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgeSA9IGFbMV0sXG4gICAgeiA9IGFbMl0sXG4gICAgdyA9IGFbM11cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbGVycFxuXG4vKipcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjNCdzXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBsZXJwIChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICBheSA9IGFbMV0sXG4gICAgYXogPSBhWzJdLFxuICAgIGF3ID0gYVszXVxuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KVxuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KVxuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KVxuICBvdXRbM10gPSBhdyArIHQgKiAoYlszXSAtIGF3KVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1heFxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbWF4IChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSlcbiAgb3V0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSlcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSlcbiAgb3V0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtaW5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG1pbiAob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pXG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pXG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pXG4gIG91dFszXSA9IE1hdGgubWluKGFbM10sIGJbM10pXG4gIHJldHVybiBvdXRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHlcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge3ZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG11bHRpcGx5IChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF1cbiAgb3V0WzFdID0gYVsxXSAqIGJbMV1cbiAgb3V0WzJdID0gYVsyXSAqIGJbMl1cbiAgb3V0WzNdID0gYVszXSAqIGJbM11cbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBuZWdhdGVcblxuLyoqXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBuZWdhdGUgKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXVxuICBvdXRbMV0gPSAtYVsxXVxuICBvdXRbMl0gPSAtYVsyXVxuICBvdXRbM10gPSAtYVszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplIChvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgIHkgPSBhWzFdLFxuICAgIHogPSBhWzJdLFxuICAgIHcgPSBhWzNdXG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogd1xuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKVxuICAgIG91dFswXSA9IHggKiBsZW5cbiAgICBvdXRbMV0gPSB5ICogbGVuXG4gICAgb3V0WzJdID0geiAqIGxlblxuICAgIG91dFszXSA9IHcgKiBsZW5cbiAgfVxuICByZXR1cm4gb3V0XG59XG4iLCJ2YXIgdmVjTm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKVxudmFyIHZlY1NjYWxlID0gcmVxdWlyZSgnLi9zY2FsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gcmFuZG9tXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcmFuZG9tIChvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wXG5cbiAgLy8gVE9ETzogVGhpcyBpcyBhIHByZXR0eSBhd2Z1bCB3YXkgb2YgZG9pbmcgdGhpcy4gRmluZCBzb21ldGhpbmcgYmV0dGVyLlxuICBvdXRbMF0gPSBNYXRoLnJhbmRvbSgpXG4gIG91dFsxXSA9IE1hdGgucmFuZG9tKClcbiAgb3V0WzJdID0gTWF0aC5yYW5kb20oKVxuICBvdXRbM10gPSBNYXRoLnJhbmRvbSgpXG4gIHZlY05vcm1hbGl6ZShvdXQsIG91dClcbiAgdmVjU2NhbGUob3V0LCBvdXQsIHNjYWxlKVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlXG5cbi8qKlxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHNjYWxlIChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJcbiAgb3V0WzFdID0gYVsxXSAqIGJcbiAgb3V0WzJdID0gYVsyXSAqIGJcbiAgb3V0WzNdID0gYVszXSAqIGJcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzY2FsZUFuZEFkZFxuXG4vKipcbiAqIEFkZHMgdHdvIHZlYzQncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5mdW5jdGlvbiBzY2FsZUFuZEFkZCAob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgKGJbMF0gKiBzY2FsZSlcbiAgb3V0WzFdID0gYVsxXSArIChiWzFdICogc2NhbGUpXG4gIG91dFsyXSA9IGFbMl0gKyAoYlsyXSAqIHNjYWxlKVxuICBvdXRbM10gPSBhWzNdICsgKGJbM10gKiBzY2FsZSlcbiAgcmV0dXJuIG91dFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzZXRcblxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc2V0IChvdXQsIHgsIHksIHosIHcpIHtcbiAgb3V0WzBdID0geFxuICBvdXRbMV0gPSB5XG4gIG91dFsyXSA9IHpcbiAgb3V0WzNdID0gd1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWREaXN0YW5jZVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlIChhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgeSA9IGJbMV0gLSBhWzFdLFxuICAgIHogPSBiWzJdIC0gYVsyXSxcbiAgICB3ID0gYlszXSAtIGFbM11cbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNxdWFyZWRMZW5ndGhcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5mdW5jdGlvbiBzcXVhcmVkTGVuZ3RoIChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICB5ID0gYVsxXSxcbiAgICB6ID0gYVsyXSxcbiAgICB3ID0gYVszXVxuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc3VidHJhY3RcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gc3VidHJhY3QgKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXVxuICBvdXRbMV0gPSBhWzFdIC0gYlsxXVxuICBvdXRbMl0gPSBhWzJdIC0gYlsyXVxuICBvdXRbM10gPSBhWzNdIC0gYlszXVxuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybU1hdDRcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NCAob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLCB3ID0gYVszXVxuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHdcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10gKiB3XG4gIG91dFsyXSA9IG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSAqIHdcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogd1xuICByZXR1cm4gb3V0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybVF1YXRcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtUXVhdCAob3V0LCBhLCBxKSB7XG4gIHZhciB4ID0gYVswXSwgeSA9IGFbMV0sIHogPSBhWzJdLFxuICAgIHF4ID0gcVswXSwgcXkgPSBxWzFdLCBxeiA9IHFbMl0sIHF3ID0gcVszXSxcblxuICAgIC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjXG4gICAgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHksXG4gICAgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHosXG4gICAgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHgsXG4gICAgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6XG5cbiAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICBvdXRbMF0gPSBpeCAqIHF3ICsgaXcgKiAtcXggKyBpeSAqIC1xeiAtIGl6ICogLXF5XG4gIG91dFsxXSA9IGl5ICogcXcgKyBpdyAqIC1xeSArIGl6ICogLXF4IC0gaXggKiAtcXpcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeFxuICBvdXRbM10gPSBhWzNdXG4gIHJldHVybiBvdXRcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGhVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9wYXRoJyksXG4gIGFycmF5VXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXJyYXknKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSBhcnJheTIubGVuZ3RoLCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlyc3Q6IGZpcnN0LFxuICBzZWNvbmQ6IHNlY29uZCxcbiAgdGhpcmQ6IHRoaXJkLFxuICBmb3VydGg6IGZvdXJ0aCxcbiAgZmlmdGg6IGZpZnRoLFxuICBmaWZ0aExhc3Q6IGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdDogZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0OiB0aGlyZExhc3QsXG4gIHNlY29uZExhc3Q6IHNlY29uZExhc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIHRhaWw6IHRhaWwsXG4gIHB1c2g6IHB1c2gsXG4gIHVuc2hpZnQ6IHVuc2hpZnQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2ssIGluZGV4KSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2hpbHN0OiB3aGlsc3QsXHJcbiAgZm9yRWFjaDogZm9yRWFjaCxcclxuICBzZXF1ZW5jZTogc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseTogZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5OiByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmZ1bmN0aW9uIGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCkge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBmaWxlRXhpc3RzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeUV4aXN0czogZW50cnlFeGlzdHMsXG4gIGZpbGVFeGlzdHM6IGZpbGVFeGlzdHMsXG4gIGlzRW50cnlGaWxlOiBpc0VudHJ5RmlsZSxcbiAgZGlyZWN0b3J5RXhpc3RzOiBkaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSA9IGFycmF5O1xuXG5mdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eXFwuezEsMn1cXC8vKSxcbiAgICAgICAgcGF0aFJlbGF0aXZlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gIXBhdGhSZWxhdGl2ZVBhdGg7IC8vL1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcGF0aCkge1xuICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7IC8vL1xuXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3REaXJlY3RvcnlOYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgcG9zaXRpb24gPSBwYXRoLnNlYXJjaChyZWdFeHApLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUGF0aHMoZGlyZWN0b3J5UGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBhYnNvbHV0ZVBhdGggPSBudWxsO1xuXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzID0gZGlyZWN0b3J5UGF0aC5zcGxpdCgnLycpLFxuICAgICAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgnLycpO1xuXG4gIGxldCBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyksXG4gICAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLicpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID09PSAnLi4nKSAmJiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5zaGlmdCgpO1xuICAgIGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gW10uY29uY2F0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKS5jb25jYXQocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpO1xuXG4gICAgYWJzb2x1dGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuam9pbignLycpO1xuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoMSwgcGF0aDIpIHtcbiAgcGF0aDEgPSBwYXRoMS5yZXBsYWNlKC9cXC8kLywgJycpOyAgLy8vXG5cbiAgY29uc3QgY29tYmluZWRQYXRoID0gYCR7cGF0aDF9LyR7cGF0aDJ9YDtcblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4rXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBkaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBkaXJlY3RvcnlQYXRoO1xufVxuXG5mdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKylcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhSZWxhdGl2ZVBhdGg6IGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoOiBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lOiBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSxcbiAgaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aDogaXNUb3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluUGF0aCxcbiAgY29tYmluZVBhdGhzOiBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHM6IGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiJdfQ==
