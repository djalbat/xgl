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

var Element = require('../element');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, tilt) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;

    _this.tilt = tilt;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getPan',
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: 'getTilt',
    value: function getTilt() {
      return this.tilt;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.fromProperties.apply(Element, [Class, properties].concat(remainingArguments));
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;

},{"../element":4}],6:[function(require,module,exports){
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
    defaultInitialOffsets = zero3(),
    defaultInitialDistance = 5;

var DesignCamera = function (_Camera) {
  _inherits(DesignCamera, _Camera);

  function DesignCamera(pan, tilt, zoom) {
    _classCallCheck(this, DesignCamera);

    var _this = _possibleConstructorReturn(this, (DesignCamera.__proto__ || Object.getPrototypeOf(DesignCamera)).call(this, pan, tilt));

    _this.zoom = zoom;
    return _this;
  }

  _createClass(DesignCamera, [{
    key: 'update',
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {
        ///
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialOf = properties.initialOffsets,
          initialOffsets = _properties$initialOf === undefined ? defaultInitialOffsets : _properties$initialOf,
          _properties$initialDi = properties.initialDistance,
          initialDistance = _properties$initialDi === undefined ? defaultInitialDistance : _properties$initialDi,
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

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../miscellaneous/zoom":36,"../../utilities/matrix":83,"../camera":5}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
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

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: 'update',
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {
        ///
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
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

},{"../../maths/vector":29,"../../miscellaneous/pan":33,"../../miscellaneous/tilt":34,"../../utilities/matrix":83,"../camera":5}],8:[function(require,module,exports){
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

var Part = require('../element/part'),
    Camera = require('../element/camera'),
    Element = require('../element'),
    UserInput = require('../miscellaneous/userInput'),
    vectorMaths = require('../maths/vector');

var asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach,
    zero2 = vectorMaths.zero2;

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(parts, camera, canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.parts = parts;

    _this.camera = camera;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'userInputHandler',
    value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this),
          callback = render; ///

      this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
    }
  }, {
    key: 'windowResizeHandler',
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
    key: 'render',
    value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.parts.forEach(function (part) {
        return part.render(_this2.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var userInput = UserInput.fromNothing(canvas),
          userInputHandler = this.userInputHandler.bind(this),
          windowResizeHandler = this.windowResizeHandler.bind(this);

      forEach(this.parts, function (part, next, done, context, index) {
        var partsLength = _this3.parts.length,
            progress = (index + 1) / partsLength;

        part.initialise(canvas);

        defer(function () {
          update && update(progress); ///

          next();
        });
      }, function () {
        _this3.windowResizeHandler(); ///

        done && done(); ///
      });

      window.onresize = windowResizeHandler;

      userInput.addUserInputHandler(userInputHandler);
    }
  }], [{
    key: 'fromProperties',
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

},{"../element":4,"../element/camera":5,"../element/part":13,"../maths/vector":29,"../miscellaneous/userInput":35,"necessary":93}],15:[function(require,module,exports){
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
    DesignCamera = xgl.DesignCamera;


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
    React.createElement(DesignCamera, null)
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
    GamingCamera = xgl.GamingCamera;


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
      React.createElement(GamingCamera, null)
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

var SHIFT_KEY_CODE = constants.SHIFT_KEY_CODE;

var KeyEvents = function () {
  function KeyEvents(handlers, shiftKeyDown) {
    _classCallCheck(this, KeyEvents);

    this.handlers = handlers;
    this.shiftKeyDown = shiftKeyDown;
  }

  _createClass(KeyEvents, [{
    key: 'isShiftKeyDown',
    value: function isShiftKeyDown() {
      return this.shiftKeyDown;
    }
  }, {
    key: 'keyUpEventListener',
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
    key: 'keyDownEventListener',
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
    key: 'addShiftKeyHandler',
    value: function addShiftKeyHandler(shiftKeyHandler) {
      var handler = shiftKeyHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var documentDOMElement = document.documentElement,
          ///
      keyUpEventListener = this.keyUpEventListener.bind(this),
          keyDownEventListener = this.keyDownEventListener.bind(this);

      documentDOMElement.addEventListener('keyup', keyUpEventListener);

      documentDOMElement.addEventListener('keydown', keyDownEventListener);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlers = [],
          shiftKeyDown = false,
          ///
      keyEvents = new KeyEvents(handlers, shiftKeyDown);

      keyEvents.initialise(canvas);

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

var constants = require('../constants');

var MOUSE_UP = constants.MOUSE_UP,
    MOUSE_DOWN = constants.MOUSE_DOWN,
    MOUSE_MOVE = constants.MOUSE_MOVE,
    MOUSE_WHEEL = constants.MOUSE_WHEEL;

var MouseEvents = function () {
  function MouseEvents(handlersMap, mouseDown) {
    _classCallCheck(this, MouseEvents);

    this.handlersMap = handlersMap;
    this.mouseDown = mouseDown;
  }

  _createClass(MouseEvents, [{
    key: 'mouseEventListener',
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
      var handlers = this.handlersMap[MOUSE_WHEEL],
          mouseWheelDelta = mouseWheelDeltaFromEvent(event);

      handlers.forEach(function (handler) {
        return handler(mouseWheelDelta);
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
  }, {
    key: 'initialise',
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

      canvasDOMElement.addEventListener('mouseup', mouseUpEventListener);

      canvasDOMElement.addEventListener('mousedown', mouseDownEventListener);

      canvasDOMElement.addEventListener('mousemove', mouseMoveEventListener);

      canvasDOMElement.addEventListener('mousewheel', mouseWheelEventListener);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlersMap = {},
          mouseDown = false,
          ///
      mouseEvents = new MouseEvents(handlersMap, mouseDown);

      mouseEvents.initialise(canvas);

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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    offsetsUtilities = require('../utilities/offsets');

var add3 = vectorMaths.add3,
    scale2 = vectorMaths.scale2,
    reflect2 = vectorMaths.reflect2,
    scale3 = vectorMaths.scale3,
    relativeOffsetsFromAnglesAndDirections = offsetsUtilities.relativeOffsetsFromAnglesAndDirections,
    DELTA_SCALAR = constants.DELTA_SCALAR,
    INVERT_SCALAR = constants.INVERT_SCALAR,
    OFFSET_SCALAR = constants.OFFSET_SCALAR;

var Pan = function () {
  function Pan(offsets) {
    _classCallCheck(this, Pan);

    this.offsets = offsets;
  }

  _createClass(Pan, [{
    key: 'getOffsets',
    value: function getOffsets() {
      return this.offsets;
    }
  }, {
    key: 'updateOffsets',
    value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
      var angles = tilt.getAngles(),
          scaledMouseWheelDelta = mouseWheelDelta * DELTA_SCALAR,
          scaledReflectedRelativeMouseCoordinates = reflect2(scale2(relativeMouseCoordinates, OFFSET_SCALAR)),
          directions = [].concat(_toConsumableArray(scaledReflectedRelativeMouseCoordinates), [scaledMouseWheelDelta, 0]),
          relativeOffsets = relativeOffsetsFromAnglesAndDirections(angles, directions);

      this.offsets = add3(this.offsets, relativeOffsets);
    }
  }], [{
    key: 'fromInitialOffsets',
    value: function fromInitialOffsets(initialOffsets) {
      var offsets = initialOffsets,
          ///
      pan = new Pan(offsets);

      return pan;
    }
  }, {
    key: 'fromInitialPosition',
    value: function fromInitialPosition(initialPosition) {
      var offsets = scale3(initialPosition, INVERT_SCALAR),
          pan = new Pan(offsets);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;

},{"../constants":3,"../maths/vector":29,"../utilities/offsets":85}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = require('../constants'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    add3 = vectorMaths.add3,
    transform3 = vectorMaths.transform3,
    ANGLES_SCALAR = constants.ANGLES_SCALAR,
    DEGREES_TO_RADIANS_SCALAR = constants.DEGREES_TO_RADIANS_SCALAR;

var Tilt = function () {
  function Tilt(angles, flipped) {
    _classCallCheck(this, Tilt);

    this.angles = angles;
    this.flipped = flipped;
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
    key: 'updateAngles',
    value: function updateAngles(relativeMouseCoordinates) {
      var scalar = this.flipped ? +ANGLES_SCALAR : -ANGLES_SCALAR,
          matrix = [0, scalar, 0, -scalar, 0, 0, 0, 0, 0],
          relativeAngles = transform3([].concat(_toConsumableArray(relativeMouseCoordinates), [0]), matrix); ///

      this.angles = add3(this.angles, relativeAngles);
    }
  }], [{
    key: 'fromInitialAnglesAndFlipped',
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

},{"../constants":3,"../maths/vector":29,"../utilities/array":80}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyEvents = require('./keyEvents'),
    MouseEvents = require('./mouseEvents'),
    vectorMaths = require('../maths/vector');

var zero2 = vectorMaths.zero2,
    subtract2 = vectorMaths.subtract2;

var UserInput = function () {
  function UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
    _classCallCheck(this, UserInput);

    this.handlers = handlers;
    this.keyEvents = keyEvents;
    this.mouseEvents = mouseEvents;
    this.mouseCoordinates = mouseCoordinates;
    this.previousMouseCoordinates = previousMouseCoordinates;
  }

  _createClass(UserInput, [{
    key: 'mouseMoveHandler',
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
    key: 'mouseWheelHandler',
    value: function mouseWheelHandler(mouseWheelDelta, canvas) {
      var shiftKeyDown = this.keyEvents.isShiftKeyDown(),
          relativeMouseCoordinates = zero2();

      this.handlers.forEach(function (handler) {
        return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
      });
    }
  }, {
    key: 'addUserInputHandler',
    value: function addUserInputHandler(userInputHandler) {
      var handler = userInputHandler; ///

      this.handlers.push(handler);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseWheelHandler = this.mouseWheelHandler.bind(this);

      this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);

      this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var handlers = [],
          keyEvents = KeyEvents.fromNothing(canvas),
          mouseEvents = MouseEvents.fromNothing(canvas),
          mouseCoordinates = null,
          ///
      previousMouseCoordinates = null,
          ///
      userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);

      userInput.initialise(canvas);

      return userInput;
    }
  }]);

  return UserInput;
}();

module.exports = UserInput;

},{"../maths/vector":29,"./keyEvents":31,"./mouseEvents":32}],36:[function(require,module,exports){
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
    value: function updateDistance(mouseWheelDelta) {
      this.distance -= mouseWheelDelta * DELTA_SCALAR;

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
    matrixUtilities = require('../utilities/matrix');

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

},{"../maths/vector":29,"../utilities/matrix":83}],86:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImVzNi9jYW52YXMuanMiLCJlczYvY29uc3RhbnRzLmpzIiwiZXM2L2VsZW1lbnQuanMiLCJlczYvZWxlbWVudC9jYW1lcmEuanMiLCJlczYvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwiZXM2L2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsImVzNi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsImVzNi9lbGVtZW50L21hc2suanMiLCJlczYvZWxlbWVudC9wYXJ0LmpzIiwiZXM2L2VsZW1lbnQvc2NlbmUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9leGFtcGxlL2N1YmUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwiZXM2L2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCJlczYvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCJlczYvZXhhbXBsZS9tYXNraW5nLmpzIiwiZXM2L2V4YW1wbGUvcHlyYW1pZC5qcyIsImVzNi9leGFtcGxlL3NpbXBsZS5qcyIsImVzNi9leGFtcGxlL3RpbGluZy5qcyIsImVzNi9tYXRocy9tYXRyaXguanMiLCJlczYvbWF0aHMvdmVjdG9yLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvY29uZmlndXJhdGlvbi5qcyIsImVzNi9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsImVzNi9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvcGFuLmpzIiwiZXM2L21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsImVzNi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsImVzNi9taXNjZWxsYW5lb3VzL3pvb20uanMiLCJlczYvbWl4aW4vYmxlbmRpbmcuanMiLCJlczYvbWl4aW4vYnVmZmVyLmpzIiwiZXM2L21peGluL2NvbG91ci5qcyIsImVzNi9taXhpbi9kZXB0aC5qcyIsImVzNi9taXhpbi9tYXRyaXguanMiLCJlczYvbWl4aW4vcHJvZ3JhbS5qcyIsImVzNi9taXhpbi9zaGFkZXIuanMiLCJlczYvbWl4aW4vdGV4dHVyZS5qcyIsImVzNi9wcmltaXRpdmUvZWRnZS5qcyIsImVzNi9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwiZXM2L3ByaW1pdGl2ZS9mYWNldC5qcyIsImVzNi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCJlczYvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwiZXM2L3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCJlczYvcHJpbWl0aXZlL25vcm1hbC5qcyIsImVzNi9wcmltaXRpdmUvdmVydGV4LmpzIiwiZXM2L3ByaW1pdGl2ZS92ZXJ0aWNhbExpbmUuanMiLCJlczYvcmVhY3QuanMiLCJlczYvcmVuZGVyZXIuanMiLCJlczYvcmVuZGVyZXIvYnVmZmVycy5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsImVzNi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCJlczYvcmVuZGVyZXIvY29sb3VyLmpzIiwiZXM2L3JlbmRlcmVyL2RhdGEuanMiLCJlczYvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCJlczYvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCJlczYvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsImVzNi9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwiZXM2L3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsImVzNi9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCJlczYvcmVuZGVyZXIvdGV4dHVyZS5qcyIsImVzNi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwiZXM2L3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwiZXM2L3V0aWxpdGllcy9hbmdsZS5qcyIsImVzNi91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCJlczYvdXRpbGl0aWVzL2FycmF5LmpzIiwiZXM2L3V0aWxpdGllcy9mYWNldC5qcyIsImVzNi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwiZXM2L3V0aWxpdGllcy9tYXRyaXguanMiLCJlczYvdXRpbGl0aWVzL21pZFBvaW50LmpzIiwiZXM2L3V0aWxpdGllcy9vZmZzZXRzLmpzIiwiZXM2L3V0aWxpdGllcy9xdWF0ZXJuaW9uLmpzIiwiZXM2L3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsImVzNi91dGlsaXRpZXMvdGV4dHVyZS5qcyIsImVzNi91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwiZXM2L3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsImVzNi94Z2wuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvYWpheC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL2xvZy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL25vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9taXNjZWxsYW5lb3VzL29uRVRYLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvbm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvcHJvbXB0LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMvcmMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvcGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy90ZW1wbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9saWIveGdsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDYW52YXM6IHJlcXVpcmUoJy4vbGliL2NhbnZhcycpLFxuICBNYXNrOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L21hc2snKSxcbiAgUGFydDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9wYXJ0JyksXG4gIFNjZW5lOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NjZW5lJyksXG4gIENhbWVyYTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW1lcmEnKSxcbiAgR2FtaW5nQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9nYW1pbmcnKSxcbiAgRGVzaWduQ2FtZXJhOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbWVyYS9kZXNpZ24nKSxcbiAgQ2FudmFzRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jYW52YXMnKSxcbiAgQ29sb3VyZWRDYW52YXNFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpLFxuICBUZXh0dXJlZENhbnZhc0VsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlcHRoTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2RlcHRoJyksXG4gICAgICBjb2xvdXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY29sb3VyJyksXG4gICAgICBzaGFkZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2hhZGVyJyksXG4gICAgICBidWZmZXJNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYnVmZmVyJyksXG4gICAgICBtYXRyaXhNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbWF0cml4JyksXG4gICAgICBwcm9ncmFtTWl4aW4gPSByZXF1aXJlKCcuL21peGluL3Byb2dyYW0nKSxcbiAgICAgIHRleHR1cmVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vdGV4dHVyZScpLFxuICAgICAgYmxlbmRpbmdNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vYmxlbmRpbmcnKTtcblxuY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnY2FudmFzJykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBpbml0aWFsaXNlIHRoZSBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7IH1cblxuICBzZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7IHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsgfVxuXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkgeyB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTsgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgdGhpcy5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbik7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGluKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBaX0ZBUiA9IDEwMDAsXG4gICAgICBaX05FQVIgPSAxLFxuICAgICAgTU9VU0VfVVAgPSAnTU9VU0VfVVAnLFxuICAgICAgTU9VU0VfRE9XTiA9ICdNT1VTRV9ET1dOJyxcbiAgICAgIE1PVVNFX01PVkUgPSAnTU9VU0VfTU9WRScsXG4gICAgICBNT1VTRV9XSEVFTCA9ICdNT1VTRV9XSEVFTCcsXG4gICAgICBERUxUQV9TQ0FMQVIgPSAxLjI1LFxuICAgICAgSU5WRVJUX1NDQUxBUiA9IC0xLFxuICAgICAgQU5HTEVTX1NDQUxBUiA9IDAuMDEsXG4gICAgICBPRkZTRVRfU0NBTEFSID0gMC4yNSxcbiAgICAgIFNISUZUX0tFWV9DT0RFID0gMTYsXG4gICAgICBWRVJUSUNFU19MRU5HVEggPSAzLFxuICAgICAgTUlOSU1VTV9ESVNUQU5DRSA9IDEsXG4gICAgICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMSxcbiAgICAgIERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIgPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgRklFTERfT0ZfVklFVyA9IDQ1ICogREVHUkVFU19UT19SQURJQU5TX1NDQUxBUjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFpfRkFSLFxuICBaX05FQVIsXG4gIE1PVVNFX1VQLFxuICBNT1VTRV9ET1dOLFxuICBNT1VTRV9NT1ZFLFxuICBNT1VTRV9XSEVFTCxcbiAgREVMVEFfU0NBTEFSLFxuICBJTlZFUlRfU0NBTEFSLFxuICBBTkdMRVNfU0NBTEFSLFxuICBPRkZTRVRfU0NBTEFSLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgVkVSVElDRVNfTEVOR1RILFxuICBNSU5JTVVNX0RJU1RBTkNFLFxuICBERUZBVUxUX01BUkdJTl9PRl9FUlJPUixcbiAgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUixcbiAgRklFTERfT0ZfVklFV1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYW4sIHRpbHQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYW4gPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3BhbicpLFxuICAgICAgVGlsdCA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdCcpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvem9vbScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yLCB6ZXJvMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQsIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4IH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmNvbnN0IGRlZmF1bHRJbml0aWFsQW5nbGVzID0gemVybzIoKSxcbiAgICAgIGRlZmF1bHRJbml0aWFsT2Zmc2V0cyA9IHplcm8zKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbERpc3RhbmNlID0gNTtcblxuY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IocGFuLCB0aWx0LCB6b29tKSB7XG4gICAgc3VwZXIocGFuLCB0aWx0KTtcblxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYW4gPSB0aGlzLmdldFBhbigpLFxuICAgICAgICAgIHRpbHQgPSB0aGlzLmdldFRpbHQoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgY2FsbGJhY2sob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsT2Zmc2V0cyA9IGRlZmF1bHRJbml0aWFsT2Zmc2V0cywgaW5pdGlhbERpc3RhbmNlID0gZGVmYXVsdEluaXRpYWxEaXN0YW5jZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cyksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20pO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlc2lnbkNhbWVyYTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFuID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy9wYW4nKSxcbiAgICAgIFRpbHQgPSByZXF1aXJlKCcuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHQnKSxcblxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IHplcm8yIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLCByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLCBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLCBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0LCBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCB9ID0gbWF0cml4VXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0SW5pdGlhbEFuZ2xlcyA9IHplcm8yKCksXG4gICAgICBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uID0gWyAwLCAwLCA1IF07XG5cblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcblxuXG5cblxuXG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFuID0gdGhpcy5nZXRQYW4oKSxcbiAgICAgICAgICB0aWx0ID0gdGhpcy5nZXRUaWx0KCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZXMgPSB0aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSBwYW4uZ2V0T2Zmc2V0cygpLFxuXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICBjYWxsYmFjayhvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGhpZGRlbiA9IGhpZGRlbiB8fCB0aGlzLmhpZGRlbjsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhoaWRkZW4pKTtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBhbWVuZEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2spO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29sb3VyZWRGYWNldCA9IHJlcXVpcmUoJy4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZCcpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ2FudmFzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyk7XG5cbmNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5tYXAoKGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRDYW52YXNFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIEltYWdlc1RleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzJyksXG4gICAgICBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAnKTtcblxuY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIgJiYgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRleHR1cmVSZW5kZXJlciAmJiB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBQYXJ0ID0gcmVxdWlyZSgnLi4vZWxlbWVudC9wYXJ0JyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFVzZXJJbnB1dCA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0JyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHplcm8yIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcblxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQsICAvLy9cbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNhbGxiYWNrID0gcmVuZGVyOyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgZm9yRWFjaCh0aGlzLnBhcnRzLCAocGFydCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBwYXJ0c0xlbmd0aDtcblxuICAgICAgcGFydC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICAgIGRlZmVyKCgpID0+IHtcbiAgICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgZG9uZSwgdXBkYXRlLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBjYW1lcmEgPSBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS9jdWJlJyksXG4gICAgICBzaW1wbGVFeGFtcGxlID0gcmVxdWlyZSgnLi9leGFtcGxlL3NpbXBsZScpLFxuICAgICAgbWFza2luZ0V4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvbWFza2luZycpLFxuICAgICAgcHlyYW1pZEV4YW1wbGUgPSByZXF1aXJlKCcuL2V4YW1wbGUvcHlyYW1pZCcpLFxuICAgICAgdGlsaW5nRXhhbXBsZSA9IHJlcXVpcmUoJy4vZXhhbXBsZS90aWxpbmcnKTtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlICdzaW1wbGUnOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICdjdWJlJzpcbiAgICBjdWJlRXhhbXBsZSgpO1xuICAgIGJyZWFrO1xuXG4gIGNhc2UgJ21hc2tpbmcnOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG4gICAgYnJlYWs7XG5cbiAgY2FzZSAncHlyYW1pZCc6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcbiAgICBicmVhaztcblxuICBjYXNlICd0aWxpbmcnOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcbiAgICBicmVhaztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY3ViZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT5cblxuXHQ8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuXHRcdDxQYXJ0PlxuXHRcdFx0PEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cblx0XHQ8L1BhcnQ+XG5cdFx0PERlc2lnbkNhbWVyYSAvPlxuXHQ8L1NjZW5lPlxuXG47XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViZUV4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHhnbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7ICAvLy9cblxuY29uc3QgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSA9IHhnbDtcblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFNxdWFyZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZSA9IHJlcXVpcmUoJy4vZmFjZScpO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGYWNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWRlID0gcmVxdWlyZSgnLi9zaWRlJyk7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFB5cmFtaWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHR1cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuL3RleHR1cmVkVHJpYW5nbGUnKTtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpOyAgLy8vXG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRRdWFkcmFuZ2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpOyAgLy8vXG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSB4Z2w7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRUcmlhbmdsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY3ViZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9ID0geGdsO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpOyAvLy9cblxuY29uc3QgUHlyYW1pZCA9IHJlcXVpcmUoJy4vZWxlbWVudC9weXJhbWlkJyksXG4gICAgICBjb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+IHtcbiAgICBjb25zdCB7IGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBweXJhbWlkRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrKSB7XG4gIGNvbnN0IHsgaW1hZ2VNYXBVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgc3JjID0gaW1hZ2VNYXBVUkk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZFxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeGdsID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTsgLy8vXG5cbmNvbnN0IENvbG91cmVkU3F1YXJlID0gcmVxdWlyZSgnLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gPSB4Z2w7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+XG5cbiAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICA8UGFydD5cbiAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgIDwvUGFydD5cbiAgICA8RGVzaWduQ2FtZXJhIC8+XG4gIDwvU2NlbmU+XG5cbjtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW1wbGVFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB4Z2wgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLCAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gcmVxdWlyZSgnLi4vbWlzY2VsbGFuZW91cy9jb25maWd1cmF0aW9uJyksXG4gICAgICBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpLFxuICAgICAgVGV4dHVyZWRRdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSB9ID0geGdsLFxuICAgICAgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICBtYXNrID1cblxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuXG4gICAgICA7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcykgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT17J2Zsb29yYm9hcmRzLmpwZyd9IG1hc2s9e21hc2t9IC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT17J3BhdmluZy5qcGcnfSBtYXNrPXttYXNrfSAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGlsaW5nRXhhbXBsZTtcblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBzcmMgPSBgJHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YDtcblxuICAgIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eTMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5NCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLCAwLFxuICAgIDAsIDEsIDAsIDAsXG4gICAgMCwgMCwgMSwgMCxcbiAgICAwLCAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkzKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuICAgICAgICBhNCA9IG1hdHJpeEFbNF0sXG4gICAgICAgIGE1ID0gbWF0cml4QVs1XSxcbiAgICAgICAgYTYgPSBtYXRyaXhBWzZdLFxuICAgICAgICBhNyA9IG1hdHJpeEFbN10sXG4gICAgICAgIGE4ID0gbWF0cml4QVs4XSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM10sXG4gICAgICAgIGI0ID0gbWF0cml4Qls0XSxcbiAgICAgICAgYjUgPSBtYXRyaXhCWzVdLFxuICAgICAgICBiNiA9IG1hdHJpeEJbNl0sXG4gICAgICAgIGI3ID0gbWF0cml4Qls3XSxcbiAgICAgICAgYjggPSBtYXRyaXhCWzhdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseTQobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCAgYTAgPSBtYXRyaXhBWyAwXSxcbiAgICAgICAgIGExID0gbWF0cml4QVsgMV0sXG4gICAgICAgICBhMiA9IG1hdHJpeEFbIDJdLFxuICAgICAgICAgYTMgPSBtYXRyaXhBWyAzXSxcbiAgICAgICAgIGE0ID0gbWF0cml4QVsgNF0sXG4gICAgICAgICBhNSA9IG1hdHJpeEFbIDVdLFxuICAgICAgICAgYTYgPSBtYXRyaXhBWyA2XSxcbiAgICAgICAgIGE3ID0gbWF0cml4QVsgN10sXG4gICAgICAgICBhOCA9IG1hdHJpeEFbIDhdLFxuICAgICAgICAgYTkgPSBtYXRyaXhBWyA5XSxcbiAgICAgICAgYTEwID0gbWF0cml4QVsxMF0sXG4gICAgICAgIGExMSA9IG1hdHJpeEFbMTFdLFxuICAgICAgICBhMTIgPSBtYXRyaXhBWzEyXSxcbiAgICAgICAgYTEzID0gbWF0cml4QVsxM10sXG4gICAgICAgIGExNCA9IG1hdHJpeEFbMTRdLFxuICAgICAgICBhMTUgPSBtYXRyaXhBWzE1XSxcblxuICAgICAgICAgYjAgPSBtYXRyaXhCWyAwXSxcbiAgICAgICAgIGIxID0gbWF0cml4QlsgMV0sXG4gICAgICAgICBiMiA9IG1hdHJpeEJbIDJdLFxuICAgICAgICAgYjMgPSBtYXRyaXhCWyAzXSxcbiAgICAgICAgIGI0ID0gbWF0cml4QlsgNF0sXG4gICAgICAgICBiNSA9IG1hdHJpeEJbIDVdLFxuICAgICAgICAgYjYgPSBtYXRyaXhCWyA2XSxcbiAgICAgICAgIGI3ID0gbWF0cml4QlsgN10sXG4gICAgICAgICBiOCA9IG1hdHJpeEJbIDhdLFxuICAgICAgICAgYjkgPSBtYXRyaXhCWyA5XSxcbiAgICAgICAgYjEwID0gbWF0cml4QlsxMF0sXG4gICAgICAgIGIxMSA9IG1hdHJpeEJbMTFdLFxuICAgICAgICBiMTIgPSBtYXRyaXhCWzEyXSxcbiAgICAgICAgYjEzID0gbWF0cml4QlsxM10sXG4gICAgICAgIGIxNCA9IG1hdHJpeEJbMTRdLFxuICAgICAgICBiMTUgPSBtYXRyaXhCWzE1XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogIGIwICsgIGE0ICogIGIxICsgIGE4ICogIGIyICsgYTEyICogIGIzLFxuICAgIGExICogIGIwICsgIGE1ICogIGIxICsgIGE5ICogIGIyICsgYTEzICogIGIzLFxuICAgIGEyICogIGIwICsgIGE2ICogIGIxICsgYTEwICogIGIyICsgYTE0ICogIGIzLFxuICAgIGEzICogIGIwICsgIGE3ICogIGIxICsgYTExICogIGIyICsgYTE1ICogIGIzLFxuXG4gICAgYTAgKiAgYjQgKyAgYTQgKiAgYjUgKyAgYTggKiAgYjYgKyBhMTIgKiAgYjcsXG4gICAgYTEgKiAgYjQgKyAgYTUgKiAgYjUgKyAgYTkgKiAgYjYgKyBhMTMgKiAgYjcsXG4gICAgYTIgKiAgYjQgKyAgYTYgKiAgYjUgKyBhMTAgKiAgYjYgKyBhMTQgKiAgYjcsXG4gICAgYTMgKiAgYjQgKyAgYTcgKiAgYjUgKyBhMTEgKiAgYjYgKyBhMTUgKiAgYjcsXG5cbiAgICBhMCAqICBiOCArICBhNCAqICBiOSArICBhOCAqIGIxMCArIGExMiAqIGIxMSxcbiAgICBhMSAqICBiOCArICBhNSAqICBiOSArICBhOSAqIGIxMCArIGExMyAqIGIxMSxcbiAgICBhMiAqICBiOCArICBhNiAqICBiOSArIGExMCAqIGIxMCArIGExNCAqIGIxMSxcbiAgICBhMyAqICBiOCArICBhNyAqICBiOSArIGExMSAqIGIxMCArIGExNSAqIGIxMSxcblxuICAgIGEwICogYjEyICsgIGE0ICogYjEzICsgIGE4ICogYjE0ICsgYTEyICogYjE1LFxuICAgIGExICogYjEyICsgIGE1ICogYjEzICsgIGE5ICogYjE0ICsgYTEzICogYjE1LFxuICAgIGEyICogYjEyICsgIGE2ICogYjEzICsgYTEwICogYjE0ICsgYTE0ICogYjE1LFxuICAgIGEzICogYjEyICsgIGE3ICogYjEzICsgYTExICogYjE0ICsgYTE1ICogYjE1LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbMF0sIG0wMSA9IG1hdHJpeFsxXSwgbTAyID0gbWF0cml4WzJdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbM10sIG0xMSA9IG1hdHJpeFs0XSwgbTEyID0gbWF0cml4WzVdLFxuICAgICAgICBtMjAgPSBtYXRyaXhbNl0sIG0yMSA9IG1hdHJpeFs3XSwgbTIyID0gbWF0cml4WzhdLFxuXG4gICAgICAgIGIwMSA9ICBtMjIgKiBtMTEgLSBtMTIgKiBtMjEsXG4gICAgICAgIGIxMSA9IC1tMjIgKiBtMTAgKyBtMTIgKiBtMjAsXG4gICAgICAgIGIyMSA9ICBtMjEgKiBtMTAgLSBtMTEgKiBtMjAsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMDAgKiBiMDEgKyBtMDEgKiBiMTEgKyBtMDIgKiBiMjE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIGIwMSAvIGRldGVybWluYW50LCAoLW0yMiAqIG0wMSArIG0wMiAqIG0yMSkgLyBkZXRlcm1pbmFudCwgKCBtMTIgKiBtMDEgLSBtMDIgKiBtMTEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtMjIgKiBtMDAgLSBtMDIgKiBtMjApIC8gZGV0ZXJtaW5hbnQsICgtbTEyICogbTAwICsgbTAyICogbTEwKSAvIGRldGVybWluYW50LFxuICAgICAgYjIxIC8gZGV0ZXJtaW5hbnQsICgtbTIxICogbTAwICsgbTAxICogbTIwKSAvIGRldGVybWluYW50LCAoIG0xMSAqIG0wMCAtIG0wMSAqIG0xMCkgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7XG4gIGNvbnN0IG0wMCA9IG1hdHJpeFsgMF0sIG0wMSA9IG1hdHJpeFsgMV0sIG0wMiA9IG1hdHJpeFsgMl0sIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sIG0xMSA9IG1hdHJpeFsgNV0sIG0xMiA9IG1hdHJpeFsgNl0sIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sIG0yMSA9IG1hdHJpeFsgOV0sIG0yMiA9IG1hdHJpeFsxMF0sIG0yMyA9IG1hdHJpeFsxMV0sXG4gICAgICAgIG0zMCA9IG1hdHJpeFsxMl0sIG0zMSA9IG1hdHJpeFsxM10sIG0zMiA9IG1hdHJpeFsxNF0sIG0zMyA9IG1hdHJpeFsxNV0sXG5cbiAgICAgICAgYjAwID0gbTAwICogbTExIC0gbTAxICogbTEwLFxuICAgICAgICBiMDEgPSBtMDAgKiBtMTIgLSBtMDIgKiBtMTAsXG4gICAgICAgIGIwMiA9IG0wMCAqIG0xMyAtIG0wMyAqIG0xMCxcbiAgICAgICAgYjAzID0gbTAxICogbTEyIC0gbTAyICogbTExLFxuICAgICAgICBiMDQgPSBtMDEgKiBtMTMgLSBtMDMgKiBtMTEsXG4gICAgICAgIGIwNSA9IG0wMiAqIG0xMyAtIG0wMyAqIG0xMixcbiAgICAgICAgYjA2ID0gbTIwICogbTMxIC0gbTIxICogbTMwLFxuICAgICAgICBiMDcgPSBtMjAgKiBtMzIgLSBtMjIgKiBtMzAsXG4gICAgICAgIGIwOCA9IG0yMCAqIG0zMyAtIG0yMyAqIG0zMCxcbiAgICAgICAgYjA5ID0gbTIxICogbTMyIC0gbTIyICogbTMxLFxuICAgICAgICBiMTAgPSBtMjEgKiBtMzMgLSBtMjMgKiBtMzEsXG4gICAgICAgIGIxMSA9IG0yMiAqIG0zMyAtIG0yMyAqIG0zMixcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoZGV0ZXJtaW5hbnQgIT09IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgKG0xMSAqIGIxMSAtIG0xMiAqIGIxMCArIG0xMyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0wMiAqIGIxMCAtIG0wMSAqIGIxMSAtIG0wMyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0zMSAqIGIwNSAtIG0zMiAqIGIwNCArIG0zMyAqIGIwMykgLyBkZXRlcm1pbmFudCwgKG0yMiAqIGIwNCAtIG0yMSAqIGIwNSAtIG0yMyAqIGIwMykgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTIgKiBiMDggLSBtMTAgKiBiMTEgLSBtMTMgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMTEgLSBtMDIgKiBiMDggKyBtMDMgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMzIgKiBiMDIgLSBtMzAgKiBiMDUgLSBtMzMgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDUgLSBtMjIgKiBiMDIgKyBtMjMgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEwICogYjEwIC0gbTExICogYjA4ICsgbTEzICogYjA2KSAvIGRldGVybWluYW50LCAobTAxICogYjA4IC0gbTAwICogYjEwIC0gbTAzICogYjA2KSAvIGRldGVybWluYW50LCAobTMwICogYjA0IC0gbTMxICogYjAyICsgbTMzICogYjAwKSAvIGRldGVybWluYW50LCAobTIxICogYjAyIC0gbTIwICogYjA0IC0gbTIzICogYjAwKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMSAqIGIwNyAtIG0xMCAqIGIwOSAtIG0xMiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIwOSAtIG0wMSAqIGIwNyArIG0wMiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMSAqIGIwMSAtIG0zMCAqIGIwMyAtIG0zMiAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwMyAtIG0yMSAqIGIwMSArIG0yMiAqIGIwMCkgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zcG9zZTMobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbM10sIG1hdHJpeFs2XSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzddLFxuICAgIG1hdHJpeFsyXSwgbWF0cml4WzVdLCBtYXRyaXhbOF0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zcG9zZTQobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSwgbWF0cml4WyA0XSwgbWF0cml4WyA4XSwgbWF0cml4WzEyXSxcbiAgICBtYXRyaXhbIDFdLCBtYXRyaXhbIDVdLCBtYXRyaXhbIDldLCBtYXRyaXhbMTNdLFxuICAgIG1hdHJpeFsgMl0sIG1hdHJpeFsgNl0sIG1hdHJpeFsxMF0sIG1hdHJpeFsxNF0sXG4gICAgbWF0cml4WyAzXSwgbWF0cml4WyA3XSwgbWF0cml4WzExXSwgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHtcbiAgbGV0IHggPSB2ZWN0b3JbMF0sXG4gICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgeiA9IHZlY3RvclsyXTtcblxuICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgeCAvPSBsZW5ndGg7XG4gICAgeSAvPSBsZW5ndGg7XG4gICAgeiAvPSBsZW5ndGg7XG5cbiAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgdCA9IDEgLSBjLFxuXG4gICAgICAgICAgbTAwID0gbWF0cml4WyAwXSxcbiAgICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgICAgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgICAgbTEyID0gbWF0cml4WyA2XSxcbiAgICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgICAgbTIxID0gbWF0cml4WyA5XSxcbiAgICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICAgIG0yMyA9IG1hdHJpeFsxMV0sXG5cbiAgICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICBtMDAgKiBiMDAgKyBtMTAgKiBiMDEgKyBtMjAgKiBiMDIsIG0wMSAqIGIwMCArIG0xMSAqIGIwMSArIG0yMSAqIGIwMiwgbTAyICogYjAwICsgbTEyICogYjAxICsgbTIyICogYjAyLCBtMDMgKiBiMDAgKyBtMTMgKiBiMDEgKyBtMjMgKiBiMDIsXG4gICAgICBtMDAgKiBiMTAgKyBtMTAgKiBiMTEgKyBtMjAgKiBiMTIsIG0wMSAqIGIxMCArIG0xMSAqIGIxMSArIG0yMSAqIGIxMiwgbTAyICogYjEwICsgbTEyICogYjExICsgbTIyICogYjEyLCBtMDMgKiBiMTAgKyBtMTMgKiBiMTEgKyBtMjMgKiBiMTIsXG4gICAgICBtMDAgKiBiMjAgKyBtMTAgKiBiMjEgKyBtMjAgKiBiMjIsIG0wMSAqIGIyMCArIG0xMSAqIGIyMSArIG0yMSAqIGIyMiwgbTAyICogYjIwICsgbTEyICogYjIxICsgbTIyICogYjIyLCBtMDMgKiBiMjAgKyBtMTMgKiBiMjEgKyBtMjMgKiBiMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxMl0sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzEzXSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTRdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxNV0sXG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG5cbiAgICAgICAgbTAwID0gbWF0cml4WyAwXSxcbiAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgbTAyID0gbWF0cml4WyAyXSxcbiAgICAgICAgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgbTExID0gbWF0cml4WyA1XSxcbiAgICAgICAgbTEyID0gbWF0cml4WyA2XSxcbiAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSxcbiAgICAgICAgbTIxID0gbWF0cml4WyA5XSxcbiAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgbTIzID0gbWF0cml4WzExXTtcblxuICByZXR1cm4gKFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIzLFxuICAgIG0wMCAqIHggKyBtMTAgKiB5ICsgbTIwICogeiArIG1hdHJpeFsxMl0sIG0wMSAqIHggKyBtMTEgKiB5ICsgbTIxICogeiArIG1hdHJpeFsxM10sIG0wMiAqIHggKyBtMTIgKiB5ICsgbTIyICogeiArIG1hdHJpeFsxNF0sIG0wMyAqIHggKyBtMTMgKiB5ICsgbTIzICogeiArIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpZGVudGl0eTIsXG4gIGlkZW50aXR5MyxcbiAgaWRlbnRpdHk0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBpbnZlcnQyLFxuICBpbnZlcnQzLFxuICBpbnZlcnQ0LFxuICBzY2FsZTQsXG4gIHJvdGF0ZTQsXG4gIHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQsXG4gIHRyYW5zbGF0ZTQsXG4gIHBlcnNwZWN0aXZlNFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aDModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xufVxuXG5mdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSk7IH1cblxuZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdKTsgfVxuXG5mdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgYXggPSB2ZWN0b3JBWzBdLCBheSA9IHZlY3RvckFbMV0sIGF6ID0gdmVjdG9yQVsyXSxcbiAgICAgICAgYnggPSB2ZWN0b3JCWzBdLCBieSA9IHZlY3RvckJbMV0sIGJ6ID0gdmVjdG9yQlsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIGF5ICogYnogLSBheiAqIGJ5LFxuICAgIGF6ICogYnggLSBheCAqIGJ6LFxuICAgIGF4ICogYnkgLSBheSAqIGJ4LFxuXG4gIF0pXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuICAgICAgdyAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QyKHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG4gICAgdmVjdG9yWzJdICogLTEsXG4gICAgdmVjdG9yWzNdICogLTEsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzNdICogeSArIG1hdHJpeFs2XSAqIHosXG4gICAgbWF0cml4WzFdICogeCArIG1hdHJpeFs0XSAqIHkgKyBtYXRyaXhbN10gKiB6LFxuICAgIG1hdHJpeFsyXSAqIHggKyBtYXRyaXhbNV0gKiB5ICsgbWF0cml4WzhdICogeixcblxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fOyAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hJRlRfS0VZX0NPREUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAga2V5RXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLZXlFdmVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IE1PVVNFX1VQLCBNT1VTRV9ET1dOLCBNT1VTRV9NT1ZFLCBNT1VTRV9XSEVFTCB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24pKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfVVApO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRV9ET1dOKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VfTU9WRSk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfV0hFRUwgXSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZVdoZWVsRGVsdGEpKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1VQIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VfVVAgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX0RPV04gXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX01PVkUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFX1dIRUVMIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIG1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlRXZlbnRzO1xuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCxcbiAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG5cbiAgICAgICAgICB0b3AgLSBjbGllbnRZLFxuXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG9mZnNldHNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvb2Zmc2V0cycpO1xuXG5jb25zdCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIsIHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gPSBvZmZzZXRzVXRpbGl0aWVzLFxuICAgICAgeyBERUxUQV9TQ0FMQVIsIElOVkVSVF9TQ0FMQVIsIE9GRlNFVF9TQ0FMQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cykge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aWx0KSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVIsXG4gICAgICAgICAgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgT0ZGU0VUX1NDQUxBUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0cyhpbml0aWFsT2Zmc2V0cykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pIHtcbiAgICBjb25zdCBvZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX1NDQUxBUiksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzKTtcbiAgICBcbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhZGQzLCB0cmFuc2Zvcm0zIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgQU5HTEVTX1NDQUxBUiwgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBmbGlwcGVkKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5mbGlwcGVkID0gZmxpcHBlZDtcbiAgfVxuXG4gIGdldFhBbmdsZSgpIHtcbiAgICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGU7ICAvLy9cblxuICAgIHJldHVybiB4QW5nbGU7XG4gIH1cbiAgXG4gIGdldFlBbmdsZSgpIHtcbiAgICBjb25zdCBzZWNvbmRBbmdsZSA9IHNlY29uZCh0aGlzLmFuZ2xlcyksXG4gICAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGU7IC8vL1xuXG4gICAgcmV0dXJuIHlBbmdsZTtcbiAgfVxuXG4gIGdldFpBbmdsZSgpIHtcbiAgICBjb25zdCB6QW5nbGUgPSAwO1xuXG4gICAgcmV0dXJuIHpBbmdsZTtcbiAgfVxuICBcbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuICBcbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIGNvbnN0IHNjYWxhciA9IHRoaXMuZmxpcHBlZCA/XG4gICAgICAgICAgICAgICAgICAgICArQU5HTEVTX1NDQUxBUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1BTkdMRVNfU0NBTEFSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfU0NBTEFSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLURFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAwLCBzY2FsYXIsIDAsXG4gICAgICAgICAgICAtc2NhbGFyLCAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAwLCAgICAgIDAsIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sIG1hdHJpeCksIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGZsaXBwZWQpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaWx0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBLZXlFdmVudHMgPSByZXF1aXJlKCcuL2tleUV2ZW50cycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL21vdXNlRXZlbnRzJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpO1xuXG5jb25zdCB7IHplcm8yLCBzdWJ0cmFjdDIgfSA9IHZlY3Rvck1hdGhzO1xuXG5jbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXJJbnB1dDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVMVEFfU0NBTEFSLCBNSU5JTVVNX0RJU1RBTkNFIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKSB7XG4gICAgdGhpcy5kaXN0YW5jZSAtPSBtb3VzZVdoZWVsRGVsdGEgKiBERUxUQV9TQ0FMQVI7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgoTUlOSU1VTV9ESVNUQU5DRSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWm9vbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRSID0gMC4wLFxuICAgICAgZGVmYXVsdEcgPSAwLjAsXG4gICAgICBkZWZhdWx0QiA9IDAuMCxcbiAgICAgIGRlZmF1bHRBID0gMS4wO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gZGVmYXVsdFIsIGcgPSBkZWZhdWx0RywgYiA9IGRlZmF1bHRCLCBhID0gZGVmYXVsdEEpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHREZXB0aCA9IDEuMDtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IGRlZmF1bHREZXB0aCkgeyBcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlNYXRyaXhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5gKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKCdXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJylcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyk7XG5cbmNvbnN0IHsgc3VidHJhY3QzIH0gPSB2ZWN0b3JNYXRocztcblxuY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7XG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBFZGdlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIG1pZFBvaW50VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSA9IG1pZFBvaW50VXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4vZWRnZScpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4vdmVydGV4JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWlkUG9pbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWlkUG9pbnQnKSxcbiAgICAgIGludGVyc2VjdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24nKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHVzaCwgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9ID0gbWlkUG9pbnRVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uLCBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucywgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LCBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXggfSA9IGludGVyc2VjdGlvblV0aWxpdGllcztcblxuY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlcyh0aGlzLnZlcnRpY2VzKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0O1xuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90ZXh0dXJlJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBNYXNraW5nRWRnZSA9IHJlcXVpcmUoJy4vZWRnZS9tYXNraW5nJyksXG4gICAgICBWZXJ0aWNhbExpbmUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsTGluZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyBWRVJUSUNFU19MRU5HVEggfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0ZhY2V0O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKTtcblxuY29uc3QgeyByb3RhdGVQb3NpdGlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICByb3RhdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9yb3RhdGlvbicpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uJyksXG4gICAgICBpbnRlcnNlY3Rpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uJyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVQb3NpdGlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9ID0gaW50ZXJzZWN0aW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBWZXJ0aWNhbExpbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBmYWNldC5zcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpO1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cyk7XG4gICAgfSk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goKHNtYWxsZXJGYWNldCkgPT4gc21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsTGluZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgRnVuY3Rpb25DYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbicpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShmdW5jKHByb3BlcnRpZXMpKTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IEZ1bmN0aW9uQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuT2JqZWN0LmFzc2lnbihSZW5kZXJlciwge1xuICBjcmVhdGVQcm9ncmFtXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJCdWZmZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci9idWZmZXJzJyk7XG5cbmNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG5jbGFzcyBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckJ1ZmZlcnMsIHZlcnRleENvbG91cnNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2J1ZmZlcnMnKTtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIENvbG91clJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2RhdGEvY29sb3VyJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgQ29sb3VyUmVuZGVyZXJCdWZmZXJzID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXInKSxcbiAgICAgIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybScpLFxuICAgICAgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZsYXR0ZW4sIG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvZGF0YScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBtZXJnZSwgZmxhdHRlbiB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3JlbmRlcmVyL2RhdGEnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgbWVyZ2UsIGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVSZW5kZXJlckRhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSA9IGxpZ2h0aW5nU291cmNlLFxuICAgICAgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSA9IHBvc2l0aW9uU291cmNlO1xuXG5jbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dHJpYnV0ZUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZScpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKTtcblxuY29uc3QgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG5cbmNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vbG9jYXRpb25zL3VuaWZvcm0nKTtcblxuY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlJyksXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKTtcblxuY29uc3QgeyB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZTtcblxuY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybScpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpO1xuXG5jb25zdCB7IHNhbXBsZXJOYW1lIH0gPSBmcmFnbWVudFNoYWRlclNvdXJjZTtcblxuY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IHJlcXVpcmUoJy4uL3NvdXJjZS9saWdodGluZycpLFxuICAgICAgcG9zaXRpb25Tb3VyY2UgPSByZXF1aXJlKCcuLi9zb3VyY2UvcG9zaXRpb24nKTtcblxuY29uc3QgeyBub3JtYWxzTWF0cml4TmFtZSB9ID0gbGlnaHRpbmdTb3VyY2UsXG4gICAgICB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gPSBwb3NpdGlvblNvdXJjZTtcblxuY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUxvY2F0aW9ucztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gJ2FWZXJ0ZXhDb2xvdXInLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5vcm1hbHNNYXRyaXhOYW1lID0gJ3VOb3JtYWxzTWF0cml4JyxcbiAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleE5vcm1hbCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihsaWdodGluZ1NvdXJjZSwge1xuICBub3JtYWxzTWF0cml4TmFtZSxcbiAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlnaHRpbmdTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gJ3VPZmZzZXRzTWF0cml4JyxcbiAgICAgIHBvc2l0aW9uTWF0cml4TmFtZSA9ICd1UG9zaXRpb25NYXRyaXgnLFxuICAgICAgcm90YXRpb25zTWF0cml4TmFtZSA9ICd1Um90YXRpb25zTWF0cml4JyxcbiAgICAgIHByb2plY3Rpb25NYXRyaXhOYW1lID0gJ3VQZXJzcGVjdGl2ZU1hdHJpeCcsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSAnYVZlcnRleFBvc2l0aW9uJztcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihwb3NpdGlvblNvdXJjZSwge1xuICBvZmZzZXRzTWF0cml4TmFtZSxcbiAgcG9zaXRpb25NYXRyaXhOYW1lLFxuICByb3RhdGlvbnNNYXRyaXhOYW1lLFxuICBwcm9qZWN0aW9uTWF0cml4TmFtZSxcbiAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lXG59KTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25Tb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNhbXBsZXJOYW1lID0gJ3VTYW1wbGVyJyxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuT2JqZWN0LmFzc2lnbihmcmFnbWVudFNoYWRlclNvdXJjZSwge1xuICBzYW1wbGVyTmFtZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gcmVxdWlyZSgnLi4vLi4vc291cmNlL2xpZ2h0aW5nJyksXG4gICAgICBwb3NpdGlvblNvdXJjZSA9IHJlcXVpcmUoJy4uLy4uL3NvdXJjZS9wb3NpdGlvbicpO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSAnYVRleHR1cmVDb29yZGluYXRlJyxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHZlcnRleFNoYWRlclNvdXJjZSwge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlcicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckRhdGEgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9kYXRhL3RleHR1cmUnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlcicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZScpLFxuICAgICAgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0nKSxcbiAgICAgIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSByZXF1aXJlKCcuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZScpO1xuXG5jb25zdCB7IGNyZWF0ZVByb2dyYW0gfSA9IFJlbmRlcmVyO1xuXG5jbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi8uLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5jbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUsXG4gIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSA9IGNvbnN0YW50cztcblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAxLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSxcbiAgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm9cbn07XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3Nhcnk7XG5cbmZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5mdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduKGFycmF5VXRpbGl0aWVzLCB7XG4gIHBlcm11dGUsXG4gIGZsYXR0ZW4sXG4gIGd1YXJhbnRlZVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgVkVSVElDRVNfTEVOR1RIIH0gPSBjb25zdGFudHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSA9IHZlY3Rvck1hdGhzO1xuXG5mdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiBlZGdlLmNsb25lKCkpO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xvbmUoKSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSkge1xuICBjb25zdCBlZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsb25lRWRnZXMsXG4gIGNsb25lTm9ybWFsLFxuICBjbG9uZVZlcnRpY2VzLFxuICBjYWxjdWxhdGVFZGdlcyxcbiAgY2FsY3VsYXRlTm9ybWFsLFxuICBjYWxjdWxhdGVBcmVhXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb24sXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25cbn07XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgbWF0cml4TWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy9tYXRyaXgnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHNjYWxlMyB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgREVHUkVFU19UT19SQURJQU5TX1NDQUxBUiwgRklFTERfT0ZfVklFVywgWl9ORUFSLCBaX0ZBUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gPSBtYXRyaXhNYXRocztcblxuZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLFxuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSxcbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSxcbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuXG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcblxuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19TQ0FMQVIsXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5mdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsICAvLy9cbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgek5lYXIgPSBaX05FQVIsIC8vL1xuICAgICAgICB6RmFyID0gWl9GQVIsIC8vL1xuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2NhbGVNYXRyaXhGcm9tU2NhbGUsXG4gIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLFxuICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zLFxuICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWN0b3InKTtcblxuY29uc3QgeyBhZGQzLCBzY2FsZTMgfSA9IHZlY3Rvck1hdGhzO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyB8fCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzOyAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLFxuICBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lLFxuICBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlc1xufTtcblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0cml4Jyk7XG5cbmNvbnN0IHsgcmVmbGVjdDMsIHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIH0gPSBtYXRyaXhVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucykge1xuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByZWZsZWN0ZWRBbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKHJlZmxlY3RlZEFuZ2xlcywgcmV2ZXJzZU9yZGVyKSxcbiAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpLnNsaWNlKDAsIDMpOyAvLy9cblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgYW5nbGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYW5nbGUnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSA9IGFuZ2xlVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSkge1xuICBjb25zdCBtYXNraW5nRWRnZUV4dGVudCA9IG1hc2tpbmdFZGdlLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnQgPSBub3JtYWxpc2UzKG1hc2tpbmdFZGdlRXh0ZW50KSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyA9IHVuaXRNYXNraW5nRWRnZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IChhbmdsZU9mUm90YXRpb25TaW5lID4gMCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2NhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLWNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbixcbiAgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sXG4gIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbixcbiAgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLFxuICBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uXG59O1xuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IGExID0gcXVhdGVybmlvbkFbMF0sXG4gICAgICAgIGIxID0gcXVhdGVybmlvbkFbMV0sXG4gICAgICAgIGMxID0gcXVhdGVybmlvbkFbMl0sXG4gICAgICAgIGQxID0gcXVhdGVybmlvbkFbM10sXG4gICAgICAgIGEyID0gcXVhdGVybmlvbkJbMF0sXG4gICAgICAgIGIyID0gcXVhdGVybmlvbkJbMV0sXG4gICAgICAgIGMyID0gcXVhdGVybmlvbkJbMl0sXG4gICAgICAgIGQyID0gcXVhdGVybmlvbkJbM10sXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZVBvc2l0aW9uXG59O1xuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0cml4TWF0aHMgPSByZXF1aXJlKCcuLi9tYXRocy9tYXRyaXgnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgaW52ZXJ0MiwgaW52ZXJ0MyB9ID0gbWF0cml4TWF0aHMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzLFxuICAgICAgeyBhZGQyLCBtdWx0aXBseTIsIHRyYW5zZm9ybTIsIHRyYW5zZm9ybTMgfSA9IHZlY3Rvck1hdGhzO1xuXG5mdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KSB7XG4gIGNvbnN0IHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKSk7IC8vL1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3QgdGVtcFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHRlbXBWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyxcbiAgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsXG4gIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBtYXRyaXhNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL21hdHJpeCcpLFxuICAgICAgbWF0cml4VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL21hdHJpeCcpO1xuXG5jb25zdCB7IG11bHRpcGx5NCB9ID0gbWF0cml4TWF0aHMsXG4gICAgICB7IHRyYW5zZm9ybTQgfSA9IHZlY3Rvck1hdGhzLFxuICAgICAgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbikge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBvc2VUcmFuc2Zvcm1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3RhdGVWZXJ0aWNlcyxcbiAgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGhVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9wYXRoJyksXG4gIGFycmF5VXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXJyYXknKSxcbiAgdGVtcGxhdGVVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy90ZW1wbGF0ZScpLFxuICBmaWxlU3lzdGVtVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvZmlsZVN5c3RlbScpLFxuICBhc3luY2hyb25vdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9hc3luY2hyb25vdXMnKSxcbiAgbWlzY2VsbGFuZW91c1V0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL21pc2NlbGxhbmVvdXMnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5mdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBhcnJheTIpIHtcbiAgaWYgKCEoYXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgYXJyYXkyID0gW2FycmF5Ml07XG4gIH1cblxuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gYXJyYXkyLmxlbmd0aCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIHRoaXJkOiB0aGlyZCxcbiAgZm91cnRoOiBmb3VydGgsXG4gIGZpZnRoOiBmaWZ0aCxcbiAgZmlmdGhMYXN0OiBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3Q6IGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdDogdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0OiBzZWNvbmRMYXN0LFxuICBsYXN0OiBsYXN0LFxuICB0YWlsOiB0YWlsLFxuICBwdXNoOiBwdXNoLFxuICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICBjb25jYXQ6IGNvbmNhdCxcbiAgY2xlYXI6IGNsZWFyLFxuICBjb3B5OiBjb3B5LFxuICBtZXJnZTogbWVyZ2UsXG4gIHNwbGljZTogc3BsaWNlLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZmluZDogZmluZCxcbiAgcHJ1bmU6IHBydW5lLFxuICBwYXRjaDogcGF0Y2gsXG4gIGF1Z21lbnQ6IGF1Z21lbnQsXG4gIHNlcGFyYXRlOiBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lOiBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWU6IGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnk6IGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5OiBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNGb3JFYWNoOiBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrLCBpbmRleCkge1xyXG4gICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdoaWxzdDogd2hpbHN0LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc2VxdWVuY2U6IHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHk6IGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseTogcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoOiBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiBkb2VzRW50cnlFeGlzdChhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgZW50cnlFeGlzdHMgPSBmcy5leGlzdHNTeW5jKGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBkb2VzRmlsZUV4aXN0KGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGRvZXNFbnRyeUV4aXN0KGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGRvZXNEaXJlY3RvcnlFeGlzdChhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZG9lc0VudHJ5RXhpc3QoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGFic29sdXRlUGF0aCksXG4gICAgICBlbnRyeURpcmVjdG9yeSA9IHN0YXQuaXNEaXJlY3RvcnkoKSxcbiAgICAgIGVudHJ5RmlsZSA9ICFlbnRyeURpcmVjdG9yeTtcblxuICByZXR1cm4gZW50cnlGaWxlO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLmFwcGVuZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5hbWVGaWxlKG9sZEFic29sdXRlRmlsZVBhdGgsIG5ld0Fic29sdXRlRmlsZVBhdGgpIHtcbiAgZnMucmVuYW1lU3luYyhvbGRBYnNvbHV0ZUZpbGVQYXRoLCBuZXdBYnNvbHV0ZUZpbGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdHMoYWJzb2x1dGVGaWxlUGF0aCkge1xuICByZXR1cm4gZnMuc3RhdFN5bmMoYWJzb2x1dGVGaWxlUGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb2VzRW50cnlFeGlzdDogZG9lc0VudHJ5RXhpc3QsXG4gIGRvZXNGaWxlRXhpc3Q6IGRvZXNGaWxlRXhpc3QsXG4gIGRvZXNEaXJlY3RvcnlFeGlzdDogZG9lc0RpcmVjdG9yeUV4aXN0LFxuICBpc0VudHJ5RmlsZTogaXNFbnRyeUZpbGUsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGUsXG4gIGFwcGVuZFRvRmlsZTogYXBwZW5kVG9GaWxlLFxuICByZW5hbWVGaWxlOiByZW5hbWVGaWxlLFxuICBnZXRTdGF0czogZ2V0U3RhdHNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJjID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL3JjJyksXG4gICAgICBsb2cgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvbG9nJyksXG4gICAgICBhamF4ID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL2FqYXgnKSxcbiAgICAgIG9uRVRYID0gcmVxdWlyZSgnLi9taXNjZWxsYW5lb3VzL29uRVRYJyksXG4gICAgICBwcm9tcHQgPSByZXF1aXJlKCcuL21pc2NlbGxhbmVvdXMvcHJvbXB0Jyk7XG5cbmNvbnN0IHsgZ2V0LCBwb3N0IH0gPSBhamF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nOiBsb2csXG4gIHJjOiByYyxcbiAgZ2V0OiBnZXQsXG4gIHBvc3Q6IHBvc3QsXG4gIG9uRVRYOiBvbkVUWCxcbiAgcHJvbXB0OiBwcm9tcHRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEdFVF9NRVRIT0QgPSAnR0VUJyxcbiAgICAgIFBPU1RfTUVUSE9EID0gJ1BPU1QnO1xuXG5mdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IHVuZGVmaW5lZDtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBqc29uLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gcGFyYW1ldGVyczsgLy8vXG4gICAgcGFyYW1ldGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6IGdldCxcbiAgcG9zdDogcG9zdFxufTtcblxuZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycyksXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBpZiAoc3RhdHVzID09IDIwMCkge1xuICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gcmVzcG9uc2VUZXh0LCAvLy9cbiAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgY2FsbGJhY2soanNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG5cbiAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KTtcbn1cblxuZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzKGhvc3QsIHVyaSwgcGFyYW1ldGVycykge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMocGFyYW1ldGVycyksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gJycpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fS8ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9LyR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/ICcmJyA6ICcnO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCAnJyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBwYXRoVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3BhdGgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb25jYXRlbmF0ZVBhdGhzIH0gPSBwYXRoVXRpbGl0aWVzLFxuICAgICAgeyBkb2VzRmlsZUV4aXN0LCByZWFkRmlsZSwgYXBwZW5kVG9GaWxlLCByZW5hbWVGaWxlLCBnZXRTdGF0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY29uc3QgVFJBQ0UgPSAnVFJBQ0UnLFxuICAgICAgREVCVUcgPSAnREVCVUcnLFxuICAgICAgSU5GTyA9ICdJTkZPJyxcbiAgICAgIFdBUk5JTkcgPSAnV0FSTklORycsXG4gICAgICBFUlJPUiA9ICdFUlJPUicsXG4gICAgICBGQVRBTCA9ICdGQVRBTCc7XG5cbmxldCBsb2dMZXZlbCA9IFdBUk5JTkcsXG4gICAgbG9nRmlsZUJhc2VOYW1lID0gJ2RlZmF1bHQnLFxuICAgIGxvZ0RpcmVjdG9yeVBhdGggPSBudWxsO1xuXG5mdW5jdGlvbiBsb2cobWVzc2FnZSwgbGV2ZWwgPSAnJykge1xuICBsZXQgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggPSAyO1xuXG4gIGNvbnN0IGxldmVscyA9IFtcbiAgICBUUkFDRSxcbiAgICBERUJVRyxcbiAgICBJTkZPLFxuICAgIFdBUk5JTkcsXG4gICAgRVJST1IsXG4gICAgRkFUQUxcbiAgXTtcblxuICBpZiAobGV2ZWwpIHsgLy8vXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVscy5pbmRleE9mKGxldmVsKSxcbiAgICAgICAgICBsb2dMZXZlbEluZGV4ID0gbGV2ZWxzLmluZGV4T2YobG9nTGV2ZWwpO1xuXG4gICAgaWYgKGxldmVsSW5kZXggPCBsb2dMZXZlbEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVydGluZW50U3RhY2tNZXNzYWdlSW5kZXggKz0gMTtcblxuICAgIGxldmVsID0gYCR7bGV2ZWx9IGA7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCksXG4gICAgICAgIHsgc3RhY2sgfSA9IGVycm9yLFxuICAgICAgICBzdGFja01lc3NhZ2VzID0gc3RhY2suc3BsaXQoL1xcclxcbnxcXG4vKSxcbiAgICAgICAgcGVydGluZW50U3RhY2tNZXNzYWdlID0gc3RhY2tNZXNzYWdlc1twZXJ0aW5lbnRTdGFja01lc3NhZ2VJbmRleF0sXG4gICAgICAgIGN1cnJlbnREYXRlQW5kVGltZVN0cmluZyA9IGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpLFxuICAgICAgICBmaWxlUGF0aCA9IGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShwZXJ0aW5lbnRTdGFja01lc3NhZ2UpLFxuICAgICAgICBsaW5lTnVtYmVyID0gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2UocGVydGluZW50U3RhY2tNZXNzYWdlKSxcbiAgICAgICAgbG9nTWVzc2FnZSA9IGAke2xldmVsfSR7Y3VycmVudERhdGVBbmRUaW1lU3RyaW5nfSAke2ZpbGVQYXRofSgke2xpbmVOdW1iZXJ9KSAke21lc3NhZ2V9YDtcblxuICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcblxuICBpZiAobG9nRGlyZWN0b3J5UGF0aCAhPT0gbnVsbCkge1xuICAgIHJvbGxPdmVyTG9nRmlsZSgpO1xuXG4gICAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICAgIGxvZ0ZpbGVDb250ZW50ID0gYCR7bG9nTWVzc2FnZX1cXG5gO1xuXG4gICAgYXBwZW5kVG9GaWxlKGxvZ0ZpbGVQYXRoLCBsb2dGaWxlQ29udGVudCk7XG4gIH1cblxuICByZXR1cm4gbG9nTWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gdHJhY2UobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFRSQUNFKTsgfVxuXG5mdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7IHJldHVybiBsb2cobWVzc2FnZSwgREVCVUcpOyB9XG5cbmZ1bmN0aW9uIGluZm8obWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIElORk8pOyB9XG5cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIFdBUk5JTkcpOyB9XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGxvZyhtZXNzYWdlLCBFUlJPUik7IH1cblxuZnVuY3Rpb24gZmF0YWwobWVzc2FnZSkgeyByZXR1cm4gbG9nKG1lc3NhZ2UsIEZBVEFMKTsgfVxuXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkgeyBsb2dMZXZlbCA9IGxldmVsOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0ZpbGVCYXNlTmFtZShmaWxlQmFzZU5hbWUpIHsgbG9nRmlsZUJhc2VOYW1lID0gZmlsZUJhc2VOYW1lOyB9XG5cbmZ1bmN0aW9uIHNldExvZ0RpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkgeyBsb2dEaXJlY3RvcnlQYXRoID0gZGlyZWN0b3J5UGF0aDsgfVxuXG5mdW5jdGlvbiBnZXRMb2dGaWxlQ29udGVudCgpIHtcbiAgY29uc3QgbG9nRmlsZVBhdGggPSBnZXRMb2dGaWxlUGF0aCgpLFxuICAgICAgICBsb2dGaWxlQ29udGVudCA9IHJlYWRGaWxlKGxvZ0ZpbGVQYXRoKTtcblxuICByZXR1cm4gbG9nRmlsZUNvbnRlbnQ7XG59XG5cbk9iamVjdC5hc3NpZ24obG9nLCB7XG4gIFRSQUNFOiBUUkFDRSxcbiAgREVCVUc6IERFQlVHLFxuICBJTkZPOiBJTkZPLFxuICBXQVJOSU5HOiBXQVJOSU5HLFxuICBFUlJPUjogRVJST1IsXG4gIEZBVEFMOiBGQVRBTCxcbiAgdHJhY2U6IHRyYWNlLFxuICBkZWJ1ZzogZGVidWcsXG4gIGluZm86IGluZm8sXG4gIHdhcm5pbmc6IHdhcm5pbmcsXG4gIGVycm9yOiBlcnJvcixcbiAgZmF0YWw6IGZhdGFsLFxuICBzZXRMb2dMZXZlbDogc2V0TG9nTGV2ZWwsXG4gIHNldExvZ0ZpbGVCYXNlTmFtZTogc2V0TG9nRmlsZUJhc2VOYW1lLFxuICBzZXRMb2dEaXJlY3RvcnlQYXRoOiBzZXRMb2dEaXJlY3RvcnlQYXRoLFxuICBnZXRMb2dGaWxlQ29udGVudDogZ2V0TG9nRmlsZUNvbnRlbnRcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZztcblxuZnVuY3Rpb24gZ2V0TG9nRmlsZVBhdGgoKSB7XG4gIGNvbnN0IGxvZ0ZpbGVOYW1lID0gYCR7bG9nRmlsZUJhc2VOYW1lfS5sb2dgLFxuICAgICAgICBsb2dGaWxlUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMobG9nRGlyZWN0b3J5UGF0aCwgbG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiBsb2dGaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCkge1xuICBjb25zdCBjdXJyZW50RGF0ZVN0cmluZyA9IGdldEN1cnJlbnREYXRlU3RyaW5nKCksXG4gICAgICAgIHJvbGxlZE92ZXJMb2dGaWxlTmFtZSA9IGAke2xvZ0ZpbGVCYXNlTmFtZX0uJHtjdXJyZW50RGF0ZVN0cmluZ30ubG9nYCxcbiAgICAgICAgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhsb2dEaXJlY3RvcnlQYXRoLCByb2xsZWRPdmVyTG9nRmlsZU5hbWUpO1xuXG4gIHJldHVybiByb2xsZWRPdmVyTG9nRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVTdGF0cyA9IGdldFN0YXRzKGxvZ0ZpbGVQYXRoKSxcbiAgICAgICAgeyBtdGltZSB9ID0gbG9nRmlsZVN0YXRzLFxuICAgICAgICBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IG5ldyBEYXRlKG10aW1lKTsgIC8vL1xuXG4gIHJldHVybiBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZTtcbn1cblxuZnVuY3Rpb24gcm9sbE92ZXJMb2dGaWxlKCkge1xuICBjb25zdCBsb2dGaWxlUGF0aCA9IGdldExvZ0ZpbGVQYXRoKCksXG4gICAgICAgIGxvZ0ZpbGVFeGlzdHMgPSBkb2VzRmlsZUV4aXN0KGxvZ0ZpbGVQYXRoKTtcblxuICBpZiAoIWxvZ0ZpbGVFeGlzdHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSA9IGdldExvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlKCksXG4gICAgICAgIGxvZ0ZpbGVMYXN0TW9kaWZpZWREYXRlQ3VycmVudERhdGUgPSBpc0RhdGVDdXJyZW50RGF0ZShsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZSk7XG5cbiAgaWYgKCFsb2dGaWxlTGFzdE1vZGlmaWVkRGF0ZUN1cnJlbnREYXRlKSB7XG4gICAgY29uc3Qgcm9sbGVkT3ZlckxvZ0ZpbGVQYXRoID0gZ2V0Um9sbGVkT3ZlckxvZ0ZpbGVQYXRoKCk7XG5cbiAgICByZW5hbWVGaWxlKGxvZ0ZpbGVQYXRoLCByb2xsZWRPdmVyTG9nRmlsZVBhdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZUN1cnJlbnREYXRlKGRhdGUpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgY3VycmVudERhdGVTdHJpbmcgPSBjdXJyZW50RGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgZGF0ZUN1cnJlbnREYXRlID0gKGRhdGVTdHJpbmcgPT09IGN1cnJlbnREYXRlU3RyaW5nKTtcblxuICByZXR1cm4gZGF0ZUN1cnJlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmcgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlQW5kVGltZVN0cmluZygpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAgIGRheSA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldERhdGUoKSwgMiksICAvLy9cbiAgICAgICAgbW9udGggPSBwYWRTdGFydFdpdGhaZXJvZXMoZGF0ZS5nZXRNb250aCgpICsgMSwgMiksIC8vL1xuICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICBob3VycyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldEhvdXJzKCksIDIpLFxuICAgICAgICBtaW51dGVzID0gcGFkU3RhcnRXaXRoWmVyb2VzKGRhdGUuZ2V0TWludXRlcygpLCAyKSxcbiAgICAgICAgc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldFNlY29uZHMoKSwgMiksXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IHBhZFN0YXJ0V2l0aFplcm9lcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSxcbiAgICAgICAgY3VycmVudERhdGVBbmRUaW1lU3RyaW5nID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfS4ke21pbGxpc2Vjb25kc31gO1xuXG4gIHJldHVybiBjdXJyZW50RGF0ZUFuZFRpbWVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGZpbGVQYXRoRnJvbVN0YWNrTWVzc2FnZShzdGFja01lc3NhZ2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHN0YWNrTWVzc2FnZS5tYXRjaCgvKFxcLy4rKVxcOlxcZCtcXDpcXGQrLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gc2Vjb25kTWF0Y2gsICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoID0gcGF0aC5yZXNvbHZlKCcuJyksICAvLy9cbiAgICAgICAgY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoTGVuZ3RoID0gY3VycmVudFdvcmtpbmdEaXJlY3RvcnlQYXRoLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBjdXJyZW50V29ya2luZ0RpcmVjdG9yeVBhdGhMZW5ndGggKyAxLCAgLy8vXG4gICAgICAgIGZpbGVQYXRoID0gYWJzb2x1dGVGaWxlUGF0aC5zdWJzdHIoc3RhcnQpO1xuXG4gIHJldHVybiBmaWxlUGF0aDtcbn1cblxuZnVuY3Rpb24gbGluZU51bWJlckZyb21TdGFja01lc3NhZ2Uoc3RhY2tNZXNzYWdlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdGFja01lc3NhZ2UubWF0Y2goL1xcOihcXGQrKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgbGluZU51bWJlciA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gbGluZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnRXaXRoWmVyb2VzKHN0cmluZywgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHBhZFN0cmluZyA9ICcwJyxcbiAgICAgICAgcGFkZGVkU3RyaW5nID0gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZyk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCB0YXJnZXRMZW5ndGgsIHBhZFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YXJnZXRMZW5ndGg7IGluZGV4KyspIHtcbiAgICBwYWRkaW5nICs9IHBhZFN0cmluZztcbiAgfVxuXG4gIGNvbnN0IHBhZGRlZFN0cmluZyA9IGAke3BhZGRpbmd9JHtzdHJpbmd9YC5zdWJzdHIoLXRhcmdldExlbmd0aCk7XG5cbiAgcmV0dXJuIHBhZGRlZFN0cmluZztcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFVFhfQ0hBUkFDVEVSID0gJ1xcdTAwMDMnO1xuXG5mdW5jdGlvbiBvbkVUWChoYW5kbGVyKSB7XG4gIGNvbnN0IHsgc3RkaW4gfSA9IHByb2Nlc3MsXG4gICAgICAgIHsgc2V0UmF3TW9kZSB9ID0gc3RkaW47XG5cbiAgaWYgKHNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9ICd1dGY4JztcblxuICAgIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBzdGRpbi5hZGRMaXN0ZW5lcignZGF0YScsIGRhdGFIYW5kbGVyKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb25FVFg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9uRVRYID0gcmVxdWlyZSgnLi9vbkVUWCcpLFxuICAgICAgYXN5bmNocm9ub3VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91cycpO1xuXG5jb25zdCB7IHN0ZGluLCBzdGRvdXQgfSA9IHByb2Nlc3MsXG4gICAgICB7IHdoaWxzdCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyBleGl0IH0gPSBwcm9jZXNzO1xuXG5jb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpLFxuICAgICAgTElORV9GRUVEX0NIQVJBQ1RFUiA9ICdcXG4nLFxuICAgICAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9ICdcXHInO1xuXG5mdW5jdGlvbiBwcm9tcHQob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgdmFsdWUgPSBudWxsLFxuICAgICAgICB7IGF0dGVtcHRzID0gMyB9ID0gb3B0aW9ucyxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfTtcblxuICB3aGlsc3QoYXR0ZW1wdCwgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY29udGV4dDtcbiAgICBcbiAgICBjYWxsYmFjayh2YWx1ZSk7XG4gIH0sIGNvbnRleHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb21wdDtcblxuZnVuY3Rpb24gYXR0ZW1wdChuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGxldCB7IGF0dGVtcHRzIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IHRlcm1pbmF0ZSA9IChhdHRlbXB0cy0tID09PSAwKTtcbiAgXG4gIGlmICh0ZXJtaW5hdGUpIHtcbiAgICBkb25lKCk7XG4gICAgXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyBvcHRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICB7IGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YWxpZGF0aW9uUGF0dGVybixcbiAgICAgICAgICB2YWxpZGF0aW9uRnVuY3Rpb24sXG4gICAgICAgICAgZW5jb2RpbmcgPSAndXRmOCcsXG4gICAgICAgICAgaGlkZGVuID0gZmFsc2UgfSA9IG9wdGlvbnM7XG5cbiAgaGlkZGVuID8gXG4gICAgaGlkZGVuSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykgOlxuICAgICAgdmlzaWJsZUlucHV0KGRlc2NyaXB0aW9uLCBlbmNvZGluZywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHZhbHVlKSB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0aW9uRnVuY3Rpb24gPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GdW5jdGlvbih2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25QYXR0ZXJuLnRlc3QodmFsdWUpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgYXR0ZW1wdHM6IGF0dGVtcHRzXG4gICAgICB9KTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2aXNpYmxlSW5wdXQoZGVzY3JpcHRpb24sIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICBjb25zdCByYXdNb2RlID0gZmFsc2U7XG5cbiAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBzdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBzdGRpbi5yZXN1bWUoKTtcblxuICBsZXQgdmFsdWU7XG5cbiAgY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIHZhbHVlID0gY2h1bmsudHJpbSgpO1xuXG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBsaXN0ZW5lcik7XG5cbiAgICBzdGRpbi5wYXVzZSgpO1xuXG4gICAgY2FsbGJhY2sodmFsdWUpO1xuICB9O1xuXG4gIHN0ZGluLm9uKCdkYXRhJywgbGlzdGVuZXIpO1xufVxuXG5mdW5jdGlvbiBoaWRkZW5JbnB1dChkZXNjcmlwdGlvbiwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJhd01vZGUgPSB0cnVlLFxuICAgICAgICBvZmZFVFggPSBvbkVUWChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXkMnKTtcblxuICAgICAgICAgIGV4aXQoKTtcbiAgICAgICAgfSk7XG5cbiAgc3Rkb3V0LndyaXRlKGRlc2NyaXB0aW9uKTtcblxuICBzdGRpbi5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG5cbiAgc3RkaW4uc2V0UmF3TW9kZShyYXdNb2RlKTtcblxuICBzdGRpbi5yZXN1bWUoKTtcblxuICBsZXQgdmFsdWUgPSAnJztcblxuICBjb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gY2h1bmsudG9TdHJpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3dpdGNoIChjaGFyYWN0ZXIpIHtcbiAgICAgIGNhc2UgTElORV9GRUVEX0NIQVJBQ1RFUiA6XG4gICAgICBjYXNlIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgOlxuICAgICAgICBzdGRvdXQud3JpdGUoTElORV9GRUVEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgc3RkaW4ucGF1c2UoKTtcblxuICAgICAgICBvZmZFVFgoKTtcblxuICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICB2YWx1ZSA9IHRydW5jYXRlKHZhbHVlKTtcblxuICAgICAgICBzdGRvdXQuY2xlYXJMaW5lKCk7XG5cbiAgICAgICAgc3Rkb3V0LmN1cnNvclRvKDApO1xuXG4gICAgICAgIHN0ZG91dC53cml0ZShkZXNjcmlwdGlvbik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBzdGRpbi5vbignZGF0YScsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGUodmFsdWUpIHsgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcmVhZEZpbGUsIHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxubGV0IHJjQmFzZUV4dGVuc2lvbiA9ICcnO1xuXG5mdW5jdGlvbiByYyhlbnZpcm9ubWVudE5hbWVPckFyZ3YgPSBudWxsKSB7XG4gIGxldCBlbnZpcm9ubWVudCxcbiAgICAgIGVudmlyb25tZW50TmFtZTtcblxuICBpZiAoZW52aXJvbm1lbnROYW1lT3JBcmd2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25zdCBhcmd2ID0gZW52aXJvbm1lbnROYW1lT3JBcmd2O1xuXG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lRnJvbUFyZ3YoYXJndik7XG4gIH0gZWxzZSB7XG4gICAgZW52aXJvbm1lbnROYW1lID0gZW52aXJvbm1lbnROYW1lT3JBcmd2O1xuICB9XG5cbiAgY29uc3QganNvbiA9IHJlYWRSQ0ZpbGUoKSxcbiAgICAgICAgeyBlbnZpcm9ubWVudHMgfSA9IGpzb247XG5cbiAgaWYgKGVudmlyb25tZW50TmFtZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0RW52aXJvbm1lbnQgPSBmaXJzdChlbnZpcm9ubWVudHMpO1xuXG4gICAgZW52aXJvbm1lbnQgPSBmaXJzdEVudmlyb25tZW50OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50cy5maW5kKGZ1bmN0aW9uKGVudmlyb25tZW50KSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IGVudmlyb25tZW50LFxuICAgICAgICAgICAgZm91bmQgPSAobmFtZSA9PT0gZW52aXJvbm1lbnROYW1lKTtcblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGVudmlyb25tZW50Lm5hbWU7XG5cbiAgT2JqZWN0LmFzc2lnbihyYywgZW52aXJvbm1lbnQpO1xuXG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn1cblxuZnVuY3Rpb24gcmVhZFJDRmlsZSgpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBgLi8uJHtyY0Jhc2VFeHRlbnNpb259cmNgLFxuICAgICAgICBhYnNvbHV0ZUZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKSxcbiAgICAgICAgZmlsZUNvbnRlbnQgPSByZWFkRmlsZShhYnNvbHV0ZUZpbGVQYXRoKSxcbiAgICAgICAganNvbiA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuXG4gIHJldHVybiBqc29uOyAgICAgIFxufVxuXG5mdW5jdGlvbiB3cml0ZVJDRmlsZShqc29uKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gYC4vLiR7cmNCYXNlRXh0ZW5zaW9ufXJjYCxcbiAgICAgICAgYWJzb2x1dGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCksXG4gICAgICAgIGZpbGVDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgYFxcdGApO1xuXG4gIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJDRmlsZShhZGRlZFByb3BwZXJ0aWVzLCAuLi5kZWxldGVkUHJvcGVydHlOYW1lcykge1xuICBsZXQganNvbiA9IHJlYWRSQ0ZpbGUoKTtcblxuICBpZiAoYWRkZWRQcm9wcGVydGllcykge1xuICAgIE9iamVjdC5hc3NpZ24oanNvbiwgYWRkZWRQcm9wcGVydGllcyk7XG4gIH1cblxuICBkZWxldGVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGRlbGV0ZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICBkZWxldGUganNvbltkZWxldGVkUHJvcGVydHlOYW1lXTtcbiAgfSk7XG5cbiAgd3JpdGVSQ0ZpbGUoanNvbik7ICAgICAgXG59XG5cbmZ1bmN0aW9uIHNldFJDQmFzZUV4dGVuc2lvbihiYXNlRXh0ZW5zaW9uKSB7IHJjQmFzZUV4dGVuc2lvbiA9IGJhc2VFeHRlbnNpb247IH1cblxuT2JqZWN0LmFzc2lnbihyYywge1xuICByZWFkUkNGaWxlOiByZWFkUkNGaWxlLFxuICB3cml0ZVJDRmlsZTogd3JpdGVSQ0ZpbGUsXG4gIHVwZGF0ZVJDRmlsZTogdXBkYXRlUkNGaWxlLFxuICBzZXRSQ0Jhc2VFeHRlbnNpb246IHNldFJDQmFzZUV4dGVuc2lvblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmM7XG5cbmZ1bmN0aW9uIGVudmlyb25tZW50TmFtZUZyb21Bcmd2KGFyZ3YpIHtcbiAgbGV0IGVudmlyb25tZW50TmFtZSA9IG51bGw7XG5cbiAgYXJndi5maW5kKGZ1bmN0aW9uKGFyZ3VtZW50KSB7ICAvLy9cbiAgICBjb25zdCBtYXRjaGVzID0gYXJndW1lbnQubWF0Y2goL1xcLVxcLWVudmlyb25tZW50PSguKykvKSxcbiAgICAgICAgICBmb3VuZCA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIGVudmlyb25tZW50TmFtZSA9IHNlY29uZE1hdGNoO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVudmlyb25tZW50TmFtZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzKSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncyksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKCdcXG4nKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgZnVuY3Rpb24obWF0Y2gsIHRva2VuKSB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZUZpbGU6IHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50OiBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZTogcGFyc2VMaW5lXG59O1xuXG5mdW5jdGlvbiBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpO1xuXG4gICAgcmV0dXJuIHBhcnNlZExpbmU7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lcztcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbih0b2tlbiwgYXJncykge1xuICBsZXQgcGFyc2VkVG9rZW4gPSAnJztcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXX0=
