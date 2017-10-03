(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    value: function render(shader, offset, rotation, position, perspective, normal) {
      var offsetMatrix = offset.getMatrix(),
          rotationMatrix = rotation.getMatrix(),
          positionMatrix = position.getMatrix(),
          perspectiveMatrix = perspective.getMatrix(),
          normalMatrix = normal.getMatrix(),
          offsetMatrixUniformLocation = shader.getOffsetMatrixUniformLocation(),
          rotationMatrixUniformLocation = shader.getRotationMatrixUniformLocation(),
          positionMatrixUniformLocation = shader.getPositionMatrixUniformLocation(),
          perspectiveMatrixUniformLocation = shader.getPerspectiveMatrixUniformLocation(),
          normalMatrixUniformLocation = shader.getNormalMatrixUniformLocation();

      this.applyMatrix(offsetMatrixUniformLocation, offsetMatrix);
      this.applyMatrix(rotationMatrixUniformLocation, rotationMatrix);
      this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
      this.applyMatrix(perspectiveMatrixUniformLocation, perspectiveMatrix);
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

},{"./mixin/buffer":29,"./mixin/colour":30,"./mixin/depth":31,"./mixin/matrix":32,"./mixin/mouse":33,"./mixin/shader":34,"./mixin/texture":35,"./utilities/dom":53}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element() {
  _classCallCheck(this, Element);
};

module.exports = Element;

},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
  shapes: require('./examples/shapes'),
  containerHouse: require('./examples/containerHouse')
};

},{"./examples/containerHouse":10,"./examples/shapes":27}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../vec3'),
    Element = require('../../element'),
    arrayUtilities = require('../../utilities/array');

var vertexPositionData = [0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0],
    vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];

var divide = arrayUtilities.divide,
    flatten = arrayUtilities.flatten;

var Cuboid = function (_Element) {
  _inherits(Cuboid, _Element);

  function Cuboid(vertexPositionData, vertexNormalData, vertexIndexData) {
    _classCallCheck(this, Cuboid);

    var _this = _possibleConstructorReturn(this, (Cuboid.__proto__ || Object.getPrototypeOf(Cuboid)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    return _this;
  }

  _createClass(Cuboid, [{
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var width = properties.width,
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          vertexPositionData = vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData], remainingArguments)))();
    }
  }]);

  return Cuboid;
}(Element);

module.exports = Cuboid;

function vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset) {
  var vertexPositions = divide(vertexPositionData, 3); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    vertexPosition = vec3.multiply(vertexPosition, [width, depth, height]);
    vertexPosition = vec3.add(vertexPosition, offset);

    return vertexPosition;
  });

  return flatten(vertexPositions);
}

},{"../../element":3,"../../utilities/array":52,"../../vec3":56}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cuboid = require('../cuboid');

var ColourCuboid = function (_Cuboid) {
  _inherits(ColourCuboid, _Cuboid);

  function ColourCuboid(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourCuboid);

    var _this = _possibleConstructorReturn(this, (ColourCuboid.__proto__ || Object.getPrototypeOf(ColourCuboid)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourCuboid, [{
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
    value: function fromProperties(properties) {
      var colour = properties.colour,
          vertexColourData = vertexColourDataFromColour(colour),
          colourCuboid = Cuboid.fromProperties(ColourCuboid, properties, vertexColourData);


      return colourCuboid;
    }
  }]);

  return ColourCuboid;
}(Cuboid);

module.exports = ColourCuboid;

function vertexColourDataFromColour(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}

},{"../cuboid":5}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cuboid = require('../cuboid'),
    imageMapUtilities = require('../../../utilities/imageMap');

var textureCoordinateDataFromImageName = imageMapUtilities.textureCoordinateDataFromImageName;

var TextureCuboid = function (_Cuboid) {
  _inherits(TextureCuboid, _Cuboid);

  function TextureCuboid(vertexPositionData, vertexNormalData, vertexIndexData, textureCoordinateData) {
    _classCallCheck(this, TextureCuboid);

    var _this = _possibleConstructorReturn(this, (TextureCuboid.__proto__ || Object.getPrototypeOf(TextureCuboid)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.textureCoordinateData = textureCoordinateData;
    return _this;
  }

  _createClass(TextureCuboid, [{
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
    value: function fromProperties(properties) {
      var imageName = properties.imageName,
          textureCoordinateData = textureCoordinateDataFromImageName(imageName),
          textureCuboid = Cuboid.fromProperties(TextureCuboid, properties, textureCoordinateData);


      return textureCuboid;
    }
  }]);

  return TextureCuboid;
}(Cuboid);

module.exports = TextureCuboid;

},{"../../../utilities/imageMap":55,"../cuboid":5}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../vec3'),
    Element = require('../../element'),
    arrayUtilities = require('../../utilities/array');

var vertexPositionData = [0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0],
    vertexNormalData = [0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, +1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0],
    vertexIndexData = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];

var divide = arrayUtilities.divide,
    flatten = arrayUtilities.flatten;

var Cylinder = function (_Element) {
  _inherits(Cylinder, _Element);

  function Cylinder(vertexPositionData, vertexNormalData, vertexIndexData) {
    _classCallCheck(this, Cylinder);

    var _this = _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).call(this));

    _this.vertexPositionData = vertexPositionData;
    _this.vertexNormalData = vertexNormalData;
    _this.vertexIndexData = vertexIndexData;
    return _this;
  }

  _createClass(Cylinder, [{
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var width = properties.width,
          depth = properties.depth,
          height = properties.height,
          offset = properties.offset,
          vertexPositionData = vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionData, vertexNormalData, vertexIndexData], remainingArguments)))();
    }
  }]);

  return Cylinder;
}(Element);

module.exports = Cylinder;

function vertexPositionDataFromHeightWidthDepthAndOffset(width, depth, height, offset) {
  var vertexPositions = divide(vertexPositionData, 3); ///

  vertexPositions = vertexPositions.map(function (vertexPosition) {
    vertexPosition = vec3.multiply(vertexPosition, [width, depth, height]);
    vertexPosition = vec3.add(vertexPosition, offset);

    return vertexPosition;
  });

  return flatten(vertexPositions);
}

},{"../../element":3,"../../utilities/array":52,"../../vec3":56}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cylinder = require('../cylinder');

var ColourCylinder = function (_Cylinder) {
  _inherits(ColourCylinder, _Cylinder);

  function ColourCylinder(vertexPositionData, vertexNormalData, vertexIndexData, vertexColourData) {
    _classCallCheck(this, ColourCylinder);

    var _this = _possibleConstructorReturn(this, (ColourCylinder.__proto__ || Object.getPrototypeOf(ColourCylinder)).call(this, vertexPositionData, vertexNormalData, vertexIndexData));

    _this.vertexColourData = vertexColourData;
    return _this;
  }

  _createClass(ColourCylinder, [{
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
    value: function fromProperties(properties) {
      var colour = properties.colour,
          vertexColourData = vertexColourDataFromColour(colour),
          colourCylinder = Cylinder.fromProperties(ColourCylinder, properties, vertexColourData);


      return colourCylinder;
    }
  }]);

  return ColourCylinder;
}(Cylinder);

module.exports = ColourCylinder;

function vertexColourDataFromColour(colour) {
  var vertexColourData = [];

  for (var index = 0; index < 24; index++) {
    vertexColourData = vertexColourData.concat(colour);
  }

  return vertexColourData;
}

},{"../cylinder":8}],10:[function(require,module,exports){
'use strict';

require('../jiggle');

var Scene = require('../scene'),
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
      { imageMap: imageMap },
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

},{"../jiggle":28,"../scene":38,"../utilities/imageMap":55,"./containerHouse/balcony/bedroom":11,"./containerHouse/balcony/main":12,"./containerHouse/floor/first":21,"./containerHouse/floor/second":22,"./containerHouse/floor/third":23,"./containerHouse/foundations":24,"./containerHouse/frame":25}],11:[function(require,module,exports){
'use strict';

var BalconySection = require('../balcony/section');

var BedroomBalcony = function BedroomBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [0, 16, 19] }), React.createElement(BalconySection, { offset: [4, 16, 19] })];
};

module.exports = BedroomBalcony;

},{"../balcony/section":13}],12:[function(require,module,exports){
'use strict';

var BalconySection = require('../balcony/section');

var MainBalcony = function MainBalcony(properties) {
  return [React.createElement(BalconySection, { offset: [40, 0, 19] }), React.createElement(BalconySection, { offset: [44, 0, 19] }), React.createElement(BalconySection, { offset: [40, 16, 19] }), React.createElement(BalconySection, { offset: [44, 16, 19] }), React.createElement(BalconySection, { offset: [36, 16, 19] }), React.createElement(BalconySection, { offset: [32, 16, 19] }), React.createElement(BalconySection, { offset: [28, 16, 19] })];
};

module.exports = MainBalcony;

},{"../balcony/section":13}],13:[function(require,module,exports){
'use strict';

var vec3 = require('../../../vec3'),
    Edge = require('./section/edge'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short');

var width = 4,
    depth = 16;

var add = vec3.add,
    height = Edge.height,
    thickness = Edge.thickness;


var BalconySection = function BalconySection(properties) {
      var offset = properties.offset;


      return [React.createElement(LongEdge, { offset: add(offset, [0, 0, -height]), depth: depth }), React.createElement(LongEdge, { offset: add(offset, [width - thickness, 0, -height]), depth: depth }), React.createElement(ShortEdge, { offset: add(offset, [0, 0, -height]), width: width }), React.createElement(ShortEdge, { offset: add(offset, [0, 16 - thickness, -height]), width: width })];
};

module.exports = BalconySection;

},{"../../../vec3":56,"./section/edge":14,"./section/edge/long":15,"./section/edge/short":16}],14:[function(require,module,exports){
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

},{"../../../common/cuboid/texture":7}],15:[function(require,module,exports){
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

},{"../edge":14}],16:[function(require,module,exports){
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

},{"../edge":14}],17:[function(require,module,exports){
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

},{"../common/cuboid/texture":7}],18:[function(require,module,exports){
'use strict';

var ColourCuboid = require('../common/cuboid/colour');

var Container = function Container(properties) {
  var offset = properties.offset,
      width = properties.width;


  return React.createElement(ColourCuboid, { colour: [1, 1, 1, 1], offset: offset, width: width, depth: 8, height: 9.5 });
};

module.exports = Container;

},{"../common/cuboid/colour":6}],19:[function(require,module,exports){
'use strict';

var Container = require('../container');

var FortyFootContainer = function FortyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 40 });
};

module.exports = FortyFootContainer;

},{"../container":18}],20:[function(require,module,exports){
'use strict';

var Container = require('../container');

var TwentyFootContainer = function TwentyFootContainer(properties) {
  var offset = properties.offset;


  return React.createElement(Container, { offset: offset, width: 20 });
};

module.exports = TwentyFootContainer;

},{"../container":18}],21:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var FirstFloor = function FirstFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [8, 0, 0] }), React.createElement(FortyFootContainer, { offset: [8, 8, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 0] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 0] })];
};

module.exports = FirstFloor;

},{"../container/fortyFoot":19,"../container/twentyFoot":20}],22:[function(require,module,exports){
'use strict';

var FortyFootContainer = require('../container/fortyFoot'),
    TwentyFootContainer = require('../container/twentyFoot');

var SecondFloor = function SecondFloor(properties) {
  return [React.createElement(FortyFootContainer, { offset: [0, 0, 9.5] }), React.createElement(FortyFootContainer, { offset: [0, 8, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 9.5] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 9.5] })];
};

module.exports = SecondFloor;

},{"../container/fortyFoot":19,"../container/twentyFoot":20}],23:[function(require,module,exports){
'use strict';

var TwentyFootContainer = require('../container/twentyFoot');

var ThirdFloor = function ThirdFloor(properties) {
  return [React.createElement(TwentyFootContainer, { offset: [0, 0, 19] }), React.createElement(TwentyFootContainer, { offset: [0, 8, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 16, 19] }), React.createElement(TwentyFootContainer, { offset: [8, 24, 19] })];
};

module.exports = ThirdFloor;

},{"../container/twentyFoot":20}],24:[function(require,module,exports){
'use strict';

var ConcreteSlab = require('./concreteSlab');

var Foundations = function Foundations(properties) {
  return [React.createElement(ConcreteSlab, { offset: [-0.5, -0.5, -1], width: 12.5, depth: 33, height: 1 }), React.createElement(ConcreteSlab, { offset: [24, -0.5, -1], width: 24.4, depth: 33, height: 1 })];
};

module.exports = Foundations;

},{"./concreteSlab":17}],25:[function(require,module,exports){
'use strict';

var SteelSection = require('./steelSection');

var Frame = function Frame(properties) {
  var width = 48,
      depth = 32,
      height = 29;

  return [React.createElement(SteelSection, { offset: [-0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, depth - 0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, 0], width: 1, depth: 1, height: height }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [width - 0.5, -0.5, height - 1], width: 1, depth: depth, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, -0.5, height - 1], width: width, depth: 1, height: 1 }), React.createElement(SteelSection, { offset: [-0.5, depth - 0.5, height - 1], width: width, depth: 1, height: 1 })];
};

module.exports = Frame;

},{"./steelSection":26}],26:[function(require,module,exports){
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

},{"../common/cuboid/texture":7}],27:[function(require,module,exports){
'use strict';

require('../jiggle');

var Scene = require('../scene'),
    ColourCuboid = require('./common/cuboid/colour'),
    TextureCuboid = require('./common/cuboid/texture'),
    ColourCylinder = require('./common/cylinder/colour'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap },
      React.createElement(TextureCuboid, { offset: [+1, +1, +1], width: 1, depth: 1, height: 1, imageName: 'bricks.jpg' }),
      React.createElement(ColourCuboid, { offset: [-1, -1, -1], width: 1, depth: 1, height: 1, colour: [1, 0, 0, 1] }),
      React.createElement(ColourCylinder, { offset: [0, 0, 0], width: 1, depth: 1, height: 1, colour: [0, 1, 0, 1] })
    );
  });
};

module.exports = shapes;

},{"../jiggle":28,"../scene":38,"../utilities/imageMap":55,"./common/cuboid/colour":6,"./common/cuboid/texture":7,"./common/cylinder/colour":9}],28:[function(require,module,exports){
'use strict';

var React = require('./react');

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

},{"./react":37}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
'use strict';

function applyMatrix(uniformLocation, matrix) {
  var transpose = false; ///

  this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
}

module.exports = {
  applyMatrix: applyMatrix
};

},{}],33:[function(require,module,exports){
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

},{"../mouseCoordinates":36}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{"./coordinates2D":2}],37:[function(require,module,exports){
'use strict';

var Element = require('./element'),
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

    if (false) {} else if (isSubclassOf(firstArgument, Element)) {
      var Class = firstArgument; ///

      elementOrElements = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      var elementFunction = firstArgument; ///

      elementOrElements = elementFunction(properties);
    }
  }

  var elements = flatten(guarantee(elementOrElements));

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

},{"./element":3,"./utilities/array":52}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Offset = require('./scene/offset'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Perspective = require('./scene/perspective'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture'),
    MouseEvents = require('./scene/mouseEvents');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.canvas = canvas;
    _this.colourShader = colourShader;
    _this.textureShader = textureShader;
    return _this;
  }

  _createClass(Scene, [{
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
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.render(); ///
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
        zoom.mouseWheelEventHandler(delta);

        this.render();
      }.bind(this));
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
    value: function render() {
      var xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      zAngle = yAxisAngle,
          ///
      xCoordinate = 0,
          ///-18,
      yCoordinate = 0,
          ///-16,
      zCoordinate = -Math.max(10, distance),
          ///
      offset = Offset.fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          perspective = Perspective.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      this.drawElements(offset, rotation, position, perspective, normal);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, perspective, normal) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, perspective, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, perspective, normal);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(canvas, colourShader, textureShader);


      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      textureShader.createBuffers(canvas);
      colourShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      window.onresize = function () {
        scene.resize();
        scene.render(colourShader, textureShader);
      };

      scene.resize();
      scene.render(colourShader, textureShader);

      scene.addMouseEventHandlers();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

},{"./canvas":1,"./element":3,"./scene/angles":39,"./scene/mouseEvents":42,"./scene/normal":43,"./scene/offset":44,"./scene/perspective":45,"./scene/position":46,"./scene/rotation":47,"./scene/zoom":48,"./shader/colour":50,"./shader/texture":51}],39:[function(require,module,exports){
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

},{"./coordinates2D":40,"./mouseCoordinates":41}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{"./coordinates2D":40}],42:[function(require,module,exports){
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

},{}],43:[function(require,module,exports){
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

},{"gl-mat4":67}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXCoordinate = +0.0,
    defaultYCoordinate = +0.0,
    defaultZCoordinate = +0.0;

var Offset = function () {
  function Offset(matrix) {
    _classCallCheck(this, Offset);

    this.matrix = matrix;
  }

  _createClass(Offset, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromXCoordinateAndYCoordinate',
    value: function fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate) {
      return Offset.fromCoordinates(xCoordinate, yCoordinate, undefined);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          offset = new Offset(matrix);

      mat4.translate(matrix, matrix, coordinateVector);

      return offset;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{"gl-mat4":67}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultFieldOfView = 45 * Math.PI / 180,
    defaultZNear = 1,
    defaultZFar = 1000.0;

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
    key: 'fromWidthAndHeight',
    value: function fromWidthAndHeight(width, height) {
      var aspectRatio = width / height,
          fieldOfView = defaultFieldOfView,
          zNear = defaultZNear,
          zFar = defaultZFar,
          matrix = mat4.create(),
          perspective = new Perspective(matrix);

      mat4.perspective(matrix, fieldOfView, aspectRatio, zNear, zFar);

      return perspective;
    }
  }]);

  return Perspective;
}();

module.exports = Perspective;

},{"gl-mat4":67}],46:[function(require,module,exports){
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
      return Position.fromCoordinates(undefined, undefined, zCoordinate);
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates() {
      var xCoordinate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXCoordinate;
      var yCoordinate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYCoordinate;
      var zCoordinate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZCoordinate;

      var coordinateVector = [xCoordinate, yCoordinate, zCoordinate],
          matrix = mat4.create(),
          position = new Position(matrix);

      mat4.translate(matrix, matrix, coordinateVector);

      return position;
    }
  }]);

  return Position;
}();

module.exports = Position;

},{"gl-mat4":67}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXAngle = 0.0,
    defaultYAngle = 0.0,
    defaultZAngle = 0.0,
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
    key: 'fromNothing',
    value: function fromNothing() {
      var xAngle = defaultXAngle,
          yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngle',
    value: function fromXAngle(xAngle) {
      var yAngle = defaultYAngle,
          zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndYAngle',
    value: function fromXAngleAndYAngle(xAngle, yAngle) {
      var zAngle = defaultZAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleAndZAngle',
    value: function fromXAngleAndZAngle(xAngle, zAngle) {
      var yAngle = defaultYAngle,
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle);

      return rotation;
    }
  }, {
    key: 'fromXAngleYAngleAndZAngle',
    value: function fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle) {
      var matrix = mat4.create();

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

},{"gl-mat4":67}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIAL_DISTANCE = 10;

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
      this.distance += delta;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var distance = INITIAL_DISTANCE,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

var zoom = Zoom.fromNothing();

module.exports = zoom;

},{}],49:[function(require,module,exports){
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
    perspectiveMatrixName = 'uPerspectiveMatrix',
    normalMatrixName = 'uNormalMatrix',
    vertexPositionAttributeName = 'aVertexPosition',
    vertexNormalAttributeName = 'aVertexNormal',
    calculateLightingSource = '\n\n        uniform mat4 ' + normalMatrixName + ';\n\n        attribute vec3 ' + vertexNormalAttributeName + ';\n\n        vec3 ambientLight = vec3(0.3, 0.3, 0.3),\n             directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ' + normalMatrixName + ' * vec4(' + vertexNormalAttributeName + ', 1.0);            \n\n          float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n          \n          vec3 lighting = ambientLight + (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      ',
    calculatePositionSource = '\n\n        uniform mat4 ' + offsetMatrixName + ',\n                     ' + rotationMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + perspectiveMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + perspectiveMatrixName + ' * ' + positionMatrixName + ' * ' + rotationMatrixName + ' * ' + offsetMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ',
    vertexPositionComponents = 3,
    vertexNormalComponents = 3;

var Shader = function () {
  function Shader(program, canvas) {
    _classCallCheck(this, Shader);

    this.program = program;
    this.offsetMatrixUniformLocation = canvas.getUniformLocation(program, offsetMatrixName);
    this.rotationMatrixUniformLocation = canvas.getUniformLocation(program, rotationMatrixName);
    this.positionMatrixUniformLocation = canvas.getUniformLocation(program, positionMatrixName);
    this.perspectiveMatrixUniformLocation = canvas.getUniformLocation(program, perspectiveMatrixName);
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
      return this.perspectiveMatrixUniformLocation;
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

},{"necessary":82}],50:[function(require,module,exports){
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

},{"../shader":49,"necessary":82}],51:[function(require,module,exports){
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

},{"../shader":49,"necessary":82}],52:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities;


function divide(data, divisor) {
  var arrays = [],
      dataLength = data.length,
      arraysLength = dataLength / divisor;

  for (var i = 0; i < arraysLength; i++) {
    var array = [],
        offset = i * divisor;

    for (var j = 0; j < divisor; j++) {
      array[j] = data[j + offset];
    }

    arrays[i] = array;
  }

  return arrays;
}

function flatten(arrays) {
  var elements = arrays.reduce(function (elements, array) {
    return elements.concat(array);
  }, []);

  return elements;
}

function guarantee(arrayOrElement) {
  var elements = arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];

  return elements;
}

module.exports = Object.assign(arrayUtilities, {
  divide: divide,
  flatten: flatten,
  guarantee: guarantee
});

},{"necessary":82}],53:[function(require,module,exports){
'use strict';

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

module.exports = {
  domElementFromSelector: domElementFromSelector
};

},{}],54:[function(require,module,exports){
'use strict';

var necessary = require('necessary');

var asynchronousUtilities = necessary.asynchronousUtilities,
    repeatedly = asynchronousUtilities.repeatedly;


function preloadImage(source, callback) {
  var image = new Image();

  image.onload = function () {
    callback(image);
  };

  image.src = source; ///
}

function preloadImages(sources, callback) {
  var images = [],
      length = sources.length,
      ///
  context = {
    images: images,
    sources: sources
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
      sources = context.sources,
      source = sources[index],
      image = new Image();


  images[index] = image;

  image.onload = next; ///

  image.src = source; ///
}

},{"necessary":82}],55:[function(require,module,exports){
'use strict';

var arrayUtilities = require('../utilities/array'),
    imageUtilities = require('../utilities/image');

var flatten = arrayUtilities.flatten,
    preloadImage = imageUtilities.preloadImage,
    _runtimeConfiguration = runtimeConfiguration,
    imageMapJSON = _runtimeConfiguration.imageMapJSON;


function preloadImageMap(callback) {
  var source = 'imageMap'; ///

  preloadImage(source, callback);
}

function textureCoordinateDataFromImageName(imageName) {
  var imageNames = [imageName, imageName, imageName, imageName, imageName, imageName],
      textureCoordinateData = textureCoordinateDataFromImageNames(imageNames);

  return textureCoordinateData;
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
  textureCoordinateDataFromImageName: textureCoordinateDataFromImageName,
  textureCoordinateDataFromImageNames: textureCoordinateDataFromImageNames
};

},{"../utilities/array":52,"../utilities/image":54}],56:[function(require,module,exports){
'use strict';

function add(array1, array2) {
  var array = array1.map(function (value1, index) {
    var value2 = array2[index];

    return value1 + value2;
  });

  return array;
}

function multiply(array1, array2) {
  var array = array1.map(function (value1, index) {
    var value2 = array2[index];

    return value1 * value2;
  });

  return array;
}

module.exports = {
  add: add,
  multiply: multiply
};

},{}],57:[function(require,module,exports){

},{}],58:[function(require,module,exports){
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
},{}],59:[function(require,module,exports){
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
},{}],60:[function(require,module,exports){
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
},{}],61:[function(require,module,exports){
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
},{}],62:[function(require,module,exports){
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
},{}],63:[function(require,module,exports){
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
},{}],64:[function(require,module,exports){
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
},{}],65:[function(require,module,exports){
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
},{}],66:[function(require,module,exports){
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
},{}],67:[function(require,module,exports){
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
},{"./adjoint":58,"./clone":59,"./copy":60,"./create":61,"./determinant":62,"./fromQuat":63,"./fromRotationTranslation":64,"./frustum":65,"./identity":66,"./invert":68,"./lookAt":69,"./multiply":70,"./ortho":71,"./perspective":72,"./perspectiveFromFieldOfView":73,"./rotate":74,"./rotateX":75,"./rotateY":76,"./rotateZ":77,"./scale":78,"./str":79,"./translate":80,"./transpose":81}],68:[function(require,module,exports){
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
},{}],69:[function(require,module,exports){
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
},{"./identity":66}],70:[function(require,module,exports){
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
},{}],71:[function(require,module,exports){
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
},{}],72:[function(require,module,exports){
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
},{}],73:[function(require,module,exports){
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


},{}],74:[function(require,module,exports){
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
},{}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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
},{}],77:[function(require,module,exports){
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
},{}],78:[function(require,module,exports){
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
},{}],79:[function(require,module,exports){
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
},{}],80:[function(require,module,exports){
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
},{}],81:[function(require,module,exports){
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
},{}],82:[function(require,module,exports){
'use strict';

module.exports = {
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous')
};

},{"./lib/utilities/array":83,"./lib/utilities/asynchronous":84,"./lib/utilities/fileSystem":85,"./lib/utilities/path":86}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
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

},{}],85:[function(require,module,exports){
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

},{"fs":57}],86:[function(require,module,exports){
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

},{"./array":83}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY2FudmFzLmpzIiwiZXM2L2Nvb3JkaW5hdGVzMkQuanMiLCJlczYvZWxlbWVudC5qcyIsImVzNi9leGFtcGxlcy5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jdWJvaWQvY29sb3VyLmpzIiwiZXM2L2V4YW1wbGVzL2NvbW1vbi9jdWJvaWQvdGV4dHVyZS5qcyIsImVzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIuanMiLCJlczYvZXhhbXBsZXMvY29tbW9uL2N5bGluZGVyL2NvbG91ci5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20uanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24vZWRnZS9sb25nLmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvc2VjdGlvbi9lZGdlL3Nob3J0LmpzIiwiZXM2L2V4YW1wbGVzL2NvbnRhaW5lckhvdXNlL2NvbmNyZXRlU2xhYi5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvY29udGFpbmVyL2ZvcnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvdHdlbnR5Rm9vdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdC5qcyIsImVzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9mbG9vci9zZWNvbmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2UvZnJhbWUuanMiLCJlczYvZXhhbXBsZXMvY29udGFpbmVySG91c2Uvc3RlZWxTZWN0aW9uLmpzIiwiZXM2L2V4YW1wbGVzL3NoYXBlcy5qcyIsImVzNi9qaWdnbGUuanMiLCJlczYvbWl4aW4vYnVmZmVyLmpzIiwiZXM2L21peGluL2NvbG91ci5qcyIsImVzNi9taXhpbi9kZXB0aC5qcyIsImVzNi9taXhpbi9tYXRyaXguanMiLCJlczYvbWl4aW4vbW91c2UuanMiLCJlczYvbWl4aW4vc2hhZGVyLmpzIiwiZXM2L21peGluL3RleHR1cmUuanMiLCJlczYvbW91c2VDb29yZGluYXRlcy5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9zY2VuZS5qcyIsImVzNi9zY2VuZS9hbmdsZXMuanMiLCJlczYvc2NlbmUvY29vcmRpbmF0ZXMyRC5qcyIsImVzNi9zY2VuZS9tb3VzZUNvb3JkaW5hdGVzLmpzIiwiZXM2L3NjZW5lL21vdXNlRXZlbnRzLmpzIiwiZXM2L3NjZW5lL25vcm1hbC5qcyIsImVzNi9zY2VuZS9vZmZzZXQuanMiLCJlczYvc2NlbmUvcGVyc3BlY3RpdmUuanMiLCJlczYvc2NlbmUvcG9zaXRpb24uanMiLCJlczYvc2NlbmUvcm90YXRpb24uanMiLCJlczYvc2NlbmUvem9vbS5qcyIsImVzNi9zaGFkZXIuanMiLCJlczYvc2hhZGVyL2NvbG91ci5qcyIsImVzNi9zaGFkZXIvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJlczYvdXRpbGl0aWVzL2RvbS5qcyIsImVzNi91dGlsaXRpZXMvaW1hZ2UuanMiLCJlczYvdXRpbGl0aWVzL2ltYWdlTWFwLmpzIiwiZXM2L3ZlYzMuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvYWRqb2ludC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvY29weS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2RldGVybWluYW50LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvZnJvbVF1YXQuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9mcm9tUm90YXRpb25UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2ZydXN0dW0uanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvaW52ZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbG9va0F0LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9vcnRoby5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3BlcnNwZWN0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGUuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9yb3RhdGVYLmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvcm90YXRlWS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3JvdGF0ZVouanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3N0ci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXJyYXkuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0uanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUFFQSxJQUFNLGVBQWUsUUFBUSxpQkFBUixDQUFyQjtBQUFBLElBQ00sZUFBZSxRQUFRLGlCQUFSLENBRHJCO0FBQUEsSUFFTSxjQUFjLFFBQVEsZ0JBQVIsQ0FGcEI7QUFBQSxJQUdNLGNBQWMsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU0sY0FBYyxRQUFRLGdCQUFSLENBSnBCO0FBQUEsSUFLTSxjQUFjLFFBQVEsZ0JBQVIsQ0FMcEI7QUFBQSxJQU1NLGFBQWEsUUFBUSxlQUFSLENBTm5CO0FBQUEsSUFPTSxhQUFhLFFBQVEsZUFBUixDQVBuQjs7SUFTUSxzQixHQUEyQixZLENBQTNCLHNCOzs7QUFFUixJQUFNLGdCQUFnQixDQUF0Qjs7SUFFTSxNO0FBQ0osb0JBQWlDO0FBQUEsUUFBckIsUUFBcUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDL0IsUUFBTSxhQUFhLHVCQUF1QixRQUF2QixDQUFuQjtBQUFBLFFBQ00sVUFBVSxXQUFXLFVBQVgsQ0FBc0IsT0FBdEIsQ0FEaEI7O0FBR0EsUUFBSSxDQUFDLE9BQUwsRUFBYztBQUNaLFlBQU0sSUFBSSxLQUFKLHFDQUFOO0FBQ0Q7O0FBRUQsU0FBSyxPQUFMLEdBQWUsT0FBZjs7QUFFQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBSyxPQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBSyxVQUFaO0FBQ0Q7Ozsr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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Qjs7QUFFQSxNQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsZ0JBQVgsQ0FBaEI7O0FBRUEsTUFBSSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU0sY0FBYyxPQUFPLE9BQVAsQ0FBcEI7O0FBRUEsMkJBQXVCLFdBQXZCLENBSG9CLENBR2lCO0FBQ3RDOztBQUVELFNBQU8sb0JBQVA7QUFDRDs7QUFFRCxTQUFTLGlDQUFULENBQTJDLElBQTNDLEVBQWlEO0FBQy9DLE1BQUksNEJBQTRCLElBQWhDOztBQUVBLE1BQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUFoQjs7QUFFQSxNQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTSxjQUFjLE9BQU8sT0FBUCxDQUFwQjs7QUFFQSxnQ0FBNEIsV0FBNUIsQ0FIb0IsQ0FHcUI7QUFDMUM7O0FBRUQsU0FBTyx5QkFBUDtBQUNEOztBQUVELFNBQVMsdUNBQVQsQ0FBaUQsSUFBakQsRUFBdUQ7QUFDckQsTUFBSSxrQ0FBa0MsSUFBdEM7O0FBRUEsTUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQWhCOztBQUVBLE1BQUksWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNLGNBQWMsT0FBTyxPQUFQLENBQXBCOztBQUVBLHNDQUFrQyxXQUFsQztBQUNEOztBQUVELFNBQU8sK0JBQVA7QUFDRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixzQkFBb0Isa0JBREw7QUFFZixzQkFBb0Isa0JBRkw7QUFHZiw4QkFBNEIsMEJBSGI7QUFJZix5Q0FBdUMscUNBSnhCO0FBS2YsZ0JBQWMsWUFMQztBQU1mLG9CQUFrQixnQkFOSDtBQU9mLDBCQUF3QixzQkFQVDtBQVFmLGdDQUE4Qiw0QkFSZjtBQVNmLGdDQUE4Qiw0QkFUZjtBQVVmLHFDQUFtQyxpQ0FWcEI7QUFXZiwyQ0FBeUM7QUFYMUIsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb21VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9kb20nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgY29sb3VyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NvbG91cicpLFxuICAgICAgc2hhZGVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3NoYWRlcicpLFxuICAgICAgYnVmZmVyTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2J1ZmZlcicpLFxuICAgICAgbWF0cml4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL21hdHJpeCcpLFxuICAgICAgZGVwdGhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZGVwdGgnKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNvbnN0IHsgZG9tRWxlbWVudEZyb21TZWxlY3RvciB9ID0gZG9tVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0T2Zmc2V0ID0gMDtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihzaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKSB7XG4gICAgY29uc3Qgb2Zmc2V0TWF0cml4ID0gb2Zmc2V0LmdldE1hdHJpeCgpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gcm90YXRpb24uZ2V0TWF0cml4KCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZU1hdHJpeCA9IHBlcnNwZWN0aXZlLmdldE1hdHJpeCgpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IG5vcm1hbC5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBzaGFkZXIuZ2V0Um90YXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHNoYWRlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldFBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gc2hhZGVyLmdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldE1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBlcnNwZWN0aXZlTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwZXJzcGVjdGl2ZU1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbE1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHNoYWRlci5nZXRDb3VudCgpO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMoY291bnQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKGNvdW50LCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQ7XG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvb3JkaW5hdGVzMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG5cbiAgZ2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG4gIFxuICBzZXRYKHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICB9XG4gIFxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBtaW51cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cbiAgXG4gIG11bHRpcGxpZWRCeShzY2FsYXIpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54ICogc2NhbGFyLFxuICAgICAgICAgIHkgPSB0aGlzLnkgKiBzY2FsYXI7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBkaXZpZGVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAvIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55IC8gc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSB0aGlzLmdldFkoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt4fSwke3l9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29yZGluYXRlczJEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoYXBlczogcmVxdWlyZSgnLi9leGFtcGxlcy9zaGFwZXMnKSxcbiAgY29udGFpbmVySG91c2U6IHJlcXVpcmUoJy4vZXhhbXBsZXMvY29udGFpbmVySG91c2UnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL3ZlYzMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcblxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG5cbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gW1xuXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcblxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG5cbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcblxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuICAgICAgICArMS4wLCAgMC4wLCAgMC4wLFxuXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG4gICAgICAgIC0xLjAsICAwLjAsICAwLjAsXG5cbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBbXG5cbiAgICAgICAgMCwgIDEsICAyLFxuICAgICAgICAwLCAgMiwgIDMsXG5cbiAgICAgICAgNCwgIDUsICA2LFxuICAgICAgICA0LCAgNiwgIDcsXG5cbiAgICAgICAgOCwgIDksIDEwLFxuICAgICAgICA4LCAxMCwgMTEsXG5cbiAgICAgICAgMTIsIDEzLCAxNCxcbiAgICAgICAgMTIsIDE0LCAxNSxcblxuICAgICAgICAxNiwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE5LFxuXG4gICAgICAgIDIwLCAyMSwgMjIsXG4gICAgICAgIDIwLCAyMiwgMjMsXG5cbiAgICAgIF07XG5cbmNvbnN0IHsgZGl2aWRlLCBmbGF0dGVuIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ3Vib2lkIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbERhdGEgPSB2ZXJ0ZXhOb3JtYWxEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleERhdGE7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uRGF0YSA9IHZlcnRleFBvc2l0aW9uRGF0YUZyb21IZWlnaHRXaWR0aERlcHRoQW5kT2Zmc2V0KHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpO1xuICAgIFxuICAgIHJldHVybiBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdWJvaWQ7XG5cbmZ1bmN0aW9uIHZlcnRleFBvc2l0aW9uRGF0YUZyb21IZWlnaHRXaWR0aERlcHRoQW5kT2Zmc2V0KHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpIHtcbiAgbGV0IHZlcnRleFBvc2l0aW9ucyA9IGRpdmlkZSh2ZXJ0ZXhQb3NpdGlvbkRhdGEsIDMpOyAgLy8vXG5cbiAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgIHZlcnRleFBvc2l0aW9uID0gdmVjMy5tdWx0aXBseSh2ZXJ0ZXhQb3NpdGlvbiwgW3dpZHRoLCBkZXB0aCwgaGVpZ2h0XSkgO1xuICAgIHZlcnRleFBvc2l0aW9uID0gdmVjMy5hZGQodmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpO1xuXG5jbGFzcyBDb2xvdXJDdWJvaWQgZXh0ZW5kcyBDdWJvaWQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSwgdmVydGV4Q29sb3VyRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhKTtcbiAgICBcbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhOyAgICBcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG4gICAgXG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhOb3JtYWxEYXRhKHZlcnRleE5vcm1hbERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKTtcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4Q29sb3VyRGF0YSh0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gdmVydGV4Q29sb3VyRGF0YUZyb21Db2xvdXIoY29sb3VyKSxcbiAgICAgICAgICBjb2xvdXJDdWJvaWQgPSBDdWJvaWQuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3Vib2lkLCBwcm9wZXJ0aWVzLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcblxuICAgIHJldHVybiBjb2xvdXJDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJDdWJvaWQ7XG5cbmZ1bmN0aW9uIHZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyKGNvbG91cikge1xuICBsZXQgdmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhLmNvbmNhdChjb2xvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN1Ym9pZCA9IHJlcXVpcmUoJy4uL2N1Ym9pZCcpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZUN1Ym9pZCBleHRlbmRzIEN1Ym9pZCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25EYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IHRoaXMuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleFBvc2l0aW9uRGF0YSh2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIHRleHR1cmVTaGFkZXIuYWRkVGV4dHVyZUNvb3JkaW5hdGVEYXRhKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lKGltYWdlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUN1Ym9pZCA9IEN1Ym9pZC5mcm9tUHJvcGVydGllcyhUZXh0dXJlQ3Vib2lkLCBwcm9wZXJ0aWVzLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDdWJvaWQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlQ3Vib2lkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vdmVjMycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHZlcnRleFBvc2l0aW9uRGF0YSA9IFtcblxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG5cbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMC4wLFxuICAgICAgICAxLjAsIDAuMCwgMS4wLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLFxuXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgMC4wLCAwLjAsIDEuMCxcbiAgICAgICAgMC4wLCAxLjAsIDEuMCxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCxcblxuICAgICAgXSxcbiAgICAgIHZlcnRleE5vcm1hbERhdGEgPSBbXG5cbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuICAgICAgICAwLjAsICAwLjAsICsxLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgKzEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCArMS4wLFxuXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcbiAgICAgICAgMC4wLCAgMC4wLCAtMS4wLFxuICAgICAgICAwLjAsICAwLjAsIC0xLjAsXG4gICAgICAgIDAuMCwgIDAuMCwgLTEuMCxcblxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG4gICAgICAgIDAuMCwgKzEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCArMS4wLCAgMC4wLFxuICAgICAgICAwLjAsICsxLjAsICAwLjAsXG5cbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuICAgICAgICAwLjAsIC0xLjAsICAwLjAsXG4gICAgICAgIDAuMCwgLTEuMCwgIDAuMCxcbiAgICAgICAgMC4wLCAtMS4wLCAgMC4wLFxuXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG4gICAgICAgICsxLjAsICAwLjAsICAwLjAsXG5cbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcbiAgICAgICAgLTEuMCwgIDAuMCwgIDAuMCxcblxuICAgICAgXSxcbiAgICAgIHZlcnRleEluZGV4RGF0YSA9IFtcblxuICAgICAgICAwLCAgMSwgIDIsXG4gICAgICAgIDAsICAyLCAgMyxcblxuICAgICAgICA0LCAgNSwgIDYsXG4gICAgICAgIDQsICA2LCAgNyxcblxuICAgICAgICA4LCAgOSwgMTAsXG4gICAgICAgIDgsIDEwLCAxMSxcblxuICAgICAgICAxMiwgMTMsIDE0LFxuICAgICAgICAxMiwgMTQsIDE1LFxuXG4gICAgICAgIDE2LCAxNywgMTgsXG4gICAgICAgIDE2LCAxOCwgMTksXG5cbiAgICAgICAgMjAsIDIxLCAyMixcbiAgICAgICAgMjAsIDIyLCAyMyxcblxuICAgICAgXTtcblxuY29uc3QgeyBkaXZpZGUsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDeWxpbmRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkRhdGEsIHZlcnRleE5vcm1hbERhdGEsIHZlcnRleEluZGV4RGF0YSkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gdmVydGV4Tm9ybWFsRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4RGF0YSA9IHZlcnRleEluZGV4RGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkRhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbERhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhEYXRhO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGRlcHRoLCBoZWlnaHQsIG9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkRhdGEgPSB2ZXJ0ZXhQb3NpdGlvbkRhdGFGcm9tSGVpZ2h0V2lkdGhEZXB0aEFuZE9mZnNldCh3aWR0aCwgZGVwdGgsIGhlaWdodCwgb2Zmc2V0KTtcbiAgICBcbiAgICByZXR1cm4gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3lsaW5kZXI7XG5cbmZ1bmN0aW9uIHZlcnRleFBvc2l0aW9uRGF0YUZyb21IZWlnaHRXaWR0aERlcHRoQW5kT2Zmc2V0KHdpZHRoLCBkZXB0aCwgaGVpZ2h0LCBvZmZzZXQpIHtcbiAgbGV0IHZlcnRleFBvc2l0aW9ucyA9IGRpdmlkZSh2ZXJ0ZXhQb3NpdGlvbkRhdGEsIDMpOyAgLy8vXG5cbiAgdmVydGV4UG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbikge1xuICAgIHZlcnRleFBvc2l0aW9uID0gdmVjMy5tdWx0aXBseSh2ZXJ0ZXhQb3NpdGlvbiwgW3dpZHRoLCBkZXB0aCwgaGVpZ2h0XSkgO1xuICAgIHZlcnRleFBvc2l0aW9uID0gdmVjMy5hZGQodmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gIH0pO1xuXG4gIHJldHVybiBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKTtcblxuY2xhc3MgQ29sb3VyQ3lsaW5kZXIgZXh0ZW5kcyBDeWxpbmRlciB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhOb3JtYWxEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIFxuICAgIHRoaXMudmVydGV4Q29sb3VyRGF0YSA9IHZlcnRleENvbG91ckRhdGE7ICAgIFxuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckRhdGE7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25EYXRhID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkRhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhEYXRhID0gdGhpcy5nZXRWZXJ0ZXhJbmRleERhdGEoKTtcbiAgICBcbiAgICBjb2xvdXJTaGFkZXIuYWRkVmVydGV4UG9zaXRpb25EYXRhKHZlcnRleFBvc2l0aW9uRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleE5vcm1hbERhdGEodmVydGV4Tm9ybWFsRGF0YSk7XG4gICAgY29sb3VyU2hhZGVyLmFkZFZlcnRleEluZGV4RGF0YSh2ZXJ0ZXhJbmRleERhdGEpO1xuICAgIGNvbG91clNoYWRlci5hZGRWZXJ0ZXhDb2xvdXJEYXRhKHRoaXMudmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhRnJvbUNvbG91cihjb2xvdXIpLFxuICAgICAgICAgIGNvbG91ckN5bGluZGVyID0gQ3lsaW5kZXIuZnJvbVByb3BlcnRpZXMoQ29sb3VyQ3lsaW5kZXIsIHByb3BlcnRpZXMsIHZlcnRleENvbG91ckRhdGEpO1xuXG4gICAgcmV0dXJuIGNvbG91ckN5bGluZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQ3lsaW5kZXI7XG5cbmZ1bmN0aW9uIHZlcnRleENvbG91ckRhdGFGcm9tQ29sb3VyKGNvbG91cikge1xuICBsZXQgdmVydGV4Q29sb3VyRGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyNDsgaW5kZXgrKykge1xuICAgIHZlcnRleENvbG91ckRhdGEgPSB2ZXJ0ZXhDb2xvdXJEYXRhLmNvbmNhdChjb2xvdXIpO1xuICB9XG5cbiAgcmV0dXJuIHZlcnRleENvbG91ckRhdGE7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBTY2VuZSA9IHJlcXVpcmUoJy4uL3NjZW5lJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZnJhbWUnKSxcbiAgICAgIEZpcnN0Rmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0JyksXG4gICAgICBUaGlyZEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci90aGlyZCcpLFxuICAgICAgU2Vjb25kRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZCcpLFxuICAgICAgRm91bmRhdGlvbnMgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2ZvdW5kYXRpb25zJyksXG4gICAgICBNYWluQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluJyksXG4gICAgICBCZWRyb29tQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9iZWRyb29tJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbnRhaW5lckhvdXNlID0gKCkgPT4ge1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IFxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0+XG4gICAgICA8Rm91bmRhdGlvbnMgLz5cbiAgICAgIDxGaXJzdEZsb29yIC8+XG4gICAgICA8U2Vjb25kRmxvb3IgLz5cbiAgICAgIDxUaGlyZEZsb29yIC8+XG4gICAgICA8TWFpbkJhbGNvbnkgLz5cbiAgICAgIDxCZWRyb29tQmFsY29ueSAvPlxuICAgICAgPEZyYW1lIC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb250YWluZXJIb3VzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKTtcblxuY29uc3QgQmVkcm9vbUJhbGNvbnkgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgMCwgMTYsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDQsIDE2LCAxOSBdfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZWRyb29tQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQmFsY29ueVNlY3Rpb24gPSByZXF1aXJlKCcuLi9iYWxjb255L3NlY3Rpb24nKTtcblxuY29uc3QgTWFpbkJhbGNvbnkgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNDAsICAwLCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyA0NCwgIDAsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDQwLCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgNDQsIDE2LCAxOSBdfSAvPixcbiAgPEJhbGNvbnlTZWN0aW9uIG9mZnNldD17WyAzNiwgMTYsIDE5IF19IC8+LFxuICA8QmFsY29ueVNlY3Rpb24gb2Zmc2V0PXtbIDMyLCAxNiwgMTkgXX0gLz4sXG4gIDxCYWxjb255U2VjdGlvbiBvZmZzZXQ9e1sgMjgsIDE2LCAxOSBdfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYWluQmFsY29ueTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uLy4uL3ZlYzMnKSxcbiAgICAgIEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgTG9uZ0VkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZS9sb25nJyksXG4gICAgICBTaG9ydEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZS9zaG9ydCcpO1xuXG5jb25zdCB3aWR0aCA9IDQsXG4gICAgICBkZXB0aCA9IDE2O1xuXG5jb25zdCB7IGFkZCB9ID0gdmVjMyxcbiAgICAgIHsgaGVpZ2h0LCB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IEJhbGNvbnlTZWN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8TG9uZ0VkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIDAsIDAsIC1oZWlnaHQgXSl9IGRlcHRoPXtkZXB0aH0gLz4sXG5cbiAgICA8TG9uZ0VkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIHdpZHRoLXRoaWNrbmVzcywgMCwgLWhlaWdodCBdKX0gZGVwdGg9e2RlcHRofSAvPixcblxuICAgIDxTaG9ydEVkZ2Ugb2Zmc2V0PXthZGQob2Zmc2V0LCBbIDAsIDAsIC1oZWlnaHQgXSl9IHdpZHRoPXt3aWR0aH0gLz4sXG5cbiAgICA8U2hvcnRFZGdlIG9mZnNldD17YWRkKG9mZnNldCwgWyAwLCAxNi10aGlja25lc3MsIC1oZWlnaHQgXSl9IHdpZHRoPXt3aWR0aH0gLz5cblxuICBdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFsY29ueVNlY3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi8uLi9jb21tb24vY3Vib2lkL3RleHR1cmUnKTtcblxuY29uc3QgaGVpZ2h0ID0gMC4yNSxcbiAgICAgIHRoaWNrbmVzcyA9IDAuMTtcblxuY29uc3QgRWRnZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCwgZGVwdGggfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxUZXh0dXJlQ3Vib2lkIGltYWdlTmFtZT1cInJ1c3R5U3RlZWwuanBnXCIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXt3aWR0aH0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9e2hlaWdodH0gLz5cblxuICApO1xufTtcblxuT2JqZWN0LmFzc2lnbihFZGdlLCB7XG4gIGhlaWdodDogaGVpZ2h0LFxuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKTtcblxuY29uc3QgeyB0aGlja25lc3MgfSA9IEVkZ2U7XG5cbmNvbnN0IExvbmdFZGdlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIGRlcHRoIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IHRoaWNrbmVzczsgIC8vL1xuXG4gIHJldHVybiAoXG5cbiAgICA8RWRnZSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IC8+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9uZ0VkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyk7XG5cbmNvbnN0IHsgdGhpY2tuZXNzIH0gPSBFZGdlO1xuXG5jb25zdCBTaG9ydEVkZ2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IG9mZnNldCwgd2lkdGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIGRlcHRoID0gdGhpY2tuZXNzOyAgLy8vXG5cbiAgcmV0dXJuIChcblxuICAgIDxFZGdlIG9mZnNldD17b2Zmc2V0fSB3aWR0aD17d2lkdGh9IGRlcHRoPXtkZXB0aH0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaG9ydEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVDdWJvaWQgPSByZXF1aXJlKCcuLi9jb21tb24vY3Vib2lkL3RleHR1cmUnKTtcblxuY29uc3QgQ29uY3JldGVTbGFiID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoLCBkZXB0aCwgaGVpZ2h0IH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8VGV4dHVyZUN1Ym9pZCBpbWFnZU5hbWU9XCJjb25jcmV0ZS5qcGdcIiBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmNyZXRlU2xhYjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyQ3Vib2lkID0gcmVxdWlyZSgnLi4vY29tbW9uL2N1Ym9pZC9jb2xvdXInKTtcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHdpZHRoIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyQ3Vib2lkIGNvbG91cj17WzEsIDEsIDEsIDFdfSBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17OH0gaGVpZ2h0PXs5LjV9IC8+XG4gICAgICBcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXInKTtcblxuY29uc3QgRm9ydHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXs0MH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3J0eUZvb3RDb250YWluZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcicpO1xuXG5jb25zdCBUd2VudHlGb290Q29udGFpbmVyID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb250YWluZXIgb2Zmc2V0PXtvZmZzZXR9IHdpZHRoPXsyMH0gLz5cbiAgICAgIFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VudHlGb290Q29udGFpbmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGb3J0eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvZm9ydHlGb290JyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi4vY29udGFpbmVyL3R3ZW50eUZvb3QnKTtcblxuY29uc3QgRmlyc3RGbG9vciA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAwLCAwXX0gLz4sXG4gIDxGb3J0eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgOCwgMF19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAxNiwgMF19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgMF19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpcnN0Rmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZvcnR5Rm9vdENvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lci9mb3J0eUZvb3QnKSxcbiAgICAgIFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jb25zdCBTZWNvbmRGbG9vciA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCAwLCA5LjVdfSAvPixcbiAgPEZvcnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCA4LCA5LjVdfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbOCwgMTYsIDkuNV19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgOS41XX0gLz4sXG5cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gU2Vjb25kRmxvb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFR3ZW50eUZvb3RDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXIvdHdlbnR5Rm9vdCcpO1xuXG5jb25zdCBUaGlyZEZsb29yID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1swLCAgMCwgMTldfSAvPixcbiAgPFR3ZW50eUZvb3RDb250YWluZXIgb2Zmc2V0PXtbMCwgIDgsIDE5XX0gLz4sXG4gIDxUd2VudHlGb290Q29udGFpbmVyIG9mZnNldD17WzgsIDE2LCAxOV19IC8+LFxuICA8VHdlbnR5Rm9vdENvbnRhaW5lciBvZmZzZXQ9e1s4LCAyNCwgMTldfSAvPixcblxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaGlyZEZsb29yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb25jcmV0ZVNsYWIgPSByZXF1aXJlKCcuL2NvbmNyZXRlU2xhYicpO1xuXG5jb25zdCBGb3VuZGF0aW9ucyA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPENvbmNyZXRlU2xhYiBvZmZzZXQ9eyBbIC0wLjUsIC0wLjUsIC0xXSB9IHdpZHRoPXsxMi41fSBkZXB0aD17MzN9IGhlaWdodD17MX0gLz4sXG4gIDxDb25jcmV0ZVNsYWIgb2Zmc2V0PXsgWyAgIDI0LCAtMC41LCAtMV0gfSB3aWR0aD17MjQuNH0gZGVwdGg9ezMzfSBoZWlnaHQ9ezF9IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvdW5kYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTdGVlbFNlY3Rpb24gPSByZXF1aXJlKCcuL3N0ZWVsU2VjdGlvbicpO1xuXG5jb25zdCBGcmFtZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gNDgsXG4gICAgICAgIGRlcHRoID0gMzIsXG4gICAgICAgIGhlaWdodCA9IDI5O1xuXG4gIHJldHVybiAoW1xuXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbICAgICAgLTAuNSwgICAgICAtMC41LCAwIF0gfSB3aWR0aD17MX0gZGVwdGg9ezF9IGhlaWdodD17aGVpZ2h0fSAvPixcbiAgICA8U3RlZWxTZWN0aW9uIG9mZnNldD17IFsgICAgICAtMC41LCBkZXB0aC0wLjUsIDAgXSB9IHdpZHRoPXsxfSBkZXB0aD17MX0gaGVpZ2h0PXtoZWlnaHR9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyB3aWR0aC0wLjUsIGRlcHRoLTAuNSwgMCBdIH0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9e2hlaWdodH0gLz4sXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIHdpZHRoLTAuNSwgICAgICAtMC41LCAwIF0gfSB3aWR0aD17MX0gZGVwdGg9ezF9IGhlaWdodD17aGVpZ2h0fSAvPixcblxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyAgICAgIC0wLjUsIC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17MX0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9ezF9IC8+LFxuICAgIDxTdGVlbFNlY3Rpb24gb2Zmc2V0PXsgWyB3aWR0aC0wLjUsIC0wLjUsIGhlaWdodC0xIF0gfSB3aWR0aD17MX0gZGVwdGg9e2RlcHRofSBoZWlnaHQ9ezF9IC8+LFxuXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIC0wLjUsICAgICAgLTAuNSwgaGVpZ2h0LTEgXSB9IHdpZHRoPXt3aWR0aH0gZGVwdGg9ezF9IGhlaWdodD17MX0gLz4sXG4gICAgPFN0ZWVsU2VjdGlvbiBvZmZzZXQ9eyBbIC0wLjUsIGRlcHRoLTAuNSwgaGVpZ2h0LTEgXSB9IHdpZHRoPXt3aWR0aH0gZGVwdGg9ezF9IGhlaWdodD17MX0gLz4sXG5cbiAgXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0dXJlQ3Vib2lkID0gcmVxdWlyZSgnLi4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyk7XG5cbmNvbnN0IFN0ZWVsU2VjdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgb2Zmc2V0LCB3aWR0aCwgZGVwdGgsIGhlaWdodCB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPFRleHR1cmVDdWJvaWQgaW1hZ2VOYW1lPVwicnVzdHlTdGVlbC5qcGdcIiBvZmZzZXQ9e29mZnNldH0gd2lkdGg9e3dpZHRofSBkZXB0aD17ZGVwdGh9IGhlaWdodD17aGVpZ2h0fSAvPlxuICAgICAgXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZWVsU2VjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IFNjZW5lID0gcmVxdWlyZSgnLi4vc2NlbmUnKSxcbiAgICAgIENvbG91ckN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL2N1Ym9pZC9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi9jdWJvaWQvdGV4dHVyZScpLFxuICAgICAgQ29sb3VyQ3lsaW5kZXIgPSByZXF1aXJlKCcuL2NvbW1vbi9jeWxpbmRlci9jb2xvdXInKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3Qgc2hhcGVzID0gKCkgPT4ge1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfT5cbiAgICAgIDxUZXh0dXJlQ3Vib2lkIG9mZnNldD17WyArMSwgKzEsICsxIF19IHdpZHRoPXsxfSBkZXB0aD17MX0gaGVpZ2h0PXsxfSBpbWFnZU5hbWU9XCJicmlja3MuanBnXCIgLz5cbiAgICAgIDxDb2xvdXJDdWJvaWQgb2Zmc2V0PXtbIC0xLCAtMSwgLTEgXX0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9ezF9IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4gICAgICA8Q29sb3VyQ3lsaW5kZXIgb2Zmc2V0PXtbIDAsIDAsIDAgXX0gd2lkdGg9ezF9IGRlcHRoPXsxfSBoZWlnaHQ9ezF9IGNvbG91cj17WyAwLCAxLCAwLCAxIF19IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0UiA9IDAuMCxcbiAgICAgIGRlZmF1bHRHID0gMC4wLFxuICAgICAgZGVmYXVsdEIgPSAwLjAsXG4gICAgICBkZWZhdWx0QSA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IGRlZmF1bHRSLCBnID0gZGVmYXVsdEcsIGIgPSBkZWZhdWx0QiwgYSA9IGRlZmF1bHRBKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJDb2xvdXI6IGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlcjogY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IH1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwID0gREVQVEhfVEVTVDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoRnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGZ1bmMgPSBMRVFVQUw7XG4gIFxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGZ1bmMpOyBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsZWFyRGVwdGg6IGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXI6IGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZzogZW5hYmxlRGVwdGhUZXN0aW5nLFxuICBlbmFibGVEZXB0aEZ1bmN0aW9uOiBlbmFibGVEZXB0aEZ1bmN0aW9uXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXg6IGFwcGx5TWF0cml4XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNb3VzZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vbW91c2VDb29yZGluYXRlcycpO1xuXG5sZXQgaG9yaXpvbnRhbE9mZnNldCA9IDUxMiwgLy8vXG4gICAgdmVydGljYWxPZmZzZXQgPSAzMjA7IC8vL1xuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRCb3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHggPSArKGV2ZW50LmNsaWVudFggLSBkb21FbGVtZW50Qm91bmRpbmdDbGllbnRSZWN0LmxlZnQgLSBob3Jpem9udGFsT2Zmc2V0KSwgIC8vL1xuICAgICAgICB5ID0gLShldmVudC5jbGllbnRZIC0gZG9tRWxlbWVudEJvdW5kaW5nQ2xpZW50UmVjdC50b3AgLSB2ZXJ0aWNhbE9mZnNldCksIC8vL1xuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoeCwgeSk7XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50OiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoQ2xhc3MsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gIGNvbnN0IHNoYWRlciA9IG5ldyBDbGFzcyhwcm9ncmFtLCB0aGlzKTsgIC8vL1xuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIHVzZVNoYWRlcihzaGFkZXIpIHtcbiAgY29uc3Qgc2hhZGVyUHJvZ3JhbSA9IHNoYWRlci5nZXRQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVNoYWRlcjogY3JlYXRlU2hhZGVyLFxuICB1c2VTaGFkZXI6IHVzZVNoYWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSkge1xuICBjb25zdCB7IFRFWFRVUkVfMkQsIFJHQkEsIFVOU0lHTkVEX0JZVEUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbGV2ZWwgPSAwLFxuICAgICAgICBpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG4gICAgICAgIGZvcm1hdCA9IFJHQkEsXG4gICAgICAgIHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuICAgICAgICB0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVNaXBtYXAoVEVYVFVSRV8yRCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpIHsgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZTogY3JlYXRlVGV4dHVyZSxcbiAgYWN0aXZhdGVUZXh0dXJlOiBhY3RpdmF0ZVRleHR1cmVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvb3JkaW5hdGVzMkQgPSByZXF1aXJlKCcuL2Nvb3JkaW5hdGVzMkQnKTtcblxuY2xhc3MgTW91c2VDb29yZGluYXRlcyBleHRlbmRzIENvb3JkaW5hdGVzMkQge31cblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUNvb3JkaW5hdGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50T3JFbGVtZW50cztcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudE9yRWxlbWVudHMgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRPckVsZW1lbnRzID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gZmxhdHRlbihndWFyYW50ZWUoZWxlbWVudE9yRWxlbWVudHMpKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICB6b29tID0gcmVxdWlyZSgnLi9zY2VuZS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL3NjZW5lL2FuZ2xlcycpLFxuICAgICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9zY2VuZS9vZmZzZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vc2NlbmUvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuL3NjZW5lL3BlcnNwZWN0aXZlJyksXG4gICAgICBDb2xvdXJTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlci9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVTaGFkZXIgPSByZXF1aXJlKCcuL3NoYWRlci90ZXh0dXJlJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vc2NlbmUvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJTaGFkZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVNoYWRlcjtcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBFdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIoZnVuY3Rpb24obW91c2VDb29yZGluYXRlcykge1xuICAgICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTsgIC8vL1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHhDb29yZGluYXRlID0gMCwgIC8vLy0xOCxcbiAgICAgICAgICB5Q29vcmRpbmF0ZSA9IDAsICAvLy8tMTYsXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gT2Zmc2V0LmZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlKHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLnRleHR1cmVTaGFkZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIGltYWdlTWFwIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBDb2xvdXJTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlU2hhZGVyID0gVGV4dHVyZVNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNjZW5lID0gbmV3IFNjZW5lKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVNoYWRlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIGNvbG91clNoYWRlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NlbmUucmVzaXplKCk7XG4gICAgICBzY2VuZS5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9O1xuXG4gICAgc2NlbmUucmVzaXplKCk7XG4gICAgc2NlbmUucmVuZGVyKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBzY2VuZS5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBbmdsZUNvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyksICAvLy9cbiAgICAgIE1vdXNlQ29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuL21vdXNlQ29vcmRpbmF0ZXMnKTtcblxuY29uc3QgSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyA9IG5ldyBNb3VzZUNvb3JkaW5hdGVzKDAsIDApLFxuICAgICAgSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyA9IG5ldyBBbmdsZUNvb3JkaW5hdGVzKDAsIE1hdGguUEkgLyAyKTtcblxuY2xhc3MgQW5nbGVzIHtcbiAgY29uc3RydWN0b3IobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgICB0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMgPSBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IGFuZ2xlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRYQXhpc0FuZ2xlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSAtdGhpcy5hbmdsZUNvb3JkaW5hdGVzLmdldFkoKTsgLy8vXG5cbiAgICByZXR1cm4geEF4aXNBbmdsZTtcbiAgfVxuXG4gIGdldFlBeGlzQW5nbGUoKSB7XG4gICAgY29uc3QgeUF4aXNBbmdsZSA9ICt0aGlzLmFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WCgpOyAvLy9cblxuICAgIHJldHVybiB5QXhpc0FuZ2xlO1xuICB9XG4gIFxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzID0gdGhpcy5hbmdsZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgdGhpcy5vZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFuZ2xlQ29vcmRpbmF0ZXMobW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQW5nbGVDb29yZGluYXRlcyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcy5taW51cyh0aGlzLm9mZnNldE1vdXNlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVDb29yZGluYXRlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcy5tdWx0aXBsaWVkQnkoTWF0aC5QSSAvIDE4MCk7ICAvLy9cblxuICAgIHRoaXMuYW5nbGVDb29yZGluYXRlcyA9IHRoaXMucHJldmlvdXNBbmdsZUNvb3JkaW5hdGVzLnBsdXMocmVsYXRpdmVBbmdsZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBtb3VzZURvd24gPSBmYWxzZSxcbiAgICAgICAgICBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzID0gSU5JVElBTF9NT1VTRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBhbmdsZUNvb3JkaW5hdGVzID0gSU5JVElBTF9BTkdMRV9DT09SRElOQVRFUyxcbiAgICAgICAgICBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMgPSBhbmdsZUNvb3JkaW5hdGVzLFxuICAgICAgICAgIGFuZ2xlcyA9IG5ldyBBbmdsZXMobW91c2VEb3duLCBvZmZzZXRNb3VzZUNvb3JkaW5hdGVzLCBhbmdsZUNvb3JkaW5hdGVzLCBwcmV2aW91c0FuZ2xlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIGFuZ2xlcztcbiAgfVxufVxuXG5jb25zdCBhbmdsZXMgPSBBbmdsZXMuZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmdsZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvb3JkaW5hdGVzMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG5cbiAgZ2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG4gIFxuICBzZXRYKHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICB9XG4gIFxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBtaW51cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cbiAgXG4gIG11bHRpcGxpZWRCeShzY2FsYXIpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54ICogc2NhbGFyLFxuICAgICAgICAgIHkgPSB0aGlzLnkgKiBzY2FsYXI7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBkaXZpZGVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAvIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55IC8gc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSB0aGlzLmdldFkoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt4fSwke3l9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29yZGluYXRlczJEO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb29yZGluYXRlczJEID0gcmVxdWlyZSgnLi9jb29yZGluYXRlczJEJyk7XG5cbmNsYXNzIE1vdXNlQ29vcmRpbmF0ZXMgZXh0ZW5kcyBDb29yZGluYXRlczJEIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb29yZGluYXRlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCc7XG5cbmNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICB0aGlzLmhhbmRsZXJzID0ge307XG5cbiAgICBjb25zdCBtb3VzZUV2ZW50VHlwZXMgPSBbXG4gICAgICAgICAgICBNT1VTRV9VUCxcbiAgICAgICAgICAgIE1PVVNFX0RPV04sXG4gICAgICAgICAgICBNT1VTRV9NT1ZFLFxuICAgICAgICAgICAgTU9VU0VfV0hFRUxcbiAgICAgICAgICBdO1xuXG4gICAgbW91c2VFdmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24obW91c2VFdmVudFR5cGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnNbbW91c2VFdmVudFR5cGVdID0gW107XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZXVwJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfVVAsIGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VFdmVudChNT1VTRV9ET1dOLCBldmVudCkgfS5iaW5kKHRoaXMpICk7XG4gICAgdGhpcy5hZGRFdmVudEhhbmRsZXIoY2FudmFzLCAnbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHsgdGhpcy5vbk1vdXNlRXZlbnQoTU9VU0VfTU9WRSwgZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICAgIHRoaXMuYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCkgeyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KGV2ZW50KSB9LmJpbmQodGhpcykgKTtcbiAgICB0aGlzLmFkZEV2ZW50SGFuZGxlcihjYW52YXMsICdET01Nb3VzZVNjcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KSB7IHRoaXMub25Nb3VzZVdoZWVsRXZlbnQoZXZlbnQpIH0uYmluZCh0aGlzKSApO1xuICB9XG5cbiAgYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9VUCwgbW91c2VVcEV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcihNT1VTRV9ET1dOLCBtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfTU9WRSwgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcikge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXIoTU9VU0VfV0hFRUwsIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXZlbnRIYW5kbGVyKGNhbnZhcywgdHlwZSwgaGFuZGxlcikge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VFdmVudChtb3VzZUV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50SGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW21vdXNlRXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5jYW52YXMubW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihtb3VzZUV2ZW50SGFuZGxlcikge1xuICAgICAgbW91c2VFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWxFdmVudChldmVudCkge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxFdmVudFR5cGUgPSBNT1VTRV9XSEVFTCxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbW91c2VXaGVlbEV2ZW50VHlwZV0sXG4gICAgICAgICAgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpKTsgLy8vXG5cbiAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpIHtcbiAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXIobW91c2VFdmVudFR5cGUsIG1vdXNlRXZlbnRIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VFdmVudEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1ttb3VzZUV2ZW50VHlwZV07XG5cbiAgICBtb3VzZUV2ZW50SGFuZGxlcnMucHVzaChtb3VzZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoY2FudmFzKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvdGF0aW9uKHJvdGF0aW9uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpO1xuXG4gICAgbWF0NC5pbnZlcnQobWF0cml4LCByb3RhdGlvbk1hdHJpeCk7ICAgIFxuICAgIG1hdDQudHJhbnNwb3NlKG1hdHJpeCwgbWF0cml4KTtcbiAgICBcbiAgICBjb25zdCBub3JtYWwgPSBuZXcgTm9ybWFsKG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WENvb3JkaW5hdGUgPSArMC4wLFxuICAgICAgZGVmYXVsdFlDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRaQ29vcmRpbmF0ZSA9ICswLjA7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21YQ29vcmRpbmF0ZUFuZFlDb29yZGluYXRlKHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSkgeyByZXR1cm4gT2Zmc2V0LmZyb21Db29yZGluYXRlcyh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIHVuZGVmaW5lZCk7IH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHhDb29yZGluYXRlID0gZGVmYXVsdFhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgPSBkZWZhdWx0WkNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBjb29yZGluYXRlVmVjdG9yID0gW1xuICAgICAgICAgICAgeENvb3JkaW5hdGUsXG4gICAgICAgICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHpDb29yZGluYXRlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpLFxuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQobWF0cml4KTtcblxuICAgIG1hdDQudHJhbnNsYXRlKG1hdHJpeCwgbWF0cml4LCBjb29yZGluYXRlVmVjdG9yKTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPZmZzZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdEZpZWxkT2ZWaWV3ID0gNDUgKiBNYXRoLlBJIC8gMTgwLFxuICAgICAgZGVmYXVsdFpOZWFyID0gMSxcbiAgICAgIGRlZmF1bHRaRmFyID0gMTAwMC4wO1xuXG5jbGFzcyBQZXJzcGVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IGRlZmF1bHRGaWVsZE9mVmlldyxcbiAgICAgICAgICB6TmVhciA9IGRlZmF1bHRaTmVhcixcbiAgICAgICAgICB6RmFyID0gZGVmYXVsdFpGYXIsXG4gICAgICAgICAgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICBwZXJzcGVjdGl2ZSA9IG5ldyBQZXJzcGVjdGl2ZShtYXRyaXgpO1xuXG4gICAgbWF0NC5wZXJzcGVjdGl2ZShtYXRyaXgsIGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gICAgcmV0dXJuIHBlcnNwZWN0aXZlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc3BlY3RpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgZGVmYXVsdFhDb29yZGluYXRlID0gKzAuMCxcbiAgICAgIGRlZmF1bHRZQ29vcmRpbmF0ZSA9ICswLjAsXG4gICAgICBkZWZhdWx0WkNvb3JkaW5hdGUgPSAtNi4wO1xuXG5jbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSkgeyByZXR1cm4gUG9zaXRpb24uZnJvbUNvb3JkaW5hdGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB6Q29vcmRpbmF0ZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHhDb29yZGluYXRlID0gZGVmYXVsdFhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSA9IGRlZmF1bHRZQ29vcmRpbmF0ZSwgekNvb3JkaW5hdGUgPSBkZWZhdWx0WkNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBjb29yZGluYXRlVmVjdG9yID0gW1xuICAgICAgICAgICAgeENvb3JkaW5hdGUsXG4gICAgICAgICAgICB5Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHpDb29yZGluYXRlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBtYXRyaXggPSBtYXQ0LmNyZWF0ZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKG1hdHJpeCk7XG5cbiAgICBtYXQ0LnRyYW5zbGF0ZShtYXRyaXgsIG1hdHJpeCwgY29vcmRpbmF0ZVZlY3Rvcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WEFuZ2xlID0gMC4wLFxuICAgICAgZGVmYXVsdFlBbmdsZSA9IDAuMCxcbiAgICAgIGRlZmF1bHRaQW5nbGUgPSAwLjAsXG4gICAgICB4QXhpc1ZlY3RvckFycmF5ID0gWzEsIDAsIDBdLFxuICAgICAgeUF4aXNWZWN0b3JBcnJheSA9IFswLCAxLCAwXSxcbiAgICAgIHpBeGlzVmVjdG9yQXJyYXkgPSBbMCwgMCwgMV07XG5cbmNsYXNzIFJvdGF0aW9uIHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gZGVmYXVsdFhBbmdsZSxcbiAgICAgICAgICB5QW5nbGUgPSBkZWZhdWx0WUFuZ2xlLFxuICAgICAgICAgIHpBbmdsZSA9IGRlZmF1bHRaQW5nbGUsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGUoeEFuZ2xlKSB7XG4gICAgY29uc3QgeUFuZ2xlID0gZGVmYXVsdFlBbmdsZSxcbiAgICAgICAgICB6QW5nbGUgPSBkZWZhdWx0WkFuZ2xlLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKTtcblxuICAgIHJldHVybiByb3RhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tWEFuZ2xlQW5kWUFuZ2xlKHhBbmdsZSwgeUFuZ2xlKSB7XG4gICAgY29uc3QgekFuZ2xlID0gZGVmYXVsdFpBbmdsZSxcbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSkge1xuICAgIGNvbnN0IHlBbmdsZSA9IGRlZmF1bHRZQW5nbGUsXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpO1xuXG4gICAgcmV0dXJuIHJvdGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSkge1xuICAgIGNvbnN0IG1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeEFuZ2xlLCB4QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgeUFuZ2xlLCB5QXhpc1ZlY3RvckFycmF5KTtcbiAgICBtYXQ0LnJvdGF0ZShtYXRyaXgsIG1hdHJpeCwgekFuZ2xlLCB6QXhpc1ZlY3RvckFycmF5KTtcblxuICAgIGNvbnN0IHJvdGF0aW9uID0gbmV3IFJvdGF0aW9uKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gcm90YXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3RhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSU5JVElBTF9ESVNUQU5DRSA9IDEwO1xuICAgIFxuY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSArPSBkZWx0YTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbmNvbnN0IHpvb20gPSBab29tLmZyb21Ob3RoaW5nKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gem9vbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3Qgb2Zmc2V0TWF0cml4TmFtZSA9ICd1T2Zmc2V0TWF0cml4JyxcbiAgICAgIHJvdGF0aW9uTWF0cml4TmFtZSA9ICd1Um90YXRpb25NYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICBwZXJzcGVjdGl2ZU1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIG5vcm1hbE1hdHJpeE5hbWUgPSAndU5vcm1hbE1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCcsXG4gICAgICBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSA9IGBcblxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgYW1iaWVudExpZ2h0ID0gdmVjMygwLjMsIDAuMywgMC4zKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDAuODUsIDAuOCwgMC43NSkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbE1hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSBtYXgoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpLCAwLjApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSBhbWJpZW50TGlnaHQgKyAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCxcbiAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uU291cmNlID0gYFxuXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldE1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwZXJzcGVjdGl2ZU1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cGVyc3BlY3RpdmVNYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25NYXRyaXhOYW1lfSAqICR7b2Zmc2V0TWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMztcblxuY2xhc3MgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0TWF0cml4TmFtZSk7XG4gICAgdGhpcy5yb3RhdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25NYXRyaXhOYW1lKTtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpO1xuICAgIHRoaXMucGVyc3BlY3RpdmVNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBlcnNwZWN0aXZlTWF0cml4TmFtZSk7XG4gICAgdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbE1hdHJpeE5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSk7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudmVydGV4UG9zaXRpb25EYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxEYXRhID0gW107XG4gICAgdGhpcy52ZXJ0ZXhJbmRleERhdGEgPSBbXTtcbiAgICB0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCA9IC0xOyAvLy9cbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4RGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4RGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG5cbiAgZ2V0T2Zmc2V0TWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldE1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzcGVjdGl2ZU1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbE1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbkRhdGEodmVydGV4UG9zaXRpb25EYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25EYXRhLCB2ZXJ0ZXhQb3NpdGlvbkRhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFsRGF0YSh2ZXJ0ZXhOb3JtYWxEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsRGF0YSwgdmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleERhdGEodmVydGV4SW5kZXhEYXRhKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggKyAxO1xuXG4gICAgdmVydGV4SW5kZXhEYXRhID0gdmVydGV4SW5kZXhEYXRhLm1hcChmdW5jdGlvbih2ZXJ0ZXhJbmRleCkge1xuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ICsgb2Zmc2V0O1xuICAgIH0pO1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhEYXRhLCB2ZXJ0ZXhJbmRleERhdGEpO1xuXG4gICAgdGhpcy5tYXhpbXVtVmVydGV4SW5kZXggPSBNYXRoLm1heCh0aGlzLm1heGltdW1WZXJ0ZXhJbmRleCwgLi4udmVydGV4SW5kZXhEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbEJ1ZmZlcihjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uQnVmZmVyKGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleEVsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsQnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsQnVmZmVyLCB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uQnVmZmVyLCB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7NH1cblxuICBiaW5kVmVydGV4SW5kZXhFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4RWxlbWVudEJ1ZmZlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICB7IFZFUlRFWF9TSEFERVIgfSA9IGNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCksXG4gICAgICAgIHsgRlJBR01FTlRfU0hBREVSIH0gPSBjb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuT2JqZWN0LmFzc2lnbihTaGFkZXIsIHtcbiAgY3JlYXRlVmVydGV4U2hhZGVyOiBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyOiBjcmVhdGVGcmFnbWVudFNoYWRlcixcbiAgY2FsY3VsYXRlTGlnaHRpbmdTb3VyY2U6IGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLFxuICBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZTogY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRlcjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICB7IENPTVBJTEVfU1RBVFVTIH0gPSBjb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSBjb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICBjb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IGNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLmApO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpO1xuXG5jb25zdCB7IGNyZWF0ZVZlcnRleFNoYWRlciwgY3JlYXRlRnJhZ21lbnRTaGFkZXIsIGNhbGN1bGF0ZUxpZ2h0aW5nU291cmNlLCBjYWxjdWxhdGVQb3NpdGlvblNvdXJjZSB9ID0gU2hhZGVyLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBtZXJnZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7Y2FsY3VsYXRlTGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtjYWxjdWxhdGVQb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGA7XG4gIFxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSBbXTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleENvbG91ckRhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHt9ICAvLy9cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IGNhbnZhcy5jcmVhdGVTaGFkZXIoQ29sb3VyU2hhZGVyLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcblxuICAgIHJldHVybiBjb2xvdXJTaGFkZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKTtcblxuY29uc3QgeyBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyLCBjYWxjdWxhdGVMaWdodGluZ1NvdXJjZSwgY2FsY3VsYXRlUG9zaXRpb25Tb3VyY2UgfSA9IFNoYWRlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY29uc3Qgc2FtcGxlck5hbWUgPSAndVNhbXBsZXInLFxuICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gJ2FUZXh0dXJlQ29vcmRpbmF0ZScsXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2NhbGN1bGF0ZUxpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7Y2FsY3VsYXRlUG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYDtcblxuY2xhc3MgVGV4dHVyZVNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhID0gW107XG4gIH1cblxuICBhZGRUZXh0dXJlQ29vcmRpbmF0ZURhdGEodGV4dHVyZUNvb3JkaW5hdGVEYXRhKSB7XG4gICAgYWRkKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlRGF0YSk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciwgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKSB7XG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UpO1xuICB9XG5cbiAgYWN0aXZhdGVUZXh0dXJlKGNhbnZhcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHsgVEVYVFVSRTAgfSA9IGNvbnRleHQsXG4gICAgICAgICAgdGFyZ2V0ID0gVEVYVFVSRTAsICAvLy9cbiAgICAgICAgICB1U2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IDA7XG5cbiAgICBjYW52YXMuYWN0aXZhdGVUZXh0dXJlKHRhcmdldCk7XG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgdVNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKFRleHR1cmVTaGFkZXIsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVTaGFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3Nhcnk7XG5cbmZ1bmN0aW9uIGRpdmlkZShkYXRhLCBkaXZpc29yKSB7XG4gIGNvbnN0IGFycmF5cyA9IFtdLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGFycmF5c0xlbmd0aCA9IGRhdGFMZW5ndGggLyBkaXZpc29yO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlzTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIG9mZnNldCA9IGkgKiBkaXZpc29yO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXZpc29yOyBqKyspIHtcbiAgICAgIGFycmF5W2pdID0gZGF0YVtqICsgb2Zmc2V0XTtcbiAgICB9XG5cbiAgICBhcnJheXNbaV0gPSBhcnJheTtcbiAgfVxuXG4gIHJldHVybiBhcnJheXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gYXJyYXlzLnJlZHVjZShmdW5jdGlvbihlbGVtZW50cywgYXJyYXkpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24oYXJyYXlVdGlsaXRpZXMsIHtcbiAgZGl2aWRlOiBkaXZpZGUsXG4gIGZsYXR0ZW46IGZsYXR0ZW4sXG4gIGd1YXJhbnRlZTogZ3VhcmFudGVlXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3I6IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Jcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZXBlYXRlZGx5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZShzb3VyY2UsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY2FsbGJhY2soaW1hZ2UpO1xuICB9O1xuXG4gIGltYWdlLnNyYyA9IHNvdXJjZTsgIC8vL1xufVxuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKHNvdXJjZXMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCwgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXG4gICAgICAgICAgc291cmNlczogc291cmNlc1xuICAgICAgICB9O1xuXG4gIHJlcGVhdGVkbHkocHJlbG9hZEltYWdlQ2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjYWxsYmFjayhpbWFnZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2U6IHByZWxvYWRJbWFnZSxcbiAgcHJlbG9hZEltYWdlczogcHJlbG9hZEltYWdlc1xufTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlQ2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpIHtcbiAgY29uc3QgeyBpbWFnZXMsIHNvdXJjZXMgfSA9IGNvbnRleHQsXG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdLFxuICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gIGltYWdlc1tpbmRleF0gPSBpbWFnZTtcblxuICBpbWFnZS5vbmxvYWQgPSBuZXh0OyAgLy8vXG5cbiAgaW1hZ2Uuc3JjID0gc291cmNlOyAgLy8vXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBpbWFnZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZScpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBwcmVsb2FkSW1hZ2UgfSA9IGltYWdlVXRpbGl0aWVzLFxuICAgICAgeyBpbWFnZU1hcEpTT04gfSA9IHJ1bnRpbWVDb25maWd1cmF0aW9uO1xuXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2spIHtcbiAgY29uc3Qgc291cmNlID0gJ2ltYWdlTWFwJzsgIC8vL1xuXG4gIHByZWxvYWRJbWFnZShzb3VyY2UsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZShpbWFnZU5hbWUpIHtcbiAgY29uc3QgaW1hZ2VOYW1lcyA9IFtcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZSxcbiAgICAgICAgICBpbWFnZU5hbWUsXG4gICAgICAgICAgaW1hZ2VOYW1lLFxuICAgICAgICAgIGltYWdlTmFtZVxuICAgICAgICBdLFxuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZURhdGEgPSB0ZXh0dXJlQ29vcmRpbmF0ZURhdGFGcm9tSW1hZ2VOYW1lcyhpbWFnZU5hbWVzKTtcbiAgXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzKGltYWdlTmFtZXMpIHtcbiAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzID0gaW1hZ2VOYW1lcy5yZWR1Y2UoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzLCB0ZXh0dXJlTmFtZSkge1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcy5jb25jYXQoaW1hZ2VNYXBKU09OW3RleHR1cmVOYW1lXSk7XG5cbiAgICAgICAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IGZsYXR0ZW4odGV4dHVyZUNvb3JkaW5hdGVzKTtcbiAgXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZURhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVsb2FkSW1hZ2VNYXA6IHByZWxvYWRJbWFnZU1hcCxcbiAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZTogdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZSxcbiAgdGV4dHVyZUNvb3JkaW5hdGVEYXRhRnJvbUltYWdlTmFtZXM6IHRleHR1cmVDb29yZGluYXRlRGF0YUZyb21JbWFnZU5hbWVzICBcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFkZChhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBhcnJheSA9IGFycmF5MS5tYXAoZnVuY3Rpb24odmFsdWUxLCBpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlMiA9IGFycmF5MltpbmRleF07XG5cbiAgICByZXR1cm4gdmFsdWUxICsgdmFsdWUyO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5ID0gYXJyYXkxLm1hcChmdW5jdGlvbih2YWx1ZTEsIGluZGV4KSB7XG4gICAgY29uc3QgdmFsdWUyID0gYXJyYXkyW2luZGV4XTtcblxuICAgIHJldHVybiB2YWx1ZTEgKiB2YWx1ZTI7XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFkZDogYWRkLFxuICBtdWx0aXBseTogbXVsdGlwbHlcbn07XG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IGFkam9pbnQ7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdO1xuXG4gICAgb3V0WzBdICA9ICAoYTExICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpKTtcbiAgICBvdXRbMV0gID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICAgIG91dFsyXSAgPSAgKGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKSk7XG4gICAgb3V0WzNdICA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbNF0gID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICAgIG91dFs1XSAgPSAgKGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gICAgb3V0WzZdICA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgICBvdXRbN10gID0gIChhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICAgIG91dFs4XSAgPSAgKGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSk7XG4gICAgb3V0WzldICA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgICBvdXRbMTBdID0gIChhMDAgKiAoYTExICogYTMzIC0gYTEzICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICAgIG91dFsxMV0gPSAtKGEwMCAqIChhMTEgKiBhMjMgLSBhMTMgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKSk7XG4gICAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgICBvdXRbMTNdID0gIChhMDAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkpO1xuICAgIG91dFsxNF0gPSAtKGEwMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKSk7XG4gICAgb3V0WzE1XSA9ICAoYTAwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzFdO1xuICAgIG91dFsyXSA9IGFbMl07XG4gICAgb3V0WzNdID0gYVszXTtcbiAgICBvdXRbNF0gPSBhWzRdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs2XTtcbiAgICBvdXRbN10gPSBhWzddO1xuICAgIG91dFs4XSA9IGFbOF07XG4gICAgb3V0WzldID0gYVs5XTtcbiAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgb3V0WzExXSA9IGFbMTFdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNvcHk7XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxuICpcbiAqIEByZXR1cm5zIHttYXQ0fSBhIG5ldyA0eDQgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGRldGVybWluYW50O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV0sXG5cbiAgICAgICAgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwLFxuICAgICAgICBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTAsXG4gICAgICAgIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMCxcbiAgICAgICAgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExLFxuICAgICAgICBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTEsXG4gICAgICAgIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMixcbiAgICAgICAgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwLFxuICAgICAgICBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzAsXG4gICAgICAgIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMCxcbiAgICAgICAgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxLFxuICAgICAgICBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzEsXG4gICAgICAgIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcbiAgICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZyb21RdWF0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICAgIHZhciB4ID0gcVswXSwgeSA9IHFbMV0sIHogPSBxWzJdLCB3ID0gcVszXSxcbiAgICAgICAgeDIgPSB4ICsgeCxcbiAgICAgICAgeTIgPSB5ICsgeSxcbiAgICAgICAgejIgPSB6ICsgeixcblxuICAgICAgICB4eCA9IHggKiB4MixcbiAgICAgICAgeXggPSB5ICogeDIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB6eCA9IHogKiB4MixcbiAgICAgICAgenkgPSB6ICogeTIsXG4gICAgICAgIHp6ID0geiAqIHoyLFxuICAgICAgICB3eCA9IHcgKiB4MixcbiAgICAgICAgd3kgPSB3ICogeTIsXG4gICAgICAgIHd6ID0gdyAqIHoyO1xuXG4gICAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gICAgb3V0WzFdID0geXggKyB3ejtcbiAgICBvdXRbMl0gPSB6eCAtIHd5O1xuICAgIG91dFszXSA9IDA7XG5cbiAgICBvdXRbNF0gPSB5eCAtIHd6O1xuICAgIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICAgIG91dFs2XSA9IHp5ICsgd3g7XG4gICAgb3V0WzddID0gMDtcblxuICAgIG91dFs4XSA9IHp4ICsgd3k7XG4gICAgb3V0WzldID0genkgLSB3eDtcbiAgICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gICAgb3V0WzExXSA9IDA7XG5cbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb247XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIHZhciBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ob3V0LCBxLCB2KSB7XG4gICAgLy8gUXVhdGVybmlvbiBtYXRoXG4gICAgdmFyIHggPSBxWzBdLCB5ID0gcVsxXSwgeiA9IHFbMl0sIHcgPSBxWzNdLFxuICAgICAgICB4MiA9IHggKyB4LFxuICAgICAgICB5MiA9IHkgKyB5LFxuICAgICAgICB6MiA9IHogKyB6LFxuXG4gICAgICAgIHh4ID0geCAqIHgyLFxuICAgICAgICB4eSA9IHggKiB5MixcbiAgICAgICAgeHogPSB4ICogejIsXG4gICAgICAgIHl5ID0geSAqIHkyLFxuICAgICAgICB5eiA9IHkgKiB6MixcbiAgICAgICAgenogPSB6ICogejIsXG4gICAgICAgIHd4ID0gdyAqIHgyLFxuICAgICAgICB3eSA9IHcgKiB5MixcbiAgICAgICAgd3ogPSB3ICogejI7XG5cbiAgICBvdXRbMF0gPSAxIC0gKHl5ICsgenopO1xuICAgIG91dFsxXSA9IHh5ICsgd3o7XG4gICAgb3V0WzJdID0geHogLSB3eTtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IHh5IC0gd3o7XG4gICAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgICBvdXRbNl0gPSB5eiArIHd4O1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0geHogKyB3eTtcbiAgICBvdXRbOV0gPSB5eiAtIHd4O1xuICAgIG91dFsxMF0gPSAxIC0gKHh4ICsgeXkpO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSB2WzBdO1xuICAgIG91dFsxM10gPSB2WzFdO1xuICAgIG91dFsxNF0gPSB2WzJdO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIFxuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnJ1c3R1bTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gICAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpLFxuICAgICAgICB0YiA9IDEgLyAodG9wIC0gYm90dG9tKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IChuZWFyICogMikgKiBybDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IChuZWFyICogMikgKiB0YjtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gKHJpZ2h0ICsgbGVmdCkgKiBybDtcbiAgICBvdXRbOV0gPSAodG9wICsgYm90dG9tKSAqIHRiO1xuICAgIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTFdID0gLTE7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IChmYXIgKiBuZWFyICogMikgKiBuZjtcbiAgICBvdXRbMTVdID0gMDtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG4vKipcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogcmVxdWlyZSgnLi9jcmVhdGUnKVxuICAsIGNsb25lOiByZXF1aXJlKCcuL2Nsb25lJylcbiAgLCBjb3B5OiByZXF1aXJlKCcuL2NvcHknKVxuICAsIGlkZW50aXR5OiByZXF1aXJlKCcuL2lkZW50aXR5JylcbiAgLCB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vdHJhbnNwb3NlJylcbiAgLCBpbnZlcnQ6IHJlcXVpcmUoJy4vaW52ZXJ0JylcbiAgLCBhZGpvaW50OiByZXF1aXJlKCcuL2Fkam9pbnQnKVxuICAsIGRldGVybWluYW50OiByZXF1aXJlKCcuL2RldGVybWluYW50JylcbiAgLCBtdWx0aXBseTogcmVxdWlyZSgnLi9tdWx0aXBseScpXG4gICwgdHJhbnNsYXRlOiByZXF1aXJlKCcuL3RyYW5zbGF0ZScpXG4gICwgc2NhbGU6IHJlcXVpcmUoJy4vc2NhbGUnKVxuICAsIHJvdGF0ZTogcmVxdWlyZSgnLi9yb3RhdGUnKVxuICAsIHJvdGF0ZVg6IHJlcXVpcmUoJy4vcm90YXRlWCcpXG4gICwgcm90YXRlWTogcmVxdWlyZSgnLi9yb3RhdGVZJylcbiAgLCByb3RhdGVaOiByZXF1aXJlKCcuL3JvdGF0ZVonKVxuICAsIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uOiByZXF1aXJlKCcuL2Zyb21Sb3RhdGlvblRyYW5zbGF0aW9uJylcbiAgLCBmcm9tUXVhdDogcmVxdWlyZSgnLi9mcm9tUXVhdCcpXG4gICwgZnJ1c3R1bTogcmVxdWlyZSgnLi9mcnVzdHVtJylcbiAgLCBwZXJzcGVjdGl2ZTogcmVxdWlyZSgnLi9wZXJzcGVjdGl2ZScpXG4gICwgcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXc6IHJlcXVpcmUoJy4vcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcnKVxuICAsIG9ydGhvOiByZXF1aXJlKCcuL29ydGhvJylcbiAgLCBsb29rQXQ6IHJlcXVpcmUoJy4vbG9va0F0JylcbiAgLCBzdHI6IHJlcXVpcmUoJy4vc3RyJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGludmVydDtcblxuLyoqXG4gKiBJbnZlcnRzIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICAgIHZhciBhMDAgPSBhWzBdLCBhMDEgPSBhWzFdLCBhMDIgPSBhWzJdLCBhMDMgPSBhWzNdLFxuICAgICAgICBhMTAgPSBhWzRdLCBhMTEgPSBhWzVdLCBhMTIgPSBhWzZdLCBhMTMgPSBhWzddLFxuICAgICAgICBhMjAgPSBhWzhdLCBhMjEgPSBhWzldLCBhMjIgPSBhWzEwXSwgYTIzID0gYVsxMV0sXG4gICAgICAgIGEzMCA9IGFbMTJdLCBhMzEgPSBhWzEzXSwgYTMyID0gYVsxNF0sIGEzMyA9IGFbMTVdLFxuXG4gICAgICAgIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMCxcbiAgICAgICAgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwLFxuICAgICAgICBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTAsXG4gICAgICAgIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMSxcbiAgICAgICAgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExLFxuICAgICAgICBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTIsXG4gICAgICAgIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMCxcbiAgICAgICAgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwLFxuICAgICAgICBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzAsXG4gICAgICAgIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMSxcbiAgICAgICAgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxLFxuICAgICAgICBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzIsXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuICAgICAgICBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgICBpZiAoIWRldCkgeyBcbiAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgIH1cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gICAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICAgIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gICAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICAgIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcblxuICAgIHJldHVybiBvdXQ7XG59OyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb29rQXQ7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge3ZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXG4gKiBAcGFyYW0ge3ZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7dmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBsb29rQXQob3V0LCBleWUsIGNlbnRlciwgdXApIHtcbiAgICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuLFxuICAgICAgICBleWV4ID0gZXllWzBdLFxuICAgICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgICB1cHggPSB1cFswXSxcbiAgICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICAgIHVweiA9IHVwWzJdLFxuICAgICAgICBjZW50ZXJ4ID0gY2VudGVyWzBdLFxuICAgICAgICBjZW50ZXJ5ID0gY2VudGVyWzFdLFxuICAgICAgICBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gICAgaWYgKE1hdGguYWJzKGV5ZXggLSBjZW50ZXJ4KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IDAuMDAwMDAxICYmXG4gICAgICAgIE1hdGguYWJzKGV5ZXogLSBjZW50ZXJ6KSA8IDAuMDAwMDAxKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICAgIH1cblxuICAgIHowID0gZXlleCAtIGNlbnRlcng7XG4gICAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgICB6MiA9IGV5ZXogLSBjZW50ZXJ6O1xuXG4gICAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICAgIHowICo9IGxlbjtcbiAgICB6MSAqPSBsZW47XG4gICAgejIgKj0gbGVuO1xuXG4gICAgeDAgPSB1cHkgKiB6MiAtIHVweiAqIHoxO1xuICAgIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gICAgbGVuID0gTWF0aC5zcXJ0KHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeDAgPSAwO1xuICAgICAgICB4MSA9IDA7XG4gICAgICAgIHgyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB4MCAqPSBsZW47XG4gICAgICAgIHgxICo9IGxlbjtcbiAgICAgICAgeDIgKj0gbGVuO1xuICAgIH1cblxuICAgIHkwID0gejEgKiB4MiAtIHoyICogeDE7XG4gICAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgICB5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuXG4gICAgbGVuID0gTWF0aC5zcXJ0KHkwICogeTAgKyB5MSAqIHkxICsgeTIgKiB5Mik7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgICAgeTAgPSAwO1xuICAgICAgICB5MSA9IDA7XG4gICAgICAgIHkyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSAxIC8gbGVuO1xuICAgICAgICB5MCAqPSBsZW47XG4gICAgICAgIHkxICo9IGxlbjtcbiAgICAgICAgeTIgKj0gbGVuO1xuICAgIH1cblxuICAgIG91dFswXSA9IHgwO1xuICAgIG91dFsxXSA9IHkwO1xuICAgIG91dFsyXSA9IHowO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0geDE7XG4gICAgb3V0WzVdID0geTE7XG4gICAgb3V0WzZdID0gejE7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSB4MjtcbiAgICBvdXRbOV0gPSB5MjtcbiAgICBvdXRbMTBdID0gejI7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IC0oeDAgKiBleWV4ICsgeDEgKiBleWV5ICsgeDIgKiBleWV6KTtcbiAgICBvdXRbMTNdID0gLSh5MCAqIGV5ZXggKyB5MSAqIGV5ZXkgKyB5MiAqIGV5ZXopO1xuICAgIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gICAgb3V0WzE1XSA9IDE7XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgICB2YXIgYjAgID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTsgIFxuICAgIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzJdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls0XTsgYjEgPSBiWzVdOyBiMiA9IGJbNl07IGIzID0gYls3XTtcbiAgICBvdXRbNF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFs2XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbN10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzldID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzExXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMTNdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxNF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9ydGhvO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIG9ydGhvKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCksXG4gICAgICAgIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApLFxuICAgICAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzBdID0gLTIgKiBscjtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IC0yICogYnQ7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMiAqIG5mO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICAgIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICAgIG91dFsxNF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHBlcnNwZWN0aXZlO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHBlcnNwZWN0aXZlIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBBc3BlY3QgcmF0aW8uIHR5cGljYWxseSB2aWV3cG9ydCB3aWR0aC9oZWlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKG91dCwgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICAgIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSBmO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxMV0gPSAtMTtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gKDIgKiBmYXIgKiBuZWFyKSAqIG5mO1xuICAgIG91dFsxNV0gPSAwO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cbiAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyBwcm9qZWN0aW9uIG1hdHJpY2VzIHRvIGJlIHVzZWRcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSS8xODAuMCksXG4gICAgICAgIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkvMTgwLjApLFxuICAgICAgICByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJLzE4MC4wKSxcbiAgICAgICAgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbiksXG4gICAgICAgIHlTY2FsZSA9IDIuMCAvICh1cFRhbiArIGRvd25UYW4pO1xuXG4gICAgb3V0WzBdID0geFNjYWxlO1xuICAgIG91dFsxXSA9IDAuMDtcbiAgICBvdXRbMl0gPSAwLjA7XG4gICAgb3V0WzNdID0gMC4wO1xuICAgIG91dFs0XSA9IDAuMDtcbiAgICBvdXRbNV0gPSB5U2NhbGU7XG4gICAgb3V0WzZdID0gMC4wO1xuICAgIG91dFs3XSA9IDAuMDtcbiAgICBvdXRbOF0gPSAtKChsZWZ0VGFuIC0gcmlnaHRUYW4pICogeFNjYWxlICogMC41KTtcbiAgICBvdXRbOV0gPSAoKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjUpO1xuICAgIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzExXSA9IC0xLjA7XG4gICAgb3V0WzEyXSA9IDAuMDtcbiAgICBvdXRbMTNdID0gMC4wO1xuICAgIG91dFsxNF0gPSAoZmFyICogbmVhcikgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzE1XSA9IDAuMDtcbiAgICByZXR1cm4gb3V0O1xufVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGVcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkLCBheGlzKSB7XG4gICAgdmFyIHggPSBheGlzWzBdLCB5ID0gYXhpc1sxXSwgeiA9IGF4aXNbMl0sXG4gICAgICAgIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopLFxuICAgICAgICBzLCBjLCB0LFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzLFxuICAgICAgICBiMDAsIGIwMSwgYjAyLFxuICAgICAgICBiMTAsIGIxMSwgYjEyLFxuICAgICAgICBiMjAsIGIyMSwgYjIyO1xuXG4gICAgaWYgKE1hdGguYWJzKGxlbikgPCAwLjAwMDAwMSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIFxuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeCAqPSBsZW47XG4gICAgeSAqPSBsZW47XG4gICAgeiAqPSBsZW47XG5cbiAgICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgICB0ID0gMSAtIGM7XG5cbiAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgLy8gQ29uc3RydWN0IHRoZSBlbGVtZW50cyBvZiB0aGUgcm90YXRpb24gbWF0cml4XG4gICAgYjAwID0geCAqIHggKiB0ICsgYzsgYjAxID0geSAqIHggKiB0ICsgeiAqIHM7IGIwMiA9IHogKiB4ICogdCAtIHkgKiBzO1xuICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzOyBiMTEgPSB5ICogeSAqIHQgKyBjOyBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogczsgYjIxID0geSAqIHogKiB0IC0geCAqIHM7IGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuICAgIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgICBvdXRbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgb3V0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgICBvdXRbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgb3V0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyO1xuICAgIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICBvdXRbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTI7XG4gICAgb3V0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICBvdXRbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyO1xuICAgIG91dFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjI7XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByb3RhdGVYO1xuXG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICAgIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgICAgYyA9IE1hdGguY29zKHJhZCksXG4gICAgICAgIGExMCA9IGFbNF0sXG4gICAgICAgIGExMSA9IGFbNV0sXG4gICAgICAgIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sXG4gICAgICAgIGEyMSA9IGFbOV0sXG4gICAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgICAgICBvdXRbMF0gID0gYVswXTtcbiAgICAgICAgb3V0WzFdICA9IGFbMV07XG4gICAgICAgIG91dFsyXSAgPSBhWzJdO1xuICAgICAgICBvdXRbM10gID0gYVszXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjICsgYTIyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgICBvdXRbOV0gPSBhMjEgKiBjIC0gYTExICogcztcbiAgICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gICAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcm90YXRlWTtcblxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhyYWQpLFxuICAgICAgICBhMDAgPSBhWzBdLFxuICAgICAgICBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdLFxuICAgICAgICBhMjAgPSBhWzhdLFxuICAgICAgICBhMjEgPSBhWzldLFxuICAgICAgICBhMjIgPSBhWzEwXSxcbiAgICAgICAgYTIzID0gYVsxMV07XG5cbiAgICBpZiAoYSAhPT0gb3V0KSB7IC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICAgICAgb3V0WzRdICA9IGFbNF07XG4gICAgICAgIG91dFs1XSAgPSBhWzVdO1xuICAgICAgICBvdXRbNl0gID0gYVs2XTtcbiAgICAgICAgb3V0WzddICA9IGFbN107XG4gICAgICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG4gICAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gICAgb3V0WzFdID0gYTAxICogYyAtIGEyMSAqIHM7XG4gICAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gICAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gICAgb3V0WzhdID0gYTAwICogcyArIGEyMCAqIGM7XG4gICAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gICAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICAgIG91dFsxMV0gPSBhMDMgKiBzICsgYTIzICogYztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJvdGF0ZVo7XG5cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gICAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgICBjID0gTWF0aC5jb3MocmFkKSxcbiAgICAgICAgYTAwID0gYVswXSxcbiAgICAgICAgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSxcbiAgICAgICAgYTExID0gYVs1XSxcbiAgICAgICAgYTEyID0gYVs2XSxcbiAgICAgICAgYTEzID0gYVs3XTtcblxuICAgIGlmIChhICE9PSBvdXQpIHsgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICAgICAgb3V0WzhdICA9IGFbOF07XG4gICAgICAgIG91dFs5XSAgPSBhWzldO1xuICAgICAgICBvdXRbMTBdID0gYVsxMF07XG4gICAgICAgIG91dFsxMV0gPSBhWzExXTtcbiAgICAgICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cbiAgICBvdXRbMF0gPSBhMDAgKiBjICsgYTEwICogcztcbiAgICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgICBvdXRbMl0gPSBhMDIgKiBjICsgYTEyICogcztcbiAgICBvdXRbM10gPSBhMDMgKiBjICsgYTEzICogcztcbiAgICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgICBvdXRbNV0gPSBhMTEgKiBjIC0gYTAxICogcztcbiAgICBvdXRbNl0gPSBhMTIgKiBjIC0gYTAyICogcztcbiAgICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjM1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdO1xuXG4gICAgb3V0WzBdID0gYVswXSAqIHg7XG4gICAgb3V0WzFdID0gYVsxXSAqIHg7XG4gICAgb3V0WzJdID0gYVsyXSAqIHg7XG4gICAgb3V0WzNdID0gYVszXSAqIHg7XG4gICAgb3V0WzRdID0gYVs0XSAqIHk7XG4gICAgb3V0WzVdID0gYVs1XSAqIHk7XG4gICAgb3V0WzZdID0gYVs2XSAqIHk7XG4gICAgb3V0WzddID0gYVs3XSAqIHk7XG4gICAgb3V0WzhdID0gYVs4XSAqIHo7XG4gICAgb3V0WzldID0gYVs5XSAqIHo7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHN0cjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gbWF0IG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHN0cihhKSB7XG4gICAgcmV0dXJuICdtYXQ0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArXG4gICAgICAgICAgICAgICAgICAgIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnLCAnICtcbiAgICAgICAgICAgICAgICAgICAgYVs4XSArICcsICcgKyBhWzldICsgJywgJyArIGFbMTBdICsgJywgJyArIGFbMTFdICsgJywgJyArIFxuICAgICAgICAgICAgICAgICAgICBhWzEyXSArICcsICcgKyBhWzEzXSArICcsICcgKyBhWzE0XSArICcsICcgKyBhWzE1XSArICcpJztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cmFuc2xhdGU7XG5cbi8qKlxuICogVHJhbnNsYXRlIGEgbWF0NCBieSB0aGUgZ2l2ZW4gdmVjdG9yXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHRyYW5zbGF0ZVxuICogQHBhcmFtIHt2ZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdLFxuICAgICAgICBhMDAsIGEwMSwgYTAyLCBhMDMsXG4gICAgICAgIGExMCwgYTExLCBhMTIsIGExMyxcbiAgICAgICAgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gICAgaWYgKGEgPT09IG91dCkge1xuICAgICAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGFbMl0gKiB4ICsgYVs2XSAqIHkgKyBhWzEwXSAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhMDAgPSBhWzBdOyBhMDEgPSBhWzFdOyBhMDIgPSBhWzJdOyBhMDMgPSBhWzNdO1xuICAgICAgICBhMTAgPSBhWzRdOyBhMTEgPSBhWzVdOyBhMTIgPSBhWzZdOyBhMTMgPSBhWzddO1xuICAgICAgICBhMjAgPSBhWzhdOyBhMjEgPSBhWzldOyBhMjIgPSBhWzEwXTsgYTIzID0gYVsxMV07XG5cbiAgICAgICAgb3V0WzBdID0gYTAwOyBvdXRbMV0gPSBhMDE7IG91dFsyXSA9IGEwMjsgb3V0WzNdID0gYTAzO1xuICAgICAgICBvdXRbNF0gPSBhMTA7IG91dFs1XSA9IGExMTsgb3V0WzZdID0gYTEyOyBvdXRbN10gPSBhMTM7XG4gICAgICAgIG91dFs4XSA9IGEyMDsgb3V0WzldID0gYTIxOyBvdXRbMTBdID0gYTIyOyBvdXRbMTFdID0gYTIzO1xuXG4gICAgICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGEwMSAqIHggKyBhMTEgKiB5ICsgYTIxICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zcG9zZTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gICAgaWYgKG91dCA9PT0gYSkge1xuICAgICAgICB2YXIgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgICAgIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgICAgICBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYTAxO1xuICAgICAgICBvdXRbNl0gPSBhWzldO1xuICAgICAgICBvdXRbN10gPSBhWzEzXTtcbiAgICAgICAgb3V0WzhdID0gYTAyO1xuICAgICAgICBvdXRbOV0gPSBhMTI7XG4gICAgICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICAgICAgb3V0WzEyXSA9IGEwMztcbiAgICAgICAgb3V0WzEzXSA9IGExMztcbiAgICAgICAgb3V0WzE0XSA9IGEyMztcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRbMF0gPSBhWzBdO1xuICAgICAgICBvdXRbMV0gPSBhWzRdO1xuICAgICAgICBvdXRbMl0gPSBhWzhdO1xuICAgICAgICBvdXRbM10gPSBhWzEyXTtcbiAgICAgICAgb3V0WzRdID0gYVsxXTtcbiAgICAgICAgb3V0WzVdID0gYVs1XTtcbiAgICAgICAgb3V0WzZdID0gYVs5XTtcbiAgICAgICAgb3V0WzddID0gYVsxM107XG4gICAgICAgIG91dFs4XSA9IGFbMl07XG4gICAgICAgIG91dFs5XSA9IGFbNl07XG4gICAgICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICAgICAgb3V0WzExXSA9IGFbMTRdO1xuICAgICAgICBvdXRbMTJdID0gYVszXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbN107XG4gICAgICAgIG91dFsxNF0gPSBhWzExXTtcbiAgICAgICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gb3V0O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIGZpbGVTeXN0ZW1VdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9maWxlU3lzdGVtJyksXG4gIGFzeW5jaHJvbm91c1V0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FzeW5jaHJvbm91cycpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5mdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5mdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5mdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gYXJyYXkyLmxlbmd0aCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjbGVhcjogY2xlYXIsXG4gIGNvcHk6IGNvcHksXG4gIG1lcmdlOiBtZXJnZSxcbiAgc3BsaWNlOiBzcGxpY2UsXG4gIHJlcGxhY2U6IHJlcGxhY2UsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBmaW5kOiBmaW5kLFxuICBwcnVuZTogcHJ1bmUsXG4gIHBhdGNoOiBwYXRjaCxcbiAgYXVnbWVudDogYXVnbWVudCxcbiAgc2VwYXJhdGU6IHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWU6IGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZTogYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpIHtcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoYWJzb2x1dGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZmlsZUV4aXN0cyhhYnNvbHV0ZUZpbGVQYXRoKSB7XG4gIGxldCBmaWxlRXhpc3RzID0gZmFsc2U7XG4gIFxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoLCAvLy9cbiAgICAgICAgZW50cnlFeGlzdHMgPSBlbnRyeUV4aXN0cyhhYnNvbHV0ZVBhdGgpO1xuICBcbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlGaWxlID0gaXNFbnRyeUZpbGUoYWJzb2x1dGVQYXRoKTtcbiAgICBcbiAgICBpZiAoZW50cnlGaWxlKSB7XG4gICAgICBmaWxlRXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBmaWxlRXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RvcnlFeGlzdHMoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGxldCBkaXJlY3RvcnlFeGlzdHMgPSBmYWxzZTtcblxuICBjb25zdCBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZURpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG5cbiAgaWYgKGVudHJ5RXhpc3RzKSB7XG4gICAgY29uc3QgZW50cnlEaXJlY3RvcnkgPSBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCk7XG5cbiAgICBpZiAoZW50cnlEaXJlY3RvcnkpIHtcbiAgICAgIGRpcmVjdG9yeUV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpcmVjdG9yeUV4aXN0cztcbn1cblxuZnVuY3Rpb24gaXNFbnRyeURpcmVjdG9yeShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpO1xuXG4gIHJldHVybiBlbnRyeURpcmVjdG9yeTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcnlFbXB0eShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgc3ViRW50cnlOYW1lc0xlbmd0aCA9IHN1YkVudHJ5TmFtZXMubGVuZ3RoLFxuICAgICAgICBkaXJlY3RvcnlFbXB0eSA9IChzdWJFbnRyeU5hbWVzTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gZGlyZWN0b3J5RW1wdHk7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoYWJzb2x1dGVEaXJlY3RvcnlQYXRoKSB7XG4gIGNvbnN0IHN1YkVudHJ5TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpO1xuXG4gIHJldHVybiBzdWJFbnRyeU5hbWVzO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3cml0ZUZpbGUoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCkge1xuICBmcy53cml0ZUZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnlFeGlzdHM6IGVudHJ5RXhpc3RzLFxuICBmaWxlRXhpc3RzOiBmaWxlRXhpc3RzLFxuICBpc0VudHJ5RmlsZTogaXNFbnRyeUZpbGUsXG4gIGRpcmVjdG9yeUV4aXN0czogZGlyZWN0b3J5RXhpc3RzLFxuICBpc0VudHJ5RGlyZWN0b3J5OiBpc0VudHJ5RGlyZWN0b3J5LFxuICBpc0RpcmVjdG9yeUVtcHR5OiBpc0RpcmVjdG9yeUVtcHR5LFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICByZWFkRmlsZTogcmVhZEZpbGUsXG4gIHdyaXRlRmlsZTogd3JpdGVGaWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheSA9IHJlcXVpcmUoJy4vYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gPSBhcnJheTtcblxuZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlxcLnsxLDJ9XFwvLyksXG4gICAgICAgIHBhdGhSZWxhdGl2ZVBhdGggPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9IGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9ICFwYXRoUmVsYXRpdmVQYXRoOyAvLy9cblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZnVuY3Rpb24gaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUocGF0aCkge1xuICBjb25zdCBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKC9eW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgodG9wbW9zdERpcmVjdG9yeU5hbWUsIHBhdGgpIHtcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSB0b3Btb3N0RGlyZWN0b3J5TmFtZS5yZXBsYWNlKC9cXC8kLywgJycpOyAvLy9cblxuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0RGlyZWN0b3J5TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHBvc2l0aW9uID0gcGF0aC5zZWFyY2gocmVnRXhwKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJbkZpbGVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gY29tYmluZVBhdGhzKGRpcmVjdG9yeVBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgYWJzb2x1dGVQYXRoID0gbnVsbDtcblxuICBjb25zdCBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyA9IGRpcmVjdG9yeVBhdGguc3BsaXQoJy8nKSxcbiAgICAgICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoJy8nKTtcblxuICBsZXQgZmlyc3RSZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lID0gZmlyc3QocmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMpLFxuICAgICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWU7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4nKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9PT0gJy4uJykgJiYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZXMuc2hpZnQoKTtcbiAgICBkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgICBsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSA9IGxhc3QoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyA9IFtdLmNvbmNhdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcykuY29uY2F0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKTtcblxuICAgIGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLmpvaW4oJy8nKTtcbiAgfVxuXG4gIHJldHVybiBhYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aDEsIHBhdGgyKSB7XG4gIHBhdGgxID0gcGF0aDEucmVwbGFjZSgvXFwvJC8sICcnKTsgIC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkUGF0aCA9IGAke3BhdGgxfS8ke3BhdGgyfWA7XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uK1xcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgZGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gZGlyZWN0b3J5UGF0aDtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goLyheLispXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNQYXRoUmVsYXRpdmVQYXRoOiBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aDogaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTogaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUsXG4gIGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGg6IGlzVG9wbW9zdERpcmVjdG9yeU5hbWVDb250YWluZWRJblBhdGgsXG4gIGNvbWJpbmVQYXRoczogY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzOiBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoOiBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iXX0=
